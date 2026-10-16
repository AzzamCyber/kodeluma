import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth/guard';
import { CourseRepository } from '@/lib/repositories/courseRepository';
import { CourseService } from '@/lib/services/courseService';
import { generateId } from '@/lib/utils/id';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const requestId = generateId('req');
  try {
    await requireAdmin();
    const { id } = await params;
    const course = await CourseRepository.findCourseById(id);
    if (!course) {
      return NextResponse.json(
        { data: null, error: { code: 'NOT_FOUND', message: 'Kursus tidak ditemukan' }, meta: { requestId } },
        { status: 404 }
      );
    }
    const lessons = await CourseRepository.getLessonsForCourse(id);
    return NextResponse.json({ data: { ...course, lessons }, error: null, meta: { requestId } });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Terjadi kesalahan sistem';
    return NextResponse.json(
      { data: null, error: { code: 'ADMIN_COURSE_ERROR', message }, meta: { requestId } },
      { status: 400 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const requestId = generateId('req');
  try {
    await requireAdmin();
    const { id } = await params;
    const body = await request.json();

    let updated;
    if (body.action === 'publish') {
      updated = await CourseService.publishCourse(id);
    } else if (body.action === 'archive') {
      updated = await CourseRepository.updateCourse(id, { status: 'archived' });
    } else {
      updated = await CourseService.updateCourse(id, body);
    }

    return NextResponse.json({ data: updated, error: null, meta: { requestId } });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Terjadi kesalahan sistem';
    return NextResponse.json(
      { data: null, error: { code: 'ADMIN_COURSE_ERROR', message }, meta: { requestId } },
      { status: 400 }
    );
  }
}
