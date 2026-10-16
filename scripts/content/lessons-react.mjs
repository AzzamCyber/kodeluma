// lessons-react.mjs
// 6 Comprehensive W3Schools/MDN-grade lessons for React & Komponen Web Modern (course-react-15)

export const REACT_LESSONS = [
  {
    id: "lesson-react-01",
    courseId: "course-react-15",
    slug: "fondasi-react-virtual-dom-jsx",
    title: "1. Fondasi React: Virtual DOM, Komponen Fungsi, & Sintaks JSX",
    summary: "Pahami perbedaan manipulasi DOM imperatif vs deklaratif dan tulis elemen antarmuka via JSX.",
    order: 1,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 1. Fondasi React: Virtual DOM, Komponen Fungsi, & Sintaks JSX

**React** adalah library JavaScript sumber terbuka yang dikembangkan oleh Meta untuk membangun antarmuka pengguna (*User Interface*) berbasis komponen yang modular dan reaktif.

---

## Imperatif vs Deklaratif & Virtual DOM

- **JavaScript Murni (Imperatif)**: Anda harus memberi instruksi langkah-demi-langkah ke browser: \`document.getElementById()\`, \`createElement()\`, \`appendChild()\`. Ini lambat dan rawan bug saat state bertambah banyak.
- **React (Deklaratif)**: Anda cukup menyatakan *"tampilan seperti apa yang diinginkan untuk state saat ini"*, dan React akan mengurus render optimal ke layar.

### Virtual DOM (VDOM)
React menyimpan representasi virtual dari pohon DOM di memori. Saat terjadi perubahan data, React membandingkan VDOM baru dengan VDOM lama (*Diffing Algorithm*) dan **hanya memperbarui elemen yang benar-benar berubah di DOM browser nyata**, menghasilkan performa rendering super cepat.

---

## Sintaks JSX (JavaScript XML)

JSX memungkinkan kita menulis markup mirip HTML langsung di dalam JavaScript:

\`\`\`jsx
function SambutanPengguna() {
  const nama = "Azzam";
  const statusAktif = true;

  return (
    <div className="kartu-profil">
      <h2>Halo, {nama}!</h2>
      <p>Status: {statusAktif ? "Online" : "Offline"}</p>
    </div>
  );
}
\`\`\`

> **Aturan JSX:** Gunakan \`className\` bukan \`class\`, \`htmlFor\` bukan \`for\`, dan setiap tag yang terbuka wajib ditutup (misal \`<img />\` atau \`<input />\`).
`
  },
  {
    id: "lesson-react-02",
    courseId: "course-react-15",
    slug: "komponen-dan-props-reusable-ui",
    title: "2. Komponen & Props: Membangun UI Reusable",
    summary: "Bagi UI menjadi potongan-potongan mandiri dan alirkan data searah (one-way data flow) melalui Props.",
    order: 2,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 2. Komponen & Props: Membangun UI Reusable

Salah satu kekuatan terbesar React adalah kemampuan memecah antarmuka kompleks menjadi komponen-komponen kecil yang dapat digunakan kembali (*reusable components*).

---

## Melewatkan Data via Props

**Props** (*Properties*) adalah argumen yang dilewatkan dari komponen induk (*parent*) ke komponen anak (*child*). Props bersifat **Read-Only (Immutable)**; anak tidak boleh mengubah props yang diterimanya secara langsung.

\`\`\`jsx
// Komponen Anak
function KartuKursus({ judul, kategori, durasiJam, terbit }) {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <span className="badge bg-primary mb-2">{kategori}</span>
        <h5 className="card-title">{judul}</h5>
        <p className="card-text text-muted">Estimasi: {durasiJam} Jam</p>
        {terbit && <span className="text-success small fw-bold">✓ Tersedia</span>}
      </div>
    </div>
  );
}

// Komponen Induk
function DaftarKelas() {
  return (
    <div className="container py-4">
      <KartuKursus judul="HTML Dasar" kategori="Web" durasiJam={3} terbit={true} />
      <KartuKursus judul="React Modern" kategori="Frontend" durasiJam={5} terbit={true} />
    </div>
  );
}
\`\`\`
`
  },
  {
    id: "lesson-react-03",
    courseId: "course-react-15",
    slug: "state-manajemen-hook-usestate",
    title: "3. State Manajemen Interaktif dengan Hook useState",
    summary: "Simpan data reaktif yang berubah-ubah seiring interaksi pengguna dan picu render ulang otomatis.",
    order: 3,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 3. State Manajemen Interaktif dengan Hook useState

Berbeda dengan Props yang datang dari luar, **State** adalah memori internal komponen yang menyimpan data dinamis (seperti teks formulir, status modal terbuka/tertutup, atau data keranjang belanja).

---

## Anatomi Hook \`useState\`

\`\`\`jsx
import React, { useState } from 'react';

function CounterInteraktif() {
  // [nilaiState, fungsiPengubahState] = useState(nilaiAwal);
  const [hitung, setHitung] = useState(0);

  const tambah = () => {
    // Pola functional updater aman untuk update konkuren:
    setHitung(prev => prev + 1);
  };

  const reset = () => setHitung(0);

  return (
    <div className="p-4 border rounded text-center">
      <h3>Penghitung: {hitung}</h3>
      <div className="btn-group mt-2">
        <button className="btn btn-outline-danger" onClick={() => setHitung(prev => Math.max(0, prev - 1))}>
          Kurang (-)
        </button>
        <button className="btn btn-outline-secondary" onClick={reset}>
          Reset
        </button>
        <button className="btn btn-primary" onClick={tambah}>
          Tambah (+)
        </button>
      </div>
    </div>
  );
}
\`\`\`
`
  },
  {
    id: "lesson-react-04",
    courseId: "course-react-15",
    slug: "event-handling-controlled-components",
    title: "4. Event Handling & Controlled Form Components",
    summary: "Tangani event klik, ketikan keyboard, dan kelola input formulir melalui state (Controlled Components).",
    order: 4,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 4. Event Handling & Controlled Form Components

Di HTML standar, elemen formulir seperti \`<input>\` atau \`<textarea>\` menyimpan nilainya sendiri di DOM. Dalam React, kita menggunakan pola **Controlled Components**, di mana State React menjadi *"Single Source of Truth"* bagi elemen form tersebut.

---

## Formulir Input Terkontrol (Controlled Input)

\`\`\`jsx
import React, { useState } from 'react';

function FormPendaftaran() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    jurusan: 'frontend'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data terkirim:', formData);
    alert(\`Selamat datang, \${formData.nama}!\`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 bg-light rounded">
      <div className="mb-3">
        <label className="form-label">Nama Lengkap</label>
        <input 
          type="text" 
          name="nama" 
          className="form-control" 
          value={formData.nama} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input 
          type="email" 
          name="email" 
          className="form-control" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      <button type="submit" className="btn btn-success">Daftar Sekarang</button>
    </form>
  );
}
\`\`\`
`
  },
  {
    id: "lesson-react-05",
    courseId: "course-react-15",
    slug: "side-effects-lifecycle-useeffect",
    title: "5. Efek Samping & Siklus Hidup dengan useEffect",
    summary: "Sinkronkan komponen dengan sistem eksternal, konsumsi API via Fetch, dan lakukan cleanup timer/listener.",
    order: 5,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 5. Efek Samping & Siklus Hidup dengan useEffect

Fungsi komponen React harus bersifat murni (*pure functions*): menerima props dan mengembalikan JSX tanpa mengubah variabel luar. Namun aplikasi nyata membutuhkan **Side Effects** (efek samping), seperti mengambil data dari server, mengubah judul halaman, atau mengatur interval timer.

---

## Pola Dasar \`useEffect\`

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function PengambilDataKursus() {
  const [kursus, setKursus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Berjalan saat komponen dipasang (mount)
    let aktif = true;

    async function fetchData() {
      try {
        const res = await fetch('/api/v1/courses');
        const data = await res.json();
        if (aktif) {
          setKursus(data);
          setLoading(false);
        }
      } catch (err) {
        console.error('Gagal mengambil data:', err);
      }
    }

    fetchData();

    // Cleanup function: dipanggil saat unmount atau sebelum efek berikutnya
    return () => {
      aktif = false;
    };
  }, []); // Array kosong [] = hanya berjalan 1x saat pertama kali mount

  if (loading) return <p>Memuat katalog materi...</p>;
  return <ul>{kursus.map(item => <li key={item.id}>{item.title}</li>)}</ul>;
}
\`\`\`
`
  },
  {
    id: "lesson-react-06",
    courseId: "course-react-15",
    slug: "rendering-kondisional-daftar-keys",
    title: "6. Rendering Kondisional & Optimasi Daftar dengan Kunci Unik",
    summary: "Rancang antarmuka dinamis dengan operator ternary, short-circuit &&, dan iterasi array via map().",
    order: 6,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 6. Rendering Kondisional & Optimasi Daftar dengan Kunci Unik

Dalam aplikasi web, kita sering kali perlu menampilkan antarmuka yang berbeda tergantung kondisi (misal: menampilkan tombol *Login* saat belum masuk, atau tombol *Profil* saat sudah masuk).

---

## 1. Tiga Teknik Rendering Kondisional

1. **Operator Ternary (\`kondisi ? <A /> : <B />\`)**:
   \`\`\`jsx
   {isLoggedIn ? <TombolKeluar /> : <TombolMasuk />}
   \`\`\`
2. **Short-Circuit AND (\`kondisi && <Komponen />\`)**:
   \`\`\`jsx
   {notifikasiAda && <BadgePeringatan hitung={notifikasiCount} />}
   \`\`\`
3. **Early Return**:
   \`\`\`jsx
   if (error) return <TampilanError pesan={error.message} />;
   \`\`\`

---

## 2. Merender Daftar Dinamis dengan \`.map()\` dan Atribut \`key\`

\`\`\`jsx
const DAFTAR_TOPIK = [
  { id: 't1', nama: 'Frontend Web' },
  { id: 't2', nama: 'Backend API' },
  { id: 't3', nama: 'DevOps & Cloud' }
];

function MenuNavigasi() {
  return (
    <nav className="nav flex-column">
      {DAFTAR_TOPIK.map(topik => (
        // Atribut key unik pada elemen terluar dalam perulangan:
        <a key={topik.id} href={\`#\${topik.id}\`} className="nav-link">
          {topik.nama}
        </a>
      ))}
    </nav>
  );
}
\`\`\`
`
  }
];
