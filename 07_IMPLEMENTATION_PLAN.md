# IMPLEMENTATION PLAN — MILESTONES & DELIVERABLES

## Strategy
Keep an MVP that can be fully demonstrated. All fancy scroll effects are **late-stage**; functionality and Bootstrap grading come first. Every task must have a test or screenshot. Status default TODO; update after actual work.

## Sprint 0 — Foundation
- [ ] Initialize Next.js + TypeScript strict + ESLint + App Router (`src/` directory).
- [ ] Install Bootstrap 5, React Bootstrap, lucide-react, motion, GSAP/@gsap-react, Upstash client, Zod, password hash, tests.
- [ ] Configure `global.css`, imported Bootstrap, `assets/design-tokens.css`, official PNG logo, 3 fonts, base UI.
- [ ] Setup route groups, error and not-found pages, public/student/admin layouts.
- [ ] Setup CI style scripts, env validation, README, folder/asset consistency.
- [ ] Render actual working responsive landing with 3 local courses placeholder **clearly as demo**, then move to Redis after Sprint 1.
**Done:** 360px and 1440px screenshots, Bootstrap classes in JSX, no lint/type errors.

## Sprint 1 — Redis & secure auth
- [ ] Upstash project config, server-only Redis client, Zod entity schemas, repository layer.
- [ ] Seed idempotent published courses, lessons, project briefs, quiz and forum categories.
- [ ] Registration: username/email and Argon2id password; proper unique email index.
- [ ] Login/logout + HttpOnly session cookie, hashed session tokens, Redis expiration.
- [ ] RBAC students/admin plus rate limits and basic audit log.
- [ ] Automated tests: duplicate signup, rejected login, session revoke, blocked admin access.
**Done:** create student, reload, login/out, admin guard.

## Sprint 2 — Learning experience
- [ ] Catalog query, filter/level, pagination; detail and curriculum.
- [ ] Course enroll idempotent; learner dashboard user-specific.
- [ ] Lesson Markdown player, next/previous, manually mark complete, server-computed progress.
- [ ] Quiz multiple choice with server-side grading + retry policy.
- [ ] Projects browse + submit link/text, needs_review state.
- [ ] Tests: duplicates, snapshot version, progress, quiz, project ownership.
**Done:** new user sees real progress after refresh and can submit one project.

## Sprint 3 — Community, certificate & admin
- [ ] Forum listing/create/reply/moderation.
- [ ] Admin courses/lessons/projects/users + publish control.
- [ ] Review projects and report course/student progress.
- [ ] Certificate eligibility rule, issuance with unique code, verify public, optional PDF.
- [ ] Tests: certificate before eligible blocked; after eligible issued once; admin RBAC; moderation.
**Done:** demonstration through 3 roles and certificate flow.

## Sprint 4 — Visual quality & deployment
- [ ] Final polish matched exactly to design system.
- [ ] Motion micro-animations; GSAP only selected landing sections; reduced motion fallback.
- [ ] Mobile QA: 320/390/768/1024/1440 width.
- [ ] Accessibility: labels, focus, keyboard, contrast, skip link, modals, live messages.
- [ ] Image optimizations, metadata, OpenGraph, caching; no fabricated testimonials/stats.
- [ ] Vercel deployment, Upstash prod env, domain DNS verification, HTTPS, smoke tests.
- [ ] Screenshots for report, PPT structure, final checklist and demo script.
**Done:** user/admin flows pass on deployed site; audit screenshots provided.

## Product demo script for PBL (7–10 minutes)
1. Open landing, explain product problem and Bootstrap implementation (1 min).
2. Browse catalog and course detail; show responsiveness on phone (1 min).
3. Login as student, enroll/continue lesson, complete and show progress (2 min).
4. Submit project, post forum message, display cert eligibility/verification (2 min).
5. Login as admin, create/edit course & project, see progress, moderate forum (2 min).
6. Show Next.js stack, Bootstrap classes, Redis data, online hosting, quick Q&A (1 min).

## Implementation risk priorities
**P0 blockers:** failed Redis env, unsafe auth, broken publish indexes, missing admin, broken responsive Bootstrap, public data leak.
**P1 gaps:** quiz retry edge, cert PDF layout, forum pagination, reduced motion.
**P2 nice-to-haves:** animation flourish, decorative illustration, dark mode.

## Team role suggestions (if group work)
- Frontend/design: tokens, components, responsive, public pages.
- Full-stack: Redis repositories, auth, course/progress services.
- Content/QA: material scripts, demo seed, testing, PBL PPT and DOCX.
Even when solo, keep these workstreams separate by commits.
