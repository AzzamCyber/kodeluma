'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Code2, Compass } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { KodelumaLottie } from '@/components/ui/KodelumaLottie';

interface HeroProps {
  user?: { displayName: string; role: string } | null;
}

export function Hero({ user: initialUser }: HeroProps) {
  const [currentUser, setCurrentUser] = useState(initialUser);

  useEffect(() => {
    if (initialUser !== undefined) return;
    let isMounted = true;
    fetch('/api/v1/me')
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        if (isMounted && json?.data?.user) {
          setCurrentUser(json.data.user);
        }
      })
      .catch(() => {});
    return () => {
      isMounted = false;
    };
  }, [initialUser]);

  const user = currentUser ?? initialUser;
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const artRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (textRef.current) {
      gsap.from(textRef.current, { opacity: 0, y: 18, duration: 0.55, ease: 'power2.out' });
    }
    if (artRef.current) {
      gsap.from(artRef.current, { opacity: 0, y: 24, duration: 0.65, delay: 0.12, ease: 'power2.out' });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="kl-hero">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div ref={textRef} className="col-lg-7">
            <div className="kl-eyebrow kl-hero-eyebrow d-inline-flex align-items-center gap-2">
              <span className="kl-hero-eyebrow-mark" aria-hidden="true" />
              PLATFORM BELAJAR CODING UNTUK PEMULA
            </div>

            <h1 className="kl-hero-title mb-3">
              Belajar coding dari nol. <span>Berani bikin sendiri.</span>
            </h1>

            <p className="kl-lead kl-hero-lead mb-4">
              Pelajari dasarnya, coba langsung, lalu bangun proyek pertamamu. Semua disusun bertahap agar kamu tahu langkah berikutnya.
            </p>

            <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-3 kl-hero-actions">
              <Link
                href={user ? (user.role === 'admin' ? '/admin' : '/dashboard') : '/register'}
                className="kl-btn-primary d-inline-flex align-items-center justify-content-center gap-2 text-decoration-none"
              >
                <span>{user ? (user.role === 'admin' ? 'Buka Portal Admin' : 'Lanjutkan Belajar') : 'Mulai Belajar Gratis'}</span>
                <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
              </Link>
              <Link href="/courses" className="kl-btn-secondary d-inline-flex align-items-center justify-content-center gap-2 text-decoration-none">
                <Compass size={17} strokeWidth={1.75} aria-hidden="true" />
                <span>Jelajahi Kelas</span>
              </Link>
            </div>

            <p className="kl-hero-helper mb-0">{user ? `Selamat datang kembali, ${user.displayName}.` : 'Mulai dari nol. Belajar sesuai ritmemu.'}</p>

            <div className="kl-hero-trust d-flex flex-wrap align-items-center gap-2 gap-sm-3" aria-label="Cara belajar di Kodeluma">
              {['Materi bertahap', 'Praktik langsung', 'Progres tercatat'].map((item) => (
                <span key={item} className="d-inline-flex align-items-center gap-2">
                  <CheckCircle2 size={16} strokeWidth={1.75} aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div ref={artRef} className="col-lg-5">
            <div className="kl-hero-art mx-auto" role="img" aria-label="Ilustrasi dua pelajar membuat website bersama">
              <KodelumaLottie
                name="hero-icon1"
                src="/animations/ICON1.json"
                className="kl-hero-art-lottie"
                width="100%"
                height="100%"
                fallback={<div className="kl-hero-static-fallback"><Code2 size={96} strokeWidth={1.25} aria-hidden="true" /><span>Mulai belajar coding dari nol</span></div>}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
