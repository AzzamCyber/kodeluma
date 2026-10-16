import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth/session';
import { ProjectRepository } from '@/lib/repositories/projectRepository';
import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { StudentNavbar } from '@/components/layout/StudentNavbar';
import { Footer } from '@/components/layout/Footer';
import { ProjectSubmissionForm } from '@/components/learning/ProjectSubmissionForm';
import { CheckCircle2 } from 'lucide-react';

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const user = await getCurrentUser();

  const project = await ProjectRepository.findProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  let submission = null;
  if (user) {
    submission = await ProjectRepository.findSubmission(user.id, project.id);
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      {user ? <StudentNavbar user={user} /> : <PublicNavbar />}

      <main id="main-content" className="flex-grow-1 py-5">
        <div className="container">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb small">
              <li className="breadcrumb-item">
                <Link href={user ? '/dashboard' : '/'} className="text-secondary text-decoration-none">
                  {user ? 'Dasbor' : 'Beranda'}
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/projects" className="text-secondary text-decoration-none">
                  Proyek Praktik
                </Link>
              </li>
              <li className="breadcrumb-item active text-dark fw-semibold" aria-current="page">
                {project.title}
              </li>
            </ol>
          </nav>

          <div className="row g-4 mb-5">
            {/* Left Column: Brief and Requirements */}
            <div className="col-lg-7">
              <div className="kl-card p-4 p-md-5 bg-white border h-100">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="kl-badge kl-badge-primary text-uppercase">
                    Tingkat {project.difficulty}
                  </span>
                  <span className="kl-badge kl-badge-neutral">Review Instruktur</span>
                </div>

                <h1 className="h2 fw-bold mb-3" style={{ color: 'var(--kl-ink)' }}>
                  {project.title}
                </h1>
                <p className="kl-lead mb-4">{project.brief}</p>

                <h2 className="h5 fw-bold mb-3" style={{ color: 'var(--kl-ink)' }}>
                  Ketentuan dan Syarat Kelulusan:
                </h2>
                <ul className="list-unstyled d-flex flex-column gap-3 mb-4">
                  {project.requirements.map((req, idx) => (
                    <li key={idx} className="d-flex align-items-start gap-3 small text-secondary">
                      <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="p-3 rounded-3 border small text-muted"
                  style={{ backgroundColor: 'var(--kl-surface-soft)' }}
                >
                  <strong>Rubrik Penilaian:</strong> Struktur semantik (40%), kerapian kode dan
                  navigasi (30%), responsivitas layar (30%).
                </div>
              </div>
            </div>

            {/* Right Column: Submission Form */}
            <div className="col-lg-5">
              <ProjectSubmissionForm
                projectId={project.id}
                initialSubmission={submission}
                isLoggedIn={!!user}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
