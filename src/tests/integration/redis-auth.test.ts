import { describe, it, expect } from 'vitest';
import { UserRepository } from '@/lib/repositories/userRepository';
import { LearningRepository } from '@/lib/repositories/learningRepository';
import { CertificateRepository } from '@/lib/repositories/certificateRepository';
import { hashPassword, verifyPassword } from '@/lib/utils/crypto';
import { generateId, generateVerifyCode } from '@/lib/utils/id';
import { User, Certificate } from '@/types/domain';
import { redis } from '@/lib/redis';

// Load .env.local
if (process.loadEnvFile) {
  process.loadEnvFile('.env.local');
}

describe('Redis Repositories & Business Rules Integration', () => {
  const testId = generateId('test');
  const testEmail = `test_${testId}@kodeluma.test`;
  const testPassword = 'StrongPassword123!';

  it('hashes and verifies passwords correctly with Argon2id', async () => {
    const hashed = await hashPassword(testPassword);
    expect(hashed).toMatch(/^\$argon2id\$/);

    const match = await verifyPassword(testPassword, hashed);
    expect(match).toBe(true);

    const wrongMatch = await verifyPassword('WrongPassword!', hashed);
    expect(wrongMatch).toBe(false);
  });

  it('creates user in Redis and prevents duplicate email registration atomically', async () => {
    const hashed = await hashPassword(testPassword);
    const user: User = {
      id: testId,
      displayName: 'Test Learner',
      email: testEmail,
      passwordHash: hashed,
      role: 'student',
      status: 'active',
      createdAt: new Date().toISOString(),
    };

    const saved = await UserRepository.create(user);
    expect(saved.id).toBe(testId);

    // Finding user by email
    const found = await UserRepository.findByEmail(testEmail);
    expect(found).toBeDefined();
    expect(found?.email).toBe(testEmail);

    // Attempting duplicate registration must fail
    await expect(UserRepository.create(user)).rejects.toThrow('EMAIL_EXISTS');
  });

  it('handles lesson completion idempotently with Redis SADD', async () => {
    const courseId = 'course-html-01';
    const lessonId = 'lesson-html-01';
    try {
      const first = await LearningRepository.completeLesson(testId, courseId, lessonId);
      expect(first.alreadyCompleted).toBe(false);

      const second = await LearningRepository.completeLesson(testId, courseId, lessonId);
      expect(second.alreadyCompleted).toBe(true);

      const completed = await LearningRepository.getCompletedLessons(testId, courseId);
      expect(completed).toContain(lessonId);
    } finally {
      await redis.del(`kl:v1:complete:${testId}:${courseId}:v1`, `kl:v1:user:${testId}:lesson-activity`);
    }
  });

  it('issues and verifies certificates with unique codes', async () => {
    const verifyCode = generateVerifyCode();
    const cert: Certificate = {
      id: generateId('crt_test'),
      verifyCode,
      userId: testId,
      courseId: 'course-html-01',
      curriculumVersion: 1,
      recipientName: 'Test Learner',
      courseTitle: 'HTML Dasar',
      issuedAt: new Date().toISOString(),
      revokedAt: null,
    };

    const result = await CertificateRepository.issue(cert);
    expect(result.certificate.verifyCode).toBe(verifyCode);
    expect(result.alreadyIssued).toBe(false);

    // Second issuance attempt for same user & course returns existing (idempotent)
    const duplicate = await CertificateRepository.issue(cert);
    expect(duplicate.alreadyIssued).toBe(true);

    // Public verify lookup by verifyCode
    const found = await CertificateRepository.findByVerifyCode(verifyCode);
    expect(found).toBeDefined();
    expect(found?.recipientName).toBe('Test Learner');
  });
});
