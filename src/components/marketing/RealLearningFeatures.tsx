import React from 'react';
import Link from 'next/link';
import { BookOpen, Terminal, Code2, Award, FolderGit2, ShieldCheck, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { EditorialIllustration } from '@/components/ui/EditorialIllustration';

const FEATURES = [
  {
    icon: BookOpen,
    title: 'Materi Terarah & Ringkas',
    desc: 'Modul coding bertahap yang ditulis secara khusus untuk pemula. Penjelasan bahasa manusia tanpa jargon rumit.',
    link: '/courses',
    linkText: 'Buka Katalog',
  },
  {
    icon: Code2,
    title: 'Code Lab Interaktif',
    desc: 'Tulis HTML, CSS, dan JavaScript di peramban dan lihat hasilnya seketika dengan jembatan log konsol otomatis.',
    link: '/lab',
    linkText: 'Coba Code Lab',
  },
  {
    icon: Terminal,
    title: 'Guided CLI Terminal',
    desc: 'Latih perintah UNIX dasar (pwd, ls, mkdir, cd) dan simulasi Git (init, commit) langsung di Virtual File System.',
    link: '/lab/terminal',
    linkText: 'Buka Terminal',
  },
  {
    icon: Award,
    title: 'Quest & Tantangan XP',
    desc: 'Selesaikan quest praktis untuk menguji pemahaman dan raih poin pengalaman (XP) yang tercatat di akunmu.',
    link: '/quests',
    linkText: 'Lihat Quest',
  },
  {
    icon: FolderGit2,
    title: 'Proyek Praktik Nyata',
    desc: 'Kumpulkan tautan repositori GitHub proyek akhirmu untuk dievaluasi instruktur sebagai portofolio riil.',
    link: '/projects',
    linkText: 'Proyek Siswa',
  },
  {
    icon: ShieldCheck,
    title: 'Sertifikat Terverifikasi',
    desc: 'Dapatkan sertifikat penyelesaian internal Kodeluma dengan kode verifikasi unik setelah menuntaskan seluruh materi dan evaluasi.',
    link: '/verify',
    linkText: 'Cek Verifikasi',
  },
];

export function RealLearningFeatures() {
  return (
    <section className="kl-section bg-white" id="fitur-unggulan">
      <div className="container">
        <div className="row align-items-center g-4 mb-5">
          <div className="col-lg-7">
            <div className="kl-eyebrow">PENGALAMAN BELAJAR MENYELURUH</div>
            <h2 className="h1 fw-bold mb-3" style={{ color: 'var(--kl-ink)' }}>
              Belajar dengan cara yang lebih nyata.
            </h2>
            <p className="kl-lead mb-0" style={{ maxWidth: '620px' }}>
              Bukan sekadar menonton video pasif. Kodeluma memadukan teori terarah dengan lingkungan praktik
              interaktif yang langsung bekerja di perambanmu.
            </p>
          </div>
          <div className="col-lg-5"><EditorialIllustration kind="practice" className="kl-section-art" /></div>
        </div>

        <div className="row g-4">
          {FEATURES.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="col-lg-4 col-md-6">
                <Card className="h-100 d-flex flex-column">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-3 p-3 mb-3"
                    style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: 'var(--kl-primary-soft)',
                      color: 'var(--kl-primary)',
                    }}
                  >
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <h3 className="fs-5 fw-bold mb-2 text-dark">{item.title}</h3>
                  <p className="text-secondary small mb-4 flex-grow-1" style={{ lineHeight: 1.65 }}>
                    {item.desc}
                  </p>
                  <div>
                    <Link
                      href={item.link}
                      className="text-decoration-none fw-semibold small d-inline-flex align-items-center gap-1 text-primary"
                    >
                      <span>{item.linkText}</span>
                      <ArrowRight size={14} strokeWidth={2} />
                    </Link>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
