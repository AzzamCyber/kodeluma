import { NextResponse } from 'next/server';
import { AuthService } from '@/lib/services/authService';
import { generateId } from '@/lib/utils/id';

export async function POST(request: Request) {
  const requestId = generateId('req');
  try {
    const body = await request.json();
    const result = await AuthService.register(body);

    return NextResponse.json(
      { data: result, error: null, meta: { requestId } },
      { status: 201 }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Gagal mendaftarkan akun.';
    const isConflict = message.includes('EMAIL_EXISTS');
    const status = isConflict ? 409 : 400;

    return NextResponse.json(
      {
        data: null,
        error: {
          code: isConflict ? 'EMAIL_EXISTS' : 'VALIDATION_ERROR',
          message,
        },
        meta: { requestId },
      },
      { status }
    );
  }
}
