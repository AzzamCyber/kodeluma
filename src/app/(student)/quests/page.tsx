import React from 'react';
import { getCurrentUser } from '@/lib/auth/session';
import { QuestService } from '@/lib/services/questService';
import { PublicNavbar } from '@/components/layout/PublicNavbar';
import { StudentNavbar } from '@/components/layout/StudentNavbar';
import { Footer } from '@/components/layout/Footer';
import { QuestBoardView } from '@/components/quests/QuestBoardView';

export default async function QuestsPage() {
  const user = await getCurrentUser();

  let questsWithClaim;
  let totalXp = 0;

  if (user) {
    const data = await QuestService.getUserQuests(user.id);
    questsWithClaim = data.quests;
    totalXp = data.totalXp;
  } else {
    const list = QuestService.listAllQuests();
    questsWithClaim = list.map((q) => ({ ...q, isClaimed: false }));
  }

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {user ? <StudentNavbar user={user} /> : <PublicNavbar />}

      <main id="main-content" className="flex-grow-1">
        <QuestBoardView
          initialQuests={questsWithClaim}
          initialTotalXp={totalXp}
          isLoggedIn={Boolean(user)}
        />
      </main>

      <Footer />
    </div>
  );
}
