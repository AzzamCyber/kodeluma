# BOOTSTRAP COMPLIANCE REPORT — KODELUMA (PBL TOPIK 19)

**Peran:** Principal Frontend Engineer & QA Evaluator  
**Status:** **LULUS PENUH (FULL PASS)**  
**Mandat:** Framework UI wajib **Bootstrap 5**, dibuktikan melalui dependensi terpasang, impor CSS tunggal, komponen React Bootstrap fungsional, dan kelas grid/utilitas nyata di JSX.

---

## 1. Verifikasi Dependensi & Impor CSS

| Item | Sumber / Konfigurasi | Bukti Nyata di Kode | Status |
|---|---|---|:---:|
| **Paket Bootstrap** | `package.json` | `"bootstrap": "^5.3.3"` | **PASS** |
| **Paket React Bootstrap** | `package.json` | `"react-bootstrap": "^2.10.9"` | **PASS** |
| **Impor Stylesheet Tunggal** | `src/app/globals.css` (Baris 1) | `@import 'bootstrap/dist/css/bootstrap.min.css';` | **PASS** |
| **No Imperative Bootstrap JS Collision** | Seluruh repositori | Tidak ada pemanggilan `new bootstrap.Modal()` / imperative vanilla JS; interaksi dimediasi penuh oleh React Bootstrap state | **PASS** |

---

## 2. Matriks Komponen & Kelas Bootstrap Per Halaman

| Halaman / Fitur | Komponen React Bootstrap | Kelas Grid & Utilitas Bootstrap 5 di JSX |
|---|---|---|
| **Beranda (`/`)** | `Accordion` (FAQ Section) | `container`, `row`, `col-lg-6`, `col-md-6`, `g-4`, `g-5`, `d-flex`, `align-items-center`, `justify-content-between`, `shadow-sm`, `badge`, `rounded-pill` |
| **Katalog Kelas (`/courses`)** | `Container`, `Row`, `Col` | `row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4`, `card`, `card-body`, `badge`, `d-flex` |
| **Detail Kelas (`/courses/[slug]`)** | `Container`, `Row`, `Col`, `Badge` | `col-lg-8`, `col-lg-4`, `card`, `list-group`, `list-group-item`, `btn`, `d-inline-flex` |
| **Code Lab (`/lab`)** | `Nav`, `Tab` | `nav nav-tabs`, `btn-group`, `form-control`, `font-monospace`, `d-flex`, `border-bottom` |
| **Terminal Virtual (`/lab/terminal`)** | `Card` | `card`, `font-monospace`, `p-3`, `bg-dark`, `text-light`, `d-flex`, `align-items-center` |
| **Quest Board (`/quests`)** | `ProgressBar`, `Badge` | `progress`, `progress-bar`, `badge`, `card`, `row g-3`, `d-flex`, `justify-content-between` |
| **Forum Komunitas (`/forum`)** | `Modal` (New Thread), `Form` | `modal`, `modal-dialog`, `modal-content`, `form-control`, `form-label`, `form-select`, `btn-primary` |
| **Login (`/login`)** | `Form` | `input-group`, `input-group-text`, `form-control`, `form-label`, `alert alert-danger`, `btn` |
| **Register (`/register`)** | `Form` | `input-group`, `form-control`, `form-check`, `form-check-input`, `form-check-label`, `btn-primary` |
| **Portal Admin (`/admin/*`)** | `Table`, `Modal`, `Form`, `Badge` | `table-responsive`, `table table-hover`, `modal`, `form-control`, `badge bg-success-subtle`, `badge bg-danger-subtle` |
| **Footer Global** | `Container`, `Row`, `Col` | `container`, `row g-4`, `col-lg-4`, `col-lg-2`, `col-lg-3`, `d-flex`, `list-unstyled` |

---

## 3. Override Tema Bersahabat (`tokens.css`)

Kodeluma menyesuaikan variabel tema Bootstrap tanpa merusak fungsionalitas aslinya:
- `--bs-primary: #2563EB;`
- `--bs-primary-rgb: 37, 99, 235;`
- `--bs-body-color: #1C2D40;`
- `--bs-body-bg: #F8FAFD;`
- `--bs-border-color: #E2E9F1;`
- `--bs-heading-color: #10243A;`

---

## 4. Kesimpulan Evaluasi PBL

Kodeluma **100% memenuhi kriteria PBL Topik 19** dalam penerapan Bootstrap 5. Struktur tampilan tidak dibuat dengan CSS tiruan murni ataupun Tailwind, melainkan berakar langsung pada grid system, responsive utilities, dan komponen native Bootstrap 5.
