import { readFileSync, writeFileSync } from 'node:fs';

// Keep the supplied ICON1.json intact. The public copy uses the locked colors in 02_DESIGN.md.
const source = JSON.parse(readFileSync(new URL('../ICON1.json', import.meta.url), 'utf8'));
const palette = new Map([
  ['#2A1D19', '#10243A'], // ink: dark outlines
  ['#353640', '#101B2B'], // code background: dark details
  ['#949899', '#62748A'], // muted: interface strokes
  ['#FFE072', '#F4B544'], // amber: small highlights
  ['#FD3E42', '#2563EB'], // primary: first learner's shirt and code accents
  ['#647EDD', '#10243A'], // ink: second learner's shirt
  ['#7DA3FB', '#2563EB'], // primary: interface accents
  ['#EFF3F7', '#F1F5FA'], // surface soft
  ['#B6D563', '#16805D'], // success: small check/landscape details
  ['#D0D3D4', '#E2E9F1'], // border: laptop details
  ['#FBCC7C', '#F4B544'], // amber: landscape highlight
]);

function hexFromLottie(rgb) {
  return `#${rgb.slice(0, 3).map((channel) => Math.round(channel * 255).toString(16).padStart(2, '0')).join('').toUpperCase()}`;
}

function lottieFromHex(hex, alpha) {
  return [1, 3, 5].map((index) => parseInt(hex.slice(index, index + 2), 16) / 255).concat(alpha);
}

let recolored = 0;
for (const layer of source.layers) {
  function walk(node) {
    if (!node || typeof node !== 'object') return;
    if ((node.ty === 'fl' || node.ty === 'st') && node.c?.a === 0 && Array.isArray(node.c.k)) {
      const original = hexFromLottie(node.c.k);
      let target = palette.get(original);
      if (original === '#7DA3FB' && layer.nm === 'R.Man.Body') target = '#62748A';
      if (original === '#FCCAC3' && layer.nm === 'Code') target = '#2563EB';
      if (original === '#FCCAC3' && layer.nm === 'Rectangle') target = '#EFF5FF';
      if (target) {
        node.c.k = lottieFromHex(target, node.c.k[3] ?? 1);
        recolored += 1;
      }
    }
    for (const value of Object.values(node)) walk(value);
  }
  walk(layer.shapes);
}

writeFileSync(new URL('../public/animations/ICON1.json', import.meta.url), `${JSON.stringify(source)}\n`);
console.log(`Recolored ${recolored} Lottie fills/strokes for the Kodeluma hero.`);
