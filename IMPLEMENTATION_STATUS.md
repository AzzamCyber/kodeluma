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
| REQ-01 | Desain & Layout Bootstrap 5 | `PublicNav`, `StudentSidebar`, `AdminSidebar`, Layouts | Root & Layouts | CSS Tokens + Bootstrap | In Progress |
| REQ-02 | Auth Register (Siswa) | `/register`, Form | `authService.register` | `kl:v1:user:{uid}`, email index | Rencana (Fase 2) |
| REQ-03 | Auth Login/Logout + Sesi | `/login`, Cookie session | `authService.login/logout` | `kl:v1:session:{tokenHash}` TTL | Rencana (Fase 2) |
| REQ-04 | Katalog Kursus & Detail | `/courses`, `/courses/[slug]` | `courseService.getCatalog` | `kl:v1:course:{cid}`, indexes | Rencana (Fase 1/3) |
| REQ-05 | Enrollment Kursus | Tombol Ikuti di Detail | `learningService.enroll` | `kl:v1:enroll:{uid}:{cid}` | Rencana (Fase 3) |
| REQ-06 | Tutorial Coding & Reader | `/learn/[courseSlug]/[lessonSlug]` | `learningService.getLesson` | `kl:v1:lesson:{lid}`, markdown | Rencana (Fase 3) |
| REQ-07 | Checkpoint & Progress | Tombol Tandai Selesai | `learningService.completeLesson` | `kl:v1:complete:{uid}:{cid}` SET | Rencana (Fase 3) |
| REQ-08 | Evaluasi Kuis Pemula | Komponen Kuis Interaktif | `quizService.gradeAttempt` | `kl:v1:quiz:{qid}`, attempts | Rencana (Fase 3) |
| REQ-09 | Proyek Praktik & Submission | `/projects`, `/projects/[slug]` | `projectService.submit` | `kl:v1:project:{pid}`, submissions | Rencana (Fase 3) |
| REQ-10 | Forum Diskusi & Balasan | `/forum`, `/forum/[id]` | `forumService.threads/replies` | `kl:v1:thread:{tid}`, replies ZSET | Rencana (Fase 4) |
| REQ-11 | Sertifikat Internal | `/certificates`, `/verify/[code]` | `certificateService.issue/verify`| `kl:v1:cert:{id}`, verify code | Rencana (Fase 4) |
| REQ-12 | Admin CRUD Kursus & Materi | `/admin/courses`, `/admin/courses/[id]`| `courseService.admin` | `kl:v1:courses:all`, lessons ZSET | Rencana (Fase 4) |
| REQ-13 | Admin Review Proyek | `/admin/projects`, `/admin/submissions`| `projectService.review` | `kl:v1:submissions:pending` | Rencana (Fase 4) |
| REQ-14 | Admin Laporan Progres | `/admin/progress`, `/admin` | `reportService.getOverview` | Agregasi indeks Redis | Rencana (Fase 4) |
| REQ-15 | Admin Manajemen User | `/admin/users` | `authService.adminUsers` | `kl:v1:users:created` ZSET | Rencana (Fase 4) |
| REQ-16 | Admin Moderasi Forum | `/admin/forum` | `forumService.moderate` | Thread / Reply status update | Rencana (Fase 4) |

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

### Fase 2: Redis Setup, Model Data, Auth Sesi, RBAC (STATUS: BELUM)
- [ ] Setup singleton `src/lib/redis.ts` (server-only) dan fallback mock in-memory untuk lokal tanpa koneksi Upstash.
- [ ] Skema domain Zod & tipe TypeScript (`User`, `Session`, `Course`, `Lesson`, `Enrollment`, `Submission`, `Thread`, `Reply`, `Certificate`).
- [ ] Repository layer dengan Redis key namespaces (`kl:v1:...`) & indexes unik.
- [ ] Modul keamanan auth: hash password Argon2id, session token SHA-256 opaque cookie, guards server-side (`requireUser`, `requireAdmin`).
- [ ] Endpoint `/api/v1/auth/register`, `/api/v1/auth/login`, `/api/v1/auth/logout`, `/api/v1/me`.
- [ ] Halaman UI `/login` dan `/register` dengan validasi server & client.
- [ ] Script seeding idempotent (`scripts/seed.ts` & `scripts/seed-admin.ts`).
- [ ] Unit & integration tests untuk auth, rate limit, dan RBAC guard.

### Fase 3: Kursus, Pembelajaran, Progres, Kuis, Proyek Praktik (STATUS: BELUM)
- [ ] Service kursus publik: load dari Redis `kl:v1:courses:published`.
- [ ] Enrollment: idempotent `POST /api/v1/courses/[id]/enroll`.
- [ ] Dashboard Siswa `/dashboard`: melanjutkan belajar, progres riil, kelas aktif.
- [ ] Lesson Reader `/learn/[courseSlug]/[lessonSlug]`: navigasi materi, markdown reader aman, checkbox selesai.
- [ ] Checkpoint completion idempotent `POST /api/v1/lessons/[id]/complete` (kalkulasi server persentase real).
- [ ] Kuis MCQ interaktif: grading di server, penyimpanan attempt, skor terbaik.
- [ ] Proyek Praktik `/projects` & `/projects/[slug]`: pengumpulan URL repository + catatan siswa.
- [ ] Verifikasi persistensi progres setelah reload & logout/login.

### Fase 4: Forum Komunitas, Admin CRUD, Laporan, Sertifikat (STATUS: BELUM)
- [ ] Forum Diskusi `/forum` & `/forum/[id]`: kategori, pagination ZSET, buat thread, balas komentar.
- [ ] Sistem Sertifikat:
  - Server-side rule check (wajib semua lesson selesai, kuis lulus >=70%, proyek submitted/approved jika ada).
  - Penerbitan sertifikat atomik (`SET NX`), ID & kode verifikasi unik acak.
  - Halaman `/certificates` (siswa) dan verifikasi publik `/verify/[code]`.
  - Cetak / unduh PDF atau tampilan sertifikat cetak bersih.
- [ ] Admin Portal `/admin`:
  - `/admin/courses`: CRUD kursus, urutan lesson, terbitkan/arsip.
  - `/admin/projects`: kelola proyek & review submission siswa (`approved` / `needs_revision`).
  - `/admin/forum`: moderasi thread & balasan (sembunyikan konten melanggar).
  - `/admin/users`: daftar siswa/admin, suspend/aktifkan akun (proteksi last admin).
  - `/admin/progress`: laporan progres agregat dan per siswa berdasar data nyata Redis.

### Fase 5: Polish Visual, Motion/GSAP, A11y, QA Final, Deploy (STATUS: BELUM)
- [ ] Animasi GSAP ScrollTrigger halus pada landing hero/path, Motion untuk micro-interaction komponen.
- [ ] Dukungan penuh `prefers-reduced-motion: reduce`.
- [ ] Pengujian aksesibilitas WCAG 2.2 AA (kontras, label formulir, navigasi keyboard).
- [ ] Pengujian responsif 320px, 390px, 768px, 1024px, 1440px.
- [ ] Optimasi Core Web Vitals, SEO meta tags, OpenGraph, sitemap.
- [ ] Dokumen panduan presentasi & laporan PBL.
