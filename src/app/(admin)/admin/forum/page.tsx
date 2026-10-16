import React from 'react';
import { requireAdmin } from '@/lib/auth/guard';
import { ForumService } from '@/lib/services/forumService';
import { AdminSidebar } from '@/components/layout/AdminSidebar';
import { ModerationTable } from '@/components/admin/ModerationTable';

export default async function AdminForumPage() {
  const admin = await requireAdmin();
  const { items: threads } = await ForumService.listThreads('all', 1, 50);

  return (
    <div className="kl-admin-layout">
      <AdminSidebar user={admin} />

      <main id="main-content" className="kl-admin-main p-4 p-xl-5">
        <div className="container-fluid px-0">
          <header className="kl-admin-page-header d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-4">
            <div>
              <div className="kl-eyebrow mb-2">
                MODERASI KOMUNITAS
              </div>
              <h1 className="kl-admin-page-title mb-2">Moderasi forum</h1>
              <p className="kl-admin-page-intro mb-0">
                Pantau diskusi komunitas, sembunyikan kiriman yang melanggar etika belajar, atau pulihkan kiriman setelah peninjauan.
              </p>
            </div>
            <span className="kl-admin-pending-count align-self-start">
              {threads.length} topik ditampilkan
            </span>
          </header>

          <ModerationTable initialThreads={threads} />
        </div>
      </main>
    </div>
  );
}
