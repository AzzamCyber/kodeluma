# UI/UX AUDIT BEFORE — KODELUMA 3.0 (EXPANSION)

**Tanggal:** 15 Oktober 2026  
**Auditor:** Principal Frontend Engineer & UI/UX Lead  
**Tujuan:** Audit komprehensif terhadap arsitektur frontend, kesesuaian Bootstrap 5, konsistensi token desain, status sesi otentikasi, dan rencana perluasan file-by-file.

---

## 1. Inventarisasi Rute & Status Aplikasi

| Rute | Tipe | Status Fungsional | Komponen Utama | Kepatuhan Bootstrap 5 |
|---|---|:---:|---|---|
| `/` | Publik (Marketing) | **Aktif (HTTP 200)** | `Hero`, `RealLearningFeatures`, `CourseCard`, `TechLogoGallery`, `FaqSection`, `FinalCta` | `container`, `row`, `col-*`, `g-4`, `Accordion` |
| `/courses` | Publik (Katalog) | **Aktif (HTTP 200)** | `CourseCatalogView`, `CourseCard` | `row row-cols-1 row-cols-md-2 row-cols-lg-3` |
| `/courses/[slug]` | Publik (Detail) | **Aktif (HTTP 200)** | Silabus materi, tombol enrollment, prasyarat | `card`, `badge`, `d-flex`, `list-group` |
| `/learning-paths` | Publik (12 Jalur) | **Aktif (HTTP 200)** | 12 jalur kurikulum terstruktur | `card`, `badge`, `row g-4` |
| `/lab` | Siswa (Code Lab) | **Aktif (HTTP 200)** | `CodeLabView` (HTML/CSS/JS sandbox) | `nav nav-tabs`, `btn-group`, `form-control` |
| `/lab/terminal` | Siswa (Guided CLI)| **Aktif (HTTP 200)** | `GuidedTerminalView` (In-memory VFS) | `font-monospace`, `d-flex`, `card` |
| `/quests` | Siswa (Quest Board)| **Aktif (HTTP 200)** | `QuestBoardView` (8 Quest + XP claim) | `card`, `progress-bar`, `badge`, `d-flex` |
| `/projects` | Siswa (Praktik) | **Aktif (HTTP 200)** | Daftar tugas praktik & form submission | `card`, `form-control`, `btn` |
| `/forum` | Siswa (Komunitas) | **Aktif (HTTP 200)** | Thread list, NewThread modal, balasan | `list-group`, `modal`, `form-control` |
| `/certificates` | Siswa (Sertifikat)| **Aktif (HTTP 200)** | Daftar sertifikat terbit & cetak | `card`, `badge`, `table` |
| `/profile` | Siswa (Profil) | **Aktif (HTTP 200)** | `ProfileEditor` (PATCH /api/v1/me) | `form-control`, `card`, `btn` |
| `/login` | Auth | **Aktif (HTTP 200)** | `LoginForm` (Argon2id + Cookie sesi) | `input-group`, `form-control`, `alert` |
| `/register` | Auth | **Aktif (HTTP 200)** | `RegisterForm` (Validasi + Terms check) | `input-group`, `form-control`, `form-check` |
| `/admin` | Admin Portal | **Aktif (HTTP 200)** | Overview, Courses, Projects, Users, Forum | `table-responsive`, `modal`, `sidebar` |
| `/verify/[code]` | Publik | **Aktif (HTTP 200)** | Verifikasi integritas sertifikat | `card`, `badge`, `font-monospace` |

---

## 2. Status Kepatuhan Bootstrap 5 & React Bootstrap

1. **Bootstrap Stylesheet:**
   - Diimpor tepat satu kali di root CSS: `@import 'bootstrap/dist/css/bootstrap.min.css';` di [`src/app/globals.css`](file:///c:/Users/ASUS/OneDrive/Documents/PROJECT%20AZZAM%20CODEX/KodeLuma/src/app/globals.css#L1).
   - Variabel warna Bootstrap dioverride secara harmonis di [`src/styles/tokens.css`](file:///c:/Users/ASUS/OneDrive/Documents/PROJECT%20AZZAM%20CODEX/KodeLuma/src/styles/tokens.css#L34-L40):
     - `--bs-primary: #2563EB`
     - `--bs-body-color: #1C2D40`
     - `--bs-body-bg: #F8FAFD`
     - `--bs-border-color: #E2E9F1`
     - `--bs-heading-color: #10243A`
2. **React Bootstrap Components Digunakan:**
   - `Accordion` (FAQ Section di homepage).
   - `Modal` (New Thread di Forum, Konfirmasi Hapus/Suspend di Admin).
   - `Offcanvas` / responsive nav drawer untuk mobile.
3. **Utilitas Grid & Flex:**
   - Menggunakan kelas native Bootstrap 5: `container`, `row`, `col-lg-*`, `col-md-*`, `g-3`, `g-4`, `d-flex`, `align-items-center`, `justify-content-between`, `table-responsive`, `form-control`, `input-group`.

---

## 3. Temuan Gap & Rencana Remediasi

1. **Brand Marks & Logo Teknologi Asli:**
   - *Sebelum:* Menggunakan ikon Lucide generik untuk bahasa pemrograman.
   - *Remediasi:* Dibuat direktori `public/tech/` yang memuat 18 SVG asli dari Devicon (HTML5, CSS3, JavaScript, TypeScript, Python, React, Next.js, Bootstrap, Git, Redis, Docker, PostgreSQL, Node.js, C++, Java, Linux, VS Code, Figma) serta `public/topics/` untuk pictogram generik (SQL, Algoritma, System Design, Cybersecurity).
2. **Lottie Animation Architecture:**
   - *Sebelum:* Belum ada player Lottie.
   - *Remediasi:* Diinstal paket resmi `@lottiefiles/dotlottie-react`. Dibuat komponen wrapper [`KodelumaLottie.tsx`](file:///c:/Users/ASUS/OneDrive/Documents/PROJECT%20AZZAM%20CODEX/KodeLuma/src/components/ui/KodelumaLottie.tsx) yang aman dari SSR, menangani `prefers-reduced-motion: reduce`, dan menyajikan fallback desain elegan bila file lokal belum diunduh.
3. **Session-Aware Navbar & Hero:**
   - *Sebelum:* Homepage merender navbar tamu secara statis.
   - *Remediasi:* `HomePage` memanggil `getCurrentUser()` di server dan mengoper status `user` ke `PublicNavbar` dan `Hero` sehingga CTA berubah menjadi `Lanjutkan Belajar ({displayName})` saat pengguna telah masuk.
4. **Rich 4-Column Footer:**
   - *Sebelum:* Footer putih tipis dengan tautan terbatas.
   - *Remediasi:* Ditingkatkan ke latar belakang deep navy (`#10243A`), kontras teks tinggi (`#CBD5E1`), 4 kolom navigasi lengkap, tautan nyata ke `Azzam Codex` (`https://azzamcodex.id`), dan tahun dinamis.
5. **Auth Form Accessibility:**
   - *Sebelum:* Form input kata sandi tidak memiliki tombol toggle intip sandi.
   - *Remediasi:* Ditambahkan toggle intip sandi yang memenuhi standar a11y (`type="button"`, `aria-label`) dan persetujuan syarat & ketentuan di halaman register.
