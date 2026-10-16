'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LogOut, UserRound } from 'lucide-react';
import { ResponsiveNavbar, type NavigationItem } from './ResponsiveNavbar';
import type { User } from '@/types/domain';
import { useFeedback } from '@/components/ui/FeedbackProvider';

interface StudentNavbarProps { user: User; }

const links: NavigationItem[] = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Kelas', href: '/courses' },
  { label: 'Code Lab', href: '/lab' },
  { label: 'Quest', href: '/quests' },
  { label: 'Proyek', href: '/projects' },
  { label: 'Diskusi', href: '/forum' },
  { label: 'Sertifikat', href: '/certificates' },
];

export function StudentNavbar({ user }: StudentNavbarProps) {
  const router = useRouter();
  const { notify } = useFeedback();
  const [loggingOut, setLoggingOut] = useState(false);
  const [logoutError, setLogoutError] = useState('');

  const handleLogout = async () => {
    setLoggingOut(true);
    setLogoutError('');
    try {
      const response = await fetch('/api/v1/auth/logout', { method: 'POST' });
      if (!response.ok) throw new Error('Logout failed');
      notify({ variant: 'success', title: 'Berhasil keluar' });
      router.push('/login');
      router.refresh();
    } catch {
      setLogoutError('Gagal keluar. Coba lagi.');
      notify({ variant: 'error', title: 'Gagal keluar', message: 'Coba lagi sebentar.' });
      setLoggingOut(false);
    }
  };

  const profile = <Link href="/profile" className="kl-navbar-profile d-inline-flex align-items-center gap-2 text-decoration-none">
    <span className="kl-navbar-avatar d-inline-flex align-items-center justify-content-center"><UserRound size={17} strokeWidth={1.75} aria-hidden="true" /></span>
    <span className="kl-navbar-profile-name text-truncate">{user.displayName}</span>
  </Link>;
  const logout = <button type="button" className="btn kl-navbar-logout d-inline-flex align-items-center justify-content-center gap-2" onClick={handleLogout} disabled={loggingOut}>
    <LogOut size={16} strokeWidth={1.75} aria-hidden="true" />{loggingOut ? 'Memproses...' : 'Keluar'}
  </button>;

  return <>
    <ResponsiveNavbar homeHref="/dashboard" links={links}
      desktopActions={<>{profile}{user.role === 'admin' && <Link href="/admin" className="kl-navbar-signin text-decoration-none">Admin</Link>}{logout}</>}
      mobileActions={<>{profile}{user.role === 'admin' && <Link href="/admin" className="kl-drawer-link">Portal Admin</Link>}{logout}</>}
      mobileHeading="Menu Belajar" />
    {logoutError && <div className="alert alert-danger rounded-0 mb-0 text-center" role="alert">{logoutError}</div>}
  </>;
}
