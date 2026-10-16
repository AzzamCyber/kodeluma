import { describe, expect, it } from 'vitest';
import { buildDashboardHistory, chooseContinueCourse, getNextDashboardLesson, type DashboardCourse, type DashboardHistoryCandidate } from '@/lib/dashboardLearning';
import type { Course, Enrollment, Lesson, ProgressSummary } from '@/types/domain';

const course = { id: 'course-1', slug: 'css-fundamental', title: 'CSS Fundamental' } as Course;
const enrollment = { userId: 'learner', courseId: course.id, enrolledAt: '2026-10-17T00:00:00Z' } as Enrollment;
const lessons = [
  { id: 'one', slug: 'dasar-css', status: 'published', isRequired: true },
  { id: 'draft', slug: 'draft-css', status: 'draft', isRequired: true },
  { id: 'two', slug: 'layout-css', status: 'published', isRequired: true },
] as Lesson[];

function progress(completedLessons: string[]): ProgressSummary {
  return {
    courseId: course.id,
    completedLessons,
    completedCount: completedLessons.length,
    totalRequired: 2,
    percentage: completedLessons.length * 50,
    isEligibleForCertificate: false,
  };
}

describe('dashboard learning destination', () => {
  it('opens the first unfinished published lesson rather than a fixed slug or draft', () => {
    expect(getNextDashboardLesson(lessons, progress(['one']))?.slug).toBe('layout-css');
    expect(getNextDashboardLesson(lessons, progress(['one', 'two']))).toBeNull();
  });

  it('continues an in-progress course before a new or finished enrollment', () => {
    const fresh: DashboardCourse = { course, enrollment, progress: progress([]), nextLesson: lessons[0] };
    const inProgress: DashboardCourse = { course, enrollment, progress: progress(['one']), nextLesson: lessons[2] };
    const finished: DashboardCourse = { course, enrollment, progress: progress(['one', 'two']), nextLesson: null };
    expect(chooseContinueCourse([fresh, finished, inProgress])).toBe(inProgress);
    expect(chooseContinueCourse([finished])).toBeNull();
  });
});

describe('dashboard learning history', () => {
  it('shows timestamped completions first and keeps older completions undated', () => {
    const candidates: DashboardHistoryCandidate[] = [
      { lessonId: 'old', lessonSlug: 'dasar', lessonTitle: 'Dasar', lessonOrder: 1, courseSlug: 'html', courseTitle: 'HTML', courseAvailable: false, enrolledAt: '2026-01-01' },
      { lessonId: 'new', lessonSlug: 'struktur', lessonTitle: 'Struktur', lessonOrder: 2, courseSlug: 'html', courseTitle: 'HTML', courseAvailable: true, enrolledAt: '2026-01-01' },
    ];
    const result = buildDashboardHistory(candidates, [{ lessonId: 'new', completedAt: '2026-10-17T03:00:00.000Z' }]);
    expect(result.map((item) => item.lessonId)).toEqual(['new', 'old']);
    expect(result[0].completedAt).toBe('2026-10-17T03:00:00.000Z');
    expect(result[1].completedAt).toBeNull();
    expect(result[1].courseAvailable).toBe(false);
  });
});
