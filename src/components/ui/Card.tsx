import React from 'react';
import clsx from 'clsx';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  children: React.ReactNode;
}

export function Card({ interactive = false, className, children, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        'kl-card p-4',
        interactive && 'kl-card-interactive',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
