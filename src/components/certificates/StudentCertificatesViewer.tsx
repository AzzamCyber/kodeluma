'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Award, CalendarDays, ChevronLeft, ChevronRight, Maximize2, Search, ShieldCheck, ShieldX, X } from 'lucide-react';
import type { Certificate } from '@/types/domain';
import { EmptyState } from '@/components/ui/EmptyState';
import { RealCertificateDocument } from './RealCertificateDocument';

interface Props {
  certificates: Certificate[];
}

export function StudentCertificatesViewer({ certificates }: Props) {
  const [selectedId, setSelectedId] = useState(certificates[0]?.id ?? '');
  const [query, setQuery] = useState('');
  const [scrollState, setScrollState] = useState({ left: false, right: false });
  const railRef = useRef<HTMLDivElement>(null);
  const fullViewRef = useRef<HTMLDialogElement>(null);
  const filtered = useMemo(() => {
    const term = query.trim().toLocaleLowerCase('id-ID');
    if (!term) return certificates;
    return certificates.filter((certificate) =>
      [certificate.courseTitle, certificate.recipientName, certificate.verifyCode]
        .some((value) => value.toLocaleLowerCase('id-ID').includes(term))
    );
  }, [certificates, query]);
  const selected = filtered.find((certificate) => certificate.id === selectedId) ?? filtered[0];

  useEffect(() => {
    if (filtered.length > 0 && !filtered.some((certificate) => certificate.id === selectedId)) {
      setSelectedId(filtered[0].id);
    }
  }, [filtered, selectedId]);

  const updateScrollState = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    setScrollState({
      left: rail.scrollLeft > 2,
      right: rail.scrollLeft + rail.clientWidth < rail.scrollWidth - 2,
    });
  }, []);

  useEffect(() => {
    updateScrollState();
    const rail = railRef.current;
    if (!rail) return;
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(rail);
    return () => observer.disconnect();
  }, [filtered.length, updateScrollState]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || !selected) return;
    const tab = Array.from(rail.querySelectorAll<HTMLButtonElement>('[data-certificate-id]'))
      .find((element) => element.dataset.certificateId === selected.id);
    if (!tab) return;
    const railBounds = rail.getBoundingClientRect();
    const tabBounds = tab.getBoundingClientRect();
    if (tabBounds.left < railBounds.left || tabBounds.right > railBounds.right) {
      rail.scrollTo({ left: rail.scrollLeft + tabBounds.left - railBounds.left - 12, behavior: 'auto' });
    }
  }, [filtered.length, selected]);

  function scrollTabs(direction: -1 | 1) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    railRef.current?.scrollBy({
      left: direction * 240,
      behavior: reduceMotion ? 'instant' : 'smooth',
    });
  }

  if (certificates.length === 0) {
    return (
      <div className="kl-cert-empty">
        <EmptyState
          icon={Award}
          title="Perjalanan belajarmu belum sampai di sini"
          description="Sertifikat penyelesaian akan muncul setelah seluruh materi wajib dan evaluasi kursus memenuhi syarat."
        />
        <a href="/dashboard" className="btn kl-btn-primary mt-3">Lanjutkan belajar</a>
      </div>
    );
  }

  return (
    <div className="kl-cert-page-content">
      <section className="kl-cert-collection d-print-none" aria-label="Koleksi sertifikat">
        <div className="kl-cert-collection-head">
          <div>
            <p className="kl-eyebrow mb-1">KOLEKSI SERTIFIKAT</p>
            <h2 className="h4 mb-0">Pilih sertifikat <span className="kl-cert-count">{certificates.length}</span></h2>
          </div>
          <div className="kl-cert-collection-tools">
            {certificates.length > 1 && (
              <label className="kl-cert-search">
                <span className="visually-hidden">Cari sertifikat</span>
                <Search size={18} aria-hidden="true" />
                <input
                  type="search"
                  className="form-control"
                  placeholder="Cari kursus atau kode"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </label>
            )}
            <div className="kl-cert-nav" aria-label="Navigasi sertifikat">
              <button type="button" className="btn" onClick={() => scrollTabs(-1)} disabled={!scrollState.left} aria-label="Geser sertifikat ke kiri">
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <button type="button" className="btn" onClick={() => scrollTabs(1)} disabled={!scrollState.right} aria-label="Geser sertifikat ke kanan">
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div ref={railRef} className="kl-cert-list" role="group" aria-label="Pilih sertifikat" onScroll={updateScrollState}>
          {filtered.map((certificate) => {
            const active = selected?.id === certificate.id;
            const revoked = Boolean(certificate.revokedAt);
            return (
              <button
                type="button"
                key={certificate.id}
                data-certificate-id={certificate.id}
                className={'kl-cert-list-item' + (active ? ' is-active' : '')}
                onClick={() => setSelectedId(certificate.id)}
                aria-pressed={active}
                aria-label={certificate.courseTitle + (revoked ? ', dicabut' : ', aktif')}
                title={certificate.courseTitle}
              >
                <span className="kl-cert-list-icon">
                  {revoked ? <ShieldX size={20} aria-hidden="true" /> : <ShieldCheck size={20} aria-hidden="true" />}
                </span>
                <span className="kl-cert-list-copy">
                  <strong>{certificate.courseTitle}</strong>
                  <span><CalendarDays size={13} aria-hidden="true" /> {new Date(certificate.issuedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </span>
                {revoked && <span className="kl-cert-list-status is-revoked">Dicabut</span>}
              </button>
            );
          })}
          {filtered.length === 0 && <p className="text-secondary mb-0 py-3">Tidak ada sertifikat yang cocok. Coba kata kunci lain.</p>}
        </div>
        {(scrollState.left || scrollState.right) && <p className="kl-cert-rail-hint mb-0">Geser untuk melihat sertifikat lainnya.</p>}
      </section>

      {selected && (
        <div className="kl-cert-featured" id="featured-certificate">
          <div className="kl-cert-featured-heading d-print-none">
            <div>
              <p className="kl-eyebrow mb-1">PRATINJAU SERTIFIKAT</p>
              <h2 className="h5 mb-0">{selected.courseTitle}</h2>
            </div>
            <button type="button" className="btn kl-btn-secondary d-inline-flex align-items-center gap-2" onClick={() => fullViewRef.current?.showModal()}>
              <Maximize2 size={17} aria-hidden="true" /> Lihat utuh
            </button>
          </div>
          <div className="kl-cert-preview-stage">
            <RealCertificateDocument certificate={selected} />
          </div>
          <dialog ref={fullViewRef} className="kl-cert-fullscreen" aria-labelledby="kl-cert-fullscreen-title">
            <div className="kl-cert-fullscreen-head">
              <h2 id="kl-cert-fullscreen-title" className="h5 mb-0">Sertifikat {selected.courseTitle}</h2>
              <button type="button" className="btn kl-btn-secondary" onClick={() => fullViewRef.current?.close()} aria-label="Tutup tampilan penuh">
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <RealCertificateDocument certificate={selected} showActions={false} />
          </dialog>
        </div>
      )}
    </div>
  );
}
