// lessons-linux.mjs
// 6 Comprehensive W3Schools/MDN-grade lessons for Linux Server & Perintah CLI Terminal (course-linux-22)

export const LINUX_LESSONS = [
  {
    id: "lesson-linux-01",
    courseId: "course-linux-22",
    slug: "filosofi-unix-hierarki-filesystem-fhs",
    title: "1. Filosofi Unix & Hierarki Filesystem Linux (FHS)",
    summary: "Pahami prinsip 'Everything is a File' dan fungsi folder inti /etc, /var, /bin, /home, dan /tmp.",
    order: 1,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 1. Filosofi Unix & Hierarki Filesystem Linux (FHS)

**Linux** adalah sistem operasi open source yang menjadi tulang punggung komputasi awan (*cloud computing*), server internet, superkomputer, dan kontainer Docker di seluruh dunia.

---

## Filosofi Utama Unix:
1. **Everything is a file**: Dokumen, folder, port jaringan, harddisk, bahkan memori RAM direpresentasikan sebagai berkas (*file descriptor*).
2. **Kecil, Modular, & Terfokus**: Setiap program CLI dirancang untuk melakukan satu tugas secara sempurna, lalu digabungkan dengan program lain melalui pipa (*pipes* \`|\`).

---

## Struktur Direktori Standar (Filesystem Hierarchy Standard):

| Direktori | Fungsi & Isi Berkas |
| :--- | :--- |
| **\`/bin\` & \`/usr/bin\`** | Program eksekutabel sistem dan aplikasi (ls, grep, node, python) |
| **\`/etc\`** | Berkas konfigurasi sistem global (nginx.conf, redis.conf) |
| **\`/var/log\`** | Berkas log aktivitas sistem dan web server |
| **\`/home\`** | Direktori personal pengguna reguler |
| **\`/tmp\`** | Berkas sementara yang otomatis dibersihkan saat reboot |
| **\`/root\`** | Direktori home milik superuser (root) |
`
  },
  {
    id: "lesson-linux-02",
    courseId: "course-linux-22",
    slug: "perintah-esensial-cli-navigasi-file",
    title: "2. Perintah Esensial CLI: Navigasi, Manipulasi, & Inspeksi",
    summary: "Kuasai perintah wajib terminal: pwd, cd, ls -la, mkdir -p, cp, mv, rm, cat, less, dan head.",
    order: 2,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 2. Perintah Esensial CLI: Navigasi, Manipulasi, & Inspeksi

Tanpa GUI (antarmuka grafis), efisiensi Anda mengoperasikan server Linux ditentukan oleh pemahaman perintah dasar terminal.

---

## 1. Navigasi Direktori
\`\`\`bash
pwd              # Print Working Directory: Mengetahui lokasi folder saat ini
cd /var/www/html # Berpindah ke direktori tertentu
cd ~             # Kembali ke direktori home pengguna
cd ..            # Naik satu tingkat ke folder induk
ls -la           # List berkas lengkap dengan rincian ukuran, tanggal, dan file tersembunyi (.)
\`\`\`

---

## 2. Membuat, Menyalin, & Memindahkan Berkas
\`\`\`bash
mkdir -p proyek/src/lib # Membuat folder bersarang sekaligus
touch config.env        # Membuat berkas kosong baru
cp file.txt backup.txt  # Menyalin berkas
mv file.txt /tmp/       # Memindahkan berkas (atau mengganti nama berkas)
rm -rf folder_sampah    # Menghapus folder beserta seluruh isinya secara rekursif
\`\`\`

---

## 3. Membaca Isi Berkas Cepat
\`\`\`bash
cat server.log        # Mencetak seluruh isi file ke layar
head -n 20 error.log  # Membaca 20 baris pertama
tail -n 20 error.log  # Membaca 20 baris terakhir
tail -f access.log    # Memantau penambahan baris log secara real-time (live streaming)
\`\`\`
`
  },
  {
    id: "lesson-linux-03",
    courseId: "course-linux-22",
    slug: "hak-akses-izin-berkas-chmod-chown",
    title: "3. Hak Akses & Izin Berkas: chmod, chown, & Notasi Oktal",
    summary: "Kendalikan keamanan berkas dengan izin Read, Write, Execute (rwx) untuk User, Group, dan Others.",
    order: 3,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 3. Hak Akses & Izin Berkas: chmod, chown, & Notasi Oktal

Linux adalah sistem operasi multi-user sejati. Setiap berkas dan folder memiliki izin akses yang ketat demi mencegah akses tidak sah.

---

## Membaca Output \`ls -l\`

\`\`\`text
-rwxr-xr--  1 ubuntu devteam  4096 Oct 16 19:00 deploy.sh
\`\`\`
Struktur 10 karakter pertama:
1. \`-\`: Tipe (berkas biasa \`-\` atau direktori \`d\`).
2. \`rwx\`: Hak akses **User / Pemilik** (Read, Write, Execute).
3. \`r-x\`: Hak akses **Group** (Read, Execute).
4. \`r--\`: Hak akses **Others / Publik** (Hanya Read).

---

## Mengubah Hak Akses dengan Nilai Oktal (\`chmod\`):
- **Read (r)** = 4
- **Write (w)** = 2
- **Execute (x)** = 1

\`\`\`bash
# 755: Pemilik bebas (7), Grup & Lainnya hanya baca & eksekusi (5)
chmod 755 deploy.sh

# 600: Hanya pemilik yang bisa baca & tulis (Sangat disarankan untuk SSH Key!)
chmod 600 ~/.ssh/id_rsa

# Mengubah pemilik dan grup berkas:
sudo chown -R www-data:www-data /var/www/html
\`\`\`
`
  },
  {
    id: "lesson-linux-04",
    courseId: "course-linux-22",
    slug: "pipa-i-o-redirection-grep-find",
    title: "4. Aliran Data: Pipes (|), Redirection (< > >>), & Filter grep",
    summary: "Gabungkan perintah kecil menjadi alat analitik bertenaga dengan pipeline data dan pencarian regex.",
    order: 4,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 4. Aliran Data: Pipes (|), Redirection (< > >>), & Filter grep

Salah satu kekuatan super terminal Linux adalah kemampuan menyalurkan output dari satu program sebagai input program berikutnya melalui pipa (**Pipe** \`|\`).

---

## 1. I/O Redirection (\`>\` dan \`>>\`)
- **\`>\` (Overwrite)**: Menimpa isi berkas dengan output perintah.
- **\`>>\` (Append)**: Menambahkan output ke baris paling bawah tanpa menghapus data lama.

\`\`\`bash
echo "Koneksi berhasil" > status.log
echo "Log kedua" >> status.log
\`\`\`

---

## 2. Pipeline dengan \`grep\` dan \`wc\`

\`\`\`bash
# Hitung berapa banyak request error 500 di file log:
cat access.log | grep "HTTP/1.1 500" | wc -l

# Cari proses Node.js yang sedang berjalan dan ambil PID-nya:
ps aux | grep "node" | grep -v "grep"

# Cari berkas berukuran lebih dari 100MB di disk:
find /var -type f -size +100M
\`\`\`
`
  },
  {
    id: "lesson-linux-05",
    courseId: "course-linux-22",
    slug: "manajemen-proses-systemd-systemctl-journalctl",
    title: "5. Manajemen Proses Backend: systemd, systemctl, & journalctl",
    summary: "Jalankan API backend sebagai background daemon otomatis yang restart sendiri saat crash via systemd service.",
    order: 5,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 5. Manajemen Proses Backend: systemd, systemctl, & journalctl

Di server produksi, Anda tidak bisa membiarkan aplikasi backend berjalan di jendela terminal aktif yang akan mati jika Anda logout. Backend harus dikelola oleh **systemd**.

---

## Membuat Service File: \`/etc/systemd/system/kodeluma.service\`

\`\`\`ini
[Unit]
Description=KodeLuma Backend Node.js API Service
After=network.target redis.service

[Service]
Type=simple
User=ubuntu
WorkingDirectory=/var/www/kodeluma
ExecStart=/usr/bin/node src/server.js
Restart=always
RestartSec=5
Environment=NODE_ENV=production PORT=3000

[Install]
WantedBy=multi-user.target
\`\`\`

---

## Mengendalikan Service dengan \`systemctl\`:

\`\`\`bash
sudo systemctl daemon-reload           # Muat ulang konfigurasi service
sudo systemctl start kodeluma          # Nyalakan service
sudo systemctl enable kodeluma         # Otomatis menyala saat server reboot
sudo systemctl status kodeluma         # Periksa status kesehatan service
sudo journalctl -u kodeluma -f         # Pantau output log console secara live
\`\`\`
`
  },
  {
    id: "lesson-linux-06",
    courseId: "course-linux-22",
    slug: "dasar-otomasi-bash-scripting-crontab",
    title: "6. Otomasi Server: Dasar Bash Scripting & Penjadwalan Cron",
    summary: "Tulis skrip otomasi .sh dengan variabel, kondisi if-else, argumen, dan jadwalkan via crontab -e.",
    order: 6,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 6. Otomasi Server: Dasar Bash Scripting & Penjadwalan Cron

**Bash Scripting** memungkinkan Anda merangkai puluhan perintah terminal ke dalam satu file berkas executable untuk tugas otomasi rutin.

---

## Contoh Skrip Pembersihan Log & Backup:

\`\`\`bash
#!/bin/bash
# Simpan sebagai: backup.sh

set -e # Berhenti jika ada perintah yang gagal

TANGGAL=$(date +%Y-%m-%d_%H%M%S)
FOLDER_BACKUP="/backups"
TARGET="/var/www/kodeluma/data"

mkdir -p $FOLDER_BACKUP

echo "[INFO] Memulai pencadangan berkas pada $TANGGAL..."
tar -czf "$FOLDER_BACKUP/data_$TANGGAL.tar.gz" "$TARGET"

echo "[SUCCESS] Pencadangan berhasil dibuat di $FOLDER_BACKUP/data_$TANGGAL.tar.gz"
\`\`\`

Beri izin eksekusi:
\`\`\`bash
chmod +x backup.sh
./backup.sh
\`\`\`

---

## Menjadwalkan Otomatis dengan \`crontab -e\`

Format sintaks cron: \`menit jam tgl_bln bln hari_dlm_minggu perintah\`

\`\`\`text
# Jalankan skrip backup setiap hari tepat pukul 02:00 dini hari:
0 2 * * * /home/ubuntu/backup.sh >> /var/log/backup.log 2>&1
\`\`\`
`
  }
];
