import 'server-only';
import { cookies } from 'next/headers';
import crypto from 'crypto';
import { SessionRepository } from '@/lib/repositories/sessionRepository';
import { UserRepository } from '@/lib/repositories/userRepository';
import { User, Role } from '@/types/domain';

const COOKIE_NAME = process.env.SESSION_COOKIE_NAME || 'kodeluma_session';
const MAX_AGE = 7 * 24 * 60 * 60; // 7 days in seconds

export async function createSession(userId: string, role: Role): Promise<string> {
  // Generate a cryptographically random 32-byte opaque token
  const token = crypto.randomBytes(32).toString('hex');
  await SessionRepository.create(token, userId, role);

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: MAX_AGE,
  });

  return token;
}

export async function getSessionToken(): Promise<string | null> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(COOKIE_NAME);
  return cookie?.value || null;
}

export async function clearSession(): Promise<void> {
  const token = await getSessionToken();
  if (token) {
    await SessionRepository.revoke(token);
  }

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });
}

export async function getCurrentUser(): Promise<User | null> {
  const token = await getSessionToken();
  if (!token) return null;

  const session = await SessionRepository.findByToken(token);
  if (!session) return null;

  // Check if session has expired
  if (new Date(session.expiresAt) < new Date()) {
    await clearSession();
    return null;
  }

  const user = await UserRepository.findById(session.userId);
  if (!user || user.status === 'suspended') {
    await clearSession();
    return null;
  }

  const { passwordHash: _passwordHash, ...safeUser } = user;
  return safeUser as User;
}
