// scripts/merge-backend.mjs
import fs from 'fs';
import path from 'path';
import { BACKEND_COURSES, BACKEND_QUIZZES, BACKEND_PROJECTS } from './content/courses-backend.mjs';
import { POSTGRES_LESSONS } from './content/lessons-postgres.mjs';
import { REDIS_LESSONS } from './content/lessons-redis.mjs';
import { LINUX_LESSONS } from './content/lessons-linux.mjs';

const mockDataPath = path.resolve('./src/lib/mockData.ts');
let content = fs.readFileSync(mockDataPath, 'utf8');

console.log('--- Merging 3 Dedicated Backend Infrastructure Courses into mockData.ts ---');

// 1. Add categories to MOCK_CATEGORIES
const BACKEND_CATEGORIES = [
  { slug: 'postgresql', name: 'PostgreSQL', description: 'Diskusi RDBMS tingkat lanjut, tipe data JSONB, indeks GIN, dan performa query' },
  { slug: 'redis', name: 'Redis', description: 'Diskusi in-memory datastore, caching, sorted sets, dan rate limiting' },
  { slug: 'linux', name: 'Linux', description: 'Diskusi sistem operasi server, perintah CLI terminal, permissions, dan Bash' },
];

for (const cat of BACKEND_CATEGORIES) {
  if (!content.includes(`"slug": "${cat.slug}"`)) {
    const mockCoursesIdx = content.indexOf('export const MOCK_COURSES');
    const catEndBracket = content.lastIndexOf('];', mockCoursesIdx);
    const catJson = ',\n  ' + JSON.stringify(cat, null, 2).replace(/\n/g, '\n  ');
    content = content.slice(0, catEndBracket) + catJson + '\n' + content.slice(catEndBracket);
    console.log(`-> Added category ${cat.name}`);
  }
}

// 2. Insert Courses into MOCK_COURSES
for (const course of BACKEND_COURSES) {
  if (content.includes(`"${course.id}"`)) {
    console.log(`Course ${course.id} already present, skipping.`);
    continue;
  }
  const mockLessonsIdx = content.indexOf('export const MOCK_LESSONS');
  const coursesEndBracket = content.lastIndexOf('];', mockLessonsIdx);
  const courseJson = ',\n  ' + JSON.stringify(course, null, 2).replace(/\n/g, '\n  ');
  content = content.slice(0, coursesEndBracket) + courseJson + '\n' + content.slice(coursesEndBracket);
  console.log(`-> Added course ${course.title} (${course.id})`);
}

// 3. Insert Lessons into MOCK_LESSONS
const allBackendLessons = {
  "course-pg-20": POSTGRES_LESSONS,
  "course-redis-21": REDIS_LESSONS,
  "course-linux-22": LINUX_LESSONS,
};

for (const [courseId, lessons] of Object.entries(allBackendLessons)) {
  if (content.includes(`"${courseId}": [`)) {
    console.log(`Lessons for ${courseId} already present, skipping.`);
    continue;
  }
  const mockQuizzesIdx = content.indexOf('export const MOCK_QUIZZES');
  const lessonsEndBrace = content.lastIndexOf('};', mockQuizzesIdx);
  const lessonsJson = `,\n  "${courseId}": ` + JSON.stringify(lessons, null, 4).replace(/\n/g, '\n  ');
  content = content.slice(0, lessonsEndBrace) + lessonsJson + '\n' + content.slice(lessonsEndBrace);
  console.log(`-> Added ${lessons.length} lessons for ${courseId}`);
}

// 4. Insert Quizzes into MOCK_QUIZZES
for (const [courseId, quiz] of Object.entries(BACKEND_QUIZZES)) {
  if (content.includes(`"${quiz.id}"`) || content.includes(`"${courseId}": {\n    "id": "${quiz.id}"`)) {
    console.log(`Quiz for ${courseId} already present, skipping.`);
    continue;
  }
  const mockProjectsIdx = content.indexOf('export const MOCK_PROJECTS');
  const quizzesEndBrace = content.lastIndexOf('};', mockProjectsIdx);
  const quizJson = `,\n  "${courseId}": ` + JSON.stringify(quiz, null, 4).replace(/\n/g, '\n  ');
  content = content.slice(0, quizzesEndBrace) + quizJson + '\n' + content.slice(quizzesEndBrace);
  console.log(`-> Added quiz for ${courseId}`);
}

// 5. Insert Projects into MOCK_PROJECTS
for (const proj of BACKEND_PROJECTS) {
  if (content.includes(`"${proj.id}"`)) {
    console.log(`Project ${proj.id} already present, skipping.`);
    continue;
  }
  const mockThreadsIdx = content.indexOf('export const MOCK_FORUM_THREADS');
  const projectsEndBracket = content.lastIndexOf('];', mockThreadsIdx);
  const projJson = ',\n  ' + JSON.stringify(proj, null, 2).replace(/\n/g, '\n  ');
  content = content.slice(0, projectsEndBracket) + projJson + '\n' + content.slice(projectsEndBracket);
  console.log(`-> Added project ${proj.id}`);
}

// Write back
fs.writeFileSync(mockDataPath, content, 'utf8');
console.log('--- Successfully merged all 3 Backend Infrastructure courses into mockData.ts! ---');
