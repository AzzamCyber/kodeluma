// lessons-go.mjs
// 6 Comprehensive W3Schools/MDN-grade lessons for Go (Golang) Dasar & Concurrency (course-go-16)

export const GO_LESSONS = [
  {
    id: "lesson-go-01",
    courseId: "course-go-16",
    slug: "pengenalan-go-sintaks-dasar-kompilasi",
    title: "1. Pengenalan Go, Filosofi Desain, & Program Hello World",
    summary: "Pelajari bahasa Go dari Google, kecepatan kompilasi native machine code, dan struktur package main.",
    order: 1,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 1. Pengenalan Go, Filosofi Desain, & Program Hello World

**Go** (atau sering disebut Golang) adalah bahasa pemrograman open source yang dikembangkan oleh Robert Griesemer, Rob Pike, dan Ken Thompson di Google. Go dirancang untuk menggabungkan kemudahan pengembangan seperti Python dengan kecepatan dan keamanan memori seperti C++.

---

## Karakteristik Utama Bahasa Go:
- **Kompilasi ke Native Binary**: Menghasilkan satu file binary independen tanpa perlu runtime virtual machine.
- **Garbage Collection Efisien**: Manajemen memori otomatis dengan latensi sangat rendah.
- **Sintaks Minimalis & Bersih**: Tidak ada class inheritance rumit, tidak ada exception handling try/catch berlebih.
- **Konkurensi Kelas Satu (First-Class Concurrency)**: Dukungan bawaan untuk ribuan thread ringan via Goroutines.

---

## Program Pertama: Hello World!

\`\`\`go
// main.go
package main

import "fmt"

func main() {
    fmt.Println("Halo dari bahasa Go di KodeLuma!")
}
\`\`\`

Jalankan langsung:
\`\`\`bash
go run main.go
\`\`\`

Atau build menjadi binary executable:
\`\`\`bash
go build -o program_saya main.go
./program_saya
\`\`\`
`
  },
  {
    id: "lesson-go-02",
    courseId: "course-go-16",
    slug: "variabel-tipe-data-statis-konstanta",
    title: "2. Variabel, Tipe Data Statis, & Operator Walrus (:=)",
    summary: "Pahami static typing yang ketat di Go, inferensi tipe otomatis dengan :=, dan deklarasi konstanta.",
    order: 2,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 2. Variabel, Tipe Data Statis, & Operator Walrus (:=)

Go adalah bahasa dengan pengetikan statis (*statically typed*), artinya tipe setiap variabel diperiksa pada saat kompilasi dan tidak bisa berubah di tengah jalan.

---

## Deklarasi Variabel

Ada dua cara mendeklarasikan variabel di Go:

### 1. Deklarasi Standar dengan kata kunci \`var\`:
\`\`\`go
var nama string = "Azzam"
var umur int = 25
var aktif bool = true
\`\`\`

### 2. Short Variable Declaration (Operator Walrus \`:=\`):
Go secara otomatis menebak (*type inference*) tipe data berdasarkan nilai yang diisi:
\`\`\`go
kota := "Jakarta"     // Otomatis bertipe string
xpPoin := 1250        // Otomatis bertipe int
persentase := 98.5    // Otomatis bertipe float64
\`\`\`

> **Aturan Tegas Compiler Go:** Setiap variabel yang dideklarasikan di dalam fungsi **wajib digunakan**! Jika tidak, compiler akan melempar error dan menolak kompilasi.
`
  },
  {
    id: "lesson-go-03",
    courseId: "course-go-16",
    slug: "fungsi-multiple-return-error-handling",
    title: "3. Fungsi, Multiple Return Values, & Idiomatis Error Handling",
    summary: "Manfaatkan kemampuan fungsi mengembalikan lebih dari satu nilai dan tangani error tanpa try/catch.",
    order: 3,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 3. Fungsi, Multiple Return Values, & Idiomatis Error Handling

Berbeda dengan sebagian besar bahasa lain yang melempar Exception (seperti Java atau JavaScript), Go memperlakukan error sebagai **nilai biasa (*error values*)**.

---

## Fungsi dengan Lebih dari Satu Nilai Return

Fungsi di Go dapat mengembalikan beberapa nilai sekaligus. Pola paling umum adalah mengembalikan \`(hasil, error)\`:

\`\`\`go
package main

import (
    "errors"
    "fmt"
)

// Mengembalikan dua nilai: float64 dan error
func bagiAngka(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("pembagian dengan nol tidak diperbolehkan")
    }
    return a / b, nil
}

func main() {
    hasil, err := bagiAngka(10, 2)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Printf("Hasil pembagian: %.2f\n", hasil)

    // Contoh penanganan kasus gagal:
    _, errGagal := bagiAngka(10, 0)
    if errGagal != nil {
        fmt.Println("Penanganan error berhasil:", errGagal)
    }
}
\`\`\`
`
  },
  {
    id: "lesson-go-04",
    courseId: "course-go-16",
    slug: "struct-pointer-dan-method-receiver",
    title: "4. Struct, Pointer, & Method Receiver (OOP ala Go)",
    summary: "Rancang model data dengan Struct, manipulasi referensi memori dengan Pointer, dan tambahkan methods.",
    order: 4,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 4. Struct, Pointer, & Method Receiver (OOP ala Go)

Go tidak memiliki kata kunci \`class\`. Sebagai gantinya, Go menggunakan **Struct** untuk membungkus data dan **Method Receiver** untuk memberikan perilaku.

---

## 1. Mendefinisikan Struct

\`\`\`go
type Siswa struct {
    ID     string
    Nama   string
    Nilai  int
    Alamat string
}
\`\`\`

---

## 2. Pointer vs Value Receiver

- **Value Receiver \`(s Siswa)\`**: Menerima salinan (*copy*) objek. Modifikasi di dalam method tidak mempengaruhi objek asli.
- **Pointer Receiver \`(s *Siswa)\`**: Menerima referensi alamat memori (\`*\`). Memungkinkan method mengubah field objek asli dan menghemat memori.

\`\`\`go
// Pointer Receiver: Memodifikasi nilai asli siswa
func (s *Siswa) TambahPoin(poinBaru int) {
    s.Nilai += poinBaru
}

// Value Receiver: Hanya membaca nilai
func (s Siswa) TampilkanInfo() string {
    return fmt.Sprintf("Siswa %s memiliki skor: %d", s.Nama, s.Nilai)
}

func main() {
    budi := Siswa{ID: "s-01", Nama: "Budi Santoso", Nilai: 80}
    budi.TambahPoin(15) // Nilai budi berubah menjadi 95!
    fmt.Println(budi.TampilkanInfo())
}
\`\`\`
`
  },
  {
    id: "lesson-go-05",
    courseId: "course-go-16",
    slug: "goroutines-konkurensi-ringan",
    title: "5. Goroutines: Eksekusi Multithreading Ringan Skala Ribuan",
    summary: "Jalankan fungsi konkuren dengan awalan kata kunci 'go' yang hanya menghabiskan 2KB memori stack.",
    order: 5,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 5. Goroutines: Eksekusi Multithreading Ringan Skala Ribuan

Thread sistem operasi standar biasanya memakan memori stack sekitar 1-2 Megabyte. Sebaliknya, sebuah **Goroutine** hanya membutuhkan **sekitar 2 Kilobyte** saat dimulai, memungkinkan server menjalankan 100.000 Goroutine sekaligus di satu mesin tanpa kehabisan RAM!

---

## Memulai Goroutine dengan Kata Kunci \`go\`

Cukup tambahkan kata kunci \`go\` di depan pemanggilan fungsi:

\`\`\`go
package main

import (
    "fmt"
    "time"
)

func cetakPesan(teks string) {
    for i := 1; i <= 3; i++ {
        fmt.Printf("[%d] %s\n", i, teks)
        time.Sleep(100 * time.Millisecond)
    }
}

func main() {
    // Menjalankan fungsi di thread Goroutine terpisah secara konkuren:
    go cetakPesan("Tugas Latar Belakang A")
    go cetakPesan("Tugas Latar Belakang B")

    // Menunggu sejenak agar thread utama tidak langsung selesai
    time.Sleep(500 * time.Millisecond)
    fmt.Println("Selesai mengeksekusi semua tugas!")
}
\`\`\`
`
  },
  {
    id: "lesson-go-06",
    courseId: "course-go-16",
    slug: "channels-dan-sinkronisasi-select",
    title: "6. Channels & Pola Sinkronisasi dengan Select",
    summary: "Hubungkan antar Goroutine dengan Channel aman tanpa race condition dan kelola multi-channel via select.",
    order: 6,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 6. Channels & Pola Sinkronisasi dengan Select

Jika Anda menjalankan banyak Goroutine, bagaimana cara mereka saling bertukar data tanpa merusak memori? Jawabannya adalah **Channels**.

---

## Mengirim & Menerima Data via Channel (\`ch <-\` dan \`<- ch\`)

\`\`\`go
package main

import "fmt"

func hitungKuadrat(angka int, hasilChan chan int) {
    // Mengirim hasil ke channel:
    hasilChan <- angka * angka
}

func main() {
    // Membuat channel bertipe int
    ch := make(chan int)

    // Jalankan goroutine
    go hitungKuadrat(8, ch)
    go hitungKuadrat(10, ch)

    // Menerima nilai dari channel (bersifat blocking sampai data tersedia):
    hasil1 := <-ch
    hasil2 := <-ch

    fmt.Printf("Hasil 1: %d, Hasil 2: %d\n", hasil1, hasil2)
}
\`\`\`

---

## Pernyataan \`select\` untuk Multiplexing Channel

\`\`\`go
select {
case pesan1 := <-chan1:
    fmt.Println("Menerima dari server 1:", pesan1)
case pesan2 := <-chan2:
    fmt.Println("Menerima dari server 2:", pesan2)
case <-time.After(2 * time.Second):
    fmt.Println("Timeout: Server tidak merespons dalam 2 detik")
}
\`\`\`
`
  }
];
