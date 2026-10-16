import 'server-only';
import { redis } from '@/lib/redis';
import { Quest, XpLedgerEntry } from '@/types/quest';
import { generateId } from '@/lib/utils/id';

export const SEED_QUESTS: Quest[] = [
  {
    id: 'ON-001',
    slug: 'pilih-tujuan-belajar',
    title: 'Pilih Tujuan Belajar',
    category: 'onboarding',
    difficulty: 'foundation',
    xp: 25,
    description: 'Tentukan langkah pertamamu dengan menjelajahi katalog alur belajar Kodeluma.',
    task: 'Kunjungi halaman Alur Belajar (/learning-paths) dan tentukan bidang yang ingin ditekuni.',
    solutionHint: 'Buka menu Alur Belajar di navigasi atas.',
    runtime: 'QUIZ',
  },
  {
    id: 'ON-002',
    slug: 'hello-kodeluma-preview',
    title: 'Halo, Kodeluma!',
    category: 'web',
    difficulty: 'foundation',
    xp: 35,
    description: 'Coba editor mandiri di Code Lab dan lihat kode pertama Anda bekerja seketika.',
    task: 'Buka Code Lab (/lab), pilih template profil, lalu klik tombol Jalankan (Run).',
    solutionHint: 'Gunakan Code Lab playground untuk bereksperimen langsung.',
    runtime: 'WEB',
  },
  {
    id: 'WEB-H001',
    slug: 'struktur-html-pertama',
    title: 'Struktur Kerangka HTML',
    category: 'web',
    difficulty: 'beginner',
    xp: 45,
    description: 'Pahami 4 elemen fondasi dokumen web: <!DOCTYPE html>, <html>, <head>, dan <body>.',
    task: 'Susun dokumen HTML lengkap yang memuat judul dokumen di <title> dan heading di <body>.',
    solutionHint: 'Gunakan tag <h1> untuk judul utama di dalam <body>.',
    runtime: 'WEB',
  },
  {
    id: 'WEB-C001',
    slug: 'styling-warna-tipografi',
    title: 'Pewarnaan & Tipografi CSS',
    category: 'web',
    difficulty: 'beginner',
    xp: 50,
    description: 'Kuasai pengaturan warna latar (background-color), warna teks (color), dan font-family.',
    task: 'Terapkan class CSS dengan border-radius 12px dan padding proporsional pada card.',
    solutionHint: 'Coba kombinasikan class .card dengan padding: 24px.',
    runtime: 'WEB',
  },
  {
    id: 'WEB-J001',
    slug: 'click-counter-interaktif',
    title: 'Penghitung Klik JavaScript',
    category: 'web',
    difficulty: 'beginner',
    xp: 60,
    description: 'Tangani event klik tombol (addEventListener) untuk memperbarui isi teks di halaman web.',
    task: 'Hubungkan tombol dengan id "btn-tambah" agar menambahkan nilai angka saat diklik.',
    solutionHint: 'Gunakan count++ lalu perbarui element.innerText.',
    runtime: 'WEB',
  },
  {
    id: 'CLI-Q001',
    slug: 'where-am-i-terminal',
    title: 'Cari Tahu Posisi Anda (pwd)',
    category: 'terminal',
    difficulty: 'foundation',
    xp: 30,
    description: 'Perintah paling fundamental untuk mengetahui folder tempat Anda sedang berada.',
    task: 'Buka Guided Terminal (/lab/terminal) dan ketikkan perintah "pwd".',
    solutionHint: 'Ketik "pwd" pada terminal interaktif.',
    runtime: 'CLI-GUIDED',
  },
  {
    id: 'CLI-Q002',
    slug: 'project-folder-mkdir',
    title: 'Membuat Folder Proyek (mkdir)',
    category: 'terminal',
    difficulty: 'beginner',
    xp: 40,
    description: 'Buat ruang kerja terisolasi untuk file-file proyek menggunakan perintah mkdir.',
    task: 'Jalankan "mkdir web-pertama" di terminal.',
    solutionHint: 'Gunakan "mkdir <nama-folder>".',
    runtime: 'CLI-GUIDED',
  },
  {
    id: 'GIT-Q001',
    slug: 'first-commit-git',
    title: 'Commit Pertama Git',
    category: 'git',
    difficulty: 'beginner',
    xp: 75,
    description: 'Inisialisasi sistem pelacakan versi proyek dan rekam snapshot perubahan pertama Anda.',
    task: 'Jalankan "git init", lalu "git add .", dan simpan dengan "git commit -m "feat: init"".',
    solutionHint: 'Urutan: git init -> git add . -> git commit -m "pesan".',
    runtime: 'CLI-GUIDED',
  },
];

export class QuestService {
  static listAllQuests(): Quest[] {
    return SEED_QUESTS;
  }

  static async getUserQuests(userId: string): Promise<{
    quests: (Quest & { isClaimed: boolean })[];
    totalXp: number;
  }> {
    const totalXpRaw = await redis.get<number>(`kl:v1:user:${userId}:xp`);
    const totalXp = Number(totalXpRaw) || 0;

    // Check claimed status for each quest in pipeline
    const pipeline = redis.pipeline();
    for (const q of SEED_QUESTS) {
      pipeline.get(`kl:v1:quest:rewarded:${userId}:${q.id}`);
    }
    const claimedResults = await pipeline.exec();

    const quests = SEED_QUESTS.map((q, idx) => ({
      ...q,
      isClaimed: Boolean(claimedResults[idx]),
    }));

    return { quests, totalXp };
  }

  static async claimQuestXp(
    userId: string,
    questId: string
  ): Promise<{ alreadyClaimed: boolean; xpAwarded: number; totalXp: number }> {
    const quest = SEED_QUESTS.find((q) => q.id === questId);
    if (!quest) {
      throw new Error('QUEST_NOT_FOUND: Quest tidak ditemukan.');
    }

    const rewardKey = `kl:v1:quest:rewarded:${userId}:${questId}`;
    const now = new Date().toISOString();

    // Atomic SET NX: returns "OK" if key was newly set, null if already exists
    const setRes = await redis.set(rewardKey, now, { nx: true });

    if (!setRes) {
      const currentXp = (await redis.get<number>(`kl:v1:user:${userId}:xp`)) || 0;
      return { alreadyClaimed: true, xpAwarded: 0, totalXp: Number(currentXp) };
    }

    // New claim: record XP event and update total XP
    const eventId = generateId('xp');
    const entry: XpLedgerEntry = {
      id: eventId,
      questId: quest.id,
      xp: quest.xp,
      timestamp: now,
    };

    const pipeline = redis.pipeline();
    pipeline.incrby(`kl:v1:user:${userId}:xp`, quest.xp);
    pipeline.lpush(`kl:v1:xp:ledger:${userId}`, JSON.stringify(entry));
    const results = await pipeline.exec();

    const newTotalXp = Number(results[0]) || quest.xp;
    return { alreadyClaimed: false, xpAwarded: quest.xp, totalXp: newTotalXp };
  }
}
