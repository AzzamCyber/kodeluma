import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Clock, ArrowRight, Code2 } from 'lucide-react';
import { Course, CourseCategory } from '@/types/domain';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { TECH_REGISTRY } from '@/components/ui/TechLogo';

interface CourseCardProps {
  course: Course;
  progressPercent?: number;
  isEnrolled?: boolean;
}

export function CourseCard({ course, progressPercent, isEnrolled = false }: CourseCardProps) {
  const categoryLabels: Record<CourseCategory, string> = {
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    python: 'Python',
    typescript: 'TypeScript',
    java: 'Java',
    cplusplus: 'C++',
    sql: 'SQL',
    nodejs: 'Node.js',
    react: 'React',
    go: 'Go (Golang)',
    php: 'PHP',
    git: 'Git',
    docker: 'Docker',
    postgresql: 'PostgreSQL',
    redis: 'Redis',
    linux: 'Linux',
  };
  const techSlugs: Record<CourseCategory, string> = {
    html: 'html5',
    css: 'css3',
    javascript: 'javascript',
    python: 'python',
    typescript: 'typescript',
    java: 'java',
    cplusplus: 'cplusplus',
    sql: 'sql',
    nodejs: 'nodejs',
    react: 'react',
    go: 'go',
    php: 'php',
    git: 'git',
    docker: 'docker',
    postgresql: 'postgresql',
    redis: 'redis',
    linux: 'linux',
  };
  const categoryLabel = categoryLabels[course.category];
  const technology = TECH_REGISTRY[techSlugs[course.category]];

  return (
    <article className="kl-card h-100 d-flex flex-column p-0 overflow-hidden kl-card-interactive position-relative">
      {/* Cover / Header Section */}
      <div className="kl-course-cover d-flex flex-column justify-content-between p-4">
        <div className="kl-course-cover-top d-flex justify-content-between align-items-start gap-3">
          <span className="kl-course-category">{categoryLabel} &middot; {course.level === 'pemula' ? 'Pemula' : 'Menengah'}</span>
          <span className="kl-course-cover-brand" aria-hidden="true">
            <Image src="/brand/kodeluma-icon.png" alt="" width={24} height={24} />
            <span>KODELUMA</span>
          </span>
        </div>
        <div className="kl-course-cover-technology" aria-hidden="true">
          {technology ? (
            <Image src={technology.localPath} alt="" width={108} height={108} />
          ) : (
            <Code2 size={88} strokeWidth={1.75} />
          )}
        </div>
        <div className="kl-course-cover-bottom d-flex justify-content-between align-items-end gap-3">
          <div>
            <span className="kl-course-cover-kicker" aria-hidden="true">LEARN / CODE / CREATE</span>
            <div className="kl-course-cover-title" aria-hidden="true">{categoryLabel}</div>
          </div>
          <span className="kl-course-cover-mark" aria-hidden="true">KL.</span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-4 d-flex flex-column flex-grow-1">
        <h3 className="h5 fw-bold mb-2">
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
            <span>{course.lessonsCount ?? 0} Pelajaran</span>
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
              href={`/courses/${course.slug}`}
              className="stretched-link text-decoration-none"
              aria-label={`Lihat detail dan progres kursus ${course.title}`}
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
