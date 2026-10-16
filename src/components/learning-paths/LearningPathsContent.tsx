'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Award, BookOpen, Compass, Globe, Server, Database, Cloud, Terminal, Binary, Layers, Smartphone, BarChart3, ShieldCheck, Cpu, Gamepad2 } from 'lucide-react';
import type { LearningPathData } from './LearningPathsViewer';

const icons = { globe: Globe, server: Server, database: Database, cloud: Cloud, terminal: Terminal, binary: Binary, layers: Layers, smartphone: Smartphone, barchart: BarChart3, shield: ShieldCheck, cpu: Cpu, gamepad: Gamepad2 } as const;

function PathIcon({ name }: { name: string }) {
  const Icon = icons[name as keyof typeof icons] ?? Compass;
  return <Icon size={22} strokeWidth={1.8} aria-hidden="true" />;
}

export function LearningPathsContent({ paths, availableCourseSlugs }: { paths: LearningPathData[]; availableCourseSlugs: string[] }) {
  const available = new Set(availableCourseSlugs);
  const readyPaths = paths.filter((path) => path.courses.some((course) => available.has(course.slug)));
  const [activePathId, setActivePathId] = useState(readyPaths[0]?.id ?? '');
  const [filter, setFilter] = useState<'all' | 'ready' | 'planned'>('all');
  const active = readyPaths.find((path) => path.id === activePathId) ?? readyPaths[0];
  const shownPaths = paths.filter((path) => filter === 'all' || (filter === 'ready') === readyPaths.includes(path));

  function openPath(id: string) {
    setActivePathId(id);
    document.getElementById('roadmap')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
  }

  return (
    <>
      <section className="kl-card kl-path-roadmap mb-5" id="roadmap" aria-labelledby="roadmap-title">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
          <div><p className="kl-eyebrow mb-2">PANDUAN BELAJAR</p><h2 id="roadmap-title" className="h3 mb-1">Pilih langkah belajarmu</h2><p className="text-secondary mb-0">Buka satu jalur untuk melihat urutan kelas dan fokus tiap langkah.</p></div>
          <span className="kl-path-count">{readyPaths.length} jalur memiliki kelas terbit</span>
        </div>
        {active ? <>
          <div className="kl-path-tabs d-flex flex-wrap gap-2 mb-4" aria-label="Pilih jalur belajar">
            {readyPaths.map((path) => <button key={path.id} type="button" className={`btn kl-path-tab ${path.id === active.id ? 'is-active' : ''}`} aria-pressed={path.id === active.id} onClick={() => setActivePathId(path.id)}><PathIcon name={path.iconName} />{path.shortTitle}</button>)}
          </div>
          <div className="kl-path-feature d-flex flex-column flex-lg-row justify-content-between gap-4 mb-4">
            <div><span className="kl-path-category">{active.category}</span><h3 className="h2 mt-2 mb-2">{active.title}</h3><p className="mb-0">{active.description}</p></div>
            <div className="kl-path-feature-action d-flex flex-column align-items-start align-items-lg-end gap-2">
              <span>{active.courses.filter((course) => available.has(course.slug)).length} dari {active.courses.length} kelas terbit</span>
              {active.courses.find((course) => available.has(course.slug)) && <Link href={`/courses/${active.courses.find((course) => available.has(course.slug))?.slug}`} className="kl-btn-primary d-inline-flex align-items-center gap-2 text-decoration-none">Mulai kelas pertama <ArrowRight size={17} aria-hidden="true" /></Link>}
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between gap-2 mb-3"><h4 className="h5 mb-0">Urutan kelas</h4><span className="text-secondary small">Dari dasar ke lanjutan</span></div>
          <div className="row g-3">{active.courses.map((course) => {
            const live = available.has(course.slug);
            return <div className="col-md-6 col-xl-4" key={course.slug}><article className="kl-path-step-card h-100 d-flex flex-column">
              <div className="d-flex align-items-center justify-content-between gap-2 mb-3"><span className="kl-path-step-number">{course.step}</span><span className="kl-path-step-level">{course.level}</span></div>
              <h5 className="kl-path-step-title mb-2">{course.title}</h5><p className="text-secondary mb-3 flex-grow-1">{course.focus}</p>
              <div className="kl-path-project d-flex align-items-start gap-2"><Award size={17} aria-hidden="true" /><span><strong>Proyek praktik</strong><br />{course.projectTitle}</span></div>
              <div className="kl-path-step-footer mt-3 pt-3 d-flex align-items-center justify-content-between gap-2"><span className="kl-path-step-status">{live ? 'Kelas tersedia' : 'Belum terbit'}</span>{live && <Link className="kl-path-step-link" href={`/courses/${course.slug}`}>Lihat kelas <ArrowRight size={16} aria-hidden="true" /></Link>}</div>
            </article></div>;
          })}</div>
        </> : <div className="kl-path-empty">Belum ada kelas terbit untuk jalur belajar saat ini. Jelajahi rencana jalur di bawah atau kembali nanti.</div>}
      </section>
      <section aria-labelledby="paths-title">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4"><div><p className="kl-eyebrow mb-2">EKSPLORASI JALUR</p><h2 id="paths-title" className="h3 mb-1">Temukan arah belajarmu</h2><p className="text-secondary mb-0">Lihat urutan kelas pada setiap jalur dan pilih yang ingin kamu pelajari.</p></div>
          <div className="kl-path-filters d-flex flex-wrap gap-2" role="group" aria-label="Filter jalur belajar">{([['all', 'Semua', paths.length], ['ready', 'Ada kelas', readyPaths.length], ['planned', 'Direncanakan', paths.length - readyPaths.length]] as const).map(([value, label, count]) => <button key={value} type="button" className={`btn kl-path-filter ${filter === value ? 'is-active' : ''}`} aria-pressed={filter === value} onClick={() => setFilter(value)}>{label} <span>{count}</span></button>)}</div>
        </div>
        <div className="row g-4">{shownPaths.map((path) => {
          const count = path.courses.filter((course) => available.has(course.slug)).length;
          return <div className="col-md-6 col-xl-4" key={path.id}><article className="kl-card kl-path-card h-100 d-flex flex-column">
            <div className="d-flex align-items-start justify-content-between gap-2"><span className="kl-path-icon"><PathIcon name={path.iconName} /></span><span className="kl-path-index">{path.id}</span></div>
            <div className="kl-path-card-body flex-grow-1"><p className="kl-path-category mb-2">{path.category}</p><h3 className="kl-path-card-title mb-2">{path.title}</h3><p className="kl-path-description mb-0">{path.description}</p></div>
            {path.courses.length > 0 ? <div className="kl-path-sequence" aria-label={`Urutan awal ${path.shortTitle}`}>{path.courses.slice(0, 3).map((course) => <div className="kl-path-sequence-item" key={course.slug}><span className="kl-path-sequence-number">{course.step}</span><span className="text-truncate">{course.title}</span></div>)}{path.courses.length > 3 && <span className="kl-path-sequence-more">+{path.courses.length - 3} langkah berikutnya</span>}</div> : <div className="kl-path-sequence kl-path-planned-note">Rangkaian kelas sedang disusun.</div>}
            <div className="kl-path-card-footer d-flex align-items-center justify-content-between gap-2"><span className="kl-path-footer-label d-inline-flex align-items-center gap-2"><BookOpen size={16} aria-hidden="true" />{path.courses.length > 0 ? `${path.courses.length} langkah` : 'Jalur direncanakan'}</span>{count > 0 ? <button type="button" className="btn kl-path-open" onClick={() => openPath(path.id)}>Lihat roadmap <ArrowRight size={17} aria-hidden="true" /></button> : <span className="kl-path-coming">Belum tersedia</span>}</div>
            {count > 0 && <span className="kl-path-status is-ready">{count} dari {path.courses.length} kelas terbit</span>}
          </article></div>;
        })}</div>
      </section>
    </>
  );
}
