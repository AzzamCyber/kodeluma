'use client';

import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Course } from '@/types/domain';
import { CourseModal } from './CourseModal';
import { SelectField } from '@/components/ui/SelectField';
import { LessonManagerModal } from './LessonManagerModal';
import { useFeedback } from '@/components/ui/FeedbackProvider';
import {
  Archive,
  Globe,
  AlertCircle,
  Plus,
  Pencil,
  BookOpen,
  Search,
  CheckCircle2,
} from 'lucide-react';

interface CoursesTableProps {
  initialCourses: Course[];
}

export function CoursesTable({ initialCourses }: CoursesTableProps) {
  const router = useRouter();
  const { notify, confirm } = useFeedback();
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Filter & Search states
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Modals state
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);

  const [showLessonModal, setShowLessonModal] = useState(false);
  const [activeCourseId, setActiveCourseId] = useState<string | null>(null);

  const activeCourseForLessons = courses.find((c) => c.id === activeCourseId) || null;

  const handleAction = async (courseId: string, action: 'publish' | 'archive') => {
    if (action === 'archive') {
      const course = courses.find((item) => item.id === courseId);
      const approved = await confirm({
        title: 'Arsipkan kursus?',
        message: `Kursus "${course?.title ?? 'ini'}" tidak akan tersedia untuk pendaftaran baru.`,
        confirmLabel: 'Arsipkan',
        destructive: true,
      });
      if (!approved) return;
    }
    setLoadingId(courseId);
    setError(null);
    setSuccessMsg(null);
    try {
      const res = await fetch(`/api/v1/admin/courses/${courseId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action }),
      });

      const json = await res.json();
      if (!res.ok || json.error) {
        throw new Error(json.error?.message || 'Gagal mengubah status kursus.');
      }

      setCourses((prev) =>
        prev.map((c) => (c.id === courseId ? { ...c, ...json.data } : c))
      );
      setSuccessMsg(
        action === 'publish'
          ? 'Kursus berhasil dipublikasikan dan sekarang aktif di katalog!'
          : 'Kursus berhasil diarsipkan.'
      );
      notify({ variant: 'success', title: action === 'publish' ? 'Kursus dipublikasikan' : 'Kursus diarsipkan' });
      router.refresh();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Terjadi kendala.';
      setError(message);
      notify({ variant: 'error', title: 'Status kursus gagal diubah', message });
    } finally {
      setLoadingId(null);
    }
  };

  const handleOpenCreateCourse = () => {
    setEditingCourse(null);
    setShowCourseModal(true);
    setError(null);
    setSuccessMsg(null);
  };

  const handleOpenEditCourse = (course: Course) => {
    setEditingCourse(course);
    setShowCourseModal(true);
    setError(null);
    setSuccessMsg(null);
  };

  const handleOpenLessonManager = (course: Course) => {
    setActiveCourseId(course.id);
    setShowLessonModal(true);
    setError(null);
    setSuccessMsg(null);
  };

  const handleCloseLessonManager = () => {
    setShowLessonModal(false);
  };

  const handleCourseSaved = (savedCourse: Course) => {
    setCourses((prev) => {
      const exists = prev.some((c) => c.id === savedCourse.id);
      if (exists) {
        return prev.map((c) => (c.id === savedCourse.id ? { ...c, ...savedCourse } : c));
      } else {
        return [savedCourse, ...prev];
      }
    });
    setSuccessMsg(`Kursus "${savedCourse.title}" berhasil disimpan.`);
    notify({ variant: 'success', title: 'Kursus berhasil disimpan', message: savedCourse.title });
    router.refresh();
  };

  const handleLessonCountChange = useCallback((courseId: string, newCount: number) => {
    setCourses((prev) => {
      const match = prev.find((c) => c.id === courseId);
      if (!match || match.lessonsCount === newCount) return prev;
      return prev.map((c) => (c.id === courseId ? { ...c, lessonsCount: newCount } : c));
    });
  }, []);

  // Filter courses based on search term and category
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.slug.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === 'all' || course.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-100">
      {/* Search & Actions Control Bar */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <div className="d-flex flex-wrap align-items-center gap-2 flex-grow-1" style={{ maxWidth: '640px' }}>
          <div className="input-group input-group-sm flex-grow-1" style={{ minWidth: '240px' }}>
            <span className="input-group-text bg-white border-end-0 text-muted">
              <Search size={15} />
            </span>
            <input
              type="text"
              className="form-control border-start-0 ps-0"
              placeholder="Cari kursus berdasarkan judul atau slug..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <SelectField
            label="Filter kategori kursus"
            size="sm"
            className="w-auto"
            value={categoryFilter}
            onChange={setCategoryFilter}
            options={[
              { value: 'all', label: 'Semua Kategori' },
              { value: 'html', label: 'HTML' },
              { value: 'css', label: 'CSS' },
              { value: 'javascript', label: 'JavaScript' },
              { value: 'python', label: 'Python' },
              { value: 'typescript', label: 'TypeScript' },
              { value: 'java', label: 'Java' },
              { value: 'cplusplus', label: 'C++' },
              { value: 'sql', label: 'SQL' },
            ]}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary btn-sm d-inline-flex align-items-center gap-2 px-3 py-2 shadow-sm fw-semibold"
          onClick={handleOpenCreateCourse}
        >
          <Plus size={16} />
          <span>Tambah Kursus Baru</span>
        </button>
      </div>

      {error && (
        <div className="alert alert-danger small d-flex align-items-center gap-2 mb-3">
          <AlertCircle size={16} className="flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {successMsg && (
        <div className="alert alert-success small d-flex align-items-center gap-2 mb-3">
          <CheckCircle2 size={16} className="flex-shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Main Courses Table */}
      <div className="kl-card p-0 bg-white border overflow-hidden shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="bg-light border-bottom">
              <tr className="small text-secondary">
                <th className="ps-4 py-3" style={{ minWidth: '260px' }}>Judul Kursus & Slug</th>
                <th style={{ minWidth: '150px' }}>Kategori & Level</th>
                <th style={{ minWidth: '130px' }}>Materi</th>
                <th style={{ minWidth: '130px' }}>Status</th>
                <th className="text-end pe-4" style={{ minWidth: '220px' }}>Aksi Kelola</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-5 text-muted small">
                    Tidak ada kursus yang sesuai dengan kriteria pencarian Anda.
                  </td>
                </tr>
              ) : (
                filteredCourses.map((course) => (
                  <tr key={course.id}>
                    <td className="ps-4 py-3">
                      <div className="fw-bold text-dark">{course.title}</div>
                      <small className="text-muted font-monospace" style={{ fontSize: '11px' }}>
                        {course.slug}
                      </small>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <span className="badge bg-light text-dark border text-uppercase" style={{ fontSize: '10px' }}>
                          {course.category}
                        </span>
                        <span className="badge bg-light text-secondary border" style={{ fontSize: '10px' }}>
                          {course.level}
                        </span>
                      </div>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-light btn-sm border d-inline-flex align-items-center gap-1.5 py-1 px-2.5"
                        onClick={() => handleOpenLessonManager(course)}
                        title="Klik untuk mengelola materi kursus ini"
                      >
                        <BookOpen size={13} className="text-primary" />
                        <span className="fw-semibold small">{course.lessonsCount ?? 0}</span>
                        <span className="text-muted small">Materi</span>
                      </button>
                    </td>
                    <td>
                      <span
                        className={`badge px-2 py-1 small ${
                          course.status === 'published'
                            ? 'bg-success-subtle text-success border border-success-subtle'
                            : course.status === 'archived'
                            ? 'bg-secondary-subtle text-secondary border'
                            : 'bg-warning-subtle text-warning border border-warning-subtle'
                        }`}
                        style={{ fontSize: '11px' }}
                      >
                        {course.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="text-end pe-4 text-nowrap">
                      <div className="d-inline-flex align-items-center gap-1.5">
                        {/* Manage Lessons Button */}
                        <button
                          type="button"
                          onClick={() => handleOpenLessonManager(course)}
                          className="btn btn-outline-primary btn-sm d-inline-flex align-items-center gap-1 py-1 px-2-5"
                          title="Kelola Materi Pelajaran"
                        >
                          <BookOpen size={13} />
                          <span>Materi</span>
                        </button>

                        {/* Edit Course Button */}
                        <button
                          type="button"
                          onClick={() => handleOpenEditCourse(course)}
                          className="btn btn-outline-secondary btn-sm d-inline-flex align-items-center gap-1 py-1 px-2"
                          title="Edit Detail Kursus"
                        >
                          <Pencil size={13} />
                          <span>Edit</span>
                        </button>

                        {/* Publish / Archive Button */}
                        {course.status !== 'published' ? (
                          <button
                            type="button"
                            onClick={() => handleAction(course.id, 'publish')}
                            disabled={loadingId === course.id}
                            className="btn btn-outline-success btn-sm d-inline-flex align-items-center gap-1 py-1 px-2"
                            title="Terbitkan ke katalog siswa"
                          >
                            <Globe size={13} />
                            <span>{loadingId === course.id ? '...' : 'Terbitkan'}</span>
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleAction(course.id, 'archive')}
                            disabled={loadingId === course.id}
                            className="btn btn-outline-secondary btn-sm d-inline-flex align-items-center gap-1 py-1 px-2"
                            title="Arsipkan kursus"
                          >
                            <Archive size={13} />
                            <span>{loadingId === course.id ? '...' : 'Arsipkan'}</span>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="p-3 px-4 border-top bg-light d-flex align-items-center justify-content-between small text-muted">
          <span>Menampilkan {filteredCourses.length} dari {courses.length} kursus</span>
          <span>Sistem Kurikulum Kodeluma</span>
        </div>
      </div>

      {/* Course Modal (Create & Edit) */}
      <CourseModal
        show={showCourseModal}
        onHide={() => setShowCourseModal(false)}
        course={editingCourse}
        onSaved={handleCourseSaved}
      />

      {/* Lesson Manager Modal (Add & Edit Lessons) */}
      <LessonManagerModal
        show={showLessonModal}
        onHide={handleCloseLessonManager}
        course={activeCourseForLessons}
        onLessonCountChange={handleLessonCountChange}
      />
    </div>
  );
}
