import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Query parameters
    const title = searchParams.get('title') || 'KodeLuma — Belajar Coding dari Nol';
    const desc =
      searchParams.get('desc') ||
      'Platform belajar coding terarah berbahasa Indonesia dengan materi mendalam, kuis evaluasi, dan proyek praktik nyata.';
    const badge = searchParams.get('badge') || 'PLATFORM BELAJAR CODING';
    const type = searchParams.get('type') || 'standard';
    const code = searchParams.get('code');
    const student = searchParams.get('student');

    // Customize for certificate sharing
    let finalTitle = title;
    let finalDesc = desc;
    let finalBadge = badge;

    if (type === 'certificate') {
      finalBadge = 'SERTIFIKAT TERVERIFIKASI';
      finalTitle = student ? `Sertifikat: ${student}` : `Kelulusan: ${title}`;
      finalDesc = code
        ? `Telah menyelesaikan kurikulum ${title} (ID: ${code}). Terverifikasi sah pada basis data resmi KodeLuma.`
        : `Telah menyelesaikan kurikulum ${title}. Terverifikasi sah pada basis data resmi KodeLuma.`;
    }

    // Standard Rich OpenGraph Card Layout
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
              'radial-gradient(circle at 15% 20%, rgba(37, 99, 235, 0.3) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(99, 102, 241, 0.25) 0%, transparent 45%)',
            padding: '54px 64px',
            justifyContent: 'space-between',
            fontFamily: 'sans-serif',
            color: '#F8FAFC',
          }}
        >
          {/* Top Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: type === 'certificate' ? '#10B981' : '#2563EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '24px',
                  color: '#FFFFFF',
                  boxShadow: '0 8px 20px rgba(37, 99, 235, 0.4)',
                }}
              >
                K
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: '28px',
                    fontWeight: 900,
                    letterSpacing: '-0.5px',
                    color: '#FFFFFF',
                  }}
                >
                  KodeLuma
                </span>
                <span
                  style={{
                    fontSize: '11px',
                    color: '#94A3B8',
                    letterSpacing: '1.5px',
                    fontWeight: 600,
                  }}
                >
                  BY AZZAM CODEX
                </span>
              </div>
            </div>

            {/* Category / Badge Pill */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor:
                  type === 'certificate' ? 'rgba(16, 185, 129, 0.18)' : 'rgba(37, 99, 235, 0.18)',
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: type === 'certificate' ? '#10B981' : 'rgba(59, 130, 246, 0.5)',
                borderRadius: '999px',
                padding: '8px 22px',
                color: type === 'certificate' ? '#34D399' : '#60A5FA',
                fontSize: '13px',
                fontWeight: 800,
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              {finalBadge}
            </div>
          </div>

          {/* Center Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              margin: '24px 0',
              maxWidth: '1050px',
            }}
          >
            <div
              style={{
                fontSize: finalTitle.length > 40 ? '44px' : '56px',
                fontWeight: 900,
                color: '#FFFFFF',
                lineHeight: 1.15,
                letterSpacing: '-1.2px',
              }}
            >
              {finalTitle}
            </div>
            <div
              style={{
                fontSize: '22px',
                color: '#94A3B8',
                lineHeight: 1.45,
                maxHeight: '96px',
                overflow: 'hidden',
              }}
            >
              {finalDesc}
            </div>
          </div>

          {/* Bottom Bar / Meta Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTopWidth: 1,
              borderTopStyle: 'solid',
              borderTopColor: 'rgba(255, 255, 255, 0.1)',
              paddingTop: '20px',
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#CBD5E1',
                  fontSize: '15px',
                  fontWeight: 600,
                }}
              >
                <span style={{ color: '#3B82F6' }}>●</span> 22 Kelas Standar Industri
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#CBD5E1',
                  fontSize: '15px',
                  fontWeight: 600,
                }}
              >
                <span style={{ color: '#10B981' }}>●</span> Proyek Portofolio Nyata
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#CBD5E1',
                  fontSize: '15px',
                  fontWeight: 600,
                }}
              >
                <span style={{ color: '#F59E0B' }}>●</span> Sertifikat Terverifikasi
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '16px',
                fontWeight: 700,
                color: '#60A5FA',
              }}
            >
              kodeluma.azzamcodex.id
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          'Cache-Control': 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400',
        },
      }
    );
  } catch (e) {
    console.error('Error generating OG image:', e);
    return new Response('Failed to generate image', { status: 500 });
  }
}
