'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ForumThread } from '@/types/domain';
import { EyeOff, Eye, AlertCircle } from 'lucide-react';
import { useFeedback } from '@/components/ui/FeedbackProvider';

interface ModerationTableProps {
  initialThreads: ForumThread[];
}

export function ModerationTable({ initialThreads }: ModerationTableProps) {
  const router = useRouter();
  const { notify, requestText } = useFeedback();
  const [threads, setThreads] = useState(initialThreads);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleModerate = async (threadId: string, action: 'hide' | 'unhide') => {
    const reason = await requestText({
      title: action === 'hide' ? 'Sembunyikan topik?' : 'Pulihkan topik?',
      message: action === 'hide'
        ? 'Topik akan disembunyikan dari diskusi publik. Berikan alasan moderasi untuk catatan admin.'
        : 'Topik akan kembali terlihat di diskusi publik. Berikan alasan pemulihan.',
      label: 'Alasan moderasi',
      placeholder: 'Tuliskan alasan yang jelas...',
      confirmLabel: action === 'hide' ? 'Sembunyikan' : 'Pulihkan',
      destructive: action === 'hide',
      maxLength: 500,
    });

    if (!reason || !reason.trim()) return;

    setLoadingId(threadId);
    setError(null);

    try {
      const res = await fetch(`/api/v1/admin/forum/threads/${threadId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, reason }),
      });

      const json = await res.json();
      if (!res.ok || json.error) {
        throw new Error(json.error?.message || 'Gagal memoderasi topik.');
      }

      setThreads((prev) =>
        prev.map((t) => (t.id === threadId ? { ...t, status: action === 'hide' ? 'hidden' : 'active' } : t))
      );
      notify({ variant: 'success', title: action === 'hide' ? 'Topik disembunyikan' : 'Topik dipulihkan' });
      router.refresh();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Terjadi kendala.';
      setError(message);
      notify({ variant: 'error', title: 'Moderasi gagal', message });
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="kl-card p-0 bg-white border overflow-hidden">
      {error && (
        <div className="alert alert-danger m-3 small d-flex align-items-center gap-2">
          <AlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}

      <div className="table-responsive">
        <table className="table table-hover align-middle mb-0">
          <thead className="bg-light border-bottom">
            <tr className="small text-secondary">
              <th className="ps-4 py-3">Topik Diskusi</th>
              <th>Kategori</th>
              <th>Penulis</th>
              <th>Balasan</th>
              <th>Status</th>
              <th className="text-end pe-4">Tindakan Moderasi</th>
            </tr>
          </thead>
          <tbody>
            {threads.map((thread) => (
              <tr key={thread.id}>
                <td className="ps-4 py-3">
                  <div className="fw-bold text-dark">{thread.title}</div>
                  <small className="text-muted truncate d-inline-block" style={{ maxWidth: '320px' }}>
                    {thread.body}
                  </small>
                </td>
                <td>
                  <span className="badge bg-light text-secondary border small text-uppercase">
                    {thread.category}
                  </span>
                </td>
                <td>
                  <span className="small text-dark fw-semibold">{thread.authorName}</span>
                </td>
                <td>
                  <span className="badge bg-light text-dark border small">
                    {thread.repliesCount || 0}
                  </span>
                </td>
                <td>
                  <span
                    className={`badge small ${
                      thread.status === 'active'
                        ? 'bg-success-subtle text-success border border-success-subtle'
                        : 'bg-danger-subtle text-danger border border-danger-subtle'
                    }`}
                  >
                    {thread.status === 'active' ? 'AKTIF' : 'DISEMBUNYIKAN'}
                  </span>
                </td>
                <td className="text-end pe-4">
                  {thread.status === 'active' ? (
                    <button
                      onClick={() => handleModerate(thread.id, 'hide')}
                      disabled={loadingId === thread.id}
                      className="btn btn-outline-danger btn-sm d-inline-flex align-items-center gap-1 py-1 px-2"
                    >
                      <EyeOff size={13} />
                      <span>{loadingId === thread.id ? 'Memproses...' : 'Sembunyikan'}</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleModerate(thread.id, 'unhide')}
                      disabled={loadingId === thread.id}
                      className="btn btn-outline-success btn-sm d-inline-flex align-items-center gap-1 py-1 px-2"
                    >
                      <Eye size={13} />
                      <span>{loadingId === thread.id ? 'Memproses...' : 'Pulihkan'}</span>
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
