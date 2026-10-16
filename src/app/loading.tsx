import React from 'react';
import { LogoLoader } from '@/components/ui/LogoLoader';

export default function RootLoading() {
  return (
    <LogoLoader
      message="Menyiapkan materi belajarmu..."
      subMessage="Kodeluma by Azzam Codex"
      fullScreen={true}
      size="md"
    />
  );
}
