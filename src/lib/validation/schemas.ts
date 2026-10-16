import { z } from 'zod';

export const registerSchema = z.object({
  displayName: z
    .string()
    .trim()
    .min(2, { message: 'Nama tampilan minimal 2 karakter' })
    .max(80, { message: 'Nama tampilan maksimal 80 karakter' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Format alamat email tidak valid' })
    .toLowerCase(),
  password: z
    .string()
    .min(8, { message: 'Kata sandi minimal 8 karakter (disarankan 12+)' }),
});

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: 'Format alamat email tidak valid' })
    .toLowerCase(),
  password: z
    .string()
    .min(1, { message: 'Kata sandi wajib diisi' }),
});

export const courseSchema = z.object({
  title: z.string().trim().min(3).max(120),
  slug: z
    .string()
    .trim()
    .toLowerCase()
    .regex(/^[a-z0-9-]+$/, { message: 'Slug hanya boleh huruf kecil, angka, dan tanda hubung (-)' }),
  summary: z.string().trim().min(10).max(300),
  description: z.string().trim().min(20).max(5000),
  category: z.enum(['html', 'css', 'javascript', 'python', 'typescript', 'java', 'cplusplus', 'sql']),
  level: z.enum(['pemula', 'menengah']),
  status: z.enum(['draft', 'published', 'archived']).default('draft'),
  estimatedMinutes: z.coerce.number().min(5).max(1000),
  coverUrl: z
    .string()
    .optional()
    .transform((val) => (val && val.trim().length > 0 ? val.trim() : '/brand/kodeluma-icon.png')),
});

export const lessonSchema = z.object({
  title: z.string().trim().min(3).max(120),
  slug: z
    .string()
    .trim()
    .toLowerCase()
    .regex(/^[a-z0-9-]+$/, { message: 'Slug hanya boleh huruf kecil, angka, dan tanda hubung (-)' }),
  summary: z.string().trim().optional(),
  bodyMarkdown: z.string().min(20).max(50000),
  isRequired: z.boolean().default(true),
  order: z.coerce.number().min(1),
  status: z.enum(['draft', 'published']).default('published'),
});

export const quizSubmissionSchema = z.object({
  answers: z.array(
    z.object({
      questionId: z.string(),
      optionId: z.string(),
    })
  ),
});

export const projectSubmissionSchema = z.object({
  repoUrl: z
    .string()
    .trim()
    .url({ message: 'URL repositori tidak valid' })
    .regex(/^https:\/\//i, { message: 'URL harus menggunakan protokol HTTPS yang aman' })
    .max(2000),
  note: z.string().trim().min(5, { message: 'Catatan minimal 5 karakter' }).max(5000),
});

export const projectReviewSchema = z.object({
  status: z.enum(['approved', 'needs_revision']),
  feedback: z.string().trim().min(5, { message: 'Umpan balik wajib diisi' }).max(2000),
});

export const threadSchema = z.object({
  title: z.string().trim().min(10, { message: 'Judul topik minimal 10 karakter' }).max(140),
  body: z.string().trim().min(20, { message: 'Isi pertanyaan/diskusi minimal 20 karakter' }).max(10000),
  category: z.string().trim().min(2).max(40),
});

export const replySchema = z.object({
  body: z.string().trim().min(2, { message: 'Balasan minimal 2 karakter' }).max(5000),
});

export const moderationSchema = z.object({
  action: z.enum(['hide', 'unhide']),
  reason: z.string().trim().min(3, { message: 'Alasan moderasi wajib disertakan' }),
});
