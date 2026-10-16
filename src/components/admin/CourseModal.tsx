'use client';

import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from '@/components/ui/Button';
import { SelectField } from '@/components/ui/SelectField';
import { Course, CourseCategory, CourseLevel, PublishStatus } from '@/types/domain';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { useFeedback } from '@/components/ui/FeedbackProvider';

interface CourseModalProps {
  show: boolean;
  onHide: () => void;
  course?: Course | null;
  onSaved: (course: Course) => void;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function CourseModal({ show, onHide, course, onSaved }: CourseModalProps) {
  const { notify } = useFeedback();
  const isEdit = Boolean(course);

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState<CourseCategory>('html');
  const [level, setLevel] = useState<CourseLevel>('pemula');
  const [estimatedMinutes, setEstimatedMinutes] = useState(120);
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [coverUrl, setCoverUrl] = useState('/brand/kodeluma-icon.png');
  const [status, setStatus] = useState<PublishStatus>('draft');

  const [isAutoSlug, setIsAutoSlug] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  useEffect(() => {
    if (course) {
      setTitle(course.title);
      setSlug(course.slug);
      setCategory(course.category);
      setLevel(course.level);
      setEstimatedMinutes(course.estimatedMinutes || 120);
      setSummary(course.summary || '');
      setDescription(course.description || '');
      setCoverUrl(course.coverUrl || '/brand/kodeluma-icon.png');
      setStatus(course.status);
      setIsAutoSlug(false);
    } else {
      setTitle('');
      setSlug('');
      setCategory('html');
      setLevel('pemula');
      setEstimatedMinutes(120);
      setSummary('');
      setDescription('');
      setCoverUrl('/brand/kodeluma-icon.png');
      setStatus('draft');
      setIsAutoSlug(true);
    }
    setError(null);
    setSuccessMsg(null);
  }, [course, show]);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!isEdit && isAutoSlug) {
      setSlug(slugify(val));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    // Basic client validation
    if (title.trim().length < 3) {
      setError('Judul kursus minimal 3 karakter.');
      return;
    }
    if (!slug.trim() || !/^[a-z0-9-]+$/.test(slug.trim())) {
      setError('Slug hanya boleh huruf kecil, angka, dan tanda hubung (-).');
      return;
    }
    if (summary.trim().length < 10) {
      setError('Ringkasan kursus minimal 10 karakter.');
      return;
    }
    if (description.trim().length < 20) {
      setError('Deskripsi lengkap kursus minimal 20 karakter.');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        title: title.trim(),
        slug: slug.trim(),
        category,
        level,
        estimatedMinutes: Number(estimatedMinutes) || 120,
        summary: summary.trim(),
        description: description.trim(),
        coverUrl: coverUrl.trim() || '/brand/kodeluma-icon.png',
        status,
      };

      const url = isEdit
        ? `/api/v1/admin/courses/${course!.id}`
        : '/api/v1/admin/courses';

      const method = isEdit ? 'PATCH' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (!res.ok || json.error) {
        throw new Error(json.error?.message || 'Gagal menyimpan data kursus.');
      }

      setSuccessMsg(isEdit ? 'Perubahan kursus berhasil disimpan!' : 'Kursus baru berhasil dibuat!');
      onSaved(json.data);

      setTimeout(() => {
        onHide();
      }, 700);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Terjadi kendala saat memproses permintaan.';
      setError(message);
      notify({ variant: 'error', title: 'Kursus belum tersimpan', message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered backdrop="static">
      <Modal.Header closeButton className="border-bottom px-4 py-3">
        <div>
          <span className="kl-eyebrow text-uppercase text-primary small">
            {isEdit ? 'Pengaturan Kursus' : 'Pembuatan Kursus'}
          </span>
          <Modal.Title className="h5 fw-bold mb-0" style={{ color: 'var(--kl-ink)' }}>
            {isEdit ? `Edit Kursus: ${course?.title}` : 'Tambah Kursus Baru'}
          </Modal.Title>
        </div>
      </Modal.Header>

      <form onSubmit={handleSubmit}>
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

          <div className="row g-3 mb-3">
            <div className="col-md-7">
              <label htmlFor="course-title" className="form-label small fw-semibold text-secondary">
                Judul Kursus <span className="text-danger">*</span>
              </label>
              <input
                id="course-title"
                type="text"
                className="form-control"
                placeholder="Contoh: Dasar Pemrograman JavaScript Modern"
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                required
              />
            </div>

            <div className="col-md-5">
              <label htmlFor="course-slug" className="form-label small fw-semibold text-secondary">
                Slug URL (Unik) <span className="text-danger">*</span>
              </label>
              <input
                id="course-slug"
                type="text"
                className="form-control font-monospace"
                placeholder="dasar-pemrograman-js"
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
            <div className="col-md-4">
              <label htmlFor="course-category" className="form-label small fw-semibold text-secondary">
                Kategori Materi <span className="text-danger">*</span>
              </label>
              <SelectField
                id="course-category"
                label="Kategori Materi"
                value={category}
                onChange={(value) => setCategory(value as CourseCategory)}
                options={[
                  { value: 'html', label: 'HTML' },
                  { value: 'css', label: 'CSS' },
                  { value: 'javascript', label: 'JavaScript' },
                  { value: 'python', label: 'Python' },
                  { value: 'typescript', label: 'TypeScript' },
                  { value: 'java', label: 'Java' },
                  { value: 'cplusplus', label: 'C++' },
                  { value: 'sql', label: 'SQL' },
                  { value: 'nodejs', label: 'Node.js' },
                  { value: 'react', label: 'React' },
                  { value: 'go', label: 'Go (Golang)' },
                  { value: 'php', label: 'PHP' },
                  { value: 'git', label: 'Git' },
                  { value: 'docker', label: 'Docker' },
                  { value: 'postgresql', label: 'PostgreSQL' },
                  { value: 'redis', label: 'Redis' },
                  { value: 'linux', label: 'Linux' },
                ]}
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="course-level" className="form-label small fw-semibold text-secondary">
                Tingkat Kesulitan <span className="text-danger">*</span>
              </label>
              <SelectField
                id="course-level"
                label="Tingkat Kesulitan"
                value={level}
                onChange={(value) => setLevel(value as CourseLevel)}
                options={[
                  { value: 'pemula', label: 'Pemula (Beginner)' },
                  { value: 'menengah', label: 'Menengah (Intermediate)' },
                ]}
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="course-est-minutes" className="form-label small fw-semibold text-secondary">
                Estimasi Waktu (Menit) <span className="text-danger">*</span>
              </label>
              <input
                id="course-est-minutes"
                type="number"
                min={5}
                max={1000}
                className="form-control"
                value={estimatedMinutes}
                onChange={(e) => setEstimatedMinutes(Number(e.target.value))}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="course-summary" className="form-label small fw-semibold text-secondary">
              Ringkasan Singkat (Summary) <span className="text-danger">* (10-300 karakter)</span>
            </label>
            <textarea
              id="course-summary"
              rows={2}
              className="form-control"
              placeholder="Jelaskan dalam 1-2 kalimat apa yang akan dipelajari siswa..."
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              required
            />
            <div className="form-text text-end small">{summary.length}/300 karakter</div>
          </div>

          <div className="mb-3">
            <label htmlFor="course-description" className="form-label small fw-semibold text-secondary">
              Deskripsi Lengkap Silabus <span className="text-danger">* (minimal 20 karakter)</span>
            </label>
            <textarea
              id="course-description"
              rows={4}
              className="form-control"
              placeholder="Uraikan materi, tujuan pembelajaran, prasyarat, dan capaian akhir kursus ini..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <div className="form-text text-end small">{description.length} karakter</div>
          </div>

          <div className="row g-3">
            <div className="col-md-7">
              <label htmlFor="course-cover" className="form-label small fw-semibold text-secondary">
                URL Gambar Cover / Ikon
              </label>
              <input
                id="course-cover"
                type="text"
                className="form-control"
                placeholder="/brand/kodeluma-icon.png"
                value={coverUrl}
                onChange={(e) => setCoverUrl(e.target.value)}
              />
            </div>

            <div className="col-md-5">
              <label htmlFor="course-status" className="form-label small fw-semibold text-secondary">
                Status Publikasi
              </label>
              <SelectField
                id="course-status"
                label="Status Publikasi"
                value={status}
                onChange={(value) => setStatus(value as PublishStatus)}
                options={[
                  { value: 'draft', label: 'Draf (Disembunyikan)' },
                  { value: 'published', label: 'Terbit (Diterbitkan)' },
                  { value: 'archived', label: 'Arsip (Diarsipkan)' },
                ]}
              />
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer className="border-top px-4 py-3 d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={onHide}
            disabled={isSubmitting}
          >
            Batal
          </button>
          <Button
            type="submit"
            size="sm"
            isLoading={isSubmitting}
            loadingText={isEdit ? 'Menyimpan...' : 'Membuat...'}
          >
            {isEdit ? 'Simpan Perubahan' : 'Buat Kursus Sekarang'}
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
