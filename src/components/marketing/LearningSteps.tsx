import React from 'react';
import { BookOpen, Code2, Award } from 'lucide-react';

export function LearningSteps() {
  const steps = [
    {
      num: '01 / PILIH',
      title: 'Tentukan materi pertama',
      description:
        'Pilih jalur belajar yang paling ingin kamu kuasai, mulai dari fondasi struktur HTML, estetika CSS, hingga logika interaktif JavaScript.',
      icon: BookOpen,
    },
    {
      num: '02 / PRAKTIK',
      title: 'Pelajari dan coba langsung',
      description:
        'Baca penjelasan konsep dalam bahasa Indonesia yang ringkas, kerjakan kuis pemahaman, dan bangun proyek mini dari instruksi terarah.',
      icon: Code2,
    },
    {
      num: '03 / BUKTIKAN',
      title: 'Pantau kemajuan belajar',
      description:
        'Setiap pelajaran yang diselesaikan akan dicatat di dasbor belajarmu, dan sertifikat pencapaian internal dapat diterbitkan saat modul tuntas.',
      icon: Award,
    },
  ];

  return (
    <section className="kl-section" style={{ backgroundColor: 'var(--kl-surface-soft)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="kl-eyebrow">CARA BELAJAR DI KODELUMA</div>
          <h2 className="h1 fw-bold mb-3" style={{ color: 'var(--kl-ink)' }}>
            Tiga langkah terarah untuk berkembang.
          </h2>
          <p className="kl-lead mx-auto" style={{ maxWidth: '580px' }}>
            Kamu tidak perlu bingung harus mulai dari mana. Ikuti langkah demi langkah yang sudah
            disusun khusus bagi yang baru pertama kali menyentuh kode.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="row g-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="col-md-4">
                <div className="kl-card h-100 p-4 bg-white d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="fw-bold small" style={{ color: 'var(--kl-primary)' }}>
                      {step.num}
                    </span>
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: 'var(--kl-primary-soft)',
                        color: 'var(--kl-primary)',
                      }}
                    >
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                  </div>
                  <h3 className="h5 fw-bold mb-2">{step.title}</h3>
                  <p className="text-secondary small mb-0 flex-grow-1" style={{ lineHeight: 1.7 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
