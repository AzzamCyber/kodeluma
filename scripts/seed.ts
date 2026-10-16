import { Redis } from '@upstash/redis';
import { MOCK_COURSES, MOCK_LESSONS, MOCK_QUIZZES, MOCK_PROJECTS, MOCK_FORUM_THREADS } from '../src/lib/mockData';

// Load .env.local
if (process.loadEnvFile) {
  process.loadEnvFile('.env.local');
}

const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;

if (!url || !token) {
  console.error('Missing Redis environment variables in .env.local');
  process.exit(1);
}

const redis = new Redis({ url, token });

async function seedData() {
  console.log('--- Starting Idempotent Seeding for Kodeluma ---');

  // 1. Seed Courses
  for (const course of MOCK_COURSES) {
    const courseKey = `kl:v1:course:${course.id}`;
    const slugKey = `kl:v1:course:slug:${course.slug}`;
    const score = new Date(course.createdAt).getTime();

    await redis.set(courseKey, JSON.stringify(course));
    await redis.set(slugKey, course.id);
    await redis.zadd('kl:v1:courses:all', { score, member: course.id });
    if (course.status === 'published') {
      await redis.zadd('kl:v1:courses:published', { score, member: course.id });
    }
    console.log(`Seeded Course: ${course.title} (${course.slug})`);

    // 2. Seed Lessons for this course
    const lessons = MOCK_LESSONS[course.id] || [];
    const lessonIndexKey = `kl:v1:course:${course.id}:lessons`;
    for (const lesson of lessons) {
      await redis.set(`kl:v1:lesson:${lesson.id}`, JSON.stringify(lesson));
      await redis.zadd(lessonIndexKey, { score: lesson.order, member: lesson.id });
    }
    console.log(`  -> Seeded ${lessons.length} lessons for ${course.title}`);

    // 3. Seed Quiz for this course
    const quiz = MOCK_QUIZZES[course.id];
    if (quiz) {
      await redis.set(`kl:v1:quiz:${quiz.id}`, JSON.stringify(quiz));
      await redis.set(`kl:v1:course:${course.id}:quiz`, quiz.id);
      console.log(`  -> Seeded Quiz: ${quiz.title}`);
    }
  }

  // 4. Seed Projects
  for (const project of MOCK_PROJECTS) {
    const projKey = `kl:v1:project:${project.id}`;
    const slugKey = `kl:v1:project:slug:${project.slug}`;
    const score = new Date(project.createdAt).getTime();

    await redis.set(projKey, JSON.stringify(project));
    await redis.set(slugKey, project.id);
    if (project.status === 'published') {
      await redis.zadd('kl:v1:projects:published', { score, member: project.id });
    }
    console.log(`Seeded Project: ${project.title}`);
  }

  // 5. Seed Forum Threads
  for (const thread of MOCK_FORUM_THREADS) {
    const threadKey = `kl:v1:thread:${thread.id}`;
    const score = new Date(thread.createdAt).getTime();

    await redis.set(threadKey, JSON.stringify(thread));
    await redis.zadd('kl:v1:threads:recent', { score, member: thread.id });
    await redis.zadd(`kl:v1:forum:category:${thread.category}`, { score, member: thread.id });
    console.log(`Seeded Forum Thread: ${thread.title}`);
  }

  console.log('--- Idempotent Seeding Completed Successfully! ---');
}

seedData().catch((err) => {
  console.error('Seeding failed:', err);
  process.exit(1);
});
