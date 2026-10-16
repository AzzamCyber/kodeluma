// lessons-redis.mjs
// 6 Comprehensive W3Schools/MDN-grade lessons for Redis & Arsitektur In-Memory Caching (course-redis-21)

export const REDIS_LESSONS = [
  {
    id: "lesson-redis-01",
    courseId: "course-redis-21",
    slug: "pengenalan-redis-in-memory-datastore",
    title: "1. Pengenalan Redis: Mengapa In-Memory Mengubah Segalanya?",
    summary: "Ketahui perbedaan latensi RAM vs Disk, use-case utama Redis, dan arsitektur single-threaded non-blocking.",
    order: 1,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 1. Pengenalan Redis: Mengapa In-Memory Mengubah Segalanya?

**Redis** (*Remote Dictionary Server*) adalah penyimpanan struktur data dalam memori (*in-memory data structure store*) sumber terbuka tercepat di dunia. Redis umum digunakan sebagai basis data berkecepatan tinggi, cache terdistribusi, session broker, dan streaming message broker.

---

## Perbandingan Latensi: RAM vs NVMe SSD

| Media Penyimpanan | Waktu Akses Rata-rata | Kecepatan Relatif |
| :--- | :--- | :--- |
| **RAM Komputer (Redis)** | **~100 nanodetik (0.0001 ms)** | 🚀 **1.000x Lebih Cepat** |
| **NVMe SSD (Postgres/MySQL)** | ~100 mikrodetik (0.1 ms) | Cepat, tapi terhambat bus I/O |
| **Harddisk Mekanis (HDD)** | ~10 milidetik (10 ms) | Sangat lambat untuk konkurensi |

Karena seluruh data Redis disimpan langsung di memori RAM, Redis dapat memproses **lebih dari 100.000 permintaan per detik** pada single core CPU dengan latensi di bawah 1 milidetik!

---

## Perintah Dasar CLI \`redis-cli\`:
\`\`\`bash
# Menghubungkan ke server Redis:
redis-cli

# Perintah PING - PONG:
PING
# Output: PONG

# Menyimpan dan membaca nilai string sederhana:
SET nama_situs "KodeLuma"
GET nama_situs
# Output: "KodeLuma"
\`\`\`
`
  },
  {
    id: "lesson-redis-02",
    courseId: "course-redis-21",
    slug: "struktur-data-strings-hashes-lists",
    title: "2. Struktur Data Inti: Strings, Hashes, & Lists",
    summary: "Simpan data JSON, kamus objek, dan antrean pesan FIFO dengan perintah MSET, HSET, HGETALL, dan LPUSH.",
    order: 2,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 2. Struktur Data Inti: Strings, Hashes, & Lists

Redis bukan sekadar key-value store biasa yang hanya menyimpan teks; Redis mendukung beragam struktur data tingkat lanjut.

---

## 1. Strings (Teks, Angka, atau Binary JSON)
Strings dapat menampung hingga 512MB data per kunci dan mendukung operasi atomik numerik:

\`\`\`bash
SET hitungan_kunjungan 100
INCR hitungan_kunjungan       # Menjadi 101 secara atomik (aman dari race condition)
INCRBY hitungan_kunjungan 10   # Menjadi 111
\`\`\`

---

## 2. Hashes (Representasi Objek & Record Pengguna)
Hashes sangat hemat memori untuk memetakan field ke value (mirip objek JSON):

\`\`\`bash
# Menyimpan profil pengguna:
HSET user:101 nama "Azzam" email "azzam@kodeluma.dev" peran "admin" saldo 1500000

# Mengambil satu field:
HGET user:101 email

# Mengambil semua field sekaligus:
HGETALL user:101
\`\`\`

---

## 3. Lists (Antrean Pesan & Riwayat Aktivitas)
List diimplementasikan sebagai Linked List, sangat cepat untuk operasi antrean FIFO (*First-In-First-Out*):

\`\`\`bash
# Masukkan pesan ke antrean:
LPUSH antrean_email "user1@mail.com" "user2@mail.com"

# Ambil dan proses pesan dari antrean:
RPOP antrean_email
\`\`\`
`
  },
  {
    id: "lesson-redis-03",
    courseId: "course-redis-21",
    slug: "sets-sorted-sets-leaderboard-ranking",
    title: "3. Sets & Sorted Sets (ZSET): Membangun Leaderboard Real-Time",
    summary: "Kuasai operasi himpunan unik (SADD, SISMEMBER) dan sistem ranking instan dengan skor numerik via ZADD.",
    order: 3,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 3. Sets & Sorted Sets (ZSET): Membangun Leaderboard Real-Time

Dua struktur data paling ampuh di Redis untuk aplikasi modern adalah **Sets** dan **Sorted Sets**.

---

## 1. Sets (Himpunan Anggota Unik)
Sets memastikan tidak ada elemen duplikat dan menyediakan operasi himpunan (irisan, gabungan, selisih):

\`\`\`bash
# Tag kursus unik:
SADD kursus:tag "javascript" "backend" "nodejs"
SADD kursus:tag "backend" # Diabaikan otomatis karena sudah ada

# Cek keanggotaan dalam O(1):
SISMEMBER kursus:tag "nodejs" # 1 (true)
\`\`\`

---

## 2. Sorted Sets (ZSET) untuk Sistem Ranking Leaderboard

Setiap anggota memiliki skor numerik (*score*). Redis menjaga urutan anggota secara otomatis setiap kali skor bertambah:

\`\`\`bash
# Format: ZADD key score member
ZADD leaderboard_xp 1500 "user_azzam"
ZADD leaderboard_xp 1200 "user_budi"
ZADD leaderboard_xp 1850 "user_citra"

# Mengambil Top 3 Skor Tertinggi:
ZREVRANGE leaderboard_xp 0 2 WITHSCORES
# Output:
# 1) "user_citra" 1850
# 2) "user_azzam" 1500
# 3) "user_budi"  1200

# Mengetahui peringkat siswa (0-indexed):
ZREVRANK leaderboard_xp "user_azzam" # Peringkat 1
\`\`\`
`
  },
  {
    id: "lesson-redis-04",
    courseId: "course-redis-21",
    slug: "ttl-cache-invalidation-strategies",
    title: "4. Manajemen TTL (Time-To-Live) & Strategi Cache Invalidation",
    summary: "Atur masa kedaluwarsa kunci dengan EXPIRE dan pelajari pola Cache-Aside vs Write-Through.",
    order: 4,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 4. Manajemen TTL (Time-To-Live) & Strategi Cache Invalidation

Tantangan terbesar dalam arsitektur caching adalah memastikan data cache tidak basi (*stale data*) ketika data di database relasional berubah.

---

## Menetapkan Batas Waktu Otomatis (TTL)

\`\`\`bash
# Simpan data cuaca dan atur kedaluwarsa setelah 60 detik:
SET cuaca:jakarta "Cerah 30C" EX 60

# Cek sisa waktu aktif:
TTL cuaca:jakarta # Misal: 45 (tersisa 45 detik)
\`\`\`

---

## Pola Cache-Aside (Lazy Loading) Standar Industri:

\`\`\`javascript
async function ambilDataKursus(courseId) {
  const cacheKey = \`cache:course:\${courseId}\`;

  // 1. Coba baca dari Redis terlebih dahulu (Cache Hit)
  const cached = await redis.get(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }

  // 2. Jika tidak ada di Redis (Cache Miss), baca dari PostgreSQL
  const course = await postgres.query('SELECT * FROM courses WHERE id = $1', [courseId]);

  // 3. Simpan hasilnya ke Redis dengan TTL 1 Jam agar query berikutnya cepat
  await redis.set(cacheKey, JSON.stringify(course), 'EX', 3600);

  return course;
}
\`\`\`
`
  },
  {
    id: "lesson-redis-05",
    courseId: "course-redis-21",
    slug: "api-rate-limiter-anti-abuse",
    title: "5. Membangun API Rate Limiter Anti-Spam dengan Redis",
    summary: "Lindungi endpoint publik dari serangan brute-force dan DoS menggunakan pola sliding window.",
    order: 5,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 5. Membangun API Rate Limiter Anti-Spam dengan Redis

Tanpa rate limiter, peretas dapat mengirim jutaan request ke endpoint \`/api/login\` atau \`/api/register\` untuk menjatuhkan server Anda.

---

## Algoritma Fixed Window Rate Limiting Sederhana:

\`\`\`javascript
async function rateLimiterMiddleware(req, res, next) {
  const ipPengguna = req.ip;
  const kunci = \`ratelimit:\${ipPengguna}\`;

  // Naikkan hitungan request
  const jumlahRequest = await redis.incr(kunci);

  // Jika ini request pertama di periode ini, set TTL 60 detik
  if (jumlahRequest === 1) {
    await redis.expire(kunci, 60);
  }

  // Batas maksimal: 100 request per menit
  if (jumlahRequest > 100) {
    return res.status(429).json({
      sukses: false,
      pesan: 'Terlalu banyak permintaan. Silakan coba lagi dalam 1 menit.'
    });
  }

  next();
}
\`\`\`
`
  },
  {
    id: "lesson-redis-06",
    courseId: "course-redis-21",
    slug: "pub-sub-messaging-realtime",
    title: "6. Pola Pub/Sub: Pesan Asinkron & Fitur Real-Time",
    summary: "Bangun arsitektur pesan broadcast instan antar instance backend dengan SUBSCRIBE dan PUBLISH.",
    order: 6,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 6. Pola Pub/Sub: Pesan Asinkron & Fitur Real-Time

**Pub/Sub** (*Publish/Subscribe*) adalah pola arsitektur perpesanan di mana pengirim pesan (*publisher*) tidak mengirim pesan langsung ke penerima tertentu, melainkan mempublikasikannya ke saluran (*channel*). Siapa pun yang mendengarkan saluran tersebut (*subscriber*) akan langsung menerima pesan secara instan.

---

## Contoh Penggunaan: Broadcast Notifikasi Multi-Server

\`\`\`bash
# Di Server A (Subscriber):
SUBSCRIBE notifikasi_kodeluma

# Di Server B (Publisher):
PUBLISH notifikasi_kodeluma "Peringatan: Pemeliharaan server dijadwalkan pukul 00:00"
\`\`\`

### Keunggulan Arsitektur Pub/Sub:
1. **Decoupling**: Layanan backend tidak perlu saling mengenal alamat IP satu sama lain.
2. **Skalabilitas**: Jika Anda memiliki 10 instance backend di balik Load Balancer, satu pesan Redis dapat disiarkan ke seluruh 10 instance sekaligus dalam hitungan mikrodetik!
`
  }
];
