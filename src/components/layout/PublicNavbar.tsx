'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ResponsiveNavbar, type NavigationItem } from './ResponsiveNavbar';

interface PublicNavbarProps {
  user?: { displayName: string; role: string } | null;
}

const links: NavigationItem[] = [
  { label: 'Kelas', href: '/courses' },
  { label: 'Alur Belajar', href: '/learning-paths' },
  { label: 'Tentang', href: '/about' },
];

export function PublicNavbar({ user: initialUser }: PublicNavbarProps) {
  const [currentUser, setCurrentUser] = useState(initialUser);

  useEffect(() => {
    if (initialUser !== undefined) return;
    let isMounted = true;
    fetch('/api/v1/me')
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        if (isMounted && json?.data?.user) {
          setCurrentUser(json.data.user);
        }
      })
      .catch(() => {});
    return () => {
      isMounted = false;
    };
  }, [initialUser]);

  const user = currentUser ?? initialUser;
  const destination = user?.role === 'admin' ? '/admin' : '/dashboard';
  const actions = user ? (
    <Link href={destination} className="kl-btn-primary d-inline-flex align-items-center justify-content-center gap-2 text-decoration-none">
      {user.role === 'admin' ? 'Portal Admin' : 'Dashboard'}
      <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
    </Link>
  ) : (
    <>
      <Link href="/login" className="kl-navbar-signin text-decoration-none">Masuk</Link>
      <Link href="/register" className="kl-btn-primary d-inline-flex align-items-center justify-content-center gap-2 text-decoration-none">
        Mulai Belajar <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
      </Link>
    </>
  );

  return <ResponsiveNavbar homeHref="/" links={links} desktopActions={actions} mobileActions={actions} mobileHeading="Jelajahi Kodeluma" tagline="BELAJAR CODING" />;
}
