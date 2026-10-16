import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth/session';
import { generateId } from '@/lib/utils/id';

export async function GET() {
  const requestId = generateId('req');
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json(
      {
        data: null,
        error: { code: 'UNAUTHORIZED', message: 'Anda belum login.' },
        meta: { requestId },
      },
      { status: 401 }
    );
  }

  return NextResponse.json({
    data: { user },
    error: null,
    meta: { requestId },
  });
}

export async function PATCH(request: Request) {
  const requestId = generateId('req');
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json(
      {
        data: null,
        error: { code: 'UNAUTHORIZED', message: 'Anda belum login.' },
        meta: { requestId },
      },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const displayName = body.displayName?.trim();

    if (!displayName || displayName.length < 2 || displayName.length > 80) {
      return NextResponse.json(
        {
          data: null,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Nama tampilan harus antara 2 hingga 80 karakter.',
          },
          meta: { requestId },
        },
        { status: 400 }
      );
    }

    const { UserRepository } = await import('@/lib/repositories/userRepository');
    const updated = await UserRepository.updateProfile(user.id, { displayName });
    const { passwordHash: _passwordHash, ...safeUser } = updated;

    return NextResponse.json({
      data: { user: safeUser },
      error: null,
      meta: { requestId },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Gagal memperbarui profil.';
    return NextResponse.json(
      {
        data: null,
        error: { code: 'UPDATE_ERROR', message },
        meta: { requestId },
      },
      { status: 400 }
    );
  }
}
