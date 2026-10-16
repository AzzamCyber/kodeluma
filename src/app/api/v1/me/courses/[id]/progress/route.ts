import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth/session';
import { LearningService } from '@/lib/services/learningService';
import { generateId } from '@/lib/utils/id';

export async function GET(
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

  const { id: courseId } = await params;
  try {
    const progress = await LearningService.getProgress(user.id, courseId);
    return NextResponse.json({ data: progress, error: null, meta: { requestId } });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Terjadi kesalahan sistem';
    return NextResponse.json(
      { data: null, error: { code: 'NOT_FOUND', message }, meta: { requestId } },
      { status: 404 }
    );
  }
}
