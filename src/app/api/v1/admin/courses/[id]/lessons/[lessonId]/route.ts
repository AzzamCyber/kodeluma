import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth/guard';
import { CourseService } from '@/lib/services/courseService';
import { generateId } from '@/lib/utils/id';

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string; lessonId: string }> }
) {
  const requestId = generateId('req');
  try {
    await requireAdmin();
    const { lessonId } = await params;
    const body = await request.json();
    const updated = await CourseService.updateLesson(lessonId, body);
    return NextResponse.json({ data: updated, error: null, meta: { requestId } });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Gagal memperbarui materi';
    return NextResponse.json(
      { data: null, error: { code: 'ADMIN_UPDATE_LESSON_ERROR', message }, meta: { requestId } },
      { status: 400 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string; lessonId: string }> }
) {
  const requestId = generateId('req');
  try {
    await requireAdmin();
    const { id: courseId, lessonId } = await params;
    await CourseService.deleteLesson(lessonId, courseId);
    return NextResponse.json({ data: { success: true }, error: null, meta: { requestId } });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Gagal menghapus materi';
    return NextResponse.json(
      { data: null, error: { code: 'ADMIN_DELETE_LESSON_ERROR', message }, meta: { requestId } },
      { status: 400 }
    );
  }
}
