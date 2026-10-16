'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { User as UserIcon, Mail, Lock, AlertCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useFeedback } from '@/components/ui/FeedbackProvider';

export function RegisterForm() {
  const router = useRouter();
  const { notify } = useFeedback();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo') || '/dashboard';

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!agreeTerms) {
      setError('Harap setujui Syarat & Ketentuan serta Kebijakan Privasi Kodeluma.');
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('/api/v1/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ displayName, email, password }),
      });

      const json = await res.json();

      if (!res.ok || json.error) {
        throw new Error(json.error?.message || 'Pendaftaran gagal. Periksa kembali data Anda.');
      }

      notify({ variant: 'success', title: 'Akun berhasil dibuat', message: 'Selamat mulai belajar di Kodeluma.' });
      router.push(returnTo);
      router.refresh();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Terjadi kendala saat pendaftaran.';
      setError(message);
      notify({ variant: 'error', title: 'Pendaftaran gagal', message });
      setIsLoading(false);
    }
  };

  return (
    <div className="kl-card kl-auth-form-card p-4 p-sm-5 bg-white border mx-auto">
      <div className="text-center mb-4">
        <div className="kl-eyebrow">MULAI PERJALANANMU</div>
        <h1 className="h3 fw-bold mb-1" style={{ color: 'var(--kl-ink)' }}>
          Buat akun, mulai dari nol.
        </h1>
        <p className="text-secondary small mb-0">
          Daftar gratis untuk mencatat progres dan memperoleh sertifikat.
        </p>
      </div>

      {error && (
        <div
          className="alert alert-danger d-flex align-items-center gap-2 p-3 small mb-4 rounded-3 border-0"
          role="alert"
        >
          <AlertCircle size={18} className="flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="reg-name" className="form-label">
            Nama Panggilan / Lengkap
          </label>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0 text-muted">
              <UserIcon size={16} />
            </span>
            <input
              id="reg-name"
              type="text"
              required
              className="form-control border-start-0 ps-0"
              placeholder="Contoh: Budi Santoso"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              disabled={isLoading}
              autoComplete="name"
            />
          </div>
          <small className="text-muted" style={{ fontSize: '11px' }}>
            Nama ini akan dicetak pada sertifikat penyelesaian modul.
          </small>
        </div>

        <div className="mb-3">
          <label htmlFor="reg-email" className="form-label">
            Alamat Email
          </label>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0 text-muted">
              <Mail size={16} />
            </span>
            <input
              id="reg-email"
              type="email"
              required
              className="form-control border-start-0 ps-0"
              placeholder="nama@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              autoComplete="email"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="reg-password" className="form-label">
            Kata Sandi
          </label>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0 text-muted">
              <Lock size={16} />
            </span>
            <input
              id="reg-password"
              type={showPassword ? 'text' : 'password'}
              required
              minLength={8}
              className="form-control border-start-0 border-end-0 ps-0"
              placeholder="Minimal 8 karakter"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              autoComplete="new-password"
            />
            <button
              type="button"
              className="input-group-text bg-white border-start-0 text-secondary"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
            >
              <span style={{ fontSize: '12px' }}>{showPassword ? 'Sembunyikan' : 'Lihat'}</span>
            </button>
          </div>
        </div>

        <div className="mb-4 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="reg-agree"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            disabled={isLoading}
          />
          <label className="form-check-label text-secondary small" htmlFor="reg-agree" style={{ fontSize: '12px' }}>
            Saya menyetujui{' '}
            <Link href="/terms" target="_blank" className="text-primary text-decoration-none fw-semibold">
              Syarat & Ketentuan
            </Link>{' '}
            serta{' '}
            <Link href="/privacy" target="_blank" className="text-primary text-decoration-none fw-semibold">
              Kebijakan Privasi
            </Link>{' '}
            Kodeluma.
          </label>
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-100 py-3 mb-3 d-flex align-items-center justify-content-center gap-2"
          isLoading={isLoading}
          loadingText="Membuat akun..."
        >
          <span>Daftar Akun Kodeluma</span>
          <ArrowRight size={16} />
        </Button>
      </form>

      <div className="text-center pt-3 border-top small text-secondary">
        Sudah memiliki akun?{' '}
        <Link href={`/login${returnTo !== '/dashboard' ? `?returnTo=${encodeURIComponent(returnTo)}` : ''}`} className="fw-semibold text-primary text-decoration-none">
          Masuk di sini
        </Link>
      </div>
    </div>
  );
}
