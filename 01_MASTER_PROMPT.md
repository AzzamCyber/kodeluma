# MASTER PROMPT — KODELUMA

> **Versi**: 1.1 | **Peran**: AI full-stack principal engineer + product designer + QA | **Bahasa UI**: Indonesia
> **Perintah pemakaian**: Tempel seluruh dokumen ini ke coding agent bersama `02_DESIGN.md`, `03_PRD_FEATURES.md`, `04_ARCHITECTURE_REDIS.md`, `05_API_CONTRACTS.md`, `06_PAGE_MAP.md`, `07_IMPLEMENTATION_PLAN.md`, dan `10_AGENT_RULES.md`. Mulai dari Fase 0, bukan langsung mengklaim aplikasi selesai.

## Identitas proyek
Bangun aplikasi nyata bernama **Kodeluma — Learn. Code. Create.**, sub-brand **by Azzam Codex**, beralamat rencana `https://kodeluma.azzamcodex.dev`. Kodeluma adalah aplikasi pembelajaran coding pemula, dengan landing page publik, katalog pembelajaran, pembelajaran bertahap, latihan, proyek praktik, forum diskusi, sertifikat pencapaian internal, profil pelajar, serta dashboard admin. Desain wajib premium-minimalis, sangat terjaga konsistensinya, **bukan** neon, cyberpunk, glassmorphism berlebihan, atau template generik.

## Tujuan utama & batasan wajib
1. Penuhi tugas **PBL Workshop Desain Web topik 19: Platform Belajar Coding untuk Pemula**: USER: tutorial coding, proyek praktik, forum diskusi, sertifikat. ADMIN: manajemen tutorial, proyek, laporan progres, pengguna.
2. **Bootstrap 5 wajib digunakan sungguh-sungguh** untuk grid, container, utilities responsif, formulir, tabel, dan minimal beberapa komponen UI. Gunakan `react-bootstrap` untuk komponen interaktif Bootstrap dalam React; hindari JS Bootstrap yang memanipulasi DOM di elemen React.
3. Stack utama: **Next.js App Router, React, TypeScript strict, Bootstrap 5, React Bootstrap, Motion (`motion/react`), GSAP 3 + ScrollTrigger, @gsap/react, Upstash Redis via @upstash/redis**. Backend adalah **Next.js Server Functions/Route Handlers**, bukan Redis. Redis adalah **satu-satunya database aplikasi** untuk MVP; dilarang tiba-tiba menambah MySQL, PostgreSQL, MongoDB, Prisma, Firebase, atau Supabase tanpa persetujuan.
4. Deployment target: Vercel dengan environment variables server-only dan DNS subdomain di domain milik pengguna. Tidak mengklaim hosting sudah aktif tanpa verifikasi.
5. Semua tombol/fitur yang ditampilkan dalam MVP harus benar-benar bekerja. Tidak boleh menggunakan tombol hiasan yang terlihat aktif, statistik hasil karangan, testimoni palsu, atau fitur AI yang sebenarnya belum dibuat.
6. Mobile-first; bahasa Indonesia alami dan singkat, microcopy konsisten. UI harus mendukung keyboard, focus states, `prefers-reduced-motion`, kontras memadai, dan loading/error/empty states.
7. **Dahulukan MVP yang selesai end-to-end**; fitur V2 diberi label `Coming later` hanya jika tidak tampil seperti fitur aktif.

## Dokumen sebagai kontrak
Prioritas saat konflik: (1) keamanan dan persyaratan tugas, (2) `10_AGENT_RULES.md`, (3) `02_DESIGN.md`, (4) `03_PRD_FEATURES.md`, (5) `04_ARCHITECTURE_REDIS.md`, (6) `05_API_CONTRACTS.md`, (7) dokumen lain. Jangan ubah branding, token, navigasi, scope, atau pilihan database sepihak. Jika ambigu, rumuskan asumsi eksplisit dalam `DECISIONS.md`, ambil pilihan paling sederhana, dan lanjut tanpa membuat fitur di luar MVP.

## Deliverables kode
- Repository Next.js TypeScript strict, App Router, dengan folder server, repositories Redis, domain/service, UI reusable, route groups publik/learner/admin.
- UI realistis, konsisten, responsif; semantik HTML; SEO dasar untuk halaman publik.
- Auth: daftar, login, logout, sesi server-side menggunakan opaque secure cookie dan Redis; password hash Argon2id; RBAC `student`/`admin` ditangani di **setiap** mutation dan endpoint admin, bukan hanya menu UI. Bila keamanan custom-auth tak bisa diverifikasi, hentikan klaim production-ready, dokumentasikan risikonya dan gunakan solusi teruji yang tetap sesuai Redis-only.
- Katalog kursus terbit, detail kursus, daftar/enroll, player lesson, checkpoint selesai pelajaran, progress persisten, latihan soal, proyek praktik dan submission berupa teks/link.
- Forum: list, create thread, reply, report/moderasi sederhana; admin manajemen konten dan akun; statistik progres berdasar data nyata.
- Sertifikat internal: hanya diberikan setelah kriteria selesai yang ditentukan, ID unik, halaman verifikasi publik tanpa membuka data pribadi berlebihan, ekspor PDF jika masuk MVP.
- Data seed yang masuk akal untuk demo, admin seed dari env / satu kali script; tanpa username/password default di source control.
- Error/empty/skeleton states, 404, 403, 500, toast accessible, optimasi Core Web Vitals, reduced-motion fallback.
- Unit/integration tests untuk services, auth/RBAC, Redis indexes, progres, sertifikat; E2E untuk alur user/admin; `README.md` setup & deploy.

## Batas cakupan MVP dan V2
**MVP WAJIB**: seluruh poin rubrik PBL; halaman publik, auth, student dashboard, katalog, satu learning path usable, 3 kursus demo terstruktur, 1 praktik dan submission, 1 forum, sertifikat contoh berbasis aturan, admin CRUD + moderasi + progres. Media kursus dapat berupa konten teks/markdown lokal dan sampul dari aset lokal.
**V2 (JANGAN DIBANGUN DULU)**: eksekusi Python remote, code runner server-side, AI tutor, leaderboard gamification, pembayaran, chat realtime, OAuth, video transcoding, email transactional, unggah gambar sembarang, analytics pihak ketiga, multi-tenant, recommendation ML.

## Perincian arsitektur penting
- Redis hanya diakses server; `UPSTASH_REDIS_REST_TOKEN` tidak boleh muncul di client bundle/`NEXT_PUBLIC_*`.
- Redis tidak memiliki relasi SQL. Gunakan key namespaces, explicit secondary indexes `SET/ZSET`, stable IDs, cursor pagination, dan transaksi `MULTI/EXEC`/skrip atomik bila perlu. Hindari `KEYS *` / `SCAN` pada request normal.
- Jangan gunakan Redis TTL pada akun, konten, progress, submission, atau sertifikat; TTL hanya untuk session, token, rate-limit, dan cache yang aman.
- Data bersifat persisten tetapi kebutuhan backup/restore tetap harus didokumentasikan dan diuji; Upstash gratis memiliki batas yang perlu diperiksa.
- **Jangan menjalankan source code siswa pada server**. Jika terdapat preview HTML/CSS/JS, gunakan isolated sandbox iframe dengan CSP restriktif, tanpa `allow-same-origin` saat `allow-scripts`. Sanitasi output; untuk MVP boleh berupa editor teks + preview HTML/CSS terkendali. Eksekusi Python nyata di luar MVP.
- Untuk sertifikat, verifikasi rules harus di sisi server; `courseCompletion` tidak boleh diubah langsung dari input client.

## Desain visual: ringkasan invariant
- Art direction: editorial modern, tenang, profesional, minimalis; putih hangat/abu sangat muda sebagai canvas, navy sebagai fondasi, royal blue sebagai aksi, amber kecil untuk aksen. Jangan menciptakan palet baru.
- Gunakan file logo resmi `assets/kodeluma-logo-horizontal.png` dan `assets/kodeluma-icon.png`; jangan membuat ulang ikon acak atau emoji sebagai pengganti identitas.
- Komponen harus memakai token dari `02_DESIGN.md` dan `assets/design-tokens.css`; tidak ada variasi radius/shadow/color spontan. Ikon `lucide-react`, gaya outline stroke 1.75–2, bukan emoji.
- Animasi: GSAP *hanya* hero/scroll storytelling landing page; Motion untuk interactions/enter/exit UI. Jangan dua engine menguasai CSS property yang sama pada elemen yang sama. Admin dashboard mengutamakan cepat dan stabil tanpa show-off animasi.
- Font: Space Grotesk headings/display, Inter body, JetBrains Mono code, dengan fallback jelas. Perubahan identitas tipografi ini dicatat dalam `02_DESIGN.md`; paragraf panjang tetap mengutamakan keterbacaan.

## Pengalaman pengguna terukur
1. Visitor menuju landing -> menekan `Jelajahi Kelas` -> katalog dengan filter -> detail -> daftar/login -> enroll -> pelajaran pertama -> centang selesai -> progress berubah di dashboard.
2. Pelajar menyelesaikan pelajaran dan kuis -> submit proyek -> kriteria kelulusan terpenuhi -> sertifikat internal dapat diunduh/ diverifikasi.
3. Pelajar membuat thread forum -> pelajar lain dapat berkomentar -> admin memoderasi.
4. Admin membuat/mengubah/menerbitkan kursus & pelajaran -> tampil di katalog publik -> admin melihat progres nyata per kursus/pelajar.

## Urutan wajib pengerjaan oleh agent
**Fase 0**: Baca dokumen; keluarkan ringkasan requirement, matriks traceability, risiko Redis-only, dan tree struktur project. Tulis `IMPLEMENTATION_STATUS.md` dengan checklist. Pastikan scope sebelum coding.
**Fase 1**: Bootstrap Next.js TS strict, import Bootstrap CSS, tokens, fonts, components dasar, responsive shell, halaman publik, mock data bertipe.
**Fase 2**: Setup Redis, key convention, repositories, migrations/seed idempotent, session auth + RBAC + rate limit; integration tests.
**Fase 3**: Courses, lessons, enrollments, progress, quiz, project submission; test flow lengkap dengan data persisten.
**Fase 4**: Forum + admin CRUD/moderasi + reports + sertifikat; kontrol akses & tests.
**Fase 5**: Motion/GSAP polish terukur, SEO, a11y, responsive, QA, seed reset, deploy dan dokumen PBL.

## Format laporan tiap fase
Sebelum dan setelah coding, tulis:
- `Selesai`: daftar file/fitur yang benar-benar berfungsi.
- `Belum`: gap dengan alasan.
- `Pengujian`: command yang dijalankan beserta hasil, **jangan bilang lulus jika tidak dijalankan**.
- `Keputusan`: asumsi maupun trade-off Redis-only yang berdampak.
- `Berikutnya`: 3–6 langkah paling penting.
Jangan menghapus fitur yang sudah selesai hanya karena menata ulang UI. Jangan menduplikasi komponen dengan bentuk berbeda. Commit per fase.

## Acceptance criteria final (gagal satu = belum selesai)
- [ ] Setiap item rubrik PBL user/admin dapat didemokan dengan aksi nyata.
- [ ] Bootstrap terbukti dari kode dan layout.
- [ ] Next.js+Redis berjalan end-to-end tanpa SQL database.
- [ ] Akun pelajar tidak bisa mengakses route maupun API admin.
- [ ] Reload/logout/login tidak menghilangkan data progres/lesson/forum.
- [ ] Sertifikat tidak bisa diklaim saat syarat belum terpenuhi.
- [ ] Semua state empty/error/loading dapat diuji; semua UI mobile 360px dan desktop 1440px rapi.
- [ ] UI mematuhi Design System; satu token system, satu button system, satu card system.
- [ ] Tidak ada secret di git/frontend; rate limit di endpoint rentan.
- [ ] `npm run lint`, `npm run typecheck`, `npm run test`, `npm run build` sukses, beserta E2E utama.
- [ ] Deploy hidup melalui HTTPS dan ada cara demo akun tes secara aman.

## Instruksi terakhir
**Mulai dengan Fase 0 dan Fase 1; jangan langsung menyelesaikan proyek lewat output kode semu.** Buat implementasi iteratif, verifikasi tiap fase, dan buat output final yang bisa dijalankan, bukan sekadar screenshot atau wireframe.
