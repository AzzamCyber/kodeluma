import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertCircle, ArrowLeft, ShieldX } from 'lucide-react';
import { CertificateService } from '@/lib/services/certificateService';
import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { Footer } from '@/components/layout/Footer';
import { RealCertificateDocument } from '@/components/certificates/RealCertificateDocument';

interface VerifyPageProps {
  params: Promise<{ code: string }>;
}

export async function generateMetadata({ params }: VerifyPageProps): Promise<Metadata> {
  const { code } = await params;
  return {
    title: 'Verifikasi Sertifikat | KodeLuma',
    description: 'Periksa status sertifikat penyelesaian kursus KodeLuma berdasarkan kode verifikasi.',
    robots: { index: false, follow: false },
    alternates: { canonical: '/verify/' + encodeURIComponent(code) },
  };
}

export default async function VerifyCertificatePage({ params }: VerifyPageProps) {
  const { code } = await params;
  const verification = await CertificateService.verify(code);
  const certificate = verification.certificate;

  return (
    <div className="d-flex flex-column min-vh-100">
      <PublicNavbar />
      <main id="main-content" className="flex-grow-1 py-5">
        <div className="container" style={{ maxWidth: '1080px' }}>
          <div className="mb-4 d-print-none">
            <p className="kl-eyebrow mb-1">VERIFIKASI KODELUMA</p>
            <h1 className="h2 mb-2">Status sertifikat</h1>
            <p className="text-secondary mb-0">Hasil pemeriksaan berdasarkan catatan sertifikat KodeLuma.</p>
          </div>
          {certificate ? (
            <div>
              {!verification.isValid && (
                <div className="alert alert-danger d-flex align-items-center gap-2 d-print-none" role="status">
                  <ShieldX size={20} aria-hidden="true" />
                  Sertifikat ini telah dicabut dan tidak berlaku.
                </div>
              )}
              <RealCertificateDocument
                certificate={{
                  id: certificate.verifyCode,
                  verifyCode: certificate.verifyCode,
                  recipientName: certificate.recipientName,
                  courseTitle: certificate.courseTitle,
                  issuedAt: certificate.issuedAt,
                  revokedAt: certificate.revokedAt,
                }}
              />
              <p className="text-secondary small mt-3 d-print-none">
                Dokumen ini mencatat penyelesaian kursus KodeLuma. Status dapat berubah jika sertifikat dicabut.
              </p>
            </div>
          ) : (
            <div className="kl-card p-4 p-md-5 text-center">
              <AlertCircle size={36} className="text-danger mb-3" aria-hidden="true" />
              <h2 className="h4">Kode tidak ditemukan</h2>
              <p className="text-secondary">Tidak ada sertifikat KodeLuma untuk kode tersebut. Periksa kembali penulisannya.</p>
              <Link href="/verify" className="btn kl-btn-secondary d-inline-flex align-items-center gap-2">
                <ArrowLeft size={16} aria-hidden="true" /> Coba kode lain
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
