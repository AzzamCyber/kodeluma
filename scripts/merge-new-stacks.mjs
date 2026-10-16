// scripts/merge-new-stacks.mjs
import fs from 'fs';
import path from 'path';
import { NEW_STACK_COURSES, NEW_STACK_QUIZZES, NEW_STACK_PROJECTS } from './content/courses-new-stacks.mjs';
import { NODEJS_LESSONS } from './content/lessons-nodejs.mjs';
import { REACT_LESSONS } from './content/lessons-react.mjs';
import { GO_LESSONS } from './content/lessons-go.mjs';
import { GIT_LESSONS } from './content/lessons-git.mjs';
import { DOCKER_LESSONS } from './content/lessons-docker.mjs';
import { PHP_LESSONS } from './content/lessons-php.mjs';

const mockDataPath = path.resolve('./src/lib/mockData.ts');
let content = fs.readFileSync(mockDataPath, 'utf8');

console.log('--- Merging 6 New Tech Stack Courses and 36 Lessons into mockData.ts ---');

// 1. Add categories to MOCK_CATEGORIES if not already present
const NEW_CATEGORIES = [
  { slug: 'nodejs', name: 'Node.js', description: 'Diskusi backend JavaScript, Express, modul HTTP, dan npm' },
  { slug: 'react', name: 'React', description: 'Diskusi komponen web, hooks (useState, useEffect), dan UI modern' },
  { slug: 'go', name: 'Go (Golang)', description: 'Diskusi bahasa Go, goroutine, channel, dan arsitektur microservices' },
  { slug: 'php', name: 'PHP', description: 'Diskusi PHP modern, formulir, sesi, dan PDO basis data' },
  { slug: 'git', name: 'Git & GitHub', description: 'Diskusi version control, percabangan branch, merge conflict, dan pull request' },
  { slug: 'docker', name: 'Docker', description: 'Diskusi kontainerisasi, Dockerfile, volume data, dan Docker Compose' },
];

for (const cat of NEW_CATEGORIES) {
  if (!content.includes(`"slug": "${cat.slug}"`)) {
    const mockCoursesIdx = content.indexOf('export const MOCK_COURSES');
    const catEndBracket = content.lastIndexOf('];', mockCoursesIdx);
    const catJson = ',\n  ' + JSON.stringify(cat, null, 2).replace(/\n/g, '\n  ');
    content = content.slice(0, catEndBracket) + catJson + '\n' + content.slice(catEndBracket);
    console.log(`-> Added category ${cat.name}`);
  }
}

// 2. Insert Courses into MOCK_COURSES
for (const course of NEW_STACK_COURSES) {
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
const allNewLessons = {
  "course-node-14": NODEJS_LESSONS,
  "course-react-15": REACT_LESSONS,
  "course-go-16": GO_LESSONS,
  "course-git-17": GIT_LESSONS,
  "course-docker-18": DOCKER_LESSONS,
  "course-php-19": PHP_LESSONS,
};

for (const [courseId, lessons] of Object.entries(allNewLessons)) {
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
for (const [courseId, quiz] of Object.entries(NEW_STACK_QUIZZES)) {
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
for (const proj of NEW_STACK_PROJECTS) {
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
console.log('--- Successfully merged all 6 new tech stack courses into mockData.ts! ---');
