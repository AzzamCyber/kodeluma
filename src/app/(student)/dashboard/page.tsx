import React from 'react';
import Link from 'next/link';
import { requireUser } from '@/lib/auth/guard';
import { CourseRepository } from '@/lib/repositories/courseRepository';
import { LearningRepository } from '@/lib/repositories/learningRepository';
import { LearningService } from '@/lib/services/learningService';
import { CertificateRepository } from '@/lib/repositories/certificateRepository';
import { StudentNavbar } from '@/components/layout/StudentNavbar';
import { Footer } from '@/components/layout/Footer';
import { CourseCard } from '@/components/courses/CourseCard';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { BookOpen, CheckCircle, Award, ArrowRight, Compass } from 'lucide-react';
import { Course, ProgressSummary } from '@/types/domain';
import { EditorialIllustration } from '@/components/ui/EditorialIllustration';

export default async function StudentDashboardPage() {
  const user = await requireUser();

  const [enrollments, allPublishedCourses, certificates] = await Promise.all([
    LearningRepository.getUserEnrollments(user.id),
    CourseRepository.listPublishedCourses(),
    CertificateRepository.getUserCertificates(user.id),
  ]);

  // Compute progress for each enrolled course
  const enrolledCourseProgress = await Promise.all(
    enrollments.map(async (en) => {
      const course = allPublishedCourses.find((c) => c.id === en.courseId);
      if (!course) return null;
      const progress = await LearningService.getProgress(user.id, en.courseId);
      return { course, progress };
    })
  );

  const validProgress = enrolledCourseProgress.filter(
    (item): item is { course: Course; progress: ProgressSummary } => item !== null
  );

  const totalLessonsCompleted = validProgress.reduce(
    (acc, curr) => acc + curr.progress.completedCount,
    0
  );

  const continueCourse = validProgress[0];

  return (
    <div className="d-flex flex-column min-vh-100">
      <StudentNavbar user={user} />

      <main id="main-content" className="flex-grow-1 py-5">
        <div className="container">
          {/* Greeting Header */}
          <div className="row align-items-center g-3 mb-4">
            <div className="col-md-8">
            <div className="kl-eyebrow">DASBOR BELAJAR SISWA</div>
            <h1 className="h2 fw-bold mb-2" style={{ color: 'var(--kl-ink)' }}>
              Halo, {user.displayName}! Kembali belajar yuk.
            </h1>
            <p className="text-secondary small mb-0">
              Setiap langkah kecil membawamu lebih dekat menjadi developer yang percaya diri.
            </p>
            </div>
            <div className="col-md-4"><EditorialIllustration kind="progress" className="kl-page-art" /></div>
          </div>

          {/* Top Highlight Card: Continue Learning */}
          {continueCourse ? (
            <div
              className="kl-card p-4 p-md-5 mb-5 border shadow-sm position-relative overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, #FFFFFF 0%, rgba(239, 245, 255, 0.6) 100%)',
                borderLeft: '5px solid var(--kl-primary) !important',
              }}
            >
              <div className="row align-items-center g-4">
                <div className="col-lg-8">
                  <span className="badge rounded-pill bg-primary-subtle text-primary fw-bold px-3 py-2 small mb-2">
                    Lanjutkan Belajar Terakhir
                  </span>
                  <h2 className="h4 fw-bold mb-2" style={{ color: 'var(--kl-ink)' }}>
                    {continueCourse.course.title}
                  </h2>
                  <p className="text-secondary small mb-3">
                    {continueCourse.course.summary}
                  </p>

                  <div className="mb-3" style={{ maxWidth: '420px' }}>
                    <ProgressBar
                      value={continueCourse.progress.percentage}
                      label={`Selesai ${continueCourse.progress.completedCount} dari ${continueCourse.progress.totalRequired} pelajaran`}
                    />
                  </div>
                </div>

                <div className="col-lg-4 text-lg-end">
                  <Link
                    href={`/learn/${continueCourse.course.slug}/pelajaran-1`}
                    className="kl-btn-primary d-inline-flex align-items-center gap-2 text-decoration-none py-3 px-4 shadow-sm"
                  >
                    <span>Lanjutkan Materi</span>
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="kl-card p-4 p-md-5 mb-5 border bg-white text-center">
              <div
                className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                style={{
                  width: '56px',
                  height: '56px',
                  backgroundColor: 'var(--kl-primary-soft)',
                  color: 'var(--kl-primary)',
                }}
              >
                <Compass size={28} />
              </div>
              <h2 className="h5 fw-bold mb-2">Perjalanan coding-mu dimulai di sini.</h2>
              <p className="text-secondary small mb-4" style={{ maxWidth: '460px', margin: '0 auto' }}>
                Kamu belum mendaftar di kelas mana pun. Pilih salah satu materi pemula untuk memulai
                langkah pertamamu secara terarah.
              </p>
              <Link href="/courses" className="kl-btn-primary text-decoration-none py-2 px-4">
                Pilih Kelas Pertamamu
              </Link>
            </div>
          )}

          {/* Key Metric Cards */}
          <div className="row g-3 mb-5">
            <div className="col-md-4">
              <div className="kl-card p-4 bg-white border h-100">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="small text-secondary fw-semibold">Kelas Diikuti</span>
                  <BookOpen size={20} className="text-primary" />
                </div>
                <div className="display-6 fw-bold text-dark">{validProgress.length}</div>
                <small className="text-muted">Dari total {allPublishedCourses.length} kelas tersedia</small>
              </div>
            </div>

            <div className="col-md-4">
              <div className="kl-card p-4 bg-white border h-100">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="small text-secondary fw-semibold">Pelajaran Selesai</span>
                  <CheckCircle size={20} className="text-success" />
                </div>
                <div className="display-6 fw-bold text-dark">{totalLessonsCompleted}</div>
                <small className="text-muted">Modul teori dan latihan terselesaikan</small>
              </div>
            </div>

            <div className="col-md-4">
              <div className="kl-card p-4 bg-white border h-100">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="small text-secondary fw-semibold">Sertifikat Kelulusan</span>
                  <Award size={20} className="text-warning" />
                </div>
                <div className="display-6 fw-bold text-dark">{certificates.length}</div>
                <small className="text-muted">Bukti kelulusan internal terverifikasi</small>
              </div>
            </div>
          </div>

          {/* Active Courses Section */}
          {validProgress.length > 0 && (
            <div className="mb-5">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="h4 fw-bold mb-0" style={{ color: 'var(--kl-ink)' }}>
                  Kelas yang Sedang Dipelajari
                </h2>
                <Link href="/courses" className="text-decoration-none small text-primary fw-semibold">
                  Jelajahi Kelas Lain &rarr;
                </Link>
              </div>

              <div className="row g-4">
                {validProgress.map(({ course, progress }) => (
                  <div key={course.id} className="col-lg-4 col-md-6">
                    <CourseCard
                      course={course}
                      isEnrolled={true}
                      progressPercent={progress.percentage}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Links Section */}
          <div className="kl-card p-4 bg-white border">
            <h3 className="h6 fw-bold mb-3">Akses Cepat Belajar</h3>
            <div className="row g-3">
              <div className="col-sm-6 col-md-3">
                <Link
                  href="/courses"
                  className="kl-btn-secondary w-100 text-center text-decoration-none d-block py-2"
                >
                  Katalog Kelas
                </Link>
              </div>
              <div className="col-sm-6 col-md-3">
                <Link
                  href="/projects"
                  className="kl-btn-secondary w-100 text-center text-decoration-none d-block py-2"
                >
                  Proyek Portofolio
                </Link>
              </div>
              <div className="col-sm-6 col-md-3">
                <Link
                  href="/forum"
                  className="kl-btn-secondary w-100 text-center text-decoration-none d-block py-2"
                >
                  Forum Komunitas
                </Link>
              </div>
              <div className="col-sm-6 col-md-3">
                <Link
                  href="/certificates"
                  className="kl-btn-secondary w-100 text-center text-decoration-none d-block py-2"
                >
                  Sertifikat Saya
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
