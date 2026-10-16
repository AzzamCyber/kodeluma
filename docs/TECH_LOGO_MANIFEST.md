# TECH LOGO MANIFEST — KODELUMA 3.0

**Tanggal Verifikasi:** 15 Oktober 2026  
**Status:** 18 logo vendor Devicon asli diunduh lokal ke `public/tech/` dan 4 pictogram topik studi di `public/topics/`.  
**Kebijakan:** Merek dagang tetap milik masing-masing pemilik hak cipta. Tidak ada logo generik buatan yang diklaim sebagai logo resmi vendor.

---

## 1. Daftar Logo Vendor Resmi (`kind: brand-logo`)

| Slug | Nama Tampilan | Sumber Asli | Upstream Asset Path | Berkas Lokal | Status |
|---|---|---|---|---|:---:|
| `html5` | HTML5 | Devicon / W3C | `icons/html5/html5-original.svg` | `/tech/html5.svg` | **VERIFIED (200 OK)** |
| `css3` | CSS3 | Devicon / W3C | `icons/css3/css3-original.svg` | `/tech/css3.svg` | **VERIFIED (200 OK)** |
| `javascript` | JavaScript | Devicon / JS Community | `icons/javascript/javascript-original.svg` | `/tech/javascript.svg` | **VERIFIED (200 OK)** |
| `typescript` | TypeScript | Devicon / Microsoft | `icons/typescript/typescript-original.svg` | `/tech/typescript.svg` | **VERIFIED (200 OK)** |
| `python` | Python | Devicon / PSF | `icons/python/python-original.svg` | `/tech/python.svg` | **VERIFIED (200 OK)** |
| `react` | React | Devicon / Meta Open Source | `icons/react/react-original.svg` | `/tech/react.svg` | **VERIFIED (200 OK)** |
| `nextjs` | Next.js | Devicon / Vercel | `icons/nextjs/nextjs-original.svg` | `/tech/nextjs.svg` | **VERIFIED (200 OK)** |
| `bootstrap` | Bootstrap | Devicon / Bootstrap Team | `icons/bootstrap/bootstrap-original.svg` | `/tech/bootstrap.svg` | **VERIFIED (200 OK)** |
| `git` | Git | Devicon / SFC | `icons/git/git-original.svg` | `/tech/git.svg` | **VERIFIED (200 OK)** |
| `redis` | Redis | Devicon / Redis Ltd | `icons/redis/redis-original.svg` | `/tech/redis.svg` | **VERIFIED (200 OK)** |
| `docker` | Docker | Devicon / Docker Inc | `icons/docker/docker-original.svg` | `/tech/docker.svg` | **VERIFIED (200 OK)** |
| `postgresql` | PostgreSQL | Devicon / PGDG | `icons/postgresql/postgresql-original.svg` | `/tech/postgresql.svg` | **VERIFIED (200 OK)** |
| `nodejs` | Node.js | Devicon / OpenJS | `icons/nodejs/nodejs-original.svg` | `/tech/nodejs.svg` | **VERIFIED (200 OK)** |
| `cplusplus` | C++ | Devicon / Standard C++ | `icons/cplusplus/cplusplus-original.svg` | `/tech/cplusplus.svg` | **VERIFIED (200 OK)** |
| `java` | Java | Devicon / Oracle | `icons/java/java-original.svg` | `/tech/java.svg` | **VERIFIED (200 OK)** |
| `linux` | Linux | Devicon / Tux Mascot | `icons/linux/linux-original.svg` | `/tech/linux.svg` | **VERIFIED (200 OK)** |
| `vscode` | Visual Studio Code | Devicon / Microsoft | `icons/vscode/vscode-original.svg` | `/tech/vscode.svg` | **VERIFIED (200 OK)** |
| `figma` | Figma | Devicon / Figma Inc | `icons/figma/figma-original.svg` | `/tech/figma.svg` | **VERIFIED (200 OK)** |

---

## 2. Daftar Pictogram Topik Studi Generik (`kind: topic-icon`)

Untuk topik studi umum yang bukan merupakan merek dagang korporasi tunggal, digunakan pictogram resmi standar:

| Slug | Nama Tampilan | Sumber | Berkas Lokal | Alasan Klasifikasi Topic-Icon | Status |
|---|---|---|---|---|:---:|
| `sql` | SQL Database | Lucide Pictogram | `/topics/sql.svg` | Standar query relasional (ANSI/ISO), bukan vendor tunggal | **VERIFIED (200 OK)** |
| `algorithms` | Algoritma & Struktur Data | Lucide Pictogram | `/topics/algorithms.svg` | Konsep fundamental ilmu komputer | **VERIFIED (200 OK)** |
| `system-design`| Arsitektur Sistem | Lucide Pictogram | `/topics/system-design.svg` | Disiplin rekayasa sistem terdistribusi | **VERIFIED (200 OK)** |
| `cybersecurity`| Keamanan Siber | Lucide Pictogram | `/topics/cybersecurity.svg` | Praktik keamanan sistem dan jaringan | **VERIFIED (200 OK)** |

---

## 3. Komponen Registry

Implementasi TypeScript tersedia di [`src/components/ui/TechLogo.tsx`](file:///c:/Users/ASUS/OneDrive/Documents/PROJECT%20AZZAM%20CODEX/KodeLuma/src/components/ui/TechLogo.tsx), mengikat setiap logo dengan ukuran proporsional (container 52x52, logo 40x40), teks `alt` deskriptif, dan latar belakang kontras tinggi.
