import { Course, Lesson, Project, Quiz, ForumThread, ForumCategory } from '@/types/domain';

export const MOCK_CATEGORIES: ForumCategory[] = [
  {
    "slug": "umum",
    "name": "Umum",
    "description": "Diskusi seputar tips belajar dan perkenalan"
  },
  {
    "slug": "html",
    "name": "HTML",
    "description": "Pertanyaan seputar struktur tag dan semantic web"
  },
  {
    "slug": "css",
    "name": "CSS",
    "description": "Diskusi styling, Flexbox, Grid, dan responsivitas"
  },
  {
    "slug": "javascript",
    "name": "JavaScript",
    "description": "Logika dasar, manipulasi DOM, dan event"
  },
  {
    "slug": "python",
    "name": "Python",
    "description": "Diskusi sintaks Python, automasi, dan algoritma"
  },
  {
    "slug": "typescript",
    "name": "TypeScript",
    "description": "Diskusi seputar type system, generics, dan konfigurasi tsc"
  },
  {
    "slug": "java",
    "name": "Java",
    "description": "Diskusi seputar JVM, OOP, Spring Boot, dan arsitektur enterprise"
  },
  {
    "slug": "cplusplus",
    "name": "C++",
    "description": "Diskusi seputar pointer, STL vector, algoritma, dan performa tinggi"
  },
  {
    "slug": "sql",
    "name": "SQL",
    "description": "Diskusi kueri basis data relasional, indeks, dan optimasi query"
  },
  {
    "slug": "proyek",
    "name": "Proyek",
    "description": "Berbagi hasil proyek praktik dan ulasan rekan"
  }
,
  {
    "slug": "nodejs",
    "name": "Node.js",
    "description": "Diskusi backend JavaScript, Express, modul HTTP, dan npm"
  }
,
  {
    "slug": "react",
    "name": "React",
    "description": "Diskusi komponen web, hooks (useState, useEffect), dan UI modern"
  }
,
  {
    "slug": "go",
    "name": "Go (Golang)",
    "description": "Diskusi bahasa Go, goroutine, channel, dan arsitektur microservices"
  }
,
  {
    "slug": "php",
    "name": "PHP",
    "description": "Diskusi PHP modern, formulir, sesi, dan PDO basis data"
  }
,
  {
    "slug": "git",
    "name": "Git & GitHub",
    "description": "Diskusi version control, percabangan branch, merge conflict, dan pull request"
  }
,
  {
    "slug": "docker",
    "name": "Docker",
    "description": "Diskusi kontainerisasi, Dockerfile, volume data, dan Docker Compose"
  }
,
  {
    "slug": "postgresql",
    "name": "PostgreSQL",
    "description": "Diskusi RDBMS tingkat lanjut, tipe data JSONB, indeks GIN, dan performa query"
  }
,
  {
    "slug": "redis",
    "name": "Redis",
    "description": "Diskusi in-memory datastore, caching, sorted sets, dan rate limiting"
  }
,
  {
    "slug": "linux",
    "name": "Linux",
    "description": "Diskusi sistem operasi server, perintah CLI terminal, permissions, dan Bash"
  }
];

export const MOCK_COURSES: Course[] = [
  {
    "id": "course-html-01",
    "slug": "html-dasar",
    "title": "HTML Dasar",
    "summary": "Pelajari kerangka website dan buat halaman web pertamamu dari nol.",
    "description": "HTML (HyperText Markup Language) adalah bahasa standar pembuatan struktur website. Di kelas ini, kamu akan mempelajari anatomi tag, semantic markup, pembuatan form, dan menyusun halaman profil pribadi yang bersih dan terstruktur.",
    "category": "html",
    "level": "pemula",
    "status": "published",
    "curriculumVersion": 1,
    "estimatedMinutes": 180,
    "coverUrl": "/brand/kodeluma-icon.png",
    "lessonsCount": 8,
    "createdAt": "2026-10-01T08:00:00Z",
    "updatedAt": "2026-10-15T08:00:00Z"
  },
  {
    "id": "course-css-02",
    "slug": "css-fundamental",
    "title": "CSS Fundamental",
    "summary": "Ubah halaman polos menjadi rapi, menarik, dan nyaman dipandang di semua ukuran layar.",
    "description": "CSS (Cascading Style Sheets) memberi warna, proporsi, dan keindahan pada halaman web. Pelajari selector modern, box model, teknik tata letak Flexbox, hingga pembuatan layout responsif yang adaptif untuk smartphone.",
    "category": "css",
    "level": "pemula",
    "status": "published",
    "curriculumVersion": 1,
    "estimatedMinutes": 200,
    "coverUrl": "/brand/kodeluma-icon.png",
    "lessonsCount": 8,
    "createdAt": "2026-10-02T08:00:00Z",
    "updatedAt": "2026-10-15T08:00:00Z"
  },
  {
    "id": "course-js-03",
    "slug": "javascript-pemula",
    "title": "JavaScript Pemula",
    "summary": "Tambahkan interaktivitas dinamis dan logika pemrograman ke dalam websitemu.",
    "description": "Jadikan websitemu hidup dengan JavaScript. Mulai dari pemahaman variabel, tipe data dasar, percabangan logika, perulangan, hingga berinteraksi langsung dengan elemen HTML melalui DOM (Document Object Model).",
    "category": "javascript",
    "level": "pemula",
    "status": "published",
    "curriculumVersion": 1,
    "estimatedMinutes": 240,
    "coverUrl": "/brand/kodeluma-icon.png",
    "lessonsCount": 9,
    "createdAt": "2026-10-03T08:00:00Z",
    "updatedAt": "2026-10-15T08:00:00Z"
  },
  {
    "id": "course-py-04",
    "slug": "python-dasar",
    "title": "Python Dasar",
    "summary": "Pelajari bahasa pemrograman paling populer di dunia untuk automasi, web, dan data.",
    "description": "Python terkenal dengan sintaksnya yang bersih, ringkas, dan mirip bahasa Inggris. Di kelas ini, kamu akan menguasai sintaks dasar, struktur data (list, tuple, dict, set), logika algoritma, exception handling, manipulasi file, hingga pemrograman berorientasi objek (OOP) dari nol.",
    "category": "python",
    "level": "pemula",
    "status": "published",
    "curriculumVersion": 1,
    "estimatedMinutes": 300,
    "coverUrl": "/brand/kodeluma-icon.png",
    "lessonsCount": 25,
    "createdAt": "2026-10-04T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  },
  {
    "id": "course-ts-05",
    "slug": "typescript-pemula",
    "title": "TypeScript Pemula",
    "summary": "Kuasai JavaScript dengan sistem tipe statis untuk kode yang aman dan skala besar.",
    "description": "TypeScript adalah superset dari JavaScript yang menambahkan pengetikan statis (static typing). Di kelas ini, kamu akan mempelajari deklarasi tipe primitif, interfaces, type aliases, union types, generic types, hingga type narrowing untuk membangun aplikasi modern tanpa runtime bug.",
    "category": "typescript",
    "level": "pemula",
    "status": "published",
    "curriculumVersion": 1,
    "estimatedMinutes": 360,
    "coverUrl": "/brand/kodeluma-icon.png",
    "lessonsCount": 13,
    "createdAt": "2026-10-05T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  },
  {
    "id": "course-java-06",
    "slug": "java-dasar",
    "title": "Java Dasar",
    "summary": "Pelajari bahasa pemrograman berorientasi objek terpopuler untuk sistem backend enterprise dan Android.",
    "description": "Java terkenal dengan stabilitas, kehandalan, dan filosofi \"Write Once, Run Anywhere\". Di kelas ini, kamu akan mempelajari sintaks Java, tipe primitif, struktur kontrol alur, array, class dan objek, enkapsulasi, pewarisan (inheritance), hingga interface standar industri.",
    "category": "java",
    "level": "pemula",
    "status": "published",
    "curriculumVersion": 1,
    "estimatedMinutes": 380,
    "coverUrl": "/brand/kodeluma-icon.png",
    "lessonsCount": 13,
    "createdAt": "2026-10-06T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  },
  {
    "id": "course-cpp-07",
    "slug": "cpp-dasar",
    "title": "C++ Dasar & Algoritma",
    "summary": "Kuasai bahasa pemrograman tercepat untuk competitive programming, game development, dan sistem.",
    "description": "C++ adalah bahasa pemrograman tingkat menengah yang memberikan kendali penuh terhadap memori dan performa perangkat keras. Di kelas ini, kamu akan mempelajari sintaks modern C++, stream i/o, pointer, struktur data vector, fungsi pass-by-reference, hingga pengenalan struct dan OOP.",
    "category": "cplusplus",
    "level": "pemula",
    "status": "published",
    "curriculumVersion": 1,
    "estimatedMinutes": 390,
    "coverUrl": "/brand/kodeluma-icon.png",
    "lessonsCount": 13,
    "createdAt": "2026-10-07T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  },
  {
    "id": "course-sql-08",
    "slug": "sql-dasar",
    "title": "SQL Dasar & Basis Data",
    "summary": "Pelajari Structured Query Language (SQL) standar industri untuk mengelola basis data relasional.",
    "description": "SQL adalah bahasa standar untuk berinteraksi dengan Database Relasional (RDBMS) seperti PostgreSQL, MySQL, SQLite, dan SQL Server. Di kelas ini, kamu akan menguasai pembuatan tabel, manipulasi data (CRUD), pengurutan, agregasi numerik, pengelompokan baris, hingga relasi multi-tabel dengan JOIN.",
    "category": "sql",
    "level": "pemula",
    "status": "published",
    "curriculumVersion": 1,
    "estimatedMinutes": 360,
    "coverUrl": "/brand/kodeluma-icon.png",
    "lessonsCount": 13,
    "createdAt": "2026-10-08T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  }
,
  {
    "id": "course-js-int-09",
    "slug": "javascript-menengah",
    "title": "JavaScript Lanjutan & Asynchronous",
    "summary": "Kuasai asynchronous JavaScript, event loop, Promises, Async/Await, Web APIs, dan arsitektur modular.",
    "description": "Tingkatkan kemampuan JavaScript ke level menengah profesional. Pelajari cara kerja internal JavaScript engine, execution context, closures, event loop, manipulasi asynchronous dengan Promise & Async/Await, konsumsi REST API menggunakan Fetch, Web Storage API, hingga arsitektur modular ES6+.",
    "category": "javascript",
    "level": "menengah",
    "status": "published",
    "curriculumVersion": 1,
    "estimatedMinutes": 300,
    "coverUrl": "/brand/kodeluma-icon.png",
    "lessonsCount": 10,
    "createdAt": "2026-10-10T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  },
  {
    "id": "course-ts-int-10",
    "slug": "typescript-menengah",
    "title": "TypeScript Lanjutan & Generics",
    "summary": "Pelajari sistem tipe tingkat lanjut, Generic functions & classes, Mapped Types, dan Type Guards profesional.",
    "description": "Bawa keahlian TypeScript kamu ke level intermediate. Di kelas ini kamu akan menguasai Generics mendalam dengan generic constraints, discriminated union, conditional types, mapped types, utility types bawaan (Pick, Omit, Record, Partial), custom type guards, serta best practice konfigurasi tsconfig untuk enterprise.",
    "category": "typescript",
    "level": "menengah",
    "status": "published",
    "curriculumVersion": 1,
    "estimatedMinutes": 320,
    "coverUrl": "/brand/kodeluma-icon.png",
    "lessonsCount": 10,
    "createdAt": "2026-10-11T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  },
  {
    "id": "course-css-int-11",
    "slug": "css-menengah",
    "title": "CSS Lanjutan, Animasi & Desain Sistem",
    "summary": "Kuasai CSS Custom Properties, animasi keyframes 60fps, pseudo-classes modern, dan teknik desain sistem.",
    "description": "Buat antarmuka web interaktif dan memukau kelas dunia. Pelajari manajemen tema dengan CSS Variables, animasi transisi & keyframes berkinerja tinggi, pseudo-classes modern (:has, :is, :where), fungsi matematis (clamp, min, max), subgrid, hingga teknik scroll snapping.",
    "category": "css",
    "level": "menengah",
    "status": "published",
    "curriculumVersion": 1,
    "estimatedMinutes": 260,
    "coverUrl": "/brand/kodeluma-icon.png",
    "lessonsCount": 8,
    "createdAt": "2026-10-12T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  },
  {
    "id": "course-py-int-12",
    "slug": "python-menengah",
    "title": "Python OOP & Pemrograman Lanjutan",
    "summary": "Kuasai Object-Oriented Programming (OOP), dunder methods, decorators, generators, dan context managers.",
    "description": "Kembangkan kode Python yang modular, scalable, dan maintainable. Pelajari prinsip dasar OOP (Encapsulation, Inheritance, Polymorphism), property decorator, magic dunder methods, list & dictionary comprehension tingkat lanjut, custom decorators, hingga context managers.",
    "category": "python",
    "level": "menengah",
    "status": "published",
    "curriculumVersion": 1,
    "estimatedMinutes": 280,
    "coverUrl": "/brand/kodeluma-icon.png",
    "lessonsCount": 8,
    "createdAt": "2026-10-13T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  },
  {
    "id": "course-sql-int-13",
    "slug": "sql-menengah",
    "title": "SQL Lanjutan, Relasi & Window Functions",
    "summary": "Kuasai multi-table joins, subqueries, CTE, Window Functions analitik, dan optimasi query indeks.",
    "description": "Tingkatkan kemampuan analisa dan rekayasa data. Pelajari perancangan relasi database ternormalisasi, teknik multi-table joins kompleks, Common Table Expressions (CTE), Window Functions analitik (ROW_NUMBER, RANK, LEAD, LAG), indexing untuk performa tinggi, hingga transaksi ACID.",
    "category": "sql",
    "level": "menengah",
    "status": "published",
    "curriculumVersion": 1,
    "estimatedMinutes": 280,
    "coverUrl": "/brand/kodeluma-icon.png",
    "lessonsCount": 8,
    "createdAt": "2026-10-14T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  }
,
  {
    "id": "course-node-14",
    "slug": "nodejs-dasar",
    "title": "Node.js & Backend RESTful API",
    "summary": "Pelajari runtime JavaScript di sisi server, modul inti Node.js, Express framework, dan pembuatan RESTful API.",
    "description": "Kuasai ekosistem backend JavaScript modern dengan Node.js. Pelajari arsitektur asynchronous event-driven, sistem modul CommonJS & ES6, filesystem (fs), modul HTTP bawaan, pembuatan server web dengan Express.js, middleware, routing, validasi request, hingga koneksi database dan penanganan error standar produksi.",
    "category": "nodejs",
    "level": "pemula",
    "status": "published",
    "curriculumVersion": 1,
    "estimatedMinutes": 320,
    "coverUrl": "/brand/kodeluma-icon.png",
    "lessonsCount": 6,
    "createdAt": "2026-10-15T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  }
,
  {
    "id": "course-react-15",
    "slug": "react-dasar",
    "title": "React & Komponen Web Modern",
    "summary": "Kuasai library frontend paling populer di dunia, JSX, komponen berbasis fungsi, Props, State, dan React Hooks.",
    "description": "Bangun antarmuka pengguna (UI) reaktif dan dinamis menggunakan React. Pelajari fondasi JSX, hierarki komponen, pengiriman data melalui Props, manajemen state interaktif dengan useState, siklus hidup efek samping via useEffect, komunikasi parent-child, dan rendering daftar dinamis.",
    "category": "react",
    "level": "pemula",
    "status": "published",
    "curriculumVersion": 1,
    "estimatedMinutes": 340,
    "coverUrl": "/brand/kodeluma-icon.png",
    "lessonsCount": 6,
    "createdAt": "2026-10-15T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  }
,
  {
    "id": "course-go-16",
    "slug": "go-dasar",
    "title": "Go (Golang) Dasar & Concurrency",
    "summary": "Pelajari bahasa pemrograman backend tercepat dari Google, static typing, struct, goroutine, dan channels.",
    "description": "Pelajari bahasa Go yang dirancang oleh tim Google untuk membangun infrastruktur cloud dan layanan microservices berskala raksasa. Kuasai sintaks dasar Go, tipe data statis kuat, fungsi, pointer, struct, interface, error handling idiomatis, serta konkurensi legendaris Go melalui Goroutines dan Channels.",
    "category": "go",
    "level": "pemula",
    "status": "published",
    "curriculumVersion": 1,
    "estimatedMinutes": 320,
    "coverUrl": "/brand/kodeluma-icon.png",
    "lessonsCount": 6,
    "createdAt": "2026-10-15T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  }
,
  {
    "id": "course-git-17",
    "slug": "git-dasar",
    "title": "Git & Kolaborasi GitHub Profesional",
    "summary": "Kuasai Version Control System standar dunia industri, branching, merge conflict resolution, dan Pull Requests.",
    "description": "Git adalah keahlian mutlak bagi setiap software engineer. Di kelas ini kamu akan mempelajari siklus hidup file Git (working tree, staging area, repository), riwayat commit, percabangan fitur (branching), penggabungan cabang (merging), penanganan konflik, hingga kolaborasi tim di GitHub menggunakan remote repository dan Pull Requests.",
    "category": "git",
    "level": "pemula",
    "status": "published",
    "curriculumVersion": 1,
    "estimatedMinutes": 240,
    "coverUrl": "/brand/kodeluma-icon.png",
    "lessonsCount": 6,
    "createdAt": "2026-10-15T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  }
,
  {
    "id": "course-docker-18",
    "slug": "docker-dasar",
    "title": "Docker & Kontainerisasi Dasar",
    "summary": "Kemas dan jalankan aplikasi secara konsisten di semua lingkungan dengan Dockerfile, image, dan container.",
    "description": "Singkirkan masalah klasik 'it works on my machine'. Pelajari konsep dasar kontainerisasi, perbedaan virtual machine vs container, pembuatan image menggunakan Dockerfile, manajemen container, port mapping, environment variables, persistensi data dengan volume, serta orkestrasi multi-service dengan Docker Compose.",
    "category": "docker",
    "level": "pemula",
    "status": "published",
    "curriculumVersion": 1,
    "estimatedMinutes": 260,
    "coverUrl": "/brand/kodeluma-icon.png",
    "lessonsCount": 6,
    "createdAt": "2026-10-15T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  }
,
  {
    "id": "course-php-19",
    "slug": "php-dasar",
    "title": "PHP Dasar & Web Dinamis",
    "summary": "Pelajari bahasa pemrograman server-side yang menggerakkan mayoritas website dunia, pemrosesan form, dan sesi.",
    "description": "Kuasai dasar-dasar PHP modern. Pelajari sintaks dasar, penanganan formulir HTML (GET & POST), validasi input pengguna, manajemen state dengan Session dan Cookie, koneksi basis data MySQL via PDO (PHP Data Objects), hingga pembuatan aplikasi web dinamis yang aman dari serangan SQL Injection.",
    "category": "php",
    "level": "pemula",
    "status": "published",
    "curriculumVersion": 1,
    "estimatedMinutes": 280,
    "coverUrl": "/brand/kodeluma-icon.png",
    "lessonsCount": 6,
    "createdAt": "2026-10-15T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  }
,
  {
    "id": "course-pg-20",
    "slug": "postgresql-dasar",
    "title": "PostgreSQL & Database Relasional Modern",
    "summary": "Pelajari RDBMS open-source tercanggih di dunia: skema tabel, tipe data JSONB, relasi foreign key, dan indexing performa tinggi.",
    "description": "PostgreSQL adalah standar de-facto database relasional untuk aplikasi enterprise dan startup modern. Di kelas ini kamu akan mempelajari instalasi PostgreSQL, tipe data canggih (UUID, JSONB, Array, Timestamptz), pembuatan relasi tabel ternormalisasi, transaksi ACID, query JOIN kompleks, serta strategi indexing B-Tree dan GIN untuk kueri jutaan baris data.",
    "category": "postgresql",
    "level": "pemula",
    "status": "published",
    "curriculumVersion": 1,
    "estimatedMinutes": 300,
    "coverUrl": "/brand/kodeluma-icon.png",
    "lessonsCount": 6,
    "createdAt": "2026-10-15T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  }
,
  {
    "id": "course-redis-21",
    "slug": "redis-dasar",
    "title": "Redis & Arsitektur In-Memory Caching",
    "summary": "Kuasai penyimpanan data in-memory tercepat di dunia: Strings, Hashes, Sets, Sorted Sets, TTL, Rate Limiting, dan Pub/Sub.",
    "description": "Tingkatkan performa backend hingga 100x lipat dengan Redis. Pelajari konsep memori RAM vs Disk, struktur data inti Redis (Strings, Hashes, Lists, Sets, Sorted Sets), strategi cache invalidation, penetapan TTL (Time-To-Live), implementasi API rate limiter anti-spam, serta pola arsitektur Pub/Sub untuk fitur real-time.",
    "category": "redis",
    "level": "pemula",
    "status": "published",
    "curriculumVersion": 1,
    "estimatedMinutes": 280,
    "coverUrl": "/brand/kodeluma-icon.png",
    "lessonsCount": 6,
    "createdAt": "2026-10-15T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  }
,
  {
    "id": "course-linux-22",
    "slug": "linux-dasar",
    "title": "Linux Server & Perintah CLI Terminal",
    "summary": "Kuasai navigasi terminal Linux, hierarki direktori, permission (chmod/chown), manajemen proses (systemd), dan otomasi Bash script.",
    "description": "90% server backend di dunia berjalan di atas sistem operasi Linux. Kuasai perintah esensial CLI (ls, cd, grep, find, curl), hierarki filesystem Unix, hak akses izin berkas (rwx / chmod / chown), pengelolaan proses sistem (ps, top, kill, systemctl), konfigurasi SSH aman, hingga penulisan skrip otomasi Bash.",
    "category": "linux",
    "level": "pemula",
    "status": "published",
    "curriculumVersion": 1,
    "estimatedMinutes": 260,
    "coverUrl": "/brand/kodeluma-icon.png",
    "lessonsCount": 6,
    "createdAt": "2026-10-15T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  }
];

export const MOCK_LESSONS: Record<string, Lesson[]> = {
  "course-html-01": [
    {
      "id": "lesson-html-01",
      "courseId": "course-html-01",
      "slug": "apa-itu-html",
      "title": "1. Apa Itu HTML & Anatomi Dokumen",
      "summary": "Memahami peran HTML dalam pengembangan web dan struktur dasar file .html.",
      "order": 1,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Selamat Datang di Dunia Web!\n\nHTML (**HyperText Markup Language**) adalah bahasa fondasi standar untuk membuat halaman web. Setiap website yang kamu buka di browser (Google Chrome, Firefox, Safari) pada dasarnya membaca dan merender kode HTML.\n\n---\n\n### Apa itu \"HyperText\" dan \"Markup Language\"?\n- **HyperText**: Teks yang memiliki tautan (*hyperlink*) untuk berpindah ke dokumen atau halaman lain.\n- **Markup Language**: Bahasa yang menggunakan penanda (*tags*) untuk memberitahu browser bagaimana suatu teks atau konten harus ditampilkan (apakah sebagai judul, paragraf, gambar, atau tombol).\n\n---\n\n### Struktur Anatomi Dokumen HTML5\n\nSetiap dokumen HTML diawali dengan deklarasi `<!DOCTYPE html>` yang memberitahu browser bahwa dokumen ini menggunakan standar HTML5 modern.\n\n```html\n<!DOCTYPE html>\n<html lang=\"id\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Website Pertamaku</title>\n  </head>\n  <body>\n    <h1>Halo, Dunia!</h1>\n    <p>Ini adalah paragraf pertama saya di KodeLuma.</p>\n  </body>\n</html>\n```\n\n---\n\n### Penjelasan Baris per Baris (W3Schools Style)\n\n| Tag / Elemen | Fungsi & Kegunaan |\n| :--- | :--- |\n| `<!DOCTYPE html>` | Mendeklarasikan bahwa dokumen ini adalah HTML5 modern. Wajib diletakkan di baris pertama. |\n| `<html lang=\"id\">` | Elemen root yang membungkus seluruh konten web. Atribut `lang=\"id\"` menyatakan bahasa Indonesia. |\n| `<head>` | Berisi metadata (informasi teknis tentang halaman) yang **tidak tampil langsung** di layar utama web. |\n| `<meta charset=\"UTF-8\">` | Menentukan pengkodean karakter standar internasional (mendukung emoji, huruf latin, aksara, dll). |\n| `<meta name=\"viewport\" ...>` | Mengatur skala tampilan agar halaman langsung responsif di layar ponsel/smartphone. |\n| `<title>` | Menentukan judul yang muncul pada **tab browser** dan hasil pencarian Google. |\n| `<body>` | Wadah utama di mana seluruh elemen visual (teks, gambar, tombol, formulir) ditampilkan. |\n\n---\n\n### 💡 Tips Praktik W3Schools\n> Selalu gunakan huruf kecil untuk nama tag HTML (misalnya `<body>`, bukan `<BODY>`). Meskipun browser tetap membacanya, standar W3C merekomendasikan huruf kecil demi konsistensi dan kerapian kode.\n\n---\n\n### 🎯 Latihan Mandiri\n1. Buat file baru bernama `index.html` di komputermu.\n2. Salin kode struktur dasar di atas.\n3. Ubah isi tag `<title>` menjadi nama lengkapmu, lalu ubah `<h1>` menjadi *\"Selamat Datang di Portofolio Saya\"*.\n4. Buka file tersebut dengan mengklik ganda di browsermu!"
    },
    {
      "id": "lesson-html-02",
      "courseId": "course-html-01",
      "slug": "heading-paragraf-pemformatan",
      "title": "2. Heading, Paragraf & Format Teks",
      "summary": "Mengenal hierarki judul h1-h6, paragraf, garis pemisah, dan format teks tebal, miring, coret.",
      "order": 2,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Menata Teks dan Hierarki Informasi\n\nSebuah halaman web yang baik membutuhkan struktur hierarki yang jelas agar pembaca dan mesin pencari (SEO) dapat memahami poin penting dari konten tersebut.\n\n---\n\n### 1. Hierarki Heading (Judul: `<h1>` sampai `<h6>`)\n\nHTML menyediakan 6 level heading:\n- `<h1>`: Judul paling penting (hanya boleh ada **1 per halaman** untuk standar SEO terbaik).\n- `<h2>`: Judul bab atau seksi utama artikel.\n- `<h3>`: Sub-bagian di dalam seksi `<h2>`.\n- `<h4>` sampai `<h6>`: Sub-bagian yang lebih mendalam.\n\n```html\n<h1>Panduan Belajar Web Development</h1>\n<h2>Bab 1: Pengenalan HTML</h2>\n<h3>1.1 Apa Itu Browser</h3>\n<h4>1.1.1 Arsitektur Client-Server</h4>\n```\n\n---\n\n### 2. Paragraf (`<p>`), Baris Baru (`<br>`), dan Pemisah (`<hr>`)\n\nBrowser secara otomatis menambahkan spasi/margin sebelum dan sesudah tag `<p>`. Spasi berlebih atau enter di editor teks akan diabaikan oleh browser (*whitespace collapse*).\n\n```html\n<p>Ini adalah paragraf pertama yang berisi penjelasan materi.</p>\n<hr> <!-- Horizontal Rule: Garis pemisah tematik antar topik -->\n<p>Alamat Kantor:<br> <!-- Break: Memaksa ganti baris tanpa membuat paragraf baru -->\nGedung Cyber 2 Lantai 10<br>\nJakarta Selatan</p>\n```\n\n---\n\n### 3. Pemformatan Teks Penting\n\nHTML memiliki tag khusus untuk memberikan penekanan dan arti semantik pada kata tertentu:\n\n| Tag | Tampilan Visual | Makna Semantik |\n| :--- | :--- | :--- |\n| `<strong>` | **Tebal (Bold)** | Menandakan teks memiliki urgensi / arti sangat penting |\n| `<b>` | **Tebal (Bold)** | Hanya tebal secara estetika tanpa penekanan semantik |\n| `<em>` | *Miring (Italic)* | Menandakan penekanan intonasi ucapan (*emphasis*) |\n| `<i>` | *Miring (Italic)* | Teks istilah asing, teknis, atau pemikiran |\n| `<mark>` | <mark>Stabilo Kuning</mark> | Menandai teks yang disorot / relevan |\n| `<small>` | Teks Kecil | Catatan kaki, hak cipta, atau teks legal |\n| `<del>` | ~~Coretan~~ | Menandai teks yang sudah dihapus / harga lama |\n| `<ins>` | <u>Garis Bawah</u> | Menandai teks tambahan / harga promo baru |\n| `<code>` | `Monospace` | Menampilkan potongan kode pemrograman |\n\n```html\n<p>Diskon Spesial: <del>Rp 500.000</del> <strong>Rp 150.000</strong>!</p>\n<p>Gunakan perintah <code>npm run dev</code> untuk memulai server lokal.</p>\n```\n\n---\n\n### ⚠️ Kesalahan Umum Pemula\n> **Jangan gunakan heading hanya untuk membesarkan teks!** Jika kamu ingin teks berukuran besar tetapi bukan judul utama seksi, gunakan CSS (misalnya `font-size: 24px;`), bukan tag `<h1>`."
    },
    {
      "id": "lesson-html-03",
      "courseId": "course-html-01",
      "slug": "link-dan-navigasi",
      "title": "3. Tautan (Hyperlink) & Navigasi Antar Halaman",
      "summary": "Menghubungkan halaman web dengan tag anchor, link absolut, link relatif, dan anchor bookmark ID.",
      "order": 3,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Menghubungkan Dunia dengan Hyperlink\n\nTautan (*hyperlink*) adalah jantung dari World Wide Web. Tag `<a>` (*anchor*) digunakan untuk berpindah ke halaman lain, file unduhan, nomor telepon, email, atau seksi tertentu di halaman yang sama.\n\n---\n\n### 1. Sintaks Dasar Tag `<a>`\n\nAtribut terpenting dari tag `<a>` adalah `href` (*Hypertext REFerence*), yang menentukan alamat tujuan tautan.\n\n```html\n<a href=\"https://kodeluma.dev\">Kunjungi KodeLuma</a>\n```\n\n---\n\n### 2. Link Absolut vs Link Relatif\n\n- **Link Absolut**: Menggunakan URL lengkap termasuk protokol (`https://`). Digunakan untuk mengarah ke website eksternal.\n  ```html\n  <a href=\"https://www.w3schools.com\" target=\"_blank\" rel=\"noopener noreferrer\">Belajar di W3Schools</a>\n  ```\n- **Link Relatif**: Mengarah ke file lokal di dalam proyek websitemu sendiri tanpa menyertakan domain.\n  ```html\n  <!-- Mengarah ke file kontak di folder yang sama -->\n  <a href=\"kontak.html\">Hubungi Kami</a>\n\n  <!-- Mengarah ke halaman di dalam sub-folder -->\n  <a href=\"artikel/belajar-html.html\">Baca Artikel</a>\n  ```\n\n---\n\n### 3. Membuka di Tab Baru: Atribut `target=\"_blank\"`\n\nKetika kamu ingin pengunjung tetap membuka website-mu saat mengklik tautan eksternal, tambahkan atribut `target=\"_blank\"`.\nSelalu pasangkan dengan `rel=\"noopener noreferrer\"` untuk keamanan dari celah eksploitasi *tab-nabbing*.\n\n```html\n<a href=\"https://github.com\" target=\"_blank\" rel=\"noopener noreferrer\">\n  Repositori GitHub (Buka di Tab Baru)\n</a>\n```\n\n---\n\n### 4. Tautan Bookmark Seksi (ID Anchor)\n\nKamu bisa membuat tautan yang langsung melompat ke bagian bawah halaman tertentu dengan menggunakan atribut `id`:\n\n```html\n<!-- Tombol pemicu -->\n<a href=\"#testimoni\">Loncat ke Seksi Testimoni</a>\n\n<!-- Konten di bagian bawah -->\n<div style=\"height: 600px;\">Konten panjang...</div>\n\n<section id=\"testimoni\">\n  <h2>Apa Kata Mereka?</h2>\n  <p>\"Platform belajar terbaik!\"</p>\n</section>\n```\n\n---\n\n### 5. Link Email dan Telepon\n```html\n<a href=\"mailto:halo@kodeluma.dev\">Kirim Email</a>\n<a href=\"tel:+628123456789\">Telepon Customer Support</a>\n```"
    },
    {
      "id": "lesson-html-04",
      "courseId": "course-html-01",
      "slug": "gambar-dan-multimedia",
      "title": "4. Gambar & Media Multimedia",
      "summary": "Menyematkan gambar dengan tag img, atribut alt, format modern, serta audio dan video interaktif.",
      "order": 4,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Menyematkan Media Visual & Audio\n\nSebuah halaman web tanpa media visual akan terasa membosankan. HTML menyediakan elemen khusus untuk menyematkan gambar, video, dan rekaman suara secara efisien.\n\n---\n\n### 1. Menyematkan Gambar dengan Tag `<img>`\n\nTag `<img>` adalah elemen *empty tag* (tidak memiliki tag penutup terpisah).\n\n```html\n<img src=\"/brand/kodeluma-icon.png\" alt=\"Logo Resmi KodeLuma\" width=\"200\" height=\"200\" loading=\"lazy\">\n```\n\n#### Atribut Wajib & Rekomendasi:\n1. **`src`** (*source*): Lokasi file gambar (bisa URL online atau path lokal).\n2. **`alt`** (*alternative text*): **Wajib diisi!** Teks ini ditampilkan jika gambar gagal dimuat, dibaca oleh *screen reader* bagi tunanetra, dan sangat krusial untuk SEO Google.\n3. **`width` & `height`**: Mengalokasikan dimensi gambar agar halaman tidak bergeser saat dimuat (*mencegah Cumulative Layout Shift*).\n4. **`loading=\"lazy\"`**: Mengoptimalkan performa web dengan hanya memuat gambar saat pengunjung menggulir mendekati posisi gambar.\n\n---\n\n### 2. Mengelompokkan Gambar dengan `<figure>` dan `<figcaption>`\n\nStandar HTML5 merekomendasikan pembungkus semantik untuk gambar yang memiliki takarir (*caption*):\n\n```html\n<figure>\n  <img src=\"/images/cloud-architecture.png\" alt=\"Diagram Klaster Server Docker Swarm\" width=\"500\">\n  <figcaption>Gambar 1.1: Arsitektur Cloud Platform KodeLuma.</figcaption>\n</figure>\n```\n\n---\n\n### 3. Pemutar Video HTML5 (`<video>`)\n\nKamu bisa memutar video langsung tanpa bergantung pada plugin pihak ketiga:\n\n```html\n<video controls width=\"640\" poster=\"/images/video-thumbnail.jpg\">\n  <source src=\"/videos/tutorial-coding.mp4\" type=\"video/mp4\">\n  <source src=\"/videos/tutorial-coding.webm\" type=\"video/webm\">\n  Browser Anda tidak mendukung pemutar video HTML5.\n</video>\n```\n- Atribut `controls`: Menampilkan tombol play, pause, volume, dan fullscreen.\n- Atribut `poster`: Gambar pratinjau (*thumbnail*) sebelum video diputar.\n\n---\n\n### 4. Pemutar Audio HTML5 (`<audio>`)\n\n```html\n<audio controls>\n  <source src=\"/audio/podcast-episode-1.mp3\" type=\"audio/mpeg\">\n  Browser Anda tidak mendukung pemutar audio.\n</audio>\n```"
    },
    {
      "id": "lesson-html-05",
      "courseId": "course-html-01",
      "slug": "list-terurut-dan-tak-terurut",
      "title": "5. List Terurut & Tidak Terurut (Lists)",
      "summary": "Menyusun poin informasi dengan ul, ol, li, nested lists, dan definition list (dl, dt, dd).",
      "order": 5,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Mengorganisir Informasi dengan Daftar (Lists)\n\nDaftar digunakan untuk mengelompokkan sekumpulan item terkait. Di HTML, menu navigasi website hampir selalu dibangun menggunakan elemen daftar.\n\n---\n\n### 1. Unordered List (Daftar Poin / Bullet: `<ul>`)\n\nDigunakan ketika urutan item tidak memiliki prioritas numerik (urutan bebas):\n\n```html\n<ul>\n  <li>HTML5 (Struktur)</li>\n  <li>CSS3 (Gaya & Tampilan)</li>\n  <li>JavaScript (Logika Interaktif)</li>\n  <li>TypeScript (Type-Safety)</li>\n</ul>\n```\n\n---\n\n### 2. Ordered List (Daftar Bernomor: `<ol>`)\n\nDigunakan untuk tahapan langkah, resep, atau urutan peringkat yang wajib urut:\n\n```html\n<ol>\n  <li>Unduh dan instal VS Code editor.</li>\n  <li>Instal Node.js versi LTS terbaru.</li>\n  <li>Buka terminal dan jalankan <code>npm run dev</code>.</li>\n</ol>\n```\n\n#### Atribut Tambahan `<ol>`:\n- `type=\"A\"`: Menggunakan huruf besar (A, B, C...).\n- `type=\"i\"`: Menggunakan angka romawi kecil (i, ii, iii...).\n- `start=\"5\"`: Memulai penomoran dari angka 5.\n- `reversed`: Membalik urutan angka (countdown: 3, 2, 1).\n\n---\n\n### 3. Daftar Bersarang (Nested Lists)\n\nKamu bisa memasukkan daftar lain di dalam elemen `<li>`:\n\n```html\n<ul>\n  <li>Front-End Development\n    <ul>\n      <li>React.js</li>\n      <li>Next.js</li>\n    </ul>\n  </li>\n  <li>Back-End Development\n    <ul>\n      <li>Node.js</li>\n      <li>Go (Golang)</li>\n    </ul>\n  </li>\n</ul>\n```\n\n---\n\n### 4. Description List (`<dl>`, `<dt>`, `<dd>`)\n\nDigunakan untuk glosarium istilah dan definisinya:\n\n```html\n<dl>\n  <dt><strong>API</strong></dt>\n  <dd>Application Programming Interface: jembatan komunikasi antar aplikasi.</dd>\n  \n  <dt><strong>DOM</strong></dt>\n  <dd>Document Object Model: representasi objek pohon elemen HTML di memori browser.</dd>\n</dl>\n```"
    },
    {
      "id": "lesson-html-06",
      "courseId": "course-html-01",
      "slug": "tabel-data-html",
      "title": "6. Tabel Data & Struktur Terorganisir",
      "summary": "Membuat tabel perbandingan dan data dengan table, thead, tbody, tr, th, td, colspan, dan rowspan.",
      "order": 6,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Menampilkan Data Terstruktur dengan Tabel\n\nTabel di HTML digunakan untuk menampilkan data tabular (seperti daftar harga, jadwal, laporan nilai, atau statistik), bukan untuk mendesain tata letak halaman web.\n\n---\n\n### 1. Struktur Lengkap Tabel Modern\n\nStandar HTML5 membagi tabel menjadi tiga bagian utama: `<thead>` (kepala tabel), `<tbody>` (isi tabel), dan `<tfoot>` (ringkasan/footer).\n\n```html\n<table border=\"1\" cellpadding=\"8\" cellspacing=\"0\">\n  <thead>\n    <tr>\n      <th>No</th>\n      <th>Nama Kursus</th>\n      <th>Level</th>\n      <th>Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>1</td>\n      <td>HTML Dasar</td>\n      <td>Pemula</td>\n      <td>Tersedia</td>\n    </tr>\n    <tr>\n      <td>2</td>\n      <td>CSS Fundamental</td>\n      <td>Pemula</td>\n      <td>Tersedia</td>\n    </tr>\n    <tr>\n      <td>3</td>\n      <td>JavaScript Lanjutan</td>\n      <td>Menengah</td>\n      <td>Segera</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td colspan=\"3\"><strong>Total Kursus Aktif</strong></td>\n      <td><strong>2 Kursus</strong></td>\n    </tr>\n  </tfoot>\n</table>\n```\n\n---\n\n### Penjelasan Elemen Tabel:\n- **`<table>`**: Kontainer pembungkus tabel.\n- **`<tr>`** (*Table Row*): Baris horizontal dalam tabel.\n- **`<th>`** (*Table Header*): Sel judul kolom (otomatis tebal dan rata tengah).\n- **`<td>`** (*Table Data*): Sel data isi tabel.\n\n---\n\n### 2. Menggabungkan Kolom & Baris (`colspan` & `rowspan`)\n\n- **`colspan=\"2\"`**: Menggabungkan 2 atau lebih kolom horizontal menjadi satu sel lebar.\n- **`rowspan=\"2\"`**: Menggabungkan 2 atau lebih baris vertikal menjadi satu sel tinggi.\n\n```html\n<table border=\"1\" cellpadding=\"6\">\n  <tr>\n    <th rowspan=\"2\">Siswa</th>\n    <th colspan=\"2\">Nilai Evaluasi</th>\n  </tr>\n  <tr>\n    <th>Teori</th>\n    <th>Praktik</th>\n  </tr>\n  <tr>\n    <td>Azzam</td>\n    <td>95</td>\n    <td>98</td>\n  </tr>\n</table>\n```"
    },
    {
      "id": "lesson-html-07",
      "courseId": "course-html-01",
      "slug": "formulir-dan-elemen-input",
      "title": "7. Formulir Interaktif & Validasi Input",
      "summary": "Membangun formulir registrasi dan kontak dengan form, label, input, select, textarea, dan validasi bawaan.",
      "order": 7,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Formulir Input Pengguna (Forms)\n\nFormulir adalah cara utama website berinteraksi dua arah dengan pengguna: untuk mendaftar akun, login, mengirim kritik/saran, hingga transaksi pembelian.\n\n---\n\n### 1. Struktur Formulir & Atribut Penting\n\n```html\n<form action=\"/api/v1/auth/register\" method=\"POST\">\n  <!-- Elemen input berada di sini -->\n</form>\n```\n- **`action`**: Alamat server endpoint yang akan memproses data.\n- **`method`**: Metode transmisi HTTP (`GET` untuk pencarian publik, `POST` untuk data rahasia seperti pendaftaran/password).\n\n---\n\n### 2. Pasangan `<label>` dan `<input>` (Aksesibilitas)\n\nSelalu hubungkan atribut `for` pada label dengan atribut `id` pada input. Ketika pengguna mengklik teks label, kursor akan otomatis fokus ke dalam kolom input!\n\n```html\n<div>\n  <label for=\"namaLengkap\">Nama Lengkap:</label>\n  <input type=\"text\" id=\"namaLengkap\" name=\"fullname\" placeholder=\"Contoh: Budi Santoso\" required>\n</div>\n\n<div>\n  <label for=\"alamatEmail\">Alamat Email:</label>\n  <input type=\"email\" id=\"alamatEmail\" name=\"email\" placeholder=\"nama@email.com\" required>\n</div>\n\n<div>\n  <label for=\"kataSandi\">Kata Sandi:</label>\n  <input type=\"password\" id=\"kataSandi\" name=\"password\" minlength=\"8\" required>\n</div>\n```\n\n---\n\n### 3. Ragam Tipe Input Populer\n\n| Tipe Input | Tampilan & Kegunaan |\n| :--- | :--- |\n| `type=\"text\"` | Input teks umum satu baris |\n| `type=\"email\"` | Input email (otomatis memvalidasi karakter `@`) |\n| `type=\"password\"` | Karakter disamarkan dengan bulatan hitam |\n| `type=\"number\"` | Input numerik dengan tombol panah naik/turun (`min`, `max`) |\n| `type=\"date\"` | Kalender pemilih tanggal bawaan sistem |\n| `type=\"checkbox\"` | Kotak centang (pilihan jamak / persetujuan S&K) |\n| `type=\"radio\"` | Tombol opsi bulat (hanya 1 opsi dari grup bernama sama) |\n| `type=\"file\"` | Tombol upload berkas dari komputer pengguna |\n\n---\n\n### 4. Pilihan Dropdown (`<select>`) & Teks Panjang (`<textarea>`)\n\n```html\n<!-- Dropdown Pilihan -->\n<label for=\"jalurBelajar\">Pilih Jalur Belajar:</label>\n<select id=\"jalurBelajar\" name=\"track\">\n  <option value=\"frontend\">Front-End Developer</option>\n  <option value=\"backend\">Back-End Developer</option>\n  <option value=\"fullstack\">Full-Stack Developer</option>\n</select>\n\n<!-- Teks Panjang -->\n<label for=\"pesan\">Pesan Tambahan:</label>\n<textarea id=\"pesan\" name=\"message\" rows=\"4\" cols=\"50\" placeholder=\"Tuliskan catatan...\"></textarea>\n\n<!-- Tombol Submit -->\n<button type=\"submit\">Daftar Sekarang</button>\n```"
    },
    {
      "id": "lesson-html-08",
      "courseId": "course-html-01",
      "slug": "semantic-html5-aksesibilitas",
      "title": "8. Semantic HTML5 & Aksesibilitas Web",
      "summary": "Menerapkan tag semantik header, nav, main, section, article, footer untuk struktur halaman profesional.",
      "order": 8,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Mengapa Semantic HTML Sangat Penting?\n\nPada era HTML lawas, hampir semua website dibangun hanya dengan `<div id=\"header\">`, `<div class=\"menu\">`, dan ratusan tag `<div>` yang tidak memiliki arti.\nHTML5 memperkenalkan **Semantic Elements**: tag yang secara eksplisit mendeskripsikan perannya kepada browser, robot mesin pencari Google, dan pembaca layar tunanetra.\n\n---\n\n### 1. Peta Anatomi Halaman Web Semantik\n\n```html\n<!DOCTYPE html>\n<html lang=\"id\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>Blog Belajar Coding</title>\n  </head>\n  <body>\n\n    <!-- Header: Bagian atas halaman, memuat logo dan menu utama -->\n    <header>\n      <img src=\"/brand/logo.png\" alt=\"Logo KodeLuma\">\n      <nav aria-label=\"Navigasi Utama\">\n        <ul>\n          <li><a href=\"/\">Beranda</a></li>\n          <li><a href=\"/courses\">Kursus</a></li>\n          <li><a href=\"/forum\">Komunitas</a></li>\n        </ul>\n      </nav>\n    </header>\n\n    <!-- Main: Area konten utama yang unik untuk halaman ini -->\n    <main>\n      \n      <!-- Article: Konten mandiri yang bisa berdiri sendiri (artikel/posting blog) -->\n      <article>\n        <h1>Cara Memulai Karir Sebagai Web Developer</h1>\n        <p class=\"meta\">Dipublikasikan pada 15 Oktober 2026 oleh Tim KodeLuma</p>\n        \n        <section>\n          <h2>Langkah 1: Kuasai HTML dan CSS</h2>\n          <p>Mulailah dengan memahami pondasi dasar sebelum beralih ke framework.</p>\n        </section>\n        \n        <section>\n          <h2>Langkah 2: Pelajari JavaScript Modern</h2>\n          <p>Pahami logika pemrograman, manipulasi DOM, dan asynchronous fetch.</p>\n        </section>\n      </article>\n\n      <!-- Aside: Konten sampingan / sidebar yang berkaitan secara tidak langsung -->\n      <aside>\n        <h3>Artikel Populer Lainnya</h3>\n        <ul>\n          <li><a href=\"#\">10 CSS Tricks Terbaik</a></li>\n          <li><a href=\"#\">Roadmap Front-End 2026</a></li>\n        </ul>\n      </aside>\n\n    </main>\n\n    <!-- Footer: Bagian bawah halaman, hak cipta, dan link legal -->\n    <footer>\n      <p>&copy; 2026 KodeLuma. Seluruh hak cipta dilindungi undang-undang.</p>\n    </footer>\n\n  </body>\n</html>\n```\n\n---\n\n### 2. Manfaat Langsung untuk Proyekmu\n1. **SEO (Search Engine Optimization)**: Google dapat langsung mengenali artikel utama di dalam tag `<article>` dan mengabaikan menu navigasi sampingan.\n2. **Aksesibilitas (A11y)**: Penyandang disabilitas yang menggunakan *screen reader* dapat melompat langsung ke `<main>` tanpa harus mendengarkan pembacaan seluruh menu navigasi berulang kali.\n3. **Keterbacaan Tim (Maintainability)**: Rekan kerja dan developer lain langsung paham fungsi masing-masing blok kode."
    }
  ],
  "course-css-02": [
    {
      "id": "lesson-css-01",
      "courseId": "course-css-02",
      "slug": "pengenalan-sintaks-css",
      "title": "1. Sintaks CSS & 3 Cara Menghubungkan",
      "summary": "Memahami anatomi rule CSS, selector, properti, nilai, dan 3 metode integrasi ke dokumen HTML.",
      "order": 1,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Mengenal CSS (Cascading Style Sheets)\n\nJika HTML adalah kerangka tulang bangunan rumah, maka CSS adalah cat dinding, jendela kaca, dekorasi interior, tata letak ruangan, dan keindahan estetika rumah tersebut.\n\n---\n\n### 1. Anatomi Sintaks CSS\n\nSebuah aturan (*CSS Rule*) terdiri dari **Selector** dan **Declaration Block**:\n\n```css\nh1 {\n  color: #2563eb;\n  font-size: 32px;\n  text-align: center;\n}\n```\n- **Selector (`h1`)**: Menentukan elemen HTML mana yang ingin diubah gayanya.\n- **Declaration Block (`{ ... }`)**: Berisi satu atau lebih deklarasi yang dipisahkan oleh tanda titik koma (`;`).\n- **Property (`color`)**: Karakteristik gaya yang ingin diubah.\n- **Value (`#2563eb` / `32px` / `center`)**: Nilai setelan baru untuk properti tersebut.\n\n---\n\n### 2. Tiga Cara Menghubungkan CSS ke HTML\n\n#### Metode A: External CSS (Paling Direkomendasikan! ⭐)\nMenulis seluruh kode gaya di file berekstensi terpisah (`styles.css`), lalu menghubungkannya di dalam tag `<head>` HTML:\n\n```html\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n```\n\n#### Metode B: Internal CSS (Gaya Lokal Satu Halaman)\nMenulis kode CSS di dalam tag `<style>` di dalam seksi `<head>`:\n\n```html\n<head>\n  <style>\n    body {\n      background-color: #f8fafd;\n      font-family: Arial, sans-serif;\n    }\n  </style>\n</head>\n```\n\n#### Metode C: Inline CSS (Langsung pada Tag Elemen)\nMenggunakan atribut `style` langsung pada elemen. Hanya gunakan untuk uji coba cepat karena sulit dikelola:\n\n```html\n<h1 style=\"color: red; font-size: 20px;\">Judul Merah</h1>\n```\n\n---\n\n### 💡 Mengapa Dinamakan \"Cascading\"?\nGaya mengalir dari atas ke bawah. Jika terdapat dua aturan yang menargetkan elemen yang sama dengan bobot spesifisitas sama, aturan yang dideklarasikan **paling akhir** akan menang dan menimpa aturan sebelumnya."
    },
    {
      "id": "lesson-css-02",
      "courseId": "course-css-02",
      "slug": "css-selectors-lengkap",
      "title": "2. CSS Selectors Lengkap & Spesifisitas",
      "summary": "Menguasai class, ID, element, grouping, descendant combinator, dan pseudo-classes :hover dan :nth-child.",
      "order": 2,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Menargetkan Elemen dengan Tepat\n\nUntuk dapat mengubah gaya suatu elemen di halaman web, kamu harus tahu cara memilih (*select*) elemen tersebut secara presisi.\n\n---\n\n### 1. Macam-Macam Selector Dasar\n\n#### a. Element / Type Selector\nMenargetkan seluruh elemen dengan nama tag tertentu:\n```css\np {\n  line-height: 1.6;\n  color: #334155;\n}\n```\n\n#### b. Class Selector (Awali dengan tanda titik `.`)\nDapat digunakan berulang kali pada banyak elemen berbeda:\n```css\n.btn-primary {\n  background-color: #2563eb;\n  color: white;\n  border-radius: 8px;\n}\n```\n```html\n<button class=\"btn-primary\">Daftar</button>\n<a href=\"#\" class=\"btn-primary\">Mulai Belajar</a>\n```\n\n#### c. ID Selector (Awali dengan tanda pagar `#`)\nBersifat unik dan hanya boleh digunakan **1 kali per halaman**:\n```css\n#navbar-utama {\n  position: sticky;\n  top: 0;\n}\n```\n\n---\n\n### 2. Combinator Selectors\n\n- **Grouping Selector (Koma `,`)**: Menerapkan gaya sama ke banyak elemen sekaligus:\n  ```css\n  h1, h2, h3 {\n    font-family: 'Plus Jakarta Sans', sans-serif;\n  }\n  ```\n- **Descendant Selector (Spasi ` `)**: Menargetkan anak atau cucu di dalam suatu kontainer:\n  ```css\n  .artikel-konten p {\n    margin-bottom: 16px;\n  }\n  ```\n- **Direct Child Selector (`>`)**: Hanya menargetkan anak langsung tingkat pertama:\n  ```css\n  ul > li {\n    list-style-type: square;\n  }\n  ```\n\n---\n\n### 3. Pseudo-Classes Interaktif\n\nPseudo-class digunakan untuk memberi gaya saat elemen berada dalam status tertentu (seperti saat kursor mouse melayang di atasnya):\n\n```css\n/* Ketika kursor mouse diarahkan ke tombol */\n.btn-primary:hover {\n  background-color: #1d4ed8;\n  transform: translateY(-2px);\n}\n\n/* Ketika input sedang aktif/diketik pengguna */\ninput:focus {\n  border-color: #2563eb;\n  outline: 2px solid rgba(37, 99, 235, 0.2);\n}\n\n/* Memberi warna selang-seling pada baris tabel */\ntr:nth-child(even) {\n  background-color: #f1f5f9;\n}\n```"
    },
    {
      "id": "lesson-css-03",
      "courseId": "course-css-02",
      "slug": "warna-background-tipografi",
      "title": "3. Warna, Background & Tipografi",
      "summary": "Memahami format warna HEX, RGB, HSL, background styling, dan mengatur tipografi proporsional.",
      "order": 3,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Mempercantik Tampilan Visual: Warna & Font\n\nWarna dan tipografi adalah dua komponen visual utama yang menentukan identitas dan kenyamanan membaca pengguna di website-mu.\n\n---\n\n### 1. Format Warna di CSS\n\nAda 4 cara utama mendefinisikan warna di CSS:\n\n```css\n/* 1. Nama Warna Bawaan */\ncolor: dodgerblue;\n\n/* 2. Format HEX (Paling Populer di Industri) */\ncolor: #2563eb; \n\n/* 3. Format RGB & RGBA (dengan transparansi alpha 0 sampai 1) */\ncolor: rgb(37, 99, 235);\nbackground-color: rgba(37, 99, 235, 0.1); /* Transparan 10% */\n\n/* 4. Format HSL (Hue, Saturation, Lightness) */\ncolor: hsl(221, 83%, 53%);\n```\n\n---\n\n### 2. Properti Background Modern\n\n```css\n.hero-banner {\n  background-color: #10243a;\n  background-image: url('/images/grid-pattern.svg');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover; /* Memastikan background memenuhi area kontainer */\n}\n\n/* Background Gradasi Mewah (CSS Gradient) */\n.cta-box {\n  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);\n  color: white;\n}\n```\n\n---\n\n### 3. Mengatur Tipografi & Teks\n\n```css\nbody {\n  font-family: 'Inter', system-ui, -apple-system, sans-serif;\n  font-size: 16px;          /* Ukuran dasar teks */\n  line-height: 1.6;         /* Jarak antar baris kalimat (sangat penting untuk kenyamanan baca) */\n  color: #1e293b;           /* Hindari hitam pekat murni (#000), gunakan slate dark */\n}\n\nh1 {\n  font-family: 'Plus Jakarta Sans', sans-serif;\n  font-weight: 700;         /* Ketebalan: 400 normal, 600 semibold, 700 bold */\n  letter-spacing: -0.025em; /* Kerning huruf */\n  text-align: center;       /* left, center, right, justify */\n  text-transform: capitalize;\n}\n```"
    },
    {
      "id": "lesson-css-04",
      "courseId": "course-css-02",
      "slug": "css-box-model",
      "title": "4. CSS Box Model (Padding, Border, Margin)",
      "summary": "Memahami anatomi Box Model, selisih padding vs margin, dan wajibnya box-sizing border-box.",
      "order": 4,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Jantung Tata Letak Web: CSS Box Model\n\nDi browser, **setiap elemen HTML dianggap sebagai sebuah kotak persegi empat**. Memahami bagaimana kotak ini mengukur ukurannya adalah kunci utama menguasai CSS.\n\n---\n\n### 1. 4 Lapisan Box Model (Dari Dalam ke Luar)\n\n```\n+---------------------------+\n|          MARGIN           |  <- Jarak luar ke elemen tetangga\n|  +---------------------+  |\n|  |       BORDER        |  |  <- Garis tepi pembatas\n|  |  +---------------+  |  |\n|  |  |    PADDING    |  |  |  <- Jarak ruang dalam antara konten dan border\n|  |  |  +---------+  |  |  |\n|  |  |  | CONTENT |  |  |  |  <- Tempat teks, gambar, atau isi elemen\n|  |  |  +---------+  |  |  |\n|  |  +---------------+  |  |\n|  +---------------------+  |\n+---------------------------+\n```\n\n- **Content**: Area inti tempat teks atau gambar berada.\n- **Padding**: Ruang nafas bagian dalam antara konten dan garis border.\n- **Border**: Bingkai atau garis tepi yang mengelilingi padding.\n- **Margin**: Jarak kosong bagian luar yang memisahkan elemen ini dari elemen-elemen di sekitarnya.\n\n---\n\n### 2. Notasi Singkat (Shorthand Clockwise: Atas, Kanan, Bawah, Kiri)\n\n```css\n/* 4 nilai: Atas, Kanan, Bawah, Kiri (Searah Jarum Jam) */\npadding: 10px 20px 15px 5px;\n\n/* 2 nilai: [Atas & Bawah] [Kanan & Kiri] */\npadding: 12px 24px;\n\n/* Menengahkan elemen blok secara horizontal */\nmargin: 0 auto;\n```\n\n---\n\n### 3. Penyelamat Developer: `box-sizing: border-box`\n\nSecara *default*, browser menggunakan `box-sizing: content-box`. Jika elemen memiliki `width: 200px` lalu kamu menambahkan `padding: 20px` dan `border: 2px`, maka lebar total elemen akan membengkak menjadi **244px**! Ini sering membuat layout pecah.\n\nDengan `box-sizing: border-box`, lebar total tetap **200px** karena padding dan border dihitung ke dalam!\n\n```css\n/* Trik CSS Reset Global: Selalu pasang ini di awal file CSS-mu! */\n*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n```"
    },
    {
      "id": "lesson-css-05",
      "courseId": "course-css-02",
      "slug": "display-dan-positioning",
      "title": "5. Display & Positioning (Tata Letak Elemen)",
      "summary": "Perbedaan block vs inline, dan menguasai static, relative, absolute, fixed, sticky, serta z-index.",
      "order": 5,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Mengatur Posisi dan Alur Elemen\n\nProperti `display` dan `position` menentukan bagaimana suatu elemen berinteraksi dengan alur dokumen (*normal document flow*).\n\n---\n\n### 1. Karakteristik Nilai `display`\n\n- **`display: block`**: Mengambil 100% lebar layar dan selalu memaksa elemen berikutnya turun ke baris baru (contoh default: `<div>`, `<p>`, `<h1>`).\n- **`display: inline`**: Hanya mengambil lebar selebar kontennya, tidak membuat baris baru, serta **tidak bisa** diberi `width` atau `height` (contoh default: `<span>`, `<a>`, `<strong>`).\n- **`display: inline-block`**: Mengalir horizontal seperti inline, namun **bisa diatur** `width`, `height`, dan `padding`-nya (bagus untuk tombol).\n- **`display: none`**: Menghilangkan elemen sepenuhnya dari layar dan tidak memakan ruang sama sekali.\n\n---\n\n### 2. Menguasai Properti `position`\n\n| Nilai Position | Cara Kerja & Karakteristik |\n| :--- | :--- |\n| **`static`** | Posisi bawaan browser. Mengikuti alur normal dokumen. Properti top/left/right/bottom tidak berfungsi. |\n| **`relative`** | Bergeser relatif dari posisi aslinya tanpa mengganggu ruang elemen lain. Berfungsi sebagai **jangkar induk** untuk absolute. |\n| **`absolute`** | Lepas dari alur dokumen normal. Menempel relatif terhadap elemen induk terdekat yang memiliki `position: relative`. |\n| **`fixed`** | Mengunci posisi relatif terhadap jendela layar browser (*viewport*). Tetap diam saat halaman di-scroll (contoh: tombol chat WhatsApp). |\n| **`sticky`** | Berjalan normal saat di-scroll, namun otomatis menempel saat mencapai batas offset tertentu (contoh: sticky navbar). |\n\n---\n\n### 3. Contoh Praktik: Kartu dengan Badge Diskon Absolute\n\n```html\n<div class=\"card\">\n  <span class=\"badge-diskon\">PROMO -50%</span>\n  <img src=\"produk.jpg\" alt=\"Sepatu\">\n  <h3>Sepatu Sneakers</h3>\n</div>\n```\n\n```css\n.card {\n  position: relative; /* Jangkar patokan */\n  width: 280px;\n  border-radius: 12px;\n  overflow: hidden;\n}\n\n.badge-diskon {\n  position: absolute; /* Lepas dan menempel di pojok kanan atas kartu */\n  top: 12px;\n  right: 12px;\n  background-color: #ef4444;\n  color: white;\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: bold;\n  z-index: 10; /* Mengatur tumpukan lapisan agar berada di atas gambar */\n}\n```"
    },
    {
      "id": "lesson-css-06",
      "courseId": "course-css-02",
      "slug": "flexbox-layout-modern",
      "title": "6. Flexbox: Layout 1-Dimensi Modern",
      "summary": "Membangun tata letak baris dan kolom yang fleksibel dengan flex container, justify-content, dan align-items.",
      "order": 6,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Revolusi Tata Letak: CSS Flexbox\n\nSebelum ada Flexbox, developer web harus bersusah payah menggunakan trik `float` dan `clear` yang rentan rusak. Flexbox (**Flexible Box Layout**) dirancang untuk menata elemen dalam **satu dimensi** (baik berupa baris horizontal maupun kolom vertikal) secara rapi dan otomatis.\n\n---\n\n### 1. Mengaktifkan Flexbox: Flex Container\n\nCukup tambahkan `display: flex` pada elemen induk:\n\n```css\n.navbar {\n  display: flex;\n  justify-content: space-between; /* Memisahkan logo di kiri dan menu di kanan */\n  align-items: center;            /* Menengahkan elemen secara vertikal sejajar */\n  gap: 16px;                      /* Jarak antar item tanpa perlu margin */\n}\n```\n\n---\n\n### 2. Properti Sumbu Utama (`justify-content`)\n\nMengatur perataan item di sepanjang sumbu utama (*main axis / horizontal*):\n- `flex-start`: Menumpuk di awal (kiri).\n- `center`: Menengahkan semua item.\n- `flex-end`: Menumpuk di akhir (kanan).\n- `space-between`: Item pertama di paling kiri, item terakhir di paling kanan, sisa ruang dibagi rata di antaranya.\n- `space-around` & `space-evenly`: Membagikan ruang kosong secara merata di sekeliling item.\n\n---\n\n### 3. Properti Sumbu Silang (`align-items`)\n\nMengatur perataan vertikal (*cross axis*):\n- `center`: Menengahkan secara vertikal (sangat ampuh untuk mengatasi masalah klasik *\"cara menengahkan teks vertikal di CSS\"*!).\n- `stretch` (default): Menarik tinggi item agar sama tinggi dengan kontainer.\n- `flex-start` & `flex-end`: Meratakan ke atas atau ke bawah.\n\n---\n\n### 4. Membungkus Item ke Baris Baru (`flex-wrap`)\n\nSecara default, flexbox akan memaksakan semua item berada dalam satu baris (`nowrap`). Untuk grid produk yang responsif:\n\n```css\n.product-grid {\n  display: flex;\n  flex-wrap: wrap; /* Izinkan turun ke baris baru jika layar sempit */\n  gap: 20px;\n}\n\n.product-card {\n  flex: 1 1 250px; /* Tumbuh fleksibel dengan ukuran dasar minimal 250px */\n}\n```"
    },
    {
      "id": "lesson-css-07",
      "courseId": "course-css-02",
      "slug": "css-grid-dasar",
      "title": "7. CSS Grid: Tata Letak 2-Dimensi Kuat",
      "summary": "Mendesain grid baris dan kolom simultan dengan fr units, repeat(), gap, dan auto-fit responsif.",
      "order": 7,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Desain 2-Dimensi Nyata dengan CSS Grid\n\nJika Flexbox ideal untuk tata letak 1 dimensi (satu baris atau satu kolom), maka **CSS Grid** adalah raja tata letak **2 dimensi** (mengatur baris dan kolom secara bersamaan).\n\n---\n\n### 1. Membuat Grid Dasar\n\n```css\n.gallery {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr; /* 3 kolom dengan lebar seimbang (Fractional unit) */\n  gap: 24px;                           /* Jarak antar kolom dan baris */\n}\n```\n\nAtau menggunakan fungsi `repeat()`:\n```css\n/* Membuat 4 kolom sama besar */\ngrid-template-columns: repeat(4, 1fr);\n```\n\n---\n\n### 2. Menggabungkan Sel Grid (`grid-column` & `grid-row`)\n\nKamu bisa membuat elemen tertentu membentang di beberapa kolom layaknya kartu unggulan (*featured card*):\n\n```css\n.featured-card {\n  grid-column: span 2; /* Kartu ini membentang selebar 2 kolom */\n}\n```\n\n---\n\n### 3. Grid Responsif Ajaib Tanpa Media Query! ⭐\n\nIni adalah salah satu teknik CSS Grid paling terkenal di dunia:\n\n```css\n.auto-responsive-grid {\n  display: grid;\n  /* Otomatis menambah atau mengurangi jumlah kolom sesuai lebar layar */\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 20px;\n}\n```\n- Di layar monitor lebar: Menampilkan 4 atau 5 kolom.\n- Di layar tablet: Otomatis berubah menjadi 2 kolom.\n- Di layar ponsel: Otomatis berubah menjadi 1 kolom penuh tanpa perlu menulis satu baris pun `@media query`!"
    },
    {
      "id": "lesson-css-08",
      "courseId": "course-css-02",
      "slug": "responsive-web-media-queries",
      "title": "8. Desain Responsif & Media Queries",
      "summary": "Menyesuaikan tampilan web di desktop, tablet, dan smartphone dengan mobile-first breakpoint.",
      "order": 8,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Responsive Web Design (RWD)\n\nLebih dari 60% pengguna internet mengakses website melalui smartphone. Halaman web yang hebat harus mampu beradaptasi dengan anggun di layar smartphone (360px), tablet (768px), laptop (1280px), hingga monitor 4K.\n\n---\n\n### 1. Wajib: Meta Viewport di Dokumen HTML\n\nPastikan dokumen HTML memiliki tag ini di dalam `<head>`:\n```html\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n```\n\n---\n\n### 2. Cara Kerja Media Queries (`@media`)\n\nMedia Query memungkinkan kita menerapkan aturan CSS hanya ketika kondisi ukuran layar tertentu terpenuhi.\n\n```css\n/* Gaya Standar (Mobile-First / Layar Ponsel) */\n.sidebar {\n  display: none; /* Sembunyikan sidebar di layar kecil */\n}\n\n.container {\n  padding: 16px;\n}\n\n/* Ketika layar berukuran minimal 768px (Tablet & Desktop) */\n@media (min-width: 768px) {\n  .sidebar {\n    display: block; /* Munculkan kembali sidebar di layar lebar */\n    width: 260px;\n  }\n\n  .container {\n    padding: 32px;\n  }\n}\n\n/* Ketika layar berukuran minimal 1200px (Layar Besar) */\n@media (min-width: 1200px) {\n  .container {\n    max-width: 1140px;\n    margin: 0 auto;\n  }\n}\n```\n\n---\n\n### 3. Gambar & Media yang Selalu Fleksibel\nHindari memberi lebar gambar dengan nilai kaku seperti `width: 800px;` karena akan meluber (*overflow horizontal*) di layar ponsel. Gunakan selalu:\n\n```css\nimg {\n  max-width: 100%;\n  height: auto;\n  display: block;\n}\n```"
    }
  ],
  "course-js-03": [
    {
      "id": "lesson-js-01",
      "courseId": "course-js-03",
      "slug": "pengenalan-js-variabel",
      "title": "1. Pengenalan JavaScript, Console & Variabel",
      "summary": "Mengenal bahasa interaktivitas web, developer console, serta deklarasi let, const, dan var.",
      "order": 1,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Memberi Jiwa pada Website dengan JavaScript\n\nHTML memberi struktur, CSS memberi gaya, dan **JavaScript memberi logika, otak, dan interaktivitas**.\nDengan JavaScript, kamu bisa membuat pop-up modal, memvalidasi form langsung saat diketik, mengambil data cuaca dari API, hingga membuat animasi kompleks.\n\n---\n\n### 1. Mengakses Console Browser\n\nBuka browsermu, klik kanan di mana saja lalu pilih **Inspect (Periksa)**, dan buka tab **Console**.\nKetik kode ini dan tekan Enter:\n\n```javascript\nconsole.log(\"Halo dari Developer Console!\");\n```\n\nFungsi `console.log()` adalah sahabat terbaik programmer untuk mencetak nilai variabel dan men-debug aplikasi.\n\n---\n\n### 2. Deklarasi Variabel Modern: `let` vs `const`\n\nVariabel adalah wadah di memori komputer untuk menyimpan data.\n\n```javascript\n// 1. const (Konstanta): Nilainya TIDAK BISA diubah setelah ditetapkan\nconst namaPlatform = \"KodeLuma\";\nconst tahunRilis = 2026;\n\n// namaPlatform = \"PlatformLain\"; // ❌ Error: Assignment to constant variable\n\n// 2. let: Nilainya BISA diperbarui sewaktu-waktu\nlet skorSiswa = 0;\nskorSiswa = skorSiswa + 10; // ✅ Berhasil diperbarui menjadi 10\n```\n\n---\n\n### ⚠️ Mengapa Kita Menghindari `var`?\n`var` adalah cara lama (sebelum standar ES6 tahun 2015). `var` memiliki kelemahan *hoisting* dan *function scope* yang sering menimbulkan bug tak terduga.\n**Aturan Emas:** Selalu gunakan `const` secara default. Hanya gunakan `let` jika nilainya memang akan berubah di kemudian hari."
    },
    {
      "id": "lesson-js-02",
      "courseId": "course-js-03",
      "slug": "tipe-data-dan-operator",
      "title": "2. Tipe Data Primitif & Operator Aritmatika",
      "summary": "Memahami String, Number, Boolean, Null, Undefined, serta operasi matematika perhitungan dasar.",
      "order": 2,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Ragam Tipe Data di JavaScript\n\nJavaScript adalah bahasa *dynamically typed*, artinya kamu tidak perlu mendeklarasikan tipe data secara eksplisit saat membuat variabel.\n\n---\n\n### 1. Tipe Data Primitif Utama\n\n```javascript\n// a. String (Teks diapit tanda kutip)\nconst nama = \"Azzam\";\nconst pesan = `Halo, selamat datang ${nama}!`; // Template Literals dengan backtick (`)\n\n// b. Number (Angka bulat maupun desimal)\nconst umur = 20;\nconst harga = 49.99;\n\n// c. Boolean (Hanya dua kemungkinan: benar atau salah)\nconst sudahLulus = true;\nconst sedangBelajar = false;\n\n// d. Null (Nilai kosong yang sengaja dikosongkan)\nconst tokenAuth = null;\n\n// e. Undefined (Variabel yang sudah dibuat tapi belum diisi nilai)\nlet statusTugas;\nconsole.log(statusTugas); // Output: undefined\n```\n\nKamu bisa memeriksa tipe data dengan operator `typeof`:\n```javascript\nconsole.log(typeof nama); // \"string\"\nconsole.log(typeof umur); // \"number\"\nconsole.log(typeof sudahLulus); // \"boolean\"\n```\n\n---\n\n### 2. Operator Aritmatika Dasar\n\n```javascript\nconst a = 10;\nconst b = 3;\n\nconsole.log(a + b);  // Penjumlahan: 13\nconsole.log(a - b);  // Pengurangan: 7\nconsole.log(a * b);  // Perkalian: 30\nconsole.log(a / b);  // Pembagian: 3.333...\nconsole.log(a % b);  // Modulo (Sisa Bagi): 1 (karena 10 dibagi 3 sisa 1)\nconsole.log(a ** b); // Pangkat (10^3): 1000\n```\n\n---\n\n### 3. Penggabungan Teks (String Concatenation)\n```javascript\nconst depan = \"Azzam\";\nconst belakang = \"Codex\";\n// Cara modern: Template Literals\nconst lengkap = `${depan} ${belakang}`; \nconsole.log(lengkap); // \"Azzam Codex\"\n```"
    },
    {
      "id": "lesson-js-03",
      "courseId": "course-js-03",
      "slug": "operator-perbandingan-logika",
      "title": "3. Operator Perbandingan & Logika",
      "summary": "Perbedaan mendasar strict equality (===) vs loose (==), serta operator logika AND, OR, NOT.",
      "order": 3,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Membuat Keputusan Logika di Kode\n\nProgram komputer bekerja dengan mengevaluasi kondisi: apakah bernilai `true` (benar) atau `false` (salah).\n\n---\n\n### 1. Operator Perbandingan: Mengapa Wajib `===`?\n\nDi JavaScript, ada dua cara membandingkan kesamaan:\n- **Loose Equality (`==`)**: Membandingkan nilai setelah mencoba mengonversi tipe data secara otomatis (*type coercion*).\n- **Strict Equality (`===`)**: Membandingkan **nilai DAN tipe data** sekaligus tanpa kompromi!\n\n```javascript\nconsole.log(5 == \"5\");   // true (⚠️ Berbahaya: angka dianggap sama dengan string)\nconsole.log(5 === \"5\");  // false (✅ Aman: angka tidak sama dengan string!)\n\nconsole.log(10 !== 20);  // true (10 tidak sama dengan 20)\nconsole.log(15 > 10);    // true\nconsole.log(10 <= 10);   // true\n```\n\n> **Aturan W3Schools:** Selalu gunakan `===` dan `!==` untuk menghindari bug logika tersembunyi!\n\n---\n\n### 2. Operator Logika (Logical Operators)\n\n#### a. Logika AND (`&&`)\nBernilai `true` **hanya jika kedua kondisi** bernilai benar:\n```javascript\nconst punyaKTP = true;\nconst umur = 18;\n\nconst bolehBikinSIM = punyaKTP && umur >= 17;\nconsole.log(bolehBikinSIM); // true\n```\n\n#### b. Logika OR (`||`)\nBernilai `true` jika **salah satu saja** dari kondisi bernilai benar:\n```javascript\nconst punyaDiskonMember = false;\nconst punyaKuponPromo = true;\n\nconst dapatPotongan = punyaDiskonMember || punyaKuponPromo;\nconsole.log(dapatPotongan); // true\n```\n\n#### c. Logika NOT / Negasi (`!`)\nMembalikkan nilai boolean:\n```javascript\nconst sedangLoading = false;\nconsole.log(!sedangLoading); // true\n```"
    },
    {
      "id": "lesson-js-04",
      "courseId": "course-js-03",
      "slug": "percabangan-kondisional",
      "title": "4. Percabangan Kondisional (if, else & switch)",
      "summary": "Mengarahkan alur eksekusi aplikasi dengan blok if-else, switch-case, dan ternary operator.",
      "order": 4,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Percabangan Alur Program (Control Flow)\n\nPercabangan memungkinkan programmu mengambil jalur tindakan yang berbeda berdasarkan kondisi tertentu (misalnya: jika pengguna adalah admin, buka dashboard admin; jika bukan, tolak akses).\n\n---\n\n### 1. Struktur `if`, `else if`, dan `else`\n\n```javascript\nconst nilaiUjian = 85;\n\nif (nilaiUjian >= 90) {\n  console.log(\"Predikat: A (Istimewa)\");\n} else if (nilaiUjian >= 75) {\n  console.log(\"Predikat: B (Sangat Baik)\");\n} else if (nilaiUjian >= 60) {\n  console.log(\"Predikat: C (Cukup)\");\n} else {\n  console.log(\"Predikat: D (Perlu Remedial)\");\n}\n```\n\n---\n\n### 2. Operator Ternary (Percabangan Ringkas 1 Baris)\n\nSangat sering digunakan di React dan Next.js untuk merender teks kondisional:\n\n```javascript\n// Sintaks: kondisi ? nilaiJikaTrue : nilaiJikaFalse;\nconst role = \"admin\";\nconst akses = role === \"admin\" ? \"Buka Akses Penuh\" : \"Akses Terbatas\";\n\nconsole.log(akses); // \"Buka Akses Penuh\"\n```\n\n---\n\n### 3. Pernyataan `switch`\n\nSangat rapi digunakan ketika kamu memiliki satu variabel yang ingin dibandingkan dengan banyak nilai pasti:\n\n```javascript\nconst hari = \"Senin\";\n\nswitch (hari) {\n  case \"Senin\":\n    console.log(\"Fokus belajar HTML dasar!\");\n    break;\n  case \"Rabu\":\n    console.log(\"Latihan styling Flexbox!\");\n    break;\n  case \"Jumat\":\n    console.log(\"Eksplorasi DOM JavaScript!\");\n    break;\n  default:\n    console.log(\"Waktunya review proyek mandiri!\");\n}\n```"
    },
    {
      "id": "lesson-js-05",
      "courseId": "course-js-03",
      "slug": "perulangan-loops",
      "title": "5. Perulangan (Loops)",
      "summary": "Mengulang instruksi secara otomatis dengan for loop, while loop, dan memahami break serta continue.",
      "order": 5,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Otomatisasi dengan Perulangan (Loops)\n\nBayangkan kamu harus mencetak angka 1 sampai 100. Tanpa perulangan, kamu harus mengetik `console.log` 100 kali. Dengan loop, cukup 3 baris kode!\n\n---\n\n### 1. Struktur `for` Loop Klasik\n\n`for` loop terdiri dari 3 ekspresi:\n```javascript\n// for (inisialisasi; kondisi_jalan; perubahan_langkah)\nfor (let i = 1; i <= 5; i++) {\n  console.log(`Iterasi ke-${i}`);\n}\n```\n1. `let i = 1`: Memulai penghitung dari angka 1.\n2. `i <= 5`: Selama `i` kurang dari atau sama dengan 5, jalankan kode di dalam kurung kurawal.\n3. `i++`: Tambahkan nilai `i` sebanyak 1 setiap kali satu putaran selesai.\n\n---\n\n### 2. `while` Loop\n\nDijalankan selama kondisi bernilai `true`. Cocok saat kamu belum tahu pasti berapa kali perulangan harus berjalan:\n\n```javascript\nlet baterai = 3;\n\nwhile (baterai > 0) {\n  console.log(`Sisa daya baterai: ${baterai} bar`);\n  baterai--; // Jangan lupa kurangi agar tidak terjadi infinite loop!\n}\n```\n\n---\n\n### 3. Kata Kunci `break` dan `continue`\n\n- **`break`**: Menghentikan perulangan seketika dan keluar dari loop.\n- **`continue`**: Melewati sisa kode pada putaran saat ini dan langsung lompat ke putaran berikutnya.\n\n```javascript\nfor (let i = 1; i <= 10; i++) {\n  if (i === 4) {\n    continue; // Lewati angka 4 (tidak dicetak)\n  }\n  if (i === 8) {\n    break;    // Berhenti total saat mencapai angka 8\n  }\n  console.log(i); // Mencetak: 1, 2, 3, 5, 6, 7\n}\n```"
    },
    {
      "id": "lesson-js-06",
      "courseId": "course-js-03",
      "slug": "fungsi-dan-arrow-functions",
      "title": "6. Fungsi & Arrow Functions",
      "summary": "Membungkus logika yang dapat digunakan kembali dengan function declaration, parameter, return, dan arrow function.",
      "order": 6,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Membangun Blok Kode yang Reusable: Functions\n\nFungsi adalah sekumpulan kode yang dirancang untuk melakukan tugas tertentu, yang dapat dipanggil berkali-kali dari berbagai tempat di aplikasimu (*Don't Repeat Yourself - DRY*).\n\n---\n\n### 1. Deklarasi Fungsi Tradisional\n\n```javascript\nfunction hitungLuasPersegi(panjang, lebar) {\n  const luas = panjang * lebar;\n  return luas; // Mengembalikan hasil perhitungan keluar fungsi\n}\n\n// Memanggil fungsi dengan argumen 10 dan 5\nconst hasil = hitungLuasPersegi(10, 5);\nconsole.log(hasil); // 50\n```\n\n---\n\n### 2. Sintaks Modern: Arrow Functions (`=>`)\n\nDiperkenalkan di ES6, *arrow function* adalah cara penulisan fungsi yang paling populer di ekosistem JavaScript modern (React, Node.js):\n\n```javascript\n// Bentuk standar\nconst sapaPengguna = (nama) => {\n  return `Halo, ${nama}!`;\n};\n\n// Bentuk ringkas (Implicit return jika hanya 1 baris)\nconst kaliDua = (x) => x * 2;\n\nconsole.log(sapaPengguna(\"Budi\")); // \"Halo, Budi!\"\nconsole.log(kaliDua(8));           // 16\n```\n\n---\n\n### 3. Default Parameter\nMencegah nilai `undefined` jika pemanggil lupa mengirim argumen:\n\n```javascript\nconst buatKupon = (diskon = 10) => {\n  return `Kupon Diskon ${diskon}% Aktif!`;\n};\n\nconsole.log(buatKupon());   // \"Kupon Diskon 10% Aktif!\" (nilai default)\nconsole.log(buatKupon(25)); // \"Kupon Diskon 25% Aktif!\"\n```"
    },
    {
      "id": "lesson-js-07",
      "courseId": "course-js-03",
      "slug": "array-dan-metode-populer",
      "title": "7. Array & Metode Manipulasi Populer",
      "summary": "Menyimpan daftar data berurutan, mengakses indeks, serta menguasai push, pop, forEach, map, dan filter.",
      "order": 7,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Mengelola Kumpulan Data dengan Array\n\nArray adalah variabel khusus yang dapat menyimpan lebih dari satu nilai sekaligus dalam satu nama variabel terurut.\n\n---\n\n### 1. Membuat dan Mengakses Array\n\nArray menggunakan tanda kurung siku `[]`. Indeks array **selalu dimulai dari angka 0**!\n\n```javascript\nconst daftarBahasa = [\"HTML\", \"CSS\", \"JavaScript\", \"TypeScript\"];\n\nconsole.log(daftarBahasa[0]); // \"HTML\" (elemen pertama)\nconsole.log(daftarBahasa[2]); // \"JavaScript\"\nconsole.log(daftarBahasa.length); // 4 (jumlah total elemen)\n```\n\n---\n\n### 2. Menambah & Menghapus Elemen\n\n```javascript\nconst keranjang = [\"Buku\", \"Pulpen\"];\n\n// Menambahkan di akhir\nkeranjang.push(\"Penghapus\"); // [\"Buku\", \"Pulpen\", \"Penghapus\"]\n\n// Menghapus elemen terakhir\nkeranjang.pop(); // Menghapus \"Penghapus\"\n```\n\n---\n\n### 3. Tiga Metode Wajib Kuasai: `forEach`, `map`, `filter` ⭐\n\n#### a. `forEach()`: Menjalankan aksi untuk setiap elemen\n```javascript\nconst siswa = [\"Azzam\", \"Dina\", \"Budi\"];\nsiswa.forEach((nama, indeks) => {\n  console.log(`${indeks + 1}. ${nama}`);\n});\n```\n\n#### b. `map()`: Mentransformasi setiap elemen menjadi array baru\n```javascript\nconst hargaRupiah = [10000, 20000, 50000];\nconst hargaDiskon = hargaRupiah.map((h) => h * 0.9);\n\nconsole.log(hargaDiskon); // [9000, 18000, 45000]\n```\n\n#### c. `filter()`: Menyaring elemen yang lolos kondisi tertentu\n```javascript\nconst daftarNilai = [55, 80, 92, 45, 76];\nconst nilaiLulus = daftarNilai.filter((n) => n >= 75);\n\nconsole.log(nilaiLulus); // [80, 92, 76]\n```"
    },
    {
      "id": "lesson-js-08",
      "courseId": "course-js-03",
      "slug": "objek-dan-properti",
      "title": "8. Objek (Object Literals & Properti)",
      "summary": "Merepresentasikan entitas nyata dengan pasangan key-value, nested object, dan object destructuring.",
      "order": 8,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Menyimpan Data Berstruktur dengan Objek\n\nJika array menyimpan daftar data berdasarkan nomor urut (indeks), maka **Objek** menyimpan data menggunakan pasangan nama kunci (*key*) dan nilai (*value*).\n\n---\n\n### 1. Membuat Objek (Object Literals)\n\n```javascript\nconst profilPengguna = {\n  id: \"usr-01\",\n  namaLengkap: \"Azzam Codex\",\n  umur: 22,\n  sudahLulus: true,\n  kursusFavorit: [\"HTML Dasar\", \"JavaScript\"],\n  // Objek bersarang (Nested Object)\n  alamat: {\n    kota: \"Jakarta\",\n    negara: \"Indonesia\"\n  },\n  // Method (fungsi di dalam objek)\n  sapa: function() {\n    return `Halo, saya ${this.namaLengkap} dari ${this.alamat.kota}!`;\n  }\n};\n```\n\n---\n\n### 2. Mengakses Properti Objek\n\nKamu bisa mengakses properti dengan **Dot Notation** atau **Bracket Notation**:\n\n```javascript\n// Dot Notation (Paling Umum)\nconsole.log(profilPengguna.namaLengkap); // \"Azzam Codex\"\nconsole.log(profilPengguna.alamat.kota);  // \"Jakarta\"\nconsole.log(profilPengguna.sapa());       // \"Halo, saya Azzam Codex dari Jakarta!\"\n\n// Bracket Notation (Wajib jika nama key dinamis dari variabel)\nconst kunciYangDicari = \"umur\";\nconsole.log(profilPengguna[kunciYangDicari]); // 22\n```\n\n---\n\n### 3. Object Destructuring (Sintaks Praktis Modern)\n\nMengekstrak properti objek langsung ke dalam variabel independen:\n\n```javascript\nconst { namaLengkap, umur } = profilPengguna;\n\nconsole.log(namaLengkap); // \"Azzam Codex\"\nconsole.log(umur);        // 22\n```"
    },
    {
      "id": "lesson-js-09",
      "courseId": "course-js-03",
      "slug": "dom-manipulation-events",
      "title": "9. DOM Manipulation & Event Handling",
      "summary": "Menghubungkan JavaScript ke halaman web: memilih elemen, mengubah teks/CSS, dan merespons klik mouse.",
      "order": 9,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Menghubungkan Kode ke Tampilan: DOM & Events\n\n**DOM (Document Object Model)** adalah representasi pohon objek dari dokumen HTML yang memungkinkan JavaScript membaca dan memanipulasi elemen di layar secara instan.\n\n---\n\n### 1. Menyeleksi Elemen HTML\n\n```javascript\n// Memilih elemen berdasarkan ID\nconst judul = document.getElementById(\"judul-utama\");\n\n// Memilih elemen menggunakan CSS Selector (Paling fleksibel!)\nconst tombol = document.querySelector(\".btn-submit\");\nconst semuaParagraf = document.querySelectorAll(\"p\");\n```\n\n---\n\n### 2. Mengubah Isi Teks, HTML & Gaya CSS\n\n```javascript\n// Mengubah teks di layar\njudul.innerText = \"Selamat Datang di Portal Belajar!\";\n\n// Menyisipkan elemen HTML baru\njudul.innerHTML = \"Selamat Datang di <em>KodeLuma</em>!\";\n\n// Mengubah gaya CSS langsung\njudul.style.color = \"#2563eb\";\njudul.style.fontSize = \"36px\";\n\n// Menambah atau menghapus class CSS (Praktik Terbaik!)\njudul.classList.add(\"text-active\");\njudul.classList.remove(\"text-muted\");\njudul.classList.toggle(\"is-open\");\n```\n\n---\n\n### 3. Merespons Aksi Pengguna: Event Listeners\n\nEvent adalah kejadian yang dilakukan pengguna, seperti mengklik tombol (*click*), mengetik teks (*input*), atau mengirim formulir (*submit*).\n\n```html\n<button id=\"tombolSuka\">❤️ Suka (0)</button>\n```\n\n```javascript\nconst btn = document.getElementById(\"tombolSuka\");\nlet jumlahSuka = 0;\n\nbtn.addEventListener(\"click\", () => {\n  jumlahSuka++;\n  btn.innerText = `❤️ Suka (${jumlahSuka})`;\n  btn.style.backgroundColor = \"#fee2e2\";\n});\n```\n\n---\n\n### 4. Mencegah Reload Formulir: `e.preventDefault()`\nSecara default, browser akan memuat ulang halaman saat form disubmit. Kita bisa mencegahnya untuk mengirim data via API secara mulus (*Single Page Application*):\n\n```javascript\nconst formLogin = document.getElementById(\"form-login\");\n\nformLogin.addEventListener(\"submit\", (event) => {\n  event.preventDefault(); // Cegah reload halaman!\n  console.log(\"Formulir diproses via JavaScript tanpa reload halaman!\");\n});\n```"
    }
  ],
  "course-py-04": [
    {
      "id": "lesson-py-01",
      "courseId": "course-py-04",
      "slug": "pengenalan-sintaks-python",
      "title": "1. Pengenalan Python & Sintaks Dasar",
      "summary": "Mengenal keunggulan Python, instalasi, aturan indentasi, dan mencetak output pertama dengan print().",
      "order": 1,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Selamat Datang di Dunia Pemrograman Python!\n\nPython adalah bahasa pemrograman tingkat tinggi yang dirancang oleh **Guido van Rossum** dan dirilis pertama kali pada tahun 1991. Filosofi desain Python berfokus pada **keterbacaan kode (code readability)** dengan sintaks yang sangat bersih dan mendekati bahasa Inggris sehari-hari.\n\n---\n\n### Mengapa Memilih Python?\n- **Sintaks Sederhana & Ekspresif:** Kamu dapat menyelesaikan instruksi dalam 2 baris kode yang di bahasa lain (seperti C++ atau Java) memerlukan 10 baris.\n- **Multi-Paradigma:** Mendukung pemrograman prosedural, fungsional, dan berorientasi objek (OOP).\n- **Ekosistem Terbesar:** Standar de-facto di bidang Kecerdasan Buatan (AI), Machine Learning, Analisis Data, Otomasi/Scripting, dan Pengembangan Web (Django, FastAPI, Flask).\n- **Lintas Platform:** Berjalan mulus di Windows, macOS, Linux, hingga Raspberry Pi.\n\n---\n\n### Sintaks Dasar & Fungsi `print()`\n\nFile kode Python disimpan dengan ekstensi `.py`. Untuk menampilkan teks atau angka ke konsol terminal, gunakan fungsi bawaan `print()`:\n\n```python\n# Menampilkan salam pembuka ke konsol\nprint(\"Halo, Selamat Datang di KodeLuma!\")\nprint(2026)\nprint(\"Belajar Python itu\", \"mudah dan menyenangkan!\")\n```\n\n**Output Konsol:**\n```text\nHalo, Selamat Datang di KodeLuma!\n2026\nBelajar Python itu mudah dan menyenangkan!\n```\n\n---\n\n### Aturan Emas: Indentasi Wajib di Python\n\nBerbeda dengan bahasa C, Java, atau JavaScript yang menggunakan tanda kurung kurawal `{ }` untuk membatasi blok kode, **Python menggunakan indentasi (spasi)**.\n\n```python\n# ✅ Benar: Menggunakan indentasi konsisten (standar 4 spasi)\nif 5 > 2:\n    print(\"Lima memang lebih besar dari dua!\")\n\n# ❌ Salah: Akan memicu IndentationError: expected an indented block\nif 5 > 2:\nprint(\"Ini akan error!\")\n```\n\n---\n\n### Komentar di Python\n\nKomentar digunakan untuk memberi catatan dokumentasi tanpa dieksekusi oleh interpreter Python:\n\n```python\n# Ini adalah komentar satu baris\n\n\"\"\"\nIni adalah docstring atau komentar multi-baris\nyang sering digunakan untuk mendokumentasikan\nfungsi atau modul program.\n\"\"\"\nnilai_akhir = 95\n```\n\n---\n\n### Ringkasan Cepat\n| Konsep | Penjelasan | Contoh |\n|---|---|---|\n| Ekstensi File | Standar file Python | `app.py`, `main.py` |\n| Output Konsol | Fungsi cetak teks | `print(\"Halo!\")` |\n| Blok Kode | Menggunakan indentasi | Standar 4 spasi |\n| Komentar | Menggunakan simbol pagar | `# Catatan di sini` |"
    },
    {
      "id": "lesson-py-02",
      "courseId": "course-py-04",
      "slug": "variabel-dan-penamaan",
      "title": "2. Variabel & Konvensi Penamaan",
      "summary": "Mendeklarasikan variabel tanpa keyword, konversi tipe data (type casting), dan aturan penamaan snake_case.",
      "order": 2,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Variabel di Python\n\nVariabel adalah wadah di dalam memori komputer untuk menyimpan nilai data. Di Python, kamu **tidak perlu mendeklarasikan tipe data secara eksplisit** (seperti `int` atau `string`) dan tidak memerlukan keyword seperti `let` atau `var`. Variabel tercipta otomatis pada saat kamu memberikan nilai pertama kali menggunakan operator penugasan `=`.\n\n---\n\n### Deklarasi Variabel & Tipe Dinamis\n\n```python\nnama_siswa = \"Azzam\"       # Tipe str (string)\numur = 20                  # Tipe int (integer)\nipk = 3.92                 # Tipe float (pecahan)\nis_active = True           # Tipe bool (boolean)\n\n# Variabel dapat berganti tipe sewaktu-waktu (Dynamic Typing)\nskor = 100\nskor = \"Sempurna\"  # Valid di Python\nprint(skor)\n```\n\n---\n\n### Konversi Tipe Data (Type Casting)\n\nJika kamu ingin memastikan atau mengubah tipe data suatu nilai, gunakan fungsi konstruktor casting:\n\n```python\n# 1. str() -> Mengubah menjadi string\nangka = str(50)       # Menjadi \"50\"\n\n# 2. int() -> Mengubah menjadi bilangan bulat\numur = int(\"25\")      # Menjadi 25\ndibulatkan = int(9.8) # Menjadi 9 (memotong desimal)\n\n# 3. float() -> Mengubah menjadi bilangan pecahan\nsuhu = float(\"36.5\")  # Menjadi 36.5\nnominal = float(100)  # Menjadi 100.0\n```\n\n---\n\n### Aturan Penamaan Variabel di Python\n\n1. Nama variabel **wajib diawali** dengan huruf (a-z, A-Z) atau garis bawah (`_`).\n2. Nama variabel **tidak boleh diawali** dengan angka (contoh salah: `2nama`).\n3. Nama variabel **hanya boleh berisi** karakter alfanumerik dan garis bawah (`A-z`, `0-9`, dan `_`).\n4. Nama variabel bersifat **Case-Sensitive** (`umur`, `Umur`, dan `UMUR` adalah 3 variabel berbeda).\n5. Nama variabel **tidak boleh menggunakan kata kunci reserved** Python (seperti `class`, `def`, `if`, `for`).\n\n#### Gaya Penamaan Populer:\n- **snake_case (Standar Resmi PEP 8 untuk variabel & fungsi):** `nama_lengkap_mahasiswa`\n- **camelCase:** `namaLengkapMahasiswa`\n- **PascalCase (Digunakan untuk Class OOP):** `NamaLengkapMahasiswa`\n\n---\n\n### Multiple Assignment (Penugasan Sekaligus)\n\nPython memungkinkan penugasan banyak nilai ke banyak variabel dalam satu baris yang sangat elegan:\n\n```python\n# Memberikan nilai berbeda ke banyak variabel\npanjang, lebar, tinggi = 10, 5, 2\nprint(\"Volume:\", panjang * lebar * tinggi)\n\n# Memberikan nilai yang sama ke banyak variabel\nskor_a = skor_b = skor_c = 100\n```"
    },
    {
      "id": "lesson-py-03",
      "courseId": "course-py-04",
      "slug": "tipe-data-python",
      "title": "3. Tipe Data Dasar & Type Checking",
      "summary": "Memahami spektrum tipe data bawaan Python dan menggunakan fungsi type() serta isinstance().",
      "order": 3,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Spektrum Tipe Data Bawaan Python\n\nPython memiliki berbagai tipe data bawaan yang kaya untuk mengelola berbagai bentuk informasi secara efisien.\n\n---\n\n### Kategori Tipe Data Utama\n| Kategori | Nama Tipe | Contoh Nilai |\n|---|---|---|\n| **Text** | `str` | `\"Halo Dunia\"`, `'Python 3'` |\n| **Numeric** | `int`, `float`, `complex` | `42`, `3.14`, `1 + 2j` |\n| **Sequence** | `list`, `tuple`, `range` | `[1, 2, 3]`, `(10, 20)`, `range(5)` |\n| **Mapping** | `dict` | `{\"nama\": \"Budi\", \"umur\": 21}` |\n| **Set** | `set`, `frozenset` | `{1, 2, 3}` (nilai unik) |\n| **Boolean** | `bool` | `True`, `False` |\n| **Binary** | `bytes`, `bytearray` | `b\"Hello\"` |\n| **None** | `NoneType` | `None` (merepresentasikan ketiadaan nilai) |\n\n---\n\n### Memeriksa Tipe Data dengan `type()`\n\nUntuk mengetahui tipe data yang sedang dipegang oleh suatu variabel, panggil fungsi bawaan `type()`:\n\n```python\npesan = \"Kodeluma\"\nangka = 42\npecahan = 3.14159\ndaftar_menu = [\"Kopi\", \"Teh\", \"Roti\"]\nprofil = {\"id\": 1, \"username\": \"azzam\"}\naktif = True\ndata_kosong = None\n\nprint(type(pesan))        # <class 'str'>\nprint(type(angka))        # <class 'int'>\nprint(type(pecahan))      # <class 'float'>\nprint(type(daftar_menu))  # <class 'list'>\nprint(type(profil))       # <class 'dict'>\nprint(type(aktif))        # <class 'bool'>\nprint(type(data_kosong))  # <class 'NoneType'>\n```\n\n---\n\n### Memvalidasi Tipe dengan `isinstance()`\n\nDalam pembuatan aplikasi nyata, fungsi `isinstance()` lebih direkomendasikan daripada `type()` karena mendukung evaluasi pewarisan kelas (inheritance):\n\n```python\nnilai = 85.5\n\nif isinstance(nilai, (int, float)):\n    print(\"Nilai adalah angka valid!\")\nelse:\n    print(\"Nilai bukan angka!\")\n```"
    },
    {
      "id": "lesson-py-04",
      "courseId": "course-py-04",
      "slug": "angka-dan-operator-matematika",
      "title": "4. Angka, Aritmatika & Modul Math",
      "summary": "Menguasai pembagian bulat (//), eksponen (**), modulus (%), dan fungsi matematika lanjutan.",
      "order": 4,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Angka & Operasi Matematika di Python\n\nTiga tipe numerik utama di Python adalah:\n1. **`int` (Integer):** Bilangan bulat positif atau negatif dengan panjang digit tak terbatas di Python 3 (misal: `10`, `-250`, `1000000000000`).\n2. **`float` (Floating Point):** Bilangan riil yang memiliki titik desimal (misal: `3.14`, `-0.05`, atau notasi ilmiah `2.5e3`).\n3. **`complex` (Kompleks):** Bilangan dengan bagian imajiner `j` (misal: `3 + 5j`).\n\n---\n\n### Tabel Operator Aritmatika Python\n| Operator | Nama | Contoh | Hasil |\n|---|---|---|---|\n| `+` | Penjumlahan | `10 + 5` | `15` |\n| `-` | Pengurangan | `10 - 5` | `5` |\n| `*` | Perkalian | `10 * 5` | `50` |\n| `/` | Pembagian (Float) | `10 / 4` | `2.5` (Selalu menghasilkan float) |\n| `//` | **Floor Division (Bulat)** | `10 // 4` | `2` (Membuang sisa pecahan) |\n| `%` | **Modulus (Sisa Bagi)** | `10 % 3` | `1` |\n| `**` | **Eksponen (Pangkat)** | `2 ** 3` | `8` (2 pangkat 3) |\n\n```python\na = 17\nb = 5\n\nprint(\"Pembagian biasa :\", a / b)   # 3.4\nprint(\"Pembagian bulat :\", a // b)  # 3\nprint(\"Sisa bagi       :\", a % b)   # 2\nprint(\"Pangkat         :\", b ** 2)  # 25\n```\n\n---\n\n### Fungsi Numerik Bawaan\n```python\nprint(abs(-15))        # 15 (Nilai absolut)\nprint(round(3.14159, 2)) # 3.14 (Membulatkan 2 desimal)\nprint(min(5, 12, 1, 9)) # 1 (Nilai terkecil)\nprint(max(5, 12, 1, 9)) # 12 (Nilai terbesar)\n```\n\n---\n\n### Modul Bawaan `math`\nUntuk kalkulasi ilmiah lanjutan, impor modul `math`:\n\n```python\nimport math\n\nprint(\"Akar kuadrat 64   :\", math.sqrt(64))  # 8.0\nprint(\"Pembulatan ke atas:\", math.ceil(4.2))  # 5\nprint(\"Pembulatan ke bawah:\", math.floor(4.9))# 4\nprint(\"Nilai Pi (π)      :\", math.pi)        # 3.141592653589793\n```"
    },
    {
      "id": "lesson-py-05",
      "courseId": "course-py-04",
      "slug": "string-dan-f-strings",
      "title": "5. String Manipulasi & Modern F-Strings",
      "summary": "Teknik slicing teks [start:end:step], method bawaan populer, dan format f-string yang elegan.",
      "order": 5,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Menguasai Manipulasi String di Python\n\nString di Python adalah rangkaian karakter yang diapit tanda kutip tunggal (`'...`) atau kutip ganda (`\"...`). Karakter dalam string bersifat **immutable** (tidak dapat diubah langsung di indeksnya).\n\n---\n\n### String Indexing & Slicing\nSetiap karakter memiliki nomor indeks yang dimulai dari **0** dari kiri, atau **-1** dari kanan (indeks negatif).\n\nSintaks slicing: `string[start : end : step]` (ingat: karakter di indeks `end` tidak disertakan).\n\n```python\nbahasa = \"Python3\"\n\n# Indexing\nprint(bahasa[0])   # 'P'\nprint(bahasa[-1])  # '3' (Karakter paling belakang)\n\n# Slicing\nprint(bahasa[0:4]) # 'Pyth' (Indeks 0 sampai 3)\nprint(bahasa[2:])  # 'thon3' (Dari indeks 2 sampai akhir)\nprint(bahasa[:4])  # 'Pyth' (Dari awal sampai indeks 3)\n\n# Trick: Membalik urutan string (Reverse)\nprint(bahasa[::-1]) # '3nohtyP'\n```\n\n---\n\n### Metode String Populer\n```python\nkalimat = \"  Halo Dunia Python!  \"\n\n# Menghapus spasi di awal dan akhir\nprint(kalimat.strip())        # 'Halo Dunia Python!'\n\n# Mengubah kapitalisasi\nprint(kalimat.lower())        # '  halo dunia python!  '\nprint(kalimat.upper())        # '  HALO DUNIA PYTHON!  '\n\n# Mengganti kata\nprint(kalimat.replace(\"Dunia\", \"Sahabat\")) # '  Halo Sahabat Python!  '\n\n# Memecah string menjadi List\nnama_buah = \"apel,mangga,jeruk,pisang\"\ndaftar_buah = nama_buah.split(\",\")\nprint(daftar_buah) # ['apel', 'mangga', 'jeruk', 'pisang']\n\n# Menggabungkan List menjadi String\ngabung = \" - \".join(daftar_buah)\nprint(gabung) # 'apel - mangga - jeruk - pisang'\n```\n\n---\n\n### Modern F-Strings (Format String Tercanggih)\nDiperkenalkan di Python 3.6, **f-strings** adalah cara tercepat, paling terbaca, dan direkomendasikan untuk menyisipkan ekspresi ke dalam string:\n\n```python\nnama = \"Azzam\"\nskor = 98.4567\nharga = 2500000\n\n# Format f-string dengan tanda f di depan tanda kutip\nprint(f\"Siswa {nama} meraih nilai {skor:.2f} pada ujian.\")\nprint(f\"Total biaya registrasi: Rp {harga:,.2f}\")\nprint(f\"Hitung langsung: 10 + 20 = {10 + 20}\")\n```\n\n**Output:**\n```text\nSiswa Azzam meraih nilai 98.46 pada ujian.\nTotal biaya registrasi: Rp 2,500,000.00\nHitung langsung: 10 + 20 = 30\n```"
    },
    {
      "id": "lesson-py-06",
      "courseId": "course-py-04",
      "slug": "boolean-dan-evaluasi-kondisi",
      "title": "6. Boolean & Logika Kebenaran (Truthy vs Falsy)",
      "summary": "Memahami nilai True vs False, konversi nilai dengan bool(), dan aturan evaluasi kebenaran.",
      "order": 6,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Boolean di Python\n\nTipe data Boolean hanya memiliki dua nilai konstan: `True` atau `False` (huruf pertama **harus kapital**). Boolean merupakan fondasi dari seluruh pengambilan keputusan (conditional logic) di pemrograman.\n\n---\n\n### Evaluasi Perbandingan Menghasilkan Boolean\n```python\nprint(10 > 9)    # True\nprint(10 == 9)   # False\nprint(10 < 9)    # False\n```\n\n---\n\n### Konsep Nilai Truthy vs Falsy\n\nDi Python, hampir semua nilai yang memiliki isi dievaluasi sebagai **Truthy** (`True`). Hanya segelintir nilai kosong yang dievaluasi sebagai **Falsy** (`False`).\n\n#### Daftar Nilai Falsy di Python:\n1. Nilai boolean `False` itu sendiri.\n2. Bilangan nol numerik: `0`, `0.0`, `0j`.\n3. String kosong: `\"\"` atau `''`.\n4. Koleksi kosong: `[]` (list), `()` (tuple), `{}` (dict), `set()`.\n5. Nilai khusus `None`.\n\nGunakan fungsi bawaan `bool()` untuk menguji kebenaran suatu nilai:\n\n```python\n# Nilai-nilai Falsy:\nprint(bool(False)) # False\nprint(bool(None))  # False\nprint(bool(0))     # False\nprint(bool(\"\"))    # False\nprint(bool([]))    # False\nprint(bool({}))    # False\n\n# Nilai-nilai Truthy:\nprint(bool(\"Halo\"))# True\nprint(bool(15))    # True\nprint(bool([1, 2]))# True\n```\n\n---\n\n### Contoh Penerapan Nyata\n\nAlih-alih menulis `if len(daftar_peserta) > 0:`, Pythonista lebih suka menulis kode ringkas dan idiomatis memanfaatkan nilai Truthy:\n\n```python\nkeranjang_belanja = [\"Buku Python\", \"Keyboard Mekanikal\"]\n\nif keranjang_belanja:  # True jika list memiliki isi!\n    print(f\"Ada {len(keranjang_belanja)} barang siap dibayar.\")\nelse:\n    print(\"Keranjang belanja kamu masih kosong!\")\n```"
    },
    {
      "id": "lesson-py-07",
      "courseId": "course-py-04",
      "slug": "operator-perbandingan-dan-logika",
      "title": "7. Operator Perbandingan & Logika",
      "summary": "Menyusun ekspresi keputusan dengan and, or, not, serta perbedaan mendalam is vs ==.",
      "order": 7,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Operator Logika & Perbandingan di Python\n\nUntuk membuat logika percabangan yang cerdas, kita menggabungkan beberapa evaluasi menggunakan operator perbandingan dan operator logika.\n\n---\n\n### Operator Perbandingan (Comparison Operators)\n| Operator | Nama | Contoh | Hasil |\n|---|---|---|---|\n| `==` | Sama dengan (Value Equality) | `5 == 5` | `True` |\n| `!=` | Tidak sama dengan | `5 != 3` | `True` |\n| `>` | Lebih besar dari | `10 > 5` | `True` |\n| `<` | Lebih kecil dari | `3 < 8` | `True` |\n| `>=` | Lebih besar atau sama dengan | `7 >= 7` | `True` |\n| `<=` | Lebih kecil atau sama dengan | `4 <= 2` | `False` |\n\n---\n\n### Operator Logika (Logical Operators)\nDi Python, kita menggunakan kata bahasa Inggris (`and`, `or`, `not`), bukan simbol seperti `&&`, `||`, `!` yang ada di bahasa lain.\n\n```python\numur = 21\nmemiliki_ktp = True\n\n# 1. and: Menghasilkan True HANYA jika KEDUA kondisi bernilai True\nif umur >= 17 and memiliki_ktp:\n    print(\"Boleh membuat Surat Izin Mengemudi (SIM).\")\n\n# 2. or: Menghasilkan True jika SALAH SATU kondisi bernilai True\npunya_tiket = False\npunya_undangan = True\nif punya_tiket or punya_undangan:\n    print(\"Silakan masuk ke aula seminar.\")\n\n# 3. not: Membalikkan nilai logika (True jadi False, False jadi True)\nsedang_hujan = False\nif not sedang_hujan:\n    print(\"Cuaca cerah, mari berolahraga!\")\n```\n\n---\n\n### Perbedaan Kunci: `==` vs `is`\nIni adalah pertanyaan wawancara teknis Python paling populer:\n- **`==` (Value Equality):** Memeriksa apakah **nilai (konten)** kedua variabel sama.\n- **`is` (Identity Operator):** Memeriksa apakah kedua variabel menunjuk ke **objek memori yang sama persis**.\n\n```python\nlist_a = [1, 2, 3]\nlist_b = [1, 2, 3]\nlist_c = list_a\n\nprint(list_a == list_b) # True  -> Karena isinya sama persis\nprint(list_a is list_b) # False -> Karena mereka adalah 2 list berbeda di memori\nprint(list_a is list_c) # True  -> Karena list_c menunjuk ke objek list_a yang sama\n```\n\n---\n\n### Membership Operators: `in` dan `not in`\nDigunakan untuk mengecek keberadaan elemen di dalam koleksi teks atau list:\n\n```python\nkeahlian = [\"HTML\", \"CSS\", \"JavaScript\", \"Python\"]\n\nprint(\"Python\" in keahlian)      # True\nprint(\"Ruby\" not in keahlian)    # True\n```"
    },
    {
      "id": "lesson-py-08",
      "courseId": "course-py-04",
      "slug": "python-lists-lengkap",
      "title": "8. Python Lists (Array Dinamis & List Comprehension)",
      "summary": "Operasi manipulasi list lengkap (append, pop, sort) dan teknik modern list comprehension.",
      "order": 8,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Mengenal Python Lists\n\n**List** adalah struktur data koleksi yang paling serbaguna di Python. List ditulis menggunakan tanda kurung siku `[ ]`.\n\n### Karakteristik List:\n- **Ordered (Berurutan):** Elemen memiliki indeks posisi yang pasti.\n- **Mutable (Dapat Diubah):** Kita bisa menambah, mengedit, dan menghapus elemen kapan saja.\n- **Mengizinkan Duplikat:** Nilai yang sama boleh muncul lebih dari satu kali.\n- **Heterogen:** Dapat menyimpan berbagai macam tipe data sekaligus.\n\n---\n\n### Operasi Dasar pada List\n```python\nbahasa = [\"Python\", \"JavaScript\", \"Rust\"]\n\n# Mengakses elemen\nprint(bahasa[0])   # 'Python'\nprint(bahasa[-1])  # 'Rust'\n\n# Mengubah elemen\nbahasa[1] = \"TypeScript\"\nprint(bahasa)      # ['Python', 'TypeScript', 'Rust']\n\n# Mengetahui panjang list\nprint(len(bahasa)) # 3\n```\n\n---\n\n### Menambah & Menghapus Elemen\n```python\nangka = [10, 20, 30]\n\n# Menambah elemen di posisi paling belakang\nangka.append(40)          # [10, 20, 30, 40]\n\n# Menyisipkan elemen di indeks tertentu\nangka.insert(1, 15)       # [10, 15, 20, 30, 40]\n\n# Menghapus elemen berdasarkan nilainya\nangka.remove(20)          # [10, 15, 30, 40]\n\n# Menghapus elemen di posisi tertentu (mengembalikan nilai yang dihapus)\nterhapus = angka.pop(0)   # Menghapus 10\nprint(\"Dihapus:\", terhapus)\nprint(\"Sisa list:\", angka)# [15, 30, 40]\n\n# Mengurutkan list\nnilai = [50, 10, 90, 30]\nnilai.sort()              # [10, 30, 50, 90]\nnilai.reverse()           # [90, 50, 30, 10]\n```\n\n---\n\n### Fitur Unggulan: List Comprehension\nList Comprehension menawarkan sintaks yang sangat padat dan elegan untuk membuat list baru dari iterasi yang ada:\n\n```python\n# Cara Tradisional (Panjang):\nkuadrat = []\nfor x in range(1, 6):\n    kuadrat.append(x ** 2)\n\n# Cara Modern (List Comprehension):\n# Sintaks: [ekspresi for item in iterable if kondisi]\nkuadrat_modern = [x ** 2 for x in range(1, 6)]\nprint(kuadrat_modern) # [1, 4, 9, 16, 25]\n\n# Mengambil hanya angka genap\ngenap = [x for x in range(1, 11) if x % 2 == 0]\nprint(genap)          # [2, 4, 6, 8, 10]\n```"
    },
    {
      "id": "lesson-py-09",
      "courseId": "course-py-04",
      "slug": "python-tuples",
      "title": "9. Python Tuples (Koleksi Imutabel)",
      "summary": "Memahami sifat data yang tidak dapat diubah (immutable), unpacking tuple, dan efisiensi memori.",
      "order": 9,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Mengenal Python Tuples\n\n**Tuple** adalah koleksi data yang mirip dengan List, namun dengan satu perbedaan fundamental: **Tuple bersifat Immutable (tidak dapat diubah, ditambah, atau dihapus setelah dideklarasikan)**.\n\nTuple ditulis dengan tanda kurung biasa `( )`.\n\n---\n\n### Mengapa Menggunakan Tuple?\n1. **Keamanan Data (Data Integrity):** Menjamin bahwa data konstan (seperti koordinat GPS, hari dalam seminggu, konfigurasi server) tidak akan sengaja diubah oleh fungsi lain.\n2. **Performa Lebih Cepat:** Karena ukurannya tetap, Python mengalokasikan memori untuk Tuple jauh lebih efisien daripada List.\n3. **Dapat Dijadikan Key Dictionary:** Tuple bisa menjadi key di kamus (`dict`), sedangkan List tidak bisa.\n\n---\n\n### Sintaks & Pembuatan Tuple\n```python\n# Tuple biasa\nkoordinat = (-6.2088, 106.8456)\nhari = (\"Senin\", \"Selasa\", \"Rabu\", \"Kamis\", \"Jumat\")\n\nprint(koordinat[0]) # -6.2088\nprint(len(hari))    # 5\n\n# ⚠️ Perhatian: Tuple dengan 1 elemen WAJIB diakhiri koma!\ntuple_satu = (\"Python\",) # Ini Tuple\nbukan_tuple = (\"Python\") # Ini dianggap string biasa!\nprint(type(tuple_satu))  # <class 'tuple'>\nprint(type(bukan_tuple)) # <class 'str'>\n```\n\n---\n\n### Mencoba Mengubah Tuple (Akan Memicu Error)\n```python\ntitik = (10, 20)\n# titik[0] = 99 \n# ❌ TypeError: 'tuple' object does not support item assignment\n```\n\n---\n\n### Unpacking Tuple (Membongkar Nilai)\nKita dapat mengekstrak nilai-nilai di dalam Tuple langsung ke dalam beberapa variabel:\n\n```python\nmahasiswa = (\"Azzam\", 20, \"Teknik Informatika\")\n\n# Unpacking\nnama, umur, jurusan = mahasiswa\nprint(\"Nama   :\", nama)\nprint(\"Umur   :\", umur)\nprint(\"Jurusan:\", jurusan)\n\n# Menggunakan asterisk (*) untuk menampung sisa elemen\nangka = (1, 2, 3, 4, 5)\npertama, kedua, *sisa = angka\nprint(pertama) # 1\nprint(kedua)   # 2\nprint(sisa)    # [3, 4, 5] (Sisa ditampung sebagai list)\n```"
    },
    {
      "id": "lesson-py-10",
      "courseId": "course-py-04",
      "slug": "python-sets",
      "title": "10. Python Sets (Himpunan Unik & Operasi Matematika)",
      "summary": "Menyimpan elemen tanpa duplikat, serta operasi himpunan union, intersection, dan difference.",
      "order": 10,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Mengenal Python Sets\n\n**Set** adalah koleksi data yang **Unordered (tidak berurutan)**, **Unindexed (tidak memiliki indeks)**, dan **Unique (tidak mengizinkan duplikat)**.\n\nSet ditulis dengan kurung kurawal `{ }`.\n\n---\n\n### Sifat Unik Set: Menghapus Duplikat Otomatis\n```python\nhimpunan = {\"apel\", \"pisang\", \"apel\", \"jeruk\", \"pisang\"}\nprint(himpunan) \n# Output: {'jeruk', 'apel', 'pisang'} (Duplikat otomatis dibuang!)\n\n# Trik Instan: Menghapus duplikat dari sebuah List\ndaftar_id = [101, 102, 101, 105, 102, 108]\nid_unik = list(set(daftar_id))\nprint(id_unik) # [101, 102, 105, 108]\n```\n\n---\n\n### Menambah & Menghapus Elemen Set\n```python\nwarna = {\"Merah\", \"Kuning\"}\n\n# Menambah satu elemen\nwarna.add(\"Hijau\")\n\n# Menambah banyak elemen sekaligus\nwarna.update([\"Biru\", \"Ungu\"])\n\n# Menghapus elemen\nwarna.remove(\"Kuning\")  # Error jika 'Kuning' tidak ada\nwarna.discard(\"Hitam\")  # Aman, TIDAK error jika elemen tidak ditemukan\n\nprint(warna)\n```\n\n---\n\n### Operasi Aljabar Himpunan (Set Operations)\nInilah kekuatan terbesar Set di Python untuk analisis data:\n\n```python\nset_a = {1, 2, 3, 4, 5}\nset_b = {4, 5, 6, 7, 8}\n\n# 1. Union (Gabungan seluruh elemen unik): simbol |\nprint(set_a | set_b) \n# {1, 2, 3, 4, 5, 6, 7, 8}\n\n# 2. Intersection (Irisan / elemen yang ada di KEDUA set): simbol &\nprint(set_a & set_b) \n# {4, 5}\n\n# 3. Difference (Selisih / elemen di A tapi tidak ada di B): simbol -\nprint(set_a - set_b) \n# {1, 2, 3}\n\n# 4. Symmetric Difference (Ada di A atau B, tapi BUKAN di keduanya): simbol ^\nprint(set_a ^ set_b) \n# {1, 2, 3, 6, 7, 8}\n```"
    },
    {
      "id": "lesson-py-11",
      "courseId": "course-py-04",
      "slug": "python-dictionaries",
      "title": "11. Python Dictionaries (Struktur Key-Value)",
      "summary": "Menyimpan relasi data kompleks dengan pasangan key-value, metode akses aman .get(), dan iterasi item.",
      "order": 11,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Mengenal Python Dictionaries (Kamus Data)\n\n**Dictionary** adalah struktur data yang menyimpan informasi dalam format pasangan **`key: value`** (kunci dan nilai).\n\nDictionary ditulis dengan kurung kurawal `{ }` dan merupakan struktur data paling fundamental untuk berinteraksi dengan API web dan data JSON.\n\n---\n\n### Karakteristik Dictionary:\n- **Key-Value Pairs:** Setiap data diasosiasikan dengan kunci unik.\n- **Ordered:** Sejak Python 3.7, urutan entri dipertahankan sesuai urutan penambahan.\n- **Mutable:** Nilai dapat ditambah, diperbarui, atau dihapus.\n- **Kunci Harus Unik & Immutable:** String, angka, atau tuple bisa jadi key.\n\n---\n\n### Sintaks & Akses Elemen\n```python\nprofil = {\n    \"username\": \"azzam_dev\",\n    \"nama\": \"Azzam\",\n    \"umur\": 21,\n    \"keahlian\": [\"Python\", \"FastAPI\", \"Next.js\"],\n    \"is_premium\": True\n}\n\n# Akses menggunakan tanda kurung siku (Akan KeyError jika key tidak ada)\nprint(profil[\"nama\"])       # 'Azzam'\n\n# Rekomendasi: Akses aman menggunakan .get() (Mengembalikan None jika key tidak ada)\nprint(profil.get(\"email\"))  # None\nprint(profil.get(\"email\", \"Belum terdaftar\")) # Nilai default jika key kosong\n```\n\n---\n\n### Menambah & Memodifikasi Data\n```python\n# Mengubah nilai\nprofil[\"umur\"] = 22\n\n# Menambah key baru\nprofil[\"lokasi\"] = \"Jakarta, Indonesia\"\n\n# Menghapus item\ndel profil[\"is_premium\"]\nitem_terhapus = profil.pop(\"umur\")\nprint(\"Sisa data profil:\", profil)\n```\n\n---\n\n### Melakukan Perulangan (Looping) pada Dictionary\n```python\nmobil = {\n    \"merk\": \"Toyota\",\n    \"model\": \"GR Yaris\",\n    \"tahun\": 2024\n}\n\n# 1. Mengakses hanya Key\nfor k in mobil.keys():\n    print(k)\n\n# 2. Mengakses hanya Value\nfor v in mobil.values():\n    print(v)\n\n# 3. Mengakses Key dan Value secara bersamaan (Paling Sering Digunakan)\nfor kunci, nilai in mobil.items():\n    print(f\"{kunci.capitalize()}: {nilai}\")\n```"
    },
    {
      "id": "lesson-py-12",
      "courseId": "course-py-04",
      "slug": "percabangan-if-elif-else",
      "title": "12. Percabangan Kondisional (if, elif, else)",
      "summary": "Membuat alur logika keputusan, percabangan multi-kondisi, short-hand ternary if, dan pass statement.",
      "order": 12,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Percabangan Kondisional di Python\n\nPercabangan memungkinkan program kita mengambil keputusan berbeda berdasarkan kondisi yang sedang terjadi di dunia nyata.\n\n---\n\n### Sintaks `if`, `elif`, dan `else`\n\nIngat bahwa setiap blok pernyataan diawali dengan titik dua (`:`) dan baris berikutnya **wajib di-indentasi**.\n\n```python\nnilai_ujian = 82\n\nif nilai_ujian >= 90:\n    grade = \"A (Istimewa)\"\nelif nilai_ujian >= 80:\n    grade = \"B (Sangat Baik)\"\nelif nilai_ujian >= 70:\n    grade = \"C (Cukup)\"\nelif nilai_ujian >= 60:\n    grade = \"D (Kurang)\"\nelse:\n    grade = \"E (Tidak Lulus)\"\n\nprint(f\"Hasil Evaluasi Siswa: {grade}\")\n```\n\n---\n\n### Short-Hand If (Ternary Operator)\n\nJika logikamu hanya menentukan nilai berdasarkan satu kondisi singkat, gunakan sintaks satu baris yang sangat bersih:\n\n```python\n# Sintaks: nilai_jika_true if kondisi else nilai_jika_false\nstatus_usia = \"Dewasa\" if umur >= 18 else \"Anak-anak\"\nprint(status_usia)\n```\n\n---\n\n### Pernyataan `pass` (Placeholder Kosong)\n\nKarena Python mengandalkan indentasi, blok `if` tidak boleh dibiarkan kosong tanpa kode di dalamnya. Jika kamu sedang merancang logika tapi belum ingin menulis isinya, gunakan keyword `pass`:\n\n```python\nx = 100\ny = 200\n\nif x < y:\n    pass  # TODO: Tulis algoritma lanjutan nanti, tidak akan error saat ini\nelse:\n    print(\"X lebih besar atau sama!\")\n```"
    },
    {
      "id": "lesson-py-13",
      "courseId": "course-py-04",
      "slug": "perulangan-while",
      "title": "13. Perulangan While Loop & Kontrol Alur",
      "summary": "Menjalankan instruksi berulang selama kondisi bernilai True, statement break, continue, dan else dalam while.",
      "order": 13,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Perulangan While Loop di Python\n\nPerulangan `while` mengeksekusi sekumpulan instruksi selama suatu kondisi pengujian tetap bernilai **`True`**.\n\n---\n\n### Sintaks Dasar While Loop\n```python\ncounter = 1\n\nwhile counter <= 5:\n    print(f\"Hitungan ke-{counter}\")\n    counter += 1  # Wajib ada increment, jika tidak akan terjadi infinite loop!\n\nprint(\"Selesai menghitung!\")\n```\n\n---\n\n### Mengontrol Alur Perulangan: `break` dan `continue`\n\n1. **`break`**: Menghentikan perulangan seketika dan langsung keluar dari blok loop.\n2. **`continue`**: Menghentikan iterasi saat ini dan langsung melompat ke iterasi berikutnya.\n\n```python\n# Contoh 1: Menggunakan break untuk keluar saat target tercapai\nangka = 1\nwhile angka <= 10:\n    if angka == 6:\n        print(\"Target tercapai di angka 6! Berhenti.\")\n        break\n    print(angka)\n    angka += 1\n\n# Contoh 2: Menggunakan continue untuk melewati angka ganjil\nx = 0\nwhile x < 6:\n    x += 1\n    if x % 2 != 0:\n        continue  # Lewati jika ganjil, jangan cetak!\n    print(f\"Angka genap: {x}\")\n```\n\n---\n\n### Klausa Unik: `else` pada While Loop\nPython memiliki fitur unik di mana loop dapat memiliki blok `else`. Blok ini dieksekusi **hanya jika perulangan selesai secara normal** (tanpa terkena interupsi `break`):\n\n```python\ni = 1\nwhile i <= 3:\n    print(i)\n    i += 1\nelse:\n    print(\"Loop while selesai sempurna!\")\n```"
    },
    {
      "id": "lesson-py-14",
      "courseId": "course-py-04",
      "slug": "perulangan-for-dan-range",
      "title": "14. Perulangan For Loop, Range & Enumerate",
      "summary": "Iterasi koleksi sequence dengan for, fungsi range(start, stop, step), dan enumerate untuk indeks otomatis.",
      "order": 14,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Perulangan For Loop di Python\n\nPerulangan `for` di Python bertindak seperti iterator yang menjelajahi setiap elemen dalam urutan (sequence) seperti List, Tuple, String, atau objek rentang (`range`).\n\n---\n\n### Melakukan Iterasi pada List dan String\n```python\nbahasa_pemrograman = [\"Python\", \"JavaScript\", \"Go\", \"Kotlin\"]\n\nfor bahasa in bahasa_pemrograman:\n    print(f\"Saya sedang belajar {bahasa}\")\n\n# Iterasi setiap karakter dalam string\nfor huruf in \"KODELUMA\":\n    print(huruf, end=\" \")\n# Output: K O D E L U M A \n```\n\n---\n\n### Fungsi Sakti: `range()`\nFungsi `range()` menghasilkan urutan angka.\nSintaks: `range(start, stop, step)` (ingat: batas `stop` tidak disertakan).\n\n```python\n# 1 parameter: Dari 0 sampai sebelum 5 (0, 1, 2, 3, 4)\nfor i in range(5):\n    print(i, end=\" \")\nprint()\n\n# 2 parameter: Dari 2 sampai sebelum 8 (2, 3, 4, 5, 6, 7)\nfor i in range(2, 8):\n    print(i, end=\" \")\nprint()\n\n# 3 parameter: Dari 1 sampai sebelum 10 dengan kelipatan 2 (1, 3, 5, 7, 9)\nfor i in range(1, 10, 2):\n    print(i, end=\" \")\nprint()\n```\n\n---\n\n### Mendapatkan Indeks dengan `enumerate()`\nAlih-alih membuat variabel counter manual, gunakan fungsi `enumerate()` untuk mendapatkan pasangan indeks dan nilai:\n\n```python\njuara = [\"Azzam\", \"Budi\", \"Citra\"]\n\nfor peringkat, nama in enumerate(juara, start=1):\n    print(f\"Juara {peringkat}: {nama}\")\n```\n\n**Output:**\n```text\nJuara 1: Azzam\nJuara 2: Budi\nJuara 3: Citra\n```"
    },
    {
      "id": "lesson-py-15",
      "courseId": "course-py-04",
      "slug": "fungsi-dan-parameter",
      "title": "15. Fungsi (Def), Parameter & Return Value",
      "summary": "Menyusun kode modular dengan def, positional & keyword arguments, default values, dan *args serta **kwargs.",
      "order": 15,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Membuat Fungsi di Python\n\nFungsi adalah blok kode terorganisir dan reusable yang hanya berjalan ketika dipanggil. Fungsi membantu kita memecah program besar menjadi bagian-bagian modular yang mudah dipelihara (prinsip DRY: *Don't Repeat Yourself*).\n\nFungsi didefinisikan dengan kata kunci **`def`**.\n\n---\n\n### Sintaks Dasar & Return Value\n```python\n# Mendefinisikan fungsi penjumlahan\ndef hitung_luas_persegi(panjang, lebar):\n    luas = panjang * lebar\n    return luas  # Mengembalikan nilai hasil\n\n# Memanggil fungsi\nhasil = hitung_luas_persegi(10, 5)\nprint(\"Luas persegi:\", hasil) # 50\n```\n\n---\n\n### Default Parameter Value (Nilai Default)\nKamu bisa memberikan nilai default pada parameter. Jika pemanggil tidak memberikan argumen, nilai default akan digunakan:\n\n```python\ndef sapa_pengguna(nama, pesan=\"Selamat belajar di KodeLuma!\"):\n    return f\"Halo {nama}, {pesan}\"\n\nprint(sapa_pengguna(\"Azzam\"))\nprint(sapa_pengguna(\"Budi\", \"Semoga harimu menyenangkan!\"))\n```\n\n---\n\n### Fleksibilitas Tinggi: `*args` dan `**kwargs`\n\n1. **`*args` (Arbitrary Positional Arguments):** Menerima jumlah argumen posisi berapapun dan mengemasnya ke dalam sebuah **Tuple**.\n2. **`**kwargs` (Arbitrary Keyword Arguments):** Menerima argumen bernama berapapun dan mengemasnya ke dalam sebuah **Dictionary**.\n\n```python\n# Contoh *args: Menjumlahkan berapapun angka yang dikirim\ndef jumlahkan_semua(*angka):\n    total = sum(angka)\n    return total\n\nprint(jumlahkan_semua(1, 2, 3))          # 6\nprint(jumlahkan_semua(10, 20, 30, 40, 50))# 150\n\n# Contoh **kwargs: Menerima informasi profil dinamis\ndef cetak_biodata(**data):\n    for key, value in data.items():\n        print(f\"- {key.capitalize()}: {value}\")\n\ncetak_biodata(nama=\"Azzam\", role=\"Admin\", bahasa=\"Python\", level=\"Expert\")\n```"
    },
    {
      "id": "lesson-py-16",
      "courseId": "course-py-04",
      "slug": "lambda-functions",
      "title": "16. Fungsi Lambda & Functional Programming",
      "summary": "Sintaks fungsi anonim satu baris (lambda), serta penerapannya dengan map, filter, dan sorted.",
      "order": 16,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Fungsi Lambda di Python\n\nFungsi **Lambda** adalah fungsi anonim (tanpa nama) berukuran kecil yang hanya dapat memiliki **satu ekspresi**.\n\nSintaks: `lambda arguments: expression`\n\n---\n\n### Contoh Dasar Lambda\n```python\n# Fungsi perkalian dua angka dengan lambda\nkali_dua = lambda x: x * 2\nprint(kali_dua(5)) # 10\n\ntambah = lambda a, b: a + b\nprint(tambah(10, 25)) # 35\n```\n\n---\n\n### Kapan Menggunakan Lambda?\nKekuatan sejati lambda terlihat saat digunakan sebagai argumen di dalam fungsi lain seperti `map()`, `filter()`, dan `sorted()`.\n\n#### 1. Menggunakan Lambda dengan `map()`\nMentransformasikan setiap elemen dalam sebuah koleksi:\n```python\nangka = [1, 2, 3, 4, 5]\n# Kuadratkan semua angka\nkuadrat = list(map(lambda x: x ** 2, angka))\nprint(kuadrat) # [1, 4, 9, 16, 25]\n```\n\n#### 2. Menggunakan Lambda dengan `filter()`\nMenyaring elemen yang memenuhi kondisi tertentu:\n```python\nnilai_siswa = [45, 80, 92, 60, 75, 88]\n# Ambil hanya nilai lulus (>= 75)\nlulus = list(filter(lambda x: x >= 75, nilai_siswa))\nprint(\"Daftar nilai lulus:\", lulus) # [80, 92, 75, 88]\n```\n\n#### 3. Custom Sorting dengan `sorted()`\nMengurutkan daftar dictionary berdasarkan atribut spesifik:\n```python\nkaryawan = [\n    {\"nama\": \"Citra\", \"gaji\": 9000000},\n    {\"nama\": \"Azzam\", \"gaji\": 15000000},\n    {\"nama\": \"Budi\", \"gaji\": 7500000}\n]\n\n# Urutkan berdasarkan gaji dari yang tertinggi ke terendah\ntertinggi = sorted(karyawan, key=lambda k: k[\"gaji\"], reverse=True)\nfor k in tertinggi:\n    print(f\"{k['nama']}: Rp {k['gaji']:,}\")\n```"
    },
    {
      "id": "lesson-py-17",
      "courseId": "course-py-04",
      "slug": "scope-local-dan-global",
      "title": "17. Scope Variabel: Local, Global & Nonlocal",
      "summary": "Memahami aturan LEGB, perbedaan variabel lokal dan global, serta kata kunci global dan nonlocal.",
      "order": 17,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Scope (Cakupan) Variabel di Python\n\nScope menentukan di bagian mana saja dari program suatu variabel dapat diakses dan dikenali. Python menerapkan aturan resolusi pencarian variabel yang dikenal dengan akronim **LEGB**:\n1. **L (Local):** Variabel yang didefinisikan di dalam fungsi.\n2. **E (Enclosing):** Variabel di fungsi pembungkus (pada nested function).\n3. **G (Global):** Variabel di tingkat terluar file modul.\n4. **B (Built-in):** Variabel dan fungsi bawaan Python (seperti `print`, `len`, `range`).\n\n---\n\n### Local Scope vs Global Scope\n```python\n# Variabel Global\nnama_aplikasi = \"KodeLuma LMS\"\n\ndef tampilkan_info():\n    # Variabel Lokal (hanya hidup di dalam fungsi ini)\n    versi = \"1.0.0\"\n    print(f\"Aplikasi: {nama_aplikasi}, Versi: {versi}\")\n\ntampilkan_info()\n\n# print(versi) \n# ❌ NameError: name 'versi' is not defined (karena versi bersifat lokal)\n```\n\n---\n\n### Keyword `global`\nJika kamu ingin mengubah nilai variabel global dari dalam sebuah fungsi, kamu harus mendeklarasikannya secara eksplisit menggunakan kata kunci `global`:\n\n```python\ntotal_pengunjung = 0\n\ndef catat_kunjungan():\n    global total_pengunjung  # Memberitahu Python agar memodifikasi variabel global\n    total_pengunjung += 1\n\ncatat_kunjungan()\ncatat_kunjungan()\ncatat_kunjungan()\n\nprint(\"Total pengunjung:\", total_pengunjung) # 3\n```\n\n---\n\n### Keyword `nonlocal` (Pada Nested Function)\nDigunakan pada fungsi bersarang untuk mengubah variabel di scope pembungkusnya (enclosing scope):\n\n```python\ndef pembuat_counter():\n    hitung = 0\n    def tambah():\n        nonlocal hitung\n        hitung += 1\n        return hitung\n    return tambah\n\ncounter_a = pembuat_counter()\nprint(counter_a()) # 1\nprint(counter_a()) # 2\n```"
    },
    {
      "id": "lesson-py-18",
      "courseId": "course-py-04",
      "slug": "modul-dan-pip",
      "title": "18. Modul, Package & Manajemen PIP",
      "summary": "Memecah kode ke modul terpisah, if __name__ == \"__main__\", dan instalasi paket pihak ketiga dengan pip.",
      "order": 18,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Modul & Package di Python\n\nModul adalah file berekstensi `.py` yang berisi sekumpulan fungsi, kelas, dan variabel yang dapat digunakan kembali di file program lainnya.\n\n---\n\n### Berbagai Cara Mengimpor Modul\n```python\n# 1. Impor seluruh modul\nimport random\nprint(random.randint(1, 100)) # Menghasilkan angka acak antara 1 s.d 100\n\n# 2. Impor fungsi atau komponen spesifik\nfrom datetime import datetime\nsekarang = datetime.now()\nprint(\"Waktu saat ini:\", sekarang.strftime(\"%Y-%m-%d %H:%M:%S\"))\n\n# 3. Impor dengan nama alias (Alias import)\nimport math as m\nprint(\"Nilai sinus 90 derajat:\", m.sin(m.radians(90))) # 1.0\n```\n\n---\n\n### Membuat Modul Kustom Sendiri\nBuat file baru bernama `kalkulator.py`:\n\n```python\n# File: kalkulator.py\ndef tambah(a, b):\n    return a + b\n\ndef kali(a, b):\n    return a * b\n```\n\nLalu gunakan di file utama `main.py`:\n\n```python\n# File: main.py\nimport kalkulator\n\nprint(kalkulator.tambah(15, 25)) # 40\nprint(kalkulator.kali(4, 5))     # 20\n```\n\n---\n\n### Pola `if __name__ == \"__main__\":`\nIni adalah idiom Python yang sangat penting. Blok ini memastikan bahwa kode uji coba di dalam modul hanya dieksekusi saat file tersebut dijalankan langsung sebagai program utama, bukan saat diimpor oleh file lain:\n\n```python\ndef fungsi_utama():\n    print(\"Fungsi dijalankan!\")\n\nif __name__ == \"__main__\":\n    # Kode ini hanya berjalan saat file ini di-run langsung via: python nama_file.py\n    fungsi_utama()\n```\n\n---\n\n### Pengenalan PIP (Python Package Installer)\nPIP adalah manajer paket resmi untuk menginstal ribuan library open-source dari **PyPI** (Python Package Index):\n\n```bash\n# Menginstal paket (contoh: requests untuk HTTP)\npip install requests\n\n# Memeriksa daftar paket terpasang\npip list\n\n# Menyimpan dependensi proyek ke file\npip freeze > requirements.txt\n\n# Menginstal dependensi proyek dari file\npip install -r requirements.txt\n```"
    },
    {
      "id": "lesson-py-19",
      "courseId": "course-py-04",
      "slug": "penanganan-error-try-except",
      "title": "19. Penanganan Error & Eksepsi (Try...Except)",
      "summary": "Mencegah program crash tak terduga dengan blok try, except, else, finally, dan melempar error dengan raise.",
      "order": 19,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Penanganan Error & Eksepsi di Python\n\nDi dunia nyata, program komputer dapat menemui situasi tak terduga: pengguna memasukkan huruf saat diminta angka, file yang dicari tidak ditemukan, atau koneksi internet terputus.\n\nTanpa penanganan yang baik, program akan mengalami **Crash** (berhenti mendadak). Python menyediakan mekanisme **`try...except`** untuk menangkap eksepsi secara elegan.\n\n---\n\n### Anatomi Lengkap Blok Eksepsi\n1. **`try`:** Blok kode yang berpotensi menghasilkan error.\n2. **`except`:** Blok yang dieksekusi jika error terjadi di dalam try.\n3. **`else`:** Blok opsional yang dieksekusi jika **TIDAK ADA** error yang terjadi.\n4. **`finally`:** Blok opsional yang **PASTI DIEKSEKUSI** apapun yang terjadi (sangat cocok untuk menutup koneksi atau file).\n\n```python\ndef bagi_angka(pembilang, penyebut):\n    try:\n        hasil = pembilang / penyebut\n    except ZeroDivisionError:\n        print(\"Kesalahan: Tidak dapat membagi angka dengan nol (0)!\")\n    except TypeError:\n        print(\"Kesalahan: Tipe data harus angka!\")\n    else:\n        print(f\"Perhitungan berhasil! Hasil = {hasil}\")\n    finally:\n        print(\"--- Operasi pembagian selesai diuji ---\")\n\nbagi_angka(10, 2)\nbagi_angka(10, 0)\n```\n\n---\n\n### Mengambil Pesan Error dengan `as err`\n```python\ntry:\n    nilai = int(\"bukan_angka\")\nexcept ValueError as err:\n    print(f\"Log Sistem Error: {err}\")\n    # Output: Log Sistem Error: invalid literal for int() with base 10: 'bukan_angka'\n```\n\n---\n\n### Melempar Error Manual dengan `raise`\nSebagai developer, kamu dapat secara sengaja melempar eksepsi jika parameter yang dikirimkan pengguna melanggar aturan bisnis:\n\n```python\ndef set_umur_pendaftar(umur):\n    if umur < 0:\n        raise ValueError(\"Umur tidak boleh bernilai negatif!\")\n    print(f\"Umur berhasil didaftarkan: {umur} tahun\")\n\ntry:\n    set_umur_pendaftar(-5)\nexcept ValueError as e:\n    print(\"Validasi gagal:\", e)\n```"
    },
    {
      "id": "lesson-py-20",
      "courseId": "course-py-04",
      "slug": "input-pengguna-terminal",
      "title": "20. Input Pengguna & Interaksi Terminal",
      "summary": "Menerima input dari pengguna via fungsi input(), konversi tipe, dan pola validasi perulangan.",
      "order": 20,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Menerima Input Pengguna di Terminal\n\nProgram interaktif memerlukan interaksi dua arah dengan pengguna. Di Python, kita menggunakan fungsi bawaan **`input()`** untuk meminta teks dari keyboard terminal.\n\n---\n\n### Aturan Utama: `input()` Selalu Mengembalikan String (`str`)\n\nApapun yang diketik oleh pengguna (meskipun angka), fungsi `input()` akan selalu membacanya sebagai string:\n\n```python\nnama = input(\"Masukkan nama lengkapmu: \")\nprint(f\"Selamat datang, {nama}!\")\n\n# Mengambil angka wajib di-cast dengan int() atau float()\numur_str = input(\"Masukkan umurmu: \")\numur = int(umur_str) # Konversi ke integer\n\ntahun_lahir = 2026 - umur\nprint(f\"Halo {nama}, kamu lahir sekitar tahun {tahun_lahir}.\")\n```\n\n---\n\n### Pola Validasi Input Aman (Input Validation Loop)\nJika pengguna salah memasukkan format data (misalnya mengetik \"dua puluh\" saat diminta angka), kita bisa memintanya memasukkan ulang secara terus-menerus tanpa membuat program crash:\n\n```python\ndef minta_angka_positif():\n    while True:\n        try:\n            teks = input(\"Masukkan angka positif: \")\n            angka = float(teks)\n            if angka <= 0:\n                print(\"Angka harus lebih besar dari nol. Coba lagi!\")\n                continue\n            return angka\n        except ValueError:\n            print(\"Input tidak valid! Harap masukkan angka yang benar.\")\n\nnominal = minta_angka_positif()\nprint(f\"Nominal yang kamu masukkan: {nominal:,.2f}\")\n```"
    },
    {
      "id": "lesson-py-21",
      "courseId": "course-py-04",
      "slug": "file-handling-open-read-write",
      "title": "21. Operasi File (Membaca & Menulis File)",
      "summary": "Membaca dan menulis file eksternal dengan aman menggunakan context manager with open().",
      "order": 21,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Manajemen File di Python\n\nPython memiliki dukungan bawaan yang sangat hebat untuk membaca, menulis, dan mengelola file teks di sistem operasi tanpa perlu menginstal pustaka tambahan.\n\nFungsi kuncinya adalah **`open(filename, mode, encoding)`**.\n\n---\n\n### Mode Pembukaan File Utama:\n- **`'r'` (Read - Default):** Membuka file untuk dibaca. Menghasilkan error jika file tidak ada.\n- **`'w'` (Write):** Membuka file untuk ditulis. Jika file sudah ada, **isinya akan ditimpa (overwrite)**. Jika belum ada, file baru dibuat.\n- **`'a'` (Append):** Membuka file untuk menambahkan data baru di baris paling belakang tanpa menimpa data lama.\n- **`'x'` (Create):** Membuat file baru. Menghasilkan error jika file sudah ada.\n\n---\n\n### Best Practice: Gunakan Context Manager (`with open`)\nAlih-alih memanggil `f = open(...)` lalu `f.close()`, selalu gunakan blok **`with open(...) as f:`**. Blok ini menjamin file akan ditutup secara otomatis oleh Python meskipun terjadi error di tengah proses.\n\n#### 1. Menulis Data ke File (`'w'` dan `'a'`)\n```python\n# Menulis file baru\nwith open(\"catatan.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Baris 1: Belajar Python di KodeLuma\n\")\n    f.write(\"Baris 2: Sangat mudah dan menyenangkan!\n\")\n\n# Menambahkan data baru di belakang file (Append)\nwith open(\"catatan.txt\", \"a\", encoding=\"utf-8\") as f:\n    f.write(\"Baris 3: Ditambahkan via mode append.\n\")\n```\n\n#### 2. Membaca Seluruh Isi File\n```python\nwith open(\"catatan.txt\", \"r\", encoding=\"utf-8\") as f:\n    konten = f.read()\n    print(\"Isi File:\n\" + konten)\n```\n\n#### 3. Membaca Baris per Baris (Hemat Memori untuk File Besar)\n```python\nwith open(\"catatan.txt\", \"r\", encoding=\"utf-8\") as f:\n    for no, baris in enumerate(f, start=1):\n        print(f\"[{no}] {baris.strip()}\")\n```"
    },
    {
      "id": "lesson-py-22",
      "courseId": "course-py-04",
      "slug": "oop-class-dan-objek",
      "title": "22. Pemrograman Berorientasi Objek: Class & Objek",
      "summary": "Konsep dasar OOP, mendefinisikan Class, konstruktor __init__, dan parameter self.",
      "order": 22,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Pemrograman Berorientasi Objek (OOP) di Python\n\nHampir segala sesuatu di Python adalah sebuah **Objek** yang memiliki properti dan metode. OOP adalah paradigma pemrograman yang menata kode berdasarkan cetak biru (**Class**) dan wujud nyatanya (**Object**).\n\n- **Class (Kelas):** Cetak biru / rancangan umum (misal: rancangan blueprint `Mobil`).\n- **Object (Objek / Instance):** Wujud nyata dari cetak biru tersebut (misal: mobil Avanza hitam milik Budi).\n\n---\n\n### Mendefinisikan Class & Konstruktor `__init__`\n\nKonstruktor `__init__()` adalah metode khusus yang otomatis dijalankan saat sebuah objek baru dibuat (diinstansiasi).\n\nParameter pertama **`self`** adalah referensi ke objek yang sedang aktif dibuat.\n\n```python\nclass Siswa:\n    # Konstruktor untuk menginisialisasi atribut objek\n    def __init__(self, nama, jurusan, nilai_rata_rata):\n        self.nama = nama\n        self.jurusan = jurusan\n        self.nilai_rata_rata = nilai_rata_rata\n\n# Membuat objek nyata dari class Siswa\nsiswa_1 = Siswa(\"Azzam\", \"Teknik Informatika\", 92.5)\nsiswa_2 = Siswa(\"Citra\", \"Desain Komunikasi Visual\", 88.0)\n\n# Mengakses properti objek\nprint(f\"Nama Siswa 1   : {siswa_1.nama} ({siswa_1.jurusan})\")\nprint(f\"Nilai Siswa 1  : {siswa_1.nilai_rata_rata}\")\nprint(f\"Nama Siswa 2   : {siswa_2.nama}\")\n```\n\n---\n\n### Mengapa Parameter `self` Wajib Ada?\nDi Python, saat kamu memanggil metode objek, Python secara otomatis menyisipkan objek itu sendiri sebagai argumen pertama ke dalam `self`. Melalui `self`, objek dapat mengakses dan memodifikasi atribut miliknya sendiri secara independen dari objek lain."
    },
    {
      "id": "lesson-py-23",
      "courseId": "course-py-04",
      "slug": "oop-metode-dan-properti",
      "title": "23. OOP: Metode Instance & Representasi String",
      "summary": "Menambahkan perilaku (metode), magic method __str__, dan memodifikasi properti objek.",
      "order": 23,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Metode pada Objek & Magic Method `__str__`\n\nMetode adalah fungsi yang hidup di dalam sebuah kelas dan mendefinisikan **perilaku (behavior)** yang dapat dilakukan oleh objek tersebut.\n\n---\n\n### Menambahkan Metode ke dalam Class\n```python\nclass RekeningBank:\n    def __init__(self, pemilik, saldo_awal=0):\n        self.pemilik = pemilik\n        self.saldo = saldo_awal\n\n    # Metode untuk setor uang\n    def setor(self, jumlah):\n        if jumlah > 0:\n            self.saldo += jumlah\n            print(f\"Berhasil setor Rp {jumlah:,.2f}. Saldo saat ini: Rp {self.saldo:,.2f}\")\n        else:\n            print(\"Jumlah setor harus lebih besar dari 0.\")\n\n    # Metode untuk tarik tunai\n    def tarik(self, jumlah):\n        if jumlah > self.saldo:\n            print(\"Transaksi ditolak: Saldo tidak mencukupi!\")\n        elif jumlah <= 0:\n            print(\"Jumlah penarikan tidak valid.\")\n        else:\n            self.saldo -= jumlah\n            print(f\"Berhasil tarik Rp {jumlah:,.2f}. Sisa saldo: Rp {self.saldo:,.2f}\")\n\n# Menggunakan kelas RekeningBank\ntabungan_azzam = RekeningBank(\"Azzam\", 500000)\ntabungan_azzam.setor(250000)\ntabungan_azzam.tarik(100000)\n```\n\n---\n\n### Magic Method `__str__()` (Representasi Teks)\nTanpa metode `__str__`, jika kamu mencetak objek dengan `print(tabungan_azzam)`, konsol hanya menampilkan kode memori `<__main__.RekeningBank object at 0x000...>`.\n\nMetode `__str__()` menentukan apa yang harus ditampilkan saat objek dikonversi menjadi string:\n\n```python\nclass Buku:\n    def __init__(self, judul, penulis, halaman):\n        self.judul = judul\n        self.penulis = penulis\n        self.halaman = halaman\n\n    def __str__(self):\n        return f\"Buku '{self.judul}' karya {self.penulis} ({self.halaman} hal.)\"\n\nbuku_python = Buku(\"Mastering Python 3\", \"Guido van Rossum\", 450)\nprint(buku_python)\n# Output ramah: Buku 'Mastering Python 3' karya Guido van Rossum (450 hal.)\n```"
    },
    {
      "id": "lesson-py-24",
      "courseId": "course-py-04",
      "slug": "oop-inheritance-pewarisan",
      "title": "24. OOP: Pewarisan (Inheritance) & Polymorphism",
      "summary": "Mewariskan atribut dan metode ke Subclass, memanggil fungsi super(), dan overriding metode.",
      "order": 24,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Pewarisan (Inheritance) di Python\n\nPewarisan memungkinkan kita membuat sebuah kelas baru (**Child / Subclass**) yang mewarisi seluruh atribut dan metode dari kelas yang sudah ada (**Parent / Superclass**).\n\nKeuntungan utama: Reusabilitas kode dan kemudahan memperluas fitur tanpa mengubah kode asli.\n\n---\n\n### Kelas Induk (Parent) dan Kelas Turunan (Child)\n\nSintaks: `class Anak(Induk):`\n\nGunakan fungsi **`super()`** untuk memanggil konstruktor dan metode milik kelas induk:\n\n```python\n# Kelas Induk (Parent Class)\nclass Karyawan:\n    def __init__(self, nama, gaji_pokok):\n        self.nama = nama\n        self.gaji_pokok = gaji_pokok\n\n    def info(self):\n        return f\"Karyawan: {self.nama}, Gaji Pokok: Rp {self.gaji_pokok:,.2f}\"\n\n# Kelas Anak 1: SoftwareEngineer mewarisi Karyawan\nclass SoftwareEngineer(Karyawan):\n    def __init__(self, nama, gaji_pokok, tech_stack):\n        # Panggil konstruktor kelas induk\n        super().__init__(nama, gaji_pokok)\n        self.tech_stack = tech_stack\n\n    # Method Overriding: Menyesuaikan info khusus untuk engineer\n    def info(self):\n        return f\"Software Engineer: {self.nama} | Stack: {self.tech_stack} | Gaji: Rp {self.gaji_pokok:,.2f}\"\n\n# Kelas Anak 2: Manager mewarisi Karyawan\nclass Manager(Karyawan):\n    def __init__(self, nama, gaji_pokok, tunjangan):\n        super().__init__(nama, gaji_pokok)\n        self.tunjangan = tunjangan\n\n    def total_pendapatan(self):\n        return self.gaji_pokok + self.tunjangan\n\n# Instansiasi\ndev = SoftwareEngineer(\"Azzam\", 15000000, \"Python & Next.js\")\nmgr = Manager(\"Budi\", 20000000, 5000000)\n\nprint(dev.info())\nprint(mgr.info())\nprint(f\"Total Pendapatan Manager: Rp {mgr.total_pendapatan():,.2f}\")\n```\n\n---\n\n### Polymorphism (Banyak Bentuk)\nPolymorphism memungkinkan kita memperlakukan berbagai objek dari kelas berbeda dengan antarmuka yang sama:\n\n```python\ndaftar_staf = [dev, mgr]\n\nfor staf in daftar_staf:\n    print(staf.info())\n```"
    },
    {
      "id": "lesson-py-25",
      "courseId": "course-py-04",
      "slug": "python-json",
      "title": "25. Bekerja dengan Data JSON di Python",
      "summary": "Parsing string JSON ke dictionary dengan json.loads, serialisasi ke JSON dengan json.dumps, dan manipulasi file.",
      "order": 25,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Mengelola Data JSON di Python\n\n**JSON (JavaScript Object Notation)** adalah standar format pertukaran data paling populer di internet yang digunakan oleh REST API, database dokumen, dan file konfigurasi.\n\nPython memiliki modul bawaan bernama **`json`** untuk mengonversi data JSON ke tipe Python dan sebaliknya.\n\n---\n\n### Ringkasan Fungsi Modul JSON:\n| Fungsi | Arah Konversi | Keterangan |\n|---|---|---|\n| **`json.loads()`** | String JSON $\rightarrow$ Python Dict | **s** = string |\n| **`json.dumps()`** | Python Dict $\rightarrow$ String JSON | **s** = string |\n| **`json.load()`** | File JSON $\rightarrow$ Python Dict | Membaca langsung dari file |\n| **`json.dump()`** | Python Dict $\rightarrow$ File JSON | Menulis langsung ke file |\n\n---\n\n### 1. Mengubah JSON String Menjadi Python Dictionary (`loads`)\n```python\nimport json\n\ndata_json_string = '''\n{\n    \"nama\": \"Azzam\",\n    \"kursus\": \"Python Dasar\",\n    \"lulus\": true,\n    \"skor\": 95\n}\n'''\n\n# Parsing JSON ke Dict\ndata_dict = json.loads(data_json_string)\n\nprint(type(data_dict))      # <class 'dict'>\nprint(data_dict[\"nama\"])    # 'Azzam'\nprint(data_dict[\"lulus\"])   # True (Otomatis dikonversi ke bool Python)\n```\n\n---\n\n### 2. Mengubah Python Dictionary Menjadi JSON String (`dumps`)\n```python\nmahasiswa = {\n    \"id\": 101,\n    \"nama\": \"Citra\",\n    \"minat\": [\"Machine Learning\", \"Web Development\"],\n    \"aktif\": True\n}\n\n# Konversi dict ke JSON string berformat rapi (indent=4)\njson_output = json.dumps(mahasiswa, indent=4)\nprint(json_output)\n```\n\n**Output JSON:**\n```json\n{\n    \"id\": 101,\n    \"nama\": \"Citra\",\n    \"minat\": [\n        \"Machine Learning\",\n        \"Web Development\"\n    ],\n    \"aktif\": true\n}\n```\n\n---\n\n### 3. Membaca & Menulis Langsung ke File JSON\n```python\n# Menulis data ke file database.json\nwith open(\"database.json\", \"w\", encoding=\"utf-8\") as f:\n    json.dump(mahasiswa, f, indent=4)\nprint(\"Data berhasil disimpan ke database.json!\")\n\n# Membaca kembali dari file database.json\nwith open(\"database.json\", \"r\", encoding=\"utf-8\") as f:\n    data_terbaca = json.load(f)\n    print(\"Data yang dibaca:\", data_terbaca[\"nama\"])\n```"
    }
  ],
  "course-ts-05": [
    {
      "id": "lesson-ts-01",
      "courseId": "course-ts-05",
      "slug": "pengenalan-sintaks-typescript",
      "title": "1. Pengenalan TypeScript & Compiler (tsc)",
      "summary": "Mengenal keunggulan static typing, arsitektur superset JavaScript, dan kompilasi kode dengan tsc.",
      "order": 1,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Mengenal TypeScript: JavaScript dengan Kekuatan Penuh\n\n**TypeScript** adalah bahasa pemrograman sumber terbuka yang dikembangkan oleh **Microsoft**. TypeScript merupakan *superset* ketat dari JavaScript, artinya **semua kode JavaScript yang valid adalah kode TypeScript yang valid**, namun TypeScript menambahkan fitur **pengetikan statis (static type-checking)**.\n\n---\n\n### Mengapa Industri Beralih ke TypeScript?\n1. **Pencegahan Bug Sejak Awal:** Sekitar 15-30% bug umum di JavaScript (seperti `TypeError: Cannot read properties of undefined`) terdeteksi langsung saat mengetik di editor.\n2. **Autocompletion & IntelliSense Super Cepat:** VS Code memahami struktur data setiap fungsi dan variabel secara akurat.\n3. **Refactoring Lebih Aman:** Mengganti nama fungsi atau properti di proyek raksasa dapat dilakukan otomatis tanpa takut merusak komponen lain.\n\n---\n\n### Cara Kerja Kompilator (`tsc`)\nBrowser tidak dapat mengeksekusi TypeScript secara langsung. Kompilator TypeScript (`tsc`) bertugas mentranspilasi file `.ts` menjadi kode JavaScript `.js` murni yang kompatibel dengan semua browser.\n\n```typescript\n// File: halo.ts\nconst pesan: string = \"Halo dari TypeScript di KodeLuma!\";\nconsole.log(pesan);\n```\n\nPerintah kompilasi di terminal:\n```bash\n# Mengompilasi halo.ts menjadi halo.js\nnpx tsc halo.ts\n```\n\n---\n\n### Type Inference (Inferensi Otomatis)\nTypeScript sangat cerdas. Jika kamu langsung memberikan nilai pada variabel, kamu tidak wajib menuliskan tipenya secara manual:\n\n```typescript\nlet tahun = 2026; // TypeScript otomatis menyimpulkan tipenya adalah number\n// tahun = \"Dua Ribu Dua Puluh Enam\"; \n// ❌ Error: Type 'string' is not assignable to type 'number'.\n```"
    },
    {
      "id": "lesson-ts-02",
      "courseId": "course-ts-05",
      "slug": "tipe-primitif-type-annotation",
      "title": "2. Tipe Primitif & Type Annotation",
      "summary": "Menentukan tipe data eksplisit (string, number, boolean, any, unknown, never).",
      "order": 2,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Tipe Primitif di TypeScript\n\nType Annotation ditulis dengan tanda titik dua (`:`) diikuti nama tipenya setelah nama variabel.\n\n---\n\n### Tipe Primitif Utama\n```typescript\n// 1. String\nlet namaPengguna: string = \"Azzam\";\n\n// 2. Number (mencakup bilangan bulat dan desimal)\nlet umur: number = 22;\nlet skor: number = 98.5;\n\n// 3. Boolean\nlet isActive: boolean = true;\nlet isGraduated: boolean = false;\n```\n\n---\n\n### Tipe Khusus di TypeScript: `any` vs `unknown` vs `never`\n\n| Tipe | Penjelasan | Rekomendasi Penggunaan |\n|---|---|---|\n| **`any`** | Mematikan pengecekan tipe sama sekali | ⚠️ Hindari sebisa mungkin |\n| **`unknown`** | Tipe belum diketahui, namun wajib divalidasi sebelum digunakan | ✅ Aman untuk data input dinamis |\n| **`never`** | Menandai fungsi yang tidak akan pernah selesai/melempar error | ✅ Untuk exhaustive checking |\n\n```typescript\n// Bahaya any:\nlet dataBebas: any = \"Teks\";\ndataBebas.metodeTakAda(); // Lolos kompilasi tapi CRASH saat runtime!\n\n// Keamanan unknown:\nlet dataAman: unknown = \"Halo Dunia\";\n// console.log(dataAman.toUpperCase()); // ❌ Error sebelum dicek tipenya!\n\nif (typeof dataAman === \"string\") {\n  console.log(dataAman.toUpperCase()); // ✅ Aman, TypeScript tahu ini string!\n}\n```"
    },
    {
      "id": "lesson-ts-03",
      "courseId": "course-ts-05",
      "slug": "array-dan-tuples-typescript",
      "title": "3. Array & Tuples di TypeScript",
      "summary": "Menetapkan tipe array yang seragam, readonly array, dan tuple bertipe tetap.",
      "order": 3,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Menetapkan Tipe pada Array\n\nDi TypeScript, kita dapat memastikan bahwa array hanya berisi elemen dengan tipe data tertentu.\n\n---\n\n### Mendeklarasikan Array\nDua sintaks standar untuk mendeklarasikan array:\n1. Menggunakan tanda kurung siku: `type[]` (Paling Populer)\n2. Menggunakan Generic Array: `Array<type>`\n\n```typescript\nconst daftarNilai: number[] = [85, 90, 78, 92];\nconst daftarBahasa: Array<string> = [\"TypeScript\", \"Python\", \"Go\"];\n\ndaftarNilai.push(95); // ✅ Valid\n// daftarNilai.push(\"Seratus\"); \n// ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'.\n```\n\n---\n\n### Mengenal Tuples\n**Tuple** adalah array dengan **panjang tetap** dan setiap posisi indeks memiliki **tipe data tertentu yang sudah ditentukan**.\n\n```typescript\n// Tuple: [string, number, boolean]\nlet siswa: [string, number, boolean];\n\nsiswa = [\"Azzam\", 22, true]; // ✅ Valid sesuai urutan\n// siswa = [22, \"Azzam\", true]; // ❌ Error: Posisi indeks tidak cocok!\n\n// Contoh Populer: Koordinat Geografis [Latitude, Longitude]\nconst lokasiKantor: [number, number] = [-6.2088, 106.8456];\n```\n\n---\n\n### Readonly Array (Array Anti-Modifikasi)\nMencegah mutasi (seperti `push`, `pop`, atau perubahan elemen):\n\n```typescript\nconst daftarHari: readonly string[] = [\"Senin\", \"Selasa\", \"Rabu\"];\n// daftarHari.push(\"Kamis\"); \n// ❌ Error: Property 'push' does not exist on type 'readonly string[]'.\n```"
    },
    {
      "id": "lesson-ts-04",
      "courseId": "course-ts-05",
      "slug": "tipe-objek-dan-interfaces",
      "title": "4. Tipe Objek & Interfaces",
      "summary": "Mendefinisikan kontrak bentuk data dengan interface, optional properties, dan readonly.",
      "order": 4,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Mengatur Bentuk Objek dengan Interface\n\n**Interface** adalah cetak biru (kontrak) yang menentukan properti apa saja yang wajib dan boleh dimiliki oleh suatu objek JavaScript.\n\n---\n\n### Sintaks Dasar Interface\n```typescript\ninterface Mahasiswa {\n  id: string;\n  namaLengkap: string;\n  ipk: number;\n  sudahLulus: boolean;\n}\n\nconst siswaA: Mahasiswa = {\n  id: \"mhs-101\",\n  namaLengkap: \"Azzam Codex\",\n  ipk: 3.92,\n  sudahLulus: true,\n};\n```\n\n---\n\n### Properti Opsional (`?`) dan Readonly\n- **`?` (Optional):** Menandai properti yang tidak wajib diisi.\n- **`readonly`:** Menandai properti yang hanya bisa diisi sekali saat pembuatan dan tidak boleh diganti nilainya.\n\n```typescript\ninterface Kursus {\n  readonly id: string; // Tidak boleh diubah setelah instansiasi\n  judul: string;\n  ringkasan?: string;  // Boleh kosong / undefined\n  durasiMenit: number;\n}\n\nconst kelasNext: Kursus = {\n  id: \"crs-01\",\n  judul: \"Next.js Fullstack\",\n  durasiMenit: 180,\n  // ringkasan boleh tidak dicantumkan\n};\n\n// kelasNext.id = \"crs-99\"; \n// ❌ Error: Cannot assign to 'id' because it is a read-only property.\n```"
    },
    {
      "id": "lesson-ts-05",
      "courseId": "course-ts-05",
      "slug": "type-aliases-dan-union-types",
      "title": "5. Type Aliases & Union Types",
      "summary": "Membuat alias tipe kustom, menggabungkan tipe dengan pipe (|), dan literal types.",
      "order": 5,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Type Aliases & Union Types\n\nKeyword **`type`** digunakan untuk memberi nama baru pada suatu bentuk tipe data, baik berupa primitif, objek, maupun kombinasi.\n\n---\n\n### Union Types (`|`)\nUnion Types memungkinkan suatu variabel memegang **salah satu dari beberapa pilihan tipe**:\n\n```typescript\n// ID bisa berupa angka atau string\ntype IDPengguna = string | number;\n\nfunction cetakID(id: IDPengguna) {\n  console.log(\"ID Pengguna:\", id);\n}\n\ncetakID(\"USR-9921\"); // ✅ Valid\ncetakID(10482);      // ✅ Valid\n```\n\n---\n\n### Literal Types (Membatasi Nilai Tepat)\nAlih-alih membiarkan string bernilai bebas, kita bisa mengunci nilai hanya pada opsi tertentu:\n\n```typescript\ntype PeranPengguna = \"student\" | \"admin\" | \"mentor\";\ntype StatusKursus = \"draft\" | \"published\" | \"archived\";\n\nlet peran: PeranPengguna = \"admin\";\n// peran = \"superhero\"; \n// ❌ Error: Type '\"superhero\"' is not assignable to type 'PeranPengguna'.\n```\n\n---\n\n### Kapan Memilih `type` vs `interface`?\n- **Gunakan `interface`:** Saat mendefinisikan bentuk objek yang akan di-extend oleh class atau modul lain (Object-oriented).\n- **Gunakan `type`:** Saat bekerja dengan Union, Primitif, Tuple, atau fungsi kompleks."
    },
    {
      "id": "lesson-ts-06",
      "courseId": "course-ts-05",
      "slug": "fungsi-dan-typed-signatures",
      "title": "6. Fungsi & Typed Signatures",
      "summary": "Menentukan tipe parameter, return type, void, default parameters, dan arrow functions.",
      "order": 6,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Menetapkan Tipe pada Fungsi\n\nDi TypeScript, setiap parameter fungsi harus memiliki tipe data yang jelas, begitu juga nilai balik (*return value*) yang dihasilkan fungsi tersebut.\n\n---\n\n### Menetapkan Tipe Parameter & Nilai Balik\n```typescript\nfunction hitungDiskon(hargaAsli: number, persenDiskon: number = 10): number {\n  const potongan = (hargaAsli * persenDiskon) / 100;\n  return hargaAsli - potongan;\n}\n\nconst hargaAkhir = hitungDiskon(100000, 20); // 80000\n```\n\n---\n\n### Tipe Return: `void`\nJika suatu fungsi hanya menjalankan tugas tanpa mengembalikan nilai (seperti `console.log`), gunakan tipe `void`:\n\n```typescript\nfunction kirimNotifikasi(pesan: string): void {\n  console.log(\"[NOTIFIKASI]:\", pesan);\n}\n```\n\n---\n\n### Arrow Function Ber-tipe\n```typescript\n// Tipe fungsi didefinisikan sebagai alias\ntype OperasiMatematika = (x: number, y: number) => number;\n\nconst kali: OperasiMatematika = (x, y) => x * y;\nconst bagi: OperasiMatematika = (x, y) => x / y;\n```"
    },
    {
      "id": "lesson-ts-07",
      "courseId": "course-ts-05",
      "slug": "generics-di-typescript",
      "title": "7. Generics di TypeScript",
      "summary": "Membangun fungsi dan komponen yang reusable dengan type parameter <T> dan type constraints.",
      "order": 7,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Mengenal Generics (<T>) di TypeScript\n\n**Generics** adalah salah satu fitur paling sakti di TypeScript yang memungkinkan kita membuat komponen/fungsi yang dapat bekerja dengan **berbagai tipe data tanpa kehilangan type safety**.\n\n---\n\n### Mengapa Kita Membutuhkan Generics?\nBayangkan fungsi yang mengembalikan elemen pertama dari sebuah array:\n\n```typescript\n// Tanpa generics (menggunakan any = berbahaya):\nfunction getPertamaAny(list: any[]): any {\n  return list[0];\n}\n\n// Dengan Generics <T> (Type Parameter dinamis):\nfunction getPertama<T>(list: T[]): T | undefined {\n  return list[0];\n}\n\nconst angkaPertama = getPertama([10, 20, 30]);      // Tipe: number\nconst kataPertama = getPertama([\"Halo\", \"Dunia\"]); // Tipe: string\n```\n\n---\n\n### Generic Interface untuk Respon API\nPola standar yang digunakan di seluruh industri untuk data response backend:\n\n```typescript\ninterface ApiResponse<TData> {\n  data: TData | null;\n  error: string | null;\n  status: number;\n}\n\ninterface ProfilSiswa {\n  username: string;\n  email: string;\n}\n\nconst responSiswa: ApiResponse<ProfilSiswa> = {\n  data: { username: \"azzam\", email: \"azzam@kodeluma.dev\" },\n  error: null,\n  status: 200,\n};\n```"
    },
    {
      "id": "lesson-ts-08",
      "courseId": "course-ts-05",
      "slug": "type-narrowing-dan-type-guards",
      "title": "8. Type Narrowing & Type Guards",
      "summary": "Mempersempit tipe dengan typeof, instanceof, in operator, dan custom type predicates.",
      "order": 8,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Type Narrowing & Type Guards\n\nKetika sebuah variabel memiliki Union Type (misal: `string | number`), TypeScript akan melarang kita memanggil metode spesifik string (seperti `.toLowerCase()`) sampai tipenya berhasil **dipersempit (narrowed)**.\n\n---\n\n### 1. Menggunakan Operator `typeof`\n```typescript\nfunction formatInput(val: string | number) {\n  if (typeof val === \"string\") {\n    // Di dalam blok ini, TypeScript menjamin val adalah STRING 100%!\n    return val.trim().toLowerCase();\n  }\n  // Di luar if, TypeScript tahu pasti val adalah NUMBER!\n  return val.toFixed(2);\n}\n```\n\n---\n\n### 2. Menggunakan Operator `in`\nMemeriksa keberadaan nama properti pada objek:\n\n```typescript\ninterface Ikan {\n  berenang: () => void;\n}\n\ninterface Burung {\n  terbang: () => void;\n}\n\nfunction gerak(hewan: Ikan | Burung) {\n  if (\"berenang\" in hewan) {\n    hewan.berenang();\n  } else {\n    hewan.terbang();\n  }\n}\n```\n\n---\n\n### 3. Custom Type Guard (`is`)\nKita bisa membuat fungsi validator kustom:\n\n```typescript\nfunction isString(x: unknown): x is string {\n  return typeof x === \"string\";\n}\n```"
    },
    {
      "id": "lesson-ts-09",
      "courseId": "course-ts-05",
      "slug": "utility-types-typescript",
      "title": "9. Utility Types Bawaan (Partial, Pick, Omit, Record)",
      "summary": "Mentransformasi bentuk tipe data dengan utility types bawaan: Partial, Required, Readonly, Pick, Omit, dan Record.",
      "order": 9,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Menguasai TypeScript Utility Types\n\nTypeScript menyediakan sekumpulan tipe bawaan (*utility types*) untuk mempermudah transformasi tipe data umum tanpa perlu menulis ulang interface dari nol.\n\n---\n\n### 1. `Partial<T>` (Semua Properti Menjadi Opsional)\nSangat berguna untuk skenario pembaruan data (*update/patch*):\n\n```typescript\ninterface Pengguna {\n  id: string;\n  nama: string;\n  email: string;\n  umur: number;\n}\n\n// Semua properti Pengguna kini bersifat opsional (?)\ntype UpdatePenggunaInput = Partial<Pengguna>;\n\nfunction perbaruiPengguna(id: string, perubahan: UpdatePenggunaInput) {\n  // Hanya mengubah properti yang dikirimkan\n  console.log(\"Memperbarui user\", id, perubahan);\n}\n\nperbaruiPengguna(\"usr-1\", { nama: \"Azzam Baru\" }); // ✅ Valid tanpa harus kirim email/umur!\n```\n\n---\n\n### 2. `Pick<T, Keys>` vs `Omit<T, Keys>`\n- **`Pick`:** Memilih properti spesifik dari tipe yang ada.\n- **`Omit`:** Menghapus properti tertentu dan menyisakan sisanya.\n\n```typescript\n// Mengambil HANYA nama dan email\ntype RingkasanProfil = Pick<Pengguna, \"nama\" | \"email\">;\n\n// Menghapus 'id' (misalnya saat payload pendaftaran baru)\ntype FormRegistrasi = Omit<Pengguna, \"id\">;\n```\n\n---\n\n### 3. `Record<Keys, Type>` (Kamus / Dictionary Ber-tipe)\nMembuat tipe objek dengan kumpulan kunci (*keys*) dan tipe nilai (*value*) tertentu:\n\n```typescript\ntype Peran = \"admin\" | \"editor\" | \"viewer\";\n\ninterface HakAkses {\n  bisaEdit: boolean;\n  bisaHapus: boolean;\n}\n\nconst hakAksesSistem: Record<Peran, HakAkses> = {\n  admin: { bisaEdit: true, bisaHapus: true },\n  editor: { bisaEdit: true, bisaHapus: false },\n  viewer: { bisaEdit: false, bisaHapus: false },\n};\n```"
    },
    {
      "id": "lesson-ts-10",
      "courseId": "course-ts-05",
      "slug": "enums-typescript",
      "title": "10. TypeScript Enums (Numeric & String Enums)",
      "summary": "Mendefinisikan himpunan konstanta bernama dengan Enums, perbedaan numeric vs string enums, dan const enum.",
      "order": 10,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Mengenal Enums di TypeScript\n\n**Enums** memungkinkan kita mendefinisikan sekumpulan konstanta bernama (*named constants*), mempermudah dokumentasi intensi kode dan menyajikan sekumpulan pilihan yang jelas.\n\n---\n\n### 1. Numeric Enums (Default Berbasis Angka)\nSecara default, nilai enum dimulai dari angka `0` dan bertambah `1` untuk setiap anggota berikutnya:\n\n```typescript\nenum ArahMataAngin {\n  Utara,  // 0\n  Timur,  // 1\n  Selatan,// 2\n  Barat   // 3\n}\n\nlet arah: ArahMataAngin = ArahMataAngin.Utara;\nconsole.log(arah); // Output: 0\n```\n\n---\n\n### 2. String Enums (Paling Direkomendasikan di Industri)\nSetiap anggota diinisialisasi secara eksplisit dengan nilai string:\n\n```typescript\nenum StatusPesanan {\n  MenungguPembayaran = \"PENDING\",\n  Diproses = \"PROCESSING\",\n  Dikirim = \"SHIPPED\",\n  Selesai = \"DELIVERED\",\n  Dibatalkan = \"CANCELLED\"\n}\n\nfunction prosesStatus(status: StatusPesanan) {\n  if (status === StatusPesanan.Selesai) {\n    console.log(\"Pesanan berhasil sampai ke pelanggan!\");\n  }\n}\n\nprosesStatus(StatusPesanan.Selesai);\n```\n\n---\n\n### 3. `const enum` untuk Performa Kompilasi Ekstrem\nJika menggunakan `const enum`, TypeScript akan menghapus objek enum saat kompilasi dan langsung menyematkan nilai aslinya secara *inlined*, menghemat ukuran bundle JS:\n\n```typescript\nconst enum UkuranBaju {\n  Small = \"S\",\n  Medium = \"M\",\n  Large = \"L\"\n}\n\nconst pilihan = UkuranBaju.Medium; \n// Kode JS hasil transpilasi: const pilihan = \"M\";\n```"
    },
    {
      "id": "lesson-ts-11",
      "courseId": "course-ts-05",
      "slug": "type-assertion-dan-const",
      "title": "11. Type Assertions (as) & Const Assertions",
      "summary": "Memberitahu compiler tipe yang lebih spesifik dengan keyword as, non-null assertion (!), dan as const.",
      "order": 11,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Type Assertions di TypeScript\n\nTerkadang kamu mengetahui tipe suatu nilai secara lebih pasti daripada yang bisa disimpulkan oleh compiler TypeScript. Dalam kasus ini, gunakan **Type Assertion**.\n\n---\n\n### 1. Menggunakan Keyword `as`\n```typescript\n// DOM element seleksi menghasilkan tipe Element umum\nconst inputNama = document.getElementById(\"input-nama\") as HTMLInputElement;\n\n// Karena sudah di-assert sebagai HTMLInputElement, properti .value kini dikenali!\nconsole.log(inputNama.value);\n```\n\n---\n\n### 2. Non-Null Assertion Operator (`!`)\nTanda seru (`!`) memberitahu TypeScript bahwa suatu nilai dijamin **tidak bernilai `null` atau `undefined`**:\n\n```typescript\nfunction cetakKarakterPertama(teks?: string) {\n  // Tanpa '!', TypeScript komplain: Object is possibly 'undefined'\n  console.log(teks!.charAt(0));\n}\n```\n\n---\n\n### 3. Const Assertions (`as const`)\nMenjadikan seluruh properti objek atau array bernilai *deep readonly* dan mempertahankan nilai harfiahnya (*literal types*):\n\n```typescript\nconst CONFIG_APP = {\n  endpoint: \"https://api.kodeluma.dev\",\n  port: 3000,\n  theme: \"dark\"\n} as const;\n\n// CONFIG_APP.port = 8080;\n// ❌ Error: Cannot assign to 'port' because it is a read-only property.\n```"
    },
    {
      "id": "lesson-ts-12",
      "courseId": "course-ts-05",
      "slug": "declaration-files-dts",
      "title": "12. Declaration Files (.d.ts) & DefinitelyTyped",
      "summary": "Memahami file deklarasi tipe ambient (.d.ts), namespace, dan menginstal paket tipe @types/*.",
      "order": 12,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## File Deklarasi Tipe (.d.ts)\n\nFile dengan ekstensi **`.d.ts`** adalah file deklarasi tipe murni. File ini tidak memuat kode implementasi JavaScript yang dapat dieksekusi, melainkan hanya mendeskripsikan bentuk API, variabel global, atau modul pustaka luar.\n\n---\n\n### Mengapa File `.d.ts` Penting?\nBanyak pustaka populer (seperti Lodash, Express, jQuery) awalnya ditulis menggunakan JavaScript murni. Agar kita bisa menggunakannya di proyek TypeScript dengan autocompletion dan keamanan tipe, komunitas membuat repositori raksasa **DefinitelyTyped** di bawah namespace `@types`.\n\n```bash\n# Menginstal library JS + deklarasi tipenya\nnpm install lodash\nnpm install -D @types/lodash\n```\n\n---\n\n### Mendeklarasikan Variabel Lingkungan Global\nKamu bisa membuat file `global.d.ts` untuk mendefinisikan variabel global (misal window analytics atau env):\n\n```typescript\n// File: src/types/global.d.ts\ndeclare global {\n  interface Window {\n    kodelumaAnalytics: {\n      trackEvent: (eventName: string, data?: object) => void;\n    };\n  }\n}\n\nexport {};\n```\n\nSetelah dideklarasikan, kamu bisa memanggil `window.kodelumaAnalytics.trackEvent(\"CLICK_DAFTAR\")` tanpa memicu error kompilasi!"
    },
    {
      "id": "lesson-ts-13",
      "courseId": "course-ts-05",
      "slug": "typescript-di-react-nextjs",
      "title": "13. TypeScript dalam React & Next.js",
      "summary": "Praktik terbaik pengetikan komponen React: Props interface, useState typing, dan event handler (MouseEvent, FormEvent).",
      "order": 13,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## TypeScript untuk React & Next.js Modern\n\nKombinasi React/Next.js dengan TypeScript adalah standar de-facto industri untuk pengembangan web frontend modern skala enterprise.\n\n---\n\n### 1. Mengetik Props Komponen\n```typescript\nimport React from 'react';\n\ninterface TombolProps {\n  label: string;\n  onClick: () => void;\n  variant?: 'primary' | 'secondary' | 'danger';\n  disabled?: boolean;\n}\n\nexport const TombolAksi: React.FC<TombolProps> = ({\n  label,\n  onClick,\n  variant = 'primary',\n  disabled = false\n}) => {\n  return (\n    <button\n      onClick={onClick}\n      disabled={disabled}\n      className={`btn btn-${variant}`}\n    >\n      {label}\n    </button>\n  );\n};\n```\n\n---\n\n### 2. Mengetik State (`useState`)\nUntuk tipe data kompleks yang mungkin bernilai `null` di awal:\n\n```typescript\ninterface PenggunaAktif {\n  id: string;\n  username: string;\n}\n\n// State bisa berupa PenggunaAktif atau null\nconst [user, setUser] = useState<PenggunaAktif | null>(null);\n```\n\n---\n\n### 3. Mengetik Event Handler\nReact menyediakan generic event type yang aman:\n\n```typescript\n// Event pengiriman formulir\nconst handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n  e.preventDefault();\n  console.log(\"Formulir diproses!\");\n};\n\n// Event input teks\nconst handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n  console.log(\"Karakter:\", e.target.value);\n};\n```"
    }
  ],
  "course-java-06": [
    {
      "id": "lesson-java-01",
      "courseId": "course-java-06",
      "slug": "pengenalan-java-dan-jvm",
      "title": "1. Pengenalan Java, JVM, & Method main()",
      "summary": "Memahami arsitektur Java, konsep Bytecode, peran JVM, serta struktur kode wajib kelas dan fungsi main.",
      "order": 1,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Selamat Datang di Dunia Pemrograman Java!\n\n**Java** adalah bahasa pemrograman berorientasi objek yang dirancang oleh **James Gosling** di Sun Microsystems (sekarang Oracle) dan dirilis pada tahun 1995.\n\nFilosofi utama Java adalah **WORA** (*Write Once, Run Anywhere*), artinya kode Java yang dikompilasi dapat berjalan di perangkat keras dan sistem operasi apa pun tanpa perlu dikompilasi ulang.\n\n---\n\n### Ekosistem Java: JDK vs JRE vs JVM\n- **JVM (Java Virtual Machine):** Mesin virtual yang mengeksekusi *Bytecode* (`.class`) di atas sistem operasi.\n- **JRE (Java Runtime Environment):** Paket yang berisi JVM dan pustaka standar untuk menjalankan program Java.\n- **JDK (Java Development Kit):** Perangkat lengkap bagi developer yang mencakup compiler (`javac`), debugger, dan JRE.\n\n---\n\n### Struktur Program Pertama di Java\nDi Java, **setiap baris kode wajib berada di dalam sebuah Class**, dan nama class harus sama persis dengan nama file:\n\n```java\n// File: Main.java\npublic class Main {\n    // Titik awal masuk eksekusi program\n    public static void main(String[] args) {\n        System.out.println(\"Halo dari Java di KodeLuma!\");\n        System.out.println(2026);\n    }\n}\n```\n\n---\n\n### Penjelasan Baris Kode Kunci:\n1. `public class Main`: Mendeklarasikan class publik bernama `Main`.\n2. `public static void main(String[] args)`: Method utama yang dicari JVM saat menjalankan program.\n3. `System.out.println(...)`: Perintah untuk mencetak baris teks ke konsol terminal."
    },
    {
      "id": "lesson-java-02",
      "courseId": "course-java-06",
      "slug": "variabel-dan-tipe-data-primitif",
      "title": "2. Variabel & Tipe Data Primitif",
      "summary": "Mendeklarasikan 8 tipe data primitif Java dan memahami konversi tipe data (type casting).",
      "order": 2,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Variabel & Tipe Data Primitif di Java\n\nJava adalah bahasa bertipe statis (*statically typed*), artinya tipe data variabel harus ditentukan saat deklarasi.\n\n---\n\n### 8 Tipe Data Primitif di Java\n| Tipe | Ukuran | Rentang Nilai | Contoh |\n|---|---|---|---|\n| `byte` | 1 byte | -128 s.d 127 | `byte nilai = 100;` |\n| `short` | 2 bytes | -32,768 s.d 32,767 | `short tahun = 2026;` |\n| `int` | 4 bytes | -2 milyar s.d 2 milyar | `int populasi = 1500000;` |\n| `long` | 8 bytes | Angka raksasa (akhiran L) | `long jarak = 9000000000L;` |\n| `float` | 4 bytes | Desimal 6-7 digit (akhiran f) | `float suhu = 36.5f;` |\n| `double` | 8 bytes | Desimal presisi tinggi 15 digit | `double pi = 3.14159265;` |\n| `boolean` | 1 bit | `true` atau `false` | `boolean lulus = true;` |\n| `char` | 2 bytes | Satu karakter Unicode (kutip tunggal) | `char grade = 'A';` |\n\n---\n\n### Tipe Non-Primitif Penting: `String`\nString adalah objek untuk menyimpan rangkaian teks diapit kutip ganda:\n\n```java\nString nama = \"Azzam Codex\";\nSystem.out.println(\"Panjang nama: \" + nama.length());\n```\n\n---\n\n### Konversi Tipe (Type Casting)\n1. **Widening Casting (Otomatis):** Mengubah tipe kecil ke tipe besar:\n   ```java\n   int angka = 9;\n   double desimal = angka; // 9.0\n   ```\n2. **Narrowing Casting (Manual):** Mengubah tipe besar ke tipe kecil (potensi kehilangan data):\n   ```java\n   double pecahan = 9.78;\n   int bulat = (int) pecahan; // Menjadi 9\n   ```"
    },
    {
      "id": "lesson-java-03",
      "courseId": "course-java-06",
      "slug": "operator-dan-ekspresi-java",
      "title": "3. Operator & Ekspresi di Java",
      "summary": "Aritmatika, perbandingan, logika Boolean (&&, ||, !), dan operator penugasan.",
      "order": 3,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Operator di Java\n\nOperator digunakan untuk melakukan operasi pada variabel dan nilai.\n\n---\n\n### 1. Operator Aritmatika\n```java\nint a = 15;\nint b = 4;\n\nSystem.out.println(a + b); // 19 (Penjumlahan)\nSystem.out.println(a - b); // 11 (Pengurangan)\nSystem.out.println(a * b); // 60 (Perkalian)\nSystem.out.println(a / b); // 3  (Pembagian bulat, karena sesama int)\nSystem.out.println(a % b); // 3  (Modulus / sisa bagi)\n```\n\n---\n\n### 2. Operator Logika\n- **`&&` (Logical AND):** Bernilai `true` jika kedua kondisi benar.\n- **`||` (Logical OR):** Bernilai `true` jika salah satu kondisi benar.\n- **`!` (Logical NOT):** Membalikkan nilai logika.\n\n```java\nint umur = 20;\nboolean punyaKTP = true;\n\nif (umur >= 17 && punyaKTP) {\n    System.out.println(\"Memenuhi syarat pendaftaran.\");\n}\n```"
    },
    {
      "id": "lesson-java-04",
      "courseId": "course-java-06",
      "slug": "percabangan-if-else-dan-switch",
      "title": "4. Percabangan if, else if, & switch",
      "summary": "Pengambilan keputusan bersyarat, percabangan bertingkat, dan switch statement.",
      "order": 4,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Percabangan Kondisional di Java\n\nPercabangan memungkinkan program memilih instruksi yang akan dijalankan berdasarkan evaluasi kondisi boolean.\n\n---\n\n### Struktur `if`, `else if`, dan `else`\n```java\nint nilai = 85;\n\nif (nilai >= 90) {\n    System.out.println(\"Predikat: A (Istimewa)\");\n} else if (nilai >= 80) {\n    System.out.println(\"Predikat: B (Sangat Baik)\");\n} else if (nilai >= 70) {\n    System.out.println(\"Predikat: C (Cukup)\");\n} else {\n    System.out.println(\"Predikat: Remedial\");\n}\n```\n\n---\n\n### Percabangan `switch`\nDigunakan ketika kamu ingin membandingkan satu variabel dengan banyak nilai pilihan konstan:\n\n```java\nint nomorHari = 3;\n\nswitch (nomorHari) {\n    case 1:\n        System.out.println(\"Senin\");\n        break;\n    case 2:\n        System.out.println(\"Selasa\");\n        break;\n    case 3:\n        System.out.println(\"Rabu\");\n        break;\n    default:\n        System.out.println(\"Hari lainnya\");\n        break;\n}\n```"
    },
    {
      "id": "lesson-java-05",
      "courseId": "course-java-06",
      "slug": "perulangan-for-while-do-while",
      "title": "5. Perulangan for, while, & For-Each",
      "summary": "Menjalankan blok kode berulang kali dengan for klasik, while, dan enhanced for-each.",
      "order": 5,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Perulangan di Java\n\nPerulangan menghemat waktu dan mengurangi redundansi kode.\n\n---\n\n### 1. For Loop Klasik\n```java\nfor (int i = 1; i <= 5; i++) {\n    System.out.println(\"Hitungan ke-\" + i);\n}\n```\n\n---\n\n### 2. While Loop & Do-While Loop\n```java\nint hitung = 1;\nwhile (hitung <= 3) {\n    System.out.println(\"Nilai: \" + hitung);\n    hitung++;\n}\n```\n\n---\n\n### 3. Enhanced For-Each Loop (Favorit Developer)\nDigunakan secara eksklusif untuk mengulang elemen dalam array atau koleksi tanpa perlu mengelola indeks manual:\n\n```java\nString[] bahasa = {\"Java\", \"Python\", \"TypeScript\", \"C++\"};\n\nfor (String b : bahasa) {\n    System.out.println(\"Bahasa pemrograman: \" + b);\n}\n```"
    },
    {
      "id": "lesson-java-06",
      "courseId": "course-java-06",
      "slug": "array-dan-arraylist",
      "title": "6. Array & Koleksi ArrayList Dinamis",
      "summary": "Array berukuran tetap vs ArrayList dinamis di Java, method add, get, size, dan remove.",
      "order": 6,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Array vs ArrayList di Java\n\n---\n\n### 1. Array Standar (Ukuran Tetap)\nSetelah dibuat, ukuran array Java **tidak dapat diubah**:\n\n```java\nint[] skor = new int[3]; // Alokasi 3 slot\nskor[0] = 80;\nskor[1] = 95;\nskor[2] = 88;\n\nSystem.out.println(\"Panjang array: \" + skor.length);\n```\n\n---\n\n### 2. `ArrayList` (Array Dinamis yang Bisa Tumbuh)\nUntuk koleksi yang ukurannya berubah-ubah secara fleksibel, gunakan class `ArrayList` dari paket `java.util`:\n\n```java\nimport java.util.ArrayList;\n\npublic class ContohArrayList {\n    public static void main(String[] args) {\n        ArrayList<String> daftarSiswa = new ArrayList<>();\n\n        // Menambah elemen\n        daftarSiswa.add(\"Azzam\");\n        daftarSiswa.add(\"Budi\");\n        daftarSiswa.add(\"Citra\");\n\n        // Mengakses elemen\n        System.out.println(\"Siswa pertama: \" + daftarSiswa.get(0));\n\n        // Menghapus elemen\n        daftarSiswa.remove(\"Budi\");\n\n        // Mengetahui jumlah data\n        System.out.println(\"Total siswa: \" + daftarSiswa.size());\n    }\n}\n```"
    },
    {
      "id": "lesson-java-07",
      "courseId": "course-java-06",
      "slug": "pemrograman-berorientasi-objek-class",
      "title": "7. Pemrograman Berorientasi Objek: Class & Objek",
      "summary": "Fondasi OOP Java: Class, Objek, Konstruktor, kata kunci this, dan enkapsulasi.",
      "order": 7,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Pemrograman Berorientasi Objek (OOP) di Java\n\nJava adalah bahasa OOP murni. Semua kode dibangun di atas konsep Class dan Objek.\n\n---\n\n### Membuat Class & Konstruktor\n```java\npublic class Mobil {\n    // Atribut (State)\n    private String merk;\n    private int tahun;\n\n    // Konstruktor\n    public Mobil(String merk, int tahun) {\n        this.merk = merk;\n        this.tahun = tahun;\n    }\n\n    // Metode (Behavior)\n    public void nyalakanMesin() {\n        System.out.println(\"Mesin mobil \" + this.merk + \" (\" + this.tahun + \") menyala: Vroom!\");\n    }\n\n    // Getter untuk enkapsulasi\n    public String getMerk() {\n        return this.merk;\n    }\n}\n```\n\n---\n\n### Menginstansiasi Objek di Program Utama\n```java\npublic class Main {\n    public static void main(String[] args) {\n        // Membuat objek baru menggunakan keyword 'new'\n        Mobil mobilA = new Mobil(\"Honda Civic\", 2024);\n        mobilA.nyalakanMesin();\n        System.out.println(\"Merk: \" + mobilA.getMerk());\n    }\n}\n```"
    },
    {
      "id": "lesson-java-08",
      "courseId": "course-java-06",
      "slug": "oop-inheritance-dan-interface",
      "title": "8. OOP: Pewarisan (Inheritance) & Interface",
      "summary": "Memperluas kelas dengan extends, memanggil super(), dan kontrak interface dengan implements.",
      "order": 8,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Pewarisan & Interface di Java\n\n---\n\n### Pewarisan (`extends`)\nSebuah subclass mewarisi properti dan method dari superclass:\n\n```java\n// Superclass\nclass Hewan {\n    public void bersuara() {\n        System.out.println(\"Hewan mengeluarkan suara.\");\n    }\n}\n\n// Subclass\nclass Kucing extends Hewan {\n    @Override\n    public void bersuara() {\n        System.out.println(\"Kucing: Meow meow!\");\n    }\n}\n```\n\n---\n\n### Kontrak `interface`\nInterface adalah cetak biru 100% abstrak yang mewajibkan class pengimplementasi menguraikan semua method-nya:\n\n```java\ninterface Pembayaran {\n    void prosesBayar(double jumlah);\n}\n\nclass TransferBank implements Pembayaran {\n    @Override\n    public void prosesBayar(double jumlah) {\n        System.out.println(\"Memproses transfer bank sebesar Rp \" + jumlah);\n    }\n}\n```"
    },
    {
      "id": "lesson-java-09",
      "courseId": "course-java-06",
      "slug": "penanganan-eksepsi-java",
      "title": "9. Penanganan Eksepsi (try, catch, finally, throws)",
      "summary": "Menangani runtime error dengan try-catch-finally, checked vs unchecked exceptions, dan melempar eksepsi dengan throw.",
      "order": 9,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Penanganan Eksepsi di Java\n\nEksepsi (*exception*) adalah kondisi abnormal atau kesalahan yang terjadi saat program sedang berjalan (*runtime*), yang jika tidak ditangani akan membuat program crash seketika.\n\n---\n\n### Blok `try...catch...finally`\n```java\npublic class UjiEksepsi {\n    public static void main(String[] args) {\n        try {\n            int[] angka = {10, 20, 30};\n            // Mencoba mengakses indeks di luar batas array\n            System.out.println(angka[5]);\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"Terjadi kesalahan: \" + e.getMessage());\n        } finally {\n            // Blok ini SELALU dieksekusi baik ada error maupun tidak\n            System.out.println(\"Operasi selesai dibersihkan.\");\n        }\n    }\n}\n```\n\n---\n\n### Melempar Eksepsi Sendiri (`throw`)\nKita bisa memicu eksepsi saat aturan validasi bisnis dilanggar:\n\n```java\npublic static void validasiUsia(int usia) {\n    if (usia < 17) {\n        throw new IllegalArgumentException(\"Usia minimal harus 17 tahun!\");\n    }\n    System.out.println(\"Pendaftaran berhasil diproses.\");\n}\n```"
    },
    {
      "id": "lesson-java-10",
      "courseId": "course-java-06",
      "slug": "hashmap-dan-hashset-java",
      "title": "10. Java Collections Framework: HashMap & HashSet",
      "summary": "Menyimpan pasangan Key-Value berkecepatan tinggi dengan HashMap dan koleksi elemen unik dengan HashSet.",
      "order": 10,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Koleksi Modern: `HashMap` & `HashSet`\n\nJava Collections Framework menyediakan struktur data canggih untuk mengelola kumpulan data secara efisien.\n\n---\n\n### 1. `HashMap<K, V>` (Struktur Key-Value)\nMenyimpan data berdasarkan kunci unik untuk pencarian instan $O(1)$:\n\n```java\nimport java.util.HashMap;\n\npublic class ContohHashMap {\n    public static void main(String[] args) {\n        HashMap<String, Integer> nilaiSiswa = new HashMap<>();\n\n        // Menambahkan pasangan key-value\n        nilaiSiswa.put(\"Azzam\", 95);\n        nilaiSiswa.put(\"Budi\", 88);\n        nilaiSiswa.put(\"Citra\", 92);\n\n        // Mengambil data berdasarkan key\n        System.out.println(\"Nilai Azzam: \" + nilaiSiswa.get(\"Azzam\")); // 95\n\n        // Iterasi HashMap\n        for (String nama : nilaiSiswa.keySet()) {\n            System.out.println(nama + \" -> \" + nilaiSiswa.get(nama));\n        }\n    }\n}\n```\n\n---\n\n### 2. `HashSet<T>` (Kumpulan Nilai Unik Tanpa Duplikat)\nSecara otomatis membuang elemen yang sama:\n\n```java\nimport java.util.HashSet;\n\nHashSet<String> emailUnik = new HashSet<>();\nemailUnik.add(\"halo@kodeluma.dev\");\nemailUnik.add(\"admin@kodeluma.dev\");\nemailUnik.add(\"halo@kodeluma.dev\"); // Duplikat diabaikan otomatis!\n\nSystem.out.println(\"Total email terdaftar: \" + emailUnik.size()); // 2\n```"
    },
    {
      "id": "lesson-java-11",
      "courseId": "course-java-06",
      "slug": "generics-di-java",
      "title": "11. Generics di Java (<T>)",
      "summary": "Membuat Class dan Method yang fleksibel terhadap berbagai tipe data dengan jaminan Type Safety pada waktu kompilasi.",
      "order": 11,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Mengenal Generics di Java\n\n**Generics** diperkenalkan pada Java 5 untuk menambahkan keamanan tipe (*type safety*) pada struktur data dan menghilangkan kebutuhan type casting manual yang rawan `ClassCastException`.\n\n---\n\n### Membuat Generic Class\n```java\n// T adalah Type Parameter yang fleksibel\npublic class KotakPenyimpan<T> {\n    private T isi;\n\n    public void simpan(T item) {\n        this.isi = item;\n    }\n\n    public T ambil() {\n        return this.isi;\n    }\n}\n```\n\n---\n\n### Penggunaan Generic Class\n```java\npublic class Main {\n    public static void main(String[] args) {\n        // Kotak untuk String\n        KotakPenyimpan<String> kotakTeks = new KotakPenyimpan<>();\n        kotakTeks.simpan(\"Sertifikat KodeLuma\");\n        System.out.println(kotakTeks.ambil().toUpperCase());\n\n        // Kotak untuk Integer\n        KotakPenyimpan<Integer> kotakAngka = new KotakPenyimpan<>();\n        kotakAngka.simpan(2026);\n        System.out.println(\"Tahun: \" + kotakAngka.ambil());\n    }\n}\n```"
    },
    {
      "id": "lesson-java-12",
      "courseId": "course-java-06",
      "slug": "file-io-di-java",
      "title": "12. Operasi File I/O di Java",
      "summary": "Membaca dan menulis file teks menggunakan Scanner, FileWriter, dan BufferedReader secara aman.",
      "order": 12,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Operasi File I/O (Input/Output) di Java\n\n---\n\n### 1. Menulis File Teks (`FileWriter`)\n```java\nimport java.io.FileWriter;\nimport java.io.IOException;\n\npublic class TulisFile {\n    public static void main(String[] args) {\n        try (FileWriter penulis = new FileWriter(\"catatan.txt\")) {\n            penulis.write(\"Selamat Datang di Kursus Java KodeLuma!\\n\");\n            penulis.write(\"Tahun 2026: Menguasai Backend Modern.\\n\");\n            System.out.println(\"File berhasil ditulis!\");\n        } catch (IOException e) {\n            System.out.println(\"Gagal menulis file: \" + e.getMessage());\n        }\n    }\n}\n```\n\n---\n\n### 2. Membaca File Teks (`Scanner` & `File`)\n```java\nimport java.io.File;\nimport java.io.FileNotFoundException;\nimport java.util.Scanner;\n\npublic class BacaFile {\n    public static void main(String[] args) {\n        try {\n            File berkas = new File(\"catatan.txt\");\n            Scanner pembaca = new Scanner(berkas);\n\n            while (pembaca.hasNextLine()) {\n                String baris = pembaca.nextLine();\n                System.out.println(\">> \" + baris);\n            }\n            pembaca.close();\n        } catch (FileNotFoundException e) {\n            System.out.println(\"File tidak ditemukan!\");\n        }\n    }\n}\n```"
    },
    {
      "id": "lesson-java-13",
      "courseId": "course-java-06",
      "slug": "streams-api-dan-lambda-java",
      "title": "13. Modern Java: Streams API & Lambda",
      "summary": "Pemrograman fungsional di Java modern: ekspresi lambda (->), filter(), map(), dan collect().",
      "order": 13,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Java Streams API & Ekspresi Lambda\n\nDiperkenalkan sejak Java 8, **Streams API** memungkinkan pengolahan koleksi data secara deklaratif, bersih, dan ringkas layaknya pemrosesan kueri.\n\n---\n\n### Menyaring dan Mentransformasi Data\n```java\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\npublic class ContohStreams {\n    public static void main(String[] args) {\n        List<String> bahasa = Arrays.asList(\"Java\", \"JavaScript\", \"Python\", \"C++\", \"Julia\");\n\n        // Ambil bahasa yang berawalan 'J' dan ubah ke huruf kapital semua\n        List<String> hasil = bahasa.stream()\n                .filter(b -> b.startsWith(\"J\"))      // Lambda filter\n                .map(String::toUpperCase)           // Method reference\n                .sorted()                           // Mengurutkan\n                .collect(Collectors.toList());      // Kumpulkan ke List baru\n\n        System.out.println(hasil); // [JAVA, JAVASCRIPT, JULIA]\n    }\n}\n```"
    }
  ],
  "course-cpp-07": [
    {
      "id": "lesson-cpp-01",
      "courseId": "course-cpp-07",
      "slug": "pengenalan-sintaks-cpp",
      "title": "1. Pengenalan C++, Kompiler g++, & Hello World",
      "summary": "Mengenal sejarah C++, kompilasi dengan g++, pustaka iostream, dan fungsi main().",
      "order": 1,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Mengenal Bahasa Pemrograman C++\n\n**C++** dirancang oleh **Bjarne Stroustrup** di Bell Labs pada tahun 1979 sebagai perluasan dari bahasa C dengan menambahkan fitur pemrograman berorientasi objek (*C with Classes*).\n\nC++ adalah salah satu bahasa tercepat dan paling efisien di dunia, digunakan dalam pengembangan:\n- Game Engine (Unreal Engine)\n- Sistem Operasi & Browser (Chrome V8)\n- Sistem Perdagangan Saham Berkecepatan Tinggi (HFT)\n- Competitive Programming (ICPC, OSN, Olimpiade Informatika)\n\n---\n\n### Struktur Program Pertama di C++\n```cpp\n#include <iostream>\n\nint main() {\n    // Mencetak output ke terminal\n    std::cout << \"Halo dari C++ di KodeLuma!\" << std::endl;\n    std::cout << \"Tahun: \" << 2026 << \"\n\";\n    return 0; // Mengindikasikan program sukses berjalan\n}\n```\n\n---\n\n### Penjelasan Anatomi:\n1. `#include <iostream>`: Header file yang berisi deklarasi objek stream input/output.\n2. `std::cout`: Objek *Character Output* untuk menampilkan teks ke konsol terminal.\n3. `<<`: Operator insertion untuk mengalirkan data ke cout.\n4. `std::endl` atau `\\n`: Membuat baris baru."
    },
    {
      "id": "lesson-cpp-02",
      "courseId": "course-cpp-07",
      "slug": "variabel-tipe-data-dan-io",
      "title": "2. Tipe Data, Variabel, & Input (cin)",
      "summary": "Mendeklarasikan variabel C++, tipe dasar, dan menerima input dari keyboard dengan std::cin.",
      "order": 2,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Tipe Data & Input Pengguna di C++\n\n---\n\n### Tipe Data Utama di C++\n```cpp\nint umur = 21;              // Bilangan bulat (4 bytes)\ndouble ipk = 3.95;          // Bilangan riil pecahan (8 bytes)\nchar inisial = 'A';         // Karakter tunggal (1 byte)\nbool aktif = true;          // Boolean (1 byte)\nstd::string nama = \"Azzam\"; // Teks string dari pustaka <string>\n```\n\n---\n\n### Menerima Input dari Terminal dengan `std::cin`\nOperator extraction (`>>`) digunakan untuk mengambil data dari keyboard pengguna:\n\n```cpp\n#include <iostream>\n#include <string>\n\nint main() {\n    int angka;\n    std::cout << \"Masukkan sebuah angka favorit: \";\n    std::cin >> angka;\n\n    std::cout << \"Dua kali lipat angkamu adalah: \" << (angka * 2) << \"\n\";\n    return 0;\n}\n```"
    },
    {
      "id": "lesson-cpp-03",
      "courseId": "course-cpp-07",
      "slug": "operator-dan-aritmatika-cpp",
      "title": "3. Operator Aritmatika & Logika C++",
      "summary": "Operasi matematika, modulus, operator perbandingan, dan logika Boolean (&&, ||, !).",
      "order": 3,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Operator di C++\n\n---\n\n### Operator Aritmatika\n```cpp\nint x = 20;\nint y = 6;\n\nstd::cout << \"Tambah : \" << (x + y) << \"\n\"; // 26\nstd::cout << \"Kurang : \" << (x - y) << \"\n\"; // 14\nstd::cout << \"Kali   : \" << (x * y) << \"\n\"; // 120\nstd::cout << \"Bagi   : \" << (x / y) << \"\n\"; // 3 (Pembagian bulat)\nstd::cout << \"Sisa   : \" << (x % y) << \"\n\"; // 2 (Modulus)\n```\n\n---\n\n### Operator Logika\n- `&&` (AND): Kedua kondisi harus true.\n- `||` (OR): Salah satu kondisi true.\n- `!` (NOT): Pembalik nilai logika.\n\n```cpp\nint nilai = 85;\nif (nilai >= 75 && nilai <= 100) {\n    std::cout << \"Lulus kompetensi!\n\";\n}\n```"
    },
    {
      "id": "lesson-cpp-04",
      "courseId": "course-cpp-07",
      "slug": "percabangan-kondisional-cpp",
      "title": "4. Percabangan if, else if, & switch",
      "summary": "Logika percabangan kondisi di C++ dan pemilihan menu dengan switch-case.",
      "order": 4,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Percabangan Kondisional di C++\n\n---\n\n### Struktur `if...else if...else`\n```cpp\nint skor = 78;\n\nif (skor >= 85) {\n    std::cout << \"Grade: A\n\";\n} else if (skor >= 70) {\n    std::cout << \"Grade: B\n\";\n} else {\n    std::cout << \"Grade: C\n\";\n}\n```\n\n---\n\n### Statement `switch`\n```cpp\nchar opsi = 'B';\n\nswitch (opsi) {\n    case 'A':\n        std::cout << \"Pilihan Tambah Data\n\";\n        break;\n    case 'B':\n        std::cout << \"Pilihan Lihat Data\n\";\n        break;\n    default:\n        std::cout << \"Pilihan tidak valid\n\";\n        break;\n}\n```"
    },
    {
      "id": "lesson-cpp-05",
      "courseId": "course-cpp-07",
      "slug": "perulangan-looping-cpp",
      "title": "5. Perulangan for, while, & Range-Based For",
      "summary": "Struktur loop di C++, kontrol iterasi dengan break dan continue.",
      "order": 5,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Perulangan di C++\n\n---\n\n### 1. For Loop Standar\n```cpp\nfor (int i = 1; i <= 5; ++i) {\n    std::cout << \"Putaran: \" << i << \"\n\";\n}\n```\n\n---\n\n### 2. While Loop\n```cpp\nint n = 3;\nwhile (n > 0) {\n    std::cout << \"Hitung mundur: \" << n << \"\n\";\n    n--;\n}\n```\n\n---\n\n### 3. Range-Based For Loop (Modern C++11)\n```cpp\nint daftarAngka[] = {10, 20, 30, 40, 50};\n\nfor (int x : daftarAngka) {\n    std::cout << x << \" \";\n}\nstd::cout << \"\n\";\n```"
    },
    {
      "id": "lesson-cpp-06",
      "courseId": "course-cpp-07",
      "slug": "array-dan-std-vector",
      "title": "6. Array Statis & Container std::vector Dinamis",
      "summary": "Array statis vs std::vector modern dari C++ Standard Template Library (STL).",
      "order": 6,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Array Statis vs `std::vector` di C++\n\n---\n\n### 1. Array C-Style Statis\nUkuran array di memori bersifat konstan:\n```cpp\nint nilai[3] = {80, 90, 85};\nstd::cout << \"Nilai pertama: \" << nilai[0] << \"\n\";\n```\n\n---\n\n### 2. `std::vector` (Standar Emas C++)\n`std::vector` adalah array dinamis yang dapat membesar dan mengecil secara otomatis:\n\n```cpp\n#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> angka;\n\n    // Menambah data ke belakang\n    angka.push_back(10);\n    angka.push_back(20);\n    angka.push_back(30);\n\n    std::cout << \"Ukuran vector: \" << angka.size() << \"\n\"; // 3\n    std::cout << \"Elemen terakhir: \" << angka.back() << \"\n\"; // 30\n\n    // Iterasi vector\n    for (int n : angka) {\n        std::cout << n << \" \";\n    }\n    std::cout << \"\n\";\n    return 0;\n}\n```"
    },
    {
      "id": "lesson-cpp-07",
      "courseId": "course-cpp-07",
      "slug": "fungsi-dan-pass-by-reference",
      "title": "7. Fungsi & Pass By Reference (&)",
      "summary": "Membuat fungsi modular, parameter pass-by-value vs pass-by-reference untuk efisiensi.",
      "order": 7,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Fungsi di C++: Pass By Value vs Pass By Reference\n\n---\n\n### 1. Pass By Value (Salinan Nilai)\nSecara default, argumen fungsi disalin, sehingga modifikasi di dalam fungsi tidak memengaruhi variabel asli:\n\n```cpp\nvoid cobaUbah(int x) {\n    x = 999;\n}\n```\n\n---\n\n### 2. Pass By Reference (`&`)\nMenggunakan simbol ampersand (`&`), fungsi menerima alamat referensi langsung ke variabel asli:\n\n```cpp\n#include <iostream>\n\n// Fungsi tukar nilai dengan reference\nvoid tukar(int &a, int &b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    int x = 5, y = 10;\n    tukar(x, y);\n    std::cout << \"x: \" << x << \", y: \" << y << \"\n\"; // x: 10, y: 5 (Berhasil tertukar!)\n    return 0;\n}\n```"
    },
    {
      "id": "lesson-cpp-08",
      "courseId": "course-cpp-07",
      "slug": "pointer-dan-manajemen-memori",
      "title": "8. Pointer & Manajemen Memori di C++",
      "summary": "Memahami alamat memori (&), variabel pointer (*), dereferencing, dan alokasi memori.",
      "order": 8,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Konsep Pointer di C++\n\nPointer adalah variabel khusus yang menyimpan **alamat memori** dari variabel lain.\n\n---\n\n### Simbol Kunci Pointer:\n- **`&` (Address-of Operator):** Mendapatkan alamat memori suatu variabel.\n- **`*` (Dereference Operator):** Mengakses nilai yang tersimpan di alamat yang ditunjuk pointer.\n\n```cpp\n#include <iostream>\n\nint main() {\n    int skor = 100;\n    int* ptr = &skor; // ptr menampung alamat memori variabel skor\n\n    std::cout << \"Nilai skor          : \" << skor << \"\n\";\n    std::cout << \"Alamat memori skor  : \" << &skor << \"\n\";\n    std::cout << \"Alamat disimpan ptr : \" << ptr << \"\n\";\n    std::cout << \"Nilai via dereference: \" << *ptr << \"\n\"; // 100\n\n    // Mengubah nilai variabel melalui pointer\n    *ptr = 200;\n    std::cout << \"Skor baru           : \" << skor << \"\n\"; // 200\n    return 0;\n}\n```"
    },
    {
      "id": "lesson-cpp-09",
      "courseId": "course-cpp-07",
      "slug": "class-dan-destruktor-cpp",
      "title": "9. OOP di C++: Class, Objek, & Destruktor (~)",
      "summary": "Membangun class C++, konstruktor berparameter, dan peran destruktor (~) dalam pembersihan memori.",
      "order": 9,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Pemrograman Berorientasi Objek di C++\n\nC++ menggabungkan kecepatan bahasa prosedural C dengan abstraksi tinggi Pemrograman Berorientasi Objek (OOP).\n\n---\n\n### Class, Konstruktor, dan Destruktor\nDestruktor adalah method khusus yang diawali simbol tilde (`~`), dipanggil otomatis saat objek keluar dari scope (selesai masa pakainya) untuk membebaskan sumber daya/memori:\n\n```cpp\n#include <iostream>\n#include <string>\n\nclass Player {\npublic:\n    std::string username;\n    int level;\n\n    // Konstruktor\n    Player(std::string name, int lvl) {\n        username = name;\n        level = lvl;\n        std::cout << \"[INFO]: Player \" << username << \" masuk ke arena!\\n\";\n    }\n\n    // Destruktor (Membersihkan memori)\n    ~Player() {\n        std::cout << \"[INFO]: Player \" << username << \" meninggalkan game.\\n\";\n    }\n\n    void serang() {\n        std::cout << username << \" melancarkan serangan level \" << level << \"!\\n\";\n    }\n};\n\nint main() {\n    Player p1(\"AzzamKnight\", 50);\n    p1.serang();\n    return 0; // p1 otomatis dihancurkan oleh destruktor di sini!\n}\n```"
    },
    {
      "id": "lesson-cpp-10",
      "courseId": "course-cpp-07",
      "slug": "enkapsulasi-access-specifiers-cpp",
      "title": "10. Enkapsulasi & Access Specifiers (public, private, protected)",
      "summary": "Menyembunyikan detail implementasi data dengan private specifier dan menyediakan getter/setter.",
      "order": 10,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Enkapsulasi di C++\n\nEnkapsulasi memastikan data sensitif disembunyikan dari akses luar secara langsung dan hanya dapat diakses melalui metode publik (*getter & setter*).\n\n---\n\n### 3 Macam Access Specifier di C++:\n1. **`public`:** Anggota dapat diakses dari mana saja di luar class.\n2. **`private`:** Anggota HANYA dapat diakses dari dalam class itu sendiri.\n3. **`protected`:** Anggota dapat diakses dari dalam class dan class turunannya (*inheritance*).\n\n```cpp\n#include <iostream>\n\nclass Rekening {\nprivate:\n    double saldo; // Tidak bisa diubah langsung dari main()!\n\npublic:\n    Rekening(double saldoAwal) {\n        saldo = (saldoAwal > 0) ? saldoAwal : 0;\n    }\n\n    void setor(double jumlah) {\n        if (jumlah > 0) saldo += jumlah;\n    }\n\n    double getSaldo() const {\n        return saldo;\n    }\n};\n```"
    },
    {
      "id": "lesson-cpp-11",
      "courseId": "course-cpp-07",
      "slug": "inheritance-polymorphism-cpp",
      "title": "11. Pewarisan & Polymorphism (Virtual Functions)",
      "summary": "Mewarisi class dengan sintaks class Sub : public Super dan method virtual untuk polymorphism.",
      "order": 11,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Pewarisan & Virtual Functions di C++\n\n---\n\n### Pewarisan Class (`:`)\n```cpp\n#include <iostream>\n\n// Base Class\nclass Karakter {\npublic:\n    // Keyword 'virtual' memungkinkan polymorphism dinamis saat runtime!\n    virtual void bergerak() {\n        std::cout << \"Karakter berjalan biasa.\\n\";\n    }\n};\n\n// Derived Class\nclass Ninja : public Karakter {\npublic:\n    void bergerak() override {\n        std::cout << \"Ninja melompat dalam bayangan! Shink!\\n\";\n    }\n};\n\nint main() {\n    Karakter* k = new Ninja();\n    k->bergerak(); // Menjalankan versi Ninja berkat virtual function!\n    delete k;\n    return 0;\n}\n```"
    },
    {
      "id": "lesson-cpp-12",
      "courseId": "course-cpp-07",
      "slug": "file-stream-fstream-cpp",
      "title": "12. Operasi File di C++ (<fstream>)",
      "summary": "Membaca dan menulis file eksternal menggunakan std::ofstream dan std::ifstream.",
      "order": 12,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Operasi File Stream di C++ (<fstream>)\n\nPustaka `<fstream>` menyediakan kombinasi kemampuan `std::ofstream` (Output File Stream untuk menulis) dan `std::ifstream` (Input File Stream untuk membaca).\n\n---\n\n### 1. Menulis File (`ofstream`)\n```cpp\n#include <iostream>\n#include <fstream>\n\nint main() {\n    std::ofstream fileKeluar(\"skor.txt\");\n    if (fileKeluar.is_open()) {\n        fileKeluar << \"Azzam 100\\n\";\n        fileKeluar << \"Budi 85\\n\";\n        fileKeluar.close();\n        std::cout << \"File berhasil disimpan!\\n\";\n    }\n    return 0;\n}\n```\n\n---\n\n### 2. Membaca File (`ifstream`)\n```cpp\n#include <iostream>\n#include <fstream>\n#include <string>\n\nint main() {\n    std::ifstream fileMasuk(\"skor.txt\");\n    std::string baris;\n\n    if (fileMasuk.is_open()) {\n        while (std::getline(fileMasuk, baris)) {\n            std::cout << \"Data: \" << baris << \"\\n\";\n        }\n        fileMasuk.close();\n    }\n    return 0;\n}\n```"
    },
    {
      "id": "lesson-cpp-13",
      "courseId": "course-cpp-07",
      "slug": "stl-algorithms-cpp",
      "title": "13. Modern C++: STL Algorithms & Lambda",
      "summary": "Memanfaatkan algoritma bawaan super cepat: std::sort, std::find, std::count_if dengan ekspresi lambda C++.",
      "order": 13,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## C++ STL Algorithms & Lambda\n\nPustaka header **`<algorithm>`** menyediakan fungsi-fungsi standar industri dengan efisiensi komputasi tinggi.\n\n---\n\n### 1. Pengurutan Super Cepat (`std::sort`)\n```cpp\n#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> nilai = {89, 45, 92, 70, 99};\n\n    // Mengurutkan secara ascending\n    std::sort(nilai.begin(), nilai.end());\n\n    // Mengurutkan dengan custom lambda (Descending)\n    std::sort(nilai.begin(), nilai.end(), [](int a, int b) {\n        return a > b;\n    });\n\n    for (int n : nilai) std::cout << n << \" \";\n    std::cout << \"\\n\";\n    return 0;\n}\n```\n\n---\n\n### 2. Pencarian Data (`std::find`)\n```cpp\nauto it = std::find(nilai.begin(), nilai.end(), 92);\nif (it != nilai.end()) {\n    std::cout << \"Nilai 92 ditemukan dalam kumpulan data!\\n\";\n}\n```"
    }
  ],
  "course-sql-08": [
    {
      "id": "lesson-sql-01",
      "courseId": "course-sql-08",
      "slug": "pengenalan-rdbms-dan-sql",
      "title": "1. Pengenalan RDBMS & Sintaks Dasar SQL",
      "summary": "Memahami arsitektur basis data relasional (tabel, baris, kolom), dialek SQL, dan aturan sintaks.",
      "order": 1,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Mengenal SQL & Basis Data Relasional (RDBMS)\n\n**SQL (Structured Query Language)** adalah bahasa standar internasional untuk menyimpan, memanipulasi, dan mengambil data yang disimpan di dalam **RDBMS (Relational Database Management System)**.\n\nContoh mesin RDBMS terpopuler:\n- **PostgreSQL** (Standar backend modern & open source)\n- **MySQL / MariaDB** (Basis web hosting & WordPress)\n- **SQLite** (Database file ringan di perangkat mobile/aplikasi desktop)\n- **Microsoft SQL Server & Oracle** (Enterprise)\n\n---\n\n### Konsep Dasar Relasional:\n- **Database:** Wadah besar yang berisi kumpulan tabel.\n- **Table (Tabel):** Struktur data berwujud baris dan kolom (seperti lembar kerja Excel).\n- **Column / Field (Kolom):** Kategori data spesifik (misal: `nama`, `email`, `harga`).\n- **Row / Record (Baris):** Satu entitas data individual (misal: data seorang siswa).\n\n---\n\n### Aturan Penulisan Sintaks SQL:\n1. Kata kunci SQL **tidak case-sensitive** (`SELECT` sama dengan `select`), namun konvensi industri **wajib menuliskan keyword dengan HURUF KAPITAL**.\n2. Setiap perintah SQL diakhiri dengan tanda titik koma (`;`).\n\n```sql\n-- Contoh kueri sederhana untuk mengambil semua data siswa\nSELECT * FROM siswa;\n```"
    },
    {
      "id": "lesson-sql-02",
      "courseId": "course-sql-08",
      "slug": "create-table-dan-tipe-data",
      "title": "2. CREATE TABLE & Tipe Data SQL",
      "summary": "Membuat tabel baru dengan CREATE TABLE, tipe data VARCHAR/INT/BOOLEAN, dan PRIMARY KEY.",
      "order": 2,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Membuat Tabel dengan Perintah `CREATE TABLE`\n\nSebelum menyimpan data, kita harus merancang skema tabel beserta tipe data dan batasan (*constraints*) untuk setiap kolom.\n\n---\n\n### Tipe Data Umum SQL:\n- `INT` / `INTEGER`: Bilangan bulat.\n- `VARCHAR(n)`: Teks dengan batas maksimal `n` karakter.\n- `TEXT`: Teks panjang tanpa batasan kaku.\n- `BOOLEAN`: Bernilai TRUE atau FALSE.\n- `DECIMAL(p, s)`: Angka desimal presisi untuk uang/harga.\n- `TIMESTAMP`: Tanggal dan waktu penyimpanan.\n\n---\n\n### Sintaks Pembuatan Tabel\n```sql\nCREATE TABLE pengguna (\n    id SERIAL PRIMARY KEY,\n    username VARCHAR(50) NOT NULL UNIQUE,\n    email VARCHAR(100) NOT NULL UNIQUE,\n    skor_xp INT DEFAULT 0,\n    is_active BOOLEAN DEFAULT TRUE,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n```\n\n---\n\n### Penjelasan Constraint Penting:\n- **`PRIMARY KEY`:** Kolom pengidentifikasi unik untuk setiap baris (tidak boleh ada duplikat).\n- **`NOT NULL`:** Kolom wajib diisi (tidak boleh kosong/NULL).\n- **`UNIQUE`:** Memastikan tidak ada dua baris yang memiliki nilai kolom yang sama.\n- **`DEFAULT`:** Nilai otomatis jika saat insert tidak disertakan."
    },
    {
      "id": "lesson-sql-03",
      "courseId": "course-sql-08",
      "slug": "select-dan-filter-where",
      "title": "3. SELECT, DISTINCT, & Klausa Filter WHERE",
      "summary": "Mengambil data spesifik dengan SELECT, menghindari duplikat dengan DISTINCT, dan memfilter baris dengan WHERE.",
      "order": 3,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Mengambil & Memfilter Data dengan `SELECT`\n\nPerintah `SELECT` adalah perintah SQL yang paling sering digunakan dalam pengembangan aplikasi.\n\n---\n\n### Memilih Kolom Tertentu\nHindari penggunaan `SELECT *` di production, pilih hanya kolom yang dibutuhkan:\n\n```sql\n-- Mengambil nama dan email dari tabel pengguna\nSELECT username, email FROM pengguna;\n\n-- Mengambil kategori unik tanpa duplikat\nSELECT DISTINCT kategori FROM kursus;\n```\n\n---\n\n### Memfilter Baris dengan Klausa `WHERE`\n`WHERE` mengevaluasi kondisi logika untuk menentukan baris mana saja yang akan ditampilkan:\n\n```sql\n-- Mengambil siswa yang memiliki nilai di atas 80\nSELECT nama, nilai FROM ujian WHERE nilai >= 80;\n\n-- Menggunakan kombinasi logika AND, OR\nSELECT nama, role FROM pengguna \nWHERE role = 'student' AND is_active = TRUE;\n\n-- Operator IN (Mencocokkan salah satu dari daftar pilihan)\nSELECT * FROM produk \nWHERE kategori IN ('Elektronik', 'Komputer', 'Aksesoris');\n\n-- Operator LIKE (Pencarian teks dengan wildcard %)\nSELECT * FROM pengguna \nWHERE email LIKE '%@kodeluma.dev';\n```"
    },
    {
      "id": "lesson-sql-04",
      "courseId": "course-sql-08",
      "slug": "sorting-order-by-dan-limit",
      "title": "4. Mengurutkan Data (ORDER BY) & Pagination (LIMIT)",
      "summary": "Mengurutkan hasil kueri dengan ORDER BY ASC/DESC dan membatasi data dengan LIMIT dan OFFSET.",
      "order": 4,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Mengurutkan Data dengan `ORDER BY`\n\nKlausa `ORDER BY` digunakan untuk mengurutkan kumpulan hasil berdasarkan satu atau beberapa kolom.\n\n- **`ASC` (Ascending - Default):** Dari kecil ke besar (A-Z, 0-9).\n- **`DESC` (Descending):** Dari besar ke kecil (Z-A, 9-0).\n\n```sql\n-- Mengurutkan siswa berdasarkan nilai tertinggi ke terendah\nSELECT nama, nilai FROM siswa \nORDER BY nilai DESC;\n\n-- Mengurutkan berdasarkan kategori lalu nama alfabetis\nSELECT judul, kategori FROM kursus \nORDER BY kategori ASC, judul ASC;\n```\n\n---\n\n### Pagination dengan `LIMIT` dan `OFFSET`\nUntuk menampilkan data berhalaman (halaman 1, 2, 3):\n\n```sql\n-- Mengambil 5 data pertama (Halaman 1)\nSELECT id, judul FROM kursus \nORDER BY id ASC \nLIMIT 5 OFFSET 0;\n\n-- Mengambil 5 data berikutnya (Halaman 2)\nSELECT id, judul FROM kursus \nORDER BY id ASC \nLIMIT 5 OFFSET 5;\n```"
    },
    {
      "id": "lesson-sql-05",
      "courseId": "course-sql-08",
      "slug": "insert-update-dan-delete",
      "title": "5. Manipulasi Data (INSERT, UPDATE, DELETE)",
      "summary": "Menambahkan data baru dengan INSERT INTO, memperbarui baris dengan UPDATE, dan menghapus dengan DELETE.",
      "order": 5,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Operasi CRUD Data di SQL\n\n---\n\n### 1. Menambahkan Data (`INSERT INTO`)\n```sql\nINSERT INTO pengguna (username, email, skor_xp)\nVALUES ('azzam_dev', 'azzam@kodeluma.dev', 150);\n\n-- Menambah banyak baris sekaligus\nINSERT INTO kategori (nama) VALUES \n('Frontend'),\n('Backend'),\n('DevOps');\n```\n\n---\n\n### 2. Memperbarui Data (`UPDATE`)\n⚠️ **PENTING:** Selalu sertakan klausa `WHERE`, jika tidak SEMUA baris di tabel akan ikut ter-update!\n\n```sql\nUPDATE pengguna \nSET skor_xp = skor_xp + 50, is_active = TRUE \nWHERE username = 'azzam_dev';\n```\n\n---\n\n### 3. Menghapus Data (`DELETE`)\n⚠️ **PENTING:** Selalu sertakan klausa `WHERE`!\n\n```sql\nDELETE FROM pengguna \nWHERE id = 99;\n```"
    },
    {
      "id": "lesson-sql-06",
      "courseId": "course-sql-08",
      "slug": "fungsi-agregasi-dan-perhitungan",
      "title": "6. Fungsi Agregasi (COUNT, SUM, AVG, MIN, MAX)",
      "summary": "Menghitung statistik ringkasan data numerik menggunakan fungsi agregasi bawaan SQL.",
      "order": 6,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Fungsi Agregasi di SQL\n\nFungsi agregasi melakukan kalkulasi pada sekumpulan nilai dan mengembalikan satu nilai ringkasan.\n\n---\n\n### 5 Fungsi Agregasi Terpenting:\n1. **`COUNT()`: Menghitung jumlah baris.**\n   ```sql\n   SELECT COUNT(*) AS total_siswa FROM pengguna WHERE role = 'student';\n   ```\n\n2. **`SUM()`: Menjumlahkan nilai kolom numerik.**\n   ```sql\n   SELECT SUM(total_biaya) AS total_pendapatan FROM transaksi;\n   ```\n\n3. **`AVG()`: Menghitung rata-rata nilai numerik.**\n   ```sql\n   SELECT AVG(nilai) AS rata_rata_kelas FROM ujian;\n   ```\n\n4. **`MIN()` dan `MAX()`: Mencari nilai terkecil dan terbesar.**\n   ```sql\n   SELECT MIN(harga) AS harga_termurah, MAX(harga) AS harga_termahal FROM produk;\n   ```"
    },
    {
      "id": "lesson-sql-07",
      "courseId": "course-sql-08",
      "slug": "group-by-dan-having",
      "title": "7. Pengelompokan Data (GROUP BY & HAVING)",
      "summary": "Mengelompokkan data berdasarkan kategori dengan GROUP BY dan memfilter hasil agregasi dengan HAVING.",
      "order": 7,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Pengelompokan Data: `GROUP BY` & `HAVING`\n\n---\n\n### `GROUP BY`\nSering digunakan bersama fungsi agregasi untuk mengelompokkan data berdasarkan satu atau beberapa kolom:\n\n```sql\n-- Menghitung jumlah kursus per kategori\nSELECT kategori, COUNT(*) AS jumlah_kursus \nFROM kursus \nGROUP BY kategori;\n```\n\n---\n\n### `WHERE` vs `HAVING`\n- **`WHERE`:** Memfilter baris **SEBELUM** data diagregasi.\n- **`HAVING`:** Memfilter hasil kelompok **SETELAH** fungsi agregasi dijalankan.\n\n```sql\n-- Tampilkan kategori yang memiliki lebih dari 3 kursus\nSELECT kategori, COUNT(*) AS jumlah_kursus \nFROM kursus \nGROUP BY kategori \nHAVING COUNT(*) > 3;\n```"
    },
    {
      "id": "lesson-sql-08",
      "courseId": "course-sql-08",
      "slug": "relasi-tabel-inner-dan-left-join",
      "title": "8. Relasi Multi-Tabel: INNER JOIN & LEFT JOIN",
      "summary": "Menggabungkan beberapa tabel berelasi menggunakan kunci asing (Foreign Key) dan JOIN.",
      "order": 8,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Menggabungkan Data dengan `JOIN`\n\nDalam database relasional, data dinormalisasi dan dipecah ke beberapa tabel terpisah untuk menghindari duplikasi data. Kita menggabungkannya kembali menggunakan klausa **`JOIN`**.\n\n---\n\n### 1. `INNER JOIN`\nMengembalikan baris hanya jika ada kecocokan di **KEDUA** tabel:\n\n```sql\nSELECT \n    siswa.nama,\n    kursus.judul,\n    pendaftaran.tanggal_daftar\nFROM pendaftaran\nINNER JOIN siswa ON pendaftaran.siswa_id = siswa.id\nINNER JOIN kursus ON pendaftaran.kursus_id = kursus.id;\n```\n\n---\n\n### 2. `LEFT JOIN` (Left Outer Join)\nMengembalikan **SEMUA** baris dari tabel kiri, beserta baris yang cocok dari tabel kanan (atau NULL jika tidak ada kecocokan):\n\n```sql\n-- Menampilkan semua siswa, meskipun siswa tersebut belum pernah mendaftar kursus\nSELECT \n    siswa.nama,\n    pendaftaran.kursus_id\nFROM siswa\nLEFT JOIN pendaftaran ON siswa.id = pendaftaran.siswa_id;\n```"
    },
    {
      "id": "lesson-sql-09",
      "courseId": "course-sql-08",
      "slug": "subquery-dan-nested-query",
      "title": "9. Subquery & Kueri Bersarang (Nested SELECT)",
      "summary": "Mengeksekusi query di dalam query lain: subquery di klausa WHERE, FROM, dan SELECT.",
      "order": 9,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Memahami Subquery di SQL\n\n**Subquery** (atau *Nested Query*) adalah kueri `SELECT` yang disematkan di dalam kueri SQL lainnya untuk menghasilkan kriteria dinamis.\n\n---\n\n### 1. Subquery di dalam Klausa `WHERE`\nMencari semua siswa yang memiliki nilai **di atas rata-rata kelas**:\n\n```sql\nSELECT nama, nilai \nFROM siswa \nWHERE nilai > (\n    -- Subquery menghitung rata-rata nilai seluruh siswa\n    SELECT AVG(nilai) FROM siswa\n);\n```\n\n---\n\n### 2. Subquery dengan Operator `IN`\nMencari nama pengguna yang sudah pernah melakukan pemesanan barang:\n\n```sql\nSELECT username, email \nFROM pengguna \nWHERE id IN (\n    SELECT DISTINCT user_id FROM pesanan\n);\n```\n\n---\n\n### 3. Subquery di dalam Klausa `FROM` (Derived Table)\n```sql\nSELECT kategori, AVG(total_stok) AS rata_stok\nFROM (\n    SELECT kategori, SUM(stok) AS total_stok \n    FROM produk \n    GROUP BY kategori, gudang_id\n) AS ringkasan_gudang\nGROUP BY kategori;\n```"
    },
    {
      "id": "lesson-sql-10",
      "courseId": "course-sql-08",
      "slug": "transaksi-database-acid",
      "title": "10. Transaksi Basis Data (BEGIN, COMMIT, ROLLBACK, ACID)",
      "summary": "Menjaga integritas data transaksi keuangan dengan BEGIN, COMMIT, dan ROLLBACK sesuai standar ACID.",
      "order": 10,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Transaksi Basis Data & Prinsip ACID\n\n**Transaksi** adalah serangkaian operasi basis data yang diperlakukan sebagai **satu kesatuan utuh**: *Semua operasi harus berhasil 100%, atau jika satu gagal, seluruh perubahan harus dibatalkan (undo)*.\n\n---\n\n### 4 Pilar Prinsip ACID:\n- **Atomicity (Keutuhan):** Berhasil semua atau gagal sama sekali.\n- **Consistency (Konsistensi):** Data selalu valid sesuai constraints.\n- **Isolation (Keterisolasian):** Transaksi yang berjalan bersamaan tidak saling mengganggu.\n- **Durability (Ketahanan):** Perubahan yang di-commit tersimpan permanen di disk.\n\n---\n\n### Contoh Nyata: Transfer Saldo Antar Rekening\n```sql\nBEGIN; -- Memulai blok transaksi\n\n-- 1. Kurangi saldo pengirim\nUPDATE rekening \nSET saldo = saldo - 500000 \nWHERE no_rekening = 'REK-101';\n\n-- 2. Tambah saldo penerima\nUPDATE rekening \nSET saldo = saldo + 500000 \nWHERE no_rekening = 'REK-202';\n\n-- Jika kedua langkah sukses tanpa kendala:\nCOMMIT; -- Simpan perubahan permanen!\n\n-- Jika terjadi kesalahan sistem di tengah jalan:\n-- ROLLBACK; -- Kembalikan saldo seperti semula!\n```"
    },
    {
      "id": "lesson-sql-11",
      "courseId": "course-sql-08",
      "slug": "foreign-key-dan-cascade",
      "title": "11. Foreign Key & Integritas Referensial (ON DELETE CASCADE)",
      "summary": "Menghubungkan tabel dengan Foreign Key, mencegah data orphan, dan aksi ON DELETE / UPDATE CASCADE.",
      "order": 11,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Foreign Key & Relasi Tabel Terintegrasi\n\n**Foreign Key (Kunci Asing)** adalah kolom pada suatu tabel yang merujuk pada Primary Key tabel lain untuk menjamin **Integritas Referensial**.\n\n---\n\n### Mendeklarasikan Foreign Key dengan CASCADE\n```sql\nCREATE TABLE artikel (\n    id SERIAL PRIMARY KEY,\n    judul VARCHAR(200) NOT NULL,\n    penulis_id INT NOT NULL,\n    \n    -- Menghubungkan ke tabel pengguna\n    CONSTRAINT fk_penulis\n        FOREIGN KEY (penulis_id) \n        REFERENCES pengguna(id)\n        ON DELETE CASCADE -- Jika user dihapus, seluruh artikelnya otomatis ikut terhapus!\n        ON UPDATE CASCADE\n);\n```\n\n---\n\n### Opsi Aksi Integritas:\n- **`CASCADE`:** Ikut menghapus/mengubah baris anak secara otomatis.\n- **`RESTRICT` / `NO ACTION`:** Menolak penghapusan baris induk jika masih memiliki anak.\n- **`SET NULL`:** Mengubah kolom kunci anak menjadi `NULL` saat baris induk dihapus."
    },
    {
      "id": "lesson-sql-12",
      "courseId": "course-sql-08",
      "slug": "index-dan-optimasi-kueri",
      "title": "12. Database Indexing & Optimasi Performa Kueri",
      "summary": "Meningkatkan kecepatan pencarian data miliaran baris dengan B-Tree Index (CREATE INDEX) dan EXPLAIN.",
      "order": 12,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Indeks Basis Data: Kunci Kecepatan Kueri\n\nTanpa indeks, database harus melakukan **Full Table Scan** (memeriksa satu per satu baris dari awal sampai akhir). Dengan **Index (B-Tree)**, database menemukan baris yang dicari dalam hitungan milidetik layaknya indeks di halaman belakang buku.\n\n---\n\n### Membuat Indeks\n```sql\n-- Membuat indeks pada kolom yang sering dicari di WHERE\nCREATE INDEX idx_pengguna_email ON pengguna(email);\n\n-- Composite Index (Indeks gabungan dua kolom)\nCREATE INDEX idx_pesanan_user_status ON pesanan(user_id, status);\n```\n\n---\n\n### Menganalisis Rencana Eksekusi (`EXPLAIN`)\nGunakan `EXPLAIN ANALYZE` untuk melihat apakah kueri kamu menggunakan indeks atau scan lambat:\n\n```sql\nEXPLAIN ANALYZE \nSELECT * FROM pengguna WHERE email = 'azzam@kodeluma.dev';\n-- Hasil akan menunjukkan 'Index Scan using idx_pengguna_email'\n```\n\n---\n\n### Aturan Emas Indexing:\n- Buat indeks pada kolom yang sering muncul di klausa `WHERE`, `JOIN`, dan `ORDER BY`.\n- Jangan berlebihan membuat indeks pada kolom yang jarang dibaca namun sering di-INSERT/UPDATE, karena indeks membutuhkan ruang penyimpanan dan waktu penulisan."
    },
    {
      "id": "lesson-sql-13",
      "courseId": "course-sql-08",
      "slug": "window-functions-sql",
      "title": "13. Modern SQL: Window Functions (ROW_NUMBER, RANK, OVER)",
      "summary": "Melakukan kalkulasi tingkat lanjut tanpa melenyapkan baris individual dengan OVER(), PARTITION BY, dan RANK().",
      "order": 13,
      "isRequired": true,
      "status": "published",
      "bodyMarkdown": "## Mengenal SQL Window Functions\n\nBerbeda dengan `GROUP BY` yang merangkum banyak baris menjadi satu baris, **Window Function** melakukan kalkulasi pada sekumpulan baris namun **tetap mempertahankan identitas setiap baris aslinya**.\n\n---\n\n### 1. Menomori Baris: `ROW_NUMBER()`\n```sql\nSELECT \n    ROW_NUMBER() OVER (ORDER BY nilai DESC) AS peringkat,\n    nama,\n    nilai\nFROM ujian;\n```\n\n---\n\n### 2. Peringkat per Kategori: `PARTITION BY`\nMemberi ranking siswa per kelas/jurusan masing-masing:\n\n```sql\nSELECT \n    jurusan,\n    nama,\n    ipk,\n    DENSE_RANK() OVER (\n        PARTITION BY jurusan \n        ORDER BY ipk DESC\n    ) AS ranking_jurusan\nFROM mahasiswa;\n```\n\n---\n\n### 3. Mengambil Nilai Baris Sebelumnya: `LAG()` dan `LEAD()`\nSangat populer untuk analisis tren keuangan dan persentase pertumbuhan bulanan:\n\n```sql\nSELECT \n    bulan,\n    total_penjualan,\n    LAG(total_penjualan, 1) OVER (ORDER BY bulan) AS penjualan_bulan_lalu\nFROM rekap_bulanan;\n```"
    }
  ]
,
  "course-js-int-09": [
      {
          "id": "lesson-js-int-01",
          "courseId": "course-js-int-09",
          "slug": "execution-context-dan-hoisting",
          "title": "1. Execution Context, Call Stack, & Hoisting",
          "summary": "Pahami fase penciptaan (Creation Phase), eksekusi kode JavaScript, dan mekanisme hoisting pada variabel serta fungsi.",
          "order": 1,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 1. Execution Context, Call Stack, & Hoisting\n\nJavaScript adalah bahasa yang berjalan di atas thread tunggal (*single-threaded*) dengan model eksekusi berbasis *Call Stack*. Memahami cara kerja internal mesin JavaScript (*JavaScript Engine* seperti V8) adalah fondasi paling krusial untuk menjadi developer level menengah.\n\n---\n\n## Konsep: Apa itu Execution Context?\n\nSetiap kali kode JavaScript dijalankan, ia dieksekusi di dalam sebuah lingkungan bernama **Execution Context**. Terdapat dua jenis utama:\n1. **Global Execution Context (GEC)**: Dibuat pertama kali saat file skrip dimuat. Menghasilkan objek global (`window` di browser atau `global` di Node.js) dan variabel `this`.\n2. **Function Execution Context (FEC)**: Dibuat setiap kali sebuah fungsi dipanggil.\n\n### Dua Fase dalam Execution Context:\n| Fase | Aktivitas JavaScript Engine |\n| :--- | :--- |\n| **1. Creation Phase** | Menyiapkan memori untuk fungsi dan variabel. Melakukan **Hoisting**. Menentukan nilai awal (`undefined` untuk `var`, uninitialized untuk `let`/`const`). |\n| **2. Execution Phase** | Menjalankan kode baris demi baris dari atas ke bawah, menetapkan nilai aktual variabel, dan memanggil fungsi. |\n\n---\n\n## Memahami Hoisting & Temporal Dead Zone (TDZ)\n\n**Hoisting** adalah perilaku mesin JavaScript yang memindahkan deklarasi variabel dan fungsi ke bagian atas lingkup (*scope*) mereka sebelum kode dieksekusi secara aktual.\n\n```javascript\n// 1. Function Declaration vs Expression\nsapaPengguna(); // Output: \"Halo, selamat datang!\" (Di-hoist sepenuhnya)\n\nfunction sapaPengguna() {\n  console.log(\"Halo, selamat datang!\");\n}\n\n// 2. Perbedaan var vs let & const\nconsole.log(namaVar); // Output: undefined\nvar namaVar = \"Budi\";\n\n// console.log(namaLet); // ReferenceError: Cannot access 'namaLet' before initialization\nlet namaLet = \"Siti\"; // Berada di Temporal Dead Zone (TDZ) hingga baris ini\n```\n\n> **Catatan Penting:** Variabel yang dideklarasikan dengan `let` dan `const` sebenarnya tetap mengalami hoisting, tetapi mereka ditempatkan pada **Temporal Dead Zone (TDZ)** sehingga tidak boleh diakses sebelum baris deklarasinya tercapai.\n\n---\n\n## Call Stack: Mekanisme Tumpukan Eksekusi\n\nCall Stack bekerja dengan prinsip **LIFO (Last In, First Out)**:\n\n```javascript\nfunction pertama() {\n  console.log(\"Mulai Fungsi Pertama\");\n  kedua();\n  console.log(\"Selesai Fungsi Pertama\");\n}\n\nfunction kedua() {\n  console.log(\"Di dalam Fungsi Kedua\");\n}\n\npertama();\n\n// Alur Call Stack:\n// 1. push: pertama()\n// 2. log: \"Mulai Fungsi Pertama\"\n// 3. push: kedua()\n// 4. log: \"Di dalam Fungsi Kedua\"\n// 5. pop: kedua()\n// 6. log: \"Selesai Fungsi Pertama\"\n// 7. pop: pertama()\n```\n\n---\n\n## Praktik Terbaik (Do's & Don'ts)\n\n- **Gunakan `const` secara default**, dan gunakan `let` hanya jika nilai variabel memang perlu diubah.\n- **Hindari penggunaan `var`** untuk mencegah *scope leakage* dan *accidental redeclaration*.\n- **Deklarasikan variabel di bagian atas blok** atau sedekat mungkin dengan tempat variabel tersebut digunakan untuk keterbacaan kode yang maksimal.\n\n---\n\n## Tantangan Mandiri\nCobalah tebak output dari kode berikut sebelum menjalankannya di Console:\n```javascript\nvar skor = 10;\nfunction uji() {\n  if (!skor) {\n    var skor = 20;\n  }\n  return skor;\n}\nconsole.log(uji()); // Apakah 10 atau 20? Mengapa?\n```\n*(Petunjuk: Variabel `var skor` di dalam fungsi mengalami hoisting ke atas fungsi sehingga menutupi variabel global).*"
      },
      {
          "id": "lesson-js-int-02",
          "courseId": "course-js-int-09",
          "slug": "closures-lexical-scope",
          "title": "2. Closures & Lexical Environment Praktis",
          "summary": "Pelajari rahasia Closures, bagaimana fungsi mengingat variabel induknya, serta implementasi data privacy dan memoization.",
          "order": 2,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 2. Closures & Lexical Environment Praktis\n\nClosure adalah salah satu fitur paling bertenaga sekaligus sering disalahpahami dalam JavaScript. Closure memungkinkan fungsi dalam (*inner function*) mengakses variabel dari fungsi luar (*outer function*) bahkan setelah fungsi luar tersebut selesai dieksekusi.\n\n---\n\n## Konsep: Lexical Scope & Closure\n\nJavaScript menggunakan **Lexical Scoping**, yang berarti lingkup (*scope*) sebuah variabel ditentukan oleh posisinya di dalam kode sumber saat ditulis, bukan saat dipanggil di runtime.\n\n```javascript\nfunction buatPenghitung() {\n  let hitungan = 0; // Variabel privat di outer scope\n\n  return {\n    tambah() {\n      hitungan++;\n      return hitungan;\n    },\n    kurang() {\n      hitungan--;\n      return hitungan;\n    },\n    ambilNilai() {\n      return hitungan;\n    }\n  };\n}\n\nconst counter1 = buatPenghitung();\nconsole.log(counter1.tambah()); // 1\nconsole.log(counter1.tambah()); // 2\nconsole.log(counter1.ambilNilai()); // 2\n\n// Nilai 'hitungan' tidak bisa diakses langsung dari luar:\n// console.log(counter1.hitungan); // undefined! Data aman terlindungi (Encapsulation)\n```\n\n---\n\n## Studi Kasus Nyata: Function Factory & Currying\n\nClosure sangat berguna untuk membuat generator fungsi spesifik:\n\n```javascript\nfunction pengali(faktor) {\n  return function(angka) {\n    return angka * faktor;\n  };\n}\n\nconst kaliDua = pengali(2);\nconst kaliSepuluh = pengali(10);\n\nconsole.log(kaliDua(5));    // 10\nconsole.log(kaliSepuluh(5)); // 50\n```\n\n---\n\n## Penerapan Lanjutan: Memoization Cache\n\nClosure memungkinkan kita menyimpan cache komputasi berat tanpa mencemari global scope:\n\n```javascript\nfunction hitungFaktorialDenganCache() {\n  const cache = {};\n\n  return function faktorial(n) {\n    if (n in cache) {\n      console.log(`Mengambil n=${n} dari cache!`);\n      return cache[n];\n    }\n    \n    if (n <= 1) return 1;\n    cache[n] = n * faktorial(n - 1);\n    return cache[n];\n  };\n}\n\nconst faktorial = hitungFaktorialDenganCache();\nconsole.log(faktorial(5)); // Komputasi baru: 120\nconsole.log(faktorial(5)); // Diambil dari cache: 120\n```\n\n---\n\n## Ringkasan Perbedaan Scope\n| Tipe Scope | Contoh | Aksesibilitas |\n| :--- | :--- | :--- |\n| **Global Scope** | `const app = \"KodeLuma\"` | Dapat diakses di seluruh aplikasi |\n| **Function Scope** | `function f() { var x = 1; }` | Hanya di dalam badan fungsi |\n| **Block Scope** | `if (true) { let y = 2; }` | Hanya di dalam tanda kurung kurawal `{}` |\n| **Closure** | Fungsi dalam meretensi variabel luar | Mempertahankan state antar pemanggilan |"
      },
      {
          "id": "lesson-js-int-03",
          "courseId": "course-js-int-09",
          "slug": "event-loop-microtask-queue",
          "title": "3. Event Loop, Microtask Queue & Macrotask Queue",
          "summary": "Bongkar cara kerja non-blocking asynchronous JavaScript dengan Call Stack, Web APIs, Microtasks, dan Task Queue.",
          "order": 3,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 3. Event Loop, Microtask Queue & Macrotask Queue\n\nMeskipun JavaScript bersifat **single-threaded** (hanya mengeksekusi satu baris kode dalam satu waktu), browser dapat menangani operasi asinkron seperti HTTP requests, timer, dan interaksi pengguna tanpa membekukan antarmuka (*UI non-blocking*). Kuncinya adalah **Event Loop**.\n\n---\n\n## Arsitektur Runtime JavaScript\n\nArsitektur runtime terdiri dari empat komponen utama:\n1. **Call Stack**: Menjalankan frame fungsi yang sedang aktif (LIFO).\n2. **Web APIs / Node APIs**: Modul lingkungan di luar JS engine yang menangani timer (`setTimeout`), HTTP request (`fetch`), dan DOM events.\n3. **Microtask Queue**: Antrian prioritas tinggi (Promise callback `.then()` / `.catch()`, `queueMicrotask`, `MutationObserver`).\n4. **Macrotask (Task) Queue**: Antrian tugas reguler (`setTimeout`, `setInterval`, I/O, UI rendering).\n\n---\n\n## Aturan Prioritas Event Loop\n\n1. Event loop memeriksa apakah **Call Stack** kosong.\n2. Jika kosong, ia akan **mengosongkan seluruh antrian Microtask Queue** hingga habis.\n3. Setelah Microtask Queue kosong dan rendering UI selesai, Event Loop mengambil **1 Macrotask** dari Task Queue dan memasukkannya ke Call Stack.\n\n```javascript\nconsole.log(\"1. Sinkron Awal\");\n\nsetTimeout(() => {\n  console.log(\"2. Macrotask (setTimeout)\");\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log(\"3. Microtask (Promise 1)\");\n}).then(() => {\n  console.log(\"4. Microtask (Promise 2)\");\n});\n\nconsole.log(\"5. Sinkron Akhir\");\n\n// Urutan Output yang Benar:\n// 1. Sinkron Awal\n// 5. Sinkron Akhir\n// 3. Microtask (Promise 1)\n// 4. Microtask (Promise 2)\n// 2. Macrotask (setTimeout)\n```\n\n---\n\n## Mengapa Output di Atas Terjadi?\n1. `console.log(\"1. Sinkron Awal\")` langsung masuk Call Stack dan dieksekusi.\n2. `setTimeout` memicu Web API timer 0ms, lalu callback didaftarkan ke **Macrotask Queue**.\n3. `Promise.resolve().then()` mendaftarkan callback ke **Microtask Queue**.\n4. `console.log(\"5. Sinkron Akhir\")` dieksekusi di Call Stack.\n5. Call Stack kini kosong! Event Loop memeriksa **Microtask Queue** terlebih dahulu -> mencetak \"3\", lalu rantai callback kedua mencetak \"4\".\n6. Microtask Queue habis. Barulah Event loop mengambil task dari **Macrotask Queue** -> mencetak \"2\".\n\n---\n\n## Do's & Don'ts\n- **Jangan memblokir Call Stack** dengan loop berat CPU-intensive (seperti kalkulasi jutaan angka sinkron); gunakan Web Workers jika perlu komputasi berat.\n- **Pahami bahwa `setTimeout(fn, 0)` BUKAN berarti dieksekusi instan**, melainkan dieksekusi sesegera mungkin setelah Call Stack dan Microtask Queue kosong."
      },
      {
          "id": "lesson-js-int-04",
          "courseId": "course-js-int-09",
          "slug": "callbacks-dan-callback-hell",
          "title": "4. Callbacks & Menghindari Callback Hell",
          "summary": "Memahami pola asinkron tertua JavaScript, penanganan error-first callbacks, dan bahaya Piramida Malapetaka.",
          "order": 4,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 4. Callbacks & Menghindari Callback Hell\n\nSebelum adanya Promise dan Async/Await, **Callback** adalah cara utama untuk menangani operasi asinkron dalam JavaScript.\n\n---\n\n## Konsep: Apa itu Callback?\n\nCallback adalah fungsi yang diteruskan sebagai argumen ke fungsi lain, dengan tujuan agar fungsi tersebut dipanggil kembali (*called back*) setelah suatu aksi selesai.\n\n```javascript\nfunction ambilDataPengguna(id, callback) {\n  setTimeout(() => {\n    const data = { id: id, nama: \"Azzam\", peran: \"Developer\" };\n    callback(data);\n  }, 1000);\n}\n\nambilDataPengguna(101, (pengguna) => {\n  console.log(\"Data berhasil diterima:\", pengguna.nama);\n});\n```\n\n---\n\n## Masalah: Callback Hell (Pyramid of Doom)\n\nKetika beberapa operasi asinkron harus dieksekusi berurutan (misal: login -> ambil profil -> ambil postingan -> ambil komentar), kode menjadi bersarang (*deeply nested*), sulit dibaca, dan rentan bug:\n\n```javascript\n// CONTOH KODE BURUK: Callback Hell\nloginUser(email, sandi, (err, user) => {\n  if (err) return console.error(err);\n  ambilProfil(user.id, (err, profil) => {\n    if (err) return console.error(err);\n    ambilPostingan(profil.id, (err, posts) => {\n      if (err) return console.error(err);\n      ambilKomentar(posts[0].id, (err, komentar) => {\n        if (err) return console.error(err);\n        console.log(\"Komentar pertama:\", komentar);\n      });\n    });\n  });\n});\n```\n\n---\n\n## Solusi Awal: Pola Modular Functions\n\nUntuk merapikan callback hell sebelum era Promise:\n1. Pisahkan setiap fungsi bersarang menjadi fungsi bernama (*named functions*).\n2. Terapkan konvensi **Error-First Callback** (standar Node.js: `callback(error, result)`).\n\n```javascript\nfunction handleKomentar(err, komentar) {\n  if (err) return console.error(\"Gagal memuat komentar:\", err);\n  console.log(\"Berhasil memuat komentar:\", komentar);\n}\n\nfunction handlePosts(err, posts) {\n  if (err) return console.error(\"Gagal memuat post:\", err);\n  ambilKomentar(posts[0].id, handleKomentar);\n}\n\n// Rantai lebih modular dan rata (flat)\n```\n\nDi materi berikutnya, kita akan mempelajari bagaimana **Promise** merevolusi cara penanganan asinkron ini!"
      },
      {
          "id": "lesson-js-int-05",
          "courseId": "course-js-int-09",
          "slug": "promises-dan-chaining",
          "title": "5. Promises, State, & Chaining .then() .catch()",
          "summary": "Kuasai objek Promise, tiga status dasarnya, cara membuat Promise mandiri, dan teknik chaining elegan.",
          "order": 5,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 5. Promises, State, & Chaining .then() .catch()\n\n**Promise** diperkenalkan pada ES6 (ECMAScript 2015) sebagai abstraksi elegan untuk mengatasi keterbatasan callback. Promise merepresentasikan nilai yang mungkin tersedia sekarang, nanti di masa depan, atau tidak pernah sama sekali.\n\n---\n\n## Tiga Status (State) Promise\n\nSebuah Promise selalu berada di salah satu dari tiga status:\n| Status | Penjelasan |\n| :--- | :--- |\n| **Pending** | Status awal, operasi asinkron sedang berlangsung. |\n| **Fulfilled (Resolved)** | Operasi berhasil diselesaikan, menghasilkan nilai (`value`). |\n| **Rejected** | Operasi gagal, menghasilkan alasan kegagalan (`error`/`reason`). |\n\n---\n\n## Membuat Custom Promise\n\n```javascript\nfunction simulasiUnduhBerkas(namaBerkas) {\n  return new Promise((resolve, reject) => {\n    console.log(`Mulai mengunduh ${namaBerkas}...`);\n    \n    setTimeout(() => {\n      const berhasil = true; // Simulasi kondisi jaringan\n      if (berhasil) {\n        resolve({ berkas: namaBerkas, ukuranKB: 1024, status: \"Sukses\" });\n      } else {\n        reject(new Error(\"Koneksi terputus saat mengunduh berkas.\"));\n      }\n    }, 1500);\n  });\n}\n```\n\n---\n\n## Promise Chaining (Rantai Eksekusi Bertingkat)\n\nKelebihan utama Promise adalah kemampuannya dirantai secara horizontal tanpa nesting:\n\n```javascript\nsimulasiUnduhBerkas(\"laporan-keuangan.pdf\")\n  .then((hasil) => {\n    console.log(\"Unduhan selesai:\", hasil.berkas);\n    // Mengembalikan nilai atau Promise baru\n    return hasil.ukuranKB * 1.024;\n  })\n  .then((ukuranBytes) => {\n    console.log(\"Ukuran berkas dalam bytes:\", ukuranBytes);\n  })\n  .catch((error) => {\n    // Menangkap error dari tahap MANA PUN di atas\n    console.error(\"Terjadi kegagalan:\", error.message);\n  })\n  .finally(() => {\n    // Selalu dijalankan terlepas sukses atau gagal\n    console.log(\"Operasi selesai diproses.\");\n  });\n```\n\n---\n\n## Best Practices\n- **Selalu sertakan `.catch()`** pada setiap rantai Promise untuk mencegah unhandled rejection.\n- **Kembalikan nilai dalam `.then()`** jika Anda ingin nilainya diteruskan ke rantai `.then()` berikutnya."
      },
      {
          "id": "lesson-js-int-06",
          "courseId": "course-js-int-09",
          "slug": "promise-combinators-all-race",
          "title": "6. Promise Combinators: all, allSettled, race, any",
          "summary": "Pelajari 4 metode bawaan untuk mengelola beberapa operasi asinkron paralel sekaligus.",
          "order": 6,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 6. Promise Combinators: all, allSettled, race, any\n\nSeringkali kita perlu menjalankan beberapa operasi asinkron secara bersamaan (paralel) daripada menunggu satu per satu secara berurutan. JavaScript menyediakan 4 metode kombinator utama pada objek `Promise`.\n\n---\n\n## Perbandingan 4 Promise Combinators\n\n| Metode | Perilaku Keberhasilan | Perilaku Kegagalan | Kasus Penggunaan Ideal |\n| :--- | :--- | :--- | :--- |\n| **`Promise.all()`** | Menunggu **SEMUA** fulfilled (hasil array). | **Fail-fast**: Gagal seketika jika ada **1 saja** yang rejected. | Memuat data dependen (User + Permissions). |\n| **`Promise.allSettled()`** | Menunggu **SEMUA** selesai tanpa peduli status. | Tidak pernah reject; mengembalikan array status `{status, value/reason}`. | Dashboard analytics / logging batch. |\n| **`Promise.race()`** | Mengambil hasil yang **paling cepat** selesai. | Gagal jika yang tercepat adalah rejected. | Implementasi batas waktu (*Timeout*). |\n| **`Promise.any()`** | Mengambil hasil fulfilled yang **paling cepat**. | Gagal hanya jika **SEMUA** promise rejected (`AggregateError`). | Mengambil data dari server mirror tercepat. |\n\n---\n\n## Contoh Kode Komparatif\n\n```javascript\nconst p1 = new Promise((res) => setTimeout(() => res(\"API Cuaca: 28°C\"), 1000));\nconst p2 = new Promise((_, rej) => setTimeout(() => rej(new Error(\"API Berita Down\")), 500));\nconst p3 = new Promise((res) => setTimeout(() => res(\"API Saham: +1.5%\"), 1500));\n\n// 1. Promise.allSettled (Aman & Tangguh)\nPromise.allSettled([p1, p2, p3]).then((hasil) => {\n  hasil.forEach((h, idx) => {\n    if (h.status === \"fulfilled\") {\n      console.log(`Task ${idx + 1} Berhasil:`, h.value);\n    } else {\n      console.warn(`Task ${idx + 1} Gagal:`, h.reason.message);\n    }\n  });\n});\n\n// 2. Promise.race untuk Timeout Pattern\nfunction denganTimeout(janji, batasMs) {\n  const timeout = new Promise((_, reject) =>\n    setTimeout(() => reject(new Error(\"Operasi melebihi batas waktu (Timeout)!\")), batasMs)\n  );\n  return Promise.race([janji, timeout]);\n}\n\ndenganTimeout(p3, 1000)\n  .then(console.log)\n  .catch((err) => console.error(err.message)); // Output: Operasi melebihi batas waktu!\n```"
      },
      {
          "id": "lesson-js-int-07",
          "courseId": "course-js-int-09",
          "slug": "async-await-error-handling",
          "title": "7. Async/Await & Penanganan Error try...catch",
          "summary": "Tulis kode asinkron dengan gaya sinkron yang bersih, mudah didebug, dan aman dengan blok try...catch.",
          "order": 7,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 7. Async/Await & Penanganan Error try...catch\n\nDiperkenalkan pada ES2017, `async` dan `await` adalah pemanis sintaks (*syntactic sugar*) di atas Promise yang membuat alur asinkron terbaca semudah kode sinkron standar.\n\n---\n\n## Aturan Dasar Async/Await\n\n1. Fungsi yang diberi kata kunci `async` **selalu mengembalikan Promise secara otomatis**.\n2. Kata kunci `await` hanya bisa digunakan di dalam fungsi `async` (atau top-level module).\n3. `await` menjeda eksekusi fungsi hingga Promise selesai (*resolved*), tanpa memblokir thread browser utama.\n\n```javascript\nasync function muatDataPengguna(id) {\n  try {\n    console.log(\"Memulai request...\");\n    const respons = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);\n    \n    if (!respons.ok) {\n      throw new Error(`HTTP error! status: ${respons.status}`);\n    }\n\n    const pengguna = await respons.json();\n    return pengguna;\n  } catch (error) {\n    console.error(\"Gagal mengambil data pengguna:\", error.message);\n    // Opsional: rethrow atau kembalikan fallback value\n    return null;\n  } finally {\n    console.log(\"Selesai mencoba mengambil data.\");\n  }\n}\n\n// Cara memanggil:\nmuatDataPengguna(1).then((data) => {\n  if (data) console.log(\"Nama:\", data.name);\n});\n```\n\n---\n\n## Bahaya Await Serial yang Tidak Perlu\n\nHindari menunggu tugas yang saling independen secara serial:\n\n```javascript\n// KURANG OPTIMAL (Membutuhkan 2 + 2 = 4 detik)\nasync function muatLambat() {\n  const user = await ambilUser(); // 2 detik\n  const posts = await ambilPosts(); // 2 detik\n  return { user, posts };\n}\n\n// JAUH LEBIH CEPAT (Paralel, hanya butuh 2 detik total)\nasync function muatOptimal() {\n  const [user, posts] = await Promise.all([\n    ambilUser(),\n    ambilPosts()\n  ]);\n  return { user, posts };\n}\n```\n\n---\n\n## Do's & Don'ts\n- **Selalu bungkus `await` dengan `try...catch`** untuk mengantisipasi kegagalan jaringan atau server down.\n- **Jangan gunakan `forEach` bersama `async/await`**, gunakan loop `for...of` atau `Promise.all(array.map(...))` agar eksekusi asinkron berjalan sesuai harapan."
      },
      {
          "id": "lesson-js-int-08",
          "courseId": "course-js-int-09",
          "slug": "fetch-api-rest-requests",
          "title": "8. Fetch API, Headers, & Konsumsi RESTful API",
          "summary": "Pelajari metode HTTP (GET, POST, PUT, DELETE), pengiriman JSON payload, custom headers, dan penanganan status respons HTTP.",
          "order": 8,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 8. Fetch API, Headers, & Konsumsi RESTful API\n\n`fetch()` adalah API bawaan browser modern untuk melakukan HTTP requests menggantikan `XMLHttpRequest`.\n\n---\n\n## Anatomi Permintaan HTTP RESTful\n\nREST API berkomunikasi menggunakan metode HTTP standar:\n| Metode | Fungsi | Memiliki Body Payload? |\n| :--- | :--- | :--- |\n| **GET** | Membaca / mengambil data dari server | Tidak |\n| **POST** | Membuat data baru di server | Ya |\n| **PUT / PATCH** | Memperbarui data yang sudah ada | Ya |\n| **DELETE** | Menghapus data dari server | Umumnya Tidak |\n\n---\n\n## Contoh Lengkap: Operasi CRUD dengan Fetch\n\n```javascript\nconst API_URL = \"https://jsonplaceholder.typicode.com/posts\";\n\n// 1. GET: Mengambil Data\nasync function ambilDaftarPost() {\n  const res = await fetch(API_URL);\n  if (!res.ok) throw new Error(`Gagal: ${res.status}`);\n  const data = await res.json();\n  return data.slice(0, 5);\n}\n\n// 2. POST: Membuat Data Baru\nasync function buatPostBaru(judul, konten, userId = 1) {\n  const res = await fetch(API_URL, {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\",\n      \"Authorization\": \"Bearer token_rahasia_anda\"\n    },\n    body: JSON.stringify({\n      title: judul,\n      body: konten,\n      userId: userId\n    })\n  });\n\n  if (!res.ok) throw new Error(\"Gagal menyimpan post baru\");\n  return await res.json();\n}\n\n// 3. DELETE: Menghapus Data\nasync function hapusPost(id) {\n  const res = await fetch(`${API_URL}/${id}`, {\n    method: \"DELETE\"\n  });\n  return res.ok;\n}\n```\n\n---\n\n## Catatan Kritis Mengenai Fetch API\n> **Penting**: `fetch()` **TIDAK AKAN** menolak Promise jika menerima HTTP 404 atau 500! Promise hanya reject jika terjadi kegagalan jaringan (*network error* atau CORS blocking). Anda **wajib** memeriksa `if (!response.ok)` secara manual!"
      },
      {
          "id": "lesson-js-int-09",
          "courseId": "course-js-int-09",
          "slug": "web-storage-api",
          "title": "9. Web Storage: LocalStorage, SessionStorage & Cookies",
          "summary": "Simpan state dan preferensi pengguna di browser dengan LocalStorage, SessionStorage, serialisasi JSON, dan mitigasi XSS.",
          "order": 9,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 9. Web Storage: LocalStorage, SessionStorage & Cookies\n\nAplikasi web modern membutuhkan penyimpanan data sisi klien (*client-side storage*) untuk menyimpan preferensi tema (dark/light mode), token sesi, atau keranjang belanja sementara.\n\n---\n\n## Perbandingan Mekanisme Penyimpanan Klien\n\n| Fitur | LocalStorage | SessionStorage | Cookies |\n| :--- | :--- | :--- | :--- |\n| **Masa Simpan** | Permanen hingga dihapus | Hilang saat tab browser ditutup | Ditentukan oleh `Expires` / `Max-Age` |\n| **Kapasitas** | ~5MB - 10MB | ~5MB | ~4KB |\n| **Kirim ke Server?** | Tidak (Hanya klien) | Tidak (Hanya klien) | Ya, otomatis di setiap HTTP request |\n| **Aksesibilitas** | Window / Tab domain sama | Hanya tab yang sama | Seluruh dokumen / Server (jika HttpOnly) |\n\n---\n\n## Menggunakan LocalStorage dengan Serialisasi JSON\n\nStorage API hanya dapat menyimpan string teks. Untuk menyimpan objek atau array, gunakan `JSON.stringify()` dan `JSON.parse()`:\n\n```javascript\nconst StorageHelper = {\n  set(kunci, nilai) {\n    try {\n      const dataString = JSON.stringify(nilai);\n      localStorage.setItem(kunci, dataString);\n    } catch (e) {\n      console.error(\"Gagal menyimpan ke LocalStorage:\", e);\n    }\n  },\n\n  get(kunci, nilaiDefault = null) {\n    try {\n      const dataString = localStorage.getItem(kunci);\n      return dataString ? JSON.parse(dataString) : nilaiDefault;\n    } catch (e) {\n      console.error(\"Gagal membaca LocalStorage:\", e);\n      return nilaiDefault;\n    }\n  },\n\n  remove(kunci) {\n    localStorage.removeItem(kunci);\n  },\n\n  clear() {\n    localStorage.clear();\n  }\n};\n\n// Implementasi Preferensi Tema\nStorageHelper.set(\"tema_pilihan\", { mode: \"dark\", ukuranFont: 16 });\nconst tema = StorageHelper.get(\"tema_pilihan\");\nconsole.log(\"Mode tema aktif:\", tema.mode); // \"dark\"\n```\n\n---\n\n## Aspek Keamanan: Mitigasi XSS\n- **Jangan pernah menyimpan kredensial sensitif** seperti token akses otentikasi bernilai tinggi atau nomor kartu kredit di `localStorage` karena rentan dicuri lewat serangan Cross-Site Scripting (XSS).\n- Untuk token autentikasi sesi, lebih disarankan menggunakan **HTTP-Only Cookies** dari server."
      },
      {
          "id": "lesson-js-int-10",
          "courseId": "course-js-int-09",
          "slug": "es6-modules-modular-js",
          "title": "10. ES6 Modules (import/export) & Dynamic Imports",
          "summary": "Rancang arsitektur kode modular, pisahkan dependensi dengan named & default export, serta optimalkan performa dengan Dynamic Imports.",
          "order": 10,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 10. ES6 Modules (import/export) & Dynamic Imports\n\nModularitas adalah kemampuan memecah kode besar menjadi modul-modul berkas terpisah yang dapat digunakan kembali (*reusable*) dan mudah dirawat (*maintainable*).\n\n---\n\n## Named Export vs Default Export\n\n### 1. Berkas: `matematika.js`\n```javascript\n// Named exports (bisa banyak dalam 1 file)\nexport const PI = 3.14159;\n\nexport function tambah(a, b) {\n  return a + b;\n}\n\nexport function kali(a, b) {\n  return a * b;\n}\n\n// Default export (hanya boleh satu per file)\nexport default class Kalkulator {\n  hitungTotal(angkaArr) {\n    return angkaArr.reduce((acc, curr) => acc + curr, 0);\n  }\n}\n```\n\n### 2. Berkas: `app.js`\n```javascript\n// Mengimpor default dan named export secara bersamaan:\nimport Kalkulator, { PI, tambah as jumlahkan } from \"./matematika.js\";\n\nconsole.log(\"Nilai PI:\", PI);\nconsole.log(\"Hasil 5 + 3:\", jumlahkan(5, 3));\n\nconst kalk = new Kalkulator();\nconsole.log(\"Total array:\", kalk.hitungTotal([10, 20, 30]));\n```\n\n---\n\n## Dynamic Imports: Code Splitting & Lazy Loading\n\nAnda dapat memuat modul secara dinamis (*on-demand*) hanya ketika dibutuhkan (misalnya saat tombol diklik):\n\n```javascript\nconst btnExport = document.querySelector(\"#btn-export-pdf\");\n\nbtnExport.addEventListener(\"click\", async () => {\n  btnExport.textContent = \"Memuat modul PDF...\";\n  \n  // Mengimpor pustaka berat hanya saat dibutuhkan\n  const { buatDokumenPDF } = await import(\"./modulBeratPDF.js\");\n  \n  buatDokumenPDF();\n  btnExport.textContent = \"Unduh PDF\";\n});\n```\n\n---\n\n## Manfaat Arsitektur Modular\n1. **Pemisahan Tanggung Jawab (Separation of Concerns)**: Setiap berkas hanya bertanggung jawab atas satu domain logika.\n2. **Namespace Bersih**: Menghindari polusi variabel di window global.\n3. **Optimasi Bundle**: Memungkinkan alat bundler modern (seperti Vite, Webpack, esbuild) melakukan *Tree Shaking* (menghapus kode yang tidak terpakai)."
      }
  ]
,
  "course-ts-int-10": [
      {
          "id": "lesson-ts-int-01",
          "courseId": "course-ts-int-10",
          "slug": "type-aliases-vs-interfaces-declaration-merging",
          "title": "1. Type Aliases vs Interfaces & Declaration Merging",
          "summary": "Pahami perbedaan mendasar kapan menggunakan type alias vs interface, serta konsep Declaration Merging.",
          "order": 1,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 1. Type Aliases vs Interfaces & Declaration Merging\n\nDalam TypeScript tingkat menengah, salah satu keputusan desain paling sering ditemui adalah memilih antara `interface` dan `type`. Keduanya serupa, namun memiliki kapabilitas dan batasan arsitektural yang berbeda.\n\n---\n\n## Perbandingan: Interface vs Type Alias\n\n| Fitur | `interface` | `type` Alias |\n| :--- | :--- | :--- |\n| **Bentuk Data** | Objek & fungsi | Semua tipe (primitif, union, tuple, objek) |\n| **Ekstensi** | `extends` | Intersection (`&`) |\n| **Declaration Merging** | Ya (otomatis digabung jika nama sama) | Tidak (akan melempar compile error) |\n| **Penggunaan Ideal** | OOP, kontrak library publik, model data | Union types, tuple, transformasi tipe tingkat lanjut |\n\n---\n\n## 1. Konsep Declaration Merging\n\nJika Anda mendeklarasikan dua interface dengan nama yang sama dalam scope yang sama, TypeScript akan otomatis menggabungkan keduanya menjadi satu interface gabungan:\n\n```typescript\ninterface Pengguna {\n  id: string;\n  nama: string;\n}\n\n// Deklarasi kedua di tempat atau modul lain:\ninterface Pengguna {\n  email: string;\n  role: 'admin' | 'student';\n}\n\n// Hasil akhir Pengguna memiliki id, nama, email, dan role:\nconst adminBaru: Pengguna = {\n  id: \"usr-01\",\n  nama: \"Azzam\",\n  email: \"azzam@example.com\",\n  role: \"admin\"\n};\n```\n\n> **Tips Arsitektur:** Declaration Merging sangat berguna untuk meng-extend third-party types dari node_modules (misalnya menambahkan properti kustom pada objek `Window` atau `Express.Request`).\n\n---\n\n## 2. Kapan Menggunakan Type Alias?\n\nGunakan `type` saat membutuhkan ekspresi union atau manipulasi primitif:\n\n```typescript\n// Union Types & Template Literals\ntype StatusPesanan = 'menunggu_pembayaran' | 'diproses' | 'dikirim' | 'selesai';\ntype HexColor = `#${string}`;\n\n// Tuple untuk data berurutan\ntype TitikKoordinat = [latitude: number, longitude: number];\n```\n"
      },
      {
          "id": "lesson-ts-int-02",
          "courseId": "course-ts-int-10",
          "slug": "discriminated-unions-exhaustive-checking",
          "title": "2. Discriminated Unions & Exhaustive Checking",
          "summary": "Manfaatkan tagged union pattern dan tipe never untuk verifikasi compile-time yang 100% aman.",
          "order": 2,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 2. Discriminated Unions & Exhaustive Checking\n\n**Discriminated Union** (disebut juga Tagged Union atau Algebraic Data Types) adalah salah satu fitur paling ampuh di TypeScript untuk memodelkan state aplikasi yang saling eksklusif secara aman.\n\n---\n\n## Konsep: Tiga Komponen Discriminated Union\n\nSebuah Discriminated Union memiliki 3 elemen utama:\n1. Beberapa tipe objek yang berbeda.\n2. Setiap objek memiliki properti pembeda yang sama (*discriminant property*) dengan tipe literal unik (biasanya properti seperti `type`, `kind`, atau `status`).\n3. Tipe gabungan (*union*) dari objek-objek tersebut.\n\n---\n\n## Contoh Kasus: Penanganan Respons Jaringan\n\n```typescript\ninterface StateMemuat {\n  status: 'loading';\n}\n\ninterface StateSukses {\n  status: 'success';\n  data: string[];\n  diambilPada: Date;\n}\n\ninterface StateGagal {\n  status: 'error';\n  pesanError: string;\n  kodeStatus: number;\n}\n\n// Union tipe gabungan:\ntype StatusPermintaan = StateMemuat | StateSukses | StateGagal;\n```\n\n---\n\n## Exhaustive Checking dengan Tipe `never`\n\nGunakan tipe bawaan `never` di blok default percabangan (`switch`) untuk memastikan seluruh variasi kondisi telah ditangani. Jika di kemudian hari Anda menambahkan status baru tapi lupa menanganinya, TypeScript akan memberi peringatan saat build:\n\n```typescript\nfunction renderTampilan(state: StatusPermintaan) {\n  switch (state.status) {\n    case 'loading':\n      return \"Sedang memuat data...\";\n    case 'success':\n      return `Data diterima: ${state.data.length} item.`;\n    case 'error':\n      return `Error (${state.kodeStatus}): ${state.pesanError}`;\n    default: {\n      // Jika semua case ditangani, tipe state di sini adalah 'never'\n      const _exhaustiveCheck: never = state;\n      throw new Error(`Status tidak dikenal: ${JSON.stringify(_exhaustiveCheck)}`);\n    }\n  }\n}\n```\n"
      },
      {
          "id": "lesson-ts-int-03",
          "courseId": "course-ts-int-10",
          "slug": "generic-functions-classes-interfaces",
          "title": "3. Generic Functions, Interfaces, & Classes",
          "summary": "Buat kode yang reusable dan type-safe tanpa menggunakan 'any' dengan parameter Generic.",
          "order": 3,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 3. Generic Functions, Interfaces, & Classes\n\nGenerics memungkinkan Anda menulis fungsi, class, dan interface yang dapat bekerja dengan beragam tipe data sambil mempertahankan keamanan tipe (*type safety*), alih-alih menurunkan derajat kode ke `any`.\n\n---\n\n## 1. Generic Functions\n\nSimbol `<T>` adalah placeholder tipe yang akan diisi secara otomatis oleh compiler berdasarkan argumen yang dilewatkan:\n\n```typescript\n// Fungsi pembalik array generic\nfunction balikArray<T>(items: T[]): T[] {\n  return [...items].reverse();\n}\n\nconst angka = balikArray([1, 2, 3, 4]); // Bertipe number[]\nconst teks = balikArray([\"a\", \"b\", \"c\"]); // Bertipe string[]\n```\n\n---\n\n## 2. Generic Interfaces untuk Wrapper Data API\n\nDalam arsitektur backend/frontend, respons API umumnya memiliki format pembungkus (*wrapper*) standar:\n\n```typescript\ninterface ResponsApi<TData> {\n  sukses: boolean;\n  pesan: string;\n  kodeHttp: number;\n  data: TData;\n}\n\ninterface ProfilSiswa {\n  id: string;\n  nama: string;\n  xp: number;\n}\n\n// Respons bertipe terstruktur:\nconst respons: ResponsApi<ProfilSiswa> = {\n  sukses: true,\n  pesan: \"Profil berhasil dimuat\",\n  kodeHttp: 200,\n  data: {\n    id: \"std-99\",\n    nama: \"Budi Santoso\",\n    xp: 450\n  }\n};\n```\n\n---\n\n## 3. Generic Classes: Antrian Data (Queue)\n\n```typescript\nclass Antrean<T> {\n  private elemen: T[] = [];\n\n  masuk(item: T): void {\n    this.elemen.push(item);\n  }\n\n  keluar(): T | undefined {\n    return this.elemen.shift();\n  }\n\n  get panjang(): number {\n    return this.elemen.length;\n  }\n}\n\nconst antreanNama = new Antrean<string>();\nantreanNama.masuk(\"Dewi\");\nantreanNama.masuk(\"Agus\");\nconsole.log(antreanNama.keluar()); // \"Dewi\"\n```\n"
      },
      {
          "id": "lesson-ts-int-04",
          "courseId": "course-ts-int-10",
          "slug": "generic-constraints-kata-kunci-extends",
          "title": "4. Generic Constraints & kata kunci extends",
          "summary": "Batasi parameter tipe generik agar memiliki properti wajib dengan batasan 'T extends Interface'.",
          "order": 4,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 4. Generic Constraints & kata kunci extends\n\nSecara bawaan, parameter generic `<T>` menerima tipe apa saja (seperti `unknown`). Sering kali kita perlu memastikan bahwa tipe `T` memiliki metode atau properti spesifik tertentu. Di sinilah **Generic Constraints** digunakan.\n\n---\n\n## Sintaks Pembatasan (`extends`)\n\n```typescript\ninterface MemilikiId {\n  id: string | number;\n}\n\n// T dibatasi: wajib memiliki properti 'id'\nfunction cariBerdasarkanId<T extends MemilikiId>(koleksi: T[], targetId: string | number): T | undefined {\n  return koleksi.find(item => item.id === targetId);\n}\n\nconst daftarProduk = [\n  { id: 101, judul: \"Buku TypeScript\", harga: 95000 },\n  { id: 102, judul: \"Kursus CSS\", harga: 120000 }\n];\n\nconst hasil = cariBerdasarkanId(daftarProduk, 101); // Valid & type-safe!\n```\n\n---\n\n## Menggunakan Multiple Generic Constraints\n\nKita juga bisa mengombinasikan batasan beberapa tipe menggunakan operator intersection (`&`):\n\n```typescript\ninterface Bernama {\n  nama: string;\n}\n\ninterface Berumur {\n  usia: number;\n}\n\nfunction cetakBiodata<T extends Bernama & Berumur>(obj: T): void {\n  console.log(`Nama: ${obj.nama}, Usia: ${obj.usia} tahun`);\n}\n\ncetakBiodata({ nama: \"Rian\", usia: 24, alamat: \"Jakarta\" }); // Berhasil!\n```\n"
      },
      {
          "id": "lesson-ts-int-05",
          "courseId": "course-ts-int-10",
          "slug": "operator-keyof-typeof-indexed-access-types",
          "title": "5. Operator keyof, typeof, dan Indexed Access Types",
          "summary": "Ekstrak properti dan tipe secara dinamis langsung dari objek dan definisi tipe data.",
          "order": 5,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 5. Operator keyof, typeof, dan Indexed Access Types\n\nTypeScript menyediakan sekumpulan operator tipe yang memungkinkan Anda mengekstrak, merefleksikan, dan menghubungkan tipe data secara dinamis.\n\n---\n\n## 1. Operator `keyof`\n\nOperator `keyof` mengambil tipe objek dan menghasilkan union dari semua nama kuncinya (*string atau number literal union*):\n\n```typescript\ninterface KursusOnline {\n  id: string;\n  judul: string;\n  durasiJam: number;\n  terbit: boolean;\n}\n\n// Tipe PropertiKursus bernilai: 'id' | 'judul' | 'durasiJam' | 'terbit'\ntype PropertiKursus = keyof KursusOnline;\n```\n\n---\n\n## 2. Operator `typeof` dalam Konteks Tipe\n\nDalam TypeScript, `typeof` bisa digunakan di tingkat tipe untuk menyalin struktur tipe dari variabel JavaScript nyata:\n\n```typescript\nconst temaKonfigurasi = {\n  warnaUtama: \"#3b82f6\",\n  modeGelap: true,\n  ukuranFontDefault: 16\n};\n\n// Menghasilkan tipe: { warnaUtama: string; modeGelap: boolean; ukuranFontDefault: number; }\ntype TemaAplikasi = typeof temaKonfigurasi;\n```\n\n---\n\n## 3. Indexed Access Types (`T[K]`)\n\nSama seperti mengambil nilai objek dengan `obj['key']`, Anda bisa mengambil tipe nilai properti spesifik dari suatu tipe:\n\n```typescript\ntype TipeDurasi = KursusOnline['durasiJam']; // number\ntype TipeIdAtauJudul = KursusOnline['id' | 'judul']; // string\n```\n\n### Kombinasi Super Kuat: Fungsi `ambilProperti()`\n```typescript\nfunction ambilProperti<T, K extends keyof T>(objek: T, kunci: K): T[K] {\n  return objek[kunci];\n}\n\nconst siswa = { id: \"101\", nama: \"Farhan\", skor: 98 };\nconst skor = ambilProperti(siswa, \"skor\"); // Otomatis bertipe number!\n```\n"
      },
      {
          "id": "lesson-ts-int-06",
          "courseId": "course-ts-int-10",
          "slug": "conditional-types-kata-kunci-infer",
          "title": "6. Conditional Types & kata kunci infer",
          "summary": "Buat percabangan logika tingkat tipe data (T extends U ? X : Y) dan ekstraksi tipe dengan infer.",
          "order": 6,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 6. Conditional Types & kata kunci infer\n\nConditional Types memungkinkan pengambilan keputusan tipe data pada saat kompilasi dengan sintaks mirip ternary operator: `T extends U ? X : Y`.\n\n---\n\n## 1. Fondasi Conditional Types\n\n```typescript\n// Menentukan tipe berdasarkan apakah T adalah array\ntype ElemenArray<T> = T extends (infer U)[] ? U : T;\n\ntype Contoh1 = ElemenArray<string[]>; // string\ntype Contoh2 = ElemenArray<number>;   // number\n```\n\n---\n\n## 2. Kata Kunci `infer`\n\nKata kunci `infer` digunakan di dalam klausul `extends` untuk mendeklarasikan variabel tipe yang ingin Anda tebak/ekstrak dari tipe lain.\n\n### Contoh Kasus: Mengekstrak Tipe Return dari Promise (Awaited)\n```typescript\ntype EkstrakIsiPromise<T> = T extends Promise<infer U> ? U : T;\n\ntype HasilAsinkron = EkstrakIsiPromise<Promise<string>>; // string\ntype HasilSinkron = EkstrakIsiPromise<number>;           // number\n```\n\n### Mengekstrak Tipe Return Fungsi:\n```typescript\ntype TipeReturnFungsi<T> = T extends (...args: any[]) => infer R ? R : never;\n\nfunction hitungLuas(panjang: number, lebar: number): number {\n  return panjang * lebar;\n}\n\ntype OutputLuas = TipeReturnFungsi<typeof hitungLuas>; // number\n```\n"
      },
      {
          "id": "lesson-ts-int-07",
          "courseId": "course-ts-int-10",
          "slug": "mapped-types-template-literal-types",
          "title": "7. Mapped Types, Template Literal Types & Key Remapping",
          "summary": "Transformasikan properti objek secara dinamis dan manipulasi string literal tingkat tipe.",
          "order": 7,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 7. Mapped Types, Template Literal Types & Key Remapping\n\n**Mapped Types** memungkinkan Anda membuat tipe baru dengan melakukan iterasi ke seluruh properti dari tipe yang sudah ada. Mirip seperti metode `.map()` pada array JavaScript, namun beroperasi pada *tipe*.\n\n---\n\n## 1. Sintaks Dasar Mapped Type\n\n```typescript\ntype JadikanBoolean<T> = {\n  [K in keyof T]: boolean;\n};\n\ninterface Pengaturan {\n  audio: string;\n  resolusi: number;\n}\n\n// Menghasilkan { audio: boolean; resolusi: boolean; }\ntype StatusPengaturan = JadikanBoolean<Pengaturan>;\n```\n\n---\n\n## 2. Template Literal Types\n\nTypeScript mendukung sintaks template string untuk menggabungkan string literal:\n\n```typescript\ntype PosisiX = 'left' | 'center' | 'right';\ntype PosisiY = 'top' | 'middle' | 'bottom';\n\n// Menggabungkan menjadi: 'left-top' | 'left-middle' | ... (9 kemungkinan)\ntype PosisiElemen = `${PosisiX}-${PosisiY}`;\n```\n\n---\n\n## 3. Key Remapping dengan kata kunci `as`\n\nAnda bisa mengubah nama properti (misalnya menambahkan prefix `on` atau `get`) saat melakukan mapping:\n\n```typescript\ninterface EntitasPengguna {\n  id: string;\n  nama: string;\n}\n\n// Menghasilkan { getId: () => string; getNama: () => string; }\ntype GetterPengguna<T> = {\n  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];\n};\n\ntype Aksesor = GetterPengguna<EntitasPengguna>;\n```\n"
      },
      {
          "id": "lesson-ts-int-08",
          "courseId": "course-ts-int-10",
          "slug": "utility-types-mendalam-pick-omit-record-partial",
          "title": "8. Utility Types Mendalam (Pick, Omit, Record, Partial, Readonly)",
          "summary": "Kuasai utilitas bawaan TypeScript standar enterprise untuk menyederhanakan kode secara profesional.",
          "order": 8,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 8. Utility Types Mendalam (Pick, Omit, Record, Partial, Readonly)\n\nTypeScript menyediakan sekumpulan *Built-in Utility Types* yang sangat sering digunakan dalam pengembangan aplikasi enterprise untuk memodifikasi tipe tanpa duplikasi kode.\n\n---\n\n## 1. `Partial<T>` dan `Required<T>`\n\n- **`Partial<T>`**: Mengubah semua properti menjadi opsional (`?`). Ideal untuk operasi *patch update* formulir.\n- **`Required<T>`**: Menghapus tanda opsional, memastikan semua nilai wajib ada.\n\n```typescript\ninterface Akun {\n  id: string;\n  username: string;\n  fotoUrl?: string;\n}\n\n// Semua properti opsional untuk endpoint PUT/PATCH:\ntype UpdateAkunPayload = Partial<Akun>;\n```\n\n---\n\n## 2. `Pick<T, K>` dan `Omit<T, K>`\n\n- **`Pick<T, K>`**: Memilih subset spesifik properti dari interface.\n- **`Omit<T, K>`**: Membuang properti tertentu dari interface.\n\n```typescript\ninterface ArtikelBlog {\n  id: string;\n  slug: string;\n  konten: string;\n  penulisId: string;\n  dilihatBerapaKali: number;\n}\n\n// Kartu preview hanya butuh id, slug, dan judul\ntype PreviewArtikel = Pick<ArtikelBlog, 'id' | 'slug'>;\n\n// Payload pembuatan artikel baru (belum memiliki id atau hitungan view)\ntype BuatArtikelBaru = Omit<ArtikelBlog, 'id' | 'dilihatBerapaKali'>;\n```\n\n---\n\n## 3. `Record<K, T>`\n\nMendefinisikan dictionary/map dengan key bertipe `K` dan value bertipe `T`:\n\n```typescript\ntype PeranAplikasi = 'admin' | 'moderator' | 'anggota';\n\ninterface HakAkses {\n  bisaHapus: boolean;\n  bisaEdit: boolean;\n}\n\nconst matriksIzin: Record<PeranAplikasi, HakAkses> = {\n  admin: { bisaHapus: true, bisaEdit: true },\n  moderator: { bisaHapus: false, bisaEdit: true },\n  anggota: { bisaHapus: false, bisaEdit: false }\n};\n```\n"
      },
      {
          "id": "lesson-ts-int-09",
          "courseId": "course-ts-int-10",
          "slug": "custom-type-guards-type-assertions",
          "title": "9. Custom Type Guards & Type Assertions (is, asserts)",
          "summary": "Kendalikan type narrowing runtime dengan predikat tipe 'value is Type' dan fungsi penegasan 'asserts'.",
          "order": 9,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 9. Custom Type Guards & Type Assertions (is, asserts)\n\nTypeScript melakukan *type narrowing* otomatis untuk `typeof` dan `instanceof`. Namun saat memeriksa struktur data kompleks di runtime (seperti respons JSON dari API pihak ketiga), kita membutuhkan **Custom Type Guards**.\n\n---\n\n## 1. Type Predicate: `parameter is Tipe`\n\nFungsi Type Guard mengembalikan boolean, tetapi tanda pengembaliannya dideklarasikan dengan pola `arg is Tipe`:\n\n```typescript\ninterface Kucing {\n  meong(): void;\n}\n\ninterface Bebek {\n  kwek(): void;\n}\n\n// Custom Type Guard\nfunction adalahKucing(hewan: Kucing | Bebek): hewan is Kucing {\n  return (hewan as Kucing).meong !== undefined;\n}\n\nfunction bersuara(hewan: Kucing | Bebek) {\n  if (adalahKucing(hewan)) {\n    // TypeScript otomatis tahu bahwa di blok ini 'hewan' adalah Kucing\n    hewan.meong();\n  } else {\n    // Di sini pasti Bebek\n    hewan.kwek();\n  }\n}\n```\n\n---\n\n## 2. Assertion Functions: `asserts kondisi`\n\nTerkadang kita ingin melempar Error jika kondisi tidak terpenuhi, dan meminta TypeScript mempersempit tipe setelah fungsi tersebut dipanggil:\n\n```typescript\nfunction tegaskanString(nilai: unknown): asserts nilai is string {\n  if (typeof nilai !== 'string') {\n    throw new TypeError(`Nilai diharapkan bertipe string, tetapi menerima ${typeof nilai}`);\n  }\n}\n\nfunction prosesData(input: unknown) {\n  tegaskanString(input);\n  // Setelah baris di atas, TypeScript memastikan input bertipe 'string':\n  console.log(input.toUpperCase());\n}\n```\n"
      },
      {
          "id": "lesson-ts-int-10",
          "courseId": "course-ts-int-10",
          "slug": "best-practice-tsconfig-arsitektur-enterprise",
          "title": "10. Best Practice Konfigurasi tsconfig & Arsitektur Enterprise",
          "summary": "Susun tsconfig.json dengan opsi strict mode maksimal, path aliases, dan isolasi modul enterprise.",
          "order": 10,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 10. Best Practice Konfigurasi tsconfig & Arsitektur Enterprise\n\nSebagus apa pun kode yang ditulis, keamanan proyek TypeScript sangat bergantung pada opsi yang diaktifkan dalam file konfigurasi `tsconfig.json`.\n\n---\n\n## Aturan Emas: Aktifkan `\"strict\": true`\n\nMenghidupkan flag `strict: true` mengaktifkan sekumpulan pemeriksaan penting secara otomatis:\n- `noImplicitAny`: Mencegah variabel tanpa tipe yang otomatis bernilai `any`.\n- `strictNullChecks`: Mencegah bug fatal \"Cannot read properties of undefined\".\n- `strictFunctionTypes`: Memeriksa parameter fungsi secara contravariant.\n- `useUnknownInCatchVariables`: Variabel blok `catch(err)` bertipe `unknown`, bukan `any`.\n\n---\n\n## Opsi Tambahan untuk Standar Enterprise\n\n```json\n{\n  \"compilerOptions\": {\n    \"target\": \"ES2022\",\n    \"lib\": [\"DOM\", \"DOM.Iterable\", \"ESNext\"],\n    \"strict\": true,\n    \"noUncheckedIndexedAccess\": true,\n    \"noImplicitOverride\": true,\n    \"exactOptionalPropertyTypes\": true,\n    \"baseUrl\": \".\",\n    \"paths\": {\n      \"@/*\": [\"./src/*\"]\n    }\n  }\n}\n```\n\n### Penjelasan Opsi Kunci:\n1. **`noUncheckedIndexedAccess`**: Mengakses `array[index]` atau `obj[key]` akan mengembalikan `T | undefined`, memaksa Anda mengecek keberadaan data sebelum menggunakannya.\n2. **`noImplicitOverride`**: Memaksa penggunaan kata kunci `override` saat method subclass menimpa method induk pada pemrograman OOP.\n3. **`paths` Alias**: Menghilangkan import path relatif yang berantakan (`../../../components`) menjadi format bersih seperti `@/components`.\n"
      }
  ]
,
  "course-css-int-11": [
      {
          "id": "lesson-css-int-01",
          "courseId": "course-css-int-11",
          "slug": "css-custom-properties-desain-sistem",
          "title": "1. CSS Custom Properties (Variables) & Desain Sistem Dinamis",
          "summary": "Pelajari manajemen token desain, scoping variabel, serta implementasi Dark/Light theme tanpa reload halaman.",
          "order": 1,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 1. CSS Custom Properties (Variables) & Desain Sistem Dinamis\n\nCSS Custom Properties (dikenal sebagai variabel CSS) merevolusi arsitektur antarmuka modern. Tidak seperti variabel preprocessor (seperti Sass/Less) yang di-compile secara statis, variabel CSS bersifat **dinamis di runtime** dan mewarisi prinsip cascade (*cascading*).\n\n---\n\n## Deklarasi Global pada Root & Penggunaan\n\nVariabel dideklarasikan dengan awalan dua tanda hubung (`--`) dan diakses melalui fungsi `var()`:\n\n```css\n:root {\n  /* Design Tokens: Warna */\n  --kl-primary: #2563eb;\n  --kl-primary-hover: #1d4ed8;\n  --kl-bg-body: #ffffff;\n  --kl-text-main: #0f172a;\n\n  /* Design Tokens: Spasi & Tipografi */\n  --kl-radius-md: 8px;\n  --kl-spacing-unit: 4px;\n}\n\n.kartu-fitur {\n  background-color: var(--kl-bg-body);\n  color: var(--kl-text-main);\n  border-radius: var(--kl-radius-md);\n  padding: calc(var(--kl-spacing-unit) * 4); /* 16px */\n}\n```\n\n---\n\n## Mengubah Tema Dinamis (Dark Mode)\n\nKarena variabel CSS hidup di DOM, mengubah tema semudah menimpa nilainya di bawah selector kelas atau atribut data:\n\n```css\n/* Tema Gelap */\n[data-bs-theme=\"dark\"],\n.theme-dark {\n  --kl-bg-body: #0b0f19;\n  --kl-text-main: #f8fafc;\n  --kl-primary: #3b82f6;\n}\n```\n\n### Nilai Cadangan (Fallback Value):\n```css\n/* Jika --kl-aksen tidak terdefinisi, browser memakai nilai cadangan 'crimson' */\n.badge-peringatan {\n  background-color: var(--kl-aksen, #e11d48);\n}\n```\n"
      },
      {
          "id": "lesson-css-int-02",
          "courseId": "course-css-int-11",
          "slug": "transisi-halus-timing-functions-cubic-bezier",
          "title": "2. Transisi Halus & Timing Functions (Cubic-Bezier)",
          "summary": "Kuasai kurva percepatan transisi, timing function cubic-bezier kustom, dan efek micro-interaction alami.",
          "order": 2,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 2. Transisi Halus & Timing Functions (Cubic-Bezier)\n\nTransisi CSS (`transition`) memungkinkan perubahan nilai properti terjadi secara bertahap selama durasi tertentu, alih-alih melompat seketika. Ini adalah fondasi dari *micro-interactions* yang membuat website terasa hidup dan responsif.\n\n---\n\n## Anatomi Shorthand Transisi\n\n```css\n.tombol-aksi {\n  /* property | duration | timing-function | delay */\n  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), \n              box-shadow 0.25s ease;\n}\n\n.tombol-aksi:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.15);\n}\n```\n\n---\n\n## Memahami Kurva Easing & `cubic-bezier()`\n\nBrowser menyediakan preset bawaan seperti `ease`, `linear`, `ease-in`, `ease-out`, dan `ease-in-out`. Namun untuk menciptakan sensasi antarmuka modern (seperti iOS atau material design kelas atas), desainer menggunakan kurva kustom **Cubic-Bezier** ($P_0, P_1, P_2, P_3$).\n\n| Timing Function | Nilai Cubic Bezier | Karakteristik Rasa Visual |\n| :--- | :--- | :--- |\n| **Snap Smooth** | `cubic-bezier(0.16, 1, 0.3, 1)` | Awal cepat, pengereman sangat mulus dan anggun |\n| **Spring/Bounce** | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Efek membal sedikit melewati batas (overshoot) |\n| **Linear** | `linear` | Kecepatan konstan kaku (kurang alami untuk UI interaktif) |\n\n> **Perhatian Aksesibilitas:** Selalu hormati preferensi pengguna dengan media query `@media (prefers-reduced-motion: reduce)` untuk mematikan transisi jika diperlukan.\n"
      },
      {
          "id": "lesson-css-int-03",
          "courseId": "course-css-int-11",
          "slug": "animasi-keyframes-gpu-compositing-60fps",
          "title": "3. Animasi Keyframes Berperforma Tinggi (GPU Compositing 60fps)",
          "summary": "Rancang animasi kompleks dengan @keyframes dan teknik akselerasi hardware via transform & opacity.",
          "order": 3,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 3. Animasi Keyframes Berperforma Tinggi (GPU Compositing 60fps)\n\nKetika transisi sederhana dari state A ke B tidak mencukupi, kita menggunakan animasi **`@keyframes`** yang memungkinkan pembuatan urutan gerakan berulang, multi-tahap, dan independen dari aksi pengguna.\n\n---\n\n## 1. Aturan Emas Performa: Hanya Animasikan Transform & Opacity\n\nMesin rendering browser (Chromium Blink, WebKit, Gecko) memiliki 3 tahapan visual:\n1. **Layout (Reflow)**: Menghitung posisi dan ukuran geometri elemen (`width`, `height`, `top`, `margin`). *Sangat berat bagi CPU!*\n2. **Paint (Repaint)**: Menggambar piksel, warna, border, dan bayangan ke layar (`color`, `background`, `box-shadow`).\n3. **Composite**: Menyusun lapisan (*composite layers*) yang telah digambar. **Hanya `transform` dan `opacity`** yang dapat diproses langsung oleh GPU (*Hardware Accelerated*) tanpa memicu Layout dan Paint ulang!\n\n---\n\n## 2. Sintaks @keyframes & Properti Animasi\n\n```css\n@keyframes denyutHalus {\n  0% {\n    transform: scale(1);\n    opacity: 0.9;\n  }\n  50% {\n    transform: scale(1.05);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 0.9;\n  }\n}\n\n.badge-live {\n  /* name | duration | timing-function | iteration-count */\n  animation: denyutHalus 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  will-change: transform, opacity;\n}\n```\n\n### Memahami `animation-fill-mode`:\n- `forwards`: Elemen mempertahankan gaya pada keyframe terakhir setelah animasi selesai.\n- `backwards`: Elemen menerapkan gaya pada keyframe pertama bahkan selama periode jeda (`animation-delay`).\n- `both`: Menggabungkan perilaku `forwards` dan `backwards`.\n"
      },
      {
          "id": "lesson-css-int-04",
          "courseId": "course-css-int-11",
          "slug": "pseudo-classes-modern-has-is-where",
          "title": "4. Pseudo-classes Modern: :has(), :is(), dan :where()",
          "summary": "Gunakan 'parent selector' yang telah lama dinanti (:has) dan optimalkan spesifisitas selector dengan :is dan :where.",
          "order": 4,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 4. Pseudo-classes Modern: :has(), :is(), dan :where()\n\nStandar CSS modern memperkenalkan pseudo-classes mutakhir yang secara radikal mengurangi kebutuhan kita menulis logika JavaScript hanya untuk sekadar memanipulasi styling.\n\n---\n\n## 1. `:has()` — Selector Induk (Parent Selector)\n\nSelama puluhan tahun, CSS tidak bisa memilih elemen induk berdasarkan kondisi anak (*children*). Kini `:has()` memungkinkan hal tersebut:\n\n```css\n/* Beri border merah pada form jika DI DALAMNYA ada input yang tidak valid */\nform:has(input:invalid) {\n  border-left: 4px solid #ef4444;\n}\n\n/* Ubah layout kartu jika kartu tersebut memiliki gambar */\n.kartu:has(.gambar-cover) {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n}\n```\n\n---\n\n## 2. `:is()` vs `:where()` — Pengelompokan & Spesifisitas\n\nKedua pseudo-class ini menyederhanakan selector majemuk yang panjang, namun dengan aturan **spesifisitas** (*specificity*) yang bertolak belakang:\n\n```css\n/* Penulisan lama: */\nheader h1, header h2, header h3,\nnav h1, nav h2, nav h3 {\n  color: #1e293b;\n}\n\n/* Penulisan modern menggunakan :is() */\n:is(header, nav) :is(h1, h2, h3) {\n  color: #1e293b;\n}\n```\n\n### Perbedaan Spesifisitas:\n- **`:is(...)`**: Mengambil spesifisitas dari pemilih paling spesifik di dalam daftarnya.\n- **`:where(...)`**: Memiliki spesifisitas **NOL (0,0,0)**! Sangat cocok untuk reset CSS dan library komponen karena sangat mudah ditimpa (*override*) oleh kelas pengguna.\n"
      },
      {
          "id": "lesson-css-int-05",
          "courseId": "course-css-int-11",
          "slug": "fungsi-matematika-clamp-min-max-calc",
          "title": "5. Fungsi Matematika Modern: clamp(), min(), max(), dan calc()",
          "summary": "Ciptakan tipografi dan layout fluid yang menyesuaikan layar tanpa puluhan breakpoint media query.",
          "order": 5,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 5. Fungsi Matematika Modern: clamp(), min(), max(), dan calc()\n\nDahulu, untuk mengubah ukuran font dari ponsel ke desktop, kita harus menulis banyak `@media (min-width: ...)`. Kini, dengan fungsi matematika CSS bawaan, kita bisa membuat ukuran yang **fluid** (mengalir mulus).\n\n---\n\n## 1. Fungsi `clamp(minimum, ideal, maksimum)`\n\n`clamp()` menetapkan batas bawah, nilai target dinamis, dan batas atas:\n\n```css\nh1 {\n  /* Font tidak pernah lebih kecil dari 1.75rem (28px), \n     mengikuti 4% lebar layar (4vw), \n     dan tidak pernah melebihi 3.25rem (52px) */\n  font-size: clamp(1.75rem, 4vw + 1rem, 3.25rem);\n}\n```\n\n---\n\n## 2. Fungsi `min()` dan `max()`\n\n- **`min(a, b)`**: Memilih nilai terkecil dari daftar. Sangat berguna untuk kontainer responsif:\n  ```css\n  .kontainer {\n    /* Melebar hingga 90% layar, tapi mentok di 1200px */\n    width: min(90vw, 1200px);\n    margin-inline: auto;\n  }\n  ```\n- **`max(a, b)`**: Memilih nilai terbesar dari daftar. Sering dipakai untuk memastikan padding aman (*safe area*):\n  ```css\n  .footer {\n    /* Padding bawah minimal 20px, atau mengikuti safe-area perangkat */\n    padding-bottom: max(20px, env(safe-area-inset-bottom));\n  }\n  ```\n"
      },
      {
          "id": "lesson-css-int-06",
          "courseId": "course-css-int-11",
          "slug": "css-subgrid-arsitektur-grid-bersarang",
          "title": "6. CSS Subgrid untuk Arsitektur Grid Bersarang",
          "summary": "Sejajarkan baris dan kolom komponen anak dengan grid induk menggunakan 'grid-template-columns: subgrid'.",
          "order": 6,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 6. CSS Subgrid untuk Arsitektur Grid Bersarang\n\nSebelum adanya **Subgrid**, jika Anda memiliki kartu dalam Grid CSS, elemen di dalam setiap kartu (seperti judul, deskripsi, dan tombol footer) tidak bisa saling sejajar secara horizontal jika panjang teks deskripsinya berbeda-beda.\n\n---\n\n## Mengapa Subgrid Diperlukan?\n\nDalam Grid standar, konteks grid berhenti pada anak langsung (*direct children*). Anak dari anak tidak berbagi garis trek grid induk.\n\nDengan **`subgrid`**, anak mewarisi trek baris/kolom dari grid utama:\n\n```css\n/* Kontainer Utama 3 Kolom */\n.katalog-kursus {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n\n/* Setiap Kartu Menempati 3 Baris Trek Induk */\n.kartu-kursus {\n  display: grid;\n  grid-template-rows: subgrid;\n  grid-row: span 3; /* Melintasi: 1. Header, 2. Konten, 3. Tombol Aksi */\n  background: white;\n  border-radius: 12px;\n}\n```\n\n### Hasil Visual:\nSemua judul kartu akan memiliki tinggi yang sama rata, seluruh deskripsi sejajar rapi, dan semua tombol aksi di bagian bawah berada pada garis horizontal yang sejajar sempurna, terlepas dari perbedaan panjang teks masing-masing kartu!\n"
      },
      {
          "id": "lesson-css-int-07",
          "courseId": "course-css-int-11",
          "slug": "css-scroll-snap-carousel-murni",
          "title": "7. CSS Scroll Snap untuk Carousel & Section Snapping Murni",
          "summary": "Bangun komponen slider atau carousel mulus tanpa library JavaScript tambahan dengan Scroll Snap API.",
          "order": 7,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 7. CSS Scroll Snap untuk Carousel & Section Snapping Murni\n\n**CSS Scroll Snap** memungkinkan Anda mengunci posisi scroll pada titik tertentu saat pengguna menggeser (*swipe*) atau menggulir mouse, memberikan pengalaman geser yang presisi seperti aplikasi native tanpa ketergantungan plugin JavaScript yang berat.\n\n---\n\n## Konsep: Kontainer vs Item Anak\n\n1. **Pada Elemen Kontainer**: Tentukan arah dan tingkat ketegasan snap dengan `scroll-snap-type`.\n2. **Pada Elemen Anak**: Tentukan titik jangkar snap dengan `scroll-snap-align`.\n\n```css\n/* Kontainer Carousel */\n.slider-galeri {\n  display: flex;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory; /* x = horizontal, mandatory = wajib mengunci */\n  scroll-behavior: smooth;\n  gap: 16px;\n  padding: 16px;\n}\n\n/* Setiap Slide Kartu */\n.slide-item {\n  flex: 0 0 85%; /* Menampilkan 85% lebar kartu */\n  scroll-snap-align: center; /* Mengunci tepat di tengah layar */\n  scroll-snap-stop: always;  /* Mencegah scroll melompati banyak slide */\n  border-radius: 16px;\n}\n```\n\n---\n\n## Properti Kunci:\n- **`mandatory`**: Layar wajib berhenti di salah satu target snap ketika pengguna selesai menggulir.\n- **`proximity`**: Layar hanya mengunci jika pengguna berhenti sangat dekat dengan target snap.\n- **`scroll-padding`**: Memberi jarak aman pada kontainer agar slide tidak tertutup oleh header sticky.\n"
      },
      {
          "id": "lesson-css-int-08",
          "courseId": "course-css-int-11",
          "slug": "efek-visual-backdrop-filter-glassmorphism",
          "title": "8. Efek Visual Modern: Backdrop-Filter, Blend Modes, & Glassmorphism",
          "summary": "Rancang efek blur latar belakang kaca (frosted glass), gradien mesh dinamis, dan penyesuaian kontras.",
          "order": 8,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 8. Efek Visual Modern: Backdrop-Filter, Blend Modes, & Glassmorphism\n\nDesain web modern sering memanfaatkan efek kedalaman visual (*visual depth*), pantulan kaca buram (*frosted glass*), dan percampuran warna dinamis yang memikat mata namun tetap mempertahankan keterbacaan teks (*accessibility*).\n\n---\n\n## 1. Frosted Glass dengan `backdrop-filter`\n\nPerbedaan mendasar antara `filter` dan `backdrop-filter`:\n- `filter`: Mengaburkan elemen itu sendiri beserta seluruh teks dan gambarnya.\n- `backdrop-filter`: Mengaburkan area **di balik** elemen transparan, sementara teks dan tombol di atasnya tetap tajam kristal!\n\n```css\n.navbar-kaca {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: rgba(255, 255, 255, 0.75);\n  backdrop-filter: blur(16px) saturate(180%);\n  -webkit-backdrop-filter: blur(16px) saturate(180%);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n}\n\n[data-bs-theme=\"dark\"] .navbar-kaca {\n  background: rgba(15, 23, 42, 0.75);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n## 2. Percampuran Warna dengan `mix-blend-mode`\n\n`mix-blend-mode` menentukan bagaimana konten suatu elemen bercampur dengan elemen di bawahnya (mirip fitur Blending Modes di Photoshop atau Figma):\n\n```css\n/* Membuat watermark teks otomatis menyesuaikan kontras dengan gambar di belakangnya */\n.teks-watermark {\n  mix-blend-mode: difference;\n  color: white;\n}\n```\n"
      }
  ]
,
  "course-py-int-12": [
      {
          "id": "lesson-py-int-01",
          "courseId": "course-py-int-12",
          "slug": "paradigma-oop-class-objek-init",
          "title": "1. Paradigma OOP: Class, Objek, dan Method __init__",
          "summary": "Bangun cetak biru objek, pahami parameter self, serta inisialisasi state dengan konstruktor __init__.",
          "order": 1,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 1. Paradigma OOP: Class, Objek, dan Method __init__\n\n*Object-Oriented Programming* (OOP) adalah paradigma pemrograman berbasis objek yang membungkus data (*attributes*) dan fungsi (*methods*) ke dalam satu kesatuan modular.\n\n---\n\n## 1. Class sebagai Cetak Biru (Blueprint)\n\nSebuah **Class** adalah cetak biru, sedangkan **Object (Instance)** adalah wujud nyata yang dibuat dari cetak biru tersebut.\n\n```python\nclass RekeningBank:\n    # Class Attribute (Berlaku untuk semua instance)\n    nama_bank = \"Bank Mandiri KodeLuma\"\n\n    # Instance Constructor (__init__)\n    def __init__(self, nomor_rekening: str, nama_pemilik: str, saldo_awal: float = 0.0):\n        # Instance Attributes (Unik untuk setiap objek)\n        self.nomor_rekening = nomor_rekening\n        self.nama_pemilik = nama_pemilik\n        self.saldo = saldo_awal\n\n    def setor(self, jumlah: float) -> None:\n        if jumlah > 0:\n            self.saldo += jumlah\n            print(f\"Setoran Rp{jumlah:,.2f} berhasil. Saldo saat ini: Rp{self.saldo:,.2f}\")\n        else:\n            raise ValueError(\"Jumlah setoran harus bernilai positif.\")\n\n# Pembuatan Objek\nrekening_budi = RekeningBank(\"123-456-789\", \"Budi Santoso\", 500_000.0)\nrekening_budi.setor(250_000.0)\n```\n\n---\n\n## 2. Mengapa Membutuhkan Parameter `self`?\n\nParameter `self` merepresentasikan instance objek itu sendiri yang sedang memanggil method tersebut. Melalui `self`, Python mengetahui objek spesifik mana yang atributnya sedang dibaca atau diubah.\n"
      },
      {
          "id": "lesson-py-int-02",
          "courseId": "course-py-int-12",
          "slug": "enkapsulasi-atribut-privat-decorator-property",
          "title": "2. Enkapsulasi, Atribut Privat, dan Decorator @property",
          "summary": "Lindungi integritas data dengan name mangling private (__attr) dan buat getter/setter elegan via @property.",
          "order": 2,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 2. Enkapsulasi, Atribut Privat, dan Decorator @property\n\n**Enkapsulasi** adalah prinsip menyembunyikan detail implementasi internal dan melindungi atribut dari modifikasi langsung yang tidak sah atau merusak konsistensi data.\n\n---\n\n## 1. Konvensi Public vs Private di Python\n\nPython menggunakan konvensi penamaan berbasis garis bawah (*underscores*):\n- `self.nama`: Publik (bisa diakses bebas).\n- `self._saldo`: *Protected* (konvensi internal, jangan diakses langsung di luar class).\n- `self.__pin`: *Private* (memicu mekanisme *Name Mangling* menjadi `_ClassName__pin`).\n\n---\n\n## 2. Decorator `@property` untuk Getter & Setter Elegan\n\nDi bahasa lain seperti Java atau C++, programmer sering membuat `getSaldo()` dan `setSaldo()`. Di Python, kita menggunakan decorator **`@property`** sehingga method bisa diakses layaknya variabel biasa namun dengan validasi ketat:\n\n```python\nclass Karyawan:\n    def __init__(self, nama: str, gaji: float):\n        self.nama = nama\n        self._gaji = gaji\n\n    # Getter: Dipanggil saat mengakses 'obj.gaji'\n    @property\n    def gaji(self) -> float:\n        return self._gaji\n\n    # Setter: Dipanggil saat menetapkan 'obj.gaji = nilai'\n    @gaji.setter\n    def gaji(self, nilai_baru: float) -> None:\n        if nilai_baru < 0:\n            raise ValueError(\"Gaji tidak boleh bernilai negatif!\")\n        self._gaji = nilai_baru\n\nbudi = Karyawan(\"Budi\", 8_500_000.0)\nprint(budi.gaji)  # 8500000.0 (Memanggil getter)\n\nbudi.gaji = 9_000_000.0  # Memanggil setter dengan validasi\n# budi.gaji = -1000      # Melempar ValueError!\n```\n"
      },
      {
          "id": "lesson-py-int-03",
          "courseId": "course-py-int-12",
          "slug": "pewarisan-inheritance-super-multiple-inheritance",
          "title": "3. Pewarisan (Inheritance), Super(), dan Multiple Inheritance",
          "summary": "Warisi fungsionalitas parent class, panggil inisialisasi induk dengan super(), dan pahami MRO.",
          "order": 3,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 3. Pewarisan (Inheritance), Super(), dan Multiple Inheritance\n\nPewarisan (*Inheritance*) memungkinkan subclass mewarisi metode dan atribut dari superclass, mencegah duplikasi kode (*DRY - Don't Repeat Yourself*).\n\n---\n\n## 1. Pewarisan Tunggal & Fungsi `super()`\n\nFungsi `super()` mengembalikan proksi objek induk, memungkinkan kita memanggil method superclass tanpa menyebut namanya secara langsung:\n\n```python\nclass Pengguna:\n    def __init__(self, email: str, nama: str):\n        self.email = email\n        self.nama = nama\n\n    def tampilkan_profil(self) -> str:\n        return f\"{self.nama} ({self.email})\"\n\nclass Siswa(Pengguna):\n    def __init__(self, email: str, nama: str, nisn: str):\n        # Memanggil konstruktor superclass\n        super().__init__(email, nama)\n        self.nisn = nisn\n\n    # Menimpa (Override) method induk:\n    def tampilkan_profil(self) -> str:\n        return f\"[SISWA] NISN: {self.nisn} - {super().tampilkan_profil()}\"\n\nsiswa1 = Siswa(\"siswa@sekolah.id\", \"Dian Sastrowardoyo\", \"20260901\")\nprint(siswa1.tampilkan_profil())\n```\n\n---\n\n## 2. Multiple Inheritance & MRO (Method Resolution Order)\n\nPython mengizinkan sebuah class mewarisi lebih dari satu induk. Urutan pencarian method ditentukan oleh algoritma **C3 Linearization** yang tersimpan di atribut `__mro__`:\n\n```python\nclass LoggableMixin:\n    def log(self, pesan: str):\n        print(f\"[LOG] {pesan}\")\n\nclass NotifiableMixin:\n    def kirim_notifikasi(self, tujuan: str, isi: str):\n        print(f\"[SMS/Email ke {tujuan}]: {isi}\")\n\n# Mewarisi 3 class sekaligus\nclass Pesanan(Pengguna, LoggableMixin, NotifiableMixin):\n    pass\n\nprint(Pesanan.__mro__)\n```\n"
      },
      {
          "id": "lesson-py-int-04",
          "courseId": "course-py-int-12",
          "slug": "polimorfisme-duck-typing-abc",
          "title": "4. Polimorfisme, Duck Typing, dan Abstract Base Classes (ABC)",
          "summary": "Terapkan filosofi 'Duck Typing' dan tegaskan kontrak antarmuka menggunakan modul abc bawaan.",
          "order": 4,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 4. Polimorfisme, Duck Typing, dan Abstract Base Classes (ABC)\n\nPolimorfisme memungkinkan objek-objek dari kelas yang berbeda diperlakukan secara seragam jika mereka memiliki antarmuka yang cocok.\n\n---\n\n## 1. Filosofi Duck Typing di Python\n\nDi Python berlaku pepatah: *\"Jika ia berjalan seperti bebek dan bersuara seperti bebek, maka ia adalah bebek.\"* Python tidak mengecek tipe eksplisit suatu objek, melainkan mengecek apakah objek memiliki method yang dibutuhkan di runtime:\n\n```python\nclass PembayaranGopay:\n    def bayar(self, jumlah: float):\n        print(f\"Membayar Rp{jumlah:,.2f} via QRIS Gopay\")\n\nclass PembayaranKartuKredit:\n    def bayar(self, jumlah: float):\n        print(f\"Membayar Rp{jumlah:,.2f} via Visa/Mastercard\")\n\n# Fungsi polimorfik (menerima gateway pembayaran apa pun):\ndef proses_transaksi(gateway, total_tagihan: float):\n    gateway.bayar(total_tagihan)\n\nproses_transaksi(PembayaranGopay(), 75_000.0)\nproses_transaksi(PembayaranKartuKredit(), 250_000.0)\n```\n\n---\n\n## 2. Abstract Base Classes (ABC) untuk Menegaskan Kontrak\n\nJika Anda ingin memastikan bahwa subclass wajib mengimplementasikan method tertentu saat dibuat, gunakan modul bawaan `abc`:\n\n```python\nfrom abc import ABC, abstractmethod\n\nclass NotifikasiService(ABC):\n    @abstractmethod\n    def kirim(self, penerima: str, pesan: str) -> bool:\n        \"\"\"Wajib diimplementasikan oleh setiap subclass\"\"\"\n        pass\n\nclass WhatsAppNotifikasi(NotifikasiService):\n    def kirim(self, penerima: str, pesan: str) -> bool:\n        print(f\"Kirim WA ke {penerima}: {pesan}\")\n        return True\n\n# Mencoba menginstansiasi class tanpa mengimplementasikan abstractmethod \n# akan langsung melempar TypeError: Can't instantiate abstract class!\n```\n"
      },
      {
          "id": "lesson-py-int-05",
          "courseId": "course-py-int-12",
          "slug": "magic-dunder-methods-str-repr-len-eq",
          "title": "5. Magic Dunder Methods: __str__, __repr__, __len__, __eq__",
          "summary": "Kustomisasi representasi string, operator overloading (+, ==), dan integrasi fungsi bawaan Python.",
          "order": 5,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 5. Magic Dunder Methods: __str__, __repr__, __len__, __eq__\n\n**Dunder Methods** (*Double Underscore methods* atau *Magic Methods*) adalah method khusus di Python yang memungkinkan class Anda berinteraksi dengan operator bawaan (`+`, `==`, `<`) dan fungsi sistem seperti `print()`, `len()`, atau `str()`.\n\n---\n\n## 1. `__str__` vs `__repr__`\n\n- **`__str__`**: Format teks yang ramah dan mudah dibaca oleh pengguna biasa saat dipanggil melalui `print(obj)` atau `str(obj)`.\n- **`__repr__`**: Format teks eksplisit untuk debugging programmer (idealnya menampilkan cara merekonstruksi objek tersebut).\n\n```python\nclass Titik2D:\n    def __init__(self, x: float, y: float):\n        self.x = x\n        self.y = y\n\n    def __repr__(self) -> str:\n        return f\"Titik2D(x={self.x}, y={self.y})\"\n\n    def __str__(self) -> str:\n        return f\"Koordinat ({self.x}, {self.y})\"\n\np = Titik2D(10.5, 20.0)\nprint(str(p))   # Koordinat (10.5, 20.0)\nprint(repr(p))  # Titik2D(x=10.5, y=20.0)\n```\n\n---\n\n## 2. Operator Overloading (`__eq__` dan `__add__`)\n\n```python\nclass KeranjangBelanja:\n    def __init__(self, items: list[str]):\n        self.items = items\n\n    def __len__(self) -> int:\n        return len(self.items)\n\n    def __eq__(self, other) -> bool:\n        if isinstance(other, KeranjangBelanja):\n            return self.items == other.items\n        return False\n\n    def __add__(self, other: \"KeranjangBelanja\") -> \"KeranjangBelanja\":\n        # Mengizinkan keranjang1 + keranjang2\n        return KeranjangBelanja(self.items + other.items)\n\nk1 = KeranjangBelanja([\"Laptop\", \"Mouse\"])\nk2 = KeranjangBelanja([\"Keyboard\"])\nk_gabungan = k1 + k2\nprint(len(k_gabungan))  # Output: 3\n```\n"
      },
      {
          "id": "lesson-py-int-06",
          "courseId": "course-py-int-12",
          "slug": "list-dict-set-comprehensions-lanjut",
          "title": "6. List, Dict, & Set Comprehensions Tingkat Lanjut",
          "summary": "Tulis transformasi data dan filtering dalam satu baris kode Pythonic yang cepat dan efisien.",
          "order": 6,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 6. List, Dict, & Set Comprehensions Tingkat Lanjut\n\nComprehensions adalah salah satu fitur paling digemari di Python karena sintaksnya yang padat (*concise*), ekspresif, dan berjalan lebih cepat dibandingkan perulangan `for` konvensional di tingkat interpreter CPython.\n\n---\n\n## 1. Advanced List Comprehension dengan Kondisi\n\n```python\nangka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\n# Kuadrat dari hanya angka genap:\nkuadrat_genap = [x**2 for x in angka if x % 2 == 0]\n# Hasil: [4, 16, 36, 64, 100]\n\n# If-Else bersarang dalam List Comprehension:\nlabel_ganjil_genap = [\"Genap\" if x % 2 == 0 else \"Ganjil\" for x in angka]\n```\n\n---\n\n## 2. Meratakan Matriks 2D (Flattening Matrix)\n\n```python\nmatriks = [\n    [1, 2, 3],\n    [4, 5, 6],\n    [7, 8, 9]\n]\n\n# Urutan 'for' sama persis seperti for bertingkat biasa:\nangka_rata = [item for baris in matriks for item in baris]\n# Hasil: [1, 2, 3, 4, 5, 6, 7, 8, 9]\n```\n\n---\n\n## 3. Dictionary & Set Comprehension\n\n```python\npengguna_raw = [\n    {\"id\": \"u1\", \"username\": \"azzam\", \"aktif\": True},\n    {\"id\": \"u2\", \"username\": \"budi\", \"aktif\": False},\n    {\"id\": \"u3\", \"username\": \"citra\", \"aktif\": True}\n]\n\n# Mengubah list objek menjadi mapping index cepat {id: username} hanya untuk yang aktif:\nmap_aktif = {u[\"id\"]: u[\"username\"] for u in pengguna_raw if u[\"aktif\"]}\n# Hasil: {'u1': 'azzam', 'u3': 'citra'}\n```\n"
      },
      {
          "id": "lesson-py-int-07",
          "courseId": "course-py-int-12",
          "slug": "iterators-generators-pernyataan-yield",
          "title": "7. Iterators & Generators dengan Pernyataan yield",
          "summary": "Proses dataset besar jutaan baris tanpa kehabisan RAM menggunakan Lazy Evaluation.",
          "order": 7,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 7. Iterators & Generators dengan Pernyataan yield\n\nKetika memproses file CSV bergiga-gita atau stream data dari database, memuat seluruh data ke dalam `list` di memori akan menyebabkan server mengalami *Out Of Memory* (OOM). Solusinya adalah **Generators**.\n\n---\n\n## 1. Kata Kunci `yield` & Lazy Evaluation\n\nFungsi generator tidak menggunakan `return`, melainkan **`yield`**. Setiap kali `yield` dieksekusi, generator menjeda status fungsinya dan mengembalikan nilai ke pemanggil. Saat dipanggil lagi, ia melanjutkan dari baris yang dijeda tersebut:\n\n```python\nfrom typing import Generator\n\ndef deret_fibonacci(batas: int) -> Generator[int, None, None]:\n    a, b = 0, 1\n    while a < batas:\n        yield a\n        a, b = b, a + b\n\n# Memanggil generator tidak langsung mengeksekusi seluruh perulangan:\nfibo_gen = deret_fibonacci(100)\nfor angka in fibo_gen:\n    print(angka, end=\" \")\n# Output: 0 1 1 2 3 5 8 13 21 34 55 89\n```\n\n---\n\n## 2. Generator Expressions (Efisiensi Memori Ekstrem)\n\nMirip list comprehension, namun menggunakan tanda kurung biasa `()`:\n\n```python\nimport sys\n\n# List: 10 juta angka langsung disimpan di RAM (~80 Megabyte)\n# list_angka = [x for x in range(10_000_000)]\n\n# Generator: Hanya menyimpan logika generator (~100 Byte!)\ngen_angka = (x for x in range(10_000_000))\n\nprint(\"Ukuran RAM Generator:\", sys.getsizeof(gen_angka), \"bytes\")\n```\n"
      },
      {
          "id": "lesson-py-int-08",
          "courseId": "course-py-int-12",
          "slug": "custom-decorators-context-managers",
          "title": "8. Custom Decorators & Context Managers (with statement)",
          "summary": "Rancang decorator pembungkus fungsi (@timer, @auth) dan kelola resource otomatis via contextmanager.",
          "order": 8,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 8. Custom Decorators & Context Managers (with statement)\n\nDua fitur paling elegan untuk menulis kode bersih dan terstruktur di Python adalah **Decorators** dan **Context Managers**.\n\n---\n\n## 1. Membuat Custom Decorator dengan `functools.wraps`\n\nDecorator adalah fungsi yang menerima fungsi lain sebagai argumen dan memperluas perilakunya tanpa memodifikasi kode aslinya:\n\n```python\nimport time\nfrom functools import wraps\n\ndef ukur_waktu_eksekusi(func):\n    @wraps(func)\n    def pembungkus(*args, **kwargs):\n        waktu_mulai = time.perf_counter()\n        hasil = func(*args, **kwargs)\n        durasi = time.perf_counter() - waktu_mulai\n        print(f\"[BENCHMARK] Fungsi '{func.__name__}' selesai dalam {durasi:.6f} detik.\")\n        return hasil\n    return pembungkus\n\n@ukur_waktu_eksekusi\ndef hitung_faktorial(n: int) -> int:\n    hasil = 1\n    for i in range(1, n + 1):\n        hasil *= i\n    return hasil\n\nhitung_faktorial(5000)\n```\n\n---\n\n## 2. Context Manager dengan `contextlib.contextmanager`\n\nContext manager menjamin pelepasan sumber daya (menutup koneksi database, file, lock thread) bahkan jika terjadi exception di tengah eksekusi:\n\n```python\nfrom contextlib import contextmanager\n\n@contextmanager\ndef sesi_transaksi_redis(kunci_lock: str):\n    print(f\"--> [LOCK] Memperoleh kunci lock: {kunci_lock}\")\n    try:\n        yield\n        print(\"--> [COMMIT] Transaksi berhasil disimpan ke Redis.\")\n    except Exception as e:\n        print(f\"--> [ROLLBACK] Terjadi kegagalan: {e}, membatalkan transaksi!\")\n        raise\n    finally:\n        print(f\"--> [UNLOCK] Melepaskan kunci lock: {kunci_lock}\")\n\n# Penggunaan aman dengan blok 'with':\nwith sesi_transaksi_redis(\"kl:v1:transaksi:user-123\"):\n    print(\"Memproses transfer saldo poin...\")\n```\n"
      }
  ]
,
  "course-sql-int-13": [
      {
          "id": "lesson-sql-int-01",
          "courseId": "course-sql-int-13",
          "slug": "desain-relasi-database-normalisasi",
          "title": "1. Desain Relasi Database & Normalisasi (1NF, 2NF, 3NF)",
          "summary": "Rancang skema database relasional standar industri dan eliminasi anomali data melalui proses normalisasi.",
          "order": 1,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 1. Desain Relasi Database & Normalisasi (1NF, 2NF, 3NF)\n\nDesain skema basis data yang buruk akan menyebabkan redundansi data, pemborosan media penyimpanan, dan anomali saat melakukan modifikasi (*Insert, Update, Delete Anomalies*). **Normalisasi** adalah metode formal untuk mengorganisasi tabel-tabel relasional.\n\n---\n\n## Tiga Tahapan Utama Normalisasi (1NF, 2NF, 3NF)\n\n### 1. First Normal Form (1NF) — Nilai Atomik\n- Setiap sel kolom hanya boleh berisi **satu nilai tunggal (*atomic value*)**, bukan daftar string terpisah koma atau array.\n- Memiliki primary key yang unik.\n- Tidak ada grup kolom yang berulang (misal: `telepon1`, `telepon2`, `telepon3`).\n\n### 2. Second Normal Form (2NF) — Ketergantungan Penuh\n- Sudah memenuhi 1NF.\n- Semua atribut non-kunci harus bergantung sepenuhnya pada **seluruh Primary Key**, bukan hanya sebagian (menghilangkan *Partial Dependency* pada composite key).\n\n### 3. Third Normal Form (3NF) — Menghilangkan Ketergantungan Transitif\n- Sudah memenuhi 2NF.\n- Tidak ada atribut non-kunci yang bergantung pada atribut non-kunci lainnya (*No Transitive Dependency*).\n- *Contoh:* Kolom `nama_provinsi` tidak boleh disimpan di tabel `pesanan`; simpanlah `kota_id`, lalu hubungkan ke tabel `kota` yang memiliki relasi ke `provinsi`.\n\n---\n\n## Praktik DDL Pembuatan Foreign Key & Constraint\n\n```sql\nCREATE TABLE kategori (\n    id SERIAL PRIMARY KEY,\n    nama_kategori VARCHAR(50) NOT NULL UNIQUE\n);\n\nCREATE TABLE kursus (\n    id VARCHAR(50) PRIMARY KEY,\n    judul VARCHAR(150) NOT NULL,\n    kategori_id INT NOT NULL,\n    CONSTRAINT fk_kursus_kategori \n        FOREIGN KEY (kategori_id) \n        REFERENCES kategori(id) \n        ON DELETE RESTRICT \n        ON UPDATE CASCADE\n);\n```\n"
      },
      {
          "id": "lesson-sql-int-02",
          "courseId": "course-sql-int-13",
          "slug": "multi-table-complex-joins",
          "title": "2. Multi-Table Complex Joins: INNER, LEFT, RIGHT, FULL, & CROSS",
          "summary": "Gabungkan 3 atau lebih tabel sekaligus dengan efisien menggunakan relasi kunci primer dan asing.",
          "order": 2,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 2. Multi-Table Complex Joins: INNER, LEFT, RIGHT, FULL, & CROSS\n\nDalam sistem nyata, informasi tersebar di banyak tabel relasional. Kemampuan menggabungkan baris data secara akurat adalah keahlian mendasar pengembang database tingkat menengah.\n\n---\n\n## Diagram Venn & Karakteristik JOIN\n\n| Tipe JOIN | Data yang Ditampilkan |\n| :--- | :--- |\n| **INNER JOIN** | Hanya baris yang memiliki pasangan cocok di kedua tabel |\n| **LEFT JOIN** | Semua baris tabel kiri; jika tabel kanan kosong, diisi `NULL` |\n| **RIGHT JOIN** | Semua baris tabel kanan; jika tabel kiri kosong, diisi `NULL` |\n| **FULL OUTER JOIN** | Semua baris dari kedua tabel; `NULL` jika tidak ada pasangan |\n| **CROSS JOIN** | Perkalian kartesian ($N \\times M$) dari setiap kombinasi baris |\n\n---\n\n## Kueri Kompleks Menggabungkan 3 Tabel Sekaligus\n\nMengambil riwayat pendaftaran siswa, judul kursus, dan nama instruktur:\n\n```sql\nSELECT \n    u.id AS user_id,\n    u.nama_lengkap,\n    c.judul AS nama_kursus,\n    e.status AS status_belajar,\n    e.tanggal_daftar\nFROM pendaftaran e\nINNER JOIN pengguna u ON e.user_id = u.id\nINNER JOIN kursus c ON e.course_id = c.id\nWHERE e.status = 'aktif'\nORDER BY e.tanggal_daftar DESC;\n```\n\n> **Tips Performa:** Pastikan kolom yang digunakan dalam klausul `ON` (misal: `e.user_id = u.id`) telah memiliki indeks (*Index* / *B-Tree*) agar kueri tidak melakukan full table scan.\n"
      },
      {
          "id": "lesson-sql-int-03",
          "courseId": "course-sql-int-13",
          "slug": "subqueries-correlated-subqueries-exists",
          "title": "3. Subqueries: Correlated Subqueries & Klausul EXISTS",
          "summary": "Manfaatkan kueri bersarang (subquery) di klausa SELECT, FROM, dan WHERE serta optimasi kueri dengan EXISTS.",
          "order": 3,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 3. Subqueries: Correlated Subqueries & Klausul EXISTS\n\n**Subquery** adalah kueri `SELECT` yang berada di dalam kueri SQL lain. Subquery dapat digunakan di klausa `SELECT`, `FROM`, atau `WHERE`.\n\n---\n\n## 1. Non-Correlated Subquery (Mandiri)\n\nSubquery ini dieksekusi sekali terlebih dahulu, lalu hasilnya diserahkan ke kueri utama:\n\n```sql\n-- Cari kursus yang durasi belajarnya di atas rata-rata semua kursus:\nSELECT judul, durasi_menit\nFROM kursus\nWHERE durasi_menit > (\n    SELECT AVG(durasi_menit) FROM kursus\n);\n```\n\n---\n\n## 2. Correlated Subquery & Klausul `EXISTS`\n\nCorrelated subquery bergantung pada baris kueri terluar dan dievaluasi berulang untuk setiap baris. Klausul `EXISTS` berhenti mencari segera setelah menemukan kecocokan pertama (*short-circuiting*), menjadikannya jauh lebih cepat daripada operator `IN`:\n\n```sql\n-- Cari semua siswa yang PERNAH menyelesaikan minimal satu proyek:\nSELECT u.id, u.nama_lengkap\nFROM pengguna u\nWHERE EXISTS (\n    SELECT 1 \n    FROM pengumpulan_proyek p\n    WHERE p.user_id = u.id \n      AND p.status = 'approved'\n);\n```\n"
      },
      {
          "id": "lesson-sql-int-04",
          "courseId": "course-sql-int-13",
          "slug": "common-table-expressions-cte-with-clause",
          "title": "4. Common Table Expressions (CTE) & WITH Clause",
          "summary": "Ubah kueri bertingkat yang rumit menjadi blok-blok logis modular yang mudah dibaca dengan klausul WITH.",
          "order": 4,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 4. Common Table Expressions (CTE) & WITH Clause\n\nKetika kueri Anda membutuhkan subquery bertingkat 3 atau 4 lapis, kode menjadi sangat sulit dibaca dan dirawat. **Common Table Expression (CTE)** menyediakan tabel sementara (*temporary result set*) bernama yang hanya ada selama durasi eksekusi kueri tersebut.\n\n---\n\n## Sintaks Dasar: Klausul `WITH`\n\n```sql\nWITH TotalPoinSiswa AS (\n    -- CTE 1: Agregasi total XP per siswa\n    SELECT \n        user_id,\n        SUM(xp_didapat) AS total_xp\n    FROM riwayat_xp\n    GROUP BY user_id\n),\nSiswaBerprestasi AS (\n    -- CTE 2: Filter siswa yang memiliki lebih dari 1000 XP\n    SELECT user_id, total_xp\n    FROM TotalPoinSiswa\n    WHERE total_xp >= 1000\n)\n-- Kueri Utama yang bersih:\nSELECT \n    u.nama_lengkap,\n    u.email,\n    sb.total_xp\nFROM SiswaBerprestasi sb\nJOIN pengguna u ON sb.user_id = u.id\nORDER BY sb.total_xp DESC;\n```\n\n### Keunggulan CTE dibanding Subquery:\n1. **Keterbacaan Sejajar Top-to-Bottom**: Logika dibaca dari atas ke bawah, bukan dari dalam keluar.\n2. **Dapat Digunakan Berulang Kali**: Satu CTE bisa di-join beberapa kali dalam kueri utama tanpa mengevaluasi ulang.\n"
      },
      {
          "id": "lesson-sql-int-05",
          "courseId": "course-sql-int-13",
          "slug": "cte-rekursif-data-hierarkis",
          "title": "5. CTE Rekursif untuk Data Hierarkis & Struktur Pohon",
          "summary": "Kueri struktur data pohon (organigram, kategori bertingkat, thread komentar berbalas) dengan WITH RECURSIVE.",
          "order": 5,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 5. CTE Rekursif untuk Data Hierarkis & Struktur Pohon\n\nBagaimana cara menampilkan struktur hirarki karyawan (Direktur -> Manajer -> Staff) atau balasan komentar bersarang tanpa mengetahui berapa level kedalamannya? Jawabannya adalah **Recursive CTE**.\n\n---\n\n## Struktur 3 Bagian Recursive CTE\n\n1. **Anchor Member**: Kueri awal non-rekursif yang menjadi akar (*root*) dari pohon.\n2. **UNION ALL**: Operator penggabung.\n3. **Recursive Member**: Kueri yang memanggil nama CTE itu sendiri untuk menuruni cabang pohon hingga kondisi berhenti tercapai.\n\n```sql\nWITH RECURSIVE PohonKomentar AS (\n    -- 1. Anchor Member: Ambil komentar utama (parent_id is null)\n    SELECT \n        id, \n        parent_id, \n        isi_komentar, \n        1 AS level_kedalaman\n    FROM forum_komentar\n    WHERE parent_id IS NULL AND thread_id = 'thread-123'\n\n    UNION ALL\n\n    -- 2. Recursive Member: Ambil balasan yang merujuk ke parent sebelumnya\n    SELECT \n        c.id, \n        c.parent_id, \n        c.isi_komentar, \n        pk.level_kedalaman + 1\n    FROM forum_komentar c\n    INNER JOIN PohonKomentar pk ON c.parent_id = pk.id\n)\nSELECT * FROM PohonKomentar ORDER BY level_kedalaman, id;\n```\n"
      },
      {
          "id": "lesson-sql-int-06",
          "courseId": "course-sql-int-13",
          "slug": "window-functions-row-number-rank-dense-rank",
          "title": "6. Window Functions: ROW_NUMBER(), RANK(), DENSE_RANK()",
          "summary": "Beri ranking dan nomor baris analitik tanpa mereduksi baris data asli seperti pada GROUP BY.",
          "order": 6,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 6. Window Functions: ROW_NUMBER(), RANK(), DENSE_RANK()\n\nWindow Functions melakukan kalkulasi terhadap sekumpulan baris (*window frame*) yang berkaitan dengan baris saat ini, namun **tidak menggabungkan baris-baris tersebut menjadi satu** seperti klausul `GROUP BY`.\n\n---\n\n## Tiga Fungsi Ranking Utama:\n\n```sql\nSELECT \n    nama_siswa,\n    jurusan,\n    nilai_akhir,\n    -- 1. Nomor urut baris unik selalu berurutan (1, 2, 3, 4)\n    ROW_NUMBER() OVER (PARTITION BY jurusan ORDER BY nilai_akhir DESC) AS no_urut,\n    \n    -- 2. Peringkat dengan jeda angka saat ada skor kembar (1, 2, 2, 4)\n    RANK() OVER (PARTITION BY jurusan ORDER BY nilai_akhir DESC) AS rank_gap,\n    \n    -- 3. Peringkat tanpa jeda angka saat ada skor kembar (1, 2, 2, 3)\n    DENSE_RANK() OVER (PARTITION BY jurusan ORDER BY nilai_akhir DESC) AS dense_rank_padat\nFROM raport_siswa;\n```\n\n---\n\n## Mengambil Top-N Per Kategori (Top 3 Siswa Tiap Jurusan)\n\nKombinasikan Window Function dengan CTE:\n\n```sql\nWITH PeringkatSiswa AS (\n    SELECT \n        nama_siswa,\n        jurusan,\n        nilai_akhir,\n        DENSE_RANK() OVER (PARTITION BY jurusan ORDER BY nilai_akhir DESC) AS peringkat\n    FROM raport_siswa\n)\nSELECT * FROM PeringkatSiswa WHERE peringkat <= 3;\n```\n"
      },
      {
          "id": "lesson-sql-int-07",
          "courseId": "course-sql-int-13",
          "slug": "window-functions-lead-lag-running-totals",
          "title": "7. Window Functions: LEAD(), LAG(), FIRST_VALUE(), & Running Totals",
          "summary": "Hitung pertumbuhan tren bulanan (MoM), perbandingan nilai baris sebelumnya, dan saldo akumulasi.",
          "order": 7,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 7. Window Functions: LEAD(), LAG(), FIRST_VALUE(), & Running Totals\n\nDalam analisis data bisnis modern, kita sering dituntut menghitung selisih pertumbuhan penjualan dari bulan sebelumnya atau menghitung saldo berjalan akumulatif (*Running Total*).\n\n---\n\n## 1. Analisis Tren dengan `LAG()` dan `LEAD()`\n\n- **`LAG(kolom, offset, default)`**: Mengintip nilai pada baris sebelumnya.\n- **`LEAD(kolom, offset, default)`**: Mengintip nilai pada baris berikutnya.\n\n```sql\nSELECT \n    bulan,\n    total_pendapatan,\n    LAG(total_pendapatan, 1, 0) OVER (ORDER BY bulan) AS pendapatan_bulan_lalu,\n    -- Hitung selisih pertumbuhan:\n    total_pendapatan - LAG(total_pendapatan, 1, total_pendapatan) OVER (ORDER BY bulan) AS pertumbuhan_nominal\nFROM omset_bulanan;\n```\n\n---\n\n## 2. Menghitung Saldo Akumulasi (Running Total)\n\nGunakan fungsi agregasi `SUM()` yang diberi klausa `OVER (ORDER BY ...)`:\n\n```sql\nSELECT \n    tanggal,\n    jumlah_setor,\n    -- Menjumlahkan seluruh setoran dari awal hingga baris hari ini:\n    SUM(jumlah_setor) OVER (\n        ORDER BY tanggal \n        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW\n    ) AS saldo_akumulasi\nFROM mutasi_bank;\n```\n"
      },
      {
          "id": "lesson-sql-int-08",
          "courseId": "course-sql-int-13",
          "slug": "indexing-explain-plan-optimasi-kueri",
          "title": "8. Indexing, Query EXPLAIN PLAN, dan Optimasi Kueri Enterprise",
          "summary": "Gunakan B-Tree, GIN, dan partial index, serta baca output EXPLAIN ANALYZE untuk kueri jutaan data di bawah 10ms.",
          "order": 8,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 8. Indexing, Query EXPLAIN PLAN, dan Optimasi Kueri Enterprise\n\nDatabase yang dirancang baik bisa merespons kueri jutaan baris dalam hitungan milidetik jika didukung strategi **Indexing** yang presisi.\n\n---\n\n## 1. Jenis Index di Database Relasional (PostgreSQL / MySQL)\n\n1. **B-Tree (Default)**: Sangat efisien untuk perbandingan kesetaraan (`=`) dan rentang nilai (`<`, `>`, `BETWEEN`, `ORDER BY`).\n2. **Composite Index (Multi-Kolom)**: Indeks untuk kueri yang menyaring beberapa kolom sekaligus:\n   ```sql\n   -- Aturan Leftmost Prefix: Indeks ini berguna untuk kueri (status, created_at) atau hanya (status)\n   CREATE INDEX idx_pesanan_status_tgl ON pesanan(status, created_at);\n   ```\n3. **Partial Index (Conditional Index)**: Menghemat ruang disk dengan hanya mengindeks baris yang relevan:\n   ```sql\n   -- Hanya mengindeks pengguna yang aktif:\n   CREATE INDEX idx_user_aktif ON pengguna(email) WHERE status = 'active';\n   ```\n\n---\n\n## 2. Membedah Eksekusi Kueri dengan `EXPLAIN ANALYZE`\n\nSebelum berasumsi kueri Anda cepat, jalankan `EXPLAIN ANALYZE` untuk melihat jalur rencana eksekutor (*Query Planner*):\n\n```sql\nEXPLAIN ANALYZE \nSELECT * FROM kursus WHERE slug = 'sql-menengah';\n```\n\n### Apa yang Harus Diperhatikan:\n- **Seq Scan (Sequential Scan)**: Database membaca seluruh tabel dari awal sampai akhir baris per baris. *Bahaya jika tabel besar!*\n- **Index Scan / Bitmap Index Scan**: Database langsung melompat ke node daun indeks B-Tree. *Performa sangat optimal.*\n- **Actual Time**: Waktu riil eksekusi dalam milidetik ($ms$).\n"
      }
  ]
,
  "course-node-14": [
      {
          "id": "lesson-node-01",
          "courseId": "course-node-14",
          "slug": "pengenalan-nodejs-arsitektur-event-loop",
          "title": "1. Pengenalan Node.js, V8 Engine, & Arsitektur Event Loop",
          "summary": "Ketahui bagaimana JavaScript dijalankan di luar browser di sisi server melalui model non-blocking I/O.",
          "order": 1,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 1. Pengenalan Node.js, V8 Engine, & Arsitektur Event Loop\n\n**Node.js** adalah runtime environment sumber terbuka berbasis mesin JavaScript V8 milik Google Chrome. Node.js memungkinkan kita mengeksekusi kode JavaScript di sisi server (*server-side*), di luar peramban web.\n\n---\n\n## Mengapa Node.js Sangat Populer untuk Backend?\n\nTradisional web server (seperti Apache lama) menggunakan arsitektur *multi-threaded*: setiap ada koneksi baru dari klien, server membuat thread baru di memori. Jika ada 10.000 pengunjung simultan, server kehabisan RAM.\n\nSebaliknya, Node.js menggunakan model **Single-Threaded Event Loop** dengan **Non-Blocking I/O**:\n1. Server menerima ribuan koneksi di satu thread utama.\n2. Ketika ada tugas berat (membaca database atau file disk), Node.js mendelegasikannya ke thread pool latar belakang (**libuv**).\n3. Thread utama langsung bebas melayani pengguna lain tanpa menunggu (*non-blocking*).\n4. Saat tugas I/O selesai, sebuah callback dipicu di Event Loop.\n\n---\n\n## Menjalankan Skrip Pertama\n\n```javascript\n// halo-node.js\nconst waktuSekarang = new Date().toLocaleTimeString('id-ID');\nconsole.log(`Halo dari Node.js! Waktu server saat ini: ${waktuSekarang}`);\nconsole.log('Versi Node.js:', process.version);\nconsole.log('Platform OS:', process.platform);\n```\n\nJalankan di terminal:\n```bash\nnode halo-node.js\n```\n"
      },
      {
          "id": "lesson-node-02",
          "courseId": "course-node-14",
          "slug": "sistem-modul-commonjs-vs-es-modules",
          "title": "2. Sistem Modul: CommonJS (require) vs ES Modules (import)",
          "summary": "Pelajari cara memecah kode backend menjadi modul terpisah dan perbedaan require() vs import.",
          "order": 2,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 2. Sistem Modul: CommonJS (require) vs ES Modules (import)\n\nDalam pengembangan backend skala besar, kode harus dibagi ke dalam file-file terpisah (*modul*) agar mudah diuji dan dirawat.\n\n---\n\n## 1. CommonJS (`require` dan `module.exports`)\nSecara historis, CommonJS adalah sistem modul bawaan Node.js:\n\n```javascript\n// matematika.js\nfunction tambah(a, b) {\n  return a + b;\n}\n\nfunction kali(a, b) {\n  return a * b;\n}\n\nmodule.exports = { tambah, kali };\n```\n\nMengimpor di file lain:\n```javascript\n// app.js\nconst { tambah, kali } = require('./matematika');\nconsole.log(tambah(5, 10)); // 15\n```\n\n---\n\n## 2. ECMAScript Modules (ESM: `import` dan `export`)\nESM adalah standar resmi JavaScript modern. Tambahkan `\"type\": \"module\"` di `package.json`:\n\n```javascript\n// utilitas.mjs\nexport function formatRupiah(angka) {\n  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(angka);\n}\n```\n\n```javascript\n// server.mjs\nimport { formatRupiah } from './utilitas.mjs';\nconsole.log(formatRupiah(1500000)); // \"Rp 1.500.000,00\"\n```\n"
      },
      {
          "id": "lesson-node-03",
          "courseId": "course-node-14",
          "slug": "modul-bawaan-fs-path-http",
          "title": "3. Modul Bawaan Inti: fs/promises, path, dan os",
          "summary": "Manfaatkan library bawaan Node.js untuk manipulasi file sistem disk dan path direktori secara asynchronous.",
          "order": 3,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 3. Modul Bawaan Inti: fs/promises, path, dan os\n\nNode.js dilengkapi pustaka inti (*built-in modules*) canggih tanpa perlu menginstal dependensi tambahan dari npm.\n\n---\n\n## 1. Modul `path` untuk Kompatibilitas Lintas OS\nPemisah path di Windows menggunakan backslash (`\\`), sedangkan Linux/macOS menggunakan slash (`/`). Modul `path.join()` menyelesaikannya secara otomatis:\n\n```javascript\nimport path from 'path';\n\n// Menggabungkan path dengan aman:\nconst lokasiFile = path.join(process.cwd(), 'data', 'laporan.json');\nconsole.log('Ekstensi file:', path.extname(lokasiFile)); // .json\nconsole.log('Nama file:', path.basename(lokasiFile));     // laporan.json\n```\n\n---\n\n## 2. Modul `fs/promises` untuk Membaca & Menulis File\n\n```javascript\nimport fs from 'fs/promises';\nimport path from 'path';\n\nasync function kelolaLaporan() {\n  const filePath = path.join(process.cwd(), 'catatan.txt');\n\n  // Menulis file:\n  await fs.writeFile(filePath, 'Server berhasil diinisialisasi pada ' + new Date(), 'utf8');\n\n  // Membaca file:\n  const isi = await fs.readFile(filePath, 'utf8');\n  console.log('Isi catatan:', isi);\n}\n\nkelolaLaporan().catch(console.error);\n```\n"
      },
      {
          "id": "lesson-node-04",
          "courseId": "course-node-14",
          "slug": "express-web-framework-routing",
          "title": "4. Express.js: Framework Minimalis & Routing HTTP",
          "summary": "Bangun server HTTP produksi dengan Express, daftarkan route GET, POST, PUT, DELETE, dan URL params.",
          "order": 4,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 4. Express.js: Framework Minimalis & Routing HTTP\n\n**Express** adalah framework web paling populer dan standar industri untuk ekosistem Node.js, menyediakan antarmuka routing dan penanganan permintaan HTTP yang sangat intuitif.\n\n---\n\n## Instalasi & Struktur Server Minimalis\n\n```bash\nnpm install express\n```\n\n```javascript\nimport express from 'express';\n\nconst app = express();\nconst PORT = 3000;\n\n// Middleware bawaan untuk mem-parsing body JSON\napp.use(express.json());\n\n// In-memory data store\nlet daftarKursus = [\n  { id: '1', judul: 'HTML Dasar', terbit: true },\n  { id: '2', judul: 'Node.js Backend', terbit: true }\n];\n\n// 1. GET: Mengambil semua data\napp.get('/api/v1/courses', (req, res) => {\n  res.json({ sukses: true, data: daftarKursus });\n});\n\n// 2. GET dengan Parameter URL (:id)\napp.get('/api/v1/courses/:id', (req, res) => {\n  const kursus = daftarKursus.find(c => c.id === req.params.id);\n  if (!kursus) {\n    return res.status(404).json({ sukses: false, pesan: 'Kursus tidak ditemukan' });\n  }\n  res.json({ sukses: true, data: kursus });\n});\n\napp.listen(PORT, () => {\n  console.log(`Server berjalan di http://localhost:${PORT}`);\n});\n```\n"
      },
      {
          "id": "lesson-node-05",
          "courseId": "course-node-14",
          "slug": "middleware-otentikasi-validasi",
          "title": "5. Konsep Middleware: Logging, Validasi, & Autentikasi",
          "summary": "Kuasai fungsi perantara (req, res, next) untuk filter keamanan, parsing token, dan logging akses.",
          "order": 5,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 5. Konsep Middleware: Logging, Validasi, & Autentikasi\n\n**Middleware** adalah fungsi yang memiliki akses ke objek permintaan (`req`), objek tanggapan (`res`), dan fungsi `next` dalam siklus request-response aplikasi.\n\n---\n\n## Siklus Hidup Middleware\n\n```text\nClient Request  -->  [ Middleware 1 (Logger) ] \n                 -->  [ Middleware 2 (Auth Guard) ] \n                 -->  [ Route Controller ] \n                 -->  Client Response\n```\n\n---\n\n## 1. Custom Request Logger Middleware\n\n```javascript\nconst loggerMiddleware = (req, res, next) => {\n  const waktu = new Date().toISOString();\n  console.log(`[${waktu}] ${req.method} ${req.url}`);\n  next(); // Wajib dipanggil untuk meneruskan ke handler berikutnya!\n};\n\napp.use(loggerMiddleware);\n```\n\n---\n\n## 2. Middleware Autentikasi Bearer Token\n\n```javascript\nconst proteksiAuth = (req, res, next) => {\n  const authHeader = req.headers['authorization'];\n  if (!authHeader || !authHeader.startsWith('Bearer ')) {\n    return res.status(401).json({ sukses: false, pesan: 'Akses ditolak: Token tidak valid' });\n  }\n  \n  const token = authHeader.split(' ')[1];\n  if (token !== 'rahasia-kodeluma-2026') {\n    return res.status(403).json({ sukses: false, pesan: 'Token kedaluwarsa atau palsu' });\n  }\n\n  // Sisipkan user ke request\n  req.user = { id: 'usr-admin', role: 'admin' };\n  next();\n};\n\n// Endpoint yang dilindungi:\napp.post('/api/v1/courses', proteksiAuth, (req, res) => {\n  res.json({ sukses: true, pesan: 'Kursus berhasil dibuat oleh ' + req.user.role });\n});\n```\n"
      },
      {
          "id": "lesson-node-06",
          "courseId": "course-node-14",
          "slug": "error-handling-arsitektur-rest-api",
          "title": "6. Arsitektur RESTful API & Global Error Handling Standar Produksi",
          "summary": "Susun kode backend dengan arsitektur MVC (Routes, Controllers, Services) dan tangani error 500 secara terpusat.",
          "order": 6,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 6. Arsitektur RESTful API & Global Error Handling Standar Produksi\n\nMenulis semua kode dalam satu file `server.js` hanya cocok untuk prototipe kecil. Di tingkat produksi, kita menerapkan pemisahan tugas (*Separation of Concerns*).\n\n---\n\n## Struktur Folder Standar REST API\n\n```text\nsrc/\n├── controllers/    # Logika bisnis respons & status HTTP\n├── routes/         # Definisi rute URL\n├── middlewares/    # Filter otentikasi & validasi\n├── services/       # Interaksi database (Redis / PostgreSQL)\n└── app.js          # Inisialisasi Express & Middleware\n```\n\n---\n\n## Global Error Handling Middleware\n\nExpress mengenali middleware penanganan error jika memiliki **4 parameter**: `(err, req, res, next)`:\n\n```javascript\n// Diletakkan paling bawah setelah semua rute:\napp.use((err, req, res, next) => {\n  console.error('Terjadi kesalahan tak terduga:', err.stack);\n\n  const status = err.statusCode || 500;\n  const pesan = err.message || 'Terjadi kesalahan internal pada server';\n\n  res.status(status).json({\n    sukses: false,\n    status,\n    pesan,\n    waktu: new Date().toISOString()\n  });\n});\n```\n"
      }
  ]
,
  "course-react-15": [
      {
          "id": "lesson-react-01",
          "courseId": "course-react-15",
          "slug": "fondasi-react-virtual-dom-jsx",
          "title": "1. Fondasi React: Virtual DOM, Komponen Fungsi, & Sintaks JSX",
          "summary": "Pahami perbedaan manipulasi DOM imperatif vs deklaratif dan tulis elemen antarmuka via JSX.",
          "order": 1,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 1. Fondasi React: Virtual DOM, Komponen Fungsi, & Sintaks JSX\n\n**React** adalah library JavaScript sumber terbuka yang dikembangkan oleh Meta untuk membangun antarmuka pengguna (*User Interface*) berbasis komponen yang modular dan reaktif.\n\n---\n\n## Imperatif vs Deklaratif & Virtual DOM\n\n- **JavaScript Murni (Imperatif)**: Anda harus memberi instruksi langkah-demi-langkah ke browser: `document.getElementById()`, `createElement()`, `appendChild()`. Ini lambat dan rawan bug saat state bertambah banyak.\n- **React (Deklaratif)**: Anda cukup menyatakan *\"tampilan seperti apa yang diinginkan untuk state saat ini\"*, dan React akan mengurus render optimal ke layar.\n\n### Virtual DOM (VDOM)\nReact menyimpan representasi virtual dari pohon DOM di memori. Saat terjadi perubahan data, React membandingkan VDOM baru dengan VDOM lama (*Diffing Algorithm*) dan **hanya memperbarui elemen yang benar-benar berubah di DOM browser nyata**, menghasilkan performa rendering super cepat.\n\n---\n\n## Sintaks JSX (JavaScript XML)\n\nJSX memungkinkan kita menulis markup mirip HTML langsung di dalam JavaScript:\n\n```jsx\nfunction SambutanPengguna() {\n  const nama = \"Azzam\";\n  const statusAktif = true;\n\n  return (\n    <div className=\"kartu-profil\">\n      <h2>Halo, {nama}!</h2>\n      <p>Status: {statusAktif ? \"Online\" : \"Offline\"}</p>\n    </div>\n  );\n}\n```\n\n> **Aturan JSX:** Gunakan `className` bukan `class`, `htmlFor` bukan `for`, dan setiap tag yang terbuka wajib ditutup (misal `<img />` atau `<input />`).\n"
      },
      {
          "id": "lesson-react-02",
          "courseId": "course-react-15",
          "slug": "komponen-dan-props-reusable-ui",
          "title": "2. Komponen & Props: Membangun UI Reusable",
          "summary": "Bagi UI menjadi potongan-potongan mandiri dan alirkan data searah (one-way data flow) melalui Props.",
          "order": 2,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 2. Komponen & Props: Membangun UI Reusable\n\nSalah satu kekuatan terbesar React adalah kemampuan memecah antarmuka kompleks menjadi komponen-komponen kecil yang dapat digunakan kembali (*reusable components*).\n\n---\n\n## Melewatkan Data via Props\n\n**Props** (*Properties*) adalah argumen yang dilewatkan dari komponen induk (*parent*) ke komponen anak (*child*). Props bersifat **Read-Only (Immutable)**; anak tidak boleh mengubah props yang diterimanya secara langsung.\n\n```jsx\n// Komponen Anak\nfunction KartuKursus({ judul, kategori, durasiJam, terbit }) {\n  return (\n    <div className=\"card shadow-sm mb-3\">\n      <div className=\"card-body\">\n        <span className=\"badge bg-primary mb-2\">{kategori}</span>\n        <h5 className=\"card-title\">{judul}</h5>\n        <p className=\"card-text text-muted\">Estimasi: {durasiJam} Jam</p>\n        {terbit && <span className=\"text-success small fw-bold\">✓ Tersedia</span>}\n      </div>\n    </div>\n  );\n}\n\n// Komponen Induk\nfunction DaftarKelas() {\n  return (\n    <div className=\"container py-4\">\n      <KartuKursus judul=\"HTML Dasar\" kategori=\"Web\" durasiJam={3} terbit={true} />\n      <KartuKursus judul=\"React Modern\" kategori=\"Frontend\" durasiJam={5} terbit={true} />\n    </div>\n  );\n}\n```\n"
      },
      {
          "id": "lesson-react-03",
          "courseId": "course-react-15",
          "slug": "state-manajemen-hook-usestate",
          "title": "3. State Manajemen Interaktif dengan Hook useState",
          "summary": "Simpan data reaktif yang berubah-ubah seiring interaksi pengguna dan picu render ulang otomatis.",
          "order": 3,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 3. State Manajemen Interaktif dengan Hook useState\n\nBerbeda dengan Props yang datang dari luar, **State** adalah memori internal komponen yang menyimpan data dinamis (seperti teks formulir, status modal terbuka/tertutup, atau data keranjang belanja).\n\n---\n\n## Anatomi Hook `useState`\n\n```jsx\nimport React, { useState } from 'react';\n\nfunction CounterInteraktif() {\n  // [nilaiState, fungsiPengubahState] = useState(nilaiAwal);\n  const [hitung, setHitung] = useState(0);\n\n  const tambah = () => {\n    // Pola functional updater aman untuk update konkuren:\n    setHitung(prev => prev + 1);\n  };\n\n  const reset = () => setHitung(0);\n\n  return (\n    <div className=\"p-4 border rounded text-center\">\n      <h3>Penghitung: {hitung}</h3>\n      <div className=\"btn-group mt-2\">\n        <button className=\"btn btn-outline-danger\" onClick={() => setHitung(prev => Math.max(0, prev - 1))}>\n          Kurang (-)\n        </button>\n        <button className=\"btn btn-outline-secondary\" onClick={reset}>\n          Reset\n        </button>\n        <button className=\"btn btn-primary\" onClick={tambah}>\n          Tambah (+)\n        </button>\n      </div>\n    </div>\n  );\n}\n```\n"
      },
      {
          "id": "lesson-react-04",
          "courseId": "course-react-15",
          "slug": "event-handling-controlled-components",
          "title": "4. Event Handling & Controlled Form Components",
          "summary": "Tangani event klik, ketikan keyboard, dan kelola input formulir melalui state (Controlled Components).",
          "order": 4,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 4. Event Handling & Controlled Form Components\n\nDi HTML standar, elemen formulir seperti `<input>` atau `<textarea>` menyimpan nilainya sendiri di DOM. Dalam React, kita menggunakan pola **Controlled Components**, di mana State React menjadi *\"Single Source of Truth\"* bagi elemen form tersebut.\n\n---\n\n## Formulir Input Terkontrol (Controlled Input)\n\n```jsx\nimport React, { useState } from 'react';\n\nfunction FormPendaftaran() {\n  const [formData, setFormData] = useState({\n    nama: '',\n    email: '',\n    jurusan: 'frontend'\n  });\n\n  const handleChange = (e) => {\n    const { name, value } = e.target;\n    setFormData(prev => ({ ...prev, [name]: value }));\n  };\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log('Data terkirim:', formData);\n    alert(`Selamat datang, ${formData.nama}!`);\n  };\n\n  return (\n    <form onSubmit={handleSubmit} className=\"p-3 bg-light rounded\">\n      <div className=\"mb-3\">\n        <label className=\"form-label\">Nama Lengkap</label>\n        <input \n          type=\"text\" \n          name=\"nama\" \n          className=\"form-control\" \n          value={formData.nama} \n          onChange={handleChange} \n          required \n        />\n      </div>\n      <div className=\"mb-3\">\n        <label className=\"form-label\">Email</label>\n        <input \n          type=\"email\" \n          name=\"email\" \n          className=\"form-control\" \n          value={formData.email} \n          onChange={handleChange} \n          required \n        />\n      </div>\n      <button type=\"submit\" className=\"btn btn-success\">Daftar Sekarang</button>\n    </form>\n  );\n}\n```\n"
      },
      {
          "id": "lesson-react-05",
          "courseId": "course-react-15",
          "slug": "side-effects-lifecycle-useeffect",
          "title": "5. Efek Samping & Siklus Hidup dengan useEffect",
          "summary": "Sinkronkan komponen dengan sistem eksternal, konsumsi API via Fetch, dan lakukan cleanup timer/listener.",
          "order": 5,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 5. Efek Samping & Siklus Hidup dengan useEffect\n\nFungsi komponen React harus bersifat murni (*pure functions*): menerima props dan mengembalikan JSX tanpa mengubah variabel luar. Namun aplikasi nyata membutuhkan **Side Effects** (efek samping), seperti mengambil data dari server, mengubah judul halaman, atau mengatur interval timer.\n\n---\n\n## Pola Dasar `useEffect`\n\n```jsx\nimport React, { useState, useEffect } from 'react';\n\nfunction PengambilDataKursus() {\n  const [kursus, setKursus] = useState([]);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    // Berjalan saat komponen dipasang (mount)\n    let aktif = true;\n\n    async function fetchData() {\n      try {\n        const res = await fetch('/api/v1/courses');\n        const data = await res.json();\n        if (aktif) {\n          setKursus(data);\n          setLoading(false);\n        }\n      } catch (err) {\n        console.error('Gagal mengambil data:', err);\n      }\n    }\n\n    fetchData();\n\n    // Cleanup function: dipanggil saat unmount atau sebelum efek berikutnya\n    return () => {\n      aktif = false;\n    };\n  }, []); // Array kosong [] = hanya berjalan 1x saat pertama kali mount\n\n  if (loading) return <p>Memuat katalog materi...</p>;\n  return <ul>{kursus.map(item => <li key={item.id}>{item.title}</li>)}</ul>;\n}\n```\n"
      },
      {
          "id": "lesson-react-06",
          "courseId": "course-react-15",
          "slug": "rendering-kondisional-daftar-keys",
          "title": "6. Rendering Kondisional & Optimasi Daftar dengan Kunci Unik",
          "summary": "Rancang antarmuka dinamis dengan operator ternary, short-circuit &&, dan iterasi array via map().",
          "order": 6,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 6. Rendering Kondisional & Optimasi Daftar dengan Kunci Unik\n\nDalam aplikasi web, kita sering kali perlu menampilkan antarmuka yang berbeda tergantung kondisi (misal: menampilkan tombol *Login* saat belum masuk, atau tombol *Profil* saat sudah masuk).\n\n---\n\n## 1. Tiga Teknik Rendering Kondisional\n\n1. **Operator Ternary (`kondisi ? <A /> : <B />`)**:\n   ```jsx\n   {isLoggedIn ? <TombolKeluar /> : <TombolMasuk />}\n   ```\n2. **Short-Circuit AND (`kondisi && <Komponen />`)**:\n   ```jsx\n   {notifikasiAda && <BadgePeringatan hitung={notifikasiCount} />}\n   ```\n3. **Early Return**:\n   ```jsx\n   if (error) return <TampilanError pesan={error.message} />;\n   ```\n\n---\n\n## 2. Merender Daftar Dinamis dengan `.map()` dan Atribut `key`\n\n```jsx\nconst DAFTAR_TOPIK = [\n  { id: 't1', nama: 'Frontend Web' },\n  { id: 't2', nama: 'Backend API' },\n  { id: 't3', nama: 'DevOps & Cloud' }\n];\n\nfunction MenuNavigasi() {\n  return (\n    <nav className=\"nav flex-column\">\n      {DAFTAR_TOPIK.map(topik => (\n        // Atribut key unik pada elemen terluar dalam perulangan:\n        <a key={topik.id} href={`#${topik.id}`} className=\"nav-link\">\n          {topik.nama}\n        </a>\n      ))}\n    </nav>\n  );\n}\n```\n"
      }
  ]
,
  "course-go-16": [
      {
          "id": "lesson-go-01",
          "courseId": "course-go-16",
          "slug": "pengenalan-go-sintaks-dasar-kompilasi",
          "title": "1. Pengenalan Go, Filosofi Desain, & Program Hello World",
          "summary": "Pelajari bahasa Go dari Google, kecepatan kompilasi native machine code, dan struktur package main.",
          "order": 1,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 1. Pengenalan Go, Filosofi Desain, & Program Hello World\n\n**Go** (atau sering disebut Golang) adalah bahasa pemrograman open source yang dikembangkan oleh Robert Griesemer, Rob Pike, dan Ken Thompson di Google. Go dirancang untuk menggabungkan kemudahan pengembangan seperti Python dengan kecepatan dan keamanan memori seperti C++.\n\n---\n\n## Karakteristik Utama Bahasa Go:\n- **Kompilasi ke Native Binary**: Menghasilkan satu file binary independen tanpa perlu runtime virtual machine.\n- **Garbage Collection Efisien**: Manajemen memori otomatis dengan latensi sangat rendah.\n- **Sintaks Minimalis & Bersih**: Tidak ada class inheritance rumit, tidak ada exception handling try/catch berlebih.\n- **Konkurensi Kelas Satu (First-Class Concurrency)**: Dukungan bawaan untuk ribuan thread ringan via Goroutines.\n\n---\n\n## Program Pertama: Hello World!\n\n```go\n// main.go\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Halo dari bahasa Go di KodeLuma!\")\n}\n```\n\nJalankan langsung:\n```bash\ngo run main.go\n```\n\nAtau build menjadi binary executable:\n```bash\ngo build -o program_saya main.go\n./program_saya\n```\n"
      },
      {
          "id": "lesson-go-02",
          "courseId": "course-go-16",
          "slug": "variabel-tipe-data-statis-konstanta",
          "title": "2. Variabel, Tipe Data Statis, & Operator Walrus (:=)",
          "summary": "Pahami static typing yang ketat di Go, inferensi tipe otomatis dengan :=, dan deklarasi konstanta.",
          "order": 2,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 2. Variabel, Tipe Data Statis, & Operator Walrus (:=)\n\nGo adalah bahasa dengan pengetikan statis (*statically typed*), artinya tipe setiap variabel diperiksa pada saat kompilasi dan tidak bisa berubah di tengah jalan.\n\n---\n\n## Deklarasi Variabel\n\nAda dua cara mendeklarasikan variabel di Go:\n\n### 1. Deklarasi Standar dengan kata kunci `var`:\n```go\nvar nama string = \"Azzam\"\nvar umur int = 25\nvar aktif bool = true\n```\n\n### 2. Short Variable Declaration (Operator Walrus `:=`):\nGo secara otomatis menebak (*type inference*) tipe data berdasarkan nilai yang diisi:\n```go\nkota := \"Jakarta\"     // Otomatis bertipe string\nxpPoin := 1250        // Otomatis bertipe int\npersentase := 98.5    // Otomatis bertipe float64\n```\n\n> **Aturan Tegas Compiler Go:** Setiap variabel yang dideklarasikan di dalam fungsi **wajib digunakan**! Jika tidak, compiler akan melempar error dan menolak kompilasi.\n"
      },
      {
          "id": "lesson-go-03",
          "courseId": "course-go-16",
          "slug": "fungsi-multiple-return-error-handling",
          "title": "3. Fungsi, Multiple Return Values, & Idiomatis Error Handling",
          "summary": "Manfaatkan kemampuan fungsi mengembalikan lebih dari satu nilai dan tangani error tanpa try/catch.",
          "order": 3,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 3. Fungsi, Multiple Return Values, & Idiomatis Error Handling\n\nBerbeda dengan sebagian besar bahasa lain yang melempar Exception (seperti Java atau JavaScript), Go memperlakukan error sebagai **nilai biasa (*error values*)**.\n\n---\n\n## Fungsi dengan Lebih dari Satu Nilai Return\n\nFungsi di Go dapat mengembalikan beberapa nilai sekaligus. Pola paling umum adalah mengembalikan `(hasil, error)`:\n\n```go\npackage main\n\nimport (\n    \"errors\"\n    \"fmt\"\n)\n\n// Mengembalikan dua nilai: float64 dan error\nfunc bagiAngka(a, b float64) (float64, error) {\n    if b == 0 {\n        return 0, errors.New(\"pembagian dengan nol tidak diperbolehkan\")\n    }\n    return a / b, nil\n}\n\nfunc main() {\n    hasil, err := bagiAngka(10, 2)\n    if err != nil {\n        fmt.Println(\"Error:\", err)\n        return\n    }\n    fmt.Printf(\"Hasil pembagian: %.2f\n\", hasil)\n\n    // Contoh penanganan kasus gagal:\n    _, errGagal := bagiAngka(10, 0)\n    if errGagal != nil {\n        fmt.Println(\"Penanganan error berhasil:\", errGagal)\n    }\n}\n```\n"
      },
      {
          "id": "lesson-go-04",
          "courseId": "course-go-16",
          "slug": "struct-pointer-dan-method-receiver",
          "title": "4. Struct, Pointer, & Method Receiver (OOP ala Go)",
          "summary": "Rancang model data dengan Struct, manipulasi referensi memori dengan Pointer, dan tambahkan methods.",
          "order": 4,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 4. Struct, Pointer, & Method Receiver (OOP ala Go)\n\nGo tidak memiliki kata kunci `class`. Sebagai gantinya, Go menggunakan **Struct** untuk membungkus data dan **Method Receiver** untuk memberikan perilaku.\n\n---\n\n## 1. Mendefinisikan Struct\n\n```go\ntype Siswa struct {\n    ID     string\n    Nama   string\n    Nilai  int\n    Alamat string\n}\n```\n\n---\n\n## 2. Pointer vs Value Receiver\n\n- **Value Receiver `(s Siswa)`**: Menerima salinan (*copy*) objek. Modifikasi di dalam method tidak mempengaruhi objek asli.\n- **Pointer Receiver `(s *Siswa)`**: Menerima referensi alamat memori (`*`). Memungkinkan method mengubah field objek asli dan menghemat memori.\n\n```go\n// Pointer Receiver: Memodifikasi nilai asli siswa\nfunc (s *Siswa) TambahPoin(poinBaru int) {\n    s.Nilai += poinBaru\n}\n\n// Value Receiver: Hanya membaca nilai\nfunc (s Siswa) TampilkanInfo() string {\n    return fmt.Sprintf(\"Siswa %s memiliki skor: %d\", s.Nama, s.Nilai)\n}\n\nfunc main() {\n    budi := Siswa{ID: \"s-01\", Nama: \"Budi Santoso\", Nilai: 80}\n    budi.TambahPoin(15) // Nilai budi berubah menjadi 95!\n    fmt.Println(budi.TampilkanInfo())\n}\n```\n"
      },
      {
          "id": "lesson-go-05",
          "courseId": "course-go-16",
          "slug": "goroutines-konkurensi-ringan",
          "title": "5. Goroutines: Eksekusi Multithreading Ringan Skala Ribuan",
          "summary": "Jalankan fungsi konkuren dengan awalan kata kunci 'go' yang hanya menghabiskan 2KB memori stack.",
          "order": 5,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 5. Goroutines: Eksekusi Multithreading Ringan Skala Ribuan\n\nThread sistem operasi standar biasanya memakan memori stack sekitar 1-2 Megabyte. Sebaliknya, sebuah **Goroutine** hanya membutuhkan **sekitar 2 Kilobyte** saat dimulai, memungkinkan server menjalankan 100.000 Goroutine sekaligus di satu mesin tanpa kehabisan RAM!\n\n---\n\n## Memulai Goroutine dengan Kata Kunci `go`\n\nCukup tambahkan kata kunci `go` di depan pemanggilan fungsi:\n\n```go\npackage main\n\nimport (\n    \"fmt\"\n    \"time\"\n)\n\nfunc cetakPesan(teks string) {\n    for i := 1; i <= 3; i++ {\n        fmt.Printf(\"[%d] %s\n\", i, teks)\n        time.Sleep(100 * time.Millisecond)\n    }\n}\n\nfunc main() {\n    // Menjalankan fungsi di thread Goroutine terpisah secara konkuren:\n    go cetakPesan(\"Tugas Latar Belakang A\")\n    go cetakPesan(\"Tugas Latar Belakang B\")\n\n    // Menunggu sejenak agar thread utama tidak langsung selesai\n    time.Sleep(500 * time.Millisecond)\n    fmt.Println(\"Selesai mengeksekusi semua tugas!\")\n}\n```\n"
      },
      {
          "id": "lesson-go-06",
          "courseId": "course-go-16",
          "slug": "channels-dan-sinkronisasi-select",
          "title": "6. Channels & Pola Sinkronisasi dengan Select",
          "summary": "Hubungkan antar Goroutine dengan Channel aman tanpa race condition dan kelola multi-channel via select.",
          "order": 6,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 6. Channels & Pola Sinkronisasi dengan Select\n\nJika Anda menjalankan banyak Goroutine, bagaimana cara mereka saling bertukar data tanpa merusak memori? Jawabannya adalah **Channels**.\n\n---\n\n## Mengirim & Menerima Data via Channel (`ch <-` dan `<- ch`)\n\n```go\npackage main\n\nimport \"fmt\"\n\nfunc hitungKuadrat(angka int, hasilChan chan int) {\n    // Mengirim hasil ke channel:\n    hasilChan <- angka * angka\n}\n\nfunc main() {\n    // Membuat channel bertipe int\n    ch := make(chan int)\n\n    // Jalankan goroutine\n    go hitungKuadrat(8, ch)\n    go hitungKuadrat(10, ch)\n\n    // Menerima nilai dari channel (bersifat blocking sampai data tersedia):\n    hasil1 := <-ch\n    hasil2 := <-ch\n\n    fmt.Printf(\"Hasil 1: %d, Hasil 2: %d\n\", hasil1, hasil2)\n}\n```\n\n---\n\n## Pernyataan `select` untuk Multiplexing Channel\n\n```go\nselect {\ncase pesan1 := <-chan1:\n    fmt.Println(\"Menerima dari server 1:\", pesan1)\ncase pesan2 := <-chan2:\n    fmt.Println(\"Menerima dari server 2:\", pesan2)\ncase <-time.After(2 * time.Second):\n    fmt.Println(\"Timeout: Server tidak merespons dalam 2 detik\")\n}\n```\n"
      }
  ]
,
  "course-git-17": [
      {
          "id": "lesson-git-01",
          "courseId": "course-git-17",
          "slug": "fondasi-version-control-tiga-area-git",
          "title": "1. Fondasi Version Control System: Tiga Area Utama Git",
          "summary": "Pahami perbedaan Working Tree, Staging Area (Index), dan Git Repository lokal secara visual.",
          "order": 1,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 1. Fondasi Version Control System: Tiga Area Utama Git\n\n**Git** adalah sistem kendali versi terdistribusi (*Distributed Version Control System* / DVCS) yang diciptakan oleh Linus Torvalds. Git memungkinkan pelacakan riwayat perubahan kode sumber, kolaborasi tim tanpa tumpang tindih, dan kemampuan mengembalikan berkas ke versi masa lalu jika terjadi kesalahan fatal.\n\n---\n\n## Tiga Arsitektur Ruang Kerja Git\n\n```text\n[ 1. Working Directory ] --(git add)--> [ 2. Staging Area ] --(git commit)--> [ 3. Git Repository (.git) ]\n  (File yang sedang diedit)                (File siap dicatat)                   (Riwayat permanen komit)\n```\n\n1. **Working Directory (Pohon Kerja)**: Tempat berkas nyata berada di folder komputer Anda saat Anda mengetik kode.\n2. **Staging Area (Index)**: Area persiapan tempat Anda memilih file mana saja yang ingin disertakan ke dalam rekam jejak (*snapshot*) berikutnya.\n3. **Repository (.git)**: Basis data internal Git tempat seluruh rekam jejak commit tersimpan secara aman dan permanen dengan checksum hash SHA-1/SHA-256.\n\n---\n\n## Perintah Dasar Memulai:\n\n```bash\n# Inisialisasi repositori baru di folder saat ini:\ngit init\n\n# Konfigurasi identitas developer:\ngit config --global user.name \"Azzam Codex\"\ngit config --global user.email \"azzam@kodeluma.dev\"\n```\n"
      },
      {
          "id": "lesson-git-02",
          "courseId": "course-git-17",
          "slug": "siklus-hidup-file-staging-commit",
          "title": "2. Siklus Hidup File: Untracked, Staged, & Best Practice Commit",
          "summary": "Kuasai perintah git status, git add, git diff, dan cara menulis pesan commit profesional.",
          "order": 2,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 2. Siklus Hidup File: Untracked, Staged, & Best Practice Commit\n\nSetiap berkas di repositori Git memiliki status tertentu: **Untracked** (belum dilacak), **Modified** (diubah), **Staged** (siap dicatat), atau **Unmodified** (sudah tersimpan di commit terakhir).\n\n---\n\n## 1. Memeriksa Status & Mendaftarkan Perubahan\n\n```bash\n# 1. Cek status berkas:\ngit status\n\n# 2. Daftarkan file tertentu ke Staging Area:\ngit add index.html style.css\n\n# 3. Atau daftarkan seluruh perubahan di direktori:\ngit add .\n```\n\n---\n\n## 2. Membuat Commit & Format Pesan Profesional\n\nSebuah commit adalah *snapshot* kondisi proyek pada titik waktu tertentu. Gunakan format **Conventional Commits** standar industri:\n\n```bash\n# Format: <tipe>(cakupan): <deskripsi singkat>\ngit commit -m \"feat(auth): tambahkan verifikasi token JWT pada rute login\"\n```\n\n### Tipe-Tipe Commit Populer:\n- **`feat`**: Menambahkan fitur baru.\n- **`fix`**: Memperbaiki bug.\n- **`docs`**: Perubahan dokumentasi.\n- **`refactor`**: Perapian kode tanpa mengubah fungsionalitas.\n- **`test`**: Menambahkan unit test.\n"
      },
      {
          "id": "lesson-git-03",
          "courseId": "course-git-17",
          "slug": "branching-percabangan-fitur-terisolasi",
          "title": "3. Branching: Bekerja pada Percabangan Fitur Terisolasi",
          "summary": "Buat branch baru untuk eksperimen dan fitur tanpa merusak kode utama di branch main.",
          "order": 3,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 3. Branching: Bekerja pada Percabangan Fitur Terisolasi\n\n**Branch** (cabang) memungkinkan Anda memisahkan alur kerja utama (*main branch*) untuk mengerjakan fitur baru atau eksperimen tanpa takut merusak kode produksi yang sedang berjalan.\n\n---\n\n## Perintah Mengelola Branch:\n\n```bash\n# 1. Melihat daftar seluruh branch lokal:\ngit branch\n\n# 2. Membuat sekaligus berpindah ke branch baru:\ngit switch -c feat/halaman-katalog\n# Atau dengan perintah klasik:\ngit checkout -b feat/halaman-katalog\n\n# 3. Berpindah kembali ke branch utama:\ngit switch main\n\n# 4. Menghapus branch lokal yang sudah digabung:\ngit branch -d feat/halaman-katalog\n```\n"
      },
      {
          "id": "lesson-git-04",
          "courseId": "course-git-17",
          "slug": "merging-dan-resolusi-merge-conflict",
          "title": "4. Merging & Resolusi Merge Conflict dengan Tenang",
          "summary": "Gabungkan cabang fitur ke branch utama dan pahami cara menyelesaikan tanda konflik <<<<<<< HEAD.",
          "order": 4,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 4. Merging & Resolusi Merge Conflict dengan Tenang\n\nKetika fitur yang dikerjakan di branch selesai dan diuji, saatnya menggabungkannya (*merge*) kembali ke branch `main`.\n\n---\n\n## Alur Penggabungan (Merging)\n\n```bash\n# 1. Pastikan Anda berada di branch tujuan (misal: main)\ngit switch main\n\n# 2. Gabungkan branch fitur:\ngit merge feat/halaman-katalog\n```\n\n---\n\n## Apa itu Merge Conflict?\n\nKonflik terjadi jika dua developer mengedit **baris yang sama** pada file yang sama dengan isi yang berbeda. Git akan menghentikan proses merge dan menandai bagian yang bermasalah:\n\n```text\n<<<<<<< HEAD\n<h1>Selamat Datang di KodeLuma Platform</h1>\n=======\n<h1>Belajar Pemrograman Modern di KodeLuma</h1>\n>>>>>>> feat/judul-baru\n```\n\n### Langkah Menyelesaikan Konflik:\n1. Buka file di VS Code atau editor kode.\n2. Tentukan teks mana yang ingin dipertahankan (apakah versi HEAD, versi fitur, atau kombinasi keduanya).\n3. Hapus penanda `<<<<<<<`, `=======`, dan `>>>>>>>`.\n4. Simpan file, lalu jalankan:\n   ```bash\n   git add nama_file_konflik.html\n   git commit -m \"fix: selesaikan merge conflict pada judul halaman utama\"\n   ```\n"
      },
      {
          "id": "lesson-git-05",
          "courseId": "course-git-17",
          "slug": "remote-repository-github-push-pull",
          "title": "5. Remote Repository: Menghubungkan Git Lokal ke GitHub",
          "summary": "Sinkronkan repositori lokal ke cloud GitHub dengan git remote, push, fetch, dan pull.",
          "order": 5,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 5. Remote Repository: Menghubungkan Git Lokal ke GitHub\n\n**GitHub** adalah platform hosting repositori Git berbasis cloud yang memfasilitasi kolaborasi tim di seluruh dunia.\n\n---\n\n## Menghubungkan ke Repositori Remote\n\n```bash\n# 1. Tambahkan remote server bernama 'origin':\ngit remote add origin https://github.com/username/kodeluma-project.git\n\n# 2. Verifikasi alamat remote:\ngit remote -v\n\n# 3. Dorong (Push) branch main untuk pertama kali:\ngit push -u origin main\n\n# 4. Menarik perubahan terbaru dari rekan tim di GitHub:\ngit pull origin main\n```\n\n> **Perbedaan `git fetch` vs `git pull`:**\n> - `git fetch`: Mengunduh riwayat perubahan terbaru dari server tetapi belum menggabungkannya ke file lokal Anda.\n> - `git pull`: Mengunduh sekaligus otomatis melakukan `git merge` ke branch lokal yang aktif.\n"
      },
      {
          "id": "lesson-git-06",
          "courseId": "course-git-17",
          "slug": "kolaborasi-pull-request-dan-code-review",
          "title": "6. Alur Kerja Pull Request & Code Review Standar Industri",
          "summary": "Pelajari siklus hidup Pull Request (PR), review kode rekan tim, dan strategi merge di GitHub.",
          "order": 6,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 6. Alur Kerja Pull Request & Code Review Standar Industri\n\nDalam perusahaan teknologi modern, tidak ada developer yang langsung melakukan *push* sembarangan ke branch `main`. Semua perubahan wajib melalui proses **Pull Request (PR)**.\n\n---\n\n## Siklus Hidup Alur Kerja Git (Git Flow):\n1. **Fork/Clone**: Mengunduh repositori proyek ke lokal.\n2. **Branch**: Membuat cabang baru untuk tiket tugas: `feat/fitur-baru`.\n3. **Commit & Push**: Mengunggah perubahan ke remote branch: `git push origin feat/fitur-baru`.\n4. **Buka Pull Request**: Menulis deskripsi perubahan, checklist pengujian, dan screenshot perbaikan.\n5. **Code Review**: Rekan tim memeriksa kualitas kode, standar keamanan, dan memberi komentar revisi.\n6. **Merge**: Setelah disetujui (Approved) dan lolos automated CI/CD tests, PR di-merge ke branch utama!\n"
      }
  ]
,
  "course-docker-18": [
      {
          "id": "lesson-docker-01",
          "courseId": "course-docker-18",
          "slug": "konsep-kontainerisasi-vs-virtual-machine",
          "title": "1. Konsep Kontainerisasi vs Virtual Machine",
          "summary": "Pahami isolasi proses Linux, perbandingan efisiensi Container vs VM berat, dan arsitektur Docker Engine.",
          "order": 1,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 1. Konsep Kontainerisasi vs Virtual Machine\n\nSebelum era kontainer, developer sering menghadapi masalah klise: *\"Kode ini berjalan lancar di laptop saya, tapi error saat dipasang di server.\"* Hal ini disebabkan oleh perbedaan versi sistem operasi, library sistem, dan konfigurasi lingkungan.\n\n---\n\n## Container vs Virtual Machine (VM)\n\n| Aspek | Virtual Machine (VM) | Docker Container |\n| :--- | :--- | :--- |\n| **Arsitektur** | Membawa Guest OS penuh (GB) | Berbagi Kernel OS host (MB) |\n| **Waktu Booting** | Beberapa menit | Beberapa detik / milidetik |\n| **Konsumsi Resource** | Berat (memotong CPU & RAM kaku) | Sangat ringan (hanya memakai yang dibutuhkan) |\n| **Portabilitas** | File image besar (puluhan GB) | Image ramping berbasis layer |\n\n---\n\n## Arsitektur Docker: Client, Daemon, & Registry\n- **Docker Client (CLI)**: Perintah terminal yang kita ketik (`docker run`, `docker build`).\n- **Docker Daemon (dockerd)**: Layanan latar belakang yang mengelola image, container, network, dan volume.\n- **Docker Hub (Registry)**: Tempat penyimpanan dan distribusi image publik/privat di internet.\n"
      },
      {
          "id": "lesson-docker-02",
          "courseId": "course-docker-18",
          "slug": "perintah-dasar-docker-cli-lifecycle",
          "title": "2. Perintah Dasar Docker CLI & Siklus Hidup Container",
          "summary": "Jalankan, hentikan, pantau log, dan hapus container dengan perintah docker run, ps, logs, dan stop.",
          "order": 2,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 2. Perintah Dasar Docker CLI & Siklus Hidup Container\n\nContainer adalah instansiasi nyata dari sebuah Docker Image yang sedang berjalan di lingkungan terisolasi.\n\n---\n\n## Perintah Penting Sehari-hari:\n\n```bash\n# 1. Mengunduh dan menjalankan web server Nginx:\ndocker run -d -p 8080:80 --name server-web nginx:alpine\n\n# 2. Melihat daftar container yang sedang aktif:\ndocker ps\n\n# 3. Melihat semua container (termasuk yang berhenti):\ndocker ps -a\n\n# 4. Melihat log output aplikasi di dalam container:\ndocker logs -f server-web\n\n# 5. Menghentikan dan menghapus container:\ndocker stop server-web\ndocker rm server-web\n```\n\n### Penjelasan Opsi `docker run`:\n- `-d` (*detached*): Menjalankan container di latar belakang (*background*).\n- `-p 8080:80`: Memetakan port **8080** di laptop Anda ke port **80** di dalam container.\n- `--name`: Memberi nama mudah dibaca untuk container.\n"
      },
      {
          "id": "lesson-docker-03",
          "courseId": "course-docker-18",
          "slug": "menulis-dockerfile-efisien-multistage",
          "title": "3. Menulis Dockerfile: Membangun Image Kustom Sendiri",
          "summary": "Tulis instruksi FROM, WORKDIR, COPY, RUN, EXPOSE, dan CMD untuk mengemas aplikasi web ke dalam image.",
          "order": 3,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 3. Menulis Dockerfile: Membangun Image Kustom Sendiri\n\n**Dockerfile** adalah berkas teks yang berisi urutan instruksi langkah-demi-langkah bagi Docker Engine untuk membangun Docker Image baru.\n\n---\n\n## Contoh Dockerfile untuk Aplikasi Node.js\n\n```dockerfile\n# 1. Gunakan base image resmi yang ringan (Alpine Linux)\nFROM node:20-alpine\n\n# 2. Tetapkan direktori kerja di dalam container\nWORKDIR /app\n\n# 3. Salin berkas package.json terlebih dahulu untuk memanfaatkan caching layer\nCOPY package*.json ./\n\n# 4. Instal dependensi produksi\nRUN npm ci --only=production\n\n# 5. Salin sisa kode sumber aplikasi\nCOPY . .\n\n# 6. Beri dokumentasi port yang dibuka\nEXPOSE 3000\n\n# 7. Perintah yang dieksekusi saat container pertama kali menyala\nCMD [\"node\", \"src/server.js\"]\n```\n\n---\n\n## Membangun & Menjalankan Image Kustom:\n```bash\n# Build image dengan tag nama 'kodeluma-backend:v1':\ndocker build -t kodeluma-backend:v1 .\n\n# Jalankan image yang baru dibuat:\ndocker run -d -p 3000:3000 --name api-kodeluma kodeluma-backend:v1\n```\n"
      },
      {
          "id": "lesson-docker-04",
          "courseId": "course-docker-18",
          "slug": "persistensi-data-dengan-docker-volumes",
          "title": "4. Persistensi Data dengan Docker Volumes & Bind Mounts",
          "summary": "Cegah hilangnya data database saat container dimatikan menggunakan Docker Volumes.",
          "order": 4,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 4. Persistensi Data dengan Docker Volumes & Bind Mounts\n\nSecara bawaan, filesystem container bersifat **ephemeral (sementara)**. Jika container dihapus, seluruh data yang tersimpan di dalamnya akan hilang selamanya. Untuk basis data (seperti Redis atau PostgreSQL), kita memerlukan **Docker Volumes**.\n\n---\n\n## Dua Tipe Persistensi:\n\n1. **Docker Volumes (Direkomendasikan untuk Produksi)**: Dikelola penuh oleh Docker di lokasi aman host (`/var/lib/docker/volumes/`).\n2. **Bind Mounts (Sangat Baik untuk Development)**: Memetakan folder lokal di laptop Anda langsung ke folder dalam container, sehingga perubahan kode langsung terbaca tanpa re-build image.\n\n---\n\n## Contoh Praktik: Menjalankan Redis dengan Volume Persisten\n\n```bash\n# 1. Buat volume bernama 'data-redis-kodeluma':\ndocker volume create data-redis-kodeluma\n\n# 2. Jalankan Redis dan sambungkan ke volume tersebut:\ndocker run -d   -p 6379:6379   --name redis-kodeluma   -v data-redis-kodeluma:/data   redis:alpine redis-server --appendonly yes\n```\n"
      },
      {
          "id": "lesson-docker-05",
          "courseId": "course-docker-18",
          "slug": "docker-network-komunikasi-antar-container",
          "title": "5. Docker Network: Komunikasi Aman Antar Container",
          "summary": "Hubungkan aplikasi backend dan database dalam jaringan privat terisolasi dengan bridge network.",
          "order": 5,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 5. Docker Network: Komunikasi Aman Antar Container\n\nBagaimana server backend Node.js Anda dapat berkomunikasi dengan container Redis atau PostgreSQL tanpa membuka port database ke internet publik? Jawabannya adalah **Docker Custom Bridge Network**.\n\n---\n\n## Menggunakan Custom Network dengan DNS Internal\n\nDalam custom bridge network, Docker menyediakan server DNS internal otomatis: container dapat memanggil container lain **cukup menggunakan nama container-nya**!\n\n```bash\n# 1. Buat jaringan privat:\ndocker network create net-kodeluma\n\n# 2. Jalankan database di dalam network privat:\ndocker run -d --name redis-db --network net-kodeluma redis:alpine\n\n# 3. Jalankan aplikasi web di network yang sama:\n# Aplikasi backend dapat terhubung ke Redis via URL: \"redis-db:6379\"\ndocker run -d -p 3000:3000   --name web-app   --network net-kodeluma   -e REDIS_HOST=redis-db   kodeluma-backend:v1\n```\n"
      },
      {
          "id": "lesson-docker-06",
          "courseId": "course-docker-18",
          "slug": "docker-compose-orkestrasi-multi-service",
          "title": "6. Docker Compose: Orkestrasi Multi-Service dengan Satu Perintah",
          "summary": "Rangkum web, worker, dan database ke dalam satu file docker-compose.yml dan jalankan via docker compose up.",
          "order": 6,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 6. Docker Compose: Orkestrasi Multi-Service dengan Satu Perintah\n\nMengetik puluhan perintah `docker run` panjang dengan port, volume, dan network sangat melelahkan. **Docker Compose** memungkinkan Anda mendefinisikan seluruh arsitektur multi-container dalam satu berkas konfigurasi deklaratif: `docker-compose.yml`.\n\n---\n\n## File `docker-compose.yml` Lengkap\n\n```yaml\nservices:\n  web:\n    build: .\n    ports:\n      - \"3000:3000\"\n    environment:\n      - NODE_ENV=production\n      - REDIS_URL=redis://cache:6379\n    depends_on:\n      - cache\n    networks:\n      - kodeluma-net\n\n  cache:\n    image: redis:alpine\n    volumes:\n      - redis_data:/data\n    networks:\n      - kodeluma-net\n\nvolumes:\n  redis_data:\n\nnetworks:\n  kodeluma-net:\n```\n\n---\n\n## Perintah Mengoperasikan:\n```bash\n# Menyalakan seluruh service di background:\ndocker compose up -d\n\n# Mematikan seluruh service dan membersihkan network:\ndocker compose down\n```\n"
      }
  ]
,
  "course-php-19": [
      {
          "id": "lesson-php-01",
          "courseId": "course-php-19",
          "slug": "pengenalan-php-sintaks-dasar-tag",
          "title": "1. Pengenalan PHP Modern: Sintaks Dasar, Tag <?php ?>, & Output",
          "summary": "Pelajari bahasa server-side tertua dan paling luas digunakan di web serta cara mencetak teks dinamis.",
          "order": 1,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 1. Pengenalan PHP Modern: Sintaks Dasar, Tag <?php ?>, & Output\n\n**PHP** (*PHP: Hypertext Preprocessor*) adalah bahasa pemrograman server-side yang dirancang khusus untuk pengembangan web. Kode PHP dieksekusi di server web, dan hasilnya dikirimkan ke browser pengguna dalam bentuk HTML murni.\n\n---\n\n## Tag Pembuka & Penutup PHP\n\nSkrip PHP ditulis di antara tag `<?php` dan `?>`:\n\n```php\n<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Halaman PHP Pertama</title>\n</head>\n<body>\n    <h1>Selamat Datang di KodeLuma</h1>\n    <p>Waktu server: <?php echo date('d-m-Y H:i:s'); ?></p>\n</body>\n</html>\n```\n\n> **Tips PHP Modern:** Jika berkas Anda hanya berisi kode PHP murni tanpa markup HTML, **jangan sertakan tag penutup `?>`**. Hal ini mencegah pengiriman spasi atau baris kosong yang tidak disengaja ke HTTP header.\n"
      },
      {
          "id": "lesson-php-02",
          "courseId": "course-php-19",
          "slug": "variabel-tipe-data-array-asosiatif",
          "title": "2. Variabel ($), Tipe Data, & Array Asosiatif",
          "summary": "Kuasai penamaan variabel dengan simbol $, array numerik vs array asosiatif (key-value pair).",
          "order": 2,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 2. Variabel ($), Tipe Data, & Array Asosiatif\n\nDi PHP, semua variabel diawali dengan tanda dollar (`$`) diikuti nama identifier. PHP bersifat *loosely typed*, sehingga tipe data variabel ditentukan secara dinamis berdasarkan nilainya.\n\n---\n\n## 1. Tipe Data Primitif\n\n```php\n$namaLengkap = \"Azzam Codex\";  // String\n$skorPoin = 850;               // Integer\n$ipk = 3.92;                   // Float\n$isMemberAktif = true;         // Boolean\n```\n\n---\n\n## 2. Array Numerik & Array Asosiatif\n\nDi PHP, array sangat fleksibel dan dapat berfungsi sebagai list maupun hashmap/dictionary:\n\n```php\n// Array Numerik (Indeks angka 0, 1, 2):\n$bahasa = [\"PHP\", \"JavaScript\", \"Python\"];\necho $bahasa[0]; // \"PHP\"\n\n// Array Asosiatif (Pasangan Kunci => Nilai):\n$profil = [\n    \"username\" => \"azzam\",\n    \"email\"    => \"azzam@kodeluma.dev\",\n    \"role\"     => \"admin\"\n];\n\necho $profil[\"email\"]; // \"azzam@kodeluma.dev\"\n```\n"
      },
      {
          "id": "lesson-php-03",
          "courseId": "course-php-19",
          "slug": "pemrosesan-formulir-get-post",
          "title": "3. Pemrosesan Formulir: Superglobal $_GET dan $_POST",
          "summary": "Tangani data formulir HTML dari pengguna secara aman dan pahami perbedaan metode GET vs POST.",
          "order": 3,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 3. Pemrosesan Formulir: Superglobal $_GET dan $_POST\n\nPHP menyediakan variabel global bawaan bernama **Superglobals** yang selalu dapat diakses di seluruh scope fungsi tanpa perlu deklarasi tambahan.\n\n---\n\n## Perbandingan `$_GET` vs `$_POST`\n\n- **`$_GET`**: Data dikirimkan melalui URL parameter (`halaman.php?cari=php&page=1`). Cocok untuk pencarian dan pagination; dapat di-bookmark. *Jangan gunakan untuk password!*\n- **`$_POST`**: Data dikirimkan di dalam HTTP request body. Tidak terlihat di URL browser; cocok untuk login, upload berkas, dan pendaftaran.\n\n---\n\n## Contoh Penanganan Form POST:\n\n```php\n<?php\n$pesanSukses = \"\";\n\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    // Sanitasi input teks untuk mencegah serangan XSS:\n    $nama = htmlspecialchars(trim($_POST[\"nama\"] ?? \"\"));\n    $email = filter_var($_POST[\"email\"] ?? \"\", FILTER_VALIDATE_EMAIL);\n\n    if ($nama && $email) {\n        $pesanSukses = \"Terima kasih, {$nama}! Pendaftaran berhasil.\";\n    } else {\n        $error = \"Mohon isi formulir dengan format yang benar.\";\n    }\n}\n?>\n\n<form method=\"POST\" action=\"\">\n    <input type=\"text\" name=\"nama\" placeholder=\"Nama Lengkap\" required>\n    <input type=\"email\" name=\"email\" placeholder=\"Alamat Email\" required>\n    <button type=\"submit\">Kirim Data</button>\n</form>\n```\n"
      },
      {
          "id": "lesson-php-04",
          "courseId": "course-php-19",
          "slug": "manajemen-sesi-cookie-autentikasi",
          "title": "4. Manajemen State: Session & Cookie untuk Login Pengguna",
          "summary": "Pelajari cara kerja session_start(), penyimpanan sesi di server, dan cookie di peramban klien.",
          "order": 4,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 4. Manajemen State: Session & Cookie untuk Login Pengguna\n\nProtokol HTTP bersifat *stateless* (tidak mengingat interaksi sebelumnya). Untuk membuat sistem login, PHP menggunakan **Session** dan **Cookie**.\n\n---\n\n## Cara Kerja Session:\n1. Ketika `session_start()` dipanggil, PHP membuat ID sesi unik (misal: `PHPSESSID=abc123xyz`).\n2. ID sesi dikirim ke browser klien sebagai Cookie HTTP.\n3. Data sesi pengguna aktual tersimpan aman di server di dalam superglobal `$_SESSION`.\n\n---\n\n## Contoh Autentikasi Sesi Sederhana:\n\n```php\n<?php\n// login.php\nsession_start();\n\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    $email = $_POST[\"email\"];\n    $password = $_POST[\"password\"];\n\n    // Verifikasi kredensial (misal ke database)\n    if ($email === \"admin@kodeluma.dev\" && $password === \"rahasia123\") {\n        $_SESSION[\"user_id\"] = \"usr-01\";\n        $_SESSION[\"role\"] = \"admin\";\n        header(\"Location: dashboard.php\");\n        exit();\n    }\n}\n?>\n```\n\n```php\n<?php\n// dashboard.php\nsession_start();\n\n// Proteksi halaman privat:\nif (!isset($_SESSION[\"user_id\"])) {\n    header(\"Location: login.php\");\n    exit();\n}\n\necho \"Halo Admin, ID Anda: \" . $_SESSION[\"user_id\"];\n?>\n```\n"
      },
      {
          "id": "lesson-php-05",
          "courseId": "course-php-19",
          "slug": "koneksi-database-mysql-pdo",
          "title": "5. Koneksi Basis Data MySQL Modern dengan PDO (PHP Data Objects)",
          "summary": "Tinggalkan mysql_* lawas; gunakan PDO dengan Prepared Statements untuk keamanan 100% anti SQL Injection.",
          "order": 5,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 5. Koneksi Basis Data MySQL Modern dengan PDO (PHP Data Objects)\n\n**PDO** (*PHP Data Objects*) adalah antarmuka standar industri untuk berinteraksi dengan basis data relasional di PHP. PDO mendukung prepared statements yang secara otomatis memisahkan kode kueri dari parameter input pengguna.\n\n---\n\n## 1. Membuka Koneksi PDO dengan Try-Catch\n\n```php\n$dsn = \"mysql:host=localhost;dbname=kodeluma;charset=utf8mb4\";\n$username = \"root\";\n$password = \"\";\n\ntry {\n    $pdo = new PDO($dsn, $username, $password, [\n        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,\n        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,\n        PDO::ATTR_EMULATE_PREPARES   => false,\n    ]);\n} catch (PDOException $e) {\n    die(\"Koneksi basis data gagal: \" . $e->getMessage());\n}\n```\n\n---\n\n## 2. Prepared Statements Menggunakan Named Parameters\n\n```php\n// Mencegah SQL Injection dengan tanda titik dua (:parameter)\n$stmt = $pdo->prepare(\"SELECT id, nama, email FROM pengguna WHERE role = :role\");\n$stmt->execute(['role' => 'student']);\n\n$daftarSiswa = $stmt->fetchAll();\n\nforeach ($daftarSiswa as $siswa) {\n    echo \"<li>\" . htmlspecialchars($siswa['nama']) . \"</li>\";\n}\n```\n"
      },
      {
          "id": "lesson-php-06",
          "courseId": "course-php-19",
          "slug": "keamanan-web-sanitasi-csrf-xss",
          "title": "6. Keamanan Web PHP: Pencegahan XSS, CSRF, & Password Hashing",
          "summary": "Lindungi website dari serangan siber paling umum menggunakan password_hash, token CSRF, dan htmlspecialchars.",
          "order": 6,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 6. Keamanan Web PHP: Pencegahan XSS, CSRF, & Password Hashing\n\nSebagai bahasa yang mengeksekusi input pengguna secara langsung, memahami dasar-dasar pertahanan keamanan web adalah keharusan mutlak bagi pengembang PHP.\n\n---\n\n## 1. Password Hashing dengan `password_hash()` & `password_verify()`\n\nJangan pernah menyimpan password pengguna dalam bentuk plain text atau hash MD5/SHA1 yang rentan terhadap rainbow table!\n\n```php\n// Saat Pendaftaran: Buat hash aman menggunakan algoritma Argon2 / Bcrypt:\n$hashPassword = password_hash($inputPassword, PASSWORD_DEFAULT);\n\n// Saat Login: Verifikasi apakah password cocok dengan hash:\nif (password_verify($inputPassword, $hashPassword)) {\n    echo \"Password benar!\";\n} else {\n    echo \"Password salah!\";\n}\n```\n\n---\n\n## 2. Pencegahan Serangan Cross-Site Scripting (XSS)\n\nSetiap data string yang dicetak ke HTML wajib disanitasi dengan `htmlspecialchars()`:\n```php\necho htmlspecialchars($komentarPengguna, ENT_QUOTES, 'UTF-8');\n```\n"
      }
  ]
,
  "course-pg-20": [
      {
          "id": "lesson-pg-01",
          "courseId": "course-pg-20",
          "slug": "arsitektur-postgresql-instalasi-psql",
          "title": "1. Arsitektur PostgreSQL, Instalasi, & Navigasi CLI psql",
          "summary": "Pahami keunggulan PostgreSQL sebagai RDBMS objek-relasional dan navigasi terminal interaktif psql.",
          "order": 1,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 1. Arsitektur PostgreSQL, Instalasi, & Navigasi CLI psql\n\n**PostgreSQL** (sering disebut Postgres) adalah sistem manajemen basis data relasional objek (*Object-Relational Database Management System* / ORDBMS) yang terkenal dengan keandalan ekstrem, integritas data, dan kepatuhan penuh terhadap standar SQL.\n\n---\n\n## Fitur Unggulan PostgreSQL:\n- **Kepatuhan ACID Penuh**: Menjamin konsistensi data bahkan pada transaksi konkurensi masif.\n- **Dukungan Tipe Data Kompleks**: JSONB, Array, Range, Hstore, dan Geospasial (PostGIS).\n- **Extensibility**: Dukungan custom functions dalam berbagai bahasa (PL/pgSQL, Python, JavaScript).\n- **Concurrency MVCC**: *Multi-Version Concurrency Control* memungkinkan pembacaan data tanpa memblokir penulisan.\n\n---\n\n## Perintah Esensial CLI `psql`:\n```bash\n# Menghubungkan ke database:\npsql -U postgres -d kodeluma_db\n\n# Perintah meta psql (diawali backslash):\n\\l          # Menampilkan daftar semua basis data\n\\c db_nama  # Berpindah ke database lain\n\\dt         # Menampilkan daftar semua tabel di schema publik\n\\d nama_tbl # Menampilkan skema struktur kolom tabel\n\\q          # Keluar dari psql\n```\n"
      },
      {
          "id": "lesson-pg-02",
          "courseId": "course-pg-20",
          "slug": "tipe-data-lanjut-uuid-jsonb-arrays",
          "title": "2. Tipe Data Modern: UUID, JSONB, Array, & Timestamptz",
          "summary": "Simpan data semi-terstruktur langsung di dalam kolom tabel menggunakan JSONB dan tipe array.",
          "order": 2,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 2. Tipe Data Modern: UUID, JSONB, Array, & Timestamptz\n\nSalah satu alasan developer backend memilih PostgreSQL dibanding MySQL adalah dukungan tipe data modern yang terintegrasi langsung di tingkat engine.\n\n---\n\n## 1. Primary Key dengan UUID v4\n\nDaripada menggunakan angka auto-increment (1, 2, 3) yang mudah ditebak pengguna, gunakan **UUID**:\n\n```sql\nCREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";\n\nCREATE TABLE pengguna (\n    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),\n    nama VARCHAR(100) NOT NULL,\n    metadata JSONB DEFAULT '{}'::jsonb,\n    keahlian TEXT[] DEFAULT '{}',\n    dibuat_pada TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP\n);\n```\n\n---\n\n## 2. Manipulasi Data Semi-Terstruktur JSONB\n\nKolom JSONB dapat di-query langsung menggunakan operator panah (`->` dan `->>`):\n\n```sql\n-- Menyisipkan data dengan atribut dinamis:\nINSERT INTO pengguna (nama, metadata, keahlian)\nVALUES (\n    'Azzam', \n    '{\"tema\": \"gelap\", \"notifikasi\": {\"email\": true, \"sms\": false}}',\n    ARRAY['Node.js', 'PostgreSQL', 'Docker']\n);\n\n-- Mengambil nilai teks properti JSON:\nSELECT nama, metadata->'notifikasi'->>'email' AS email_aktif\nFROM pengguna\nWHERE metadata @> '{\"tema\": \"gelap\"}';\n```\n"
      },
      {
          "id": "lesson-pg-03",
          "courseId": "course-pg-20",
          "slug": "relasi-tabel-foreign-keys-constraints",
          "title": "3. Relasi Tabel, Foreign Keys, & Constraint Ketat",
          "summary": "Lindungi integritas relasi antar tabel dengan NOT NULL, UNIQUE, CHECK constraint, dan ON DELETE CASCADE.",
          "order": 3,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 3. Relasi Tabel, Foreign Keys, & Constraint Ketat\n\nKekuatan utama RDBMS adalah kemampuannya menegakkan aturan integritas data secara otomatis di tingkat basis data, bukan hanya mengandalkan kode aplikasi.\n\n---\n\n## Membuat Skema dengan Constraint Komprehensif\n\n```sql\nCREATE TABLE kategori (\n    id SERIAL PRIMARY KEY,\n    nama VARCHAR(50) NOT NULL UNIQUE\n);\n\nCREATE TABLE kursus (\n    id VARCHAR(50) PRIMARY KEY,\n    judul VARCHAR(150) NOT NULL,\n    kategori_id INT NOT NULL,\n    harga INT NOT NULL CHECK (harga >= 0),\n    level VARCHAR(20) NOT NULL CHECK (level IN ('pemula', 'menengah')),\n    CONSTRAINT fk_kursus_kategori \n        FOREIGN KEY (kategori_id) \n        REFERENCES kategori(id) \n        ON DELETE RESTRICT\n        ON UPDATE CASCADE\n);\n```\n\n### Aturan `ON DELETE`:\n- **`RESTRICT` / `NO ACTION`**: Menolak penghapusan baris kategori jika masih ada kursus yang merujuknya.\n- **`CASCADE`**: Jika kategori dihapus, seluruh kursus di dalamnya otomatis ikut terhapus.\n- **`SET NULL`**: Mengubah nilai foreign key menjadi NULL jika baris induk dihapus.\n"
      },
      {
          "id": "lesson-pg-04",
          "courseId": "course-pg-20",
          "slug": "transaksi-acid-dan-tingkat-isolasi",
          "title": "4. Transaksi ACID & Tingkat Isolasi (Isolation Levels)",
          "summary": "Pastikan transfer saldo dan data sensitif aman dengan BEGIN, COMMIT, ROLLBACK, dan isolasi Serializable.",
          "order": 4,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 4. Transaksi ACID & Tingkat Isolasi (Isolation Levels)\n\nDalam transaksi perbankan atau pembayaran, memotong saldo pengirim dan menambah saldo penerima **harus terjadi sebagai satu paket kesatuan**. Jika server mati di tengah proses, transaksi harus dibatalkan sepenuhnya.\n\n---\n\n## Blok Transaksi Manual\n\n```sql\nBEGIN;\n\n-- 1. Kurangi saldo pengirim\nUPDATE dompet_siswa \nSET saldo = saldo - 150000 \nWHERE user_id = 'user-01' AND saldo >= 150000;\n\n-- 2. Tambah saldo penerima\nUPDATE dompet_instruktur \nSET saldo = saldo + 150000 \nWHERE instruktur_id = 'inst-02';\n\n-- 3. Catat riwayat audit\nINSERT INTO log_transaksi (pengirim, penerima, jumlah) \nVALUES ('user-01', 'inst-02', 150000);\n\n-- Simpan permanen:\nCOMMIT;\n\n-- Jika terjadi kesalahan, batalkan semua dengan:\n-- ROLLBACK;\n```\n"
      },
      {
          "id": "lesson-pg-05",
          "courseId": "course-pg-20",
          "slug": "strategi-indexing-btree-gin-explain",
          "title": "5. Strategi Indexing: B-Tree, GIN, & EXPLAIN ANALYZE",
          "summary": "Pangkas waktu eksekusi kueri dari 2000ms menjadi 2ms dengan indeks B-Tree dan GIN untuk dokumen JSONB.",
          "order": 5,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 5. Strategi Indexing: B-Tree, GIN, & EXPLAIN ANALYZE\n\nTanpa index, PostgreSQL harus membaca setiap baris dalam tabel dari awal hingga akhir (*Sequential Scan*). Dengan index, pencarian langsung melompat ke posisi yang tepat.\n\n---\n\n## 1. Indeks B-Tree (Bawaan)\nSangat ideal untuk perbandingan kesetaraan (`=`) dan rentang (`<`, `>`, `BETWEEN`, `ORDER BY`):\n\n```sql\nCREATE INDEX idx_kursus_level_harga ON kursus(level, harga);\n```\n\n---\n\n## 2. Indeks GIN (Generalized Inverted Index) untuk JSONB\nB-Tree tidak bisa mengindeks isi di dalam JSONB. Di sinilah **GIN** digunakan:\n\n```sql\nCREATE INDEX idx_pengguna_metadata_gin ON pengguna USING GIN (metadata);\n```\n\n---\n\n## 3. Meneliti Performa dengan `EXPLAIN ANALYZE`\n\n```sql\nEXPLAIN ANALYZE \nSELECT * FROM kursus WHERE level = 'pemula' ORDER BY harga;\n```\n\nPerhatikan baris `Execution Time: 0.852 ms` dan `Index Scan`. Jika muncul `Seq Scan` pada tabel besar, buatlah indeks pada kolom yang relevan!\n"
      },
      {
          "id": "lesson-pg-06",
          "courseId": "course-pg-20",
          "slug": "backup-dump-koneksi-pooler-pgbouncer",
          "title": "6. Operasional Backend: Backup pg_dump, Pooling, & PgBouncer",
          "summary": "Pelajari cara mencadangkan database dengan pg_dump dan cegah kehabisan koneksi dengan connection pooler.",
          "order": 6,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 6. Operasional Backend: Backup pg_dump, Pooling, & PgBouncer\n\nDi lingkungan produksi berskala tinggi, membuka koneksi baru ke database PostgreSQL memakan memori sekitar 10MB per proses backend.\n\n---\n\n## 1. Mencadangkan Data dengan `pg_dump`\n\n```bash\n# Backup satu database ke file SQL terkompresi:\npg_dump -U postgres -d kodeluma_db -F c -b -v -f \"backup_kodeluma_$(date +%F).dump\"\n\n# Mengembalikan (Restore) database dari file dump:\npg_restore -U postgres -d kodeluma_db -v \"backup_kodeluma_2026-10-16.dump\"\n```\n\n---\n\n## 2. Mengapa Membutuhkan Connection Pooler (PgBouncer)?\n\nSetiap request di Node.js atau serverless function tidak boleh membuka koneksi langsung ke PostgreSQL tanpa batas. **Connection Pooling** (seperti PgBouncer atau modul bawaan `pg.Pool`):\n- Membuka sejumlah koneksi tetap (misal: 20 koneksi).\n- Meminjamkan koneksi tersebut ke ribuan request pengguna secara bergantian.\n- Menghemat RAM server hingga 90% dan mencegah database mengalami crash saat terjadi lonjakan trafik (*traffic spikes*).\n"
      }
  ]
,
  "course-redis-21": [
      {
          "id": "lesson-redis-01",
          "courseId": "course-redis-21",
          "slug": "pengenalan-redis-in-memory-datastore",
          "title": "1. Pengenalan Redis: Mengapa In-Memory Mengubah Segalanya?",
          "summary": "Ketahui perbedaan latensi RAM vs Disk, use-case utama Redis, dan arsitektur single-threaded non-blocking.",
          "order": 1,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 1. Pengenalan Redis: Mengapa In-Memory Mengubah Segalanya?\n\n**Redis** (*Remote Dictionary Server*) adalah penyimpanan struktur data dalam memori (*in-memory data structure store*) sumber terbuka tercepat di dunia. Redis umum digunakan sebagai basis data berkecepatan tinggi, cache terdistribusi, session broker, dan streaming message broker.\n\n---\n\n## Perbandingan Latensi: RAM vs NVMe SSD\n\n| Media Penyimpanan | Waktu Akses Rata-rata | Kecepatan Relatif |\n| :--- | :--- | :--- |\n| **RAM Komputer (Redis)** | **~100 nanodetik (0.0001 ms)** | 🚀 **1.000x Lebih Cepat** |\n| **NVMe SSD (Postgres/MySQL)** | ~100 mikrodetik (0.1 ms) | Cepat, tapi terhambat bus I/O |\n| **Harddisk Mekanis (HDD)** | ~10 milidetik (10 ms) | Sangat lambat untuk konkurensi |\n\nKarena seluruh data Redis disimpan langsung di memori RAM, Redis dapat memproses **lebih dari 100.000 permintaan per detik** pada single core CPU dengan latensi di bawah 1 milidetik!\n\n---\n\n## Perintah Dasar CLI `redis-cli`:\n```bash\n# Menghubungkan ke server Redis:\nredis-cli\n\n# Perintah PING - PONG:\nPING\n# Output: PONG\n\n# Menyimpan dan membaca nilai string sederhana:\nSET nama_situs \"KodeLuma\"\nGET nama_situs\n# Output: \"KodeLuma\"\n```\n"
      },
      {
          "id": "lesson-redis-02",
          "courseId": "course-redis-21",
          "slug": "struktur-data-strings-hashes-lists",
          "title": "2. Struktur Data Inti: Strings, Hashes, & Lists",
          "summary": "Simpan data JSON, kamus objek, dan antrean pesan FIFO dengan perintah MSET, HSET, HGETALL, dan LPUSH.",
          "order": 2,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 2. Struktur Data Inti: Strings, Hashes, & Lists\n\nRedis bukan sekadar key-value store biasa yang hanya menyimpan teks; Redis mendukung beragam struktur data tingkat lanjut.\n\n---\n\n## 1. Strings (Teks, Angka, atau Binary JSON)\nStrings dapat menampung hingga 512MB data per kunci dan mendukung operasi atomik numerik:\n\n```bash\nSET hitungan_kunjungan 100\nINCR hitungan_kunjungan       # Menjadi 101 secara atomik (aman dari race condition)\nINCRBY hitungan_kunjungan 10   # Menjadi 111\n```\n\n---\n\n## 2. Hashes (Representasi Objek & Record Pengguna)\nHashes sangat hemat memori untuk memetakan field ke value (mirip objek JSON):\n\n```bash\n# Menyimpan profil pengguna:\nHSET user:101 nama \"Azzam\" email \"azzam@kodeluma.dev\" peran \"admin\" saldo 1500000\n\n# Mengambil satu field:\nHGET user:101 email\n\n# Mengambil semua field sekaligus:\nHGETALL user:101\n```\n\n---\n\n## 3. Lists (Antrean Pesan & Riwayat Aktivitas)\nList diimplementasikan sebagai Linked List, sangat cepat untuk operasi antrean FIFO (*First-In-First-Out*):\n\n```bash\n# Masukkan pesan ke antrean:\nLPUSH antrean_email \"user1@mail.com\" \"user2@mail.com\"\n\n# Ambil dan proses pesan dari antrean:\nRPOP antrean_email\n```\n"
      },
      {
          "id": "lesson-redis-03",
          "courseId": "course-redis-21",
          "slug": "sets-sorted-sets-leaderboard-ranking",
          "title": "3. Sets & Sorted Sets (ZSET): Membangun Leaderboard Real-Time",
          "summary": "Kuasai operasi himpunan unik (SADD, SISMEMBER) dan sistem ranking instan dengan skor numerik via ZADD.",
          "order": 3,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 3. Sets & Sorted Sets (ZSET): Membangun Leaderboard Real-Time\n\nDua struktur data paling ampuh di Redis untuk aplikasi modern adalah **Sets** dan **Sorted Sets**.\n\n---\n\n## 1. Sets (Himpunan Anggota Unik)\nSets memastikan tidak ada elemen duplikat dan menyediakan operasi himpunan (irisan, gabungan, selisih):\n\n```bash\n# Tag kursus unik:\nSADD kursus:tag \"javascript\" \"backend\" \"nodejs\"\nSADD kursus:tag \"backend\" # Diabaikan otomatis karena sudah ada\n\n# Cek keanggotaan dalam O(1):\nSISMEMBER kursus:tag \"nodejs\" # 1 (true)\n```\n\n---\n\n## 2. Sorted Sets (ZSET) untuk Sistem Ranking Leaderboard\n\nSetiap anggota memiliki skor numerik (*score*). Redis menjaga urutan anggota secara otomatis setiap kali skor bertambah:\n\n```bash\n# Format: ZADD key score member\nZADD leaderboard_xp 1500 \"user_azzam\"\nZADD leaderboard_xp 1200 \"user_budi\"\nZADD leaderboard_xp 1850 \"user_citra\"\n\n# Mengambil Top 3 Skor Tertinggi:\nZREVRANGE leaderboard_xp 0 2 WITHSCORES\n# Output:\n# 1) \"user_citra\" 1850\n# 2) \"user_azzam\" 1500\n# 3) \"user_budi\"  1200\n\n# Mengetahui peringkat siswa (0-indexed):\nZREVRANK leaderboard_xp \"user_azzam\" # Peringkat 1\n```\n"
      },
      {
          "id": "lesson-redis-04",
          "courseId": "course-redis-21",
          "slug": "ttl-cache-invalidation-strategies",
          "title": "4. Manajemen TTL (Time-To-Live) & Strategi Cache Invalidation",
          "summary": "Atur masa kedaluwarsa kunci dengan EXPIRE dan pelajari pola Cache-Aside vs Write-Through.",
          "order": 4,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 4. Manajemen TTL (Time-To-Live) & Strategi Cache Invalidation\n\nTantangan terbesar dalam arsitektur caching adalah memastikan data cache tidak basi (*stale data*) ketika data di database relasional berubah.\n\n---\n\n## Menetapkan Batas Waktu Otomatis (TTL)\n\n```bash\n# Simpan data cuaca dan atur kedaluwarsa setelah 60 detik:\nSET cuaca:jakarta \"Cerah 30C\" EX 60\n\n# Cek sisa waktu aktif:\nTTL cuaca:jakarta # Misal: 45 (tersisa 45 detik)\n```\n\n---\n\n## Pola Cache-Aside (Lazy Loading) Standar Industri:\n\n```javascript\nasync function ambilDataKursus(courseId) {\n  const cacheKey = `cache:course:${courseId}`;\n\n  // 1. Coba baca dari Redis terlebih dahulu (Cache Hit)\n  const cached = await redis.get(cacheKey);\n  if (cached) {\n    return JSON.parse(cached);\n  }\n\n  // 2. Jika tidak ada di Redis (Cache Miss), baca dari PostgreSQL\n  const course = await postgres.query('SELECT * FROM courses WHERE id = $1', [courseId]);\n\n  // 3. Simpan hasilnya ke Redis dengan TTL 1 Jam agar query berikutnya cepat\n  await redis.set(cacheKey, JSON.stringify(course), 'EX', 3600);\n\n  return course;\n}\n```\n"
      },
      {
          "id": "lesson-redis-05",
          "courseId": "course-redis-21",
          "slug": "api-rate-limiter-anti-abuse",
          "title": "5. Membangun API Rate Limiter Anti-Spam dengan Redis",
          "summary": "Lindungi endpoint publik dari serangan brute-force dan DoS menggunakan pola sliding window.",
          "order": 5,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 5. Membangun API Rate Limiter Anti-Spam dengan Redis\n\nTanpa rate limiter, peretas dapat mengirim jutaan request ke endpoint `/api/login` atau `/api/register` untuk menjatuhkan server Anda.\n\n---\n\n## Algoritma Fixed Window Rate Limiting Sederhana:\n\n```javascript\nasync function rateLimiterMiddleware(req, res, next) {\n  const ipPengguna = req.ip;\n  const kunci = `ratelimit:${ipPengguna}`;\n\n  // Naikkan hitungan request\n  const jumlahRequest = await redis.incr(kunci);\n\n  // Jika ini request pertama di periode ini, set TTL 60 detik\n  if (jumlahRequest === 1) {\n    await redis.expire(kunci, 60);\n  }\n\n  // Batas maksimal: 100 request per menit\n  if (jumlahRequest > 100) {\n    return res.status(429).json({\n      sukses: false,\n      pesan: 'Terlalu banyak permintaan. Silakan coba lagi dalam 1 menit.'\n    });\n  }\n\n  next();\n}\n```\n"
      },
      {
          "id": "lesson-redis-06",
          "courseId": "course-redis-21",
          "slug": "pub-sub-messaging-realtime",
          "title": "6. Pola Pub/Sub: Pesan Asinkron & Fitur Real-Time",
          "summary": "Bangun arsitektur pesan broadcast instan antar instance backend dengan SUBSCRIBE dan PUBLISH.",
          "order": 6,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 6. Pola Pub/Sub: Pesan Asinkron & Fitur Real-Time\n\n**Pub/Sub** (*Publish/Subscribe*) adalah pola arsitektur perpesanan di mana pengirim pesan (*publisher*) tidak mengirim pesan langsung ke penerima tertentu, melainkan mempublikasikannya ke saluran (*channel*). Siapa pun yang mendengarkan saluran tersebut (*subscriber*) akan langsung menerima pesan secara instan.\n\n---\n\n## Contoh Penggunaan: Broadcast Notifikasi Multi-Server\n\n```bash\n# Di Server A (Subscriber):\nSUBSCRIBE notifikasi_kodeluma\n\n# Di Server B (Publisher):\nPUBLISH notifikasi_kodeluma \"Peringatan: Pemeliharaan server dijadwalkan pukul 00:00\"\n```\n\n### Keunggulan Arsitektur Pub/Sub:\n1. **Decoupling**: Layanan backend tidak perlu saling mengenal alamat IP satu sama lain.\n2. **Skalabilitas**: Jika Anda memiliki 10 instance backend di balik Load Balancer, satu pesan Redis dapat disiarkan ke seluruh 10 instance sekaligus dalam hitungan mikrodetik!\n"
      }
  ]
,
  "course-linux-22": [
      {
          "id": "lesson-linux-01",
          "courseId": "course-linux-22",
          "slug": "filosofi-unix-hierarki-filesystem-fhs",
          "title": "1. Filosofi Unix & Hierarki Filesystem Linux (FHS)",
          "summary": "Pahami prinsip 'Everything is a File' dan fungsi folder inti /etc, /var, /bin, /home, dan /tmp.",
          "order": 1,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 1. Filosofi Unix & Hierarki Filesystem Linux (FHS)\n\n**Linux** adalah sistem operasi open source yang menjadi tulang punggung komputasi awan (*cloud computing*), server internet, superkomputer, dan kontainer Docker di seluruh dunia.\n\n---\n\n## Filosofi Utama Unix:\n1. **Everything is a file**: Dokumen, folder, port jaringan, harddisk, bahkan memori RAM direpresentasikan sebagai berkas (*file descriptor*).\n2. **Kecil, Modular, & Terfokus**: Setiap program CLI dirancang untuk melakukan satu tugas secara sempurna, lalu digabungkan dengan program lain melalui pipa (*pipes* `|`).\n\n---\n\n## Struktur Direktori Standar (Filesystem Hierarchy Standard):\n\n| Direktori | Fungsi & Isi Berkas |\n| :--- | :--- |\n| **`/bin` & `/usr/bin`** | Program eksekutabel sistem dan aplikasi (ls, grep, node, python) |\n| **`/etc`** | Berkas konfigurasi sistem global (nginx.conf, redis.conf) |\n| **`/var/log`** | Berkas log aktivitas sistem dan web server |\n| **`/home`** | Direktori personal pengguna reguler |\n| **`/tmp`** | Berkas sementara yang otomatis dibersihkan saat reboot |\n| **`/root`** | Direktori home milik superuser (root) |\n"
      },
      {
          "id": "lesson-linux-02",
          "courseId": "course-linux-22",
          "slug": "perintah-esensial-cli-navigasi-file",
          "title": "2. Perintah Esensial CLI: Navigasi, Manipulasi, & Inspeksi",
          "summary": "Kuasai perintah wajib terminal: pwd, cd, ls -la, mkdir -p, cp, mv, rm, cat, less, dan head.",
          "order": 2,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 2. Perintah Esensial CLI: Navigasi, Manipulasi, & Inspeksi\n\nTanpa GUI (antarmuka grafis), efisiensi Anda mengoperasikan server Linux ditentukan oleh pemahaman perintah dasar terminal.\n\n---\n\n## 1. Navigasi Direktori\n```bash\npwd              # Print Working Directory: Mengetahui lokasi folder saat ini\ncd /var/www/html # Berpindah ke direktori tertentu\ncd ~             # Kembali ke direktori home pengguna\ncd ..            # Naik satu tingkat ke folder induk\nls -la           # List berkas lengkap dengan rincian ukuran, tanggal, dan file tersembunyi (.)\n```\n\n---\n\n## 2. Membuat, Menyalin, & Memindahkan Berkas\n```bash\nmkdir -p proyek/src/lib # Membuat folder bersarang sekaligus\ntouch config.env        # Membuat berkas kosong baru\ncp file.txt backup.txt  # Menyalin berkas\nmv file.txt /tmp/       # Memindahkan berkas (atau mengganti nama berkas)\nrm -rf folder_sampah    # Menghapus folder beserta seluruh isinya secara rekursif\n```\n\n---\n\n## 3. Membaca Isi Berkas Cepat\n```bash\ncat server.log        # Mencetak seluruh isi file ke layar\nhead -n 20 error.log  # Membaca 20 baris pertama\ntail -n 20 error.log  # Membaca 20 baris terakhir\ntail -f access.log    # Memantau penambahan baris log secara real-time (live streaming)\n```\n"
      },
      {
          "id": "lesson-linux-03",
          "courseId": "course-linux-22",
          "slug": "hak-akses-izin-berkas-chmod-chown",
          "title": "3. Hak Akses & Izin Berkas: chmod, chown, & Notasi Oktal",
          "summary": "Kendalikan keamanan berkas dengan izin Read, Write, Execute (rwx) untuk User, Group, dan Others.",
          "order": 3,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 3. Hak Akses & Izin Berkas: chmod, chown, & Notasi Oktal\n\nLinux adalah sistem operasi multi-user sejati. Setiap berkas dan folder memiliki izin akses yang ketat demi mencegah akses tidak sah.\n\n---\n\n## Membaca Output `ls -l`\n\n```text\n-rwxr-xr--  1 ubuntu devteam  4096 Oct 16 19:00 deploy.sh\n```\nStruktur 10 karakter pertama:\n1. `-`: Tipe (berkas biasa `-` atau direktori `d`).\n2. `rwx`: Hak akses **User / Pemilik** (Read, Write, Execute).\n3. `r-x`: Hak akses **Group** (Read, Execute).\n4. `r--`: Hak akses **Others / Publik** (Hanya Read).\n\n---\n\n## Mengubah Hak Akses dengan Nilai Oktal (`chmod`):\n- **Read (r)** = 4\n- **Write (w)** = 2\n- **Execute (x)** = 1\n\n```bash\n# 755: Pemilik bebas (7), Grup & Lainnya hanya baca & eksekusi (5)\nchmod 755 deploy.sh\n\n# 600: Hanya pemilik yang bisa baca & tulis (Sangat disarankan untuk SSH Key!)\nchmod 600 ~/.ssh/id_rsa\n\n# Mengubah pemilik dan grup berkas:\nsudo chown -R www-data:www-data /var/www/html\n```\n"
      },
      {
          "id": "lesson-linux-04",
          "courseId": "course-linux-22",
          "slug": "pipa-i-o-redirection-grep-find",
          "title": "4. Aliran Data: Pipes (|), Redirection (< > >>), & Filter grep",
          "summary": "Gabungkan perintah kecil menjadi alat analitik bertenaga dengan pipeline data dan pencarian regex.",
          "order": 4,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 4. Aliran Data: Pipes (|), Redirection (< > >>), & Filter grep\n\nSalah satu kekuatan super terminal Linux adalah kemampuan menyalurkan output dari satu program sebagai input program berikutnya melalui pipa (**Pipe** `|`).\n\n---\n\n## 1. I/O Redirection (`>` dan `>>`)\n- **`>` (Overwrite)**: Menimpa isi berkas dengan output perintah.\n- **`>>` (Append)**: Menambahkan output ke baris paling bawah tanpa menghapus data lama.\n\n```bash\necho \"Koneksi berhasil\" > status.log\necho \"Log kedua\" >> status.log\n```\n\n---\n\n## 2. Pipeline dengan `grep` dan `wc`\n\n```bash\n# Hitung berapa banyak request error 500 di file log:\ncat access.log | grep \"HTTP/1.1 500\" | wc -l\n\n# Cari proses Node.js yang sedang berjalan dan ambil PID-nya:\nps aux | grep \"node\" | grep -v \"grep\"\n\n# Cari berkas berukuran lebih dari 100MB di disk:\nfind /var -type f -size +100M\n```\n"
      },
      {
          "id": "lesson-linux-05",
          "courseId": "course-linux-22",
          "slug": "manajemen-proses-systemd-systemctl-journalctl",
          "title": "5. Manajemen Proses Backend: systemd, systemctl, & journalctl",
          "summary": "Jalankan API backend sebagai background daemon otomatis yang restart sendiri saat crash via systemd service.",
          "order": 5,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 5. Manajemen Proses Backend: systemd, systemctl, & journalctl\n\nDi server produksi, Anda tidak bisa membiarkan aplikasi backend berjalan di jendela terminal aktif yang akan mati jika Anda logout. Backend harus dikelola oleh **systemd**.\n\n---\n\n## Membuat Service File: `/etc/systemd/system/kodeluma.service`\n\n```ini\n[Unit]\nDescription=KodeLuma Backend Node.js API Service\nAfter=network.target redis.service\n\n[Service]\nType=simple\nUser=ubuntu\nWorkingDirectory=/var/www/kodeluma\nExecStart=/usr/bin/node src/server.js\nRestart=always\nRestartSec=5\nEnvironment=NODE_ENV=production PORT=3000\n\n[Install]\nWantedBy=multi-user.target\n```\n\n---\n\n## Mengendalikan Service dengan `systemctl`:\n\n```bash\nsudo systemctl daemon-reload           # Muat ulang konfigurasi service\nsudo systemctl start kodeluma          # Nyalakan service\nsudo systemctl enable kodeluma         # Otomatis menyala saat server reboot\nsudo systemctl status kodeluma         # Periksa status kesehatan service\nsudo journalctl -u kodeluma -f         # Pantau output log console secara live\n```\n"
      },
      {
          "id": "lesson-linux-06",
          "courseId": "course-linux-22",
          "slug": "dasar-otomasi-bash-scripting-crontab",
          "title": "6. Otomasi Server: Dasar Bash Scripting & Penjadwalan Cron",
          "summary": "Tulis skrip otomasi .sh dengan variabel, kondisi if-else, argumen, dan jadwalkan via crontab -e.",
          "order": 6,
          "isRequired": true,
          "status": "published",
          "bodyMarkdown": "# 6. Otomasi Server: Dasar Bash Scripting & Penjadwalan Cron\n\n**Bash Scripting** memungkinkan Anda merangkai puluhan perintah terminal ke dalam satu file berkas executable untuk tugas otomasi rutin.\n\n---\n\n## Contoh Skrip Pembersihan Log & Backup:\n\n```bash\n#!/bin/bash\n# Simpan sebagai: backup.sh\n\nset -e # Berhenti jika ada perintah yang gagal\n\nTANGGAL=$(date +%Y-%m-%d_%H%M%S)\nFOLDER_BACKUP=\"/backups\"\nTARGET=\"/var/www/kodeluma/data\"\n\nmkdir -p $FOLDER_BACKUP\n\necho \"[INFO] Memulai pencadangan berkas pada $TANGGAL...\"\ntar -czf \"$FOLDER_BACKUP/data_$TANGGAL.tar.gz\" \"$TARGET\"\n\necho \"[SUCCESS] Pencadangan berhasil dibuat di $FOLDER_BACKUP/data_$TANGGAL.tar.gz\"\n```\n\nBeri izin eksekusi:\n```bash\nchmod +x backup.sh\n./backup.sh\n```\n\n---\n\n## Menjadwalkan Otomatis dengan `crontab -e`\n\nFormat sintaks cron: `menit jam tgl_bln bln hari_dlm_minggu perintah`\n\n```text\n# Jalankan skrip backup setiap hari tepat pukul 02:00 dini hari:\n0 2 * * * /home/ubuntu/backup.sh >> /var/log/backup.log 2>&1\n```\n"
      }
  ]
};

export const MOCK_QUIZZES: Record<string, Quiz> = {
  "course-html-01": {
    "id": "quiz-html-01",
    "courseId": "course-html-01",
    "title": "Kuis Evaluasi Pemahaman HTML Dasar",
    "passScorePercent": 70,
    "questions": [
      {
        "id": "q1",
        "question": "Tag mana yang tepat digunakan untuk membuat tautan (link) ke halaman lain?",
        "options": [
          {
            "id": "a",
            "text": "<link>"
          },
          {
            "id": "b",
            "text": "<a>"
          },
          {
            "id": "c",
            "text": "<href>"
          },
          {
            "id": "d",
            "text": "<nav>"
          }
        ],
        "correctOptionId": "b",
        "explanation": "Tag <a> (anchor) dengan atribut href digunakan untuk membuat hyperlink antar halaman web."
      },
      {
        "id": "q2",
        "question": "Apa fungsi atribut alt pada tag <img> dalam HTML?",
        "options": [
          {
            "id": "a",
            "text": "Menentukan ukuran tinggi gambar"
          },
          {
            "id": "b",
            "text": "Membuat animasi berputar pada gambar"
          },
          {
            "id": "c",
            "text": "Menyediakan teks alternatif jika gambar gagal dimuat dan membantu aksesibilitas"
          },
          {
            "id": "d",
            "text": "Mengubah format file gambar secara otomatis"
          }
        ],
        "correctOptionId": "c",
        "explanation": "Atribut alt menyediakan deskripsi teks alternatif untuk screen reader dan saat gambar tidak bisa dibuka."
      },
      {
        "id": "q3",
        "question": "Elemen heading mana yang memiliki tingkat hierarki paling tinggi dalam satu halaman?",
        "options": [
          {
            "id": "a",
            "text": "<head>"
          },
          {
            "id": "b",
            "text": "<header>"
          },
          {
            "id": "c",
            "text": "<h6>"
          },
          {
            "id": "d",
            "text": "<h1>"
          }
        ],
        "correctOptionId": "d",
        "explanation": "Tag <h1> merepresentasikan judul utama dokumen web dengan tingkat hierarki tertinggi."
      }
    ]
  },
  "course-css-02": {
    "id": "quiz-css-02",
    "courseId": "course-css-02",
    "title": "Kuis Evaluasi Pemahaman CSS Fundamental",
    "passScorePercent": 70,
    "questions": [
      {
        "id": "q1",
        "question": "Properti CSS mana yang digunakan untuk mengubah warna latar belakang sebuah elemen?",
        "options": [
          {
            "id": "a",
            "text": "color"
          },
          {
            "id": "b",
            "text": "background-color"
          },
          {
            "id": "c",
            "text": "bgcolor"
          },
          {
            "id": "d",
            "text": "canvas-color"
          }
        ],
        "correctOptionId": "b",
        "explanation": "Properti background-color mengatur warna latar belakang permukaan elemen."
      },
      {
        "id": "q2",
        "question": "Dalam konsep CSS Box Model, ruang transparan di luar garis border elemen disebut...",
        "options": [
          {
            "id": "a",
            "text": "Padding"
          },
          {
            "id": "b",
            "text": "Content"
          },
          {
            "id": "c",
            "text": "Margin"
          },
          {
            "id": "d",
            "text": "Outline"
          }
        ],
        "correctOptionId": "c",
        "explanation": "Margin adalah jarak terluar yang memisahkan elemen dengan elemen lain di sekitarnya."
      },
      {
        "id": "q3",
        "question": "Nilai display apa yang digunakan untuk membuat kontainer tata letak satu dimensi modern?",
        "options": [
          {
            "id": "a",
            "text": "block"
          },
          {
            "id": "b",
            "text": "inline"
          },
          {
            "id": "c",
            "text": "flex"
          },
          {
            "id": "d",
            "text": "table"
          }
        ],
        "correctOptionId": "c",
        "explanation": "display: flex mengaktifkan Flexible Box Layout Module untuk tata letak responsif 1D."
      }
    ]
  },
  "course-js-03": {
    "id": "quiz-js-03",
    "courseId": "course-js-03",
    "title": "Kuis Evaluasi Pemahaman JavaScript Pemula",
    "passScorePercent": 70,
    "questions": [
      {
        "id": "q1",
        "question": "Keyword mana yang paling tepat untuk mendeklarasikan variabel yang nilainya tidak boleh diubah (konstan)?",
        "options": [
          {
            "id": "a",
            "text": "var"
          },
          {
            "id": "b",
            "text": "let"
          },
          {
            "id": "c",
            "text": "const"
          },
          {
            "id": "d",
            "text": "static"
          }
        ],
        "correctOptionId": "c",
        "explanation": "const digunakan untuk mendeklarasikan referensi variabel konstan yang tidak dapat di-reassign."
      },
      {
        "id": "q2",
        "question": "Apa tipe data hasil evaluasi dari operasi typeof [1, 2, 3] di JavaScript?",
        "options": [
          {
            "id": "a",
            "text": "array"
          },
          {
            "id": "b",
            "text": "object"
          },
          {
            "id": "c",
            "text": "list"
          },
          {
            "id": "d",
            "text": "collection"
          }
        ],
        "correctOptionId": "b",
        "explanation": "Di JavaScript standar, Array adalah turunan khusus dari tipe Object sehingga typeof mengembalikan object."
      },
      {
        "id": "q3",
        "question": "Metode mana yang digunakan untuk memilih elemen HTML pertama berdasarkan selector CSS di DOM?",
        "options": [
          {
            "id": "a",
            "text": "document.findSelector()"
          },
          {
            "id": "b",
            "text": "document.querySelector()"
          },
          {
            "id": "c",
            "text": "document.getElement()"
          },
          {
            "id": "d",
            "text": "document.locate()"
          }
        ],
        "correctOptionId": "b",
        "explanation": "document.querySelector() mengembalikan elemen pertama yang cocok dengan CSS selector yang diberikan."
      }
    ]
  },
  "course-py-04": {
    "id": "quiz-py-04",
    "courseId": "course-py-04",
    "title": "Kuis Evaluasi Pemahaman Python Dasar",
    "passScorePercent": 70,
    "questions": [
      {
        "id": "q-py-1",
        "question": "Ekstensi file standar yang digunakan untuk menyimpan program Python adalah...",
        "options": [
          {
            "id": "opt1",
            "text": ".pt"
          },
          {
            "id": "opt2",
            "text": ".py"
          },
          {
            "id": "opt3",
            "text": ".pyt"
          },
          {
            "id": "opt4",
            "text": ".python"
          }
        ],
        "correctOptionId": "opt2",
        "explanation": "File skrip kode Python selalu disimpan dengan ekstensi .py."
      },
      {
        "id": "q-py-2",
        "question": "Sintaks apa yang digunakan oleh Python untuk membatasi sebuah blok kode (seperti di dalam if atau fungsi)?",
        "options": [
          {
            "id": "opt1",
            "text": "Tanda kurung kurawal { }"
          },
          {
            "id": "opt2",
            "text": "Tanda kurung biasa ( )"
          },
          {
            "id": "opt3",
            "text": "Indentasi spasi atau tab"
          },
          {
            "id": "opt4",
            "text": "Keyword begin dan end"
          }
        ],
        "correctOptionId": "opt3",
        "explanation": "Python menggunakan indentasi (spasi/tab) yang konsisten sebagai penanda blok kode."
      },
      {
        "id": "q-py-3",
        "question": "Kata kunci (keyword) apa yang digunakan untuk mendefinisikan sebuah fungsi kustom di Python?",
        "options": [
          {
            "id": "opt1",
            "text": "function"
          },
          {
            "id": "opt2",
            "text": "func"
          },
          {
            "id": "opt3",
            "text": "def"
          },
          {
            "id": "opt4",
            "text": "define"
          }
        ],
        "correctOptionId": "opt3",
        "explanation": "Keyword def (kependekan dari define) digunakan untuk membuat fungsi di Python."
      },
      {
        "id": "q-py-4",
        "question": "Manakah dari struktur data koleksi berikut yang bersifat Immutable (tidak dapat diubah setelah dibuat)?",
        "options": [
          {
            "id": "opt1",
            "text": "List"
          },
          {
            "id": "opt2",
            "text": "Tuple"
          },
          {
            "id": "opt3",
            "text": "Dictionary"
          },
          {
            "id": "opt4",
            "text": "Set"
          }
        ],
        "correctOptionId": "opt2",
        "explanation": "Tuple bersifat immutable, sehingga elemen di dalamnya tidak bisa ditambah atau diganti setelah inisialisasi."
      },
      {
        "id": "q-py-5",
        "question": "Konstruksi apa yang direkomendasikan untuk membuka file agar tertutup secara otomatis setelah selesai?",
        "options": [
          {
            "id": "opt1",
            "text": "with open(...) as f:"
          },
          {
            "id": "opt2",
            "text": "try open(...) as f:"
          },
          {
            "id": "opt3",
            "text": "open(...).autoClose()"
          },
          {
            "id": "opt4",
            "text": "file.openAndClose(...)"
          }
        ],
        "correctOptionId": "opt1",
        "explanation": "Context manager with open(...) menjamin file tertutup otomatis bahkan ketika terjadi eksepsi."
      }
    ]
  },
  "course-ts-05": {
    "id": "quiz-ts-05",
    "courseId": "course-ts-05",
    "title": "Kuis Evaluasi Pemahaman TypeScript Pemula",
    "passScorePercent": 70,
    "questions": [
      {
        "id": "q-ts-1",
        "question": "Kompilator bawaan resmi yang digunakan untuk mentranspilasi TypeScript ke JavaScript adalah...",
        "options": [
          {
            "id": "opt1",
            "text": "node"
          },
          {
            "id": "opt2",
            "text": "tsc"
          },
          {
            "id": "opt3",
            "text": "ts-engine"
          },
          {
            "id": "opt4",
            "text": "typeserver"
          }
        ],
        "correctOptionId": "opt2",
        "explanation": "tsc (TypeScript Compiler) adalah CLI resmi untuk memeriksa tipe dan menghasilkan file JavaScript."
      },
      {
        "id": "q-ts-2",
        "question": "Manakah tipe khusus di TypeScript yang lebih aman daripada any karena mewajibkan pengecekan tipe sebelum digunakan?",
        "options": [
          {
            "id": "opt1",
            "text": "unknown"
          },
          {
            "id": "opt2",
            "text": "never"
          },
          {
            "id": "opt3",
            "text": "void"
          },
          {
            "id": "opt4",
            "text": "undefined"
          }
        ],
        "correctOptionId": "opt1",
        "explanation": "Tipe unknown mewajibkan developer melakukan type narrowing sebelum mengakses properti atau metodenya."
      },
      {
        "id": "q-ts-3",
        "question": "Karakter atau simbol apa yang digunakan untuk menandai bahwa suatu properti bersifat opsional pada interface?",
        "options": [
          {
            "id": "opt1",
            "text": "!"
          },
          {
            "id": "opt2",
            "text": "?"
          },
          {
            "id": "opt3",
            "text": "*"
          },
          {
            "id": "opt4",
            "text": "#"
          }
        ],
        "correctOptionId": "opt2",
        "explanation": "Tanda tanya (?) di belakang nama properti menandakan nilai boleh berupa undefined."
      },
      {
        "id": "q-ts-4",
        "question": "Fitur apa di TypeScript yang memungkinkan pembuatan fungsi yang bekerja dengan tipe dinamis tanpa kehilangan type safety menggunakan notasi <T>?",
        "options": [
          {
            "id": "opt1",
            "text": "Inheritance"
          },
          {
            "id": "opt2",
            "text": "Generics"
          },
          {
            "id": "opt3",
            "text": "Polymorphism"
          },
          {
            "id": "opt4",
            "text": "Enums"
          }
        ],
        "correctOptionId": "opt2",
        "explanation": "Generics menggunakan type parameter <T> untuk mempertahankan informasi tipe secara fleksibel."
      },
      {
        "id": "q-ts-5",
        "question": "Apa tipe data nilai balik (return type) dari fungsi yang tidak mengembalikan nilai apa pun?",
        "options": [
          {
            "id": "opt1",
            "text": "null"
          },
          {
            "id": "opt2",
            "text": "empty"
          },
          {
            "id": "opt3",
            "text": "void"
          },
          {
            "id": "opt4",
            "text": "blank"
          }
        ],
        "correctOptionId": "opt3",
        "explanation": "Fungsi yang hanya menjalankan efek samping tanpa me-return nilai memiliki return type void."
      }
    ]
  },
  "course-java-06": {
    "id": "quiz-java-06",
    "courseId": "course-java-06",
    "title": "Kuis Evaluasi Pemahaman Java Dasar",
    "passScorePercent": 70,
    "questions": [
      {
        "id": "q-java-1",
        "question": "Komponen apakah yang bertanggung jawab mengeksekusi bytecode (.class) di atas sistem operasi?",
        "options": [
          {
            "id": "opt1",
            "text": "JDK"
          },
          {
            "id": "opt2",
            "text": "JVM (Java Virtual Machine)"
          },
          {
            "id": "opt3",
            "text": "Javac"
          },
          {
            "id": "opt4",
            "text": "JAR"
          }
        ],
        "correctOptionId": "opt2",
        "explanation": "JVM (Java Virtual Machine) membaca dan mengeksekusi bytecode Java menjadi instruksi mesin asli."
      },
      {
        "id": "q-java-2",
        "question": "Manakah tanda tangan method (method signature) yang tepat untuk titik awal eksekusi program Java?",
        "options": [
          {
            "id": "opt1",
            "text": "public static void main(String[] args)"
          },
          {
            "id": "opt2",
            "text": "function main(args: string[])"
          },
          {
            "id": "opt3",
            "text": "def main(args):"
          },
          {
            "id": "opt4",
            "text": "public void startProgram()"
          }
        ],
        "correctOptionId": "opt1",
        "explanation": "public static void main(String[] args) adalah method wajib yang dicari JVM saat runtime."
      },
      {
        "id": "q-java-3",
        "question": "Keyword apakah yang digunakan untuk mewarisi sifat dari suatu class induk di Java?",
        "options": [
          {
            "id": "opt1",
            "text": "implements"
          },
          {
            "id": "opt2",
            "text": "extends"
          },
          {
            "id": "opt3",
            "text": "inherits"
          },
          {
            "id": "opt4",
            "text": "super"
          }
        ],
        "correctOptionId": "opt2",
        "explanation": "Keyword extends digunakan untuk pewarisan class, sedangkan implements digunakan untuk interface."
      },
      {
        "id": "q-java-4",
        "question": "Manakah struktur koleksi di Java yang ukurannya dapat bertambah dan berkurang secara dinamis?",
        "options": [
          {
            "id": "opt1",
            "text": "Array biasa int[]"
          },
          {
            "id": "opt2",
            "text": "ArrayList"
          },
          {
            "id": "opt3",
            "text": "enum"
          },
          {
            "id": "opt4",
            "text": "static buffer"
          }
        ],
        "correctOptionId": "opt2",
        "explanation": "ArrayList menyediakan struktur array dinamis yang dapat ditambah (add) dan dihapus (remove) kapan saja."
      },
      {
        "id": "q-java-5",
        "question": "Keyword apakah yang digunakan untuk membuat sebuah instance (objek) baru dari sebuah Class?",
        "options": [
          {
            "id": "opt1",
            "text": "create"
          },
          {
            "id": "opt2",
            "text": "init"
          },
          {
            "id": "opt3",
            "text": "new"
          },
          {
            "id": "opt4",
            "text": "make"
          }
        ],
        "correctOptionId": "opt3",
        "explanation": "Keyword new digunakan untuk mengalokasikan memori dan memanggil konstruktor class."
      }
    ]
  },
  "course-cpp-07": {
    "id": "quiz-cpp-07",
    "courseId": "course-cpp-07",
    "title": "Kuis Evaluasi Pemahaman C++ Dasar",
    "passScorePercent": 70,
    "questions": [
      {
        "id": "q-cpp-1",
        "question": "Header standar apakah yang wajib disertakan untuk melakukan operasi stream input/output di C++?",
        "options": [
          {
            "id": "opt1",
            "text": "<stdio.h>"
          },
          {
            "id": "opt2",
            "text": "<iostream>"
          },
          {
            "id": "opt3",
            "text": "<stream.h>"
          },
          {
            "id": "opt4",
            "text": "<conio.h>"
          }
        ],
        "correctOptionId": "opt2",
        "explanation": "#include <iostream> menyediakan objek std::cout dan std::cin."
      },
      {
        "id": "q-cpp-2",
        "question": "Operator apakah yang digunakan untuk mencetak aliran data ke std::cout?",
        "options": [
          {
            "id": "opt1",
            "text": ">>"
          },
          {
            "id": "opt2",
            "text": "<<"
          },
          {
            "id": "opt3",
            "text": "::"
          },
          {
            "id": "opt4",
            "text": "->"
          }
        ],
        "correctOptionId": "opt2",
        "explanation": "Operator insertion << digunakan bersama std::cout."
      },
      {
        "id": "q-cpp-3",
        "question": "Simbol apakah yang digunakan untuk membuat parameter fungsi menjadi pass-by-reference di C++?",
        "options": [
          {
            "id": "opt1",
            "text": "&"
          },
          {
            "id": "opt2",
            "text": "*"
          },
          {
            "id": "opt3",
            "text": "%"
          },
          {
            "id": "opt4",
            "text": "$"
          }
        ],
        "correctOptionId": "opt1",
        "explanation": "Simbol ampersand (&) pada tipe parameter menandakan referensi ke variabel asli."
      },
      {
        "id": "q-cpp-4",
        "question": "Container dinamis standar dari C++ STL yang ukurannya dapat membesar otomatis dengan push_back adalah...",
        "options": [
          {
            "id": "opt1",
            "text": "std::array"
          },
          {
            "id": "opt2",
            "text": "std::vector"
          },
          {
            "id": "opt3",
            "text": "std::pointer"
          },
          {
            "id": "opt4",
            "text": "std::string_list"
          }
        ],
        "correctOptionId": "opt2",
        "explanation": "std::vector adalah array dinamis standar di C++ Standard Template Library."
      },
      {
        "id": "q-cpp-5",
        "question": "Apakah yang disimpan oleh sebuah variabel pointer di C++?",
        "options": [
          {
            "id": "opt1",
            "text": "Nilai string teks"
          },
          {
            "id": "opt2",
            "text": "Alamat memori komputer"
          },
          {
            "id": "opt3",
            "text": "Ukuran file"
          },
          {
            "id": "opt4",
            "text": "Waktu eksekusi CPU"
          }
        ],
        "correctOptionId": "opt2",
        "explanation": "Pointer secara spesifik menyimpan alamat memori dari lokasi variabel lain."
      }
    ]
  },
  "course-sql-08": {
    "id": "quiz-sql-08",
    "courseId": "course-sql-08",
    "title": "Kuis Evaluasi Pemahaman SQL Dasar",
    "passScorePercent": 70,
    "questions": [
      {
        "id": "q-sql-1",
        "question": "Klausa SQL apakah yang digunakan untuk memfilter baris data berdasarkan kriteria logika tertentu?",
        "options": [
          {
            "id": "opt1",
            "text": "ORDER BY"
          },
          {
            "id": "opt2",
            "text": "WHERE"
          },
          {
            "id": "opt3",
            "text": "GROUP BY"
          },
          {
            "id": "opt4",
            "text": "LIMIT"
          }
        ],
        "correctOptionId": "opt2",
        "explanation": "Klausa WHERE digunakan untuk menyaring baris sebelum data ditampilkan atau dimanipulasi."
      },
      {
        "id": "q-sql-2",
        "question": "Fungsi agregasi SQL manakah yang digunakan untuk menghitung total akumulasi nilai angka pada suatu kolom?",
        "options": [
          {
            "id": "opt1",
            "text": "COUNT()"
          },
          {
            "id": "opt2",
            "text": "SUM()"
          },
          {
            "id": "opt3",
            "text": "AVG()"
          },
          {
            "id": "opt4",
            "text": "TOTAL()"
          }
        ],
        "correctOptionId": "opt2",
        "explanation": "SUM() menjumlahkan seluruh nilai numerik pada kolom yang ditentukan."
      },
      {
        "id": "q-sql-3",
        "question": "Perintah apakah yang digunakan untuk menghapus baris data dari dalam tabel secara permanen?",
        "options": [
          {
            "id": "opt1",
            "text": "REMOVE FROM"
          },
          {
            "id": "opt2",
            "text": "DELETE FROM"
          },
          {
            "id": "opt3",
            "text": "DROP TABLE"
          },
          {
            "id": "opt4",
            "text": "CLEAR FROM"
          }
        ],
        "correctOptionId": "opt2",
        "explanation": "DELETE FROM menghapus baris data, sedangkan DROP TABLE menghapus seluruh struktur tabel."
      },
      {
        "id": "q-sql-4",
        "question": "Tipe JOIN apakah yang mengembalikan semua baris dari tabel sebelah kiri meskipun tidak memiliki pasangan kecocokan di tabel kanan?",
        "options": [
          {
            "id": "opt1",
            "text": "INNER JOIN"
          },
          {
            "id": "opt2",
            "text": "LEFT JOIN"
          },
          {
            "id": "opt3",
            "text": "CROSS JOIN"
          },
          {
            "id": "opt4",
            "text": "RIGHT JOIN"
          }
        ],
        "correctOptionId": "opt2",
        "explanation": "LEFT JOIN menjamin seluruh baris tabel kiri dipertahankan dan diisi NULL untuk tabel kanan jika tidak cocok."
      },
      {
        "id": "q-sql-5",
        "question": "Klausa apakah yang digunakan untuk memfilter hasil agregasi setelah baris dikelompokkan dengan GROUP BY?",
        "options": [
          {
            "id": "opt1",
            "text": "WHERE"
          },
          {
            "id": "opt2",
            "text": "HAVING"
          },
          {
            "id": "opt3",
            "text": "FILTER"
          },
          {
            "id": "opt4",
            "text": "CHECK"
          }
        ],
        "correctOptionId": "opt2",
        "explanation": "HAVING secara khusus mengevaluasi kondisi pada fungsi agregasi setelah GROUP BY."
      }
    ]
  }
,
  "course-js-int-09": {
      "id": "quiz-js-int-09",
      "courseId": "course-js-int-09",
      "title": "Kuis Evaluasi JavaScript Lanjutan & Asynchronous",
      "passScorePercent": 70,
      "questions": [
          {
              "id": "q1",
              "question": "Antrian manakah yang diprioritaskan lebih dulu oleh Event Loop di antara Microtask dan Macrotask?",
              "options": [
                  {
                      "id": "a",
                      "text": "Macrotask Queue selalu diproses lebih awal"
                  },
                  {
                      "id": "b",
                      "text": "Microtask Queue (Promise callbacks, queueMicrotask) diproses sebelum Macrotask berikutnya"
                  },
                  {
                      "id": "c",
                      "text": "Keduanya dieksekusi bersamaan secara multithreading"
                  },
                  {
                      "id": "d",
                      "text": "Tergantung kecepatan memori browser"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "Setiap kali Call Stack kosong, JavaScript engine akan mengosongkan seluruh Microtask queue sebelum mengambil tugas baru dari Macrotask queue (seperti setTimeout)."
          },
          {
              "id": "q2",
              "question": "Metode Promise manakah yang menunggu SEMUA promise selesai (baik resolved maupun rejected) tanpa gagal lebih awal?",
              "options": [
                  {
                      "id": "a",
                      "text": "Promise.all()"
                  },
                  {
                      "id": "b",
                      "text": "Promise.race()"
                  },
                  {
                      "id": "c",
                      "text": "Promise.allSettled()"
                  },
                  {
                      "id": "d",
                      "text": "Promise.any()"
                  }
              ],
              "correctOptionId": "c",
              "explanation": "Promise.allSettled() mengembalikan array status untuk setiap promise tanpa menghentikan eksekusi jika salah satu mengalami penolakan (rejected)."
          },
          {
              "id": "q3",
              "question": "Apa fungsi dari closure dalam JavaScript?",
              "options": [
                  {
                      "id": "a",
                      "text": "Mempercepat kompilasi file script menjadi bytecode"
                  },
                  {
                      "id": "b",
                      "text": "Mengizinkan fungsi dalam mengakses variabel dari scope luar tempat fungsi tersebut diciptakan"
                  },
                  {
                      "id": "c",
                      "text": "Menghapus variabel otomatis dari memori saat fungsi selesai"
                  },
                  {
                      "id": "d",
                      "text": "Mengubah fungsi synchronous menjadi asynchronous"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "Closure adalah kombinasi antara sebuah fungsi dan lingkungan leksikal (lexical environment) tempat fungsi tersebut dideklarasikan."
          }
      ]
  }
,
  "course-ts-int-10": {
      "id": "quiz-ts-int-10",
      "courseId": "course-ts-int-10",
      "title": "Kuis Evaluasi TypeScript Lanjutan & Generics",
      "passScorePercent": 70,
      "questions": [
          {
              "id": "q1",
              "question": "Kata kunci manakah yang digunakan untuk membatasi tipe generic T agar memiliki properti tertentu?",
              "options": [
                  {
                      "id": "a",
                      "text": "<T implements SomeType>"
                  },
                  {
                      "id": "b",
                      "text": "<T extends SomeType>"
                  },
                  {
                      "id": "c",
                      "text": "<T typeof SomeType>"
                  },
                  {
                      "id": "d",
                      "text": "<T as SomeType>"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "Generic constraint menggunakan kata kunci 'extends', contoh: <T extends { id: string }>."
          },
          {
              "id": "q2",
              "question": "Utility type manakah yang mengambil sebagian properti dari interface yang sudah ada?",
              "options": [
                  {
                      "id": "a",
                      "text": "Pick<T, K>"
                  },
                  {
                      "id": "b",
                      "text": "Omit<T, K>"
                  },
                  {
                      "id": "c",
                      "text": "Partial<T>"
                  },
                  {
                      "id": "d",
                      "text": "Record<K, T>"
                  }
              ],
              "correctOptionId": "a",
              "explanation": "Pick<T, K> memilih sekumpulan kunci spesifik K dari tipe T untuk membentuk tipe baru."
          },
          {
              "id": "q3",
              "question": "Apa yang membedakan Discriminated Union dari union type biasa?",
              "options": [
                  {
                      "id": "a",
                      "text": "Discriminated Union hanya bisa digunakan pada class, bukan interface"
                  },
                  {
                      "id": "b",
                      "text": "Memiliki properti pembeda (discriminant) bertipe literal unik pada setiap varian"
                  },
                  {
                      "id": "c",
                      "text": "Mengabaikan pemeriksaan strict null checks"
                  },
                  {
                      "id": "d",
                      "text": "Otomatis di-convert menjadi JSON saat runtime"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "Discriminated Union memanfaatkan properti bersama bertipe literal (misal: 'kind' atau 'status') untuk melakukan type narrowing secara otomatis."
          }
      ]
  }
,
  "course-css-int-11": {
      "id": "quiz-css-int-11",
      "courseId": "course-css-int-11",
      "title": "Kuis Evaluasi CSS Lanjutan & Animasi",
      "passScorePercent": 70,
      "questions": [
          {
              "id": "q1",
              "question": "Properti CSS apa yang direkomendasikan untuk animasi performa tinggi 60fps tanpa memicu reflow layout?",
              "options": [
                  {
                      "id": "a",
                      "text": "width dan height"
                  },
                  {
                      "id": "b",
                      "text": "top dan left"
                  },
                  {
                      "id": "c",
                      "text": "transform dan opacity"
                  },
                  {
                      "id": "d",
                      "text": "margin dan padding"
                  }
              ],
              "correctOptionId": "c",
              "explanation": "Transform dan opacity diproses langsung oleh GPU (compositor layer) tanpa memicu layout recalculation atau repainting yang berat."
          },
          {
              "id": "q2",
              "question": "Fungsi matematika CSS apa yang menetapkan nilai target dinamis di antara batas minimum dan maksimum?",
              "options": [
                  {
                      "id": "a",
                      "text": "calc()"
                  },
                  {
                      "id": "b",
                      "text": "clamp()"
                  },
                  {
                      "id": "c",
                      "text": "minmax()"
                  },
                  {
                      "id": "d",
                      "text": "bound()"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "Fungsi clamp(min, val, max) membatasi nilai fleksibel di antara nilai batas bawah dan batas atas yang ditentukan."
          },
          {
              "id": "q3",
              "question": "Apa peran pseudo-class :has() dalam CSS modern?",
              "options": [
                  {
                      "id": "a",
                      "text": "Sebagai selector induk (parent selector) berdasarkan kondisi elemen anak"
                  },
                  {
                      "id": "b",
                      "text": "Memeriksa apakah browser mendukung animasi WebGL"
                  },
                  {
                      "id": "c",
                      "text": "Menghapus margin bawaan pada tag heading"
                  },
                  {
                      "id": "d",
                      "text": "Memilih elemen yang memiliki fokus keyboard"
                  }
              ],
              "correctOptionId": "a",
              "explanation": ":has() bertindak sebagai relational atau parent selector yang memilih elemen induk bila di dalamnya terdapat anak yang cocok dengan selector tertentu."
          }
      ]
  }
,
  "course-py-int-12": {
      "id": "quiz-py-int-12",
      "courseId": "course-py-int-12",
      "title": "Kuis Evaluasi Python OOP",
      "passScorePercent": 70,
      "questions": [
          {
              "id": "q1",
              "question": "Decorator bawaan mana yang digunakan untuk mengubah method menjadi atribut yang dapat dibaca tanpa tanda kurung ()?",
              "options": [
                  {
                      "id": "a",
                      "text": "@staticmethod"
                  },
                  {
                      "id": "b",
                      "text": "@classmethod"
                  },
                  {
                      "id": "c",
                      "text": "@property"
                  },
                  {
                      "id": "d",
                      "text": "@getter"
                  }
              ],
              "correctOptionId": "c",
              "explanation": "@property mendefinisikan method getter sehingga dapat diakses seperti atribut biasa (obj.attr) namun tetap menjalankan logika."
          },
          {
              "id": "q2",
              "question": "Kata kunci apa yang digunakan dalam fungsi generator untuk mengembalikan nilai secara bertahap tanpa menghentikan fungsi selamanya?",
              "options": [
                  {
                      "id": "a",
                      "text": "return"
                  },
                  {
                      "id": "b",
                      "text": "yield"
                  },
                  {
                      "id": "c",
                      "text": "pause"
                  },
                  {
                      "id": "d",
                      "text": "await"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "Kata kunci yield menjeda eksekusi fungsi generator dan mengembalikan nilai ke pemanggil, menyisakan status untuk iterasi berikutnya."
          },
          {
              "id": "q3",
              "question": "Method dunder apa yang dipanggil saat fungsi print(obj) atau str(obj) dijalankan pada objek Python?",
              "options": [
                  {
                      "id": "a",
                      "text": "__repr__"
                  },
                  {
                      "id": "b",
                      "text": "__str__"
                  },
                  {
                      "id": "c",
                      "text": "__format__"
                  },
                  {
                      "id": "d",
                      "text": "__display__"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "__str__ menghasilkan representasi teks informal yang mudah dipahami manusia saat objek dicetak menggunakan print()."
          }
      ]
  }
,
  "course-sql-int-13": {
      "id": "quiz-sql-int-13",
      "courseId": "course-sql-int-13",
      "title": "Kuis Evaluasi SQL Lanjutan & Relasi",
      "passScorePercent": 70,
      "questions": [
          {
              "id": "q1",
              "question": "Klausul apa yang wajib digunakan bersama Window Function seperti ROW_NUMBER() atau RANK()?",
              "options": [
                  {
                      "id": "a",
                      "text": "GROUP BY"
                  },
                  {
                      "id": "b",
                      "text": "OVER (PARTITION BY ... ORDER BY ...)"
                  },
                  {
                      "id": "c",
                      "text": "HAVING"
                  },
                  {
                      "id": "d",
                      "text": "WHERE EXISTS"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "Window Function memerlukan klausul OVER() untuk menentukan partisi dan urutan jendela kalkulasi baris data."
          },
          {
              "id": "q2",
              "question": "Apa tujuan utama dari proses normalisasi database relasional (1NF, 2NF, 3NF)?",
              "options": [
                  {
                      "id": "a",
                      "text": "Meningkatkan ukuran file database agar kueri lebih cepat"
                  },
                  {
                      "id": "b",
                      "text": "Menghilangkan redundansi data dan mencegah anomali manipulasi data"
                  },
                  {
                      "id": "c",
                      "text": "Mengganti seluruh kunci asing (foreign key) dengan string JSON"
                  },
                  {
                      "id": "d",
                      "text": "Menghindari penggunaan klausa WHERE pada kueri SELECT"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "Normalisasi meminimalkan duplikasi data dan melindungi konsistensi data dari anomali insert, update, dan delete."
          },
          {
              "id": "q3",
              "question": "Window function manakah yang digunakan untuk melihat nilai kolom pada baris sebelumnya?",
              "options": [
                  {
                      "id": "a",
                      "text": "LEAD()"
                  },
                  {
                      "id": "b",
                      "text": "LAG()"
                  },
                  {
                      "id": "c",
                      "text": "PREVIOUS()"
                  },
                  {
                      "id": "d",
                      "text": "BACK()"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "LAG(kolom, offset) mengintip nilai dari baris sebelumnya dalam jendela data analitik, sangat berguna untuk analisis tren MoM."
          }
      ]
  }
,
  "course-node-14": {
      "id": "quiz-node-14",
      "courseId": "course-node-14",
      "title": "Kuis Evaluasi Node.js & Backend",
      "passScorePercent": 70,
      "questions": [
          {
              "id": "q1",
              "question": "Model eksekusi seperti apa yang digunakan oleh Node.js untuk menangani operasi I/O?",
              "options": [
                  {
                      "id": "a",
                      "text": "Multi-threaded blocking I/O"
                  },
                  {
                      "id": "b",
                      "text": "Single-threaded non-blocking I/O berbasis Event Loop"
                  },
                  {
                      "id": "c",
                      "text": "Fork process per connection"
                  },
                  {
                      "id": "d",
                      "text": "Thread pooling eksklusif tanpa event loop"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "Node.js memanfaatkan arsitektur single-threaded event loop dengan non-blocking I/O yang efisien untuk konkurensi tinggi."
          },
          {
              "id": "q2",
              "question": "Fungsi apa yang wajib dipanggil dalam Express middleware agar request dapat diteruskan ke handler berikutnya?",
              "options": [
                  {
                      "id": "a",
                      "text": "res.continue()"
                  },
                  {
                      "id": "b",
                      "text": "next()"
                  },
                  {
                      "id": "c",
                      "text": "req.proceed()"
                  },
                  {
                      "id": "d",
                      "text": "return true"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "Fungsi next() memberi sinyal pada Express router untuk memanggil middleware atau route handler berikutnya."
          },
          {
              "id": "q3",
              "question": "Modul inti Node.js bawaan mana yang digunakan untuk membaca dan menulis file di sistem operasi?",
              "options": [
                  {
                      "id": "a",
                      "text": "http"
                  },
                  {
                      "id": "b",
                      "text": "fs (File System)"
                  },
                  {
                      "id": "c",
                      "text": "path"
                  },
                  {
                      "id": "d",
                      "text": "os"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "Modul 'fs' (fs/promises) menyediakan API untuk operasi file sistem sinkron dan asinkron."
          }
      ]
  }
,
  "course-react-15": {
      "id": "quiz-react-15",
      "courseId": "course-react-15",
      "title": "Kuis Evaluasi React & Komponen",
      "passScorePercent": 70,
      "questions": [
          {
              "id": "q1",
              "question": "Hook dasar React apa yang digunakan untuk menyimpan dan memperbarui data lokal yang memicu render ulang komponen?",
              "options": [
                  {
                      "id": "a",
                      "text": "useData"
                  },
                  {
                      "id": "b",
                      "text": "useState"
                  },
                  {
                      "id": "c",
                      "text": "useContext"
                  },
                  {
                      "id": "d",
                      "text": "useMemo"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "useState mendeklarasikan variabel state lokal dan fungsi updater untuk mengubah nilainya."
          },
          {
              "id": "q2",
              "question": "Jika array dependensi pada useEffect dibiarkan kosong ([]), kapan callback effect akan dijalankan?",
              "options": [
                  {
                      "id": "a",
                      "text": "Pada setiap render ulang komponen"
                  },
                  {
                      "id": "b",
                      "text": "Hanya satu kali setelah komponen pertama kali dipasang (mounted)"
                  },
                  {
                      "id": "c",
                      "text": "Tidak pernah dijalankan"
                  },
                  {
                      "id": "d",
                      "text": "Hanya sebelum komponen di-unmount"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "Array dependensi kosong [] menandakan efek hanya berjalan sekali pada saat inisialisasi awal (mount)."
          },
          {
              "id": "q3",
              "question": "Mengapa properti 'key' unik wajib diberikan saat merender daftar elemen anak di React?",
              "options": [
                  {
                      "id": "a",
                      "text": "Untuk menerapkan styling CSS secara otomatis"
                  },
                  {
                      "id": "b",
                      "text": "Membantu algoritma rekonsiliasi React mengidentifikasi elemen mana yang ditambah, dihapus, atau diubah posisinya"
                  },
                  {
                      "id": "c",
                      "text": "Mencegah duplikasi data di memori Redux"
                  },
                  {
                      "id": "d",
                      "text": "Sebagai ID HTML standar di browser"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "Atribut key unik memungkinkan React mengoptimalkan update Virtual DOM tanpa me-render ulang seluruh daftar."
          }
      ]
  }
,
  "course-go-16": {
      "id": "quiz-go-16",
      "courseId": "course-go-16",
      "title": "Kuis Evaluasi Go (Golang) Dasar",
      "passScorePercent": 70,
      "questions": [
          {
              "id": "q1",
              "question": "Kata kunci apa yang digunakan untuk mengeksekusi fungsi secara asinkron di dalam Goroutine ringan?",
              "options": [
                  {
                      "id": "a",
                      "text": "async"
                  },
                  {
                      "id": "b",
                      "text": "go"
                  },
                  {
                      "id": "c",
                      "text": "thread"
                  },
                  {
                      "id": "d",
                      "text": "spawn"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "Kata kunci 'go' (contoh: go lakukanSesuatu()) meluncurkan fungsi sebagai Goroutine yang sangat ringan (hanya beberapa kilobyte)."
          },
          {
              "id": "q2",
              "question": "Bagaimana cara penanganan error yang idiomatis di bahasa Go?",
              "options": [
                  {
                      "id": "a",
                      "text": "Menggunakan blok try...catch"
                  },
                  {
                      "id": "b",
                      "text": "Fungsi mengembalikan nilai error sebagai nilai return terakhir (val, err := func()) dan memeriksa if err != nil"
                  },
                  {
                      "id": "c",
                      "text": "Menggunakan panic() untuk setiap kegagalan kecil"
                  },
                  {
                      "id": "d",
                      "text": "Mengecek global errno"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "Go memperlakukan error sebagai nilai biasa (error values) yang eksplisit dikembalikan dan diperiksa secara berkala."
          },
          {
              "id": "q3",
              "question": "Mekanisme apa yang digunakan untuk mengirim dan menerima data antar Goroutine secara aman?",
              "options": [
                  {
                      "id": "a",
                      "text": "Global Shared Memory tanpa lock"
                  },
                  {
                      "id": "b",
                      "text": "Channel (chan)"
                  },
                  {
                      "id": "c",
                      "text": "Cookie session"
                  },
                  {
                      "id": "d",
                      "text": "Websocket internal"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "Channel adalah pipa komunikasi antar Goroutine, mengikuti moto Go: 'Do not communicate by sharing memory; instead, share memory by communicating.'"
          }
      ]
  }
,
  "course-git-17": {
      "id": "quiz-git-17",
      "courseId": "course-git-17",
      "title": "Kuis Evaluasi Git & GitHub",
      "passScorePercent": 70,
      "questions": [
          {
              "id": "q1",
              "question": "Perintah Git mana yang digunakan untuk memindahkan perubahan file dari Working Directory ke Staging Area?",
              "options": [
                  {
                      "id": "a",
                      "text": "git commit"
                  },
                  {
                      "id": "b",
                      "text": "git add"
                  },
                  {
                      "id": "c",
                      "text": "git push"
                  },
                  {
                      "id": "d",
                      "text": "git checkout"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "git add (misal: git add . atau git add nama_file) mendaftarkan perubahan ke dalam staging area untuk commit berikutnya."
          },
          {
              "id": "q2",
              "question": "Perintah apa yang paling aman untuk membuat sekaligus berpindah ke cabang (branch) baru?",
              "options": [
                  {
                      "id": "a",
                      "text": "git branch baru"
                  },
                  {
                      "id": "b",
                      "text": "git switch -c <nama-branch> atau git checkout -b <nama-branch>"
                  },
                  {
                      "id": "c",
                      "text": "git merge baru"
                  },
                  {
                      "id": "d",
                      "text": "git stash apply"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "git switch -c atau git checkout -b membuat cabang baru dan langsung mengalihkan HEAD ke cabang tersebut."
          },
          {
              "id": "q3",
              "question": "Apa tujuan utama dari Pull Request (PR) di GitHub?",
              "options": [
                  {
                      "id": "a",
                      "text": "Mengunduh file zip repositori ke komputer lokal"
                  },
                  {
                      "id": "b",
                      "text": "Mengajukan peninjauan kode (code review) dan diskusi sebelum menggabungkan cabang ke cabang utama"
                  },
                  {
                      "id": "c",
                      "text": "Menghapus commit yang keliru secara permanen"
                  },
                  {
                      "id": "d",
                      "text": "Memperbarui dependensi npm otomatis"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "Pull Request adalah mekanisme kolaboratif di mana kontributor mengusulkan perubahan untuk diperiksa dan disetujui tim sebelum di-merge."
          }
      ]
  }
,
  "course-docker-18": {
      "id": "quiz-docker-18",
      "courseId": "course-docker-18",
      "title": "Kuis Evaluasi Docker & Kontainerisasi",
      "passScorePercent": 70,
      "questions": [
          {
              "id": "q1",
              "question": "Instruksi apa di dalam Dockerfile yang digunakan untuk menentukan image dasar (base image)?",
              "options": [
                  {
                      "id": "a",
                      "text": "BASE"
                  },
                  {
                      "id": "b",
                      "text": "FROM"
                  },
                  {
                      "id": "c",
                      "text": "IMAGE"
                  },
                  {
                      "id": "d",
                      "text": "START"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "FROM mendefinisikan parent/base image (contoh: FROM node:20-alpine) tempat layer image berikutnya akan dibangun."
          },
          {
              "id": "q2",
              "question": "Bagaimana cara memetakan port 3000 di dalam container ke port 8080 pada komputer host?",
              "options": [
                  {
                      "id": "a",
                      "text": "-p 3000:8080"
                  },
                  {
                      "id": "b",
                      "text": "-p 8080:3000"
                  },
                  {
                      "id": "c",
                      "text": "--port 3000"
                  },
                  {
                      "id": "d",
                      "text": "--expose 8080"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "Format opsi port adalah -p <host_port>:<container_port>, sehingga -p 8080:3000 memetakan host 8080 ke container 3000."
          },
          {
              "id": "q3",
              "question": "Apa fungsi dari Docker Volume?",
              "options": [
                  {
                      "id": "a",
                      "text": "Meningkatkan volume suara sistem operasi container"
                  },
                  {
                      "id": "b",
                      "text": "Menyimpan data persisten di luar siklus hidup container agar tidak hilang saat container dihapus"
                  },
                  {
                      "id": "c",
                      "text": "Mempercepat kompresi gambar image"
                  },
                  {
                      "id": "d",
                      "text": "Mengatur bandwidth jaringan internet"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "Docker Volume adalah mekanisme penyimpanan persisten terkelola yang independen dari siklus hidup container."
          }
      ]
  }
,
  "course-php-19": {
      "id": "quiz-php-19",
      "courseId": "course-php-19",
      "title": "Kuis Evaluasi PHP Dasar",
      "passScorePercent": 70,
      "questions": [
          {
              "id": "q1",
              "question": "Semua variabel dalam bahasa PHP wajib diawali dengan simbol apa?",
              "options": [
                  {
                      "id": "a",
                      "text": "#"
                  },
                  {
                      "id": "b",
                      "text": "$"
                  },
                  {
                      "id": "c",
                      "text": "@"
                  },
                  {
                      "id": "d",
                      "text": "&"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "Di PHP, identifier variabel selalu dimulai dengan tanda dollar ($), contoh: $namaPengguna."
          },
          {
              "id": "q2",
              "question": "Superglobal array mana yang digunakan untuk mengumpulkan data formulir dengan metode pengiriman rahasia tanpa tampak di URL?",
              "options": [
                  {
                      "id": "a",
                      "text": "$_GET"
                  },
                  {
                      "id": "b",
                      "text": "$_POST"
                  },
                  {
                      "id": "c",
                      "text": "$_SERVER"
                  },
                  {
                      "id": "d",
                      "text": "$_ENV"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "$_POST menampung data yang dikirim melalui HTTP POST di body request, cocok untuk password dan form data penting."
          },
          {
              "id": "q3",
              "question": "Library ekstensi database bawaan mana yang sangat direkomendasikan di PHP modern karena mendukung Prepared Statements untuk mencegah SQL Injection?",
              "options": [
                  {
                      "id": "a",
                      "text": "mysql_query (legacy)"
                  },
                  {
                      "id": "b",
                      "text": "PDO (PHP Data Objects)"
                  },
                  {
                      "id": "c",
                      "text": "db_connect"
                  },
                  {
                      "id": "d",
                      "text": "sqlite_raw"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "PDO menyediakan antarmuka akses database konsisten dengan fitur parameter binding / prepared statements yang aman dari SQL Injection."
          }
      ]
  }
,
  "course-pg-20": {
      "id": "quiz-pg-20",
      "courseId": "course-pg-20",
      "title": "Kuis Evaluasi PostgreSQL & RDBMS",
      "passScorePercent": 70,
      "questions": [
          {
              "id": "q1",
              "question": "Tipe data canggih bawaan PostgreSQL apa yang menyimpan dokumen JSON semi-terstruktur dalam format binary terindeks?",
              "options": [
                  {
                      "id": "a",
                      "text": "VARCHAR"
                  },
                  {
                      "id": "b",
                      "text": "JSONB"
                  },
                  {
                      "id": "c",
                      "text": "TEXT_BLOB"
                  },
                  {
                      "id": "d",
                      "text": "XML"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "JSONB menyimpan data JSON dalam format terurai biner yang mendukung indexing GIN cepat dan operasi pencarian kunci instan."
          },
          {
              "id": "q2",
              "question": "Perintah apa yang digunakan untuk memeriksa jalur rencana eksekusi dan estimasi biaya (cost) suatu kueri di PostgreSQL?",
              "options": [
                  {
                      "id": "a",
                      "text": "CHECK QUERY"
                  },
                  {
                      "id": "b",
                      "text": "EXPLAIN ANALYZE"
                  },
                  {
                      "id": "c",
                      "text": "SHOW PLAN"
                  },
                  {
                      "id": "d",
                      "text": "OPTIMIZE"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "EXPLAIN ANALYZE menjalankan kueri dan menampilkan detail eksekusi nyata, termasuk index scan vs sequential scan."
          },
          {
              "id": "q3",
              "question": "Apa arti sifat Atomicity dalam prinsip ACID transaksi database?",
              "options": [
                  {
                      "id": "a",
                      "text": "Data disimpan dalam ukuran atom terkecil"
                  },
                  {
                      "id": "b",
                      "text": "Semua operasi dalam satu transaksi berhasil sepenuhnya, atau dibatalkan total jika salah satu gagal"
                  },
                  {
                      "id": "c",
                      "text": "Database hanya bisa diakses oleh satu pengguna"
                  },
                  {
                      "id": "d",
                      "text": "Tabel otomatis memiliki partisi atom"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "Atomicity memastikan transaksi bersifat 'semua atau tidak sama sekali' (all-or-nothing), mencegah data setengah tersimpan saat sistem crash."
          }
      ]
  }
,
  "course-redis-21": {
      "id": "quiz-redis-21",
      "courseId": "course-redis-21",
      "title": "Kuis Evaluasi Redis & Caching",
      "passScorePercent": 70,
      "questions": [
          {
              "id": "q1",
              "question": "Struktur data Redis mana yang menyimpan elemen unik berpasangan dengan nilai numerik 'score' untuk keperluan leaderboard dan ranking?",
              "options": [
                  {
                      "id": "a",
                      "text": "Strings"
                  },
                  {
                      "id": "b",
                      "text": "Sorted Sets (ZSET)"
                  },
                  {
                      "id": "c",
                      "text": "Hashes"
                  },
                  {
                      "id": "d",
                      "text": "Lists"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "Sorted Sets (ZSET) mengaitkan setiap member unik dengan score numerik, memungkinkan operasi rentang skor instan via ZREVRANGE."
          },
          {
              "id": "q2",
              "question": "Perintah Redis apa yang digunakan untuk mengatur masa aktif kunci agar kedaluwarsa otomatis setelah sejumlah detik?",
              "options": [
                  {
                      "id": "a",
                      "text": "EXPIRE key seconds"
                  },
                  {
                      "id": "b",
                      "text": "TIMEOUT key seconds"
                  },
                  {
                      "id": "c",
                      "text": "KILL key seconds"
                  },
                  {
                      "id": "d",
                      "text": "DELETE AFTER key seconds"
                  }
              ],
              "correctOptionId": "a",
              "explanation": "EXPIRE menetapkan batas waktu TTL (Time-To-Live) pada kunci dalam satuan detik."
          },
          {
              "id": "q3",
              "question": "Mengapa Redis jauh lebih cepat daripada database disk konvensional?",
              "options": [
                  {
                      "id": "a",
                      "text": "Redis tidak menggunakan memori komputer"
                  },
                  {
                      "id": "b",
                      "text": "Redis beroperasi langsung di dalam Random Access Memory (RAM) dengan struktur data C yang sangat optimal"
                  },
                  {
                      "id": "c",
                      "text": "Redis hanya bisa menyimpan teks maksimal 10 huruf"
                  },
                  {
                      "id": "d",
                      "text": "Redis tidak mendukung jaringan internet"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "Penyimpanan data langsung di RAM meniadakan overhead baca/tulis disk mekanis, menghasilkan respons di bawah 1 milidetik."
          }
      ]
  }
,
  "course-linux-22": {
      "id": "quiz-linux-22",
      "courseId": "course-linux-22",
      "title": "Kuis Evaluasi Linux & CLI Server",
      "passScorePercent": 70,
      "questions": [
          {
              "id": "q1",
              "question": "Perintah apa yang digunakan untuk mengubah hak akses izin berkas (Read, Write, Execute) di Linux?",
              "options": [
                  {
                      "id": "a",
                      "text": "chown"
                  },
                  {
                      "id": "b",
                      "text": "chmod"
                  },
                  {
                      "id": "c",
                      "text": "chperm"
                  },
                  {
                      "id": "d",
                      "text": "chgrp"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "chmod (change mode) menetapkan permission berkas (contoh: chmod 755 skrip.sh atau chmod +x)."
          },
          {
              "id": "q2",
              "question": "Perintah terminal apa yang menyaring baris teks berdasarkan pola pencarian ekspresi reguler secara cepat?",
              "options": [
                  {
                      "id": "a",
                      "text": "find"
                  },
                  {
                      "id": "b",
                      "text": "grep"
                  },
                  {
                      "id": "c",
                      "text": "locate"
                  },
                  {
                      "id": "d",
                      "text": "cat"
                  }
              ],
              "correctOptionId": "b",
              "explanation": "grep (Global Regular Expression Print) mencari pola teks di dalam satu atau banyak berkas."
          },
          {
              "id": "q3",
              "question": "Layanan manajer sistem bawaan di sebagian besar distribusi Linux modern untuk mengontrol daemon backend (start/restart/status) adalah?",
              "options": [
                  {
                      "id": "a",
                      "text": "systemd / systemctl"
                  },
                  {
                      "id": "b",
                      "text": "cron"
                  },
                  {
                      "id": "c",
                      "text": "bash"
                  },
                  {
                      "id": "d",
                      "text": "init.bat"
                  }
              ],
              "correctOptionId": "a",
              "explanation": "systemctl mengontrol daemon sistem melalui systemd (contoh: sudo systemctl restart nginx)."
          }
      ]
  }
};

export const MOCK_PROJECTS: Project[] = [
  {
    "id": "project-html-01",
    "slug": "halaman-profil-sederhana",
    "courseId": "course-html-01",
    "title": "Halaman Profil Sederhana",
    "summary": "Buat halaman portofolio profil personal menggunakan semantic markup HTML5.",
    "brief": "Rancang halaman profil personal yang terstruktur rapi. Halaman harus memiliki bagian header dengan foto dan nama, ringkasan bio singkat, riwayat pendidikan atau keahlian dalam bentuk list, tabel kontak sederhana, dan footer navigasi hak cipta.",
    "requirements": [
      "Gunakan semantic tags minimal <header>, <main>, <section>, dan <footer>.",
      "Sertakan gambar profil dengan atribut alt yang informatif.",
      "Gunakan minimal satu heading hierarchy <h1> hingga <h3>.",
      "Sertakan formulir kontak sederhana dengan input nama, email, dan tombol submit."
    ],
    "difficulty": "pemula",
    "status": "published",
    "createdAt": "2026-10-05T08:00:00Z",
    "updatedAt": "2026-10-15T08:00:00Z"
  },
  {
    "id": "project-css-02",
    "slug": "kartu-produk-responsif",
    "courseId": "course-css-02",
    "title": "Kartu Produk Responsif",
    "summary": "Rancang kartu profil produk interaktif dengan CSS Flexbox dan breakpoint smartphone.",
    "brief": "Gunakan CSS murni untuk mendesain kartu produk yang modern. Kartu harus memiliki gambar produk, badge kategori, judul, deskripsi harga, tombol Call-to-Action (CTA), dan efek hover yang halus. Tampilan harus rapi baik di layar desktop maupun layar ponsel 360px.",
    "requirements": [
      "Gunakan Flexbox untuk menyusun elemen di dalam kartu.",
      "Terapkan Box Model dengan padding dan margin yang proporsional.",
      "Terapkan efek hover halus pada kartu dan tombol utama.",
      "Pastikan kartu tidak mengalami horizontal overflow pada lebar layar 360px."
    ],
    "difficulty": "pemula",
    "status": "published",
    "createdAt": "2026-10-06T08:00:00Z",
    "updatedAt": "2026-10-15T08:00:00Z"
  },
  {
    "id": "proj-py-01",
    "courseId": "course-py-04",
    "slug": "aplikasi-catatan-cli-python",
    "title": "Aplikasi Pengelola Catatan CLI dengan Python",
    "summary": "Bangun aplikasi terminal interaktif dengan manipulasi file JSON dan exception handling.",
    "brief": "Bangun aplikasi Command Line Interface (CLI) interaktif untuk mencatat, melihat, dan menyimpan daftar tugas ke dalam file data JSON secara persisten.",
    "requirements": [
      "Aplikasi harus menyediakan menu interaktif di terminal (1. Tambah Catatan, 2. Lihat Semua Catatan, 3. Hapus Catatan, 4. Keluar).",
      "Menyimpan dan membaca data catatan ke dalam file data.json menggunakan modul json.",
      "Menerapkan penanganan eksepsi (try...except) untuk menangani input tidak valid atau file yang belum terbentuk tanpa crash.",
      "Menampilkan ringkasan catatan dengan format tanggal atau penomoran yang rapi."
    ],
    "difficulty": "pemula",
    "status": "published",
    "createdAt": "2026-10-04T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  },
  {
    "id": "proj-ts-01",
    "courseId": "course-ts-05",
    "slug": "sistem-manajemen-inventaris-typescript",
    "title": "Sistem Manajemen Inventaris dengan TypeScript",
    "summary": "Rancang modul TypeScript tipe ketat dengan interface, generics, dan validasi data transaksi.",
    "brief": "Bangun pustaka TypeScript modular untuk mengelola stok inventaris barang toko online lengkap dengan tipe data produk, status pengiriman, keranjang belanja, dan riwayat transaksi bertipe ketat.",
    "requirements": [
      "Mendefinisikan interface Produk, Kategori, dan Transaksi dengan strict typing.",
      "Menerapkan Generic Repository class untuk operasi CRUD in-memory yang reusable.",
      "Menerapkan Union Types dan Type Guards untuk menangani berbagai status pembayaran (Pending, Paid, Failed).",
      "Menghasilkan kompilasi bersih (zero error) saat dijalankan dengan tsc --noEmit."
    ],
    "difficulty": "pemula",
    "status": "published",
    "createdAt": "2026-10-05T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  },
  {
    "id": "proj-java-01",
    "courseId": "course-java-06",
    "slug": "sistem-perbankan-sederhana-java",
    "title": "Sistem Perbankan OOP dengan Java",
    "summary": "Bangun sistem rekening bank berbasis console dengan enkapsulasi data dan riwayat transaksi.",
    "brief": "Rancang aplikasi simulasi perbankan menggunakan konsep OOP murni di Java. Aplikasi harus memiliki class RekeningBank dengan fitur setor tunai, tarik tunai, validasi saldo minimum, dan pencetakan mutasi rekening.",
    "requirements": [
      "Menerapkan konsep enkapsulasi penuh dengan atribut private dan public getter/setter.",
      "Mendukung operasi setor, tarik, dan transfer antar akun dengan validasi saldo.",
      "Menerapkan subclass RekeningGiro atau RekeningTabungan menggunakan pewarisan (extends).",
      "Menampilkan output mutasi transaksi secara rapi di konsol terminal."
    ],
    "difficulty": "pemula",
    "status": "published",
    "createdAt": "2026-10-06T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  },
  {
    "id": "proj-cpp-01",
    "courseId": "course-cpp-07",
    "slug": "kalkulator-matriks-dan-vektor-cpp",
    "title": "Kalkulator Vektor & Pengolah Data C++",
    "summary": "Rancang program analitik numerik berperforma tinggi menggunakan std::vector dan pointer.",
    "brief": "Bangun program C++ modern untuk mengolah kumpulan data statistik (rata-rata, median, standar deviasi, nilai maksimum/minimum) serta operasi vektor matematis menggunakan memori dinamis dan fungsi pass-by-reference.",
    "requirements": [
      "Menggunakan container std::vector untuk menampung data dinamis dari input pengguna.",
      "Menerapkan fungsi pass-by-reference (&) untuk menghindari penyalinan memori yang tidak perlu.",
      "Mengimplementasikan algoritma pengurutan (sorting) dan pencarian (searching).",
      "Bebas dari memory leak dan menghasilkan kompilasi bersih tanpa warning."
    ],
    "difficulty": "pemula",
    "status": "published",
    "createdAt": "2026-10-07T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  },
  {
    "id": "proj-sql-01",
    "courseId": "course-sql-08",
    "slug": "perancangan-basis-data-e-commerce-sql",
    "title": "Perancangan Skema & Kueri Analitik E-Commerce",
    "summary": "Rancang skema database e-commerce relasional lengkap dengan tabel pelanggan, pesanan, dan analisis omzet.",
    "brief": "Rancang database relasional untuk platform e-commerce menggunakan dialek SQL standar. Buat skema tabel berelasi (pengguna, produk, pesanan, detail_pesanan) lengkap dengan foreign key, lalu susun kueri analitik kompleks dengan JOIN dan GROUP BY untuk menghitung total penjualan bulanan.",
    "requirements": [
      "Menulis skrip DDL CREATE TABLE dengan penentuan Primary Key, Foreign Key, dan constraints yang tepat.",
      "Menulis kueri analitik INNER JOIN untuk menampilkan detail struk pesanan pelanggan.",
      "Menulis kueri agregasi GROUP BY dan HAVING untuk mengetahui produk terlaris.",
      "Menerapkan kueri subquery atau view untuk menyederhanakan laporan keuangan."
    ],
    "difficulty": "pemula",
    "status": "published",
    "createdAt": "2026-10-08T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  }
,
  {
    "id": "project-js-int-09",
    "slug": "dashboard-asinkron-realtime",
    "courseId": "course-js-int-09",
    "title": "Aplikasi Dashboard Real-Time API & Async Task Runner",
    "summary": "Bangun aplikasi dashboard pemantau data publik real-time menggunakan Promise combinators, Fetch API, caching LocalStorage, dan ES Modules.",
    "brief": "Terapkan seluruh keahlian JavaScript Lanjutan Anda dengan membangun aplikasi web asinkron yang tangguh dan tahan banting terhadap kegagalan jaringan (fault-tolerant).",
    "requirements": [
      "Menggunakan async/await dengan penanganan error try...catch yang komprehensif.",
      "Menggunakan Promise.allSettled() untuk mengambil data dari beberapa endpoint publik secara simultan.",
      "Menyimpan respons API ke dalam localStorage dengan mekanisme TTL (Time-To-Live).",
      "Membagi kode ke dalam modul ES6 terpisah (api.js, storage.js, ui.js, main.js)."
    ],
    "difficulty": "menengah",
    "status": "published",
    "createdAt": "2026-10-10T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  }
,
  {
    "id": "project-ts-int-10",
    "slug": "state-manager-type-safe",
    "courseId": "course-ts-int-10",
    "title": "Type-Safe Enterprise State Manager & Form Validator",
    "summary": "Rancang pustaka manajemen state dan validasi formulir generik dengan TypeScript strict mode dan discriminated unions.",
    "brief": "Ciptakan mini-library state management dan skema validator formulir yang 100% type-safe tanpa menggunakan any.",
    "requirements": [
      "Class Store<TState> dengan generic state dan method subscribe yang type-safe.",
      "Aksi mutasi state didefinisikan menggunakan Tagged Union dengan properti type.",
      "Mengimplementasikan custom type guard untuk memverifikasi payload runtime.",
      "Memanfaatkan Pick, Omit, dan Partial dalam helper formulir."
    ],
    "difficulty": "menengah",
    "status": "published",
    "createdAt": "2026-10-11T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  }
,
  {
    "id": "project-css-int-11",
    "slug": "interactive-showcase-landing-page",
    "courseId": "course-css-int-11",
    "title": "Interactive Showcase Landing Page dengan CSS Variables & 60fps Keyframes",
    "summary": "Ciptakan halaman landing showcase produk premium dengan dark mode runtime, CSS Subgrid, dan micro-interactions 60fps.",
    "brief": "Rancang antarmuka visual kelas dunia yang memukau dengan memanfaatkan kapabilitas mutakhir CSS murni.",
    "requirements": [
      "Pengalihan Light/Dark theme instan berbasis CSS Custom Properties tanpa re-render DOM.",
      "Menggunakan clamp() untuk tipografi fluid dan subgrid untuk meratakan kartu fitur.",
      "Animasi keyframe dan transisi cubic-bezier yang hanya menyentuh properti transform dan opacity.",
      "Mengimplementasikan showcase carousel berbasis CSS Scroll Snap murni."
    ],
    "difficulty": "menengah",
    "status": "published",
    "createdAt": "2026-10-12T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  }
,
  {
    "id": "project-py-int-12",
    "slug": "sistem-inventaris-enterprise-oop",
    "courseId": "course-py-int-12",
    "title": "Sistem Manajemen Inventaris Enterprise Berbasis OOP & Context Manager",
    "summary": "Kembangkan aplikasi manajemen inventaris berbasis terminal dengan prinsip SOLID, Abstract Base Classes, dan generator data.",
    "brief": "Bangun sistem backend inventaris produk berskala enterprise yang mengedepankan prinsip modularitas dan desain berorientasi objek yang kuat.",
    "requirements": [
      "Penggunaan Class dengan @property getter/setter dan validasi nilai atribut.",
      "Memiliki kelas abstrak ItemInventaris yang diturunkan ke ProdukFisik dan ProdukDigital.",
      "Mengimplementasikan dunder methods __str__, __repr__, __len__, dan __eq__.",
      "Menggunakan generator untuk ekspor laporan data hemat memori dan context manager untuk transaksi stok aman."
    ],
    "difficulty": "menengah",
    "status": "published",
    "createdAt": "2026-10-13T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  }
,
  {
    "id": "project-sql-int-13",
    "slug": "analisis-metrik-ecommerce-window-functions",
    "courseId": "course-sql-int-13",
    "title": "Analisis Metrik Bisnis E-Commerce dengan Window Functions & CTE",
    "summary": "Susun skrip analitik SQL komprehensif untuk menghitung retensi pelanggan, ranking penjualan bulanan, dan running totals.",
    "brief": "Jadilah Analytics Engineer yang andal dengan merancang kueri SQL tingkat lanjut untuk membedah data bisnis nyata.",
    "requirements": [
      "Kueri agregasi menggabungkan tabel pengguna, pesanan, item_pesanan, dan produk.",
      "Menyusun alur kueri analitik bertingkat dengan Common Table Expressions (CTE).",
      "Menghitung ranking produk terlaris per kategori (DENSE_RANK) dan running totals pendapatan (SUM() OVER).",
      "Menghitung rasio pertumbuhan pendapatan bulan ke bulan menggunakan LAG()."
    ],
    "difficulty": "menengah",
    "status": "published",
    "createdAt": "2026-10-14T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  }
,
  {
    "id": "project-node-14",
    "slug": "restful-api-perpustakaan-express",
    "courseId": "course-node-14",
    "title": "RESTful API Manajemen Perpustakaan dengan Express",
    "summary": "Rancang layanan RESTful API lengkap (CRUD) untuk peminjaman buku menggunakan Express.js, routing modular, dan validasi middleware.",
    "brief": "Bangun server backend REST API menggunakan Node.js dan Express yang menangani inventaris buku, peminjaman, dan penanganan error terpusat.",
    "requirements": [
      "Implementasikan endpoint CRUD lengkap: GET, POST, PUT, DELETE /api/v1/books.",
      "Gunakan custom middleware untuk logging request dan validasi format payload JSON.",
      "Penanganan error terpusat (Global Error Handler Middleware) dengan kode status HTTP yang sesuai.",
      "Pisahkan kode ke dalam arsitektur controller, routes, dan models yang modular."
    ],
    "difficulty": "pemula",
    "status": "published",
    "createdAt": "2026-10-15T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  }
,
  {
    "id": "project-react-15",
    "slug": "task-tracker-interaktif",
    "courseId": "course-react-15",
    "title": "Aplikasi Task Tracker & Filter Produktivitas",
    "summary": "Bangun aplikasi manajemen tugas harian yang responsif dengan React Hooks (useState, useEffect), local storage persistence, dan badge kategori.",
    "brief": "Ciptakan aplikasi frontend interaktif berbasis komponen React yang memungkinkan pengguna mengelola checklist produktivitas dengan cepat dan intuitif.",
    "requirements": [
      "Komponen modular: FormInput, TaskList, TaskItem, dan FilterBar.",
      "Manajemen state reaktif untuk menambah, menandai selesai, dan menghapus tugas.",
      "Penyimpanan otomatis ke browser LocalStorage via hook useEffect.",
      "Fitur filter dinamis: Semua, Aktif, dan Selesai."
    ],
    "difficulty": "pemula",
    "status": "published",
    "createdAt": "2026-10-15T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  }
,
  {
    "id": "project-go-16",
    "slug": "cli-concurrent-web-checker",
    "courseId": "course-go-16",
    "title": "CLI Web Status Checker dengan Goroutine & Channel",
    "summary": "Bangun alat terminal (CLI) berbasis Go untuk memeriksa status kesehatan puluhan URL secara simultan menggunakan Goroutines.",
    "brief": "Kembangkan program CLI berkinerja tinggi yang memeriksa ketersediaan website secara paralel dengan komunikasi Channel.",
    "requirements": [
      "Menggunakan Goroutine untuk memeriksa setiap URL secara bersamaan tanpa blocking.",
      "Menggunakan Channel untuk mengirimkan laporan waktu respons ke thread utama.",
      "Format output tabel terminal yang rapi dengan indikator status HTTP (200 OK, 404, 500).",
      "Penanganan error koneksi jaringan yang bersih dan tidak membuat program panik."
    ],
    "difficulty": "pemula",
    "status": "published",
    "createdAt": "2026-10-15T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  }
,
  {
    "id": "project-git-17",
    "slug": "simulasi-kolaborasi-git-team",
    "courseId": "course-git-17",
    "title": "Simulasi Alur Kerja Tim: Git Flow & Conflict Resolution",
    "summary": "Simulasikan proyek open source nyata: buat branch fitur, lakukan rebase/merge, selesaikan conflict marker, dan buat Pull Request.",
    "brief": "Tunjukkan penguasaan alur kerja Git standar profesional dengan mengelola repositori kolaboratif.",
    "requirements": [
      "Membuat branch fitur terpisah dengan konvensi penamaan standar (feat/nama-fitur).",
      "Menulis pesan commit yang rapi mengikuti format Conventional Commits.",
      "Mensimulasikan dan menyelesaikan merge conflict secara manual dengan bersih.",
      "Menghasilkan riwayat git log yang teratur dan siap digabung ke branch main."
    ],
    "difficulty": "pemula",
    "status": "published",
    "createdAt": "2026-10-15T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  }
,
  {
    "id": "project-docker-18",
    "slug": "kontainerisasi-aplikasi-web",
    "courseId": "course-docker-18",
    "title": "Kontainerisasi Aplikasi Fullstack dengan Docker & Compose",
    "summary": "Tulis Dockerfile multi-stage yang efisien dan buat berkas docker-compose.yml untuk menghubungkan web server dan basis data.",
    "brief": "Kemas aplikasi web ke dalam image container yang ringan dan jalankan bersama database dengan satu perintah docker compose up.",
    "requirements": [
      "Dockerfile berbasis Linux Alpine untuk ukuran image yang ramping di bawah 150MB.",
      "Pengaturan .dockerignore untuk mengabaikan node_modules dan berkas lokal sementara.",
      "docker-compose.yml yang mendefinisikan service web dan database dengan healthcheck.",
      "Konfigurasi volume untuk persistensi data database."
    ],
    "difficulty": "pemula",
    "status": "published",
    "createdAt": "2026-10-15T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  }
,
  {
    "id": "project-php-19",
    "slug": "buku-tamu-dinamis-pdo",
    "courseId": "course-php-19",
    "title": "Aplikasi Buku Tamu & Kontak Dinamis dengan PHP PDO",
    "summary": "Bangun aplikasi web dinamis PHP dengan form pemrosesan pesan, sanitasi input XSS, dan penyimpanan MySQL via PDO Prepared Statements.",
    "brief": "Rancang aplikasi buku tamu interaktif yang aman dan responsif menggunakan PHP modern dan PDO.",
    "requirements": [
      "Formulir HTML dengan metode POST untuk pengiriman nama, email, dan pesan.",
      "Sanitasi input menggunakan htmlspecialchars() untuk mencegah serangan XSS.",
      "Operasi INSERT dan SELECT data ke basis data menggunakan PDO Prepared Statements.",
      "Pesan notifikasi sukses/gagal menggunakan PHP Session."
    ],
    "difficulty": "pemula",
    "status": "published",
    "createdAt": "2026-10-15T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  }
,
  {
    "id": "project-pg-20",
    "slug": "perancangan-basis-data-saas-postgresql",
    "courseId": "course-pg-20",
    "title": "Perancangan Basis Data Multi-Tenant SaaS dengan PostgreSQL",
    "summary": "Rancang skema database SaaS lengkap dengan relasi multi-tabel, tipe data JSONB untuk profil dinamis, dan index B-Tree performa tinggi.",
    "brief": "Susun skrip DDL SQL untuk aplikasi SaaS yang mendukung registrasi pengguna, organisasi, subscription, dan log aktivitas.",
    "requirements": [
      "Tabel pengguna dan organisasi dengan foreign key ON DELETE CASCADE.",
      "Kolom konfigurasi bertipe data JSONB dengan indexing GIN.",
      "Kueri analitik transaksi bulanan menggunakan klausa JOIN dan aggregate.",
      "Penanganan transaksi ACID dengan BEGIN, COMMIT, dan ROLLBACK."
    ],
    "difficulty": "pemula",
    "status": "published",
    "createdAt": "2026-10-15T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  }
,
  {
    "id": "project-redis-21",
    "slug": "api-rate-limiter-leaderboard-redis",
    "courseId": "course-redis-21",
    "title": "Sistem Rate Limiter & Leaderboard Real-Time dengan Redis",
    "summary": "Bangun sistem perlindungan API rate limiting berbasis sliding window dan papan peringkat XP leaderboard menggunakan Redis Sorted Sets.",
    "brief": "Kembangkan modul backend performa tinggi yang mengamankan endpoint dari serangan DoS dan merangking ribuan skor pemain secara instan.",
    "requirements": [
      "Implementasi sliding window log rate limiting menggunakan Redis Strings/Hashes dan TTL.",
      "Papan peringkat leaderboard dinamis menggunakan Redis Sorted Sets (ZADD, ZREVRANGE, ZRANK).",
      "Mekanisme caching otomatis respons query database dengan invalidasi berbasis event.",
      "Penanganan koneksi redis cluster/failover yang tangguh."
    ],
    "difficulty": "pemula",
    "status": "published",
    "createdAt": "2026-10-15T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  }
,
  {
    "id": "project-linux-22",
    "slug": "otomasi-backup-server-bash",
    "courseId": "course-linux-22",
    "title": "Skrip Otomasi Backup Server & Health Monitor dengan Bash",
    "summary": "Tulis skrip shell Bash mandiri untuk memantau penggunaan CPU/RAM, membuat arsip backup terkompresi, dan menjadwalkannya di Cron.",
    "brief": "Rancang skrip otomasi server Linux yang memastikan ketersediaan layanan dan pencadangan data berkala secara otomatis.",
    "requirements": [
      "Skrip Bash dengan shebang #!/bin/bash dan penanganan exit code error set -e.",
      "Pemantauan kapasitas disk (df -h) dan pengiriman peringatan jika melebihi ambang batas 85%.",
      "Pencadangan direktori ke arsip tar.gz dengan penamaan berstempel waktu (timestamp).",
      "Konfigurasi entri jadwal otomatis berkala pada crontab sistem."
    ],
    "difficulty": "pemula",
    "status": "published",
    "createdAt": "2026-10-15T08:00:00Z",
    "updatedAt": "2026-10-16T08:00:00Z"
  }
];

export const MOCK_FORUM_THREADS: ForumThread[] = [
  {
    "id": "thread-01",
    "authorId": "user-demo-01",
    "authorName": "Rian Pratama",
    "title": "Mulai belajar HTML: Kapan sebaiknya menggunakan section vs div?",
    "body": "Halo teman-teman Kodeluma! Saya baru menyelesaikan modul HTML Dasar. Mau tanya, kapan sebaiknya kita memakai tag <section> dibanding <div> biasa? Apakah ada aturan baku untuk accessibility?",
    "category": "html",
    "status": "active",
    "repliesCount": 3,
    "createdAt": "2026-10-12T10:30:00Z",
    "updatedAt": "2026-10-14T14:20:00Z"
  },
  {
    "id": "thread-02",
    "authorId": "user-demo-02",
    "authorName": "Siti Rahma",
    "title": "Tips memahami Flexbox justify-content dan align-items dengan mudah",
    "body": "Bagi yang sering tertukar antara justify-content dan align-items di Flexbox: kuncinya adalah mengingat arah flex-direction. Secara default row, justify-content untuk horizontal, align-items untuk vertikal. Semoga membantu!",
    "category": "css",
    "status": "active",
    "repliesCount": 2,
    "createdAt": "2026-10-13T09:15:00Z",
    "updatedAt": "2026-10-13T16:00:00Z"
  },
  {
    "id": "thread-03",
    "authorId": "user-demo-03",
    "authorName": "Budi Santoso",
    "title": "Bagikan proyek halaman profil pertamamu di sini!",
    "body": "Yuk saling review proyek Halaman Profil Sederhana yang sudah disubmit! Cantumkan link repository GitHub atau demo preview kamu di kolom balasan.",
    "category": "proyek",
    "status": "active",
    "repliesCount": 4,
    "createdAt": "2026-10-14T11:00:00Z",
    "updatedAt": "2026-10-15T12:00:00Z"
  },
  {
    "id": "thread-04",
    "authorId": "user-demo-01",
    "authorName": "Rian Pratama",
    "title": "Kelebihan TypeScript interface vs type alias untuk proyek Next.js",
    "body": "Untuk teman-teman yang sedang belajar TypeScript, kapan kalian lebih memilih interface dan kapan memilih type? Mari berdiskusi!",
    "category": "typescript",
    "status": "active",
    "repliesCount": 5,
    "createdAt": "2026-10-15T10:00:00Z",
    "updatedAt": "2026-10-16T12:00:00Z"
  }
];
