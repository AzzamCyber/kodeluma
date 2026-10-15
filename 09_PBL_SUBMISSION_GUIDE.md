# PBL SUBMISSION GUIDE & PRESENTATION OUTLINE

## PDF task requirements (topic 19)
Source: attached `Tugas PBL - Workshop Desain Web.pdf` (5 pages). Site built with **Bootstrap**. Topic 19 user: tutorial coding, practice projects, discussion forum, certificate; admin: tutorial/project management, learner progress report, user management. PDF requires: **proposal PPT**, **hosted demo + final PPT**, and **one DOCX** compilation of practical reports and PBL report with theory, source code, screenshots, explanation. It shows a deadline **3 December 2025**; as of current project planning in 2026 this may be historical—verify current lecturer deadline.

## Proposal PPT (recommend 9 slides)
1. Cover: `KODELUMA — Platform Belajar Coding untuk Pemula Berbasis Web` / `by Azzam Codex` / team / NRP / course.
2. Pendahuluan: tantangan pemula belajar coding, kebutuhan materi bertahap.
3. Tujuan dan manfaat: struktur belajar, latihan, forum, sertifikat.
4. Target pengguna: guest/student/admin.
5. Fitur sisi user: katalog, tutorial, project, forum, progress, cert.
6. Fitur sisi admin: kelola konten/proyek/pengguna, laporan progress, moderation.
7. Arsitektur: Next.js+React+Bootstrap+Upstash Redis, deployment.
8. Rancangan layar: landing/course/lesson/dashboard dan admin.
9. Tahapan pelaksanaan + penutup.

## Demo PPT (recommend 10 slides)
1. Cover & tujuan.
2. Masalah yang dijawab.
3. Stack & alasan Bootstrap.
4. Database Redis-only + Next.js server API.
5. Landing, katalog, course detail screenshot.
6. Demo belajar, latihan, progress screenshot.
7. Forum, proyek, sertifikat screenshot.
8. Admin content CRUD.
9. Admin laporan progress & moderasi.
10. Hasil pengujian, URL live, kesimpulan.

## DOCX laporan (outline; future authoring)
- Cover dengan identitas sesuai arahan dosen.
- Daftar isi.
- Praktikum-praktikum (sesuai modul yang benar), masing-masing: dasar teori, kode percobaan, hasil, penjelasan, tugas.
- PBL: Pendahuluan, definisi sistem dan pentingnya dibuat, tujuan, analisis kebutuhan, rancangan layout user/admin, arsitektur, database Redis, penjelasan setiap fitur dengan potongan kode dan screenshot hasil, pengujian, kesimpulan, daftar pustaka.
- Jangan menggunakan placeholder screenshot sebagai bukti akhir; ambil foto layar hasil implementasi sendiri.
- PDF tugas meminta upload ke Google Drive folder NRP-Nama; konfirmasi folder kelas dan deadline terbaru sebelum upload.

## Matrix traceability
| Persyaratan dosen | Halaman/Implementasi | Bukti yang perlu diambil |
|---|---|---|
| Bootstrap | `layout.tsx` + `.container/.row/.col/.btn/.form-*` | code snippet + responsive screenshot |
| User tutorial coding | `/courses` and `/learn/...` | course listing + lesson reader |
| User practice project | `/projects` and submission form | project brief + submitted status |
| User discussion forum | `/forum` | thread + reply |
| User certificate | `/certificates`, `/verify/...` | eligible issued cert + verification |
| Admin tutorials | `/admin/courses` | CRUD and published result |
| Admin projects | `/admin/projects`, `/admin/submissions` | CRUD + review |
| Admin progress report | `/admin/progress` | progress stats based on real user |
| Admin users | `/admin/users` | list/suspend screen |
| Online hosting | Vercel deployed subdomain | live URL & page displayed |
| Proposal PPT | outline above | slide deck |
| Report DOCX | outline above | final report docx |

## Suggested title for academia
**Perancangan dan Implementasi Kodeluma: Platform Pembelajaran Coding untuk Pemula Berbasis Web Menggunakan Next.js, Bootstrap, dan Redis**

## Note on accurate reporting
Jangan menyatakan aplikasi memakai `GSAP 4` bila hanya menggunakan GSAP 3 yang tersedia saat instalasi. Jelaskan Redis sebagai **database**, bukan seolah-olah Redis server aplikasi. Jelaskan backend memakai Next.js Route Handlers/Server Functions dan jelaskan fitur realistis yang telah benar-benar dibangun.
