'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import {
  CheckCircle2,
  Circle,
  ArrowLeft,
  ArrowRight,
  Award,
  FileCode,
} from 'lucide-react';
import { Course, Lesson, Quiz, ProgressSummary } from '@/types/domain';
import { Button } from '@/components/ui/Button';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { QuizModal } from './QuizModal';
import { useFeedback } from '@/components/ui/FeedbackProvider';

interface LessonReaderProps {
  course: Course;
  currentLesson: Lesson;
  allLessons: Lesson[];
  initialProgress: ProgressSummary;
  quiz: Quiz | null;
}

export function LessonReader({
  course,
  currentLesson,
  allLessons,
  initialProgress,
  quiz,
}: LessonReaderProps) {
  const router = useRouter();
  const { notify } = useFeedback();
  const [progress, setProgress] = useState<ProgressSummary>(initialProgress);
  const [isMarking, setIsMarking] = useState(false);
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [claimLoading, setClaimLoading] = useState(false);

  const currentIndex = allLessons.findIndex((l) => l.id === currentLesson.id);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  const isCurrentCompleted = progress.completedLessons.includes(currentLesson.id);

  const handleMarkComplete = async () => {
    setIsMarking(true);
    try {
      const res = await fetch(`/api/v1/lessons/${currentLesson.id}/complete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const json = await res.json();
      if (res.ok && json.data) {
        setProgress(json.data);
        notify({ variant: 'success', title: 'Pelajaran selesai', message: 'Progres belajarmu sudah disimpan.' });
        if (nextLesson) {
          router.push(`/learn/${course.slug}/${nextLesson.slug}`);
          router.refresh();
        }
      } else {
        throw new Error(json.error?.message || 'Gagal menyimpan progres pelajaran.');
      }
    } catch (err) {
      notify({ variant: 'error', title: 'Progres belum tersimpan', message: err instanceof Error ? err.message : 'Terjadi kendala.' });
    } finally {
      setIsMarking(false);
    }
  };

  const handleClaimCertificate = async () => {
    setClaimLoading(true);
    try {
      const res = await fetch(`/api/v1/courses/${course.id}/certificate`, {
        method: 'POST',
      });
      const json = await res.json();
      if (res.ok) {
        notify({ variant: 'success', title: 'Sertifikat diterbitkan' });
        router.push('/certificates');
      } else {
        throw new Error(json.error?.message || 'Gagal menerbitkan sertifikat.');
      }
    } catch (err) {
      notify({ variant: 'error', title: 'Sertifikat belum terbit', message: err instanceof Error ? err.message : 'Terjadi kendala.' });
    } finally {
      setClaimLoading(false);
    }
  };

  return (
    <div className="d-flex flex-column flex-grow-1">
      {/* Top Breadcrumb & Progress Header */}
      <div className="bg-white border-bottom py-3">
        <div className="container">
          <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
            <div className="d-flex align-items-center gap-2 small">
              <Link
                href="/dashboard"
                className="text-secondary text-decoration-none d-flex align-items-center gap-1"
              >
                <ArrowLeft size={14} />
                <span>Dasbor</span>
              </Link>
              <span className="text-muted">/</span>
              <Link href={`/courses/${course.slug}`} className="text-secondary text-decoration-none">
                {course.title}
              </Link>
              <span className="text-muted">/</span>
              <span className="text-dark fw-semibold truncate" style={{ maxWidth: '280px' }}>
                {currentLesson.title}
              </span>
            </div>

            <div className="d-flex align-items-center gap-3" style={{ minWidth: '220px' }}>
              <ProgressBar
                value={progress.percentage}
                label={`${progress.completedCount}/${progress.totalRequired} Selesai`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Split Layout: Sidebar TOC + Markdown Reader */}
      <div className="container py-4 flex-grow-1">
        <div className="row g-4">
          {/* Left Sidebar: Lesson Curriculum TOC */}
          <div className="col-lg-3 col-md-4">
            <div className="kl-card p-3 bg-white border sticky-top" style={{ top: '96px' }}>
              <div className="fw-bold small text-secondary text-uppercase mb-3 px-2">
                Daftar Materi ({allLessons.length})
              </div>

              <div className="d-flex flex-column gap-1">
                {allLessons.map((lesson, idx) => {
                  const isCurrent = lesson.id === currentLesson.id;
                  const isDone = progress.completedLessons.includes(lesson.id);

                  return (
                    <Link
                      key={lesson.id}
                      href={`/learn/${course.slug}/${lesson.slug}`}
                      className={`text-decoration-none p-2 rounded-3 small d-flex align-items-start gap-2 transition-all ${
                        isCurrent
                          ? 'bg-primary text-white fw-semibold'
                          : 'text-secondary hover-bg-light'
                      }`}
                    >
                      <span className="mt-1 flex-shrink-0">
                        {isDone ? (
                          <CheckCircle2
                            size={16}
                            className={isCurrent ? 'text-white' : 'text-success'}
                          />
                        ) : (
                          <Circle size={16} className={isCurrent ? 'text-white-50' : 'text-muted'} />
                        )}
                      </span>
                      <span>
                        0{idx + 1}. {lesson.title}
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* Extra Activities: Quiz & Certificate */}
              <div className="mt-4 pt-3 border-top d-flex flex-column gap-2">
                {quiz && (
                  <button
                    onClick={() => setShowQuizModal(true)}
                    className="btn btn-outline-primary btn-sm text-start d-flex align-items-center gap-2 p-2"
                  >
                    <FileCode size={15} />
                    <span>Kuis Evaluasi</span>
                  </button>
                )}

                {progress.isEligibleForCertificate && (
                  <button
                    onClick={handleClaimCertificate}
                    disabled={claimLoading}
                    className="btn btn-warning text-dark btn-sm text-start fw-bold d-flex align-items-center gap-2 p-2"
                  >
                    <Award size={16} />
                    <span>{claimLoading ? 'Menerbitkan...' : 'Klaim Sertifikat'}</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Main Reading Area */}
          <div className="col-lg-9 col-md-8">
            <article
              className="kl-card p-4 p-lg-5 bg-white border mb-4"
              style={{ maxWidth: '780px' }}
            >
              <h1 className="h2 fw-bold mb-4" style={{ color: 'var(--kl-ink)' }}>
                {currentLesson.title}
              </h1>

              {/* Rendered Markdown Body */}
              <div className="lesson-body text-dark" style={{ lineHeight: 1.8 }}>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeSanitize]}
                  components={{
                    h2: ({ node: _node, ...props }) => <h2 className="h4 fw-bold mt-4 mb-3" {...props} />,
                    h3: ({ node: _node, ...props }) => <h3 className="h5 fw-bold mt-3 mb-2" {...props} />,
                    p: ({ node: _node, ...props }) => <p className="mb-3 text-secondary" {...props} />,
                    pre: ({ node: _node, ...props }) => (
                      <div className="kl-code-panel p-3 rounded-3 mb-4 overflow-x-auto">
                        <pre className="m-0" {...props} />
                      </div>
                    ),
                    code: ({ node: _node, ...props }) => (
                      <code
                        className="px-1 py-0.5 rounded bg-light border text-danger font-monospace small"
                        {...props}
                      />
                    ),
                    blockquote: ({ node: _node, ...props }) => (
                      <blockquote
                        className="p-3 my-3 border-start border-4 border-primary rounded-end small text-secondary"
                        style={{ backgroundColor: 'var(--kl-primary-soft)' }}
                        {...props}
                      />
                    ),
                  }}
                >
                  {currentLesson.bodyMarkdown}
                </ReactMarkdown>
              </div>

              {/* Bottom Action Footer */}
              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3 pt-4 mt-5 border-top">
                <div>
                  {prevLesson ? (
                    <Link
                      href={`/learn/${course.slug}/${prevLesson.slug}`}
                      className="kl-btn-secondary d-inline-flex align-items-center gap-2 text-decoration-none small"
                    >
                      <ArrowLeft size={15} />
                      <span>Sebelumnya</span>
                    </Link>
                  ) : (
                    <span />
                  )}
                </div>

                <div className="d-flex gap-2">
                  <Button
                    variant={isCurrentCompleted ? 'secondary' : 'primary'}
                    onClick={handleMarkComplete}
                    isLoading={isMarking}
                    loadingText="Menyimpan..."
                    className="d-flex align-items-center gap-2"
                  >
                    <CheckCircle2 size={16} />
                    <span>{isCurrentCompleted ? 'Tandai Ulang / Lanjut' : 'Tandai Selesai & Lanjut'}</span>
                    <ArrowRight size={15} />
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Quiz Modal */}
      {quiz && (
        <QuizModal
          show={showQuizModal}
          onHide={() => setShowQuizModal(false)}
          quiz={quiz}
          courseTitle={course.title}
          onQuizPassed={async () => {
            const res = await fetch(`/api/v1/me/courses/${course.id}/progress`);
            const json = await res.json();
            if (json.data) {
              setProgress(json.data);
            }
          }}
        />
      )}
    </div>
  );
}
