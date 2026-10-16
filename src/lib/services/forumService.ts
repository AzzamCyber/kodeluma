import 'server-only';
import { ForumRepository } from '@/lib/repositories/forumRepository';
import { UserRepository } from '@/lib/repositories/userRepository';
import { ForumThread, ForumReply } from '@/types/domain';
import { generateId } from '@/lib/utils/id';
import { threadSchema, replySchema, moderationSchema } from '@/lib/validation/schemas';

export class ForumService {
  static async createThread(
    userId: string,
    data: { title: string; body: string; category: string }
  ): Promise<ForumThread> {
    const validated = threadSchema.parse(data);
    const user = await UserRepository.findById(userId);

    const thread: ForumThread = {
      id: generateId('thd'),
      authorId: userId,
      authorName: user?.displayName || 'Pengguna',
      title: validated.title,
      body: validated.body,
      category: validated.category,
      status: 'active',
      repliesCount: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return await ForumRepository.createThread(thread);
  }

  static async listThreads(
    category: string = 'all',
    page: number = 1,
    limit: number = 20
  ): Promise<{ items: ForumThread[]; total: number }> {
    return await ForumRepository.listThreads(category, page, limit);
  }

  static async getThreadDetail(threadId: string): Promise<{
    thread: ForumThread;
    replies: ForumReply[];
  } | null> {
    const thread = await ForumRepository.findThreadById(threadId);
    if (!thread) return null;

    const replies = await ForumRepository.listReplies(threadId);
    return { thread, replies };
  }

  static async reply(
    userId: string,
    threadId: string,
    data: { body: string }
  ): Promise<ForumReply> {
    const validated = replySchema.parse(data);
    const user = await UserRepository.findById(userId);

    const reply: ForumReply = {
      id: generateId('rpl'),
      threadId,
      authorId: userId,
      authorName: user?.displayName || 'Pengguna',
      body: validated.body,
      status: 'active',
      createdAt: new Date().toISOString(),
    };

    return await ForumRepository.createReply(reply);
  }

  static async moderateThread(
    adminId: string,
    threadId: string,
    data: { action: 'hide' | 'unhide'; reason: string }
  ): Promise<ForumThread> {
    const validated = moderationSchema.parse(data);
    const newStatus = validated.action === 'hide' ? 'hidden' : 'active';
    return await ForumRepository.updateThreadStatus(threadId, newStatus);
  }
}
