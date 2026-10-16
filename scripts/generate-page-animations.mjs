import { writeFileSync } from 'node:fs';

// Small vector scenes for auth pages. Colors follow the locked palette in 02_DESIGN.md.
const C = {
  ink: '#10243A',
  primary: '#2563EB',
  primarySoft: '#EFF5FF',
  amber: '#F4B544',
  surface: '#FFFFFF',
  surfaceSoft: '#F1F5FA',
  muted: '#62748A',
  border: '#E2E9F1',
  code: '#101B2B',
  codeBorder: '#23364E',
};

const staticValue = (value) => ({ a: 0, k: value });
const color = (hex) => [1, 3, 5].map((index) => parseInt(hex.slice(index, index + 2), 16) / 255).concat(1);
const transform = () => ({
  p: staticValue([0, 0]),
  a: staticValue([0, 0]),
  s: staticValue([100, 100]),
  r: staticValue(0),
  o: staticValue(100),
  sk: staticValue(0),
  sa: staticValue(0),
});

function group(geometry, fill, stroke, strokeWidth = 1) {
  const it = [geometry];
  if (fill) it.push({ ty: 'fl', c: staticValue(color(fill)), o: staticValue(100), r: 1 });
  if (stroke) it.push({ ty: 'st', c: staticValue(color(stroke)), o: staticValue(100), w: staticValue(strokeWidth), lc: 2, lj: 2 });
  it.push({ ty: 'tr', ...transform() });
  return { ty: 'gr', it };
}

function rect(x, y, width, height, radius, fill, stroke, strokeWidth) {
  return group({ ty: 'rc', p: staticValue([x + width / 2, y + height / 2]), s: staticValue([width, height]), r: staticValue(radius), d: 1 }, fill, stroke, strokeWidth);
}

function ellipse(cx, cy, width, height, fill, stroke, strokeWidth) {
  return group({ ty: 'el', p: staticValue([cx, cy]), s: staticValue([width, height]), d: 1 }, fill, stroke, strokeWidth);
}

function path(points, stroke, strokeWidth, draw = false) {
  const shape = {
    ty: 'sh',
    ks: staticValue({
      i: points.map(() => [0, 0]),
      o: points.map(() => [0, 0]),
      v: points,
      c: false,
    }),
  };
  const items = [shape, { ty: 'st', c: staticValue(color(stroke)), o: staticValue(100), w: staticValue(strokeWidth), lc: 2, lj: 2 }];
  if (draw) {
    items.push({
      ty: 'tm',
      s: staticValue(0),
      e: {
        a: 1,
        k: [
          { t: 8, s: [0], e: [100], i: { x: [0.5], y: [1] }, o: { x: [0.2], y: [0] } },
          { t: 44, s: [100] },
          { t: 120, s: [100] },
        ],
      },
      o: staticValue(0),
      m: 1,
    });
  }
  items.push({ ty: 'tr', ...transform() });
  return { ty: 'gr', it: items };
}

function animation(name, shapesBackToFront, reveal = false) {
  return {
    v: '5.10.2', fr: 30, ip: 0, op: 120, w: 520, h: 360, nm: name,
    ddd: 0, assets: [],
    layers: [...shapesBackToFront].reverse().map(([layerName, shape], index) => ({
      ddd: 0, ind: index + 1, ty: 4, nm: layerName, sr: 1,
      ks: {
        o: reveal ? {
          a: 1, k: [
            { t: Math.min(index * 2, 30), s: [0], e: [100], i: { x: [0.3], y: [1] }, o: { x: [0.2], y: [0] } },
            { t: Math.min(index * 2, 30) + 12, s: [100] },
          ],
        } : staticValue(100), r: staticValue(0), p: staticValue([0, 0, 0]),
        a: staticValue([0, 0, 0]), s: staticValue([100, 100, 100]),
      },
      ao: 0, shapes: [shape], ip: 0, op: 120, st: 0, bm: 0,
    })),
    markers: [],
  };
}

const login = [
  ['editor shadow', rect(65, 79, 330, 224, 18, C.surfaceSoft)],
  ['editor', rect(57, 70, 330, 224, 18, C.code)],
  ['editor header', rect(57, 70, 330, 42, 18, C.ink)],
  ['window dot blue', ellipse(83, 91, 8, 8, C.primary)],
  ['window dot amber', ellipse(98, 91, 8, 8, C.amber)],
  ['window dot neutral', ellipse(113, 91, 8, 8, C.muted)],
  ['sidebar', rect(76, 132, 38, 137, 8, C.codeBorder)],
  ['sidebar bar one', rect(87, 148, 16, 4, 2, C.primary)],
  ['sidebar bar two', rect(87, 164, 16, 4, 2, C.muted)],
  ['sidebar bar three', rect(87, 180, 16, 4, 2, C.muted)],
  ['code line one', rect(132, 142, 92, 7, 3, C.primary)],
  ['code line two', rect(132, 162, 168, 6, 3, C.border)],
  ['code line three', rect(146, 181, 112, 6, 3, C.amber)],
  ['code line four', rect(146, 201, 136, 6, 3, C.muted)],
  ['code line five', rect(132, 222, 155, 6, 3, C.border)],
  ['cursor', path([[292, 219], [292, 234]], C.primary, 3, true)],
  ['access shadow', rect(272, 138, 195, 163, 16, C.border)],
  ['access card', rect(265, 130, 195, 163, 16, C.surface, C.border)],
  ['avatar field', ellipse(303, 171, 48, 48, C.primarySoft)],
  ['avatar head', ellipse(303, 164, 16, 16, C.ink)],
  ['avatar shoulders', ellipse(303, 184, 27, 18, C.primary)],
  ['label line', rect(333, 157, 90, 6, 3, C.ink)],
  ['hint line', rect(333, 174, 67, 5, 2, C.muted)],
  ['password field', rect(283, 209, 159, 31, 8, C.surfaceSoft, C.border)],
  ['password dot 1', ellipse(305, 225, 6, 6, C.ink)],
  ['password dot 2', ellipse(318, 225, 6, 6, C.ink)],
  ['password dot 3', ellipse(331, 225, 6, 6, C.ink)],
  ['password dot 4', ellipse(344, 225, 6, 6, C.ink)],
  ['access button', rect(283, 253, 159, 27, 8, C.primary)],
  ['access check', path([[351, 266], [359, 273], [374, 258]], C.surface, 4, true)],
  ['amber accent', ellipse(449, 91, 24, 24, C.amber)],
];

const register = [
  ['profile shadow', rect(84, 66, 336, 236, 18, C.surfaceSoft)],
  ['profile panel', rect(76, 58, 336, 236, 18, C.surface, C.border)],
  ['profile topbar', rect(76, 58, 336, 47, 18, C.ink)],
  ['topbar dot blue', ellipse(100, 81, 8, 8, C.primary)],
  ['topbar dot amber', ellipse(115, 81, 8, 8, C.amber)],
  ['topbar dot muted', ellipse(130, 81, 8, 8, C.muted)],
  ['profile avatar backdrop', ellipse(159, 174, 94, 94, C.primarySoft)],
  ['profile shoulders', ellipse(159, 205, 62, 37, C.primary)],
  ['profile head', ellipse(159, 160, 33, 33, C.ink)],
  ['form title line', rect(229, 130, 113, 8, 4, C.ink)],
  ['form subtitle line', rect(229, 148, 82, 6, 3, C.muted)],
  ['form field one', rect(229, 177, 146, 21, 6, C.surfaceSoft, C.border)],
  ['form field one text', rect(241, 185, 66, 5, 2, C.muted)],
  ['form field two', rect(229, 207, 146, 21, 6, C.surfaceSoft, C.border)],
  ['form field two text', rect(241, 215, 83, 5, 2, C.muted)],
  ['create button', rect(229, 244, 146, 30, 8, C.primary)],
  ['create arrow', path([[291, 259], [311, 259], [305, 253], [311, 259], [305, 265]], C.surface, 3, true)],
  ['path track', path([[111, 320], [260, 320], [409, 320]], C.border, 5)],
  ['path progress', path([[111, 320], [260, 320]], C.primary, 5, true)],
  ['step one', ellipse(111, 320, 20, 20, C.primary)],
  ['step two', ellipse(260, 320, 20, 20, C.primarySoft, C.primary, 3)],
  ['step three', ellipse(409, 320, 20, 20, C.surface, C.border, 3)],
  ['code badge', rect(391, 113, 74, 66, 12, C.code)],
  ['code left bracket', path([[416, 136], [407, 146], [416, 156]], C.surface, 4)],
  ['code right bracket', path([[440, 136], [449, 146], [440, 156]], C.surface, 4)],
  ['code slash', path([[434, 133], [423, 159]], C.amber, 4)],
];

const roadmap = [
  ['path guide', path([[113, 215], [203, 146], [311, 146], [407, 215]], C.border, 7)],
  ['path draw', path([[113, 215], [203, 146], [311, 146], [407, 215]], C.primary, 5, true)],
  ['first card shadow', rect(66, 183, 116, 112, 16, C.surfaceSoft)],
  ['first card', rect(59, 175, 116, 112, 16, C.code)],
  ['first card accent', rect(75, 190, 54, 7, 3, C.primary)],
  ['first bracket', path([[94, 222], [82, 234], [94, 246]], C.surface, 5)],
  ['second bracket', path([[139, 222], [151, 234], [139, 246]], C.surface, 5)],
  ['first slash', path([[129, 216], [104, 252]], C.amber, 4)],
  ['middle card shadow', rect(199, 100, 122, 112, 16, C.surfaceSoft)],
  ['middle card', rect(192, 93, 122, 112, 16, C.surface, C.border)],
  ['middle topbar', rect(192, 93, 122, 32, 16, C.ink)],
  ['middle dot', ellipse(211, 109, 7, 7, C.amber)],
  ['middle line one', rect(209, 142, 69, 6, 3, C.primary)],
  ['middle line two', rect(209, 160, 85, 6, 3, C.muted)],
  ['middle line three', rect(209, 178, 55, 6, 3, C.border)],
  ['last card shadow', rect(345, 183, 116, 112, 16, C.surfaceSoft)],
  ['last card', rect(338, 175, 116, 112, 16, C.primarySoft, C.border)],
  ['last tile', rect(357, 196, 78, 70, 10, C.surface)],
  ['last line one', rect(370, 211, 52, 6, 3, C.ink)],
  ['last line two', rect(370, 229, 42, 6, 3, C.primary)],
  ['last line three', rect(370, 247, 50, 6, 3, C.amber)],
  ['path node one', ellipse(113, 215, 16, 16, C.primary)],
  ['path node two', ellipse(257, 146, 16, 16, C.amber)],
  ['path node three', ellipse(407, 215, 16, 16, C.primary)],
];

// Compact editorial scenes are reused on relevant pages. Each is a local vector file.
const practice = [
  ['editor', rect(42, 62, 296, 228, 18, C.code)],
  ['editor bar', rect(42, 62, 296, 42, 18, C.ink)],
  ['editor dot', ellipse(68, 83, 8, 8, C.amber)],
  ['line blue', rect(70, 133, 112, 7, 3, C.primary)],
  ['line white', rect(86, 155, 178, 6, 3, C.border)],
  ['line amber', rect(86, 178, 128, 6, 3, C.amber)],
  ['line muted', rect(70, 201, 163, 6, 3, C.muted)],
  ['cursor', path([[244, 199], [244, 215]], C.primary, 3, true)],
  ['preview', rect(276, 127, 190, 157, 16, C.surface, C.border, 2)],
  ['preview bar', rect(276, 127, 190, 30, 16, C.primarySoft)],
  ['preview dot', ellipse(295, 142, 6, 6, C.primary)],
  ['preview heading', rect(297, 180, 101, 9, 4, C.ink)],
  ['preview text', rect(297, 201, 139, 6, 3, C.muted)],
  ['preview button', rect(297, 229, 81, 30, 8, C.primary)],
  ['connection', path([[258, 242], [276, 242]], C.amber, 4, true)],
];

const courses = [
  ['back card', rect(66, 68, 246, 198, 18, C.surfaceSoft, C.border, 2)],
  ['middle card', rect(107, 84, 246, 198, 18, C.primarySoft, C.border, 2)],
  ['front card', rect(151, 101, 260, 205, 18, C.surface, C.border, 2)],
  ['front cover', rect(151, 101, 260, 94, 18, C.code)],
  ['code left', path([[247, 126], [226, 149], [247, 172]], C.surface, 6, true)],
  ['code right', path([[315, 126], [336, 149], [315, 172]], C.surface, 6, true)],
  ['code slash', path([[300, 121], [264, 179]], C.amber, 5, true)],
  ['course title', rect(175, 216, 167, 9, 4, C.ink)],
  ['course line', rect(175, 237, 190, 6, 3, C.muted)],
  ['progress track', rect(175, 274, 207, 7, 3, C.border)],
  ['progress fill', rect(175, 274, 115, 7, 3, C.primary)],
];

const technology = [
  ['grid one', rect(90, 83, 148, 103, 16, C.surface, C.border, 2)],
  ['grid two', rect(282, 83, 148, 103, 16, C.primarySoft, C.border, 2)],
  ['grid three', rect(90, 207, 148, 103, 16, C.code)],
  ['grid four', rect(282, 207, 148, 103, 16, C.surface, C.border, 2)],
  ['html left', path([[157, 111], [139, 134], [157, 157]], C.primary, 5, true)],
  ['html right', path([[180, 111], [198, 134], [180, 157]], C.primary, 5, true)],
  ['css tile', rect(322, 110, 69, 11, 5, C.primary)],
  ['css line', rect(322, 137, 43, 8, 4, C.amber)],
  ['js dot', ellipse(164, 258, 43, 43, C.amber)],
  ['js line', rect(314, 236, 92, 7, 3, C.ink)],
  ['js line two', rect(314, 255, 68, 7, 3, C.primary)],
  ['grid connection', path([[238, 134], [282, 134], [282, 258]], C.amber, 4, true)],
];

const steps = [
  ['track', path([[96, 247], [258, 247], [420, 247]], C.border, 7)],
  ['progress', path([[96, 247], [258, 247], [420, 247]], C.primary, 5, true)],
  ['first tile', rect(51, 100, 126, 111, 16, C.surface, C.border, 2)],
  ['first page', rect(89, 124, 50, 56, 6, C.primarySoft, C.primary, 2)],
  ['first line', rect(99, 138, 28, 5, 2, C.primary)],
  ['first line two', rect(99, 151, 22, 5, 2, C.muted)],
  ['second tile', rect(195, 100, 126, 111, 16, C.surface, C.border, 2)],
  ['second code', rect(220, 128, 76, 54, 8, C.code)],
  ['second bracket', path([[248, 140], [237, 155], [248, 170]], C.surface, 4, true)],
  ['second bracket right', path([[268, 140], [279, 155], [268, 170]], C.amber, 4, true)],
  ['third tile', rect(339, 100, 126, 111, 16, C.surface, C.border, 2)],
  ['third progress', ellipse(402, 156, 55, 55, C.primarySoft, C.primary, 4)],
  ['third check', path([[386, 156], [398, 168], [419, 145]], C.primary, 5, true)],
  ['node 1', ellipse(96, 247, 20, 20, C.primary)],
  ['node 2', ellipse(258, 247, 20, 20, C.primary)],
  ['node 3', ellipse(420, 247, 20, 20, C.amber)],
];

const community = [
  ['back message', rect(75, 79, 285, 95, 18, C.primarySoft, C.border, 2)],
  ['back avatar', ellipse(112, 126, 39, 39, C.primary)],
  ['back line', rect(148, 111, 143, 7, 3, C.ink)],
  ['back line two', rect(148, 134, 108, 6, 3, C.muted)],
  ['front message', rect(160, 190, 285, 95, 18, C.surface, C.border, 2)],
  ['front avatar', ellipse(402, 237, 39, 39, C.amber)],
  ['front line', rect(188, 220, 146, 7, 3, C.ink)],
  ['front line two', rect(188, 243, 111, 6, 3, C.muted)],
  ['connection', path([[315, 173], [315, 190]], C.primary, 4, true)],
];

const certificate = [
  ['document', rect(122, 52, 270, 260, 16, C.surface, C.border, 2)],
  ['document header', rect(149, 80, 216, 25, 7, C.ink)],
  ['document line', rect(178, 132, 159, 8, 4, C.muted)],
  ['document name', rect(158, 158, 199, 12, 5, C.primary)],
  ['document course', rect(185, 187, 145, 8, 4, C.ink)],
  ['document rule', path([[158, 216], [358, 216]], C.border, 2, true)],
  ['seal outer', ellipse(258, 258, 62, 62, C.primarySoft, C.primary, 4)],
  ['seal check', path([[241, 258], [253, 270], [276, 245]], C.primary, 5, true)],
  ['accent dot', ellipse(398, 86, 19, 19, C.amber)],
];

const progress = [
  ['dashboard', rect(79, 70, 362, 232, 18, C.surface, C.border, 2)],
  ['topbar', rect(79, 70, 362, 43, 18, C.ink)],
  ['topbar dot', ellipse(105, 91, 8, 8, C.amber)],
  ['progress label', rect(112, 142, 112, 8, 4, C.ink)],
  ['progress track', rect(112, 166, 296, 12, 6, C.border)],
  ['progress fill', rect(112, 166, 190, 12, 6, C.primary)],
  ['chart bar one', rect(129, 228, 44, 45, 7, C.primarySoft)],
  ['chart bar two', rect(195, 210, 44, 63, 7, C.primary)],
  ['chart bar three', rect(261, 193, 44, 80, 7, C.ink)],
  ['chart bar four', rect(327, 221, 44, 52, 7, C.amber)],
];

const questions = [
  ['question card', rect(93, 70, 330, 74, 14, C.primarySoft, C.border, 2)],
  ['question dot', ellipse(123, 106, 18, 18, C.primary)],
  ['question line', rect(158, 99, 202, 8, 4, C.ink)],
  ['answer card', rect(93, 157, 330, 116, 14, C.surface, C.border, 2)],
  ['answer line one', rect(123, 188, 261, 7, 3, C.ink)],
  ['answer line two', rect(123, 212, 219, 7, 3, C.muted)],
  ['answer line three', rect(123, 236, 169, 7, 3, C.primary)],
  ['answer connection', path([[123, 143], [123, 157]], C.amber, 4, true)],
];

const launch = [
  ['browser', rect(70, 88, 365, 206, 18, C.surface, C.border, 2)],
  ['browser bar', rect(70, 88, 365, 43, 18, C.ink)],
  ['browser dot', ellipse(96, 109, 8, 8, C.amber)],
  ['project card', rect(103, 153, 150, 111, 12, C.primarySoft)],
  ['project line', rect(119, 172, 94, 8, 4, C.primary)],
  ['project line two', rect(119, 195, 116, 6, 3, C.muted)],
  ['project button', rect(119, 224, 70, 24, 7, C.primary)],
  ['editor card', rect(271, 153, 132, 111, 12, C.code)],
  ['editor line one', rect(290, 176, 67, 6, 3, C.amber)],
  ['editor line two', rect(290, 199, 91, 6, 3, C.border)],
  ['editor line three', rect(290, 222, 75, 6, 3, C.primary)],
  ['connection', path([[253, 208], [271, 208]], C.amber, 4, true)],
];

const terminal = [
  ['terminal', rect(67, 72, 386, 222, 18, C.code)],
  ['terminal bar', rect(67, 72, 386, 40, 18, C.ink)],
  ['terminal dot', ellipse(94, 92, 8, 8, C.amber)],
  ['prompt one', path([[103, 147], [116, 159], [103, 171]], C.primary, 4, true)],
  ['command one', rect(133, 153, 101, 7, 3, C.surface)],
  ['result one', rect(103, 185, 183, 6, 3, C.muted)],
  ['prompt two', path([[103, 220], [116, 232], [103, 244]], C.primary, 4, true)],
  ['command two', rect(133, 226, 152, 7, 3, C.amber)],
  ['cursor', path([[293, 222], [293, 240]], C.surface, 3, true)],
  ['git branch', path([[361, 148], [388, 148], [388, 234]], C.primary, 4, true)],
  ['git node first', ellipse(361, 148, 17, 17, C.amber)],
  ['git node last', ellipse(388, 234, 17, 17, C.primary)],
];

for (const [filename, scene] of [
  ['login-workspace.json', animation('Kodeluma login workspace', login)],
  ['register-journey.json', animation('Kodeluma register journey', register)],
  ['learning-roadmap.json', animation('Kodeluma learning roadmap', roadmap)],
  ['practice-lab.json', animation('Kodeluma code lab practice', practice, true)],
  ['course-stack.json', animation('Kodeluma course collection', courses, true)],
  ['technology-grid.json', animation('Kodeluma technology grid', technology, true)],
  ['learning-steps.json', animation('Kodeluma learning steps', steps, true)],
  ['community-chat.json', animation('Kodeluma community discussion', community, true)],
  ['certificate-seal.json', animation('Kodeluma internal certificate', certificate, true)],
  ['progress-dashboard.json', animation('Kodeluma learner progress', progress, true)],
  ['faq-answers.json', animation('Kodeluma questions and answers', questions, true)],
  ['project-launch.json', animation('Kodeluma first project', launch, true)],
  ['terminal-console.json', animation('Kodeluma terminal practice', terminal, true)],
]) {
  writeFileSync(new URL(`../public/animations/${filename}`, import.meta.url), `${JSON.stringify(scene)}\n`);
  console.log(`Generated ${filename}: ${scene.layers.length} vector layers`);
}
