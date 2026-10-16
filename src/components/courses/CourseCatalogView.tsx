'use client';

import React, { useState, useMemo } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { Course } from '@/types/domain';
import { CourseCard } from './CourseCard';
import { EmptyState } from '@/components/ui/EmptyState';
import { SelectField } from '@/components/ui/SelectField';

interface CourseCatalogViewProps {
  initialCourses: Course[];
}

export function CourseCatalogView({ initialCourses }: CourseCatalogViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'az'>('newest');

  const filteredCourses = useMemo(() => {
    return initialCourses
      .filter((course) => {
        const matchSearch =
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.summary.toLowerCase().includes(searchQuery.toLowerCase());

        const matchCategory =
          selectedCategory === 'all' || course.category === selectedCategory;

        const matchLevel =
          selectedLevel === 'all' || course.level === selectedLevel;

        return matchSearch && matchCategory && matchLevel;
      })
      .sort((a, b) => {
        if (sortBy === 'az') {
          return a.title.localeCompare(b.title);
        }
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
  }, [initialCourses, searchQuery, selectedCategory, selectedLevel, sortBy]);

  const handleClearFilter = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedLevel('all');
  };

  return (
    <>
      {/* Filter and Search Bar */}
      <div className="kl-card p-3 mb-4 bg-white border">
        <div className="row g-3 align-items-center">
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

          <div className="col-lg-3 col-md-3 col-6 kl-catalog-filter-col">
            <SelectField
              label="Filter kategori topik"
              value={selectedCategory}
              onChange={setSelectedCategory}
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

          <div className="col-lg-3 col-md-3 col-6 kl-catalog-filter-col">
            <SelectField
              label="Filter tingkat kesulitan"
              value={selectedLevel}
              onChange={setSelectedLevel}
              options={[
                { value: 'all', label: 'Semua Tingkat' },
                { value: 'pemula', label: 'Pemula' },
                { value: 'menengah', label: 'Menengah' },
              ]}
            />
          </div>

          <div className="col-lg-2 col-md-12">
            <SelectField
              label="Urutkan kelas"
              value={sortBy}
              onChange={(value) => setSortBy(value as 'newest' | 'az')}
              options={[
                { value: 'newest', label: 'Terbaru' },
                { value: 'az', label: 'A - Z' },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Grid */}
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
    </>
  );
}
