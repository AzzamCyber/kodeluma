'use client';

import React, { lazy, Suspense, useState, useEffect, useRef } from 'react';

const DotLottieReact = lazy(() => import('@lottiefiles/dotlottie-react').then((module) => ({ default: module.DotLottieReact })));

export interface KodelumaLottieProps {
  name: string;
  src: string;
  fallback?: React.ReactNode;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
  width?: number | string;
  height?: number | string;
  decorative?: boolean;
  defer?: boolean;
}

export function KodelumaLottie({
  name,
  src,
  fallback,
  loop = true,
  autoplay = true,
  className = '',
  style,
  width = '100%',
  height = '100%',
  decorative = true,
  defer = false,
}: KodelumaLottieProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(!defer);
  const [hasError, setHasError] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (!defer || visible || !containerRef.current) return;
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: '160px' });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [defer, visible]);

  if (!mounted) {
    return (
      <div
        className={`kl-lottie-container ${className}`}
        ref={containerRef}
        style={{ width, height, ...style }}
        data-lottie-name={name}
        aria-hidden={decorative}
      >
        {fallback}
      </div>
    );
  }

  // If user requests reduced motion or an error occurs, render fallback
  if (prefersReducedMotion || hasError || !visible) {
    return (
      <div
        className={`kl-lottie-container kl-lottie-fallback ${className}`}
        ref={containerRef}
        style={{ width, height, ...style }}
        data-lottie-name={name}
        aria-hidden={decorative}
      >
        {fallback}
      </div>
    );
  }

  return (
    <div
      className={`kl-lottie-container position-relative ${className}`}
      style={{ width, height, ...style }}
      data-lottie-name={name}
      aria-hidden={decorative}
    >
      <Suspense fallback={fallback}>
        <DotLottieReact
          src={src}
          loop={loop}
          autoplay={autoplay}
          onError={() => setHasError(true)}
        />
      </Suspense>
    </div>
  );
}
