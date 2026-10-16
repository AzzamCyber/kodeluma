// scripts/merge-menengah.mjs
import fs from 'fs';
import path from 'path';
import { MENENGAH_COURSES, MENENGAH_QUIZZES, MENENGAH_PROJECTS } from './content/courses-menengah.mjs';
import { JS_MENENGAH_LESSONS } from './content/lessons-js.mjs';
import { TS_MENENGAH_LESSONS } from './content/lessons-ts.mjs';
import { CSS_MENENGAH_LESSONS } from './content/lessons-css.mjs';
import { PY_MENENGAH_LESSONS } from './content/lessons-py.mjs';
import { SQL_MENENGAH_LESSONS } from './content/lessons-sql.mjs';

const mockDataPath = path.resolve('./src/lib/mockData.ts');
let content = fs.readFileSync(mockDataPath, 'utf8');

console.log('Merging 5 Menengah Courses and 44 Lessons into mockData.ts...');

// 1. Check if course-js-int-09 already exists
if (content.includes('course-js-int-09')) {
  console.log('Menengah courses already present in mockData.ts! Skipping course insertion.');
} else {
  // Format courses JSON
  const coursesJson = ',\n' + MENENGAH_COURSES.map(c => '  ' + JSON.stringify(c, null, 2).replace(/\n/g, '\n  ')).join(',\n');
  
  // Find end of MOCK_COURSES: find 'export const MOCK_LESSONS'
  const mockLessonsIdx = content.indexOf('export const MOCK_LESSONS');
  if (mockLessonsIdx === -1) throw new Error('Cannot find MOCK_LESSONS in mockData.ts');
  
  // Look back for '];'
  const coursesEndBracket = content.lastIndexOf('];', mockLessonsIdx);
  if (coursesEndBracket === -1) throw new Error('Cannot find end bracket of MOCK_COURSES');
  
  content = content.slice(0, coursesEndBracket) + coursesJson + '\n' + content.slice(coursesEndBracket);
  console.log('-> Merged 5 courses into MOCK_COURSES');
}

// 2. Insert Lessons
const allLessons = {
  "course-js-int-09": JS_MENENGAH_LESSONS,
  "course-ts-int-10": TS_MENENGAH_LESSONS,
  "course-css-int-11": CSS_MENENGAH_LESSONS,
  "course-py-int-12": PY_MENENGAH_LESSONS,
  "course-sql-int-13": SQL_MENENGAH_LESSONS
};

let lessonsAddedCount = 0;
for (const [courseId, lessons] of Object.entries(allLessons)) {
  if (content.includes(`"${courseId}": [`)) {
    console.log(`Lessons for ${courseId} already present, skipping.`);
    continue;
  }
  
  const mockQuizzesIdx = content.indexOf('export const MOCK_QUIZZES');
  if (mockQuizzesIdx === -1) throw new Error('Cannot find MOCK_QUIZZES in mockData.ts');
  
  const lessonsEndBrace = content.lastIndexOf('};', mockQuizzesIdx);
  if (lessonsEndBrace === -1) throw new Error('Cannot find end brace of MOCK_LESSONS');
  
  const lessonsJson = `,\n  "${courseId}": ` + JSON.stringify(lessons, null, 4).replace(/\n/g, '\n  ');
  content = content.slice(0, lessonsEndBrace) + lessonsJson + '\n' + content.slice(lessonsEndBrace);
  lessonsAddedCount += lessons.length;
  console.log(`-> Added ${lessons.length} lessons for ${courseId}`);
}

// 3. Insert Quizzes
for (const [courseId, quiz] of Object.entries(MENENGAH_QUIZZES)) {
  if (content.includes(`"${quiz.id}":`) || content.includes(`"${courseId}": {\n    "id": "${quiz.id}"`)) {
    console.log(`Quiz for ${courseId} already present, skipping.`);
    continue;
  }
  
  const mockProjectsIdx = content.indexOf('export const MOCK_PROJECTS');
  if (mockProjectsIdx === -1) throw new Error('Cannot find MOCK_PROJECTS in mockData.ts');
  
  const quizzesEndBrace = content.lastIndexOf('};', mockProjectsIdx);
  if (quizzesEndBrace === -1) throw new Error('Cannot find end brace of MOCK_QUIZZES');
  
  const quizJson = `,\n  "${courseId}": ` + JSON.stringify(quiz, null, 4).replace(/\n/g, '\n  ');
  content = content.slice(0, quizzesEndBrace) + quizJson + '\n' + content.slice(quizzesEndBrace);
  console.log(`-> Added quiz for ${courseId}`);
}

// 4. Insert Projects
for (const proj of MENENGAH_PROJECTS) {
  if (content.includes(`"${proj.id}"`)) {
    console.log(`Project ${proj.id} already present, skipping.`);
    continue;
  }
  
  const mockThreadsIdx = content.indexOf('export const MOCK_FORUM_THREADS');
  if (mockThreadsIdx === -1) throw new Error('Cannot find MOCK_FORUM_THREADS in mockData.ts');
  
  const projectsEndBracket = content.lastIndexOf('];', mockThreadsIdx);
  if (projectsEndBracket === -1) throw new Error('Cannot find end bracket of MOCK_PROJECTS');
  
  const projJson = ',\n  ' + JSON.stringify(proj, null, 2).replace(/\n/g, '\n  ');
  content = content.slice(0, projectsEndBracket) + projJson + '\n' + content.slice(projectsEndBracket);
  console.log(`-> Added project ${proj.id}`);
}

// Write back to mockData.ts
fs.writeFileSync(mockDataPath, content, 'utf8');
console.log('Successfully updated mockData.ts!');
