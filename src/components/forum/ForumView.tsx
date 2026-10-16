'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Plus, MessageCircle, Clock, User as UserIcon } from 'lucide-react';
import { ForumThread } from '@/types/domain';
import { Button } from '@/components/ui/Button';
import { NewThreadModal } from './NewThreadModal';

interface ForumViewProps {
  threads: ForumThread[];
  categories: { slug: string; name: string }[];
  isLoggedIn: boolean;
  selectedCategory: string;
}

export function ForumView({
  threads,
  categories,
  isLoggedIn,
  selectedCategory,
}: ForumViewProps) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const activeCategory = selectedCategory || 'all';

  const handleOpenModal = () => {
    if (!isLoggedIn) {
      router.push('/login?returnTo=/forum');
      return;
    }
    setShowModal(true);
  };

  const handleSelectCategory = (catSlug: string) => {
    router.push(`/forum${catSlug === 'all' ? '' : `?category=${catSlug}`}`);
  };

  return (
    <>
      {/* Category Pills & Action Button */}
      <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-4">
        <div className="d-flex flex-wrap gap-2">
          <button
            onClick={() => handleSelectCategory('all')}
            className={`btn btn-sm rounded-pill px-3 py-1 fw-semibold ${
              activeCategory === 'all' ? 'btn-primary' : 'btn-light border text-secondary'
            }`}
          >
            Semua Topik
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              onClick={() => handleSelectCategory(c.slug)}
              className={`btn btn-sm rounded-pill px-3 py-1 fw-semibold ${
                activeCategory === c.slug ? 'btn-primary' : 'btn-light border text-secondary'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div>
          <Button
            variant="primary"
            onClick={handleOpenModal}
            className="d-inline-flex align-items-center gap-2 py-2 px-3 small"
          >
            <Plus size={16} />
            <span>Mulai Diskusi Baru</span>
          </Button>
        </div>
      </div>

      {/* Threads List */}
      <div className="kl-card p-0 bg-white border overflow-hidden">
        {threads.length > 0 ? (
          <div className="list-group list-group-flush">
            {threads.map((thread) => (
              <div
                key={thread.id}
                className="list-group-item p-4 d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 hover-bg-light transition-all"
              >
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-2 py-1 small text-uppercase">
                      {thread.category}
                    </span>
                    <span className="text-muted small">&bull;</span>
                    <span className="text-secondary small d-flex align-items-center gap-1">
                      <UserIcon size={13} />
                      {thread.authorName}
                    </span>
                    <span className="text-muted small">&bull;</span>
                    <span className="text-muted small d-flex align-items-center gap-1">
                      <Clock size={13} />
                      {new Date(thread.createdAt).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                      })}
                    </span>
                  </div>

                  <h3 className="h6 fw-bold mb-1">
                    <Link
                      href={`/forum/${thread.id}`}
                      className="text-dark text-decoration-none hover-primary"
                    >
                      {thread.title}
                    </Link>
                  </h3>
                  <p
                    className="text-secondary small mb-0 text-truncate"
                    style={{ maxWidth: '680px' }}
                  >
                    {thread.body}
                  </p>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div
                    className="d-flex align-items-center gap-1 px-3 py-2 rounded-3 bg-light border text-secondary small"
                    title={`${thread.repliesCount || 0} Balasan`}
                  >
                    <MessageCircle size={15} />
                    <span className="fw-semibold">{thread.repliesCount || 0}</span>
                  </div>
                  <Link
                    href={`/forum/${thread.id}`}
                    className="btn btn-outline-secondary btn-sm py-1 px-2"
                  >
                    Buka
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-5 text-center text-secondary small">
            Belum ada topik diskusi pada kategori ini. Jadilah yang pertama memulai!
          </div>
        )}
      </div>

      <NewThreadModal
        show={showModal}
        onHide={() => setShowModal(false)}
        categories={categories}
      />
    </>
  );
}
