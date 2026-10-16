'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Check, AlertCircle } from 'lucide-react';
import { useFeedback } from '@/components/ui/FeedbackProvider';

interface ProfileEditorProps {
  initialDisplayName: string;
  email: string;
}

export function ProfileEditor({ initialDisplayName, email }: ProfileEditorProps) {
  const router = useRouter();
  const { notify } = useFeedback();
  const [displayName, setDisplayName] = useState(initialDisplayName);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!displayName.trim() || displayName.length < 2 || displayName.length > 80) {
      setMessage({ type: 'error', text: 'Nama tampilan harus antara 2 hingga 80 karakter.' });
      notify({ variant: 'error', title: 'Nama belum valid', message: 'Gunakan 2–80 karakter.' });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const res = await fetch('/api/v1/me', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ displayName }),
      });

      const json = await res.json();
      if (!res.ok || json.error) {
        throw new Error(json.error?.message || 'Gagal memperbarui profil.');
      }

      setMessage({ type: 'success', text: 'Nama profil berhasil diperbarui.' });
      notify({ variant: 'success', title: 'Profil diperbarui' });
      router.refresh();
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Terjadi kendala pembaruan profil.';
      setMessage({
        type: 'error',
        text: errorMessage,
      });
      notify({ variant: 'error', title: 'Profil belum diperbarui', message: errorMessage });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="kl-card p-4 p-md-5 bg-white border">
      <h2 className="h5 fw-bold mb-4 text-dark">Informasi Akun</h2>

      {message && (
        <div
          className={`alert ${
            message.type === 'success' ? 'alert-success' : 'alert-danger'
          } d-flex align-items-center gap-2 small mb-4`}
          role="alert"
        >
          {message.type === 'success' ? <Check size={16} /> : <AlertCircle size={16} />}
          <span>{message.text}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label small fw-semibold text-secondary">
            Alamat Email (Permanen)
          </label>
          <input
            id="email"
            type="email"
            className="form-control bg-light text-muted"
            value={email}
            disabled
            readOnly
          />
          <div className="form-text small">
            Email digunakan sebagai pengenal akun utama dan tidak dapat diubah.
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="displayName" className="form-label small fw-semibold text-secondary">
            Nama Tampilan di Sertifikat & Diskusi
          </label>
          <div className="input-group">
            <span className="input-group-text bg-white text-muted">
              <User size={16} />
            </span>
            <input
              id="displayName"
              type="text"
              className="form-control"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Nama lengkap Anda"
              minLength={2}
              maxLength={80}
              required
            />
          </div>
          <div className="form-text small">
            Nama ini akan tercantum pada sertifikat kelulusan kursus Anda.
          </div>
        </div>

        <button
          type="submit"
          className="kl-btn-primary d-inline-flex align-items-center gap-2"
          disabled={isLoading || displayName === initialDisplayName}
        >
          {isLoading ? 'Menyimpan...' : 'Simpan Perubahan'}
        </button>
      </form>
    </div>
  );
}
