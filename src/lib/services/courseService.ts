import 'server-only';
import { CourseRepository } from '@/lib/repositories/courseRepository';
import { Course, Lesson, Quiz } from '@/types/domain';
import { generateId } from '@/lib/utils/id';
import { courseSchema, lessonSchema } from '@/lib/validation/schemas';

export class CourseService {
  static async getCatalog(): Promise<Course[]> {
    return await CourseRepository.listPublishedCourses();
  }

  static async getCourseDetail(slug: string): Promise<{
    course: Course;
    lessons: Lesson[];
    quiz: Quiz | null;
  } | null> {
    const course = await CourseRepository.findCourseBySlug(slug);
    if (!course) return null;

    const lessons = await CourseRepository.getLessonsForCourse(course.id);
    const quiz = await CourseRepository.getQuizForCourse(course.id);

    return { course, lessons, quiz };
  }

  static async createCourse(data: unknown): Promise<Course> {
    const validated = courseSchema.parse(data);
    const id = generateId('crs');

    const course: Course = {
      id,
      slug: validated.slug,
      title: validated.title,
      summary: validated.summary,
      description: validated.description,
      category: validated.category,
      level: validated.level,
      status: validated.status,
      curriculumVersion: 1,
      estimatedMinutes: validated.estimatedMinutes,
      coverUrl: validated.coverUrl || '/brand/kodeluma-icon.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return await CourseRepository.createCourse(course);
  }

  static async publishCourse(id: string): Promise<Course> {
    const lessons = await CourseRepository.getLessonsForCourse(id);
    const requiredPublished = lessons.filter((l) => l.isRequired && l.status === 'published');

    if (requiredPublished.length === 0) {
      throw new Error(
        'CANNOT_PUBLISH: Kursus harus memiliki minimal satu materi wajib yang terbit sebelum dapat dipublikasikan.'
      );
    }

    return await CourseRepository.updateCourse(id, { status: 'published' });
  }

  static async addLesson(courseId: string, data: unknown): Promise<Lesson> {
    const validated = lessonSchema.parse(data);
    const id = generateId('lsn');

    const lesson: Lesson = {
      id,
      courseId,
      slug: validated.slug,
      title: validated.title,
      summary: validated.summary,
      bodyMarkdown: validated.bodyMarkdown,
      isRequired: validated.isRequired,
      order: validated.order,
      status: validated.status,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return await CourseRepository.saveLesson(lesson);
  }

  static async updateCourse(id: string, data: unknown): Promise<Course> {
    const validated = courseSchema.partial().parse(data);
    return await CourseRepository.updateCourse(id, validated);
  }

  static async updateLesson(id: string, data: unknown): Promise<Lesson> {
    const validated = lessonSchema.partial().parse(data);
    return await CourseRepository.updateLesson(id, validated);
  }

  static async deleteLesson(id: string, courseId: string): Promise<boolean> {
    return await CourseRepository.deleteLesson(id, courseId);
  }
}
