'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Lock, Mail, AlertCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useFeedback } from '@/components/ui/FeedbackProvider';

export function LoginForm() {
  const router = useRouter();
  const { notify } = useFeedback();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo') || '/dashboard';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const json = await res.json();

      if (!res.ok || json.error) {
        throw new Error(json.error?.message || 'Email atau kata sandi belum sesuai.');
      }

      const role = json.data?.user?.role;
      const targetUrl = role === 'admin' ? '/admin' : returnTo;

      notify({ variant: 'success', title: 'Berhasil masuk', message: 'Selamat datang kembali di Kodeluma.' });
      router.push(targetUrl);
      router.refresh();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Terjadi kendala saat masuk.';
      setError(message);
      notify({ variant: 'error', title: 'Gagal masuk', message });
      setIsLoading(false);
    }
  };

  return (
    <div className="kl-card kl-auth-form-card p-4 p-sm-5 bg-white border mx-auto">
      <div className="text-center mb-4">
        <div className="kl-eyebrow">SELAMAT DATANG KEMBALI</div>
        <h1 className="h3 fw-bold mb-1" style={{ color: 'var(--kl-ink)' }}>
          Masuk ke Kodeluma.
        </h1>
        <p className="text-secondary small mb-0">
          Masuk untuk melanjutkan kelas, quest, dan proyekmu.
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
          <label htmlFor="login-email" className="form-label">
            Alamat Email
          </label>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0 text-muted">
              <Mail size={16} />
            </span>
            <input
              id="login-email"
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

        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <label htmlFor="login-password" className="form-label mb-0">
              Kata Sandi
            </label>
          </div>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0 text-muted">
              <Lock size={16} />
            </span>
            <input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              required
              className="form-control border-start-0 border-end-0 ps-0"
              placeholder="Masukkan kata sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              autoComplete="current-password"
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

        <Button
          type="submit"
          variant="primary"
          className="w-100 py-3 mb-3 d-flex align-items-center justify-content-center gap-2"
          isLoading={isLoading}
          loadingText="Memeriksa akun..."
        >
          <span>Masuk Sekarang</span>
          <ArrowRight size={16} />
        </Button>
      </form>

      <div className="text-center pt-3 border-top small text-secondary">
        Belum memiliki akun?{' '}
        <Link href={`/register${returnTo !== '/dashboard' ? `?returnTo=${encodeURIComponent(returnTo)}` : ''}`} className="fw-semibold text-primary text-decoration-none">
          Daftar gratis
        </Link>
      </div>
    </div>
  );
}
