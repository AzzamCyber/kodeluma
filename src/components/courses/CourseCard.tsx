import React from 'react';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { Course } from '@/types/domain';
import { ProgressBar } from '@/components/ui/ProgressBar';

interface CourseCardProps {
  course: Course;
  progressPercent?: number;
  isEnrolled?: boolean;
}

export function CourseCard({ course, progressPercent, isEnrolled = false }: CourseCardProps) {
  // Category color highlights
  const categoryAccents = {
    html: { bg: '#EFF6FF', text: '#2563EB', label: 'HTML' },
    css: { bg: '#F5F3FF', text: '#7C3AED', label: 'CSS' },
    javascript: { bg: '#FEF3C7', text: '#B45309', label: 'JavaScript' },
    python: { bg: '#ECFDF5', text: '#059669', label: 'Python' },
  };

  const accent = categoryAccents[course.category] || categoryAccents.html;

  return (
    <article className="kl-card h-100 d-flex flex-column p-0 overflow-hidden kl-card-interactive position-relative">
      {/* Cover / Header Section */}
      <div
        className="d-flex align-items-center justify-content-between p-4"
        style={{
          backgroundColor: accent.bg,
          color: accent.text,
          borderBottom: '1px solid var(--kl-border)',
          minHeight: '130px',
        }}
      >
        <div>
          <span
            className="badge rounded-pill fw-bold text-uppercase px-3 py-2"
            style={{
              backgroundColor: '#FFFFFF',
              color: accent.text,
              fontSize: '11px',
              letterSpacing: '0.05em',
              boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
            }}
          >
            {accent.label} &middot; {course.level === 'pemula' ? 'Pemula' : 'Menengah'}
          </span>
        </div>
        <div className="fs-3 fw-bold opacity-75">{accent.label}</div>
      </div>

      {/* Body Content */}
      <div className="p-4 d-flex flex-column flex-grow-1">
        <h3 className="h5 fw-bold mb-2" style={{ color: 'var(--kl-ink)' }}>
          {course.title}
        </h3>
        <p
          className="text-secondary small mb-4 flex-grow-1"
          style={{ lineHeight: 1.6, minHeight: '48px' }}
        >
          {course.summary}
        </p>

        {/* Course Meta Info */}
        <div className="d-flex align-items-center gap-3 text-secondary small mb-3 pb-3 border-bottom">
          <div className="d-flex align-items-center gap-1">
            <BookOpen size={15} strokeWidth={1.75} />
            <span>{course.lessonsCount ?? 3} Pelajaran</span>
          </div>
          <div className="d-flex align-items-center gap-1">
            <Clock size={15} strokeWidth={1.75} />
            <span>{course.estimatedMinutes} Menit</span>
          </div>
        </div>

        {/* Progress or CTA */}
        {isEnrolled && progressPercent !== undefined ? (
          <div>
            <ProgressBar value={progressPercent} label="Progres Belajar" />
            <Link
              href={`/learn/${course.slug}/apa-itu-html`}
              className="stretched-link text-decoration-none"
              aria-label={`Lanjutkan materi ${course.title}`}
            />
          </div>
        ) : (
          <div className="d-flex align-items-center justify-content-between pt-1">
            <span className="fw-semibold small text-primary d-inline-flex align-items-center gap-1">
              Pelajari Silabus
              <ArrowRight size={14} strokeWidth={2} />
            </span>
            <Link
              href={`/courses/${course.slug}`}
              className="stretched-link text-decoration-none"
              aria-label={`Lihat detail silabus ${course.title}`}
            />
          </div>
        )}
      </div>
    </article>
  );
}
