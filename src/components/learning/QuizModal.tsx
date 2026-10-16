'use client';

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Quiz } from '@/types/domain';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, XCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { useFeedback } from '@/components/ui/FeedbackProvider';

interface QuizModalProps {
  show: boolean;
  onHide: () => void;
  quiz: Quiz;
  courseTitle: string;
  onQuizPassed?: () => void;
}

export function QuizModal({ show, onHide, quiz, courseTitle, onQuizPassed }: QuizModalProps) {
  const { notify } = useFeedback();
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{
    score: number;
    passed: boolean;
    totalQuestions: number;
    correctCount: number;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSelect = (questionId: string, optionId: string) => {
    if (result) return; // locked after submission
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const allAnswered = quiz.questions.every((q) => selectedAnswers[q.id]);

  const handleSubmit = async () => {
    if (!allAnswered) {
      setError('Mohon jawab seluruh pertanyaan sebelum mengirim.');
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
      const payload = {
        answers: Object.entries(selectedAnswers).map(([questionId, optionId]) => ({
          questionId,
          optionId,
        })),
      };

      const res = await fetch(`/api/v1/quizzes/${quiz.id}/attempts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (!res.ok || json.error) {
        throw new Error(json.error?.message || 'Gagal mengevaluasi kuis.');
      }

      setResult(json.data);
      notify({ variant: json.data.passed ? 'success' : 'info', title: json.data.passed ? 'Kuis berhasil diselesaikan' : 'Kuis selesai', message: json.data.passed ? 'Hasil belajarmu sudah tercatat.' : 'Lihat hasilnya dan coba lagi bila perlu.' });
      if (json.data.passed && onQuizPassed) {
        onQuizPassed();
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Terjadi kendala saat mengirim jawaban.';
      setError(message);
      notify({ variant: 'error', title: 'Jawaban belum terkirim', message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setResult(null);
    setError(null);
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered backdrop="static">
      <Modal.Header closeButton className="border-bottom">
        <div>
          <Modal.Title className="h5 fw-bold mb-1" style={{ color: 'var(--kl-ink)' }}>
            {quiz.title}
          </Modal.Title>
          <small className="text-secondary">Kelas: {courseTitle} &middot; Syarat Lulus: {quiz.passScorePercent}%</small>
        </div>
      </Modal.Header>

      <Modal.Body className="p-4">
        {error && (
          <div className="alert alert-danger d-flex align-items-center gap-2 small mb-4">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {result ? (
          <div className="text-center py-4">
            <div
              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
              style={{
                width: '64px',
                height: '64px',
                backgroundColor: result.passed ? '#ECFDF5' : '#FEF2F2',
                color: result.passed ? '#059669' : '#DC2626',
              }}
            >
              {result.passed ? <CheckCircle2 size={36} /> : <XCircle size={36} />}
            </div>

            <h3 className="h4 fw-bold mb-1">
              {result.passed ? 'Bagus! Kamu menyelesaikan latihan ini.' : 'Belum tepat. Coba pelajari kembali materinya.'}
            </h3>
            <p className="text-secondary small mb-4">
              Skor kamu: <strong className="fs-5">{result.score}%</strong> ({result.correctCount} dari{' '}
              {result.totalQuestions} jawaban benar)
            </p>

            {result.passed ? (
              <div className="d-flex justify-content-center gap-3">
                <Button variant="primary" onClick={onHide}>
                  Lanjutkan Materi Berikutnya
                </Button>
              </div>
            ) : (
              <div className="d-flex justify-content-center gap-3">
                <Button variant="primary" onClick={handleRetry} className="d-flex align-items-center gap-2">
                  <RefreshCw size={16} />
                  <span>Coba Lagi Kuis</span>
                </Button>
                <Button variant="secondary" onClick={onHide}>
                  Tinjau Materi Dulu
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="d-flex flex-column gap-4">
            {quiz.questions.map((q, idx) => (
              <div key={q.id} className="p-3 rounded-3 border bg-light">
                <div className="fw-semibold text-dark mb-3">
                  <span className="text-primary me-2">0{idx + 1}.</span>
                  {q.question}
                </div>

                <div className="d-flex flex-column gap-2">
                  {q.options.map((opt) => {
                    const isSelected = selectedAnswers[q.id] === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelect(q.id, opt.id)}
                        className={`btn text-start p-3 small border rounded-3 d-flex align-items-center justify-content-between transition-all ${
                          isSelected ? 'btn-primary text-white border-primary shadow-sm' : 'btn-white bg-white text-dark'
                        }`}
                      >
                        <span>{opt.text}</span>
                        <span
                          className={`rounded-circle border d-inline-block ${
                            isSelected ? 'bg-white' : 'bg-light'
                          }`}
                          style={{ width: '16px', height: '16px' }}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </Modal.Body>

      {!result && (
        <Modal.Footer className="border-top justify-content-between">
          <small className="text-secondary">
            {Object.keys(selectedAnswers).length} dari {quiz.questions.length} terjawab
          </small>
          <div className="d-flex gap-2">
            <Button variant="secondary" onClick={onHide}>
              Batal
            </Button>
            <Button
              variant="primary"
              onClick={handleSubmit}
              isLoading={isSubmitting}
              loadingText="Mengevaluasi..."
              disabled={!allAnswered}
            >
              Kirim Jawaban
            </Button>
          </div>
        </Modal.Footer>
      )}
    </Modal>
  );
}
