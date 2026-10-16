import { requireUser } from '@/lib/auth/guard';
import { CourseRepository } from '@/lib/repositories/courseRepository';
import { LearningRepository } from '@/lib/repositories/learningRepository';
import { LearningService } from '@/lib/services/learningService';
import { CertificateRepository } from '@/lib/repositories/certificateRepository';
import { buildDashboardHistory, chooseContinueCourse, getNextDashboardLesson } from '@/lib/dashboardLearning';
import { StudentDashboardView } from '@/components/dashboard/StudentDashboardView';

export default async function StudentDashboardPage() {
  const user = await requireUser();

  const [enrollments, publishedCourses, certificates, recentActivity] = await Promise.all([
    LearningRepository.getUserEnrollments(user.id),
    CourseRepository.listPublishedCourses(),
    CertificateRepository.getUserCertificates(user.id),
    LearningRepository.getRecentLessonActivity(user.id),
  ]);

  const publishedById = new Map(publishedCourses.map((course) => [course.id, course]));
  const enrolledCourseProgress = await Promise.all(enrollments.map(async (enrollment) => {
    const course = publishedById.get(enrollment.courseId)
      ?? await CourseRepository.findCourseById(enrollment.courseId);
    if (!course) return null;
    const [lessons, completedLessonIds, progress] = await Promise.all([
      CourseRepository.getLessonsForCourse(course.id),
      LearningRepository.getCompletedLessons(user.id, course.id),
      course.status === 'published' ? LearningService.getProgress(user.id, course.id) : Promise.resolve(null),
    ]);
    const completed = new Set(completedLessonIds);
    const historyCandidates = lessons
      .filter((lesson) => lesson.status === 'published' && completed.has(lesson.id))
      .map((lesson) => ({
        lessonId: lesson.id,
        lessonSlug: lesson.slug,
        lessonTitle: lesson.title,
        lessonOrder: lesson.order,
        courseSlug: course.slug,
        courseTitle: course.title,
        courseAvailable: course.status === 'published',
        enrolledAt: enrollment.enrolledAt,
      }));
    const dashboardCourse = progress
      ? { course, enrollment, progress, nextLesson: getNextDashboardLesson(lessons, progress) }
      : null;
    return { dashboardCourse, historyCandidates };
  }));

  const courses = enrolledCourseProgress.flatMap((item) => item?.dashboardCourse ? [item.dashboardCourse] : []);
  const history = buildDashboardHistory(
    enrolledCourseProgress.flatMap((item) => item?.historyCandidates ?? []),
    recentActivity
  );
  const enrolledIds = new Set(enrollments.map((enrollment) => enrollment.courseId));
  const recommendations = publishedCourses
    .filter((course) => !enrolledIds.has(course.id) && (course.lessonsCount ?? 0) > 0)
    .slice(0, 2);

  return (
    <StudentDashboardView
      user={user}
      courses={courses}
      continueCourse={chooseContinueCourse(courses)}
      recommendations={recommendations}
      publishedCount={publishedCourses.length}
      certificateCount={certificates.filter((certificate) => !certificate.revokedAt).length}
      history={history}
    />
  );
}
