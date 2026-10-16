import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { FeedbackProvider } from '@/components/ui/FeedbackProvider';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kodeluma.azzamcodex.id'),
  title: {
    template: '%s | KodeLuma',
    default: 'KodeLuma — Belajar Coding dari Nol Sampai Mahir',
  },
  description:
    'Platform belajar coding interaktif berbahasa Indonesia dari dasar sampai mahir. Dilengkapi 22 kurikulum industri, terminal virtual, kuis evaluasi, proyek portofolio, dan sertifikat terverifikasi.',
  applicationName: 'KodeLuma',
  authors: [{ name: 'Azzam Codex', url: 'https://kodeluma.azzamcodex.id' }],
  creator: 'Azzam Codex',
  publisher: 'KodeLuma by Azzam Codex',
  keywords: [
    'belajar coding pemula',
    'kursus pemrograman indonesia',
    'belajar web development',
    'belajar javascript indonesia',
    'tutorial python pemula',
    'kursus typescript',
    'belajar react js',
    'belajar node js backend',
    'kursus golang indonesia',
    'belajar php pdo modern',
    'kursus database postgresql',
    'belajar redis caching',
    'belajar docker kontainerisasi',
    'belajar linux terminal server',
    'sertifikat coding online terverifikasi',
    'kodeluma azzam codex',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/brand/kodeluma-favicon.png',
    apple: '/brand/kodeluma-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://kodeluma.azzamcodex.id',
    siteName: 'KodeLuma by Azzam Codex',
    title: 'KodeLuma — Belajar Coding dari Nol Sampai Mahir',
    description:
      'Platform belajar coding interaktif berbahasa Indonesia dengan 22 kurikulum standar industri, praktik langsung di browser, dan sertifikat terverifikasi.',
    images: [
      {
        url: '/api/og?title=KodeLuma%20%E2%80%94%20Belajar%20Coding%20dari%20Nol&desc=Platform%20belajar%20coding%20interaktif%20berbahasa%20Indonesia%20dengan%20kurikulum%20standar%20industri.&badge=EDUKASI%20PEMROGRAMAN',
        width: 1200,
        height: 630,
        alt: 'KodeLuma Platform Belajar Coding Indonesia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KodeLuma — Belajar Coding dari Nol Sampai Mahir',
    description:
      'Platform belajar coding interaktif berbahasa Indonesia dengan 22 kelas industri, kuis, dan proyek portofolio.',
    creator: '@azzamcodex',
    images: [
      '/api/og?title=KodeLuma%20%E2%80%94%20Belajar%20Coding%20dari%20Nol&desc=Platform%20belajar%20coding%20interaktif%20berbahasa%20Indonesia%20dengan%20kurikulum%20standar%20industri.&badge=EDUKASI%20PEMROGRAMAN',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#2563EB',
  width: 'device-width',
  initialScale: 1,
};

const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KodeLuma',
  legalName: 'KodeLuma by Azzam Codex',
  url: 'https://kodeluma.azzamcodex.id',
  logo: 'https://kodeluma.azzamcodex.id/brand/kodeluma-icon.png',
  description:
    'Platform edukasi teknologi dan coding interaktif berbahasa Indonesia dengan kurikulum berbasis proyek nyata.',
  founder: {
    '@type': 'Person',
    name: 'Azzam Codex',
  },
};

const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'KodeLuma',
  url: 'https://kodeluma.azzamcodex.id',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://kodeluma.azzamcodex.id/courses?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Lewati ke konten utama
        </a>
        <FeedbackProvider>{children}</FeedbackProvider>
      </body>
    </html>
  );
}
