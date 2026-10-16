import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth/session';
import { QuestService } from '@/lib/services/questService';
import { generateId } from '@/lib/utils/id';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const requestId = generateId('req');
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json(
      {
        data: null,
        error: { code: 'UNAUTHORIZED', message: 'Silakan masuk untuk mengklaim reward quest.' },
        meta: { requestId },
      },
      { status: 401 }
    );
  }

  const { id: questId } = await params;

  try {
    const result = await QuestService.claimQuestXp(user.id, questId);
    return NextResponse.json({
      data: result,
      error: null,
      meta: { requestId },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Terjadi kendala saat klaim quest.';
    return NextResponse.json(
      {
        data: null,
        error: { code: 'CLAIM_ERROR', message },
        meta: { requestId },
      },
      { status: 400 }
    );
  }
}
