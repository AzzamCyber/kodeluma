# KODELUMA — ALL-IN-ONE ADVANCED LEARNING SPECIFICATION

**Versi:** 2.0 | **Tanggal:** 15 Oktober 2026 | **Jenis:** prompt dan spesifikasi pengembangan, bukan implementasi perangkat lunak.

> **PETUNJUK AI:** Dokumen tunggal ini menggabungkan master prompt, katalog multi-bahasa, dan quest system. Baca seluruhnya bersama `02_DESIGN.md` dan source existing Kodeluma. Audit dulu, kerjakan MVP PBL lebih dahulu, lanjutkan fitur advanced bertahap tanpa merombak brand dan tanpa membuat fitur palsu.

## Isi dokumen

- Part I: arsitektur, stack, Redis, lesson player, Code Lab, CLI, Python, CMS, keamanan dan roadmap.
- Part II: 75 seed course lintas teknologi, 12 learning paths, contoh silabus dan strategi penulisan materi.
- Part III: puluhan quest, XP, skill tree, anti-cheat, validasi, admin authoring dan rencana pengujian.

---

# PART I — MASTER PRODUCT & ENGINEERING PROMPT

# KODELUMA — ADVANCED LEARNING ECOSYSTEM
## Master AI Coding Prompt · Interactive Code Lab · CLI · Multi-language Courses · Quests · CMS · Redis

> **CARA MEMAKAI:** Simpan file ini di folder `/docs/` proyek Kodeluma, bersama `02_KODELUMA_CURRICULUM_CATALOG.md` dan `03_KODELUMA_QUEST_SYSTEM.md`. Berikan kepada AI coding dengan instruksi: **"Baca ketiga dokumen ini dan semua dokumen asli Kodeluma, audit proyek, pecah menjadi milestone, lalu implementasikan tahap demi tahap tanpa membangun ulang UI dan tanpa mengklaim fitur yang belum berfungsi."**
>
> **Status dokumen:** Ini adalah **spesifikasi, instruksi, dan roadmap**. Bukan source code aplikasi yang sudah jadi, bukan jaminan semua materi telah ditulis, dan bukan bukti seluruh runtime multi-bahasa telah tersedia.

## 0. PERAN AI DAN PERINTAH UTAMA

Bertindaklah sebagai **Principal Full-stack Engineer + EdTech Product Architect + Curriculum Designer + Instructional Designer + Secure Sandbox Engineer + UI/UX Lead + QA Lead** yang mengembangkan proyek **KODELUMA** yang **sudah ada**.

1. **Audit kode dan dokumen yang ada sebelum mengubah apa pun.** Baca `01_MASTER_PROMPT.md`, `02_DESIGN.md`, `03_PRD_FEATURES.md`, `04_ARCHITECTURE_REDIS.md`, `05_API_CONTRACTS.md`, `06_PAGE_MAP.md`, `07_IMPLEMENTATION_PLAN.md`, `10_AGENT_RULES.md`, serta dokumentasi landing source dan dokumen ekspansi ini.
2. **Jangan restart/rewrite dari nol.** Pertahankan halaman, komponen, desain, branding, dan alur yang sudah berfungsi. Jika perubahan arsitektur diperlukan, lakukan migrasi bertahap dengan tes dan catatan perubahan.
3. **Konsistensi lebih penting dari efek visual.** Ikuti `02_DESIGN.md` sebagai kontrak visual utama. Perluasan ini mengubah **roadmap fitur** saja, bukan token warna/font/layout yang telah dikunci.
4. **MVP PBL harus tetap selesai.** Topik 19 dosen: *Platform Belajar Coding untuk Pemula*; sisi user: tutorial, proyek praktik, forum diskusi, sertifikat; sisi admin: manajemen tutorial, proyek, laporan progres, pengguna. Bootstrap harus digunakan sungguh-sungguh. Fitur super-advanced adalah tahap pengembangan, bukan alasan mengabaikan kebutuhan ini.
5. **Jangan membuat fungsi palsu:** tombol Run harus benar-benar menjalankan mode yang didukung; terminal simulasi harus diberi label *Guided Terminal*; kursus yang belum lengkap diberi status *Coming Soon*; angka statistik berasal dari data riil atau dilabeli *demo*.
6. **Kerjakan secara increment dan tes.** Selesaikan satu alur end-to-end, bukan puluhan halaman kosong. Laporkan per fase hasil build, typecheck, unit test, E2E, screenshot, dan kendala sebenarnya.

### 0.1 Prioritas dokumen bila terjadi konflik

1. Keamanan pengguna, aturan tugas dosen, lisensi dan privasi.
2. `10_AGENT_RULES.md` dan aturan ini mengenai tidak menghapus fungsi lama.
3. `02_DESIGN.md` untuk UI dan branding.
4. Dokumen asli `03_PRD_FEATURES.md` dan `04_ARCHITECTURE_REDIS.md` untuk MVP aktif.
5. Spesifikasi ekspansi ini dan katalog kurikulum untuk fitur **setelah MVP**.

Jika dokumen lama menempatkan Python sandbox/leaderboard di V2, **itu tetap berlaku** sampai PBL MVP lulus pengujian. Jangan diam-diam menjadikannya blocker fase awal.

---

## 1. IDENTITAS DAN VISI PRODUK

- **Nama:** Kodeluma (wordmark: `kodeluma.`)
- **Endorsement:** by Azzam Codex
- **Tagline:** `Learn. Code. Create.`
- **Domain target:** `https://kodeluma.azzamcodex.dev`
- **Bahasa utama:** Bahasa Indonesia yang mudah dimengerti; istilah pemrograman tetap akurat, dengan glosarium.
- **Positioning:** Platform belajar coding modern dari nol hingga siap membangun proyek, dengan dokumentasi dan contoh interaktif, jalur belajar lintas teknologi, terminal edukatif, quest, proyek portofolio, dan progres yang nyata.
- **Referensi pengalaman:** struktur tutorial dengan contoh dan *Try It* ala W3Schools; latihan terukur ala freeCodeCamp; editor bersahabat ala VS Code. **Ambil prinsip UX/pedagogi, jangan menyalin konten, soal, atau desain berhak cipta.**
- **Target:** pelajar, mahasiswa, autodidak, career switcher, pemula, dan developer intermediate/advanced.
- **Prinsip UX:** belajar bertahap; contoh dekat kehidupan nyata; teks bisa dibaca tanpa animasi; latihan seimbang teori dan praktik; feedback menjelaskan *mengapa* jawaban salah.

### 1.1 Value proposition

`Pahami konsep → coba kode → selesaikan quest → bangun proyek → ukur kemampuan → lanjutkan jalur berikutnya.`

### 1.2 Target kualitas

- Konten jelas dan tervalidasi, bukan hanya tumpukan daftar judul.
- Sistem terasa seperti satu produk yang konsisten, bukan gabungan template.
- Fitur gratis inti tetap berguna; jangan menambahkan paywall tanpa instruksi eksplisit.
- Kurikulum dapat diperbarui tanpa merusak progres lama.
- Untuk materi yang sensitif terhadap perubahan versi, simpan versi teknologi, tanggal tinjau, dan tautan dokumentasi resmi.

---

## 2. TECH STACK TETAP DAN PERAN SETIAP LAPIS

| Lapisan | Teknologi | Aturan |
|---|---|---|
| Framework | Next.js App Router + React | Server Components untuk baca data; Client Components untuk editor/terminal/animasi |
| Bahasa | TypeScript strict | Skema validasi end-to-end dan tipe domain eksplisit |
| UI PBL wajib | Bootstrap 5 + React Bootstrap | Gunakan grid, utilities responsif, form, tabel, dan komponen nyata |
| Identitas visual | CSS variables Kodeluma | Ikuti `02_DESIGN.md`; jangan mengganti ke Tailwind/shadcn diam-diam |
| Animasi | Motion for React (`motion/react`) | UI state/microinteractions; hormati reduced motion |
| Animasi lanjutan | GSAP 3 + ScrollTrigger | Untuk storyboard landing, bukan tiap paragraf pelajaran |
| Ikon | Lucide React + animated Lucide yang kompatibel/lisensinya sesuai | Ikon sederhana, animasi seperlunya; bukan emoji untuk UI |
| Code editor | Monaco Editor (opsional dengan lazy-loading) | Dipakai pada Code Lab, bukan semua halaman |
| Server backend | Next.js Route Handlers / Server Functions | Auth, validation, business rules, moderation, grading |
| Data utama | Upstash Redis via `@upstash/redis` | Database aplikasi utama, server-side, dengan indeks eksplisit |
| Deploy | Vercel | Pastikan kebutuhan runtime/biaya/limit diverifikasi |
| Validasi | Zod atau setara | Semua payload dan config env divalidasi |
| Tes | Vitest + Testing Library + Playwright | Lulus unit/integration/E2E untuk fitur penting |

**Redis bukan mesin eksekusi kode atau backend API.** Redis dipakai untuk persistensi data; permintaan browser diproses di Next.js. Untuk file biner besar/sandbox server pada tahap lanjut, ajukan desain storage/execution terpisah **sebagai keputusan baru yang disetujui**, bukan mengganti Redis sebagai database utama.

### 2.1 Rencana runtime latihan per bahasa

| Bahasa/tugas | Mode awal yang realistis | Mode advanced | Catatan keamanan |
|---|---|---|---|
| HTML + CSS | `iframe sandbox` + preview terisolasi | Multi-file, test DOM, aksesibilitas | Jangan pakai origin/permission yang membuat untrusted code bebas mengakses situs utama |
| JavaScript browser | Isolated iframe/Worker sesuai kasus | Unit-test judge terisolasi | Jangan `eval` input siswa di konteks aplikasi utama |
| TypeScript | Compile/transpile in-browser lalu sandbox | Multi-file TS + test runner | Kode hasil transpile tetap tidak tepercaya |
| Python | Pyodide di Web Worker setelah proof of concept | Runner terisolasi di server bila diperlukan | Worker bukan jaminan keamanan untuk semua ancaman; batasi kerja/jaringan/memori dan siapkan terminasi |
| SQL | SQLite berbasis WASM, database latihan disposable | Dataset/schemas kompleks | Batasi statement, ukuran hasil, dan sumber data |
| CLI/Git dasar | Guided Terminal + virtual filesystem | Browser-hosted runtime seperti WebContainers jika sesuai lisensi/kompatibilitas | Jangan pernah meneruskan command siswa ke shell server Next.js |
| Node.js/npm | Tutorial + simulasi pada tahap awal | WebContainers / isolated compute provider | Tinjau persyaratan lisensi, browser support, dan biaya terlebih dahulu |
| C/C++/C#/Java/Go/Rust/Kotlin/Swift | Editor + penilaian konseptual atau submission proyek | Eksekusi di sandbox ephemeral terpisah | Tidak boleh raw execution di Next.js/Vercel; resource limit, non-root, network isolation, no secrets |
| R/Julia/PHP/Ruby/Bash | Materi, contoh, quiz, submission | Sandbox bahasa spesifik atau remote isolated runner | Jangan mengklaim didukung Run jika belum ada runtime |

**Sumber teknis untuk implementer:** dokumentasi resmi Pyodide, WebContainers, Monaco, Next.js, Upstash, Motion. Verifikasi ulang API/lisensi/dukungan browser dan versi pada saat coding.

---

## 3. SKALA PRODUK DAN PRIORITAS FITUR

Gunakan label `P0` (wajib demo PBL), `P1` (upgrade dekat), `P2` (advanced), `P3` (riset/tahap panjang). Keberadaan fitur dalam spesifikasi **tidak berarti langsung dibuat**.

| Area | P0 (PBL) | P1 | P2/P3 |
|---|---|---|---|
| Landing & katalog | Landing, katalog kursus, detail, pencarian dasar | Personalized discovery, bookmarks | Recommend engine adaptif |
| Identitas | Register/login/logout, student/admin | Profile, settings, reset password | OAuth, SSO, organisasi |
| Belajar | Modul, lesson, quiz, progress | Learning path, glossary, notes, content version | Learning plans adaptif, mastery mapping |
| Code Lab | Contoh kode & praktik/submission | HTML/CSS/JS live preview, Monaco | Python WASM, SQL, terminal, Node runtime, remote compilers |
| Gamification | Achievement sederhana opsional | XP, level, quest harian, badges | Weekly leagues, teams, boss challenge, skill tree adaptif |
| Komunitas | Thread, reply, moderasi | Forum per kursus, bookmark, report | Peer review, collaborative learning |
| Proyek | Brief, upload tautan/teks submission | Rubrik dan review | Automatic judging terisolasi, project showcase |
| Sertifikat | Penyelesaian kursus dengan ID verifikasi | Certificate templates, share link | Credential pathway dengan kebijakan versi/validitas |
| Admin | CRUD kursus/proyek/user, progress report | CMS rich blocks, quests, moderation queue | Author workflow, content QA, A/B test terukur |
| Operasional | Validasi, rate limit, log dasar | Monitoring, review schedule | Cost limits untuk runtimes, fraud analytics |

---

## 4. ROLE DAN PERMISSION

- **Guest:** lihat publik, katalog terbit, preview lesson yang ditandai gratis, status sertifikat publik yang dibatasi.
- **Student:** enroll, belajar, menjalankan playground yang didukung, mengerjakan challenge, ikut forum, submit proyek, melihat XP/progres/sertifikat sendiri.
- **Instructor** *(P2)*: membuat draf konten miliknya, menilai proyek pada kursus yang ditugaskan; tidak boleh mengelola user sembarangan.
- **Content Editor** *(P2)*: edit materi, tidak otomatis boleh publish.
- **Content Reviewer** *(P2)*: review konten/version diff, approve atau return with changes.
- **Moderator** *(P1/P2)*: kelola report dan komentar, tidak bisa akses credentials atau data keuangan.
- **Admin:** kelola akun dan konten PBL, publish, proyek, statistik asli, moderation; tindakan disimpan audit.
- **Super Admin** *(P3)*: pengaturan platform kritis; hindari role ini bila belum dibutuhkan.

Seluruh permission ditegakkan **di server pada tiap endpoint dan mutation**. UI hiding bukan keamanan.

---

## 5. INFORMATION ARCHITECTURE DAN ROUTES

### 5.1 Public

- `/` beranda; `/courses` katalog; `/courses/[slug]` detail.
- `/paths` learning paths; `/paths/[slug]` roadmap dan prerequisite.
- `/languages` direktori teknologi; `/languages/[slug]` landing dokumentasi bahasa.
- `/learn` direktori materi; `/learn/[course]/[lesson]` pelajaran.
- `/projects` daftar proyek; `/quests` eksplorasi quest (guest preview saja).
- `/community` forum; `/certificates/verify/[id]` verifikasi sertifikat aman.
- `/about`, `/faq`, `/contact`, `/privacy`, `/terms`, `/accessibility`.

### 5.2 Learner (auth required)

- `/dashboard`, `/dashboard/my-learning`, `/dashboard/progress`.
- `/dashboard/quests`, `/dashboard/achievements`, `/dashboard/streak`.
- `/dashboard/projects`, `/dashboard/submissions`, `/dashboard/certificates`.
- `/dashboard/bookmarks`, `/dashboard/notes`, `/dashboard/settings`.
- `/lab` Code Lab hub; `/lab/[workspaceId]` playground; `/lab/terminal` Guided CLI.
- `/challenge/[slug]` challenge player; `/exam/[id]` assessment (P2).

### 5.3 Admin

- `/admin` dashboard; `/admin/courses`, `/admin/modules`, `/admin/lessons`.
- `/admin/learning-paths`, `/admin/content-review`, `/admin/content-versions`.
- `/admin/exercises`, `/admin/quests`, `/admin/quest-rules`, `/admin/achievements`.
- `/admin/projects`, `/admin/submissions`, `/admin/certificates`.
- `/admin/users`, `/admin/progress`, `/admin/analytics`, `/admin/moderation`.
- `/admin/system/audit`, `/admin/system/health`.

Implementasi route dilakukan bertahap; jangan membuat semua rute sebagai halaman kosong yang terlihat siap.

---

## 6. MODEL KONTEN DAN KURIKULUM LINTAS BAHASA

Kurikulum harus mencakup **bukan hanya bahasa pemrograman basic**. Rancang sistem yang mampu mengelola frontend, backend, mobile, data, AI/ML, cloud, database, security, DevOps, embedded, game dev, computer science, dan praktik kerja developer.

### 6.1 Entitas hierarkis

```text
Domain / Category
  └─ Learning Path (misal Full-Stack Web Developer)
      └─ Course (misal Python From Zero to Advanced)
          └─ Module (misal Async Programming)
              └─ Lesson (misal asyncio Tasks & Cancellation)
                  ├─ Content Blocks
                  ├─ Interactive Examples
                  ├─ Knowledge Checks
                  ├─ Exercises / Challenges
                  ├─ Related Quests
                  └─ References / Changelog
```

### 6.2 Level kemampuan

1. **Foundation:** belum pernah coding; konsep logika, IDE, terminal, dan debugging.
2. **Beginner:** dasar sintaks dan program sederhana.
3. **Intermediate:** API, OOP, data structures, project structure, tests.
4. **Advanced:** concurrency, architecture, security, performance, deployment.
5. **Specialization:** topik khusus domain, capstone, dan studi kasus riil.

Tidak semua kursus harus memuat kelima level; tandai prerequisite yang jujur.

### 6.3 Format wajib setiap lesson

- Metadata: ID stabil, slug, title, course/module, level, objectives, estimated time, prerequisite IDs.
- Ringkasan `Mengapa ini penting?` dua sampai tiga kalimat.
- Konsep utama: penjelasan sederhana → akurat → contoh praktis.
- Visual/tutorial bertahap; kode menggunakan sintaks yang benar.
- `Try It` dengan starter code, expected behavior, reset, feedback.
- Catatan kesalahan umum dan tips debugging.
- 2–5 latihan berjenjang; minimal satu penilaian konsep.
- Challenge/quest terkait dengan tujuan materi.
- Rangkuman, glosarium, next/previous, sumber dokumentasi resmi.
- Content version, technology version, published/reviewed dates, reviewer.
- Aksesibilitas: deskripsi gambar, heading bertingkat, contoh bisa disalin, alternatif untuk interaksi drag/drop.

### 6.4 Blok konten CMS

`heading`, `paragraph`, `callout`, `ordered_steps`, `bullets`, `code`, `tabs`, `comparison_table`, `diagram`, `interactive_tryit`, `quiz`, `challenge`, `terminal_demo`, `video_embed`, `image`, `glossary`, `faq`, `summary`, `references`, `next_step`.

Setiap blok punya schema tervalidasi, versi, dan serializer. Render Markdown/MDX hanya lewat daftar komponen tepercaya; jangan menerima JavaScript atau HTML arbitrary dari pengguna.

### 6.5 Ketentuan sumber materi

- Materi ditulis **orisinal** dengan bahasa Indonesia yang jelas.
- Gunakan referensi **dokumen resmi**: MDN, Python Docs, TypeScript Handbook, React/Next Docs, PostgreSQL, Redis, Git, dsb.
- Inspirasi format W3Schools: lesson pendek, contoh kode, Try It, latihan; **jangan scrape/menyalin artikel, soal, contoh unik, atau gambar berhak cipta**.
- Klaim `terbaru` harus didukung versi, tanggal verifikasi, sumber, dan review admin. Jangan menuliskan `latest` tanpa dasar.
- Berikan peringatan bila materi dipengaruhi versi, deprecated APIs, atau fitur eksperimental.
- Untuk AI-assisted coding, utamakan pemeriksaan manual, security, dan keterbatasan model, bukan janji otomatis benar.

### 6.6 Cakupan bahasa/teknologi wajib di katalog ekspansi

Lihat `02_KODELUMA_CURRICULUM_CATALOG.md` untuk daftar modul yang terstruktur. Minimal dukung kategori berikut dalam **model data**:

- **Web:** HTML, CSS, Sass, Bootstrap, JavaScript, TypeScript, React, Next.js, Vue, Nuxt, Angular, Svelte, Node.js, Express, API, testing, performance, accessibility.
- **General purpose:** Python, Java, C, C++, C#, Go, Rust, PHP, Ruby, Kotlin, Swift, Dart, R, Julia.
- **Backend:** Django, Flask, FastAPI, Spring Boot, ASP.NET Core, Laravel, NestJS, background jobs, realtime, caching, architecture.
- **Database & data:** SQL, relational modeling, MySQL, PostgreSQL, SQLite, Redis, MongoDB overview, data engineering, ETL, analytics, BI.
- **Mobile:** Flutter, React Native, Android/Kotlin, iOS/Swift, REST integration, publishing.
- **AI/Data:** Python for Data, NumPy, Pandas, visualization, statistics, classical ML, model evaluation, LLM APIs, RAG foundations, AI safety.
- **DevOps/Infra:** Linux, Bash, PowerShell fundamentals, Git, GitHub, Docker, CI/CD, cloud basics, DNS, HTTP, observability, Kubernetes fundamentals.
- **Security:** OWASP Top 10, secure coding, auth, authorization, cryptography basics, secure deployment, defensive testing in authorized labs.
- **CS fundamentals:** algorithms, data structures, computer networks, operating systems, software design, debugging, test engineering.
- **Creative/IoT:** game programming foundations, Unity/C# basics, Godot/GDScript, Arduino/C++ basics, IoT fundamentals.

Jangan tampilkan seluruh katalog sebagai kursus yang telah selesai. Status tiap course harus `planned | draft | in_review | published | archived`.

---

## 7. KODELUMA LEARN — W3SCHOOLS-INSPIRED STUDY EXPERIENCE

### 7.1 Desktop layout

- **Topbar:** logo, search materi, path switcher, progress shortcut, user menu.
- **Sidebar kiri (240–280 px desktop):** TOC aktif, collapsible modules, checkmark progress, estimated duration, pencarian topik.
- **Konten tengah (lebar baca nyaman):** breadcrumb, lesson title, `what you'll learn`, penjelasan, contoh, Try It, latihan, referensi, next/previous.
- **Panel kanan opsional:** quick TOC, note, glossary, progress/checkpoint; tidak mendominasi.
- **Mobile:** drawer sidebar, TOC dropdown, tombol `Try It` beralih mode editor, area kode scroll horizontal bila perlu.

### 7.2 Komponen wajib

`LessonHeader`, `LessonSidebar`, `LearningObjectives`, `ReadingProgress`, `CodeSnippet`, `TryItBlock`, `ConsoleOutput`, `TerminalBlock`, `KnowledgeCheck`, `ExerciseCard`, `QuestUnlock`, `LessonSummary`, `ReferenceLinks`, `PreviousNext`, `BookmarkButton`, `ReportContentIssue`, `GlossaryPopover`, `UpdatedAtBadge`.

### 7.3 Alur penyelesaian

- Baca materi + lanjutkan sampai checkpoint.
- Tandai selesai jika syarat lesson dipenuhi; hindari hanya scroll 100% sebagai bukti mastery.
- Latihan auto-graded jika executor tersedia, atau diverifikasi oleh pilihan jawaban/expected output.
- Simpan progress per lesson version; ketika materi diperbarui, progres lama dipertahankan dengan aturan migrasi eksplisit.
- Tampilkan `Lanjutkan Pelajaran`, progress persen riil, dan saran review materi jika belum menguasai.

---

## 8. CODE LAB — ADVANCED MULTI-LANGUAGE PLAYGROUND

### 8.1 Editor

Monaco Editor (lazy loaded, client-only) dengan syntax highlight, multiple tabs, minimap toggle, bracket pair, line numbers, formatting jika tersedia, search/replace, theme, shortcuts, snippets, starter templates, diagnostics, autosave debounce, download, copy, duplicate workspace, reset, fullscreen, side-by-side view.

Jangan otomatis mengaktifkan semua fitur editor jika belum didukung language server tertentu. Jelaskan dukungan per bahasa.

### 8.2 Output & preview

- Tabs: `Preview`, `Console`, `Problems`, `Tests`, `Terminal` (yang belum didukung tidak dibuat berpura-pura aktif).
- Input contoh kode per lesson, expected output, stdout/stderr terbatas.
- `Run`, `Stop`, `Reset`, `Save`, `Share` (hanya jika implementasi izin share & validasi tersedia).
- Responsive resizing; pada layar kecil gunakan segmented tabs.
- Status jelas: `Ready`, `Running`, `Passed`, `Failed`, `Timed out`, `Unsupported runtime`.
- Failed run harus tidak menghapus draft.

### 8.3 Python Studio

1. Saat dipilih `Python`, inisialisasi Pyodide **di Web Worker** sehingga UI tidak freeze.
2. Support `print`, input contoh yang dipetakan UI, stdout/stderr, syntax errors, retry, dan reset context.
3. Gunakan pre-bundled/allowlisted packages; jangan menjanjikan `pip install` semua package.
4. Tampilkan progres loading engine dan batasan browser; dukungan jaringan/file berbeda dari Python desktop.
5. `Stop` dapat terminate/recreate Worker untuk eksekusi stuck; batasi output dan memori sebisa lingkungan browser mendukung.
6. Uji injeksi, infinite loop, penggunaan memori, dan state leakage antar latihan. Worker tetap **bukan** pengganti isolasi keamanan penuh untuk semua kasus.

### 8.4 SQL Playground

- SQLite WASM untuk SELECT/INSERT/UPDATE pada dataset latihan; disposable DB per sandbox.
- Sediakan schema viewer, table preview, query results, syntax errors, reset dataset.
- Batasi jumlah row dan statement, cegah akses data riil siswa.
- Tantangan meliputi filters, joins, group by, aggregate, subqueries, transactions.

### 8.5 Terminal / CLI Lab

**Mode A — Guided Terminal (prioritas):** real interactive terminal **simulasi** dengan virtual filesystem milik sandbox, command parser, history (`↑/↓`), Tab completion, `help`, `clear`, `pwd`, `ls`, `cd`, `mkdir`, `touch`, `cat`, `echo`, `mv`, `cp`, `rm` aman di workspace virtual, plus Git subset (`git init`, `status`, `add`, `commit`, `log`) yang benar-benar mengubah state virtual. Setiap command punya handler eksplisit, pesan error realistis, dan automated validation.

**Mode B — Browser Runtime (upgrade):** evaluasi teknologi seperti WebContainers untuk pengalaman Node.js/terminal nyata. Sebelum adopsi, validasi lisensi penggunaan, dukungan browser, cross-origin isolation, resource needs, compatibility, dan biaya. Jangan menganggap `bash`, Docker, Python, atau semua command Linux otomatis tersedia.

**Mode C — Remote Isolated Runner (jangka panjang):** hanya jika perlu untuk bahasa kompilasi/system-level. Buat boundary service terpisah, sandbox ephemeral, non-root, cgroups/CPU/memory/process limits, no host mounts, network off by default, egress allowlist bila perlu, hard timeout, output cap, malware/abuse mitigation, isolate credentials, queuing dan audit. **Dilarang `child_process`, `exec`, atau shell command tak tepercaya pada Next.js/Vercel.**

### 8.6 Example exercises per runtime

| Runtime | Beginner | Intermediate | Advanced |
|---|---|---|---|
| HTML/CSS/JS | Buat kartu profil | Form validasi + local state | Dashboard interaktif accessible |
| Python | Kalkulator CLI | Parse CSV & statistik | Async API client dengan mocking |
| SQL | SELECT daftar siswa | JOIN data penjualan | Query optimasi + index explanation |
| Guided CLI | Buat folder/file | Navigasi tree & Git commit | Debug workflow repository virtual |
| TypeScript | Type function | Discriminated union | Generic API result with tests |
| Node.js future | HTTP server sederhana | REST API CRUD | Auth + tests di sandbox aman |

---

## 9. QUESTS, XP, SKILL TREE, CHALLENGES, GAMIFICATION

> Detail formula, contoh quest, schema, anti-abuse, dan journey konkret ada pada `03_KODELUMA_QUEST_SYSTEM.md`. Bagian ini menetapkan kontrak produk agar implementasi tidak berubah-ubah.

### 9.1 Jenis quest

- **Onboarding Quest:** memilih jalur belajar, menyiapkan profil, Try It pertama.
- **Lesson Quest:** menyelesaikan objective lesson tertentu.
- **Coding Quest:** menyelesaikan coding challenge dengan test case.
- **Terminal Quest:** menjalankan perintah benar pada virtual filesystem.
- **Debug Quest:** memperbaiki bug, menjelaskan akar masalah.
- **Build Quest:** menghasilkan mini-project dan melewati rubrik.
- **Daily Quest:** tujuan kecil yang relevan, bisa diabaikan tanpa hukuman.
- **Weekly Quest:** praktik konsisten yang tetap sehat, tidak mendorong penggunaan berlebihan.
- **Boss Quest/Capstone:** tantangan integratif lintas materi, misalnya membangun web app kecil.
- **Exploration Quest:** membaca docs resmi, membandingkan solusi, belajar best practice.
- **Community Quest:** memberi jawaban berkualitas lewat moderasi, bukan spam.
- **Review Quest:** mengulang konsep ketika skill lemah, bukan semata mengejar XP.

### 9.2 Lifecycle quest

`locked → available → in_progress → submitted → passed | failed | needs_review → claimed`.

- Quest memiliki prerequisite skills, course/lesson IDs, objective, instructions, starter code, expected outcome, validator, scoring, reward, deadline optional, content version, retry rules.
- Reward hanya diproses **sekali** untuk `userId + questId + version` atau reward policy yang disepakati; server idempotent.
- `Quest claimed` tidak sama dengan `quest passed`; klaim reward punya aturan server.
- Hidden judge test harus dirancang aman dan tidak mengirim secrets ke browser.
- Manual review membutuhkan rubrik dan audit trail.

### 9.3 XP dan progression

- XP hanya diberikan untuk **bukti belajar** yang valid, bukan scroll, page view, spam komentar, atau klik sembarang.
- `lesson mastery`: XP kecil; `quest pass`: XP moderat; `project accepted`: XP besar; `review`: XP wajar.
- Simpan ledger `xp_event` dengan unique idempotency key agar tidak double-count.
- Level berdasar tabel deterministik/rumus yang terdokumentasi, bukan angka hardcode tidak jelas.
- Skill tree menampilkan node *skill* dan dependency: Foundation → HTML/CSS → JS → React → Next.js; atau Python → data structures → APIs → FastAPI, dst.
- Badges bersifat transparan dan tidak menipu tentang sertifikasi formal.
- Streak boleh di-*pause*/dimatikan, zona waktu pengguna diperhitungkan, tidak memberi penalti yang tidak sehat.
- Leaderboard **opsional, opt-in, anonimisasi/pseudonym**, batasi abuse; bukan prioritas MVP.

### 9.4 Validasi dan kualitas quest

Setiap quest minimal: deskripsi, tujuan pembelajaran, prasyarat, level, batasan, input/output contoh, starter code bila perlu, 3+ test cases atau rubrik penilaian, pesan gagal yang membantu, kriteria lulus, penghargaan wajar, tautan pengayaan.

---

## 10. EXERCISE, QUIZ, EXAM, JUDGE, DAN FEEDBACK

**Jenis latihan:** MCQ, multi-select, fill-blank, reorder code, output prediction, match pairs, bug-fix, terminal challenge, SQL query, write function, DOM challenge, design implementation, project submission, peer-review (P2).

**Penilaian:**

- Question bank dengan learning objective tags dan tingkat kesulitan.
- Validator di server untuk kuis biasa; untuk source code gunakan runtime aman sesuai bahasa.
- Public vs hidden tests, timeout, deterministic grading, output normalization, test isolation.
- Jangan expose jawaban benar atau private tests sebelum evaluation policy mengizinkan.
- Feedback jelaskan kesalahan dan referensi materi; bisa memberi hint bertingkat.
- Simpan attempt dengan versi soal, hasil, timestamp, time spent (perkiraan), dan feedback.
- Kuis tidak boleh lulus karena request client memalsukan `score` atau `passed`.
- Sertifikat hanya terbit dari rules engine server yang memverifikasi prerequisites, modul, quiz, proyek, dan anti-abuse.
- Ujian berwaktu/anti-cheat bukan jaminan autentisitas; jangan klaim proctoring otomatis tanpa implementasi dan kebijakan privasi.

---

## 11. STUDENT EXPERIENCE

### 11.1 Dashboard

`Continue Learning`, `My Paths`, `Recommended Next Lesson` berbasis aturan transparan, `XP/Level` (P1), `Quest Board`, `Daily Goals` opsional, `Saved Labs`, `Projects`, `Bookmarked Docs`, `Quiz History`, `Weak Skills`, `Certificates`, `Activity Timeline` yang datanya benar-benar ada.

### 11.2 Learning journey

1. Pilih tujuan (`Website`, `Python Automation`, `Data/AI`, `Backend`, `Mobile`, `CLI/Git`).
2. Opsional tes pemetaan level 5–10 pertanyaan sederhana; tidak menahan akses kursus.
3. Tampilkan learning path dan prerequisites.
4. Pelajari lesson singkat, lihat contoh, klik Try It.
5. Kerjakan exercise + quest, dapat feedback.
6. Simpan progres real-time/idempotent; lakukan review saat perlu.
7. Kerjakan capstone, submit source/link, review.
8. Jika memenuhi aturan, terbitkan sertifikat internal yang dapat diverifikasi.

### 11.3 Accessibility dan kenyamanan

- Semua fungsi bisa keyboard; command terminal accessible melalui label dan live region terbatas, hindari membanjiri screen reader.
- `prefers-reduced-motion`; alternatif teks/video; contrast memadai.
- Jangan mengunci proses belajar demi daily reward/retention. Bisa belajar tanpa bergabung leaderboard.
- Progress harus dapat dikoreksi/review saat kurikulum di-versioning.
- Waktu durasi pelajaran adalah estimasi; jangan gunakan penghitung waktu untuk memanipulasi XP.

---

## 12. COMMUNITY, PROJECTS, CERTIFICATES

### 12.1 Forum

Kategori per topik, thread, replies, tags, search, report abuse, basic moderation, course references. Sanitasi konten, rate-limit post, privacy-by-default. Moderasi anti-spam dan role checks server.

### 12.2 Projects

Brief, objectives, feature checklist, starter repo optional, deliverables, rubric, deadline optional, accepted formats text/Git URL, iterations/revisions, reviewer comments, completion record.

**Capstone examples:** website portfolio, REST API todo, Python file organizer, SQL inventory report, responsive dashboard, data analysis notebook (tanpa mengunggah data pribadi), mini-blog Next.js, CI pipeline sample.

### 12.3 Certificates

Identitas penerima hanya yang diperlukan, course ID + curriculum version, issue date, requirements met, certificate ID unik, verification page yang tidak mengumbar PII. Jelaskan sebagai **sertifikat penyelesaian internal Kodeluma**, bukan akreditasi resmi/sertifikasi profesional.

---

## 13. ADMIN CMS, CONTENT GOVERNANCE, DAN KURIKULUM TERBARU

### 13.1 Admin content workflow

`Draft → Peer review → Approved → Scheduled/Published → Needs review → Archived`.

Setiap course/lesson dapat menyimpan: `contentVersion`, `languageVersion`, `frameworkVersion`, `sourceReferences`, `lastVerifiedAt`, `nextReviewAt`, `changelog`, `reviewerId`, `status`, `deprecatedReason`.

**Wajib ada di UI admin P1/P2:**

- CRUD course, module, lesson, question bank, terminal challenges, quests, rubrics, prerequisites.
- Drag reorder dengan aturan konsistensi; preview student sebelum publish.
- Duplicate lesson sebagai draft, compare versions, rollback yang aman.
- Publish validation: lesson objective, konten, contoh kode, latihan, referensi, slug uniqueness.
- Review dashboard: material overdue, upstream technology versions (manually checked), broken links, failed code snippets, reports dari siswa.
- Analytics nyata: enrollments, unique active learners, lesson completions, quiz pass rates, attempt distributions, quest completions, drop-off sederhana.
- Audit: siapa mengubah apa, kapan, dari versi ke versi; simpan sesuai kebijakan retensi.

### 13.2 Kebijakan pembaruan materi

- Tidak ada klaim auto-update kurikulum tanpa sumber. Proses: deteksi kebutuhan → kumpulkan dokumentasi resmi → draft update → tes kode → review editorial → publish → changelog → migrasi progres.
- Jadwalkan review berkala per topik sesuai volatilitas (mis. framework JS lebih sering ditinjau daripada dasar logika).
- Simpan `supportedTechVersionRange` agar contoh kode tidak ambigu.
- Course yang sudah published tidak otomatis berubah ke draft saat ada update; gunakan versi immutable/pointer version publish.
- Bila lesson versi baru mengubah kompetensi, pertimbangkan review quest atau recalculation progress, jangan menghapus pencapaian lama sepihak.

---

## 14. ARSITEKTUR DATA REDIS

Gunakan namespace/key yang konsisten. Bentuk di bawah adalah **contoh kontrak** untuk diselaraskan dengan repository Redis yang telah ada; jangan membuat key ganda jika proyek memakai konvensi lain.

```text
kl:user:{id}                            HASH / JSON-serialized data
kl:user:by-email:{normalizedEmail}      STRING userId (unik)
kl:session:{hashedToken}                STRING/HASH with TTL
kl:course:{id}                          HASH / JSON
kl:course:slug:{slug}                   STRING courseId
kl:course:published                     ZSET or SET index
kl:module:{id}                          HASH / JSON
kl:lesson:{id}:v:{version}              versioned immutable content snapshot
kl:lesson:{id}:published-version        STRING version
kl:path:{id}                            JSON learning path metadata
kl:enroll:{userId}:{courseId}           HASH / JSON
kl:progress:{userId}:{lessonId}         progress, version, mastery
kl:attempt:{id}                         exercise attempt summary
kl:quest:{id}:v:{version}               immutable quest definition
kl:quest:user:{userId}:{questId}        quest status, attemptCount
kl:quest:rewarded:{userId}:{rewardKey}  idempotent reward marker
kl:xp:ledger:{userId}                   ordered event ids (bounded/indexed)
kl:xp:event:{eventId}                   event detail (policy retention)
kl:skill:mastery:{userId}               skill IDs and mastery states
kl:workspace:{userId}:{workspaceId}     small metadata/draft refs
kl:content-review:due                   review date ZSET
kl:audit:{eventId}                      server-side admin audit entry
```

**Redis design rules:**

- Indexed lookups, cursor pagination, no `KEYS *` in request path.
- TTL on sessions, transient previews, rate limit, ephemeral locks. **No TTL by default** for long-lived courses/progress/certificates unless explicit retention policy.
- Unique indexes and updates use atomic workflows (transactions/Lua where supported and appropriate), avoid race conditions in XP claims, enrollment, achievement issuance.
- Bounded size: do not store huge tarballs, recordings, binaries, entire terminal logs, or uncontrolled user source code blobs in Redis.
- API responses never expose private answer keys, unapproved courses, session tokens, or internal grading scripts.
- Backups/export/recovery policies, cost/usage monitoring, payload size limits, deletion policy.
- Separate stable identifiers from mutable slug/title. No privilege escalation by client-provided userId.

---

## 15. API CONTRACT PLAN

Use existing `05_API_CONTRACTS.md` as base; expand only after compatibility audit. Suggested versioned endpoints:

```text
GET    /api/v1/paths
GET    /api/v1/paths/:slug
GET    /api/v1/courses
GET    /api/v1/courses/:slug
GET    /api/v1/courses/:courseId/modules
GET    /api/v1/lessons/:lessonId
POST   /api/v1/enrollments
POST   /api/v1/progress/lessons/:lessonId/complete
GET    /api/v1/me/progress
GET    /api/v1/me/quests
POST   /api/v1/quests/:questId/start
POST   /api/v1/quests/:questId/submit
POST   /api/v1/quests/:questId/claim
GET    /api/v1/skills/tree
GET    /api/v1/me/xp-ledger
GET    /api/v1/labs/templates
POST   /api/v1/labs/workspaces
PATCH  /api/v1/labs/workspaces/:id
POST   /api/v1/assessments/:id/attempts
POST   /api/v1/projects/:id/submissions
GET    /api/v1/me/certificates
POST   /api/v1/admin/courses
POST   /api/v1/admin/lessons/:id/publish
POST   /api/v1/admin/quests
POST   /api/v1/admin/content/:id/request-review
POST   /api/v1/admin/content/:id/approve
GET    /api/v1/admin/reports/progress
```

For every endpoint define schema Zod, authorization, request/response DTO, status codes, pagination, audit, rate limit, error shape, tests. Code execution should **not** be exposed as a generic endpoint accepting arbitrary OS commands in Next.js.

---

## 16. DESIGN SYSTEM — KUNCI KONSISTENSI

Semua UI baru ikut `02_DESIGN.md` dan token asli:

| Token | Hex | Fungsi |
|---|---|---|
| `--kl-ink` | `#10243A` | Ink navy text |
| `--kl-primary` | `#2563EB` | Primary blue CTA |
| `--kl-primary-soft` | `#EFF5FF` | Blue wash |
| `--kl-amber` | `#F4B544` | Achievement highlights |
| `--kl-bg` | `#F8FAFD` | Page background |
| `--kl-surface` | `#FFFFFF` | Cards / surfaces |

**Larangan:** cyberpunk, neon/glow dominan, emoji UI, gradient warna-warni, glassmorphism berat, typography tidak konsisten, tiap route desain baru, animasi scroll saat membaca materi secara terus-menerus.

**Editor / terminal dark mode** diperbolehkan sebagai permukaan kerja kode yang kontras dan tenang; shell utama platform tetap light-first.

### 16.1 Komponen tambahan

`LanguageBadge`, `DifficultyBadge`, `SkillNode`, `QuestCard`, `QuestObjectiveChecklist`, `XpProgressBar`, `LevelPill`, `StreakIndicator`, `AchievementToast`, `MonacoPanel`, `TerminalPanel`, `TestResultList`, `CurriculumVersionBadge`, `LessonReportIssue`, `LearningPathStepper`, `CodeOutputDrawer`, `WorkspaceTabs`.

### 16.2 Animasi

- Motion: expand/collapse, hover, progress, state transition, quest completion notification halus.
- GSAP: hero/storyboard landing page khusus; jangan memaksakan animasi di setiap lesson.
- Hindari simultaneous mutation properti animasi pada elemen yang sama.
- Pause motion saat editor aktif bila distraktif; fokus keyboard jelas; `prefers-reduced-motion` wajib.

---

## 17. SECURITY, PRIVACY, ANTI-ABUSE

- Cookie sesi `HttpOnly`, `Secure`, `SameSite` sesuai threat model, rotated/revoked sessions; password hash Argon2id bila custom auth masih dipakai sesuai dokumen asli.
- CSRF protection pada action berbasis cookie; pertahanan XSS, CSP sesuai kebutuhan editor/iframe, markdown sanitization, upload/file URL validation.
- RBAC per endpoint dan resource ownership checks.
- Rate limit pendaftaran, login, forum, reward claims, attempts, Code Lab run, share URLs.
- Anti-XP fraud: server decides reward, at-most-once idempotency; cegah parallel claim race dan replay requests.
- Prevent cross-user workspace access, cheating by sending client scores, leaked hidden test cases, oversized payloads/log injection.
- Sandboxed runtimes: no access to host filesystem, infrastructure credentials, secret env, internal network. Do not send secret tokens into untrusted client code.
- Admin audit trail with no passwords/tokens/PII leakage. Data retention and deletion workflow.
- If analytics/leaderboards involve public users, require appropriate consent/settings and opt-out.
- Security findings must block claim `production ready` for code-execution features.

---

## 18. PERFORMANCE & ACCESSIBILITY TARGETS

- Server-render SEO-critical public pages; dynamic client editor lazy-loaded on demand.
- Split Monaco, syntax grammar, large runtime WASM from landing bundle; load Pyodide only when Python Lab is opened.
- Paginate large curricula, course lists, comments, attempts, audit data; cache safely without sharing private learner records.
- Respect slow networks, show runtime download progress and fallback.
- Screens tested at 360, 390, 768, 1024, 1440 px; contrast, keyboard only, reduced motion, screen reader smoke test.
- Track web vitals and runtime costs; no hardcoded performance scores without measurement.
- Prevent unsaved work loss: debounced save, manual save, graceful error states.

---

## 19. IMPLEMENTATION ROADMAP (JANGAN LOMPAT FASE)

### Phase 0 — Audit & reconciliation

- [ ] Baca seluruh dokumen existing + spesifikasi ekspansi.
- [ ] Inventory actual routes/components/dependencies/features, classify **done / partial / not implemented**.
- [ ] Jalankan install, typecheck, lint, unit tests, build bila environment memungkinkan.
- [ ] Buat `IMPLEMENTATION_GAP_REPORT.md`, `DECISIONS.md`, dan backlog requirement IDs.
- [ ] Jangan edit desain dulu sebelum mengetahui reuse yang memungkinkan.

### Phase 1 — PBL functional MVP (P0)

- [ ] Bootstrap-based landing, catalog, course details.
- [ ] Secure auth student/admin, Redis repos/session.
- [ ] 1–3 **kursus lengkap minimum** yang dapat dipelajari; lesson, progress, basic quiz.
- [ ] Project submission + admin review, forum + moderation, certificate rule + verification.
- [ ] Admin CRUD + progress report nyata; deploy demo hosting.
- [ ] Proposal PPT dan dokumentasi PBL tetap didukung. **Gate:** end-to-end learning flow works.

### Phase 2 — W3Schools-like lesson UX + comprehensive catalog shell (P1)

- [ ] Sidebar documentation UI, TOC, examples, snippets, glossary, bookmarks.
- [ ] Course/path domain model dan course statuses; seed **judul-kurikulum** ekspansi dari katalog, tapi hanya published jika lesson benar-benar siap.
- [ ] Migrate basic lessons into structured content blocks + editor friendly route.
- [ ] Automated lesson content/schema validator. **Gate:** satu lesson bisa dibuat admin dan digunakan siswa.

### Phase 3 — Code Lab browser (P1)

- [ ] Monaco editor + HTML/CSS/JS sandbox preview, tests, saved draft, multi-tabs.
- [ ] Dedicated controls for run/reset/stop, accessible errors, resource caps.
- [ ] Unit/E2E e.g. edit HTML, run, preview matches. **Gate:** end-to-end playground usable.

### Phase 4 — Guided CLI + Quest system (P1)

- [ ] Terminal virtual FS, commands, history, autocompletion, resets.
- [ ] Quest registry and rules, validation, XP ledger idempotency, dashboard quest board.
- [ ] Intro quests for web/python/terminal; no fake leaderboard. **Gate:** real quest submission grants XP once.

### Phase 5 — Python Lab + SQL Lab + intermediate content (P2)

- [ ] Pyodide web worker proof of concept and safe limits; SQL WASM sandbox.
- [ ] Python/SQL first courses content validated, CLI Git challenges.
- [ ] Runtime compatibility and browser tests. **Gate:** lessons/examples/exercises verified.

### Phase 6 — Advanced content + CMS publishing (P2)

- [ ] Curriculum versioning, review workflow, new tracks from catalogue, capstones.
- [ ] Author/reviewer permissions, moderation, analytics, content update queue.
- [ ] Course test runs and content-source audits. **Gate:** reviewers publish new version safely.

### Phase 7 — Advanced runtime/AI learning (P3)

- [ ] Feasibility + legal/licensing + threat model + cost estimate first.
- [ ] Browser Node runtime / remote isolated multi-language execution if approved.
- [ ] Optional AI tutor with retrieval from versioned content, guardrails and citations; never invent correctness.
- [ ] Optional adaptive learning, team quests, opt-in leaderboard.

---

## 20. E2E SCENARIOS & DEFINITION OF DONE

Each phase must include automated and manual checks. Minimum scenarios:

1. Guest opens course catalog; only published appear; mobile navigation works.
2. Student signs up, logs in, enrolls, completes lesson; correct persisted progress after refresh.
3. Student passes quiz; server calculates score; tampering client score rejected.
4. Student submits project; admin reviews; certificate eligibility recomputed correctly.
5. Student starts and completes a quest; concurrent/replayed reward claim grants XP only once.
6. Terminal guided `mkdir project` updates virtual filesystem; navigating to non-existent dir produces error.
7. HTML preview renders edited code in isolated frame without granting access to main app cookies.
8. Python infinite loop test can be halted by terminating Worker; no page freeze (if Python Lab released).
9. Unauthorized student cannot access admin mutation or another student's lab.
10. Admin publishes content revision and prior learner progress remains consistent.
11. Empty/error/loading states exist for missing Redis, failed runner, empty course, expired session.
12. Unit + integration + Playwright + production build pass. **Never invent results**.

**Completion definition:** usable UI, real backend/persistence where promised, security checks, responsive/accessibility checks, docs updated, reproducible test evidence, no fake buttons or fabricated metrics.

---

## 21. OUTPUT FORMAT YANG WAJIB DIBERIKAN AI CODING

Setelah membaca instruksi ini, sebelum coding, jawab dengan:

1. **Audit status:** fitur selesai/parsial/belum ada; file yang diperiksa.
2. **Scope decision:** apa yang dibuat sekarang (P0/P1), apa yang nanti (P2/P3); jangan salah prioritas.
3. **Architecture changes:** endpoints, Redis indexes, components, security boundaries.
4. **Curriculum rollout:** materi apa yang benar-benar akan dipublish dan QA content status.
5. **Quest rollout:** quest nyata yang punya validator/score vs masih spesifikasi.
6. **Implementation plan:** langkah konkret berurutan dengan deliverables dan acceptance tests.
7. **Code changes:** daftar file dibuat/diubah, alasan, migration/rollback.
8. **Validation:** commands dijalankan, hasil sebenarnya, warning/failure dan tindakan lanjut.

Jangan memberi balasan kosong `sudah lengkap` tanpa bukti. Setelah Phase 0, mulai Phase 1/phase terendah yang belum selesai dan verifikasi per milestone.

---

## 22. REFERENSI IMPLEMENTASI RESMI (CEK VERSI SAAT EKSEKUSI)

- Next.js App Router: https://nextjs.org/docs/app
- Bootstrap 5: https://getbootstrap.com/docs/5.3/getting-started/introduction/
- React Bootstrap: https://react-bootstrap.github.io/
- Motion for React: https://motion.dev/docs/react
- GSAP: https://gsap.com/docs/v3/
- Monaco Editor: https://microsoft.github.io/monaco-editor/
- Upstash Redis Next.js: https://upstash.com/docs/redis/quickstarts/nextjs-app-router
- Pyodide: https://pyodide.org/en/stable/
- WebContainers API: https://developer.stackblitz.com/platform/api/webcontainer-api
- W3Schools (referensi pendekatan belajar, **bukan sumber untuk disalin**): https://www.w3schools.com/
- MDN Web Docs: https://developer.mozilla.org/
- Python Docs: https://docs.python.org/3/
- TypeScript Handbook: https://www.typescriptlang.org/docs/handbook/intro.html
- OWASP: https://owasp.org/www-project-top-ten/

**FINAL INSTRUCTION:** Kodeluma harus berkembang dari PBL menjadi ekosistem pembelajaran coding yang berfungsi sungguhan, dengan konten lintas teknologi dan quest yang dinilai nyata. Namun setiap rilis harus jujur tentang fitur yang sudah tersedia, tidak mengorbankan keamanan, dan **tidak merusak desain atau tugas PBL yang sudah ada**.


---

# PART II — COMPREHENSIVE MULTI-LANGUAGE CURRICULUM

# KODELUMA — COMPLETE CURRICULUM CATALOG
## Bahasa Pemrograman · Web · Backend · Mobile · Data · AI · Security · DevOps · Quest-driven Learning

> **Penting untuk AI coding:** Ini adalah **katalog rencana isi** yang bisa diterjemahkan menjadi struktur `learning_path -> course -> module -> lesson`. Jangan membuat semua judul menjadi halaman kosong berstatus published. Tulis materi orisinal, contoh dan tes yang benar, referensi resmi, serta validasi editor sebelum publish. Paket PBL tetap fokus 1–3 kursus end-to-end terlebih dahulu.

## 1. Kebijakan struktur konten

Setiap course wajib memiliki `course_id`, judul, slug, kategori, level, audience, prerequisites, outcomes, runtime/lab capability, daftar module, `contentStatus`, content/framework version, review dates, referensi resmi, dan capstone. Modul yang ditulis di bawah adalah **topik**, bukan bukti bahwa lesson per topik telah dibuat. Breakdown module menjadi lesson kecil dengan tujuan, konsep, penjelasan, kode, latihan, quiz, quest, serta sumber.

**Label dukungan runtime:**
- `WEB`: HTML/CSS/JS browser preview.
- `PY-WASM`: Python melalui Pyodide Worker (hanya setelah fitur dibuat).
- `SQL-WASM`: SQLite WASM (hanya setelah fitur dibuat).
- `CLI-GUIDED`: interpreter/virtual filesystem edukatif.
- `SUBMISSION`: materi, quiz, proyek/URL source tanpa runtime pengeksekusian otomatis.
- `RUNNER-FUTURE`: butuh isolasi komputasi terpisah dan persetujuan arsitektur.

### 1.1 Peta 12 learning paths besar

| ID | Learning Path | Fundamental sebelum masuk | Capstone target |
|---|---|---|---|
| LP-01 | Web Developer dari Nol | Logika komputer | Website responsif + aksesibel |
| LP-02 | Modern Frontend Engineer | HTML, CSS, JS | Dashboard React/Next dengan API |
| LP-03 | Backend API Engineer | Pemrograman dasar, HTTP | REST API teruji + auth |
| LP-04 | Full-stack Engineer | Frontend + Backend fundamentals | Web app end-to-end |
| LP-05 | Python Developer | Logika dasar | Python automation + API |
| LP-06 | Data Analyst | Python/SQL dasar, statistik | Analisis dataset dan laporan |
| LP-07 | Machine Learning Foundation | Python, matematika dasar | Model klasifikasi dengan evaluasi |
| LP-08 | Mobile Developer | OOP, API | Mobile app CRUD |
| LP-09 | DevOps & Cloud Foundation | Linux, HTTP, Git | CI/CD + deploy sample app |
| LP-10 | Secure Software Developer | Web/API basics | Perbaikan kerentanan pada aplikasi lab |
| LP-11 | Game/Interactive Developer | Logika, OOP | Mini game edukatif |
| LP-12 | CS & Problem Solving | Basic coding | Algoritma + struktur data capstone |

---

## 2. KATALOG COURSES — FUNDAMENTALS DAN FRONTEND

| Kode | Course | Level | Urutan topik/modul yang wajib dicakup | Lab/Capstone |
|---|---|---|---|---|
| FND-01 | Computer & Internet Fundamentals | Foundation | Hardware/software; binary; OS; browser; DNS; HTTP; client-server; developer mindset; keamanan dasar | Quiz + network diagram |
| FND-02 | Computational Thinking & Logic | Foundation | Problem decomposition; variables; pseudocode; conditions; loops; functions; flowcharts; tracing; debug | Flowchart aplikasi diskon |
| FND-03 | Git & GitHub from Zero | Foundation–Intermediate | Repository; config; commit; branch; merge; conflicts; PR; issues; gitignore; CI basics | CLI-GUIDED: proyek virtual Git |
| FND-04 | Linux & CLI Fundamentals | Foundation–Intermediate | shell; pwd/ls/cd; filesystem; redirection; pipes; permissions concepts; grep; env; processes; Git CLI; troubleshooting | CLI-GUIDED terminal quests |
| WEB-01 | HTML Complete Guide | Foundation–Intermediate | Document structure; semantics; headings; links; images; lists; tables; forms; input validation; accessibility; metadata; SEO foundations | WEB: portfolio semantic |
| WEB-02 | CSS Complete Guide | Foundation–Advanced | Selectors; cascade; box model; units; typography; colors; flexbox; grid; responsive; pseudo classes; variables; transitions; animations; CSS architecture | WEB: responsive landing |
| WEB-03 | JavaScript Complete Guide | Beginner–Advanced | Types; operators; functions; arrays; objects; loops; DOM; events; fetch; promises; async/await; modules; errors; testing basics; closures; event loop | WEB: interactive app |
| WEB-04 | Bootstrap 5 Practical | Beginner–Intermediate | Containers; grid; breakpoints; utilities; buttons; forms; tables; navbars; cards; modal via React Bootstrap; theming; accessibility | WEB: Bootstrap admin UI |
| WEB-05 | Sass & Maintainable CSS | Intermediate | Variables; nesting; mixins; partials; modules; tokens; architecture; maintainability | Submission: themed components |
| WEB-06 | TypeScript Complete Guide | Beginner–Advanced | Types; interfaces; unions; narrowing; generics; utility types; async typing; type guards; tsconfig; modules; API contracts | Type-safe form/API client |
| WEB-07 | React Fundamentals & Patterns | Intermediate | JSX; components; props; state; events; forms; hooks; effects; context; custom hooks; accessibility; testing; performance | WEB: task tracker |
| WEB-08 | Next.js App Router | Intermediate–Advanced | RSC; routing; layouts; client boundaries; metadata; loading/error; route handlers; server functions; auth; cache; deployment | Next app with authenticated data |
| WEB-09 | Vue & Nuxt Fundamentals | Intermediate | Reactivity; components; props; events; composables; router; state; forms; Nuxt conventions; SSR | Submission: catalog app |
| WEB-10 | Angular & RxJS Essentials | Intermediate | TypeScript; components; templates; DI; routing; signals; forms; RxJS overview; testing | Submission: admin dashboard |
| WEB-11 | Svelte & SvelteKit | Intermediate | Reactivity; component composition; forms; routing; server data; state; accessibility | Submission: mini web app |
| WEB-12 | Web Accessibility (a11y) | Intermediate | Semantics; keyboard; focus; ARIA; labels; contrast; screen readers; forms; accessible testing | WEB: fix inaccessible UI |
| WEB-13 | Web Performance & SEO | Intermediate–Advanced | LCP/CLS/INP; bundle; images; caching; rendering; metadata; structured data; measurement | Optimize measured website |
| WEB-14 | Frontend Testing | Intermediate | Unit tests; DOM testing; mocking; integration; E2E; accessibility; CI | Test a React feature |

## 3. GENERAL PURPOSE PROGRAMMING LANGUAGES

| Kode | Course | Level | Urutan topik/modul yang wajib dicakup | Lab/Capstone |
|---|---|---|---|---|
| LANG-01 | Python: Zero to Advanced | Foundation–Advanced | Installation & syntax; variables/types; input/output; conditions; loops; list/tuple/set/dict; comprehensions; functions; modules; files; exceptions; OOP; typing; iterators/generators; decorators; context managers; testing; async basics; packaging | PY-WASM + automation project |
| LANG-02 | C Programming Complete | Beginner–Advanced | Types; operators; conditions; loops; arrays; strings; functions; pointers; memory; structs; files; modular C; compilation/debugging | RUNNER-FUTURE or submission: CLI tool |
| LANG-03 | Modern C++ | Intermediate–Advanced | STL; vectors; classes; RAII; references; smart pointers; templates; move semantics; algorithms; concurrency intro; CMake; testing | RUNNER-FUTURE: data-processing CLI |
| LANG-04 | Java Complete | Beginner–Advanced | Syntax; types; OOP; collections; generics; exceptions; I/O; streams; concurrency; testing; build tools | RUNNER-FUTURE: library manager |
| LANG-05 | C# & .NET | Beginner–Advanced | Types; OOP; LINQ; async/await; collections; file I/O; exceptions; ASP.NET overview; tests | RUNNER-FUTURE: API/task app |
| LANG-06 | Go Programming | Beginner–Advanced | Packages; functions; structs; interfaces; errors; goroutines; channels; context; testing; HTTP servers; profiling | RUNNER-FUTURE: concurrent fetcher |
| LANG-07 | Rust Programming | Intermediate–Advanced | Cargo; ownership; borrowing; lifetimes; enums; match; traits; iterators; Result/Option; generics; concurrency; tests | RUNNER-FUTURE: CLI parser |
| LANG-08 | PHP Modern | Beginner–Advanced | Syntax; arrays; functions; sessions; forms; PDO; Composer; OOP; security; MVC concepts; testing | Submission: backend CRUD |
| LANG-09 | Ruby Fundamentals | Beginner–Intermediate | Syntax; collections; blocks; classes; modules; exceptions; gems; testing; Rails overview | Submission: CLI task app |
| LANG-10 | Kotlin Fundamentals | Beginner–Advanced | Nullable types; functions; collections; lambdas; classes; coroutines; testing; Android overview | Submission: mobile logic |
| LANG-11 | Swift Fundamentals | Beginner–Advanced | Optionals; structs/classes; protocols; enums; closures; concurrency; error handling; SwiftUI overview | Submission: iOS app concept |
| LANG-12 | Dart Fundamentals | Beginner–Advanced | Null safety; functions; classes; futures; streams; collections; packages; Flutter basics | Submission: Flutter widgets |
| LANG-13 | R for Data Analytics | Beginner–Intermediate | Vectors; data frames; tidy data; dplyr; ggplot2; statistics; reproducible reports | Submission: data report |
| LANG-14 | Julia for Scientific Computing | Intermediate | Syntax; arrays; types; multiple dispatch; plotting; numeric methods; packages | Submission: numeric notebook |

## 4. BACKEND, API, AND DATABASES

| Kode | Course | Level | Urutan topik/modul yang wajib dicakup | Lab/Capstone |
|---|---|---|---|---|
| BE-01 | HTTP, REST & API Fundamentals | Foundation–Intermediate | HTTP methods; status codes; JSON; pagination; query params; error handling; API clients; OpenAPI | Design REST contract |
| BE-02 | Node.js & Express | Intermediate | Runtime/events; npm; modules; routing; middleware; validation; errors; security; tests; deployment | API CRUD |
| BE-03 | NestJS Application Architecture | Intermediate–Advanced | Modules; controllers; providers; DTO; guards; validation; testing; auth; queues | Structured backend service |
| BE-04 | Python Flask | Intermediate | Routing; templates/JSON; forms; config; auth basics; validation; testing; deploy | Flask mini-service |
| BE-05 | Python FastAPI | Intermediate–Advanced | Pydantic; routes; async; dependency injection; validation; auth; OpenAPI; testing; deploy | FastAPI catalog service |
| BE-06 | Python Django | Intermediate–Advanced | Apps; models; admin; views; templates; forms; auth; ORM; migrations; tests; REST integration | Content management backend |
| BE-07 | Java Spring Boot | Intermediate–Advanced | Boot project; controllers; DI; JPA; validation; security; tests; actuator; deploy | Enterprise REST API |
| BE-08 | ASP.NET Core API | Intermediate–Advanced | DI; routing; middleware; EF concepts; DTO; auth; API testing; logging | .NET CRUD API |
| BE-09 | Laravel Backend | Intermediate–Advanced | Routing; controllers; Blade; Eloquent; migrations; validation; auth; queues; tests | Laravel inventory |
| BE-10 | SQL Fundamentals | Beginner–Advanced | SELECT; WHERE; ORDER; JOIN; aggregation; GROUP BY; subqueries; indexes; normalization; transactions; query plans | SQL-WASM: inventory analytics |
| BE-11 | PostgreSQL & Data Modeling | Intermediate–Advanced | Schema; constraints; relations; indexes; EXPLAIN; transactions; isolation; migrations; backup | Design school database |
| BE-12 | MySQL Practical | Beginner–Intermediate | Tables; keys; CRUD; joins; indexes; constraints; transactions; backup | SQL practice dataset |
| BE-13 | Redis & Caching Architecture | Intermediate–Advanced | Strings; hashes; lists; sets; sorted sets; TTL; cache patterns; rate limits; atomic ops; indexing; persistence tradeoffs | Redis leaderboard prototype |
| BE-14 | NoSQL & Document Data | Intermediate | Document model; MongoDB overview; indexes; aggregate pipelines; denormalization; tradeoffs | Submission: document schema |
| BE-15 | Authentication & Authorization | Intermediate–Advanced | Password hashing; cookies; sessions; OAuth concepts; CSRF; RBAC; resource auth; threat models; audit | Secure login design |
| BE-16 | Background Jobs & Realtime | Advanced | Queues; retries; idempotency; cron; WebSocket/SSE; event streams; delivery guarantees | Notification service architecture |
| BE-17 | System Design Fundamentals | Advanced | Requirements; data flow; load; caching; queue; consistency; scaling; storage; observability; failures | Architecture review |

## 5. MOBILE, DATA SCIENCE, AI, CLOUD, SECURITY, CREATIVE

| Kode | Course | Level | Urutan topik/modul yang wajib dicakup | Lab/Capstone |
|---|---|---|---|---|
| MOBILE-01 | Flutter Mobile App | Intermediate | Widget tree; layouts; navigation; forms; state; REST; persistence; testing; release concepts | Multi-screen app |
| MOBILE-02 | React Native | Intermediate | Core components; styling; navigation; hooks; API; storage; platform APIs; testing | Habit tracker |
| MOBILE-03 | Android Kotlin | Intermediate | Android lifecycle; Compose; navigation; ViewModel; coroutines; persistence; testing | Notes app |
| MOBILE-04 | iOS SwiftUI | Intermediate | Views; state; navigation; concurrency; network; persistence; accessibility | Personal finance mock app |
| DATA-01 | Python for Data Analysis | Beginner–Intermediate | NumPy; Pandas; CSV; missing values; groupby; data cleaning; plotting; report | Analysis notebook |
| DATA-02 | Statistics for Developers | Foundation–Intermediate | Descriptive stats; probability; distributions; hypothesis testing; correlation; sampling; bias | Investigate dataset |
| DATA-03 | Machine Learning Foundations | Intermediate | Train/test; features; classification; regression; metrics; overfit; cross validation; pipelines; ethics | ML baseline model |
| DATA-04 | Data Engineering Fundamentals | Intermediate–Advanced | Batch/stream; ETL; schema; validation; orchestration; warehousing; data quality | Mini ETL pipeline |
| DATA-05 | Data Visualization & BI | Intermediate | Charts; storytelling; dashboard KPIs; data ethics; dashboard performance | Interactive data story |
| AI-01 | LLM API & AI Application Basics | Intermediate | Models; token/cost; prompts; tool calls; structured outputs; evaluations; privacy; error handling | Document assistant prototype |
| AI-02 | RAG Foundations | Advanced | Chunking; embeddings; retrieval; citations; quality evaluation; prompt injection defense; sources | Source-grounded Q&A app |
| AI-03 | Responsible AI-assisted Coding | Beginner–Advanced | Request planning; code review; tests; hallucinations; security; licensing; privacy; explainability | Review AI-generated PR |
| DEVOPS-01 | GitHub CI/CD | Intermediate | Actions workflows; tests; lint; secrets; environments; artifact; deploy; rollback | CI for sample app |
| DEVOPS-02 | Docker Fundamentals | Intermediate | Images; Dockerfile; containers; volumes; networking concepts; compose; security | Containerize sample API |
| DEVOPS-03 | Cloud & Deployment | Intermediate | VPS/serverless; DNS; TLS; environment variables; deploy; monitoring; backups; costs | Deploy static + API |
| DEVOPS-04 | Kubernetes Fundamentals | Advanced | Pods; deployments; services; config; secrets concepts; resources; observability | Architecture lab (no cluster required) |
| DEVOPS-05 | Monitoring & Reliability | Advanced | Logs; metrics; traces; health checks; SLO; alerting; incident response | Incident postmortem exercise |
| SEC-01 | Secure Web Development | Intermediate | OWASP Top 10; input validation; XSS; CSRF; SSRF; auth; headers; secrets; dependency risks; threat modeling | Fix vulnerable **authorized training app** |
| SEC-02 | Application Security Testing | Advanced | Unit security checks; static analysis; safe lab setup; reporting; responsible disclosure; remediation | Authorized lab review |
| CS-01 | Data Structures & Algorithms | Beginner–Advanced | Big-O; arrays; lists; stacks; queues; hash maps; trees; graphs; recursion; sorting; searching; dynamic programming | Algorithm challenge pack |
| CS-02 | Computer Networks | Foundation–Intermediate | OSI/TCP-IP; IP; routing; DNS; TCP/UDP; HTTP; HTTPS; packets; troubleshooting | Explain request path |
| CS-03 | Operating Systems Basics | Intermediate | Process; threads; memory; scheduling; filesystem; permissions; concurrency | Scheduler simulation |
| CS-04 | Software Architecture & Clean Code | Intermediate–Advanced | Modules; SOLID tradeoffs; layered systems; patterns; testing; refactoring; review | Refactor application |
| GAME-01 | Game Dev with Godot | Beginner–Intermediate | Scenes; nodes; input; movement; collisions; signals; UI; saving state; exports | 2D puzzle game |
| GAME-02 | Unity & C# Basics | Beginner–Intermediate | Game objects; components; scenes; physics; scripts; UI; asset pipeline; testing | 2D platformer prototype |
| IOT-01 | Arduino & IoT Fundamentals | Beginner–Intermediate | GPIO; sensors; serial; breadboard safety; analog vs digital; networking; dashboards | Simulated sensor dashboard |

**Jumlah seed pada katalog ini besar karena cakupan jangka panjang.** Untuk rilis PBL, jangan memublikasikan semua course sekaligus. Admin CMS perlu membedakan `planned`, `draft`, `in_review`, `published`, dan `archived`.

---

## 6. PRIORITAS PENERBITAN MATERI PER GELOMBANG

### Wave 1 — PBL/demo yang selesai benar-benar end-to-end

1. **HTML Complete Guide**: minimal 8 lesson utuh dan 1 mini project halaman profil.
2. **CSS Complete Guide**: minimal 8 lesson utuh dan 1 responsive card challenge.
3. **JavaScript Complete Guide**: minimal 8 lesson utuh dan 1 DOM challenge.
4. **Quest sederhana:** HTML heading, CSS card, JS click counter, CLI `mkdir` setelah Guided Terminal ada.
5. Penuhi forum, sertifikat, admin CRUD, laporan progres sesuai rubrik PBL.

### Wave 2 — Penambahan populer

- **Python Zero to Advanced** dimulai dari 10 lesson basic yang benar, lalu modular expansion.
- **Git/CLI**, **TypeScript**, **SQL**, **React**, **Bootstrap 5**.
- Penggunaan Python runner bergantung pada Pyodide yang sudah teruji; sebelum itu lesson tetap dapat dipublish dengan contoh, quiz, dan submission, tetapi **Run Python** tidak boleh tampil aktif.

### Wave 3 — Track professional

- Next.js, Backend API, FastAPI, Node, Redis, PostgreSQL, testing, Docker, secure coding, data analysis.
- Quest tingkat intermediate + capstone + versioned curriculum.

### Wave 4 — Advanced/specializations

- System design, Rust, Go, Kotlin/Swift/Flutter, cloud, ML, RAG, architecture, secure environments, specialized challenges.
- Konten advanced harus melalui reviewer dengan kompetensi terkait, tidak dihasilkan otomatis lalu langsung dianggap benar.

---

## 7. CONTOH SILABUS DETAIL — PYTHON FROM ZERO TO ADVANCED

| Module | 4–8 contoh lesson di dalamnya | Latihan/Quest yang masuk akal |
|---|---|---|
| PY-01 Orientation | Python itu apa, interpreter vs compiler, environment, print, input, komentar | Cetak biodata dan format output |
| PY-02 Types & Variables | int, float, str, bool, casting, f-string, operators, comparison | Harga total dan diskon |
| PY-03 Control Flow | if, elif, else, nested branch, while, for, range, loop control | Tahun kabisat, FizzBuzz, number guessing |
| PY-04 Collections | list, tuple, set, dict, slicing, iteration, methods, comprehension | Todo list CLI |
| PY-05 Functions | definition, parameters, return, scope, default args, lambda, docstring | Calculator reusable functions |
| PY-06 Files & Exceptions | open/with, csv/json, try-except, custom exception, pathlib | CSV analyzer (in-browser limitations documented) |
| PY-07 OOP & Modules | class, instance, methods, inheritance, composition, packages, venv concepts | Inventory CLI model |
| PY-08 Intermediate Python | generators, decorators, dataclasses, typing, context managers, itertools | Process event records |
| PY-09 Testing & Quality | pytest concepts, unit tests, mocking, linting, formatting, packaging | Fix failing test suite |
| PY-10 Concurrency & APIs | async/await, asyncio tasks, HTTP client, retry, errors, rate limits | API client with mocked responses |
| PY-11 Data Foundations | numpy/pandas intro, dataframe, groupby, plots, cleaning | Data report mini-capstone |
| PY-12 Advanced Capstone | project architecture, logs, config, security, tests, docs | File organizer or FastAPI service |

### Contoh lesson 1 yang benar-benar dapat dijadikan template authoring

**Judul:** Python — Variabel dan Tipe Data Dasar  
**Objective:** Siswa dapat membuat variabel bernama jelas, menjelaskan `int`, `float`, `str`, `bool`, dan membaca output `type()`.

**Penjelasan:** Variabel adalah nama yang merujuk pada sebuah nilai. Python menentukan tipe nilai secara dinamis. Gunakan nama yang deskriptif agar kode mudah dibaca.

```python
nama = "Alya"
umur = 19
ipk = 3.75
aktif = True

print(f"Halo, {nama}!")
print(type(umur).__name__)
```

**Try It:** Ubah `nama`, `umur`, dan `ipk`, lalu jalankan ulang. **Expected:** baris pertama berubah sesuai nilai nama, baris kedua `int` selama `umur` tetap bilangan bulat.

**Common mistake:** Menulis `umur = "19"` membuat nilainya menjadi teks. Jelaskan konsekuensinya saat operasi aritmetika.

**Exercise A:** Buat variabel `harga` dan `jumlah`, lalu cetak hasil `harga * jumlah`.

**Quest:** `PY-Q002 — Kasir Sederhana`. Input berupa `harga` dan `jumlah`, output total. Tambah syarat bonus: format mata uang dengan pemisah ribuan (jelaskan locale bila dipakai).

**Rubric:** nama variabel jelas (20%), aritmetika benar (50%), hasil output (20%), error/edge cases (10%).

**Sumber untuk penulis:** https://docs.python.org/3/tutorial/introduction.html

---

## 8. CONTOH SILABUS DETAIL — TERMINAL DAN GIT

| Module | Topik | Quest |
|---|---|---|
| TERM-01 | Konsep filesystem, current directory, absolute vs relative path | Temukan lokasi kerja dengan `pwd` |
| TERM-02 | `ls`, `cd`, path dengan spasi, error path | Temukan file tersembunyi dalam folder virtual |
| TERM-03 | `mkdir`, `touch`, `echo`, `cat` | Buat struktur proyek `src/components` |
| TERM-04 | `cp`, `mv`, `rm` di sandbox, konsekuensi destructive commands | Rapikan berkas tanpa menghapus file penting |
| TERM-05 | Command history, Tab completion, help docs | Selesaikan workflow tanpa mouse |
| GIT-01 | Repo, status, staging, commits, history | `git init` lalu commit pertama |
| GIT-02 | Branch, merge, conflict (simulasi) | Perbaiki konflik di virtual repo |
| GIT-03 | GitHub workflow, PR, review, CI concepts | Rancang PR lengkap dengan test plan |

**Jangan mensimulasikan keberhasilan perintah yang tidak ditangani.** `npm`, `node`, `python`, `ssh`, `curl`, `sudo`, `rm -rf /` harus menghasilkan feedback yang menjelaskan kapabilitas runtime (atau bekerja hanya jika sandbox yang benar sudah tersedia).

---

## 9. CONTOH SILABUS DETAIL — WEB & FULL-STACK

| Track | Lesson sequence inti | Mini Project |
|---|---|---|
| HTML | tags → semantic layout → links/images → lists/tables → forms → accessibility → metadata | Personal profile site |
| CSS | selectors → cascade → box model → flexbox → grid → responsive → vars → animation basics | Responsive portfolio |
| JS | variables → flow → functions → arrays → objects → DOM/events → fetch/async → modules/testing | Habit tracker |
| Bootstrap | grid → breakpoints → utilities → nav/forms/cards → React Bootstrap → themed UI | Responsive admin mockup |
| React | components → state → effects → forms → composition → data fetching → testing | Student dashboard |
| Next.js | routes → layouts → Server/Client → data → forms → auth → API → performance | LMS prototype |
| Backend | HTTP → CRUD → validation → auth → rate limits → tests → logs → deploy | Verified REST service |

---

## 10. CONTENT QUALITY GATES

Sebelum sebuah course dapat published:

- [ ] Outline tidak duplikatif; dependencies/learning objectives masuk akal.
- [ ] Setiap lesson memiliki contoh kode yang **betul-betul diuji**, bukan placeholder.
- [ ] Istilah didefinisikan; bahasa mudah dipahami; tidak hanya terjemahan literal dokumentasi.
- [ ] Quiz punya jawaban dan alasan yang benar; soal tidak rancu.
- [ ] Interactive exercises hanya aktif bila evaluator tersedia.
- [ ] Source links masih berfungsi dan tech version disebut.
- [ ] Ada final mini project/capstone dan rubrik bila course menyatakan hands-on.
- [ ] Admin reviewer memberi approval, publish dicatat pada audit.
- [ ] Course tidak menyatakan `latest` bila belum diverifikasi terhadap dokumentasi resmi.
- [ ] Materi orisinal; jangan salin teks panjang, gambar, atau soal dari W3Schools/freeCodeCamp/platform lain.

## 11. AI CONTENT AUTHORING PROCESS

1. Pilih **satu course**, tidak seluruh katalog sekaligus.
2. Tulis course outcomes, prerequisite, dan daftar modul.
3. Pecah modul menjadi lesson ≤ 1 konsep besar per lesson; buat lesson pertama yang paling sederhana.
4. Buat contoh kode; jalankan di runtime aman/terkontrol; simpan expected output.
5. Tambah exercise + testcases + quest yang sesuai mastery objective.
6. Kumpulkan dokumentasi resmi dan catat tanggal/versi yang diverifikasi.
7. Review keterbacaan, aksesibilitas, correctness, security, copyright.
8. Publish versi 1 setelah lolos QA; catat changelog.
9. Ulangi langkah untuk lesson selanjutnya dan batch kecil berikutnya.

**Output wajib untuk AI:** course ID, daftar lesson yang benar-benar selesai, tanggal review, reference links, runnable tests, status publish, dan known gaps. Jangan memberi angka misalnya “500 materi selesai” tanpa daftar dan bukti.


---

# PART III — QUESTS, XP, SKILL TREES & CHALLENGES

# KODELUMA QUEST ENGINE — FULL SPECIFICATION
## RPG-inspired learning mechanics without turning education into a stressful game

> **Prinsip:** Quest menguji kompetensi nyata, bukan sekadar klik, membaca sekilas, atau spam aktivitas. Semua reward dihitung server-side dan setiap challenge harus bisa dibuktikan lulus. Gunakan design system Kodeluma premium-minimalist: **bukan UI game neon/cyber, bukan tombol dengan emoji acak**.

## 1. Tujuan gamification

- Membuat tujuan kecil lebih jelas dan memberi umpan balik atas perkembangan skill.
- Menyusun roadmap belajar dari dasar sampai advanced dengan prerequisite yang nyata.
- Mendorong praktik rutin yang sehat tanpa menghukum pengguna karena istirahat.
- Membantu pengguna menemukan latihan review pada topik yang belum dikuasai.
- Memberi hasil yang dapat ditunjukkan: proyek dan achievement berbasis rubrik.

## 2. Tipe quest + desain reward contoh

| Tipe | Contoh | Kriteria lulus | XP awal usulan |
|---|---|---|---:|
| Onboarding | Jalankan contoh pertama | Try It valid dan status tersimpan | 10 |
| Lesson Checkpoint | Kuasai variabel JS | Mini-quiz benar ≥ batas yang ditetapkan | 10 |
| Coding Quest | Buat kalkulator | Hidden/public tests pass | 40 |
| CLI Quest | Buat virtual project tree | Validasi state virtual FS | 30 |
| SQL Quest | Laporan total penjualan | Hasil query sesuai expected set | 40 |
| Debug Quest | Perbaiki fungsi salah | Tests pass + jawaban singkat | 50 |
| Build Quest | Responsive landing | Rubrik otomatis/manual terpenuhi | 100 |
| Boss Quest | Mini full-stack project | Review rubric + semua prerequisite | 200 |
| Review Quest | Ulang topik sulit | Penilaian mastery, tidak farmable | 15 |
| Community Quality | Jawab pertanyaan membantu | Reviewer/moderator approval | 10 |

Angka XP hanya **konfigurasi awal**, bukan nilai yang harus di-hardcode. Poin sekali per valid event; reattempt untuk belajar boleh tetapi tidak mencetak XP tanpa batas. Daily dan weekly goals bersifat opsional.

## 3. Status quest dan rules

```text
LOCKED -> AVAILABLE -> IN_PROGRESS -> SUBMITTED -> PASSED -> REWARD_CLAIMED
                                          |-> FAILED -> IN_PROGRESS (retry permitted)
                                          |-> NEEDS_REVIEW -> PASSED or REVISION_REQUIRED
```

Semua transition dikendalikan server. `FAILED` tidak boleh langsung dianggap `PASSED` dari nilai boolean yang dikirim browser. Rewards harus idempotent dan `REWARD_CLAIMED` hanya dapat dicapai setelah `PASSED` diverifikasi.

### Quest definition minimal

```json
{
  "id": "PY-Q002",
  "slug": "kasir-sederhana-python",
  "version": 1,
  "title": "Kasir Sederhana",
  "type": "coding",
  "difficulty": "beginner",
  "skills": ["python.variables", "python.operators"],
  "prerequisiteLessonIds": ["PY-02-L01", "PY-02-L02"],
  "runtime": "PY-WASM",
  "estimatedMinutes": 15,
  "objectives": ["Menghitung total", "Menggunakan print dan variabel"],
  "starterCode": "harga = 12000\njumlah = 3\n# hitung total\n",
  "expectedBehavior": "Cetak total 36000",
  "publicTests": ["harga=12000,jumlah=3 -> 36000"],
  "hiddenTestsRef": "server-private:PY-Q002:v1",
  "xp": 40,
  "repeatPolicy": "practice-unlimited-reward-once",
  "status": "draft"
}
```

`hiddenTestsRef` harus berupa referensi server/private; jangan memasukkan isi hidden tests dalam response publik atau bundle frontend. Jika judge belum tersedia, quest tetap `draft` atau memakai rubrik manual yang jelas.

---

## 4. QUEST CATALOG — ACTUAL CHALLENGE IDEAS

### 4.1 Onboarding & Computer Fundamentals

| ID | Quest | Level | Task & observable pass condition | Mode |
|---|---|---|---|---|
| ON-001 | Pilih Tujuan Belajar | Foundation | Pilih 1 learning path; preference tersimpan | UI state |
| ON-002 | Hello Kodeluma | Foundation | Edit teks `Hello, Kodeluma!` lalu preview memuat teks | WEB |
| ON-003 | First Debug | Foundation | Betulkan satu quote HTML/JS dan preview tidak error | WEB |
| FND-001 | Siapa Client, Siapa Server? | Foundation | Urutkan request browser → server → response dengan benar | Quiz |
| FND-002 | Flowchart Diskon | Foundation | Hasil simulasi benar untuk 3 nilai input batas | Guided logic |
| FND-003 | Kenali HTTP Status | Foundation | Cocokkan 200, 201, 400, 401, 404, 500 | Quiz |

### 4.2 HTML/CSS/JavaScript

| ID | Quest | Level | Task & observable pass condition | Mode |
|---|---|---|---|---|
| WEB-H001 | Struktur HTML Pertama | Beginner | Dokumen punya doctype, html, head/title, body | WEB DOM check |
| WEB-H002 | Kartu Profil Semantik | Beginner | Heading, img alt, link accessible, paragraph | WEB DOM check |
| WEB-H003 | Form Kontak Aksesibel | Intermediate | Label-for matching, input types, required fields | WEB DOM check |
| WEB-C001 | Styling Warna & Tipografi | Beginner | CSS rule valid, tampilan sesuai objective | WEB |
| WEB-C002 | Flexbox Card Row | Intermediate | Kontainer flex dan 3 item responsif | WEB/DOM + rubric |
| WEB-C003 | Grid Responsif | Intermediate | Grid 1 kolom mobile, 3 kolom desktop | WEB viewport tests |
| WEB-C004 | Focus Visible | Intermediate | Semua tombol/link memiliki focus indicator nyata | WEB/a11y |
| WEB-J001 | Click Counter | Beginner | Click increments count; reset returns zero | WEB behavior test |
| WEB-J002 | Todo List CRUD | Intermediate | Add, done, delete berfungsi; empty state | WEB behavior test |
| WEB-J003 | Fetch with Error State | Intermediate | Handle success, loading, and rejected mock fetch | WEB mocked tests |
| WEB-J004 | Async Race Fix | Advanced | Hindari outdated response dari overwrite state | Code test |
| WEB-T001 | Typed Greeting Function | Beginner | Parameter & return types tepat | TS compile + tests |
| WEB-T002 | Discriminated Union | Intermediate | Render sukses/gagal tanpa unsafe casting | TS type/tests |
| WEB-T003 | Generic API Result | Advanced | Generic types sesuai test matrix | TS type/tests |
| WEB-B001 | Responsive Bootstrap Dashboard | Intermediate | Bootstrap grid & form nyata; responsive screenshots | Project rubric |

### 4.3 Python + Data + SQL

| ID | Quest | Level | Task & observable pass condition | Mode |
|---|---|---|---|---|
| PY-Q001 | Salam dari Python | Beginner | Output berisi `Halo, Kodeluma!` | PY-WASM |
| PY-Q002 | Kasir Sederhana | Beginner | `harga * jumlah` benar untuk test input | PY-WASM |
| PY-Q003 | Bilangan Ganjil & Genap | Beginner | Fungsi mengembalikan `ganjil/genap` untuk input positif/negatif | PY-WASM |
| PY-Q004 | Tebak Angka | Beginner | Loop, input simulation, win/lose state valid | PY-WASM |
| PY-Q005 | Kontak Buku Telepon | Intermediate | dictionary CRUD plus lookup | PY-WASM |
| PY-Q006 | Rekap Nilai | Intermediate | List dict → average, min/max, validation | PY-WASM |
| PY-Q007 | JSON Validator | Intermediate | Baca JSON sample dan tangani field hilang | PY-WASM |
| PY-Q008 | Generator Angka | Advanced | Lazy generator outputs expected sequence | PY-WASM |
| PY-Q009 | Async Task Coordinator | Advanced | Async tests handle failure/cancellation with mocked IO | PY-WASM where supported |
| PY-Q010 | Python Mini Capstone | Advanced | Aplikasi CLI organizer with test suite/rubric | Submission/runner |
| SQL-Q001 | Filter Data Pelanggan | Beginner | Query SELECT WHERE memberi result set tepat | SQL-WASM |
| SQL-Q002 | Rekap Penjualan | Intermediate | JOIN + GROUP BY total per kategori | SQL-WASM |
| SQL-Q003 | Ranking Produk | Intermediate | ORDER BY/LIMIT benar termasuk ties policy | SQL-WASM |
| SQL-Q004 | Cari Query Lebih Baik | Advanced | Jelaskan index/explain serta query hasil setara | SQL-WASM + rubric |
| DATA-Q001 | Bersihkan Data CSV | Intermediate | Missing values dan duplikasi ditangani sesuai policy | Python notebook/submission |
| DATA-Q002 | Jelaskan Grafik | Intermediate | Pilih chart yang sesuai dan interpretasi akurat | Quiz + rubric |

### 4.4 CLI, Git & DevOps

| ID | Quest | Level | Task & observable pass condition | Mode |
|---|---|---|---|---|
| CLI-Q001 | Where Am I? | Beginner | `pwd` menampilkan lokasi virtual saat ini | CLI-GUIDED |
| CLI-Q002 | Project Folder | Beginner | `mkdir my-project`; directory exists | CLI-GUIDED |
| CLI-Q003 | Source Structure | Beginner | `src/components` dan `README.md` tercipta | CLI-GUIDED |
| CLI-Q004 | Folder Navigator | Beginner | `cd src`, `cd ..`, invalid path yields correct error | CLI-GUIDED |
| CLI-Q005 | Safe File Rename | Intermediate | `mv` memindahkan file dalam virtual FS tanpa hilang data | CLI-GUIDED |
| GIT-Q001 | First Commit | Beginner | `git init`, add file, commit; `log` has one commit | CLI-GUIDED |
| GIT-Q002 | What Changed? | Intermediate | Git status reflects staged vs unstaged edits | CLI-GUIDED |
| GIT-Q003 | Merge Conflict Lab | Advanced | User resolves virtual branch conflict correctly | Future guided Git |
| OPS-Q001 | CI Pipeline Checklist | Intermediate | Workflow lint + typecheck + tests in correct order | Quiz/project rubric |
| OPS-Q002 | Dockerfile Review | Advanced | Identifikasi kesalahan keamanan dan layer cache | Read-only review |

### 4.5 Backend, Security, AI & Capstones

| ID | Quest | Level | Task & observable pass condition | Mode |
|---|---|---|---|---|
| API-Q001 | API Endpoint Designer | Beginner | Choose valid methods/statuses/JSON shapes | API mock |
| API-Q002 | Pagination Contract | Intermediate | Correct page/cursor response & errors | Mock/API test |
| API-Q003 | Prevent Duplicate Reward | Advanced | Server handler idempotent under concurrent claims | Project test |
| SEC-Q001 | Spot the Unsafe Code | Intermediate | Identify XSS/unsafe string interpolation in isolated lesson | Defensive quiz |
| SEC-Q002 | Authorization Matters | Intermediate | Reject cross-user resource access in test | Safe coding project |
| SEC-Q003 | Secret Leak Prevention | Intermediate | Remove secrets from client bundle and logs in sample app | Guided review |
| AI-Q001 | Check AI-generated Code | Beginner | Correct 3 functional/security mistakes with tests | Review challenge |
| AI-Q002 | Cite Technical Sources | Intermediate | Provide verified official references and tests | Rubric |
| BOSS-WEB-01 | Portfolio Launch | Intermediate | Multi-page responsive accessible portfolio + source | Manual/project rubric |
| BOSS-PY-01 | Python Workflow Builder | Intermediate | Reusable Python tool with tests and README | Project rubric |
| BOSS-FULL-01 | End-to-end Course Tracker | Advanced | Auth + CRUD + validation + tests + deployment docs | Project rubric |
| BOSS-DATA-01 | Data Insights Project | Advanced | Clean, analyze, visualize, interpret dataset with reproducibility | Project rubric |

**Penting:** Tabel ini adalah daftar quest untuk dikembangkan. Hanya quest yang punya validator aman, rubric & objective jelas, dan lulus QA yang boleh diberi status published.

---

## 5. DETAILED QUEST SPEC — 3 EXEMPLARS

### 5.1 Quest WEB-J001 — Click Counter

- **Objective:** memahami DOM query, event click, dan pembaruan state tampilan.
- **Prerequisite:** `WEB-JS-dom-basics` dan `WEB-JS-events`.
- **Starter:** HTML button `#increment`, element `#count`, JS TODO.
- **Expected:** default 0, tiga click menghasilkan 3, reset (opsional bonus) kembali 0.
- **Public tests:** presence button and display, first click increments.
- **Private tests:** repeated click, rapid click, no duplicate listeners, reset.
- **Feedback:** jika gagal, hint bertahap (`cek event listener`, `pastikan tipe angka`, `update textContent`).
- **XP:** 40 sekali valid.
- **Status awal:** `draft` sampai tests dibuat.

### 5.2 Quest CLI-Q003 — Project Structure

- **Objective:** mkdir, cd, touch dan memahami folder bertingkat.
- **Starting virtual FS:** `/home/learner` kosong.
- **Task:** buat folder `kodeluma-project`, di dalamnya `src`, subfolder `components`, dan `README.md` pada root.
- **Accepted workflow:** command boleh berbeda selama final tree benar.
- **State validator:** `exists('/home/learner/kodeluma-project/src/components')` AND `isFile('/home/learner/kodeluma-project/README.md')`.
- **Failure cases:** folder dibuat di lokasi salah, case mismatch, file menjadi direktori.
- **Anti-cheat:** validator baca state terminal sandbox dari service, bukan JSON `passed:true` dari client.
- **XP:** 30 sekali valid.

### 5.3 Quest PY-Q002 — Kasir Sederhana

- **Objective:** variabel, aritmetika, output.
- **Task:** fungsi `hitung_total(harga, jumlah)` mengembalikan perkalian dalam tipe angka.
- **Public tests:** `(12000,3) -> 36000`, `(0,5) -> 0`.
- **Private tests:** `(1,1) -> 1`, `(2500,4) -> 10000`, invalid types policy clearly documented.
- **Starter:**

```python
def hitung_total(harga, jumlah):
    # TODO: hitung total harga
    pass
```

- **Validator:** isolated Pyodide Worker tests jika browser client saja (peringkat/sertifikat perlu verifikasi server terpercaya); untuk reward yang tidak boleh dimanipulasi, gunakan secure judge atau verifikasi tepercaya sesuai threat model. Jangan menganggap browser-run hidden tests anti-cheat.
- **UX:** ringkas error traceback agar mudah dipahami pemula.
- **XP:** 40 sekali valid.

---

## 6. SKILL TREE — GRAPH TAHAPAN BELAJAR

```text
Computer & Internet Basics
  |
  +-- Logic & Computational Thinking
       |
       +-- Web Fundamentals
       |    +-- HTML Semantics
       |    +-- CSS Layout
       |    +-- JavaScript Syntax
       |           |
       |           +-- DOM & Events
       |           +-- Async/API
       |           +-- TypeScript
       |                +-- React
       |                     +-- Next.js
       |                          +-- Full-stack Capstone
       |
       +-- Python Fundamentals
       |    +-- Python Collections
       |    +-- Functions/OOP
       |    +-- Files & Errors
       |    +-- APIs & Async
       |    +-- Data/Pandas -> ML Foundations
       |    +-- FastAPI/Django -> Backend Capstone
       |
       +-- CLI & Git
       |    +-- Linux workflow
       |    +-- Git Branch/PR
       |    +-- CI/CD -> Docker -> Cloud
       |
       +-- SQL Fundamentals
            +-- Joins/Aggregation
            +-- Indexing/Transactions
            +-- Data Engineering/Backend
```

Rules:

- Skill nodes memakai stable IDs (`skill:python.functions`, bukan judul display).
- `available` ketika prerequisite lesson/quest terpenuhi; students boleh preview locked lesson sesuai policy.
- Untuk konsep dasar yang telah dikuasai dari luar platform, boleh jalur placement test/mastery override dengan audit, bukan mewajibkan semua quest no-skip.
- Skill tree adalah alat navigasi; jangan menjadikan game mechanic mempersulit akses edukasi.

---

## 7. XP, LEVELS, STREAK, ACHIEVEMENTS

### 7.1 XP & Level formula usulan

Gunakan cumulative threshold configurable: 

| Level | Total XP minimum |
|---:|---:|
| 1 | 0 |
| 2 | 100 |
| 3 | 250 |
| 4 | 450 |
| 5 | 700 |
| 6 | 1000 |
| 7 | 1400 |
| 8 | 1900 |
| 9 | 2500 |
| 10 | 3200 |

Setelah level 10, rumus/tabel lanjutan dapat ditentukan admin dengan migrasi data eksplisit. UI XP bar menampilkan progres menuju level berikutnya. **XP bukan satu-satunya ukuran mastery**; simpan skill mastery terpisah.

### 7.2 Idempotency & ledger

Reward event:

```json
{
  "eventId": "uuid",
  "userId": "user_uuid",
  "sourceType": "quest_pass",
  "sourceId": "PY-Q002",
  "sourceVersion": 1,
  "xpDelta": 40,
  "uniqueRewardKey": "user_uuid:PY-Q002:v1:first-pass",
  "occurredAt": "ISO8601",
  "verifiedBy": "judge-or-reviewer"
}
```

Server performs atomic check-and-record (transaction/script as supported), updates aggregate XP only once, writes ledger; retries return same result. Do not rely on client `localStorage` for canonical XP.

### 7.3 Achievement badges

- `First Run` — first verified code run.
- `HTML Explorer` — 5 HTML exercises passed.
- `CSS Builder` — responsive layout quest passed.
- `Python Starter` — first 3 Python quests.
- `Terminal Navigator` — first CLI file tree quest.
- `Debug Detective` — 5 bug-fix quests passed.
- `Project Shipper` — accepted capstone project.
- `Consistency Scholar` — multiple days of voluntary learning (optional, not punitive).
- `Helpful Teammate` — quality forum answer accepted by moderator.
- `Accessibility Champion` — accessible-form quest passed.

Badges tidak menyatakan `Certified Engineer`, `Professional`, atau akreditasi formal bila hanya internal. Semua syarat badge dilihat di UI.

### 7.4 Streak (wellbeing-safe)

- Optional, user dapat disable; hari belajar dihitung sesuai timezone account yang eksplisit.
- Tidak ada fitur pembelian streak, guilt notifications, atau penalti besar karena sakit/istirahat.
- Perbolehkan flexible goal, weekly progress metric lebih berguna daripada daily pressure.
- Jangan spam email/notifikasi. Semua pemberitahuan menghormati preferensi.

---

## 8. QUEST BOARD EXPERIENCE

### Public quest catalog

Quest cards dengan judul, skill, difficulty, runtime, waktu perkiraan, prerequisites, dan status `planned/available` yang jujur.

### Student quest dashboard

- `Recommended for your path`
- `In Progress`
- `Ready for Review`
- `Completed`
- `Advanced Challenges`
- `Optional Daily Practice`

Filter category, skill, difficulty, status, runtime. Cards mempunyai CTA aktual: `Mulai`, `Lanjutkan`, `Lihat Hasil`, atau `Belum Tersedia` (disabled dengan penjelasan). Milestone banner informatif, bukan animasi berkedip.

### Quest player

Header objective, prerequisites, step-by-step instructions, code editor/terminal, tests panel, hints, submit, run, failure feedback, XP reward preview, next recommended lesson. Tampilkan time estimate dan status autosave.

### Achievement overlay

Toast/overlay success halus 1–3 detik, dapat di-dismiss, reduced motion alternative; tidak menghalangi edit kode. Tampilkan reward hanya setelah hasil server verified.

---

## 9. DAILY, WEEKLY, STORY, BOSS QUEST ROTATION

**Daily practice** (rotasi konten yang sudah punya validator):
- Perbaiki satu bug JavaScript.
- Jawab 3 pertanyaan HTML semantics.
- Jalankan 2 command CLI pada virtual FS.
- Tulis satu fungsi Python mini.

**Weekly practice**:
- Buat responsive card kecil.
- Selesaikan 4 lesson dan review 1 konsep sulit.
- Selesaikan 1 mini-project pilihan pengguna.

**Story chapter series** (opsional UI narrative, bukan role-play berlebihan):
1. Chapter 1 — First Line of Code.
2. Chapter 2 — Build Your First Page.
3. Chapter 3 — Make It Interactive.
4. Chapter 4 — Work Like a Developer.
5. Chapter 5 — Your First API.
6. Chapter 6 — Ship a Real Project.

**Boss challenge** unlock ketika prerequisite kompetensi nyata telah diuji. Tantangan terintegrasi dapat dinilai manual; jangan label `auto-graded` tanpa judge.

Scheduler reward harus memvalidasi tanggal/zona waktu, batas pengulangan, dan unique claim. Quest optional tidak boleh mengunci akses lesson wajib.

---

## 10. ANTI-CHEAT, FAIRNESS, AND ASSESSMENT INTEGRITY

- Client is untrusted. Do not accept submitted `score`, `passed`, or `xp` as authoritative.
- Basic browser playground tests are useful for practice but **not strong proof** for formal badge/certificate without trusted evaluation or manual review.
- No secret tests in shipped browser JS; use server-side evaluator behind safe boundary where applicable.
- Save attempts with ownership, rate limits, max payload length, version, timestamps and integrity checks.
- Idempotent quest claim under concurrency. Prevent XP by repeated resubmission of same already-rewarded event.
- Community quests require quality review; no XP for spam count.
- Leaderboard is P2/P3; pseudonym, opt-in, reset policy, anti-duplicate policies, student privacy.
- No invasive webcam/proctoring without deliberate privacy assessment and user permission.

---

## 11. QUEST AUTHORING CMS

Admin must be able to:

1. Create/edit/version quest with schema validation.
2. Choose objective skills, lesson prerequisites and unlock graph.
3. Set language/runtime compatibility.
4. Define starter code and public tests; private tests stored only in authorized server/judge.
5. Configure hints, max attempt policies, repeat XP, XP amount, rubric, manual review.
6. Preview as student; run test fixtures and edge cases before publish.
7. Publish/unpublish/retire version with audit log.
8. Inspect real attempts, failure rates, pending manual reviews and complaints.
9. Duplicate quest only to create a **new version/ID**, not accidentally duplicate reward keys.
10. Monitor unfairly hard questions, broken tests, unsupported runtime.

**Prepublish lint checks:** unique slug, valid prerequisites (no cycles), functional evaluator, valid starter template, examples passing tests, reward policy, clean UI, content safety, accessibility.

---

## 12. REDIS CONTRACT FOR QUESTS

Suggested namespaced structures (reconcile with original architecture):

```text
kl:quest:{questId}:v:{version}                 quest definitions immutable
kl:quest:index:published                      active quest IDs
kl:quest:by-skill:{skillId}                   SET/ZSET quest IDs
kl:quest:user:{userId}:{questId}              status and best attempt
kl:quest:attempt:{attemptId}                  attempt results (bounded retention)
kl:quest:claim:{userId}:{rewardKey}           at-most-once marker
kl:xp:user:{userId}                           canonical total
kl:xp:ledger:{userId}                         event index
kl:xp:event:{eventId}                         reward details
kl:badge:user:{userId}                        earned achievement set
kl:mastery:user:{userId}                      skill mastery mapping
kl:quest:daily:{date}:{timezoneGroup}         published daily rotation
```

Transactions/scripts as supported for reward; no unbounded `KEYS *`; pagination; retention. Quest attempts may grow quickly: store compact summaries and manage archival based on documented policy. Avoid storing untrusted massive code blobs in Redis.

---

## 13. REQUIREMENT IDS & TEST MATRIX

| Requirement | Scenario | Pass condition |
|---|---|---|
| QUEST-001 | Locked quest prerequisite | Inaccessible until required mastery or approved skip |
| QUEST-002 | Start quest | Status updates from available to in_progress only for owner |
| QUEST-003 | Submit quest | Server validates format, course access and evaluator availability |
| QUEST-004 | Pass quest | Verified tests/rubric, not client claim |
| QUEST-005 | Claim reward once | First pass gives XP; repeat yields no extra XP |
| QUEST-006 | Concurrent claim | Parallel requests total XP increases once |
| QUEST-007 | Save draft | Text/code state preserved after refresh, within size policy |
| QUEST-008 | CLI quest | Validates virtual FS state and actual command effects |
| QUEST-009 | Browse quests | Filters, pagination, empty/loading/error states work |
| QUEST-010 | Accessibility | Keyboard navigation, focus, reduced motion, SR status |
| QUEST-011 | Admin quest versioning | Old attempts remain linked to old version safely |
| QUEST-012 | Review quest | Moderator can approve/reject, audit and feedback persisted |
| QUEST-013 | Daily quest rotation | Timezone-consistent, no repeat exploit |
| QUEST-014 | Skill tree graph | No cycles, explicit prerequisite and accessible fallback text |
| QUEST-015 | Achievement | Award only when complete verified condition met |

---

## 14. ROLLOUT SCOPE

**PBL core:** course progress + simple achievement/checkpoint; do not delay project/forum/admin/Bootstrap features just to finish gamification.

**P1 first quest release:** 8–12 simple quests covering HTML/CSS/JS and guided CLI, 5 badges, XP ledger, basic quest board. Publish only after validators tested.

**P2:** Python Pyodide and SQL wasm quests, skill tree, weekly practice, projects/capstone review, admin quest CMS.

**P3:** remote multi-language judge if cost/security feasible, adaptive recommendations, opt-in leaderboards, team quests, advanced certifications policies.

**Done means:** course + quest content real and reviewed; runtime supported; user completes quest; server verifies pass; XP awarded once; page works mobile; tests succeed; design intact; admin can inspect completion. Never claim done from mockup alone.


---
