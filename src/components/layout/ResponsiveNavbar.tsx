'use client';

import { useState, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import Offcanvas from 'react-bootstrap/Offcanvas';

export interface NavigationItem {
  href: string;
  label: string;
}

interface ResponsiveNavbarProps {
  homeHref: string;
  links: NavigationItem[];
  desktopActions: ReactNode;
  mobileActions: ReactNode;
  mobileHeading: string;
  tagline?: string;
}

export function ResponsiveNavbar({ homeHref, links, desktopActions, mobileActions, mobileHeading, tagline }: ResponsiveNavbarProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="kl-navbar d-flex align-items-center">
      <div className="container kl-navbar-inner d-flex align-items-center justify-content-between gap-3">
        <div className="kl-navbar-identity d-flex align-items-center flex-shrink-0">
          <Link href={homeHref} className="kl-navbar-brand d-inline-flex align-items-center" aria-label="Kodeluma, beranda">
            <Image src="/brand/kodeluma-logo-horizontal.png" alt="Kodeluma by Azzam Codex" width={160} height={38} priority />
          </Link>
          {tagline && <span className="kl-navbar-tagline d-none d-xxl-inline">{tagline}</span>}
        </div>
        <nav className="kl-navbar-links d-none d-xl-flex align-items-center" aria-label="Navigasi utama">
          {links.map((item) => {
            const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(`${item.href}/`));
            return <Link key={item.href} href={item.href} className={`kl-navbar-link ${active ? 'is-active' : ''}`} aria-current={active ? 'page' : undefined}>{item.label}</Link>;
          })}
        </nav>
        <div className="d-none d-xl-flex align-items-center gap-2 flex-shrink-0">{desktopActions}</div>
        <button type="button" className="btn kl-menu-toggle d-xl-none d-inline-flex align-items-center justify-content-center gap-2" onClick={() => setMenuOpen(true)} aria-label="Buka menu navigasi" aria-haspopup="dialog" aria-expanded={menuOpen}>
          <span className="kl-menu-label">Menu</span>
          <Menu size={23} strokeWidth={1.75} aria-hidden="true" />
        </button>
      </div>
      <Offcanvas show={menuOpen} onHide={() => setMenuOpen(false)} placement="end" className="kl-nav-drawer" aria-labelledby="kl-nav-drawer-title">
        <Offcanvas.Header closeButton className="border-bottom"><Offcanvas.Title id="kl-nav-drawer-title" className="h5 mb-0">{mobileHeading}</Offcanvas.Title></Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column">
          <nav className="d-flex flex-column gap-1" aria-label="Navigasi seluler">
            {links.map((item) => {
              const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(`${item.href}/`));
              return <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className={`kl-drawer-link ${active ? 'is-active' : ''}`} aria-current={active ? 'page' : undefined}>{item.label}</Link>;
            })}
          </nav>
          <div className="mt-auto pt-4 d-grid gap-2 border-top" onClick={() => setMenuOpen(false)}>{mobileActions}</div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}
