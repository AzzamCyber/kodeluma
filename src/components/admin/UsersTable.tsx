'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@/types/domain';
import { AlertCircle } from 'lucide-react';
import { useFeedback } from '@/components/ui/FeedbackProvider';

interface UsersTableProps {
  initialUsers: User[];
  currentAdminId: string;
}

export function UsersTable({ initialUsers, currentAdminId }: UsersTableProps) {
  const router = useRouter();
  const { notify, confirm } = useFeedback();
  const [users, setUsers] = useState(initialUsers);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleToggleStatus = async (user: User) => {
    const nextStatus = user.status === 'active' ? 'suspended' : 'active';
    if (nextStatus === 'suspended') {
      const approved = await confirm({
        title: 'Tangguhkan akun?',
        message: `Akun ${user.displayName} akan kehilangan akses sampai diaktifkan kembali.`,
        confirmLabel: 'Tangguhkan',
        destructive: true,
      });
      if (!approved) return;
    }
    setLoadingId(user.id);
    setError(null);

    try {
      const res = await fetch(`/api/v1/admin/users/${user.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: nextStatus }),
      });

      const json = await res.json();
      if (!res.ok || json.error) {
        throw new Error(json.error?.message || 'Gagal mengubah status akun.');
      }

      setUsers((prev) =>
        prev.map((u) => (u.id === user.id ? { ...u, status: nextStatus } : u))
      );
      notify({ variant: 'success', title: nextStatus === 'suspended' ? 'Akun ditangguhkan' : 'Akun diaktifkan', message: user.displayName });
      router.refresh();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Terjadi kendala.';
      setError(message);
      notify({ variant: 'error', title: 'Status akun gagal diubah', message });
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="kl-card p-0 bg-white border overflow-hidden">
      {error && (
        <div className="alert alert-danger m-3 small d-flex align-items-center gap-2">
          <AlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}

      <div className="table-responsive">
        <table className="table table-hover align-middle mb-0">
          <thead className="bg-light border-bottom">
            <tr className="small text-secondary">
              <th className="ps-4 py-3">Nama & Alamat Email</th>
              <th>Peran</th>
              <th>Status Akun</th>
              <th>Terdaftar Pada</th>
              <th className="text-end pe-4">Aksi Kontrol</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => {
              const isSelf = u.id === currentAdminId;
              return (
                <tr key={u.id}>
                  <td className="ps-4 py-3">
                    <div className="fw-bold text-dark">{u.displayName}</div>
                    <small className="text-muted">{u.email}</small>
                  </td>
                  <td>
                    <span
                      className={`badge small text-uppercase ${
                        u.role === 'admin'
                          ? 'bg-danger-subtle text-danger border border-danger-subtle'
                          : 'bg-primary-subtle text-primary border border-primary-subtle'
                      }`}
                    >
                      {u.role}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`badge small ${
                        u.status === 'active'
                          ? 'bg-success-subtle text-success border border-success-subtle'
                          : 'bg-danger-subtle text-danger border border-danger-subtle'
                      }`}
                    >
                      {u.status === 'active' ? 'AKTIF' : 'DINONAKTIFKAN'}
                    </span>
                  </td>
                  <td>
                    <small className="text-muted">
                      {new Date(u.createdAt).toLocaleDateString('id-ID')}
                    </small>
                  </td>
                  <td className="text-end pe-4">
                    {isSelf ? (
                      <span className="small text-muted fst-italic">Akun Anda Sendiri</span>
                    ) : (
                      <button
                        onClick={() => handleToggleStatus(u)}
                        disabled={loadingId === u.id}
                        className={`btn btn-sm py-1 px-2 ${
                          u.status === 'active'
                            ? 'btn-outline-danger'
                            : 'btn-outline-success'
                        }`}
                      >
                        {loadingId === u.id
                          ? 'Memproses...'
                          : u.status === 'active'
                          ? 'Nonaktifkan'
                          : 'Aktifkan Kembali'}
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
