import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth/session';
import { ProjectService } from '@/lib/services/projectService';
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

  const { id: projectId } = await params;
  try {
    const raw = await request.json();
    const submission = await ProjectService.submit(user.id, projectId, raw);
    return NextResponse.json({ data: submission, error: null, meta: { requestId } });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Terjadi kesalahan sistem';
    return NextResponse.json(
      { data: null, error: { code: 'SUBMISSION_ERROR', message }, meta: { requestId } },
      { status: 400 }
    );
  }
}
