'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Quest } from '@/types/quest';
import { Sparkles, Award, CheckCircle2, HelpCircle, Terminal, Globe, Compass } from 'lucide-react';
import { EditorialIllustration } from '@/components/ui/EditorialIllustration';
import { useFeedback } from '@/components/ui/FeedbackProvider';

interface QuestWithClaim extends Quest {
  isClaimed: boolean;
}

interface QuestBoardViewProps {
  initialQuests: QuestWithClaim[];
  initialTotalXp: number;
  isLoggedIn: boolean;
}

export function QuestBoardView({ initialQuests, initialTotalXp, isLoggedIn }: QuestBoardViewProps) {
  const { notify } = useFeedback();
  const [quests, setQuests] = useState<QuestWithClaim[]>(initialQuests);
  const [totalXp, setTotalXp] = useState(initialTotalXp);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [revealedHintId, setRevealedHintId] = useState<string | null>(null);

  // Level calculation: Every 100 XP is 1 level
  const currentLevel = Math.floor(totalXp / 100) + 1;
  const xpProgressInLevel = totalXp % 100;

  const filteredQuests = quests.filter((q) => {
    if (selectedCategory === 'all') return true;
    return q.category === selectedCategory;
  });

  const handleClaim = async (questId: string) => {
    if (!isLoggedIn) return;
    setLoadingId(questId);

    try {
      const res = await fetch(`/api/v1/quests/${questId}/claim`, {
        method: 'POST',
      });
      const json = await res.json();

      if (!res.ok || json.error) {
        throw new Error(json.error?.message || 'Gagal mengklaim quest.');
      }

      setQuests((prev) =>
        prev.map((q) => (q.id === questId ? { ...q, isClaimed: true } : q))
      );
      if (json.data?.totalXp !== undefined) {
        setTotalXp(json.data.totalXp);
      }
      notify({ variant: 'success', title: 'Quest berhasil diklaim', message: 'XP kamu sudah diperbarui.' });
    } catch (err: unknown) {
      notify({ variant: 'error', title: 'Klaim quest gagal', message: err instanceof Error ? err.message : 'Terjadi kendala.' });
    } finally {
      setLoadingId(null);
    }
  };

  const completedCount = quests.filter((q) => q.isClaimed).length;

  return (
    <div className="container py-5">
      {/* Header and XP Progression Header */}
      <div className="row g-4 align-items-center mb-5">
        <div className="col-lg-7">
          <div className="kl-eyebrow d-inline-flex align-items-center gap-2">
            <Sparkles size={14} className="text-warning" />
            <span>KODELUMA QUEST & SKILL SYSTEM</span>
          </div>
          <h1 className="h1 fw-bold mb-2" style={{ color: 'var(--kl-ink)' }}>
            Tantangan & Penguasaan Skill
          </h1>
          <p className="kl-lead mb-0" style={{ maxWidth: '580px' }}>
            Selesaikan misi belajar langsung, coba perintah di terminal, dan kumpulkan XP untuk mengukur progres keahlian coding Anda.
          </p>
          <EditorialIllustration kind="steps" className="kl-page-art mt-3" />
        </div>

        {/* User XP & Level Card */}
        <div className="col-lg-5">
          <div className="kl-card p-4 bg-white border shadow-sm">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <span className="small text-secondary fw-semibold">Pencapaian Belajar</span>
                <div className="h4 fw-bold mb-0 text-dark">Tingkat {currentLevel}</div>
              </div>
              <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'rgba(244, 181, 68, 0.15)',
                  color: 'var(--kl-amber)',
                }}
              >
                <Award size={24} />
              </div>
            </div>

            {/* XP Progress Bar */}
            <div className="mb-3">
              <div className="d-flex justify-content-between small text-secondary mb-1">
                <span>{totalXp} Total XP</span>
                <span>{xpProgressInLevel} / 100 XP ke Tingkat {currentLevel + 1}</span>
              </div>
              <div className="progress" style={{ height: '8px', backgroundColor: '#E8EDF4' }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${xpProgressInLevel}%`,
                    backgroundColor: 'var(--kl-primary)',
                  }}
                  aria-valuenow={xpProgressInLevel}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center pt-2 border-top small text-secondary">
              <span>Misi Terselesaikan:</span>
              <span className="fw-bold text-dark">
                {completedCount} dari {quests.length} Quest
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Category Pills */}
      <div className="d-flex flex-wrap gap-2 mb-4 pb-2 border-bottom">
        {[
          { id: 'all', label: 'Semua Quest' },
          { id: 'onboarding', label: 'Langkah Awal' },
          { id: 'web', label: 'Web (HTML/CSS/JS)' },
          { id: 'terminal', label: 'CLI & Terminal' },
          { id: 'git', label: 'Git & Versi' },
        ].map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`btn btn-sm px-3 py-1.5 rounded-pill ${
              selectedCategory === cat.id
                ? 'btn-primary fw-semibold'
                : 'btn-outline-secondary'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Quests Grid */}
      <div className="row g-4">
        {filteredQuests.map((quest) => (
          <div key={quest.id} className="col-md-6 col-lg-4">
            <div
              className={`kl-card p-4 bg-white border h-100 d-flex flex-column ${
                quest.isClaimed ? 'border-success-subtle bg-light-subtle' : ''
              }`}
            >
              {/* Card Header */}
              <div className="d-flex justify-content-between align-items-start mb-2">
                <span className="badge bg-primary-subtle text-primary border border-primary-subtle small px-2 py-1 text-uppercase">
                  {quest.category}
                </span>
                <span
                  className="badge px-2 py-1 small fw-bold"
                  style={{
                    backgroundColor: 'rgba(244, 181, 68, 0.15)',
                    color: '#B45309',
                    border: '1px solid rgba(244, 181, 68, 0.3)',
                  }}
                >
                  +{quest.xp} XP
                </span>
              </div>

              {/* Title & Description */}
              <h2 className="h6 fw-bold mb-2 text-dark">{quest.title}</h2>
              <p className="text-secondary small mb-3 flex-grow-1">{quest.description}</p>

              {/* Quest Task Box */}
              <div className="p-3 rounded-3 bg-light border mb-3 small">
                <div className="fw-semibold text-dark mb-1">Misi yang harus dilakukan:</div>
                <div className="text-secondary">{quest.task}</div>
              </div>

              {/* Hint Toggle */}
              {revealedHintId === quest.id ? (
                <div className="alert alert-info py-2 px-3 small mb-3 d-flex align-items-start gap-2">
                  <HelpCircle size={15} className="mt-0.5 flex-shrink-0" />
                  <div>{quest.solutionHint}</div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setRevealedHintId(quest.id)}
                  className="btn btn-link text-muted small p-0 text-start text-decoration-none mb-3"
                  style={{ fontSize: '12px' }}
                >
                  Lihat petunjuk penyelesaian &rarr;
                </button>
              )}

              {/* Bottom Action Area */}
              <div className="pt-2 border-top d-flex align-items-center justify-content-between">
                {/* Lab shortcut */}
                {quest.runtime === 'WEB' ? (
                  <Link href="/lab" className="small text-primary text-decoration-none d-flex align-items-center gap-1">
                    <Globe size={13} />
                    <span>Buka Code Lab</span>
                  </Link>
                ) : quest.runtime === 'CLI-GUIDED' ? (
                  <Link href="/lab/terminal" className="small text-primary text-decoration-none d-flex align-items-center gap-1">
                    <Terminal size={13} />
                    <span>Buka Terminal</span>
                  </Link>
                ) : (
                  <Link href="/learning-paths" className="small text-primary text-decoration-none d-flex align-items-center gap-1">
                    <Compass size={13} />
                    <span>Lihat Alur</span>
                  </Link>
                )}

                {/* Claim / Status Button */}
                {quest.isClaimed ? (
                  <span className="badge bg-success-subtle text-success border border-success-subtle py-1.5 px-2.5 small d-flex align-items-center gap-1">
                    <CheckCircle2 size={13} />
                    <span>Selesai (+{quest.xp} XP)</span>
                  </span>
                ) : isLoggedIn ? (
                  <button
                    type="button"
                    onClick={() => handleClaim(quest.id)}
                    disabled={loadingId === quest.id}
                    className="btn btn-outline-primary btn-sm py-1 px-3 small fw-semibold"
                  >
                    {loadingId === quest.id ? 'Memproses...' : 'Klaim Selesai'}
                  </button>
                ) : (
                  <Link href="/login" className="btn btn-outline-secondary btn-sm py-1 px-2.5 small">
                    Masuk untuk Klaim
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA to Code Lab */}
      <div className="mt-5 p-4 rounded-4 bg-white border text-center">
        <h2 className="h5 fw-bold mb-2 text-dark">Ingin Mencoba Kode Bebas?</h2>
        <p className="text-secondary small mb-3">
          Gunakan Code Lab untuk eksperimen HTML, CSS, JavaScript, atau Guided Terminal untuk latihan Linux & Git.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link href="/lab" className="kl-btn-primary text-decoration-none small py-2 px-3">
            Buka Code Lab Playground
          </Link>
          <Link href="/lab/terminal" className="kl-btn-secondary text-decoration-none small py-2 px-3">
            Buka Guided Terminal
          </Link>
        </div>
      </div>
    </div>
  );
}
