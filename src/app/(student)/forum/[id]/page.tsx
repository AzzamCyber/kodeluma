import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth/session';
import { ForumService } from '@/lib/services/forumService';
import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { StudentNavbar } from '@/components/layout/StudentNavbar';
import { Footer } from '@/components/layout/Footer';
import { ReplyForm } from '@/components/forum/ReplyForm';
import { ArrowLeft, User as UserIcon, Clock, ShieldAlert } from 'lucide-react';

interface ThreadDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ThreadDetailPage({ params }: ThreadDetailPageProps) {
  const { id } = await params;
  const user = await getCurrentUser();

  const detail = await ForumService.getThreadDetail(id);
  if (!detail) {
    notFound();
  }

  const { thread, replies } = detail;

  // Non-admins cannot view hidden threads
  if (thread.status === 'hidden' && user?.role !== 'admin') {
    notFound();
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      {user ? <StudentNavbar user={user} /> : <PublicNavbar />}

      <main id="main-content" className="flex-grow-1 py-5">
        <div className="container" style={{ maxWidth: '820px' }}>
          {/* Back link */}
          <div className="mb-3">
            <Link
              href="/forum"
              className="text-secondary small text-decoration-none d-inline-flex align-items-center gap-1"
            >
              <ArrowLeft size={14} />
              <span>Kembali ke Forum Diskusi</span>
            </Link>
          </div>

          {/* Main Thread Article */}
          <article className="kl-card p-4 p-md-5 bg-white border mb-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center gap-2">
                <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-2 py-1 small text-uppercase">
                  {thread.category}
                </span>
                {thread.status === 'hidden' && (
                  <span className="badge bg-danger-subtle text-danger border border-danger-subtle px-2 py-1 small d-flex align-items-center gap-1">
                    <ShieldAlert size={12} />
                    <span>Disembunyikan Moderator</span>
                  </span>
                )}
              </div>
              <div className="d-flex align-items-center gap-1 text-muted small">
                <Clock size={13} />
                <span>
                  {new Date(thread.createdAt).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </div>
            </div>

            <h1 className="h3 fw-bold mb-3" style={{ color: 'var(--kl-ink)' }}>
              {thread.title}
            </h1>

            <div className="d-flex align-items-center gap-2 mb-4 pb-3 border-bottom small text-secondary">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center text-primary"
                style={{ width: '28px', height: '28px', backgroundColor: 'var(--kl-primary-soft)' }}
              >
                <UserIcon size={14} />
              </div>
              <span className="fw-semibold text-dark">{thread.authorName}</span>
            </div>

            <div
              className="thread-content text-secondary"
              style={{ lineHeight: 1.8, fontSize: '15px', whiteSpace: 'pre-wrap' }}
            >
              {thread.body}
            </div>
          </article>

          {/* Replies Section */}
          <div className="mb-4">
            <h2 className="h5 fw-bold mb-3" style={{ color: 'var(--kl-ink)' }}>
              Balasan ({replies.length})
            </h2>

            {replies.length > 0 ? (
              <div className="d-flex flex-column gap-3 mb-4">
                {replies.map((reply) => (
                  <div key={reply.id} className="kl-card p-4 bg-white border">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div className="d-flex align-items-center gap-2 small">
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center text-primary"
                          style={{
                            width: '26px',
                            height: '26px',
                            backgroundColor: 'var(--kl-primary-soft)',
                          }}
                        >
                          <UserIcon size={13} />
                        </div>
                        <span className="fw-semibold text-dark">{reply.authorName}</span>
                      </div>
                      <span className="text-muted small">
                        {new Date(reply.createdAt).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'short',
                        })}
                      </span>
                    </div>

                    <div className="text-secondary small pt-1" style={{ lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
                      {reply.body}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="kl-card p-4 text-center bg-light border mb-4 text-secondary small">
                Belum ada tanggapan untuk topik ini. Jadilah yang pertama memberikan solusi!
              </div>
            )}

            {/* Reply Form */}
            <ReplyForm threadId={thread.id} isLoggedIn={!!user} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
