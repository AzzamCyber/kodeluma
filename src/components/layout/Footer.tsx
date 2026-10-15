import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-top bg-white py-5 mt-auto">
      <div className="container">
        <div className="row g-4 mb-5">
          {/* Brand Info */}
          <div className="col-lg-4 col-md-6">
            <Link href="/" className="d-inline-block mb-3">
              <Image
                src="/brand/kodeluma-logo-horizontal.png"
                alt="Kodeluma by Azzam Codex"
                width={154}
                height={36}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <p className="text-secondary small mb-3" style={{ maxWidth: '320px', lineHeight: 1.7 }}>
              Platform belajar coding pemula berbahasa Indonesia. Belajar langkah demi langkah
              dengan kurikulum terarah, latihan nyata, dan sertifikat kelulusan.
            </p>
            <div className="small text-muted">
              Sub-brand dari <strong>Azzam Codex</strong>
            </div>
          </div>

          {/* Navigasi Pembelajaran */}
          <div className="col-lg-2 col-md-6 col-6">
            <h4 className="fs-6 fw-bold mb-3 text-dark">Materi</h4>
            <ul className="list-unstyled small d-flex flex-column gap-2 mb-0">
              <li>
                <Link href="/courses/html-dasar" className="text-secondary text-decoration-none">
                  HTML Dasar
                </Link>
              </li>
              <li>
                <Link href="/courses/css-fundamental" className="text-secondary text-decoration-none">
                  CSS Fundamental
                </Link>
              </li>
              <li>
                <Link href="/courses/javascript-pemula" className="text-secondary text-decoration-none">
                  JavaScript Pemula
                </Link>
              </li>
              <li>
                <Link href="/learning-paths" className="text-secondary text-decoration-none">
                  Alur Belajar
                </Link>
              </li>
            </ul>
          </div>

          {/* Fitur Interaktif */}
          <div className="col-lg-3 col-md-6 col-6">
            <h4 className="fs-6 fw-bold mb-3 text-dark">Platform</h4>
            <ul className="list-unstyled small d-flex flex-column gap-2 mb-0">
              <li>
                <Link href="/courses" className="text-secondary text-decoration-none">
                  Katalog Kelas
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-secondary text-decoration-none">
                  Proyek Praktik
                </Link>
              </li>
              <li>
                <Link href="/forum" className="text-secondary text-decoration-none">
                  Forum Diskusi
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary text-decoration-none">
                  Tentang Kodeluma
                </Link>
              </li>
            </ul>
          </div>

          {/* Legalitas & Verifikasi */}
          <div className="col-lg-3 col-md-6">
            <h4 className="fs-6 fw-bold mb-3 text-dark">Bantuan & Legal</h4>
            <ul className="list-unstyled small d-flex flex-column gap-2 mb-0">
              <li>
                <Link href="/privacy" className="text-secondary text-decoration-none">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-secondary text-decoration-none">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link href="/verify/DEMO-VALID" className="text-secondary text-decoration-none">
                  Verifikasi Sertifikat
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center pt-4 border-top text-secondary small gap-2">
          <div>
            &copy; {currentYear} <strong>Kodeluma</strong>. Hak cipta dilindungi undang-undang.
          </div>
          <div>Crafted with excellence by Azzam Codex &middot; Topik 19 PBL Web Design</div>
        </div>
      </div>
    </footer>
  );
}
