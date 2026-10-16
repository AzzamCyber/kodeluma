import type { ReactNode } from 'react';
import { LockKeyhole, UserRoundPlus } from 'lucide-react';
import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { Footer } from '@/components/layout/Footer';
import { KodelumaLottie } from '@/components/ui/KodelumaLottie';

interface AuthPageShellProps { children: ReactNode; variant: 'login' | 'register'; }

const visuals = {
  login: {
    eyebrow: 'LANJUTKAN BELAJAR',
    title: 'Kembali ke ritme belajarmu.',
    description: 'Kelas, latihan, dan progresmu menunggu di satu tempat.',
    animation: '/animations/login-workspace.json',
    alt: 'Ilustrasi ruang kerja coding dan akses akun',
  },
  register: {
    eyebrow: 'LANGKAH PERTAMA',
    title: 'Mulai perjalanan coding-mu.',
    description: 'Buat akun untuk menyimpan langkah belajar pertamamu.',
    animation: '/animations/register-journey.json',
    alt: 'Ilustrasi pembuatan akun dan jalur belajar coding',
  },
} as const;

export function AuthPageShell({ children, variant }: AuthPageShellProps) {
  const visual = visuals[variant];
  return <div className="d-flex flex-column min-vh-100">
    <PublicNavbar />
    <main id="main-content" className="kl-auth-main flex-grow-1 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-6">{children}</div>
          <div className="col-lg-6">
            <div className="kl-auth-visual">
              <div className="kl-eyebrow">{visual.eyebrow}</div>
              <h2 className="h3 mb-3">{visual.title}</h2>
              <p className="kl-lead mb-3">{visual.description}</p>
              <div role="img" aria-label={visual.alt}>
                <KodelumaLottie
                  name={`auth-${variant}`}
                  src={visual.animation}
                  loop={false}
                  height="var(--kl-auth-lottie-height)"
                  className="kl-auth-lottie"
                  fallback={<div className="kl-auth-lottie-fallback">{variant === 'login' ? <LockKeyhole size={72} strokeWidth={1.25} /> : <UserRoundPlus size={72} strokeWidth={1.25} />}</div>}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>;
}
