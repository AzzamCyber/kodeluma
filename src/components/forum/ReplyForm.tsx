'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Send, AlertCircle } from 'lucide-react';
import { useFeedback } from '@/components/ui/FeedbackProvider';

interface ReplyFormProps {
  threadId: string;
  isLoggedIn: boolean;
}

export function ReplyForm({ threadId, isLoggedIn }: ReplyFormProps) {
  const router = useRouter();
  const { notify } = useFeedback();
  const [body, setBody] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoggedIn) {
      router.push(`/login?returnTo=/forum/${threadId}`);
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch(`/api/v1/forum/threads/${threadId}/replies`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body }),
      });

      const json = await res.json();
      if (!res.ok || json.error) {
        throw new Error(json.error?.message || 'Gagal mengirim balasan.');
      }

      setBody('');
      notify({ variant: 'success', title: 'Balasan terkirim' });
      router.refresh();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Terjadi kendala.';
      setError(message);
      notify({ variant: 'error', title: 'Balasan belum terkirim', message });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="kl-card p-4 bg-light border text-center">
        <p className="small text-secondary mb-3">
          Ingin ikut berdiskusi? Masuk ke akunmu untuk mengirimkan balasan.
        </p>
        <button
          onClick={() => router.push(`/login?returnTo=/forum/${threadId}`)}
          className="kl-btn-primary py-2 px-4"
        >
          Masuk untuk Membalas
        </button>
      </div>
    );
  }

  return (
    <div className="kl-card p-4 bg-white border">
      <h3 className="h6 fw-bold mb-3">Tuliskan Tanggapan atau Solusi</h3>

      {error && (
        <div className="alert alert-danger small d-flex align-items-center gap-2 mb-3">
          <AlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <textarea
            required
            rows={4}
            minLength={2}
            className="form-control small"
            placeholder="Ketik balasanmu di sini secara santun dan jelas..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            disabled={isLoading}
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          className="d-inline-flex align-items-center gap-2 py-2 px-3 small"
          isLoading={isLoading}
          loadingText="Mengirim balasan..."
        >
          <Send size={15} />
          <span>Kirim Tanggapan</span>
        </Button>
      </form>
    </div>
  );
}
