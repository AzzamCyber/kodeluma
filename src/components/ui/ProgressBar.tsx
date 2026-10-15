import React from 'react';
import clsx from 'clsx';

interface ProgressBarProps {
  value: number; // 0 to 100
  label?: string;
  showPercentText?: boolean;
  height?: number;
  className?: string;
}

export function ProgressBar({
  value,
  label,
  showPercentText = true,
  height = 8,
  className,
}: ProgressBarProps) {
  const clampedValue = Math.min(100, Math.max(0, Math.round(value)));

  return (
    <div className={clsx('w-100', className)}>
      {(label || showPercentText) && (
        <div className="d-flex justify-content-between align-items-center mb-1 fs-7">
          {label && <span className="text-secondary fw-medium">{label}</span>}
          {showPercentText && (
            <span className="fw-semibold text-primary ms-auto">{clampedValue}%</span>
          )}
        </div>
      )}
      <div
        className="progress"
        style={{
          height: `${height}px`,
          backgroundColor: '#E8EDF4',
          borderRadius: '999px',
        }}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label || 'Progres belajar'}
      >
        <div
          className="progress-bar"
          style={{
            width: `${clampedValue}%`,
            backgroundColor: 'var(--kl-primary)',
            borderRadius: '999px',
            transition: 'width 300ms ease',
          }}
        />
      </div>
    </div>
  );
}
