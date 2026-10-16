'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useFeedback } from '@/components/ui/FeedbackProvider';
import { TechLogo } from '@/components/ui/TechLogo';
import {
  Terminal as TerminalIcon,
  Play,
  RotateCcw,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  HelpCircle,
  Award,
  Layers,
  Sparkles,
} from 'lucide-react';

interface TerminalTrack {
  id: 'bash' | 'git' | 'docker';
  name: string;
  badge: string;
  techSlug: string;
  accentColor: string;
  lessons: TerminalLesson[];
}

interface TerminalLesson {
  id: string;
  order: number;
  title: string;
  task: string;
  expectedPattern: RegExp;
  hint: string;
  explanation: string;
  initialFs?: Record<string, string>;
  expectedOutput: string;
}

const TERMINAL_TRACKS: TerminalTrack[] = [
  {
    id: 'bash',
    name: 'Linux / Bash CLI',
    badge: 'Fundamental Sysadmin',
    techSlug: 'bash',
    accentColor: '#4ADE80',
    lessons: [
      {
        id: 'bash-1',
        order: 1,
        title: 'Navigasi Direktori Aktif (pwd)',
        task: 'Ketahui lokasi direktori kerja Anda saat ini dengan mengetik perintah `pwd`.',
        expectedPattern: /^pwd\s*$/i,
        hint: 'Ketik `pwd` (print working directory) lalu tekan Enter.',
        explanation: '`pwd` mencetak path direktori lengkap tempat shell Anda sedang aktif.',
        expectedOutput: '/home/kodeluma/workspace',
      },
      {
        id: 'bash-2',
        order: 2,
        title: 'Melihat Daftar Berkas (ls)',
        task: 'Tampilkan seluruh file dan folder di direktori kerja menggunakan opsi `-la`.',
        expectedPattern: /^ls(\s+-la|\s+-al|\s+-l\s+-a|\s+-a\s+-l)?\s*$/i,
        hint: 'Gunakan perintah `ls -la` untuk menampilkan daftar file termasuk file tersembunyi (hidden).',
        explanation: 'Opsi `-l` menampilkan format panjang (izin, pemilik, ukuran, tanggal), dan `-a` mengikutsertakan dotfiles.',
        expectedOutput: `total 32
drwxr-xr-x 4 kodeluma staff 4096 Oct 16 10:00 .
drwxr-xr-x 8 kodeluma staff 4096 Oct 16 09:30 ..
-rw-r--r-- 1 kodeluma staff  220 Oct 16 09:30 .bashrc
-rw-r--r-- 1 kodeluma staff 1042 Oct 16 10:01 package.json
-rw-r--r-- 1 kodeluma staff  512 Oct 16 10:02 README.md
drwxr-xr-x 2 kodeluma staff 4096 Oct 16 10:05 src`,
      },
      {
        id: 'bash-3',
        order: 3,
        title: 'Membuat Direktori Baru (mkdir)',
        task: 'Buat folder baru bernama `projek-baru` dengan perintah `mkdir`.',
        expectedPattern: /^mkdir\s+projek-baru\s*$/i,
        hint: 'Ketik `mkdir projek-baru` lalu tekan Enter.',
        explanation: '`mkdir` (make directory) digunakan untuk membuat direktori baru dalam sistem file Linux.',
        expectedOutput: 'Direktori [projek-baru] berhasil dibuat.',
      },
      {
        id: 'bash-4',
        order: 4,
        title: 'Berpindah Direktori (cd)',
        task: 'Masuk ke dalam direktori `projek-baru` yang baru Anda buat.',
        expectedPattern: /^cd\s+projek-baru\/?\s*$/i,
        hint: 'Ketik `cd projek-baru` untuk berpindah direktori.',
        explanation: '`cd` (change directory) memindahkan working directory aktif ke folder yang dituju.',
        expectedOutput: 'Direktori aktif sekarang: /home/kodeluma/workspace/projek-baru',
      },
      {
        id: 'bash-5',
        order: 5,
        title: 'Membuat File Kosong (touch)',
        task: 'Buat sebuah file teks kosong baru bernama `app.js`.',
        expectedPattern: /^touch\s+app\.js\s*$/i,
        hint: 'Ketik `touch app.js`.',
        explanation: 'Perintah `touch` menciptakan file baru jika belum ada, atau memperbarui timestamp modifikasi file.',
        expectedOutput: 'File [app.js] berhasil dibuat (0 byte).',
      },
      {
        id: 'bash-6',
        order: 6,
        title: 'Mencetak Teks ke Layar (echo)',
        task: 'Cetak kalimat `Halo KodeLuma` ke konsol menggunakan perintah `echo`.',
        expectedPattern: /^echo\s+['"]?Halo KodeLuma['"]?\s*$/i,
        hint: 'Ketik `echo "Halo KodeLuma"` atau `echo Halo KodeLuma`.',
        explanation: '`echo` mengalirkan string argumen langsung ke output standar (stdout).',
        expectedOutput: 'Halo KodeLuma',
      },
    ],
  },
  {
    id: 'git',
    name: 'Git Version Control',
    badge: 'Kolaborasi & Git Flow',
    techSlug: 'git',
    accentColor: '#F97316',
    lessons: [
      {
        id: 'git-1',
        order: 1,
        title: 'Inisialisasi Repositori (git init)',
        task: 'Ubah direktori saat ini menjadi repositori Git lokal dengan perintah inisialisasi.',
        expectedPattern: /^git\s+init\s*$/i,
        hint: 'Ketik `git init` lalu tekan Enter.',
        explanation: '`git init` membuat subdirektori tersembunyi `.git` yang melacak seluruh riwayat revisi proyek.',
        expectedOutput: 'Initialized empty Git repository in /home/kodeluma/workspace/projek-baru/.git/',
      },
      {
        id: 'git-2',
        order: 2,
        title: 'Memeriksa Status Repositori (git status)',
        task: 'Periksa status perubahan berkas dalam working tree dengan `git status`.',
        expectedPattern: /^git\s+status\s*$/i,
        hint: 'Ketik `git status`.',
        explanation: '`git status` menampilkan status file: untracked, modified, atau staged untuk commit.',
        expectedOutput: `On branch main
No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	app.js

nothing added to commit but untracked files present (use "git add" to track)`,
      },
      {
        id: 'git-3',
        order: 3,
        title: 'Menambahkan ke Staging Area (git add)',
        task: 'Tambahkan seluruh file yang belum terlacak ke dalam area staging menggunakan `git add .`.',
        expectedPattern: /^git\s+add\s+(\.|\*|app\.js)\s*$/i,
        hint: 'Ketik `git add .` atau `git add app.js`.',
        explanation: '`git add` memindahkan perubahan file dari working tree ke staging index siap di-commit.',
        expectedOutput: 'File [app.js] ditambahkan ke staging area.',
      },
      {
        id: 'git-4',
        order: 4,
        title: 'Menyimpan Revisi Snapshot (git commit)',
        task: 'Simpan snapshot komit pertama dengan pesan `"feat: inisialisasi aplikasi"`.',
        expectedPattern: /^git\s+commit\s+-m\s+["'](feat: inisialisasi aplikasi|initial commit|init)["']\s*$/i,
        hint: 'Ketik `git commit -m "feat: inisialisasi aplikasi"`.',
        explanation: '`git commit` merekam snapshot perubahan staging ke dalam basis data Git permanen dengan SHA hash.',
        expectedOutput: `[main (root-commit) 4f9b2a1] feat: inisialisasi aplikasi
 1 file changed, 1 insertion(+)
 create mode 100644 app.js`,
      },
      {
        id: 'git-5',
        order: 5,
        title: 'Membuat Branch Fitur (git branch)',
        task: 'Buat cabang baru bernama `fitur-login` untuk memisahkan alur kerja eksperimental.',
        expectedPattern: /^git\s+branch\s+fitur-login\s*$/i,
        hint: 'Ketik `git branch fitur-login`.',
        explanation: '`git branch <nama>` membuat pointer baru ke commit saat ini tanpa otomatis berpindah cabang.',
        expectedOutput: 'Branch [fitur-login] berhasil dibuat.',
      },
      {
        id: 'git-6',
        order: 6,
        title: 'Melihat Riwayat Commit (git log)',
        task: 'Tampilkan riwayat histori commit repositori dalam format satu baris ringkas.',
        expectedPattern: /^git\s+log(\s+--oneline)?\s*$/i,
        hint: 'Ketik `git log --oneline` atau `git log`.',
        explanation: '`git log` menelusuri rantai commit dari HEAD ke belakang secara kronologis.',
        expectedOutput: `4f9b2a1 (HEAD -> main) feat: inisialisasi aplikasi`,
      },
    ],
  },
  {
    id: 'docker',
    name: 'Docker Containerization',
    badge: 'DevOps & Microservices',
    techSlug: 'docker',
    accentColor: '#38BDF8',
    lessons: [
      {
        id: 'docker-1',
        order: 1,
        title: 'Memeriksa Versi Docker Engine (docker --version)',
        task: 'Periksa ketersediaan dan versi Docker Engine di lingkungan terminal saat ini.',
        expectedPattern: /^docker\s+(--version|-v|version)\s*$/i,
        hint: 'Ketik `docker --version`.',
        explanation: 'Memastikan daemon Docker aktif dan siap mengeksekusi containerisasi.',
        expectedOutput: 'Docker version 26.0.0, build 2ae903e',
      },
      {
        id: 'docker-2',
        order: 2,
        title: 'Menjalankan Container Pertama (docker run)',
        task: 'Jalankan container uji standar Docker dengan perintah `docker run hello-world`.',
        expectedPattern: /^docker\s+run\s+hello-world\s*$/i,
        hint: 'Ketik `docker run hello-world`.',
        explanation: 'Docker akan mengunduh image `hello-world` dari Docker Hub jika belum ada secara lokal dan menjalankannya.',
        expectedOutput: `Hello from Docker!
This message shows that your installation appears to be working correctly.
To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
 3. The Docker daemon created a new container from that image.
 4. The Docker daemon streamed that output to the Docker client.`,
      },
      {
        id: 'docker-3',
        order: 3,
        title: 'Melihat Daftar Container Aktif (docker ps)',
        task: 'Tampilkan daftar container yang sedang berjalan di sistem host.',
        expectedPattern: /^docker\s+ps(\s+-a)?\s*$/i,
        hint: 'Ketik `docker ps` atau `docker ps -a`.',
        explanation: '`docker ps` menampilkan nama container, image, status kesehatan (uptime), dan pemetaan port.',
        expectedOutput: `CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS                  NAMES
c3f1b4a2d8e9   nginx:alpine   "/docker-entrypoint.…"   2 minutes ago   Up 2 minutes   0.0.0.0:8080->80/tcp   web-kodeluma`,
      },
      {
        id: 'docker-4',
        order: 4,
        title: 'Melihat Daftar Image Lokal (docker images)',
        task: 'Tampilkan seluruh images container yang tersimpan di cache lokal.',
        expectedPattern: /^docker\s+images\s*$/i,
        hint: 'Ketik `docker images`.',
        explanation: '`docker images` menampilkan repository, tag versi, image ID, dan ukuran disk image.',
        expectedOutput: `REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
node          20-alpine 8b1f5a4e3c2d   3 days ago     184MB
nginx         alpine    3d2c1b0a9f8e   1 week ago     42.5MB
hello-world   latest    d2c94e258dcb   2 months ago   13.3kB`,
      },
    ],
  },
];

interface CommandHistoryItem {
  id: string;
  command: string;
  output: string;
  isSuccess: boolean;
  time: string;
}

export function GuidedTerminalView() {
  const { notify } = useFeedback();

  const [activeTrackId, setActiveTrackId] = useState<'bash' | 'git' | 'docker'>('bash');
  const [activeLessonIdx, setActiveLessonIdx] = useState<number>(0);
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});

  const [inputVal, setInputVal] = useState<string>('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const [showHint, setShowHint] = useState<boolean>(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentTrack = TERMINAL_TRACKS.find((t) => t.id === activeTrackId)!;
  const currentLesson = currentTrack.lessons[activeLessonIdx];

  const totalTrackLessons = currentTrack.lessons.length;
  const completedInTrack = currentTrack.lessons.filter((l) => completedLessons[l.id]).length;
  const trackProgressPct = Math.round((completedInTrack / totalTrackLessons) * 100);

  // Auto focus input on mount or lesson change
  useEffect(() => {
    inputRef.current?.focus();
    setShowHint(false);
  }, [activeTrackId, activeLessonIdx]);

  // Scroll to bottom whenever history updates
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleExecuteCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    const time = new Date().toTimeString().split(' ')[0];

    // Special shell commands
    if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (cmd === 'help') {
      setHistory((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          command: cmd,
          output: `KodeLuma Guided Terminal v2.0
- Ketik perintah yang diminta pada modul tugas di sebelah kiri.
- clear : Bersihkan layar terminal
- hint  : Buka petunjuk perintah
- reset : Reset progres latihan`,
          isSuccess: true,
          time,
        },
      ]);
      setInputVal('');
      return;
    }

    if (cmd === 'hint') {
      setShowHint(true);
      setInputVal('');
      return;
    }

    // Check if command satisfies the current lesson's regex
    const isMatch = currentLesson.expectedPattern.test(cmd);

    if (isMatch) {
      setHistory((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          command: cmd,
          output: currentLesson.expectedOutput,
          isSuccess: true,
          time,
        },
      ]);

      setCompletedLessons((prev) => ({ ...prev, [currentLesson.id]: true }));
      notify({
        title: 'Tantangan Selesai! 🎉',
        message: `Bagus! Anda berhasil menyelesaikan "${currentLesson.title}".`,
        variant: 'success',
      });

      // Auto-advance to next lesson if available
      if (activeLessonIdx < currentTrack.lessons.length - 1) {
        setTimeout(() => {
          setActiveLessonIdx((prev) => prev + 1);
        }, 800);
      }
    } else {
      setHistory((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          command: cmd,
          output: `bash: ${cmd}: perintah tidak sesuai dengan target instruksi tugas.\nPetunjuk: Periksa instruksi modul atau ketik 'hint'.`,
          isSuccess: false,
          time,
        },
      ]);
    }

    setInputVal('');
  };

  const handleResetTrack = () => {
    setHistory([]);
    setActiveLessonIdx(0);
    const updated = { ...completedLessons };
    currentTrack.lessons.forEach((l) => delete updated[l.id]);
    setCompletedLessons(updated);
    notify({
      title: 'Modul Direset',
      message: `Progres jalur ${currentTrack.name} kembali ke awal.`,
      variant: 'info',
    });
  };

  return (
    <div className="container-fluid py-4 px-3 px-xl-5" style={{ minHeight: '92vh', backgroundColor: '#090D14' }}>
      {/* 1. TOP HEADER & TRACK SELECTOR */}
      <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3 mb-4 pb-3 border-bottom border-dark">
        <div className="d-flex align-items-center gap-3">
          <div
            className="d-flex align-items-center justify-content-center rounded-3 p-2 shadow-sm"
            style={{
              backgroundColor: '#111827',
              border: '1px solid #1F2937',
              color: currentTrack.accentColor,
            }}
          >
            <TechLogo slug={currentTrack.techSlug} size={32} />
          </div>
          <div>
            <div className="d-flex align-items-center gap-2">
              <h1 className="h4 fw-bold text-white mb-0">KodeLuma Interactive Terminal</h1>
              <span className="badge rounded-pill bg-success bg-opacity-25 text-success border border-success border-opacity-25 small px-2">
                SIMULATOR v2.0
              </span>
            </div>
            <p className="small text-secondary mb-0">
              Pelajari perintah praktis Linux Bash, Git Flow, dan Docker Containerization secara interaktif.
            </p>
          </div>
        </div>

        {/* Global Controls */}
        <div className="d-flex align-items-center gap-2">
          <button
            onClick={handleResetTrack}
            className="btn btn-sm btn-dark border-secondary text-secondary d-flex align-items-center gap-1"
          >
            <RotateCcw size={14} />
            <span>Reset Jalur</span>
          </button>
        </div>
      </div>

      {/* 2. TRACK TABS */}
      <div className="d-flex align-items-center gap-2 overflow-auto pb-3 mb-3 border-bottom border-dark">
        {TERMINAL_TRACKS.map((track) => {
          const isActive = track.id === activeTrackId;
          const completedCount = track.lessons.filter((l) => completedLessons[l.id]).length;
          const isDone = completedCount === track.lessons.length;

          return (
            <button
              key={track.id}
              onClick={() => {
                setActiveTrackId(track.id);
                setActiveLessonIdx(0);
              }}
              className={`btn btn-sm text-nowrap d-flex align-items-center gap-2 px-3 py-2 rounded-3 transition-all ${
                isActive
                  ? 'btn-dark text-white fw-bold border-primary shadow-sm'
                  : 'btn-outline-dark text-secondary border-transparent'
              }`}
              style={{
                backgroundColor: isActive ? '#1F2937' : '#111827',
                border: isActive ? `1px solid ${track.accentColor}` : '1px solid #1F2937',
              }}
            >
              <TechLogo slug={track.techSlug} size={16} />
              <span style={{ fontSize: '13px' }}>{track.name}</span>
              {isDone ? (
                <CheckCircle2 size={14} className="text-success" />
              ) : (
                <span className="badge rounded-pill bg-dark text-secondary small" style={{ fontSize: '10px' }}>
                  {completedCount}/{track.lessons.length}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* 3. WORKSPACE: LEFT GUIDED CURRICULUM & RIGHT TERMINAL */}
      <div className="row g-3">
        {/* LEFT COLUMN: GUIDED LESSON & MISSION */}
        <div className="col-12 col-xl-4 d-flex flex-column gap-3">
          {/* Track Progress Card */}
          <div
            className="rounded-3 p-3 shadow-sm border"
            style={{ backgroundColor: '#0F172A', borderColor: '#1E293B' }}
          >
            <div className="d-flex align-items-center justify-content-between mb-2">
              <span className="small text-secondary fw-bold text-uppercase" style={{ letterSpacing: '0.5px' }}>
                Progres {currentTrack.name}
              </span>
              <span className="badge bg-primary bg-opacity-25 text-primary small">
                {trackProgressPct}% Selesai
              </span>
            </div>
            <div className="progress" style={{ height: '6px', backgroundColor: '#1E293B' }}>
              <div
                className="progress-bar bg-success transition-all"
                role="progressbar"
                style={{ width: `${trackProgressPct}%` }}
              />
            </div>
          </div>

          {/* Current Lesson Instruction Box */}
          <div
            className="rounded-3 p-4 shadow-sm border d-flex flex-column flex-grow-1"
            style={{ backgroundColor: '#0F172A', borderColor: '#1E293B' }}
          >
            <div className="d-flex align-items-center gap-2 mb-2">
              <span
                className="badge rounded-pill small px-2 py-1"
                style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60A5FA' }}
              >
                Tugas {currentLesson.order} dari {totalTrackLessons}
              </span>
              {completedLessons[currentLesson.id] && (
                <span className="badge bg-success bg-opacity-25 text-success small d-flex align-items-center gap-1">
                  <CheckCircle2 size={12} /> Selesai
                </span>
              )}
            </div>

            <h2 className="h5 fw-bold text-white mb-3">{currentLesson.title}</h2>

            <div
              className="p-3 rounded-3 mb-3 border"
              style={{ backgroundColor: '#1E293B', borderColor: '#334155' }}
            >
              <div className="small text-secondary fw-bold mb-1">Misi Anda:</div>
              <p className="text-light mb-0 small" style={{ lineHeight: '1.6' }}>
                {currentLesson.task}
              </p>
            </div>

            <div className="mb-3">
              <div className="small text-secondary fw-bold mb-1">Penjelasan Singkat:</div>
              <p className="small text-secondary mb-0" style={{ lineHeight: '1.6' }}>
                {currentLesson.explanation}
              </p>
            </div>

            {/* Hint Accordion */}
            <div className="mt-auto pt-3 border-top border-dark">
              {showHint ? (
                <div className="p-3 rounded-2 bg-dark border border-warning border-opacity-25 small text-warning mb-2">
                  <div className="fw-bold mb-1 d-flex align-items-center gap-1">
                    <Sparkles size={14} /> Solusi Petunjuk:
                  </div>
                  <div>{currentLesson.hint}</div>
                </div>
              ) : (
                <button
                  onClick={() => setShowHint(true)}
                  className="btn btn-sm btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-1"
                >
                  <HelpCircle size={14} />
                  <span>Lihat Petunjuk</span>
                </button>
              )}
            </div>
          </div>

          {/* Lesson Step List */}
          <div
            className="rounded-3 p-3 shadow-sm border"
            style={{ backgroundColor: '#0F172A', borderColor: '#1E293B' }}
          >
            <div className="small text-secondary fw-bold mb-2 text-uppercase" style={{ letterSpacing: '0.5px' }}>
              Daftar Modul
            </div>
            <div className="d-flex flex-column gap-1">
              {currentTrack.lessons.map((lesson, idx) => {
                const isCurrent = idx === activeLessonIdx;
                const isDone = !!completedLessons[lesson.id];

                return (
                  <button
                    key={lesson.id}
                    onClick={() => setActiveLessonIdx(idx)}
                    className={`btn btn-sm text-start d-flex align-items-center justify-content-between p-2 rounded-2 transition-all ${
                      isCurrent
                        ? 'btn-dark text-white fw-bold border-primary'
                        : 'text-secondary hover-bg-dark'
                    }`}
                    style={{
                      backgroundColor: isCurrent ? '#1E293B' : 'transparent',
                      fontSize: '12.5px',
                    }}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <span style={{ width: '16px', color: isDone ? '#10B981' : '#64748B' }}>
                        {isDone ? <CheckCircle2 size={14} /> : `${lesson.order}.`}
                      </span>
                      <span>{lesson.title}</span>
                    </div>
                    {isCurrent && <ChevronRight size={14} className="text-primary" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE TERMINAL EMULATOR */}
        <div className="col-12 col-xl-8 d-flex flex-column">
          <div
            className="rounded-3 overflow-hidden d-flex flex-column shadow-lg"
            style={{
              backgroundColor: '#05080E',
              border: '1px solid #1E293B',
              height: '680px',
            }}
            onClick={() => inputRef.current?.focus()}
          >
            {/* Terminal Top Window Bar */}
            <div
              className="d-flex align-items-center justify-content-between px-3 py-2 border-bottom"
              style={{ backgroundColor: '#0B111A', borderColor: '#1E293B' }}
            >
              <div className="d-flex align-items-center gap-2">
                {/* Window Traffic Lights */}
                <div className="d-flex align-items-center gap-1 me-2">
                  <div className="rounded-circle" style={{ width: 10, height: 10, backgroundColor: '#EF4444' }} />
                  <div className="rounded-circle" style={{ width: 10, height: 10, backgroundColor: '#F59E0B' }} />
                  <div className="rounded-circle" style={{ width: 10, height: 10, backgroundColor: '#10B981' }} />
                </div>
                <TerminalIcon size={14} className="text-secondary" />
                <span className="text-white-50 small font-monospace">kodeluma@cloud-sandbox:~/{activeTrackId}</span>
              </div>

              <div className="d-flex align-items-center gap-2">
                <span className="badge bg-dark text-secondary small font-monospace" style={{ fontSize: '10px' }}>
                  xterm-256color
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setHistory([]);
                  }}
                  className="btn btn-sm p-0 text-secondary hover-text-white"
                  title="Bersihkan layar"
                >
                  <RotateCcw size={12} />
                </button>
              </div>
            </div>

            {/* Terminal Scroll Content */}
            <div
              className="flex-grow-1 p-3 overflow-auto font-monospace text-light"
              style={{ fontSize: '13px', lineHeight: '21px' }}
            >
              {/* Welcome Banner */}
              <div className="text-secondary mb-3 pb-2 border-bottom border-dark" style={{ fontSize: '12px' }}>
                <span className="text-success fw-bold">KodeLuma Guided Terminal Environment v2.0.4</span>
                <br />
                Sistem simulasi shell real-time. Ketik <span className="text-white">help</span> untuk daftar bantuan atau <span className="text-white">clear</span> untuk membersihkan layar.
              </div>

              {/* History Items */}
              {history.map((item) => (
                <div key={item.id} className="mb-2">
                  <div className="d-flex align-items-center gap-2 text-white">
                    <span className="text-success fw-bold">kodeluma@sandbox</span>
                    <span className="text-secondary">:</span>
                    <span className="text-info">~/{activeTrackId}</span>
                    <span className="text-secondary">$</span>
                    <span className="fw-semibold">{item.command}</span>
                  </div>
                  <pre
                    className={`mt-1 mb-0 ps-3 border-start text-wrap font-monospace ${
                      item.isSuccess ? 'border-success text-light' : 'border-danger text-danger'
                    }`}
                    style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontSize: '12.5px' }}
                  >
                    {item.output}
                  </pre>
                </div>
              ))}

              {/* Active Command Prompt Line */}
              <form onSubmit={handleExecuteCommand} className="d-flex align-items-center gap-2 mt-2">
                <span className="text-success fw-bold">kodeluma@sandbox</span>
                <span className="text-secondary">:</span>
                <span className="text-info">~/{activeTrackId}</span>
                <span className="text-secondary">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  className="flex-grow-1 bg-transparent border-0 text-white font-monospace p-0"
                  style={{ outline: 'none', caretColor: '#10B981' }}
                  placeholder="Ketik perintah di sini..."
                  spellCheck={false}
                  autoComplete="off"
                />
              </form>

              <div ref={bottomRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
