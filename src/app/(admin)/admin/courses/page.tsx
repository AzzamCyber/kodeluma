import React from 'react';
import { requireAdmin } from '@/lib/auth/guard';
import { CourseRepository } from '@/lib/repositories/courseRepository';
import { AdminSidebar } from '@/components/layout/AdminSidebar';
import { CoursesTable } from '@/components/admin/CoursesTable';

export default async function AdminCoursesPage() {
  const user = await requireAdmin();
  const courses = await CourseRepository.listAllCourses();

  return (
    <div className="kl-admin-layout">
      <AdminSidebar user={user} />

      <main id="main-content" className="kl-admin-main p-4 p-xl-5">
        <div className="container-fluid px-0">
          <header className="kl-admin-page-header d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-4">
            <div>
              <div className="kl-eyebrow mb-2">
                MANAJEMEN KURIKULUM
              </div>
              <h1 className="kl-admin-page-title mb-2">Kursus dan silabus</h1>
              <p className="kl-admin-page-intro mb-0">
                Kelola status terbit kursus, periksa jumlah materi bab, dan susun silabus kurikulum.
              </p>
            </div>
          </header>

          <CoursesTable initialCourses={courses} />
        </div>
      </main>
    </div>
  );
}
