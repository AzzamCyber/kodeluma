'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Globe,
  Server,
  Database,
  Cloud,
  Terminal,
  Binary,
  Layers,
  Smartphone,
  BarChart3,
  ShieldCheck,
  Cpu,
  Gamepad2,
  CheckCircle2,
  Clock,
  ArrowRight,
  BookOpen,
  Award,
  Sparkles,
} from 'lucide-react';

export interface PathCourseStep {
  step: string;
  slug: string;
  title: string;
  level: 'pemula' | 'menengah';
  lessonsCount: number;
  projectTitle: string;
  focus: string;
}

export interface LearningPathData {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  duration: string;
  status: 'published' | 'coming_soon';
  iconName: string;
  tags: string[];
  courses: PathCourseStep[];
}

export const PUBLISHED_LEARNING_PATHS: LearningPathData[] = [
  {
    id: 'LP-01',
    title: 'Frontend Web Developer Modern',
    shortTitle: 'Frontend Web',
    category: 'Frontend & Web Development',
    description:
      'Kuasai kerangka HTML semantik, CSS modern & animasi, JavaScript interaktif, React komponen, hingga TypeScript type-safe untuk membangun aplikasi web kelas dunia.',
    duration: '62 Pelajaran • 7 Modul',
    status: 'published',
    iconName: 'globe',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
    courses: [
      {
        step: '01',
        slug: 'html-dasar',
        title: 'HTML Dasar',
        level: 'pemula',
        lessonsCount: 8,
        projectTitle: 'Halaman Profil Semantik',
        focus: 'Elemen semantik, form interaktif, aksesibilitas dasar',
      },
      {
        step: '02',
        slug: 'css-fundamental',
        title: 'CSS Fundamental',
        level: 'pemula',
        lessonsCount: 8,
        projectTitle: 'Kartu Produk Responsif',
        focus: 'Box model, Flexbox, media query & mobile-first',
      },
      {
        step: '03',
        slug: 'javascript-pemula',
        title: 'JavaScript Pemula',
        level: 'pemula',
        lessonsCount: 9,
        projectTitle: 'Aplikasi Interaktif To-Do',
        focus: 'Variabel, kondisi, loop, fungsi & manipulasi DOM',
      },
      {
        step: '04',
        slug: 'css-menengah',
        title: 'CSS Lanjutan & Desain Sistem',
        level: 'menengah',
        lessonsCount: 8,
        projectTitle: 'Interactive Showcase Landing Page',
        focus: 'CSS Variables, Keyframes, Grid & micro-animations',
      },
      {
        step: '05',
        slug: 'javascript-menengah',
        title: 'JavaScript Lanjutan & Async',
        level: 'menengah',
        lessonsCount: 10,
        projectTitle: 'Dashboard Real-Time API & Async Runner',
        focus: 'Promise, Async/Await, Fetch API, Closures & Event Loop',
      },
      {
        step: '06',
        slug: 'react-dasar',
        title: 'React & Komponen Web Modern',
        level: 'pemula',
        lessonsCount: 6,
        projectTitle: 'Task Tracker & Filter Produktivitas',
        focus: 'JSX, Props, useState, useEffect & unidirectional flow',
      },
      {
        step: '07',
        slug: 'typescript-pemula',
        title: 'TypeScript Pemula',
        level: 'pemula',
        lessonsCount: 13,
        projectTitle: 'Sistem Manajemen Inventaris Type-Safe',
        focus: 'Static types, Interfaces, Union Types & compiler setup',
      },
    ],
  },
  {
    id: 'LP-02',
    title: 'Backend & RESTful API Developer',
    shortTitle: 'Backend & API',
    category: 'Backend & Server Systems',
    description:
      'Pelajari rancang bangun arsitektur server handal, RESTful API terstandarisasi, koneksi basis data relasional, dan implementasi caching in-memory berkecepatan tinggi.',
    duration: '30 Pelajaran • 5 Modul',
    status: 'published',
    iconName: 'server',
    tags: ['Node.js', 'Express', 'PHP', 'Go', 'PostgreSQL', 'Redis'],
    courses: [
      {
        step: '01',
        slug: 'nodejs-dasar',
        title: 'Node.js & Backend RESTful API',
        level: 'pemula',
        lessonsCount: 6,
        projectTitle: 'REST API Manajemen Perpustakaan',
        focus: 'Event loop, HTTP modules, routing, middleware & JSON API',
      },
      {
        step: '02',
        slug: 'php-dasar',
        title: 'PHP Dasar & Web Dinamis',
        level: 'pemula',
        lessonsCount: 6,
        projectTitle: 'Aplikasi Buku Tamu & Kontak Dinamis',
        focus: 'Sintaks PHP modern, superglobals, sanitasi input & PDO MySQL',
      },
      {
        step: '03',
        slug: 'go-dasar',
        title: 'Go (Golang) Dasar & Concurrency',
        level: 'pemula',
        lessonsCount: 6,
        projectTitle: 'CLI Web Status Checker dengan Goroutine',
        focus: 'Strong typing, structs, pointers, Goroutines & Channels',
      },
      {
        step: '04',
        slug: 'postgresql-dasar',
        title: 'PostgreSQL & Database Relasional Modern',
        level: 'pemula',
        lessonsCount: 6,
        projectTitle: 'Skema Multi-Tenant SaaS PostgreSQL',
        focus: 'DDL/DML, Foreign Keys, Indexing, EXPLAIN & ACID transactions',
      },
      {
        step: '05',
        slug: 'redis-dasar',
        title: 'Redis & In-Memory Caching',
        level: 'pemula',
        lessonsCount: 6,
        projectTitle: 'Rate Limiter & Leaderboard Real-Time',
        focus: 'Key-Value structures, TTL, cache-aside pattern & Pub/Sub',
      },
    ],
  },
  {
    id: 'LP-03',
    title: 'Database Architecture & Data Modeling',
    shortTitle: 'Database & SQL',
    category: 'Data & Database Engineering',
    description:
      'Dari kueri dasar hingga optimasi query tingkat lanjut: perancangan skema relasional, normalisasi tabel, analitik Window Functions, indexing PostgreSQL, dan Redis caching.',
    duration: '33 Pelajaran • 4 Modul',
    status: 'published',
    iconName: 'database',
    tags: ['SQL', 'PostgreSQL', 'Redis', 'Query Optimization', 'ACID'],
    courses: [
      {
        step: '01',
        slug: 'sql-dasar',
        title: 'SQL Dasar & Basis Data',
        level: 'pemula',
        lessonsCount: 13,
        projectTitle: 'Skema & Kueri Analitik E-Commerce',
        focus: 'SELECT, WHERE, GROUP BY, JOIN dasar & normalisasi 1NF-3NF',
      },
      {
        step: '02',
        slug: 'sql-menengah',
        title: 'SQL Lanjutan, Relasi & Window Functions',
        level: 'menengah',
        lessonsCount: 8,
        projectTitle: 'Analisis Metrik Bisnis dengan CTE',
        focus: 'Window Functions (RANK, ROW_NUMBER), CTE, Subquery & Triggers',
      },
      {
        step: '03',
        slug: 'postgresql-dasar',
        title: 'PostgreSQL & Database Relasional Modern',
        level: 'pemula',
        lessonsCount: 6,
        projectTitle: 'Skema Multi-Tenant SaaS PostgreSQL',
        focus: 'Constraint tingkat lanjut, B-Tree indexing & JSONB handling',
      },
      {
        step: '04',
        slug: 'redis-dasar',
        title: 'Redis & In-Memory Caching',
        level: 'pemula',
        lessonsCount: 6,
        projectTitle: 'Rate Limiter & Leaderboard Real-Time',
        focus: 'Struktur Sorted Sets, Hash memory storage & cache expiration',
      },
    ],
  },
  {
    id: 'LP-04',
    title: 'DevOps, Linux Server & Containerization',
    shortTitle: 'DevOps & Cloud',
    category: 'Infrastructure & Cloud Operations',
    description:
      'Fondasi infrastruktur modern: kuasai navigasi Linux server CLI, kolaborasi Git Flow profesional, serta kontainerisasi aplikasi portabel menggunakan Docker.',
    duration: '18 Pelajaran • 3 Modul',
    status: 'published',
    iconName: 'cloud',
    tags: ['Linux', 'CLI', 'Git', 'GitHub', 'Docker', 'Compose'],
    courses: [
      {
        step: '01',
        slug: 'linux-dasar',
        title: 'Linux Server & Perintah CLI Terminal',
        level: 'pemula',
        lessonsCount: 6,
        projectTitle: 'Skrip Otomasi Backup & Health Monitor',
        focus: 'FHS Linux, permission chmod/chown, systemd service & cron',
      },
      {
        step: '02',
        slug: 'git-dasar',
        title: 'Git & Kolaborasi GitHub Profesional',
        level: 'pemula',
        lessonsCount: 6,
        projectTitle: 'Simulasi Alur Kerja Tim Git Flow',
        focus: 'Branching strategy, merge conflict, PR review & rebasing',
      },
      {
        step: '03',
        slug: 'docker-dasar',
        title: 'Docker & Kontainerisasi Dasar',
        level: 'pemula',
        lessonsCount: 6,
        projectTitle: 'Kontainerisasi Fullstack Docker Compose',
        focus: 'Dockerfile, Image layer, container runtime, volume & networking',
      },
    ],
  },
  {
    id: 'LP-05',
    title: 'Python Software & Automation Specialist',
    shortTitle: 'Python Developer',
    category: 'General Programming & Automation',
    description:
      'Mulai dari sintaksis dasar, pengolahan file dan JSON, hingga arsitektur Object-Oriented Programming (OOP) tingkat lanjut, magic methods, dan context manager.',
    duration: '33 Pelajaran • 2 Modul',
    status: 'published',
    iconName: 'terminal',
    tags: ['Python', 'Automation', 'OOP', 'Data Parsing', 'CLI'],
    courses: [
      {
        step: '01',
        slug: 'python-dasar',
        title: 'Python Dasar & Algoritma',
        level: 'pemula',
        lessonsCount: 25,
        projectTitle: 'Pengelola Catatan CLI dengan Python',
        focus: 'Tipe data, struktur kontrol, manipulasi string, list & dictionary',
      },
      {
        step: '02',
        slug: 'python-menengah',
        title: 'Python OOP & Pemrograman Lanjutan',
        level: 'menengah',
        lessonsCount: 8,
        projectTitle: 'Sistem Inventaris Enterprise OOP',
        focus: 'Inheritance, Polymorphism, Magic Methods, Generator & Decorators',
      },
    ],
  },
  {
    id: 'LP-06',
    title: 'Computer Science & Systems Programming',
    shortTitle: 'CS & Systems',
    category: 'Core Computer Science',
    description:
      'Fondasi ilmu komputer sejati: manipulasi memori dan algoritma C++, Object-Oriented Programming Java skala enterprise, dan konkurensi modern Go.',
    duration: '32 Pelajaran • 3 Modul',
    status: 'published',
    iconName: 'binary',
    tags: ['C++', 'Java', 'Go', 'Data Structures', 'OOP'],
    courses: [
      {
        step: '01',
        slug: 'cpp-dasar',
        title: 'C++ Dasar & Algoritma',
        level: 'pemula',
        lessonsCount: 13,
        projectTitle: 'Kalkulator Vektor & Pengolah Data C++',
        focus: 'Pointers, manual memory reference, arrays & algoritma terstruktur',
      },
      {
        step: '02',
        slug: 'java-dasar',
        title: 'Java Dasar & OOP Enterprise',
        level: 'pemula',
        lessonsCount: 13,
        projectTitle: 'Sistem Perbankan OOP Java',
        focus: 'Class & Object, Encapsulation, Interface, Exception Handling',
      },
      {
        step: '03',
        slug: 'go-dasar',
        title: 'Go (Golang) Dasar & Concurrency',
        level: 'pemula',
        lessonsCount: 6,
        projectTitle: 'CLI Web Status Checker dengan Goroutine',
        focus: 'Kompilasi native, CSP concurrency & lightweight threads',
      },
    ],
  },
  {
    id: 'LP-07',
    title: 'Fullstack TypeScript Engineer',
    shortTitle: 'Fullstack TS',
    category: 'Fullstack Web Engineering',
    description:
      'Kuasai arsitektur fullstack end-to-end dengan type-safety menyeluruh: dari antarmuka React modern, TypeScript generics lanjutan, hingga backend REST API Node.js.',
    duration: '35 Pelajaran • 4 Modul',
    status: 'published',
    iconName: 'layers',
    tags: ['TypeScript', 'React', 'Node.js', 'Generics', 'Fullstack'],
    courses: [
      {
        step: '01',
        slug: 'typescript-pemula',
        title: 'TypeScript Pemula',
        level: 'pemula',
        lessonsCount: 13,
        projectTitle: 'Sistem Inventaris Type-Safe',
        focus: 'Type annotations, interface vs type, union & compiler config',
      },
      {
        step: '02',
        slug: 'react-dasar',
        title: 'React & Komponen Web Modern',
        level: 'pemula',
        lessonsCount: 6,
        projectTitle: 'Task Tracker & Filter Produktivitas',
        focus: 'Reusable UI components, state management, synthetic events',
      },
      {
        step: '03',
        slug: 'typescript-menengah',
        title: 'TypeScript Lanjutan & Generics',
        level: 'menengah',
        lessonsCount: 10,
        projectTitle: 'Enterprise State Manager & Form Validator',
        focus: 'Generics, Utility Types, Conditional Types & Type Guards',
      },
      {
        step: '04',
        slug: 'nodejs-dasar',
        title: 'Node.js & Backend RESTful API',
        level: 'pemula',
        lessonsCount: 6,
        projectTitle: 'REST API Manajemen Perpustakaan',
        focus: 'Backend routing, JSON validation, database layer & controllers',
      },
    ],
  },
];

export const UPCOMING_LEARNING_PATHS: LearningPathData[] = [
  {
    id: 'LP-08',
    title: 'Mobile App Developer Cross-Platform',
    shortTitle: 'Mobile Apps',
    category: 'Mobile Applications',
    description:
      'Membangun aplikasi mobile Android dan iOS berperforma tinggi dari satu basis kode menggunakan Flutter, Dart, dan arsitektur state management modern.',
    duration: 'Dalam Penyusunan',
    status: 'coming_soon',
    iconName: 'smartphone',
    tags: ['Flutter', 'Dart', 'Mobile UI', 'Cross-Platform'],
    courses: [],
  },
  {
    id: 'LP-09',
    title: 'Data Science & AI Engineering',
    shortTitle: 'Data & AI',
    category: 'Data Science & Intelligence',
    description:
      'Eksplorasi data science praktis: pembersihan data angka dengan Pandas, visualisasi statistik, dan pemanfaatan API Large Language Model (LLM).',
    duration: 'Dalam Penyusunan',
    status: 'coming_soon',
    iconName: 'barchart',
    tags: ['Python Data', 'NumPy', 'Pandas', 'LLM APIs'],
    courses: [],
  },
  {
    id: 'LP-10',
    title: 'Cyber Security & Secure Coding',
    shortTitle: 'Security',
    category: 'Information Security',
    description:
      'Prinsip pengkodean defensif: mitigasi kerentanan OWASP Top 10, sanitasi input, enkripsi data, dan arsitektur otentikasi aman tanpa celah.',
    duration: 'Dalam Penyusunan',
    status: 'coming_soon',
    iconName: 'shield',
    tags: ['OWASP', 'Sanitasi Input', 'Hashing', 'Auth Defense'],
    courses: [],
  },
  {
    id: 'LP-11',
    title: 'Cloud Architecture & Kubernetes',
    shortTitle: 'Cloud & K8s',
    category: 'Cloud Infrastructure',
    description:
      'Orkestrasi kontainer skala produksi dengan Kubernetes, arsitektur microservices terdistribusi, dan automated CI/CD pipeline multi-cloud.',
    duration: 'Dalam Penyusunan',
    status: 'coming_soon',
    iconName: 'cpu',
    tags: ['Kubernetes', 'Microservices', 'CI/CD', 'Helm'],
    courses: [],
  },
  {
    id: 'LP-12',
    title: 'Game Development & Interactive Media',
    shortTitle: 'Game Dev',
    category: 'Game Programming',
    description:
      'Konsep dasar loop game, kalkulasi matematika koordinat dan vektor 2D/3D, serta scripting objek mekanika interaktif menggunakan engine modern.',
    duration: 'Dalam Penyusunan',
    status: 'coming_soon',
    iconName: 'gamepad',
    tags: ['Godot', '2D Physics', 'Game Math', 'Shaders'],
    courses: [],
  },
];

const ALL_PATHS: LearningPathData[] = [...PUBLISHED_LEARNING_PATHS, ...UPCOMING_LEARNING_PATHS];

function renderPathIcon(name: string, size = 22) {
  switch (name) {
    case 'globe':
      return <Globe size={size} className="text-primary" />;
    case 'server':
      return <Server size={size} className="text-info" />;
    case 'database':
      return <Database size={size} className="text-danger" />;
    case 'cloud':
      return <Cloud size={size} className="text-primary" />;
    case 'terminal':
      return <Terminal size={size} className="text-success" />;
    case 'binary':
      return <Binary size={size} className="text-warning" />;
    case 'layers':
      return <Layers size={size} className="text-primary" />;
    case 'smartphone':
      return <Smartphone size={size} className="text-warning" />;
    case 'barchart':
      return <BarChart3 size={size} className="text-primary" />;
    case 'shield':
      return <ShieldCheck size={size} className="text-success" />;
    case 'cpu':
      return <Cpu size={size} className="text-info" />;
    case 'gamepad':
      return <Gamepad2 size={size} className="text-primary" />;
    default:
      return <BookOpen size={size} className="text-primary" />;
  }
}

export function LearningPathsViewer() {
  const [activePathId, setActivePathId] = useState<string>('LP-01');
  const [filterTab, setFilterTab] = useState<'all' | 'published' | 'upcoming'>('all');

  const selectedPath =
    PUBLISHED_LEARNING_PATHS.find((p) => p.id === activePathId) || PUBLISHED_LEARNING_PATHS[0];

  const filteredPaths = ALL_PATHS.filter((p) => {
    if (filterTab === 'published') return p.status === 'published';
    if (filterTab === 'upcoming') return p.status === 'coming_soon';
    return true;
  });

  return (
    <div>
      {/* 1. Interactive Path Roadmap Viewer (Featured Box) */}
      <div className="kl-card p-4 p-lg-5 bg-white border mb-5 shadow-sm">
        {/* Track Selection Tabs */}
        <div className="mb-4">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
            <span className="kl-eyebrow mb-0">PILIH JALUR UNTUK MELIHAT ROADMAP LENGKAP</span>
            <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-2.5 py-1 small fw-semibold">
              7 Jalur Siap Dipelajari
            </span>
          </div>

          <div className="d-flex flex-wrap gap-2">
            {PUBLISHED_LEARNING_PATHS.map((path) => {
              const isActive = path.id === activePathId;
              return (
                <button
                  key={path.id}
                  type="button"
                  onClick={() => setActivePathId(path.id)}
                  className={`btn btn-sm d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill fw-semibold transition-all ${
                    isActive
                      ? 'btn-primary shadow-sm text-white'
                      : 'btn-outline-secondary bg-light text-dark border'
                  }`}
                  style={{ fontSize: '0.875rem' }}
                >
                  {renderPathIcon(path.iconName, 16)}
                  <span>{path.shortTitle}</span>
                  <span
                    className={`badge rounded-pill ${
                      isActive ? 'bg-white text-primary' : 'bg-secondary-subtle text-secondary'
                    }`}
                    style={{ fontSize: '0.72rem' }}
                  >
                    {path.courses.length} Kelas
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Track Header Details */}
        <div className="p-4 rounded-3 border bg-light mb-4">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3">
            <div>
              <div className="d-flex align-items-center gap-2 mb-1">
                <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-0.5 small fw-semibold">
                  Jalur Terverifikasi & Tersedia Penuh
                </span>
                <span className="small text-muted fw-semibold">{selectedPath.category}</span>
              </div>
              <h2 className="h3 fw-bold mb-2 text-dark" style={{ color: 'var(--kl-ink)' }}>
                {selectedPath.title}
              </h2>
              <p className="text-secondary small mb-0" style={{ maxWidth: '780px', lineHeight: 1.65 }}>
                {selectedPath.description}
              </p>
            </div>

            <div className="d-flex flex-column align-items-lg-end gap-2 flex-shrink-0">
              <span className="d-inline-flex align-items-center gap-1.5 text-secondary small fw-semibold">
                <Clock size={15} className="text-primary" />
                <span>{selectedPath.duration}</span>
              </span>
              <Link
                href={`/courses/${selectedPath.courses[0]?.slug}`}
                className="kl-btn-primary text-decoration-none small py-2 px-3.5 d-inline-flex align-items-center gap-2"
              >
                <span>Mulai Langkah 1 ({selectedPath.courses[0]?.title})</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* Step-by-Step Curriculum Timeline */}
        <div>
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h3 className="h6 fw-bold text-dark text-uppercase letter-spacing-1 mb-0">
              Urutan Modul Pembelajaran ({selectedPath.courses.length} Langkah Terarah)
            </h3>
            <span className="small text-muted">Lulus bertahap dari dasar ke lanjutan</span>
          </div>

          <div className="row g-3">
            {selectedPath.courses.map((course, idx) => (
              <div key={course.slug} className="col-md-6 col-xl-4">
                <div className="card h-100 border shadow-none bg-white p-3.5 rounded-3 d-flex flex-column">
                  {/* Step & Level Header */}
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="badge bg-primary-soft text-primary font-monospace fw-bold px-2 py-1 small">
                      LANGKAH {course.step}
                    </span>
                    <span
                      className={`badge px-2 py-0.5 small text-capitalize ${
                        course.level === 'pemula'
                          ? 'bg-info-subtle text-info-emphasis'
                          : 'bg-warning-subtle text-warning-emphasis'
                      }`}
                    >
                      {course.level}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h4 className="h6 fw-bold mb-1 text-dark">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="text-dark text-decoration-none hover-primary"
                    >
                      {course.title}
                    </Link>
                  </h4>

                  {/* Focus Description */}
                  <p className="text-secondary small mb-3 flex-grow-1" style={{ fontSize: '0.825rem' }}>
                    {course.focus}
                  </p>

                  {/* Capstone Project Tag */}
                  <div className="bg-light p-2 rounded-2 mb-3 border border-light-subtle">
                    <div className="d-flex align-items-center gap-1.5 small text-dark fw-semibold mb-0.5">
                      <Award size={13} className="text-success" />
                      <span style={{ fontSize: '0.78rem' }}>Proyek Praktik:</span>
                    </div>
                    <div className="text-muted small text-truncate" style={{ fontSize: '0.76rem' }}>
                      {course.projectTitle}
                    </div>
                  </div>

                  {/* Card Footer Button */}
                  <div className="d-flex align-items-center justify-content-between pt-2 border-top mt-auto">
                    <span className="text-secondary small d-flex align-items-center gap-1">
                      <BookOpen size={13} />
                      <span>{course.lessonsCount} Pelajaran</span>
                    </span>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-1 py-1 px-2.5 small fw-semibold"
                    >
                      <span>Silabus</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Catalog of All 12 Learning Paths */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <div>
          <h2 className="h4 fw-bold mb-1 text-dark">Katalog 12 Jalur Spesialisasi</h2>
          <p className="text-secondary small mb-0">
            Daftar lengkap alur kurikulum berjenjang dari dasar pemrograman hingga rekayasa sistem.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="btn-group btn-group-sm bg-white border p-1 rounded-pill shadow-sm" role="group">
          <button
            type="button"
            onClick={() => setFilterTab('all')}
            className={`btn rounded-pill px-3 py-1 ${
              filterTab === 'all' ? 'btn-primary text-white fw-semibold' : 'btn-light text-secondary'
            }`}
          >
            Semua ({ALL_PATHS.length})
          </button>
          <button
            type="button"
            onClick={() => setFilterTab('published')}
            className={`btn rounded-pill px-3 py-1 ${
              filterTab === 'published' ? 'btn-primary text-white fw-semibold' : 'btn-light text-secondary'
            }`}
          >
            Tersedia Sekarang ({PUBLISHED_LEARNING_PATHS.length})
          </button>
          <button
            type="button"
            onClick={() => setFilterTab('upcoming')}
            className={`btn rounded-pill px-3 py-1 ${
              filterTab === 'upcoming' ? 'btn-primary text-white fw-semibold' : 'btn-light text-secondary'
            }`}
          >
            Segera Hadir ({UPCOMING_LEARNING_PATHS.length})
          </button>
        </div>
      </div>

      {/* Grid of Learning Path Cards */}
      <div className="row g-4 mb-5">
        {filteredPaths.map((path) => (
          <div key={path.id} className="col-md-6 col-lg-4">
            <div className="kl-card p-4 bg-white border h-100 d-flex flex-column shadow-sm">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div
                  className="rounded-3 p-2.5 d-flex align-items-center justify-content-center"
                  style={{ backgroundColor: 'var(--kl-primary-soft)' }}
                >
                  {renderPathIcon(path.iconName, 22)}
                </div>
                {path.status === 'published' ? (
                  <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1 small d-flex align-items-center gap-1">
                    <CheckCircle2 size={12} />
                    <span>{path.courses.length} Kelas Siap</span>
                  </span>
                ) : (
                  <span className="badge bg-secondary-subtle text-secondary border px-2 py-1 small">
                    Segera Hadir
                  </span>
                )}
              </div>

              <span className="small text-muted fw-semibold mb-1">{path.category}</span>
              <h3 className="h6 fw-bold mb-2 text-dark">{path.title}</h3>
              <p className="text-secondary small mb-3 flex-grow-1" style={{ lineHeight: 1.6 }}>
                {path.description}
              </p>

              {/* Course Sequence Pill List if Published */}
              {path.status === 'published' && path.courses.length > 0 && (
                <div className="mb-3 p-2.5 bg-light rounded-2 border">
                  <div className="small fw-semibold text-dark mb-1.5" style={{ fontSize: '0.78rem' }}>
                    Alur Kelas Terangkai:
                  </div>
                  <div className="d-flex flex-wrap gap-1">
                    {path.courses.map((c, i) => (
                      <Link
                        key={c.slug}
                        href={`/courses/${c.slug}`}
                        className="badge bg-white text-dark border text-decoration-none hover-primary small py-1 px-2"
                        style={{ fontSize: '0.72rem' }}
                      >
                        {i + 1}. {c.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="d-flex flex-wrap gap-1 mb-3">
                {path.tags.map((t) => (
                  <span key={t} className="badge bg-light text-secondary border small">
                    {t}
                  </span>
                ))}
              </div>

              {/* Card Bottom CTA */}
              <div className="pt-3 border-top d-flex align-items-center justify-content-between small text-secondary mt-auto">
                <span className="d-flex align-items-center gap-1">
                  <Clock size={13} />
                  <span>{path.duration}</span>
                </span>
                {path.status === 'published' ? (
                  <button
                    type="button"
                    onClick={() => {
                      setActivePathId(path.id);
                      window.scrollTo({ top: 320, behavior: 'smooth' });
                    }}
                    className="btn btn-link p-0 text-primary fw-semibold text-decoration-none small d-inline-flex align-items-center gap-1"
                  >
                    <span>Buka Roadmap</span>
                    <ArrowRight size={13} />
                  </button>
                ) : (
                  <span className="text-muted fst-italic">Dalam Riset Kurikulum</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
