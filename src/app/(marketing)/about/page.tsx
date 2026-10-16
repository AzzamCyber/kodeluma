import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { Footer } from '@/components/layout/Footer';
import { Code, CheckCircle, ShieldCheck, Heart } from 'lucide-react';
import { EditorialIllustration } from '@/components/ui/EditorialIllustration';

export const metadata: Metadata = {
  title: 'Tentang KodeLuma — Membuka Akses Coding untuk Siapa Saja',
  description:
    'Kenali misi KodeLuma by Azzam Codex: platform edukasi coding pemula berbahasa Indonesia yang dirancang ramah pemula, terstruktur, dan berbasis pembuktian kemampuan nyata.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'Tentang KodeLuma — Platform Edukasi Coding Indonesia',
    description:
      'Membuka akses belajar coding tanpa jargon rumit. Materi terarah, latihan nyata, dan sertifikat terverifikasi.',
    url: 'https://kodeluma.azzamcodex.id/about',
    siteName: 'KodeLuma by Azzam Codex',
    images: [
      {
        url: '/api/og?title=Tentang%20KodeLuma&desc=Membuka%20Akses%20Coding%20untuk%20Siapa%20Saja%20Berbahasa%20Indonesia&badge=TENTANG%20KAMI',
        width: 1200,
        height: 630,
        alt: 'Tentang KodeLuma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tentang KodeLuma | Azzam Codex',
    description: 'Membuka akses coding untuk siapa saja berbahasa Indonesia.',
    images: [
      '/api/og?title=Tentang%20KodeLuma&desc=Membuka%20Akses%20Coding%20untuk%20Siapa%20Saja%20Berbahasa%20Indonesia&badge=TENTANG%20KAMI',
    ],
    creator: '@azzamcodex',
  },
};

export default function AboutPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <PublicNavbar />

      <main id="main-content" className="flex-grow-1 py-5">
        <div className="container">
          <div className="text-center mb-5">
            <EditorialIllustration kind="community" className="kl-section-art kl-section-art--center mb-3" />
            <div className="kl-eyebrow">TENTANG KODELUMA</div>
            <h1 className="h1 fw-bold mb-3" style={{ color: 'var(--kl-ink)' }}>
              Membuka Akses Coding untuk Siapa Saja
            </h1>
            <p className="kl-lead mx-auto" style={{ maxWidth: '640px' }}>
              Kodeluma lahir dari keyakinan sederhana: belajar coding tidak boleh terasa menakutkan,
              membingungkan, atau dipenuhi jargon yang sulit dicerna.
            </p>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="kl-card h-100 p-4 border bg-white">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: 'var(--kl-primary-soft)',
                    color: 'var(--kl-primary)',
                  }}
                >
                  <Code size={22} />
                </div>
                <h3 className="h5 fw-bold mb-2">Materi Bertahap</h3>
                <p className="text-secondary small mb-0" style={{ lineHeight: 1.7 }}>
                  Setiap topik dipecah menjadi modul-modul kecil yang dapat diselesaikan dalam 10–15
                  menit, sehingga kamu bisa belajar secara konsisten setiap hari.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="kl-card h-100 p-4 border bg-white">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#ECFDF5',
                    color: '#059669',
                  }}
                >
                  <CheckCircle size={22} />
                </div>
                <h3 className="h5 fw-bold mb-2">Praktik Nyata</h3>
                <p className="text-secondary small mb-0" style={{ lineHeight: 1.7 }}>
                  Tidak hanya membaca teori. Kamu diajak mempraktikkan langsung contoh kode, menjawab
                  kuis pemahaman, dan mengirimkan hasil proyek portofolio.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="kl-card h-100 p-4 border bg-white">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#FEF3C7',
                    color: '#B45309',
                  }}
                >
                  <ShieldCheck size={22} />
                </div>
                <h3 className="h5 fw-bold mb-2">Transparan & Jujur</h3>
                <p className="text-secondary small mb-0" style={{ lineHeight: 1.7 }}>
                  Kami tidak menjanjikan gaji instan atau sertifikat palsu. Sertifikat Kodeluma adalah
                  bukti internal penyelesaian materi yang jujur dan dapat diverifikasi secara publik.
                </p>
              </div>
            </div>
          </div>

          <div
            className="p-5 rounded-4 border bg-white shadow-sm mb-5 text-center"
            style={{ maxWidth: '820px', margin: '0 auto' }}
          >
            <div className="d-inline-flex align-items-center justify-content-center text-danger mb-3">
              <Heart size={32} />
            </div>
            <h2 className="h4 fw-bold mb-3">Dibuat oleh Azzam Codex</h2>
            <p className="text-secondary small mb-4" style={{ lineHeight: 1.75 }}>
              Proyek ini dikembangkan sebagai karya Project-Based Learning (PBL) Workshop Desain Web
              (Topik No. 19: Platform Belajar Coding untuk Pemula). Dibangun dengan fondasi teknologi
              modern: Next.js App Router, TypeScript, Bootstrap 5, dan arsitektur data in-memory performa tinggi.
            </p>
            <Link href="/courses" className="kl-btn-primary text-decoration-none">
              Mulai Perjalanan Coding-mu Sekarang
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
