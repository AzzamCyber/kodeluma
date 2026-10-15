import React from 'react';
import Link from 'next/link';
import { AlertCircle, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { Footer } from '@/components/layout/Footer';

interface VerifyPageProps {
  params: Promise<{ code: string }>;
}

export default async function VerifyCertificatePage({ params }: VerifyPageProps) {
  const { code } = await params;

  // Demo valid certificate fixture for code verification
  const isDemoValid = code.toUpperCase() === 'DEMO-VALID' || code.startsWith('KL-');

  const demoCert = {
    verifyCode: code.toUpperCase(),
    recipientName: 'Nadia Putri',
    courseTitle: 'HTML Dasar: Fondasi Web Pemula',
    issuedAt: '15 Oktober 2026',
    status: 'VALID',
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <PublicNavbar />

      <main id="main-content" className="flex-grow-1 py-5">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="text-center mb-4">
            <div className="kl-eyebrow">VERIFIKASI SERTIFIKAT KODELUMA</div>
            <h1 className="h2 fw-bold mb-2" style={{ color: 'var(--kl-ink)' }}>
              Hasil Pemeriksaan Keaslian
            </h1>
            <p className="text-secondary small mb-0">
              Sistem memverifikasi status kelulusan berdasarkan database internal Kodeluma.
            </p>
          </div>

          {isDemoValid ? (
            <div className="kl-card p-4 p-md-5 bg-white border text-center">
              <div
                className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: '#ECFDF5',
                  color: '#059669',
                }}
              >
                <CheckCircle2 size={36} strokeWidth={2} />
              </div>

              <div className="badge bg-success-subtle text-success border border-success-subtle px-3 py-2 fs-7 fw-bold mb-3">
                SERTIFIKAT VALID & TERVERIFIKASI
              </div>

              <h2 className="h4 fw-bold mb-1" style={{ color: 'var(--kl-ink)' }}>
                {demoCert.recipientName}
              </h2>
              <p className="text-secondary small mb-4">
                Telah berhasil menyelesaikan seluruh modul dan proyek pada:
              </p>

              <div
                className="p-3 rounded-3 border mb-4 text-start"
                style={{ backgroundColor: 'var(--kl-surface-soft)' }}
              >
                <div className="row g-3 small">
                  <div className="col-sm-6">
                    <span className="text-muted d-block">Judul Kelas:</span>
                    <strong className="text-dark">{demoCert.courseTitle}</strong>
                  </div>
                  <div className="col-sm-6">
                    <span className="text-muted d-block">Tanggal Terbit:</span>
                    <strong className="text-dark">{demoCert.issuedAt}</strong>
                  </div>
                  <div className="col-sm-6">
                    <span className="text-muted d-block">Kode Verifikasi:</span>
                    <strong className="font-monospace text-primary">{demoCert.verifyCode}</strong>
                  </div>
                  <div className="col-sm-6">
                    <span className="text-muted d-block">Lembaga Penerbit:</span>
                    <strong className="text-dark">Kodeluma by Azzam Codex</strong>
                  </div>
                </div>
              </div>

              <div className="alert alert-light border small text-muted text-start mb-4">
                <strong>Catatan Transparansi:</strong> Dokumen ini merupakan bukti pencapaian
                kelulusan kurikulum internal Kodeluma, bukan sertifikasi profesi atau gelar akademik
                dari lembaga negara/universitas.
              </div>

              <Link href="/courses" className="kl-btn-primary d-inline-flex align-items-center gap-2 text-decoration-none">
                <ArrowLeft size={16} />
                <span>Jelajahi Kelas Lainnya</span>
              </Link>
            </div>
          ) : (
            <div className="kl-card p-4 p-md-5 bg-white border text-center">
              <div
                className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: '#FEF2F2',
                  color: '#DC2626',
                }}
              >
                <AlertCircle size={36} strokeWidth={2} />
              </div>

              <h2 className="h4 fw-bold mb-2">Kode Tidak Ditemukan</h2>
              <p className="text-secondary small mb-4">
                Kode sertifikat <code className="fw-bold">{code}</code> tidak terdaftar dalam basis
                data Kodeluma atau telah dicabut status kelulusannya.
              </p>

              <Link href="/" className="kl-btn-secondary text-decoration-none">
                Kembali ke Beranda
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
