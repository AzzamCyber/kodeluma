import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { EditorialIllustration } from '@/components/ui/EditorialIllustration';

export function PathRoadmap() {
  const roadmapStages = [
    {
      step: '01',
      title: 'HTML Dasar',
      tag: 'Tersedia Sekarang',
      tagVariant: 'kl-badge-primary',
      description: 'Mengenal struktur dokumen, elemen teks, hyperlink, gambar, dan formulir web.',
      outcomes: ['Struktur dokumen semantik', 'Hierarki heading & paragraf', 'Navigasi hyperlink'],
      href: '/courses/html-dasar',
    },
    {
      step: '02',
      title: 'CSS Fundamental',
      tag: 'Tersedia Sekarang',
      tagVariant: 'kl-badge-primary',
      description: 'Menghias tampilan, memahami box model, flexbox, dan merancang halaman responsif.',
      outcomes: ['Selector & Specificity', 'Box Model & Spacing', 'Flexbox & Mobile Breakpoint'],
      href: '/courses/css-fundamental',
    },
    {
      step: '03',
      title: 'JavaScript Pemula',
      tag: 'Tersedia Sekarang',
      tagVariant: 'kl-badge-primary',
      description: 'Memberikan interaksi pada halaman web dengan logika pemrograman dan manipulasi DOM.',
      outcomes: ['Variabel & Tipe Data', 'Kondisional & Loop', 'Event Listener DOM'],
      href: '/courses/javascript-pemula',
    },
  ];

  return (
    <section className="kl-section bg-white border-top">
      <div className="container">
        <div className="row align-items-center g-4 mb-5">
          <div className="col-lg-7">
            <div className="kl-eyebrow">ALUR BELAJAR SISTEMATIS</div>
            <h2 className="h1 fw-bold mb-3" style={{ color: 'var(--kl-ink)' }}>
              Kurikulum terarah dari nol sampai bisa.
            </h2>
            <p className="kl-lead mb-0" style={{ maxWidth: '600px' }}>
              Jangan membuang waktu melompat-lompat materi. Kodeluma menyusun tahapan belajar yang
              saling menyambung secara logis.
            </p>
          </div>
          <div className="col-lg-5"><EditorialIllustration kind="roadmap" className="kl-section-art" /></div>
        </div>

        <div className="row g-4">
          {roadmapStages.map((stage, idx) => (
            <div key={idx} className="col-lg-4">
              <div className="kl-card h-100 p-4 d-flex flex-column border">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="fs-5 fw-bold text-muted font-monospace">{stage.step}</span>
                  <span className={`kl-badge ${stage.tagVariant}`}>{stage.tag}</span>
                </div>

                <h3 className="h4 fw-bold mb-2">{stage.title}</h3>
                <p className="text-secondary small mb-4">{stage.description}</p>

                <div className="mb-4 flex-grow-1">
                  <div className="fw-semibold small text-dark mb-2">Yang akan dipelajari:</div>
                  <ul className="list-unstyled small d-flex flex-column gap-2 text-secondary m-0">
                    {stage.outcomes.map((item, oIdx) => (
                      <li key={oIdx} className="d-flex align-items-center gap-2">
                        <CheckCircle2 size={15} className="text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={stage.href}
                  className="kl-btn-secondary d-flex align-items-center justify-content-between text-decoration-none small"
                >
                  <span>Buka Silabus Kelas</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
