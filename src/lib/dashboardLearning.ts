import type { Course, Enrollment, Lesson, ProgressSummary } from '@/types/domain';

export interface DashboardCourse {
  course: Course;
  enrollment: Enrollment;
  progress: ProgressSummary;
  nextLesson: Lesson | null;
}

export interface DashboardHistoryCandidate {
  lessonId: string;
  lessonSlug: string;
  lessonTitle: string;
  lessonOrder: number;
  courseSlug: string;
  courseTitle: string;
  courseAvailable: boolean;
  enrolledAt: string;
}

export interface DashboardHistoryItem extends DashboardHistoryCandidate {
  completedAt: string | null;
}

export function buildDashboardHistory(
  candidates: DashboardHistoryCandidate[],
  recorded: { lessonId: string; completedAt: string }[],
  limit: number = 6
): DashboardHistoryItem[] {
  const recordedAt = new Map(recorded.map((item) => [item.lessonId, item.completedAt]));
  return candidates
    .map((item) => ({ ...item, completedAt: recordedAt.get(item.lessonId) ?? null }))
    .sort((a, b) => {
      if (a.completedAt && b.completedAt) return Date.parse(b.completedAt) - Date.parse(a.completedAt);
      if (a.completedAt) return -1;
      if (b.completedAt) return 1;
      return Date.parse(b.enrolledAt) - Date.parse(a.enrolledAt) || b.lessonOrder - a.lessonOrder;
    })
    .slice(0, Math.max(0, limit));
}

export function getNextDashboardLesson(lessons: Lesson[], progress: ProgressSummary): Lesson | null {
  const completed = new Set(progress.completedLessons);
  return lessons.find((lesson) =>
    lesson.status === 'published' && lesson.isRequired && !completed.has(lesson.id)
  ) ?? null;
}

// Enrollments arrive newest first. Prefer a course already in progress, then a newly joined course.
export function chooseContinueCourse(courses: DashboardCourse[]): DashboardCourse | null {
  return courses.find((item) => item.nextLesson && item.progress.completedCount > 0)
    ?? courses.find((item) => item.nextLesson)
    ?? null;
}
