// menengah_lessons_js.mjs
// 10 Comprehensive W3Schools-grade lessons for JavaScript Lanjutan (course-js-int-09)

export const JS_MENENGAH_LESSONS = [
  {
    id: "lesson-js-int-01",
    courseId: "course-js-int-09",
    slug: "execution-context-dan-hoisting",
    title: "1. Execution Context, Call Stack, & Hoisting",
    summary: "Pahami fase penciptaan (Creation Phase), eksekusi kode JavaScript, dan mekanisme hoisting pada variabel serta fungsi.",
    order: 1,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 1. Execution Context, Call Stack, & Hoisting

JavaScript adalah bahasa yang berjalan di atas thread tunggal (*single-threaded*) dengan model eksekusi berbasis *Call Stack*. Memahami cara kerja internal mesin JavaScript (*JavaScript Engine* seperti V8) adalah fondasi paling krusial untuk menjadi developer level menengah.

---

## Konsep: Apa itu Execution Context?

Setiap kali kode JavaScript dijalankan, ia dieksekusi di dalam sebuah lingkungan bernama **Execution Context**. Terdapat dua jenis utama:
1. **Global Execution Context (GEC)**: Dibuat pertama kali saat file skrip dimuat. Menghasilkan objek global (\`window\` di browser atau \`global\` di Node.js) dan variabel \`this\`.
2. **Function Execution Context (FEC)**: Dibuat setiap kali sebuah fungsi dipanggil.

### Dua Fase dalam Execution Context:
| Fase | Aktivitas JavaScript Engine |
| :--- | :--- |
| **1. Creation Phase** | Menyiapkan memori untuk fungsi dan variabel. Melakukan **Hoisting**. Menentukan nilai awal (\`undefined\` untuk \`var\`, uninitialized untuk \`let\`/\`const\`). |
| **2. Execution Phase** | Menjalankan kode baris demi baris dari atas ke bawah, menetapkan nilai aktual variabel, dan memanggil fungsi. |

---

## Memahami Hoisting & Temporal Dead Zone (TDZ)

**Hoisting** adalah perilaku mesin JavaScript yang memindahkan deklarasi variabel dan fungsi ke bagian atas lingkup (*scope*) mereka sebelum kode dieksekusi secara aktual.

\`\`\`javascript
// 1. Function Declaration vs Expression
sapaPengguna(); // Output: "Halo, selamat datang!" (Di-hoist sepenuhnya)

function sapaPengguna() {
  console.log("Halo, selamat datang!");
}

// 2. Perbedaan var vs let & const
console.log(namaVar); // Output: undefined
var namaVar = "Budi";

// console.log(namaLet); // ReferenceError: Cannot access 'namaLet' before initialization
let namaLet = "Siti"; // Berada di Temporal Dead Zone (TDZ) hingga baris ini
\`\`\`

> **Catatan Penting:** Variabel yang dideklarasikan dengan \`let\` dan \`const\` sebenarnya tetap mengalami hoisting, tetapi mereka ditempatkan pada **Temporal Dead Zone (TDZ)** sehingga tidak boleh diakses sebelum baris deklarasinya tercapai.

---

## Call Stack: Mekanisme Tumpukan Eksekusi

Call Stack bekerja dengan prinsip **LIFO (Last In, First Out)**:

\`\`\`javascript
function pertama() {
  console.log("Mulai Fungsi Pertama");
  kedua();
  console.log("Selesai Fungsi Pertama");
}

function kedua() {
  console.log("Di dalam Fungsi Kedua");
}

pertama();

// Alur Call Stack:
// 1. push: pertama()
// 2. log: "Mulai Fungsi Pertama"
// 3. push: kedua()
// 4. log: "Di dalam Fungsi Kedua"
// 5. pop: kedua()
// 6. log: "Selesai Fungsi Pertama"
// 7. pop: pertama()
\`\`\`

---

## Praktik Terbaik (Do's & Don'ts)

- **Gunakan \`const\` secara default**, dan gunakan \`let\` hanya jika nilai variabel memang perlu diubah.
- **Hindari penggunaan \`var\`** untuk mencegah *scope leakage* dan *accidental redeclaration*.
- **Deklarasikan variabel di bagian atas blok** atau sedekat mungkin dengan tempat variabel tersebut digunakan untuk keterbacaan kode yang maksimal.

---

## Tantangan Mandiri
Cobalah tebak output dari kode berikut sebelum menjalankannya di Console:
\`\`\`javascript
var skor = 10;
function uji() {
  if (!skor) {
    var skor = 20;
  }
  return skor;
}
console.log(uji()); // Apakah 10 atau 20? Mengapa?
\`\`\`
*(Petunjuk: Variabel \`var skor\` di dalam fungsi mengalami hoisting ke atas fungsi sehingga menutupi variabel global).*`
  },
  {
    id: "lesson-js-int-02",
    courseId: "course-js-int-09",
    slug: "closures-lexical-scope",
    title: "2. Closures & Lexical Environment Praktis",
    summary: "Pelajari rahasia Closures, bagaimana fungsi mengingat variabel induknya, serta implementasi data privacy dan memoization.",
    order: 2,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 2. Closures & Lexical Environment Praktis

Closure adalah salah satu fitur paling bertenaga sekaligus sering disalahpahami dalam JavaScript. Closure memungkinkan fungsi dalam (*inner function*) mengakses variabel dari fungsi luar (*outer function*) bahkan setelah fungsi luar tersebut selesai dieksekusi.

---

## Konsep: Lexical Scope & Closure

JavaScript menggunakan **Lexical Scoping**, yang berarti lingkup (*scope*) sebuah variabel ditentukan oleh posisinya di dalam kode sumber saat ditulis, bukan saat dipanggil di runtime.

\`\`\`javascript
function buatPenghitung() {
  let hitungan = 0; // Variabel privat di outer scope

  return {
    tambah() {
      hitungan++;
      return hitungan;
    },
    kurang() {
      hitungan--;
      return hitungan;
    },
    ambilNilai() {
      return hitungan;
    }
  };
}

const counter1 = buatPenghitung();
console.log(counter1.tambah()); // 1
console.log(counter1.tambah()); // 2
console.log(counter1.ambilNilai()); // 2

// Nilai 'hitungan' tidak bisa diakses langsung dari luar:
// console.log(counter1.hitungan); // undefined! Data aman terlindungi (Encapsulation)
\`\`\`

---

## Studi Kasus Nyata: Function Factory & Currying

Closure sangat berguna untuk membuat generator fungsi spesifik:

\`\`\`javascript
function pengali(faktor) {
  return function(angka) {
    return angka * faktor;
  };
}

const kaliDua = pengali(2);
const kaliSepuluh = pengali(10);

console.log(kaliDua(5));    // 10
console.log(kaliSepuluh(5)); // 50
\`\`\`

---

## Penerapan Lanjutan: Memoization Cache

Closure memungkinkan kita menyimpan cache komputasi berat tanpa mencemari global scope:

\`\`\`javascript
function hitungFaktorialDenganCache() {
  const cache = {};

  return function faktorial(n) {
    if (n in cache) {
      console.log(\`Mengambil n=\${n} dari cache!\`);
      return cache[n];
    }
    
    if (n <= 1) return 1;
    cache[n] = n * faktorial(n - 1);
    return cache[n];
  };
}

const faktorial = hitungFaktorialDenganCache();
console.log(faktorial(5)); // Komputasi baru: 120
console.log(faktorial(5)); // Diambil dari cache: 120
\`\`\`

---

## Ringkasan Perbedaan Scope
| Tipe Scope | Contoh | Aksesibilitas |
| :--- | :--- | :--- |
| **Global Scope** | \`const app = "KodeLuma"\` | Dapat diakses di seluruh aplikasi |
| **Function Scope** | \`function f() { var x = 1; }\` | Hanya di dalam badan fungsi |
| **Block Scope** | \`if (true) { let y = 2; }\` | Hanya di dalam tanda kurung kurawal \`{}\` |
| **Closure** | Fungsi dalam meretensi variabel luar | Mempertahankan state antar pemanggilan |`
  },
  {
    id: "lesson-js-int-03",
    courseId: "course-js-int-09",
    slug: "event-loop-microtask-queue",
    title: "3. Event Loop, Microtask Queue & Macrotask Queue",
    summary: "Bongkar cara kerja non-blocking asynchronous JavaScript dengan Call Stack, Web APIs, Microtasks, dan Task Queue.",
    order: 3,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 3. Event Loop, Microtask Queue & Macrotask Queue

Meskipun JavaScript bersifat **single-threaded** (hanya mengeksekusi satu baris kode dalam satu waktu), browser dapat menangani operasi asinkron seperti HTTP requests, timer, dan interaksi pengguna tanpa membekukan antarmuka (*UI non-blocking*). Kuncinya adalah **Event Loop**.

---

## Arsitektur Runtime JavaScript

Arsitektur runtime terdiri dari empat komponen utama:
1. **Call Stack**: Menjalankan frame fungsi yang sedang aktif (LIFO).
2. **Web APIs / Node APIs**: Modul lingkungan di luar JS engine yang menangani timer (\`setTimeout\`), HTTP request (\`fetch\`), dan DOM events.
3. **Microtask Queue**: Antrian prioritas tinggi (Promise callback \`.then()\` / \`.catch()\`, \`queueMicrotask\`, \`MutationObserver\`).
4. **Macrotask (Task) Queue**: Antrian tugas reguler (\`setTimeout\`, \`setInterval\`, I/O, UI rendering).

---

## Aturan Prioritas Event Loop

1. Event loop memeriksa apakah **Call Stack** kosong.
2. Jika kosong, ia akan **mengosongkan seluruh antrian Microtask Queue** hingga habis.
3. Setelah Microtask Queue kosong dan rendering UI selesai, Event Loop mengambil **1 Macrotask** dari Task Queue dan memasukkannya ke Call Stack.

\`\`\`javascript
console.log("1. Sinkron Awal");

setTimeout(() => {
  console.log("2. Macrotask (setTimeout)");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Microtask (Promise 1)");
}).then(() => {
  console.log("4. Microtask (Promise 2)");
});

console.log("5. Sinkron Akhir");

// Urutan Output yang Benar:
// 1. Sinkron Awal
// 5. Sinkron Akhir
// 3. Microtask (Promise 1)
// 4. Microtask (Promise 2)
// 2. Macrotask (setTimeout)
\`\`\`

---

## Mengapa Output di Atas Terjadi?
1. \`console.log("1. Sinkron Awal")\` langsung masuk Call Stack dan dieksekusi.
2. \`setTimeout\` memicu Web API timer 0ms, lalu callback didaftarkan ke **Macrotask Queue**.
3. \`Promise.resolve().then()\` mendaftarkan callback ke **Microtask Queue**.
4. \`console.log("5. Sinkron Akhir")\` dieksekusi di Call Stack.
5. Call Stack kini kosong! Event Loop memeriksa **Microtask Queue** terlebih dahulu -> mencetak "3", lalu rantai callback kedua mencetak "4".
6. Microtask Queue habis. Barulah Event loop mengambil task dari **Macrotask Queue** -> mencetak "2".

---

## Do's & Don'ts
- **Jangan memblokir Call Stack** dengan loop berat CPU-intensive (seperti kalkulasi jutaan angka sinkron); gunakan Web Workers jika perlu komputasi berat.
- **Pahami bahwa \`setTimeout(fn, 0)\` BUKAN berarti dieksekusi instan**, melainkan dieksekusi sesegera mungkin setelah Call Stack dan Microtask Queue kosong.`
  },
  {
    id: "lesson-js-int-04",
    courseId: "course-js-int-09",
    slug: "callbacks-dan-callback-hell",
    title: "4. Callbacks & Menghindari Callback Hell",
    summary: "Memahami pola asinkron tertua JavaScript, penanganan error-first callbacks, dan bahaya Piramida Malapetaka.",
    order: 4,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 4. Callbacks & Menghindari Callback Hell

Sebelum adanya Promise dan Async/Await, **Callback** adalah cara utama untuk menangani operasi asinkron dalam JavaScript.

---

## Konsep: Apa itu Callback?

Callback adalah fungsi yang diteruskan sebagai argumen ke fungsi lain, dengan tujuan agar fungsi tersebut dipanggil kembali (*called back*) setelah suatu aksi selesai.

\`\`\`javascript
function ambilDataPengguna(id, callback) {
  setTimeout(() => {
    const data = { id: id, nama: "Azzam", peran: "Developer" };
    callback(data);
  }, 1000);
}

ambilDataPengguna(101, (pengguna) => {
  console.log("Data berhasil diterima:", pengguna.nama);
});
\`\`\`

---

## Masalah: Callback Hell (Pyramid of Doom)

Ketika beberapa operasi asinkron harus dieksekusi berurutan (misal: login -> ambil profil -> ambil postingan -> ambil komentar), kode menjadi bersarang (*deeply nested*), sulit dibaca, dan rentan bug:

\`\`\`javascript
// CONTOH KODE BURUK: Callback Hell
loginUser(email, sandi, (err, user) => {
  if (err) return console.error(err);
  ambilProfil(user.id, (err, profil) => {
    if (err) return console.error(err);
    ambilPostingan(profil.id, (err, posts) => {
      if (err) return console.error(err);
      ambilKomentar(posts[0].id, (err, komentar) => {
        if (err) return console.error(err);
        console.log("Komentar pertama:", komentar);
      });
    });
  });
});
\`\`\`

---

## Solusi Awal: Pola Modular Functions

Untuk merapikan callback hell sebelum era Promise:
1. Pisahkan setiap fungsi bersarang menjadi fungsi bernama (*named functions*).
2. Terapkan konvensi **Error-First Callback** (standar Node.js: \`callback(error, result)\`).

\`\`\`javascript
function handleKomentar(err, komentar) {
  if (err) return console.error("Gagal memuat komentar:", err);
  console.log("Berhasil memuat komentar:", komentar);
}

function handlePosts(err, posts) {
  if (err) return console.error("Gagal memuat post:", err);
  ambilKomentar(posts[0].id, handleKomentar);
}

// Rantai lebih modular dan rata (flat)
\`\`\`

Di materi berikutnya, kita akan mempelajari bagaimana **Promise** merevolusi cara penanganan asinkron ini!`
  },
  {
    id: "lesson-js-int-05",
    courseId: "course-js-int-09",
    slug: "promises-dan-chaining",
    title: "5. Promises, State, & Chaining .then() .catch()",
    summary: "Kuasai objek Promise, tiga status dasarnya, cara membuat Promise mandiri, dan teknik chaining elegan.",
    order: 5,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 5. Promises, State, & Chaining .then() .catch()

**Promise** diperkenalkan pada ES6 (ECMAScript 2015) sebagai abstraksi elegan untuk mengatasi keterbatasan callback. Promise merepresentasikan nilai yang mungkin tersedia sekarang, nanti di masa depan, atau tidak pernah sama sekali.

---

## Tiga Status (State) Promise

Sebuah Promise selalu berada di salah satu dari tiga status:
| Status | Penjelasan |
| :--- | :--- |
| **Pending** | Status awal, operasi asinkron sedang berlangsung. |
| **Fulfilled (Resolved)** | Operasi berhasil diselesaikan, menghasilkan nilai (\`value\`). |
| **Rejected** | Operasi gagal, menghasilkan alasan kegagalan (\`error\`/\`reason\`). |

---

## Membuat Custom Promise

\`\`\`javascript
function simulasiUnduhBerkas(namaBerkas) {
  return new Promise((resolve, reject) => {
    console.log(\`Mulai mengunduh \${namaBerkas}...\`);
    
    setTimeout(() => {
      const berhasil = true; // Simulasi kondisi jaringan
      if (berhasil) {
        resolve({ berkas: namaBerkas, ukuranKB: 1024, status: "Sukses" });
      } else {
        reject(new Error("Koneksi terputus saat mengunduh berkas."));
      }
    }, 1500);
  });
}
\`\`\`

---

## Promise Chaining (Rantai Eksekusi Bertingkat)

Kelebihan utama Promise adalah kemampuannya dirantai secara horizontal tanpa nesting:

\`\`\`javascript
simulasiUnduhBerkas("laporan-keuangan.pdf")
  .then((hasil) => {
    console.log("Unduhan selesai:", hasil.berkas);
    // Mengembalikan nilai atau Promise baru
    return hasil.ukuranKB * 1.024;
  })
  .then((ukuranBytes) => {
    console.log("Ukuran berkas dalam bytes:", ukuranBytes);
  })
  .catch((error) => {
    // Menangkap error dari tahap MANA PUN di atas
    console.error("Terjadi kegagalan:", error.message);
  })
  .finally(() => {
    // Selalu dijalankan terlepas sukses atau gagal
    console.log("Operasi selesai diproses.");
  });
\`\`\`

---

## Best Practices
- **Selalu sertakan \`.catch()\`** pada setiap rantai Promise untuk mencegah unhandled rejection.
- **Kembalikan nilai dalam \`.then()\`** jika Anda ingin nilainya diteruskan ke rantai \`.then()\` berikutnya.`
  },
  {
    id: "lesson-js-int-06",
    courseId: "course-js-int-09",
    slug: "promise-combinators-all-race",
    title: "6. Promise Combinators: all, allSettled, race, any",
    summary: "Pelajari 4 metode bawaan untuk mengelola beberapa operasi asinkron paralel sekaligus.",
    order: 6,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 6. Promise Combinators: all, allSettled, race, any

Seringkali kita perlu menjalankan beberapa operasi asinkron secara bersamaan (paralel) daripada menunggu satu per satu secara berurutan. JavaScript menyediakan 4 metode kombinator utama pada objek \`Promise\`.

---

## Perbandingan 4 Promise Combinators

| Metode | Perilaku Keberhasilan | Perilaku Kegagalan | Kasus Penggunaan Ideal |
| :--- | :--- | :--- | :--- |
| **\`Promise.all()\`** | Menunggu **SEMUA** fulfilled (hasil array). | **Fail-fast**: Gagal seketika jika ada **1 saja** yang rejected. | Memuat data dependen (User + Permissions). |
| **\`Promise.allSettled()\`** | Menunggu **SEMUA** selesai tanpa peduli status. | Tidak pernah reject; mengembalikan array status \`{status, value/reason}\`. | Dashboard analytics / logging batch. |
| **\`Promise.race()\`** | Mengambil hasil yang **paling cepat** selesai. | Gagal jika yang tercepat adalah rejected. | Implementasi batas waktu (*Timeout*). |
| **\`Promise.any()\`** | Mengambil hasil fulfilled yang **paling cepat**. | Gagal hanya jika **SEMUA** promise rejected (\`AggregateError\`). | Mengambil data dari server mirror tercepat. |

---

## Contoh Kode Komparatif

\`\`\`javascript
const p1 = new Promise((res) => setTimeout(() => res("API Cuaca: 28°C"), 1000));
const p2 = new Promise((_, rej) => setTimeout(() => rej(new Error("API Berita Down")), 500));
const p3 = new Promise((res) => setTimeout(() => res("API Saham: +1.5%"), 1500));

// 1. Promise.allSettled (Aman & Tangguh)
Promise.allSettled([p1, p2, p3]).then((hasil) => {
  hasil.forEach((h, idx) => {
    if (h.status === "fulfilled") {
      console.log(\`Task \${idx + 1} Berhasil:\`, h.value);
    } else {
      console.warn(\`Task \${idx + 1} Gagal:\`, h.reason.message);
    }
  });
});

// 2. Promise.race untuk Timeout Pattern
function denganTimeout(janji, batasMs) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Operasi melebihi batas waktu (Timeout)!")), batasMs)
  );
  return Promise.race([janji, timeout]);
}

denganTimeout(p3, 1000)
  .then(console.log)
  .catch((err) => console.error(err.message)); // Output: Operasi melebihi batas waktu!
\`\`\``
  },
  {
    id: "lesson-js-int-07",
    courseId: "course-js-int-09",
    slug: "async-await-error-handling",
    title: "7. Async/Await & Penanganan Error try...catch",
    summary: "Tulis kode asinkron dengan gaya sinkron yang bersih, mudah didebug, dan aman dengan blok try...catch.",
    order: 7,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 7. Async/Await & Penanganan Error try...catch

Diperkenalkan pada ES2017, \`async\` dan \`await\` adalah pemanis sintaks (*syntactic sugar*) di atas Promise yang membuat alur asinkron terbaca semudah kode sinkron standar.

---

## Aturan Dasar Async/Await

1. Fungsi yang diberi kata kunci \`async\` **selalu mengembalikan Promise secara otomatis**.
2. Kata kunci \`await\` hanya bisa digunakan di dalam fungsi \`async\` (atau top-level module).
3. \`await\` menjeda eksekusi fungsi hingga Promise selesai (*resolved*), tanpa memblokir thread browser utama.

\`\`\`javascript
async function muatDataPengguna(id) {
  try {
    console.log("Memulai request...");
    const respons = await fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`);
    
    if (!respons.ok) {
      throw new Error(\`HTTP error! status: \${respons.status}\`);
    }

    const pengguna = await respons.json();
    return pengguna;
  } catch (error) {
    console.error("Gagal mengambil data pengguna:", error.message);
    // Opsional: rethrow atau kembalikan fallback value
    return null;
  } finally {
    console.log("Selesai mencoba mengambil data.");
  }
}

// Cara memanggil:
muatDataPengguna(1).then((data) => {
  if (data) console.log("Nama:", data.name);
});
\`\`\`

---

## Bahaya Await Serial yang Tidak Perlu

Hindari menunggu tugas yang saling independen secara serial:

\`\`\`javascript
// KURANG OPTIMAL (Membutuhkan 2 + 2 = 4 detik)
async function muatLambat() {
  const user = await ambilUser(); // 2 detik
  const posts = await ambilPosts(); // 2 detik
  return { user, posts };
}

// JAUH LEBIH CEPAT (Paralel, hanya butuh 2 detik total)
async function muatOptimal() {
  const [user, posts] = await Promise.all([
    ambilUser(),
    ambilPosts()
  ]);
  return { user, posts };
}
\`\`\`

---

## Do's & Don'ts
- **Selalu bungkus \`await\` dengan \`try...catch\`** untuk mengantisipasi kegagalan jaringan atau server down.
- **Jangan gunakan \`forEach\` bersama \`async/await\`**, gunakan loop \`for...of\` atau \`Promise.all(array.map(...))\` agar eksekusi asinkron berjalan sesuai harapan.`
  },
  {
    id: "lesson-js-int-08",
    courseId: "course-js-int-09",
    slug: "fetch-api-rest-requests",
    title: "8. Fetch API, Headers, & Konsumsi RESTful API",
    summary: "Pelajari metode HTTP (GET, POST, PUT, DELETE), pengiriman JSON payload, custom headers, dan penanganan status respons HTTP.",
    order: 8,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 8. Fetch API, Headers, & Konsumsi RESTful API

\`fetch()\` adalah API bawaan browser modern untuk melakukan HTTP requests menggantikan \`XMLHttpRequest\`.

---

## Anatomi Permintaan HTTP RESTful

REST API berkomunikasi menggunakan metode HTTP standar:
| Metode | Fungsi | Memiliki Body Payload? |
| :--- | :--- | :--- |
| **GET** | Membaca / mengambil data dari server | Tidak |
| **POST** | Membuat data baru di server | Ya |
| **PUT / PATCH** | Memperbarui data yang sudah ada | Ya |
| **DELETE** | Menghapus data dari server | Umumnya Tidak |

---

## Contoh Lengkap: Operasi CRUD dengan Fetch

\`\`\`javascript
const API_URL = "https://jsonplaceholder.typicode.com/posts";

// 1. GET: Mengambil Data
async function ambilDaftarPost() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error(\`Gagal: \${res.status}\`);
  const data = await res.json();
  return data.slice(0, 5);
}

// 2. POST: Membuat Data Baru
async function buatPostBaru(judul, konten, userId = 1) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer token_rahasia_anda"
    },
    body: JSON.stringify({
      title: judul,
      body: konten,
      userId: userId
    })
  });

  if (!res.ok) throw new Error("Gagal menyimpan post baru");
  return await res.json();
}

// 3. DELETE: Menghapus Data
async function hapusPost(id) {
  const res = await fetch(\`\${API_URL}/\${id}\`, {
    method: "DELETE"
  });
  return res.ok;
}
\`\`\`

---

## Catatan Kritis Mengenai Fetch API
> **Penting**: \`fetch()\` **TIDAK AKAN** menolak Promise jika menerima HTTP 404 atau 500! Promise hanya reject jika terjadi kegagalan jaringan (*network error* atau CORS blocking). Anda **wajib** memeriksa \`if (!response.ok)\` secara manual!`
  },
  {
    id: "lesson-js-int-09",
    courseId: "course-js-int-09",
    slug: "web-storage-api",
    title: "9. Web Storage: LocalStorage, SessionStorage & Cookies",
    summary: "Simpan state dan preferensi pengguna di browser dengan LocalStorage, SessionStorage, serialisasi JSON, dan mitigasi XSS.",
    order: 9,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 9. Web Storage: LocalStorage, SessionStorage & Cookies

Aplikasi web modern membutuhkan penyimpanan data sisi klien (*client-side storage*) untuk menyimpan preferensi tema (dark/light mode), token sesi, atau keranjang belanja sementara.

---

## Perbandingan Mekanisme Penyimpanan Klien

| Fitur | LocalStorage | SessionStorage | Cookies |
| :--- | :--- | :--- | :--- |
| **Masa Simpan** | Permanen hingga dihapus | Hilang saat tab browser ditutup | Ditentukan oleh \`Expires\` / \`Max-Age\` |
| **Kapasitas** | ~5MB - 10MB | ~5MB | ~4KB |
| **Kirim ke Server?** | Tidak (Hanya klien) | Tidak (Hanya klien) | Ya, otomatis di setiap HTTP request |
| **Aksesibilitas** | Window / Tab domain sama | Hanya tab yang sama | Seluruh dokumen / Server (jika HttpOnly) |

---

## Menggunakan LocalStorage dengan Serialisasi JSON

Storage API hanya dapat menyimpan string teks. Untuk menyimpan objek atau array, gunakan \`JSON.stringify()\` dan \`JSON.parse()\`:

\`\`\`javascript
const StorageHelper = {
  set(kunci, nilai) {
    try {
      const dataString = JSON.stringify(nilai);
      localStorage.setItem(kunci, dataString);
    } catch (e) {
      console.error("Gagal menyimpan ke LocalStorage:", e);
    }
  },

  get(kunci, nilaiDefault = null) {
    try {
      const dataString = localStorage.getItem(kunci);
      return dataString ? JSON.parse(dataString) : nilaiDefault;
    } catch (e) {
      console.error("Gagal membaca LocalStorage:", e);
      return nilaiDefault;
    }
  },

  remove(kunci) {
    localStorage.removeItem(kunci);
  },

  clear() {
    localStorage.clear();
  }
};

// Implementasi Preferensi Tema
StorageHelper.set("tema_pilihan", { mode: "dark", ukuranFont: 16 });
const tema = StorageHelper.get("tema_pilihan");
console.log("Mode tema aktif:", tema.mode); // "dark"
\`\`\`

---

## Aspek Keamanan: Mitigasi XSS
- **Jangan pernah menyimpan kredensial sensitif** seperti token akses otentikasi bernilai tinggi atau nomor kartu kredit di \`localStorage\` karena rentan dicuri lewat serangan Cross-Site Scripting (XSS).
- Untuk token autentikasi sesi, lebih disarankan menggunakan **HTTP-Only Cookies** dari server.`
  },
  {
    id: "lesson-js-int-10",
    courseId: "course-js-int-09",
    slug: "es6-modules-modular-js",
    title: "10. ES6 Modules (import/export) & Dynamic Imports",
    summary: "Rancang arsitektur kode modular, pisahkan dependensi dengan named & default export, serta optimalkan performa dengan Dynamic Imports.",
    order: 10,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 10. ES6 Modules (import/export) & Dynamic Imports

Modularitas adalah kemampuan memecah kode besar menjadi modul-modul berkas terpisah yang dapat digunakan kembali (*reusable*) dan mudah dirawat (*maintainable*).

---

## Named Export vs Default Export

### 1. Berkas: \`matematika.js\`
\`\`\`javascript
// Named exports (bisa banyak dalam 1 file)
export const PI = 3.14159;

export function tambah(a, b) {
  return a + b;
}

export function kali(a, b) {
  return a * b;
}

// Default export (hanya boleh satu per file)
export default class Kalkulator {
  hitungTotal(angkaArr) {
    return angkaArr.reduce((acc, curr) => acc + curr, 0);
  }
}
\`\`\`

### 2. Berkas: \`app.js\`
\`\`\`javascript
// Mengimpor default dan named export secara bersamaan:
import Kalkulator, { PI, tambah as jumlahkan } from "./matematika.js";

console.log("Nilai PI:", PI);
console.log("Hasil 5 + 3:", jumlahkan(5, 3));

const kalk = new Kalkulator();
console.log("Total array:", kalk.hitungTotal([10, 20, 30]));
\`\`\`

---

## Dynamic Imports: Code Splitting & Lazy Loading

Anda dapat memuat modul secara dinamis (*on-demand*) hanya ketika dibutuhkan (misalnya saat tombol diklik):

\`\`\`javascript
const btnExport = document.querySelector("#btn-export-pdf");

btnExport.addEventListener("click", async () => {
  btnExport.textContent = "Memuat modul PDF...";
  
  // Mengimpor pustaka berat hanya saat dibutuhkan
  const { buatDokumenPDF } = await import("./modulBeratPDF.js");
  
  buatDokumenPDF();
  btnExport.textContent = "Unduh PDF";
});
\`\`\`

---

## Manfaat Arsitektur Modular
1. **Pemisahan Tanggung Jawab (Separation of Concerns)**: Setiap berkas hanya bertanggung jawab atas satu domain logika.
2. **Namespace Bersih**: Menghindari polusi variabel di window global.
3. **Optimasi Bundle**: Memungkinkan alat bundler modern (seperti Vite, Webpack, esbuild) melakukan *Tree Shaking* (menghapus kode yang tidak terpakai).`
  }
];
