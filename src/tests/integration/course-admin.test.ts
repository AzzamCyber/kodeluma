import { describe, it, expect, afterAll } from 'vitest';
import { CourseRepository } from '@/lib/repositories/courseRepository';
import { CourseService } from '@/lib/services/courseService';
import { generateId } from '@/lib/utils/id';
import { Course, Lesson } from '@/types/domain';
import { redis } from '@/lib/redis';

if (process.loadEnvFile) {
  process.loadEnvFile('.env.local');
}

describe('Course & Lesson Admin CRUD Integration', () => {
  const testSuffix = generateId('adm').replace(/_/g, '-');
  const courseSlug = `test-course-${testSuffix}`;
  let createdCourse: Course;
  let createdLesson: Lesson;

  afterAll(async () => {
    // Cleanup created test resources
    if (createdCourse) {
      await redis.del(`kl:v1:course:${createdCourse.id}`);
      await redis.del(`kl:v1:course:slug:${createdCourse.slug}`);
      await redis.zrem('kl:v1:courses:all', createdCourse.id);
      await redis.zrem('kl:v1:courses:published', createdCourse.id);
      await redis.del(`kl:v1:course:${createdCourse.id}:lessons`);
    }
    if (createdLesson) {
      await redis.del(`kl:v1:lesson:${createdLesson.id}`);
    }
  });

  it('creates a new course and finds it by slug', async () => {
    createdCourse = await CourseService.createCourse({
      title: 'Automated Test Course',
      slug: courseSlug,
      summary: 'Ringkasan singkat untuk pengujian otomatis.',
      description: 'Deskripsi lengkap kursus untuk pengujian sistem manajemen materi admin.',
      category: 'javascript',
      level: 'pemula',
      status: 'draft',
      estimatedMinutes: 60,
    });

    expect(createdCourse.id).toBeDefined();
    expect(createdCourse.slug).toBe(courseSlug);

    const fetched = await CourseRepository.findCourseBySlug(courseSlug);
    expect(fetched).not.toBeNull();
    expect(fetched?.title).toBe('Automated Test Course');
  });

  it('updates course details and supports slug rename', async () => {
    const updatedSlug = `${courseSlug}-renamed`;
    const updated = await CourseService.updateCourse(createdCourse.id, {
      title: 'Automated Test Course (Updated)',
      slug: updatedSlug,
      summary: 'Ringkasan yang diperbarui setelah revisi.',
    });

    expect(updated.title).toBe('Automated Test Course (Updated)');
    expect(updated.slug).toBe(updatedSlug);

    // Verify old slug is deleted and new slug resolves
    const oldFetch = await CourseRepository.findCourseBySlug(courseSlug);
    expect(oldFetch).toBeNull();

    const newFetch = await CourseRepository.findCourseBySlug(updatedSlug);
    expect(newFetch).not.toBeNull();
    expect(newFetch?.id).toBe(createdCourse.id);

    // Update reference for cleanup
    createdCourse.slug = updatedSlug;
  });

  it('adds a lesson to the course and retrieves lessons in order', async () => {
    createdLesson = await CourseService.addLesson(createdCourse.id, {
      title: 'Pengenalan Testing',
      slug: 'pengenalan-testing',
      order: 1,
      isRequired: true,
      status: 'published',
      summary: 'Materi pengantar pengujian perangkat lunak.',
      bodyMarkdown: '# Pengenalan Testing\n\nIni adalah materi pertama yang dibuat untuk pengujian.',
    });

    expect(createdLesson.id).toBeDefined();
    expect(createdLesson.courseId).toBe(createdCourse.id);

    const lessons = await CourseRepository.getLessonsForCourse(createdCourse.id);
    expect(lessons.length).toBe(1);
    expect(lessons[0].title).toBe('Pengenalan Testing');
  });

  it('updates lesson details and order', async () => {
    const updatedLesson = await CourseService.updateLesson(createdLesson.id, {
      title: 'Pengenalan Testing Lanjutan',
      order: 2,
    });

    expect(updatedLesson.title).toBe('Pengenalan Testing Lanjutan');
    expect(updatedLesson.order).toBe(2);

    const fetched = await CourseRepository.findLessonById(createdLesson.id);
    expect(fetched?.title).toBe('Pengenalan Testing Lanjutan');
  });

  it('deletes a lesson from the course', async () => {
    const result = await CourseService.deleteLesson(createdLesson.id, createdCourse.id);
    expect(result).toBe(true);

    const lessons = await CourseRepository.getLessonsForCourse(createdCourse.id);
    expect(lessons.length).toBe(0);

    const fetched = await CourseRepository.findLessonById(createdLesson.id);
    expect(fetched).toBeNull();
  });
});
