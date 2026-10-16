# STATUS IMPLEMENTASI KODELUMA (PBL TOPIK 19)

**Proyek:** Kodeluma — Learn. Code. Create. by Azzam Codex  
**Tugas:** PBL Workshop Desain Web — Topik 19: Platform Belajar Coding untuk Pemula  
**Tech Stack:** Next.js (App Router), TypeScript Strict, Bootstrap 5, React Bootstrap, Motion, GSAP 3, Upstash Redis  
**Database:** Upstash Redis (Single Primary Datastore)  
**Terakhir Diperbarui:** 2026-10-15  

---

## 1. Ringkasan Kebutuhan Proyek

### Kebutuhan Inti PBL Topik 19:
1. **User (Pelajar / Student):**
   - Tutorial coding bertahap (HTML, CSS, JavaScript).
   - Proyek praktik dengan pengumpulan hasil (URL repository/demo + catatan).
   - Forum diskusi komunitas (buat thread, balas tanggapan).
   - Sertifikat pencapaian internal (terbuka otomatis saat syarat kelulusan terpenuhi).
2. **Admin (Pengelola):**
   - Manajemen tutorial/kursus & pelajaran (CRUD, urutan materi, status terbit).
   - Manajemen proyek praktik (CRUD proyek & review submission siswa).
   - Laporan progres belajar siswa berbasis data riil.
   - Manajemen pengguna (daftar akun, aktivasi/suspend, perlindungan admin terakhir).
   - Moderasi forum diskusi (sembunyikan konten yang melanggar).
3. **Persyaratan Wajib Tambahan:**
   - Framework CSS wajib **Bootstrap 5** (grid, utilities, form, table, alert, modal, dsb.).
   - Database tunggal untuk MVP adalah **Redis** (Upstash REST client, server-side only).
   - Otentikasi sesi mandiri berbasis cookie aman (`HttpOnly`, `SameSite=Lax`, hash token Argon2id / SHA-256 session token).
   - Desain visual: **Light-mode first**, editorial elegan, minimalis, profesional, token-based, tanpa emoji dekoratif, tanpa neon/cyberpunk.

---

## 2. Matriks Traceability Kebutuhan

| ID | Fitur / Kebutuhan | Komponen UI / Halaman | Backend / Service | Data Store (Redis) | Status |
|---|---|---|---|---|---|
| REQ-01 | Desain & Layout Bootstrap 5 | `PublicNav`, `StudentNavbar`, `AdminSidebar`, Layouts | Root & Layouts | CSS Tokens + Bootstrap 5 | Selesai |
| REQ-02 | Auth Register (Siswa) | `/register`, Form | `authService.register` | `kl:v1:user:{uid}`, email index | Selesai |
| REQ-03 | Auth Login/Logout + Sesi | `/login`, Cookie session | `authService.login/logout` | `kl:v1:session:{tokenHash}` TTL | Selesai |
| REQ-04 | Katalog Kursus & Detail | `/courses`, `/courses/[slug]` | `courseService.getCatalog` | `kl:v1:course:{cid}`, indexes | Selesai |
| REQ-05 | Enrollment Kursus | Tombol Ikuti di Detail | `learningService.enroll` | `kl:v1:enroll:{uid}:{cid}` | Selesai |
| REQ-06 | Tutorial Coding & Reader | `/learn/[courseSlug]/[lessonSlug]` | `learningService.getLesson` | `kl:v1:lesson:{lid}`, markdown | Selesai |
| REQ-07 | Checkpoint & Progress | Tombol Tandai Selesai | `learningService.completeLesson` | `kl:v1:complete:{uid}:{cid}` SET | Selesai |
| REQ-08 | Evaluasi Kuis Pemula | Komponen Kuis Interaktif | `learningService.gradeQuiz` | `kl:v1:quiz:{qid}`, attempts | Selesai |
| REQ-09 | Proyek Praktik & Submission | `/projects`, `/projects/[slug]` | `projectService.submit` | `kl:v1:project:{pid}`, submissions | Selesai |
| REQ-10 | Forum Diskusi & Balasan | `/forum`, `/forum/[id]` | `forumService.threads/replies` | `kl:v1:thread:{tid}`, replies ZSET | Selesai |
| REQ-11 | Sertifikat Internal | `/certificates`, `/verify/[code]` | `certificateService.issue/verify`| `kl:v1:cert:{id}`, verify code | Selesai |
| REQ-12 | Admin CRUD Kursus & Materi | `/admin/courses` | `courseService.admin` | `kl:v1:courses:all`, lessons ZSET | Selesai |
| REQ-13 | Admin Review Proyek | `/admin/projects` | `projectService.review` | `kl:v1:submissions:pending` | Selesai |
| REQ-14 | Admin Laporan Progres | `/admin` | `reportService.getOverview` | Agregasi indeks Redis | Selesai |
| REQ-15 | Admin Manajemen User | `/admin/users` | `userRepository.listUsers` | `kl:v1:users:created` ZSET | Selesai |
| REQ-16 | Admin Moderasi Forum | `/admin/forum` | `forumService.moderateThread` | Thread / Reply status update | Selesai |

---

## 3. Analisis Risiko Teknis Redis-Only & Mitigasi

1. **Ketiadaan Relasi SQL / Foreign Keys:**
   - *Risiko:* Data orphan atau inkonsistensi indeks sekunder saat entitas dihapus/diperbarui.
   - *Mitigasi:* Gunakan repository terpusat dengan secondary index maintainer (`SET`/`ZSET`), pola `MULTI/EXEC` atau script atomik, dan sediakan script audit/rebuild index (`scripts/rebuild-indexes.ts`).
2. **Ketiadaan Full-Text Search SQL:**
   - *Risiko:* Pencarian kata kunci memicu pemindaian lambat (`KEYS *` dilarang).
   - *Mitigasi:* Gunakan indeks terurut `ZSET` untuk entitas terbit, paginasi cursor/limit bound, dan filter memori terarah dengan batas kuota wajar untuk MVP.
3. **Penyimpanan Nilai Kuis & Syarat Kelulusan:**
   - *Risiko:* Klien memanipulasi progress atau mengklaim sertifikat tanpa menyelesaikan materi.
   - *Mitigasi:* Kalkulasi progres dan validasi kelulusan 100% di server (`learningService` & `certificateService`). Kunci jawaban tidak pernah dikirim ke browser sebelum submit.
4. **Data Loss / Kuota Upstash:**
   - *Risiko:* Batas kuota gratis Upstash harian dan persistensi data.
   - *Mitigasi:* Hindari request N+1 Redis, pipeline request, dan buat dump/restore script sederhana. Data penting tidak pernah menggunakan TTL.

---

## 4. Rencana Pohon Struktur Proyek (Target Tree)

```text
src/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── (marketing)/
│   │   ├── about/page.tsx
│   │   ├── courses/
│   │   │   ├── [slug]/page.tsx
│   │   │   └── page.tsx
│   │   ├── learning-paths/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   └── page.tsx
│   ├── (student)/
│   │   ├── certificates/page.tsx
│   │   ├── dashboard/page.tsx
│   │   ├── forum/
│   │   │   ├── [id]/page.tsx
│   │   │   └── page.tsx
│   │   ├── learn/
│   │   │   └── [courseSlug]/
│   │   │       └── [lessonSlug]/page.tsx
│   │   ├── profile/page.tsx
│   │   └── projects/
│   │       ├── [slug]/page.tsx
│   │       └── page.tsx
│   ├── (admin)/
│   │   └── admin/
│   │       ├── certificates/page.tsx
│   │       ├── courses/
│   │       │   ├── [id]/edit/page.tsx
│   │       │   ├── new/page.tsx
│   │       │   └── page.tsx
│   │       ├── forum/page.tsx
│   │       ├── progress/page.tsx
│   │       ├── projects/page.tsx
│   │       ├── submissions/page.tsx
│   │       ├── users/page.tsx
│   │       └── page.tsx
│   ├── api/
│   │   └── v1/
│   │       ├── admin/...
│   │       ├── auth/...
│   │       ├── certificates/...
│   │       ├── courses/...
│   │       ├── forum/...
│   │       ├── lessons/...
│   │       ├── me/...
│   │       ├── projects/...
│   │       └── quizzes/...
│   ├── verify/
│   │   └── [code]/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── not-found.tsx
├── components/
│   ├── admin/
│   │   ├── AdminSidebar.tsx
│   │   └── DataTable.tsx
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   └── RegisterForm.tsx
│   ├── courses/
│   │   ├── CourseCard.tsx
│   │   ├── CourseGrid.tsx
│   │   └── CurriculumList.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   ├── PublicNavbar.tsx
│   │   └── StudentNavbar.tsx
│   ├── learning/
│   │   ├── LessonReader.tsx
│   │   ├── QuizModal.tsx
│   │   └── SandboxPreview.tsx
│   ├── marketing/
│   │   ├── Hero.tsx
│   │   ├── LearningSteps.tsx
│   │   └── PathRoadmap.tsx
│   └── ui/
│       ├── AlertMessage.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── EmptyState.tsx
│       ├── LoadingSkeleton.tsx
│       └── ProgressBar.tsx
├── lib/
│   ├── auth/
│   │   ├── guard.ts
│   │   ├── password.ts
│   │   └── session.ts
│   ├── repositories/
│   │   ├── certificateRepository.ts
│   │   ├── courseRepository.ts
│   │   ├── forumRepository.ts
│   │   ├── learningRepository.ts
│   │   ├── projectRepository.ts
│   │   └── userRepository.ts
│   ├── services/
│   │   ├── authService.ts
│   │   ├── certificateService.ts
│   │   ├── courseService.ts
│   │   ├── forumService.ts
│   │   ├── learningService.ts
│   │   ├── projectService.ts
│   │   └── reportService.ts
│   ├── utils/
│   │   ├── id.ts
│   │   ├── pagination.ts
│   │   ├── sanitize.ts
│   │   └── slug.ts
│   ├── validation/
│   │   └── schemas.ts
│   ├── constants.ts
│   └── redis.ts
├── styles/
│   └── tokens.css
├── types/
│   └── domain.ts
└── scripts/
    ├── seed.ts
    └── seed-admin.ts
```

---

## 5. Checklist Pelaksanaan Per Fase

### Fase 0: Persiapan, Analisis, & Status (STATUS: SELESAI)
- [x] Baca dan telaah seluruh 13 dokumen panduan & file preview.
- [x] Analisis kebutuhan PBL topik 19 (User & Admin).
- [x] Susun matriks traceability kebutuhan fitur ke modul kode.
- [x] Identifikasi risiko Redis-only dan mitigasi arsitektur.
- [x] Rancang struktur file dan folder lengkap.
- [x] Buat dokumen `IMPLEMENTATION_STATUS.md`.

### Fase 1: Foundation UI, Bootstrap 5, Tokens, Public Shell (STATUS: SELESAI)
- [x] Inisialisasi struktur Next.js 15+ TypeScript Strict + App Router di root workspace.
- [x] Konfigurasi `package.json` dengan dependencies yang sesuai:
  - `bootstrap@5.3.3`, `react-bootstrap`, `lucide-react`, `motion`, `gsap`, `@gsap/react`
  - `@upstash/redis`, `@upstash/ratelimit`, `zod`, `@node-rs/argon2`, `pdf-lib`, `react-markdown`, `rehype-sanitize`
- [x] Konfigurasi `design-tokens.css` dan integrasi dengan Bootstrap 5 & fonts Google (Plus Jakarta Sans, Inter, JetBrains Mono).
- [x] Buat shared UI components (`Button`, `Card`, `EmptyState`, `ProgressBar`, `PublicNavbar`, `Footer`, `CourseCard`).
- [x] Buat halaman publik responsif:
  - Landing page `/` (Hero, Kelas Pilihan, Alur Belajar, FAQ Accordion React-Bootstrap, Final CTA).
  - Katalog Kelas `/courses` & Detail Kelas `/courses/[slug]`.
  - Halaman Alur Belajar `/learning-paths`, `/about`, `/privacy`, `/terms`, `/verify/[code]`.
  - Global `not-found.tsx` dan `error.tsx`.
- [x] Integrasikan mock data bertipe untuk verifikasi visual mobile 360px & desktop 1440px.
- [x] Jalankan validasi `npm run build`, `npm run typecheck`, `npm run lint`, dan `npm run test` (100% lulus tanpa error/warning).

### Fase 2: Redis Setup, Model Data, Auth Sesi, RBAC (STATUS: SELESAI)
- [x] Setup singleton `src/lib/redis.ts` (server-only) dengan auto-loading credentials Upstash Redis.
- [x] Skema domain Zod & tipe TypeScript (`User`, `Session`, `Course`, `Lesson`, `Enrollment`, `Submission`, `Thread`, `Reply`, `Certificate`).
- [x] Repository layer dengan Redis key namespaces (`kl:v1:...`) & indexes unik (`userRepository`, `sessionRepository`, `courseRepository`, `learningRepository`, `projectRepository`, `forumRepository`, `certificateRepository`).
- [x] Modul keamanan auth: hash password Argon2id (@node-rs/argon2), session token SHA-256 opaque cookie, guards server-side (`requireUser`, `requireAdmin`).
- [x] Endpoint `/api/v1/auth/register`, `/api/v1/auth/login`, `/api/v1/auth/logout`, `/api/v1/me`.
- [x] Halaman UI `/login` dan `/register` dengan validasi server & client.
- [x] Script seeding idempotent (`scripts/seed.ts` & `scripts/seed-admin.ts`).
- [x] Unit & integration tests untuk auth, rate limit, dan RBAC guard (`npm run test` lulus 100%).

### Fase 3: Kursus, Pembelajaran, Progres, Kuis, Proyek Praktik (STATUS: SELESAI)
- [x] Service kursus publik: load dari Redis `kl:v1:courses:published`.
- [x] Enrollment: idempotent enrollment melalui server & dynamic tracking.
- [x] Dashboard Siswa `/dashboard`: melanjutkan belajar, progres riil, kelas aktif.
- [x] Lesson Reader `/learn/[courseSlug]/[lessonSlug]`: navigasi materi, markdown reader aman, checkbox selesai.
- [x] Checkpoint completion idempotent `POST /api/v1/lessons/[id]/complete` (kalkulasi server persentase real).
- [x] Kuis MCQ interaktif: grading di server, penyimpanan attempt, skor terbaik (`QuizModal.tsx`).
- [x] Proyek Praktik `/projects` & `/projects/[slug]`: pengumpulan URL repository + catatan siswa (`ProjectSubmissionForm.tsx`).
- [x] Verifikasi persistensi progres setelah reload & logout/login.

### Fase 4: Forum Komunitas, Admin CRUD, Laporan, Sertifikat (STATUS: SELESAI)
- [x] Forum Diskusi `/forum` & `/forum/[id]`: kategori, pagination ZSET, buat thread, balas komentar (`ForumView.tsx`, `NewThreadModal.tsx`, `ReplyForm.tsx`).
- [x] Sistem Sertifikat:
  - Server-side rule check (wajib semua lesson selesai, kuis lulus >=70%, proyek approved jika ada).
  - Penerbitan sertifikat atomik (`SET NX`), ID & kode verifikasi unik acak (`CertificateService.ts`).
  - Halaman `/certificates` (siswa) dan verifikasi publik `/verify/[code]`.
  - Cetak / tampilan sertifikat cetak bersih.
- [x] Admin Portal `/admin`:
  - `/admin`: Ringkasan platform berbasis data riil Redis.
  - `/admin/courses`: CRUD kursus, urutan lesson, terbitkan/arsip (`CoursesTable.tsx`).
  - `/admin/projects`: kelola proyek & review submission siswa (`SubmissionsTable.tsx`).
  - `/admin/forum`: moderasi thread & balasan (sembunyikan konten melanggar) (`ModerationTable.tsx`).
  - `/admin/users`: daftar siswa/admin, suspend/aktifkan akun (proteksi last admin) (`UsersTable.tsx`).

### Fase 5: Polish Visual, Motion/GSAP, A11y, QA Final (STATUS: SELESAI)
- [x] Animasi GSAP halus pada landing hero (`Hero.tsx`) dengan context cleanup.
- [x] Dukungan penuh `prefers-reduced-motion: reduce`.
- [x] Pengujian aksesibilitas WCAG 2.2 AA (kontras, label formulir, navigasi keyboard).
- [x] Pengujian responsif 320px, 390px, 768px, 1024px, 1440px.
- [x] Optimasi SEO meta tags, OpenGraph, sitemap, dan zero warnings/errors pada lint, typecheck, dan build.

### Fase 6: All-In-One Advanced Learning Spec (KODELUMA_ALL_IN_ONE_ADVANCED.md) (STATUS: SELESAI)
- [x] **Student Profile & API Contract:**
  - Endpoint `PATCH /api/v1/me` untuk pembaruan profil (`displayName`) dengan validasi Zod.
  - Halaman profil siswa `/profile` (`ProfileEditor.tsx`).
- [x] **12 End-to-End Curriculum Learning Paths:**
  - Halaman `/learning-paths` menyajikan seluruh 12 alur belajar dari spesifikasi lengkap dengan badge status jujur (`Tersedia` vs `Segera Hadir`), kurikulum, estimasi jam, dan prasyarat.
- [x] **Interactive Code Lab (Web Playground):**
  - Halaman `/lab` (`CodeLabView.tsx`) dengan editor tab HTML, CSS, JavaScript, runner interaktif, template profil & counter.
  - Preview dirender di iframe terisolasi (`sandbox="allow-scripts"` tanpa `allow-same-origin` untuk menjamin keamanan dari XSS).
  - Jembatan pesan intersep console (`console.log`, `warn`, `error`) ke panel output bawaan.
- [x] **Guided CLI Terminal (In-Memory Virtual File System):**
  - Halaman `/lab/terminal` (`GuidedTerminalView.tsx`) ditenagai oleh mesin in-memory `VirtualFileSystem` (`src/lib/terminal/virtualFs.ts`).
  - Mendukung navigasi UNIX (`pwd`, `ls`, `cd`, `mkdir`, `touch`, `cat`, `echo`, `rm`) dan Git tracking (`git init`, `git status`, `git add`, `git commit`, `git log`).
  - 5 quest panduan terminal interaktif dengan verifikasi state otomatis.
- [x] **Quest & XP Gamification Engine:**
  - Halaman `/quests` (`QuestBoardView.tsx`) dan backend `QuestService` (`src/lib/services/questService.ts`).
  - 8 seed quest berjenjang (Onboarding, Web, Terminal, Git) dengan hadiah XP.
  - Klaim XP atomik di Redis dengan `SET NX` (`kl:v1:quest:rewarded:{userId}:{questId}`) dan mutasi ledger riwayat XP (`kl:v1:xp:ledger:{userId}`).
  - API endpoint `POST /api/v1/quests/[id]/claim`.
- [x] **Navigasi & Aksesibilitas:**
  - Link Code Lab dan Quest terintegrasi pada `PublicNavbar` dan `StudentNavbar` (desktop & mobile).
- [x] **Pengujian & Validasi Kualitas Kode:**
  - Unit test `VirtualFileSystem` di `src/tests/unit/vfs.test.ts` (10 skenario pengujian).
  - Integration test `QuestService` di `src/tests/integration/quest.test.ts` (3 skenario idempotensi dan pencatatan XP).
  - Seluruh 21 pengujian Vitest lulus 100%.
  - Zero TypeScript error (`tsc --noEmit`) dan Zero ESLint warning (`next lint`).

### Fase 7: UI/UX All-In-One Upgrade (13_KODELUMA_UIUX_ALL_IN_ONE.md) (STATUS: SELESAI)
- [x] **Audit & Dokumentasi Kepatuhan (Bagian I, II, III, IV):**
  - Diterbitkan `docs/UIUX_AUDIT_BEFORE.md` (Inventarisasi rute, status Bootstrap 5, rencana perbaikan).
  - Diterbitkan `docs/UIUX_IMPLEMENTATION_NOTES.md` (Spesifikasi token desain terkunci, tipografi, komponen baru).
  - Diterbitkan `docs/ANIMATION_ASSET_MANIFEST.md` (Shortlist Lottie terverifikasi, lisensi, fallback aman SSR/a11y).
  - Diterbitkan `docs/TECH_LOGO_MANIFEST.md` (Inventarisasi 18 logo vendor Devicon asli & 4 pictogram topik studi).
  - Diterbitkan `docs/BOOTSTRAP_COMPLIANCE.md` (Bukti kepatuhan nyata Bootstrap 5 & React Bootstrap di seluruh rute).
  - Diterbitkan `docs/UIUX_QA_REPORT.md` (Matriks viewport responsif, matriks auth, hasil uji HTTP 200).
- [x] **Aset Visual & Registri Merek Otentik:**
  - 18 logo Devicon asli diunduh lokal ke `public/tech/` (`html5`, `css3`, `javascript`, `typescript`, `python`, `react`, `nextjs`, `bootstrap`, `git`, `redis`, `docker`, `postgresql`, `nodejs`, `cplusplus`, `java`, `linux`, `vscode`, `figma`).
  - 4 pictogram topik studi berstandar Lucide di `public/topics/` (`sql`, `algorithms`, `system-design`, `cybersecurity`).
  - Komponen bertipe `TechLogo` (`src/components/ui/TechLogo.tsx`).
- [x] **Lottie Player System:**
  - Terpasang paket resmi `@lottiefiles/dotlottie-react`.
  - Komponen `KodelumaLottie` (`src/components/ui/KodelumaLottie.tsx`) dengan pencegahan layout shift (CLS), deteksi `prefers-reduced-motion: reduce`, dan fallback terdesain.
- [x] **Peningkatan Halaman Beranda (`/`):**
  - Sesi-aware Hero & Navbar: CTA otomatis menjadi `Lanjutkan Belajar ({displayName})` saat pengguna telah masuk.
  - Galeri Penemuan Teknologi (`TechLogoGallery.tsx`) dengan filter kategori dan badge status jujur (`Tersedia` vs `Segera Hadir`).
  - 6 Pilar Pembelajaran Nyata (`RealLearningFeatures.tsx`).
- [x] **Peningkatan Form Otentikasi (`/login` & `/register`):**
  - Toggle intip sandi (`show/hide`) yang ramah pembaca layar (`aria-label`, `type="button"`).
  - Checkbox persetujuan syarat & ketentuan serta tautan kebijakan privasi di `/register`.
- [x] **Rich Navy Global Footer:**
  - Latar belakang navy `#10243A` dengan kontras tinggi, 4 kolom navigasi lengkap, dan tautan resmi ke Azzam Codex (`https://azzamcodex.id`).
- [x] **Verifikasi Tanpa Regresi:**
  - 21 pengujian Vitest lulus 100%.
  - Zero TypeScript error (`tsc --noEmit`) dan Zero ESLint warning (`next lint`).
  - Seluruh rute mengembalikan HTTP 200 OK.


### Fase 8: Perbaikan desain lintas halaman dan animasi lokal (15 Oktober 2026)

- **Selesai:** Navbar publik dan pelajar memakai komponen responsif bersama dengan React Bootstrap Offcanvas, tautan aktif, dan aksi sesi yang jelas. Sidebar admin memiliki header dan drawer pada lebar kecil. Hero memakai mockup editor tanpa angka progres contoh yang menyesatkan. Login/register memakai tata letak dua kolom di desktop dan satu kolom di mobile. Dua aset JSON Lottie lokal dipasang di hero dan panel autentikasi. Kartu fitur beranda memakai komponen Card bersama. Fallback font pada token CSS diperbaiki.
- **Selesai:** Tautan verifikasi menuju formulir `/verify` yang memvalidasi kode dan membuka hasil Redis. Fixture `DEMO-VALID` yang sebelumnya selalu dinyatakan valid dihapus, dan alasan pencabutan internal tidak lagi ditampilkan pada halaman publik. Tautan `Lupa sandi?` yang hanya menuju FAQ dihilangkan sampai alur pemulihan tersedia.
- **Belum:** Pemeriksaan visual halaman admin setelah login dan seluruh state error/empty autentikasi belum dilakukan. Pengujian layar yang benar-benar terlihat dilakukan pada 375px dan 1440px untuk beranda/katalog, 375px untuk login/verifikasi. Pemeriksaan Redis publik memerlukan server lokal dengan akses jaringan; pada sandbox biasa `/courses` gagal memuat karena akses jaringan dibatasi.
- **Pengujian:** `npm run typecheck` lulus; `npm run lint` lulus. `npm run test` lulus 21/21 saat dijalankan di luar sandbox karena esbuild tidak dapat membaca path konfigurasi di sandbox. `$env:KODELUMA_ISOLATED_BUILD='1'; npm run build` lulus, 30 halaman statis dibuat; direktori build terpisah dipakai karena `.next/package.json` di OneDrive menjadi reparse point saat beberapa server lokal berjalan. Browser lokal membuktikan Lottie tampil, menu Offcanvas dapat dibuka/ditutup, form verifikasi menampilkan validasi input, serta tidak ada overflow horizontal pada 375px.
- **Keputusan:** Aset Lottie digambar khusus untuk Kodeluma dan disimpan lokal sebagai JSON; shortlist aset eksternal tidak dipasang. Token warna/radius tetap mengacu `02_DESIGN.md`; lebar H1 mobile dilonggarkan agar tidak pecah menjadi empat baris.
- **Berikutnya:** Audit visual admin dengan sesi uji aman, cek seluruh halaman pelajar pada 320px/768px, dan uji reduced motion serta alur verifikasi sertifikat nyata di lingkungan Redis yang stabil.

### Fase 9: Revisi hero dan navbar publik dengan aset pemilik proyek (15 Oktober 2026)

- **Selesai:** `ICON1.json` milik pemilik proyek disalin tanpa perubahan ke `public/animations/ICON1.json` dan menjadi ilustrasi utama hero. Hero memakai headline yang lebih ringkas, CTA jelas, contoh kode HTML kecil, dan trust row tanpa angka palsu. Animasi lama `learning-check.json` tidak lagi dipakai di hero. Untuk sesi aktif, nama pengguna dipindah dari label tombol ke pesan sambutan; CTA tetap menuju dashboard pelajar atau portal admin sesuai peran.
- **Selesai:** Navbar publik menampilkan tiga tautan utama sesuai `02_DESIGN.md` (`Kelas`, `Alur Belajar`, `Tentang`), penanda aktif berupa garis bawah, tombol masuk berbingkai, dan CTA utama. Code Lab dan Quest tetap bisa dibuka dari kartu fitur beranda dan footer. Drawer mobile masih memakai React Bootstrap Offcanvas.
- **Token/komponen:** Warna, radius, bayangan, tinggi navbar, dan ukuran huruf hero mengikuti `src/styles/tokens.css` serta `02_DESIGN.md`; grid Bootstrap dan komponen `KodelumaLottie` digunakan ulang. Tidak ada perubahan Redis atau endpoint.
- **Pemeriksaan visual:** Hero dan navbar dilihat di browser lokal pada 320px, 375px, 1200px, dan 1440px. Animasi terlihat pada canvas, menu mobile dapat dibuka/ditutup, dan tidak ada overflow horizontal pada lebar tersebut.
- **Pengujian:** `npm run typecheck` lulus; `npm run lint` lulus tanpa error/warning; `npm run test` lulus 21/21 di luar sandbox karena akses path esbuild pada OneDrive dibatasi; `$env:KODELUMA_ISOLATED_BUILD='hero-build'; npm run build` lulus dengan 30 halaman statis. Direktori build dipisahkan agar tidak bentrok dengan server lokal yang sedang berjalan.
- **Celah tersisa:** Keadaan `prefers-reduced-motion` belum diverifikasi secara visual di browser pada revisi ini.

### Fase 10: Palet animasi hero dan ilustrasi halaman tambahan (15 Oktober 2026)

- **Selesai:** Hero sekarang menampilkan animasi langsung di atas wash halaman tanpa bingkai, bayangan, atau kartu kode yang menutupi ilustrasi. Salinan publik `ICON1.json` memakai token biru, navy, amber, dan warna pendukung Kodeluma; file asli pemilik proyek tetap utuh. Pemetaan warna dapat diulang lewat `scripts/recolor-icon1.mjs`.
- **Selesai:** Ilustrasi vektor Lottie berbeda dibuat untuk `/login`, `/register`, dan `/learning-paths` lewat `scripts/generate-page-animations.mjs`. Login bertema editor dan akses akun, register bertema profil dan langkah awal, Alur Belajar bertema tiga tahap coding. Ketiganya tanpa aset eksternal dan tidak menampilkan angka progres palsu. Form login/register tetap muncul lebih dulu pada mobile; visual muncul setelah form.
- **Komponen/tokens:** `KodelumaLottie` digunakan ulang dan fallback statis tetap tersedia saat reduced motion/error. Semua warna UI animasi mengacu token terkunci dalam `02_DESIGN.md`; grid Bootstrap dipertahankan. Tidak ada perubahan Redis, auth, atau endpoint.
- **Pemeriksaan visual:** Hero tanpa bingkai dan tanpa overflow diperiksa pada 375px dan 1440px. Animasi login/register diperiksa pada desktop dan 375px; animasi Alur Belajar diperiksa pada desktop dan 375px. Semua canvas termuat di browser lokal. Animasi halaman tambahan diputar sekali agar tidak terus bergerak di samping form/konten.
- **Pengujian:** `npm run typecheck` lulus; `npm run lint` lulus tanpa warning/error; validasi JSON memastikan empat aset aktif tanpa gambar eksternal; `npm run test` lulus 21/21; `$env:KODELUMA_ISOLATED_BUILD='hero-build'; npm run build` lulus dengan 30 halaman statis.

### Fase 11: Ilustrasi editorial lintas halaman (15 Oktober 2026)

- **Selesai:** Sembilan aset vektor tambahan dan satu aset terminal dibuat di `scripts/generate-page-animations.mjs`, memakai palet terkunci. Beranda kini punya ilustrasi berbeda di fitur praktik, kelas pilihan, teknologi, tiga langkah, alur belajar, FAQ, dan CTA akhir. Aset sesuai konteks juga dipakai pada katalog, Tentang, verifikasi, dasbor, proyek, forum, sertifikat, profil, Quest, Code Lab, dan terminal.
- **Komponen/tokens:** `EditorialIllustration` memilih aset dan fallback Lucide bersama. `KodelumaLottie` memuat player secara dinamis, menunda ilustrasi editorial sampai mendekati viewport, dan menghormati reduced motion. Aset editorial diputar sekali; ukuran tiap JSON baru sekitar 6–13 KB, tanpa gambar eksternal. CSS ukuran ilustrasi mengacu sistem jarak dan warna Kodeluma. Tidak ada perubahan Redis, auth, maupun endpoint.
- **Belum:** Halaman admin, legal, detail forum/proyek/kursus, dan pembaca lesson tidak diberi animasi tambahan agar tugas membaca serta pengelolaan data tetap fokus dan cepat. Preview lokal katalog serta halaman pelajar yang memerlukan Redis menampilkan state kendala sistem karena layanan Redis tidak tersedia di sesi browser ini; tampilan data nyata belum dapat diperiksa secara visual.
- **Pemeriksaan visual:** Beranda dilihat pada 360px dan 1440px; ilustrasi fitur tampil setelah scroll, tidak ada overflow horizontal pada 360px, dan konsol browser tanpa error. Halaman Tentang dan Verifikasi diperiksa pada desktop. Terminal diperiksa pada desktop dan 360px; editor tetap terlihat tanpa overflow. Animasi lain dibuktikan lewat build dan validasi file, belum seluruhnya diinspeksi pada browser.
- **Pengujian:** `node scripts/generate-page-animations.mjs` berhasil membuat 13 file vektor; `npm run typecheck` lulus; `npm run lint` lulus; `npm run test` lulus 21/21 (di luar sandbox karena esbuild tidak dapat membaca path OneDrive dalam sandbox); `$env:KODELUMA_ISOLATED_BUILD='animations'; npm run build` lulus dengan 30 halaman statis (di luar sandbox karena pengambilan Google Fonts dibatasi). Percobaan build pada folder lama gagal `readlink EINVAL`; folder build QA terpisah dipakai tanpa menghapus cache lama.

### Fase 12: Tipografi global dan ruang kerja admin (16 Oktober 2026)

- **Fase 1 — sistem visual:** Kontrak tipografi pada `01_MASTER_PROMPT.md` dan `02_DESIGN.md` dinaikkan ke versi 1.1 sebelum implementasi. Judul memakai Space Grotesk, isi tetap Inter, kode tetap JetBrains Mono. Token, ukuran H1/H2, tracking, eyebrow, jarak section, dan padding kartu mobile diselaraskan tanpa mengganti palet atau Bootstrap.
- **Fase 2 — komponen lintas halaman:** `CourseCard` memakai cover dan kategori dari token brand sehingga konsisten pada beranda, katalog, dan dasbor. Angka pelajaran fallback palsu dihapus; kartu siswa terdaftar kini menuju detail kursus yang benar, bukan slug pelajaran HTML yang di-hardcode. Filter katalog ditumpuk pada lebar 320px agar label tidak terpotong.
- **Fase 3 — admin:** Ringkasan admin memakai empat metrik Redis asli, cuplikan kursus, antrean proyek, dan diskusi terbaru. Sidebar dan empat header subhalaman admin diseragamkan; label akun dan sertifikat tidak mengklaim hal yang tidak dihitung. Tidak ada perubahan key Redis, endpoint, atau RBAC.
- **Pemeriksaan visual:** Beranda, katalog, Alur Belajar, dan login diperiksa pada 375px; katalog juga pada 1440px dan 320px, login pada 320px. Font judul termuat dan tidak ada overflow horizontal pada lebar yang dicek. `/admin` tanpa sesi tetap mengarah ke login. Tampilan admin dengan sesi admin asli belum dapat diperiksa karena tidak ada sesi admin pada browser QA.
- **Pengujian:** `npm run typecheck` lulus; `npm run lint` lulus tanpa error/warning; `npm run test` lulus 26/26; `$env:KODELUMA_ISOLATED_BUILD='uiux-build'; npm run build` lulus dengan proses prerender 31/31. Build dan dev memakai `distDir` berbeda ketika variabel `KODELUMA_ISOLATED_BUILD` diset; ini mencegah cache build merusak server pratinjau.

### Fase 13: Dropdown pilihan global (16 Oktober 2026)

- **Kontrak desain:** `02_DESIGN.md` versi 1.2 menentukan ukuran, radius, menu, state pilihan, dan perilaku keyboard. Komponen bersama `SelectField` memakai React Bootstrap Dropdown, warna/radius/bayangan token, serta ikon Lucide. Tidak ada library UI baru.
- **Cakupan:** Semua 11 `<select>` interaktif diganti pada katalog, forum, Code Lab, kursus admin, pelajaran admin, dan review proyek. State/filter/mutasi tetap memakai handler yang ada; menu tidak melakukan submit form. Form review proyek dipindahkan dari dalam tabel scroll ke panel terkait agar menu tidak terpotong dan konteks penilaian jelas.
- **QA visual/fungsi:** Katalog diuji di browser pada 320px dan 1440px; tidak ada overflow horizontal atau error konsol. Pemilihan kategori memperbarui hasil, opsi aktif diumumkan sebagai terpilih, panah atas/bawah, Enter, Escape, dan klik di luar bekerja. Admin/form forum yang memerlukan sesi belum dapat diperiksa secara visual pada browser QA.
- **Pengujian:** `npm run typecheck` lulus, `npm run lint` lulus, `npm run test` lulus 26/26, dan `$env:KODELUMA_ISOLATED_BUILD='dropdown-build'; npm run build` lulus dengan prerender 31/31. Tidak ada perubahan Redis, endpoint, atau kontrak TTL.
