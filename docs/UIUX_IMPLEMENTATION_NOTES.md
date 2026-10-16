# UI/UX IMPLEMENTATION NOTES — KODELUMA 3.0

**Proyek:** Kodeluma — Learn. Code. Create. by Azzam Codex  
**Kepatuhan:** Terkunci pada `02_DESIGN.md` dan spesifikasi `13_KODELUMA_UIUX_ALL_IN_ONE.md`.

---

## 1. Token Desain Terkunci (Synchronized Tokens)

Seluruh komponen menggunakan variabel CSS terpusat dari [`src/styles/tokens.css`](file:///c:/Users/ASUS/OneDrive/Documents/PROJECT%20AZZAM%20CODEX/KodeLuma/src/styles/tokens.css):

```css
:root {
  --kl-ink: #10243A;            /* Primary Dark / Heading */
  --kl-primary: #2563EB;        /* Primary Action Blue */
  --kl-primary-hover: #1D4ED8;  /* Action Hover */
  --kl-primary-soft: #EFF5FF;   /* Subtle Blue Background */
  --kl-amber: #F4B544;          /* Restrained Achievement Accent */
  --kl-bg: #F8FAFD;             /* Neutral Canvas Background */
  --kl-surface: #FFFFFF;        /* Card & Modal Surface */
  --kl-surface-soft: #F1F5FA;   /* Secondary Surface */
  --kl-text: #1C2D40;           /* Body Text */
  --kl-muted: #62748A;          /* Secondary Muted Text */
  --kl-border: #E2E9F1;         /* Restrained Border 1px */
  --kl-success: #16805D;        /* Positive Status */
  --kl-warning: #A16207;        /* Attention Status */
  --kl-danger: #C24141;         /* Danger Status */
  --kl-code-bg: #101B2B;        /* Terminal / Code Editor Canvas */
  --kl-code-border: #23364E;    /* Dark Code Border */
}
```

---

## 2. Hirarki Tipografi & Batasan Grid

1. **Tipografi:**
   - **Headings:** `Plus Jakarta Sans` (weights 600, 700, 800) untuk `h1`, `h2`, `h3`, `h4`.
   - **Body & UI Controls:** `Inter` (weights 400, 500, 600) untuk paragraf dan label kontrol form.
   - **Code & Terminal:** `JetBrains Mono` untuk block sintaks dan Guided CLI.
2. **Skala Spasi & Radius:**
   - Radius Card: `16px` (`--kl-radius-lg`).
   - Radius Button & Form Input: `8px–12px` (`--kl-radius-sm` – `--kl-radius-md`).
   - Lebar Kontainer Maksimum: `1200px`.
   - Ritme Vertikal Bagian: Desktop `80px–96px`, Tablet `56px–72px`, Mobile `48px–56px`.

---

## 3. Komponen Utama Baru (Additive Expansion)

1. **`TechLogo` & `TechLogoGallery`:**
   - Memetakan 18 teknologi dan 4 topik studi ke SVG lokal di `public/tech/` dan `public/topics/`.
   - Menghindari ikon emoji atau ikon Lucide generik untuk identitas vendor resmi.
   - Menyajikan badge status jujur: `Tersedia` untuk modul yang aktif di sistem, dan `Segera Hadir` untuk materi lanjutan tanpa memalsukan metrik pengguna.
2. **`RealLearningFeatures`:**
   - Menampilkan 6 pilar pembelajaran Kodeluma: Materi Ringkas, Code Lab Interaktif, Guided CLI Terminal, Quest & Tantangan XP, Proyek Praktik Nyata, dan Sertifikat Terverifikasi.
3. **`KodelumaLottie` Player:**
   - Menggunakan `@lottiefiles/dotlottie-react` resmi.
   - Dilengkapi fallback terdesain jika binary `.lottie` belum tersedia atau saat pengguna mengaktifkan mode `prefers-reduced-motion: reduce`.
4. **Rich Navy Global Footer:**
   - Latar belakang navy `#10243A` dengan kontras WCAG AA yang teruji.
   - 4 kolom informasi yang memuat navigasi jelajahi, kurikulum materi, serta bantuan & legalitas resmi.
