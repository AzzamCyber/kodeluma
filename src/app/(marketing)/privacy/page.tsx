import React from 'react';
import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { Footer } from '@/components/layout/Footer';

export default function PrivacyPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <PublicNavbar />

      <main id="main-content" className="flex-grow-1 py-5">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="kl-eyebrow">DOKUMEN LEGAL</div>
          <h1 className="h2 fw-bold mb-4" style={{ color: 'var(--kl-ink)' }}>
            Kebijakan Privasi Kodeluma
          </h1>

          <div className="kl-card p-4 p-md-5 bg-white border">
            <section className="mb-4">
              <h2 className="h5 fw-bold mb-2">1. Informasi yang Kami Kumpulkan</h2>
              <p className="text-secondary small" style={{ lineHeight: 1.75 }}>
                Kodeluma hanya mengumpulkan informasi minimum yang diperlukan untuk menjalankan layanan
                pembelajaran, meliputi: nama tampilan (display name), alamat email untuk autentikasi,
                riwayat progres pelajaran, jawaban kuis, dan URL proyek yang kamu kumpulkan. Kami tidak
                mengumpulkan data sensitif seperti nomor identitas kependudukan, kartu kredit, atau data
                lokasi pelacakan.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h5 fw-bold mb-2">2. Penyimpanan dan Keamanan Data</h2>
              <p className="text-secondary small" style={{ lineHeight: 1.75 }}>
                Kata sandi pengguna dienkripsi di sisi server menggunakan algoritma Argon2id berstandar
                industri dan tidak pernah disimpan dalam format teks biasa (plaintext). Sesi login
                dikelola melalui cookie aman dengan atribut <code>HttpOnly</code> dan{' '}
                <code>SameSite=Lax</code>.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h5 fw-bold mb-2">3. Penggunaan Cookie</h2>
              <p className="text-secondary small" style={{ lineHeight: 1.75 }}>
                Kodeluma hanya menggunakan cookie penting yang bertugas mempertahankan status sesi login
                kamu di platform. Kami tidak menggunakan cookie pelacak pihak ketiga atau iklan.
              </p>
            </section>

            <section>
              <h2 className="h5 fw-bold mb-2">4. Hak Pengguna</h2>
              <p className="text-secondary small mb-0" style={{ lineHeight: 1.75 }}>
                Kamu berhak meminta penghapusan akun atau koreksi informasi nama profilmu kapan saja
                melalui dasbor pengguna atau dengan menghubungi administrator Kodeluma.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
