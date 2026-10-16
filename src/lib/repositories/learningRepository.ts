import { redis } from '@/lib/redis';
import { Enrollment, QuizAttempt } from '@/types/domain';

export class LearningRepository {
  private static enrollmentKey(userId: string, courseId: string): string {
    return `kl:v1:enroll:${userId}:${courseId}`;
  }

  private static userEnrollmentsIndex(userId: string): string {
    return `kl:v1:user:${userId}:enrollments`;
  }

  private static courseStudentsIndex(courseId: string): string {
    return `kl:v1:course:${courseId}:students`;
  }

  private static completionKey(userId: string, courseId: string, version: number = 1): string {
    return `kl:v1:complete:${userId}:${courseId}:v${version}`;
  }

  private static lessonActivityIndex(userId: string): string {
    return `kl:v1:user:${userId}:lesson-activity`;
  }

  private static quizResultKey(userId: string, courseId: string, version: number = 1): string {
    return `kl:v1:quizresult:${userId}:${courseId}:v${version}`;
  }

  static async enroll(userId: string, courseId: string, curriculumVersion: number = 1): Promise<Enrollment> {
    const enrollKey = this.enrollmentKey(userId, courseId);
    const existing = await redis.get<string | Enrollment>(enrollKey);

    if (existing) {
      return typeof existing === 'string' ? JSON.parse(existing) : existing;
    }

    const now = new Date().toISOString();
    const enrollment: Enrollment = {
      userId,
      courseId,
      curriculumVersion,
      enrolledAt: now,
      status: 'active',
    };

    const score = new Date(now).getTime();
    const pipeline = redis.pipeline();
    pipeline.set(enrollKey, JSON.stringify(enrollment));
    pipeline.zadd(this.userEnrollmentsIndex(userId), { score, member: courseId });
    pipeline.sadd(this.courseStudentsIndex(courseId), userId);
    pipeline.incr('kl:v1:stats:total_enrollments');
    await pipeline.exec();

    return enrollment;
  }

  static async isEnrolled(userId: string, courseId: string): Promise<boolean> {
    const enrollKey = this.enrollmentKey(userId, courseId);
    const res = await redis.exists(enrollKey);
    return res === 1;
  }

  static async getUserEnrollments(userId: string): Promise<Enrollment[]> {
    const courseIds = await redis.zrange<string[]>(this.userEnrollmentsIndex(userId), 0, -1, { rev: true });
    if (!courseIds || courseIds.length === 0) return [];

    const pipeline = redis.pipeline();
    for (const cid of courseIds) {
      pipeline.get(this.enrollmentKey(userId, cid));
    }
    const results = await pipeline.exec();

    const list: Enrollment[] = [];
    for (const r of results) {
      if (r) {
        list.push(typeof r === 'string' ? JSON.parse(r) : (r as Enrollment));
      }
    }
    return list;
  }

  static async completeLesson(
    userId: string,
    courseId: string,
    lessonId: string,
    version: number = 1
  ): Promise<{ alreadyCompleted: boolean }> {
    const key = this.completionKey(userId, courseId, version);
    // Keep the first completion and its timestamp atomic. Old SET members remain undated.
    const added = await redis.eval<[string, number], number>(
      `local added = redis.call('SADD', KEYS[1], ARGV[1])
       if added == 1 then redis.call('ZADD', KEYS[2], ARGV[2], ARGV[1]) end
       return added`,
      [key, this.lessonActivityIndex(userId)],
      [lessonId, Date.now()]
    );
    return { alreadyCompleted: added === 0 };
  }

  static async getRecentLessonActivity(
    userId: string,
    limit: number = 6
  ): Promise<{ lessonId: string; completedAt: string }[]> {
    const key = this.lessonActivityIndex(userId);
    const boundedLimit = Math.max(1, Math.min(10, Math.floor(limit)));
    const lessonIds = await redis.zrange<string[]>(key, 0, boundedLimit - 1, { rev: true });
    if (lessonIds.length === 0) return [];

    const pipeline = redis.pipeline();
    for (const lessonId of lessonIds) pipeline.zscore(key, lessonId);
    const scores = await pipeline.exec();
    return lessonIds.flatMap((lessonId, index) => {
      const score = scores[index] as number | null;
      return score === null ? [] : [{ lessonId, completedAt: new Date(score).toISOString() }];
    });
  }

  static async getCompletedLessons(
    userId: string,
    courseId: string,
    version: number = 1
  ): Promise<string[]> {
    const key = this.completionKey(userId, courseId, version);
    const members = await redis.smembers<string[]>(key);
    return members || [];
  }

  static async saveQuizAttempt(
    userId: string,
    courseId: string,
    score: number,
    passed: boolean,
    version: number = 1
  ): Promise<QuizAttempt> {
    const key = this.quizResultKey(userId, courseId, version);
    const existing = await redis.get<string | QuizAttempt>(key);
    let attemptsCount = 1;

    if (existing) {
      const parsed = typeof existing === 'string' ? JSON.parse(existing) : existing;
      attemptsCount = (parsed.attemptsCount || 1) + 1;
      // keep best score
      if (parsed.score > score) {
        score = parsed.score;
      }
    }

    const record: QuizAttempt = {
      userId,
      courseId,
      score,
      passed,
      attemptsCount,
      updatedAt: new Date().toISOString(),
    };

    await redis.set(key, JSON.stringify(record));
    return record;
  }

  static async getQuizAttempt(
    userId: string,
    courseId: string,
    version: number = 1
  ): Promise<QuizAttempt | null> {
    const key = this.quizResultKey(userId, courseId, version);
    const raw = await redis.get<string | QuizAttempt>(key);
    if (!raw) return null;
    return typeof raw === 'string' ? JSON.parse(raw) : raw;
  }
}
