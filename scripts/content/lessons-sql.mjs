// lessons-sql.mjs
// 8 Comprehensive W3Schools/MDN-grade lessons for SQL Lanjutan, Relasi & Window Functions (course-sql-int-13)

export const SQL_MENENGAH_LESSONS = [
  {
    id: "lesson-sql-int-01",
    courseId: "course-sql-int-13",
    slug: "desain-relasi-database-normalisasi",
    title: "1. Desain Relasi Database & Normalisasi (1NF, 2NF, 3NF)",
    summary: "Rancang skema database relasional standar industri dan eliminasi anomali data melalui proses normalisasi.",
    order: 1,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 1. Desain Relasi Database & Normalisasi (1NF, 2NF, 3NF)

Desain skema basis data yang buruk akan menyebabkan redundansi data, pemborosan media penyimpanan, dan anomali saat melakukan modifikasi (*Insert, Update, Delete Anomalies*). **Normalisasi** adalah metode formal untuk mengorganisasi tabel-tabel relasional.

---

## Tiga Tahapan Utama Normalisasi (1NF, 2NF, 3NF)

### 1. First Normal Form (1NF) — Nilai Atomik
- Setiap sel kolom hanya boleh berisi **satu nilai tunggal (*atomic value*)**, bukan daftar string terpisah koma atau array.
- Memiliki primary key yang unik.
- Tidak ada grup kolom yang berulang (misal: \`telepon1\`, \`telepon2\`, \`telepon3\`).

### 2. Second Normal Form (2NF) — Ketergantungan Penuh
- Sudah memenuhi 1NF.
- Semua atribut non-kunci harus bergantung sepenuhnya pada **seluruh Primary Key**, bukan hanya sebagian (menghilangkan *Partial Dependency* pada composite key).

### 3. Third Normal Form (3NF) — Menghilangkan Ketergantungan Transitif
- Sudah memenuhi 2NF.
- Tidak ada atribut non-kunci yang bergantung pada atribut non-kunci lainnya (*No Transitive Dependency*).
- *Contoh:* Kolom \`nama_provinsi\` tidak boleh disimpan di tabel \`pesanan\`; simpanlah \`kota_id\`, lalu hubungkan ke tabel \`kota\` yang memiliki relasi ke \`provinsi\`.

---

## Praktik DDL Pembuatan Foreign Key & Constraint

\`\`\`sql
CREATE TABLE kategori (
    id SERIAL PRIMARY KEY,
    nama_kategori VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE kursus (
    id VARCHAR(50) PRIMARY KEY,
    judul VARCHAR(150) NOT NULL,
    kategori_id INT NOT NULL,
    CONSTRAINT fk_kursus_kategori 
        FOREIGN KEY (kategori_id) 
        REFERENCES kategori(id) 
        ON DELETE RESTRICT 
        ON UPDATE CASCADE
);
\`\`\`
`
  },
  {
    id: "lesson-sql-int-02",
    courseId: "course-sql-int-13",
    slug: "multi-table-complex-joins",
    title: "2. Multi-Table Complex Joins: INNER, LEFT, RIGHT, FULL, & CROSS",
    summary: "Gabungkan 3 atau lebih tabel sekaligus dengan efisien menggunakan relasi kunci primer dan asing.",
    order: 2,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 2. Multi-Table Complex Joins: INNER, LEFT, RIGHT, FULL, & CROSS

Dalam sistem nyata, informasi tersebar di banyak tabel relasional. Kemampuan menggabungkan baris data secara akurat adalah keahlian mendasar pengembang database tingkat menengah.

---

## Diagram Venn & Karakteristik JOIN

| Tipe JOIN | Data yang Ditampilkan |
| :--- | :--- |
| **INNER JOIN** | Hanya baris yang memiliki pasangan cocok di kedua tabel |
| **LEFT JOIN** | Semua baris tabel kiri; jika tabel kanan kosong, diisi \`NULL\` |
| **RIGHT JOIN** | Semua baris tabel kanan; jika tabel kiri kosong, diisi \`NULL\` |
| **FULL OUTER JOIN** | Semua baris dari kedua tabel; \`NULL\` jika tidak ada pasangan |
| **CROSS JOIN** | Perkalian kartesian ($N \\times M$) dari setiap kombinasi baris |

---

## Kueri Kompleks Menggabungkan 3 Tabel Sekaligus

Mengambil riwayat pendaftaran siswa, judul kursus, dan nama instruktur:

\`\`\`sql
SELECT 
    u.id AS user_id,
    u.nama_lengkap,
    c.judul AS nama_kursus,
    e.status AS status_belajar,
    e.tanggal_daftar
FROM pendaftaran e
INNER JOIN pengguna u ON e.user_id = u.id
INNER JOIN kursus c ON e.course_id = c.id
WHERE e.status = 'aktif'
ORDER BY e.tanggal_daftar DESC;
\`\`\`

> **Tips Performa:** Pastikan kolom yang digunakan dalam klausul \`ON\` (misal: \`e.user_id = u.id\`) telah memiliki indeks (*Index* / *B-Tree*) agar kueri tidak melakukan full table scan.
`
  },
  {
    id: "lesson-sql-int-03",
    courseId: "course-sql-int-13",
    slug: "subqueries-correlated-subqueries-exists",
    title: "3. Subqueries: Correlated Subqueries & Klausul EXISTS",
    summary: "Manfaatkan kueri bersarang (subquery) di klausa SELECT, FROM, dan WHERE serta optimasi kueri dengan EXISTS.",
    order: 3,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 3. Subqueries: Correlated Subqueries & Klausul EXISTS

**Subquery** adalah kueri \`SELECT\` yang berada di dalam kueri SQL lain. Subquery dapat digunakan di klausa \`SELECT\`, \`FROM\`, atau \`WHERE\`.

---

## 1. Non-Correlated Subquery (Mandiri)

Subquery ini dieksekusi sekali terlebih dahulu, lalu hasilnya diserahkan ke kueri utama:

\`\`\`sql
-- Cari kursus yang durasi belajarnya di atas rata-rata semua kursus:
SELECT judul, durasi_menit
FROM kursus
WHERE durasi_menit > (
    SELECT AVG(durasi_menit) FROM kursus
);
\`\`\`

---

## 2. Correlated Subquery & Klausul \`EXISTS\`

Correlated subquery bergantung pada baris kueri terluar dan dievaluasi berulang untuk setiap baris. Klausul \`EXISTS\` berhenti mencari segera setelah menemukan kecocokan pertama (*short-circuiting*), menjadikannya jauh lebih cepat daripada operator \`IN\`:

\`\`\`sql
-- Cari semua siswa yang PERNAH menyelesaikan minimal satu proyek:
SELECT u.id, u.nama_lengkap
FROM pengguna u
WHERE EXISTS (
    SELECT 1 
    FROM pengumpulan_proyek p
    WHERE p.user_id = u.id 
      AND p.status = 'approved'
);
\`\`\`
`
  },
  {
    id: "lesson-sql-int-04",
    courseId: "course-sql-int-13",
    slug: "common-table-expressions-cte-with-clause",
    title: "4. Common Table Expressions (CTE) & WITH Clause",
    summary: "Ubah kueri bertingkat yang rumit menjadi blok-blok logis modular yang mudah dibaca dengan klausul WITH.",
    order: 4,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 4. Common Table Expressions (CTE) & WITH Clause

Ketika kueri Anda membutuhkan subquery bertingkat 3 atau 4 lapis, kode menjadi sangat sulit dibaca dan dirawat. **Common Table Expression (CTE)** menyediakan tabel sementara (*temporary result set*) bernama yang hanya ada selama durasi eksekusi kueri tersebut.

---

## Sintaks Dasar: Klausul \`WITH\`

\`\`\`sql
WITH TotalPoinSiswa AS (
    -- CTE 1: Agregasi total XP per siswa
    SELECT 
        user_id,
        SUM(xp_didapat) AS total_xp
    FROM riwayat_xp
    GROUP BY user_id
),
SiswaBerprestasi AS (
    -- CTE 2: Filter siswa yang memiliki lebih dari 1000 XP
    SELECT user_id, total_xp
    FROM TotalPoinSiswa
    WHERE total_xp >= 1000
)
-- Kueri Utama yang bersih:
SELECT 
    u.nama_lengkap,
    u.email,
    sb.total_xp
FROM SiswaBerprestasi sb
JOIN pengguna u ON sb.user_id = u.id
ORDER BY sb.total_xp DESC;
\`\`\`

### Keunggulan CTE dibanding Subquery:
1. **Keterbacaan Sejajar Top-to-Bottom**: Logika dibaca dari atas ke bawah, bukan dari dalam keluar.
2. **Dapat Digunakan Berulang Kali**: Satu CTE bisa di-join beberapa kali dalam kueri utama tanpa mengevaluasi ulang.
`
  },
  {
    id: "lesson-sql-int-05",
    courseId: "course-sql-int-13",
    slug: "cte-rekursif-data-hierarkis",
    title: "5. CTE Rekursif untuk Data Hierarkis & Struktur Pohon",
    summary: "Kueri struktur data pohon (organigram, kategori bertingkat, thread komentar berbalas) dengan WITH RECURSIVE.",
    order: 5,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 5. CTE Rekursif untuk Data Hierarkis & Struktur Pohon

Bagaimana cara menampilkan struktur hirarki karyawan (Direktur -> Manajer -> Staff) atau balasan komentar bersarang tanpa mengetahui berapa level kedalamannya? Jawabannya adalah **Recursive CTE**.

---

## Struktur 3 Bagian Recursive CTE

1. **Anchor Member**: Kueri awal non-rekursif yang menjadi akar (*root*) dari pohon.
2. **UNION ALL**: Operator penggabung.
3. **Recursive Member**: Kueri yang memanggil nama CTE itu sendiri untuk menuruni cabang pohon hingga kondisi berhenti tercapai.

\`\`\`sql
WITH RECURSIVE PohonKomentar AS (
    -- 1. Anchor Member: Ambil komentar utama (parent_id is null)
    SELECT 
        id, 
        parent_id, 
        isi_komentar, 
        1 AS level_kedalaman
    FROM forum_komentar
    WHERE parent_id IS NULL AND thread_id = 'thread-123'

    UNION ALL

    -- 2. Recursive Member: Ambil balasan yang merujuk ke parent sebelumnya
    SELECT 
        c.id, 
        c.parent_id, 
        c.isi_komentar, 
        pk.level_kedalaman + 1
    FROM forum_komentar c
    INNER JOIN PohonKomentar pk ON c.parent_id = pk.id
)
SELECT * FROM PohonKomentar ORDER BY level_kedalaman, id;
\`\`\`
`
  },
  {
    id: "lesson-sql-int-06",
    courseId: "course-sql-int-13",
    slug: "window-functions-row-number-rank-dense-rank",
    title: "6. Window Functions: ROW_NUMBER(), RANK(), DENSE_RANK()",
    summary: "Beri ranking dan nomor baris analitik tanpa mereduksi baris data asli seperti pada GROUP BY.",
    order: 6,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 6. Window Functions: ROW_NUMBER(), RANK(), DENSE_RANK()

Window Functions melakukan kalkulasi terhadap sekumpulan baris (*window frame*) yang berkaitan dengan baris saat ini, namun **tidak menggabungkan baris-baris tersebut menjadi satu** seperti klausul \`GROUP BY\`.

---

## Tiga Fungsi Ranking Utama:

\`\`\`sql
SELECT 
    nama_siswa,
    jurusan,
    nilai_akhir,
    -- 1. Nomor urut baris unik selalu berurutan (1, 2, 3, 4)
    ROW_NUMBER() OVER (PARTITION BY jurusan ORDER BY nilai_akhir DESC) AS no_urut,
    
    -- 2. Peringkat dengan jeda angka saat ada skor kembar (1, 2, 2, 4)
    RANK() OVER (PARTITION BY jurusan ORDER BY nilai_akhir DESC) AS rank_gap,
    
    -- 3. Peringkat tanpa jeda angka saat ada skor kembar (1, 2, 2, 3)
    DENSE_RANK() OVER (PARTITION BY jurusan ORDER BY nilai_akhir DESC) AS dense_rank_padat
FROM raport_siswa;
\`\`\`

---

## Mengambil Top-N Per Kategori (Top 3 Siswa Tiap Jurusan)

Kombinasikan Window Function dengan CTE:

\`\`\`sql
WITH PeringkatSiswa AS (
    SELECT 
        nama_siswa,
        jurusan,
        nilai_akhir,
        DENSE_RANK() OVER (PARTITION BY jurusan ORDER BY nilai_akhir DESC) AS peringkat
    FROM raport_siswa
)
SELECT * FROM PeringkatSiswa WHERE peringkat <= 3;
\`\`\`
`
  },
  {
    id: "lesson-sql-int-07",
    courseId: "course-sql-int-13",
    slug: "window-functions-lead-lag-running-totals",
    title: "7. Window Functions: LEAD(), LAG(), FIRST_VALUE(), & Running Totals",
    summary: "Hitung pertumbuhan tren bulanan (MoM), perbandingan nilai baris sebelumnya, dan saldo akumulasi.",
    order: 7,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 7. Window Functions: LEAD(), LAG(), FIRST_VALUE(), & Running Totals

Dalam analisis data bisnis modern, kita sering dituntut menghitung selisih pertumbuhan penjualan dari bulan sebelumnya atau menghitung saldo berjalan akumulatif (*Running Total*).

---

## 1. Analisis Tren dengan \`LAG()\` dan \`LEAD()\`

- **\`LAG(kolom, offset, default)\`**: Mengintip nilai pada baris sebelumnya.
- **\`LEAD(kolom, offset, default)\`**: Mengintip nilai pada baris berikutnya.

\`\`\`sql
SELECT 
    bulan,
    total_pendapatan,
    LAG(total_pendapatan, 1, 0) OVER (ORDER BY bulan) AS pendapatan_bulan_lalu,
    -- Hitung selisih pertumbuhan:
    total_pendapatan - LAG(total_pendapatan, 1, total_pendapatan) OVER (ORDER BY bulan) AS pertumbuhan_nominal
FROM omset_bulanan;
\`\`\`

---

## 2. Menghitung Saldo Akumulasi (Running Total)

Gunakan fungsi agregasi \`SUM()\` yang diberi klausa \`OVER (ORDER BY ...)\`:

\`\`\`sql
SELECT 
    tanggal,
    jumlah_setor,
    -- Menjumlahkan seluruh setoran dari awal hingga baris hari ini:
    SUM(jumlah_setor) OVER (
        ORDER BY tanggal 
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS saldo_akumulasi
FROM mutasi_bank;
\`\`\`
`
  },
  {
    id: "lesson-sql-int-08",
    courseId: "course-sql-int-13",
    slug: "indexing-explain-plan-optimasi-kueri",
    title: "8. Indexing, Query EXPLAIN PLAN, dan Optimasi Kueri Enterprise",
    summary: "Gunakan B-Tree, GIN, dan partial index, serta baca output EXPLAIN ANALYZE untuk kueri jutaan data di bawah 10ms.",
    order: 8,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 8. Indexing, Query EXPLAIN PLAN, dan Optimasi Kueri Enterprise

Database yang dirancang baik bisa merespons kueri jutaan baris dalam hitungan milidetik jika didukung strategi **Indexing** yang presisi.

---

## 1. Jenis Index di Database Relasional (PostgreSQL / MySQL)

1. **B-Tree (Default)**: Sangat efisien untuk perbandingan kesetaraan (\`=\`) dan rentang nilai (\`<\`, \`>\`, \`BETWEEN\`, \`ORDER BY\`).
2. **Composite Index (Multi-Kolom)**: Indeks untuk kueri yang menyaring beberapa kolom sekaligus:
   \`\`\`sql
   -- Aturan Leftmost Prefix: Indeks ini berguna untuk kueri (status, created_at) atau hanya (status)
   CREATE INDEX idx_pesanan_status_tgl ON pesanan(status, created_at);
   \`\`\`
3. **Partial Index (Conditional Index)**: Menghemat ruang disk dengan hanya mengindeks baris yang relevan:
   \`\`\`sql
   -- Hanya mengindeks pengguna yang aktif:
   CREATE INDEX idx_user_aktif ON pengguna(email) WHERE status = 'active';
   \`\`\`

---

## 2. Membedah Eksekusi Kueri dengan \`EXPLAIN ANALYZE\`

Sebelum berasumsi kueri Anda cepat, jalankan \`EXPLAIN ANALYZE\` untuk melihat jalur rencana eksekutor (*Query Planner*):

\`\`\`sql
EXPLAIN ANALYZE 
SELECT * FROM kursus WHERE slug = 'sql-menengah';
\`\`\`

### Apa yang Harus Diperhatikan:
- **Seq Scan (Sequential Scan)**: Database membaca seluruh tabel dari awal sampai akhir baris per baris. *Bahaya jika tabel besar!*
- **Index Scan / Bitmap Index Scan**: Database langsung melompat ke node daun indeks B-Tree. *Performa sangat optimal.*
- **Actual Time**: Waktu riil eksekusi dalam milidetik ($ms$).
`
  }
];
