'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight, User as UserIcon } from 'lucide-react';

interface PublicNavbarProps {
  user?: { displayName: string; role: string } | null;
}

export function PublicNavbar({ user }: PublicNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="kl-navbar d-flex align-items-center">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between w-100">
          {/* Brand Logo */}
          <Link href="/" className="d-flex align-items-center text-decoration-none">
            <Image
              src="/brand/kodeluma-logo-horizontal.png"
              alt="Kodeluma by Azzam Codex"
              width={160}
              height={38}
              priority
              style={{ objectFit: 'contain' }}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="d-none d-md-flex align-items-center gap-4">
            <Link
              href="/courses"
              className="text-decoration-none fw-semibold small text-secondary"
              style={{ transition: 'color 150ms ease' }}
            >
              Kelas
            </Link>
            <Link
              href="/learning-paths"
              className="text-decoration-none fw-semibold small text-secondary"
              style={{ transition: 'color 150ms ease' }}
            >
              Alur Belajar
            </Link>
            <Link
              href="/about"
              className="text-decoration-none fw-semibold small text-secondary"
              style={{ transition: 'color 150ms ease' }}
            >
              Tentang
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="d-none d-md-flex align-items-center gap-3">
            {user ? (
              <div className="d-flex align-items-center gap-2">
                <Link
                  href={user.role === 'admin' ? '/admin' : '/dashboard'}
                  className="kl-btn-primary d-inline-flex align-items-center gap-2 text-decoration-none small"
                >
                  <UserIcon size={16} strokeWidth={2} />
                  <span>{user.role === 'admin' ? 'Portal Admin' : 'Dashboard'}</span>
                </Link>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-decoration-none fw-semibold small px-3 py-2 text-dark"
                >
                  Masuk
                </Link>
                <Link
                  href="/register"
                  className="kl-btn-primary d-inline-flex align-items-center gap-2 text-decoration-none small"
                >
                  <span>Mulai Belajar</span>
                  <ArrowRight size={15} strokeWidth={2} />
                </Link>
              </>
            )}
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="btn d-md-none p-1 text-secondary"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Buka menu navigasi"
          >
            {isOpen ? <X size={26} strokeWidth={2} /> : <Menu size={26} strokeWidth={2} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div
            className="d-md-none py-3 mt-2 border-top bg-white"
            style={{
              position: 'absolute',
              top: '68px',
              left: 0,
              right: 0,
              padding: '20px',
              boxShadow: 'var(--kl-shadow-card)',
              zIndex: 1030,
            }}
          >
            <nav className="d-flex flex-column gap-3 mb-4">
              <Link
                href="/courses"
                className="text-decoration-none fw-semibold text-secondary py-1"
                onClick={() => setIsOpen(false)}
              >
                Katalog Kelas
              </Link>
              <Link
                href="/learning-paths"
                className="text-decoration-none fw-semibold text-secondary py-1"
                onClick={() => setIsOpen(false)}
              >
                Alur Belajar Pemula
              </Link>
              <Link
                href="/about"
                className="text-decoration-none fw-semibold text-secondary py-1"
                onClick={() => setIsOpen(false)}
              >
                Tentang Kodeluma
              </Link>
            </nav>

            <div className="d-flex flex-column gap-2 pt-2 border-top">
              {user ? (
                <Link
                  href={user.role === 'admin' ? '/admin' : '/dashboard'}
                  className="kl-btn-primary text-center text-decoration-none"
                  onClick={() => setIsOpen(false)}
                >
                  {user.role === 'admin' ? 'Buka Admin' : 'Buka Dashboard'}
                </Link>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="kl-btn-secondary text-center text-decoration-none py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Masuk ke Akun
                  </Link>
                  <Link
                    href="/register"
                    className="kl-btn-primary text-center text-decoration-none py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Mulai Belajar Gratis
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
