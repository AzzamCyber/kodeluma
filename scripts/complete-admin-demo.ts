import { Redis } from '@upstash/redis';
import crypto from 'crypto';
import { MOCK_COURSES, MOCK_LESSONS, MOCK_PROJECTS } from '../src/lib/mockData';

// Load .env.local
if (process.loadEnvFile) {
  process.loadEnvFile('.env.local');
}

const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;
const adminEmail = (process.env.ADMIN_SEED_EMAIL || 'admin@kodeluma.dev').toLowerCase().trim();

if (!url || !token) {
  console.error('Missing Redis environment variables in .env.local');
  process.exit(1);
}

const redis = new Redis({ url, token });

const SEED_QUESTS = [
  { id: 'ON-001', title: 'Pilih Tujuan Belajar', xp: 25 },
  { id: 'ON-002', title: 'Halo, Kodeluma!', xp: 35 },
  { id: 'WEB-H001', title: 'Struktur Kerangka HTML', xp: 45 },
  { id: 'WEB-C001', title: 'Pewarnaan & Tipografi CSS', xp: 50 },
  { id: 'WEB-J001', title: 'Penghitung Klik JavaScript', xp: 60 },
  { id: 'CLI-Q001', title: 'Cari Tahu Posisi Anda (pwd)', xp: 30 },
  { id: 'CLI-Q002', title: 'Membuat Folder Proyek (mkdir)', xp: 40 },
  { id: 'GIT-Q001', title: 'Commit Pertama Git', xp: 75 },
];

function generateVerifyCode(prefix: string): string {
  const cleanPrefix = prefix.replace(/[^A-Za-z]/g, '').slice(0, 4).toUpperCase();
  const rand = crypto.randomBytes(4).toString('hex').toUpperCase();
  return `KL-${cleanPrefix || 'DEMO'}-${rand}`;
}

async function completeAdminDemo() {
  console.log('====================================================');
  console.log('   KODELUMA — SELESAIKAN SEMUA MATERI & TUGAS ADMIN  ');
  console.log('====================================================\n');

  // 1. Locate Admin User
  const emailKey = `kl:v1:user:email:${adminEmail}`;
  const adminId = await redis.get<string>(emailKey);

  if (!adminId) {
    console.error(`Admin user tidak ditemukan untuk email: ${adminEmail}. Jalankan 'npm run seed:admin' terlebih dahulu.`);
    process.exit(1);
  }

  const userRaw = await redis.get<any>(`kl:v1:user:${adminId}`);
  const adminUser = typeof userRaw === 'string' ? JSON.parse(userRaw) : userRaw;
  console.log(`Akun Admin Teridentifikasi:`);
  console.log(`- Nama: ${adminUser.displayName}`);
  console.log(`- Email: ${adminUser.email}`);
  console.log(`- User ID: ${adminId}\n`);

  const now = new Date().toISOString();
  const score = new Date(now).getTime();

  // 2. Selesaikan Semua 22 Kursus & Modul Pelajaran
  console.log('--- 1. Mendaftarkan & Menyelesaikan Seluruh 22 Kursus ---');
  let totalLessonsCompleted = 0;
  let totalQuizzesPassed = 0;
  let totalCertsIssued = 0;

  for (const course of MOCK_COURSES) {
    const curriculumVersion = course.curriculumVersion || 1;

    // A. Enroll Admin
    const enrollKey = `kl:v1:enroll:${adminId}:${course.id}`;
    const enrollment = {
      userId: adminId,
      courseId: course.id,
      curriculumVersion,
      enrolledAt: now,
      status: 'active',
    };
    await redis.set(enrollKey, JSON.stringify(enrollment));
    await redis.zadd(`kl:v1:user:${adminId}:enrollments`, { score, member: course.id });
    await redis.sadd(`kl:v1:course:${course.id}:students`, adminId);

    // B. Selesaikan Seluruh Lessons
    const lessons = MOCK_LESSONS[course.id] || [];
    const completeKey = `kl:v1:complete:${adminId}:${course.id}:v${curriculumVersion}`;
    for (const lesson of lessons) {
      await redis.sadd(completeKey, lesson.id);
      totalLessonsCompleted++;
    }

    // C. Selesaikan Kuis dengan Skor 100% (Passed)
    const quizKey = `kl:v1:quizresult:${adminId}:${course.id}:v${curriculumVersion}`;
    const quizAttempt = {
      userId: adminId,
      courseId: course.id,
      score: 100,
      passed: true,
      attemptsCount: 1,
      updatedAt: now,
    };
    await redis.set(quizKey, JSON.stringify(quizAttempt));
    totalQuizzesPassed++;

    // D. Terbitkan Sertifikat Kelulusan Resmi
    const userCourseKey = `kl:v1:cert:usercourse:${adminId}:${course.id}:v${curriculumVersion}`;
    const existingCertId = await redis.get<string>(userCourseKey);

    if (!existingCertId) {
      const certId = `crt_${crypto.randomBytes(8).toString('hex')}`;
      const verifyCode = generateVerifyCode(course.slug);
      const cert = {
        id: certId,
        verifyCode,
        userId: adminId,
        courseId: course.id,
        curriculumVersion,
        recipientName: adminUser.displayName,
        courseTitle: course.title,
        issuedAt: now,
        revokedAt: null,
      };

      const certKey = `kl:v1:cert:${certId}`;
      const verifyKey = `kl:v1:cert:verify:${verifyCode.toUpperCase()}`;

      await redis.set(userCourseKey, certId);
      await redis.set(certKey, JSON.stringify(cert));
      await redis.set(verifyKey, certId);
      await redis.zadd(`kl:v1:user:${adminId}:certificates`, { score, member: certId });
      await redis.incr('kl:v1:stats:total_certificates');
      totalCertsIssued++;
      console.log(`  ✓ Kursus: ${course.title} -> Selesai (${lessons.length} bab) | Kuis 100% | Sertifikat: ${verifyCode}`);
    } else {
      console.log(`  ✓ Kursus: ${course.title} -> Sudah memiliki sertifikat ID: ${existingCertId}`);
    }
  }

  // 3. Selesaikan & Setujui Seluruh Capstone Projects
  console.log('\n--- 2. Menyelesaikan & Menyetujui Seluruh Capstone Projects ---');
  let totalProjectsApproved = 0;

  for (const project of MOCK_PROJECTS) {
    const subKey = `kl:v1:submission:${adminId}:${project.id}`;
    const submission = {
      id: `sub_admin_${project.id}`,
      userId: adminId,
      projectId: project.id,
      repoUrl: `https://github.com/azzamcodex/kodeluma-${project.slug}`,
      demoUrl: `https://kodeluma.azzamcodex.id`,
      notes: `Implementasi arsitektur bersih untuk proyek ${project.title}. Seluruh kriteria fungsional dan pengujian mandiri telah tuntas.`,
      status: 'approved',
      submittedAt: now,
      reviewedAt: now,
      reviewerId: adminId,
      reviewNotes: 'Hasil luar biasa! Seluruh rubrik evaluasi PBL terpenuhi dengan sempurna.',
    };

    await redis.set(subKey, JSON.stringify(submission));
    totalProjectsApproved++;
    console.log(`  ✓ Proyek: ${project.title} -> Status: APPROVED`);
  }

  // 4. Selesaikan & Klaim Seluruh Quests & XP
  console.log('\n--- 3. Menyelesaikan & Mengklaim Seluruh Quests & XP ---');
  let accumulatedXp = 0;

  for (const quest of SEED_QUESTS) {
    const rewardKey = `kl:v1:quest:rewarded:${adminId}:${quest.id}`;
    await redis.set(rewardKey, now);

    const eventId = `xp_demo_${quest.id}`;
    const ledgerEntry = {
      id: eventId,
      questId: quest.id,
      xp: quest.xp,
      timestamp: now,
    };
    await redis.lpush(`kl:v1:xp:ledger:${adminId}`, JSON.stringify(ledgerEntry));
    accumulatedXp += quest.xp;
    console.log(`  ✓ Quest: ${quest.title} (+${quest.xp} XP) -> Status: CLAIMED`);
  }

  // Set total XP admin
  await redis.set(`kl:v1:user:${adminId}:xp`, accumulatedXp);

  console.log('\n====================================================');
  console.log('   HASIL DEMO PENYELESAIAN LENGKAP AKUN ADMIN');
  console.log('====================================================');
  console.log(`• Akun: ${adminUser.displayName} (${adminEmail})`);
  console.log(`• Total Kursus Terdaftar & Tuntas: ${MOCK_COURSES.length} Kursus (100% Progress)`);
  console.log(`• Total Pelajaran Terselesaikan: ${totalLessonsCompleted} Bab`);
  console.log(`• Total Kuis Evaluasi Lulus (Skor 100): ${totalQuizzesPassed} Kuis`);
  console.log(`• Total Capstone Projects Disetujui: ${totalProjectsApproved} Proyek`);
  console.log(`• Total Sertifikat Resmi Diterbitkan: ${totalCertsIssued} Sertifikat`);
  console.log(`• Total Quests Terklaim: ${SEED_QUESTS.length} Quest (${accumulatedXp} XP)`);
  console.log('====================================================\n');
}

completeAdminDemo().catch((err) => {
  console.error('Gagal menyelesaikan demo admin:', err);
  process.exit(1);
});
