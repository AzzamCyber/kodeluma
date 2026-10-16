# KODELUMA — COMPLETE UI/UX UPGRADE PROMPT (ALL IN ONE)

**Use with existing Kodeluma project and its locked `02_DESIGN.md`.** This document joins all expansion specs and actionable reference URLs; it does not modify source files or install assets by itself.


---

# PART I — UI/UX MASTER PROMPT


# KODELUMA — UI/UX DESIGN & FRONTEND EXPANSION MASTER PROMPT

**Version:** 3.0 (UI/UX expansion)  
**Project:** Kodeluma — Learn. Code. Create.  
**Brand:** Kodeluma by Azzam Codex  
**Target deployment:** `kodeluma.azzamcodex.dev` (proposed; confirm DNS & hosting)  
**Purpose:** Executable specifications for an AI coding agent to improve the EXISTING project, not a request for a new unrelated website.  
**Language:** Bahasa Indonesia for user-facing content; code and identifiers may use English.  
**Status:** Design/product requirements; not a claim of completed implementation.

---

## 0. THE FIRST COMMAND TO THE AI CODING AGENT

> You are the UI/UX Lead, Principal Frontend Engineer, Product Designer, Accessibility Reviewer, and QA Engineer for the existing Kodeluma repository. **Do not rebuild from scratch.** First inspect the actual repository and all previous requirements. Respect `02_DESIGN.md`, preserve all working components/flows, and implement this document as an additive UI/UX expansion. Before writing code, produce a concise audit of present/missing features, collisions, and the file-by-file plan. Then implement in small tested phases. A feature is not complete unless it works with real application state. **Bootstrap 5 + React Bootstrap are mandatory and must be visibly used in actual JSX.**

### Order of precedence — no silent conflicts

1. Security, functional correctness, actual user data, and accessibility.
2. University PBL requirement: real Bootstrap usage; basic user/admin sides, tutorials, projects, community, progress, certificates.
3. Original Kodeluma locked design system in `02_DESIGN.md` and actual CSS tokens.
4. Existing implementation that is working and doesn't violate 1–3.
5. This UI/UX expansion.
6. Other inspiration sources.

When requirements genuinely conflict, document the conflict and recommend the smallest change. Do NOT quietly replace existing colors, typography, backend, framework, brand, or architecture. **Design refinement means higher quality with existing identity, not rebranding.**

### Read before modifying

- `01_MASTER_PROMPT.md`, `02_DESIGN.md`, `03_PRD_FEATURES.md`, `04_ARCHITECTURE_REDIS.md`, `05_API_CONTRACTS.md`, `06_PAGE_MAP.md`, `07_IMPLEMENTATION_PLAN.md`, `10_AGENT_RULES.md` where present.
- `KODELUMA_ALL_IN_ONE_ADVANCED.md` (or related curriculum/quest docs) if present.
- `src/components/LandingPage.tsx` (already contains public navbar/sections and animation logic in older version).
- `src/app/globals.css`, actual `package.json`, layouts, route files, auth code, Redis integration, image assets, tests.
- `02_LOTTIE_ASSET_SHORTLIST.md`, `03_TECH_LOGOS_AND_ICONS.md`, `04_UIUX_QA_ACCEPTANCE.md` that accompany this prompt.

**First deliverable from AI:** compact repository audit, screenshot at desktop and mobile if browser is available, route/state inventory, actual Bootstrap dependency/import/usage status, and file-by-file plan. If a browser tool is unavailable, document that explicitly; don't claim screenshot validation.

---

## 1. NON-NEGOTIABLE TECH STACK

| Layer | Required implementation |
|---|---|
| App | Next.js App Router, React, TypeScript |
| UI framework | **Bootstrap 5.3+ and React Bootstrap**; actual grid/utilities/components, NOT CSS-only imitation |
| Styling | Existing Kodeluma CSS variables and scoped CSS; no Tailwind/shadcn/MUI replacement |
| Motion | Motion for React (`motion/react`) for controlled UI transitions/micro-interactions |
| Storytelling | GSAP + ScrollTrigger only where justified; avoid ownership collision with Motion |
| Lottie | `@lottiefiles/dotlottie-react`, client-only component, local `.lottie` assets |
| UI icons | Lucide React / existing lucide-motion for animated UI icons |
| Tech logos | Actual brand marks from original vendor assets when practical, Devicon or Simple Icons, respecting each brand's usage rules |
| Session/data | Current Next.js backend + Upstash Redis per existing architecture; avoid rearchitecting data storage |
| Fonts | Plus Jakarta Sans headings; Inter text; JetBrains Mono code |
| Deployment | Existing Vercel deployment arrangement; no unapproved additional services |

### Evidence that Bootstrap is truly used

- Bootstrap CSS imported exactly once at app level.
- React Bootstrap components used where appropriate, for example `Navbar`, `Offcanvas`, `Accordion`, `Modal`, `Form`, `Dropdown`, `Container`.
- Real responsive utilities such as `container`, `row`, `col-lg-6`, `col-md-4`, `g-4`, `d-flex`, `align-items-center`, `justify-content-between`, `table-responsive`, `btn`, and `form-control` visible in relevant UI.
- Theme tokens customize Bootstrap variables (e.g. `--bs-primary`, `--bs-body-color`) without overriding the visual contract unpredictably.
- Do NOT load Bootstrap JS widgets that manipulate the same DOM controlled by React Bootstrap.
- Add a section to final engineering report listing concrete Bootstrap components/classes and which pages use them; also record package version and CSS import path.
- A visually convincing pure CSS imitation is **not** acceptable for this PBL.

---

## 2. KODELUMA VISUAL IDENTITY — LOCKED

### 2.1 Exact color design tokens

```css
:root {
  --kl-ink: #10243A;
  --kl-primary: #2563EB;
  --kl-primary-hover: #1D4ED8;
  --kl-primary-soft: #EFF5FF;
  --kl-amber: #F4B544;
  --kl-bg: #F8FAFD;
  --kl-surface: #FFFFFF;
  --kl-surface-soft: #F1F5FA;
  --kl-text: #1C2D40;
  --kl-muted: #62748A;
  --kl-border: #E2E9F1;
  --kl-success: #16805D;
  --kl-warning: #A16207;
  --kl-danger: #C24141;
  --kl-code-bg: #101B2B;
  --kl-code-border: #23364E;
}
```

These are reproduced from the previous locked `02_DESIGN.md` and must be reconciled against current source, not duplicated as competing tokens.

- Navy conveys premium trust; blue is the primary action; amber is a restrained accent (logo spark, occasional achievement), **never** bright CTA wallpaper.
- Light mode first across public pages/auth/dashboard. Dark mode is natural for code editor / terminal with accessible contrast; optional full dark mode only after a verified theme strategy.
- Do NOT use neon gradients, cyan-purple glows, over-saturated glassmorphism, cyberpunk, overlaid stock laptop photos, exaggerated 3D blobs, or emoji as UI icons.
- Shadows: restrained. Border 1px `#E2E9F1`. Core card radius 16px, major hero/split panels up to 22px, inputs/buttons 10–12px.
- Use existing Kodeluma logo assets. Wordmark must stay lower-case `kodeluma.` with `by Azzam Codex` secondary.

### 2.2 Typography & grid

- Plus Jakarta Sans 600–800 for headline; Inter 400–700 for UI/body; JetBrains Mono for snippets/terminal.
- H1 desktop approx 52px / tablet 42px / mobile 34px; other heading sizes inherited from `02_DESIGN.md`.
- Default body 16px, line-height 1.65; section descriptions maximum around 62–70ch.
- Bootstrap container as the outer skeleton, maximum content width around 1200px, consistent grid gutters and spacing scale 4/8/12/16/20/24/32/40/48/64/80/96/112.
- Public sections vertical rhythm 96 desktop / 72 tablet / 56 mobile.
- Max 2 visual accent animations visible in a single hero. Editorial hierarchy matters more than animation quantity.

### 2.3 Component quality bar

Buttons, tabs, form controls, cards, chips, menus, links, breadcrumbs, progress, modals, accordions, sheets/offcanvas, skeletons, empty states, banners, notifications and dropdowns share *one* reusable component variant/token system. All interactive controls must have predictable hover/focus/active/disabled/loading/error states. Do not add a new shape/color for each page.

---

## 3. ROUTE AND GLOBAL LAYOUT ARCHITECTURE

Use app route groups or equivalent existing structure; retain valid routes already implemented. Avoid breaking public deep links.

**Public:** `/`, `/courses`, `/courses/[slug]`, `/paths`, `/paths/[slug]`, `/about`, `/help`, `/privacy`, `/terms`.  
**Auth:** `/login`, `/register`, `/forgot-password`, `/reset-password` (token-based), `/verify-email` as supported by backend.  
**Student:** `/dashboard`, `/learn/[courseSlug]/[lessonSlug]`, `/playground`, `/quests`, `/profile`, `/settings`, `/projects`, `/community`, `/certificates`.  
**Admin:** `/admin`, `/admin/courses`, `/admin/modules`, `/admin/users`, `/admin/quests`, `/admin/content-review`, `/admin/analytics`.  

- Public routes show shared `SiteHeader` and substantial `SiteFooter`.
- Auth routes show slim accessible back-to-home header, split layout and minimal legal footer, not full marketing navbar.
- Student routes show compact topbar and learner sidebar or mobile Offcanvas navigation, consistent with public brand.
- Admin routes show admin sidebar/topbar, distinguish actions through labels, not a separate arbitrary color scheme.
- Shared design system and session-aware nav logic must be reused, not copied and forked across routes.
- Prefer server rendering user session and fetching permitted data before passing a typed safe user DTO into client components.

### 3.1 High-level composition

```text
RootLayout
├─ CSS variables + Bootstrap stylesheet + fonts
├─ PublicLayout -> SiteHeader(session) -> PublicPage -> SiteFooter
├─ AuthLayout -> AuthBrandHeader -> AuthPanel + LottiePanel -> AuthLegalFooter
├─ LearnerLayout -> LearnerTopbar(session) + Sidebar/Offcanvas -> Page
└─ AdminLayout -> AdminTopbar(session) + Sidebar/Offcanvas -> Page
```

Component candidates: `SiteHeader`, `GuestNavActions`, `AuthenticatedNavActions`, `MobileSiteNav`, `UserMenu`, `NotificationMenu`, `SiteFooter`, `AuthShell`, `AuthIllustration`, `ValidatedTextField`, `PasswordInput`, `PrimaryButton`, `CourseCard`, `TechLogo`, `KodelumaLottie`, `SectionHeader`, `ResponsiveSidebar`, `FeedbackToast`, `EmptyState`, `SkeletonCard`. Adapt to actual project organization.

---

## 4. GLOBAL NAVBAR — SESSION-AWARE, VISUALLY PREMIUM

### 4.1 Desktop navbar visual specification

- 76px high; sticky at top; white / near-white background with restrained bottom border; scroll state may slightly reduce shadow and background opacity but no heavy blur.
- Left: genuine Kodeluma logomark + wordmark, scales properly and routes to `/`.
- Center: primary links `Kelas`, `Learning Paths`, `Code Lab`, `Quest`, `Tentang`; do not crowd; adjust at 992–1200px.
- Right: contextual actions based on authenticated session.
- Gap 24–32px; text 14–15px/600. Active item blue with unobtrusive underline or indicator; focus ring visible.
- `Code Lab` may point to `/playground`; if protected, guest sees an invitation to register or sign in, not a broken route.
- Add optional compact search icon or search field only if actual search works. Do not invent fake notification counts.
- Primary CTA styling identical across pages.

### 4.2 Guest navbar — AUTH STATUS = NOT SIGNED IN

| Element | Behavior |
|---|---|
| Logo | `Link('/')` |
| Kelas | `/courses` |
| Learning Paths | `/paths` |
| Code Lab | `/playground` demo or auth-gated flow with returnTo |
| Tentang | `/about` or valid section |
| `Masuk` | `/login?returnTo=<safe-relative-path>` where appropriate |
| `Daftar Gratis` | `/register?returnTo=<safe-relative-path>` where appropriate |

Avoid displaying dashboard links, private user data, avatar, logout, or badges for guests.

### 4.3 Logged-in navbar — AUTH STATUS = AUTHENTICATED

- Keep public links reasonably accessible.
- Replace `Masuk` / `Daftar Gratis` with `Dashboard` (role-aware), user avatar circle (initial fallback), chevron, and accessible dropdown.
- Menu: `Dashboard`, `Lanjutkan Belajar`, `Profil`, `Pengaturan`, `Sertifikat` (if feature available), `Keluar`; show `Admin Panel` only if authorized admin.
- Avatar: actual accessible profile image or uppercase initials; no fake profile photo. Display user display name and **not** sensitive email to the whole public navbar.
- `Keluar`: server-backed logout; revoke Redis session, expire cookie, revalidate UI, navigate to `/` or `/login` with no private content exposed.
- For returning learner show progress teaser only from real data; no invented XP or streak.
- If login occurs in another tab, nav state should be synchronized using appropriate session validation after focus/navigation, without treating localStorage flags as source of truth.

### 4.4 Session synchronization: four explicit states

1. **Guest**: authenticated session absent -> guest CTAs.
2. **Resolving**: identity validation in progress -> visually stable skeleton or reserved nav action area; no rapid flash of wrong auth state.
3. **Authenticated**: server validated session -> user menu + Dashboard.
4. **Expired/error**: clear session-dependent UI on authoritative invalidation, re-fetch session if transient error, show message when action requires login. Never display a stale private menu indefinitely.

**Server must determine authority; client state is for presentation only.** Server authorization protects endpoints even if client nav or badges are manipulated. Use Redis session data/verified signed session; cookies `httpOnly`, `secure` in production, `sameSite` reasonable, path, expiration and rotation appropriate. Prefer a well-maintained auth library integrated with Redis over inventing insecure crypto. API must check role and resource ownership. Never expose Redis credentials in the client.

### 4.5 Mobile navbar

- Height ~68px. Left brand, right accessible menu toggle; allow avatar shortcut only if layout permits.
- Bootstrap React `Offcanvas` or accessible equivalent, appropriate label `Menu utama`, close button, Esc support, focus trap and focus restoration.
- Correct guest/auth menu state identical to desktop; active route visible; close on navigation; no scroll bleed.
- Offcanvas need not include decorative Lottie; prioritise speed and usability.
- Test from 320px through desktop at 375, 390, 768, 1024, 1440.

### 4.6 Auth nav regression requirements

- Login at `/login?returnTo=/quests` -> authenticated -> `/quests` or onboarding if applicable, nav changes without hard refresh.
- Logged-in user opening `/login` or `/register` -> sensible redirect to dashboard; don't render a misleading empty form.
- Logout -> guest navbar appears and protected routes inaccessible.
- Expired cookie -> no protected content flash; show sign-in.
- Changing role -> server authority wins, admin link appears/disappears correctly.
- Browser back/forward, direct URL and refresh must preserve correct state.

---

## 5. LANDING PAGE — COMPLETE VISUAL BLUEPRINT

### 5.1 Content architecture in exact recommended order

1. `SiteHeader` (shared session-aware navbar).
2. Hero section: split editorial copy + branded working code stage with **ONE** primary Lottie.
3. Learning value strip: real product capabilities `Materi terarah`, `Praktik langsung`, `Progres tercatat`; avoid fake user statistics.
4. Technology discovery: real original logos HTML, CSS, JavaScript, Python, TypeScript, React, Next.js, Git, C++, SQL, etc.; links to actually existing modules or labeled `Segera hadir`.
5. Featured classes: database-driven course tiles with actual status and difficulty, no fake enroll counts/reviews.
6. `Belajar dengan cara yang lebih nyata`: 4–6 feature cards for tutor, Code Lab, CLI, quests, progress, certificates; icons can have subtle hover motion.
7. Code Lab demo: live browser-safe HTML/CSS/JS editor if functioning; real preview; future Python/runtime feature honestly labeled.
8. Learning path timeline/skill map: Beginner → Intermediate → Advanced; clickable available paths, locked/pre-release states accurate.
9. `Bagaimana Kodeluma bekerja`: Choose course → Read lesson → Run code → Finish quest → Track progress; short explainer with purposeful icons.
10. Optional interactive quest tease with a **real** tiny problem; do not simulate fake scoring unless clearly identified as demo.
11. Why Kodeluma: concise, grounded value; no fake testimonials/instructors/partners.
12. FAQ: 5–7 useful questions with working React Bootstrap Accordion.
13. Final conversion CTA with restrained brand navy backdrop; can include small learning-progress motif.
14. Rich multi-column `SiteFooter`.

### 5.2 Hero exact content and layout

Eyebrow: `BELAJAR CODING, LANGSUNG PRAKTIK`  
Heading: `Dari baris kode pertama, sampai proyek pertamamu.`  
Subheading: `Belajar web, Python, dan teknologi modern melalui modul yang terarah, editor interaktif, serta tantangan yang membuat progresmu terasa nyata.`  
Primary CTA guest: `Mulai Belajar Gratis` → `/register`.  
Primary CTA signed-in: `Lanjutkan Belajar` → last legitimate lesson or `/dashboard`.  
Secondary CTA: `Jelajahi Materi` → `/courses`.  
Microcopy: `Belajar sesuai ritmemu. Mulai dari konsep, lanjut ke praktik.`  

- 55% copy / 45% animation-stage at desktop, 100% stacked mobile.
- Image stage uses real HTML/CSS mock IDE with active text and an accent Lottie placed inside/near it. **Lottie must not replace every informative diagram.**
- H1 wraps intelligently and is never overlapped by floating decorations.
- One Lottie optimized `.lottie` for coding illustration; backdrop subtle blue wash; amber only within logo/spark, not random confetti.
- Consider reveal using Motion for text and GSAP for the editor stage; **do not animate the same CSS transform/opacity on the same element with both**.
- Preserve original working code playground demo if useful; refactor without deleting behavior.

### 5.3 Curriculum/tech stack gallery with ORIGINAL brand marks

- Each language card must have a verified vendor/brand mark, not generic Lucide code icon or emoji. Distinct service/company logos also genuine.
- Responsive 6 columns at extra large where card minimum width permits; 4 desktop, 3 tablet, 2 mobile. No minuscule unreadable cards.
- Typical card: verified brand mark 36–44px, label `Python`, level/track or course count from REAL data, CTA `Lihat Materi`.
- Tooltips/alt text use brand name. Logo must not be modified into another brand shape. Display its authentic colors except where vendor provides official monochrome variant for dark/contrast.
- If the exact brand asset cannot be verified, use neutral text placeholder **and log missing asset in report**, not an invented logo.
- Do not assume every tech has a logo or that public SVG automatically grants logo trademark rights.
- Filter/sort by category `Web`, `Programming`, `Backend`, `Data`, `AI`, `DevOps`, `Mobile`, `Games`, etc., only if data available.
- Featured language list must include Python prominently, not only web basics.

### 5.4 Feature and course cards

- 3 per row desktop or adaptive Bootstrap `row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4`.
- Course artwork can be abstract diagrams/code or legitimate tech logo composition, avoiding stock photos.
- Real course title, level, duration only if data verified; otherwise no numbers. Show published vs coming soon.
- Hover: elevation 2–3px, border blue-soft, soft shadow; cursor pointer only for actual clickable elements.
- Card's nested controls must not create nested links or inaccessible interaction.

### 5.5 FAQ and CTA

Suggested FAQs: `Kodeluma cocok untuk pemula?`, `Apakah harus instal software dulu?`, `Bahasa apa saja yang tersedia?`, `Apa perbedaan materi dan Code Lab?`, `Bagaimana progres belajar disimpan?`, `Apakah mendapatkan sertifikat?`, `Apa yang terjadi jika modul belum tersedia?`. Answers must reflect actual product state; avoid universal promises.

CTA heading: `Satu langkah kecil hari ini, satu proyek nyata berikutnya.`  
Guest CTA: `Buat Akun Gratis`; logged-in CTA: `Lanjutkan Belajar`. Use brand navy background, centered copy, blue button with sufficient contrast, subtle pattern made from real SVG/code tokens, not heavy video.

---

## 6. AUTH UI — LOGIN, REGISTER, RECOVERY, VERIFICATION

### 6.1 Shared auth shell

- Desktop split layout within polished shell: left form/content ~48–52%; right illustration/Lottie ~48–52%. At 768–992px adapt. On mobile, form first and animation reduced to small decorative header or hidden to avoid pushing form beneath the fold.
- Light canvas `--kl-bg`, paper surface white, thin border, gentle shadow, left/top brand icon; no harsh full-page purple backdrop.
- Top left `← Kembali ke beranda` links to `/`; logo accessible.
- Right illustration panel uses coding-learning storyline/colored-blue **local** `.lottie` with short trustworthy reassurance text `Belajar sedikit demi sedikit, berkembang setiap hari.`
- Auth Lottie MUST NOT depict cartoon padlock as false security certification. Avoid bright unrelated palettes or large animation distracting from passwords.
- Footer beneath form: `© {year} Kodeluma. Crafted by Azzam Codex.` with real `Kebijakan Privasi` and `Ketentuan Layanan` routes when implemented.
- Form is functional server-validated auth UI, not frontend-only `setIsLoggedIn(true)`.

### 6.2 `/login` requirements

Eyebrow: `SELAMAT DATANG KEMBALI`  
H1: `Lanjutkan perjalanan coding-mu.`  
Supporting: `Masuk untuk melanjutkan kelas, quest, dan proyekmu.`

Form fields:

- Email: `Email` (type email, autocomplete email, required, trim/normalize server side as policy).
- Password: `Kata sandi` (type password, autocomplete current-password, required, show/hide toggle accessible).
- `Ingat saya` only if the auth/session backend supports coherent duration semantics; do not invent a checkbox otherwise.
- `Lupa kata sandi?` -> `/forgot-password`.
- Submit `Masuk ke Kodeluma`; loading `Sedang masuk...`, disabled to prevent duplicate submits.
- Optional third-party login must not be displayed unless actual provider configured and working; no dead `Masuk dengan Google` button.
- General invalid credentials message should not reveal if account exists: `Email atau kata sandi belum sesuai.`
- Errors are associated with inputs (`aria-describedby`); global error summary when appropriate. No sensitive values in logs.
- `Belum punya akun? Daftar gratis` -> `/register` preserving safe return destination.
- Success: server session cookie set, authoritative navigation & status refresh, safe `returnTo` redirect.

### 6.3 `/register` requirements

Eyebrow: `MULAI PERJALANANMU`  
H1: `Buat akun, mulai dari nol.`  
Supporting: `Pilih kelas pertama, praktikkan kode, dan lihat progres belajarmu.`

Fields:

- Nama tampilan (minimum + maximum length validation).
- Email (normalize consistently, duplicates checked server side).
- Kata sandi (clear password requirement helper, no misleading security meter; use real criteria).
- Konfirmasi kata sandi (match validation).
- Terms acceptance if policies exist, explicit consent not prechecked, server-enforced as required.
- Submit `Buat Akun Gratis` with loading and errors.
- `Sudah punya akun? Masuk` -> `/login`.
- Terms text should be readable, link actual policies and never promise freebies beyond actual product offering.
- Protect registration against automation/rate abuse; hash passwords with audited algorithm; don't keep plaintext credentials or private info in client storage.
- On success: if verification enabled, route to verification notice; else initialize server session and onboarding. Backend is the source of truth.

### 6.4 Password recovery and verify email

- `/forgot-password` email field, always show neutral confirmation preventing account enumeration.
- `/reset-password` validated expiring, single-use token; two password fields, clear errors and expiry states; tokens never leaked to logs.
- `/verify-email`: pending, verified, expired-link, resend throttled, error and success states.
- If recovery/email service is not ready, show clearly identified unavailable feature rather than pretending email sent; document backend prerequisite and avoid fake confirmations.

### 6.5 Required auth microstates

Login/register visual tests must cover: idle, focus, invalid email, weak password, mismatched confirm, missing fields, pending, timeout, error, success, expired session, already authenticated, small screen keyboard open, password manager autofill, slow network, back/forward navigation. Do not lose typed fields except password in an unexpected way.

### 6.6 First-run onboarding (optional Phase 2)

If actual account creation works, ask beginner-friendly goal (`Belajar Web`, `Belajar Python`, `Belajar Backend`, `Belum Tahu`) + level (`Baru Mulai`, `Pernah Coba`) in a compact 1–2 step flow. Optional skip. Store real preference in Redis, no coercive modal loop, and show relevant course suggestions only if recommendation logic is honest.

---

## 7. RICH GLOBAL FOOTER — PREMIUM, RESPONSIVE, USEFUL

- Footer is a complete product navigation destination, not merely a thin copyright text line.
- Top optional CTA band visually blends with footer; avoid double enormous CTAs.
- Base background navy `#10243A` for main footer, coherent lighter navy dividers, white heading, muted cool-blue body with contrast verified.
- Column 1: Kodeluma brand mark + one concise mission statement: `Belajar coding dari konsep, praktik, sampai karya.` + `by Azzam Codex` and valid domain link `https://azzamcodex.id`.
- Column 2 `Jelajahi`: Kelas, Learning Paths, Code Lab, Quest, Community.
- Column 3 `Belajar`: HTML, CSS, JavaScript, Python, Git/CLI (display only real routes or indicate `Segera hadir`).
- Column 4 `Bantuan`: FAQ, Pusat Bantuan, Kontak (real), Kebijakan Privasi, Ketentuan Layanan.
- Optional compact GitHub/Instagram/LinkedIn icons ONLY if destination verified; do not invent social handles.
- Bottom rule: copyright dynamic year, `Crafted by Azzam Codex`, privacy/terms, minimal credits and optional asset attributions.
- Footer nav all keyboard accessible; mobile accordion or stacked columns but not hidden without accessible path.
- Tiny outline or Lottie icon could animate once on hover near `Back to top` (real scroll action); avoid looping Lottie in 8 footer items.
- Desktop 4-column Bootstrap grid (`row`, `col-lg-4`, `col-md-6` etc.), tablet 2 columns, mobile stacked with comfortable spacing.
- No empty columns, dead links or filler text. `href="#"` forbidden as production navigation.

### Footer accessibility/performance

- Ensure no text contrast failures on navy background.
- Link hover and focus visible; `aria-label` on social-only links; logos have descriptive alt.
- Credit third-party animation/animated icon providers when license requires.
- Footer must not be duplicated inside pages with global layout.

---

## 8. LOTTIE ANIMATION SYSTEM — PURPOSEFUL AND LICENSED

### 8.1 Primary animation slots

| Key | UI placement | Content | Behavior |
|---|---|---|---|
| `hero-coding` | Landing hero | Blue/navy programming/IDE activity | loop softly, offscreen pause |
| `auth-learning` | Register right panel | online learning illustration | slow loop, decorative |
| `auth-login` | Login illustration/right panel | password/login/coding-related visual | loop or short entry, not distracting |
| `empty-courses` | No courses/search results | restrained study/book motion | play once or still |
| `quest-success` | Quest completion | subtle checkmark/confetti | play once on actual success only |
| `lesson-complete` | Chapter completion | small celebration/check | play once |
| `loading` | Only if necessary | tiny purposeful state | prefer lightweight CSS skeleton |

### 8.2 Source selection policy

- Read `02_LOTTIE_ASSET_SHORTLIST.md` for **verified animation detail pages** from LottieFiles, including candidate hero/login/learning/success animations.
- Preview each artwork visually and check its animation-specific license, filesize, transparent background, and suitability before adopting.
- **Do not automatically hotlink unverified `assets*.lottiefiles.com` URLs or assume page URLs are playable files.** Download allowed `.lottie` files (manual sign-in if necessary), place in `public/animations/`, and use same-origin paths.
- Target Kodeluma palette. Prefer candidate that already uses blue/navy; use editor/theme capabilities only if legitimately supported. If changing palette breaks artwork/licensing or harms fidelity, choose alternate artwork, don't force recolor.
- Save `docs/ANIMATION_ASSET_MANIFEST.md`: slot, creator, detail-page URL, local file path, license checked date, attribution requirement, palette notes, bytes, duration, fallback.
- If download/authorization unavailable, use existing code-stage illustration or tasteful inline SVG **as explicitly logged fallback**; do not claim a Lottie is installed until its file exists.
- Keep existing code editor visuals as primary information; animations are purposeful accent.

### 8.3 React integration and state

Install/use `@lottiefiles/dotlottie-react` if compatible with actual Next version. It must run in a client component and be SSR-safe via appropriate boundary/dynamic import within Client Component if needed. Use `prefers-reduced-motion` to disable looping/autoplay and provide still image/first frame with alt or decorative-hidden semantics. Respect page visibility and IntersectionObserver to pause offscreen if feasible; clean up listeners and instances.

**Pseudocode architecture:**

```tsx
// conceptual interface; implement against actual installed library API
<KodelumaLottie
  name="hero-coding"
  src="/animations/hero-coding.lottie"
  fallback={<CodeEditorIllustration />}
  loop
  playWhenVisible
  decorative
/>
```

No Lottie should run indefinitely inside invisible mobile containers. Only one large continuous Lottie at a time within the viewport. Keep it smaller/lighter than hero text. Provide CSS aspect-ratio/min-height to prevent CLS.

### 8.4 Lottie vs Motion vs GSAP ownership

- Lottie: pre-authored vector illustrations; loop/start/stop.
- Motion: popovers, hover, tabs, component reveal, drawer micro interactions where not handled by React Bootstrap.
- GSAP: selective landing scroll storytelling on known DOM, scoped with cleanup and reduced-motion handling.
- Never animate the same property on the same element with multiple engines simultaneously.
- No animations on password error that distract from correcting the input.

---

## 9. BRAND-ACCURATE TECHNOLOGY LOGOS — NO FAKE ICONS

- Read `03_TECH_LOGOS_AND_ICONS.md` and implement a typed `TechLogo` registry with `slug`, `displayName`, `assetPath`, `source`, `attribution`, `status`.
- Prioritize **actual upstream vendor logos** where possible; Devicon original variants or Simple Icons recognized brand symbols when appropriate. Verify each asset and trademark policy; repo open-source license does not override brand owner's trademark rules.
- Languages/tools explicitly covered: HTML5, CSS3, JavaScript, TypeScript, Python, C, C++, C#, Java, Go, Rust, PHP, Ruby, Kotlin, Swift, Dart, R, Julia, SQL, MySQL, PostgreSQL, Redis, Node.js, Express, React, Next.js, Vue, Angular, Svelte, Bootstrap, Git, GitHub, Docker, Linux, Django, Flask, FastAPI, Laravel, Spring, .NET, Vercel, AWS, Azure, Google Cloud, TensorFlow, PyTorch, Flutter, Android, Unity, Unreal Engine, Figma, GSAP, etc., as offered in real catalog.
- For generic subjects with no real standalone brand (`SQL`, `Algorithms`, `Data Structures`, `Cybersecurity`, `Machine Learning Fundamentals`), use a clearly differentiated **topic pictogram**, not a fake official brand logo. Label subject accurately.
- Correct naming/capitalization: `JavaScript`, `TypeScript`, `Next.js`, `C++`, `C#`, `.NET`, `Node.js`, `PostgreSQL`.
- Verify all `src` paths via request or file existence; handle logos that have black-on-black or white-on-white variants.
- Logo in UI: typically 36–48px in consistent optically sized container; avoid changing original mark's proportions; descriptive text label mandatory.
- Do not substitute one tech logo for another to fill missing assets.

---

## 10. INTERNAL PAGES MUST FEEL LIKE ONE PRODUCT

### 10.1 Catalog & path discovery

`/courses` and `/paths`: real faceted search, categories and level filters, accessible filter drawers mobile, active filters removable, empty state, pagination, course-level brand marks, skeletons; do not show fake enrollments.

### 10.2 Learning interface

`/learn/*`: left desktop lesson tree 248px, text main max 72ch, right optional accessible mini outline only if room. Lesson header shows course/lesson, completion state, bookmark, Code Lab shortcut, previous/next. On mobile, lesson tree becomes accessible Offcanvas. Real code samples use JetBrains Mono dark code blocks; Try It requires working preview or explicit unsupported fallback. Student progress based on backend, not client-only fake completion.

### 10.3 Quest & achievement

`/quests`: distinguish `Available`, `In progress`, `Completed`, `Locked`; card's XP and rewards from server-defined quest spec. Progress animation occurs only after server-confirmed completion. Avoid over-gamified neon game visuals. Quest badge accent amber restrained. Real criteria and test feedback, not merely click-to-complete.

### 10.4 Playground / terminal

Editor/terminal dark navy panel, controls clearly labeled; preview in split panel, size adjustable only if robust. Keyboard and mobile fallback; warn if a language needs a runtime not yet implemented. No pretending to execute Python/C/CLI on unsecured Next backend. Guided terminal with actual virtual filesystem; full code execution requires isolated service.

### 10.5 User/admin profile and dashboards

Real usage data only. Use Bootstrap responsive cards, genuine chart axes from source values, tables with mobile overflow and correct empty state; share branding even when layouts differ. Admin permissions always checked server-side. Avoid over-animated analytics.

---

## 11. PAGE-BY-PAGE UI COMPOSITION SPECS

### Home `/`

**Sections:** see §5. Approx 10–14 meaningful sections max. On initial render prioritize heading/CTA/editor; lazy-load below-fold Lottie and low-priority visuals.

**Responsive:** 320–575px one column and 20px side gutters (min 16 at 320); 576–991px stacked or two-column balanced; 992+ split hero. CTA full-width at narrow widths if necessary. Menu and hero Lottie must not overflow viewport.

**Data cases:** guest, authenticated student, authenticated admin, empty catalog, seeded development-only content, API error, slow network.

### Login `/login`

**Header:** small mark and back link. **Hero content:** actual form is primary. Right Lottie must not conceal fields on 390px. **Field behavior:** show-password icon is actual button, focus visible, never triggers form submit. **Error:** live-region message and border; form preserves email on invalid login. **Redirect:** safe same-origin relative destinations only. **Security:** no account enumeration, no client secrets.

### Register `/register`

**Hero:** friendly but credible copy; optional 3 steps `Daftar → Pilih kelas → Coba kode` near the illustration. **Form:** name, email, password, confirmation, policy consent. **Validation:** server + instant client helper with no bogus strength claims. **Mobile:** tab/keyboard layout usable; terms and links not cut.

### Password reset / verification

Follow the same auth shell and context visuals without making users scroll past irrelevant marketing. Spinner/feedback must state what action is happening.

### Dashboard `/dashboard`

Greeting with user name, `Lanjutkan Belajar`, progress course cards, next quest, recent activity; use genuine data and appropriate empty state first-run. Avatar/user menu correctly shared with nav.

### Footer

Rich global footer on marketing/catalog/about/help pages. Minimal legal footer on auth; compact footer may be omitted for focused learning/admin layouts if navigation legal links provided in persistent shell.

---

## 12. INTERACTION, CONTENT, AND MOBILE POLISH

### Buttons/links

- One primary CTA per visual group. Avoid multiple competing blue buttons on adjacent cards.
- All buttons clickable with real result or explicit disabled/future state; no `href="#"` dead links.
- Links and buttons semantically correct; no clickable div without keyboard semantics.
- Loading states with readable text and disabled repeated submission.

### Forms

- Labels above fields; placeholders are examples, never sole labels.
- Error summaries, helper text, reliable keyboard tab order, show password.
- Password manager autocomplete standards; automatic focus where appropriate but not steal screen on mobile.
- Feedback layout reserves space to avoid jumpy shift.

### Menus/modals

- Focus trapping, Escape, click outside where appropriate, focus restoration, aria-expanded, arrow/Enter navigation in dropdown using tested libraries.
- Avoid having dropdown and mobile Offcanvas simultaneously open.

### Toasts/alerts

- Success/error copy brief and natural Indonesian. No confetti for normal CRUD saves; quest completion may use one-shot animation. Live regions (`aria-live`) meaningful and not spammy.

### Accessibility

- WCAG 2.2 AA aim: keyboard, focus, labels, contrast, semantic headings, reduced motion, min target sizes, screen reader-friendly SVG/Lottie, skip-to-content link.
- Decorative Lottie hidden from assistive tech; informative illustration has useful concise alt/fallback.
- Never place critical instructions solely in moving artwork.

### Performance

- Avoid large initial animation bundle; lazy-load below-fold Lottie and editor. Use 1–2 visible animations at a time. Prefer `.lottie` compressed, self-hosted, optimized.
- Prevent layout shift via fixed aspect ratio. Respect poor network/device motion preferences.
- Measure Core Web Vitals and set project-specific performance budgets from baseline, do not guarantee score 100 without test.

---

## 13. AUTH, STATE MANAGEMENT, SECURITY, AND QUALITY BOUNDARIES

- No UI-only fake authentication or arbitrary client role switch.
- Server-side session lookups and authorization; never trust client-provided `role`, `userId`, progress, or XP.
- Don't leak email, auth token, session or Redis secrets in client bundle, logs, screenshots.
- CSRF mitigations according to chosen auth approach and cookie settings, rate-limit sensitive endpoints, safe redirect validation, user enumeration protection, secure password storage, email verification flow if implemented.
- If auth/backend missing, implement reliable backend dependency first or flag a clear blocked state. Never fake it to make UI look finished.
- Keep UI types shared and avoid hydration mismatch between server and client auth state.
- Write regression tests for login/register/logout, guest/auth navbar, protected route, role navigation, and mobile drawer.

---

## 14. UI COMPONENT CONTRACT EXAMPLES

```ts
// Reference model only; adapt to existing application types.
type NavSessionState =
  | { status: 'resolving' }
  | { status: 'guest' }
  | { status: 'authenticated'; user: {
      id: string;
      displayName: string;
      avatarUrl?: string | null;
      role: 'student' | 'admin';
    } }
  | { status: 'error' };

type TechLogoEntry = {
  id: string;
  displayName: string;
  kind: 'vendor-mark' | 'topic-icon';
  path: string;
  sourceUrl: string;
  licenseOrBrandPolicyUrl?: string;
  verified: boolean;
};

type KodelumaAnimationEntry = {
  id: string;
  file: string;                // /animations/name.lottie
  assetPage: string;
  creator: string;
  licenseStatus: 'verified' | 'pending';
  alt?: string;
  loop: boolean;
  decorative: boolean;
};
```

Do not use these types to fake available content. Wire them to actual backend assets and types.

---

## 15. REQUIRED IMPLEMENTATION PHASES — KEEP PBL REALISTIC

### Phase 0 — Audit and contract (do first)

- Read documents/repo; inventory routes, assets, classes, auth/data status.
- Identify existing `LandingPage.tsx` in which nav historically uses `#kelas` anchors and has no auth-aware menu; turn it into a shared, route-aware header rather than copying its old limitations.
- Show screenshot or describe the present view truthfully if screenshots unavailable.
- No production features changed yet except minimal corrections needed for audit.

### Phase 1 — Visual foundation and actual Bootstrap

- Make design tokens coherent; ensure Bootstrap CSS and React Bootstrap usage; typography, buttons, cards, skeletons, layout, accessibility.
- Componentize site layout, header/footer, icon/logo layers; keep existing playground functioning.
- Verify responsive boundaries.

### Phase 2 — Auth UI + real session synchronization

- Shared auth layout, login/register (plus recovery scaffolding only if backend ready).
- Server session wiring, Redis, role-aware header, redirect, logout, protected routes.
- Test before and after login without refresh and direct navigation.

### Phase 3 — Landing overhaul + Lottie + brand logo gallery

- Hero composition, animation source curation/download/licensing, Lottie wrapper, exact logo registry, featured courses, feature blocks, CTA, premium footer.
- Preserve working sections and use real data/status.
- Tests, Lighthouse/web vitals checks where available.

### Phase 4 — Learning UI, Code Lab and course ecosystem

- Consistent course catalog/lesson/quests/dashboard templates, actual available Code Lab functionality, safe states and genuine modules including Python.
- Integrate with existing curriculum/quest docs, do not reimplement every course as static front-end arrays.

### Phase 5 — Comprehensive QA, document and release

- Per-route screenshots at mobile/tablet/desktop where browser available.
- Test all nav/auth states, lottie license and fallback, tech logo missing report, actual Bootstrap, a11y, performance.
- Production build and QA evidence.

---

## 16. DELIVERABLES EXPECTED FROM AI CODING AGENT

1. Initial audit report: `docs/UIUX_AUDIT_BEFORE.md` with existing features/bugs.
2. Updated or additive design spec `docs/UIUX_IMPLEMENTATION_NOTES.md` respecting locked `02_DESIGN.md`.
3. Components and route implementations (actual code changes) with small commits/steps where possible.
4. `docs/ANIMATION_ASSET_MANIFEST.md` with local asset paths, checked licenses and creators.
5. `docs/TECH_LOGO_MANIFEST.md` with each logo source and verification.
6. `docs/BOOTSTRAP_COMPLIANCE.md`: dependencies, imports, concrete components/classes/route evidence.
7. `docs/UIUX_QA_REPORT.md` containing responsive screenshots if tools permit, auth-state tests, accessibility notes, page checklists and limitations.
8. Final summary: changed files, new routes/components, working behavior, unsolved blockers, next phase instructions.

**Do not substitute a prose-only report for requested actual implementation.** Deliver the working code *and* docs. Conversely, when blocked by credentials/licensing/external service, document exact blocker and ship the honest functioning subset.

---

## 17. FINAL ACCEPTANCE CHECKLIST — MUST REPORT PASS/FAIL

- [ ] Brand tokens copied from locked design, without unapproved drift.
- [ ] **Bootstrap 5 stylesheet installed/imported and real grid/forms/components visible on all key routes**.
- [ ] React Bootstrap used correctly; no competing Bootstrap imperative JS on same DOM.
- [ ] Guest navbar shows `Masuk`/`Daftar Gratis`; auth navbar shows `Dashboard` + correct avatar/menu.
- [ ] Nav updates on login/logout/refresh/deep link/session expiry without private-content flash.
- [ ] Login form real, functional, accessible; errors/help states; safe redirect.
- [ ] Register form real, functional, accessible; server validation and secure user creation.
- [ ] Password reset links only marked working when backend service is wired.
- [ ] Landing hero coherent in both auth states and displays first Lottie with local verified asset.
- [ ] Login/register pages have fitting blue/navy Lottie or documented accessible fallback; no image broken.
- [ ] Rich footer responsive, actual links, brand/attribution included when necessary.
- [ ] **Original/verified brand logos** present for each offered technology; no generic icon substituted invisibly.
- [ ] Python course/track represented alongside other learning fields.
- [ ] No fake stats, testimonials, fake endorsements, fake login, fake scoring, dead buttons, placeholder href.
- [ ] Reduced-motion respected, animations paused when hidden where feasible.
- [ ] Tested at 320, 375/390, 768, 1024, 1440 widths and common browser workflows.
- [ ] Keyboard focus, form labels, alt semantics, contrast verified.
- [ ] `npm run typecheck`, lint, tests and production build execute successfully OR blockers explicitly reported.
- [ ] Secrets not exposed and server authorization enforced.
- [ ] Existing design, published courses, user progress, routes and Code Lab functionality not regressed.
- [ ] Final UI screenshots and actual Bootstrap evidence attached where tools allow.

---

## 18. REFERENCE LINKS (CHECK AGAIN WHEN IMPLEMENTING)

- Bootstrap 5 navbar: https://getbootstrap.com/docs/5.3/components/navbar/
- Bootstrap docs: https://getbootstrap.com/docs/5.3/
- React Bootstrap: https://react-bootstrap.github.io/
- dotLottie React: https://github.com/LottieFiles/dotlottie-web/tree/main/packages/react
- Next.js auth: https://nextjs.org/docs/app/guides/authentication
- Devicon original/colored marks: https://devicon.dev/ and https://github.com/devicons/devicon
- Simple Icons symbols: https://simpleicons.org/ and https://github.com/simple-icons/simple-icons
- LottieFiles community animations: https://lottiefiles.com/free-animations/coding
- LottieFiles license: https://lottiefiles.com/page/license
- Original branded website: https://azzamcodex.id

## 19. START NOW — INSTRUCTION TO AI

1. READ the entire project and this addendum.
2. AUDIT the existing UI, sessions, links, Bootstrap, assets, responsive layouts.
3. WRITE the smallest file-by-file implementation plan with phases.
4. IMPLEMENT Phase 1 first, preserving the current functioning landing and code playground.
5. Continue Phase 2 auth/nav with REAL Redis sessions; then Phase 3 Lottie/footer/logo improvements.
6. TEST after every phase and report concrete evidence, not generic claims.
7. **Do not ask me to manually reconstruct the design; use exact existing tokens and file references.** Ask only for genuinely missing secrets/access/decisions that block implementation; never invent a successful integration.

> **Non-negotiable final reminder: This is a Bootstrap PBL project. Next.js, React, GSAP, Motion, and Lottie enhance Bootstrap; they DO NOT replace Bootstrap.**


---

# PART II — VERIFIED LOTTIE SHORTLIST


# KODELUMA — VERIFIED LOTTIE ASSET SHORTLIST

**Purpose:** Save AI research time by supplying **specific asset DETAIL-PAGE URLs**. These are **not direct `.lottie` download links**. Open/preview/download the permitted asset and store it locally.  
**Date investigated:** 2026-10-15. **Status:** Detail pages verified by web search; no binary animation is included with this document.  
**Brand targets:** Kodeluma navy `#10243A`, blue `#2563EB`, pale blue `#EFF5FF`, amber accent `#F4B544`.

## A. Exact recommended shortlist (free animation DETAIL pages)

| Priority | Slot | Asset/creator | Specific verified page URL | Fit / notes |
|---|---|---|---|---|
| P0 | Landing hero primary | **Web Development**, Stephen John | https://lottiefiles.com/free-animation/web-development-PLVh6YzYVt | Description explicitly says shades of blue; small optimized dotLottie (~5.4 KB on page). **First candidate.** |
| P0 | Alternative hero / Code Lab | **Web Development Lottie Animation (JSON)**, Nadeem Javed | https://lottiefiles.com/free-animation/web-development-lottie-animation-json-gexPpGd0P0 | Described for website hero; dotLottie listed (~20.2 KB). Visually inspect color and quality. |
| P0 | Login illustration | **Password, Login Security**, Dariush Oskouie | https://lottiefiles.com/free-animation/password-login-security-Ibhcofs9QI | Login/password icon; small `.lottie` (~9.2 KB listed); must not become false security badge. |
| P0 | Login alternate | **Secure Login Icon Lottie Animation**, Nadeem Javed | https://lottiefiles.com/free-animation/secure-login-icon-lottie-animation-Mx8IQdwU48 | Creator says layers are recolorable. **Check actual theme/edit feature** before attempting recolor. |
| P0 | Register / learning panel | **Online Learning**, Flowrame | https://lottiefiles.com/free-animation/online-learning-DAoqvAAnJE | Learning/teacher/laptop imagery, small dotLottie (~48.5 KB), check palette. |
| P1 | Register alternate | **Online Learning Platform**, Tanveer Singh | https://lottiefiles.com/free-animation/online-learning-platform-1MDrpN06e2 | Intro for learning platform; small dotLottie (~8.8 KB). Visually verify for premium UI. |
| P1 | Beginner learning / empty state | **eLearning**, Hamidreza | https://lottiefiles.com/free-animation/elearning-SwqA7B0d5I | Small learning pictogram, suitable subtle onboarding/empty states. |
| P1 | Quest completion | **Successful check confetti**, design | https://lottiefiles.com/free-animation/successful-check-confetti-hALRy5AE2w | Success feedback; optimized dotLottie ~20.8 KB; should play once and stop. |
| P1 | Quest trophy alternate | **trophy confetti**, Priyanka | https://lottiefiles.com/free-animation/trophy-confetti-vKQ3ctAK2C | Celebration, optimized dotLottie ~7 KB, restrained use on confirmed quest reward. |
| P2 | Curriculum intro | **Online Learning**, Anum Zaidi | https://lottiefiles.com/free-animation/online-learning-m94BwivI01 | Online study; larger (~47.5 KB `.lottie` listed); prefer below fold. |
| P2 | Web course alternate | **Web Development**, Nilesh Sutariya | https://lottiefiles.com/free-animation/web-development-MIxjg2uRN5 | Website header image with development theme; compressed file listed ~17.1 KB. |

**Important:** Sizes shown were listed on pages when researched; downloaded files/optimized versions may differ. Color and motion quality have **not** been frame-inspected. The AI must inspect before selection. Never automatically install all 11 at once; start with 2–3 purpose-fit assets to limit JS/assets.

## B. Curated discovery collections

- Coding: https://lottiefiles.com/free-animations/coding
- Web Development: https://lottiefiles.com/free-animations/web-development
- Education: https://lottiefiles.com/free-animations/education
- Login: https://lottiefiles.com/free-animations/log-in

Only use these as discovery filters. **A collection URL is not a production Lottie file and is not proof any random result is free.**

## C. Page-level licensing and correct usage

- The individually listed asset detail pages above have been indexed as `Free to use under the Lottie Simple License` or as free assets at time of research. Review each specific page when actually downloading.
- LottieFiles distinguishes community animation licensing from subscription/creator-service Terms, which have additional restrictions. Do not assume every item or animation generated with free Creator plan permits every commercial use. Verify the use case with current Terms and asset-specific license at implementation time.
- License reference: https://lottiefiles.com/page/license
- Explanation: https://help.lottiefiles.com/animation-licensing-basics-
- General platform terms: https://lottiefiles.com/page/terms-and-conditions
- Community assets under the Lottie Simple License generally do not require attribution, although creator credit is encouraged. This is not blanket permission for premium, uploaded private, or differently licensed assets.
- Asset file names/links should not be bulk redistributed as standalone animation pack. Use in Kodeluma website according to asset-specific restrictions.

## D. Selection/scoring rubric

AI should score each asset (0–5) and record it in `docs/ANIMATION_ASSET_MANIFEST.md`:

| Dimension | Weight | Check |
|---|---:|---|
| Authentic Kodeluma palette | 30% | Navy/blue/white acceptable; amber rare |
| Relevance to learning/coding | 25% | IDE, web learning, tutorial, login |
| Visual sophistication | 15% | Clean, professional, minimal; no cartoon overload |
| Size/performance | 15% | Optimized `.lottie`, reasonable frame count |
| Clarity & contrast | 10% | Transparent/clean background; readable in auth/hero |
| Accessibility fallback | 5% | Sensible still frame / CSS alternative |

- Reject low-scoring and hard-to-recolor art; a blank placeholder with false claim is worse than a tasteful static in-product code illustration.
- Avoid browser-only auto-playing Lottie loaded through remote third-party URL when local hosting is possible.
- Preserve details: author, URL, checked license, file hash if downloaded, role/slot, color treatment, tested browsers, backup/fallback.

## E. Target local file map

```text
public/
  animations/
    hero-coding.lottie
    auth-login.lottie
    auth-learning.lottie
    quest-success.lottie
    lesson-complete.lottie        # optional only if separately sourced/verified
  brand/
    kodeluma-icon.png
    kodeluma-logo-horizontal.png
```

**Never create empty `.lottie` files and claim success.** `KodelumaLottie` should show a designed fallback if a local file is missing.

## F. Recommended integration notes

1. Install the official React player: `npm install @lottiefiles/dotlottie-react`.
2. Render in a client component (Next App Router). Follow current official guidance on SSR boundaries; test actual package behavior before enabling dynamic `ssr: false`.
3. Provide `prefers-reduced-motion` handling, first-frame/static illustration where appropriate.
4. Play offscreen only when necessary; respect `visibilitychange` and viewport, clean event listeners.
5. For auth pages, keep animations decorative and avoid critical information only in motion.
6. For quest success, trigger **only after server-confirmed completion**, one shot, no continuous looping.
7. Run network audit for 404, large transfers, CSP violations and unwanted cross-origin dependencies.

Official player repository and examples: https://github.com/LottieFiles/dotlottie-web

## G. Concrete JSON manifest template

```json
{
  "hero-coding": {
    "pageUrl": "https://lottiefiles.com/free-animation/web-development-PLVh6YzYVt",
    "creator": "Stephen John (page credits original thrivedesign)",
    "localPath": "/animations/hero-coding.lottie",
    "license": "PENDING_LOCAL_REVALIDATION",
    "paletteChecked": false,
    "binaryDownloaded": false,
    "reducedMotionFallback": "existing-editor-mockup"
  },
  "auth-login": {
    "pageUrl": "https://lottiefiles.com/free-animation/password-login-security-Ibhcofs9QI",
    "creator": "Dariush Oskouie",
    "localPath": "/animations/auth-login.lottie",
    "license": "PENDING_LOCAL_REVALIDATION",
    "paletteChecked": false,
    "binaryDownloaded": false,
    "reducedMotionFallback": "static-lock-and-code-illustration"
  }
}
```

The actual implementation must replace placeholder statuses only after verification.


---

# PART III — TECH LOGO & ICON REGISTRY


# KODELUMA — AUTHENTIC TECH LOGO REGISTRY & ANIMATED ICONS

**Goal:** Each displayed programming language/framework/database/cloud vendor uses its **recognizable, authentic brand mark** (subject to source and trademark policies), not a random code glyph. Generic topics use topic icons and must not be falsely labeled an official logo.

## 1. Trusted places to source marks

1. **Official vendor media/brand/press kit** when the vendor offers and permits use.
2. **Devicon**: https://devicon.dev/ and https://github.com/devicons/devicon — SVGs `original`, `plain`, `wordmark` versions, many in native colors. They document that marks remain property of their respective owners.
3. **Simple Icons**: https://simpleicons.org/ and https://github.com/simple-icons/simple-icons — brand SVG symbol library. Repository CC0 doesn't supersede trademark/brand usage restrictions.
4. **Lucide**: https://lucide.dev/ — neutral **UI iconography** for menu/search/lesson/terminal/check; **not** a replacement for identifiable brand logos.
5. **Lucide Motion** (already included in previous landing source): animated UI icons for controlled hover states, not official tech identities.

**DO NOT:** use PNG grabbed from unknown search-result thumbnails; copy logo with watermark; invent a vendor mark; use a Next.js logo to depict React; replace a missing Rust brand logo with a generic shield; distort native aspect ratios; choose a logo containing fake sponsorship/endorsement.

## 2. Primary Devicon filename candidates (verify actual existence before use)

Each candidate represents a likely Devicon repository SVG path. The AI **must verify** current availability and load images in browser; this table is a curated mapping, not proof every path/version is currently present.

Base asset URL pattern (example):

`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg`

**Production: Download verified SVGs to `public/tech/` and use local paths.** Do not hotlink all logos to a mutable `@latest` CDN. Follow project CSP/image rules and license records.

| Subject | Candidate SVG in `devicons/devicon` | Display |
|---|---|---|
| HTML5 | `icons/html5/html5-original.svg` | HTML |
| CSS3 | `icons/css3/css3-original.svg` | CSS |
| Sass | `icons/sass/sass-original.svg` | Sass |
| JavaScript | `icons/javascript/javascript-original.svg` | JavaScript |
| TypeScript | `icons/typescript/typescript-original.svg` | TypeScript |
| Python | `icons/python/python-original.svg` | Python |
| C | `icons/c/c-original.svg` | C |
| C++ | `icons/cplusplus/cplusplus-original.svg` | C++ |
| C# | `icons/csharp/csharp-original.svg` | C# |
| Java | `icons/java/java-original.svg` | Java |
| Go | `icons/go/go-original.svg` | Go |
| Rust | `icons/rust/rust-original.svg` | Rust |
| PHP | `icons/php/php-original.svg` | PHP |
| Ruby | `icons/ruby/ruby-original.svg` | Ruby |
| Kotlin | `icons/kotlin/kotlin-original.svg` | Kotlin |
| Swift | `icons/swift/swift-original.svg` | Swift |
| Dart | `icons/dart/dart-original.svg` | Dart |
| R | `icons/r/r-original.svg` | R |
| Julia | `icons/julia/julia-original.svg` | Julia |
| React | `icons/react/react-original.svg` | React |
| Next.js | `icons/nextjs/nextjs-original.svg` | Next.js; ensure contrast |
| Vue.js | `icons/vuejs/vuejs-original.svg` | Vue.js |
| Angular | `icons/angularjs/angularjs-original.svg` or vendor kit | Angular (verify version identity) |
| Svelte | `icons/svelte/svelte-original.svg` | Svelte |
| Node.js | `icons/nodejs/nodejs-original.svg` | Node.js |
| Express | `icons/express/express-original.svg` | Express (white/dark contrast care) |
| Bootstrap | `icons/bootstrap/bootstrap-original.svg` | Bootstrap |
| Django | `icons/django/django-plain.svg` | Django |
| Flask | `icons/flask/flask-original.svg` | Flask |
| FastAPI | `icons/fastapi/fastapi-original.svg` | FastAPI |
| Laravel | `icons/laravel/laravel-original.svg` | Laravel |
| Spring | `icons/spring/spring-original.svg` | Spring |
| .NET | `icons/dot-net/dot-net-original.svg` or vendor kit | .NET — check current naming & logo |
| Redis | `icons/redis/redis-original.svg` | Redis |
| MySQL | `icons/mysql/mysql-original.svg` | MySQL |
| PostgreSQL | `icons/postgresql/postgresql-original.svg` | PostgreSQL |
| MongoDB | `icons/mongodb/mongodb-original.svg` | MongoDB |
| SQLite | `icons/sqlite/sqlite-original.svg` | SQLite |
| Docker | `icons/docker/docker-original.svg` | Docker |
| Kubernetes | `icons/kubernetes/kubernetes-original.svg` | Kubernetes |
| Git | `icons/git/git-original.svg` | Git |
| GitHub | `icons/github/github-original.svg` | GitHub; contrast care |
| GitLab | `icons/gitlab/gitlab-original.svg` | GitLab |
| Linux | `icons/linux/linux-original.svg` | Linux |
| Bash | `icons/bash/bash-original.svg` | Bash |
| VS Code | `icons/vscode/vscode-original.svg` | Visual Studio Code |
| Vercel | `icons/vercel/vercel-original.svg` | Vercel; contrast care |
| AWS | `icons/amazonwebservices/amazonwebservices-original-wordmark.svg` | AWS; check latest corporate mark |
| Azure | `icons/azure/azure-original.svg` | Microsoft Azure |
| Google Cloud | `icons/googlecloud/googlecloud-original.svg` | Google Cloud |
| Flutter | `icons/flutter/flutter-original.svg` | Flutter |
| Android | `icons/android/android-original.svg` | Android |
| TensorFlow | `icons/tensorflow/tensorflow-original.svg` | TensorFlow |
| PyTorch | `icons/pytorch/pytorch-original.svg` | PyTorch |
| Unity | `icons/unity/unity-original.svg` | Unity; contrast care |
| Unreal Engine | `icons/unrealengine/unrealengine-original.svg` | Unreal Engine; contrast care |
| Figma | `icons/figma/figma-original.svg` | Figma |

### Additional special cases

- **GSAP, Motion, Upstash, Lucide**: Prefer current vendor-supplied marks or validated Simple Icons marks where available. Do not claim they exist in Devicon without verification.
- **SQL, algorithms, system design, OOP, APIs, networking, cybersecurity**: These are generic topics, not singular companies with official brand logos. Use Lucide pictograms: `database`, `workflow`, `network`, `braces`, `shield-check` and explicitly classify `kind: topic-icon`.
- **Tailwind**: May be part of course curriculum, but **not** part of Kodeluma UI implementation. Display its authentic course icon if a lesson is offered; framework use in content does not alter Bootstrap requirement.

## 3. Registry format / enforce all course cards use it

```ts
export type TechnologyVisual = {
  slug: string;
  name: string;
  kind: 'brand-logo' | 'topic-icon';
  localPath: string;
  source: string;
  policyUrl?: string;
  verifiedAt?: string;
  darkVariantPath?: string;
};

export const techVisuals: Record<string, TechnologyVisual> = {
  python: {
    slug: 'python', name: 'Python', kind: 'brand-logo',
    localPath: '/tech/python.svg',
    source: 'https://github.com/devicons/devicon',
  },
  algorithms: {
    slug: 'algorithms', name: 'Algorithms', kind: 'topic-icon',
    localPath: '/topics/algorithms.svg',
    source: 'https://lucide.dev/',
  },
};
```

Registry needs real verified files. Missing asset: use a clear accessible text tile and add log entry `MISSING_VERIFIED_BRAND_MARK`, NOT a visually false official mark.

## 4. Rendering rules

- Tech tile: `logo 40x40` within fixed 52x52 optical container, brand name next to or beneath, course count only if real.
- Dark on dark logos: use verified vendor white variant **or** light logo backing, not CSS `filter:invert()` that changes logo identity unpredictably.
- `alt="Logo Python"` if image identifies brand (otherwise `alt=""` if adjacent text is equivalent and image strictly decorative).
- Preload only first-fold logo assets; lazy load grids below fold; prefer local SVG and safe static imports.
- Avoid scripts from untrusted icon hosts in React. SVG safe-sanitize if user-supplied; treat icons as trusted build assets, not raw HTML from the database.
- Respect correct brand colors, proportion, whitespace, visible contrast, and minimum vendor-prescribed logo size where applicable.

## 5. Animated icons — different from brand marks

| Surface | Appropriate icon | Trigger |
|---|---|---|
| Navbar `Kelas` | book-open, Lucide | none/hover very subtle |
| `Code Lab` | terminal, Lucide Motion | hover |
| Quest card | target/check-circle | hover or quest completion |
| Feature card | book/rocket/layers | parent hover once |
| Button external link | arrow-up-right | tiny translate hover |
| Profile menu | user/settings/log-out | stable, no looping |

If using **Lordicon** free animated icons, vendor requires attribution and has restrictions. Use only when visual consistency improves and include credit in footer/credits. Official free-license pages:
https://lordicon.com/docs/license/free
https://lordicon.com/docs/license/attribution

**Recommended default:** Use Lucide + existing Lucide Motion already present; no need to add Lordicon unless there is a compelling design reason.

## 6. Required tech-logo verification report

For each displayed technology, record:

`slug | displayName | kind | source/vendor | upstream SVG path | downloaded local file | asset exists | browser renders | light/dark contrast | rights/policy checked`

At minimum verify Python, C, C++, Java, JavaScript, TypeScript, HTML5, CSS3, React, Next.js, Bootstrap, Git, Redis, Docker, PostgreSQL, Flutter and other *published* course tracks. Mark future courses as coming soon if not actually published. **Forbid fake logo placeholders disguised as a successful integration.**


---

# PART IV — UI/UX QA MATRIX


# KODELUMA — UI/UX & BOOTSTRAP QA MATRIX

**Testing discipline:** report `[PASS]`, `[FAIL]`, or `[BLOCKED]` with route, screenshot/test evidence, and fix. Never blanket claim 'tested' based solely on visual assumptions. If Playwright/browser unavailable, specify that limitation and supply manual steps.

## A. Cross-browser viewport matrix

| Width | Landing hero | Navbar | Login | Register | Footer | Tech logos |
|---:|---|---|---|---|---|---|
| 320 | no overflow, CTA visible | responsive toggle | form fits | policy fits | stacked | 2 cols or scroll safe |
| 375/390 | image below copy | offcanvas | one column | one column | stacked | 2 cols |
| 576 | balanced mobile | accessible toggle | form first | form first | stacked/2 col | 2–3 cols |
| 768 | responsive split or stack | compact | art smaller | art smaller | 2 cols | 3–4 cols |
| 1024 | split hero | desktop nav or compact | split | split | 4 cols | 4+ cols |
| 1440 | bounded 1200px | consistent spacing | spacious | spacious | 4 cols | 5–6 cols if fits |

Screenshot and test on Chrome plus at least one Firefox/WebKit browser if environment permits.

## B. Auth/session test table

| ID | Setup | Action | Expected outcome |
|---|---|---|---|
| AUTH-01 | Guest | Open `/` | Login/Register shown, no avatar/dashboard-only menu |
| AUTH-02 | Guest | Open `/login` | Functional form with label, password toggle, forgot/register links |
| AUTH-03 | Guest | Enter invalid input | Validation shows and does not send bad request unnecessarily |
| AUTH-04 | Guest | Submit wrong credentials | Non-enumerating error, email preserved, no login |
| AUTH-05 | Guest | Submit correct credentials | Server session created, cookie set, redirect safe, navbar flips to user without refresh |
| AUTH-06 | Auth student | Open `/` | Student avatar/dashboard displayed, not guest CTA |
| AUTH-07 | Auth admin | Open `/` | Admin route link only if authorized, not for student |
| AUTH-08 | Auth | Open `/login` | Redirect or sensible already-signed-in experience |
| AUTH-09 | Auth | Logout | Session revoked, authenticated UI disappears, protected pages blocked |
| AUTH-10 | Expired | Navigate private page | No private flash or stale protected data |
| AUTH-11 | Guest | Register valid account | Actual backend creation / verification flow; no fake success |
| AUTH-12 | Guest | Register duplicate email | Safe consistent error; no sensitive leak |
| AUTH-13 | Guest | Open `?returnTo=https://evil.example` | Open redirect blocked; safe internal fallback |
| AUTH-14 | Guest | Forgot password | Neutral confirmation only if actual email request accepted; no fake email sent |
| AUTH-15 | Any | Reload/direct route/back button | Auth state consistent with server |
| AUTH-16 | Any | Mobile menu/keyboard Esc/focus | Controlled focus, close on route change |
| AUTH-17 | Any | Slow network | Stable skeleton/placeholder with no wrong auth flash |
| AUTH-18 | Two tabs | Logout in one tab, focus other | Session revalidated; auth UI synchronized appropriately |

## C. Actual Bootstrap compliance — highest PBL priority

- [ ] `bootstrap` dependency present at intended version and CSS loaded **once** in root app layout.
- [ ] `react-bootstrap` present and used for at least **actual** interactive form and/or navbar/offcanvas/accordion/modal where applicable.
- [ ] Source audit shows `container`, `.row`, `col-*`, spacing utilities `g-*`, flex utilities, `.btn`, `.form-control`, responsive table classes.
- [ ] Inspect rendered DOM in browser, confirm computed Bootstrap stylesheet actually applies, not merely class strings without CSS.
- [ ] Color/spacing identities remain Kodeluma tokens.
- [ ] Native Bootstrap imperative JS is not duplicated on React-owned DOM.
- [ ] `docs/BOOTSTRAP_COMPLIANCE.md` lists component and route proofs.
- [ ] Show professor plausible examples in code/screenshots of Bootstrap applied to real responsive UI.

## D. Landing and footer

- [ ] Hero copy accurate with one prominent CTA and secondary CTA.
- [ ] Guest primary CTA → register; authenticated primary → real continue/dashboard.
- [ ] `Kelas`, `Paths`, `Code Lab`, `Quest`, `Tentang` links resolve appropriately.
- [ ] Course cards represent actual published/planned state, no fabricated popularity metrics.
- [ ] Tech brand marks render, crisp at 1x/2x, have text label; genuine Python and other language marks.
- [ ] Lottie src returns 200 with correct content, visually coherent, not overlapping hero.
- [ ] Lottie has reduced-motion fallback; no large default autoplay on slow network.
- [ ] Feature icons subtle, not all looping at once.
- [ ] Footer columns complete, links work, `by Azzam Codex` present, copyright year dynamic.
- [ ] No dead `href="#"` on production CTA/navigation.

## E. Authentication form visual/accessibility

- [ ] Form field visible labels and real input types/autocomplete.
- [ ] Password show button `type=button`, aria-label reflects visibility.
- [ ] Tab order logical; screen reader error announcement correct.
- [ ] Empty/error/loading/success states do not shift layout excessively.
- [ ] Register confirms password, checks terms according to real policy, server validates all.
- [ ] Email enumeration mitigations on login/reset.
- [ ] Password secrets never logged, persisted plaintext, or exposed in client bundle.
- [ ] 320px mobile with virtual keyboard does not obscure submit permanently.
- [ ] Lottie panel not positioned in front of text or interactive elements.

## F. Animation sources and licenses

- [ ] Each selected animation has valid local `.lottie` binary and copyright/license record.
- [ ] LottieFiles animation detail page verified **again** at time of download.
- [ ] No accidental premium asset or unsupported Creator-plan commercial use.
- [ ] Lordicon free icon attribution present if such icons were used.
- [ ] No unverified direct CDN link, no blank local `.lottie` placeholders.
- [ ] Browser loads all assets; low-memory/mobile fallback is acceptable.

## G. Branding and logos

- [ ] Wordmark proportion, dot and credit preserved.
- [ ] Heading/body/code fonts consistent.
- [ ] Source/logo manifest for all live course technologies, correct branding and contrast.
- [ ] Generic subjects use topic icons labeled as such; do not assert fake official logos.
- [ ] All displayed technology brand SVG paths exist and browser renders them.
- [ ] Vendor mark rules and third-party licenses reviewed.

## H. Engineering and regression

- [ ] `npm run typecheck` / `npx tsc --noEmit` passes where project config permits.
- [ ] `npm run lint` passes.
- [ ] Appropriate unit + integration + E2E tests pass.
- [ ] `npm run build` passes; no unintentional hydration warnings.
- [ ] Console no uncaught render errors; network no relevant 404.
- [ ] No secrets in build.
- [ ] No client-trusted role gates.
- [ ] No regressions to existing HTML playground, course links, or progress state.
- [ ] Docs accurate and screenshot evidence appended when possible.

## I. Final reporting example

```text
Component / Route: /login
Bootstrap evidence: Form, Container/Row/Col, button classes + import path
Auth states tested: guest, invalid, pending, success, expired
Lottie asset: /animations/auth-login.lottie — local existence + license URL checked
Viewport screenshots: 390 and 1440 (paths)
Result: PASS / FAIL / BLOCKED
Outstanding: ...
```

Don't use a generic `All tests passed` without actual test run outputs.
