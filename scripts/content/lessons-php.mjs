// lessons-php.mjs
// 6 Comprehensive W3Schools/MDN-grade lessons for PHP Dasar & Web Dinamis (course-php-19)

export const PHP_LESSONS = [
  {
    id: "lesson-php-01",
    courseId: "course-php-19",
    slug: "pengenalan-php-sintaks-dasar-tag",
    title: "1. Pengenalan PHP Modern: Sintaks Dasar, Tag <?php ?>, & Output",
    summary: "Pelajari bahasa server-side tertua dan paling luas digunakan di web serta cara mencetak teks dinamis.",
    order: 1,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 1. Pengenalan PHP Modern: Sintaks Dasar, Tag <?php ?>, & Output

**PHP** (*PHP: Hypertext Preprocessor*) adalah bahasa pemrograman server-side yang dirancang khusus untuk pengembangan web. Kode PHP dieksekusi di server web, dan hasilnya dikirimkan ke browser pengguna dalam bentuk HTML murni.

---

## Tag Pembuka & Penutup PHP

Skrip PHP ditulis di antara tag \`<?php\` dan \`?>\`:

\`\`\`php
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Halaman PHP Pertama</title>
</head>
<body>
    <h1>Selamat Datang di KodeLuma</h1>
    <p>Waktu server: <?php echo date('d-m-Y H:i:s'); ?></p>
</body>
</html>
\`\`\`

> **Tips PHP Modern:** Jika berkas Anda hanya berisi kode PHP murni tanpa markup HTML, **jangan sertakan tag penutup \`?>\`**. Hal ini mencegah pengiriman spasi atau baris kosong yang tidak disengaja ke HTTP header.
`
  },
  {
    id: "lesson-php-02",
    courseId: "course-php-19",
    slug: "variabel-tipe-data-array-asosiatif",
    title: "2. Variabel ($), Tipe Data, & Array Asosiatif",
    summary: "Kuasai penamaan variabel dengan simbol $, array numerik vs array asosiatif (key-value pair).",
    order: 2,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 2. Variabel ($), Tipe Data, & Array Asosiatif

Di PHP, semua variabel diawali dengan tanda dollar (\`$\`) diikuti nama identifier. PHP bersifat *loosely typed*, sehingga tipe data variabel ditentukan secara dinamis berdasarkan nilainya.

---

## 1. Tipe Data Primitif

\`\`\`php
$namaLengkap = "Azzam Codex";  // String
$skorPoin = 850;               // Integer
$ipk = 3.92;                   // Float
$isMemberAktif = true;         // Boolean
\`\`\`

---

## 2. Array Numerik & Array Asosiatif

Di PHP, array sangat fleksibel dan dapat berfungsi sebagai list maupun hashmap/dictionary:

\`\`\`php
// Array Numerik (Indeks angka 0, 1, 2):
$bahasa = ["PHP", "JavaScript", "Python"];
echo $bahasa[0]; // "PHP"

// Array Asosiatif (Pasangan Kunci => Nilai):
$profil = [
    "username" => "azzam",
    "email"    => "azzam@kodeluma.dev",
    "role"     => "admin"
];

echo $profil["email"]; // "azzam@kodeluma.dev"
\`\`\`
`
  },
  {
    id: "lesson-php-03",
    courseId: "course-php-19",
    slug: "pemrosesan-formulir-get-post",
    title: "3. Pemrosesan Formulir: Superglobal $_GET dan $_POST",
    summary: "Tangani data formulir HTML dari pengguna secara aman dan pahami perbedaan metode GET vs POST.",
    order: 3,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 3. Pemrosesan Formulir: Superglobal $_GET dan $_POST

PHP menyediakan variabel global bawaan bernama **Superglobals** yang selalu dapat diakses di seluruh scope fungsi tanpa perlu deklarasi tambahan.

---

## Perbandingan \`$_GET\` vs \`$_POST\`

- **\`$_GET\`**: Data dikirimkan melalui URL parameter (\`halaman.php?cari=php&page=1\`). Cocok untuk pencarian dan pagination; dapat di-bookmark. *Jangan gunakan untuk password!*
- **\`$_POST\`**: Data dikirimkan di dalam HTTP request body. Tidak terlihat di URL browser; cocok untuk login, upload berkas, dan pendaftaran.

---

## Contoh Penanganan Form POST:

\`\`\`php
<?php
$pesanSukses = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitasi input teks untuk mencegah serangan XSS:
    $nama = htmlspecialchars(trim($_POST["nama"] ?? ""));
    $email = filter_var($_POST["email"] ?? "", FILTER_VALIDATE_EMAIL);

    if ($nama && $email) {
        $pesanSukses = "Terima kasih, {$nama}! Pendaftaran berhasil.";
    } else {
        $error = "Mohon isi formulir dengan format yang benar.";
    }
}
?>

<form method="POST" action="">
    <input type="text" name="nama" placeholder="Nama Lengkap" required>
    <input type="email" name="email" placeholder="Alamat Email" required>
    <button type="submit">Kirim Data</button>
</form>
\`\`\`
`
  },
  {
    id: "lesson-php-04",
    courseId: "course-php-19",
    slug: "manajemen-sesi-cookie-autentikasi",
    title: "4. Manajemen State: Session & Cookie untuk Login Pengguna",
    summary: "Pelajari cara kerja session_start(), penyimpanan sesi di server, dan cookie di peramban klien.",
    order: 4,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 4. Manajemen State: Session & Cookie untuk Login Pengguna

Protokol HTTP bersifat *stateless* (tidak mengingat interaksi sebelumnya). Untuk membuat sistem login, PHP menggunakan **Session** dan **Cookie**.

---

## Cara Kerja Session:
1. Ketika \`session_start()\` dipanggil, PHP membuat ID sesi unik (misal: \`PHPSESSID=abc123xyz\`).
2. ID sesi dikirim ke browser klien sebagai Cookie HTTP.
3. Data sesi pengguna aktual tersimpan aman di server di dalam superglobal \`$_SESSION\`.

---

## Contoh Autentikasi Sesi Sederhana:

\`\`\`php
<?php
// login.php
session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Verifikasi kredensial (misal ke database)
    if ($email === "admin@kodeluma.dev" && $password === "rahasia123") {
        $_SESSION["user_id"] = "usr-01";
        $_SESSION["role"] = "admin";
        header("Location: dashboard.php");
        exit();
    }
}
?>
\`\`\`

\`\`\`php
<?php
// dashboard.php
session_start();

// Proteksi halaman privat:
if (!isset($_SESSION["user_id"])) {
    header("Location: login.php");
    exit();
}

echo "Halo Admin, ID Anda: " . $_SESSION["user_id"];
?>
\`\`\`
`
  },
  {
    id: "lesson-php-05",
    courseId: "course-php-19",
    slug: "koneksi-database-mysql-pdo",
    title: "5. Koneksi Basis Data MySQL Modern dengan PDO (PHP Data Objects)",
    summary: "Tinggalkan mysql_* lawas; gunakan PDO dengan Prepared Statements untuk keamanan 100% anti SQL Injection.",
    order: 5,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 5. Koneksi Basis Data MySQL Modern dengan PDO (PHP Data Objects)

**PDO** (*PHP Data Objects*) adalah antarmuka standar industri untuk berinteraksi dengan basis data relasional di PHP. PDO mendukung prepared statements yang secara otomatis memisahkan kode kueri dari parameter input pengguna.

---

## 1. Membuka Koneksi PDO dengan Try-Catch

\`\`\`php
$dsn = "mysql:host=localhost;dbname=kodeluma;charset=utf8mb4";
$username = "root";
$password = "";

try {
    $pdo = new PDO($dsn, $username, $password, [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ]);
} catch (PDOException $e) {
    die("Koneksi basis data gagal: " . $e->getMessage());
}
\`\`\`

---

## 2. Prepared Statements Menggunakan Named Parameters

\`\`\`php
// Mencegah SQL Injection dengan tanda titik dua (:parameter)
$stmt = $pdo->prepare("SELECT id, nama, email FROM pengguna WHERE role = :role");
$stmt->execute(['role' => 'student']);

$daftarSiswa = $stmt->fetchAll();

foreach ($daftarSiswa as $siswa) {
    echo "<li>" . htmlspecialchars($siswa['nama']) . "</li>";
}
\`\`\`
`
  },
  {
    id: "lesson-php-06",
    courseId: "course-php-19",
    slug: "keamanan-web-sanitasi-csrf-xss",
    title: "6. Keamanan Web PHP: Pencegahan XSS, CSRF, & Password Hashing",
    summary: "Lindungi website dari serangan siber paling umum menggunakan password_hash, token CSRF, dan htmlspecialchars.",
    order: 6,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 6. Keamanan Web PHP: Pencegahan XSS, CSRF, & Password Hashing

Sebagai bahasa yang mengeksekusi input pengguna secara langsung, memahami dasar-dasar pertahanan keamanan web adalah keharusan mutlak bagi pengembang PHP.

---

## 1. Password Hashing dengan \`password_hash()\` & \`password_verify()\`

Jangan pernah menyimpan password pengguna dalam bentuk plain text atau hash MD5/SHA1 yang rentan terhadap rainbow table!

\`\`\`php
// Saat Pendaftaran: Buat hash aman menggunakan algoritma Argon2 / Bcrypt:
$hashPassword = password_hash($inputPassword, PASSWORD_DEFAULT);

// Saat Login: Verifikasi apakah password cocok dengan hash:
if (password_verify($inputPassword, $hashPassword)) {
    echo "Password benar!";
} else {
    echo "Password salah!";
}
\`\`\`

---

## 2. Pencegahan Serangan Cross-Site Scripting (XSS)

Setiap data string yang dicetak ke HTML wajib disanitasi dengan \`htmlspecialchars()\`:
\`\`\`php
echo htmlspecialchars($komentarPengguna, ENT_QUOTES, 'UTF-8');
\`\`\`
`
  }
];
