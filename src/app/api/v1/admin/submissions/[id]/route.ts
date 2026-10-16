import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth/guard';
import { ProjectService } from '@/lib/services/projectService';
import { generateId } from '@/lib/utils/id';

export async function PATCH(
  request: Request,
  { params: _params }: { params: Promise<{ id: string }> }
) {
  const requestId = generateId('req');
  try {
    const admin = await requireAdmin();
    const body = await request.json();

    const { userId, projectId, status, feedback } = body;
    const reviewed = await ProjectService.review(admin.id, userId, projectId, {
      status,
      feedback,
    });

    return NextResponse.json({ data: reviewed, error: null, meta: { requestId } });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Terjadi kesalahan sistem';
    return NextResponse.json(
      { data: null, error: { code: 'REVIEW_ERROR', message }, meta: { requestId } },
      { status: 400 }
    );
  }
}
