import { Redis } from '@upstash/redis';

// Load .env.local
if (process.loadEnvFile) {
  process.loadEnvFile('.env.local');
}

async function testConnection() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    console.error('Missing UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN in .env.local');
    process.exit(1);
  }

  const redis = new Redis({ url, token });

  console.log('Testing Upstash Redis connection to:', url);
  const ping = await redis.ping();
  console.log('Redis Ping result:', ping);

  await redis.set('kl:test:ping', 'OK_FROM_KODELUMA', { ex: 30 });
  const val = await redis.get('kl:test:ping');
  console.log('Read back kl:test:ping:', val);

  if (val === 'OK_FROM_KODELUMA') {
    console.log('SUCCESS: Upstash Redis is connected and fully operational!');
  } else {
    console.error('FAILED: Value read back does not match.');
    process.exit(1);
  }
}

testConnection().catch((err) => {
  console.error('Redis connection test failed:', err);
  process.exit(1);
});
