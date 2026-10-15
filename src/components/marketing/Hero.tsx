'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Compass, CheckCircle2, Terminal } from 'lucide-react';

export function Hero() {
  return (
    <section
      className="py-5"
      style={{
        background:
          'radial-gradient(circle at 85% 30%, rgba(239, 245, 255, 0.9) 0%, rgba(248, 250, 253, 0.4) 60%), #FFFFFF',
        borderBottom: '1px solid var(--kl-border)',
      }}
    >
      <div className="container py-lg-4">
        <div className="row align-items-center g-5">
          {/* Left Column: Headline and CTAs */}
          <div className="col-lg-6">
            <div className="kl-eyebrow d-inline-flex align-items-center gap-2">
              <span
                className="d-inline-block rounded-circle"
                style={{ width: '8px', height: '8px', backgroundColor: 'var(--kl-primary)' }}
              />
              PLATFORM BELAJAR CODING UNTUK PEMULA
            </div>

            <h1
              className="display-5 fw-bold mb-3"
              style={{
                color: 'var(--kl-ink)',
                letterSpacing: '-0.04em',
                lineHeight: 1.15,
              }}
            >
              Belajar coding, mulai dari{' '}
              <span style={{ color: 'var(--kl-primary)' }}>langkah pertamamu.</span>
            </h1>

            <p className="kl-lead mb-4" style={{ maxWidth: '500px' }}>
              Materi terarah, latihan nyata, dan progres yang bisa kamu lihat — semua dirancang khusus
              agar ramah bagi pemula tanpa latar belakang IT.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 mb-4">
              <Link
                href="/register"
                className="kl-btn-primary d-inline-flex align-items-center justify-content-center gap-2 text-decoration-none shadow-sm"
              >
                <span>Mulai Belajar Gratis</span>
                <ArrowRight size={17} strokeWidth={2} />
              </Link>
              <Link
                href="/courses"
                className="kl-btn-secondary d-inline-flex align-items-center justify-content-center gap-2 text-decoration-none"
              >
                <Compass size={17} strokeWidth={1.75} />
                <span>Jelajahi Kelas</span>
              </Link>
            </div>

            {/* Honest Value Props */}
            <div className="d-flex flex-wrap align-items-center gap-3 pt-2 text-secondary small">
              <div className="d-flex align-items-center gap-1">
                <CheckCircle2 size={16} className="text-primary" strokeWidth={2} />
                <span>Materi bertahap</span>
              </div>
              <span className="text-muted">&bull;</span>
              <div className="d-flex align-items-center gap-1">
                <CheckCircle2 size={16} className="text-primary" strokeWidth={2} />
                <span>Praktik langsung</span>
              </div>
              <span className="text-muted">&bull;</span>
              <div className="d-flex align-items-center gap-1">
                <CheckCircle2 size={16} className="text-primary" strokeWidth={2} />
                <span>Progres tersimpan</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive HTML/CSS Code Mockup */}
          <div className="col-lg-6">
            <div
              className="kl-card p-3 p-sm-4 bg-white shadow-lg mx-auto"
              style={{
                maxWidth: '540px',
                border: '1px solid var(--kl-border)',
                borderRadius: 'var(--kl-radius-xl)',
                transform: 'rotate(-0.8deg)',
              }}
            >
              {/* Mockup Header Bar */}
              <div className="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom">
                <div className="d-flex align-items-center gap-2">
                  <span
                    className="rounded-circle"
                    style={{ width: '10px', height: '10px', backgroundColor: '#EF4444' }}
                  />
                  <span
                    className="rounded-circle"
                    style={{ width: '10px', height: '10px', backgroundColor: '#F59E0B' }}
                  />
                  <span
                    className="rounded-circle"
                    style={{ width: '10px', height: '10px', backgroundColor: '#10B981' }}
                  />
                  <span className="small text-secondary fw-semibold ms-2 font-monospace">
                    editor / index.html
                  </span>
                </div>
                <div className="d-flex align-items-center gap-1 text-primary small fw-semibold">
                  <Terminal size={14} />
                  <span>Kodeluma Playground</span>
                </div>
              </div>

              {/* Status Header */}
              <div
                className="d-flex align-items-center justify-content-between p-2 px-3 rounded mb-3 small"
                style={{ backgroundColor: 'var(--kl-primary-soft)', color: 'var(--kl-primary)' }}
              >
                <span className="fw-semibold">Modul 1: HTML Dasar</span>
                <span className="badge rounded-pill bg-white text-primary border">Progres: 33%</span>
              </div>

              {/* Monospace Code Body */}
              <div className="kl-code-panel p-3 p-sm-4 overflow-x-auto mb-3">
                <pre className="m-0" style={{ fontFamily: 'var(--kl-font-code)', fontSize: '13px' }}>
                  <code>
                    <span style={{ color: '#60A5FA' }}>&lt;!DOCTYPE html&gt;</span>
                    {'\n'}
                    <span style={{ color: '#F472B6' }}>&lt;html lang=&quot;id&quot;&gt;</span>
                    {'\n  '}
                    <span style={{ color: '#F472B6' }}>&lt;head&gt;</span>
                    {'\n    '}
                    <span style={{ color: '#F472B6' }}>&lt;title&gt;</span>
                    <span style={{ color: '#E2E8F0' }}>Website Pertamaku</span>
                    <span style={{ color: '#F472B6' }}>&lt;/title&gt;</span>
                    {'\n  '}
                    <span style={{ color: '#F472B6' }}>&lt;/head&gt;</span>
                    {'\n  '}
                    <span style={{ color: '#F472B6' }}>&lt;body&gt;</span>
                    {'\n    '}
                    <span style={{ color: '#34D399' }}>&lt;h1&gt;</span>
                    <span style={{ color: '#FBBF24', fontWeight: 600 }}>Halo, Dunia!</span>
                    <span style={{ color: '#34D399' }}>&lt;/h1&gt;</span>
                    {'\n    '}
                    <span style={{ color: '#34D399' }}>&lt;p&gt;</span>
                    <span style={{ color: '#CBD5E1' }}>Mulai belajar coding di Kodeluma.</span>
                    <span style={{ color: '#34D399' }}>&lt;/p&gt;</span>
                    {'\n  '}
                    <span style={{ color: '#F472B6' }}>&lt;/body&gt;</span>
                    {'\n'}
                    <span style={{ color: '#F472B6' }}>&lt;/html&gt;</span>
                  </code>
                </pre>
              </div>

              {/* Bottom Card Footer */}
              <div className="d-flex align-items-center justify-content-between small text-secondary">
                <span>Output preview terisolasi</span>
                <span className="kl-badge kl-badge-success py-1 px-2">Sintaks Valid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
