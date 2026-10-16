import React from 'react';
import { requireAdmin } from '@/lib/auth/guard';
import { UserRepository } from '@/lib/repositories/userRepository';
import { AdminSidebar } from '@/components/layout/AdminSidebar';
import { UsersTable } from '@/components/admin/UsersTable';

export default async function AdminUsersPage() {
  const admin = await requireAdmin();
  const { items: users } = await UserRepository.list(1, 50);

  return (
    <div className="kl-admin-layout">
      <AdminSidebar user={admin} />

      <main id="main-content" className="kl-admin-main p-4 p-xl-5">
        <div className="container-fluid px-0">
          <header className="kl-admin-page-header d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-4">
            <div>
              <div className="kl-eyebrow mb-2">
                MANAJEMEN PENGGUNA
              </div>
              <h1 className="kl-admin-page-title mb-2">Pengguna</h1>
              <p className="kl-admin-page-intro mb-0">
                Kelola status akun siswa dan pengelola. Sistem otomatis melindungi admin terakhir dari penonaktifan.
              </p>
            </div>
            <span className="kl-admin-pending-count align-self-start">
              {users.length} akun ditampilkan
            </span>
          </header>

          <UsersTable initialUsers={users} currentAdminId={admin.id} />
        </div>
      </main>
    </div>
  );
}
