'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ProjectSubmission } from '@/types/domain';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SelectField } from '@/components/ui/SelectField';
import { useFeedback } from '@/components/ui/FeedbackProvider';

interface SubmissionsTableProps {
  initialSubmissions: ProjectSubmission[];
}

export function SubmissionsTable({ initialSubmissions }: SubmissionsTableProps) {
  const router = useRouter();
  const { notify } = useFeedback();
  const [submissions, setSubmissions] = useState(initialSubmissions);
  const [activeReviewId, setActiveReviewId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState('');
  const [reviewStatus, setReviewStatus] = useState<'approved' | 'needs_revision'>('approved');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const reviewPanelRef = useRef<HTMLElement>(null);
  const activeSubmission = submissions.find((submission) => submission.id === activeReviewId);

  useEffect(() => {
    if (activeReviewId) reviewPanelRef.current?.scrollIntoView({ block: 'nearest' });
  }, [activeReviewId]);

  const toggleReview = (id: string) => {
    if (activeReviewId === id) {
      setActiveReviewId(null);
      return;
    }
    setActiveReviewId(id);
    setReviewStatus('approved');
    setFeedback('');
  };

  const handleReview = async (sub: ProjectSubmission) => {
    setIsSubmitting(true);
    try {
      const res = await fetch(`/api/v1/admin/submissions/${sub.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: sub.userId,
          projectId: sub.projectId,
          status: reviewStatus,
          feedback,
        }),
      });

      const json = await res.json();
      if (!res.ok || json.error) {
        throw new Error(json.error?.message || 'Gagal menyimpan review.');
      }

      setSubmissions((prev) => prev.filter((s) => s.id !== sub.id));
      setActiveReviewId(null);
      setFeedback('');
      notify({ variant: 'success', title: reviewStatus === 'approved' ? 'Proyek disetujui' : 'Revisi dikirim', message: 'Penilaian berhasil disimpan.' });
      router.refresh();
    } catch (err: unknown) {
      notify({ variant: 'error', title: 'Penilaian gagal', message: err instanceof Error ? err.message : 'Terjadi kendala.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="kl-card p-0 bg-white border overflow-hidden">
      {submissions.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="bg-light border-bottom">
              <tr className="small text-secondary">
                <th className="ps-4 py-3">Siswa & Proyek</th>
                <th>Tautan Pengumpulan</th>
                <th>Catatan Siswa</th>
                <th>Tanggal Kirim</th>
                <th className="text-end pe-4">Tindakan Review</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((sub) => (
                <tr key={sub.id}>
                    <td className="ps-4 py-3">
                      <div className="fw-bold text-dark">{sub.userDisplayName}</div>
                      <small className="text-muted">{sub.projectTitle}</small>
                    </td>
                    <td>
                      <a
                        href={sub.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="small text-primary text-decoration-none d-inline-flex align-items-center gap-1"
                      >
                        <span className="truncate" style={{ maxWidth: '180px' }}>
                          {sub.repoUrl}
                        </span>
                        <ExternalLink size={12} />
                      </a>
                    </td>
                    <td>
                      <span className="small text-secondary truncate d-inline-block" style={{ maxWidth: '240px' }}>
                        {sub.note}
                      </span>
                    </td>
                    <td>
                      <small className="text-muted">
                        {new Date(sub.submittedAt).toLocaleDateString('id-ID')}
                      </small>
                    </td>
                    <td className="text-end pe-4">
                      <button
                        type="button"
                        onClick={() => toggleReview(sub.id)}
                        className="btn btn-outline-primary btn-sm py-1 px-2"
                        aria-expanded={activeReviewId === sub.id}
                        aria-controls={activeReviewId === sub.id ? 'kl-review-panel' : undefined}
                      >
                        {activeReviewId === sub.id ? 'Tutup' : 'Beri Penilaian'}
                      </button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="p-5 text-center text-secondary small">
          Tidak ada pengumpulan proyek yang sedang menunggu review.
        </div>
      )}
      </div>
    {activeSubmission && (
      <section id="kl-review-panel" ref={reviewPanelRef} className="kl-card p-4 mt-3" aria-labelledby="kl-review-title">
        <h4 id="kl-review-title" className="h6 fw-bold mb-1">Penilaian {activeSubmission.projectTitle}</h4>
        <p className="text-secondary small mb-3">Pengumpulan oleh {activeSubmission.userDisplayName}</p>
        <div className="row g-3 mb-3">
          <div className="col-sm-4">
            <label htmlFor="review-status" className="form-label">Keputusan Status</label>
            <SelectField
              id="review-status"
              label="Keputusan Status"
              size="sm"
              value={reviewStatus}
              onChange={(value) => setReviewStatus(value as 'approved' | 'needs_revision')}
              options={[
                { value: 'approved', label: 'Disetujui (Lulus Syarat)' },
                { value: 'needs_revision', label: 'Perlu Revisi (Belum Memenuhi)' },
              ]}
            />
          </div>
          <div className="col-sm-8">
            <label htmlFor="review-feedback" className="form-label">Catatan & Masukan Instruktur</label>
            <input
              id="review-feedback"
              type="text"
              className="form-control form-control-sm"
              placeholder="Tuliskan apresiasi dan saran perbaikan teknis..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>
        </div>
        <div className="d-flex justify-content-end gap-2">
          <button type="button" onClick={() => setActiveReviewId(null)} className="btn btn-secondary btn-sm">Batal</button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => handleReview(activeSubmission)}
            isLoading={isSubmitting}
            disabled={!feedback.trim()}
          >
            Simpan Penilaian
          </Button>
        </div>
      </section>
    )}
    </>
  );
}
