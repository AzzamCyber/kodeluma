'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

export function VerifyLookupForm() {
  const router = useRouter();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalized = code.trim();
    if (!/^[A-Za-z0-9-]{6,64}$/.test(normalized)) {
      setError('Masukkan kode sertifikat yang valid (6–64 karakter huruf, angka, atau tanda hubung).');
      return;
    }
    setError('');
    router.push(`/verify/${encodeURIComponent(normalized)}`);
  };

  return <form onSubmit={handleSubmit} noValidate>
    <label htmlFor="certificate-code" className="form-label">Kode verifikasi</label>
    <input id="certificate-code" type="text" className="form-control" value={code} onChange={(event) => setCode(event.target.value)} autoComplete="off" maxLength={64} aria-invalid={!!error} aria-describedby={error ? 'certificate-code-error' : 'certificate-code-help'} placeholder="Kode pada sertifikat" required />
    {error ? <p id="certificate-code-error" className="text-danger small mt-2 mb-0" role="alert">{error}</p> : <p id="certificate-code-help" className="text-secondary small mt-2">Masukkan kode yang tercetak pada sertifikat penyelesaian Kodeluma.</p>}
    <button type="submit" className="btn kl-btn-primary d-inline-flex align-items-center justify-content-center gap-2 mt-3"><Search size={16} strokeWidth={1.75} aria-hidden="true" />Periksa sertifikat</button>
  </form>;
}
