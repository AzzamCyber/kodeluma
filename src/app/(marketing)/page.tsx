import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/marketing/Hero';
import { LearningSteps } from '@/components/marketing/LearningSteps';
import { PathRoadmap } from '@/components/marketing/PathRoadmap';
import { FaqSection } from '@/components/marketing/FaqSection';
import { FinalCta } from '@/components/marketing/FinalCta';
import { CourseCard } from '@/components/courses/CourseCard';
import { MOCK_COURSES } from '@/lib/mockData';
import { RealLearningFeatures } from '@/components/marketing/RealLearningFeatures';
import { TechLogoGallery } from '@/components/marketing/TechLogoGallery';
import { EditorialIllustration } from '@/components/ui/EditorialIllustration';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'KodeLuma — Belajar Coding dari Nol Sampai Mahir | Kurikulum Standar Industri',
  description:
    'Platform belajar pemrograman interaktif berbahasa Indonesia. Kuasai Web Development, Python, JavaScript, Database, DevOps, dan backend modern melalui modul mendalam, kuis, dan proyek portofolio.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'KodeLuma — Belajar Coding dari Nol Sampai Mahir',
    description:
      'Kuasai coding dari nol dengan 22 kurikulum standar industri, latihan nyata di browser, proyek portofolio, dan sertifikat terverifikasi.',
    url: 'https://kodeluma.azzamcodex.id',
    siteName: 'KodeLuma by Azzam Codex',
    images: [
      {
        url: '/api/og?title=Belajar%20Coding%20dari%20Nol%20Sampai%20Mahir&desc=22%20Kelas%20Standar%20Industri%20%E2%80%A2%20Proyek%20Portofolio%20Nyata%20%E2%80%A2%20Sertifikat%20Resmi&badge=PLATFORM%20EDUKASI%20INDONESIA',
        width: 1200,
        height: 630,
        alt: 'KodeLuma Platform Belajar Coding Indonesia',
      },
    ],
  },
};

const homeFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Apakah Kodeluma cocok untuk orang yang belum pernah belajar coding sama sekali?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sangat cocok. Kurikulum Kodeluma dirancang dari pemahaman paling mendasar tanpa asumsi bahwa kamu sudah memiliki latar belakang IT. Semua istilah teknis dijelaskan dengan analogi sederhana dalam bahasa Indonesia.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah saya perlu menginstal aplikasi berat untuk mulai belajar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tidak. Pada tahap awal, kamu cukup menggunakan browser web dan teks editor sederhana di komputermu untuk mempraktikkan materi.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bagaimana cara mendapatkan sertifikat penyelesaian modul?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sertifikat penyelesaian Kodeluma akan terbuka secara otomatis di akunmu setelah kamu menyelesaikan 100% pelajaran wajib dalam suatu kelas, lulus kuis evaluasi dengan skor minimal 70%, dan mengirimkan proyek praktik yang dipersyaratkan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah sertifikat Kodeluma merupakan sertifikasi profesi resmi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bukan. Sertifikat Kodeluma adalah bukti penyelesaian modul pembelajaran internal kami yang dapat diverifikasi publik melalui kode unik di kodeluma.azzamcodex.id/verify.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bagaimana jika saya mengalami kesulitan saat mengerjakan latihan kode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kamu dapat memanfaatkan Forum Diskusi Kodeluma untuk berdiskusi, bertanya kepada komunitas, atau melihat cara teman-teman lain menyelesaikan tantangan serupa.',
      },
    },
  ],
};

export default function HomePage() {
  const basicCourses = MOCK_COURSES.filter((course) => course.level === 'pemula');

  return (
    <div className="d-flex flex-column min-vh-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />
      <PublicNavbar />

      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Real Learning Features (Belajar dengan cara yang lebih nyata) */}
        <RealLearningFeatures />

        {/* 3. Featured Courses Section */}
        <section className="kl-section bg-white" id="featured-courses">
          <div className="container">
            <div className="row align-items-center g-4 mb-5">
              <div className="col-lg-7">
                <div className="kl-eyebrow">KELAS PILIHAN UNTUK PEMULA</div>
                <h2 className="h1 fw-bold mb-2" style={{ color: 'var(--kl-ink)' }}>
                  Mulai dari dasar, bangun keahlian.
                </h2>
                <p className="kl-lead mb-0" style={{ maxWidth: '540px' }}>
                  Pilih topik yang ingin kamu pelajari. Setiap kelas disusun bertahap agar mudah
                  dipahami dan langsung dipraktikkan.
                </p>
              </div>
              <div className="col-lg-5">
                <EditorialIllustration kind="courses" className="kl-section-art" />
              </div>
              <div className="col-12">
                <Link
                  href="/courses"
                  className="kl-btn-secondary d-inline-flex align-items-center gap-2 text-decoration-none small"
                >
                  <span>Lihat Semua Kelas</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Courses Grid */}
            <div className="row g-4">
              {basicCourses.map((course) => (
                <div key={course.id} className="col-lg-4 col-md-6">
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Complete Technology Discovery Gallery */}
        <TechLogoGallery />

        {/* 5. 3-Step Learning Workflow */}
        <LearningSteps />

        {/* 6. Curriculum Roadmap */}
        <PathRoadmap />

        {/* 7. FAQ Accordion */}
        <FaqSection />

        {/* 8. Final Navy Conversion CTA */}
        <FinalCta />
      </main>

      <Footer />
    </div>
  );
}
