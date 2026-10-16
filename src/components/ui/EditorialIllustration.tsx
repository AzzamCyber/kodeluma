import React from 'react';
import { Award, BookOpen, Code2, Layers3, MessageCircle, Rocket, Route, SquareCheckBig, TrendingUp, CircleHelp, Terminal } from 'lucide-react';
import { KodelumaLottie } from './KodelumaLottie';

type IllustrationKind = 'practice' | 'courses' | 'technology' | 'steps' | 'roadmap' | 'community' | 'certificate' | 'progress' | 'questions' | 'launch' | 'terminal';

const illustrations = {
  practice: { file: 'practice-lab', label: 'Editor kode dan hasil praktik', Icon: Code2 },
  courses: { file: 'course-stack', label: 'Kumpulan kelas coding bertahap', Icon: BookOpen },
  technology: { file: 'technology-grid', label: 'Teknologi web yang saling terhubung', Icon: Layers3 },
  steps: { file: 'learning-steps', label: 'Tiga tahap belajar coding', Icon: SquareCheckBig },
  roadmap: { file: 'learning-roadmap', label: 'Jalur belajar dari dasar ke proyek', Icon: Route },
  community: { file: 'community-chat', label: 'Percakapan komunitas pembelajar', Icon: MessageCircle },
  certificate: { file: 'certificate-seal', label: 'Sertifikat penyelesaian internal', Icon: Award },
  progress: { file: 'progress-dashboard', label: 'Kemajuan pelajaran yang tercatat', Icon: TrendingUp },
  questions: { file: 'faq-answers', label: 'Pertanyaan dan jawaban tentang Kodeluma', Icon: CircleHelp },
  launch: { file: 'project-launch', label: 'Proyek coding pertama siap dibuat', Icon: Rocket },
  terminal: { file: 'terminal-console', label: 'Terminal dan alur perintah Git', Icon: Terminal },
} satisfies Record<IllustrationKind, { file: string; label: string; Icon: typeof Code2 }>;

interface EditorialIllustrationProps {
  kind: IllustrationKind;
  className?: string;
  tone?: 'light' | 'dark';
}

export function EditorialIllustration({ kind, className = '', tone = 'light' }: EditorialIllustrationProps) {
  const { file, label, Icon } = illustrations[kind];
  return (
    <div className={`kl-editorial-art kl-editorial-art--${tone} ${className}`} role="img" aria-label={label}>
      <KodelumaLottie
        name={`kodeluma-${kind}`}
        src={`/animations/${file}.json`}
        loop={false}
        defer
        fallback={<div className="kl-editorial-art-fallback"><Icon size={64} strokeWidth={1.25} aria-hidden="true" /></div>}
      />
    </div>
  );
}
