'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled app error:', error);
  }, [error]);

  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center p-4">
      <div className="kl-card p-4 p-md-5 text-center bg-white border" style={{ maxWidth: '520px' }}>
        <div
          className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
          style={{ width: '56px', height: '56px', backgroundColor: '#FEF2F2', color: '#DC2626' }}
        >
          <AlertTriangle size={28} />
        </div>
        <div className="kl-eyebrow text-danger">KENDALA SISTEM</div>
        <h1 className="h3 fw-bold mb-2">Terjadi kendala teknis.</h1>
        <p className="text-secondary small mb-4">
          Coba lagi beberapa saat atau kembali ke halaman beranda jika masalah berlanjut.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={() => reset()}
            className="kl-btn-primary d-inline-flex align-items-center gap-2 border-0"
          >
            <RefreshCw size={16} />
            <span>Muat Ulang</span>
          </button>
          <Link href="/" className="kl-btn-secondary text-decoration-none">
            Ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
