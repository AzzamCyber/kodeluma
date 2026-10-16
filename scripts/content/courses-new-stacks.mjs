// courses-new-stacks.mjs
// Metadata for 6 New Tech Stack Courses, Quizzes, and Capstone Projects

export const NEW_STACK_COURSES = [
  {
    id: "course-node-14",
    slug: "nodejs-dasar",
    title: "Node.js & Backend RESTful API",
    summary: "Pelajari runtime JavaScript di sisi server, modul inti Node.js, Express framework, dan pembuatan RESTful API.",
    description: "Kuasai ekosistem backend JavaScript modern dengan Node.js. Pelajari arsitektur asynchronous event-driven, sistem modul CommonJS & ES6, filesystem (fs), modul HTTP bawaan, pembuatan server web dengan Express.js, middleware, routing, validasi request, hingga koneksi database dan penanganan error standar produksi.",
    category: "nodejs",
    level: "pemula",
    status: "published",
    curriculumVersion: 1,
    estimatedMinutes: 320,
    coverUrl: "/brand/kodeluma-icon.png",
    lessonsCount: 6,
    createdAt: "2026-10-15T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  },
  {
    id: "course-react-15",
    slug: "react-dasar",
    title: "React & Komponen Web Modern",
    summary: "Kuasai library frontend paling populer di dunia, JSX, komponen berbasis fungsi, Props, State, dan React Hooks.",
    description: "Bangun antarmuka pengguna (UI) reaktif dan dinamis menggunakan React. Pelajari fondasi JSX, hierarki komponen, pengiriman data melalui Props, manajemen state interaktif dengan useState, siklus hidup efek samping via useEffect, komunikasi parent-child, dan rendering daftar dinamis.",
    category: "react",
    level: "pemula",
    status: "published",
    curriculumVersion: 1,
    estimatedMinutes: 340,
    coverUrl: "/brand/kodeluma-icon.png",
    lessonsCount: 6,
    createdAt: "2026-10-15T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  },
  {
    id: "course-go-16",
    slug: "go-dasar",
    title: "Go (Golang) Dasar & Concurrency",
    summary: "Pelajari bahasa pemrograman backend tercepat dari Google, static typing, struct, goroutine, dan channels.",
    description: "Pelajari bahasa Go yang dirancang oleh tim Google untuk membangun infrastruktur cloud dan layanan microservices berskala raksasa. Kuasai sintaks dasar Go, tipe data statis kuat, fungsi, pointer, struct, interface, error handling idiomatis, serta konkurensi legendaris Go melalui Goroutines dan Channels.",
    category: "go",
    level: "pemula",
    status: "published",
    curriculumVersion: 1,
    estimatedMinutes: 320,
    coverUrl: "/brand/kodeluma-icon.png",
    lessonsCount: 6,
    createdAt: "2026-10-15T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  },
  {
    id: "course-git-17",
    slug: "git-dasar",
    title: "Git & Kolaborasi GitHub Profesional",
    summary: "Kuasai Version Control System standar dunia industri, branching, merge conflict resolution, dan Pull Requests.",
    description: "Git adalah keahlian mutlak bagi setiap software engineer. Di kelas ini kamu akan mempelajari siklus hidup file Git (working tree, staging area, repository), riwayat commit, percabangan fitur (branching), penggabungan cabang (merging), penanganan konflik, hingga kolaborasi tim di GitHub menggunakan remote repository dan Pull Requests.",
    category: "git",
    level: "pemula",
    status: "published",
    curriculumVersion: 1,
    estimatedMinutes: 240,
    coverUrl: "/brand/kodeluma-icon.png",
    lessonsCount: 6,
    createdAt: "2026-10-15T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  },
  {
    id: "course-docker-18",
    slug: "docker-dasar",
    title: "Docker & Kontainerisasi Dasar",
    summary: "Kemas dan jalankan aplikasi secara konsisten di semua lingkungan dengan Dockerfile, image, dan container.",
    description: "Singkirkan masalah klasik 'it works on my machine'. Pelajari konsep dasar kontainerisasi, perbedaan virtual machine vs container, pembuatan image menggunakan Dockerfile, manajemen container, port mapping, environment variables, persistensi data dengan volume, serta orkestrasi multi-service dengan Docker Compose.",
    category: "docker",
    level: "pemula",
    status: "published",
    curriculumVersion: 1,
    estimatedMinutes: 260,
    coverUrl: "/brand/kodeluma-icon.png",
    lessonsCount: 6,
    createdAt: "2026-10-15T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  },
  {
    id: "course-php-19",
    slug: "php-dasar",
    title: "PHP Dasar & Web Dinamis",
    summary: "Pelajari bahasa pemrograman server-side yang menggerakkan mayoritas website dunia, pemrosesan form, dan sesi.",
    description: "Kuasai dasar-dasar PHP modern. Pelajari sintaks dasar, penanganan formulir HTML (GET & POST), validasi input pengguna, manajemen state dengan Session dan Cookie, koneksi basis data MySQL via PDO (PHP Data Objects), hingga pembuatan aplikasi web dinamis yang aman dari serangan SQL Injection.",
    category: "php",
    level: "pemula",
    status: "published",
    curriculumVersion: 1,
    estimatedMinutes: 280,
    coverUrl: "/brand/kodeluma-icon.png",
    lessonsCount: 6,
    createdAt: "2026-10-15T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  }
];

export const NEW_STACK_QUIZZES = {
  "course-node-14": {
    id: "quiz-node-14",
    courseId: "course-node-14",
    title: "Kuis Evaluasi Node.js & Backend",
    passScorePercent: 70,
    questions: [
      {
        id: "q1",
        question: "Model eksekusi seperti apa yang digunakan oleh Node.js untuk menangani operasi I/O?",
        options: [
          { id: "a", text: "Multi-threaded blocking I/O" },
          { id: "b", text: "Single-threaded non-blocking I/O berbasis Event Loop" },
          { id: "c", text: "Fork process per connection" },
          { id: "d", text: "Thread pooling eksklusif tanpa event loop" }
        ],
        correctOptionId: "b",
        explanation: "Node.js memanfaatkan arsitektur single-threaded event loop dengan non-blocking I/O yang efisien untuk konkurensi tinggi."
      },
      {
        id: "q2",
        question: "Fungsi apa yang wajib dipanggil dalam Express middleware agar request dapat diteruskan ke handler berikutnya?",
        options: [
          { id: "a", text: "res.continue()" },
          { id: "b", text: "next()" },
          { id: "c", text: "req.proceed()" },
          { id: "d", text: "return true" }
        ],
        correctOptionId: "b",
        explanation: "Fungsi next() memberi sinyal pada Express router untuk memanggil middleware atau route handler berikutnya."
      },
      {
        id: "q3",
        question: "Modul inti Node.js bawaan mana yang digunakan untuk membaca dan menulis file di sistem operasi?",
        options: [
          { id: "a", text: "http" },
          { id: "b", text: "fs (File System)" },
          { id: "c", text: "path" },
          { id: "d", text: "os" }
        ],
        correctOptionId: "b",
        explanation: "Modul 'fs' (fs/promises) menyediakan API untuk operasi file sistem sinkron dan asinkron."
      }
    ]
  },
  "course-react-15": {
    id: "quiz-react-15",
    courseId: "course-react-15",
    title: "Kuis Evaluasi React & Komponen",
    passScorePercent: 70,
    questions: [
      {
        id: "q1",
        question: "Hook dasar React apa yang digunakan untuk menyimpan dan memperbarui data lokal yang memicu render ulang komponen?",
        options: [
          { id: "a", text: "useData" },
          { id: "b", text: "useState" },
          { id: "c", text: "useContext" },
          { id: "d", text: "useMemo" }
        ],
        correctOptionId: "b",
        explanation: "useState mendeklarasikan variabel state lokal dan fungsi updater untuk mengubah nilainya."
      },
      {
        id: "q2",
        question: "Jika array dependensi pada useEffect dibiarkan kosong ([]), kapan callback effect akan dijalankan?",
        options: [
          { id: "a", text: "Pada setiap render ulang komponen" },
          { id: "b", text: "Hanya satu kali setelah komponen pertama kali dipasang (mounted)" },
          { id: "c", text: "Tidak pernah dijalankan" },
          { id: "d", text: "Hanya sebelum komponen di-unmount" }
        ],
        correctOptionId: "b",
        explanation: "Array dependensi kosong [] menandakan efek hanya berjalan sekali pada saat inisialisasi awal (mount)."
      },
      {
        id: "q3",
        question: "Mengapa properti 'key' unik wajib diberikan saat merender daftar elemen anak di React?",
        options: [
          { id: "a", text: "Untuk menerapkan styling CSS secara otomatis" },
          { id: "b", text: "Membantu algoritma rekonsiliasi React mengidentifikasi elemen mana yang ditambah, dihapus, atau diubah posisinya" },
          { id: "c", text: "Mencegah duplikasi data di memori Redux" },
          { id: "d", text: "Sebagai ID HTML standar di browser" }
        ],
        correctOptionId: "b",
        explanation: "Atribut key unik memungkinkan React mengoptimalkan update Virtual DOM tanpa me-render ulang seluruh daftar."
      }
    ]
  },
  "course-go-16": {
    id: "quiz-go-16",
    courseId: "course-go-16",
    title: "Kuis Evaluasi Go (Golang) Dasar",
    passScorePercent: 70,
    questions: [
      {
        id: "q1",
        question: "Kata kunci apa yang digunakan untuk mengeksekusi fungsi secara asinkron di dalam Goroutine ringan?",
        options: [
          { id: "a", text: "async" },
          { id: "b", text: "go" },
          { id: "c", text: "thread" },
          { id: "d", text: "spawn" }
        ],
        correctOptionId: "b",
        explanation: "Kata kunci 'go' (contoh: go lakukanSesuatu()) meluncurkan fungsi sebagai Goroutine yang sangat ringan (hanya beberapa kilobyte)."
      },
      {
        id: "q2",
        question: "Bagaimana cara penanganan error yang idiomatis di bahasa Go?",
        options: [
          { id: "a", text: "Menggunakan blok try...catch" },
          { id: "b", text: "Fungsi mengembalikan nilai error sebagai nilai return terakhir (val, err := func()) dan memeriksa if err != nil" },
          { id: "c", text: "Menggunakan panic() untuk setiap kegagalan kecil" },
          { id: "d", text: "Mengecek global errno" }
        ],
        correctOptionId: "b",
        explanation: "Go memperlakukan error sebagai nilai biasa (error values) yang eksplisit dikembalikan dan diperiksa secara berkala."
      },
      {
        id: "q3",
        question: "Mekanisme apa yang digunakan untuk mengirim dan menerima data antar Goroutine secara aman?",
        options: [
          { id: "a", text: "Global Shared Memory tanpa lock" },
          { id: "b", text: "Channel (chan)" },
          { id: "c", text: "Cookie session" },
          { id: "d", text: "Websocket internal" }
        ],
        correctOptionId: "b",
        explanation: "Channel adalah pipa komunikasi antar Goroutine, mengikuti moto Go: 'Do not communicate by sharing memory; instead, share memory by communicating.'"
      }
    ]
  },
  "course-git-17": {
    id: "quiz-git-17",
    courseId: "course-git-17",
    title: "Kuis Evaluasi Git & GitHub",
    passScorePercent: 70,
    questions: [
      {
        id: "q1",
        question: "Perintah Git mana yang digunakan untuk memindahkan perubahan file dari Working Directory ke Staging Area?",
        options: [
          { id: "a", text: "git commit" },
          { id: "b", text: "git add" },
          { id: "c", text: "git push" },
          { id: "d", text: "git checkout" }
        ],
        correctOptionId: "b",
        explanation: "git add (misal: git add . atau git add nama_file) mendaftarkan perubahan ke dalam staging area untuk commit berikutnya."
      },
      {
        id: "q2",
        question: "Perintah apa yang paling aman untuk membuat sekaligus berpindah ke cabang (branch) baru?",
        options: [
          { id: "a", text: "git branch baru" },
          { id: "b", text: "git switch -c <nama-branch> atau git checkout -b <nama-branch>" },
          { id: "c", text: "git merge baru" },
          { id: "d", text: "git stash apply" }
        ],
        correctOptionId: "b",
        explanation: "git switch -c atau git checkout -b membuat cabang baru dan langsung mengalihkan HEAD ke cabang tersebut."
      },
      {
        id: "q3",
        question: "Apa tujuan utama dari Pull Request (PR) di GitHub?",
        options: [
          { id: "a", text: "Mengunduh file zip repositori ke komputer lokal" },
          { id: "b", text: "Mengajukan peninjauan kode (code review) dan diskusi sebelum menggabungkan cabang ke cabang utama" },
          { id: "c", text: "Menghapus commit yang keliru secara permanen" },
          { id: "d", text: "Memperbarui dependensi npm otomatis" }
        ],
        correctOptionId: "b",
        explanation: "Pull Request adalah mekanisme kolaboratif di mana kontributor mengusulkan perubahan untuk diperiksa dan disetujui tim sebelum di-merge."
      }
    ]
  },
  "course-docker-18": {
    id: "quiz-docker-18",
    courseId: "course-docker-18",
    title: "Kuis Evaluasi Docker & Kontainerisasi",
    passScorePercent: 70,
    questions: [
      {
        id: "q1",
        question: "Instruksi apa di dalam Dockerfile yang digunakan untuk menentukan image dasar (base image)?",
        options: [
          { id: "a", text: "BASE" },
          { id: "b", text: "FROM" },
          { id: "c", text: "IMAGE" },
          { id: "d", text: "START" }
        ],
        correctOptionId: "b",
        explanation: "FROM mendefinisikan parent/base image (contoh: FROM node:20-alpine) tempat layer image berikutnya akan dibangun."
      },
      {
        id: "q2",
        question: "Bagaimana cara memetakan port 3000 di dalam container ke port 8080 pada komputer host?",
        options: [
          { id: "a", text: "-p 3000:8080" },
          { id: "b", text: "-p 8080:3000" },
          { id: "c", text: "--port 3000" },
          { id: "d", text: "--expose 8080" }
        ],
        correctOptionId: "b",
        explanation: "Format opsi port adalah -p <host_port>:<container_port>, sehingga -p 8080:3000 memetakan host 8080 ke container 3000."
      },
      {
        id: "q3",
        question: "Apa fungsi dari Docker Volume?",
        options: [
          { id: "a", text: "Meningkatkan volume suara sistem operasi container" },
          { id: "b", text: "Menyimpan data persisten di luar siklus hidup container agar tidak hilang saat container dihapus" },
          { id: "c", text: "Mempercepat kompresi gambar image" },
          { id: "d", text: "Mengatur bandwidth jaringan internet" }
        ],
        correctOptionId: "b",
        explanation: "Docker Volume adalah mekanisme penyimpanan persisten terkelola yang independen dari siklus hidup container."
      }
    ]
  },
  "course-php-19": {
    id: "quiz-php-19",
    courseId: "course-php-19",
    title: "Kuis Evaluasi PHP Dasar",
    passScorePercent: 70,
    questions: [
      {
        id: "q1",
        question: "Semua variabel dalam bahasa PHP wajib diawali dengan simbol apa?",
        options: [
          { id: "a", text: "#" },
          { id: "b", text: "$" },
          { id: "c", text: "@" },
          { id: "d", text: "&" }
        ],
        correctOptionId: "b",
        explanation: "Di PHP, identifier variabel selalu dimulai dengan tanda dollar ($), contoh: $namaPengguna."
      },
      {
        id: "q2",
        question: "Superglobal array mana yang digunakan untuk mengumpulkan data formulir dengan metode pengiriman rahasia tanpa tampak di URL?",
        options: [
          { id: "a", text: "$_GET" },
          { id: "b", text: "$_POST" },
          { id: "c", text: "$_SERVER" },
          { id: "d", text: "$_ENV" }
        ],
        correctOptionId: "b",
        explanation: "$_POST menampung data yang dikirim melalui HTTP POST di body request, cocok untuk password dan form data penting."
      },
      {
        id: "q3",
        question: "Library ekstensi database bawaan mana yang sangat direkomendasikan di PHP modern karena mendukung Prepared Statements untuk mencegah SQL Injection?",
        options: [
          { id: "a", text: "mysql_query (legacy)" },
          { id: "b", text: "PDO (PHP Data Objects)" },
          { id: "c", text: "db_connect" },
          { id: "d", text: "sqlite_raw" }
        ],
        correctOptionId: "b",
        explanation: "PDO menyediakan antarmuka akses database konsisten dengan fitur parameter binding / prepared statements yang aman dari SQL Injection."
      }
    ]
  }
};

export const NEW_STACK_PROJECTS = [
  {
    id: "project-node-14",
    slug: "restful-api-perpustakaan-express",
    courseId: "course-node-14",
    title: "RESTful API Manajemen Perpustakaan dengan Express",
    summary: "Rancang layanan RESTful API lengkap (CRUD) untuk peminjaman buku menggunakan Express.js, routing modular, dan validasi middleware.",
    brief: "Bangun server backend REST API menggunakan Node.js dan Express yang menangani inventaris buku, peminjaman, dan penanganan error terpusat.",
    requirements: [
      "Implementasikan endpoint CRUD lengkap: GET, POST, PUT, DELETE /api/v1/books.",
      "Gunakan custom middleware untuk logging request dan validasi format payload JSON.",
      "Penanganan error terpusat (Global Error Handler Middleware) dengan kode status HTTP yang sesuai.",
      "Pisahkan kode ke dalam arsitektur controller, routes, dan models yang modular."
    ],
    difficulty: "pemula",
    status: "published",
    createdAt: "2026-10-15T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  },
  {
    id: "project-react-15",
    slug: "task-tracker-interaktif",
    courseId: "course-react-15",
    title: "Aplikasi Task Tracker & Filter Produktivitas",
    summary: "Bangun aplikasi manajemen tugas harian yang responsif dengan React Hooks (useState, useEffect), local storage persistence, dan badge kategori.",
    brief: "Ciptakan aplikasi frontend interaktif berbasis komponen React yang memungkinkan pengguna mengelola checklist produktivitas dengan cepat dan intuitif.",
    requirements: [
      "Komponen modular: FormInput, TaskList, TaskItem, dan FilterBar.",
      "Manajemen state reaktif untuk menambah, menandai selesai, dan menghapus tugas.",
      "Penyimpanan otomatis ke browser LocalStorage via hook useEffect.",
      "Fitur filter dinamis: Semua, Aktif, dan Selesai."
    ],
    difficulty: "pemula",
    status: "published",
    createdAt: "2026-10-15T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  },
  {
    id: "project-go-16",
    slug: "cli-concurrent-web-checker",
    courseId: "course-go-16",
    title: "CLI Web Status Checker dengan Goroutine & Channel",
    summary: "Bangun alat terminal (CLI) berbasis Go untuk memeriksa status kesehatan puluhan URL secara simultan menggunakan Goroutines.",
    brief: "Kembangkan program CLI berkinerja tinggi yang memeriksa ketersediaan website secara paralel dengan komunikasi Channel.",
    requirements: [
      "Menggunakan Goroutine untuk memeriksa setiap URL secara bersamaan tanpa blocking.",
      "Menggunakan Channel untuk mengirimkan laporan waktu respons ke thread utama.",
      "Format output tabel terminal yang rapi dengan indikator status HTTP (200 OK, 404, 500).",
      "Penanganan error koneksi jaringan yang bersih dan tidak membuat program panik."
    ],
    difficulty: "pemula",
    status: "published",
    createdAt: "2026-10-15T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  },
  {
    id: "project-git-17",
    slug: "simulasi-kolaborasi-git-team",
    courseId: "course-git-17",
    title: "Simulasi Alur Kerja Tim: Git Flow & Conflict Resolution",
    summary: "Simulasikan proyek open source nyata: buat branch fitur, lakukan rebase/merge, selesaikan conflict marker, dan buat Pull Request.",
    brief: "Tunjukkan penguasaan alur kerja Git standar profesional dengan mengelola repositori kolaboratif.",
    requirements: [
      "Membuat branch fitur terpisah dengan konvensi penamaan standar (feat/nama-fitur).",
      "Menulis pesan commit yang rapi mengikuti format Conventional Commits.",
      "Mensimulasikan dan menyelesaikan merge conflict secara manual dengan bersih.",
      "Menghasilkan riwayat git log yang teratur dan siap digabung ke branch main."
    ],
    difficulty: "pemula",
    status: "published",
    createdAt: "2026-10-15T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  },
  {
    id: "project-docker-18",
    slug: "kontainerisasi-aplikasi-web",
    courseId: "course-docker-18",
    title: "Kontainerisasi Aplikasi Fullstack dengan Docker & Compose",
    summary: "Tulis Dockerfile multi-stage yang efisien dan buat berkas docker-compose.yml untuk menghubungkan web server dan basis data.",
    brief: "Kemas aplikasi web ke dalam image container yang ringan dan jalankan bersama database dengan satu perintah docker compose up.",
    requirements: [
      "Dockerfile berbasis Linux Alpine untuk ukuran image yang ramping di bawah 150MB.",
      "Pengaturan .dockerignore untuk mengabaikan node_modules dan berkas lokal sementara.",
      "docker-compose.yml yang mendefinisikan service web dan database dengan healthcheck.",
      "Konfigurasi volume untuk persistensi data database."
    ],
    difficulty: "pemula",
    status: "published",
    createdAt: "2026-10-15T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  },
  {
    id: "project-php-19",
    slug: "buku-tamu-dinamis-pdo",
    courseId: "course-php-19",
    title: "Aplikasi Buku Tamu & Kontak Dinamis dengan PHP PDO",
    summary: "Bangun aplikasi web dinamis PHP dengan form pemrosesan pesan, sanitasi input XSS, dan penyimpanan MySQL via PDO Prepared Statements.",
    brief: "Rancang aplikasi buku tamu interaktif yang aman dan responsif menggunakan PHP modern dan PDO.",
    requirements: [
      "Formulir HTML dengan metode POST untuk pengiriman nama, email, dan pesan.",
      "Sanitasi input menggunakan htmlspecialchars() untuk mencegah serangan XSS.",
      "Operasi INSERT dan SELECT data ke basis data menggunakan PDO Prepared Statements.",
      "Pesan notifikasi sukses/gagal menggunakan PHP Session."
    ],
    difficulty: "pemula",
    status: "published",
    createdAt: "2026-10-15T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  }
];
