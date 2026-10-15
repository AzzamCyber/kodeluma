'use client';

import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

export function FaqSection() {
  const faqs = [
    {
      q: 'Apakah Kodeluma cocok untuk orang yang belum pernah belajar coding sama sekali?',
      a: 'Sangat cocok. Kurikulum Kodeluma dirancang dari pemahaman paling mendasar tanpa asumsi bahwa kamu sudah memiliki latar belakang IT. Semua istilah teknis dijelaskan dengan analogi sederhana dalam bahasa Indonesia.',
    },
    {
      q: 'Apakah saya perlu menginstal aplikasi berat untuk mulai belajar?',
      a: 'Tidak. Pada tahap awal, kamu cukup menggunakan browser web dan teks editor sederhana (seperti Notepad atau VS Code gratis) di komputermu untuk mempraktikkan materi.',
    },
    {
      q: 'Bagaimana cara mendapatkan sertifikat penyelesaian modul?',
      a: 'Sertifikat penyelesaian Kodeluma akan terbuka secara otomatis di akunmu setelah kamu menyelesaikan 100% pelajaran wajib dalam suatu kelas, lulus kuis evaluasi dengan skor minimal 70%, dan mengirimkan proyek praktik yang dipersyaratkan.',
    },
    {
      q: 'Apakah sertifikat Kodeluma merupakan sertifikasi profesi resmi?',
      a: 'Bukan. Sertifikat Kodeluma adalah bukti penyelesaian modul pembelajaran internal kami yang dapat diverifikasi publik melalui kode unik. Dokumen ini bukan lisensi profesi atau sertifikasi dari lembaga negara/universitas.',
    },
    {
      q: 'Bagaimana jika saya mengalami kesulitan saat mengerjakan latihan kode?',
      a: 'Kamu dapat memanfaatkan Forum Diskusi Kodeluma untuk berdiskusi, bertanya kepada komunitas, atau melihat cara teman-teman lain menyelesaikan tantangan serupa.',
    },
  ];

  return (
    <section className="kl-section bg-white border-top">
      <div className="container">
        <div className="text-center mb-5">
          <div className="kl-eyebrow">PERTANYAAN UMUM</div>
          <h2 className="h1 fw-bold mb-3" style={{ color: 'var(--kl-ink)' }}>
            Hal yang sering ditanyakan.
          </h2>
          <p className="kl-lead mx-auto" style={{ maxWidth: '580px' }}>
            Informasi transparan seputar metode belajar, kuis, proyek, dan sertifikat di Kodeluma.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Accordion defaultActiveKey="0" flush className="border rounded-3 p-2 bg-white shadow-sm">
              {faqs.map((faq, idx) => (
                <Accordion.Item eventKey={String(idx)} key={idx} className="border-bottom py-2">
                  <Accordion.Header>
                    <span className="fw-semibold text-dark fs-6">{faq.q}</span>
                  </Accordion.Header>
                  <Accordion.Body className="text-secondary small" style={{ lineHeight: 1.75 }}>
                    {faq.a}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
