import { describe, it, expect } from 'vitest';
import { MOCK_COURSES, MOCK_LESSONS, MOCK_QUIZZES, MOCK_PROJECTS } from '@/lib/mockData';

describe('Domain Models & Curriculum Seed Tests', () => {
  it('should have at least 3 published courses for MVP', () => {
    expect(MOCK_COURSES.length).toBeGreaterThanOrEqual(3);
    for (const course of MOCK_COURSES) {
      expect(course.status).toBe('published');
      expect(['pemula', 'menengah']).toContain(course.level);
      expect(course.slug).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it('each course should have at least 3 structured lessons', () => {
    for (const course of MOCK_COURSES) {
      const lessons = MOCK_LESSONS[course.id];
      expect(lessons).toBeDefined();
      expect(lessons.length).toBeGreaterThanOrEqual(3);

      for (const lesson of lessons) {
        expect(lesson.title).toBeTruthy();
        expect(lesson.bodyMarkdown.length).toBeGreaterThan(100);
        expect(lesson.isRequired).toBe(true);
        expect(lesson.status).toBe('published');
      }
    }
  });

  it('each course should have an evaluation quiz with valid questions and correct answers', () => {
    for (const course of MOCK_COURSES) {
      const quiz = MOCK_QUIZZES[course.id];
      expect(quiz).toBeDefined();
      expect(quiz.passScorePercent).toBe(70);
      expect(quiz.questions.length).toBeGreaterThanOrEqual(3);

      for (const q of quiz.questions) {
        expect(q.options.length).toBeGreaterThanOrEqual(3);
        const correctOpt = q.options.find((o) => o.id === q.correctOptionId);
        expect(correctOpt).toBeDefined();
      }
    }
  });

  it('should have hands-on projects for student submission', () => {
    expect(MOCK_PROJECTS.length).toBeGreaterThanOrEqual(2);
    for (const proj of MOCK_PROJECTS) {
      expect(proj.title).toBeTruthy();
      expect(proj.brief).toBeTruthy();
      expect(proj.requirements.length).toBeGreaterThanOrEqual(3);
    }
  });
});
