// courses-backend.mjs
// Metadata for 3 Dedicated Backend Infrastructure Courses: PostgreSQL, Redis, Linux

export const BACKEND_COURSES = [
  {
    id: "course-pg-20",
    slug: "postgresql-dasar",
    title: "PostgreSQL & Database Relasional Modern",
    summary: "Pelajari RDBMS open-source tercanggih di dunia: skema tabel, tipe data JSONB, relasi foreign key, dan indexing performa tinggi.",
    description: "PostgreSQL adalah standar de-facto database relasional untuk aplikasi enterprise dan startup modern. Di kelas ini kamu akan mempelajari instalasi PostgreSQL, tipe data canggih (UUID, JSONB, Array, Timestamptz), pembuatan relasi tabel ternormalisasi, transaksi ACID, query JOIN kompleks, serta strategi indexing B-Tree dan GIN untuk kueri jutaan baris data.",
    category: "postgresql",
    level: "pemula",
    status: "published",
    curriculumVersion: 1,
    estimatedMinutes: 300,
    coverUrl: "/brand/kodeluma-icon.png",
    lessonsCount: 6,
    createdAt: "2026-10-15T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  },
  {
    id: "course-redis-21",
    slug: "redis-dasar",
    title: "Redis & Arsitektur In-Memory Caching",
    summary: "Kuasai penyimpanan data in-memory tercepat di dunia: Strings, Hashes, Sets, Sorted Sets, TTL, Rate Limiting, dan Pub/Sub.",
    description: "Tingkatkan performa backend hingga 100x lipat dengan Redis. Pelajari konsep memori RAM vs Disk, struktur data inti Redis (Strings, Hashes, Lists, Sets, Sorted Sets), strategi cache invalidation, penetapan TTL (Time-To-Live), implementasi API rate limiter anti-spam, serta pola arsitektur Pub/Sub untuk fitur real-time.",
    category: "redis",
    level: "pemula",
    status: "published",
    curriculumVersion: 1,
    estimatedMinutes: 280,
    coverUrl: "/brand/kodeluma-icon.png",
    lessonsCount: 6,
    createdAt: "2026-10-15T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  },
  {
    id: "course-linux-22",
    slug: "linux-dasar",
    title: "Linux Server & Perintah CLI Terminal",
    summary: "Kuasai navigasi terminal Linux, hierarki direktori, permission (chmod/chown), manajemen proses (systemd), dan otomasi Bash script.",
    description: "90% server backend di dunia berjalan di atas sistem operasi Linux. Kuasai perintah esensial CLI (ls, cd, grep, find, curl), hierarki filesystem Unix, hak akses izin berkas (rwx / chmod / chown), pengelolaan proses sistem (ps, top, kill, systemctl), konfigurasi SSH aman, hingga penulisan skrip otomasi Bash.",
    category: "linux",
    level: "pemula",
    status: "published",
    curriculumVersion: 1,
    estimatedMinutes: 260,
    coverUrl: "/brand/kodeluma-icon.png",
    lessonsCount: 6,
    createdAt: "2026-10-15T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  }
];

export const BACKEND_QUIZZES = {
  "course-pg-20": {
    id: "quiz-pg-20",
    courseId: "course-pg-20",
    title: "Kuis Evaluasi PostgreSQL & RDBMS",
    passScorePercent: 70,
    questions: [
      {
        id: "q1",
        question: "Tipe data canggih bawaan PostgreSQL apa yang menyimpan dokumen JSON semi-terstruktur dalam format binary terindeks?",
        options: [
          { id: "a", text: "VARCHAR" },
          { id: "b", text: "JSONB" },
          { id: "c", text: "TEXT_BLOB" },
          { id: "d", text: "XML" }
        ],
        correctOptionId: "b",
        explanation: "JSONB menyimpan data JSON dalam format terurai biner yang mendukung indexing GIN cepat dan operasi pencarian kunci instan."
      },
      {
        id: "q2",
        question: "Perintah apa yang digunakan untuk memeriksa jalur rencana eksekusi dan estimasi biaya (cost) suatu kueri di PostgreSQL?",
        options: [
          { id: "a", text: "CHECK QUERY" },
          { id: "b", text: "EXPLAIN ANALYZE" },
          { id: "c", text: "SHOW PLAN" },
          { id: "d", text: "OPTIMIZE" }
        ],
        correctOptionId: "b",
        explanation: "EXPLAIN ANALYZE menjalankan kueri dan menampilkan detail eksekusi nyata, termasuk index scan vs sequential scan."
      },
      {
        id: "q3",
        question: "Apa arti sifat Atomicity dalam prinsip ACID transaksi database?",
        options: [
          { id: "a", text: "Data disimpan dalam ukuran atom terkecil" },
          { id: "b", text: "Semua operasi dalam satu transaksi berhasil sepenuhnya, atau dibatalkan total jika salah satu gagal" },
          { id: "c", text: "Database hanya bisa diakses oleh satu pengguna" },
          { id: "d", text: "Tabel otomatis memiliki partisi atom" }
        ],
        correctOptionId: "b",
        explanation: "Atomicity memastikan transaksi bersifat 'semua atau tidak sama sekali' (all-or-nothing), mencegah data setengah tersimpan saat sistem crash."
      }
    ]
  },
  "course-redis-21": {
    id: "quiz-redis-21",
    courseId: "course-redis-21",
    title: "Kuis Evaluasi Redis & Caching",
    passScorePercent: 70,
    questions: [
      {
        id: "q1",
        question: "Struktur data Redis mana yang menyimpan elemen unik berpasangan dengan nilai numerik 'score' untuk keperluan leaderboard dan ranking?",
        options: [
          { id: "a", text: "Strings" },
          { id: "b", text: "Sorted Sets (ZSET)" },
          { id: "c", text: "Hashes" },
          { id: "d", text: "Lists" }
        ],
        correctOptionId: "b",
        explanation: "Sorted Sets (ZSET) mengaitkan setiap member unik dengan score numerik, memungkinkan operasi rentang skor instan via ZREVRANGE."
      },
      {
        id: "q2",
        question: "Perintah Redis apa yang digunakan untuk mengatur masa aktif kunci agar kedaluwarsa otomatis setelah sejumlah detik?",
        options: [
          { id: "a", text: "EXPIRE key seconds" },
          { id: "b", text: "TIMEOUT key seconds" },
          { id: "c", text: "KILL key seconds" },
          { id: "d", text: "DELETE AFTER key seconds" }
        ],
        correctOptionId: "a",
        explanation: "EXPIRE menetapkan batas waktu TTL (Time-To-Live) pada kunci dalam satuan detik."
      },
      {
        id: "q3",
        question: "Mengapa Redis jauh lebih cepat daripada database disk konvensional?",
        options: [
          { id: "a", text: "Redis tidak menggunakan memori komputer" },
          { id: "b", text: "Redis beroperasi langsung di dalam Random Access Memory (RAM) dengan struktur data C yang sangat optimal" },
          { id: "c", text: "Redis hanya bisa menyimpan teks maksimal 10 huruf" },
          { id: "d", text: "Redis tidak mendukung jaringan internet" }
        ],
        correctOptionId: "b",
        explanation: "Penyimpanan data langsung di RAM meniadakan overhead baca/tulis disk mekanis, menghasilkan respons di bawah 1 milidetik."
      }
    ]
  },
  "course-linux-22": {
    id: "quiz-linux-22",
    courseId: "course-linux-22",
    title: "Kuis Evaluasi Linux & CLI Server",
    passScorePercent: 70,
    questions: [
      {
        id: "q1",
        question: "Perintah apa yang digunakan untuk mengubah hak akses izin berkas (Read, Write, Execute) di Linux?",
        options: [
          { id: "a", text: "chown" },
          { id: "b", text: "chmod" },
          { id: "c", text: "chperm" },
          { id: "d", text: "chgrp" }
        ],
        correctOptionId: "b",
        explanation: "chmod (change mode) menetapkan permission berkas (contoh: chmod 755 skrip.sh atau chmod +x)."
      },
      {
        id: "q2",
        question: "Perintah terminal apa yang menyaring baris teks berdasarkan pola pencarian ekspresi reguler secara cepat?",
        options: [
          { id: "a", text: "find" },
          { id: "b", text: "grep" },
          { id: "c", text: "locate" },
          { id: "d", text: "cat" }
        ],
        correctOptionId: "b",
        explanation: "grep (Global Regular Expression Print) mencari pola teks di dalam satu atau banyak berkas."
      },
      {
        id: "q3",
        question: "Layanan manajer sistem bawaan di sebagian besar distribusi Linux modern untuk mengontrol daemon backend (start/restart/status) adalah?",
        options: [
          { id: "a", text: "systemd / systemctl" },
          { id: "b", text: "cron" },
          { id: "c", text: "bash" },
          { id: "d", text: "init.bat" }
        ],
        correctOptionId: "a",
        explanation: "systemctl mengontrol daemon sistem melalui systemd (contoh: sudo systemctl restart nginx)."
      }
    ]
  }
};

export const BACKEND_PROJECTS = [
  {
    id: "project-pg-20",
    slug: "perancangan-basis-data-saas-postgresql",
    courseId: "course-pg-20",
    title: "Perancangan Basis Data Multi-Tenant SaaS dengan PostgreSQL",
    summary: "Rancang skema database SaaS lengkap dengan relasi multi-tabel, tipe data JSONB untuk profil dinamis, dan index B-Tree performa tinggi.",
    brief: "Susun skrip DDL SQL untuk aplikasi SaaS yang mendukung registrasi pengguna, organisasi, subscription, dan log aktivitas.",
    requirements: [
      "Tabel pengguna dan organisasi dengan foreign key ON DELETE CASCADE.",
      "Kolom konfigurasi bertipe data JSONB dengan indexing GIN.",
      "Kueri analitik transaksi bulanan menggunakan klausa JOIN dan aggregate.",
      "Penanganan transaksi ACID dengan BEGIN, COMMIT, dan ROLLBACK."
    ],
    difficulty: "pemula",
    status: "published",
    createdAt: "2026-10-15T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  },
  {
    id: "project-redis-21",
    slug: "api-rate-limiter-leaderboard-redis",
    courseId: "course-redis-21",
    title: "Sistem Rate Limiter & Leaderboard Real-Time dengan Redis",
    summary: "Bangun sistem perlindungan API rate limiting berbasis sliding window dan papan peringkat XP leaderboard menggunakan Redis Sorted Sets.",
    brief: "Kembangkan modul backend performa tinggi yang mengamankan endpoint dari serangan DoS dan merangking ribuan skor pemain secara instan.",
    requirements: [
      "Implementasi sliding window log rate limiting menggunakan Redis Strings/Hashes dan TTL.",
      "Papan peringkat leaderboard dinamis menggunakan Redis Sorted Sets (ZADD, ZREVRANGE, ZRANK).",
      "Mekanisme caching otomatis respons query database dengan invalidasi berbasis event.",
      "Penanganan koneksi redis cluster/failover yang tangguh."
    ],
    difficulty: "pemula",
    status: "published",
    createdAt: "2026-10-15T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  },
  {
    id: "project-linux-22",
    slug: "otomasi-backup-server-bash",
    courseId: "course-linux-22",
    title: "Skrip Otomasi Backup Server & Health Monitor dengan Bash",
    summary: "Tulis skrip shell Bash mandiri untuk memantau penggunaan CPU/RAM, membuat arsip backup terkompresi, dan menjadwalkannya di Cron.",
    brief: "Rancang skrip otomasi server Linux yang memastikan ketersediaan layanan dan pencadangan data berkala secara otomatis.",
    requirements: [
      "Skrip Bash dengan shebang #!/bin/bash dan penanganan exit code error set -e.",
      "Pemantauan kapasitas disk (df -h) dan pengiriman peringatan jika melebihi ambang batas 85%.",
      "Pencadangan direktori ke arsip tar.gz dengan penamaan berstempel waktu (timestamp).",
      "Konfigurasi entri jadwal otomatis berkala pada crontab sistem."
    ],
    difficulty: "pemula",
    status: "published",
    createdAt: "2026-10-15T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  }
];
