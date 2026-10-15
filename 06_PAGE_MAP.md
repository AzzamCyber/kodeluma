# PAGE MAP, WIREFRAMES & USER FLOWS

## 1. Route tree
```text
/                            landing
/courses                     course catalog
/courses/[slug]              course detail
/learning-paths              beginner learning roadmap
/about                       about Kodeluma
/login                       login
/register                    register
/dashboard                   student dashboard [student]
/learn/[courseSlug]/[lessonSlug] lesson player [enrolled]
/projects                    projects listing [public preview]
/projects/[slug]             project brief / submission [student for submit]
/forum                       forum threads [public read]
/forum/[id]                  thread discussion [public read, student reply]
/certificates                my certificates [student]
/verify/[code]               public certificate verification
/profile                     my profile [student]
/admin                       admin overview [admin]
/admin/courses               course management [admin]
/admin/courses/new           authoring [admin]
/admin/courses/[id]/edit     authoring [admin]
/admin/projects              project management [admin]
/admin/submissions           submitted work reviews [admin]
/admin/forum                 forum moderation [admin]
/admin/users                 user management [admin]
/admin/progress              progress report [admin]
/admin/certificates          certificate revocation [admin]
/privacy                     legal/privacy content
/terms                       usage terms content
```

## 2. Landing page block anatomy
```text
+--------------------------------------------------------------------------------+
| KODELUMA                         Kelas   Alur Belajar  Tentang      Masuk   CTA |
+--------------------------------------------------------------------------------+
| [PLATFORM BELAJAR CODING]            |   +-------------------------------+    |
| Belajar coding, mulai dari           |   |  HTML Dasar           3/6  50% |    |
| langkah pertamamu.                   |   |-------------------------------|    |
| Deskripsi maksimal 2 baris.          |   |  <h1>Hello World</h1>          |    |
| [Mulai Belajar] [Jelajahi Kelas]     |   |  Code Preview / progress      |    |
| Materi bertahap · Praktik nyata      |   +-------------------------------+    |
+--------------------------------------------------------------------------------+
|                         KELAS PILIHAN UNTUK PEMULA                             |
|    [ HTML Card ]                [ CSS Card ]              [ JS Card ]           |
+--------------------------------------------------------------------------------+
|                        BELAJAR DALAM 3 LANGKAH                                |
|          01 Pilih materi    02 Latihan     03 Bangun proyek                    |
+--------------------------------------------------------------------------------+
|                         LEARNING PATH PREVIEW                                 |
|       [HTML] ------ [CSS] ------ [JavaScript]                               |
+--------------------------------------------------------------------------------+
|                          FAQ / FINAL CTA / FOOTER                             |
+--------------------------------------------------------------------------------+
```

## 3. Dashboard learner desktop
```text
+----------------------+---------------------------------------------------------+
| Logo                 | Breadcrumb                       Avatar + menu           |
| Dashboard [active]   | Halo, [Nama]! Kembali belajar yuk.                     |
| Jelajahi Kelas       | [Lanjutkan HTML Dasar · 45% · CTA]                       |
| Proyek               | [Kelas Diikuti]   [Pelajaran Selesai]   [Sertifikat]     |
| Diskusi              | Kelas yang sedang dipelajari [2 cards]                  |
| Sertifikat           | Aktivitas terbaru (actual data)                         |
| Profil               |                                                         |
+----------------------+---------------------------------------------------------+
```
Mobile: bottom fixed nav **tidak wajib**; prefer topbar + side drawer untuk lebih sederhana. Bar actions pastikan tidak tertutup keyboard ponsel.

## 4. Lesson reader desktop
```text
+--------------------------------------------------------------------------+
| < Kembali ke Kursus                 HTML Dasar                    2 dari 6 |
+----------------------+--------------------------------------+----------------+
| Daftar Materi        | <h1>Struktur Dasar HTML</h1>         | Catatan [V2]   |
|  ✓ Pendahuluan       | intro teks + code demo              | Tips belajar   |
|  > Struktur HTML     | <code> ... </code>                  |                |
|  ○ Tag umum          | contoh & penjelasan                |                |
|  ○ Form sederhana    | latihan/checkpoint                 |                |
+----------------------+--------------------------------------+----------------+
|                           [Sebelumnya] [Tandai Selesai & Lanjut]           |
+--------------------------------------------------------------------------+
```
Mobile: TOC sebagai accordion/drawer; main full width; bottom CTA tidak menutupi footer/editor.

## 5. Admin dashboard desktop
```text
+----------------------+---------------------------------------------------------+
| Logo admin           | Ringkasan                                           User |
| Ringkasan [active]   | [Pengguna] [Kursus] [Enrollment] [Selesai]              |
| Kursus               | Kursus terbaru: [table title, status, students, actions]|
| Pelajaran            | Project perlu review: [pending list]                  |
| Proyek               | Recent moderated threads: [list]                      |
| Forum                |                                                         |
| Pengguna             |                                                         |
| Laporan              |                                                         |
+----------------------+---------------------------------------------------------+
```
CRUD layout: header+CTA right, filter controls, data table (scroll mobile), pagination; form group 1 or 2 columns max, breadcrumb, sticky save bar optional. Jangan membuat desain form yang berubah-ubah antarmodul.

## 6. User journeys and states
| Flow | Steps | Empty/Error/Success |
|---|---|---|
| A | public landing -> catalog -> course detail -> signup -> enroll -> dashboard | no course, invalid signup, enroll done |
| B | dashboard -> lesson -> mark complete -> dashboard | no lesson, write failure, complete success |
| C | course -> quiz -> score -> project submission -> admin review | quiz failed, invalid URL, pending/revision/approved |
| D | forum -> thread create -> reply -> admin moderation | empty threads, rate limit, hidden thread |
| E | full course -> certificate -> public verify | requirements missing, valid/revoked/unknown code |
| F | admin login -> create draft -> add lessons -> publish -> catalog | invalid slug, missing lesson, published success |

## 7. Screens to capture for PBL proposal and report
1. Desktop landing hero and public course catalog.
2. Course detail with lesson curriculum.
3. Register/Login.
4. Learner dashboard with persisted progress.
5. Lesson player and completed state.
6. Project submission with pending/approved status.
7. Forum thread and reply.
8. Certificate and verification.
9. Admin CRUD course/lesson/project.
10. Admin progress report/users/moderation.
11. Mobile responsive landing + dashboard.

## 8. Interaction specifics
- CTA after signup should return to originally selected course only through verified internal route `returnTo`; no open redirects.
- Publish course requires title, description, level, at least 1 published required lesson, valid slug and cover; show inline validation and summary errors.
- Forum reply updates list count and date via server data, not optimistic-only with lost persistence.
- User cannot see a hidden thread via direct URL; moderators see explicit `Disembunyikan` status.
- Cert verification gracefully handles invalid/revoked codes without exposing email or sensitive identity fields.
