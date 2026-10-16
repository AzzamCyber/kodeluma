import React from 'react';
import Image from 'next/image';

interface LogoLoaderProps {
  message?: string;
  subMessage?: string;
  fullScreen?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LogoLoader({
  message = 'Menyiapkan materi belajarmu...',
  subMessage = 'Kodeluma by Azzam Codex',
  fullScreen = true,
  size = 'md',
  className = '',
}: LogoLoaderProps) {
  const iconDimensions = {
    sm: { box: 64, icon: 40, ring: 76, strokeWidth: 2 },
    md: { box: 88, icon: 54, ring: 104, strokeWidth: 2.5 },
    lg: { box: 112, icon: 70, ring: 132, strokeWidth: 3 },
  }[size];

  const content = (
    <div
      className={`d-flex flex-column align-items-center justify-content-center text-center p-4 ${className}`}
      role="status"
      aria-live="polite"
    >
      {/* Animated Logo Stage */}
      <div
        className="position-relative d-flex align-items-center justify-content-center mb-4"
        style={{
          width: iconDimensions.ring + 16,
          height: iconDimensions.ring + 16,
        }}
      >
        {/* Soft Concentric Pulse Aura */}
        <div
          className="position-absolute rounded-circle kl-loader-pulse"
          style={{
            width: iconDimensions.ring + 16,
            height: iconDimensions.ring + 16,
            backgroundColor: 'var(--kl-primary-soft)',
            zIndex: 1,
          }}
        />

        {/* Orbiting Gradient Ring with Amber Tracer */}
        <svg
          className="position-absolute kl-loader-orbit-ring"
          width={iconDimensions.ring}
          height={iconDimensions.ring}
          viewBox="0 0 100 100"
          style={{ zIndex: 2 }}
        >
          <defs>
            <linearGradient id="kl-loader-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
              <stop offset="60%" stopColor="#2563EB" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#F4B544" stopOpacity="1" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="url(#kl-loader-grad)"
            strokeWidth={iconDimensions.strokeWidth * 2}
            strokeDasharray="140 140"
            strokeLinecap="round"
          />
        </svg>

        {/* Central Brand Icon Card with Breathing Animation */}
        <div
          className="position-relative d-flex align-items-center justify-content-center rounded-4 bg-white shadow-sm kl-loader-logo-wrapper"
          style={{
            width: iconDimensions.box,
            height: iconDimensions.box,
            border: '1px solid var(--kl-border)',
            zIndex: 3,
          }}
        >
          <Image
            src="/brand/kodeluma-icon.png"
            alt="Kodeluma"
            width={iconDimensions.icon}
            height={iconDimensions.icon}
            priority
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* Brand Title */}
      <div className="d-flex align-items-center justify-content-center gap-1 mb-2">
        <span
          className="fw-bold fs-4"
          style={{
            fontFamily: 'var(--kl-font-heading)',
            color: 'var(--kl-ink)',
            letterSpacing: '-0.03em',
          }}
        >
          kodeluma
        </span>
        <span
          className="rounded-circle d-inline-block"
          style={{
            width: '7px',
            height: '7px',
            backgroundColor: 'var(--kl-primary)',
            marginTop: '8px',
          }}
        />
      </div>

      {/* Loading Progress Bar */}
      <div className="kl-loader-progress-bar mb-3" />

      {/* Dynamic Caption */}
      {message && (
        <p className="text-dark small fw-medium mb-1" style={{ maxWidth: '300px' }}>
          {message}
        </p>
      )}

      {subMessage && (
        <span className="text-muted" style={{ fontSize: '11px', letterSpacing: '0.04em' }}>
          {subMessage}
        </span>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div
        className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: 'rgba(248, 250, 253, 0.94)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 9999,
        }}
      >
        {content}
      </div>
    );
  }

  return content;
}
