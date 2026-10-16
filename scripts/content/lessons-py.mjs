// lessons-py.mjs
// 8 Comprehensive W3Schools/MDN-grade lessons for Python OOP & Pemrograman Lanjutan (course-py-int-12)

export const PY_MENENGAH_LESSONS = [
  {
    id: "lesson-py-int-01",
    courseId: "course-py-int-12",
    slug: "paradigma-oop-class-objek-init",
    title: "1. Paradigma OOP: Class, Objek, dan Method __init__",
    summary: "Bangun cetak biru objek, pahami parameter self, serta inisialisasi state dengan konstruktor __init__.",
    order: 1,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 1. Paradigma OOP: Class, Objek, dan Method __init__

*Object-Oriented Programming* (OOP) adalah paradigma pemrograman berbasis objek yang membungkus data (*attributes*) dan fungsi (*methods*) ke dalam satu kesatuan modular.

---

## 1. Class sebagai Cetak Biru (Blueprint)

Sebuah **Class** adalah cetak biru, sedangkan **Object (Instance)** adalah wujud nyata yang dibuat dari cetak biru tersebut.

\`\`\`python
class RekeningBank:
    # Class Attribute (Berlaku untuk semua instance)
    nama_bank = "Bank Mandiri KodeLuma"

    # Instance Constructor (__init__)
    def __init__(self, nomor_rekening: str, nama_pemilik: str, saldo_awal: float = 0.0):
        # Instance Attributes (Unik untuk setiap objek)
        self.nomor_rekening = nomor_rekening
        self.nama_pemilik = nama_pemilik
        self.saldo = saldo_awal

    def setor(self, jumlah: float) -> None:
        if jumlah > 0:
            self.saldo += jumlah
            print(f"Setoran Rp{jumlah:,.2f} berhasil. Saldo saat ini: Rp{self.saldo:,.2f}")
        else:
            raise ValueError("Jumlah setoran harus bernilai positif.")

# Pembuatan Objek
rekening_budi = RekeningBank("123-456-789", "Budi Santoso", 500_000.0)
rekening_budi.setor(250_000.0)
\`\`\`

---

## 2. Mengapa Membutuhkan Parameter \`self\`?

Parameter \`self\` merepresentasikan instance objek itu sendiri yang sedang memanggil method tersebut. Melalui \`self\`, Python mengetahui objek spesifik mana yang atributnya sedang dibaca atau diubah.
`
  },
  {
    id: "lesson-py-int-02",
    courseId: "course-py-int-12",
    slug: "enkapsulasi-atribut-privat-decorator-property",
    title: "2. Enkapsulasi, Atribut Privat, dan Decorator @property",
    summary: "Lindungi integritas data dengan name mangling private (__attr) dan buat getter/setter elegan via @property.",
    order: 2,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 2. Enkapsulasi, Atribut Privat, dan Decorator @property

**Enkapsulasi** adalah prinsip menyembunyikan detail implementasi internal dan melindungi atribut dari modifikasi langsung yang tidak sah atau merusak konsistensi data.

---

## 1. Konvensi Public vs Private di Python

Python menggunakan konvensi penamaan berbasis garis bawah (*underscores*):
- \`self.nama\`: Publik (bisa diakses bebas).
- \`self._saldo\`: *Protected* (konvensi internal, jangan diakses langsung di luar class).
- \`self.__pin\`: *Private* (memicu mekanisme *Name Mangling* menjadi \`_ClassName__pin\`).

---

## 2. Decorator \`@property\` untuk Getter & Setter Elegan

Di bahasa lain seperti Java atau C++, programmer sering membuat \`getSaldo()\` dan \`setSaldo()\`. Di Python, kita menggunakan decorator **\`@property\`** sehingga method bisa diakses layaknya variabel biasa namun dengan validasi ketat:

\`\`\`python
class Karyawan:
    def __init__(self, nama: str, gaji: float):
        self.nama = nama
        self._gaji = gaji

    # Getter: Dipanggil saat mengakses 'obj.gaji'
    @property
    def gaji(self) -> float:
        return self._gaji

    # Setter: Dipanggil saat menetapkan 'obj.gaji = nilai'
    @gaji.setter
    def gaji(self, nilai_baru: float) -> None:
        if nilai_baru < 0:
            raise ValueError("Gaji tidak boleh bernilai negatif!")
        self._gaji = nilai_baru

budi = Karyawan("Budi", 8_500_000.0)
print(budi.gaji)  # 8500000.0 (Memanggil getter)

budi.gaji = 9_000_000.0  # Memanggil setter dengan validasi
# budi.gaji = -1000      # Melempar ValueError!
\`\`\`
`
  },
  {
    id: "lesson-py-int-03",
    courseId: "course-py-int-12",
    slug: "pewarisan-inheritance-super-multiple-inheritance",
    title: "3. Pewarisan (Inheritance), Super(), dan Multiple Inheritance",
    summary: "Warisi fungsionalitas parent class, panggil inisialisasi induk dengan super(), dan pahami MRO.",
    order: 3,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 3. Pewarisan (Inheritance), Super(), dan Multiple Inheritance

Pewarisan (*Inheritance*) memungkinkan subclass mewarisi metode dan atribut dari superclass, mencegah duplikasi kode (*DRY - Don't Repeat Yourself*).

---

## 1. Pewarisan Tunggal & Fungsi \`super()\`

Fungsi \`super()\` mengembalikan proksi objek induk, memungkinkan kita memanggil method superclass tanpa menyebut namanya secara langsung:

\`\`\`python
class Pengguna:
    def __init__(self, email: str, nama: str):
        self.email = email
        self.nama = nama

    def tampilkan_profil(self) -> str:
        return f"{self.nama} ({self.email})"

class Siswa(Pengguna):
    def __init__(self, email: str, nama: str, nisn: str):
        # Memanggil konstruktor superclass
        super().__init__(email, nama)
        self.nisn = nisn

    # Menimpa (Override) method induk:
    def tampilkan_profil(self) -> str:
        return f"[SISWA] NISN: {self.nisn} - {super().tampilkan_profil()}"

siswa1 = Siswa("siswa@sekolah.id", "Dian Sastrowardoyo", "20260901")
print(siswa1.tampilkan_profil())
\`\`\`

---

## 2. Multiple Inheritance & MRO (Method Resolution Order)

Python mengizinkan sebuah class mewarisi lebih dari satu induk. Urutan pencarian method ditentukan oleh algoritma **C3 Linearization** yang tersimpan di atribut \`__mro__\`:

\`\`\`python
class LoggableMixin:
    def log(self, pesan: str):
        print(f"[LOG] {pesan}")

class NotifiableMixin:
    def kirim_notifikasi(self, tujuan: str, isi: str):
        print(f"[SMS/Email ke {tujuan}]: {isi}")

# Mewarisi 3 class sekaligus
class Pesanan(Pengguna, LoggableMixin, NotifiableMixin):
    pass

print(Pesanan.__mro__)
\`\`\`
`
  },
  {
    id: "lesson-py-int-04",
    courseId: "course-py-int-12",
    slug: "polimorfisme-duck-typing-abc",
    title: "4. Polimorfisme, Duck Typing, dan Abstract Base Classes (ABC)",
    summary: "Terapkan filosofi 'Duck Typing' dan tegaskan kontrak antarmuka menggunakan modul abc bawaan.",
    order: 4,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 4. Polimorfisme, Duck Typing, dan Abstract Base Classes (ABC)

Polimorfisme memungkinkan objek-objek dari kelas yang berbeda diperlakukan secara seragam jika mereka memiliki antarmuka yang cocok.

---

## 1. Filosofi Duck Typing di Python

Di Python berlaku pepatah: *"Jika ia berjalan seperti bebek dan bersuara seperti bebek, maka ia adalah bebek."* Python tidak mengecek tipe eksplisit suatu objek, melainkan mengecek apakah objek memiliki method yang dibutuhkan di runtime:

\`\`\`python
class PembayaranGopay:
    def bayar(self, jumlah: float):
        print(f"Membayar Rp{jumlah:,.2f} via QRIS Gopay")

class PembayaranKartuKredit:
    def bayar(self, jumlah: float):
        print(f"Membayar Rp{jumlah:,.2f} via Visa/Mastercard")

# Fungsi polimorfik (menerima gateway pembayaran apa pun):
def proses_transaksi(gateway, total_tagihan: float):
    gateway.bayar(total_tagihan)

proses_transaksi(PembayaranGopay(), 75_000.0)
proses_transaksi(PembayaranKartuKredit(), 250_000.0)
\`\`\`

---

## 2. Abstract Base Classes (ABC) untuk Menegaskan Kontrak

Jika Anda ingin memastikan bahwa subclass wajib mengimplementasikan method tertentu saat dibuat, gunakan modul bawaan \`abc\`:

\`\`\`python
from abc import ABC, abstractmethod

class NotifikasiService(ABC):
    @abstractmethod
    def kirim(self, penerima: str, pesan: str) -> bool:
        """Wajib diimplementasikan oleh setiap subclass"""
        pass

class WhatsAppNotifikasi(NotifikasiService):
    def kirim(self, penerima: str, pesan: str) -> bool:
        print(f"Kirim WA ke {penerima}: {pesan}")
        return True

# Mencoba menginstansiasi class tanpa mengimplementasikan abstractmethod 
# akan langsung melempar TypeError: Can't instantiate abstract class!
\`\`\`
`
  },
  {
    id: "lesson-py-int-05",
    courseId: "course-py-int-12",
    slug: "magic-dunder-methods-str-repr-len-eq",
    title: "5. Magic Dunder Methods: __str__, __repr__, __len__, __eq__",
    summary: "Kustomisasi representasi string, operator overloading (+, ==), dan integrasi fungsi bawaan Python.",
    order: 5,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 5. Magic Dunder Methods: __str__, __repr__, __len__, __eq__

**Dunder Methods** (*Double Underscore methods* atau *Magic Methods*) adalah method khusus di Python yang memungkinkan class Anda berinteraksi dengan operator bawaan (\`+\`, \`==\`, \`<\`) dan fungsi sistem seperti \`print()\`, \`len()\`, atau \`str()\`.

---

## 1. \`__str__\` vs \`__repr__\`

- **\`__str__\`**: Format teks yang ramah dan mudah dibaca oleh pengguna biasa saat dipanggil melalui \`print(obj)\` atau \`str(obj)\`.
- **\`__repr__\`**: Format teks eksplisit untuk debugging programmer (idealnya menampilkan cara merekonstruksi objek tersebut).

\`\`\`python
class Titik2D:
    def __init__(self, x: float, y: float):
        self.x = x
        self.y = y

    def __repr__(self) -> str:
        return f"Titik2D(x={self.x}, y={self.y})"

    def __str__(self) -> str:
        return f"Koordinat ({self.x}, {self.y})"

p = Titik2D(10.5, 20.0)
print(str(p))   # Koordinat (10.5, 20.0)
print(repr(p))  # Titik2D(x=10.5, y=20.0)
\`\`\`

---

## 2. Operator Overloading (\`__eq__\` dan \`__add__\`)

\`\`\`python
class KeranjangBelanja:
    def __init__(self, items: list[str]):
        self.items = items

    def __len__(self) -> int:
        return len(self.items)

    def __eq__(self, other) -> bool:
        if isinstance(other, KeranjangBelanja):
            return self.items == other.items
        return False

    def __add__(self, other: "KeranjangBelanja") -> "KeranjangBelanja":
        # Mengizinkan keranjang1 + keranjang2
        return KeranjangBelanja(self.items + other.items)

k1 = KeranjangBelanja(["Laptop", "Mouse"])
k2 = KeranjangBelanja(["Keyboard"])
k_gabungan = k1 + k2
print(len(k_gabungan))  # Output: 3
\`\`\`
`
  },
  {
    id: "lesson-py-int-06",
    courseId: "course-py-int-12",
    slug: "list-dict-set-comprehensions-lanjut",
    title: "6. List, Dict, & Set Comprehensions Tingkat Lanjut",
    summary: "Tulis transformasi data dan filtering dalam satu baris kode Pythonic yang cepat dan efisien.",
    order: 6,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 6. List, Dict, & Set Comprehensions Tingkat Lanjut

Comprehensions adalah salah satu fitur paling digemari di Python karena sintaksnya yang padat (*concise*), ekspresif, dan berjalan lebih cepat dibandingkan perulangan \`for\` konvensional di tingkat interpreter CPython.

---

## 1. Advanced List Comprehension dengan Kondisi

\`\`\`python
angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Kuadrat dari hanya angka genap:
kuadrat_genap = [x**2 for x in angka if x % 2 == 0]
# Hasil: [4, 16, 36, 64, 100]

# If-Else bersarang dalam List Comprehension:
label_ganjil_genap = ["Genap" if x % 2 == 0 else "Ganjil" for x in angka]
\`\`\`

---

## 2. Meratakan Matriks 2D (Flattening Matrix)

\`\`\`python
matriks = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Urutan 'for' sama persis seperti for bertingkat biasa:
angka_rata = [item for baris in matriks for item in baris]
# Hasil: [1, 2, 3, 4, 5, 6, 7, 8, 9]
\`\`\`

---

## 3. Dictionary & Set Comprehension

\`\`\`python
pengguna_raw = [
    {"id": "u1", "username": "azzam", "aktif": True},
    {"id": "u2", "username": "budi", "aktif": False},
    {"id": "u3", "username": "citra", "aktif": True}
]

# Mengubah list objek menjadi mapping index cepat {id: username} hanya untuk yang aktif:
map_aktif = {u["id"]: u["username"] for u in pengguna_raw if u["aktif"]}
# Hasil: {'u1': 'azzam', 'u3': 'citra'}
\`\`\`
`
  },
  {
    id: "lesson-py-int-07",
    courseId: "course-py-int-12",
    slug: "iterators-generators-pernyataan-yield",
    title: "7. Iterators & Generators dengan Pernyataan yield",
    summary: "Proses dataset besar jutaan baris tanpa kehabisan RAM menggunakan Lazy Evaluation.",
    order: 7,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 7. Iterators & Generators dengan Pernyataan yield

Ketika memproses file CSV bergiga-gita atau stream data dari database, memuat seluruh data ke dalam \`list\` di memori akan menyebabkan server mengalami *Out Of Memory* (OOM). Solusinya adalah **Generators**.

---

## 1. Kata Kunci \`yield\` & Lazy Evaluation

Fungsi generator tidak menggunakan \`return\`, melainkan **\`yield\`**. Setiap kali \`yield\` dieksekusi, generator menjeda status fungsinya dan mengembalikan nilai ke pemanggil. Saat dipanggil lagi, ia melanjutkan dari baris yang dijeda tersebut:

\`\`\`python
from typing import Generator

def deret_fibonacci(batas: int) -> Generator[int, None, None]:
    a, b = 0, 1
    while a < batas:
        yield a
        a, b = b, a + b

# Memanggil generator tidak langsung mengeksekusi seluruh perulangan:
fibo_gen = deret_fibonacci(100)
for angka in fibo_gen:
    print(angka, end=" ")
# Output: 0 1 1 2 3 5 8 13 21 34 55 89
\`\`\`

---

## 2. Generator Expressions (Efisiensi Memori Ekstrem)

Mirip list comprehension, namun menggunakan tanda kurung biasa \`()\`:

\`\`\`python
import sys

# List: 10 juta angka langsung disimpan di RAM (~80 Megabyte)
# list_angka = [x for x in range(10_000_000)]

# Generator: Hanya menyimpan logika generator (~100 Byte!)
gen_angka = (x for x in range(10_000_000))

print("Ukuran RAM Generator:", sys.getsizeof(gen_angka), "bytes")
\`\`\`
`
  },
  {
    id: "lesson-py-int-08",
    courseId: "course-py-int-12",
    slug: "custom-decorators-context-managers",
    title: "8. Custom Decorators & Context Managers (with statement)",
    summary: "Rancang decorator pembungkus fungsi (@timer, @auth) dan kelola resource otomatis via contextmanager.",
    order: 8,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 8. Custom Decorators & Context Managers (with statement)

Dua fitur paling elegan untuk menulis kode bersih dan terstruktur di Python adalah **Decorators** dan **Context Managers**.

---

## 1. Membuat Custom Decorator dengan \`functools.wraps\`

Decorator adalah fungsi yang menerima fungsi lain sebagai argumen dan memperluas perilakunya tanpa memodifikasi kode aslinya:

\`\`\`python
import time
from functools import wraps

def ukur_waktu_eksekusi(func):
    @wraps(func)
    def pembungkus(*args, **kwargs):
        waktu_mulai = time.perf_counter()
        hasil = func(*args, **kwargs)
        durasi = time.perf_counter() - waktu_mulai
        print(f"[BENCHMARK] Fungsi '{func.__name__}' selesai dalam {durasi:.6f} detik.")
        return hasil
    return pembungkus

@ukur_waktu_eksekusi
def hitung_faktorial(n: int) -> int:
    hasil = 1
    for i in range(1, n + 1):
        hasil *= i
    return hasil

hitung_faktorial(5000)
\`\`\`

---

## 2. Context Manager dengan \`contextlib.contextmanager\`

Context manager menjamin pelepasan sumber daya (menutup koneksi database, file, lock thread) bahkan jika terjadi exception di tengah eksekusi:

\`\`\`python
from contextlib import contextmanager

@contextmanager
def sesi_transaksi_redis(kunci_lock: str):
    print(f"--> [LOCK] Memperoleh kunci lock: {kunci_lock}")
    try:
        yield
        print("--> [COMMIT] Transaksi berhasil disimpan ke Redis.")
    except Exception as e:
        print(f"--> [ROLLBACK] Terjadi kegagalan: {e}, membatalkan transaksi!")
        raise
    finally:
        print(f"--> [UNLOCK] Melepaskan kunci lock: {kunci_lock}")

# Penggunaan aman dengan blok 'with':
with sesi_transaksi_redis("kl:v1:transaksi:user-123"):
    print("Memproses transfer saldo poin...")
\`\`\`
`
  }
];
