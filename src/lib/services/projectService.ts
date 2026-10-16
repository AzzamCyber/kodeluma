import 'server-only';
import { ProjectRepository } from '@/lib/repositories/projectRepository';
import { UserRepository } from '@/lib/repositories/userRepository';
import { ProjectSubmission } from '@/types/domain';
import { generateId } from '@/lib/utils/id';
import { projectSubmissionSchema, projectReviewSchema } from '@/lib/validation/schemas';

export class ProjectService {
  static async submit(
    userId: string,
    projectId: string,
    data: { repoUrl: string; note: string }
  ): Promise<ProjectSubmission> {
    const validated = projectSubmissionSchema.parse(data);

    const project = await ProjectRepository.findProjectById(projectId);
    if (!project || project.status !== 'published') {
      throw new Error('PROJECT_NOT_FOUND: Proyek tidak ditemukan atau belum dipublikasikan.');
    }

    const user = await UserRepository.findById(userId);

    const submission: ProjectSubmission = {
      id: generateId('sub'),
      userId,
      userDisplayName: user?.displayName || 'Pelajar',
      projectId,
      projectTitle: project.title,
      repoUrl: validated.repoUrl,
      note: validated.note,
      status: 'submitted',
      submittedAt: new Date().toISOString(),
    };

    return await ProjectRepository.saveSubmission(submission);
  }

  static async review(
    adminId: string,
    userId: string,
    projectId: string,
    data: { status: 'approved' | 'needs_revision'; feedback: string }
  ): Promise<ProjectSubmission> {
    const validated = projectReviewSchema.parse(data);

    const existing = await ProjectRepository.findSubmission(userId, projectId);
    if (!existing) {
      throw new Error('SUBMISSION_NOT_FOUND: Pengumpulan proyek tidak ditemukan.');
    }

    const updated: ProjectSubmission = {
      ...existing,
      status: validated.status,
      feedback: validated.feedback,
      reviewedAt: new Date().toISOString(),
      reviewedBy: adminId,
    };

    return await ProjectRepository.saveSubmission(updated);
  }

  static async getSubmission(userId: string, projectId: string): Promise<ProjectSubmission | null> {
    return await ProjectRepository.findSubmission(userId, projectId);
  }

  static async listPending(): Promise<ProjectSubmission[]> {
    return await ProjectRepository.listPendingSubmissions();
  }
}
