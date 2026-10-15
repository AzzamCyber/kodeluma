# API & SERVICE CONTRACTS — KODELUMA

> API publik menggunakan namespace `/api/v1`. Server Actions boleh membungkus service yang sama untuk form tertentu; **jangan menulis aturan bisnis duplikat di route dan action**. Tabel ini adalah kontrak rencana, belum berarti endpoint telah dibangun.

## 1. Envelope response
**Success** `200/201`: `{ "data": {...}, "error": null, "meta": { "requestId": "..." } }`
**Paginated**: `meta` tambah `{ page, limit, hasMore, total? }` (total hanya jika indexed counter tersedia).
**Failure** `4xx/5xx`: `{ "data": null, "error": { "code": "VALIDATION_ERROR", "message": "...", "fields": {...}? }, "meta": { "requestId": "..." } }`.
- 400 invalid payload; 401 unauthenticated; 403 unauthorized; 404 hidden/unfound; 409 conflicts; 422 semantic validation; 429 throttled; 500 unexpected.
- Jangan pernah serialize `passwordHash`, `session token`, `answerKey`, `adminNotes`, atau internal Redis key.

## 2. Routes
| Method | Path | Role | Fungsi | Minimal validasi |
|---|---|---|---|---|
| POST | `/api/v1/auth/register` | guest | create student & session | email valid unique; password >=12; displayName 2..80 |
| POST | `/api/v1/auth/login` | guest | create session | email/password; rate limited; generic bad credentials |
| POST | `/api/v1/auth/logout` | student/admin | revoke token | authenticated session |
| GET | `/api/v1/me` | student/admin | safe profile | no secret fields |
| PATCH | `/api/v1/me` | student/admin | update displayName | 2..80, server userId |
| GET | `/api/v1/courses` | public | published courses | q <= 80, category enum, level enum, page >=1, limit <=24 |
| GET | `/api/v1/courses/{slug}` | public | published course detail | slug normalized; no draft info |
| POST | `/api/v1/courses/{id}/enroll` | student | enroll current user | published; unique+idempotent |
| GET | `/api/v1/me/enrollments` | student | my active learning | paginated; privacy no-store |
| GET | `/api/v1/me/courses/{id}/progress` | student | computed server progress | enrolled only |
| POST | `/api/v1/lessons/{id}/complete` | student | complete lesson | lesson published, enrolled, curriculum snapshot |
| POST | `/api/v1/quizzes/{id}/attempts` | student | grade answers | max questions, no answer key leakage |
| GET | `/api/v1/projects` | public | published project listing | paginated, optional category |
| POST | `/api/v1/projects/{id}/submissions` | student | create/replace submission | `repoUrl` HTTPS <=2k, `note` <=5k |
| GET | `/api/v1/me/submissions` | student | my submissions | own only |
| GET | `/api/v1/forum/threads` | public | browse active forum | category, page, limit <=20 |
| POST | `/api/v1/forum/threads` | student | create thread | title 10..140, body 20..10000, category valid, rate limited |
| GET | `/api/v1/forum/threads/{id}` | public | thread replies | active only unless admin |
| POST | `/api/v1/forum/threads/{id}/replies` | student | post reply | body 2..5000, rate limited |
| GET | `/api/v1/me/certificates` | student | own certs | own only |
| POST | `/api/v1/courses/{id}/certificate` | student | issue eligible cert | server recalculates and enforces uniqueness |
| GET | `/api/v1/certificates/verify/{code}` | public | verification minimal | random opaque verify code; no email |
| GET | `/api/v1/certificates/{id}/pdf` | owner/admin | download printable PDF | access guard; revoked status handled |
| GET | `/api/v1/admin/overview` | admin | aggregate reports | numbers from Redis indexes |
| GET/POST | `/api/v1/admin/courses` | admin | list/create | schema & unique slug; audit |
| PATCH | `/api/v1/admin/courses/{id}` | admin | update/publish/archive | content version rules, slug uniqueness |
| POST/PATCH/DELETE | `/api/v1/admin/courses/{id}/lessons` | admin | manage lessons | no breaking ongoing snapshot |
| GET/POST | `/api/v1/admin/projects` | admin | list/create projects | validation |
| PATCH | `/api/v1/admin/projects/{id}` | admin | update project | require admin |
| GET | `/api/v1/admin/submissions` | admin | pending review | filter and pagination |
| PATCH | `/api/v1/admin/submissions/{id}` | admin | approve/request revision | strict state transitions |
| GET | `/api/v1/admin/users` | admin | users | paginated, limited fields |
| PATCH | `/api/v1/admin/users/{id}` | admin | suspend/reactivate | no disable last admin, revoke sessions |
| GET | `/api/v1/admin/progress` | admin | per learner/course progress | pagination, filter course/user |
| PATCH | `/api/v1/admin/forum/threads/{id}` | admin | hide/unhide | reason required for hide; audit |
| PATCH | `/api/v1/admin/forum/replies/{id}` | admin | hide/unhide | reason required; audit |
| PATCH | `/api/v1/admin/certificates/{id}` | admin | revoke | action= 'revoke', reason required |

## 3. Example endpoint contracts
### POST /api/v1/auth/register
Request:
```json
{"displayName":"Nadia","email":"nadia@example.test","password":"Use-A-Strong-Passphrase-123"}
```
Success `201`:
```json
{"data":{"user":{"id":"user-id","displayName":"Nadia","role":"student"}},"error":null,"meta":{"requestId":"req-id"}}
```
Cookie is set server-side. Duplicate email -> 409 *without account enumeration risk in public responses*, adjust error messages as needed for privacy.

### GET /api/v1/courses?page=1&limit=12&q=html
Success:
```json
{"data":{"items":[{"id":"course-id","slug":"html-dasar","title":"HTML Dasar","level":"pemula","estimatedMinutes":90,"coverUrl":"/courses/html.webp"}]},"error":null,"meta":{"requestId":"req-id","page":1,"limit":12,"hasMore":false}}
```

### POST /api/v1/lessons/{id}/complete
Success (first completion or repeat):
```json
{"data":{"lessonId":"lesson-id","alreadyCompleted":false,"completedRequired":2,"totalRequired":4,"percentage":50},"error":null,"meta":{"requestId":"req-id"}}
```
Repeat returns `alreadyCompleted:true`, same current computed %. Never accept `percentage` from client.

### POST /api/v1/quizzes/{id}/attempts
Request `{ "answers": [{"questionId":"q-1","optionId":"b"}] }`; response `{ "score": 80, "passed": true, "attempt": 2, "feedback": [...] }`. Grade on server; feedback can reveal correctness after submission per attempts policy, but initial GET quiz must not send correct answers.

### POST /api/v1/projects/{id}/submissions
Request `{ "repoUrl":"https://github.com/student/project", "note":"Halaman profil sudah responsif." }`; server stores student userId, projectId, pending status. Admin review state machine prevents arbitrary user approvals.

### POST /api/v1/courses/{id}/certificate
Possible 422: `CERTIFICATE_REQUIREMENTS_NOT_MET` including safe unmet items. Success 201 certificate `{id,verifyCode,issuedAt}`; duplicate returns existing record (200) and never new code.

## 4. Service boundary
| Service | Responsibilities |
|---|---|
| `authService` | register, authenticate, session create/delete, revoke, resolve current role |
| `courseService` | catalog, detail, authoring, publish validation, indexes |
| `learningService` | enrollment, required lesson snapshot, mark complete, compute progress |
| `quizService` | grade, attempts, score persistence, no client answer key |
| `projectService` | list, submit, review state transitions |
| `forumService` | thread/reply CRUD, moderation, anti-spam |
| `certificateService` | check eligibility, atomic issuance, verify, revoke, export |
| `reportService` | aggregates from indexes, server access guard |

## 5. Idempotency / race conditions
- Enrollment and marking lesson completed idempotent.
- Certificate unique issuance protected via Redis `SET NX` or script with consistency review.
- Publish/reorder changes respect curriculum version; update indexes atomically where possible.
- Retry network failures with backoff for safe read/idempotent actions; no blind retry after non-idempotent mutations unless client provides request idempotency key.
- Last-admin protection checked server-side and handled atomically to avoid competing admin suspension requests.

## 6. Inputs, limits, caching
- JSON request max practical size 64KB except intentional content editor (bounded server config).
- q search length <=80, course title <=120, lesson body <=50KB markdown, thread body <=10KB, reply <=5KB.
- Paginate all list endpoints; client sends no raw Redis key.
- Rate limits per IP on auth and per user on posting (sample thresholds set after load testing); respond 429.
- Public published courses can cache briefly with invalidation; user/admin personalized content no-store.

## 7. Testing examples
- Visitor `GET /api/v1/admin/overview` -> 401; student ->403; admin ->200.
- Create course -> published index absent in draft -> publish -> visible catalog; archive -> absent catalog.
- Double click complete lesson -> one counted completion.
- After refresh logout/login progress persisted.
- Student changing URL `uid` cannot read another student's report or submission.
- Forum XSS `<script>` remains inert/sanitized.
- User trying to create certificate early -> 422, no cert index.
