# ARCHITECTURAL DECISIONS (ADR) — KODELUMA ADVANCED

## ADR-01: Client-Side Iframe Sandbox untuk Code Lab
- **Konteks:** Siswa butuh mencoba kode HTML, CSS, dan JavaScript secara interaktif di browser (ala W3Schools / CodePen).
- **Keputusan:** Preview dirender ke dalam `<iframe>` dengan atribut `sandbox="allow-scripts"`.
- **Rasional:** Tidak menyertakan `allow-same-origin` menjamin kode siswa tidak dapat mengakses `document.cookie`, LocalStorage, atau membuat request seolah-olah berasal dari domain sesi aplikasi Kodeluma.

## ADR-02: Guided Terminal Menggunakan Virtual File System In-Memory
- **Konteks:** Pembelajaran CLI dan Git untuk pemula harus aman dan tidak boleh menjalankan command pada host server Vercel/Next.js.
- **Keputusan:** Implementasikan parser CLI edukatif dengan struktur Virtual File System (VFS) berbasis pohon node in-memory.
- **Rasional:** Menyediakan pengalaman command line realistis (`pwd`, `ls`, `mkdir`, `cd`, `cat`, `touch`, `echo`, `rm`, `git init/status/add/commit/log`) dengan umpan balik instan, bebas risiko keamanan, dan dapat diverifikasi oleh unit test.

## ADR-03: XP Ledger Idempoten di Redis
- **Konteks:** Sistem quest memberikan XP sebagai penghargaan belajar. Diperlukan pencegahan kecurangan (anti-cheat) dari request ganda/replay.
- **Keputusan:** Kunci reward diproteksi menggunakan format idempoten `kl:v1:quest:rewarded:{userId}:{questId}` via Redis `SET NX`.
- **Rasional:** XP hanya dapat diklaim tepat 1 kali per quest per siswa.

## ADR-04: Animasi Lottie lokal untuk polish UI
- **Konteks:** Player Lottie sudah ada, tetapi belum dipakai dan direktori aset animasi kosong.
- **Keputusan:** Buat dua animasi JSON Lottie orisinal dengan warna token Kodeluma: tanda centang proses belajar pada hero dan tiga langkah belajar pada halaman autentikasi desktop. Ilustrasi editor HTML/CSS pada hero tetap menjadi konten utama.
- **Rasional:** Aset lokal tidak bergantung pada tautan pihak ketiga atau lisensi yang belum diverifikasi. Fallback statis dipakai saat reduced motion atau pemuatan gagal. GSAP hanya menggerakkan kontainer hero; Lottie menggerakkan canvas di dalamnya, sehingga keduanya tidak menguasai properti elemen yang sama.
