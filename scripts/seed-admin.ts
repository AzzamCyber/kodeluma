import { Redis } from '@upstash/redis';
import { hash } from '@node-rs/argon2';
import crypto from 'crypto';

// Load .env.local
if (process.loadEnvFile) {
  process.loadEnvFile('.env.local');
}

const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;
const adminEmail = (process.env.ADMIN_SEED_EMAIL || 'admin@kodeluma.dev').toLowerCase().trim();
const adminPassword = process.env.ADMIN_SEED_PASSWORD || 'AdminKodeluma2026!Secret';

if (!url || !token) {
  console.error('Missing Redis environment variables in .env.local');
  process.exit(1);
}

const redis = new Redis({ url, token });

async function seedAdmin() {
  console.log('--- Checking Admin Account ---');
  const emailKey = `kl:v1:user:email:${adminEmail}`;
  const existingUserId = await redis.get<string>(emailKey);

  if (existingUserId) {
    console.log(`Admin account already exists for email: ${adminEmail} (ID: ${existingUserId})`);
    return;
  }

  const userId = `usr_admin_${crypto.randomBytes(8).toString('hex')}`;
  const passwordHash = await hash(adminPassword, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });

  const now = new Date().toISOString();
  const adminUser = {
    id: userId,
    displayName: 'Administrator Kodeluma',
    email: adminEmail,
    passwordHash,
    role: 'admin',
    status: 'active',
    createdAt: now,
  };

  const score = new Date(now).getTime();
  const pipeline = redis.pipeline();
  pipeline.set(emailKey, userId);
  pipeline.set(`kl:v1:user:${userId}`, JSON.stringify(adminUser));
  pipeline.zadd('kl:v1:users:created', { score, member: userId });
  pipeline.incr('kl:v1:stats:total_users');
  await pipeline.exec();

  console.log(`SUCCESS: Created Admin user: ${adminEmail} (Role: admin)`);
}

seedAdmin().catch((err) => {
  console.error('Admin seeding failed:', err);
  process.exit(1);
});
