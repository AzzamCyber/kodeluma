'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TechLogo, TECH_REGISTRY } from '@/components/ui/TechLogo';
import { EditorialIllustration } from '@/components/ui/EditorialIllustration';

interface TechItemMeta {
  slug: string;
  category: 'web' | 'lang' | 'backend' | 'topic';
  categories?: ('web' | 'lang' | 'backend' | 'topic')[];
  status: 'available' | 'upcoming';
  description: string;
  courseSlug?: string;
}

const TECH_CATALOG: TechItemMeta[] = [
  { slug: 'html5', category: 'web', status: 'available', description: 'Struktur dasar dokumen web standar', courseSlug: 'html-dasar' },
  { slug: 'css3', category: 'web', status: 'available', description: 'Desain layout & styling visual', courseSlug: 'css-fundamental' },
  { slug: 'javascript', category: 'lang', categories: ['web'], status: 'available', description: 'Logika interaktif dan DOM web', courseSlug: 'javascript-pemula' },
  { slug: 'typescript', category: 'lang', categories: ['web', 'backend'], status: 'available', description: 'JavaScript dengan sistem tipe ketat', courseSlug: 'typescript-pemula' },
  { slug: 'react', category: 'web', status: 'available', description: 'Pustaka komponen antarmuka web modern', courseSlug: 'react-dasar' },
  { slug: 'nodejs', category: 'backend', categories: ['lang'], status: 'available', description: 'Runtime server berbasis JavaScript', courseSlug: 'nodejs-dasar' },
  { slug: 'python', category: 'lang', categories: ['backend'], status: 'available', description: 'Bahasa serbaguna pemula hingga AI', courseSlug: 'python-dasar' },
  { slug: 'go', category: 'lang', categories: ['backend'], status: 'available', description: 'Bahasa backend cepat & goroutine', courseSlug: 'go-dasar' },
  { slug: 'php', category: 'lang', categories: ['backend', 'web'], status: 'available', description: 'Bahasa web dinamis server-side & PDO', courseSlug: 'php-dasar' },
  { slug: 'postgresql', category: 'backend', categories: ['topic'], status: 'available', description: 'Basis data relasional standar industri', courseSlug: 'postgresql-dasar' },
  { slug: 'redis', category: 'backend', categories: ['topic'], status: 'available', description: 'Penyimpanan in-memory & caching arsitektur', courseSlug: 'redis-dasar' },
  { slug: 'linux', category: 'backend', status: 'available', description: 'Sistem operasi server & perintah CLI', courseSlug: 'linux-dasar' },
  { slug: 'git', category: 'backend', categories: ['web'], status: 'available', description: 'Kontrol versi & kolaborasi kode', courseSlug: 'git-dasar' },
  { slug: 'docker', category: 'backend', status: 'available', description: 'Kontainerisasi aplikasi terisolasi', courseSlug: 'docker-dasar' },
  { slug: 'java', category: 'lang', categories: ['backend'], status: 'available', description: 'Pemrograman berbasis objek enterprise', courseSlug: 'java-dasar' },
  { slug: 'cplusplus', category: 'lang', status: 'available', description: 'Pemrograman sistem & dasar algoritma', courseSlug: 'cpp-dasar' },
  { slug: 'sql', category: 'topic', categories: ['backend'], status: 'available', description: 'Manipulasi data terstruktur relasional', courseSlug: 'sql-dasar' },
  { slug: 'bootstrap', category: 'web', status: 'available', description: 'Framework UI responsif berbasis grid' },
  { slug: 'nextjs', category: 'web', status: 'upcoming', description: 'Framework full-stack React terdepan' },
  { slug: 'algorithms', category: 'topic', status: 'upcoming', description: 'Struktur data & efisiensi komputasi' },
];

type TechCategory = 'all' | 'web' | 'lang' | 'backend' | 'topic';

export function TechLogoGallery() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>('all');

  const filtered = activeCategory === 'all'
    ? TECH_CATALOG
    : TECH_CATALOG.filter((t) => t.category === activeCategory || t.categories?.includes(activeCategory));

  return (
    <section className="kl-section bg-light" id="tech-gallery">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <EditorialIllustration kind="technology" className="kl-section-art kl-section-art--center mb-3" />
          <div className="kl-eyebrow">TEKNOLOGI & KURIKULUM LENGKAP</div>
          <h2 className="h1 fw-bold mb-3" style={{ color: 'var(--kl-ink)' }}>
            Pelajari teknologi standar industri yang relevan.
          </h2>
          <p className="kl-lead mx-auto mb-4" style={{ maxWidth: '640px' }}>
            Dari fondasi web, Python, basis data, hingga ekosistem modern yang paling banyak digunakan
            oleh pengembang perangkat lunak profesional.
          </p>

          {/* Filter Pills */}
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {[
              { id: 'all' as const, label: 'Semua Teknologi' },
              { id: 'web' as const, label: 'Web & UI' },
              { id: 'lang' as const, label: 'Bahasa Pemrograman' },
              { id: 'backend' as const, label: 'Backend & DevOps' },
              { id: 'topic' as const, label: 'Topik Studi' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`btn btn-sm px-3 py-2 fw-semibold rounded-pill transition-all ${
                  activeCategory === cat.id
                    ? 'btn-primary shadow-sm'
                    : 'btn-outline-secondary border-0 bg-white'
                }`}
                style={{ fontSize: '13px' }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Tech Cards */}
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-3">
          {filtered.map((item) => {
            const reg = TECH_REGISTRY[item.slug];
            const isAvailable = item.status === 'available';

            const cardContent = (
              <div
                className="card h-100 border p-3 text-center transition-all bg-white shadow-sm"
                style={{
                  borderRadius: 'var(--kl-radius-md)',
                  transition: 'transform 150ms ease, box-shadow 150ms ease, border-color 150ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = 'var(--kl-shadow-card)';
                  e.currentTarget.style.borderColor = 'var(--kl-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '';
                  e.currentTarget.style.borderColor = 'var(--kl-border)';
                }}
              >
                <div className="d-flex justify-content-center mb-2">
                  <TechLogo slug={item.slug} size={40} />
                </div>
                <h3 className="fs-6 fw-bold mb-1 text-dark text-truncate">
                  {reg?.name || item.slug}
                </h3>
                <p className="text-secondary mb-2 text-truncate" style={{ fontSize: '11px' }}>
                  {item.description}
                </p>
                <div className="mt-auto">
                  <span
                    className={`badge small fw-semibold ${
                      isAvailable ? 'bg-success-subtle text-success' : 'bg-secondary-subtle text-secondary'
                    }`}
                    style={{ fontSize: '10px' }}
                  >
                    {isAvailable ? 'Tersedia' : 'Segera Hadir'}
                  </span>
                </div>
              </div>
            );

            return (
              <div key={item.slug} className="col">
                {item.courseSlug ? (
                  <Link href={`/courses/${item.courseSlug}`} className="text-decoration-none d-block h-100">
                    {cardContent}
                  </Link>
                ) : (
                  cardContent
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
