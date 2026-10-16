import 'server-only';
import { redis } from '@/lib/redis';
import { Project, ProjectSubmission } from '@/types/domain';

export class ProjectRepository {
  private static projectKey(id: string): string {
    return `kl:v1:project:${id}`;
  }

  private static slugIndexKey(slug: string): string {
    return `kl:v1:project:slug:${slug.toLowerCase().trim()}`;
  }

  private static submissionKey(userId: string, projectId: string): string {
    return `kl:v1:submission:${userId}:${projectId}`;
  }

  private static readonly PROJECTS_PUBLISHED = 'kl:v1:projects:published';
  private static readonly SUBMISSIONS_PENDING = 'kl:v1:submissions:pending';

  static async saveProject(project: Project): Promise<Project> {
    const slugKey = this.slugIndexKey(project.slug);
    const projKey = this.projectKey(project.id);

    const score = new Date(project.createdAt).getTime();
    const pipeline = redis.pipeline();
    pipeline.set(projKey, JSON.stringify(project));
    pipeline.set(slugKey, project.id);
    if (project.status === 'published') {
      pipeline.zadd(this.PROJECTS_PUBLISHED, { score, member: project.id });
    }
    await pipeline.exec();
    return project;
  }

  static async findProjectById(id: string): Promise<Project | null> {
    const raw = await redis.get<string | Project>(this.projectKey(id));
    if (!raw) return null;
    return typeof raw === 'string' ? JSON.parse(raw) : raw;
  }

  static async findProjectBySlug(slug: string): Promise<Project | null> {
    const id = await redis.get<string>(this.slugIndexKey(slug));
    if (!id) return null;
    return await this.findProjectById(id);
  }

  static async listPublishedProjects(): Promise<Project[]> {
    const ids = await redis.zrange<string[]>(this.PROJECTS_PUBLISHED, 0, -1, { rev: true });
    if (!ids || ids.length === 0) return [];

    const pipeline = redis.pipeline();
    for (const pid of ids) {
      pipeline.get(this.projectKey(pid));
    }
    const results = await pipeline.exec();

    const list: Project[] = [];
    for (const r of results) {
      if (r) {
        list.push(typeof r === 'string' ? JSON.parse(r) : (r as Project));
      }
    }
    return list;
  }

  // --- Submissions ---

  static async saveSubmission(sub: ProjectSubmission): Promise<ProjectSubmission> {
    const subKey = this.submissionKey(sub.userId, sub.projectId);
    const score = new Date(sub.submittedAt).getTime();

    const pipeline = redis.pipeline();
    pipeline.set(subKey, JSON.stringify(sub));

    if (sub.status === 'submitted') {
      // Add to pending review index
      pipeline.zadd(this.SUBMISSIONS_PENDING, { score, member: `${sub.userId}:${sub.projectId}` });
    } else {
      pipeline.zrem(this.SUBMISSIONS_PENDING, `${sub.userId}:${sub.projectId}`);
    }

    await pipeline.exec();
    return sub;
  }

  static async findSubmission(userId: string, projectId: string): Promise<ProjectSubmission | null> {
    const subKey = this.submissionKey(userId, projectId);
    const raw = await redis.get<string | ProjectSubmission>(subKey);
    if (!raw) return null;
    return typeof raw === 'string' ? JSON.parse(raw) : raw;
  }

  static async listPendingSubmissions(): Promise<ProjectSubmission[]> {
    const members = await redis.zrange<string[]>(this.SUBMISSIONS_PENDING, 0, -1);
    if (!members || members.length === 0) return [];

    const pipeline = redis.pipeline();
    for (const member of members) {
      const [uid, pid] = member.split(':');
      pipeline.get(this.submissionKey(uid, pid));
    }
    const results = await pipeline.exec();

    const list: ProjectSubmission[] = [];
    for (const r of results) {
      if (r) {
        list.push(typeof r === 'string' ? JSON.parse(r) : (r as ProjectSubmission));
      }
    }
    return list;
  }
}
