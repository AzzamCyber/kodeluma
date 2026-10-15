import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  BookOpen,
  Clock,
  Award,
  CheckCircle2,
  FileCode,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { Footer } from '@/components/layout/Footer';
import { MOCK_COURSES, MOCK_LESSONS, MOCK_QUIZZES, MOCK_PROJECTS } from '@/lib/mockData';

interface CourseDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const course = MOCK_COURSES.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const lessons = MOCK_LESSONS[course.id] || [];
  const quiz = MOCK_QUIZZES[course.id];
  const project = MOCK_PROJECTS.find((p) => p.courseId === course.id);

  return (
    <div className="d-flex flex-column min-vh-100">
      <PublicNavbar />

      <main id="main-content" className="flex-grow-1 py-5">
        <div className="container">
          {/* Breadcrumb Navigation */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb small">
              <li className="breadcrumb-item">
                <Link href="/" className="text-secondary text-decoration-none">
                  Beranda
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/courses" className="text-secondary text-decoration-none">
                  Katalog Kelas
                </Link>
              </li>
              <li className="breadcrumb-item active text-dark fw-semibold" aria-current="page">
                {course.title}
              </li>
            </ol>
          </nav>

          {/* Course Hero Card */}
          <div className="kl-card p-4 p-lg-5 mb-5 bg-white border">
            <div className="row g-4 align-items-center">
              <div className="col-lg-8">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="kl-badge kl-badge-primary">
                    {course.category.toUpperCase()}
                  </span>
                  <span className="kl-badge kl-badge-neutral text-capitalize">
                    Tingkat {course.level}
                  </span>
                </div>

                <h1 className="h2 fw-bold mb-3" style={{ color: 'var(--kl-ink)' }}>
                  {course.title}
                </h1>
                <p className="kl-lead mb-4">{course.description}</p>

                <div className="d-flex flex-wrap gap-4 text-secondary small pt-2 border-top">
                  <div className="d-flex align-items-center gap-2">
                    <BookOpen size={16} className="text-primary" />
                    <span>{lessons.length} Pelajaran Bertahap</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <Clock size={16} className="text-primary" />
                    <span>Estimasi {course.estimatedMinutes} Menit</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <Award size={16} className="text-primary" />
                    <span>Sertifikat Penyelesaian</span>
                  </div>
                </div>
              </div>

              {/* Sidebar Action Box */}
              <div className="col-lg-4">
                <div
                  className="p-4 rounded-3 border"
                  style={{ backgroundColor: 'var(--kl-surface-soft)' }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="small text-secondary">Akses Kelas</span>
                    <span className="badge bg-success-subtle text-success border border-success-subtle fw-semibold">
                      Gratis
                    </span>
                  </div>

                  <p className="small text-secondary mb-4">
                    Mulai belajar kapan saja. Progres belajarmu akan tersimpan otomatis di akunmu.
                  </p>

                  <Link
                    href={`/learn/${course.slug}/${lessons[0]?.slug || 'pelajaran-1'}`}
                    className="kl-btn-primary w-100 text-center text-decoration-none d-flex align-items-center justify-content-center gap-2 mb-2 py-3"
                  >
                    <span>Mulai Belajar Sekarang</span>
                    <ArrowRight size={16} />
                  </Link>

                  <div className="text-center">
                    <small className="text-muted" style={{ fontSize: '11px' }}>
                      Instruktur: Tim Pengembang Kodeluma
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Curriculum Section */}
          <div className="row g-4">
            <div className="col-lg-8">
              <h2 className="h4 fw-bold mb-3" style={{ color: 'var(--kl-ink)' }}>
                Silabus & Rangkaian Materi
              </h2>

              <div className="kl-card p-0 overflow-hidden mb-4 border">
                <div className="p-3 bg-light border-bottom fw-semibold small text-secondary">
                  Daftar Pelajaran ({lessons.length} Materi)
                </div>
                <div className="list-group list-group-flush">
                  {lessons.map((lesson, index) => (
                    <div
                      key={lesson.id}
                      className="list-group-item p-3 d-flex align-items-center justify-content-between"
                    >
                      <div className="d-flex align-items-center gap-3">
                        <span className="fw-bold font-monospace text-muted small" style={{ width: '24px' }}>
                          0{index + 1}
                        </span>
                        <div>
                          <div className="fw-semibold text-dark small">{lesson.title}</div>
                          {lesson.summary && (
                            <div className="text-muted small" style={{ fontSize: '12px' }}>
                              {lesson.summary}
                            </div>
                          )}
                        </div>
                      </div>
                      <span className="badge bg-light text-secondary border small">
                        Pelajaran Wajib
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Evaluasi & Proyek */}
              <h3 className="h5 fw-bold mb-3" style={{ color: 'var(--kl-ink)' }}>
                Evaluasi & Proyek Praktik
              </h3>

              <div className="row g-3">
                {quiz && (
                  <div className="col-md-6">
                    <div className="kl-card p-3 h-100 border">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <FileCode size={18} className="text-primary" />
                        <h4 className="fs-6 fw-bold mb-0">Kuis Evaluasi</h4>
                      </div>
                      <p className="text-secondary small mb-2">{quiz.title}</p>
                      <small className="text-muted">
                        {quiz.questions.length} Soal Pilihan Ganda &middot; Standar Lulus {quiz.passScorePercent}%
                      </small>
                    </div>
                  </div>
                )}

                {project && (
                  <div className="col-md-6">
                    <div className="kl-card p-3 h-100 border">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <Award size={18} className="text-warning" />
                        <h4 className="fs-6 fw-bold mb-0">Proyek Portofolio</h4>
                      </div>
                      <p className="text-secondary small mb-2">{project.title}</p>
                      <small className="text-muted">
                        Pengumpulan URL repositori atau demo web
                      </small>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Prerequisites & Trust Info */}
            <div className="col-lg-4">
              <div className="kl-card p-4 border mb-4">
                <h3 className="fs-6 fw-bold mb-3">Persyaratan Kelas</h3>
                <ul className="list-unstyled small text-secondary d-flex flex-column gap-2 mb-0">
                  <li className="d-flex align-items-start gap-2">
                    <CheckCircle2 size={15} className="text-primary mt-1 flex-shrink-0" />
                    <span>Tidak membutuhkan pengalaman coding sebelumnya</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <CheckCircle2 size={15} className="text-primary mt-1 flex-shrink-0" />
                    <span>Komputer atau laptop dengan browser modern</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <CheckCircle2 size={15} className="text-primary mt-1 flex-shrink-0" />
                    <span>Kemauan meluangkan waktu 15–30 menit sehari</span>
                  </li>
                </ul>
              </div>

              <div className="kl-card p-4 border" style={{ backgroundColor: 'var(--kl-surface-soft)' }}>
                <div className="d-flex align-items-center gap-2 mb-2 text-primary">
                  <ShieldCheck size={20} />
                  <span className="fw-bold small">Jaminan Mutu Kodeluma</span>
                </div>
                <p className="small text-secondary mb-0">
                  Seluruh materi dibuat terstruktur tanpa lompatan logika. Setiap latihan dirancang
                  agar pemula benar-benar paham fondasi sebelum melanjutkan ke tingkat berikutnya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
