import 'server-only';
import { redis } from '@/lib/redis';
import { ForumThread, ForumReply } from '@/types/domain';

export class ForumRepository {
  private static threadKey(id: string): string {
    return `kl:v1:thread:${id}`;
  }

  private static replyKey(id: string): string {
    return `kl:v1:reply:${id}`;
  }

  private static readonly THREADS_RECENT = 'kl:v1:threads:recent';

  private static categoryThreadsIndex(category: string): string {
    return `kl:v1:forum:category:${category.toLowerCase().trim()}`;
  }

  private static threadRepliesIndex(threadId: string): string {
    return `kl:v1:thread:${threadId}:replies`;
  }

  static async createThread(thread: ForumThread): Promise<ForumThread> {
    const threadKey = this.threadKey(thread.id);
    const score = new Date(thread.createdAt).getTime();

    const pipeline = redis.pipeline();
    pipeline.set(threadKey, JSON.stringify(thread));
    pipeline.zadd(this.THREADS_RECENT, { score, member: thread.id });
    pipeline.zadd(this.categoryThreadsIndex(thread.category), { score, member: thread.id });
    pipeline.incr('kl:v1:stats:total_threads');
    await pipeline.exec();

    return thread;
  }

  static async findThreadById(id: string): Promise<ForumThread | null> {
    const raw = await redis.get<string | ForumThread>(this.threadKey(id));
    if (!raw) return null;
    return typeof raw === 'string' ? JSON.parse(raw) : raw;
  }

  static async listThreads(
    category: string = 'all',
    page: number = 1,
    limit: number = 20
  ): Promise<{ items: ForumThread[]; total: number }> {
    const indexKey = category === 'all' ? this.THREADS_RECENT : this.categoryThreadsIndex(category);
    const total = await redis.zcard(indexKey);
    const start = (page - 1) * limit;
    const stop = start + limit - 1;

    const threadIds = await redis.zrange<string[]>(indexKey, start, stop, { rev: true });
    if (!threadIds || threadIds.length === 0) {
      return { items: [], total };
    }

    const pipeline = redis.pipeline();
    for (const tid of threadIds) {
      pipeline.get(this.threadKey(tid));
    }
    const results = await pipeline.exec();

    const items: ForumThread[] = [];
    for (const r of results) {
      if (r) {
        items.push(typeof r === 'string' ? JSON.parse(r) : (r as ForumThread));
      }
    }

    return { items, total };
  }

  static async updateThreadStatus(id: string, status: 'active' | 'hidden'): Promise<ForumThread> {
    const thread = await this.findThreadById(id);
    if (!thread) throw new Error('THREAD_NOT_FOUND: Topik tidak ditemukan.');

    const updated: ForumThread = {
      ...thread,
      status,
      updatedAt: new Date().toISOString(),
    };

    await redis.set(this.threadKey(id), JSON.stringify(updated));
    return updated;
  }

  // --- Replies ---

  static async createReply(reply: ForumReply): Promise<ForumReply> {
    const replyKey = this.replyKey(reply.id);
    const score = new Date(reply.createdAt).getTime();

    const pipeline = redis.pipeline();
    pipeline.set(replyKey, JSON.stringify(reply));
    pipeline.zadd(this.threadRepliesIndex(reply.threadId), { score, member: reply.id });

    // Increment reply count on thread
    const thread = await this.findThreadById(reply.threadId);
    if (thread) {
      const updatedThread: ForumThread = {
        ...thread,
        repliesCount: (thread.repliesCount || 0) + 1,
        updatedAt: new Date().toISOString(),
      };
      pipeline.set(this.threadKey(thread.id), JSON.stringify(updatedThread));
    }

    await pipeline.exec();
    return reply;
  }

  static async listReplies(threadId: string): Promise<ForumReply[]> {
    const replyIds = await redis.zrange<string[]>(this.threadRepliesIndex(threadId), 0, -1);
    if (!replyIds || replyIds.length === 0) return [];

    const pipeline = redis.pipeline();
    for (const rid of replyIds) {
      pipeline.get(this.replyKey(rid));
    }
    const results = await pipeline.exec();

    const items: ForumReply[] = [];
    for (const r of results) {
      if (r) {
        items.push(typeof r === 'string' ? JSON.parse(r) : (r as ForumReply));
      }
    }
    return items;
  }
}
