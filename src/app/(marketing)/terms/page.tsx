import React from 'react';
import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { Footer } from '@/components/layout/Footer';

export default function TermsPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <PublicNavbar />

      <main id="main-content" className="flex-grow-1 py-5">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="kl-eyebrow">DOKUMEN LEGAL</div>
          <h1 className="h2 fw-bold mb-4" style={{ color: 'var(--kl-ink)' }}>
            Syarat dan Ketentuan Penggunaan
          </h1>

          <div className="kl-card p-4 p-md-5 bg-white border">
            <section className="mb-4">
              <h2 className="h5 fw-bold mb-2">1. Ketentuan Akun Pembelajar</h2>
              <p className="text-secondary small" style={{ lineHeight: 1.75 }}>
                Pengguna diwajibkan memberikan informasi email yang valid dan menjaga kerahasiaan kata
                sandi masing-masing. Setiap akun bersifat personal dan tidak diperkenankan dipindahtangankan.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h5 fw-bold mb-2">2. Etika Forum Diskusi & Moderasi</h2>
              <p className="text-secondary small" style={{ lineHeight: 1.75 }}>
                Forum Kodeluma adalah ruang belajar bersama yang saling menghargai. Pengguna dilarang keras
                mengunggah konten spam, ujaran kebencian, pelecehan, atau kode berbahaya. Administrator
                berhak menyembunyikan atau menghapus unggahan yang melanggar aturan ini.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h5 fw-bold mb-2">3. Batasan Sertifikat Kelulusan</h2>
              <p className="text-secondary small" style={{ lineHeight: 1.75 }}>
                Sertifikat yang diterbitkan oleh Kodeluma merupakan bukti penyelesaian kurikulum internal
                dan latihan praktik. Sertifikat ini bukan sertifikasi profesi resmi atau gelar akademik
                yang diakreditasi oleh pemerintah/universitas.
              </p>
            </section>

            <section>
              <h2 className="h5 fw-bold mb-2">4. Proyek Praktik</h2>
              <p className="text-secondary small mb-0" style={{ lineHeight: 1.75 }}>
                Pengguna tetap memegang hak cipta atas kode dan proyek yang mereka unggah. Kode yang
                diserahkan dalam submission proyek harus merupakan hasil karya mandiri untuk keperluan
                pembelajaran.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
