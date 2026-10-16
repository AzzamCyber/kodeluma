import type { Metadata } from 'next';
import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { Footer } from '@/components/layout/Footer';
import { VerifyLookupForm } from '@/components/certificates/VerifyLookupForm';
import { EditorialIllustration } from '@/components/ui/EditorialIllustration';

export const metadata: Metadata = {
  title: 'Verifikasi Sertifikat | KodeLuma',
  description:
    'Periksa status sertifikat penyelesaian kursus KodeLuma berdasarkan kode verifikasi.',
  alternates: {
    canonical: '/verify',
  },
  openGraph: {
    title: 'Verifikasi Sertifikat | KodeLuma',
    description:
      'Periksa status sertifikat penyelesaian kursus KodeLuma.',
    siteName: 'KodeLuma by Azzam Codex',
    images: [
      {
        url: '/api/og?title=Verifikasi%20Sertifikat&desc=Periksa%20status%20sertifikat%20penyelesaian%20kursus%20KodeLuma&badge=VERIFIKASI',
        width: 1200,
        height: 630,
        alt: 'Verifikasi Sertifikat KodeLuma',
      },
    ],
  },
};

export default function VerifyLookupPage() {
  return <div className="d-flex flex-column min-vh-100">
    <PublicNavbar />
    <main id="main-content" className="flex-grow-1 kl-section">
      <div className="container">
        <div className="kl-card bg-white p-4 p-md-5 mx-auto" style={{ maxWidth: '620px' }}>
          <EditorialIllustration kind="certificate" className="kl-page-art mb-3" />
          <div className="kl-eyebrow">VERIFIKASI SERTIFIKAT</div>
          <h1 className="h2 mb-3">Periksa sertifikat penyelesaian</h1>
          <p className="kl-lead mb-4">Status sertifikat diperiksa langsung dari data Kodeluma.</p>
          <VerifyLookupForm />
        </div>
      </div>
    </main>
    <Footer />
  </div>;
}
