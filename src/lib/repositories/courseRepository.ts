import 'server-only';
import { redis } from '@/lib/redis';
import { Course, Lesson, Quiz } from '@/types/domain';

export class CourseRepository {
  private static courseKey(id: string): string {
    return `kl:v1:course:${id}`;
  }

  private static slugIndexKey(slug: string): string {
    return `kl:v1:course:slug:${slug.toLowerCase().trim()}`;
  }

  private static lessonKey(id: string): string {
    return `kl:v1:lesson:${id}`;
  }

  private static courseLessonsIndex(courseId: string): string {
    return `kl:v1:course:${courseId}:lessons`;
  }

  private static quizKey(id: string): string {
    return `kl:v1:quiz:${id}`;
  }

  private static courseQuizIndex(courseId: string): string {
    return `kl:v1:course:${courseId}:quiz`;
  }

  private static readonly COURSES_PUBLISHED = 'kl:v1:courses:published';
  private static readonly COURSES_ALL = 'kl:v1:courses:all';

  static async createCourse(course: Course): Promise<Course> {
    const slugKey = this.slugIndexKey(course.slug);
    const courseKey = this.courseKey(course.id);

    const reserved = await redis.set(slugKey, course.id, { nx: true });
    if (!reserved) {
      throw new Error('SLUG_EXISTS: Slug kursus sudah digunakan.');
    }

    try {
      const score = new Date(course.createdAt).getTime();
      const pipeline = redis.pipeline();
      pipeline.set(courseKey, JSON.stringify(course));
      pipeline.zadd(this.COURSES_ALL, { score, member: course.id });

      if (course.status === 'published') {
        pipeline.zadd(this.COURSES_PUBLISHED, { score, member: course.id });
      }

      pipeline.incr('kl:v1:stats:total_courses');
      await pipeline.exec();

      return course;
    } catch (err) {
      await redis.del(slugKey);
      throw err;
    }
  }

  static async updateCourse(id: string, partial: Partial<Course>): Promise<Course> {
    const existing = await this.findCourseById(id);
    if (!existing) throw new Error('COURSE_NOT_FOUND: Kursus tidak ditemukan.');

    if (partial.slug && partial.slug.toLowerCase().trim() !== existing.slug) {
      const newSlug = partial.slug.toLowerCase().trim();
      const newSlugKey = this.slugIndexKey(newSlug);
      const reserved = await redis.set(newSlugKey, id, { nx: true });
      if (!reserved) {
        throw new Error('SLUG_EXISTS: Slug kursus sudah digunakan.');
      }
      await redis.del(this.slugIndexKey(existing.slug));
      partial.slug = newSlug;
    }

    const updated: Course = {
      ...existing,
      ...partial,
      updatedAt: new Date().toISOString(),
    };

    const pipeline = redis.pipeline();
    pipeline.set(this.courseKey(id), JSON.stringify(updated));

    const score = new Date(updated.createdAt).getTime();
    if (updated.status === 'published') {
      pipeline.zadd(this.COURSES_PUBLISHED, { score, member: id });
    } else {
      pipeline.zrem(this.COURSES_PUBLISHED, id);
    }

    await pipeline.exec();
    return updated;
  }

  static async findCourseById(id: string): Promise<Course | null> {
    const raw = await redis.get<string | Course>(this.courseKey(id));
    if (!raw) return null;
    return typeof raw === 'string' ? JSON.parse(raw) : raw;
  }

  static async findCourseBySlug(slug: string): Promise<Course | null> {
    const courseId = await redis.get<string>(this.slugIndexKey(slug));
    if (!courseId) return null;
    return await this.findCourseById(courseId);
  }

  static async listPublishedCourses(): Promise<Course[]> {
    const ids = await redis.zrange<string[]>(this.COURSES_PUBLISHED, 0, -1, { rev: true });
    if (!ids || ids.length === 0) return [];

    const pipeline = redis.pipeline();
    for (const cid of ids) {
      pipeline.get(this.courseKey(cid));
      pipeline.zcard(this.courseLessonsIndex(cid));
    }
    const results = await pipeline.exec();

    const courses: Course[] = [];
    for (let i = 0; i < results.length; i += 2) {
      const courseRaw = results[i];
      const lessonCount = (results[i + 1] as number) || 0;
      if (courseRaw) {
        const c = typeof courseRaw === 'string' ? JSON.parse(courseRaw) : (courseRaw as Course);
        courses.push({ ...c, lessonsCount: lessonCount });
      }
    }

    return courses;
  }

  static async listAllCourses(): Promise<Course[]> {
    const ids = await redis.zrange<string[]>(this.COURSES_ALL, 0, -1, { rev: true });
    if (!ids || ids.length === 0) return [];

    const pipeline = redis.pipeline();
    for (const cid of ids) {
      pipeline.get(this.courseKey(cid));
      pipeline.zcard(this.courseLessonsIndex(cid));
    }
    const results = await pipeline.exec();

    const courses: Course[] = [];
    for (let i = 0; i < results.length; i += 2) {
      const courseRaw = results[i];
      const lessonCount = (results[i + 1] as number) || 0;
      if (courseRaw) {
        const c = typeof courseRaw === 'string' ? JSON.parse(courseRaw) : (courseRaw as Course);
        courses.push({ ...c, lessonsCount: lessonCount });
      }
    }

    return courses;
  }

  // --- Lessons ---

  static async saveLesson(lesson: Lesson): Promise<Lesson> {
    const pipeline = redis.pipeline();
    pipeline.set(this.lessonKey(lesson.id), JSON.stringify(lesson));
    pipeline.zadd(this.courseLessonsIndex(lesson.courseId), {
      score: lesson.order,
      member: lesson.id,
    });
    await pipeline.exec();
    return lesson;
  }

  static async findLessonById(id: string): Promise<Lesson | null> {
    const raw = await redis.get<string | Lesson>(this.lessonKey(id));
    if (!raw) return null;
    return typeof raw === 'string' ? JSON.parse(raw) : raw;
  }

  static async getLessonsForCourse(courseId: string): Promise<Lesson[]> {
    // Get lessons in ascending order of score (order)
    const lessonIds = await redis.zrange<string[]>(this.courseLessonsIndex(courseId), 0, -1);
    if (!lessonIds || lessonIds.length === 0) return [];

    const pipeline = redis.pipeline();
    for (const lid of lessonIds) {
      pipeline.get(this.lessonKey(lid));
    }
    const results = await pipeline.exec();

    const lessons: Lesson[] = [];
    for (const res of results) {
      if (res) {
        lessons.push(typeof res === 'string' ? JSON.parse(res) : (res as Lesson));
      }
    }
    return lessons;
  }

  static async updateLesson(id: string, partial: Partial<Lesson>): Promise<Lesson> {
    const existing = await this.findLessonById(id);
    if (!existing) throw new Error('LESSON_NOT_FOUND: Materi tidak ditemukan.');

    const updated: Lesson = {
      ...existing,
      ...partial,
      updatedAt: new Date().toISOString(),
    };

    const pipeline = redis.pipeline();
    pipeline.set(this.lessonKey(id), JSON.stringify(updated));
    if (typeof partial.order === 'number') {
      pipeline.zadd(this.courseLessonsIndex(updated.courseId), {
        score: partial.order,
        member: id,
      });
    }
    await pipeline.exec();
    return updated;
  }

  static async deleteLesson(id: string, courseId: string): Promise<boolean> {
    const pipeline = redis.pipeline();
    pipeline.del(this.lessonKey(id));
    pipeline.zrem(this.courseLessonsIndex(courseId), id);
    await pipeline.exec();
    return true;
  }

  // --- Quizzes ---

  static async saveQuiz(quiz: Quiz): Promise<Quiz> {
    const pipeline = redis.pipeline();
    pipeline.set(this.quizKey(quiz.id), JSON.stringify(quiz));
    pipeline.set(this.courseQuizIndex(quiz.courseId), quiz.id);
    await pipeline.exec();
    return quiz;
  }

  static async getQuizForCourse(courseId: string): Promise<Quiz | null> {
    const quizId = await redis.get<string>(this.courseQuizIndex(courseId));
    if (!quizId) return null;

    const raw = await redis.get<string | Quiz>(this.quizKey(quizId));
    if (!raw) return null;
    return typeof raw === 'string' ? JSON.parse(raw) : raw;
  }
}
