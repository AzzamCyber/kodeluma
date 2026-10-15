import React from 'react';
import Link from 'next/link';
import { Compass, ArrowLeft } from 'lucide-react';
import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { Footer } from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <PublicNavbar />

      <main id="main-content" className="flex-grow-1 py-5 d-flex align-items-center">
        <div className="container text-center" style={{ maxWidth: '540px' }}>
          <div
            className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
            style={{
              width: '64px',
              height: '64px',
              backgroundColor: 'var(--kl-primary-soft)',
              color: 'var(--kl-primary)',
            }}
          >
            <Compass size={32} />
          </div>
          <div className="kl-eyebrow">404 &middot; HALAMAN TIDAK DITEMUKAN</div>
          <h1 className="h2 fw-bold mb-3" style={{ color: 'var(--kl-ink)' }}>
            Sepertinya kamu tersesat.
          </h1>
          <p className="text-secondary small mb-4">
            Halaman yang kamu tuju tidak ditemukan atau mungkin telah dipindahkan ke tautan lain.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link
              href="/"
              className="kl-btn-primary d-inline-flex align-items-center gap-2 text-decoration-none"
            >
              <ArrowLeft size={16} />
              <span>Kembali ke Beranda</span>
            </Link>
            <Link href="/courses" className="kl-btn-secondary text-decoration-none">
              Jelajahi Kelas
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
