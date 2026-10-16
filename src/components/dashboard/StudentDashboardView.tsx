import Link from 'next/link';
import { ArrowRight, Award, BookOpen, CheckCircle2, Compass, History, Layers3 } from 'lucide-react';
import { StudentNavbar } from '@/components/layout/StudentNavbar';
import { Footer } from '@/components/layout/Footer';
import { CourseCard } from '@/components/courses/CourseCard';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { EditorialIllustration } from '@/components/ui/EditorialIllustration';
import type { DashboardCourse, DashboardHistoryItem } from '@/lib/dashboardLearning';
import type { Course, User } from '@/types/domain';

interface StudentDashboardViewProps {
  user: User;
  courses: DashboardCourse[];
  continueCourse: DashboardCourse | null;
  recommendations: Course[];
  publishedCount: number;
  certificateCount: number;
  history: DashboardHistoryItem[];
}

const historyDateTime = new Intl.DateTimeFormat('id-ID', {
  dateStyle: 'medium',
  timeStyle: 'short',
  timeZone: 'Asia/Jakarta',
});

function HistoryRowCopy({ item }: { item: DashboardHistoryItem }) {
  return (
    <span className="kl-dashboard-history-copy">
      <strong className="d-block">{item.lessonTitle}</strong>
      <span className="d-block">{item.courseTitle}</span>
      {item.completedAt ? (
        <time dateTime={item.completedAt} className="d-block">Selesai {historyDateTime.format(new Date(item.completedAt))} WIB</time>
      ) : (
        <small className="d-block">Waktu belum tercatat</small>
      )}
      {!item.courseAvailable && <small className="d-block">Kelas tidak tersedia</small>}
    </span>
  );
}

export function StudentDashboardView({ user, courses, continueCourse, recommendations, publishedCount, certificateCount, history }: StudentDashboardViewProps) {
  const activeCourses = courses.filter((item) => item.nextLesson);
  const completedLessons = courses.reduce((sum, item) => sum + item.progress.completedCount, 0);
  const allMaterialsDone = courses.length > 0 && courses.every((item) => item.progress.percentage === 100);

  return (
    <div className="d-flex flex-column min-vh-100">
      <StudentNavbar user={user} />
      <main id="main-content" className="kl-dashboard-main flex-grow-1">
        <div className="container">
          <header className="kl-dashboard-heading row align-items-center g-3">
            <div className="col-md-8">
              <span className="kl-eyebrow">Ruang belajarmu</span>
              <h1 className="h2 mb-3">Halo, {user.displayName}.</h1>
              <p className="kl-lead mb-0">Lihat progresmu, lalu ambil langkah berikutnya.</p>
            </div>
            <div className="col-md-4 d-none d-md-block" aria-hidden="true">
              <EditorialIllustration kind="progress" className="kl-page-art" />
            </div>
          </header>

          {continueCourse?.nextLesson ? (
            <section className="kl-dashboard-feature kl-card mb-4" aria-labelledby="continue-heading">
              <div className="row g-0 align-items-stretch">
                <div className="col-lg-7 p-4 p-md-5">
                  <span className="kl-badge kl-badge-primary mb-3">Lanjutkan belajar</span>
                  <h2 id="continue-heading" className="h3 mb-2">{continueCourse.course.title}</h2>
                  <p className="kl-dashboard-feature-summary mb-4">{continueCourse.course.summary}</p>
                  <ProgressBar value={continueCourse.progress.percentage} label={`${continueCourse.progress.completedCount} dari ${continueCourse.progress.totalRequired} pelajaran wajib selesai`} />
                  <Link href={`/learn/${continueCourse.course.slug}/${continueCourse.nextLesson.slug}`} className="btn kl-btn-primary d-inline-flex align-items-center justify-content-center gap-2 mt-4">
                    Lanjutkan Materi <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </div>
                <div className="col-lg-5 kl-dashboard-next p-4 p-md-5 d-flex flex-column justify-content-center">
                  <span className="kl-dashboard-next-icon mb-3"><BookOpen size={22} aria-hidden="true" /></span>
                  <span className="kl-eyebrow mb-2">Pelajaran berikutnya</span>
                  <h3 className="h4 mb-2">{continueCourse.nextLesson.title}</h3>
                  <p className="mb-0">{continueCourse.nextLesson.summary || 'Buka materi dan lanjutkan dari progres yang tersimpan.'}</p>
                </div>
              </div>
            </section>
          ) : (
            <section className="kl-dashboard-empty kl-card p-4 p-md-5 mb-4" aria-labelledby="continue-heading">
              <span className="kl-dashboard-next-icon mb-3"><Compass size={24} aria-hidden="true" /></span>
              <h2 id="continue-heading" className="h3 mb-2">{allMaterialsDone ? 'Semua materi kelasmu sudah selesai.' : 'Mulai perjalanan belajarmu.'}</h2>
              <p className="kl-dashboard-feature-summary mb-4">
                {allMaterialsDone
                  ? 'Kamu bisa membuka kelas untuk melihat kuis dan ketentuan sertifikat, atau memilih kelas berikutnya.'
                  : 'Pilih kelas yang sesuai minatmu. Progres akan tercatat saat kamu menyelesaikan pelajaran.'}
              </p>
              <Link href="/courses" className="btn kl-btn-primary d-inline-flex align-items-center gap-2">Jelajahi Kelas <ArrowRight size={18} aria-hidden="true" /></Link>
            </section>
          )}

          <section className="mb-5" aria-label="Ringkasan belajarmu">
            <div className="row g-3">
              <div className="col-md-4"><div className="kl-card kl-dashboard-stat h-100 p-4"><BookOpen size={20} aria-hidden="true" /><span>Kelas diikuti</span><strong>{courses.length}</strong><small>Dari {publishedCount} kelas terbit</small></div></div>
              <div className="col-md-4"><div className="kl-card kl-dashboard-stat h-100 p-4"><CheckCircle2 size={20} aria-hidden="true" /><span>Pelajaran selesai</span><strong>{completedLessons}</strong><small>Materi wajib yang telah diselesaikan</small></div></div>
              <div className="col-md-4"><div className="kl-card kl-dashboard-stat h-100 p-4"><Award size={20} aria-hidden="true" /><span>Sertifikat aktif</span><strong>{certificateCount}</strong><small>Catatan penyelesaian Kodeluma</small></div></div>
            </div>
          </section>

          <section className="kl-card kl-dashboard-history mb-5" aria-labelledby="learning-history-heading">
            <div className="kl-dashboard-history-header d-flex align-items-start gap-3 p-4">
              <span className="kl-dashboard-history-heading-icon" aria-hidden="true"><History size={20} /></span>
              <div>
                <span className="kl-eyebrow mb-1">Jejak belajarmu</span>
                <h2 id="learning-history-heading" className="h4 mb-1">Riwayat pembelajaran</h2>
                <p className="mb-0">Pelajaran yang sudah kamu tandai selesai.</p>
              </div>
            </div>
            {history.length > 0 ? (
              <>
                <ol className="list-unstyled mb-0">
                  {history.map((item) => (
                    <li key={item.lessonId} className="kl-dashboard-history-item d-flex align-items-center gap-3">
                      <span className="kl-dashboard-history-check" aria-hidden="true"><CheckCircle2 size={20} /></span>
                      {item.courseAvailable ? (
                        <Link href={`/learn/${item.courseSlug}/${item.lessonSlug}`} className="kl-dashboard-history-link d-flex align-items-center justify-content-between gap-3 flex-grow-1">
                          <HistoryRowCopy item={item} />
                          <ArrowRight size={18} className="flex-shrink-0" aria-hidden="true" />
                        </Link>
                      ) : (
                        <div className="kl-dashboard-history-static d-flex align-items-center flex-grow-1">
                          <HistoryRowCopy item={item} />
                        </div>
                      )}
                    </li>
                  ))}
                </ol>
                {history.some((item) => !item.completedAt) && (
                  <p className="kl-dashboard-history-note mb-0 px-4 py-3">Materi lama tetap ditampilkan meski waktu penyelesaiannya belum tersimpan.</p>
                )}
              </>
            ) : (
              <div className="kl-dashboard-history-empty p-4">
                <p className="mb-3">Belum ada pelajaran yang ditandai selesai. Selesaikan satu materi untuk mulai mengisi riwayatmu.</p>
                <Link href={continueCourse?.nextLesson ? `/learn/${continueCourse.course.slug}/${continueCourse.nextLesson.slug}` : '/courses'} className="kl-dashboard-text-link d-inline-flex align-items-center gap-1">
                  {continueCourse?.nextLesson ? 'Buka pelajaran berikutnya' : 'Jelajahi kelas'} <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            )}
          </section>

          {activeCourses.length > 0 && (
            <section className="mb-5" aria-labelledby="active-courses-heading">
              <div className="kl-dashboard-section-heading d-flex align-items-end justify-content-between gap-3 mb-4">
                <div><span className="kl-eyebrow">Belajar sesuai ritmemu</span><h2 id="active-courses-heading" className="h4 mb-0">Kelas yang sedang dipelajari</h2></div>
                <Link href="/courses" className="kl-dashboard-text-link d-inline-flex align-items-center gap-1">Lihat katalog <ArrowRight size={16} aria-hidden="true" /></Link>
              </div>
              <div className="row g-4">
                {activeCourses.slice(0, 3).map(({ course, progress }) => <div key={course.id} className="col-md-6 col-lg-4"><CourseCard course={course} isEnrolled progressPercent={progress.percentage} /></div>)}
              </div>
            </section>
          )}

          {recommendations.length > 0 && (
            <section className="mb-5" aria-labelledby="explore-heading">
              <div className="kl-dashboard-section-heading mb-4"><span className="kl-eyebrow">Jelajahi materi</span><h2 id="explore-heading" className="h4 mb-0">Kelas lain yang tersedia</h2></div>
              <div className="row g-4">
                {recommendations.map((course) => <div key={course.id} className="col-md-6 col-lg-4"><CourseCard course={course} /></div>)}
              </div>
            </section>
          )}

          <nav className="kl-card kl-dashboard-shortcuts p-4" aria-label="Akses cepat belajar">
            <div className="d-flex align-items-center gap-2 mb-3"><Layers3 size={19} aria-hidden="true" /><h2 className="h5 mb-0">Lanjut ke bagian lain</h2></div>
            <div className="row g-3">
              <div className="col-sm-6 col-lg-3"><Link href="/courses" className="btn kl-btn-secondary w-100">Katalog kelas</Link></div>
              <div className="col-sm-6 col-lg-3"><Link href="/projects" className="btn kl-btn-secondary w-100">Proyek praktik</Link></div>
              <div className="col-sm-6 col-lg-3"><Link href="/forum" className="btn kl-btn-secondary w-100">Forum diskusi</Link></div>
              <div className="col-sm-6 col-lg-3"><Link href="/certificates" className="btn kl-btn-secondary w-100">Sertifikat saya</Link></div>
            </div>
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  );
}
