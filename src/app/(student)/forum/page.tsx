import React from 'react';
import { getCurrentUser } from '@/lib/auth/session';
import { ForumService } from '@/lib/services/forumService';
import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { StudentNavbar } from '@/components/layout/StudentNavbar';
import { Footer } from '@/components/layout/Footer';
import { ForumView } from '@/components/forum/ForumView';
import { MOCK_CATEGORIES } from '@/lib/mockData';
import { EditorialIllustration } from '@/components/ui/EditorialIllustration';

interface ForumPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ForumPage({ searchParams }: ForumPageProps) {
  const { category = 'all' } = await searchParams;
  const user = await getCurrentUser();

  const { items: threads } = await ForumService.listThreads(category, 1, 30);

  // Filter out hidden threads for non-admins
  const visibleThreads = user?.role === 'admin' ? threads : threads.filter((t) => t.status === 'active');

  return (
    <div className="d-flex flex-column min-vh-100">
      {user ? <StudentNavbar user={user} /> : <PublicNavbar />}

      <main id="main-content" className="flex-grow-1 py-5">
        <div className="container">
          <div className="row align-items-center g-3 mb-4">
            <div className="col-md-8">
            <div className="kl-eyebrow">KOMUNITAS BELAJAR</div>
            <h1 className="h2 fw-bold mb-2" style={{ color: 'var(--kl-ink)' }}>
              Forum Diskusi Kodeluma
            </h1>
            <p className="text-secondary small mb-0" style={{ maxWidth: '600px' }}>
              Tanyakan kendala coding yang kamu hadapi, diskusikan konsep web development, dan saling
              memberikan masukan proyek sesama pembelajar.
            </p>
            </div>
            <div className="col-md-4"><EditorialIllustration kind="community" className="kl-page-art" /></div>
          </div>

          <ForumView
            threads={visibleThreads}
            categories={MOCK_CATEGORIES}
            isLoggedIn={!!user}
            selectedCategory={category}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
