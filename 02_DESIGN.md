# DESIGN.md — KODELUMA DESIGN SYSTEM

**Version:** 1.2 · **Status:** LOCKED FOR MVP · **Brand:** Kodeluma by Azzam Codex

## 0. Prinsip desain — dibaca sebelum komponen dibuat
Kodeluma harus terlihat seperti produk EdTech kelas profesional: hangat, cerdas, ramah pemula, premium, fokus konten. **Bukan neon, bukan cyberpunk, bukan gaming UI, bukan glassmorphism, bukan landing page AI generik.** Keindahan datang dari hirarki tipografi, white space, konsistensi komponen, ilustrasi kode edukatif yang terkendali, dan interaksi yang halus. Gunakan UI **light-mode first**; editor boleh dark untuk keterbacaan sintaks.

### Lima aturan non-negotiable
1. Satu **token warna, radius, spacing, shadow** untuk seluruh aplikasi. Semua token harus berasal dari file ini / `assets/design-tokens.css`.
2. Gunakan Bootstrap container/grid/utilities sebagai fondasi, lalu custom CSS untuk identitas. Jangan memperkenalkan Tailwind, MUI, shadcn/ui, Ant Design, DaisyUI, atau toolkit UI lain pada MVP.
3. Ikon Lucide outline yang konsisten. **Dilarang memakai emoji sebagai ikon navigasi/UI**. Ilustrasi harus relevan dengan pemrograman (code/editor/path), tidak asal menambahkan robot atau 3D blob.
4. Satu peran animasi per elemen: Motion untuk state/micro-interaction; GSAP untuk storyboard scroll pada landing saja. Animasi adalah pendukung pengalaman, bukan tujuan.
5. Semua halaman punya state lengkap: default, hover, focus-visible, active, disabled, loading, empty, error, success. Responsif dan dapat diakses keyboard.

## 1. Identitas brand
- Brand utama: `kodeluma.` (huruf kecil pada wordmark).
- Nama dalam judul/microcopy: `Kodeluma` (Title Case).
- Endorsement: `by Azzam Codex` tanpa mendominasi brand utama.
- Tagline utama: `Learn. Code. Create.`
- Headline landing: `Belajar coding, mulai dari langkah pertamamu.`
- Subheadline: `Materi terarah, latihan nyata, dan progres yang bisa kamu lihat — semua dirancang untuk pemula.`
- Voice: suportif, jelas, pintar, tidak lebay, bukan jargon berlebihan. CTA imperatif pendek: `Mulai Belajar`, `Jelajahi Kelas`, `Lanjutkan Materi`, `Kirim Proyek`.
- Brand logo: `assets/kodeluma-logo-horizontal.png` (PNG transparan), ikon: `assets/kodeluma-icon.png`. Tidak men-stretch / mengganti palet logo / menggunakan logo pada background kontras rendah.
- Logo safe-area: minimal 1/4 tinggi logomark; ukuran navbar wordmark lebar sekitar 144–176px; ukuran minimum digital horizontal 120px; ikon 32px+.

## 2. Palet warna (HEX WAJIB)
| Token | Nilai | Kegunaan |
|---|---|---|
| `--kl-ink` | `#10243A` | heading, navy brand, teks penting |
| `--kl-primary` | `#2563EB` | primary CTA, active link, focus |
| `--kl-primary-hover` | `#1D4ED8` | CTA hover |
| `--kl-primary-soft` | `#EFF5FF` | selected row, pill, hero wash |
| `--kl-amber` | `#F4B544` | spark brand, highlight kecil, badge capaian |
| `--kl-bg` | `#F8FAFD` | background umum |
| `--kl-surface` | `#FFFFFF` | cards, modals, navbar |
| `--kl-surface-soft` | `#F1F5FA` | section alternating, skeleton |
| `--kl-text` | `#1C2D40` | body |
| `--kl-muted` | `#62748A` | description/helper |
| `--kl-border` | `#E2E9F1` | border, divider |
| `--kl-success` | `#16805D` | complete, success |
| `--kl-warning` | `#A16207` | caution |
| `--kl-danger` | `#C24141` | form/delete error |
| `--kl-code-bg` | `#101B2B` | panel kode dark |
| `--kl-code-border` | `#23364E` | panel kode border |

Warna amber hanya **aksen kecil**, bukan CTA umum; warna primer adalah biru. Jangan memakai gradient sangat saturated. Landing hero boleh wash gradient sangat lembut `#FFFFFF -> #F1F6FF`, bukan gradient neon. Teks di putih harus kontras WCAG AA; verifikasi kombinasi sebelum dipakai.

## 3. Tipografi
- **Headings / display:** `Space Grotesk`, fallback `Inter, system-ui, sans-serif`, weight 500/600/700. Dipakai untuk judul halaman, judul kartu, dan angka statistik agar identitas lebih tegas; teks panjang tetap memakai Inter.
- **Body/UI:** `Inter`, fallback `system-ui, -apple-system, sans-serif`, weight 400/500/600.
- **Code:** `JetBrains Mono`, fallback `ui-monospace, SFMono-Regular, monospace`.
- H1 desktop 52px / line-height 1.14 / letter -0.045em; tablet 42px; mobile 34px. Max width text H1 13ch untuk landing.
- H2 desktop 36px / 1.2; mobile 28px; H3 24px; H4 20px. Hindari >2 tingkat heading dalam satu card.
- Body 16px / 1.65; small 14px / 1.5; label 13px/600; eyebrow 12px/700, uppercase, letter-spacing .09em.
- Long-form lesson text: max-width 72ch, line-height 1.75. Code font 13–14px / 1.65, scroll secara horizontal.
- Jangan memakai all caps untuk heading panjang. Angka statistik bisa tabular lining.
- Hirarki heading: H1/H2 memakai tracking rapat dan line-height ringkas; H3/H4 tetap mudah dibaca. Eyebrow pendek memakai Inter uppercase dan aksen garis kecil; jangan menjadikan paragraf atau label formulir all caps.

## 4. Spacing / layout system
- Base spacing 4px, gunakan hanya `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 112` px.
- Container maximal **1200px**; padding sisi desktop 32px, tablet 24px, mobile 20px (minimum 16px di layar 320px).
- Bootstrap: `container`, `row`, `col-*`, `g-*`, `d-*`, `align-items-*`, `justify-content-*`, `form-*`, `table`, `btn` harus terlihat di markup proyek.
- Breakpoints mengikuti Bootstrap: sm 576; md 768; lg 992; xl 1200; xxl 1400.
- Section vertical desktop 96px, tablet 72px, mobile 56px. Section compact 64/48/40. Jarak heading ke subtitle 16px; subtitle ke grid 40px (mobile 28px).
- Header publik tinggi 76px desktop, 68px mobile; sticky ringan dengan border tipis (bukan blur berat). Authenticated learner sidebar desktop 248px; admin 260px.
- Dashboard main gutters 28px desktop, 20px tablet, 16px mobile. Untuk viewport kecil sidebar jadi drawer accessible.

## 5. Radius, border, shadow
- `--kl-radius-sm: 8px`, `md: 12px`, `lg: 16px`, `xl: 22px`, `pill: 999px`.
- Inputs/buttons 10–12px. Main cards 16px. Feature highlight/hero mockup 22px. Badges pill atau 8px, jangan campur acak.
- Stroke border 1px `#E2E9F1`; elevation hanya `0 8px 28px rgba(16,36,58,0.05)`; hover card shadow `0 16px 42px rgba(16,36,58,0.10)`.
- Dilarang tebal drop shadow ungu/biru bersinar, glass panes, blur efek kaleidoskop.

## 6. Komponen resmi dan spesifikasi
### Button
- **Primary** background `--kl-primary`, teks putih, height 44px desktop / 48px mobile, horizontal padding 20px, radius 11px, font 14px/600.
- **Secondary** bg putih + border, text ink. **Tertiary** text blue tanpa background. **Danger** hanya tindakan destruktif.
- Hover primary ke `--kl-primary-hover`, transform `translateY(-1px)` (maks 150ms). Focus-visible ring 3px translucent blue + offset 2px.
- Disabled opacity .55 + no interaction; loading spinner disertai teks `Memproses...`; jangan hanya spinner.
### Card
- Default white, border 1px, radius 16px, padding 24px desktop/20 mobile; shadow ringan. Course card 16:10 cover, title 18px/700, skill badge, total lesson, estimated time, progress bar bila enrolled.
- Hover: lift 3px paling jauh, shadow halus; seluruh card boleh clickable tetapi aksi tambahan tidak boleh nested links.
- Main feature card minimal height konsisten pada row yang sama.
### Inputs
- Height 46–48px; border; label **di atas** input; placeholder bukan label; error berteks + aria-describedby; icon inline hanya bila membantu.
### Select / dropdown pilihan
- Gunakan satu komponen React Bootstrap terkontrol untuk daftar pilihan pada katalog, forum, Code Lab, dan admin. Tombol 48px (40px untuk toolbar ringkas), radius 12px, permukaan putih, border token; ikon panah Lucide di kanan.
- Menu putih dengan radius 12px, border dan bayangan kartu token, padding 8px, maksimal 288px lalu scroll. Opsi tinggi minimal 40px; hover/fokus/terpilih memakai `--kl-primary-soft` dan `--kl-primary`, dengan tanda centang Lucide untuk opsi aktif.
- Label tampak atau nama aksesibel wajib tersedia. Panah atas/bawah, Enter, Escape, dan klik di luar harus tetap berfungsi; disabled harus jelas. Gerak panah maksimal 150ms dan ikuti reduced motion.
### Badges
- XP/gold `--kl-amber` dipakai sangat jarang; kategori kursus blue-soft; level neutral/ink; complete success-soft.
### Navigation
- Public: logo left; `Kelas`, `Alur Belajar`, `Tentang`; right `Masuk`, `Mulai Belajar`. Mobile menu accessible, tidak menutup konten.
- Learner: `Dashboard`, `Jelajahi Kelas`, `Proyek`, `Diskusi`, `Sertifikat`, `Profil`.
- Admin: `Ringkasan`, `Kursus`, `Pelajaran`, `Proyek`, `Forum`, `Pengguna`, `Laporan`, `Sertifikat`.
### Progress
- Bar 6–8px, track `#E8EDF4`, fill primary, label % real, `aria-valuenow`, jangan grafik palsu.
### Code editor / lesson player
- Editor dark panel dengan toolbar netral, filename, tombol `Salin Kode`, `Jalankan Preview` hanya jika benar-benar supported; monospace 13–14px. Lesson content tetap light. Sidebar daftar lesson sticky pada desktop, collapsible pada mobile.
- `/lab` memakai halaman terang `--kl-bg` dengan intro editorial singkat, Lottie praktik satu kali, lalu workspace dua panel. Navigasi bahasa dan toolbar berada pada surface putih; hanya editor dan area konsol memakai `--kl-code-bg`. Tombol Jalankan memakai primary biru, status memakai warna semantik token. Panel radius 16px, border token, shadow kartu halus; tinggi editor/output 560px desktop dan 440px mobile.
- Tab dan panel masuk dengan opacity/translateY paling jauh 12px selama 280ms, satu kali saat halaman dibuka. Pergantian tab memakai transisi 160ms pada warna/border saja. Tidak ada animasi berulang di area pengetikan; `prefers-reduced-motion` menampilkan keadaan akhir tanpa gerak.
- Template Lab memakai `SelectField` global. Nama bahasa dan catatan kemampuan harus sesuai runner yang tersedia; simulasi diberi label jelas. Jangan tampilkan versi compiler, waktu, atau penggunaan memori yang tidak terukur. Kontrol ikon memiliki nama aksesibel dan target sentuh minimal 40px pada toolbar, 44px pada mobile.
### Tables
- Admin: header sticky bila tinggi, zebra sangat halus, sorting dan filter eksplisit, `overflow-x:auto` pada mobile, empty state.
### Dialog/toast
- Modal React Bootstrap terkendali; title, close, keyboard escape, focus trap; toast aria-live polite; destructive modal wajib konfirmasi.
- Feedback global: toast di kanan atas memakai surface, border, shadow, radius, dan warna dari token Kodeluma; modal konfirmasi tetap memakai React Bootstrap. Lottie `feedback-spark.json` hanya bermain sekali selama 1,4 detik sebagai aksen di belakang ikon Lucide status. Reduced motion menampilkan lingkaran statis. Toast sukses/info menghilang setelah 4,5 detik; error setelah 6,5 detik; konfirmasi tidak menutup otomatis.
- Formulir HTML yang gagal validasi menampilkan pesan Kodeluma dan memfokuskan kolom pertama yang bermasalah tanpa bubble validasi bawaan browser.

## 7. Layout halaman spesifik
### Landing `/`
1. Slim announcement bar **hanya jika ada kabar benar**; kalau tidak, skip.
2. Navbar di atas background putih. Hero split 55/45 desktop: eyebrow `PLATFORM BELAJAR CODING UNTUK PEMULA`, H1 maksimal 2–3 baris, copy 2 baris, CTA primary+secondary, helper `Mulai dari nol. Belajar sesuai ritmemu.`. Kanan mockup editor/learning dashboard **dibuat dengan HTML/CSS bukan gambar stok laptop**.
3. Trust row: bukan logo palsu/testimoni palsu; tampilkan `Materi bertahap • Praktik langsung • Progres tercatat` dengan ikon kecil.
4. Featured classes: 3 course cards sumber Redis (fallback empty state masuk akal).
5. How it works: 3 langkah bernomor, ilustrasi garis/ikon sederhana.
6. Learning path section dengan roadmap HTML -> CSS -> JavaScript (tidak menjanjikan semua sudah terbit bila belum).
7. Demo lesson preview / before-after exercise.
8. FAQ accordion React Bootstrap (4-6 pertanyaan asli).
9. Final CTA navy solid, bersih, teks singkat.
10. Footer 3–4 kolom, copyright dinamis, `Crafted by Azzam Codex`, tautan privasi/terms, social links hanya jika valid.
**Jangan** menampilkan lebih dari 2 animasi hero utama atau terlalu banyak floating elements.

### Course catalog `/courses`
- Header `Pilih kelas pertamamu`; search+filter category/level; sort `Terbaru / A-Z`; responsive grid 3 desktop, 2 tablet, 1 mobile; pagination bukan load all.
- Card standard; zero-result panel dengan clear-filter CTA; label `Segera hadir` kalau kelas belum published dan hanya jika memang sengaja ditampilkan.

### Learning paths `/learning-paths`
- Kartu jalur memakai permukaan, border, radius 16px, shadow, dan spacing skala sistem yang sudah ada. Header menampilkan ikon Lucide, nomor jalur, dan status; judul minimal 20px; deskripsi ringkas; pratinjau maksimal tiga langkah; satu aksi utama di footer.
- Kartu langkah roadmap memakai nomor berurutan yang tegas, fokus materi, proyek praktik, dan tautan silabus hanya bila kelas benar-benar terbit di Redis. Kelas yang belum terbit diberi teks status tanpa affordance tautan.
- Filter menampilkan jumlah jalur sesuai katalog yang tersedia. Aksi buka roadmap menggulir ke section dengan ID, menghormati reduced motion. Satu kolom mobile, dua tablet, tiga desktop; target sentuh minimal 44px.
- Status tersedia dan jumlah kelas dihitung dari kelas published di Redis. Jangan menyebut jalur terverifikasi/terakreditasi atau menampilkan jumlah pelajaran dan durasi dari kurasi statis sebagai data live.

### Detail course `/courses/[slug]`
- Breadcrumb, hero informasi judul/deskripsi/level/durasi, CTA enroll/continue, bullet outcomes; curriculum accordion; prerequisites; instructor label `Tim Kodeluma` sampai ada nama asli; FAQ singkat.

### Student dashboard `/dashboard`
- Personal greeting, `Lanjutkan belajar` card paling atas, progress ring/bar real, active courses 2–3, recommended from published, small recent activity, quick link forum. Jangan terlalu banyak cards.
- Riwayat pembelajaran menampilkan maksimal 6 pelajaran yang benar-benar ditandai selesai. Waktu penyelesaian baru memakai data Redis; data lama tanpa timestamp diberi label `Waktu belum tercatat`, bukan tanggal perkiraan. Gunakan kartu, border, radius, jarak, ikon, dan warna token yang sudah ada. Materi terbit dapat dibuka lagi; materi dari kelas arsip tetap terbaca tanpa tautan yang tidak tersedia.

### Lesson `/learn/[courseSlug]/[lessonSlug]`
- Topbar breadcrumbs + course progress. Split desktop ~260 sidebar and main reading + optional right aside narrow untuk exercise; mobile collapsible toc. Content max 72ch; sticky bottom action `Tandai Selesai / Lanjutkan`; do not auto-mark lesson just by visiting.

### Projects `/projects` and `/projects/[slug]`
- User sees brief, requirement, difficulty, submission (repo URL or answer), status, feedback from admin; no pretend autograding. Inputs validated server side.

### Forum `/forum`, `/forum/[id]`
- Topic categories, list sort recent, New Thread button, article-style discussion, replies; admin moderation.

### Certificates `/certificates`
- Completed course cards, verify code, print/download if eligible; explain Kodeluma completion certificates are **not government/university accredited**.
- Certificate uses the original horizontal KodeLuma logo, a restrained ink/blue/amber layout, real recipient/course/issue date/version/verification code from Redis, and an A4 landscape print sheet. Verification links use the active site origin.
- Label it as a KodeLuma course-completion record. Do not imply external accreditation, national registration, institutional signatures, industry certification, or skill/project assessment unless independently proven by the issuance contract. Revoked records must show their status prominently.
- Certificate collection must have a useful empty state, accessible search/selection, 44px touch targets, mobile layout, and reduced-motion support.
- On `/certificates`, present the collection as a horizontal, scrollable row of course tabs with visible previous/next controls and search. Keep the selected A4 preview centered below the tabs at a screen-friendly width. Offer an accessible native-dialog full view when the viewport cannot show the whole preview; the print sheet keeps its A4 landscape dimensions.

### Admin dashboard `/admin`
- Functional analytics from Redis indexes. 4 key stats max: total users, courses published, enrollments, completions. Graph optional and grounded in event data; never hardcode fake numbers. Content management CRUD pages share same `DataTable`, `FormField`, `ConfirmDialog`, `EmptyState`.

## 8. Responsiveness
- At 1440px: hero split, 3-card grid, sidebar fixed; body max 1200px.
- At 1024px: hero 50/50 optional; sidebar collapsible when content area too small; 2-column grid.
- At 768px: hero text full width then mockup below; menus become hamburger/drawer; tables scroll; dashboard 2 metrics/row.
- At 390px: H1 34px, CTA buttons stack, course 1 column, actions full-width, no accidental x-overflow; 44px minimum click target.
- At 320px: navigation, form labels, badges remain readable with padding 16px.

## 9. Motion architecture & explicit rules
- **GSAP 3**: use `useGSAP()` with `@gsap/react` and `gsap.context` cleanup. Only hero intro, learning path progress illustration, one subtle scroll reveal group. Register ScrollTrigger only on client. Prefer `transform`/`opacity`; avoid animating `height`, `width`, `top`, `left` in hot path.
- **Motion**: card enter on viewport, modal enter/exit, button press, tab transitions. 160–280ms micro, 350–550ms hero state; spring minimal bounce.
- **Reduced motion**: disable scroll-trigger effects and movement, render final content instantly. Never hide essential text pending JS hydration.
- No scroll-jacking, giant cursor, text scramble, parallax on everything, sticky pinned mega-timelines, flashing pulse, particle rain, perpetual infinite animation behind reading content.
- Avoid hydration mismatch by confining animation to client components without random SSR values.

## 10. Accessibility, SEO & content
- Semantic `main`, `nav`, `header`, `footer`; skip link; visible focus rings; one H1 per page; image alt; correct labels; aria-live for async feedback; body text >= 14px.
- Text contrast AA; keyboard accessible tab/accordion/menus; modal focus behavior tested.
- Core Web Vitals target aspirational: LCP <2.5s, CLS <0.1, INP <200ms on representative devices; measure before claiming achieved.
- Meta title format `Halaman | Kodeluma`, OG public pages, canonical domain configured only after deployment; non-index admin/dashboard; sitemap published pages.
- Content instructions: Bahasa Indonesia mudah; hindari kalimat produk yang hiperbolis, angka pengguna palsu, perusahaan logo palsu, sertifikat 'diakui industri' tanpa bukti.

## 11. Design QA visual checklist
- [ ] Logo memiliki padding dan ukuran konsisten.
- [ ] Semua CTA primary memakai style yang identik di landing/dashboard/forms.
- [ ] Semua card radius 16px, border 1px, shadow sangat halus.
- [ ] Tidak ada emoji dekoratif dalam UI, neon/gradient ganas, font acak, dan blur-heavy.
- [ ] Empty/loading/error state ditentukan dan dirender secara konsisten.
- [ ] Hero di 1440px dan 390px masih terbaca tanpa clipping.
- [ ] Navbar, sidebar, footer, spacing, button, focus ring sama di seluruh route.
- [ ] Animasi sepenuhnya mati/reduced saat user memilih reduced motion.
- [ ] Bootstrap grid/classes nyata terlihat dalam implementation.
- [ ] UI tidak menampilkan data dummy sebagai data produksi.

## 12. UI copybank
| Kebutuhan | Copy final |
|---|---|
| Hero CTA | `Mulai Belajar Gratis` |
| Secondary CTA | `Jelajahi Kelas` |
| Course empty | `Belum ada kelas yang cocok. Coba kata kunci lain.` |
| Progress empty | `Perjalanan coding-mu dimulai di sini.` |
| Login | `Selamat datang kembali.` |
| Signup | `Buat akun, mulai dari nol.` |
| Quiz success | `Bagus! Kamu menyelesaikan latihan ini.` |
| Quiz retry | `Belum tepat. Coba pelajari kembali materinya.` |
| Submit success | `Proyekmu berhasil dikirim.` |
| Certificate locked | `Selesaikan semua pelajaran dan evaluasi untuk membuka sertifikat.` |
| Fatal error | `Terjadi kendala. Coba lagi beberapa saat.` |
| Admin empty | `Belum ada data untuk ditampilkan.` |

**Setiap perubahan desain harus mengubah token/dokumen terlebih dahulu** agar AI dan developer lain tidak mengarang nilai berbeda.
