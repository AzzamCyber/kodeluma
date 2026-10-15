# PRD — PRODUCT REQUIREMENTS DOCUMENT

## Product vision
**Kodeluma** adalah pembelajaran coding berbahasa Indonesia yang jelas, bertahap, dan berbasis praktik. Fokus MVP: pelajar memahami konsep sederhana, mempraktikkan contoh, mencatat progres, menyelesaikan mini-proyek, berdiskusi, dan mendapatkan bukti penyelesaian internal.

## Sumber requirement tugas PBL
PDF `Tugas PBL - Workshop Desain Web.pdf`, pilihan **No. 19: Platform Belajar Coding untuk Pemula**: `User: Tutorial coding, proyek praktik, forum diskusi, dan sertifikat; Admin: Manajemen tutorial, proyek, laporan progress, dan manajemen pengguna.` Kewajiban global: web menggunakan Bootstrap; proposal PPT memuat pendahuluan, desain user/admin dan fitur; demo web dihosting, presentasi PPT; laporan praktikum + PBL DOCX memuat narasi, kode, screenshot dan hasil. Tenggat yang tercetak pada PDF adalah **3 Desember 2025** dan mungkin tidak berlaku untuk kelas sekarang; konfirmasi dosen, **jangan menebak tenggat baru**.

## Scope
**MVP/PBL:** guest discover, signup/login, enroll, view lesson, mark complete, track progress, basic quiz, projects/submission, forum/reply, certificates based on completion, admin CRUD course/tutorial/project/user, report progress, publish/unpublish, moderation, responsive Bootstrap.
**Stretch yang aman hanya setelah MVP:** bookmarks, saved notes, syntax highlighted client editor, HTML/CSS code preview sandbox, certificate verification download, search improvements, user settings.
**V2:** AI tutor, Python sandbox, gamification leaderboard, payments, realtime chat, email automation, OAuth, code judging infra, mobile app. Tidak dicampurkan ke MVP.

## Personas
- **Guest:** belum punya akun, ingin memutuskan topik belajar; dapat melihat landing, katalog, detail, FAQ, forum baca jika dipublikasikan, verifikasi sertifikat terbatas; butuh CTA jelas.
- **Student:** pemula, sering memakai ponsel, butuh materi mudah, progress tersimpan, latihan dan forum; tidak dapat akses admin.
- **Admin:** pengelola konten, butuh CRUD yang jelas, publish control, status submission, ringkasan progress, moderasi, tanpa API manual.

## User stories + acceptance tests
| ID | Prioritas | Cerita | Acceptance test |
|---|---|---|---|
| AUTH-01 | P0 | Guest mendaftar | Email unik, password di-hash server, akun `student`, validasi input, sesi dibuat |
| AUTH-02 | P0 | Student login/logout | Cookie HttpOnly, sesi Redis TTL, invalid credentials generik, logout revoke |
| CAT-01 | P0 | Guest lihat katalog | Hanya published; filter level/category/search; pagination; empty state |
| CAT-02 | P0 | Guest lihat detail | Curriculum, durasi, syarat, CTA enroll; tanpa membuka hidden draft |
| LRN-01 | P0 | Student enroll | Satu enrollment/user/course; kursus published; idempotent |
| LRN-02 | P0 | Student baca pelajaran | Hanya user enrolled; content markdown tersanitasi; next/prev |
| LRN-03 | P0 | Student selesai lesson | Server validates completed lesson belongs to enrolled course; ulang tidak double-count |
| LRN-04 | P0 | Student lihat progress | Persentase berdasarkan jumlah pelajaran published wajib; bukan angka hardcoded |
| EXM-01 | P1 | Student kerjakan kuis | Pilihan jawaban, server check, 70% lulus default, attempt disimpan |
| PRJ-01 | P0 | Student lihat proyek praktik | Instruksi, requirement, keterkaitan kursus, status submission |
| PRJ-02 | P0 | Student submit hasil | Valid URL/teks, status submitted/pending_review, revisi sesuai aturan |
| FOR-01 | P0 | Student membuat thread | Login required, title/body/category validation, tampil di list |
| FOR-02 | P0 | Student membalas thread | Login, anti-spam, reply persist, count terbarui |
| FOR-03 | P0 | Admin moderasi | Hide/unhide/delete thread/reply, action audit |
| CERT-01 | P0 | Student terbitkan sertifikat | Server cek seluruh required lessons + quiz if specified + project if required; unique per course/user |
| CERT-02 | P1 | Publik verifikasi | Lookup kode random, status valid/revoked, hanya nama display/course/date tanpa email |
| ADM-01 | P0 | Admin kelola kursus | Create/edit/publish/unpublish, slug unik, validation, pagination |
| ADM-02 | P0 | Admin kelola lessons | CRUD/order, required flag; publish course only if at least one lesson |
| ADM-03 | P0 | Admin kelola proyek | CRUD and review submissions; status change persists |
| ADM-04 | P0 | Admin kelola pengguna | Search, list, suspend/reactivate (tidak boleh hapus admin terakhir) |
| ADM-05 | P0 | Admin laporan progress | Data agregat dan per pelajar/kelas nyata, bukan mock stat |
| NFR-01 | P0 | UI dapat digunakan | Responsive 320–1440, keyboard focus, loading/error/empty, reduced motion |
| NFR-02 | P0 | Safety & security | Protect RBAC every mutation, no secret client-side, rate limit auth/forum, XSS prevention |

## Business rules rinci
### Course dan lesson
- Course states `draft`, `published`, `archived`; hanya published bisa dicari/enroll baru.
- Lesson states `draft`, `published`; hanya published dihitung dan dapat dipelajari; author bisa memilih `isRequired` true default.
- Urutan lesson eksplisit integer order; perubahan urutan admin terjaga deterministik.
- Course yang sudah punya student tidak boleh hard-delete; gunakan archive (soft delete). Pertahankan progres terhadap versi kurikulum tertentu, jangan diam-diam mengubah denominator sertifikat lama.
- Slug URL lowercase, kebab-case, unik; ID menggunakan UUID v4/cuid-like dan tidak berasal dari teks user.

### Progress
- Enrollment menyimpan `enrolledAt`, `status`, `curriculumVersion`.
- `completeLesson` idempotent (Redis set berisi lesson IDs) dan menulis activity hanya saat pertama kali selesai.
- Progress = completed required published lessons pada curriculum snapshot / total required lessons pada snapshot. 0 lesson -> 0% dan course tidak dapat publish. Klaim 100% tidak boleh sekadar nilai client.
- Menandai selesai bukan berarti user lulus kuis; quizScore adalah indikator tersendiri.
- Untuk perubahan curriculum, versi baru berlaku bagi enrollment baru. MVP: blok perubahan required lesson di course yang sudah dipublished dan ter-enroll, atau buat version snapshot eksplisit sebelum mengizinkan (pilih aturan paling sederhana dan UI menjelaskannya).

### Quiz
- Satu quiz sederhana per course, MCQ 3–10 item per kuis. Nilai dihitung server; `correctAnswer` **jangan** dikirim ke frontend sebelum submit; passMark 70% default.
- Boleh retry, simpan best score + latest attempt + attempts count.

### Projects
- PBL mewajibkan proyek praktik; MVP cukup instruksi proyek dan submission berupa URL repository/deploy + catatan. **Tidak perlu mengeksekusi kode di backend.**
- Status submission: `draft`, `submitted`, `needs_revision`, `approved`. Hanya admin bisa approve/needs_revision. Jika course mensyaratkan project, sertifikat butuh approved.

### Forum
- Categories seeded `Umum`, `HTML`, `CSS`, `JavaScript`, `Proyek`.
- Student bisa edit/delete konten sendiri dalam window yang ditentukan (misal 15 menit) kecuali sudah dimoderasi; admin bisa hide kapan saja.
- Moderator mengisi reason internal. Semua user input text/markdown disanitasi, tidak boleh raw HTML.
- Pagination 20 items, latest first; rate limit create/reply.

### Certificate
- Bukan sertifikat lembaga resmi / sertifikasi profesional; teks `Sertifikat Penyelesaian Kodeluma`.
- Satu sertifikat per student/courseVersion, kode verifikasi random tidak berurutan, `issuedAt` immutable.
- Snapshot nama, judul course, course version, criteria result, tanggal tersimpan saat issuance. Admin dapat revoke dengan alasan.
- Certificate download PDF bisa di-generate server dari snapshot tanpa meng-upload binary ke Redis; verify URL `/verify/[code]`.

### Admin reports
- Reports minimal: total users, published courses, enrollments, completions, daftar progress per user/course, proyek pending review.
- Ambil dari index Redis yang di-maintain secara transaksional. Analytics growth monthly V2 kecuali event counters sudah tersedia.

## Data seed untuk demo (bukan production stats)
- 3 courses published: HTML Dasar, CSS Fundamental, JavaScript Pemula.
- Masing-masing minimal 3 published lessons dan 1 mini exercise.
- 2 projects: `Halaman Profil Sederhana`, `Kartu Produk Responsif`.
- 1 quiz per course, masing-masing 3 pertanyaan; 5 topik diskusi dummy yang **ditandai seeded-demo** bila ditampilkan.
- 1 admin dan 2 akun pelajar demo hanya di staging, credential lewat env/README lokal bukan hardcode publik.
- Contoh 1 sertifikat melalui student demo yang diselesaikan **mengikuti semua business rules**, bukan seed sertifikat manual tanpa syarat.

## Non-functional requirements
- Supported browsers modern Chrome/Edge/Firefox/Safari, Android Chrome/iOS Safari.
- Accessibility: WCAG 2.2 AA sebagai target; error, label, focus, headings dan reduced motion diperiksa.
- Performance: utamakan SSR/RSC pada read-only; client components hanya untuk fitur interaktif; images optimized, lazy-load animasi.
- Resilience: fallback ketika Redis error, request timeout, connection secret hilang; jangan silently return data palsu.
- Privacy: simpan hanya nama display, email, hash password, progress, submissions; jangan collection data sensitif yang tidak relevan.
- Observability: struktur log requestId/errorCode tanpa password/token, audit admin.

## Definition of done menurut PBL
Demo yang harus dapat dilakukan live: login -> pilih kursus -> enroll -> buka tutorial -> complete -> lihat progress -> submit proyek -> buat diskusi -> lihat sertifikat setelah syarat valid -> login admin -> CRUD tutorial dan proyek -> lihat laporan progres -> moderasi forum -> deploy online.
