import 'server-only';
import { CertificateRepository } from '@/lib/repositories/certificateRepository';
import { CourseRepository } from '@/lib/repositories/courseRepository';
import { UserRepository } from '@/lib/repositories/userRepository';
import { LearningService } from './learningService';
import { Certificate } from '@/types/domain';
import { generateId, generateVerifyCode } from '@/lib/utils/id';

export class CertificateService {
  static async issueCertificate(userId: string, courseId: string): Promise<Certificate> {
    const course = await CourseRepository.findCourseById(courseId);
    if (!course) {
      throw new Error('COURSE_NOT_FOUND: Kursus tidak ditemukan.');
    }

    const user = await UserRepository.findById(userId);
    if (!user) {
      throw new Error('USER_NOT_FOUND: Data pengguna tidak ditemukan.');
    }

    // Verify graduation criteria on server
    const progress = await LearningService.getProgress(userId, courseId);
    if (progress.percentage < 100) {
      throw new Error(
        `REQUIREMENTS_NOT_MET: Anda baru menyelesaikan ${progress.percentage}% materi. Selesaikan seluruh materi wajib untuk membuka sertifikat.`
      );
    }

    if (!progress.isEligibleForCertificate) {
      throw new Error(
        'REQUIREMENTS_NOT_MET: Anda harus lulus kuis evaluasi dengan skor minimal 70% untuk membuka sertifikat.'
      );
    }

    const verifyCode = generateVerifyCode();
    const certId = generateId('crt');

    const newCert: Certificate = {
      id: certId,
      verifyCode,
      userId,
      courseId,
      curriculumVersion: course.curriculumVersion,
      recipientName: user.displayName,
      courseTitle: course.title,
      issuedAt: new Date().toISOString(),
      revokedAt: null,
    };

    const result = await CertificateRepository.issue(newCert);
    return result.certificate;
  }

  static async verify(code: string): Promise<{
    isValid: boolean;
    certificate?: {
      recipientName: string;
      courseTitle: string;
      issuedAt: string;
      verifyCode: string;
      revokedAt: string | null;
      revokeReason?: string;
    };
  }> {
    const cert = await CertificateRepository.findByVerifyCode(code);
    if (!cert) {
      return { isValid: false };
    }

    return {
      isValid: cert.revokedAt === null,
      certificate: {
        recipientName: cert.recipientName,
        courseTitle: cert.courseTitle,
        issuedAt: cert.issuedAt,
        verifyCode: cert.verifyCode,
        revokedAt: cert.revokedAt,
        revokeReason: cert.revokeReason,
      },
    };
  }

  static async getUserCertificates(userId: string): Promise<Certificate[]> {
    return await CertificateRepository.getUserCertificates(userId);
  }

  static async revokeCertificate(adminId: string, certId: string, reason: string): Promise<Certificate> {
    return await CertificateRepository.revoke(certId, reason);
  }
}
