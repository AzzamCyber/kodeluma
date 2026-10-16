import 'server-only';
import { redis } from '@/lib/redis';
import { AdminStats } from '@/types/domain';

export class ReportService {
  static async getOverview(): Promise<AdminStats> {
    const [totalUsers, totalCourses, totalEnrollments, totalCerts, pendingSubs] =
      await Promise.all([
        redis.zcard('kl:v1:users:created'),
        redis.zcard('kl:v1:courses:published'),
        redis.get<number>('kl:v1:stats:total_enrollments'),
        redis.get<number>('kl:v1:stats:total_certificates'),
        redis.zcard('kl:v1:submissions:pending'),
      ]);

    return {
      totalUsers: totalUsers || 0,
      totalStudents: totalUsers || 0,
      totalCoursesPublished: totalCourses || 0,
      totalEnrollments: Number(totalEnrollments) || 0,
      totalCompletions: Number(totalCerts) || 0,
      pendingSubmissionsCount: pendingSubs || 0,
    };
  }
}
