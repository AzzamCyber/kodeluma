'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {
  BookOpen,
  ExternalLink,
  FolderGit2,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Users,
  ShieldCheck,
} from 'lucide-react';
import type { User } from '@/types/domain';
import { useFeedback } from '@/components/ui/FeedbackProvider';

interface AdminSidebarProps {
  user: User;
}

const navItems = [
  { label: 'Ringkasan Platform', href: '/admin', icon: LayoutDashboard },
  { label: 'Kursus & Silabus', href: '/admin/courses', icon: BookOpen },
  { label: 'Review Proyek', href: '/admin/projects', icon: FolderGit2 },
  { label: 'Moderasi Forum', href: '/admin/forum', icon: MessageSquare },
  { label: 'Manajemen Pengguna', href: '/admin/users', icon: Users },
];

export function AdminSidebar({ user }: AdminSidebarProps) {
  const { notify } = useFeedback();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [logoutError, setLogoutError] = useState('');

  const initials = user.displayName
    ? user.displayName
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : 'AD';

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

  const navigation = (closeOnNavigate: boolean) => (
    <nav className="d-flex flex-column gap-1" aria-label="Navigasi admin">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active =
          pathname === item.href ||
          (item.href !== '/admin' && pathname.startsWith(`${item.href}/`));
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={closeOnNavigate ? () => setMenuOpen(false) : undefined}
            className={`kl-admin-nav-link ${active ? 'is-active' : ''}`}
            aria-current={active ? 'page' : undefined}
          >
            <Icon size={18} strokeWidth={active ? 2.2 : 1.75} aria-hidden="true" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );

  const account = (
    <div className="kl-admin-account">
      <div className="d-flex align-items-center gap-3 mb-3">
        <div className="kl-admin-avatar" aria-hidden="true">{initials}</div>
        <div className="overflow-hidden flex-grow-1">
          <div className="fw-semibold text-truncate small" title={user.displayName || 'Administrator'}>
            {user.displayName || 'Administrator'}
          </div>
          <div className="kl-admin-account-email text-truncate" title={user.email}>
            {user.email}
          </div>
        </div>
      </div>

      <div className="d-flex gap-2">
        <Link
          href="/dashboard"
          onClick={() => setMenuOpen(false)}
          className="kl-admin-account-action btn btn-outline-secondary btn-sm flex-grow-1 d-inline-flex align-items-center justify-content-center gap-2 text-decoration-none"
          title="Buka Portal Belajar Siswa"
        >
          <ExternalLink size={13} strokeWidth={1.75} />
          <span>Siswa</span>
        </Link>

        <button
          type="button"
          onClick={handleLogout}
          disabled={loggingOut}
          className="kl-admin-account-action btn btn-outline-danger btn-sm flex-grow-1 d-inline-flex align-items-center justify-content-center gap-2"
        >
          <LogOut size={13} strokeWidth={1.75} aria-hidden="true" />
          <span>{loggingOut ? 'Memproses...' : 'Keluar'}</span>
        </button>
      </div>

      {logoutError && (
        <p className="text-danger small mt-2 mb-0" role="alert" style={{ fontSize: '11px' }}>
          {logoutError}
        </p>
      )}
    </div>
  );

  return (
    <>
      <aside className="kl-admin-sidebar d-none d-lg-flex flex-column bg-white border-end">
        <div className="kl-admin-brand">
          <Link href="/admin" aria-label="Kodeluma Admin, ringkasan">
            <Image
              src="/brand/kodeluma-logo-horizontal.png"
              alt="Kodeluma"
              width={132}
              height={32}
              priority
            />
          </Link>
          <span className="kl-admin-role d-inline-flex align-items-center gap-1">
            <ShieldCheck size={12} />
            <span>Admin</span>
          </span>
        </div>

        <div className="p-3 flex-grow-1 overflow-y-auto">
          <div className="kl-admin-nav-heading text-uppercase">
            RUANG KERJA
          </div>
          {navigation(false)}
        </div>

        {account}
      </aside>

      {/* Mobile Header */}
      <div className="kl-admin-mobile-header d-lg-none d-flex align-items-center justify-content-between border-bottom bg-white px-3 py-2">
        <Link href="/admin" aria-label="Kodeluma Admin, ringkasan">
          <Image
            src="/brand/kodeluma-logo-horizontal.png"
            alt="Kodeluma"
            width={125}
            height={30}
            priority
          />
        </Link>
        <button
          type="button"
          className="kl-admin-menu-button btn btn-light border d-inline-flex align-items-center justify-content-center"
          onClick={() => setMenuOpen(true)}
          aria-label="Buka menu admin"
          aria-haspopup="dialog"
          aria-expanded={menuOpen}
        >
          <Menu size={20} strokeWidth={1.75} aria-hidden="true" />
        </button>
      </div>

      <Offcanvas
        show={menuOpen}
        onHide={() => setMenuOpen(false)}
        placement="start"
        className="kl-nav-drawer"
        aria-labelledby="kl-admin-drawer-title"
      >
        <Offcanvas.Header closeButton className="border-bottom">
          <Offcanvas.Title id="kl-admin-drawer-title" className="h6 fw-bold mb-0">
            Menu Kontrol Admin
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column p-0">
          <div className="p-3 flex-grow-1 overflow-y-auto">{navigation(true)}</div>
          {account}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
