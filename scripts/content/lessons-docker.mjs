// lessons-docker.mjs
// 6 Comprehensive W3Schools/MDN-grade lessons for Docker & Kontainerisasi Dasar (course-docker-18)

export const DOCKER_LESSONS = [
  {
    id: "lesson-docker-01",
    courseId: "course-docker-18",
    slug: "konsep-kontainerisasi-vs-virtual-machine",
    title: "1. Konsep Kontainerisasi vs Virtual Machine",
    summary: "Pahami isolasi proses Linux, perbandingan efisiensi Container vs VM berat, dan arsitektur Docker Engine.",
    order: 1,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 1. Konsep Kontainerisasi vs Virtual Machine

Sebelum era kontainer, developer sering menghadapi masalah klise: *"Kode ini berjalan lancar di laptop saya, tapi error saat dipasang di server."* Hal ini disebabkan oleh perbedaan versi sistem operasi, library sistem, dan konfigurasi lingkungan.

---

## Container vs Virtual Machine (VM)

| Aspek | Virtual Machine (VM) | Docker Container |
| :--- | :--- | :--- |
| **Arsitektur** | Membawa Guest OS penuh (GB) | Berbagi Kernel OS host (MB) |
| **Waktu Booting** | Beberapa menit | Beberapa detik / milidetik |
| **Konsumsi Resource** | Berat (memotong CPU & RAM kaku) | Sangat ringan (hanya memakai yang dibutuhkan) |
| **Portabilitas** | File image besar (puluhan GB) | Image ramping berbasis layer |

---

## Arsitektur Docker: Client, Daemon, & Registry
- **Docker Client (CLI)**: Perintah terminal yang kita ketik (\`docker run\`, \`docker build\`).
- **Docker Daemon (dockerd)**: Layanan latar belakang yang mengelola image, container, network, dan volume.
- **Docker Hub (Registry)**: Tempat penyimpanan dan distribusi image publik/privat di internet.
`
  },
  {
    id: "lesson-docker-02",
    courseId: "course-docker-18",
    slug: "perintah-dasar-docker-cli-lifecycle",
    title: "2. Perintah Dasar Docker CLI & Siklus Hidup Container",
    summary: "Jalankan, hentikan, pantau log, dan hapus container dengan perintah docker run, ps, logs, dan stop.",
    order: 2,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 2. Perintah Dasar Docker CLI & Siklus Hidup Container

Container adalah instansiasi nyata dari sebuah Docker Image yang sedang berjalan di lingkungan terisolasi.

---

## Perintah Penting Sehari-hari:

\`\`\`bash
# 1. Mengunduh dan menjalankan web server Nginx:
docker run -d -p 8080:80 --name server-web nginx:alpine

# 2. Melihat daftar container yang sedang aktif:
docker ps

# 3. Melihat semua container (termasuk yang berhenti):
docker ps -a

# 4. Melihat log output aplikasi di dalam container:
docker logs -f server-web

# 5. Menghentikan dan menghapus container:
docker stop server-web
docker rm server-web
\`\`\`

### Penjelasan Opsi \`docker run\`:
- \`-d\` (*detached*): Menjalankan container di latar belakang (*background*).
- \`-p 8080:80\`: Memetakan port **8080** di laptop Anda ke port **80** di dalam container.
- \`--name\`: Memberi nama mudah dibaca untuk container.
`
  },
  {
    id: "lesson-docker-03",
    courseId: "course-docker-18",
    slug: "menulis-dockerfile-efisien-multistage",
    title: "3. Menulis Dockerfile: Membangun Image Kustom Sendiri",
    summary: "Tulis instruksi FROM, WORKDIR, COPY, RUN, EXPOSE, dan CMD untuk mengemas aplikasi web ke dalam image.",
    order: 3,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 3. Menulis Dockerfile: Membangun Image Kustom Sendiri

**Dockerfile** adalah berkas teks yang berisi urutan instruksi langkah-demi-langkah bagi Docker Engine untuk membangun Docker Image baru.

---

## Contoh Dockerfile untuk Aplikasi Node.js

\`\`\`dockerfile
# 1. Gunakan base image resmi yang ringan (Alpine Linux)
FROM node:20-alpine

# 2. Tetapkan direktori kerja di dalam container
WORKDIR /app

# 3. Salin berkas package.json terlebih dahulu untuk memanfaatkan caching layer
COPY package*.json ./

# 4. Instal dependensi produksi
RUN npm ci --only=production

# 5. Salin sisa kode sumber aplikasi
COPY . .

# 6. Beri dokumentasi port yang dibuka
EXPOSE 3000

# 7. Perintah yang dieksekusi saat container pertama kali menyala
CMD ["node", "src/server.js"]
\`\`\`

---

## Membangun & Menjalankan Image Kustom:
\`\`\`bash
# Build image dengan tag nama 'kodeluma-backend:v1':
docker build -t kodeluma-backend:v1 .

# Jalankan image yang baru dibuat:
docker run -d -p 3000:3000 --name api-kodeluma kodeluma-backend:v1
\`\`\`
`
  },
  {
    id: "lesson-docker-04",
    courseId: "course-docker-18",
    slug: "persistensi-data-dengan-docker-volumes",
    title: "4. Persistensi Data dengan Docker Volumes & Bind Mounts",
    summary: "Cegah hilangnya data database saat container dimatikan menggunakan Docker Volumes.",
    order: 4,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 4. Persistensi Data dengan Docker Volumes & Bind Mounts

Secara bawaan, filesystem container bersifat **ephemeral (sementara)**. Jika container dihapus, seluruh data yang tersimpan di dalamnya akan hilang selamanya. Untuk basis data (seperti Redis atau PostgreSQL), kita memerlukan **Docker Volumes**.

---

## Dua Tipe Persistensi:

1. **Docker Volumes (Direkomendasikan untuk Produksi)**: Dikelola penuh oleh Docker di lokasi aman host (\`/var/lib/docker/volumes/\`).
2. **Bind Mounts (Sangat Baik untuk Development)**: Memetakan folder lokal di laptop Anda langsung ke folder dalam container, sehingga perubahan kode langsung terbaca tanpa re-build image.

---

## Contoh Praktik: Menjalankan Redis dengan Volume Persisten

\`\`\`bash
# 1. Buat volume bernama 'data-redis-kodeluma':
docker volume create data-redis-kodeluma

# 2. Jalankan Redis dan sambungkan ke volume tersebut:
docker run -d \
  -p 6379:6379 \
  --name redis-kodeluma \
  -v data-redis-kodeluma:/data \
  redis:alpine redis-server --appendonly yes
\`\`\`
`
  },
  {
    id: "lesson-docker-05",
    courseId: "course-docker-18",
    slug: "docker-network-komunikasi-antar-container",
    title: "5. Docker Network: Komunikasi Aman Antar Container",
    summary: "Hubungkan aplikasi backend dan database dalam jaringan privat terisolasi dengan bridge network.",
    order: 5,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 5. Docker Network: Komunikasi Aman Antar Container

Bagaimana server backend Node.js Anda dapat berkomunikasi dengan container Redis atau PostgreSQL tanpa membuka port database ke internet publik? Jawabannya adalah **Docker Custom Bridge Network**.

---

## Menggunakan Custom Network dengan DNS Internal

Dalam custom bridge network, Docker menyediakan server DNS internal otomatis: container dapat memanggil container lain **cukup menggunakan nama container-nya**!

\`\`\`bash
# 1. Buat jaringan privat:
docker network create net-kodeluma

# 2. Jalankan database di dalam network privat:
docker run -d --name redis-db --network net-kodeluma redis:alpine

# 3. Jalankan aplikasi web di network yang sama:
# Aplikasi backend dapat terhubung ke Redis via URL: "redis-db:6379"
docker run -d -p 3000:3000 \
  --name web-app \
  --network net-kodeluma \
  -e REDIS_HOST=redis-db \
  kodeluma-backend:v1
\`\`\`
`
  },
  {
    id: "lesson-docker-06",
    courseId: "course-docker-18",
    slug: "docker-compose-orkestrasi-multi-service",
    title: "6. Docker Compose: Orkestrasi Multi-Service dengan Satu Perintah",
    summary: "Rangkum web, worker, dan database ke dalam satu file docker-compose.yml dan jalankan via docker compose up.",
    order: 6,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 6. Docker Compose: Orkestrasi Multi-Service dengan Satu Perintah

Mengetik puluhan perintah \`docker run\` panjang dengan port, volume, dan network sangat melelahkan. **Docker Compose** memungkinkan Anda mendefinisikan seluruh arsitektur multi-container dalam satu berkas konfigurasi deklaratif: \`docker-compose.yml\`.

---

## File \`docker-compose.yml\` Lengkap

\`\`\`yaml
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - REDIS_URL=redis://cache:6379
    depends_on:
      - cache
    networks:
      - kodeluma-net

  cache:
    image: redis:alpine
    volumes:
      - redis_data:/data
    networks:
      - kodeluma-net

volumes:
  redis_data:

networks:
  kodeluma-net:
\`\`\`

---

## Perintah Mengoperasikan:
\`\`\`bash
# Menyalakan seluruh service di background:
docker compose up -d

# Mematikan seluruh service dan membersihkan network:
docker compose down
\`\`\`
`
  }
];
