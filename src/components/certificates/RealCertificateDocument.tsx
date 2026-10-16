'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Copy, ExternalLink, Printer, ShieldCheck, ShieldX } from 'lucide-react';

interface CertificateView {
  id: string;
  verifyCode: string;
  recipientName: string;
  courseTitle: string;
  issuedAt: string;
  curriculumVersion?: number;
  revokedAt?: string | null;
}

interface RealCertificateDocumentProps {
  certificate: CertificateView;
  showActions?: boolean;
}

export function RealCertificateDocument({ certificate, showActions = true }: RealCertificateDocumentProps) {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle');
  const revoked = Boolean(certificate.revokedAt);
  const verifyPath = '/verify/' + encodeURIComponent(certificate.verifyCode);
  const date = new Date(certificate.issuedAt);
  const issuedDate = Number.isNaN(date.getTime())
    ? 'Tanggal tidak tersedia'
    : date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

  async function copyVerificationLink() {
    try {
      await navigator.clipboard.writeText(window.location.origin + verifyPath);
      setCopyState('copied');
    } catch {
      setCopyState('error');
    }
  }

  return (
    <section className="kl-cert-document" aria-label={'Sertifikat ' + certificate.courseTitle}>
      {showActions && (
        <div className="kl-cert-toolbar d-print-none d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="d-flex align-items-center gap-2">
            {revoked ? <ShieldX size={20} aria-hidden="true" /> : <ShieldCheck size={20} aria-hidden="true" />}
            <div>
              <strong>{revoked ? 'Sertifikat dicabut' : 'Tercatat di KodeLuma'}</strong>
              <span className="d-block small text-secondary">Periksa status terbaru dengan kode verifikasi.</span>
            </div>
          </div>
          <div className="d-flex flex-wrap gap-2">
            {!revoked && (
              <button type="button" className="btn kl-btn-primary d-inline-flex align-items-center gap-2" onClick={() => window.print()}>
                <Printer size={17} aria-hidden="true" /> Cetak / simpan PDF
              </button>
            )}
            <button type="button" className="btn kl-btn-secondary d-inline-flex align-items-center gap-2" onClick={copyVerificationLink}>
              {copyState === 'copied' ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
              {copyState === 'copied' ? 'Tautan tersalin' : 'Salin tautan'}
            </button>
            <Link className="btn kl-btn-secondary d-inline-flex align-items-center gap-2" href={verifyPath}>
              <ExternalLink size={17} aria-hidden="true" /> Verifikasi
            </Link>
          </div>
          {copyState === 'error' && <span className="small text-danger" role="status">Tautan gagal disalin. Buka halaman verifikasi untuk menyalinnya.</span>}
        </div>
      )}

      <div className={'kl-cert-sheet' + (revoked ? ' kl-cert-sheet--revoked' : '')}>
        <div className="kl-cert-topline" aria-hidden="true"><span /><span /></div>
        <header className="kl-cert-header d-flex align-items-start justify-content-between gap-3">
          <Image src="/brand/kodeluma-logo-horizontal.png" alt="KodeLuma by Azzam Codex" width={212} height={64} className="kl-cert-logo" priority />
          <div className="kl-cert-header-meta text-end">
            <span className="kl-cert-kicker">REKAM BELAJAR</span>
            <span className="d-block">No. {certificate.verifyCode}</span>
          </div>
        </header>

        <div className="kl-cert-main">
          <p className="kl-cert-overline">KodeLuma • Sertifikat Penyelesaian</p>
          <h2>Sertifikat<br /><em>Penyelesaian Kursus</em></h2>
          <p className="kl-cert-presented">Diberikan kepada</p>
          <p className="kl-cert-recipient">{certificate.recipientName}</p>
          <div className="kl-cert-rule" aria-hidden="true"><span /></div>
          <p className="kl-cert-description">Sebagai bukti telah menyelesaikan persyaratan pembelajaran kursus di KodeLuma:</p>
          <p className="kl-cert-course">{certificate.courseTitle}</p>
          {revoked && <p className="kl-cert-revoked" role="status">SERTIFIKAT DICABUT • TIDAK BERLAKU</p>}
        </div>

        <footer className="kl-cert-footer">
          <div>
            <span className="kl-cert-label">DITERBITKAN</span>
            <strong>{issuedDate}</strong>
          </div>
          {certificate.curriculumVersion !== undefined && (
            <div>
              <span className="kl-cert-label">KURIKULUM</span>
              <strong>Versi {certificate.curriculumVersion}</strong>
            </div>
          )}
          <div className="kl-cert-verify">
            <span className="kl-cert-label">VERIFIKASI</span>
            <strong>{certificate.verifyCode}</strong>
            <span>Status dapat diperiksa di halaman verifikasi KodeLuma.</span>
          </div>
        </footer>
      </div>
      <p className="kl-cert-disclaimer d-print-none">Sertifikat ini mencatat penyelesaian kursus KodeLuma. Tidak menyatakan akreditasi pemerintah, universitas, atau sertifikasi profesi.</p>
    </section>
  );
}
