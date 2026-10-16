// lessons-postgres.mjs
// 6 Comprehensive W3Schools/MDN-grade lessons for PostgreSQL & Database Relasional Modern (course-pg-20)

export const POSTGRES_LESSONS = [
  {
    id: "lesson-pg-01",
    courseId: "course-pg-20",
    slug: "arsitektur-postgresql-instalasi-psql",
    title: "1. Arsitektur PostgreSQL, Instalasi, & Navigasi CLI psql",
    summary: "Pahami keunggulan PostgreSQL sebagai RDBMS objek-relasional dan navigasi terminal interaktif psql.",
    order: 1,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 1. Arsitektur PostgreSQL, Instalasi, & Navigasi CLI psql

**PostgreSQL** (sering disebut Postgres) adalah sistem manajemen basis data relasional objek (*Object-Relational Database Management System* / ORDBMS) yang terkenal dengan keandalan ekstrem, integritas data, dan kepatuhan penuh terhadap standar SQL.

---

## Fitur Unggulan PostgreSQL:
- **Kepatuhan ACID Penuh**: Menjamin konsistensi data bahkan pada transaksi konkurensi masif.
- **Dukungan Tipe Data Kompleks**: JSONB, Array, Range, Hstore, dan Geospasial (PostGIS).
- **Extensibility**: Dukungan custom functions dalam berbagai bahasa (PL/pgSQL, Python, JavaScript).
- **Concurrency MVCC**: *Multi-Version Concurrency Control* memungkinkan pembacaan data tanpa memblokir penulisan.

---

## Perintah Esensial CLI \`psql\`:
\`\`\`bash
# Menghubungkan ke database:
psql -U postgres -d kodeluma_db

# Perintah meta psql (diawali backslash):
\\l          # Menampilkan daftar semua basis data
\\c db_nama  # Berpindah ke database lain
\\dt         # Menampilkan daftar semua tabel di schema publik
\\d nama_tbl # Menampilkan skema struktur kolom tabel
\\q          # Keluar dari psql
\`\`\`
`
  },
  {
    id: "lesson-pg-02",
    courseId: "course-pg-20",
    slug: "tipe-data-lanjut-uuid-jsonb-arrays",
    title: "2. Tipe Data Modern: UUID, JSONB, Array, & Timestamptz",
    summary: "Simpan data semi-terstruktur langsung di dalam kolom tabel menggunakan JSONB dan tipe array.",
    order: 2,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 2. Tipe Data Modern: UUID, JSONB, Array, & Timestamptz

Salah satu alasan developer backend memilih PostgreSQL dibanding MySQL adalah dukungan tipe data modern yang terintegrasi langsung di tingkat engine.

---

## 1. Primary Key dengan UUID v4

Daripada menggunakan angka auto-increment (1, 2, 3) yang mudah ditebak pengguna, gunakan **UUID**:

\`\`\`sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE pengguna (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nama VARCHAR(100) NOT NULL,
    metadata JSONB DEFAULT '{}'::jsonb,
    keahlian TEXT[] DEFAULT '{}',
    dibuat_pada TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
\`\`\`

---

## 2. Manipulasi Data Semi-Terstruktur JSONB

Kolom JSONB dapat di-query langsung menggunakan operator panah (\`->\` dan \`->>\`):

\`\`\`sql
-- Menyisipkan data dengan atribut dinamis:
INSERT INTO pengguna (nama, metadata, keahlian)
VALUES (
    'Azzam', 
    '{"tema": "gelap", "notifikasi": {"email": true, "sms": false}}',
    ARRAY['Node.js', 'PostgreSQL', 'Docker']
);

-- Mengambil nilai teks properti JSON:
SELECT nama, metadata->'notifikasi'->>'email' AS email_aktif
FROM pengguna
WHERE metadata @> '{"tema": "gelap"}';
\`\`\`
`
  },
  {
    id: "lesson-pg-03",
    courseId: "course-pg-20",
    slug: "relasi-tabel-foreign-keys-constraints",
    title: "3. Relasi Tabel, Foreign Keys, & Constraint Ketat",
    summary: "Lindungi integritas relasi antar tabel dengan NOT NULL, UNIQUE, CHECK constraint, dan ON DELETE CASCADE.",
    order: 3,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 3. Relasi Tabel, Foreign Keys, & Constraint Ketat

Kekuatan utama RDBMS adalah kemampuannya menegakkan aturan integritas data secara otomatis di tingkat basis data, bukan hanya mengandalkan kode aplikasi.

---

## Membuat Skema dengan Constraint Komprehensif

\`\`\`sql
CREATE TABLE kategori (
    id SERIAL PRIMARY KEY,
    nama VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE kursus (
    id VARCHAR(50) PRIMARY KEY,
    judul VARCHAR(150) NOT NULL,
    kategori_id INT NOT NULL,
    harga INT NOT NULL CHECK (harga >= 0),
    level VARCHAR(20) NOT NULL CHECK (level IN ('pemula', 'menengah')),
    CONSTRAINT fk_kursus_kategori 
        FOREIGN KEY (kategori_id) 
        REFERENCES kategori(id) 
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);
\`\`\`

### Aturan \`ON DELETE\`:
- **\`RESTRICT\` / \`NO ACTION\`**: Menolak penghapusan baris kategori jika masih ada kursus yang merujuknya.
- **\`CASCADE\`**: Jika kategori dihapus, seluruh kursus di dalamnya otomatis ikut terhapus.
- **\`SET NULL\`**: Mengubah nilai foreign key menjadi NULL jika baris induk dihapus.
`
  },
  {
    id: "lesson-pg-04",
    courseId: "course-pg-20",
    slug: "transaksi-acid-dan-tingkat-isolasi",
    title: "4. Transaksi ACID & Tingkat Isolasi (Isolation Levels)",
    summary: "Pastikan transfer saldo dan data sensitif aman dengan BEGIN, COMMIT, ROLLBACK, dan isolasi Serializable.",
    order: 4,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 4. Transaksi ACID & Tingkat Isolasi (Isolation Levels)

Dalam transaksi perbankan atau pembayaran, memotong saldo pengirim dan menambah saldo penerima **harus terjadi sebagai satu paket kesatuan**. Jika server mati di tengah proses, transaksi harus dibatalkan sepenuhnya.

---

## Blok Transaksi Manual

\`\`\`sql
BEGIN;

-- 1. Kurangi saldo pengirim
UPDATE dompet_siswa 
SET saldo = saldo - 150000 
WHERE user_id = 'user-01' AND saldo >= 150000;

-- 2. Tambah saldo penerima
UPDATE dompet_instruktur 
SET saldo = saldo + 150000 
WHERE instruktur_id = 'inst-02';

-- 3. Catat riwayat audit
INSERT INTO log_transaksi (pengirim, penerima, jumlah) 
VALUES ('user-01', 'inst-02', 150000);

-- Simpan permanen:
COMMIT;

-- Jika terjadi kesalahan, batalkan semua dengan:
-- ROLLBACK;
\`\`\`
`
  },
  {
    id: "lesson-pg-05",
    courseId: "course-pg-20",
    slug: "strategi-indexing-btree-gin-explain",
    title: "5. Strategi Indexing: B-Tree, GIN, & EXPLAIN ANALYZE",
    summary: "Pangkas waktu eksekusi kueri dari 2000ms menjadi 2ms dengan indeks B-Tree dan GIN untuk dokumen JSONB.",
    order: 5,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 5. Strategi Indexing: B-Tree, GIN, & EXPLAIN ANALYZE

Tanpa index, PostgreSQL harus membaca setiap baris dalam tabel dari awal hingga akhir (*Sequential Scan*). Dengan index, pencarian langsung melompat ke posisi yang tepat.

---

## 1. Indeks B-Tree (Bawaan)
Sangat ideal untuk perbandingan kesetaraan (\`=\`) dan rentang (\`<\`, \`>\`, \`BETWEEN\`, \`ORDER BY\`):

\`\`\`sql
CREATE INDEX idx_kursus_level_harga ON kursus(level, harga);
\`\`\`

---

## 2. Indeks GIN (Generalized Inverted Index) untuk JSONB
B-Tree tidak bisa mengindeks isi di dalam JSONB. Di sinilah **GIN** digunakan:

\`\`\`sql
CREATE INDEX idx_pengguna_metadata_gin ON pengguna USING GIN (metadata);
\`\`\`

---

## 3. Meneliti Performa dengan \`EXPLAIN ANALYZE\`

\`\`\`sql
EXPLAIN ANALYZE 
SELECT * FROM kursus WHERE level = 'pemula' ORDER BY harga;
\`\`\`

Perhatikan baris \`Execution Time: 0.852 ms\` dan \`Index Scan\`. Jika muncul \`Seq Scan\` pada tabel besar, buatlah indeks pada kolom yang relevan!
`
  },
  {
    id: "lesson-pg-06",
    courseId: "course-pg-20",
    slug: "backup-dump-koneksi-pooler-pgbouncer",
    title: "6. Operasional Backend: Backup pg_dump, Pooling, & PgBouncer",
    summary: "Pelajari cara mencadangkan database dengan pg_dump dan cegah kehabisan koneksi dengan connection pooler.",
    order: 6,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 6. Operasional Backend: Backup pg_dump, Pooling, & PgBouncer

Di lingkungan produksi berskala tinggi, membuka koneksi baru ke database PostgreSQL memakan memori sekitar 10MB per proses backend.

---

## 1. Mencadangkan Data dengan \`pg_dump\`

\`\`\`bash
# Backup satu database ke file SQL terkompresi:
pg_dump -U postgres -d kodeluma_db -F c -b -v -f "backup_kodeluma_$(date +%F).dump"

# Mengembalikan (Restore) database dari file dump:
pg_restore -U postgres -d kodeluma_db -v "backup_kodeluma_2026-10-16.dump"
\`\`\`

---

## 2. Mengapa Membutuhkan Connection Pooler (PgBouncer)?

Setiap request di Node.js atau serverless function tidak boleh membuka koneksi langsung ke PostgreSQL tanpa batas. **Connection Pooling** (seperti PgBouncer atau modul bawaan \`pg.Pool\`):
- Membuka sejumlah koneksi tetap (misal: 20 koneksi).
- Meminjamkan koneksi tersebut ke ribuan request pengguna secara bergantian.
- Menghemat RAM server hingga 90% dan mencegah database mengalami crash saat terjadi lonjakan trafik (*traffic spikes*).
`
  }
];
