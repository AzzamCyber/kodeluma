import fs from 'fs';
import path from 'path';

const logos = [
  { name: 'html5', path: 'icons/html5/html5-original.svg' },
  { name: 'css3', path: 'icons/css3/css3-original.svg' },
  { name: 'javascript', path: 'icons/javascript/javascript-original.svg' },
  { name: 'typescript', path: 'icons/typescript/typescript-original.svg' },
  { name: 'python', path: 'icons/python/python-original.svg' },
  { name: 'react', path: 'icons/react/react-original.svg' },
  { name: 'nextjs', path: 'icons/nextjs/nextjs-original.svg' },
  { name: 'bootstrap', path: 'icons/bootstrap/bootstrap-original.svg' },
  { name: 'git', path: 'icons/git/git-original.svg' },
  { name: 'redis', path: 'icons/redis/redis-original.svg' },
  { name: 'docker', path: 'icons/docker/docker-original.svg' },
  { name: 'postgresql', path: 'icons/postgresql/postgresql-original.svg' },
  { name: 'nodejs', path: 'icons/nodejs/nodejs-original.svg' },
  { name: 'cplusplus', path: 'icons/cplusplus/cplusplus-original.svg' },
  { name: 'java', path: 'icons/java/java-original.svg' },
  { name: 'linux', path: 'icons/linux/linux-original.svg' },
  { name: 'vscode', path: 'icons/vscode/vscode-original.svg' },
  { name: 'figma', path: 'icons/figma/figma-original.svg' },
];

const destDir = path.resolve('public/tech');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

async function run() {
  for (const item of logos) {
    const url = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/${item.path}`;
    const targetFile = path.join(destDir, `${item.name}.svg`);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      fs.writeFileSync(targetFile, text, 'utf8');
      console.log(`[PASS] ${item.name} downloaded -> ${targetFile}`);
    } catch (err) {
      console.error(`[FAIL] ${item.name}:`, err.message);
    }
  }
}

run();
