// lessons-nodejs.mjs
// 6 Comprehensive W3Schools/MDN-grade lessons for Node.js & Backend RESTful API (course-node-14)

export const NODEJS_LESSONS = [
  {
    id: "lesson-node-01",
    courseId: "course-node-14",
    slug: "pengenalan-nodejs-arsitektur-event-loop",
    title: "1. Pengenalan Node.js, V8 Engine, & Arsitektur Event Loop",
    summary: "Ketahui bagaimana JavaScript dijalankan di luar browser di sisi server melalui model non-blocking I/O.",
    order: 1,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 1. Pengenalan Node.js, V8 Engine, & Arsitektur Event Loop

**Node.js** adalah runtime environment sumber terbuka berbasis mesin JavaScript V8 milik Google Chrome. Node.js memungkinkan kita mengeksekusi kode JavaScript di sisi server (*server-side*), di luar peramban web.

---

## Mengapa Node.js Sangat Populer untuk Backend?

Tradisional web server (seperti Apache lama) menggunakan arsitektur *multi-threaded*: setiap ada koneksi baru dari klien, server membuat thread baru di memori. Jika ada 10.000 pengunjung simultan, server kehabisan RAM.

Sebaliknya, Node.js menggunakan model **Single-Threaded Event Loop** dengan **Non-Blocking I/O**:
1. Server menerima ribuan koneksi di satu thread utama.
2. Ketika ada tugas berat (membaca database atau file disk), Node.js mendelegasikannya ke thread pool latar belakang (**libuv**).
3. Thread utama langsung bebas melayani pengguna lain tanpa menunggu (*non-blocking*).
4. Saat tugas I/O selesai, sebuah callback dipicu di Event Loop.

---

## Menjalankan Skrip Pertama

\`\`\`javascript
// halo-node.js
const waktuSekarang = new Date().toLocaleTimeString('id-ID');
console.log(\`Halo dari Node.js! Waktu server saat ini: \${waktuSekarang}\`);
console.log('Versi Node.js:', process.version);
console.log('Platform OS:', process.platform);
\`\`\`

Jalankan di terminal:
\`\`\`bash
node halo-node.js
\`\`\`
`
  },
  {
    id: "lesson-node-02",
    courseId: "course-node-14",
    slug: "sistem-modul-commonjs-vs-es-modules",
    title: "2. Sistem Modul: CommonJS (require) vs ES Modules (import)",
    summary: "Pelajari cara memecah kode backend menjadi modul terpisah dan perbedaan require() vs import.",
    order: 2,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 2. Sistem Modul: CommonJS (require) vs ES Modules (import)

Dalam pengembangan backend skala besar, kode harus dibagi ke dalam file-file terpisah (*modul*) agar mudah diuji dan dirawat.

---

## 1. CommonJS (\`require\` dan \`module.exports\`)
Secara historis, CommonJS adalah sistem modul bawaan Node.js:

\`\`\`javascript
// matematika.js
function tambah(a, b) {
  return a + b;
}

function kali(a, b) {
  return a * b;
}

module.exports = { tambah, kali };
\`\`\`

Mengimpor di file lain:
\`\`\`javascript
// app.js
const { tambah, kali } = require('./matematika');
console.log(tambah(5, 10)); // 15
\`\`\`

---

## 2. ECMAScript Modules (ESM: \`import\` dan \`export\`)
ESM adalah standar resmi JavaScript modern. Tambahkan \`"type": "module"\` di \`package.json\`:

\`\`\`javascript
// utilitas.mjs
export function formatRupiah(angka) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(angka);
}
\`\`\`

\`\`\`javascript
// server.mjs
import { formatRupiah } from './utilitas.mjs';
console.log(formatRupiah(1500000)); // "Rp 1.500.000,00"
\`\`\`
`
  },
  {
    id: "lesson-node-03",
    courseId: "course-node-14",
    slug: "modul-bawaan-fs-path-http",
    title: "3. Modul Bawaan Inti: fs/promises, path, dan os",
    summary: "Manfaatkan library bawaan Node.js untuk manipulasi file sistem disk dan path direktori secara asynchronous.",
    order: 3,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 3. Modul Bawaan Inti: fs/promises, path, dan os

Node.js dilengkapi pustaka inti (*built-in modules*) canggih tanpa perlu menginstal dependensi tambahan dari npm.

---

## 1. Modul \`path\` untuk Kompatibilitas Lintas OS
Pemisah path di Windows menggunakan backslash (\`\\\`), sedangkan Linux/macOS menggunakan slash (\`/\`). Modul \`path.join()\` menyelesaikannya secara otomatis:

\`\`\`javascript
import path from 'path';

// Menggabungkan path dengan aman:
const lokasiFile = path.join(process.cwd(), 'data', 'laporan.json');
console.log('Ekstensi file:', path.extname(lokasiFile)); // .json
console.log('Nama file:', path.basename(lokasiFile));     // laporan.json
\`\`\`

---

## 2. Modul \`fs/promises\` untuk Membaca & Menulis File

\`\`\`javascript
import fs from 'fs/promises';
import path from 'path';

async function kelolaLaporan() {
  const filePath = path.join(process.cwd(), 'catatan.txt');

  // Menulis file:
  await fs.writeFile(filePath, 'Server berhasil diinisialisasi pada ' + new Date(), 'utf8');

  // Membaca file:
  const isi = await fs.readFile(filePath, 'utf8');
  console.log('Isi catatan:', isi);
}

kelolaLaporan().catch(console.error);
\`\`\`
`
  },
  {
    id: "lesson-node-04",
    courseId: "course-node-14",
    slug: "express-web-framework-routing",
    title: "4. Express.js: Framework Minimalis & Routing HTTP",
    summary: "Bangun server HTTP produksi dengan Express, daftarkan route GET, POST, PUT, DELETE, dan URL params.",
    order: 4,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 4. Express.js: Framework Minimalis & Routing HTTP

**Express** adalah framework web paling populer dan standar industri untuk ekosistem Node.js, menyediakan antarmuka routing dan penanganan permintaan HTTP yang sangat intuitif.

---

## Instalasi & Struktur Server Minimalis

\`\`\`bash
npm install express
\`\`\`

\`\`\`javascript
import express from 'express';

const app = express();
const PORT = 3000;

// Middleware bawaan untuk mem-parsing body JSON
app.use(express.json());

// In-memory data store
let daftarKursus = [
  { id: '1', judul: 'HTML Dasar', terbit: true },
  { id: '2', judul: 'Node.js Backend', terbit: true }
];

// 1. GET: Mengambil semua data
app.get('/api/v1/courses', (req, res) => {
  res.json({ sukses: true, data: daftarKursus });
});

// 2. GET dengan Parameter URL (:id)
app.get('/api/v1/courses/:id', (req, res) => {
  const kursus = daftarKursus.find(c => c.id === req.params.id);
  if (!kursus) {
    return res.status(404).json({ sukses: false, pesan: 'Kursus tidak ditemukan' });
  }
  res.json({ sukses: true, data: kursus });
});

app.listen(PORT, () => {
  console.log(\`Server berjalan di http://localhost:\${PORT}\`);
});
\`\`\`
`
  },
  {
    id: "lesson-node-05",
    courseId: "course-node-14",
    slug: "middleware-otentikasi-validasi",
    title: "5. Konsep Middleware: Logging, Validasi, & Autentikasi",
    summary: "Kuasai fungsi perantara (req, res, next) untuk filter keamanan, parsing token, dan logging akses.",
    order: 5,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 5. Konsep Middleware: Logging, Validasi, & Autentikasi

**Middleware** adalah fungsi yang memiliki akses ke objek permintaan (\`req\`), objek tanggapan (\`res\`), dan fungsi \`next\` dalam siklus request-response aplikasi.

---

## Siklus Hidup Middleware

\`\`\`text
Client Request  -->  [ Middleware 1 (Logger) ] 
                 -->  [ Middleware 2 (Auth Guard) ] 
                 -->  [ Route Controller ] 
                 -->  Client Response
\`\`\`

---

## 1. Custom Request Logger Middleware

\`\`\`javascript
const loggerMiddleware = (req, res, next) => {
  const waktu = new Date().toISOString();
  console.log(\`[\${waktu}] \${req.method} \${req.url}\`);
  next(); // Wajib dipanggil untuk meneruskan ke handler berikutnya!
};

app.use(loggerMiddleware);
\`\`\`

---

## 2. Middleware Autentikasi Bearer Token

\`\`\`javascript
const proteksiAuth = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ sukses: false, pesan: 'Akses ditolak: Token tidak valid' });
  }
  
  const token = authHeader.split(' ')[1];
  if (token !== 'rahasia-kodeluma-2026') {
    return res.status(403).json({ sukses: false, pesan: 'Token kedaluwarsa atau palsu' });
  }

  // Sisipkan user ke request
  req.user = { id: 'usr-admin', role: 'admin' };
  next();
};

// Endpoint yang dilindungi:
app.post('/api/v1/courses', proteksiAuth, (req, res) => {
  res.json({ sukses: true, pesan: 'Kursus berhasil dibuat oleh ' + req.user.role });
});
\`\`\`
`
  },
  {
    id: "lesson-node-06",
    courseId: "course-node-14",
    slug: "error-handling-arsitektur-rest-api",
    title: "6. Arsitektur RESTful API & Global Error Handling Standar Produksi",
    summary: "Susun kode backend dengan arsitektur MVC (Routes, Controllers, Services) dan tangani error 500 secara terpusat.",
    order: 6,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 6. Arsitektur RESTful API & Global Error Handling Standar Produksi

Menulis semua kode dalam satu file \`server.js\` hanya cocok untuk prototipe kecil. Di tingkat produksi, kita menerapkan pemisahan tugas (*Separation of Concerns*).

---

## Struktur Folder Standar REST API

\`\`\`text
src/
├── controllers/    # Logika bisnis respons & status HTTP
├── routes/         # Definisi rute URL
├── middlewares/    # Filter otentikasi & validasi
├── services/       # Interaksi database (Redis / PostgreSQL)
└── app.js          # Inisialisasi Express & Middleware
\`\`\`

---

## Global Error Handling Middleware

Express mengenali middleware penanganan error jika memiliki **4 parameter**: \`(err, req, res, next)\`:

\`\`\`javascript
// Diletakkan paling bawah setelah semua rute:
app.use((err, req, res, next) => {
  console.error('Terjadi kesalahan tak terduga:', err.stack);

  const status = err.statusCode || 500;
  const pesan = err.message || 'Terjadi kesalahan internal pada server';

  res.status(status).json({
    sukses: false,
    status,
    pesan,
    waktu: new Date().toISOString()
  });
});
\`\`\`
`
  }
];
