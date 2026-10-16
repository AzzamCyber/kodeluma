import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { Footer } from '@/components/layout/Footer';
import { KodelumaLottie } from '@/components/ui/KodelumaLottie';
import { Compass, Terminal } from 'lucide-react';
import { CourseRepository } from '@/lib/repositories/courseRepository';

export const metadata: Metadata = {
  title: 'Jalur Belajar Terstruktur (Learning Paths) | KodeLuma',
  description:
    'Temukan jalur belajar pemrograman yang bertahap dan lihat kelas yang sudah tersedia di KodeLuma.',
  alternates: {
    canonical: '/learning-paths',
  },
  openGraph: {
    title: 'Jalur Belajar Terstruktur (Learning Paths) | KodeLuma',
    description:
      'Jelajahi urutan kelas dan fokus materi pada setiap jalur belajar KodeLuma.',
    url: 'https://kodeluma.azzamcodex.id/learning-paths',
    siteName: 'KodeLuma by Azzam Codex',
    images: [
      {
        url: '/api/og?title=Jalur%20Belajar%20Terstruktur%20(Learning%20Paths)&desc=Kurikulum%20Terarah%20dari%20Dasar%20Hingga%20Mahir&badge=ROADMAP%20BELAJAR',
        width: 1200,
        height: 630,
        alt: 'Jalur Belajar KodeLuma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jalur Belajar Terstruktur | KodeLuma',
    description: 'Kurikulum terarah dari dasar hingga mahir.',
    images: [
      '/api/og?title=Jalur%20Belajar%20Terstruktur%20(Learning%20Paths)&desc=Kurikulum%20Terarah%20dari%20Dasar%20Hingga%20Mahir&badge=ROADMAP%20BELAJAR',
    ],
    creator: '@azzamcodex',
  },
};

import { LearningPathsViewer } from '@/components/learning-paths/LearningPathsViewer';

export const revalidate = 60;

export default async function LearningPathsPage() {
  const publishedCourses = await CourseRepository.listPublishedCourses();
  const availableCourseSlugs = publishedCourses.map((course) => course.slug);
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <PublicNavbar />

      <main id="main-content" className="flex-grow-1 py-5">
        <div className="container">
          {/* Header */}
          <div className="row align-items-center g-4 g-lg-5 mb-5">
            <div className="col-lg-7">
              <div className="kl-eyebrow">ROADMAP KURIKULUM LINTAS TEKNOLOGI</div>
              <h1 className="h1 fw-bold mb-3" style={{ color: 'var(--kl-ink)' }}>
                Temukan jalur belajarmu
              </h1>
              <p className="kl-lead mb-0" style={{ maxWidth: '680px' }}>
                Jelajahi urutan kelas dari dasar ke lanjutan. Pilih bidang yang menarik buatmu, lihat fokus setiap langkah, dan mulai dari kelas yang sudah terbit.
              </p>
            </div>
            <div className="col-lg-5">
              <div className="kl-roadmap-visual" role="img" aria-label="Ilustrasi tiga tahap jalur belajar coding">
                <KodelumaLottie
                  name="learning-roadmap"
                  src="/animations/learning-roadmap.json"
                  loop={false}
                  height="var(--kl-roadmap-lottie-height)"
                  fallback={<div className="kl-auth-lottie-fallback"><Compass size={72} strokeWidth={1.25} /></div>}
                />
              </div>
            </div>
          </div>

          {/* Interactive Learning Paths Viewer (Roadmap + Catalog) */}
          <LearningPathsViewer availableCourseSlugs={availableCourseSlugs} />

          {/* Bottom Action CTA */}
          <div className="text-center mt-5 p-5 bg-white rounded-4 border">
            <h2 className="h4 fw-bold mb-2 text-dark">Siap Memulai Langkah Pertamamu?</h2>
            <p className="text-secondary small mx-auto mb-4" style={{ maxWidth: '500px' }}>
              Daftar gratis, ikuti kelas interaktif, coba langsung di Code Lab, dan klaim sertifikat penyelesaian Kodeluma.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Link
                href="/courses"
                className="kl-btn-primary d-inline-flex align-items-center gap-2 text-decoration-none py-2.5 px-4 small"
              >
                <Compass size={16} />
                <span>Lihat Semua Kelas</span>
              </Link>
              <Link
                href="/lab"
                className="kl-btn-secondary d-inline-flex align-items-center gap-2 text-decoration-none py-2.5 px-4 small"
              >
                <Terminal size={16} />
                <span>Buka Code Lab</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
