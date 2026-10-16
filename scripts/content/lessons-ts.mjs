// lessons-ts.mjs
// 10 Comprehensive W3Schools/MDN-grade lessons for TypeScript Lanjutan & Generics (course-ts-int-10)

export const TS_MENENGAH_LESSONS = [
  {
    id: "lesson-ts-int-01",
    courseId: "course-ts-int-10",
    slug: "type-aliases-vs-interfaces-declaration-merging",
    title: "1. Type Aliases vs Interfaces & Declaration Merging",
    summary: "Pahami perbedaan mendasar kapan menggunakan type alias vs interface, serta konsep Declaration Merging.",
    order: 1,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 1. Type Aliases vs Interfaces & Declaration Merging

Dalam TypeScript tingkat menengah, salah satu keputusan desain paling sering ditemui adalah memilih antara \`interface\` dan \`type\`. Keduanya serupa, namun memiliki kapabilitas dan batasan arsitektural yang berbeda.

---

## Perbandingan: Interface vs Type Alias

| Fitur | \`interface\` | \`type\` Alias |
| :--- | :--- | :--- |
| **Bentuk Data** | Objek & fungsi | Semua tipe (primitif, union, tuple, objek) |
| **Ekstensi** | \`extends\` | Intersection (\`&\`) |
| **Declaration Merging** | Ya (otomatis digabung jika nama sama) | Tidak (akan melempar compile error) |
| **Penggunaan Ideal** | OOP, kontrak library publik, model data | Union types, tuple, transformasi tipe tingkat lanjut |

---

## 1. Konsep Declaration Merging

Jika Anda mendeklarasikan dua interface dengan nama yang sama dalam scope yang sama, TypeScript akan otomatis menggabungkan keduanya menjadi satu interface gabungan:

\`\`\`typescript
interface Pengguna {
  id: string;
  nama: string;
}

// Deklarasi kedua di tempat atau modul lain:
interface Pengguna {
  email: string;
  role: 'admin' | 'student';
}

// Hasil akhir Pengguna memiliki id, nama, email, dan role:
const adminBaru: Pengguna = {
  id: "usr-01",
  nama: "Azzam",
  email: "azzam@example.com",
  role: "admin"
};
\`\`\`

> **Tips Arsitektur:** Declaration Merging sangat berguna untuk meng-extend third-party types dari node_modules (misalnya menambahkan properti kustom pada objek \`Window\` atau \`Express.Request\`).

---

## 2. Kapan Menggunakan Type Alias?

Gunakan \`type\` saat membutuhkan ekspresi union atau manipulasi primitif:

\`\`\`typescript
// Union Types & Template Literals
type StatusPesanan = 'menunggu_pembayaran' | 'diproses' | 'dikirim' | 'selesai';
type HexColor = \`#\${string}\`;

// Tuple untuk data berurutan
type TitikKoordinat = [latitude: number, longitude: number];
\`\`\`
`
  },
  {
    id: "lesson-ts-int-02",
    courseId: "course-ts-int-10",
    slug: "discriminated-unions-exhaustive-checking",
    title: "2. Discriminated Unions & Exhaustive Checking",
    summary: "Manfaatkan tagged union pattern dan tipe never untuk verifikasi compile-time yang 100% aman.",
    order: 2,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 2. Discriminated Unions & Exhaustive Checking

**Discriminated Union** (disebut juga Tagged Union atau Algebraic Data Types) adalah salah satu fitur paling ampuh di TypeScript untuk memodelkan state aplikasi yang saling eksklusif secara aman.

---

## Konsep: Tiga Komponen Discriminated Union

Sebuah Discriminated Union memiliki 3 elemen utama:
1. Beberapa tipe objek yang berbeda.
2. Setiap objek memiliki properti pembeda yang sama (*discriminant property*) dengan tipe literal unik (biasanya properti seperti \`type\`, \`kind\`, atau \`status\`).
3. Tipe gabungan (*union*) dari objek-objek tersebut.

---

## Contoh Kasus: Penanganan Respons Jaringan

\`\`\`typescript
interface StateMemuat {
  status: 'loading';
}

interface StateSukses {
  status: 'success';
  data: string[];
  diambilPada: Date;
}

interface StateGagal {
  status: 'error';
  pesanError: string;
  kodeStatus: number;
}

// Union tipe gabungan:
type StatusPermintaan = StateMemuat | StateSukses | StateGagal;
\`\`\`

---

## Exhaustive Checking dengan Tipe \`never\`

Gunakan tipe bawaan \`never\` di blok default percabangan (\`switch\`) untuk memastikan seluruh variasi kondisi telah ditangani. Jika di kemudian hari Anda menambahkan status baru tapi lupa menanganinya, TypeScript akan memberi peringatan saat build:

\`\`\`typescript
function renderTampilan(state: StatusPermintaan) {
  switch (state.status) {
    case 'loading':
      return "Sedang memuat data...";
    case 'success':
      return \`Data diterima: \${state.data.length} item.\`;
    case 'error':
      return \`Error (\${state.kodeStatus}): \${state.pesanError}\`;
    default: {
      // Jika semua case ditangani, tipe state di sini adalah 'never'
      const _exhaustiveCheck: never = state;
      throw new Error(\`Status tidak dikenal: \${JSON.stringify(_exhaustiveCheck)}\`);
    }
  }
}
\`\`\`
`
  },
  {
    id: "lesson-ts-int-03",
    courseId: "course-ts-int-10",
    slug: "generic-functions-classes-interfaces",
    title: "3. Generic Functions, Interfaces, & Classes",
    summary: "Buat kode yang reusable dan type-safe tanpa menggunakan 'any' dengan parameter Generic.",
    order: 3,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 3. Generic Functions, Interfaces, & Classes

Generics memungkinkan Anda menulis fungsi, class, dan interface yang dapat bekerja dengan beragam tipe data sambil mempertahankan keamanan tipe (*type safety*), alih-alih menurunkan derajat kode ke \`any\`.

---

## 1. Generic Functions

Simbol \`<T>\` adalah placeholder tipe yang akan diisi secara otomatis oleh compiler berdasarkan argumen yang dilewatkan:

\`\`\`typescript
// Fungsi pembalik array generic
function balikArray<T>(items: T[]): T[] {
  return [...items].reverse();
}

const angka = balikArray([1, 2, 3, 4]); // Bertipe number[]
const teks = balikArray(["a", "b", "c"]); // Bertipe string[]
\`\`\`

---

## 2. Generic Interfaces untuk Wrapper Data API

Dalam arsitektur backend/frontend, respons API umumnya memiliki format pembungkus (*wrapper*) standar:

\`\`\`typescript
interface ResponsApi<TData> {
  sukses: boolean;
  pesan: string;
  kodeHttp: number;
  data: TData;
}

interface ProfilSiswa {
  id: string;
  nama: string;
  xp: number;
}

// Respons bertipe terstruktur:
const respons: ResponsApi<ProfilSiswa> = {
  sukses: true,
  pesan: "Profil berhasil dimuat",
  kodeHttp: 200,
  data: {
    id: "std-99",
    nama: "Budi Santoso",
    xp: 450
  }
};
\`\`\`

---

## 3. Generic Classes: Antrian Data (Queue)

\`\`\`typescript
class Antrean<T> {
  private elemen: T[] = [];

  masuk(item: T): void {
    this.elemen.push(item);
  }

  keluar(): T | undefined {
    return this.elemen.shift();
  }

  get panjang(): number {
    return this.elemen.length;
  }
}

const antreanNama = new Antrean<string>();
antreanNama.masuk("Dewi");
antreanNama.masuk("Agus");
console.log(antreanNama.keluar()); // "Dewi"
\`\`\`
`
  },
  {
    id: "lesson-ts-int-04",
    courseId: "course-ts-int-10",
    slug: "generic-constraints-kata-kunci-extends",
    title: "4. Generic Constraints & kata kunci extends",
    summary: "Batasi parameter tipe generik agar memiliki properti wajib dengan batasan 'T extends Interface'.",
    order: 4,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 4. Generic Constraints & kata kunci extends

Secara bawaan, parameter generic \`<T>\` menerima tipe apa saja (seperti \`unknown\`). Sering kali kita perlu memastikan bahwa tipe \`T\` memiliki metode atau properti spesifik tertentu. Di sinilah **Generic Constraints** digunakan.

---

## Sintaks Pembatasan (\`extends\`)

\`\`\`typescript
interface MemilikiId {
  id: string | number;
}

// T dibatasi: wajib memiliki properti 'id'
function cariBerdasarkanId<T extends MemilikiId>(koleksi: T[], targetId: string | number): T | undefined {
  return koleksi.find(item => item.id === targetId);
}

const daftarProduk = [
  { id: 101, judul: "Buku TypeScript", harga: 95000 },
  { id: 102, judul: "Kursus CSS", harga: 120000 }
];

const hasil = cariBerdasarkanId(daftarProduk, 101); // Valid & type-safe!
\`\`\`

---

## Menggunakan Multiple Generic Constraints

Kita juga bisa mengombinasikan batasan beberapa tipe menggunakan operator intersection (\`&\`):

\`\`\`typescript
interface Bernama {
  nama: string;
}

interface Berumur {
  usia: number;
}

function cetakBiodata<T extends Bernama & Berumur>(obj: T): void {
  console.log(\`Nama: \${obj.nama}, Usia: \${obj.usia} tahun\`);
}

cetakBiodata({ nama: "Rian", usia: 24, alamat: "Jakarta" }); // Berhasil!
\`\`\`
`
  },
  {
    id: "lesson-ts-int-05",
    courseId: "course-ts-int-10",
    slug: "operator-keyof-typeof-indexed-access-types",
    title: "5. Operator keyof, typeof, dan Indexed Access Types",
    summary: "Ekstrak properti dan tipe secara dinamis langsung dari objek dan definisi tipe data.",
    order: 5,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 5. Operator keyof, typeof, dan Indexed Access Types

TypeScript menyediakan sekumpulan operator tipe yang memungkinkan Anda mengekstrak, merefleksikan, dan menghubungkan tipe data secara dinamis.

---

## 1. Operator \`keyof\`

Operator \`keyof\` mengambil tipe objek dan menghasilkan union dari semua nama kuncinya (*string atau number literal union*):

\`\`\`typescript
interface KursusOnline {
  id: string;
  judul: string;
  durasiJam: number;
  terbit: boolean;
}

// Tipe PropertiKursus bernilai: 'id' | 'judul' | 'durasiJam' | 'terbit'
type PropertiKursus = keyof KursusOnline;
\`\`\`

---

## 2. Operator \`typeof\` dalam Konteks Tipe

Dalam TypeScript, \`typeof\` bisa digunakan di tingkat tipe untuk menyalin struktur tipe dari variabel JavaScript nyata:

\`\`\`typescript
const temaKonfigurasi = {
  warnaUtama: "#3b82f6",
  modeGelap: true,
  ukuranFontDefault: 16
};

// Menghasilkan tipe: { warnaUtama: string; modeGelap: boolean; ukuranFontDefault: number; }
type TemaAplikasi = typeof temaKonfigurasi;
\`\`\`

---

## 3. Indexed Access Types (\`T[K]\`)

Sama seperti mengambil nilai objek dengan \`obj['key']\`, Anda bisa mengambil tipe nilai properti spesifik dari suatu tipe:

\`\`\`typescript
type TipeDurasi = KursusOnline['durasiJam']; // number
type TipeIdAtauJudul = KursusOnline['id' | 'judul']; // string
\`\`\`

### Kombinasi Super Kuat: Fungsi \`ambilProperti()\`
\`\`\`typescript
function ambilProperti<T, K extends keyof T>(objek: T, kunci: K): T[K] {
  return objek[kunci];
}

const siswa = { id: "101", nama: "Farhan", skor: 98 };
const skor = ambilProperti(siswa, "skor"); // Otomatis bertipe number!
\`\`\`
`
  },
  {
    id: "lesson-ts-int-06",
    courseId: "course-ts-int-10",
    slug: "conditional-types-kata-kunci-infer",
    title: "6. Conditional Types & kata kunci infer",
    summary: "Buat percabangan logika tingkat tipe data (T extends U ? X : Y) dan ekstraksi tipe dengan infer.",
    order: 6,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 6. Conditional Types & kata kunci infer

Conditional Types memungkinkan pengambilan keputusan tipe data pada saat kompilasi dengan sintaks mirip ternary operator: \`T extends U ? X : Y\`.

---

## 1. Fondasi Conditional Types

\`\`\`typescript
// Menentukan tipe berdasarkan apakah T adalah array
type ElemenArray<T> = T extends (infer U)[] ? U : T;

type Contoh1 = ElemenArray<string[]>; // string
type Contoh2 = ElemenArray<number>;   // number
\`\`\`

---

## 2. Kata Kunci \`infer\`

Kata kunci \`infer\` digunakan di dalam klausul \`extends\` untuk mendeklarasikan variabel tipe yang ingin Anda tebak/ekstrak dari tipe lain.

### Contoh Kasus: Mengekstrak Tipe Return dari Promise (Awaited)
\`\`\`typescript
type EkstrakIsiPromise<T> = T extends Promise<infer U> ? U : T;

type HasilAsinkron = EkstrakIsiPromise<Promise<string>>; // string
type HasilSinkron = EkstrakIsiPromise<number>;           // number
\`\`\`

### Mengekstrak Tipe Return Fungsi:
\`\`\`typescript
type TipeReturnFungsi<T> = T extends (...args: any[]) => infer R ? R : never;

function hitungLuas(panjang: number, lebar: number): number {
  return panjang * lebar;
}

type OutputLuas = TipeReturnFungsi<typeof hitungLuas>; // number
\`\`\`
`
  },
  {
    id: "lesson-ts-int-07",
    courseId: "course-ts-int-10",
    slug: "mapped-types-template-literal-types",
    title: "7. Mapped Types, Template Literal Types & Key Remapping",
    summary: "Transformasikan properti objek secara dinamis dan manipulasi string literal tingkat tipe.",
    order: 7,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 7. Mapped Types, Template Literal Types & Key Remapping

**Mapped Types** memungkinkan Anda membuat tipe baru dengan melakukan iterasi ke seluruh properti dari tipe yang sudah ada. Mirip seperti metode \`.map()\` pada array JavaScript, namun beroperasi pada *tipe*.

---

## 1. Sintaks Dasar Mapped Type

\`\`\`typescript
type JadikanBoolean<T> = {
  [K in keyof T]: boolean;
};

interface Pengaturan {
  audio: string;
  resolusi: number;
}

// Menghasilkan { audio: boolean; resolusi: boolean; }
type StatusPengaturan = JadikanBoolean<Pengaturan>;
\`\`\`

---

## 2. Template Literal Types

TypeScript mendukung sintaks template string untuk menggabungkan string literal:

\`\`\`typescript
type PosisiX = 'left' | 'center' | 'right';
type PosisiY = 'top' | 'middle' | 'bottom';

// Menggabungkan menjadi: 'left-top' | 'left-middle' | ... (9 kemungkinan)
type PosisiElemen = \`\${PosisiX}-\${PosisiY}\`;
\`\`\`

---

## 3. Key Remapping dengan kata kunci \`as\`

Anda bisa mengubah nama properti (misalnya menambahkan prefix \`on\` atau \`get\`) saat melakukan mapping:

\`\`\`typescript
interface EntitasPengguna {
  id: string;
  nama: string;
}

// Menghasilkan { getId: () => string; getNama: () => string; }
type GetterPengguna<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

type Aksesor = GetterPengguna<EntitasPengguna>;
\`\`\`
`
  },
  {
    id: "lesson-ts-int-08",
    courseId: "course-ts-int-10",
    slug: "utility-types-mendalam-pick-omit-record-partial",
    title: "8. Utility Types Mendalam (Pick, Omit, Record, Partial, Readonly)",
    summary: "Kuasai utilitas bawaan TypeScript standar enterprise untuk menyederhanakan kode secara profesional.",
    order: 8,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 8. Utility Types Mendalam (Pick, Omit, Record, Partial, Readonly)

TypeScript menyediakan sekumpulan *Built-in Utility Types* yang sangat sering digunakan dalam pengembangan aplikasi enterprise untuk memodifikasi tipe tanpa duplikasi kode.

---

## 1. \`Partial<T>\` dan \`Required<T>\`

- **\`Partial<T>\`**: Mengubah semua properti menjadi opsional (\`?\`). Ideal untuk operasi *patch update* formulir.
- **\`Required<T>\`**: Menghapus tanda opsional, memastikan semua nilai wajib ada.

\`\`\`typescript
interface Akun {
  id: string;
  username: string;
  fotoUrl?: string;
}

// Semua properti opsional untuk endpoint PUT/PATCH:
type UpdateAkunPayload = Partial<Akun>;
\`\`\`

---

## 2. \`Pick<T, K>\` dan \`Omit<T, K>\`

- **\`Pick<T, K>\`**: Memilih subset spesifik properti dari interface.
- **\`Omit<T, K>\`**: Membuang properti tertentu dari interface.

\`\`\`typescript
interface ArtikelBlog {
  id: string;
  slug: string;
  konten: string;
  penulisId: string;
  dilihatBerapaKali: number;
}

// Kartu preview hanya butuh id, slug, dan judul
type PreviewArtikel = Pick<ArtikelBlog, 'id' | 'slug'>;

// Payload pembuatan artikel baru (belum memiliki id atau hitungan view)
type BuatArtikelBaru = Omit<ArtikelBlog, 'id' | 'dilihatBerapaKali'>;
\`\`\`

---

## 3. \`Record<K, T>\`

Mendefinisikan dictionary/map dengan key bertipe \`K\` dan value bertipe \`T\`:

\`\`\`typescript
type PeranAplikasi = 'admin' | 'moderator' | 'anggota';

interface HakAkses {
  bisaHapus: boolean;
  bisaEdit: boolean;
}

const matriksIzin: Record<PeranAplikasi, HakAkses> = {
  admin: { bisaHapus: true, bisaEdit: true },
  moderator: { bisaHapus: false, bisaEdit: true },
  anggota: { bisaHapus: false, bisaEdit: false }
};
\`\`\`
`
  },
  {
    id: "lesson-ts-int-09",
    courseId: "course-ts-int-10",
    slug: "custom-type-guards-type-assertions",
    title: "9. Custom Type Guards & Type Assertions (is, asserts)",
    summary: "Kendalikan type narrowing runtime dengan predikat tipe 'value is Type' dan fungsi penegasan 'asserts'.",
    order: 9,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 9. Custom Type Guards & Type Assertions (is, asserts)

TypeScript melakukan *type narrowing* otomatis untuk \`typeof\` dan \`instanceof\`. Namun saat memeriksa struktur data kompleks di runtime (seperti respons JSON dari API pihak ketiga), kita membutuhkan **Custom Type Guards**.

---

## 1. Type Predicate: \`parameter is Tipe\`

Fungsi Type Guard mengembalikan boolean, tetapi tanda pengembaliannya dideklarasikan dengan pola \`arg is Tipe\`:

\`\`\`typescript
interface Kucing {
  meong(): void;
}

interface Bebek {
  kwek(): void;
}

// Custom Type Guard
function adalahKucing(hewan: Kucing | Bebek): hewan is Kucing {
  return (hewan as Kucing).meong !== undefined;
}

function bersuara(hewan: Kucing | Bebek) {
  if (adalahKucing(hewan)) {
    // TypeScript otomatis tahu bahwa di blok ini 'hewan' adalah Kucing
    hewan.meong();
  } else {
    // Di sini pasti Bebek
    hewan.kwek();
  }
}
\`\`\`

---

## 2. Assertion Functions: \`asserts kondisi\`

Terkadang kita ingin melempar Error jika kondisi tidak terpenuhi, dan meminta TypeScript mempersempit tipe setelah fungsi tersebut dipanggil:

\`\`\`typescript
function tegaskanString(nilai: unknown): asserts nilai is string {
  if (typeof nilai !== 'string') {
    throw new TypeError(\`Nilai diharapkan bertipe string, tetapi menerima \${typeof nilai}\`);
  }
}

function prosesData(input: unknown) {
  tegaskanString(input);
  // Setelah baris di atas, TypeScript memastikan input bertipe 'string':
  console.log(input.toUpperCase());
}
\`\`\`
`
  },
  {
    id: "lesson-ts-int-10",
    courseId: "course-ts-int-10",
    slug: "best-practice-tsconfig-arsitektur-enterprise",
    title: "10. Best Practice Konfigurasi tsconfig & Arsitektur Enterprise",
    summary: "Susun tsconfig.json dengan opsi strict mode maksimal, path aliases, dan isolasi modul enterprise.",
    order: 10,
    isRequired: true,
    status: "published",
    bodyMarkdown: `# 10. Best Practice Konfigurasi tsconfig & Arsitektur Enterprise

Sebagus apa pun kode yang ditulis, keamanan proyek TypeScript sangat bergantung pada opsi yang diaktifkan dalam file konfigurasi \`tsconfig.json\`.

---

## Aturan Emas: Aktifkan \`"strict": true\`

Menghidupkan flag \`strict: true\` mengaktifkan sekumpulan pemeriksaan penting secara otomatis:
- \`noImplicitAny\`: Mencegah variabel tanpa tipe yang otomatis bernilai \`any\`.
- \`strictNullChecks\`: Mencegah bug fatal "Cannot read properties of undefined".
- \`strictFunctionTypes\`: Memeriksa parameter fungsi secara contravariant.
- \`useUnknownInCatchVariables\`: Variabel blok \`catch(err)\` bertipe \`unknown\`, bukan \`any\`.

---

## Opsi Tambahan untuk Standar Enterprise

\`\`\`json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "exactOptionalPropertyTypes": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
\`\`\`

### Penjelasan Opsi Kunci:
1. **\`noUncheckedIndexedAccess\`**: Mengakses \`array[index]\` atau \`obj[key]\` akan mengembalikan \`T | undefined\`, memaksa Anda mengecek keberadaan data sebelum menggunakannya.
2. **\`noImplicitOverride\`**: Memaksa penggunaan kata kunci \`override\` saat method subclass menimpa method induk pada pemrograman OOP.
3. **\`paths\` Alias**: Menghilangkan import path relatif yang berantakan (\`../../../components\`) menjadi format bersih seperti \`@/components\`.
`
  }
];
