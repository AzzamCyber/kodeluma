import { NextResponse } from 'next/server';
import { AuthService } from '@/lib/services/authService';
import { generateId } from '@/lib/utils/id';

export async function POST(request: Request) {
  const requestId = generateId('req');
  try {
    const body = await request.json();
    const result = await AuthService.login(body);

    return NextResponse.json(
      { data: result, error: null, meta: { requestId } },
      { status: 200 }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Email atau kata sandi tidak cocok.';
    const isSuspended = message.includes('ACCOUNT_SUSPENDED');
    const status = isSuspended ? 403 : 401;

    return NextResponse.json(
      {
        data: null,
        error: {
          code: isSuspended ? 'ACCOUNT_SUSPENDED' : 'INVALID_CREDENTIALS',
          message,
        },
        meta: { requestId },
      },
      { status }
    );
  }
}
