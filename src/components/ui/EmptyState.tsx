import React from 'react';
import { LucideIcon, Inbox } from 'lucide-react';
import { Button } from './Button';

interface EmptyStateProps {
  icon?: LucideIcon;
  title?: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
  className?: string;
}

export function EmptyState({
  icon: Icon = Inbox,
  title = 'Tidak Ada Data',
  description,
  actionText,
  onAction,
  className,
}: EmptyStateProps) {
  return (
    <div className={`kl-card text-center py-5 px-4 ${className || ''}`}>
      <div
        className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
        style={{
          width: '56px',
          height: '56px',
          backgroundColor: 'var(--kl-primary-soft)',
          color: 'var(--kl-primary)',
        }}
      >
        <Icon size={26} strokeWidth={1.75} />
      </div>
      <h3 className="h5 fw-bold mb-2">{title}</h3>
      <p className="text-secondary mx-auto mb-4" style={{ maxWidth: '420px', fontSize: '14px' }}>
        {description}
      </p>
      {actionText && onAction && (
        <Button variant="primary" onClick={onAction}>
          {actionText}
        </Button>
      )}
    </div>
  );
}
