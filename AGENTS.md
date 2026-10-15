# AGENTS.md — KODELUMA PROJECT GOVERNANCE

## Absolute rules
1. Read `01_MASTER_PROMPT.md`, `02_DESIGN.md`, `03_PRD_FEATURES.md`, `04_ARCHITECTURE_REDIS.md` **before writing implementation**.
2. **Never invent UI styling**: tokens, spacing, border, animation rules are locked. Update tokens intentionally first.
3. **Bootstrap is mandatory**, verify actual Bootstrap classes and components. Do not replace with Tailwind or alternative UI framework.
4. **Redis is sole MVP datastore**, accessed only server-side. Next.js is backend. Never silently add SQL, Prisma, Firebase.
5. Prioritize PBL rubric over animations and optional features. Functional user+admin before visual enhancements.
6. **No placeholder functionality**: if control has an action affordance it must work. Disable and explain unimplemented items or omit them.
7. No mock statistics displayed as real, fake testimonials, false accreditation, or fabricated successful tests.
8. No server execution of untrusted code; no raw user HTML.
9. Sanitize and validate user input, authorize every mutation and backend endpoint, hide secrets in env only.
10. Keep data indexes/transactions and Redis TTL contract: permanent academic data stays permanent.
11. No emoji icons in UI; Lucide outline icons only. No cyber/neon, thick glows, heavy blobs or excessive glass effects.
12. Motion/GSAP may not own the same animated property on the same element. Honor reduced motion.
13. Prefer simple, explicit, readable TypeScript with strict types. No `any` without justified comment.
14. Reuse UI components; don't hand-write slightly different button/card/input copies per route.
15. Do not delete existing working screens, code, tests, content or styles without explaining migration.
16. Perform code changes in incremental verifiable phases; summarize changed files and tested commands after each phase.
17. Fail transparently for Redis outages, errors, missing env, incomplete domain/deploy; never fake success.
18. If scope unclear, choose least complex interpretation that meets the PBL rubric, document it, and proceed.
19. Keep learner/admin data private. Never include keys, tokens, or passwords in responses/screenshots/logs.
20. Ensure full accessibility and functional responsive layout before moving to final polish.

## PR template
- Scope / requirement ID:
- Files changed:
- Design tokens/components reused:
- Redis keys/indexes touched:
- Security/RBAC considerations:
- Test command + real result:
- Screenshots / mobile widths:
- Known gaps:
