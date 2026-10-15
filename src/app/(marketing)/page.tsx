import React from 'react';
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

export default function HomePage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <PublicNavbar />

      <main id="main-content">
        {/* Hero Section */}
        <Hero />

        {/* Featured Courses Section */}
        <section className="kl-section bg-white" id="featured-courses">
          <div className="container">
            <div className="d-flex flex-column flex-md-row md-align-items-end justify-content-between mb-5">
              <div>
                <div className="kl-eyebrow">KELAS PILIHAN UNTUK PEMULA</div>
                <h2 className="h1 fw-bold mb-2" style={{ color: 'var(--kl-ink)' }}>
                  Mulai dari dasar, bangun keahlian.
                </h2>
                <p className="kl-lead mb-0" style={{ maxWidth: '540px' }}>
                  Pilih topik yang ingin kamu pelajari. Setiap kelas disusun bertahap agar mudah
                  dipahami dan langsung dipraktikkan.
                </p>
              </div>
              <div className="mt-3 mt-md-0">
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
              {MOCK_COURSES.map((course) => (
                <div key={course.id} className="col-lg-4 col-md-6">
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3 Step Learning Workflow */}
        <LearningSteps />

        {/* Curriculum Roadmap */}
        <PathRoadmap />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Final Navy CTA */}
        <FinalCta />
      </main>

      <Footer />
    </div>
  );
}
