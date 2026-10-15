'use client';

import React, { useState, useMemo } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { Footer } from '@/components/layout/Footer';
import { CourseCard } from '@/components/courses/CourseCard';
import { EmptyState } from '@/components/ui/EmptyState';
import { MOCK_COURSES } from '@/lib/mockData';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'az'>('newest');

  const filteredCourses = useMemo(() => {
    return MOCK_COURSES.filter((course) => {
      const matchSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.summary.toLowerCase().includes(searchQuery.toLowerCase());

      const matchCategory =
        selectedCategory === 'all' || course.category === selectedCategory;

      const matchLevel =
        selectedLevel === 'all' || course.level === selectedLevel;

      return matchSearch && matchCategory && matchLevel;
    }).sort((a, b) => {
      if (sortBy === 'az') {
        return a.title.localeCompare(b.title);
      }
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }, [searchQuery, selectedCategory, selectedLevel, sortBy]);

  const handleClearFilter = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedLevel('all');
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <PublicNavbar />

      <main id="main-content" className="flex-grow-1 py-5">
        <div className="container">
          {/* Header Banner */}
          <div className="mb-4">
            <div className="kl-eyebrow">KATALOG KELAS KODELUMA</div>
            <h1 className="h2 fw-bold mb-2" style={{ color: 'var(--kl-ink)' }}>
              Pilih kelas pertamamu.
            </h1>
            <p className="text-secondary small mb-0" style={{ maxWidth: '560px' }}>
              Pelajari teknologi web modern dari dasar. Setiap modul dilengkapi materi teks mendalam,
              kuis evaluasi, dan proyek praktik nyata.
            </p>
          </div>

          {/* Filter and Search Bar */}
          <div className="kl-card p-3 mb-4 bg-white border">
            <div className="row g-3 align-items-center">
              {/* Search input */}
              <div className="col-lg-4 col-md-6">
                <div className="input-group">
                  <span className="input-group-text bg-white border-end-0 text-muted">
                    <Search size={16} />
                  </span>
                  <input
                    type="text"
                    className="form-control border-start-0 ps-0"
                    placeholder="Cari materi atau topik..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Cari kelas"
                  />
                </div>
              </div>

              {/* Category selector */}
              <div className="col-lg-3 col-md-3 col-6">
                <select
                  className="form-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  aria-label="Filter kategori topik"
                >
                  <option value="all">Semua Kategori</option>
                  <option value="html">HTML</option>
                  <option value="css">CSS</option>
                  <option value="javascript">JavaScript</option>
                </select>
              </div>

              {/* Level selector */}
              <div className="col-lg-3 col-md-3 col-6">
                <select
                  className="form-select"
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  aria-label="Filter tingkat kesulitan"
                >
                  <option value="all">Semua Tingkat</option>
                  <option value="pemula">Pemula</option>
                  <option value="menengah">Menengah</option>
                </select>
              </div>

              {/* Sort by */}
              <div className="col-lg-2 col-md-12">
                <select
                  className="form-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'newest' | 'az')}
                  aria-label="Urutkan kelas"
                >
                  <option value="newest">Terbaru</option>
                  <option value="az">A - Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* Course Grid / Empty State */}
          {filteredCourses.length > 0 ? (
            <div className="row g-4">
              {filteredCourses.map((course) => (
                <div key={course.id} className="col-lg-4 col-md-6">
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              icon={BookOpen}
              title="Kelas Tidak Ditemukan"
              description="Belum ada kelas yang cocok. Coba kata kunci lain atau bersihkan filter pencarian."
              actionText="Reset Filter Pencarian"
              onAction={handleClearFilter}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
