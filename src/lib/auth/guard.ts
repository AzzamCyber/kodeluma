import 'server-only';
import { redirect } from 'next/navigation';
import { getCurrentUser } from './session';
import { User } from '@/types/domain';
import { LearningRepository } from '@/lib/repositories/learningRepository';

export async function requireUser(redirectTo: string = '/login'): Promise<User> {
  const user = await getCurrentUser();
  if (!user) {
    redirect(redirectTo);
  }
  return user;
}

export async function requireAdmin(): Promise<User> {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/login?returnTo=/admin');
  }
  if (user.role !== 'admin') {
    redirect('/dashboard?error=unauthorized');
  }
  return user;
}

export async function redirectIfAuthenticated(defaultRedirect: string = '/dashboard'): Promise<void> {
  const user = await getCurrentUser();
  if (user) {
    if (user.role === 'admin') {
      redirect('/admin');
    }
    redirect(defaultRedirect);
  }
}

export async function requireEnrollment(courseId: string): Promise<User> {
  const user = await requireUser();
  const enrolled = await LearningRepository.isEnrolled(user.id, courseId);
  if (!enrolled) {
    // Automatically enroll or redirect
    await LearningRepository.enroll(user.id, courseId);
  }
  return user;
}
