import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth/session';
import { CourseRepository } from '@/lib/repositories/courseRepository';
import { LearningService } from '@/lib/services/learningService';
import { generateId } from '@/lib/utils/id';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const requestId = generateId('req');
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json(
      { data: null, error: { code: 'UNAUTHORIZED', message: 'Silakan masuk terlebih dahulu.' }, meta: { requestId } },
      { status: 401 }
    );
  }

  const { id: lessonId } = await params;
  const lesson = await CourseRepository.findLessonById(lessonId);
  if (!lesson) {
    return NextResponse.json(
      { data: null, error: { code: 'NOT_FOUND', message: 'Materi tidak ditemukan.' }, meta: { requestId } },
      { status: 404 }
    );
  }

  try {
    const progress = await LearningService.completeLesson(user.id, lesson.courseId, lessonId);
    return NextResponse.json({ data: progress, error: null, meta: { requestId } });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Terjadi kesalahan sistem';
    return NextResponse.json(
      { data: null, error: { code: 'BAD_REQUEST', message }, meta: { requestId } },
      { status: 400 }
    );
  }
}
