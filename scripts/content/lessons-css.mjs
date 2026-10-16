// lessons-css.mjs
// 8 Comprehensive W3Schools/MDN-grade lessons for CSS Lanjutan, Animasi & Desain Sistem (course-css-int-11)

export const CSS_MENENGAH_LESSONS = [
  {
    id: "lesson-css-int-01",
    courseId: "course-css-int-11",
    slug: "css-custom-properties-desain-sistem",
    title: "1. CSS Custom Properties (Variables) & Desain Sistem Dinamis",
    summary: "Pelajari manajemen token desain, scoping variabel, serta implementasi Dark/Light theme tanpa reload halaman.",
    order: 1,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 1. CSS Custom Properties (Variables) & Desain Sistem Dinamis

CSS Custom Properties (dikenal sebagai variabel CSS) merevolusi arsitektur antarmuka modern. Tidak seperti variabel preprocessor (seperti Sass/Less) yang di-compile secara statis, variabel CSS bersifat **dinamis di runtime** dan mewarisi prinsip cascade (*cascading*).

---

## Deklarasi Global pada Root & Penggunaan

Variabel dideklarasikan dengan awalan dua tanda hubung (\`--\`) dan diakses melalui fungsi \`var()\`:

\`\`\`css
:root {
  /* Design Tokens: Warna */
  --kl-primary: #2563eb;
  --kl-primary-hover: #1d4ed8;
  --kl-bg-body: #ffffff;
  --kl-text-main: #0f172a;

  /* Design Tokens: Spasi & Tipografi */
  --kl-radius-md: 8px;
  --kl-spacing-unit: 4px;
}

.kartu-fitur {
  background-color: var(--kl-bg-body);
  color: var(--kl-text-main);
  border-radius: var(--kl-radius-md);
  padding: calc(var(--kl-spacing-unit) * 4); /* 16px */
}
\`\`\`

---

## Mengubah Tema Dinamis (Dark Mode)

Karena variabel CSS hidup di DOM, mengubah tema semudah menimpa nilainya di bawah selector kelas atau atribut data:

\`\`\`css
/* Tema Gelap */
[data-bs-theme="dark"],
.theme-dark {
  --kl-bg-body: #0b0f19;
  --kl-text-main: #f8fafc;
  --kl-primary: #3b82f6;
}
\`\`\`

### Nilai Cadangan (Fallback Value):
\`\`\`css
/* Jika --kl-aksen tidak terdefinisi, browser memakai nilai cadangan 'crimson' */
.badge-peringatan {
  background-color: var(--kl-aksen, #e11d48);
}
\`\`\`
`
  },
  {
    id: "lesson-css-int-02",
    courseId: "course-css-int-11",
    slug: "transisi-halus-timing-functions-cubic-bezier",
    title: "2. Transisi Halus & Timing Functions (Cubic-Bezier)",
    summary: "Kuasai kurva percepatan transisi, timing function cubic-bezier kustom, dan efek micro-interaction alami.",
    order: 2,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 2. Transisi Halus & Timing Functions (Cubic-Bezier)

Transisi CSS (\`transition\`) memungkinkan perubahan nilai properti terjadi secara bertahap selama durasi tertentu, alih-alih melompat seketika. Ini adalah fondasi dari *micro-interactions* yang membuat website terasa hidup dan responsif.

---

## Anatomi Shorthand Transisi

\`\`\`css
.tombol-aksi {
  /* property | duration | timing-function | delay */
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 0.25s ease;
}

.tombol-aksi:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.15);
}
\`\`\`

---

## Memahami Kurva Easing & \`cubic-bezier()\`

Browser menyediakan preset bawaan seperti \`ease\`, \`linear\`, \`ease-in\`, \`ease-out\`, dan \`ease-in-out\`. Namun untuk menciptakan sensasi antarmuka modern (seperti iOS atau material design kelas atas), desainer menggunakan kurva kustom **Cubic-Bezier** ($P_0, P_1, P_2, P_3$).

| Timing Function | Nilai Cubic Bezier | Karakteristik Rasa Visual |
| :--- | :--- | :--- |
| **Snap Smooth** | \`cubic-bezier(0.16, 1, 0.3, 1)\` | Awal cepat, pengereman sangat mulus dan anggun |
| **Spring/Bounce** | \`cubic-bezier(0.34, 1.56, 0.64, 1)\` | Efek membal sedikit melewati batas (overshoot) |
| **Linear** | \`linear\` | Kecepatan konstan kaku (kurang alami untuk UI interaktif) |

> **Perhatian Aksesibilitas:** Selalu hormati preferensi pengguna dengan media query \`@media (prefers-reduced-motion: reduce)\` untuk mematikan transisi jika diperlukan.
`
  },
  {
    id: "lesson-css-int-03",
    courseId: "course-css-int-11",
    slug: "animasi-keyframes-gpu-compositing-60fps",
    title: "3. Animasi Keyframes Berperforma Tinggi (GPU Compositing 60fps)",
    summary: "Rancang animasi kompleks dengan @keyframes dan teknik akselerasi hardware via transform & opacity.",
    order: 3,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 3. Animasi Keyframes Berperforma Tinggi (GPU Compositing 60fps)

Ketika transisi sederhana dari state A ke B tidak mencukupi, kita menggunakan animasi **\`@keyframes\`** yang memungkinkan pembuatan urutan gerakan berulang, multi-tahap, dan independen dari aksi pengguna.

---

## 1. Aturan Emas Performa: Hanya Animasikan Transform & Opacity

Mesin rendering browser (Chromium Blink, WebKit, Gecko) memiliki 3 tahapan visual:
1. **Layout (Reflow)**: Menghitung posisi dan ukuran geometri elemen (\`width\`, \`height\`, \`top\`, \`margin\`). *Sangat berat bagi CPU!*
2. **Paint (Repaint)**: Menggambar piksel, warna, border, dan bayangan ke layar (\`color\`, \`background\`, \`box-shadow\`).
3. **Composite**: Menyusun lapisan (*composite layers*) yang telah digambar. **Hanya \`transform\` dan \`opacity\`** yang dapat diproses langsung oleh GPU (*Hardware Accelerated*) tanpa memicu Layout dan Paint ulang!

---

## 2. Sintaks @keyframes & Properti Animasi

\`\`\`css
@keyframes denyutHalus {
  0% {
    transform: scale(1);
    opacity: 0.9;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.9;
  }
}

.badge-live {
  /* name | duration | timing-function | iteration-count */
  animation: denyutHalus 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  will-change: transform, opacity;
}
\`\`\`

### Memahami \`animation-fill-mode\`:
- \`forwards\`: Elemen mempertahankan gaya pada keyframe terakhir setelah animasi selesai.
- \`backwards\`: Elemen menerapkan gaya pada keyframe pertama bahkan selama periode jeda (\`animation-delay\`).
- \`both\`: Menggabungkan perilaku \`forwards\` dan \`backwards\`.
`
  },
  {
    id: "lesson-css-int-04",
    courseId: "course-css-int-11",
    slug: "pseudo-classes-modern-has-is-where",
    title: "4. Pseudo-classes Modern: :has(), :is(), dan :where()",
    summary: "Gunakan 'parent selector' yang telah lama dinanti (:has) dan optimalkan spesifisitas selector dengan :is dan :where.",
    order: 4,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 4. Pseudo-classes Modern: :has(), :is(), dan :where()

Standar CSS modern memperkenalkan pseudo-classes mutakhir yang secara radikal mengurangi kebutuhan kita menulis logika JavaScript hanya untuk sekadar memanipulasi styling.

---

## 1. \`:has()\` — Selector Induk (Parent Selector)

Selama puluhan tahun, CSS tidak bisa memilih elemen induk berdasarkan kondisi anak (*children*). Kini \`:has()\` memungkinkan hal tersebut:

\`\`\`css
/* Beri border merah pada form jika DI DALAMNYA ada input yang tidak valid */
form:has(input:invalid) {
  border-left: 4px solid #ef4444;
}

/* Ubah layout kartu jika kartu tersebut memiliki gambar */
.kartu:has(.gambar-cover) {
  display: grid;
  grid-template-columns: 200px 1fr;
}
\`\`\`

---

## 2. \`:is()\` vs \`:where()\` — Pengelompokan & Spesifisitas

Kedua pseudo-class ini menyederhanakan selector majemuk yang panjang, namun dengan aturan **spesifisitas** (*specificity*) yang bertolak belakang:

\`\`\`css
/* Penulisan lama: */
header h1, header h2, header h3,
nav h1, nav h2, nav h3 {
  color: #1e293b;
}

/* Penulisan modern menggunakan :is() */
:is(header, nav) :is(h1, h2, h3) {
  color: #1e293b;
}
\`\`\`

### Perbedaan Spesifisitas:
- **\`:is(...)\`**: Mengambil spesifisitas dari pemilih paling spesifik di dalam daftarnya.
- **\`:where(...)\`**: Memiliki spesifisitas **NOL (0,0,0)**! Sangat cocok untuk reset CSS dan library komponen karena sangat mudah ditimpa (*override*) oleh kelas pengguna.
`
  },
  {
    id: "lesson-css-int-05",
    courseId: "course-css-int-11",
    slug: "fungsi-matematika-clamp-min-max-calc",
    title: "5. Fungsi Matematika Modern: clamp(), min(), max(), dan calc()",
    summary: "Ciptakan tipografi dan layout fluid yang menyesuaikan layar tanpa puluhan breakpoint media query.",
    order: 5,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 5. Fungsi Matematika Modern: clamp(), min(), max(), dan calc()

Dahulu, untuk mengubah ukuran font dari ponsel ke desktop, kita harus menulis banyak \`@media (min-width: ...)\`. Kini, dengan fungsi matematika CSS bawaan, kita bisa membuat ukuran yang **fluid** (mengalir mulus).

---

## 1. Fungsi \`clamp(minimum, ideal, maksimum)\`

\`clamp()\` menetapkan batas bawah, nilai target dinamis, dan batas atas:

\`\`\`css
h1 {
  /* Font tidak pernah lebih kecil dari 1.75rem (28px), 
     mengikuti 4% lebar layar (4vw), 
     dan tidak pernah melebihi 3.25rem (52px) */
  font-size: clamp(1.75rem, 4vw + 1rem, 3.25rem);
}
\`\`\`

---

## 2. Fungsi \`min()\` dan \`max()\`

- **\`min(a, b)\`**: Memilih nilai terkecil dari daftar. Sangat berguna untuk kontainer responsif:
  \`\`\`css
  .kontainer {
    /* Melebar hingga 90% layar, tapi mentok di 1200px */
    width: min(90vw, 1200px);
    margin-inline: auto;
  }
  \`\`\`
- **\`max(a, b)\`**: Memilih nilai terbesar dari daftar. Sering dipakai untuk memastikan padding aman (*safe area*):
  \`\`\`css
  .footer {
    /* Padding bawah minimal 20px, atau mengikuti safe-area perangkat */
    padding-bottom: max(20px, env(safe-area-inset-bottom));
  }
  \`\`\`
`
  },
  {
    id: "lesson-css-int-06",
    courseId: "course-css-int-11",
    slug: "css-subgrid-arsitektur-grid-bersarang",
    title: "6. CSS Subgrid untuk Arsitektur Grid Bersarang",
    summary: "Sejajarkan baris dan kolom komponen anak dengan grid induk menggunakan 'grid-template-columns: subgrid'.",
    order: 6,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 6. CSS Subgrid untuk Arsitektur Grid Bersarang

Sebelum adanya **Subgrid**, jika Anda memiliki kartu dalam Grid CSS, elemen di dalam setiap kartu (seperti judul, deskripsi, dan tombol footer) tidak bisa saling sejajar secara horizontal jika panjang teks deskripsinya berbeda-beda.

---

## Mengapa Subgrid Diperlukan?

Dalam Grid standar, konteks grid berhenti pada anak langsung (*direct children*). Anak dari anak tidak berbagi garis trek grid induk.

Dengan **\`subgrid\`**, anak mewarisi trek baris/kolom dari grid utama:

\`\`\`css
/* Kontainer Utama 3 Kolom */
.katalog-kursus {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* Setiap Kartu Menempati 3 Baris Trek Induk */
.kartu-kursus {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3; /* Melintasi: 1. Header, 2. Konten, 3. Tombol Aksi */
  background: white;
  border-radius: 12px;
}
\`\`\`

### Hasil Visual:
Semua judul kartu akan memiliki tinggi yang sama rata, seluruh deskripsi sejajar rapi, dan semua tombol aksi di bagian bawah berada pada garis horizontal yang sejajar sempurna, terlepas dari perbedaan panjang teks masing-masing kartu!
`
  },
  {
    id: "lesson-css-int-07",
    courseId: "course-css-int-11",
    slug: "css-scroll-snap-carousel-murni",
    title: "7. CSS Scroll Snap untuk Carousel & Section Snapping Murni",
    summary: "Bangun komponen slider atau carousel mulus tanpa library JavaScript tambahan dengan Scroll Snap API.",
    order: 7,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 7. CSS Scroll Snap untuk Carousel & Section Snapping Murni

**CSS Scroll Snap** memungkinkan Anda mengunci posisi scroll pada titik tertentu saat pengguna menggeser (*swipe*) atau menggulir mouse, memberikan pengalaman geser yang presisi seperti aplikasi native tanpa ketergantungan plugin JavaScript yang berat.

---

## Konsep: Kontainer vs Item Anak

1. **Pada Elemen Kontainer**: Tentukan arah dan tingkat ketegasan snap dengan \`scroll-snap-type\`.
2. **Pada Elemen Anak**: Tentukan titik jangkar snap dengan \`scroll-snap-align\`.

\`\`\`css
/* Kontainer Carousel */
.slider-galeri {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory; /* x = horizontal, mandatory = wajib mengunci */
  scroll-behavior: smooth;
  gap: 16px;
  padding: 16px;
}

/* Setiap Slide Kartu */
.slide-item {
  flex: 0 0 85%; /* Menampilkan 85% lebar kartu */
  scroll-snap-align: center; /* Mengunci tepat di tengah layar */
  scroll-snap-stop: always;  /* Mencegah scroll melompati banyak slide */
  border-radius: 16px;
}
\`\`\`

---

## Properti Kunci:
- **\`mandatory\`**: Layar wajib berhenti di salah satu target snap ketika pengguna selesai menggulir.
- **\`proximity\`**: Layar hanya mengunci jika pengguna berhenti sangat dekat dengan target snap.
- **\`scroll-padding\`**: Memberi jarak aman pada kontainer agar slide tidak tertutup oleh header sticky.
`
  },
  {
    id: "lesson-css-int-08",
    courseId: "course-css-int-11",
    slug: "efek-visual-backdrop-filter-glassmorphism",
    title: "8. Efek Visual Modern: Backdrop-Filter, Blend Modes, & Glassmorphism",
    summary: "Rancang efek blur latar belakang kaca (frosted glass), gradien mesh dinamis, dan penyesuaian kontras.",
    order: 8,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 8. Efek Visual Modern: Backdrop-Filter, Blend Modes, & Glassmorphism

Desain web modern sering memanfaatkan efek kedalaman visual (*visual depth*), pantulan kaca buram (*frosted glass*), dan percampuran warna dinamis yang memikat mata namun tetap mempertahankan keterbacaan teks (*accessibility*).

---

## 1. Frosted Glass dengan \`backdrop-filter\`

Perbedaan mendasar antara \`filter\` dan \`backdrop-filter\`:
- \`filter\`: Mengaburkan elemen itu sendiri beserta seluruh teks dan gambarnya.
- \`backdrop-filter\`: Mengaburkan area **di balik** elemen transparan, sementara teks dan tombol di atasnya tetap tajam kristal!

\`\`\`css
.navbar-kaca {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

[data-bs-theme="dark"] .navbar-kaca {
  background: rgba(15, 23, 42, 0.75);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
\`\`\`

---

## 2. Percampuran Warna dengan \`mix-blend-mode\`

\`mix-blend-mode\` menentukan bagaimana konten suatu elemen bercampur dengan elemen di bawahnya (mirip fitur Blending Modes di Photoshop atau Figma):

\`\`\`css
/* Membuat watermark teks otomatis menyesuaikan kontras dengan gambar di belakangnya */
.teks-watermark {
  mix-blend-mode: difference;
  color: white;
}
\`\`\`
`
  }
];
