import { NextResponse } from 'next/server';
import { AuthService } from '@/lib/services/authService';
import { generateId } from '@/lib/utils/id';

export async function POST() {
  const requestId = generateId('req');
  await AuthService.logout();
  return NextResponse.json({
    data: { message: 'Berhasil keluar.' },
    error: null,
    meta: { requestId },
  });
}
