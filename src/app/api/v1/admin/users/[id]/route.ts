import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth/guard';
import { UserRepository } from '@/lib/repositories/userRepository';
import { generateId } from '@/lib/utils/id';

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const requestId = generateId('req');
  try {
    await requireAdmin();
    const { id } = await params;
    const body = await request.json();

    const { status } = body;
    const updated = await UserRepository.updateStatus(id, status);

    return NextResponse.json({ data: updated, error: null, meta: { requestId } });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Terjadi kesalahan sistem';
    return NextResponse.json(
      { data: null, error: { code: 'USER_UPDATE_ERROR', message }, meta: { requestId } },
      { status: 400 }
    );
  }
}
