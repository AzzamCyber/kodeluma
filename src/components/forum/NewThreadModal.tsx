'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Modal from 'react-bootstrap/Modal';
import { Button } from '@/components/ui/Button';
import { SelectField } from '@/components/ui/SelectField';
import { AlertCircle } from 'lucide-react';
import { useFeedback } from '@/components/ui/FeedbackProvider';

interface NewThreadModalProps {
  show: boolean;
  onHide: () => void;
  categories: { slug: string; name: string }[];
}

export function NewThreadModal({ show, onHide, categories }: NewThreadModalProps) {
  const router = useRouter();
  const { notify } = useFeedback();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]?.slug || 'umum');
  const [body, setBody] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch('/api/v1/forum/threads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, category, body }),
      });

      const json = await res.json();
      if (!res.ok || json.error) {
        throw new Error(json.error?.message || 'Gagal membuat topik baru.');
      }

      onHide();
      setTitle('');
      setBody('');
      notify({ variant: 'success', title: 'Topik diskusi dibuat' });
      router.refresh();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Terjadi kendala.';
      setError(message);
      notify({ variant: 'error', title: 'Topik belum dibuat', message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton className="border-bottom">
        <Modal.Title className="h5 fw-bold" style={{ color: 'var(--kl-ink)' }}>
          Mulai Diskusi Baru
        </Modal.Title>
      </Modal.Header>

      <form onSubmit={handleSubmit}>
        <Modal.Body className="p-4">
          {error && (
            <div className="alert alert-danger small d-flex align-items-center gap-2 mb-3">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          <div className="mb-3">
            <label htmlFor="thread-title" className="form-label">
              Judul Topik Diskusi
            </label>
            <input
              id="thread-title"
              type="text"
              required
              minLength={10}
              maxLength={140}
              className="form-control"
              placeholder="Contoh: Bagaimana cara membuat perataan vertikal di Flexbox?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={isLoading}
            />
            <small className="text-muted" style={{ fontSize: '11px' }}>
              Minimal 10 karakter, buat judul yang jelas dan spesifik.
            </small>
          </div>

          <div className="mb-3">
            <label htmlFor="thread-category" className="form-label">
              Kategori Pembahasan
            </label>
            <SelectField
              id="thread-category"
              label="Kategori Pembahasan"
              value={category}
              onChange={setCategory}
              disabled={isLoading}
              options={categories.map((c) => ({ value: c.slug, label: c.name }))}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="thread-body" className="form-label">
              Isi Pertanyaan / Penjelasan
            </label>
            <textarea
              id="thread-body"
              required
              rows={6}
              minLength={20}
              className="form-control font-monospace small"
              placeholder="Jelaskan pertanyaanmu atau tempelkan cuplikan kode yang ingin kamu tanyakan..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
              disabled={isLoading}
            />
            <small className="text-muted" style={{ fontSize: '11px' }}>
              Mendukung teks deskriptif dan cuplikan kode (minimal 20 karakter).
            </small>
          </div>
        </Modal.Body>

        <Modal.Footer className="border-top">
          <Button variant="secondary" onClick={onHide} disabled={isLoading}>
            Batal
          </Button>
          <Button
            type="submit"
            variant="primary"
            isLoading={isLoading}
            loadingText="Menerbitkan..."
          >
            Terbitkan Topik
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
