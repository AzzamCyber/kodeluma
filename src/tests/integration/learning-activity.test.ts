import { describe, expect, it } from 'vitest';
import { redis } from '@/lib/redis';
import { LearningRepository } from '@/lib/repositories/learningRepository';
import { generateId } from '@/lib/utils/id';

describe('lesson completion activity', () => {
  it('records a permanent first-completion timestamp without changing it on retry', async () => {
    const userId = generateId('activity-test');
    const courseId = generateId('course-test');
    const lessonId = generateId('lesson-test');
    const completionKey = `kl:v1:complete:${userId}:${courseId}:v1`;
    const activityKey = `kl:v1:user:${userId}:lesson-activity`;

    try {
      expect((await LearningRepository.completeLesson(userId, courseId, lessonId)).alreadyCompleted).toBe(false);
      const first = await LearningRepository.getRecentLessonActivity(userId);
      expect(first).toHaveLength(1);
      expect(first[0].lessonId).toBe(lessonId);
      expect(Date.parse(first[0].completedAt)).not.toBeNaN();

      expect((await LearningRepository.completeLesson(userId, courseId, lessonId)).alreadyCompleted).toBe(true);
      expect(await LearningRepository.getRecentLessonActivity(userId)).toEqual(first);
      expect(await redis.ttl(activityKey)).toBe(-1);
    } finally {
      await redis.del(completionKey, activityKey);
    }
  });
});
