export type Role = 'student' | 'admin';
export type UserStatus = 'active' | 'suspended';
export type PublishStatus = 'draft' | 'published' | 'archived';
export type CourseLevel = 'pemula' | 'menengah';
export type CourseCategory = 'html' | 'css' | 'javascript' | 'python';
export type SubmissionStatus = 'draft' | 'submitted' | 'needs_revision' | 'approved';

export interface User {
  id: string;
  displayName: string;
  email: string;
  passwordHash?: string;
  role: Role;
  status: UserStatus;
  createdAt: string;
  updatedAt?: string;
}

export interface Session {
  id: string;
  tokenHash: string;
  userId: string;
  role: Role;
  expiresAt: string;
  createdAt: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: CourseCategory;
  level: CourseLevel;
  status: PublishStatus;
  curriculumVersion: number;
  estimatedMinutes: number;
  coverUrl: string;
  lessonsCount?: number;
  createdAt: string;
  updatedAt: string;
}

export interface Lesson {
  id: string;
  courseId: string;
  slug: string;
  title: string;
  summary?: string;
  bodyMarkdown: string;
  isRequired: boolean;
  status: PublishStatus;
  order: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Enrollment {
  userId: string;
  courseId: string;
  curriculumVersion: number;
  enrolledAt: string;
  status: 'active' | 'completed';
}

export interface ProgressSummary {
  courseId: string;
  completedLessons: string[];
  completedCount: number;
  totalRequired: number;
  percentage: number;
  isEligibleForCertificate: boolean;
}

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation?: string;
}

export interface Quiz {
  id: string;
  courseId: string;
  title: string;
  passScorePercent: number;
  questions: QuizQuestion[];
}

export interface QuizAttempt {
  userId: string;
  courseId: string;
  score: number;
  passed: boolean;
  attemptsCount: number;
  updatedAt: string;
}

export interface Project {
  id: string;
  slug: string;
  courseId: string;
  title: string;
  summary: string;
  brief: string;
  requirements: string[];
  difficulty: CourseLevel;
  status: PublishStatus;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectSubmission {
  id: string;
  userId: string;
  userDisplayName?: string;
  projectId: string;
  projectTitle?: string;
  repoUrl: string;
  note: string;
  status: SubmissionStatus;
  feedback?: string;
  submittedAt: string;
  reviewedAt?: string;
  reviewedBy?: string;
}

export interface ForumCategory {
  slug: string;
  name: string;
  description: string;
}

export interface ForumThread {
  id: string;
  authorId: string;
  authorName: string;
  title: string;
  body: string;
  category: string;
  status: 'active' | 'hidden';
  repliesCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface ForumReply {
  id: string;
  threadId: string;
  authorId: string;
  authorName: string;
  body: string;
  status: 'active' | 'hidden';
  createdAt: string;
}

export interface Certificate {
  id: string;
  verifyCode: string;
  userId: string;
  courseId: string;
  curriculumVersion: number;
  recipientName: string;
  courseTitle: string;
  issuedAt: string;
  revokedAt: string | null;
  revokeReason?: string;
}

export interface AdminStats {
  totalUsers: number;
  totalStudents: number;
  totalCoursesPublished: number;
  totalEnrollments: number;
  totalCompletions: number;
  pendingSubmissionsCount: number;
}
