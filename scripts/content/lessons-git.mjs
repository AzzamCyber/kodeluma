// lessons-git.mjs
// 6 Comprehensive W3Schools/MDN-grade lessons for Git & Kolaborasi GitHub Profesional (course-git-17)

export const GIT_LESSONS = [
  {
    id: "lesson-git-01",
    courseId: "course-git-17",
    slug: "fondasi-version-control-tiga-area-git",
    title: "1. Fondasi Version Control System: Tiga Area Utama Git",
    summary: "Pahami perbedaan Working Tree, Staging Area (Index), dan Git Repository lokal secara visual.",
    order: 1,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 1. Fondasi Version Control System: Tiga Area Utama Git

**Git** adalah sistem kendali versi terdistribusi (*Distributed Version Control System* / DVCS) yang diciptakan oleh Linus Torvalds. Git memungkinkan pelacakan riwayat perubahan kode sumber, kolaborasi tim tanpa tumpang tindih, dan kemampuan mengembalikan berkas ke versi masa lalu jika terjadi kesalahan fatal.

---

## Tiga Arsitektur Ruang Kerja Git

\`\`\`text
[ 1. Working Directory ] --(git add)--> [ 2. Staging Area ] --(git commit)--> [ 3. Git Repository (.git) ]
  (File yang sedang diedit)                (File siap dicatat)                   (Riwayat permanen komit)
\`\`\`

1. **Working Directory (Pohon Kerja)**: Tempat berkas nyata berada di folder komputer Anda saat Anda mengetik kode.
2. **Staging Area (Index)**: Area persiapan tempat Anda memilih file mana saja yang ingin disertakan ke dalam rekam jejak (*snapshot*) berikutnya.
3. **Repository (.git)**: Basis data internal Git tempat seluruh rekam jejak commit tersimpan secara aman dan permanen dengan checksum hash SHA-1/SHA-256.

---

## Perintah Dasar Memulai:

\`\`\`bash
# Inisialisasi repositori baru di folder saat ini:
git init

# Konfigurasi identitas developer:
git config --global user.name "Azzam Codex"
git config --global user.email "azzam@kodeluma.dev"
\`\`\`
`
  },
  {
    id: "lesson-git-02",
    courseId: "course-git-17",
    slug: "siklus-hidup-file-staging-commit",
    title: "2. Siklus Hidup File: Untracked, Staged, & Best Practice Commit",
    summary: "Kuasai perintah git status, git add, git diff, dan cara menulis pesan commit profesional.",
    order: 2,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 2. Siklus Hidup File: Untracked, Staged, & Best Practice Commit

Setiap berkas di repositori Git memiliki status tertentu: **Untracked** (belum dilacak), **Modified** (diubah), **Staged** (siap dicatat), atau **Unmodified** (sudah tersimpan di commit terakhir).

---

## 1. Memeriksa Status & Mendaftarkan Perubahan

\`\`\`bash
# 1. Cek status berkas:
git status

# 2. Daftarkan file tertentu ke Staging Area:
git add index.html style.css

# 3. Atau daftarkan seluruh perubahan di direktori:
git add .
\`\`\`

---

## 2. Membuat Commit & Format Pesan Profesional

Sebuah commit adalah *snapshot* kondisi proyek pada titik waktu tertentu. Gunakan format **Conventional Commits** standar industri:

\`\`\`bash
# Format: <tipe>(cakupan): <deskripsi singkat>
git commit -m "feat(auth): tambahkan verifikasi token JWT pada rute login"
\`\`\`

### Tipe-Tipe Commit Populer:
- **\`feat\`**: Menambahkan fitur baru.
- **\`fix\`**: Memperbaiki bug.
- **\`docs\`**: Perubahan dokumentasi.
- **\`refactor\`**: Perapian kode tanpa mengubah fungsionalitas.
- **\`test\`**: Menambahkan unit test.
`
  },
  {
    id: "lesson-git-03",
    courseId: "course-git-17",
    slug: "branching-percabangan-fitur-terisolasi",
    title: "3. Branching: Bekerja pada Percabangan Fitur Terisolasi",
    summary: "Buat branch baru untuk eksperimen dan fitur tanpa merusak kode utama di branch main.",
    order: 3,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 3. Branching: Bekerja pada Percabangan Fitur Terisolasi

**Branch** (cabang) memungkinkan Anda memisahkan alur kerja utama (*main branch*) untuk mengerjakan fitur baru atau eksperimen tanpa takut merusak kode produksi yang sedang berjalan.

---

## Perintah Mengelola Branch:

\`\`\`bash
# 1. Melihat daftar seluruh branch lokal:
git branch

# 2. Membuat sekaligus berpindah ke branch baru:
git switch -c feat/halaman-katalog
# Atau dengan perintah klasik:
git checkout -b feat/halaman-katalog

# 3. Berpindah kembali ke branch utama:
git switch main

# 4. Menghapus branch lokal yang sudah digabung:
git branch -d feat/halaman-katalog
\`\`\`
`
  },
  {
    id: "lesson-git-04",
    courseId: "course-git-17",
    slug: "merging-dan-resolusi-merge-conflict",
    title: "4. Merging & Resolusi Merge Conflict dengan Tenang",
    summary: "Gabungkan cabang fitur ke branch utama dan pahami cara menyelesaikan tanda konflik <<<<<<< HEAD.",
    order: 4,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 4. Merging & Resolusi Merge Conflict dengan Tenang

Ketika fitur yang dikerjakan di branch selesai dan diuji, saatnya menggabungkannya (*merge*) kembali ke branch \`main\`.

---

## Alur Penggabungan (Merging)

\`\`\`bash
# 1. Pastikan Anda berada di branch tujuan (misal: main)
git switch main

# 2. Gabungkan branch fitur:
git merge feat/halaman-katalog
\`\`\`

---

## Apa itu Merge Conflict?

Konflik terjadi jika dua developer mengedit **baris yang sama** pada file yang sama dengan isi yang berbeda. Git akan menghentikan proses merge dan menandai bagian yang bermasalah:

\`\`\`text
<<<<<<< HEAD
<h1>Selamat Datang di KodeLuma Platform</h1>
=======
<h1>Belajar Pemrograman Modern di KodeLuma</h1>
>>>>>>> feat/judul-baru
\`\`\`

### Langkah Menyelesaikan Konflik:
1. Buka file di VS Code atau editor kode.
2. Tentukan teks mana yang ingin dipertahankan (apakah versi HEAD, versi fitur, atau kombinasi keduanya).
3. Hapus penanda \`<<<<<<<\`, \`=======\`, dan \`>>>>>>>\`.
4. Simpan file, lalu jalankan:
   \`\`\`bash
   git add nama_file_konflik.html
   git commit -m "fix: selesaikan merge conflict pada judul halaman utama"
   \`\`\`
`
  },
  {
    id: "lesson-git-05",
    courseId: "course-git-17",
    slug: "remote-repository-github-push-pull",
    title: "5. Remote Repository: Menghubungkan Git Lokal ke GitHub",
    summary: "Sinkronkan repositori lokal ke cloud GitHub dengan git remote, push, fetch, dan pull.",
    order: 5,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 5. Remote Repository: Menghubungkan Git Lokal ke GitHub

**GitHub** adalah platform hosting repositori Git berbasis cloud yang memfasilitasi kolaborasi tim di seluruh dunia.

---

## Menghubungkan ke Repositori Remote

\`\`\`bash
# 1. Tambahkan remote server bernama 'origin':
git remote add origin https://github.com/username/kodeluma-project.git

# 2. Verifikasi alamat remote:
git remote -v

# 3. Dorong (Push) branch main untuk pertama kali:
git push -u origin main

# 4. Menarik perubahan terbaru dari rekan tim di GitHub:
git pull origin main
\`\`\`

> **Perbedaan \`git fetch\` vs \`git pull\`:**
> - \`git fetch\`: Mengunduh riwayat perubahan terbaru dari server tetapi belum menggabungkannya ke file lokal Anda.
> - \`git pull\`: Mengunduh sekaligus otomatis melakukan \`git merge\` ke branch lokal yang aktif.
`
  },
  {
    id: "lesson-git-06",
    courseId: "course-git-17",
    slug: "kolaborasi-pull-request-dan-code-review",
    title: "6. Alur Kerja Pull Request & Code Review Standar Industri",
    summary: "Pelajari siklus hidup Pull Request (PR), review kode rekan tim, dan strategi merge di GitHub.",
    order: 6,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 6. Alur Kerja Pull Request & Code Review Standar Industri

Dalam perusahaan teknologi modern, tidak ada developer yang langsung melakukan *push* sembarangan ke branch \`main\`. Semua perubahan wajib melalui proses **Pull Request (PR)**.

---

## Siklus Hidup Alur Kerja Git (Git Flow):
1. **Fork/Clone**: Mengunduh repositori proyek ke lokal.
2. **Branch**: Membuat cabang baru untuk tiket tugas: \`feat/fitur-baru\`.
3. **Commit & Push**: Mengunggah perubahan ke remote branch: \`git push origin feat/fitur-baru\`.
4. **Buka Pull Request**: Menulis deskripsi perubahan, checklist pengujian, dan screenshot perbaikan.
5. **Code Review**: Rekan tim memeriksa kualitas kode, standar keamanan, dan memberi komentar revisi.
6. **Merge**: Setelah disetujui (Approved) dan lolos automated CI/CD tests, PR di-merge ke branch utama!
`
  }
];
