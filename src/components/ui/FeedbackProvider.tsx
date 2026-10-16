'use client';

import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { AlertCircle, CheckCircle2, Info, HelpCircle, X } from 'lucide-react';
import { KodelumaLottie } from './KodelumaLottie';

type FeedbackVariant = 'success' | 'error' | 'info';

interface FeedbackMessage {
  variant: FeedbackVariant;
  title: string;
  message?: string;
}

interface ConfirmOptions {
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  destructive?: boolean;
}

interface TextRequestOptions extends ConfirmOptions {
  label: string;
  placeholder?: string;
  maxLength?: number;
}

interface FeedbackContextValue {
  notify: (message: FeedbackMessage) => void;
  confirm: (options: ConfirmOptions) => Promise<boolean>;
  requestText: (options: TextRequestOptions) => Promise<string | null>;
}

type DialogRequest =
  | ({ kind: 'confirm'; resolve: (value: boolean) => void } & ConfirmOptions)
  | ({ kind: 'text'; resolve: (value: string | null) => void } & TextRequestOptions);

const FeedbackContext = createContext<FeedbackContextValue | null>(null);

const variantIcons = {
  success: CheckCircle2,
  error: AlertCircle,
  info: Info,
};

export function FeedbackProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<(FeedbackMessage & { id: number }) | null>(null);
  const [dialog, setDialog] = useState<DialogRequest | null>(null);
  const [textValue, setTextValue] = useState('');
  const dialogRef = useRef<DialogRequest | null>(null);
  const toastId = useRef(0);
  const invalidBatch = useRef(false);

  const notify = useCallback((message: FeedbackMessage) => {
    toastId.current += 1;
    setToast({ ...message, id: toastId.current });
  }, []);

  useEffect(() => {
    const handleInvalid = (event: Event) => {
      event.preventDefault();
      if (invalidBatch.current) return;
      const field = event.target;
      if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement || field instanceof HTMLSelectElement)) return;

      invalidBatch.current = true;
      window.setTimeout(() => { invalidBatch.current = false; }, 0);
      const label = field.labels?.[0]?.textContent?.replace(/\*/g, '').trim() || 'Kolom ini';
      const message = field.validity.valueMissing
        ? `${label} wajib diisi.`
        : `Periksa kembali ${label.toLowerCase()}.`;
      field.focus();
      notify({ variant: 'error', title: 'Formulir belum lengkap', message });
    };
    document.addEventListener('invalid', handleInvalid, true);
    return () => document.removeEventListener('invalid', handleInvalid, true);
  }, [notify]);

  const settleDialog = useCallback((accepted: boolean) => {
    const current = dialogRef.current;
    dialogRef.current = null;
    setDialog(null);
    if (!current) return;
    if (current.kind === 'confirm') current.resolve(accepted);
    else current.resolve(accepted ? textValue.trim() : null);
  }, [textValue]);

  const openDialog = useCallback((request: DialogRequest) => {
    setToast(null);
    const previous = dialogRef.current;
    if (previous) {
      if (previous.kind === 'confirm') previous.resolve(false);
      else previous.resolve(null);
    }
    dialogRef.current = request;
    setTextValue('');
    setDialog(request);
  }, []);

  const confirm = useCallback((options: ConfirmOptions) =>
    new Promise<boolean>((resolve) => openDialog({ ...options, kind: 'confirm', resolve })), [openDialog]);

  const requestText = useCallback((options: TextRequestOptions) =>
    new Promise<string | null>((resolve) => openDialog({ ...options, kind: 'text', resolve })), [openDialog]);

  const ToastIcon = toast ? variantIcons[toast.variant] : Info;

  return (
    <FeedbackContext.Provider value={{ notify, confirm, requestText }}>
      {children}

      {toast && (
        <ToastContainer className="kl-feedback-stack p-3" position="top-end">
          <Toast
            key={toast.id}
            show
            onClose={() => setToast(null)}
            autohide
            delay={toast.variant === 'error' ? 6500 : 4500}
            className={`kl-feedback-toast kl-feedback-toast--${toast.variant}`}
            role={toast.variant === 'error' ? 'alert' : 'status'}
            aria-live={toast.variant === 'error' ? 'assertive' : 'polite'}
          >
            <Toast.Body className="d-flex align-items-start gap-3 p-3">
              <span className="kl-feedback-visual" aria-hidden="true">
                <KodelumaLottie
                  name="Kodeluma feedback"
                  src="/animations/feedback-spark.json"
                  width={48}
                  height={48}
                  loop={false}
                  fallback={<span className="kl-feedback-static-ring" />}
                />
                <ToastIcon size={21} strokeWidth={1.9} className="kl-feedback-visual-icon" />
              </span>
              <span className="flex-grow-1 min-w-0 pt-1">
                <strong className="d-block kl-feedback-title">{toast.title}</strong>
                {toast.message && <span className="d-block kl-feedback-message">{toast.message}</span>}
              </span>
              <button type="button" className="kl-feedback-close" onClick={() => setToast(null)} aria-label="Tutup notifikasi">
                <X size={18} strokeWidth={1.8} />
              </button>
            </Toast.Body>
          </Toast>
        </ToastContainer>
      )}

      <Modal show={dialog !== null} onHide={() => settleDialog(false)} centered backdrop="static" className="kl-feedback-dialog">
        {dialog && (
          <>
            <Modal.Header closeButton>
              <Modal.Title className="h5 fw-bold">{dialog.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="pt-4">
              <span className={`kl-feedback-dialog-visual ${dialog.destructive ? 'kl-feedback-dialog-visual--danger' : ''}`} aria-hidden="true">
                <KodelumaLottie
                  name="Kodeluma confirmation"
                  src="/animations/feedback-spark.json"
                  width={64}
                  height={64}
                  loop={false}
                  fallback={<span className="kl-feedback-static-ring" />}
                />
                <HelpCircle size={28} strokeWidth={1.8} className="kl-feedback-visual-icon" />
              </span>
              <p className="kl-feedback-dialog-message mb-0">{dialog.message}</p>
              {dialog.kind === 'text' && (
                <div className="mt-4">
                  <label htmlFor="kl-feedback-text" className="form-label">{dialog.label}</label>
                  <textarea
                    id="kl-feedback-text"
                    className="form-control"
                    rows={3}
                    value={textValue}
                    onChange={(event) => setTextValue(event.target.value)}
                    placeholder={dialog.placeholder}
                    maxLength={dialog.maxLength ?? 500}
                    required
                    autoFocus
                  />
                </div>
              )}
            </Modal.Body>
            <Modal.Footer className="border-0 pt-0">
              <button type="button" className="btn kl-btn-secondary" onClick={() => settleDialog(false)}>
                {dialog.cancelLabel ?? 'Batal'}
              </button>
              <button
                type="button"
                className={`btn ${dialog.destructive ? 'btn-danger' : 'kl-btn-primary'}`}
                onClick={() => settleDialog(true)}
                disabled={dialog.kind === 'text' && !textValue.trim()}
              >
                {dialog.confirmLabel ?? 'Lanjutkan'}
              </button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </FeedbackContext.Provider>
  );
}

export function useFeedback(): FeedbackContextValue {
  const context = useContext(FeedbackContext);
  if (!context) throw new Error('useFeedback harus digunakan di dalam FeedbackProvider.');
  return context;
}
