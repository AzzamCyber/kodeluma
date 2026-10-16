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
    const lessons = await CourseRepository.getLessonsForCourse(id);
    return NextResponse.json({ data: lessons, error: null, meta: { requestId } });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Terjadi kesalahan sistem';
    return NextResponse.json(
      { data: null, error: { code: 'ADMIN_GET_LESSONS_ERROR', message }, meta: { requestId } },
      { status: 400 }
    );
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const requestId = generateId('req');
  try {
    await requireAdmin();
    const { id } = await params;
    const body = await request.json();
    const lesson = await CourseService.addLesson(id, body);
    return NextResponse.json({ data: lesson, error: null, meta: { requestId } }, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Gagal menambahkan materi baru';
    return NextResponse.json(
      { data: null, error: { code: 'ADMIN_ADD_LESSON_ERROR', message }, meta: { requestId } },
      { status: 400 }
    );
  }
}
