import React from 'react';
import Link from 'next/link';
import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { Footer } from '@/components/layout/Footer';
import { PathRoadmap } from '@/components/marketing/PathRoadmap';
import { ArrowRight, Compass } from 'lucide-react';

export default function LearningPathsPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <PublicNavbar />

      <main id="main-content" className="flex-grow-1 py-5">
        <div className="container">
          <div className="text-center mb-5">
            <div className="kl-eyebrow">ROADMAP PEMBELAJARAN</div>
            <h1 className="h1 fw-bold mb-3" style={{ color: 'var(--kl-ink)' }}>
              Alur Belajar Web Developer Pemula
            </h1>
            <p className="kl-lead mx-auto" style={{ maxWidth: '640px' }}>
              Panduan jalur belajar terstruktur bagi kamu yang ingin menguasai pembuatan website modern,
              dimulai dari elemen dasar hingga interaktivitas frontend.
            </p>
          </div>

          <PathRoadmap />

          <div className="text-center mt-5">
            <Link
              href="/courses"
              className="kl-btn-primary d-inline-flex align-items-center gap-2 text-decoration-none py-3 px-4"
            >
              <Compass size={18} />
              <span>Jelajahi Semua Kelas Tersedia</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
