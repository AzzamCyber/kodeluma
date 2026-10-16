// courses-menengah.mjs
// Metadata for 5 Intermediate Courses, Quizzes, and Capstone Projects

export const MENENGAH_COURSES = [
  {
    id: "course-js-int-09",
    slug: "javascript-menengah",
    title: "JavaScript Lanjutan & Asynchronous",
    summary: "Kuasai asynchronous JavaScript, event loop, Promises, Async/Await, Web APIs, dan arsitektur modular.",
    description: "Tingkatkan kemampuan JavaScript ke level menengah profesional. Pelajari cara kerja internal JavaScript engine, execution context, closures, event loop, manipulasi asynchronous dengan Promise & Async/Await, konsumsi REST API menggunakan Fetch, Web Storage API, hingga arsitektur modular ES6+.",
    category: "javascript",
    level: "menengah",
    status: "published",
    curriculumVersion: 1,
    estimatedMinutes: 300,
    coverUrl: "/brand/kodeluma-icon.png",
    lessonsCount: 10,
    createdAt: "2026-10-10T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  },
  {
    id: "course-ts-int-10",
    slug: "typescript-menengah",
    title: "TypeScript Lanjutan & Generics",
    summary: "Pelajari sistem tipe tingkat lanjut, Generic functions & classes, Mapped Types, dan Type Guards profesional.",
    description: "Bawa keahlian TypeScript kamu ke level intermediate. Di kelas ini kamu akan menguasai Generics mendalam dengan generic constraints, discriminated union, conditional types, mapped types, utility types bawaan (Pick, Omit, Record, Partial), custom type guards, serta best practice konfigurasi tsconfig untuk enterprise.",
    category: "typescript",
    level: "menengah",
    status: "published",
    curriculumVersion: 1,
    estimatedMinutes: 320,
    coverUrl: "/brand/kodeluma-icon.png",
    lessonsCount: 10,
    createdAt: "2026-10-11T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  },
  {
    id: "course-css-int-11",
    slug: "css-menengah",
    title: "CSS Lanjutan, Animasi & Desain Sistem",
    summary: "Kuasai CSS Custom Properties, animasi keyframes 60fps, pseudo-classes modern, dan teknik desain sistem.",
    description: "Buat antarmuka web interaktif dan memukau kelas dunia. Pelajari manajemen tema dengan CSS Variables, animasi transisi & keyframes berkinerja tinggi, pseudo-classes modern (:has, :is, :where), fungsi matematis (clamp, min, max), subgrid, hingga teknik scroll snapping.",
    category: "css",
    level: "menengah",
    status: "published",
    curriculumVersion: 1,
    estimatedMinutes: 260,
    coverUrl: "/brand/kodeluma-icon.png",
    lessonsCount: 8,
    createdAt: "2026-10-12T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  },
  {
    id: "course-py-int-12",
    slug: "python-menengah",
    title: "Python OOP & Pemrograman Lanjutan",
    summary: "Kuasai Object-Oriented Programming (OOP), dunder methods, decorators, generators, dan context managers.",
    description: "Kembangkan kode Python yang modular, scalable, dan maintainable. Pelajari prinsip dasar OOP (Encapsulation, Inheritance, Polymorphism), property decorator, magic dunder methods, list & dictionary comprehension tingkat lanjut, custom decorators, hingga context managers.",
    category: "python",
    level: "menengah",
    status: "published",
    curriculumVersion: 1,
    estimatedMinutes: 280,
    coverUrl: "/brand/kodeluma-icon.png",
    lessonsCount: 8,
    createdAt: "2026-10-13T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  },
  {
    id: "course-sql-int-13",
    slug: "sql-menengah",
    title: "SQL Lanjutan, Relasi & Window Functions",
    summary: "Kuasai multi-table joins, subqueries, CTE, Window Functions analitik, dan optimasi query indeks.",
    description: "Tingkatkan kemampuan analisa dan rekayasa data. Pelajari perancangan relasi database ternormalisasi, teknik multi-table joins kompleks, Common Table Expressions (CTE), Window Functions analitik (ROW_NUMBER, RANK, LEAD, LAG), indexing untuk performa tinggi, hingga transaksi ACID.",
    category: "sql",
    level: "menengah",
    status: "published",
    curriculumVersion: 1,
    estimatedMinutes: 280,
    coverUrl: "/brand/kodeluma-icon.png",
    lessonsCount: 8,
    createdAt: "2026-10-14T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  }
];

export const MENENGAH_QUIZZES = {
  "course-js-int-09": {
    id: "quiz-js-int-09",
    courseId: "course-js-int-09",
    title: "Kuis Evaluasi JavaScript Lanjutan & Asynchronous",
    passScorePercent: 70,
    questions: [
      {
        id: "q1",
        question: "Antrian manakah yang diprioritaskan lebih dulu oleh Event Loop di antara Microtask dan Macrotask?",
        options: [
          { id: "a", text: "Macrotask Queue selalu diproses lebih awal" },
          { id: "b", text: "Microtask Queue (Promise callbacks, queueMicrotask) diproses sebelum Macrotask berikutnya" },
          { id: "c", text: "Keduanya dieksekusi bersamaan secara multithreading" },
          { id: "d", text: "Tergantung kecepatan memori browser" }
        ],
        correctOptionId: "b",
        explanation: "Setiap kali Call Stack kosong, JavaScript engine akan mengosongkan seluruh Microtask queue sebelum mengambil tugas baru dari Macrotask queue (seperti setTimeout)."
      },
      {
        id: "q2",
        question: "Metode Promise manakah yang menunggu SEMUA promise selesai (baik resolved maupun rejected) tanpa gagal lebih awal?",
        options: [
          { id: "a", text: "Promise.all()" },
          { id: "b", text: "Promise.race()" },
          { id: "c", text: "Promise.allSettled()" },
          { id: "d", text: "Promise.any()" }
        ],
        correctOptionId: "c",
        explanation: "Promise.allSettled() mengembalikan array status untuk setiap promise tanpa menghentikan eksekusi jika salah satu mengalami penolakan (rejected)."
      },
      {
        id: "q3",
        question: "Apa fungsi dari closure dalam JavaScript?",
        options: [
          { id: "a", text: "Mempercepat kompilasi file script menjadi bytecode" },
          { id: "b", text: "Mengizinkan fungsi dalam mengakses variabel dari scope luar tempat fungsi tersebut diciptakan" },
          { id: "c", text: "Menghapus variabel otomatis dari memori saat fungsi selesai" },
          { id: "d", text: "Mengubah fungsi synchronous menjadi asynchronous" }
        ],
        correctOptionId: "b",
        explanation: "Closure adalah kombinasi antara sebuah fungsi dan lingkungan leksikal (lexical environment) tempat fungsi tersebut dideklarasikan."
      }
    ]
  },
  "course-ts-int-10": {
    id: "quiz-ts-int-10",
    courseId: "course-ts-int-10",
    title: "Kuis Evaluasi TypeScript Lanjutan & Generics",
    passScorePercent: 70,
    questions: [
      {
        id: "q1",
        question: "Kata kunci manakah yang digunakan untuk membatasi tipe generic T agar memiliki properti tertentu?",
        options: [
          { id: "a", text: "<T implements SomeType>" },
          { id: "b", text: "<T extends SomeType>" },
          { id: "c", text: "<T typeof SomeType>" },
          { id: "d", text: "<T as SomeType>" }
        ],
        correctOptionId: "b",
        explanation: "Generic constraint menggunakan kata kunci 'extends', contoh: <T extends { id: string }>."
      },
      {
        id: "q2",
        question: "Utility type manakah yang mengambil sebagian properti dari interface yang sudah ada?",
        options: [
          { id: "a", text: "Pick<T, K>" },
          { id: "b", text: "Omit<T, K>" },
          { id: "c", text: "Partial<T>" },
          { id: "d", text: "Record<K, T>" }
        ],
        correctOptionId: "a",
        explanation: "Pick<T, K> memilih sekumpulan kunci spesifik K dari tipe T untuk membentuk tipe baru."
      },
      {
        id: "q3",
        question: "Apa yang membedakan Discriminated Union dari union type biasa?",
        options: [
          { id: "a", text: "Discriminated Union hanya bisa digunakan pada class, bukan interface" },
          { id: "b", text: "Memiliki properti pembeda (discriminant) bertipe literal unik pada setiap varian" },
          { id: "c", text: "Mengabaikan pemeriksaan strict null checks" },
          { id: "d", text: "Otomatis di-convert menjadi JSON saat runtime" }
        ],
        correctOptionId: "b",
        explanation: "Discriminated Union memanfaatkan properti bersama bertipe literal (misal: 'kind' atau 'status') untuk melakukan type narrowing secara otomatis."
      }
    ]
  },
  "course-css-int-11": {
    id: "quiz-css-int-11",
    courseId: "course-css-int-11",
    title: "Kuis Evaluasi CSS Lanjutan & Animasi",
    passScorePercent: 70,
    questions: [
      {
        id: "q1",
        question: "Properti CSS apa yang direkomendasikan untuk animasi performa tinggi 60fps tanpa memicu reflow layout?",
        options: [
          { id: "a", text: "width dan height" },
          { id: "b", text: "top dan left" },
          { id: "c", text: "transform dan opacity" },
          { id: "d", text: "margin dan padding" }
        ],
        correctOptionId: "c",
        explanation: "Transform dan opacity diproses langsung oleh GPU (compositor layer) tanpa memicu layout recalculation atau repainting yang berat."
      },
      {
        id: "q2",
        question: "Fungsi matematika CSS apa yang menetapkan nilai target dinamis di antara batas minimum dan maksimum?",
        options: [
          { id: "a", text: "calc()" },
          { id: "b", text: "clamp()" },
          { id: "c", text: "minmax()" },
          { id: "d", text: "bound()" }
        ],
        correctOptionId: "b",
        explanation: "Fungsi clamp(min, val, max) membatasi nilai fleksibel di antara nilai batas bawah dan batas atas yang ditentukan."
      },
      {
        id: "q3",
        question: "Apa peran pseudo-class :has() dalam CSS modern?",
        options: [
          { id: "a", text: "Sebagai selector induk (parent selector) berdasarkan kondisi elemen anak" },
          { id: "b", text: "Memeriksa apakah browser mendukung animasi WebGL" },
          { id: "c", text: "Menghapus margin bawaan pada tag heading" },
          { id: "d", text: "Memilih elemen yang memiliki fokus keyboard" }
        ],
        correctOptionId: "a",
        explanation: ":has() bertindak sebagai relational atau parent selector yang memilih elemen induk bila di dalamnya terdapat anak yang cocok dengan selector tertentu."
      }
    ]
  },
  "course-py-int-12": {
    id: "quiz-py-int-12",
    courseId: "course-py-int-12",
    title: "Kuis Evaluasi Python OOP",
    passScorePercent: 70,
    questions: [
      {
        id: "q1",
        question: "Decorator bawaan mana yang digunakan untuk mengubah method menjadi atribut yang dapat dibaca tanpa tanda kurung ()?",
        options: [
          { id: "a", text: "@staticmethod" },
          { id: "b", text: "@classmethod" },
          { id: "c", text: "@property" },
          { id: "d", text: "@getter" }
        ],
        correctOptionId: "c",
        explanation: "@property mendefinisikan method getter sehingga dapat diakses seperti atribut biasa (obj.attr) namun tetap menjalankan logika."
      },
      {
        id: "q2",
        question: "Kata kunci apa yang digunakan dalam fungsi generator untuk mengembalikan nilai secara bertahap tanpa menghentikan fungsi selamanya?",
        options: [
          { id: "a", text: "return" },
          { id: "b", text: "yield" },
          { id: "c", text: "pause" },
          { id: "d", text: "await" }
        ],
        correctOptionId: "b",
        explanation: "Kata kunci yield menjeda eksekusi fungsi generator dan mengembalikan nilai ke pemanggil, menyisakan status untuk iterasi berikutnya."
      },
      {
        id: "q3",
        question: "Method dunder apa yang dipanggil saat fungsi print(obj) atau str(obj) dijalankan pada objek Python?",
        options: [
          { id: "a", text: "__repr__" },
          { id: "b", text: "__str__" },
          { id: "c", text: "__format__" },
          { id: "d", text: "__display__" }
        ],
        correctOptionId: "b",
        explanation: "__str__ menghasilkan representasi teks informal yang mudah dipahami manusia saat objek dicetak menggunakan print()."
      }
    ]
  },
  "course-sql-int-13": {
    id: "quiz-sql-int-13",
    courseId: "course-sql-int-13",
    title: "Kuis Evaluasi SQL Lanjutan & Relasi",
    passScorePercent: 70,
    questions: [
      {
        id: "q1",
        question: "Klausul apa yang wajib digunakan bersama Window Function seperti ROW_NUMBER() atau RANK()?",
        options: [
          { id: "a", text: "GROUP BY" },
          { id: "b", text: "OVER (PARTITION BY ... ORDER BY ...)" },
          { id: "c", text: "HAVING" },
          { id: "d", text: "WHERE EXISTS" }
        ],
        correctOptionId: "b",
        explanation: "Window Function memerlukan klausul OVER() untuk menentukan partisi dan urutan jendela kalkulasi baris data."
      },
      {
        id: "q2",
        question: "Apa tujuan utama dari proses normalisasi database relasional (1NF, 2NF, 3NF)?",
        options: [
          { id: "a", text: "Meningkatkan ukuran file database agar kueri lebih cepat" },
          { id: "b", text: "Menghilangkan redundansi data dan mencegah anomali manipulasi data" },
          { id: "c", text: "Mengganti seluruh kunci asing (foreign key) dengan string JSON" },
          { id: "d", text: "Menghindari penggunaan klausa WHERE pada kueri SELECT" }
        ],
        correctOptionId: "b",
        explanation: "Normalisasi meminimalkan duplikasi data dan melindungi konsistensi data dari anomali insert, update, dan delete."
      },
      {
        id: "q3",
        question: "Window function manakah yang digunakan untuk melihat nilai kolom pada baris sebelumnya?",
        options: [
          { id: "a", text: "LEAD()" },
          { id: "b", text: "LAG()" },
          { id: "c", text: "PREVIOUS()" },
          { id: "d", text: "BACK()" }
        ],
        correctOptionId: "b",
        explanation: "LAG(kolom, offset) mengintip nilai dari baris sebelumnya dalam jendela data analitik, sangat berguna untuk analisis tren MoM."
      }
    ]
  }
};

export const MENENGAH_PROJECTS = [
  {
    id: "project-js-int-09",
    slug: "dashboard-asinkron-realtime",
    courseId: "course-js-int-09",
    title: "Aplikasi Dashboard Real-Time API & Async Task Runner",
    summary: "Bangun aplikasi dashboard pemantau data publik real-time menggunakan Promise combinators, Fetch API, caching LocalStorage, dan ES Modules.",
    brief: "Terapkan seluruh keahlian JavaScript Lanjutan Anda dengan membangun aplikasi web asinkron yang tangguh dan tahan banting terhadap kegagalan jaringan (fault-tolerant).",
    requirements: [
      "Menggunakan async/await dengan penanganan error try...catch yang komprehensif.",
      "Menggunakan Promise.allSettled() untuk mengambil data dari beberapa endpoint publik secara simultan.",
      "Menyimpan respons API ke dalam localStorage dengan mekanisme TTL (Time-To-Live).",
      "Membagi kode ke dalam modul ES6 terpisah (api.js, storage.js, ui.js, main.js)."
    ],
    difficulty: "menengah",
    status: "published",
    createdAt: "2026-10-10T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  },
  {
    id: "project-ts-int-10",
    slug: "state-manager-type-safe",
    courseId: "course-ts-int-10",
    title: "Type-Safe Enterprise State Manager & Form Validator",
    summary: "Rancang pustaka manajemen state dan validasi formulir generik dengan TypeScript strict mode dan discriminated unions.",
    brief: "Ciptakan mini-library state management dan skema validator formulir yang 100% type-safe tanpa menggunakan any.",
    requirements: [
      "Class Store<TState> dengan generic state dan method subscribe yang type-safe.",
      "Aksi mutasi state didefinisikan menggunakan Tagged Union dengan properti type.",
      "Mengimplementasikan custom type guard untuk memverifikasi payload runtime.",
      "Memanfaatkan Pick, Omit, dan Partial dalam helper formulir."
    ],
    difficulty: "menengah",
    status: "published",
    createdAt: "2026-10-11T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  },
  {
    id: "project-css-int-11",
    slug: "interactive-showcase-landing-page",
    courseId: "course-css-int-11",
    title: "Interactive Showcase Landing Page dengan CSS Variables & 60fps Keyframes",
    summary: "Ciptakan halaman landing showcase produk premium dengan dark mode runtime, CSS Subgrid, dan micro-interactions 60fps.",
    brief: "Rancang antarmuka visual kelas dunia yang memukau dengan memanfaatkan kapabilitas mutakhir CSS murni.",
    requirements: [
      "Pengalihan Light/Dark theme instan berbasis CSS Custom Properties tanpa re-render DOM.",
      "Menggunakan clamp() untuk tipografi fluid dan subgrid untuk meratakan kartu fitur.",
      "Animasi keyframe dan transisi cubic-bezier yang hanya menyentuh properti transform dan opacity.",
      "Mengimplementasikan showcase carousel berbasis CSS Scroll Snap murni."
    ],
    difficulty: "menengah",
    status: "published",
    createdAt: "2026-10-12T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  },
  {
    id: "project-py-int-12",
    slug: "sistem-inventaris-enterprise-oop",
    courseId: "course-py-int-12",
    title: "Sistem Manajemen Inventaris Enterprise Berbasis OOP & Context Manager",
    summary: "Kembangkan aplikasi manajemen inventaris berbasis terminal dengan prinsip SOLID, Abstract Base Classes, dan generator data.",
    brief: "Bangun sistem backend inventaris produk berskala enterprise yang mengedepankan prinsip modularitas dan desain berorientasi objek yang kuat.",
    requirements: [
      "Penggunaan Class dengan @property getter/setter dan validasi nilai atribut.",
      "Memiliki kelas abstrak ItemInventaris yang diturunkan ke ProdukFisik dan ProdukDigital.",
      "Mengimplementasikan dunder methods __str__, __repr__, __len__, dan __eq__.",
      "Menggunakan generator untuk ekspor laporan data hemat memori dan context manager untuk transaksi stok aman."
    ],
    difficulty: "menengah",
    status: "published",
    createdAt: "2026-10-13T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  },
  {
    id: "project-sql-int-13",
    slug: "analisis-metrik-ecommerce-window-functions",
    courseId: "course-sql-int-13",
    title: "Analisis Metrik Bisnis E-Commerce dengan Window Functions & CTE",
    summary: "Susun skrip analitik SQL komprehensif untuk menghitung retensi pelanggan, ranking penjualan bulanan, dan running totals.",
    brief: "Jadilah Analytics Engineer yang andal dengan merancang kueri SQL tingkat lanjut untuk membedah data bisnis nyata.",
    requirements: [
      "Kueri agregasi menggabungkan tabel pengguna, pesanan, item_pesanan, dan produk.",
      "Menyusun alur kueri analitik bertingkat dengan Common Table Expressions (CTE).",
      "Menghitung ranking produk terlaris per kategori (DENSE_RANK) dan running totals pendapatan (SUM() OVER).",
      "Menghitung rasio pertumbuhan pendapatan bulan ke bulan menggunakan LAG()."
    ],
    difficulty: "menengah",
    status: "published",
    createdAt: "2026-10-14T08:00:00Z",
    updatedAt: "2026-10-16T08:00:00Z"
  }
];
