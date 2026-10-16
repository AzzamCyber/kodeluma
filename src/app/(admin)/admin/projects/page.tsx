import React from 'react';
import { requireAdmin } from '@/lib/auth/guard';
import { ProjectService } from '@/lib/services/projectService';
import { AdminSidebar } from '@/components/layout/AdminSidebar';
import { SubmissionsTable } from '@/components/admin/SubmissionsTable';

export default async function AdminProjectsPage() {
  const user = await requireAdmin();
  const pending = await ProjectService.listPending();

  return (
    <div className="kl-admin-layout">
      <AdminSidebar user={user} />

      <main id="main-content" className="kl-admin-main p-4 p-xl-5">
        <div className="container-fluid px-0">
          <header className="kl-admin-page-header d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-4">
            <div>
              <div className="kl-eyebrow mb-2">
                EVALUASI PROYEK
              </div>
              <h1 className="kl-admin-page-title mb-2">Pengumpulan proyek</h1>
              <p className="kl-admin-page-intro mb-0">
                Periksa hasil karya siswa, nilai sesuai kriteria, dan berikan umpan balik.
              </p>
            </div>
            <span className="kl-admin-pending-count align-self-start">
              {pending.length} menunggu tinjauan
            </span>
          </header>

          <SubmissionsTable initialSubmissions={pending} />
        </div>
      </main>
    </div>
  );
}
