import React from 'react';
import Link from 'next/link';
import { getCurrentUser } from '@/lib/auth/session';
import { ProjectRepository } from '@/lib/repositories/projectRepository';
import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { StudentNavbar } from '@/components/layout/StudentNavbar';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, CheckCircle2, Clock, AlertTriangle } from 'lucide-react';
import { EditorialIllustration } from '@/components/ui/EditorialIllustration';

export default async function ProjectsPage() {
  const user = await getCurrentUser();
  const projects = await ProjectRepository.listPublishedProjects();

  // If user is logged in, fetch their submission statuses
  const projectsWithStatus = await Promise.all(
    projects.map(async (p) => {
      let sub = null;
      if (user) {
        sub = await ProjectRepository.findSubmission(user.id, p.id);
      }
      return { project: p, submission: sub };
    })
  );

  return (
    <div className="d-flex flex-column min-vh-100">
      {user ? <StudentNavbar user={user} /> : <PublicNavbar />}

      <main id="main-content" className="flex-grow-1 py-5">
        <div className="container">
          <div className="row align-items-center g-3 mb-4">
            <div className="col-md-8">
            <div className="kl-eyebrow">PRAKTIK NYATA & PORTOFOLIO</div>
            <h1 className="h2 fw-bold mb-2" style={{ color: 'var(--kl-ink)' }}>
              Proyek Praktik Mandiri
            </h1>
            <p className="text-secondary small mb-0" style={{ maxWidth: '600px' }}>
              Bangun karya pertamamu dengan instruksi yang terarah. Kumpulkan tautan repositori GitHub
              atau demo halaman web kamu untuk direview oleh tim instruktur.
            </p>
            </div>
            <div className="col-md-4"><EditorialIllustration kind="launch" className="kl-page-art" /></div>
          </div>

          <div className="row g-4">
            {projectsWithStatus.map(({ project, submission }) => {
              const statusMap = {
                draft: {
                  label: 'Draf',
                  bg: 'bg-light text-secondary border',
                  icon: Clock,
                },
                submitted: {
                  label: 'Menunggu Review',
                  bg: 'bg-warning-subtle text-warning border-warning-subtle',
                  icon: Clock,
                },
                approved: {
                  label: 'Disetujui',
                  bg: 'bg-success-subtle text-success border-success-subtle',
                  icon: CheckCircle2,
                },
                needs_revision: {
                  label: 'Perlu Revisi',
                  bg: 'bg-danger-subtle text-danger border-danger-subtle',
                  icon: AlertTriangle,
                },
              };

              const currentStatus = submission ? statusMap[submission.status] : null;

              return (
                <div key={project.id} className="col-lg-6">
                  <div className="kl-card p-4 p-md-5 h-100 d-flex flex-column bg-white border">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <span className="kl-badge kl-badge-primary text-uppercase">
                        Tingkat {project.difficulty}
                      </span>
                      {currentStatus ? (
                        <span className={`badge ${currentStatus.bg} border px-2 py-1 small fw-semibold`}>
                          {currentStatus.label}
                        </span>
                      ) : (
                        <span className="badge bg-light text-secondary border px-2 py-1 small">
                          Belum Dikumpulkan
                        </span>
                      )}
                    </div>

                    <h2 className="h4 fw-bold mb-2">{project.title}</h2>
                    <p className="text-secondary small mb-4 flex-grow-1" style={{ lineHeight: 1.7 }}>
                      {project.summary}
                    </p>

                    <div className="mb-4">
                      <div className="fw-semibold small text-dark mb-2">Ketentuan Proyek:</div>
                      <ul className="list-unstyled small text-secondary d-flex flex-column gap-1 mb-0">
                        {project.requirements.slice(0, 2).map((req, idx) => (
                          <li key={idx} className="d-flex align-items-center gap-2">
                            <span className="text-primary">&bull;</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                      <small className="text-muted">Review manusia transparan</small>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="kl-btn-primary d-inline-flex align-items-center gap-2 text-decoration-none small py-2 px-3"
                      >
                        <span>{submission ? 'Lihat Pengumpulan' : 'Buka Instruksi'}</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
