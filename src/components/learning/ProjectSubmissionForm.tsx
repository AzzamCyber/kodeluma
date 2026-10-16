'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ProjectSubmission } from '@/types/domain';
import { Button } from '@/components/ui/Button';
import { Send, Link as LinkIcon, FileText } from 'lucide-react';
import { useFeedback } from '@/components/ui/FeedbackProvider';

interface ProjectSubmissionFormProps {
  projectId: string;
  initialSubmission: ProjectSubmission | null;
  isLoggedIn: boolean;
}

export function ProjectSubmissionForm({
  projectId,
  initialSubmission,
  isLoggedIn,
}: ProjectSubmissionFormProps) {
  const router = useRouter();
  const { notify } = useFeedback();
  const [repoUrl, setRepoUrl] = useState(initialSubmission?.repoUrl || '');
  const [note, setNote] = useState(initialSubmission?.note || '');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoggedIn) {
      router.push(`/login?returnTo=/projects`);
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const res = await fetch(`/api/v1/projects/${projectId}/submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ repoUrl, note }),
      });

      const json = await res.json();
      if (!res.ok || json.error) {
        throw new Error(json.error?.message || 'Gagal mengirimkan proyek.');
      }

      setMessage({ type: 'success', text: 'Proyekmu berhasil dikirim dan sedang menunggu review instruktur.' });
      notify({ variant: 'success', title: 'Proyek terkirim', message: 'Menunggu penilaian instruktur.' });
      router.refresh();
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Terjadi kendala saat mengirim proyek.';
      setMessage({ type: 'error', text: errorMessage });
      notify({ variant: 'error', title: 'Proyek belum terkirim', message: errorMessage });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="kl-card p-4 bg-light border text-center">
        <p className="small text-secondary mb-3">
          Masuk ke akunmu untuk mengumpulkan hasil proyek ini dan mendapatkan penilaian.
        </p>
        <button
          onClick={() => router.push('/login')}
          className="kl-btn-primary py-2 px-4 text-decoration-none"
        >
          Masuk untuk Mengirim Proyek
        </button>
      </div>
    );
  }

  return (
    <div className="kl-card p-4 p-md-5 bg-white border">
      <div className="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom">
        <h3 className="h5 fw-bold mb-0">Formulir Pengumpulan Proyek</h3>
        {initialSubmission && (
          <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-2 py-1 small">
            Status: {initialSubmission.status.toUpperCase()}
          </span>
        )}
      </div>

      {message && (
        <div
          className={`alert ${
            message.type === 'success' ? 'alert-success' : 'alert-danger'
          } small mb-4`}
        >
          {message.text}
        </div>
      )}

      {initialSubmission?.feedback && (
        <div className="alert alert-info border small mb-4">
          <strong>Umpan Balik Instruktur:</strong>
          <p className="mb-0 mt-1">{initialSubmission.feedback}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="proj-repo" className="form-label">
            URL Repositori / Demo Web (Wajib HTTPS)
          </label>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0 text-muted">
              <LinkIcon size={16} />
            </span>
            <input
              id="proj-repo"
              type="url"
              required
              className="form-control border-start-0 ps-0"
              placeholder="https://github.com/username/project"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <small className="text-muted" style={{ fontSize: '11px' }}>
            Contoh: Link GitHub repository, CodeSandbox, atau link deployment Vercel/Netlify.
          </small>
        </div>

        <div className="mb-4">
          <label htmlFor="proj-note" className="form-label">
            Catatan Siswa / Penjelasan Singkat
          </label>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0 text-muted align-items-start pt-2">
              <FileText size={16} />
            </span>
            <textarea
              id="proj-note"
              required
              rows={4}
              className="form-control border-start-0 ps-0"
              placeholder="Jelaskan fitur yang kamu buat dan kendala yang kamu hadapi..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              disabled={isLoading}
            />
          </div>
        </div>

        <Button
          type="submit"
          variant="primary"
          className="d-inline-flex align-items-center gap-2 py-2 px-4"
          isLoading={isLoading}
          loadingText="Mengirimkan proyek..."
        >
          <Send size={16} />
          <span>{initialSubmission ? 'Perbarui Pengumpulan' : 'Kirim Proyek'}</span>
        </Button>
      </form>
    </div>
  );
}
