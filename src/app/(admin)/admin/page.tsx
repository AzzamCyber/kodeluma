import Link from 'next/link';
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  FolderGit2,
  GraduationCap,
  MessageSquare,
  Plus,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { requireAdmin } from '@/lib/auth/guard';
import { ReportService } from '@/lib/services/reportService';
import { CourseRepository } from '@/lib/repositories/courseRepository';
import { ProjectService } from '@/lib/services/projectService';
import { ForumService } from '@/lib/services/forumService';
import { AdminSidebar } from '@/components/layout/AdminSidebar';
import { Card } from '@/components/ui/Card';

const formatNumber = (value: number) => value.toLocaleString('id-ID');

interface AdminMetricCardProps {
  label: string;
  value: number;
  detail: string;
  icon: LucideIcon;
  href?: string;
}

function AdminMetricCard({ label, value, detail, icon: Icon, href }: AdminMetricCardProps) {
  const content = (
    <Card className={`kl-admin-metric h-100 ${href ? 'kl-admin-metric--linked' : ''}`}>
      <div className="d-flex align-items-start justify-content-between gap-3">
        <span className="kl-admin-metric-label">{label}</span>
        <span className="kl-admin-metric-icon" aria-hidden="true"><Icon size={20} strokeWidth={1.75} /></span>
      </div>
      <div className="kl-admin-metric-value">{formatNumber(value)}</div>
      <div className="kl-admin-metric-detail">{detail}</div>
    </Card>
  );

  return href ? <Link href={href} className="d-block h-100 text-decoration-none">{content}</Link> : content;
}

export default async function AdminOverviewPage() {
  const user = await requireAdmin();
  const [stats, courses, pendingSubmissions, forumData] = await Promise.all([
    ReportService.getOverview(),
    CourseRepository.listAllCourses(),
    ProjectService.listPending(),
    ForumService.listThreads('all', 1, 4),
  ]);

  const publishedCourses = courses.filter((course) => course.status === 'published').length;
  const totalLessons = courses.reduce((sum, course) => sum + (course.lessonsCount ?? 0), 0);
  const publishedRatio = courses.length > 0 ? Math.round((publishedCourses / courses.length) * 100) : 0;
  const previewCourses = courses.slice(0, 5);
  const recentThreads = forumData.items.slice(0, 3);

  return (
    <div className="kl-admin-layout">
      <AdminSidebar user={user} />

      <main id="main-content" className="kl-admin-main kl-admin-overview p-4 p-xl-5">
        <div className="container-fluid px-0 kl-admin-overview-inner">
          <header className="kl-admin-page-header d-flex flex-column flex-xl-row align-items-xl-end justify-content-between gap-4 mb-5">
            <div>
              <div className="kl-eyebrow mb-2">RUANG KERJA ADMIN</div>
              <h1 className="kl-admin-page-title mb-2">Ringkasan platform</h1>
              <p className="kl-admin-page-intro mb-0">
                Pantau kegiatan belajar dan selesaikan pekerjaan pengelolaan dari satu tempat.
              </p>
            </div>
            <div className="kl-admin-header-actions d-flex flex-wrap gap-2">
              <Link href="/admin/courses" className="kl-btn-primary d-inline-flex align-items-center justify-content-center gap-2 text-decoration-none">
                <Plus size={17} strokeWidth={1.75} aria-hidden="true" />
                <span>Tambah kursus</span>
              </Link>
              <Link href="/admin/projects" className="kl-btn-secondary d-inline-flex align-items-center justify-content-center gap-2 text-decoration-none">
                <FolderGit2 size={17} strokeWidth={1.75} aria-hidden="true" />
                <span>Tinjau proyek</span>
                {pendingSubmissions.length > 0 && <span className="kl-admin-action-count">{pendingSubmissions.length}</span>}
              </Link>
            </div>
          </header>

          <section aria-labelledby="kl-admin-stats-title" className="mb-5">
            <div className="kl-admin-section-heading d-flex align-items-end justify-content-between gap-3 mb-3">
              <div>
                <div className="kl-eyebrow mb-1">GAMBARAN UMUM</div>
                <h2 id="kl-admin-stats-title" className="h5 fw-bold mb-0">Aktivitas platform</h2>
              </div>
              <span className="kl-admin-data-note">Berdasarkan data tersimpan</span>
            </div>
            <div className="row g-3">
              <div className="col-12 col-sm-6 col-xl-3">
                <AdminMetricCard label="Pengguna terdaftar" value={stats.totalUsers} detail="Siswa dan administrator" icon={Users} href="/admin/users" />
              </div>
              <div className="col-12 col-sm-6 col-xl-3">
                <AdminMetricCard label="Kursus diterbitkan" value={stats.totalCoursesPublished} detail={`Dari ${formatNumber(courses.length)} kursus tersimpan`} icon={BookOpen} href="/admin/courses" />
              </div>
              <div className="col-12 col-sm-6 col-xl-3">
                <AdminMetricCard label="Pendaftaran kelas" value={stats.totalEnrollments} detail="Total keikutsertaan kelas" icon={GraduationCap} />
              </div>
              <div className="col-12 col-sm-6 col-xl-3">
                <AdminMetricCard label="Sertifikat terbit" value={stats.totalCompletions} detail="Sertifikat internal Kodeluma" icon={Award} />
              </div>
            </div>
          </section>

          <div className="row g-4 align-items-start">
            <section className="col-xl-8" aria-labelledby="kl-admin-courses-title">
              <div className="kl-card kl-admin-panel overflow-hidden">
                <div className="kl-admin-panel-header d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3">
                  <div>
                    <div className="kl-eyebrow mb-1">KURIKULUM</div>
                    <h2 id="kl-admin-courses-title" className="h5 fw-bold mb-1">Kursus dan materi</h2>
                    <p className="kl-admin-panel-subtitle mb-0">Cuplikan kursus yang tersimpan di platform.</p>
                  </div>
                  <Link href="/admin/courses" className="kl-admin-text-link d-inline-flex align-items-center gap-1 text-decoration-none">
                    Kelola semua <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>

                {previewCourses.length === 0 ? (
                  <div className="kl-admin-empty">
                    <BookOpen size={28} strokeWidth={1.5} aria-hidden="true" />
                    <h3 className="h6 fw-bold mt-3 mb-1">Belum ada kursus</h3>
                    <p className="mb-3">Buat kursus pertama untuk mulai menyusun materi belajar.</p>
                    <Link href="/admin/courses" className="kl-btn-primary d-inline-flex align-items-center gap-2 text-decoration-none">
                      <Plus size={16} aria-hidden="true" /> Buat kursus
                    </Link>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <table className="table kl-admin-course-table align-middle mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Kursus</th>
                          <th scope="col">Materi</th>
                          <th scope="col">Status</th>
                          <th scope="col" className="text-end">Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        {previewCourses.map((course) => (
                          <tr key={course.id}>
                            <td>
                              <span className="kl-admin-course-name d-block">{course.title}</span>
                              <span className="kl-admin-course-meta text-capitalize">{course.category} · {course.level}</span>
                            </td>
                            <td><span className="kl-admin-lesson-count">{course.lessonsCount ?? 0} pelajaran</span></td>
                            <td>
                              <span className={`kl-admin-status kl-admin-status--${course.status}`}>
                                {course.status === 'published' ? 'Terbit' : course.status === 'archived' ? 'Arsip' : 'Draf'}
                              </span>
                            </td>
                            <td className="text-end">
                              <Link href="/admin/courses" className="kl-admin-row-link" aria-label={`Kelola kursus ${course.title}`}>
                                Kelola <ChevronRight size={15} aria-hidden="true" />
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <div className="kl-admin-course-footer">
                  <div className="d-flex flex-wrap justify-content-between gap-2 mb-2">
                    <span>{publishedCourses} dari {courses.length} kursus terbit</span>
                    <span>{totalLessons} materi tersimpan</span>
                  </div>
                  <div className="kl-admin-progress" role="progressbar" aria-label="Persentase kursus yang diterbitkan" aria-valuenow={publishedRatio} aria-valuemin={0} aria-valuemax={100}>
                    <span style={{ width: `${publishedRatio}%` }} />
                  </div>
                </div>
              </div>
            </section>

            <div className="col-xl-4 d-flex flex-column gap-4">
              <section className="kl-card kl-admin-panel" aria-labelledby="kl-admin-review-title">
                <div className="kl-admin-panel-header kl-admin-panel-header--compact">
                  <div className="d-flex align-items-start justify-content-between gap-3">
                    <div>
                      <div className="kl-eyebrow mb-1">PERLU DITINJAU</div>
                      <h2 id="kl-admin-review-title" className="h5 fw-bold mb-1">Antrean proyek</h2>
                    </div>
                    <span className="kl-admin-pending-count">{formatNumber(pendingSubmissions.length)}</span>
                  </div>
                  <p className="kl-admin-panel-subtitle mb-0">Pengumpulan siswa yang menunggu penilaian.</p>
                </div>

                {pendingSubmissions.length === 0 ? (
                  <div className="kl-admin-empty kl-admin-empty--small">
                    <CheckCircle2 size={27} strokeWidth={1.5} aria-hidden="true" />
                    <p className="fw-semibold mb-1">Semua proyek sudah ditinjau</p>
                    <span>Antrean saat ini kosong.</span>
                  </div>
                ) : (
                  <ul className="kl-admin-activity-list list-unstyled mb-0">
                    {pendingSubmissions.slice(0, 3).map((submission) => (
                      <li key={submission.id} className="kl-admin-activity-item">
                        <span className="kl-admin-activity-icon" aria-hidden="true"><FolderGit2 size={17} strokeWidth={1.75} /></span>
                        <div className="flex-grow-1">
                          <span className="kl-admin-activity-title d-block text-truncate">{submission.projectTitle || 'Proyek siswa'}</span>
                          <span className="kl-admin-activity-meta d-block text-truncate">{submission.userDisplayName || 'Pelajar Kodeluma'}</span>
                        </div>
                        <Link href="/admin/projects" className="kl-admin-activity-link" aria-label={`Tinjau ${submission.projectTitle || 'proyek siswa'}`}>
                          Tinjau
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="kl-admin-panel-footer">
                  <Link href="/admin/projects" className="kl-admin-text-link d-inline-flex align-items-center gap-1 text-decoration-none">
                    Lihat semua proyek <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </section>

              <section className="kl-card kl-admin-panel" aria-labelledby="kl-admin-forum-title">
                <div className="kl-admin-panel-header kl-admin-panel-header--compact">
                  <div className="kl-eyebrow mb-1">KOMUNITAS</div>
                  <h2 id="kl-admin-forum-title" className="h5 fw-bold mb-1">Diskusi terbaru</h2>
                  <p className="kl-admin-panel-subtitle mb-0">Topik yang masuk ke forum belajar.</p>
                </div>

                {recentThreads.length === 0 ? (
                  <div className="kl-admin-empty kl-admin-empty--small">
                    <MessageSquare size={27} strokeWidth={1.5} aria-hidden="true" />
                    <p className="fw-semibold mb-1">Belum ada diskusi</p>
                    <span>Topik baru akan muncul di sini.</span>
                  </div>
                ) : (
                  <ul className="kl-admin-activity-list list-unstyled mb-0">
                    {recentThreads.map((thread) => (
                      <li key={thread.id} className="kl-admin-activity-item">
                        <span className="kl-admin-activity-icon" aria-hidden="true"><MessageSquare size={17} strokeWidth={1.75} /></span>
                        <div className="flex-grow-1">
                          <Link href={thread.status === 'hidden' ? '/admin/forum' : `/forum/${thread.id}`} className="kl-admin-activity-title d-block text-truncate text-decoration-none">{thread.title}</Link>
                          <span className="kl-admin-activity-meta d-block text-truncate text-capitalize">
                            {thread.category} · {thread.repliesCount} balasan{thread.status === 'hidden' ? ' · Disembunyikan' : ''}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="kl-admin-panel-footer">
                  <Link href="/admin/forum" className="kl-admin-text-link d-inline-flex align-items-center gap-1 text-decoration-none">
                    Buka moderasi forum <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
