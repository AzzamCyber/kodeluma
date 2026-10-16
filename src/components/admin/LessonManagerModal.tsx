'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from '@/components/ui/Button';
import { SelectField } from '@/components/ui/SelectField';
import { useFeedback } from '@/components/ui/FeedbackProvider';
import { Course, Lesson, PublishStatus } from '@/types/domain';
import {
  BookOpen,
  Plus,
  Pencil,
  Trash2,
  ArrowLeft,
  AlertCircle,
  CheckCircle2,
  Code,
} from 'lucide-react';

interface LessonManagerModalProps {
  show: boolean;
  onHide: () => void;
  course: Course | null;
  onLessonCountChange?: (courseId: string, newCount: number) => void;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function LessonManagerModal({
  show,
  onHide,
  course,
  onLessonCountChange,
}: LessonManagerModalProps) {
  const { notify, confirm } = useFeedback();
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // View state: 'list' | 'create' | 'edit'
  const [viewMode, setViewMode] = useState<'list' | 'create' | 'edit'>('list');
  const [editingLesson, setEditingLesson] = useState<Lesson | null>(null);

  // Form states
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [order, setOrder] = useState(1);
  const [isRequired, setIsRequired] = useState(true);
  const [status, setStatus] = useState<PublishStatus>('published');
  const [summary, setSummary] = useState('');
  const [bodyMarkdown, setBodyMarkdown] = useState('');
  const [isAutoSlug, setIsAutoSlug] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const onLessonCountChangeRef = useRef(onLessonCountChange);
  useEffect(() => {
    onLessonCountChangeRef.current = onLessonCountChange;
  }, [onLessonCountChange]);

  const courseId = course?.id;
  const courseLessonsCount = course?.lessonsCount;

  const fetchLessons = useCallback(async () => {
    if (!courseId) return;
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/v1/admin/courses/${encodeURIComponent(courseId)}/lessons`);
      const json = await res.json();
      if (!res.ok || json.error) {
        throw new Error(json.error?.message || 'Gagal memuat materi kursus.');
      }
      const data: Lesson[] = json.data || [];
      // Sort by order ascending
      data.sort((a, b) => a.order - b.order);
      setLessons(data);
      if (onLessonCountChangeRef.current && data.length !== courseLessonsCount) {
        onLessonCountChangeRef.current(courseId, data.length);
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Terjadi kendala saat mengambil materi.');
    } finally {
      setIsLoading(false);
    }
  }, [courseId, courseLessonsCount]);

  useEffect(() => {
    if (show && courseId) {
      fetchLessons();
      setViewMode('list');
      setEditingLesson(null);
      setError(null);
      setSuccessMsg(null);
    }
  }, [show, courseId, fetchLessons]);

  const handleOpenCreate = () => {
    const nextOrder = lessons.length > 0 ? Math.max(...lessons.map((l) => l.order)) + 1 : 1;
    setTitle('');
    setSlug('');
    setOrder(nextOrder);
    setIsRequired(true);
    setStatus('published');
    setSummary('');
    setBodyMarkdown(
      `# Judul Materi\n\nPenjelasan materi secara ringkas dan terstruktur.\n\n## Sub Materi\n\nBerikut adalah contoh potongan kode yang dapat dipelajari:\n\n\`\`\`javascript\nconsole.log('Halo Kodeluma!');\n\`\`\`\n\n- Poin penting 1\n- Poin penting 2\n`
    );
    setIsAutoSlug(true);
    setError(null);
    setSuccessMsg(null);
    setEditingLesson(null);
    setViewMode('create');
  };

  const handleOpenEdit = (lesson: Lesson) => {
    setTitle(lesson.title);
    setSlug(lesson.slug);
    setOrder(lesson.order);
    setIsRequired(lesson.isRequired);
    setStatus(lesson.status);
    setSummary(lesson.summary || '');
    setBodyMarkdown(lesson.bodyMarkdown || '');
    setIsAutoSlug(false);
    setError(null);
    setSuccessMsg(null);
    setEditingLesson(lesson);
    setViewMode('edit');
  };

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (isAutoSlug && viewMode === 'create') {
      setSlug(slugify(val));
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!course) return;
    setError(null);
    setSuccessMsg(null);

    if (title.trim().length < 3) {
      setError('Judul materi minimal 3 karakter.');
      return;
    }
    if (!slug.trim() || !/^[a-z0-9-]+$/.test(slug.trim())) {
      setError('Slug materi hanya boleh huruf kecil, angka, dan tanda hubung (-).');
      return;
    }
    if (bodyMarkdown.trim().length < 20) {
      setError('Konten materi Markdown minimal 20 karakter.');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        title: title.trim(),
        slug: slug.trim(),
        order: Number(order) || 1,
        isRequired,
        status,
        summary: summary.trim() || undefined,
        bodyMarkdown: bodyMarkdown.trim(),
      };

      if (viewMode === 'create') {
        const res = await fetch(`/api/v1/admin/courses/${course.id}/lessons`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        const json = await res.json();
        if (!res.ok || json.error) {
          throw new Error(json.error?.message || 'Gagal menambahkan materi baru.');
        }

        setSuccessMsg(`Materi "${title}" berhasil ditambahkan!`);
        notify({ variant: 'success', title: 'Materi ditambahkan', message: title });
      } else if (viewMode === 'edit' && editingLesson) {
        const res = await fetch(
          `/api/v1/admin/courses/${course.id}/lessons/${editingLesson.id}`,
          {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          }
        );

        const json = await res.json();
        if (!res.ok || json.error) {
          throw new Error(json.error?.message || 'Gagal memperbarui materi.');
        }

        setSuccessMsg(`Materi "${title}" berhasil diperbarui!`);
        notify({ variant: 'success', title: 'Materi diperbarui', message: title });
      }

      await fetchLessons();
      setViewMode('list');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Terjadi kendala saat menyimpan materi.';
      setError(message);
      notify({ variant: 'error', title: 'Materi belum tersimpan', message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteLesson = async (lesson: Lesson) => {
    if (!course) return;
    const confirmDelete = await confirm({
      title: 'Hapus materi?',
      message: `Materi "${lesson.title}" akan dihapus. Tindakan ini tidak dapat dibatalkan.`,
      confirmLabel: 'Hapus Materi',
      destructive: true,
    });
    if (!confirmDelete) return;

    setDeletingId(lesson.id);
    setError(null);
    setSuccessMsg(null);

    try {
      const res = await fetch(
        `/api/v1/admin/courses/${course.id}/lessons/${lesson.id}`,
        {
          method: 'DELETE',
        }
      );

      const json = await res.json();
      if (!res.ok || json.error) {
        throw new Error(json.error?.message || 'Gagal menghapus materi.');
      }

      setSuccessMsg(`Materi "${lesson.title}" telah dihapus.`);
      notify({ variant: 'success', title: 'Materi dihapus', message: lesson.title });
      await fetchLessons();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Terjadi kendala saat menghapus materi.';
      setError(message);
      notify({ variant: 'error', title: 'Materi gagal dihapus', message });
    } finally {
      setDeletingId(null);
    }
  };

  const appendMarkdownSnippet = (snippet: string) => {
    setBodyMarkdown((prev) => prev + '\n' + snippet);
  };

  if (!course) {
    return null;
  }

  return (
    <Modal show={show} onHide={onHide} size="xl" centered backdrop="static">
      <Modal.Header closeButton className="border-bottom px-4 py-3">
        <div className="w-100 pe-3">
          <div className="d-flex align-items-center justify-content-between">
            <span className="kl-eyebrow text-uppercase text-primary small">
              Silabus & Materi Kursus
            </span>
            <div className="d-flex gap-2 align-items-center">
              <span className="badge bg-light text-dark border small text-uppercase">
                {course.category}
              </span>
              <span className="badge bg-light text-secondary border small">
                {lessons.length} Materi Tersedia
              </span>
            </div>
          </div>
          <Modal.Title className="h5 fw-bold mb-0 text-truncate" style={{ color: 'var(--kl-ink)' }}>
            {course.title}
          </Modal.Title>
        </div>
      </Modal.Header>

      <Modal.Body className="p-4">
        {error && (
          <div className="alert alert-danger small d-flex align-items-center gap-2 mb-3">
            <AlertCircle size={18} className="flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {successMsg && (
          <div className="alert alert-success small d-flex align-items-center gap-2 mb-3">
            <CheckCircle2 size={18} className="flex-shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* LIST VIEW */}
        {viewMode === 'list' && (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h6 className="fw-bold mb-0 text-dark">Daftar Materi Pembelajaran</h6>
                <small className="text-muted">
                  Materi akan disajikan secara berurutan sesuai nomor bab kepada siswa.
                </small>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-sm d-inline-flex align-items-center gap-1 px-3 py-1-5 shadow-sm"
                onClick={handleOpenCreate}
              >
                <Plus size={16} />
                <span>Tambah Materi Baru</span>
              </button>
            </div>

            {isLoading ? (
              <div className="text-center py-5">
                <div className="spinner-border spinner-border-sm text-primary mb-2" role="status" />
                <div className="small text-muted">Memuat daftar materi...</div>
              </div>
            ) : lessons.length === 0 ? (
              <div className="text-center py-5 border rounded-3 bg-light">
                <BookOpen size={40} className="text-muted mb-2 opacity-50" />
                <h6 className="fw-bold text-dark">Belum ada materi pelajaran</h6>
                <p className="text-muted small mb-3">
                  Kursus ini belum memiliki silabus materi. Klik tombol di bawah untuk membuat materi pertama.
                </p>
                <button
                  type="button"
                  className="btn btn-primary btn-sm d-inline-flex align-items-center gap-1 px-3"
                  onClick={handleOpenCreate}
                >
                  <Plus size={15} />
                  <span>Buat Materi Pertama</span>
                </button>
              </div>
            ) : (
              <div className="table-responsive border rounded-3 overflow-hidden bg-white">
                <table className="table table-hover align-middle mb-0">
                  <thead className="bg-light border-bottom">
                    <tr className="small text-secondary">
                      <th style={{ width: '80px' }} className="ps-3 py-2 text-center">Urutan</th>
                      <th className="py-2">Judul & Slug Materi</th>
                      <th style={{ width: '120px' }} className="py-2">Tipe</th>
                      <th style={{ width: '120px' }} className="py-2">Status</th>
                      <th style={{ width: '160px' }} className="text-end pe-3 py-2">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lessons.map((lesson) => (
                      <tr key={lesson.id}>
                        <td className="ps-3 text-center">
                          <span className="badge bg-light text-primary border font-monospace px-2 py-1">
                            #{lesson.order}
                          </span>
                        </td>
                        <td>
                          <div className="fw-semibold text-dark">{lesson.title}</div>
                          <small className="text-muted font-monospace">{lesson.slug}</small>
                        </td>
                        <td>
                          {lesson.isRequired ? (
                            <span className="badge bg-primary-subtle text-primary border border-primary-subtle small">
                              Wajib
                            </span>
                          ) : (
                            <span className="badge bg-light text-muted border small">
                              Opsional
                            </span>
                          )}
                        </td>
                        <td>
                          <span
                            className={`badge px-2 py-1 small ${
                              lesson.status === 'published'
                                ? 'bg-success-subtle text-success border border-success-subtle'
                                : 'bg-secondary-subtle text-secondary border'
                            }`}
                          >
                            {lesson.status.toUpperCase()}
                          </span>
                        </td>
                        <td className="text-end pe-3">
                          <button
                            type="button"
                            className="btn btn-outline-primary btn-sm py-1 px-2 me-1"
                            onClick={() => handleOpenEdit(lesson)}
                            title="Edit Materi"
                          >
                            <Pencil size={13} className="me-1" />
                            <span>Edit</span>
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-danger btn-sm py-1 px-2"
                            onClick={() => handleDeleteLesson(lesson)}
                            disabled={deletingId === lesson.id}
                            title="Hapus Materi"
                          >
                            <Trash2 size={13} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* CREATE / EDIT FORM VIEW */}
        {(viewMode === 'create' || viewMode === 'edit') && (
          <div>
            <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm d-inline-flex align-items-center gap-1"
                onClick={() => {
                  setViewMode('list');
                  setError(null);
                }}
              >
                <ArrowLeft size={15} />
                <span>Kembali ke Daftar Silabus</span>
              </button>
              <h6 className="fw-bold mb-0 text-dark">
                {viewMode === 'create' ? 'Tambah Materi Baru' : `Edit Materi: ${editingLesson?.title}`}
              </h6>
            </div>

            <form onSubmit={handleFormSubmit}>
              <div className="row g-3 mb-3">
                <div className="col-md-7">
                  <label htmlFor="lesson-title" className="form-label small fw-semibold text-secondary">
                    Judul Materi <span className="text-danger">*</span>
                  </label>
                  <input
                    id="lesson-title"
                    type="text"
                    className="form-control"
                    placeholder="Contoh: Pengenalan Sintaks dan Variabel"
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-5">
                  <label htmlFor="lesson-slug" className="form-label small fw-semibold text-secondary">
                    Slug URL Materi <span className="text-danger">*</span>
                  </label>
                  <input
                    id="lesson-slug"
                    type="text"
                    className="form-control font-monospace"
                    placeholder="pengenalan-sintaks-variabel"
                    value={slug}
                    onChange={(e) => {
                      setIsAutoSlug(false);
                      setSlug(e.target.value.toLowerCase());
                    }}
                    required
                  />
                </div>
              </div>

              <div className="row g-3 mb-3">
                <div className="col-md-3">
                  <label htmlFor="lesson-order" className="form-label small fw-semibold text-secondary">
                    Urutan Bab (#) <span className="text-danger">*</span>
                  </label>
                  <input
                    id="lesson-order"
                    type="number"
                    min={1}
                    max={999}
                    className="form-control"
                    value={order}
                    onChange={(e) => setOrder(Number(e.target.value))}
                    required
                  />
                </div>

                <div className="col-md-4">
                  <label htmlFor="lesson-status" className="form-label small fw-semibold text-secondary">
                    Status Publikasi
                  </label>
                  <SelectField
                    id="lesson-status"
                    label="Status Publikasi"
                    value={status}
                    onChange={(value) => setStatus(value as PublishStatus)}
                    options={[
                      { value: 'published', label: 'Terbit (Dapat diakses)' },
                      { value: 'draft', label: 'Draf (Disembunyikan)' },
                    ]}
                  />
                </div>

                <div className="col-md-5 d-flex align-items-end pb-1">
                  <div className="form-check form-switch mb-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="lesson-is-required"
                      checked={isRequired}
                      onChange={(e) => setIsRequired(e.target.checked)}
                    />
                    <label className="form-check-label small fw-semibold text-dark" htmlFor="lesson-is-required">
                      Materi Wajib Selesai
                    </label>
                    <div className="text-muted small" style={{ fontSize: '11px' }}>
                      Siswa harus menyelesaikan materi ini untuk lulus kursus.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="lesson-summary" className="form-label small fw-semibold text-secondary">
                  Ringkasan / Sinopsis Materi (Opsional)
                </label>
                <input
                  id="lesson-summary"
                  type="text"
                  className="form-control"
                  placeholder="Deskripsi singkat topik bahasan..."
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <label htmlFor="lesson-body-markdown" className="form-label small fw-semibold text-secondary mb-0">
                    Konten Materi (Markdown) <span className="text-danger">* (min. 20 karakter)</span>
                  </label>
                  <div className="d-flex gap-1">
                    <button
                      type="button"
                      className="btn btn-light btn-sm py-0 px-2 small text-secondary border"
                      onClick={() => appendMarkdownSnippet('### Sub Judul Baru\n')}
                      title="Tambah Sub Judul"
                    >
                      + Sub-Judul
                    </button>
                    <button
                      type="button"
                      className="btn btn-light btn-sm py-0 px-2 small text-secondary border"
                      onClick={() =>
                        appendMarkdownSnippet(
                          '```javascript\n// Tulis kode di sini\nfunction contoh() {\n  return true;\n}\n```\n'
                        )
                      }
                      title="Tambah Blok Kode"
                    >
                      <Code size={12} className="me-1" />
                      + Kode
                    </button>
                    <button
                      type="button"
                      className="btn btn-light btn-sm py-0 px-2 small text-secondary border"
                      onClick={() => appendMarkdownSnippet('> **Catatan Penting:** Perhatikan aturan ini!\n')}
                      title="Tambah Catatan"
                    >
                      + Catatan
                    </button>
                  </div>
                </div>

                <textarea
                  id="lesson-body-markdown"
                  rows={14}
                  className="form-control font-monospace small"
                  style={{ fontSize: '13px', lineHeight: '1.6' }}
                  placeholder="# Judul Materi..."
                  value={bodyMarkdown}
                  onChange={(e) => setBodyMarkdown(e.target.value)}
                  required
                />
                <div className="d-flex justify-content-between text-muted small mt-1">
                  <span>Mendukung sintaks Markdown, blok kode, tabel, dan tautan.</span>
                  <span className={bodyMarkdown.length < 20 ? 'text-danger fw-bold' : ''}>
                    {bodyMarkdown.length} karakter
                  </span>
                </div>
              </div>

              <div className="d-flex justify-content-end gap-2 pt-2 border-top">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => {
                    setViewMode('list');
                    setError(null);
                  }}
                  disabled={isSubmitting}
                >
                  Batal
                </button>
                <Button
                  type="submit"
                  size="sm"
                  isLoading={isSubmitting}
                  loadingText={viewMode === 'create' ? 'Menyimpan...' : 'Memperbarui...'}
                >
                  {viewMode === 'create' ? 'Simpan Materi Baru' : 'Simpan Perubahan Materi'}
                </Button>
              </div>
            </form>
          </div>
        )}
      </Modal.Body>

      <Modal.Footer className="border-top px-4 py-2 d-flex justify-content-between">
        <span className="small text-muted">
          Perubahan pada materi langsung tersimpan secara permanen ke basis data pembelajaran KodeLuma.
        </span>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={onHide}
          disabled={isSubmitting}
        >
          Tutup
        </button>
      </Modal.Footer>
    </Modal>
  );
}
