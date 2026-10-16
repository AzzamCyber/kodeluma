import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { EditorialIllustration } from '@/components/ui/EditorialIllustration';

export function FinalCta() {
  return (
    <section className="py-5" style={{ backgroundColor: 'var(--kl-bg)' }}>
      <div className="container py-4">
        <div
          className="p-4 p-md-5 text-center rounded-4 shadow-sm"
          style={{
            backgroundColor: 'var(--kl-ink)',
            color: '#FFFFFF',
          }}
        >
          <EditorialIllustration kind="launch" className="kl-cta-art mb-3" tone="dark" />
          <div
            className="small fw-bold text-uppercase mb-3"
            style={{ color: '#93C5FD', letterSpacing: '0.12em' }}
          >
            MULAI DARI HAL YANG SEDERHANA
          </div>
          <h2 className="display-6 fw-bold mb-3 text-white">
            Setiap developer pernah jadi pemula.
          </h2>
          <p
            className="mx-auto mb-4"
            style={{ maxWidth: '520px', color: '#CBD5E1', fontSize: '16px', lineHeight: 1.7 }}
          >
            Bangun kebiasaan belajar coding yang konsisten dengan kurikulum bertahap, latihan nyata,
            dan dukungan komunitas.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <Link
              href="/register"
              className="btn btn-light fw-bold py-3 px-4 d-inline-flex align-items-center justify-content-center gap-2"
              style={{ borderRadius: '11px', color: 'var(--kl-ink)' }}
            >
              <span>Daftar Akun Gratis</span>
              <ArrowRight size={17} strokeWidth={2} />
            </Link>
            <Link
              href="/courses"
              className="btn btn-outline-light fw-bold py-3 px-4 d-inline-flex align-items-center justify-content-center gap-2"
              style={{ borderRadius: '11px' }}
            >
              Lihat Semua Kelas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
