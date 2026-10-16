import 'server-only';
import { Redis } from '@upstash/redis';

// Load .env.local if not already loaded in non-production environments
if (process.loadEnvFile && (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN)) {
  try {
    process.loadEnvFile('.env.local');
  } catch {
    // Ignore error if file doesn't exist (e.g. in Vercel production where env vars are injected)
  }
}

const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

if (!redisUrl || !redisToken) {
  throw new Error(
    'Konfigurasi Upstash Redis tidak ditemukan. Pastikan UPSTASH_REDIS_REST_URL dan UPSTASH_REDIS_REST_TOKEN disetel di .env.local'
  );
}

export const redis = new Redis({
  url: redisUrl,
  token: redisToken,
});
