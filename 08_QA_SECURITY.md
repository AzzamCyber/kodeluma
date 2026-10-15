# QA, SECURITY & ACCESSIBILITY CHECKLIST

## Automated checks (run, do not assume)
```bash
npm run lint
npm run typecheck
npm run test
npm run build
npx playwright test
```
Add scripts to `package.json` before claiming these work. Tests should use isolated Redis prefix `kl:test:{runId}:...` or a test-only DB; **never** run destructive reset against production.

## Authentication & session
- [ ] Password hashed with Argon2id; no plaintext password saved/logged.
- [ ] Invalid credentials have safe generic response and throttling.
- [ ] Session cookie HttpOnly, Secure HTTPS prod, SameSite Lax/Strict, path /, TTL.
- [ ] Expired/logout/revoked sessions rejected server-side.
- [ ] Admin privileges checked on every server endpoint and action.
- [ ] Suspend student invalidates current sessions and future operations.
- [ ] First admin bootstrap secured; last admin cannot be suspended/deleted.
- [ ] Registration/login anti-enumeration policy reviewed.

## Injection/abuse/privacy
- [ ] All user-provided strings Zod bounded and sanitised before Markdown rendering.
- [ ] No user HTML/script executes in lessons/forum/submission.
- [ ] No code runner on server. Client preview sandbox tested for escape/network and CSP.
- [ ] Untrusted URLs only HTTPS, no `javascript:` / `data:` links.
- [ ] Secrets only server env; source control leak checked.
- [ ] Session fixation / CSRF origin checks verified.
- [ ] Rate limit login/register/forum posts and certificate issuance.
- [ ] Appropriate backup strategy and low-quota alert documented.
- [ ] Error responses never include traces or keys in prod.

## Redis integrity tests
- [ ] Concurrent registrations with same normalized email cannot create two linked users.
- [ ] Concurrent slugs and cert issuance enforce uniqueness.
- [ ] Course publish populates published index and archive removes it.
- [ ] Duplicate enroll and complete operations idempotent.
- [ ] No `KEYS *` on production routes; list queries bounded.
- [ ] No TTL set on academic progress, accounts, course content, certs.
- [ ] Index rebuild smoke test recovers seeded data in staging.

## Product UX test matrix
| Screen | 320px | 390px | 768px | 1024px | 1440px | Keyboard | Loading/Error |
|---|---|---|---|---|---|---|---|
| Landing | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Catalog | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Auth | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Dashboard | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Lesson | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Projects | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Forum | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Certificates | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Admin CRUD | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |

## E2E critical paths
1. Register -> login -> enroll -> mark complete -> refresh -> progress consistent -> logout.
2. Student `GET/PATCH /admin` and route handlers return 403; admin succeeds.
3. Admin draft new course -> add lessons -> publish -> show in public catalog -> archive disappears.
4. Student submits project -> admin approves -> certificate eligibility passes **only when all rules satisfied**.
5. Before eligibility certificate issuance returns 422; repeated issuance yields one stored certificate.
6. Student forum create/reply -> admin hides -> no public detail accessible.
7. Redis unavailable -> friendly recoverable error (no fabricated fallback content), server logs request ID.

## Accessibility checks
- [ ] AA contrast, text zoom 200%, no horizontal overflow.
- [ ] Focus always visible; skip-to-main; one H1; semantically labelled forms and controls.
- [ ] Keyboard opens/closes menus, accordions, modals; no focus trap outside modal.
- [ ] ARIA progress and error feedback actual numeric values.
- [ ] `prefers-reduced-motion: reduce` disables scroll/reveal motion.
- [ ] Touch target ideal >=44px; editor scrollable on mobile.

## Performance quality bar
Goals (verify with Lighthouse/Web Vitals, not guaranteed): LCP <=2.5s, CLS <=0.1, INP <=200ms where practical; initial JS bundle kept small; animation libs lazy-loaded; limit hero assets; no remote decorative video; cache public course data with controlled invalidation; no server-wide N+1 Redis per each UI card where pipelining/batching is possible.
