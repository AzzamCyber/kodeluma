'use client';

import { LearningPathsContent } from './LearningPathsContent';

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

export function LearningPathsViewer({ availableCourseSlugs }: { availableCourseSlugs: string[] }) {
  return <LearningPathsContent paths={ALL_PATHS} availableCourseSlugs={availableCourseSlugs} />;
}
