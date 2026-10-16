import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'KodeLuma — Platform Belajar Coding dari Nol Berbahasa Indonesia';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0A0F1D',
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(37, 99, 235, 0.35) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(16, 185, 129, 0.25) 0%, transparent 45%)',
          padding: '60px 70px',
          justifyContent: 'space-between',
          fontFamily: 'sans-serif',
          color: '#F8FAFC',
        }}
      >
        {/* Top Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: '#2563EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '26px',
                color: '#FFFFFF',
                boxShadow: '0 8px 24px rgba(37, 99, 235, 0.5)',
              }}
            >
              K
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: '30px',
                  fontWeight: 900,
                  letterSpacing: '-0.5px',
                  color: '#FFFFFF',
                }}
              >
                KodeLuma
              </span>
              <span
                style={{
                  fontSize: '12px',
                  color: '#94A3B8',
                  letterSpacing: '1.5px',
                  fontWeight: 600,
                }}
              >
                BY AZZAM CODEX
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(37, 99, 235, 0.2)',
              border: '1px solid rgba(59, 130, 246, 0.6)',
              borderRadius: '999px',
              padding: '10px 24px',
              color: '#93C5FD',
              fontSize: '14px',
              fontWeight: 800,
              letterSpacing: '1px',
            }}
          >
            EDUKASI PEMROGRAMAN STANDAR INDUSTRI
          </div>
        </div>

        {/* Hero Title & Description */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '1050px' }}>
          <div
            style={{
              fontSize: '58px',
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.15,
              letterSpacing: '-1.5px',
            }}
          >
            Belajar Coding dari Nol Sampai Mahir
          </div>
          <div
            style={{
              fontSize: '24px',
              color: '#94A3B8',
              lineHeight: 1.5,
            }}
          >
            Platform belajar coding pemula berbahasa Indonesia. Materi terarah, 22 kurikulum standar industri, kuis interaktif, dan proyek praktik nyata.
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            paddingTop: '24px',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#E2E8F0',
                fontSize: '16px',
                fontWeight: 600,
              }}
            >
              <span style={{ color: '#3B82F6' }}>●</span> 22 Kelas Lengkap
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#E2E8F0',
                fontSize: '16px',
                fontWeight: 600,
              }}
            >
              <span style={{ color: '#10B981' }}>●</span> Proyek Portofolio Mandiri
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#E2E8F0',
                fontSize: '16px',
                fontWeight: 600,
              }}
            >
              <span style={{ color: '#F59E0B' }}>●</span> Sertifikat Terverifikasi
            </div>
          </div>

          <div
            style={{
              fontSize: '17px',
              fontWeight: 800,
              color: '#60A5FA',
            }}
          >
            kodeluma.azzamcodex.id
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
