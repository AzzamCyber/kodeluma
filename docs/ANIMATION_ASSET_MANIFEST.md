# ANIMATION ASSET MANIFEST — KODELUMA 3.0

**Tanggal Verifikasi:** 15 Oktober 2026  
**Status terkini:** Hero memakai versi warna Kodeluma dari `ICON1.json` milik pemilik proyek. Section utama beranda dan halaman publik/pelajar memakai ilustrasi vektor lokal sesuai konteks. Player dimuat saat dibutuhkan, ilustrasi di bawah lipatan halaman baru diputar ketika mendekati viewport, dan animasi editorial diputar sekali. `KodelumaLottie` menyediakan fallback statis serta menghormati `prefers-reduced-motion`.

| Aset aktif | Penempatan | Isi | Sumber |
|---|---|---|---|
| `/animations/ICON1.json` | Visual utama hero beranda | Ilustrasi kolaborasi coding, 3000 × 3000, 93 frame, tanpa aset eksternal; warna dipetakan ke token Kodeluma | Turunan dari `ICON1.json` milik pemilik proyek |
| `/animations/login-workspace.json` | Login | Editor kode dan ilustrasi akses akun | Dibuat khusus untuk Kodeluma |
| `/animations/register-journey.json` | Register | Profil dan tahapan awal belajar | Dibuat khusus untuk Kodeluma |
| `/animations/learning-roadmap.json` | Header Alur Belajar | Tiga tahap materi yang tersambung | Dibuat khusus untuk Kodeluma |
| `/animations/practice-lab.json` | Fitur belajar beranda, Code Lab | Editor kode dan hasil praktik | Dibuat khusus untuk Kodeluma |
| `/animations/course-stack.json` | Kelas pilihan beranda, katalog | Tumpukan kartu kelas | Dibuat khusus untuk Kodeluma |
| `/animations/technology-grid.json` | Galeri teknologi beranda | Modul teknologi yang terhubung | Dibuat khusus untuk Kodeluma |
| `/animations/learning-steps.json` | Cara belajar beranda, Quest | Tiga tahap materi, praktik, capaian | Dibuat khusus untuk Kodeluma |
| `/animations/community-chat.json` | Tentang, forum | Percakapan pembelajar | Dibuat khusus untuk Kodeluma |
| `/animations/certificate-seal.json` | Sertifikat, verifikasi | Dokumen dan tanda verifikasi | Dibuat khusus untuk Kodeluma |
| `/animations/progress-dashboard.json` | Dasbor, profil | Kemajuan belajar tanpa angka rekaan | Dibuat khusus untuk Kodeluma |
| `/animations/faq-answers.json` | FAQ beranda | Pertanyaan dan jawaban | Dibuat khusus untuk Kodeluma |
| `/animations/project-launch.json` | CTA beranda, proyek | Proyek web dan editor kode | Dibuat khusus untuk Kodeluma |
| `/animations/terminal-console.json` | Terminal virtual | Jendela terminal dan alur Git | Dibuat khusus untuk Kodeluma |

**Catatan:** `ICON1.json` asli di root proyek tetap utuh. `scripts/recolor-icon1.mjs` membuat salinan bertema di `public/animations/`; `scripts/generate-page-animations.mjs` membuat aset vektor editorial. `learning-check.json` dan `learning-path.json` tetap tersimpan sebagai aset lama. Daftar `.lottie` di bawah adalah shortlist lama, bukan aset yang sudah terpasang. Admin, halaman legal, dan pembaca pelajaran sengaja bebas ilustrasi bergerak agar tugas utama tetap cepat dan fokus. Katalog serta halaman pelajar memerlukan Redis aktif untuk pemeriksaan visual lengkap.

---

## 1. Shortlist alternatif yang belum dipasang

| Slot ID | Penempatan UI | Halaman Detail Terverifikasi | Kreator | Lisensi | Path Target Lokal | Fallback Terdesain |
|---|---|---|---|---|---|---|
| `hero-coding` | Landing Hero | [Web Development](https://lottiefiles.com/free-animation/web-development-PLVh6YzYVt) | Stephen John | Lottie Simple License (Free) | `/animations/hero-coding.lottie` | Mockup IDE Monospace interaktif |
| `auth-login` | Panel Kanan Login | [Password Login Security](https://lottiefiles.com/free-animation/password-login-security-Ibhcofs9QI) | Dariush Oskouie | Lottie Simple License (Free) | `/animations/auth-login.lottie` | Ilustrasi Keamanan Kodeluma |
| `auth-learning`| Panel Kanan Register | [Online Learning](https://lottiefiles.com/free-animation/online-learning-DAoqvAAnJE) | Flowrame | Lottie Simple License (Free) | `/animations/auth-learning.lottie` | Diagram Alur Belajar Siswa |
| `quest-success`| Modal Klaim Quest | [Successful Check Confetti](https://lottiefiles.com/free-animation/successful-check-confetti-hALRy5AE2w) | Design | Lottie Simple License (Free) | `/animations/quest-success.lottie` | Badge Centang Sukses Lucide AA |

---

## 2. Arsitektur Komponen `KodelumaLottie`

Komponen implementasi: [`src/components/ui/KodelumaLottie.tsx`](file:///c:/Users/ASUS/OneDrive/Documents/PROJECT%20AZZAM%20CODEX/KodeLuma/src/components/ui/KodelumaLottie.tsx)

```tsx
<KodelumaLottie
  name="hero-icon1"
  src="/animations/ICON1.json"
  fallback={<Code2 />}
  loop={true}
  autoplay={true}
  decorative={true}
/>
```

### Karakteristik Desain:
1. **SSR Safe:** Menjaga siklus hidrasi Next.js App Router dengan penundaan render player hingga `mounted: true`.
2. **Kepatuhan Aksesibilitas:** Mendeteksi `window.matchMedia('(prefers-reduced-motion: reduce)')`. Jika pengguna mengaktifkan pengurangan gerak, animasi dinonaktifkan dan diganti dengan gambar statis.
3. **Pencegahan CLS (Cumulative Layout Shift):** Menggunakan wadah dengan `width`, `height`, dan `minHeight` terkontrol sehingga tidak terjadi pergeseran tata letak saat aset dimuat.
4. **Pencegahan Error Aset:** Jika file lokal gagal dimuat, `onError` menampilkan fallback statis.
5. **Beban ringan:** Player dimuat secara dinamis; aset editorial sekitar 6–13 KB per file, tanpa gambar eksternal, dan diputar sekali ketika terlihat.
