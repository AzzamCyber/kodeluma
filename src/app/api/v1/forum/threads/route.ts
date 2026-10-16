import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth/session';
import { ForumService } from '@/lib/services/forumService';
import { generateId } from '@/lib/utils/id';

export async function GET(request: Request) {
  const requestId = generateId('req');
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || 'all';
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '20', 10);

  const result = await ForumService.listThreads(category, page, limit);
  return NextResponse.json({
    data: result.items,
    error: null,
    meta: { requestId, page, limit, total: result.total },
  });
}

export async function POST(request: Request) {
  const requestId = generateId('req');
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json(
      { data: null, error: { code: 'UNAUTHORIZED', message: 'Silakan masuk untuk membuat topik diskusi.' }, meta: { requestId } },
      { status: 401 }
    );
  }

  try {
    const raw = await request.json();
    const thread = await ForumService.createThread(user.id, raw);
    return NextResponse.json({ data: thread, error: null, meta: { requestId } }, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Terjadi kesalahan sistem';
    return NextResponse.json(
      { data: null, error: { code: 'FORUM_ERROR', message }, meta: { requestId } },
      { status: 400 }
    );
  }
}
