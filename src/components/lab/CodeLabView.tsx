'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { useFeedback } from '@/components/ui/FeedbackProvider';
import { TechLogo } from '@/components/ui/TechLogo';
import { SelectField } from '@/components/ui/SelectField';
import { EditorialIllustration } from '@/components/ui/EditorialIllustration';
import {
  UniversalCodeRunner,
  LabLanguage,
  ConsoleEntry,
  SqlQueryResult,
} from '@/lib/lab/codeRunner';
import {
  Play,
  RotateCcw,
  Copy,
  Check,
  Terminal,
  Eye,
  Download,
  Trash2,
  Table as TableIcon,
  Cpu,
  Monitor,
  Tablet,
  Smartphone,
  FileCode,
  Code2,
  ArrowUpRight,
} from 'lucide-react';

interface LanguageConfig {
  id: LabLanguage;
  name: string;
  badge: string;
  techSlug: string;
  extension: string;
  filename: string;
  engine: string;
}

const LANGUAGES: LanguageConfig[] = [
  {
    id: 'web',
    name: 'Web Studio',
    badge: 'HTML · CSS · JS',
    techSlug: 'html5',
    extension: '.html',
    filename: 'index.html',
    engine: 'Preview di browser',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    badge: 'Latihan browser',
    techSlug: 'nodejs',
    extension: '.js',
    filename: 'script.js',
    engine: 'Latihan di browser',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    badge: 'Simulasi',
    techSlug: 'typescript',
    extension: '.ts',
    filename: 'index.ts',
    engine: 'Simulasi terbatas',
  },
  {
    id: 'python',
    name: 'Python',
    badge: 'Simulasi',
    techSlug: 'python',
    extension: '.py',
    filename: 'main.py',
    engine: 'Simulasi terbatas',
  },
  {
    id: 'cplusplus',
    name: 'C++',
    badge: 'Simulasi',
    techSlug: 'cplusplus',
    extension: '.cpp',
    filename: 'main.cpp',
    engine: 'Simulasi terbatas',
  },
  {
    id: 'java',
    name: 'Java',
    badge: 'Simulasi',
    techSlug: 'java',
    extension: '.java',
    filename: 'Main.java',
    engine: 'Simulasi terbatas',
  },
  {
    id: 'sql',
    name: 'SQL',
    badge: 'Data contoh',
    techSlug: 'postgresql',
    extension: '.sql',
    filename: 'query.sql',
    engine: 'Simulasi data contoh',
  },
];

interface TemplateItem {
  id: string;
  title: string;
  description: string;
  code?: string;
  html?: string;
  css?: string;
  js?: string;
}

const TEMPLATES: Record<LabLanguage, TemplateItem[]> = {
  web: [
    {
      id: 'profile',
      title: 'Kartu Profil Modern',
      description: 'Komponen kartu profil responsif dengan avatar dan tombol sapa interaktif.',
      html: `<div class="card">
  <div class="avatar">AK</div>
  <h2>Ahmad Kodeluma</h2>
  <p class="role">Fullstack Web Developer</p>
  <p class="bio">Halo! Saya sedang mengeksplorasi ekosistem modern web development di Kodeluma.</p>
  <button id="btn-sapa">Kirim Sapaan</button>
  <p id="pesan-sapaan" class="pesan"></p>
</div>`,
      css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  background-color: #F8FAFD;
  color: #10243A;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 20px;
}
.card {
  background: #FFFFFF;
  border: 1px solid #E2E9F1;
  border-radius: 16px;
  padding: 32px;
  max-width: 360px;
  text-align: center;
  box-shadow: 0 8px 28px rgba(16, 36, 58, 0.05);
}
.avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #EFF5FF;
  color: #2563EB;
  font-weight: 800;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 18px;
}
h2 {
  margin: 0 0 6px;
  font-size: 22px;
}
.role {
  color: #2563EB;
  font-weight: 600;
  font-size: 14px;
  margin: 0 0 16px;
}
.bio {
  color: #62748A;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 24px;
}
button {
  background: #2563EB;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}
button:hover {
  background: #1D4ED8;
  transform: translateY(-1px);
}
.pesan {
  margin-top: 16px;
  font-size: 13px;
  color: #16805D;
  font-weight: 500;
}`,
      js: `const btn = document.getElementById('btn-sapa');
btn.addEventListener('click', () => {
  console.log('[Web Log]: Tombol sapaan diklik oleh pengguna.');
  document.getElementById('pesan-sapaan').textContent = 'Halo dari JavaScript! Selamat datang di KodeLuma Web Studio.';
});`,
    },
    {
      id: 'counter',
      title: 'Interactive Counter App',
      description: 'Aplikasi penghitung interaktif dengan kontrol penambahan dan reset nilai.',
      html: `<div class="counter-box">
  <h2>Aplikasi Penghitung Angka</h2>
  <div class="display" id="count-val">0</div>
  <div class="btn-group">
    <button id="btn-dec">- Kurang</button>
    <button id="btn-reset">Reset</button>
    <button id="btn-inc">+ Tambah</button>
  </div>
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #0F172A;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}
.counter-box {
  background: #1E293B;
  padding: 32px;
  border-radius: 16px;
  border: 1px solid #334155;
  text-align: center;
}
.display {
  font-size: 64px;
  font-weight: 800;
  color: #38BDF8;
  margin: 20px 0;
}
.btn-group {
  display: flex;
  gap: 10px;
}
button {
  background: #3B82F6;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}
#btn-reset { background: #475569; }`,
      js: `let count = 0;
const display = document.getElementById('count-val');
document.getElementById('btn-inc').onclick = () => {
  count++;
  display.innerText = count;
  console.log('Nilai bertambah:', count);
};
document.getElementById('btn-dec').onclick = () => {
  count--;
  display.innerText = count;
  console.log('Nilai berkurang:', count);
};
document.getElementById('btn-reset').onclick = () => {
  count = 0;
  display.innerText = count;
  console.log('Counter di-reset ke 0');
};`,
    },
  ],
  javascript: [
    {
      id: 'api',
      title: 'REST API & Array Analytics',
      description: 'Simulasi pemrosesan data backend, filtering, aggregate XP, dan leaderboard ranking.',
      code: `// Latihan JavaScript di browser
console.log("Menjalankan contoh JavaScript Kodeluma");

const learners = [
  { id: "USR-01", name: "Azzam Codex", role: "Fullstack Engineer", xp: 4850, active: true },
  { id: "USR-02", name: "Siti Rahma", role: "Frontend Developer", xp: 3200, active: true },
  { id: "USR-03", name: "Budi Santoso", role: "Backend Engineer", xp: 5120, active: false },
  { id: "USR-04", name: "Dewi Lestari", role: "DevOps Specialist", xp: 6200, active: true },
  { id: "USR-05", name: "Eko Pratama", role: "Mobile Developer", xp: 2900, active: true },
];

// 1. Filter pengguna yang sedang aktif
const activeLearners = learners.filter(u => u.active);
console.log("Jumlah Siswa Aktif:", activeLearners.length);

// 2. Akumulasi total XP siswa aktif
const totalXp = activeLearners.reduce((sum, u) => sum + u.xp, 0);
console.log("Total XP Komunitas:", totalXp.toLocaleString("id-ID"), "XP");

// 3. Cari Leaderboard peringkat 1
const topLearner = [...learners].sort((a, b) => b.xp - a.xp)[0];
console.log(\`Peserta dengan XP tertinggi: \${topLearner.name} (\${topLearner.role}) dengan \${topLearner.xp} XP!\`);
`,
    },
    {
      id: 'async',
      title: 'Async/Await & Simulasi Network Fetch',
      description: 'Menangani promise asynchronous dan penanganan error pada Node.js.',
      code: `async function fetchKodelumaData(endpoint) {
  console.log(\`[HTTP GET]: Mengambil data dari \${endpoint}...\`);
  // Simulasi latency jaringan
  return {
    status: 200,
    timestamp: new Date().toISOString(),
    payload: {
      platform: "KodeLuma Learning Engine",
      activeCourses: 8,
      totalLessons: 102,
      serverUptime: "99.98%"
    }
  };
}

async function main() {
  try {
    const response = await fetchKodelumaData("/api/v1/system/status");
    console.log("Respon Berhasil Diterima:");
    console.log(response.payload);
  } catch (error) {
    console.error("Gagal terhubung ke API:", error);
  }
}

main();`,
    },
  ],
  typescript: [
    {
      id: 'nilai',
      title: 'Variabel Bertipe',
      description: 'Mengubah nilai variabel bertipe dan melihat output JavaScript hasil transformasi sederhana.',
      code: `// Latihan TypeScript sederhana di browser
const nilai: number = 90;
console.log("Nilai latihan:", nilai);
console.log("Lulus:", nilai >= 75);`,
    },
  ],
  python: [
    {
      id: 'nilai',
      title: 'Variabel dan Print',
      description: 'Latihan assignment serta print pada simulator Python terbatas.',
      code: `# Latihan Python sederhana di browser
nama = "Ahmad"
skor = 90
print("Nama:", nama)
print("Skor:", skor)`,
    },
  ],
  cplusplus: [
    {
      id: 'output',
      title: 'Output C++',
      description: 'Latihan membaca pernyataan std::cout dengan simulator output terbatas.',
      code: `#include <iostream>

int main() {
    std::cout << "Halo dari contoh C++ Kodeluma" << std::endl;
    std::cout << "Ubah teks ini lalu jalankan lagi." << std::endl;
    return 0;
}`,
    },
  ],
  java: [
    {
      id: 'output',
      title: 'Output Java',
      description: 'Latihan membaca pernyataan System.out.println dengan simulator output terbatas.',
      code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Halo dari contoh Java Kodeluma");
        System.out.println("Ubah teks ini lalu jalankan lagi.");
    }
}`,
    },
  ],
  sql: [
    {
      id: 'users',
      title: 'Filter Data Pengguna',
      description: 'Latihan SELECT dan WHERE pada data contoh pengguna.',
      code: `-- Latihan kueri SQL dengan data contoh Kodeluma
-- Menampilkan pengguna dengan peran student

SELECT 
    id,
    name,
    role
FROM users
WHERE role = 'student'
LIMIT 5;`,
    },
    {
      id: 'products',
      title: 'Daftar Produk & Stok Barang',
      description: 'Menampilkan produk dengan stok lebih dari 10 pada data contoh.',
      code: `-- Menampilkan inventaris barang toko
SELECT 
    id, 
    title, 
    category, 
    price, 
    stock 
FROM products 
WHERE stock > 10;`,
    },
  ],
};

export function CodeLabView() {
  const { notify } = useFeedback();
  const reducedMotion = useReducedMotion();
  const [activeLang, setActiveLang] = useState<LabLanguage>('web');

  // Web Multi-File State
  const [htmlCode, setHtmlCode] = useState(TEMPLATES.web[0].html || '');
  const [cssCode, setCssCode] = useState(TEMPLATES.web[0].css || '');
  const [jsCode, setJsCode] = useState(TEMPLATES.web[0].js || '');
  const [activeWebTab, setActiveWebTab] = useState<'html' | 'css' | 'js'>('html');

  // Single File State for other languages
  const [singleCode, setSingleCode] = useState<Record<LabLanguage, string>>({
    web: '',
    javascript: TEMPLATES.javascript[0].code || '',
    typescript: TEMPLATES.typescript[0].code || '',
    python: TEMPLATES.python[0].code || '',
    cplusplus: TEMPLATES.cplusplus[0].code || '',
    java: TEMPLATES.java[0].code || '',
    sql: TEMPLATES.sql[0].code || '',
  });

  // Selected Template ID per language
  const [selectedTemplateId, setSelectedTemplateId] = useState<Record<LabLanguage, string>>({
    web: 'profile',
    javascript: 'api',
    typescript: 'nilai',
    python: 'nilai',
    cplusplus: 'output',
    java: 'output',
    sql: 'users',
  });

  // Output & Execution States
  const [logs, setLogs] = useState<ConsoleEntry[]>([]);
  const [compileLogs, setCompileLogs] = useState<string[]>([]);
  const [sqlResult, setSqlResult] = useState<SqlQueryResult | null>(null);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Active Output View Tab ('console' | 'table' | 'preview' | 'compile')
  const [outputTab, setOutputTab] = useState<'preview' | 'console' | 'table' | 'compile'>('preview');

  // Responsive device view for Web preview
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const consoleBottomRef = useRef<HTMLDivElement>(null);

  const currentLangConfig = LANGUAGES.find((l) => l.id === activeLang)!;

  // Listen for iframe console messages
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.source === iframeRef.current?.contentWindow && event.data?.type === 'LAB_CONSOLE') {
        const entry: ConsoleEntry = {
          id: Math.random().toString(36).substring(2),
          type: event.data.level === 'error' ? 'error' : event.data.level === 'warn' ? 'warn' : 'log',
          text: event.data.text || '',
          time: new Date().toTimeString().split(' ')[0],
        };
        setLogs((prev) => [...prev, entry]);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Set default output tab when switching languages
  useEffect(() => {
    if (activeLang === 'web') {
      setOutputTab('preview');
    } else if (activeLang === 'sql') {
      setOutputTab('table');
    } else {
      setOutputTab('console');
    }
  }, [activeLang]);

  // Execute Code Function
  const handleRun = async () => {
    setIsRunning(true);
    setLogs([]);
    setCompileLogs([]);
    setSqlResult(null);

    try {
      if (activeLang === 'web') {
        const previewDoc = UniversalCodeRunner.buildWebPreviewDocument(htmlCode, cssCode, jsCode);
        if (iframeRef.current) {
          iframeRef.current.srcdoc = previewDoc;
        }
        setOutputTab('preview');
        notify({ title: 'Web Studio Diperbarui', message: 'Tampilan live canvas berhasil dimuat.', variant: 'success' });
      } else if (activeLang === 'javascript') {
        const res = await UniversalCodeRunner.runJavaScript(singleCode.javascript);
        setLogs(res.logs);
        setOutputTab('console');
      } else if (activeLang === 'typescript') {
        const res = await UniversalCodeRunner.runTypeScript(singleCode.typescript);
        setLogs(res.logs);
        setCompileLogs(res.compileLogs || []);
        setOutputTab('console');
      } else if (activeLang === 'python') {
        const res = await UniversalCodeRunner.runPython(singleCode.python);
        setLogs(res.logs);
        setCompileLogs(res.compileLogs || []);
        setOutputTab('console');
      } else if (activeLang === 'cplusplus') {
        const res = await UniversalCodeRunner.runCpp(singleCode.cplusplus);
        setLogs(res.logs);
        setCompileLogs(res.compileLogs || []);
        setOutputTab('console');
      } else if (activeLang === 'java') {
        const res = await UniversalCodeRunner.runJava(singleCode.java);
        setLogs(res.logs);
        setCompileLogs(res.compileLogs || []);
        setOutputTab('console');
      } else if (activeLang === 'sql') {
        const res = await UniversalCodeRunner.runSql(singleCode.sql);
        setLogs(res.logs);
        setSqlResult(res.sqlResult || null);
        setOutputTab(res.sqlResult ? 'table' : 'console');
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setLogs((prev) => [
        ...prev,
        {
          id: 'fatal',
          type: 'error',
          text: `Eksekusi gagal: ${msg}`,
          time: new Date().toTimeString().split(' ')[0],
        },
      ]);
    } finally {
      setIsRunning(false);
      setTimeout(() => {
        consoleBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  // Keyboard shortcut Ctrl+Enter or Cmd+Enter to Run
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      handleRun();
    }
  };

  // Handle template selection change
  const handleSelectTemplate = (templateId: string) => {
    setSelectedTemplateId((prev) => ({ ...prev, [activeLang]: templateId }));
    const tpl = TEMPLATES[activeLang].find((t) => t.id === templateId);
    if (!tpl) return;

    if (activeLang === 'web') {
      setHtmlCode(tpl.html || '');
      setCssCode(tpl.css || '');
      setJsCode(tpl.js || '');
    } else {
      setSingleCode((prev) => ({ ...prev, [activeLang]: tpl.code || '' }));
    }
    notify({
      title: 'Template Dimuat',
      message: `Berhasil memuat template "${tpl.title}".`,
      variant: 'info',
    });
  };

  // Copy code to clipboard
  const handleCopy = async () => {
    const textToCopy =
      activeLang === 'web'
        ? activeWebTab === 'html'
          ? htmlCode
          : activeWebTab === 'css'
          ? cssCode
          : jsCode
        : singleCode[activeLang];

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      notify({ title: 'Kode Disalin', message: 'Teks kode berhasil disalin ke clipboard.', variant: 'success' });
    } catch {
      notify({ title: 'Gagal menyalin kode', message: 'Izin clipboard tidak tersedia. Pilih kode lalu salin secara manual.', variant: 'error' });
    }
  };

  // Download code file
  const handleDownload = () => {
    const content =
      activeLang === 'web'
        ? `<!-- HTML -->\n${htmlCode}\n\n<style>\n${cssCode}\n</style>\n\n<script>\n${jsCode}\n</script>`
        : singleCode[activeLang];

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = currentLangConfig.filename;
    link.click();
    URL.revokeObjectURL(url);
    notify({ title: 'Berkas Diunduh', message: `Menyimpan ${currentLangConfig.filename}.`, variant: 'info' });
  };

  // Reset to default template
  const handleReset = () => {
    const defaultTpl = TEMPLATES[activeLang][0];
    if (!defaultTpl) return;
    setSelectedTemplateId((previous) => ({ ...previous, [activeLang]: defaultTpl.id }));
    if (activeLang === 'web') {
      setHtmlCode(defaultTpl.html || '');
      setCssCode(defaultTpl.css || '');
      setJsCode(defaultTpl.js || '');
    } else {
      setSingleCode((prev) => ({ ...prev, [activeLang]: defaultTpl.code || '' }));
    }
    notify({ title: 'Kode Direset', message: 'Kembali ke kode awal template.', variant: 'info' });
  };

  // Get active editor code
  const currentEditorCode =
    activeLang === 'web'
      ? activeWebTab === 'html'
        ? htmlCode
        : activeWebTab === 'css'
        ? cssCode
        : jsCode
      : singleCode[activeLang];

  const setCurrentEditorCode = (val: string) => {
    if (activeLang === 'web') {
      if (activeWebTab === 'html') setHtmlCode(val);
      else if (activeWebTab === 'css') setCssCode(val);
      else setJsCode(val);
    } else {
      setSingleCode((prev) => ({ ...prev, [activeLang]: val }));
    }
  };

  const lineCount = currentEditorCode.split('\n').length;
  const initialWebPreview = useMemo(() => UniversalCodeRunner.buildWebPreviewDocument(
    TEMPLATES.web[0].html || '',
    TEMPLATES.web[0].css || '',
    TEMPLATES.web[0].js || '',
  ), []);

  return (
    <div className="kl-lab-page">
      <div className="container kl-lab-container">
        <motion.header
          className="row align-items-center g-4 kl-lab-intro"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: 'easeOut' }}
        >
          <div className="col-12 col-lg-8">
            <span className="kl-eyebrow">RUANG PRAKTIK KODELUMA</span>
            <h1 className="kl-lab-title">Tulis kode. Lihat hasilnya.</h1>
            <p className="kl-lab-lead">
              Pilih bahasa, mulai dari contoh, lalu ubah kodenya sesukamu.
              Jalankan untuk melihat hasil di sebelah editor.
            </p>
            <div className="d-flex flex-wrap align-items-center gap-3 kl-lab-intro-notes">
              <span><Code2 size={16} aria-hidden="true" /> Tujuh mode latihan</span>
              <span><ArrowUpRight size={16} aria-hidden="true" /> Preview dan output langsung</span>
            </div>
          </div>
          <div className="col-12 col-lg-4 d-none d-lg-block">
            <EditorialIllustration kind="practice" className="kl-lab-art" />
          </div>
        </motion.header>

        <motion.section
          className="kl-lab-workspace"
          aria-label="Ruang kerja kode"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, delay: reducedMotion ? 0 : 0.1, ease: 'easeOut' }}
        >
          <div className="kl-lab-workspace-top">
            <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3">
              <div>
                <div className="kl-lab-section-label">WORKSPACE / 01</div>
                <h2 className="kl-lab-workspace-title">Code Lab</h2>
              </div>
              <p className="kl-lab-runtime-note mb-0">
                Preview web berjalan di browser. Mode bahasa lain adalah latihan atau simulasi terbatas, bukan compiler asli.
              </p>
            </div>

            <div className="kl-lab-language-list" role="group" aria-label="Pilih bahasa latihan">
              {LANGUAGES.map((lang) => {
                const isActive = lang.id === activeLang;
                return (
                  <button
                    key={lang.id}
                    type="button"
                    onClick={() => setActiveLang(lang.id)}
                    aria-pressed={isActive}
                    className={'btn kl-lab-language' + (isActive ? ' is-active' : '')}
                  >
                    <TechLogo slug={lang.techSlug} size={22} />
                    <span>{lang.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="kl-lab-toolbar d-flex flex-column flex-lg-row align-items-lg-end justify-content-between gap-3">
            <div className="kl-lab-template-control">
              <label className="kl-lab-control-label" htmlFor="kl-lab-template">Mulai dari contoh</label>
              <SelectField
                id="kl-lab-template"
                label="Pilih contoh kode"
                value={selectedTemplateId[activeLang]}
                options={TEMPLATES[activeLang].map((template) => ({ value: template.id, label: template.title }))}
                onChange={handleSelectTemplate}
                size="sm"
              />
            </div>
            <div className="d-flex flex-wrap align-items-center gap-2 kl-lab-actions">
              <button type="button" onClick={handleReset} className="btn kl-lab-action" title="Reset ke contoh awal">
                <RotateCcw size={17} aria-hidden="true" /><span>Reset</span>
              </button>
              <button type="button" onClick={handleCopy} className="btn kl-lab-action" title="Salin kode aktif">
                {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
                <span>{copied ? 'Tersalin' : 'Salin'}</span>
              </button>
              <button type="button" onClick={handleDownload} className="btn kl-lab-action" title="Unduh kode">
                <Download size={17} aria-hidden="true" /><span>Unduh</span>
              </button>
              <button type="button" onClick={handleRun} disabled={isRunning} className="btn kl-btn-primary kl-lab-run">
                <Play size={17} aria-hidden="true" />
                <span>{isRunning ? 'Menjalankan…' : 'Jalankan kode'}</span>
                <span className="kl-lab-shortcut d-none d-sm-inline">Ctrl + Enter</span>
              </button>
            </div>
          </div>

          <div className="row g-3 g-xl-4 kl-lab-panels">
            <div className="col-12 col-xl-6">
              <section className="kl-lab-panel kl-lab-editor" aria-label="Editor kode">
                <div className="kl-lab-panel-heading d-flex align-items-center justify-content-between gap-2">
                  <div className="d-flex align-items-center gap-2">
                    <span className="kl-lab-panel-icon"><FileCode size={17} aria-hidden="true" /></span>
                    <span className="kl-lab-panel-title">Editor</span>
                  </div>
                  <span className="kl-lab-panel-meta">{currentLangConfig.engine}</span>
                </div>
                <div className="kl-lab-editor-tabs d-flex align-items-center justify-content-between gap-2">
                  {activeLang === 'web' ? (
                    <div className="d-flex align-items-center gap-1 overflow-auto" role="group" aria-label="Pilih berkas web">
                      {(['html', 'css', 'js'] as const).map((tab) => (
                        <button
                          key={tab}
                          type="button"
                          onClick={() => setActiveWebTab(tab)}
                          aria-pressed={activeWebTab === tab}
                          className={'btn kl-lab-file-tab' + (activeWebTab === tab ? ' is-active' : '')}
                        >
                          {tab === 'html' ? 'index.html' : tab === 'css' ? 'style.css' : 'script.js'}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <span className="kl-lab-filename"><TechLogo slug={currentLangConfig.techSlug} size={18} /> {currentLangConfig.filename}</span>
                  )}
                  <span className="kl-lab-line-count">{lineCount} baris</span>
                </div>
                <label className="visually-hidden" htmlFor="kl-lab-code">Kode {currentLangConfig.name}</label>
                <textarea
                  id="kl-lab-code"
                  value={currentEditorCode}
                  onChange={(event) => setCurrentEditorCode(event.target.value)}
                  onKeyDown={handleKeyDown}
                  spellCheck={false}
                  className="kl-lab-code-input"
                  aria-describedby="kl-lab-editor-help"
                />
                <div id="kl-lab-editor-help" className="kl-lab-editor-footer d-flex align-items-center justify-content-between gap-2">
                  <span>Ubah kode lalu jalankan</span>
                  <span>UTF-8 · {currentLangConfig.extension}</span>
                </div>
              </section>
            </div>

            <div className="col-12 col-xl-6">
              <section className="kl-lab-panel kl-lab-output" aria-label="Hasil kode">
                <div className="kl-lab-panel-heading d-flex align-items-center justify-content-between gap-2">
                  <div className="d-flex align-items-center gap-2">
                    <span className="kl-lab-panel-icon"><Eye size={17} aria-hidden="true" /></span>
                    <span className="kl-lab-panel-title">Hasil</span>
                  </div>
                  <span className="kl-lab-output-status"><span aria-hidden="true" /> {isRunning ? 'Memproses' : 'Siap digunakan'}</span>
                </div>
                <div className="kl-lab-output-tabs d-flex align-items-center justify-content-between gap-2">
                  <div className="d-flex align-items-center gap-1 overflow-auto" role="group" aria-label="Pilih tampilan hasil">
                    {activeLang === 'web' && (
                      <button type="button" onClick={() => setOutputTab('preview')} aria-pressed={outputTab === 'preview'} className={'btn kl-lab-output-tab' + (outputTab === 'preview' ? ' is-active' : '')}>
                        <Eye size={15} aria-hidden="true" /> Preview
                      </button>
                    )}
                    {activeLang === 'sql' && (
                      <button type="button" onClick={() => setOutputTab('table')} aria-pressed={outputTab === 'table'} className={'btn kl-lab-output-tab' + (outputTab === 'table' ? ' is-active' : '')}>
                        <TableIcon size={15} aria-hidden="true" /> Data {sqlResult ? '(' + sqlResult.rowCount + ')' : ''}
                      </button>
                    )}
                    <button type="button" onClick={() => setOutputTab('console')} aria-pressed={outputTab === 'console'} className={'btn kl-lab-output-tab' + (outputTab === 'console' ? ' is-active' : '')}>
                      <Terminal size={15} aria-hidden="true" /> Konsol {logs.length > 0 ? '(' + logs.length + ')' : ''}
                    </button>
                    {compileLogs.length > 0 && (
                      <button type="button" onClick={() => setOutputTab('compile')} aria-pressed={outputTab === 'compile'} className={'btn kl-lab-output-tab' + (outputTab === 'compile' ? ' is-active' : '')}>
                        <Cpu size={15} aria-hidden="true" /> Detail simulasi
                      </button>
                    )}
                  </div>
                  {outputTab === 'console' && (
                    <button type="button" onClick={() => setLogs([])} className="btn kl-lab-clear" aria-label="Bersihkan konsol" title="Bersihkan konsol">
                      <Trash2 size={17} aria-hidden="true" />
                    </button>
                  )}
                </div>

                <div className="kl-lab-output-body">
                  {outputTab === 'preview' && activeLang === 'web' && (
                    <div className="kl-lab-preview">
                      <div className="kl-lab-preview-toolbar d-flex align-items-center justify-content-between gap-2">
                        <span>PREVIEW WEB</span>
                        <div className="d-flex align-items-center gap-1" role="group" aria-label="Ukuran pratinjau">
                          <button type="button" onClick={() => setPreviewDevice('desktop')} aria-label="Pratinjau desktop" aria-pressed={previewDevice === 'desktop'} className={'btn kl-lab-device' + (previewDevice === 'desktop' ? ' is-active' : '')}><Monitor size={17} aria-hidden="true" /></button>
                          <button type="button" onClick={() => setPreviewDevice('tablet')} aria-label="Pratinjau tablet" aria-pressed={previewDevice === 'tablet'} className={'btn kl-lab-device' + (previewDevice === 'tablet' ? ' is-active' : '')}><Tablet size={17} aria-hidden="true" /></button>
                          <button type="button" onClick={() => setPreviewDevice('mobile')} aria-label="Pratinjau ponsel" aria-pressed={previewDevice === 'mobile'} className={'btn kl-lab-device' + (previewDevice === 'mobile' ? ' is-active' : '')}><Smartphone size={17} aria-hidden="true" /></button>
                        </div>
                      </div>
                      <div className="kl-lab-preview-stage">
                        <iframe
                          ref={iframeRef}
                          title="Pratinjau kode web"
                          sandbox="allow-scripts allow-modals"
                          className={'kl-lab-preview-frame kl-lab-preview-frame--' + previewDevice}
                          srcDoc={initialWebPreview}
                        />
                      </div>
                    </div>
                  )}
                  {outputTab === 'table' && activeLang === 'sql' && (
                    <div className="kl-lab-result-scroll">
                      {sqlResult && sqlResult.rows.length > 0 ? (
                        <div className="table-responsive">
                          <table className="table table-sm table-hover kl-lab-table mb-0">
                            <thead><tr><th>#</th>{sqlResult.columns.map((col, index) => <th key={index}>{col}</th>)}</tr></thead>
                            <tbody>{sqlResult.rows.map((row, rowIndex) => (
                              <tr key={rowIndex}><td>{rowIndex + 1}</td>{row.map((value, colIndex) => <td key={colIndex}>{value === null ? 'NULL' : String(value)}</td>)}</tr>
                            ))}</tbody>
                          </table>
                        </div>
                      ) : (
                        <div className="kl-lab-empty"><TableIcon size={30} aria-hidden="true" /><strong>Belum ada hasil kueri</strong><span>Jalankan contoh SQL untuk melihat data latihan.</span></div>
                      )}
                    </div>
                  )}
                  {outputTab === 'console' && (
                    <div className="kl-lab-result-scroll kl-lab-console" role="log" aria-live="polite">
                      {logs.length === 0 ? (
                        <div className="kl-lab-empty"><Terminal size={30} aria-hidden="true" /><strong>Konsol siap</strong><span>Jalankan kode untuk melihat hasilnya di sini.</span></div>
                      ) : logs.map((log) => (
                        <div key={log.id} className="kl-lab-log d-flex align-items-start gap-2">
                          <span className="kl-lab-log-time">{log.time}</span>
                          <span className={'kl-lab-log-type kl-lab-log-type--' + log.type}>{log.type}</span>
                          <pre className="mb-0">{log.text}</pre>
                        </div>
                      ))}
                      <div ref={consoleBottomRef} />
                    </div>
                  )}
                  {outputTab === 'compile' && (
                    <div className="kl-lab-result-scroll kl-lab-compile">
                      <p>Catatan dari simulator {currentLangConfig.name}. Ini bukan hasil compiler asli.</p>
                      {compileLogs.map((line, index) => <pre key={index} className="mb-1">{line}</pre>)}
                    </div>
                  )}
                </div>
                <div className="kl-lab-output-footer">Kode tetap di perangkat ini selama halaman terbuka.</div>
              </section>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
