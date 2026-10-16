import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth/guard';
import { CourseRepository } from '@/lib/repositories/courseRepository';
import { CourseService } from '@/lib/services/courseService';
import { generateId } from '@/lib/utils/id';

export async function GET() {
  const requestId = generateId('req');
  try {
    await requireAdmin();
    const courses = await CourseRepository.listAllCourses();
    return NextResponse.json({ data: courses, error: null, meta: { requestId } });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Terjadi kesalahan sistem';
    return NextResponse.json(
      { data: null, error: { code: 'ADMIN_COURSES_ERROR', message }, meta: { requestId } },
      { status: 400 }
    );
  }
}

export async function POST(request: Request) {
  const requestId = generateId('req');
  try {
    await requireAdmin();
    const body = await request.json();
    const course = await CourseService.createCourse(body);
    return NextResponse.json({ data: course, error: null, meta: { requestId } }, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Gagal membuat kursus baru';
    return NextResponse.json(
      { data: null, error: { code: 'CREATE_COURSE_ERROR', message }, meta: { requestId } },
      { status: 400 }
    );
  }
}
