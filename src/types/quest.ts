export type QuestCategory = 'onboarding' | 'web' | 'terminal' | 'git' | 'logic';
export type QuestStatus = 'available' | 'in_progress' | 'passed' | 'claimed';

export interface Quest {
  id: string;
  slug: string;
  title: string;
  category: QuestCategory;
  difficulty: 'foundation' | 'beginner' | 'intermediate';
  xp: number;
  description: string;
  task: string;
  solutionHint: string;
  runtime: 'WEB' | 'CLI-GUIDED' | 'QUIZ';
}

export interface UserQuestState {
  questId: string;
  status: QuestStatus;
  claimedAt?: string;
}

export interface XpLedgerEntry {
  id: string;
  questId: string;
  xp: number;
  timestamp: string;
}
