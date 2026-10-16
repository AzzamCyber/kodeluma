import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth/session';
import { ForumService } from '@/lib/services/forumService';
import { generateId } from '@/lib/utils/id';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const requestId = generateId('req');
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json(
      { data: null, error: { code: 'UNAUTHORIZED', message: 'Silakan masuk untuk membalas diskusi.' }, meta: { requestId } },
      { status: 401 }
    );
  }

  const { id: threadId } = await params;
  try {
    const raw = await request.json();
    const reply = await ForumService.reply(user.id, threadId, raw);
    return NextResponse.json({ data: reply, error: null, meta: { requestId } }, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Terjadi kesalahan sistem';
    return NextResponse.json(
      { data: null, error: { code: 'REPLY_ERROR', message }, meta: { requestId } },
      { status: 400 }
    );
  }
}
