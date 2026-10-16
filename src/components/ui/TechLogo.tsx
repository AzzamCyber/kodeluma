import React from 'react';
import Image from 'next/image';

export type TechLogoKind = 'brand-logo' | 'topic-icon';

export interface TechnologyVisual {
  slug: string;
  name: string;
  kind: TechLogoKind;
  localPath: string;
  source: string;
  verified: boolean;
}

export const TECH_REGISTRY: Record<string, TechnologyVisual> = {
  html5: {
    slug: 'html5',
    name: 'HTML5',
    kind: 'brand-logo',
    localPath: '/tech/html5.svg',
    source: 'Devicon (W3C standard mark)',
    verified: true,
  },
  css3: {
    slug: 'css3',
    name: 'CSS3',
    kind: 'brand-logo',
    localPath: '/tech/css3.svg',
    source: 'Devicon (W3C standard mark)',
    verified: true,
  },
  javascript: {
    slug: 'javascript',
    name: 'JavaScript',
    kind: 'brand-logo',
    localPath: '/tech/javascript.svg',
    source: 'Devicon (Official community logo)',
    verified: true,
  },
  typescript: {
    slug: 'typescript',
    name: 'TypeScript',
    kind: 'brand-logo',
    localPath: '/tech/typescript.svg',
    source: 'Devicon (Microsoft standard brand)',
    verified: true,
  },
  python: {
    slug: 'python',
    name: 'Python',
    kind: 'brand-logo',
    localPath: '/tech/python.svg',
    source: 'Devicon (Python Software Foundation mark)',
    verified: true,
  },
  react: {
    slug: 'react',
    name: 'React',
    kind: 'brand-logo',
    localPath: '/tech/react.svg',
    source: 'Devicon (Meta Open Source mark)',
    verified: true,
  },
  nextjs: {
    slug: 'nextjs',
    name: 'Next.js',
    kind: 'brand-logo',
    localPath: '/tech/nextjs.svg',
    source: 'Devicon (Vercel standard brand)',
    verified: true,
  },
  bootstrap: {
    slug: 'bootstrap',
    name: 'Bootstrap',
    kind: 'brand-logo',
    localPath: '/tech/bootstrap.svg',
    source: 'Devicon (Bootstrap Team mark)',
    verified: true,
  },
  git: {
    slug: 'git',
    name: 'Git',
    kind: 'brand-logo',
    localPath: '/tech/git.svg',
    source: 'Devicon (Software Freedom Conservancy mark)',
    verified: true,
  },
  redis: {
    slug: 'redis',
    name: 'Redis',
    kind: 'brand-logo',
    localPath: '/tech/redis.svg',
    source: 'Devicon (Redis Ltd mark)',
    verified: true,
  },
  docker: {
    slug: 'docker',
    name: 'Docker',
    kind: 'brand-logo',
    localPath: '/tech/docker.svg',
    source: 'Devicon (Docker Inc mark)',
    verified: true,
  },
  postgresql: {
    slug: 'postgresql',
    name: 'PostgreSQL',
    kind: 'brand-logo',
    localPath: '/tech/postgresql.svg',
    source: 'Devicon (PostgreSQL Global Development Group)',
    verified: true,
  },
  nodejs: {
    slug: 'nodejs',
    name: 'Node.js',
    kind: 'brand-logo',
    localPath: '/tech/nodejs.svg',
    source: 'Devicon (OpenJS Foundation mark)',
    verified: true,
  },
  cplusplus: {
    slug: 'cplusplus',
    name: 'C++',
    kind: 'brand-logo',
    localPath: '/tech/cplusplus.svg',
    source: 'Devicon (Standard community mark)',
    verified: true,
  },
  java: {
    slug: 'java',
    name: 'Java',
    kind: 'brand-logo',
    localPath: '/tech/java.svg',
    source: 'Devicon (Oracle brand mark)',
    verified: true,
  },
  linux: {
    slug: 'linux',
    name: 'Linux',
    kind: 'brand-logo',
    localPath: '/tech/linux.svg',
    source: 'Devicon (Tux the Linux mascot)',
    verified: true,
  },
  vscode: {
    slug: 'vscode',
    name: 'VS Code',
    kind: 'brand-logo',
    localPath: '/tech/vscode.svg',
    source: 'Devicon (Microsoft Visual Studio Code mark)',
    verified: true,
  },
  figma: {
    slug: 'figma',
    name: 'Figma',
    kind: 'brand-logo',
    localPath: '/tech/figma.svg',
    source: 'Devicon (Figma Inc mark)',
    verified: true,
  },
  go: {
    slug: 'go',
    name: 'Go (Golang)',
    kind: 'brand-logo',
    localPath: '/tech/go.svg',
    source: 'Devicon (Google Go language mark)',
    verified: true,
  },
  php: {
    slug: 'php',
    name: 'PHP',
    kind: 'brand-logo',
    localPath: '/tech/php.svg',
    source: 'Devicon (Official PHP Group mark)',
    verified: true,
  },
  // Generic Topics (Topic Icons)
  sql: {
    slug: 'sql',
    name: 'SQL Database',
    kind: 'topic-icon',
    localPath: '/topics/sql.svg',
    source: 'Lucide Pictogram for Relational Databases',
    verified: true,
  },
  algorithms: {
    slug: 'algorithms',
    name: 'Algoritma & Struktur Data',
    kind: 'topic-icon',
    localPath: '/topics/algorithms.svg',
    source: 'Lucide Pictogram for Logic Structures',
    verified: true,
  },
  'system-design': {
    slug: 'system-design',
    name: 'Arsitektur Sistem',
    kind: 'topic-icon',
    localPath: '/topics/system-design.svg',
    source: 'Lucide Pictogram for Systems Architecture',
    verified: true,
  },
  cybersecurity: {
    slug: 'cybersecurity',
    name: 'Keamanan Siber',
    kind: 'topic-icon',
    localPath: '/topics/cybersecurity.svg',
    source: 'Lucide Pictogram for Cybersecurity & Encryption',
    verified: true,
  },
};

interface TechLogoProps {
  slug: string;
  size?: number;
  className?: string;
  showLabel?: boolean;
}

export function TechLogo({ slug, size = 40, className = '', showLabel = false }: TechLogoProps) {
  const item = TECH_REGISTRY[slug.toLowerCase()];

  if (!item) {
    return (
      <span
        className={`d-inline-flex align-items-center justify-content-center bg-light text-secondary rounded fw-bold text-uppercase ${className}`}
        style={{ width: size, height: size, fontSize: Math.max(10, size * 0.3) }}
      >
        {slug.slice(0, 3)}
      </span>
    );
  }

  return (
    <div className={`d-inline-flex align-items-center gap-2 ${className}`}>
      <div
        className="d-flex align-items-center justify-content-center rounded p-1"
        style={{
          width: size + 12,
          height: size + 12,
          backgroundColor: '#ffffff',
          border: '1px solid var(--kl-border)',
        }}
      >
        <Image
          src={item.localPath}
          alt={item.kind === 'brand-logo' ? `Logo ${item.name}` : `Ikon topik ${item.name}`}
          width={size}
          height={size}
          style={{ objectFit: 'contain' }}
        />
      </div>
      {showLabel && (
        <div className="d-flex flex-column text-start">
          <span className="fw-bold small text-dark">{item.name}</span>
          <span className="text-muted" style={{ fontSize: '11px' }}>
            {item.kind === 'brand-logo' ? 'Bahasa / Alat' : 'Topik Studi'}
          </span>
        </div>
      )}
    </div>
  );
}
