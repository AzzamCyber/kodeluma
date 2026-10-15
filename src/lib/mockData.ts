import { Course, Lesson, Project, Quiz, ForumThread, ForumCategory } from '@/types/domain';

export const MOCK_CATEGORIES: ForumCategory[] = [
  { slug: 'umum', name: 'Umum', description: 'Diskusi seputar tips belajar dan perkenalan' },
  { slug: 'html', name: 'HTML', description: 'Pertanyaan seputar struktur tag dan semantic web' },
  { slug: 'css', name: 'CSS', description: 'Diskusi styling, Flexbox, Grid, dan responsivitas' },
  { slug: 'javascript', name: 'JavaScript', description: 'Logika dasar, manipulasi DOM, dan event' },
  { slug: 'proyek', name: 'Proyek', description: 'Berbagi hasil proyek praktik dan ulasan rekan' },
];

export const MOCK_COURSES: Course[] = [
  {
    id: 'course-html-01',
    slug: 'html-dasar',
    title: 'HTML Dasar',
    summary: 'Pelajari kerangka website dan buat halaman web pertamamu dari nol.',
    description:
      'HTML (HyperText Markup Language) adalah bahasa standar pembuatan struktur website. Di kelas ini, kamu akan mempelajari anatomi tag, semantic markup, pembuatan form, dan menyusun halaman profil pribadi yang bersih dan terstruktur.',
    category: 'html',
    level: 'pemula',
    status: 'published',
    curriculumVersion: 1,
    estimatedMinutes: 90,
    coverUrl: '/brand/kodeluma-icon.png',
    lessonsCount: 3,
    createdAt: '2026-10-01T08:00:00Z',
    updatedAt: '2026-10-15T08:00:00Z',
  },
  {
    id: 'course-css-02',
    slug: 'css-fundamental',
    title: 'CSS Fundamental',
    summary: 'Ubah halaman polos menjadi rapi, menarik, dan nyaman dipandang di semua ukuran layar.',
    description:
      'CSS (Cascading Style Sheets) memberi warna, proporsi, dan keindahan pada halaman web. Pelajari selector modern, box model, teknik tata letak Flexbox, hingga pembuatan layout responsif yang adaptif untuk smartphone.',
    category: 'css',
    level: 'pemula',
    status: 'published',
    curriculumVersion: 1,
    estimatedMinutes: 120,
    coverUrl: '/brand/kodeluma-icon.png',
    lessonsCount: 3,
    createdAt: '2026-10-02T08:00:00Z',
    updatedAt: '2026-10-15T08:00:00Z',
  },
  {
    id: 'course-js-03',
    slug: 'javascript-pemula',
    title: 'JavaScript Pemula',
    summary: 'Tambahkan interaktivitas dinamis dan logika pemrograman ke dalam websitemu.',
    description:
      'Jadikan websitemu hidup dengan JavaScript. Mulai dari pemahaman variabel, tipe data dasar, percabangan logika, perulangan, hingga berinteraksi langsung dengan elemen HTML melalui DOM (Document Object Model).',
    category: 'javascript',
    level: 'pemula',
    status: 'published',
    curriculumVersion: 1,
    estimatedMinutes: 150,
    coverUrl: '/brand/kodeluma-icon.png',
    lessonsCount: 3,
    createdAt: '2026-10-03T08:00:00Z',
    updatedAt: '2026-10-15T08:00:00Z',
  },
];

export const MOCK_LESSONS: Record<string, Lesson[]> = {
  'course-html-01': [
    {
      id: 'lesson-html-01',
      courseId: 'course-html-01',
      slug: 'apa-itu-html',
      title: '1. Apa Itu HTML & Anatomi Dokumen',
      summary: 'Memahami peran HTML dalam pengembangan web dan struktur dasar file .html.',
      order: 1,
      isRequired: true,
      status: 'published',
      bodyMarkdown: `## Selamat Datang di Dunia Web!

HTML (HyperText Markup Language) adalah bahasa fondasi internet. Setiap website yang kamu buka di browser pada dasarnya dibangun di atas struktur HTML.

### Struktur Dokumen Dasar

Setiap dokumen HTML diawali dengan deklarasi \`<!DOCTYPE html>\` yang memberi tahu browser bahwa kita menggunakan standar HTML5 modern.

\`\`\`html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website Pertamaku</title>
  </head>
  <body>
    <h1>Halo, Dunia!</h1>
    <p>Ini adalah paragraf pertama saya di Kodeluma.</p>
  </body>
</html>
\`\`\`

### Penjelasan Elemen Penting:
- **\`<head>\`**: Berisi metadata atau informasi tentang halaman web (seperti judul di tab browser dan setelan karakter), yang tidak langsung tampak di layar utama.
- **\`<body>\`**: Tempat di mana seluruh konten visual website berada, mulai dari teks, gambar, video, hingga tombol aksi.

> **Tips Belajar:** Coba buka editor teks dan simpan kode di atas dengan nama \`index.html\`, lalu klik ganda untuk membukanya di browser!
`,
    },
    {
      id: 'lesson-html-02',
      courseId: 'course-html-01',
      slug: 'tag-elemen-dan-atribut',
      title: '2. Tag, Elemen, dan Atribut Teks',
      summary: 'Mengenal hierarki heading (h1-h6), paragraf, tautan, dan gambar.',
      order: 2,
      isRequired: true,
      status: 'published',
      bodyMarkdown: `## Tag dan Atribut Penting

Dalam HTML, sebagian besar elemen terdiri dari tag pembuka, isi konten, dan tag penutup.

### 1. Hierarki Judul (Heading)
HTML menyediakan 6 level heading, mulai dari \`<h1>\` (terbesar dan paling penting) hingga \`<h6>\`:

\`\`\`html
<h1>Judul Utama Artikel</h1>
<h2>Sub-bagian Topik</h2>
<h3>Poin Rincian</h3>
\`\`\`

### 2. Tautan (Hyperlink)
Tag \`<a>\` (anchor) digunakan untuk berpindah halaman atau mengarahkan ke link eksternal:

\`\`\`html
<a href="https://kodeluma.azzamcodex.dev" target="_blank" rel="noopener noreferrer">
  Kunjungi Kodeluma
</a>
\`\`\`

Atribut \`href\` menentukan alamat tujuan tautan.

### 3. Gambar (Image)
Tag \`<img>\` adalah elemen *self-closing* yang membutuhkan atribut \`src\` (sumber gambar) dan \`alt\` (teks alternatif):

\`\`\`html
<img src="/brand/kodeluma-icon.png" alt="Logo Kodeluma" width="120">
\`\`\`

> **Penting:** Atribut \`alt\` sangat krusial untuk aksesibilitas (pembaca tunanetra menggunakan screen reader) serta SEO mesin pencari.
`,
    },
    {
      id: 'lesson-html-03',
      courseId: 'course-html-01',
      slug: 'membuat-halaman-profil',
      title: '3. Membuat Halaman Profil Semantik',
      summary: 'Menggunakan semantic tags seperti header, main, section, dan footer.',
      order: 3,
      isRequired: true,
      status: 'published',
      bodyMarkdown: `## Semantic HTML: Struktur yang Bermakna

Semantic HTML adalah penggunaan tag yang menjelaskan maknanya sendiri baik kepada browser maupun developer pembaca kode.

### Mengapa Menggunakan Semantic Tags?
Bandingkan antara menumpuk \`<div>\` tanpa nama dengan struktur terarah:

\`\`\`html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Profil Saya</title>
</head>
<body>
  <header>
    <h1>Ahmad Fauzi</h1>
    <p>Calon Web Developer Pemula</p>
  </header>

  <main>
    <section>
      <h2>Tentang Saya</h2>
      <p>Saya sedang belajar coding di platform Kodeluma.</p>
    </section>

    <section>
      <h2>Keahlian yang Sedang Dipelajari</h2>
      <ul>
        <li>HTML5 Dasar</li>
        <li>CSS Layout</li>
        <li>Dasar Logika Pemrograman</li>
      </ul>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Ahmad Fauzi. Dibuat dengan semangat belajar.</p>
  </footer>
</body>
</html>
\`\`\`

### Ringkasan Modul HTML
Kamu telah memahami:
1. Kerangka dasar dokumen HTML5.
2. Penggunaan tag teks, heading, link, dan image.
3. Penataan halaman menggunakan tag semantik (\`<header>\`, \`<main>\`, \`<section>\`, \`<footer>\`).

Langkah berikutnya: Uji pemahamanmu lewat kuis singkat sebelum melanjutkan ke proyek praktik!
`,
    },
  ],
  'course-css-02': [
    {
      id: 'lesson-css-01',
      courseId: 'course-css-02',
      slug: 'mengenal-selector-css',
      title: '1. Mengenal Selector & Sintaks CSS',
      summary: 'Cara menghubungkan CSS ke HTML dan memilih elemen yang ingin dihias.',
      order: 1,
      isRequired: true,
      status: 'published',
      bodyMarkdown: `## Apa itu Selector CSS?

CSS menghubungkan aturan tampilan dengan elemen HTML melalui *selector*.

\`\`\`css
/* Memilih semua elemen h1 */
h1 {
  color: #2563eb;
  font-size: 32px;
}

/* Memilih elemen dengan class "tombol-aksi" */
.tombol-aksi {
  background-color: #2563eb;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
}

/* Memilih elemen dengan id "konten-utama" */
#konten-utama {
  max-width: 800px;
  margin: 0 auto;
}
\`\`\`

Gunakan \`class\` untuk styling yang bisa dipakai berulang kali, dan \`id\` hanya untuk elemen unik satu-satunya di halaman.
`,
    },
    {
      id: 'lesson-css-02',
      courseId: 'course-css-02',
      slug: 'box-model-dan-spacing',
      title: '2. Box Model: Margin, Border, Padding',
      summary: 'Memahami bagaimana browser menghitung dimensi setiap elemen di layar.',
      order: 2,
      isRequired: true,
      status: 'published',
      bodyMarkdown: `## Memahami Box Model

Setiap elemen HTML dianggap sebagai sebuah kotak ("box") oleh browser yang terdiri dari:

1. **Content**: Konten teks atau gambar sesungguhnya.
2. **Padding**: Ruang bernapas antara konten dengan garis tepi (*border*).
3. **Border**: Garis tepi pembungkus elemen.
4. **Margin**: Jarak antara elemen ini dengan elemen tetangga di luarnya.

\`\`\`css
.kotak-kartu {
  width: 300px;
  padding: 24px;         /* ruang di dalam kotak */
  border: 1px solid #e2e9f1; /* garis tepi */
  margin: 16px;          /* jarak luar */
  box-sizing: border-box; /* pastikan padding tidak menambah total lebar */
}
\`\`\`
`,
    },
    {
      id: 'lesson-css-03',
      courseId: 'course-css-02',
      slug: 'flexbox-dan-layout',
      title: '3. Flexbox & Desain Responsif',
      summary: 'Menata posisi elemen secara horizontal/vertikal dan merespons ukuran layar ponsel.',
      order: 3,
      isRequired: true,
      status: 'published',
      bodyMarkdown: `## Tata Letak Modern dengan Flexbox

Flexbox adalah modul tata letak satu dimensi yang memudahkan perataan dan distribusi ruang antar elemen.

\`\`\`css
.wadah-flex {
  display: flex;
  justify-content: space-between; /* mendistribusikan elemen ke kiri dan kanan */
  align-items: center;            /* meratakan vertikal di tengah */
  gap: 16px;                      /* jarak antar anak elemen */
}
\`\`\`

### Media Queries untuk Layar Ponsel
\`\`\`css
@media (max-width: 768px) {
  .wadah-flex {
    flex-direction: column; /* tumpuk ke bawah saat di layar smartphone */
  }
}
\`\`\`
`,
    },
  ],
  'course-js-03': [
    {
      id: 'lesson-js-01',
      courseId: 'course-js-03',
      slug: 'variabel-dan-tipe-data',
      title: '1. Variabel dan Tipe Data Dasar',
      summary: 'Menyimpan nilai ke memori komputer menggunakan let dan const.',
      order: 1,
      isRequired: true,
      status: 'published',
      bodyMarkdown: `## Memulai Logika JavaScript

JavaScript adalah bahasa pemrograman yang membuat halaman web menjadi interaktif.

\`\`\`javascript
// Deklarasi variabel
const namaPlatform = "Kodeluma"; // Nilai tetap tidak berubah
let skorBelajar = 85;             // Nilai dapat diubah
let sudahSelesai = false;         // Boolean (true/false)

console.log("Selamat datang di " + namaPlatform);
\`\`\`

Gunakan \`const\` sebagai pilihan utama, dan hanya gunakan \`let\` jika nilainya memang perlu diubah nantinya.
`,
    },
    {
      id: 'lesson-js-02',
      courseId: 'course-js-03',
      slug: 'percabangan-dan-perulangan',
      title: '2. Percabangan Logika & Pengambilan Keputusan',
      summary: 'Menggunakan if/else untuk menjalankan instruksi berdasarkan kondisi tertentu.',
      order: 2,
      isRequired: true,
      status: 'published',
      bodyMarkdown: `## Percabangan if/else

Komputer dapat mengambil keputusan berdasarkan kondisi nilai:

\`\`\`javascript
const nilaiKuis = 75;
const nilaiKelulusan = 70;

if (nilaiKuis >= nilaiKelulusan) {
  console.log("Selamat, kamu lulus modul ini!");
} else {
  console.log("Belum mencapai 70%. Silakan coba kembali.");
}
\`\`\`
`,
    },
    {
      id: 'lesson-js-03',
      courseId: 'course-js-03',
      slug: 'dom-dan-event',
      title: '3. Menghubungkan JS ke HTML via DOM & Event',
      summary: 'Merespons klik tombol dan mengubah teks di halaman web secara langsung.',
      order: 3,
      isRequired: true,
      status: 'published',
      bodyMarkdown: `## DOM (Document Object Model)

DOM memungkinkan JavaScript membaca dan memodifikasi elemen HTML di halaman browser.

\`\`\`javascript
// Memilih tombol dan elemen teks
const tombol = document.querySelector("#tombol-sapa");
const salam = document.querySelector("#pesan-salam");

// Mendengarkan interaksi klik
tombol.addEventListener("click", () => {
  salam.textContent = "Halo! Kamu berhasil menjalankan kode JavaScript pertamamu.";
  salam.style.color = "#16805D";
});
\`\`\`
`,
    },
  ],
};

export const MOCK_QUIZZES: Record<string, Quiz> = {
  'course-html-01': {
    id: 'quiz-html-01',
    courseId: 'course-html-01',
    title: 'Kuis Evaluasi Pemahaman HTML Dasar',
    passScorePercent: 70,
    questions: [
      {
        id: 'q1',
        question: 'Tag mana yang tepat digunakan untuk membuat tautan (link) ke halaman lain?',
        options: [
          { id: 'a', text: '<link>' },
          { id: 'b', text: '<a>' },
          { id: 'c', text: '<href>' },
          { id: 'd', text: '<nav>' },
        ],
        correctOptionId: 'b',
        explanation: 'Tag <a> (anchor) dengan atribut href digunakan untuk membuat hyperlink antar halaman web.',
      },
      {
        id: 'q2',
        question: 'Apa fungsi atribut alt pada tag <img> dalam HTML?',
        options: [
          { id: 'a', text: 'Menentukan ukuran tinggi gambar' },
          { id: 'b', text: 'Membuat animasi berputar pada gambar' },
          { id: 'c', text: 'Menyediakan teks alternatif jika gambar gagal dimuat dan membantu aksesibilitas' },
          { id: 'd', text: 'Mengubah format file gambar secara otomatis' },
        ],
        correctOptionId: 'c',
        explanation: 'Atribut alt menyediakan deskripsi teks alternatif untuk screen reader dan saat gambar tidak bisa dibuka.',
      },
      {
        id: 'q3',
        question: 'Elemen heading mana yang memiliki tingkat hierarki paling tinggi dalam satu halaman?',
        options: [
          { id: 'a', text: '<h6>' },
          { id: 'b', text: '<header>' },
          { id: 'c', text: '<h1>' },
          { id: 'd', text: '<head>' },
        ],
        correctOptionId: 'c',
        explanation: '<h1> adalah heading level 1, mewakili judul utama paling krusial pada halaman.',
      },
    ],
  },
  'course-css-02': {
    id: 'quiz-css-02',
    courseId: 'course-css-02',
    title: 'Kuis Evaluasi Pemahaman CSS Fundamental',
    passScorePercent: 70,
    questions: [
      {
        id: 'q1',
        question: 'Bagaimana cara memilih elemen dengan class bernama "kartu" di CSS?',
        options: [
          { id: 'a', text: '#kartu' },
          { id: 'b', text: '.kartu' },
          { id: 'c', text: 'kartu' },
          { id: 'd', text: '@kartu' },
        ],
        correctOptionId: 'b',
        explanation: 'Tanda titik (.) digunakan sebagai prefix untuk class selector di CSS.',
      },
      {
        id: 'q2',
        question: 'Apa perbedaan mendasar antara margin dan padding pada Box Model?',
        options: [
          { id: 'a', text: 'Padding adalah ruang di luar border, sedangkan margin di dalam border' },
          { id: 'b', text: 'Margin adalah ruang di dalam border, sedangkan padding di luar border' },
          { id: 'c', text: 'Padding adalah ruang di dalam border, sedangkan margin adalah ruang di luar border' },
          { id: 'd', text: 'Keduanya sama dan tidak memiliki perbedaan cara kerja' },
        ],
        correctOptionId: 'c',
        explanation: 'Padding memberi jarak antara isi dengan border, sedangkan margin memberi jarak ke elemen luar.',
      },
      {
        id: 'q3',
        question: 'Properti Flexbox apa yang digunakan untuk meratakan elemen anak di sepanjang sumbu utama (main axis)?',
        options: [
          { id: 'a', text: 'align-items' },
          { id: 'b', text: 'justify-content' },
          { id: 'c', text: 'flex-direction' },
          { id: 'd', text: 'grid-template' },
        ],
        correctOptionId: 'b',
        explanation: 'justify-content mengatur perataan sepanjang main axis (horizontal secara default pada row).',
      },
    ],
  },
  'course-js-03': {
    id: 'quiz-js-03',
    courseId: 'course-js-03',
    title: 'Kuis Evaluasi Pemahaman JavaScript Pemula',
    passScorePercent: 70,
    questions: [
      {
        id: 'q1',
        question: 'Kata kunci mana yang sebaiknya digunakan jika nilai variabel tidak boleh diubah kembali?',
        options: [
          { id: 'a', text: 'let' },
          { id: 'b', text: 'var' },
          { id: 'c', text: 'const' },
          { id: 'd', text: 'static' },
        ],
        correctOptionId: 'c',
        explanation: 'const digunakan untuk variabel yang nilainya konstan dan tidak di-reassign.',
      },
      {
        id: 'q2',
        question: 'Method apa yang digunakan untuk mendengarkan interaksi pengguna seperti klik pada elemen DOM?',
        options: [
          { id: 'a', text: 'addEventListener' },
          { id: 'b', text: 'triggerClick' },
          { id: 'c', text: 'attachEvent' },
          { id: 'd', text: 'createListener' },
        ],
        correctOptionId: 'a',
        explanation: 'addEventListener("click", callback) adalah metode standar modern untuk menangani interaksi pengguna.',
      },
      {
        id: 'q3',
        question: 'Apa hasil dari ekspresi perbandingan 5 > 3 dalam JavaScript?',
        options: [
          { id: 'a', text: '"true"' },
          { id: 'b', text: 'true' },
          { id: 'c', text: '1' },
          { id: 'd', text: 'undefined' },
        ],
        correctOptionId: 'b',
        explanation: 'Operasi 5 > 3 menghasilkan nilai boolean true primitif.',
      },
    ],
  },
};

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'project-html-01',
    slug: 'halaman-profil-sederhana',
    courseId: 'course-html-01',
    title: 'Halaman Profil Sederhana',
    summary: 'Bangun halaman biodata diri dengan struktur HTML5 semantik dan navigasi yang jelas.',
    brief:
      'Terapkan pemahamanmu tentang struktur dokumen HTML5. Buat sebuah halaman profil diri yang memuat header dengan nama dan foto profil, bagian biodata/tentang saya, daftar keahlian menggunakan unordered list (ul), serta footer hak cipta yang rapi.',
    requirements: [
      'Gunakan struktur semantik HTML5 yang valid (<header>, <main>, <section>, <footer>).',
      'Sertakan minimal satu gambar dengan atribut alt yang deskriptif.',
      'Sertakan daftar keahlian menggunakan tag <ul> dan <li>.',
      'Sertakan minimal dua link navigasi yang berfungsi dengan atribut rel yang aman.',
    ],
    difficulty: 'pemula',
    status: 'published',
    createdAt: '2026-10-05T08:00:00Z',
    updatedAt: '2026-10-15T08:00:00Z',
  },
  {
    id: 'project-css-02',
    slug: 'kartu-produk-responsif',
    courseId: 'course-css-02',
    title: 'Kartu Produk Responsif',
    summary: 'Rancang kartu profil produk interaktif dengan CSS Flexbox dan breakpoint smartphone.',
    brief:
      'Gunakan CSS murni untuk mendesain kartu produk yang modern. Kartu harus memiliki gambar produk, badge kategori, judul, deskripsi harga, tombol Call-to-Action (CTA), dan efek hover yang halus. Tampilan harus rapi baik di layar desktop maupun layar ponsel 360px.',
    requirements: [
      'Gunakan Flexbox untuk menyusun elemen di dalam kartu.',
      'Terapkan Box Model dengan padding dan margin yang proporsional.',
      'Terapkan efek hover halus pada kartu dan tombol utama.',
      'Pastikan kartu tidak mengalami horizontal overflow pada lebar layar 360px.',
    ],
    difficulty: 'pemula',
    status: 'published',
    createdAt: '2026-10-06T08:00:00Z',
    updatedAt: '2026-10-15T08:00:00Z',
  },
];

export const MOCK_FORUM_THREADS: ForumThread[] = [
  {
    id: 'thread-01',
    authorId: 'user-demo-01',
    authorName: 'Rian Pratama',
    title: 'Mulai belajar HTML: Kapan sebaiknya menggunakan section vs div?',
    body: 'Halo teman-teman Kodeluma! Saya baru menyelesaikan modul HTML Dasar. Mau tanya, kapan sebaiknya kita memakai tag <section> dibanding <div> biasa? Apakah ada aturan baku untuk accessibility?',
    category: 'html',
    status: 'active',
    repliesCount: 3,
    createdAt: '2026-10-12T10:30:00Z',
    updatedAt: '2026-10-14T14:20:00Z',
  },
  {
    id: 'thread-02',
    authorId: 'user-demo-02',
    authorName: 'Siti Rahma',
    title: 'Tips memahami Flexbox justify-content dan align-items dengan mudah',
    body: 'Bagi yang sering tertukar antara justify-content dan align-items di Flexbox: kuncinya adalah mengingat arah flex-direction. Secara default row, justify-content untuk horizontal, align-items untuk vertikal. Semoga membantu!',
    category: 'css',
    status: 'active',
    repliesCount: 2,
    createdAt: '2026-10-13T09:15:00Z',
    updatedAt: '2026-10-13T16:00:00Z',
  },
  {
    id: 'thread-03',
    authorId: 'user-demo-03',
    authorName: 'Budi Santoso',
    title: 'Bagikan proyek halaman profil pertamamu di sini!',
    body: 'Yuk saling review proyek Halaman Profil Sederhana yang sudah disubmit! Cantumkan link repository GitHub atau demo preview kamu di kolom balasan.',
    category: 'proyek',
    status: 'active',
    repliesCount: 4,
    createdAt: '2026-10-14T11:00:00Z',
    updatedAt: '2026-10-15T12:00:00Z',
  },
];
