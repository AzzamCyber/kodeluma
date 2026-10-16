import React from 'react';
import type { Metadata } from 'next';
import { CourseRepository } from '@/lib/repositories/courseRepository';
import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { Footer } from '@/components/layout/Footer';
import { CourseCatalogView } from '@/components/courses/CourseCatalogView';
import { MOCK_COURSES } from '@/lib/mockData';
import { EditorialIllustration } from '@/components/ui/EditorialIllustration';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Katalog Kelas Pemrograman Lengkap | KodeLuma',
  description:
    'Jelajahi 22 kurikulum kelas coding standar industri: Frontend, Backend, Database, Cloud & DevOps, Pemrograman Dasar hingga Mahir dengan modul interaktif.',
  alternates: {
    canonical: '/courses',
  },
  openGraph: {
    title: 'Katalog Kelas Pemrograman Lengkap | KodeLuma',
    description:
      'Pelajari teknologi web modern dari dasar. 22 kelas standar industri dengan latihan nyata dan sertifikat terverifikasi.',
    url: 'https://kodeluma.azzamcodex.id/courses',
    siteName: 'KodeLuma by Azzam Codex',
    images: [
      {
        url: '/api/og?title=Katalog%20Kelas%20Pemrograman%20Lengkap&desc=22%20Kelas%20Standar%20Industri%20Frontend%2C%20Backend%2C%20Database%2C%20dan%20DevOps&badge=KATALOG%20KELAS',
        width: 1200,
        height: 630,
        alt: 'Katalog Kelas KodeLuma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Katalog Kelas Pemrograman Lengkap | KodeLuma',
    description: '22 kelas coding standar industri berbahasa Indonesia.',
    images: [
      '/api/og?title=Katalog%20Kelas%20Pemrograman%20Lengkap&desc=22%20Kelas%20Standar%20Industri%20Frontend%2C%20Backend%2C%20Database%2C%20dan%20DevOps&badge=KATALOG%20KELAS',
    ],
    creator: '@azzamcodex',
  },
};

export default async function CoursesPage() {
  let courses = await CourseRepository.listPublishedCourses();

  // Fallback to MOCK_COURSES if Redis has no courses yet
  if (!courses || courses.length === 0) {
    courses = MOCK_COURSES;
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <PublicNavbar />

      <main id="main-content" className="flex-grow-1 py-5">
        <div className="container">
          <div className="row align-items-center g-3 mb-4">
            <div className="col-md-8">
            <div className="kl-eyebrow">KATALOG KELAS KODELUMA</div>
            <h1 className="h2 fw-bold mb-2" style={{ color: 'var(--kl-ink)' }}>
              Pilih kelas pertamamu.
            </h1>
            <p className="text-secondary small mb-0" style={{ maxWidth: '560px' }}>
              Pelajari teknologi web modern dari dasar. Setiap modul dilengkapi materi teks mendalam,
              kuis evaluasi, dan proyek praktik nyata.
            </p>
            </div>
            <div className="col-md-4"><EditorialIllustration kind="courses" className="kl-page-art" /></div>
          </div>

          <CourseCatalogView initialCourses={courses} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
