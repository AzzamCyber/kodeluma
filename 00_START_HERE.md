# KODELUMA — BLUEPRINT PACK v1.0

**Produk:** Kodeluma by Azzam Codex — Platform Belajar Coding untuk Pemula.  
**Proyek akademik:** PBL Workshop Desain Web (Topik No. 19) — **Bootstrap wajib**.  
**Subdomain rencana:** `kodeluma.azzamcodex.dev`.  
**Tech stack:** Next.js, React, TypeScript, Bootstrap 5, React Bootstrap, Motion for React, GSAP 3, Upstash Redis, Vercel.  
**Status paket:** spesifikasi + panduan + aset logo, **bukan aplikasi production-ready yang telah diimplementasikan**.

## Mulai dari sini
1. Baca `01_MASTER_PROMPT.md`, lalu masukkan ke coding agent beserta file lain.
2. File `02_DESIGN.md` adalah sumber kebenaran desain; gunakan `assets/design-tokens.css`.
3. File `03_PRD_FEATURES.md` mencatat cakupan user/admin dan acceptance tests.
4. `04_ARCHITECTURE_REDIS.md` mengunci Redis-only dan keamanan.
5. `05_API_CONTRACTS.md` berisi kontrak endpoint & response.
6. `06_PAGE_MAP.md` berisi route dan wireframe tekstual.
7. `07_IMPLEMENTATION_PLAN.md` membagi kerja menjadi fase-fase yang dapat ditest.
8. `08_QA_SECURITY.md` berisi checklist QA, a11y, dan keamanan.
9. `09_PBL_SUBMISSION_GUIDE.md` membantu proposal/demo/laporan dosen.
10. `10_AGENT_RULES.md` bisa disalin sebagai `AGENTS.md` ke root proyek agar AI coding konsisten.
11. `11_DEMO_CONTENT.md` menyediakan konten seed agar demo tidak kosong.
12. `12_BRAND_GUIDELINES.md` menetapkan pemakaian aset.
13. `.env.example` menunjukkan variabel yang nanti perlu dibuat di Vercel.

## Design assets
- `assets/kodeluma-logo-horizontal.png`: transparent logo.
- `assets/kodeluma-logo-horizontal.webp`: optimized alternative.
- `assets/kodeluma-icon.png`: square transparent logomark.
- `assets/kodeluma-favicon.png`: tiny app/fav icon asset.
- `assets/design-tokens.css`: design CSS vars.
- `preview/landing-preview.html`: **preview statis** halaman marketing; bukan website full-stack.

## One-line project prompt
**Bangun Kodeluma sesuai seluruh spesifikasi paket ini. Jangan mengganti Bootstrap/Redis, jangan mengarang desain, jangan membuat data palsu atau UI palsu; kerjakan fase demi fase mulai dari foundation hingga deployed site, lalu uji tiap user/admin flow.**

## Catatan kritis
- Redis ialah database, **backend aplikasi tetap Next.js**.
- Redis-only tidak memberikan keunggulan SQL join/search; indeks SET/ZSET dan transaksi perlu diimplementasikan dengan benar.
- Auth custom adalah pekerjaan keamanan sungguhan, jangan sekadar token localStorage.
- Code runner server-side untuk kode pengguna **di luar MVP** karena risiko remote code execution.
- GSAP dalam rekomendasi ini versi **3** (jangan otomatis memakai 'GSAP 4').
- Subdomain belum dibuat dan deploy belum dilakukan oleh paket ini.
- PDF tugas menyebut deadline 3 Desember 2025; cek tenggat kelas sekarang dengan dosen.
- Nama Kodeluma belum melalui pemeriksaan legal merek menyeluruh.

## Urutan coding singkat
`Foundation -> Redis/Auth -> Content/Progress -> Forum/Certificates/Admin -> Motion/GSAP polish -> QA/Deploy/PBL PPT/DOCX`
