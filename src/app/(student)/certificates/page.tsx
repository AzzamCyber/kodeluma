import React from 'react';
import { requireUser } from '@/lib/auth/guard';
import { CertificateRepository } from '@/lib/repositories/certificateRepository';
import { StudentNavbar } from '@/components/layout/StudentNavbar';
import { Footer } from '@/components/layout/Footer';
import { StudentCertificatesViewer } from '@/components/certificates/StudentCertificatesViewer';

export default async function CertificatesPage() {
  const user = await requireUser();
  const certificates = await CertificateRepository.getUserCertificates(user.id);

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <StudentNavbar user={user} />

      <main id="main-content" className="flex-grow-1 py-4">
        <div className="container" style={{ maxWidth: '1140px' }}>
          <div className="mb-3 d-print-none">
              <div className="kl-eyebrow">REKAM BELAJAR KODELUMA</div>
              <h1 className="h2 fw-bold mb-2" style={{ color: 'var(--kl-ink)' }}>Sertifikat Penyelesaian</h1>
              <p className="text-secondary small mb-0" style={{ maxWidth: '740px' }}>
                Simpan pencapaian belajarmu dalam sertifikat KodeLuma. Setiap dokumen memiliki kode unik yang dapat diperiksa pada halaman verifikasi.
              </p>
          </div>

          <StudentCertificatesViewer certificates={certificates} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
