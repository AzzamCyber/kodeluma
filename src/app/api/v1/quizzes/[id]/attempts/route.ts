import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth/session';
import { CourseRepository } from '@/lib/repositories/courseRepository';
import { LearningService } from '@/lib/services/learningService';
import { quizSubmissionSchema } from '@/lib/validation/schemas';
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

  const { id: quizId } = await params;
  try {
    const raw = await request.json();
    const validated = quizSubmissionSchema.parse(raw);

    // Find quiz
    const allCourses = await CourseRepository.listPublishedCourses();
    let targetCourseId: string | null = null;
    for (const c of allCourses) {
      const q = await CourseRepository.getQuizForCourse(c.id);
      if (q && q.id === quizId) {
        targetCourseId = c.id;
        break;
      }
    }

    if (!targetCourseId) {
      return NextResponse.json(
        { data: null, error: { code: 'NOT_FOUND', message: 'Kuis tidak ditemukan.' }, meta: { requestId } },
        { status: 404 }
      );
    }

    const evaluation = await LearningService.gradeQuiz(user.id, targetCourseId, validated.answers);
    return NextResponse.json({ data: evaluation, error: null, meta: { requestId } });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Terjadi kesalahan evaluasi kuis';
    return NextResponse.json(
      { data: null, error: { code: 'EVALUATION_ERROR', message }, meta: { requestId } },
      { status: 400 }
    );
  }
}
