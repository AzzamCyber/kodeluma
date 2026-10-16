import React from 'react';
import Link from 'next/link';
import { requireUser } from '@/lib/auth/guard';
import { LearningRepository } from '@/lib/repositories/learningRepository';
import { CertificateRepository } from '@/lib/repositories/certificateRepository';
import { StudentNavbar } from '@/components/layout/StudentNavbar';
import { Footer } from '@/components/layout/Footer';
import { ProfileEditor } from '@/components/profile/ProfileEditor';
import { User, Shield, Award, BookOpen, Calendar, ArrowRight } from 'lucide-react';
import { EditorialIllustration } from '@/components/ui/EditorialIllustration';

export default async function ProfilePage() {
  const user = await requireUser();
  const [enrollments, certificates] = await Promise.all([
    LearningRepository.getUserEnrollments(user.id),
    CertificateRepository.getUserCertificates(user.id),
  ]);

  const joinDate = new Date(user.createdAt).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="d-flex flex-column min-vh-100">
      <StudentNavbar user={user} />

      <main id="main-content" className="flex-grow-1 py-5">
        <div className="container" style={{ maxWidth: '900px' }}>
          {/* Header Breadcrumb */}
          <div className="row align-items-center g-3 mb-4">
            <div className="col-md-8">
            <div className="kl-eyebrow">PENGATURAN AKUN</div>
            <h1 className="h2 fw-bold mb-1" style={{ color: 'var(--kl-ink)' }}>
              Profil Pengguna
            </h1>
            <p className="text-secondary small mb-0">
              Kelola data profil dan tinjau riwayat pencapaian belajar Anda di Kodeluma.
            </p>
            </div>
            <div className="col-md-4"><EditorialIllustration kind="progress" className="kl-page-art" /></div>
          </div>

          <div className="row g-4">
            {/* Left Column: Profile Card & Stats */}
            <div className="col-lg-4">
              <div className="kl-card p-4 bg-white border text-center mb-4">
                <div
                  className="rounded-circle mx-auto d-flex align-items-center justify-content-center text-primary mb-3"
                  style={{
                    width: '72px',
                    height: '72px',
                    backgroundColor: 'var(--kl-primary-soft)',
                  }}
                >
                  <User size={36} strokeWidth={1.5} />
                </div>

                <h2 className="h5 fw-bold mb-1 text-dark">{user.displayName}</h2>
                <div className="text-muted small mb-3">{user.email}</div>

                <div className="d-flex justify-content-center gap-2 mb-3">
                  <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-2 py-1 small text-uppercase">
                    {user.role === 'admin' ? 'Administrator' : 'Siswa'}
                  </span>
                  <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1 small">
                    {user.status === 'active' ? 'Aktif' : 'Ditangguhkan'}
                  </span>
                </div>

                <div className="border-top pt-3 text-secondary small d-flex align-items-center justify-content-center gap-2">
                  <Calendar size={14} />
                  <span>Bergabung: {joinDate}</span>
                </div>
              </div>

              {/* Achievements Summary */}
              <div className="kl-card p-4 bg-white border">
                <h3 className="h6 fw-bold mb-3 text-dark">Ringkasan Aktivitas</h3>
                <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
                  <div className="d-flex align-items-center gap-2 small text-secondary">
                    <BookOpen size={16} className="text-primary" />
                    <span>Kelas Diikuti</span>
                  </div>
                  <span className="fw-bold text-dark">{enrollments.length}</span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
                  <div className="d-flex align-items-center gap-2 small text-secondary">
                    <Award size={16} className="text-warning" />
                    <span>Sertifikat Terbit</span>
                  </div>
                  <span className="fw-bold text-dark">{certificates.length}</span>
                </div>

                {user.role === 'admin' && (
                  <div className="mt-3">
                    <Link
                      href="/admin"
                      className="btn btn-outline-primary btn-sm w-100 d-inline-flex align-items-center justify-content-center gap-2"
                    >
                      <Shield size={14} />
                      <span>Masuk Portal Admin</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Edit Form */}
            <div className="col-lg-8">
              <ProfileEditor
                initialDisplayName={user.displayName}
                email={user.email}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
