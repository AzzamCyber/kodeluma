import React from 'react';
import { getCurrentUser } from '@/lib/auth/session';
import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { StudentNavbar } from '@/components/layout/StudentNavbar';
import { Footer } from '@/components/layout/Footer';
import { CodeLabView } from '@/components/lab/CodeLabView';

export default async function LabPage() {
  const user = await getCurrentUser();

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {user ? <StudentNavbar user={user} /> : <PublicNavbar />}

      <main id="main-content" className="flex-grow-1">
        <CodeLabView />
      </main>

      <Footer />
    </div>
  );
}
