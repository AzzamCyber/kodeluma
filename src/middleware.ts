import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const COOKIE_NAME = process.env.SESSION_COOKIE_NAME || 'kodeluma_session';

const AUTH_PATHS = ['/login', '/register'];

const PROTECTED_PREFIXES = [
  '/dashboard',
  '/classroom',
  '/profile',
  '/quests',
  '/certificates',
  '/projects',
  '/admin',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionToken = request.cookies.get(COOKIE_NAME)?.value;

  const isAuthPath = AUTH_PATHS.some((path) => pathname === path || pathname.startsWith(`${path}/`));
  const isProtectedPath = PROTECTED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );

  // 1. If user has an active session cookie and tries to access /login or /register, redirect away
  if (sessionToken && isAuthPath) {
    const dashboardUrl = new URL('/dashboard', request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  // 2. If user is unauthenticated and tries to access protected areas, redirect to /login
  if (!sessionToken && isProtectedPath) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('returnTo', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/login',
    '/register',
    '/dashboard/:path*',
    '/classroom/:path*',
    '/profile/:path*',
    '/quests/:path*',
    '/certificates/:path*',
    '/projects/:path*',
    '/admin/:path*',
  ],
};
