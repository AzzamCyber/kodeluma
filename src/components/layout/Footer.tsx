import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-5 mt-auto"
      style={{
        backgroundColor: 'var(--kl-ink)',
        color: '#CBD5E1',
        borderTop: '1px solid #1E3A5F',
      }}
    >
      <div className="container py-lg-4">
        <div className="row g-4 mb-5">
          {/* Column 1: Brand Info */}
          <div className="col-lg-4 col-md-6">
            <Link href="/" className="d-inline-flex align-items-center mb-3 text-decoration-none">
              <Image
                src="/brand/kodeluma-logo-horizontal.png"
                alt="Kodeluma by Azzam Codex"
                width={154}
                height={36}
                style={{
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </Link>
            <p className="small mb-3" style={{ maxWidth: '320px', lineHeight: 1.7, color: '#94A3B8' }}>
              Belajar coding dari konsep, praktik, sampai karya. Platform belajar pemula berbahasa Indonesia
              dengan editor interaktif, terminal virtual, dan progres tersimpan.
            </p>
            <div className="small" style={{ color: '#94A3B8' }}>
              Inisiatif edutech dari{' '}
              <a
                href="https://azzamcodex.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none fw-semibold"
              >
                Azzam Codex &rarr;
              </a>
            </div>
          </div>

          {/* Column 2: Jelajahi */}
          <div className="col-lg-2 col-md-6 col-6">
            <h4 className="fs-6 fw-bold mb-3 text-white">Jelajahi</h4>
            <ul className="list-unstyled small d-flex flex-column gap-2 mb-0">
              <li>
                <Link href="/courses" className="text-decoration-none text-light opacity-75 hover-opacity-100">
                  Katalog Kelas
                </Link>
              </li>
              <li>
                <Link href="/learning-paths" className="text-decoration-none text-light opacity-75 hover-opacity-100">
                  Alur Belajar
                </Link>
              </li>
              <li>
                <Link href="/lab" className="text-decoration-none text-light opacity-75 hover-opacity-100">
                  Code Lab
                </Link>
              </li>
              <li>
                <Link href="/quests" className="text-decoration-none text-light opacity-75 hover-opacity-100">
                  Quest & XP
                </Link>
              </li>
              <li>
                <Link href="/forum" className="text-decoration-none text-light opacity-75 hover-opacity-100">
                  Komunitas
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Kurikulum */}
          <div className="col-lg-3 col-md-6 col-6">
            <h4 className="fs-6 fw-bold mb-3 text-white">Materi & Jalur</h4>
            <ul className="list-unstyled small d-flex flex-column gap-2 mb-0">
              <li>
                <Link href="/courses/html-dasar" className="text-decoration-none text-light opacity-75 hover-opacity-100">
                  HTML Dasar
                </Link>
              </li>
              <li>
                <Link href="/courses/css-fundamental" className="text-decoration-none text-light opacity-75 hover-opacity-100">
                  CSS Fundamental
                </Link>
              </li>
              <li>
                <Link href="/courses/javascript-pemula" className="text-decoration-none text-light opacity-75 hover-opacity-100">
                  JavaScript Pemula
                </Link>
              </li>
              <li>
                <Link href="/lab/terminal" className="text-decoration-none text-light opacity-75 hover-opacity-100">
                  Terminal & Git Virtual
                </Link>
              </li>
              <li>
                <span className="text-muted" style={{ fontSize: '13px' }}>
                  Python Pemula (Segera Hadir)
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Bantuan & Legal */}
          <div className="col-lg-3 col-md-6">
            <h4 className="fs-6 fw-bold mb-3 text-white">Bantuan & Legal</h4>
            <ul className="list-unstyled small d-flex flex-column gap-2 mb-0">
              <li>
                <Link href="/about" className="text-decoration-none text-light opacity-75 hover-opacity-100">
                  Tentang Kodeluma
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-decoration-none text-light opacity-75 hover-opacity-100">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-decoration-none text-light opacity-75 hover-opacity-100">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link href="/verify" className="text-decoration-none text-light opacity-75 hover-opacity-100">
                  Verifikasi Sertifikat
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Rule */}
        <div
          className="d-flex flex-column flex-sm-row justify-content-between align-items-center pt-4 small gap-2"
          style={{ borderTop: '1px solid #1E3A5F', color: '#94A3B8' }}
        >
          <div>
            &copy; {currentYear} <strong className="text-white">Kodeluma</strong>. Crafted by Azzam Codex.
          </div>
          <div>PBL Workshop Desain Web &middot; Topik 19 Platform Belajar Coding Pemula</div>
        </div>
      </div>
    </footer>
  );
}
