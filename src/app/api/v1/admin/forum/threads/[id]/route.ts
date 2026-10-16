import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth/guard';
import { ForumService } from '@/lib/services/forumService';
import { generateId } from '@/lib/utils/id';

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const requestId = generateId('req');
  try {
    const admin = await requireAdmin();
    const { id } = await params;
    const body = await request.json();

    const moderated = await ForumService.moderateThread(admin.id, id, body);
    return NextResponse.json({ data: moderated, error: null, meta: { requestId } });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Terjadi kesalahan sistem';
    return NextResponse.json(
      { data: null, error: { code: 'MODERATION_ERROR', message }, meta: { requestId } },
      { status: 400 }
    );
  }
}
