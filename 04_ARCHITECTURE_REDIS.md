# ARCHITECTURE.md — NEXT.JS + REDIS-ONLY BACKEND

## 1. Bentuk deployment
```text
Browser / Mobile Browser
       |
       v HTTPS
Next.js on Vercel (App Router)
  |-- React Server Components (public + read views)
  |-- Client Components (interaction, animations)
  |-- Server Actions (form mutations, protected)
  |-- Route Handlers (/api/... stable contracts)
  |-- Auth/session guard + RBAC + Zod validations
  |-- Service Layer (business rules)
  |-- Repository Layer (Upstash Redis)
       |
       v REST, server-only
Upstash Redis (single primary datastore)
```
Redis **bukan server API**, backend dijalankan Next.js. Gunakan Node.js runtime untuk operasi dengan Argon2/PDF library bila library memerlukannya. Vercel hosting + Upstash hanya rencana, harus di-setup dan diuji pengguna.

## 2. Dependency baseline
Runtime packages: `next`, `react`, `react-dom`, `bootstrap`, `react-bootstrap`, `@upstash/redis`, `@upstash/ratelimit`, `motion`, `gsap`, `@gsap/react`, `lucide-react`, `zod`, `argon2`, `react-markdown`, `remark-gfm`, `rehype-sanitize`, `nanoid` (atau built-in crypto), `pdf-lib` (untuk sertifikat opsional), `clsx` jika perlu. Dev: `typescript`, `eslint`, `vitest`, `@testing-library/react`, `@playwright/test`. **Pin versi berdasarkan kompatibilitas yang benar pada waktu implementasi**; jangan mengarang GSAP 4 tanpa verifikasi package. Sederhanakan paket bila tidak terpakai.

## 3. Directory structure
```text
src/
  app/
    layout.tsx                       # Bootstrap CSS imported once
    globals.css
    (marketing)/page.tsx
    (marketing)/courses/page.tsx
    (marketing)/courses/[slug]/page.tsx
    (auth)/login/page.tsx
    (auth)/register/page.tsx
    (student)/dashboard/page.tsx
    (student)/learn/[courseSlug]/[lessonSlug]/page.tsx
    (student)/projects/page.tsx
    (student)/projects/[slug]/page.tsx
    (student)/forum/page.tsx
    (student)/forum/[id]/page.tsx
    (student)/certificates/page.tsx
    (student)/profile/page.tsx
    (admin)/admin/page.tsx
    (admin)/admin/courses/page.tsx
    (admin)/admin/courses/[id]/edit/page.tsx
    (admin)/admin/projects/page.tsx
    (admin)/admin/users/page.tsx
    (admin)/admin/progress/page.tsx
    (admin)/admin/forum/page.tsx
    verify/[code]/page.tsx
    api/v1/auth/...
    api/v1/courses/...
    api/v1/...                         # stable route handlers
  components/
    ui/Button.tsx Card.tsx EmptyState.tsx Loading.tsx ...
    layout/PublicNav.tsx StudentSidebar.tsx AdminSidebar.tsx ...
    marketing/Hero.tsx CoursePreview.tsx ...
    courses/CourseCard.tsx Curriculum.tsx ...
    learning/LessonReader.tsx Quiz.tsx ...
    admin/DataTable.tsx CourseForm.tsx ...
  lib/
    redis.ts                          # server-only singleton
    auth/session.ts password.ts guard.ts
    validation/*.ts
    repositories/*.ts                 # CRUD + secondary indices
    services/*.ts                     # validation + business rules
    utils/*.ts                        # slug, pagination, IDs, escapes
    constants/*.ts
  styles/tokens.css
  types/domain.ts
  tests/unit integration e2e
scripts/seed.ts seed-admin.ts
public/brand/...
```
Avoid `'use client'` on root layout unless needed; keep route load lean. Render admin navigation only after guard; protect all API independently.

## 4. Environment (secrets server only)
```bash
UPSTASH_REDIS_REST_URL="https://YOUR-DB.upstash.io"
UPSTASH_REDIS_REST_TOKEN="YOUR_SERVER_SECRET_TOKEN"
SESSION_COOKIE_NAME="kodeluma_session"
APP_URL="http://localhost:3000"
NODE_ENV="development"
ADMIN_SEED_EMAIL="admin@example.test"
ADMIN_SEED_PASSWORD="SET_LOCALLY_STRONG_SECRET"
```
Copy from `.env.example` into `.env.local` and do NOT commit `.env.local`. Cookie `secure` in HTTPS prod, `httpOnly`, `sameSite=lax`, path `/`, session random 32+ bytes, hash token before using as Redis key. TTL e.g. 7d idle with rotation strategy documented. Reject requests lacking auth where required.

## 5. Redis data modeling conventions
- Key prefixes stable, singular record + explicit index: `kl:v1:{type}:...`; IDs UUID. JSON strings or HASH supported, **choose one per entity and document** (MVP recommend JSON string for payload, SET/ZSET for indexes).
- Data schema validated using Zod on reads/writes. Store ISO UTC timestamps and logical flags. Never trust frontend role/userId.
- **Primary objects** and index keys never TTL; sessions/rate limiting do use TTL.
- **Counters** updated transactionally with entity create/delete/restore; recompute admin stats job in testing if inconsistency.
- Redis client must be created only in `src/lib/redis.ts` (`import 'server-only'`) with runtime env validation.

### Entity keys & indexes (MVP contract)
| Data | Primary key | Index(es) | Shape |
|---|---|---|---|
| User | `kl:v1:user:{uid}` | `kl:v1:user:email:{normalizedEmail}` -> uid; `kl:v1:users:created` ZSET timestamp | uid, name, email, passwordHash, role, status, createdAt |
| Session | `kl:v1:session:{sha256(token)}` TTL | none | uid, issuedAt, expiresAt |
| Course | `kl:v1:course:{cid}` | `kl:v1:course:slug:{slug}` -> cid; `kl:v1:courses:published` ZSET timestamp; `kl:v1:courses:all` ZSET | cid, slug, title, category, level, status, curriculumVersion, ... |
| Lesson | `kl:v1:lesson:{lid}` | `kl:v1:course:{cid}:lessons` ZSET order | lid, courseId, slug, title, bodyMarkdown, required, status, order |
| Enrollment | `kl:v1:enroll:{uid}:{cid}` | `kl:v1:user:{uid}:enrollments` ZSET; `kl:v1:course:{cid}:students` SET | uid, cid, enrolledAt, curriculumVersion, status |
| Completion | `kl:v1:complete:{uid}:{cid}:v{version}` SET of lesson IDs | counted by `SCARD` / `SISMEMBER` | immutable completed lesson membership |
| Quiz | `kl:v1:quiz:{qid}` | `kl:v1:course:{cid}:quiz` string | questions/answer keys server-only |
| Quiz attempt | `kl:v1:quizresult:{uid}:{cid}:v{version}` | none | score, passed, attempts, updatedAt |
| Project | `kl:v1:project:{pid}` | `kl:v1:projects:published` ZSET; `kl:v1:course:{cid}:projects` SET | pid, courseId, brief, requirements, status |
| Submission | `kl:v1:submission:{uid}:{pid}` | `kl:v1:project:{pid}:submissions` ZSET; `kl:v1:submissions:pending` ZSET | text, repoUrl, status, submittedAt, reviewedAt |
| Thread | `kl:v1:thread:{tid}` | `kl:v1:threads:recent` ZSET; `kl:v1:forum:category:{cat}` ZSET | authorId, title, body, status, timestamps |
| Reply | `kl:v1:reply:{rid}` | `kl:v1:thread:{tid}:replies` ZSET | authorId, body, status, timestamps |
| Certificate | `kl:v1:cert:{certId}` | `kl:v1:cert:verify:{verifyCode}` -> certId; `kl:v1:cert:usercourse:{uid}:{cid}:v{version}` -> certId; `kl:v1:user:{uid}:certificates` ZSET | snapshot, issuedAt, revokedAt |
| Audit | `kl:v1:audit:recent` Redis STREAM capped | none | eventType, actor, entity, timestamp; no secrets |

### Unique email / slug / certificate issuance
- Gunakan `SET key value NX` untuk reservasi indeks unik. **Jangan** menganggap `MULTI` saja membuat check-then-set aman; `SET NX` harus diperiksa, dan jika operasi berikutnya gagal, rollback/repair diperlukan. Idealnya operasi bisnis kritis atomik (Lua/script bila didukung deployment) atau compensating transaction yang diuji.
- `completeLesson` gunakan `SADD` idempotent (result 1 baru, 0 sudah ada); simpan activity terpisah. Boleh `MULTI` untuk update indeks terkait jika sudah ada validasi.
- Issue certificate harus atomic first-writer-wins pada uniqueness key; jangan mencetak sebelum penyimpanan final berhasil.
- User delete/course archive harus menjaga secondary indexes; sediakan `scripts/rebuild-indexes` untuk repair administratif bila gagal di tengah jalan.

### Search & pagination
- Course search sederhana MVP: pagination kandidat published via ZSET, filter kategori/level dan title in app untuk dataset kecil **dengan bound**. Untuk produksi data besar, buat normalized token index SET dan intersect/tambah search service setelah persetujuan. Jangan memuat seluruh database di setiap request.
- Forum/course list: `ZREVRANGE` dengan page limit max 50, tetap filter status setelah membaca. Jika filter mengurangi result, lakukan oversampling bounded, bukan tanpa batas.
- Student progress & admin reports: gunakan enrollment indexes, aggregate per course secara terukur, paginasi per user/course; hindari `KEYS *`/`SCAN` pada HTTP routes. `SCAN` hanya untuk repair/offline script.

## 6. Sample domain types
```ts
type Role = "student" | "admin";
type PublishStatus = "draft" | "published" | "archived";
type CourseLevel = "pemula" | "menengah";
type SubmissionStatus = "draft" | "submitted" | "needs_revision" | "approved";
interface Course {
  id: string; slug: string; title: string; summary: string;
  category: "html"|"css"|"javascript"|"python";
  level: CourseLevel; status: PublishStatus;
  curriculumVersion: number; estimatedMinutes: number;
  coverUrl: string; createdAt: string; updatedAt: string;
}
interface Enrollment { userId: string; courseId: string; curriculumVersion: number; enrolledAt: string; status: "active"|"completed"; }
interface Certificate { id: string; verifyCode: string; userId: string; courseId: string; curriculumVersion: number; recipientName: string; courseTitle: string; issuedAt: string; revokedAt: string|null; }
```

## 7. Authentication, authorization, security
- Registration email case-normalized trim; Zod constraints; rate limit signup/login; Argon2id hashes server-only; never log password, hash, token.
- Session: random opaque token in Secure/HttpOnly/SameSite cookie; Redis stored by **hash** of token. Rotations on privilege changes; revoke all sessions when suspend user.
- Guards: `requireUser`, `requireAdmin`, `requireEnrollment`. Invoke inside each Server Action/API Route Handler **and** page loader; never rely on a client-side route guard alone.
- CSRF: cookie SameSite Lax helps but not sufficient against all state-changing request classes; for non-server-action cookie endpoints validate `Origin` against `APP_URL` (and CSRF tokens where warranted).
- Sanitize markdown on output; disallow raw untrusted HTML and javascript links; CSP, security headers; rate limit forum and auth, HTML editor isolated; no untrusted server execution.
- Validate external repo URLs allowed schemes https only; URL length limits; escaping for link attributes.
- Password recovery/email verification is NOT production-complete in MVP unless secure delivery service is intentionally added later; document limitation conspicuously.
- Store minimum personal data, privacy policy draft, deletion policy, backups, admins least privilege.

## 8. Sample Redis server client (template)
```ts
// src/lib/redis.ts
import 'server-only';
import { Redis } from '@upstash/redis';

if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
  throw new Error('Konfigurasi Redis belum lengkap');
}
export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});
```

## 9. Endpoint design principles
- Server handlers respond `{ data, error, meta }` consistent. Never expose passwordHash, quiz answer keys, sessions, admin notes.
- Use Zod for request body + path params; parse errors 400/422; unauthorized 401; forbidden 403; missing 404; duplicate 409; rate-limited 429; internal 500 with requestId.
- Mutations protected; no leaking draft course through `/api/v1/courses/{id}`.
- Content cache only for public published read; authenticated progress always private and non-cacheable. Invalidate on admin publish.

## 10. Risks, trade-offs, scaling
| Trade-off | Risiko | Mitigasi MVP |
|---|---|---|
| Redis-only | Relasi dan filter kompleks manual | indexes eksplisit + integration tests + bounded query |
| Redis data loss/limits | Data persisten bukan backup | provider backup/export plan, monitor quota, test restore |
| Session custom | Keamanan tinggi dan mudah salah | guard tests, cookies yang benar, rate limiting, audit, security review |
| Slug/email indexes | Race atau orphan index | NX + atomicity strategy + rebuild indexes |
| Code submission | Remote code execution | text/link only, no server execution |
| Analytics | expensive aggregation | precomputed counters + paginated lists |
| Course edits | progress berubah | curriculumVersion snapshot + guard perubahan |
| PDF cert | complexity | render on demand, store metadata in Redis |

## 11. Deployment outline
- Setup Upstash Redis region yang paling dekat dengan mayoritas pengguna (dan cek kuota). Vercel project, set env vars server side. `npm run build` harus sukses sebelum deploy.
- Set `APP_URL=https://kodeluma.azzamcodex.dev`; konfigurasi DNS CNAME/A sesuai instruksi host aktual, HTTPS certificate, domain verified.
- Jalankan seed hanya sekali di staging/demo; jangan expose admin seed endpoint publik.
- Test register/login/logout, save-progress, forum, admin publish, verify certificate, refresh/session TTL di **domain produksi**.
- Verify cost/quotas; implement rate limit against bot and avoid infinite Redis operations.

## 12. Referensi teknis resmi
- Next.js App Router: https://nextjs.org/docs/app
- Upstash Next.js Redis: https://upstash.com/docs/redis/tutorials/nextjs_with_redis
- Upstash atomic transactions: https://upstash.com/docs/redis/sdks/ts/commands/transaction
- Bootstrap React note: https://getbootstrap.com/docs/5.3/getting-started/javascript/
- Motion for React: https://motion.dev/docs/react
- GSAP docs: https://gsap.com/docs/v3/
