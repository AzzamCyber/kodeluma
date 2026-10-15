'use client';

import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  loadingText = 'Memproses...',
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    'd-inline-flex align-items-center justify-content-center text-decoration-none fw-semibold border transition-all text-center';

  const variantMap = {
    primary: 'kl-btn-primary',
    secondary: 'kl-btn-secondary',
    outline: 'btn btn-outline-secondary',
    danger: 'btn btn-danger',
    ghost: 'btn btn-link text-primary p-0',
  };

  const sizeMap = {
    sm: 'btn-sm py-1 px-3 fs-7',
    md: 'py-2 px-3 fs-6',
    lg: 'py-3 px-4 fs-6',
  };

  return (
    <button
      className={clsx(
        baseClasses,
        variantMap[variant],
        variant !== 'ghost' && sizeMap[size],
        isLoading && 'opacity-75 cursor-not-allowed',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="d-flex align-items-center gap-2">
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          />
          <span>{loadingText}</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
}
