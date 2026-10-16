import { describe, it, expect } from 'vitest';
import { QuestService } from '@/lib/services/questService';
import { generateId } from '@/lib/utils/id';

if (process.loadEnvFile) {
  process.loadEnvFile('.env.local');
}

describe('Quest System & XP Ledger Integration Tests', () => {
  const testUserId = generateId('usr_quest_test');
  const targetQuestId = 'CLI-Q001';

  it('lists all seed quests', () => {
    const quests = QuestService.listAllQuests();
    expect(quests.length).toBeGreaterThanOrEqual(8);
    const target = quests.find((q) => q.id === targetQuestId);
    expect(target).toBeDefined();
    expect(target?.xp).toBe(30);
  });

  it('awards XP on first claim and remains idempotent on subsequent claims', async () => {
    // 1. Initial status check
    const initialStatus = await QuestService.getUserQuests(testUserId);
    expect(initialStatus.totalXp).toBe(0);
    const questItem = initialStatus.quests.find((q) => q.id === targetQuestId);
    expect(questItem?.isClaimed).toBe(false);

    // 2. First claim: should succeed and award 30 XP
    const firstClaim = await QuestService.claimQuestXp(testUserId, targetQuestId);
    expect(firstClaim.alreadyClaimed).toBe(false);
    expect(firstClaim.xpAwarded).toBe(30);
    expect(firstClaim.totalXp).toBe(30);

    // 3. Second claim: must be idempotent, return alreadyClaimed: true and 0 awarded XP
    const secondClaim = await QuestService.claimQuestXp(testUserId, targetQuestId);
    expect(secondClaim.alreadyClaimed).toBe(true);
    expect(secondClaim.xpAwarded).toBe(0);
    expect(secondClaim.totalXp).toBe(30);

    // 4. Verification after claim
    const afterStatus = await QuestService.getUserQuests(testUserId);
    expect(afterStatus.totalXp).toBe(30);
    const claimedItem = afterStatus.quests.find((q) => q.id === targetQuestId);
    expect(claimedItem?.isClaimed).toBe(true);
  });

  it('throws error for non-existent quest claim', async () => {
    await expect(QuestService.claimQuestXp(testUserId, 'INVALID_QUEST_999')).rejects.toThrow('QUEST_NOT_FOUND');
  });
});
