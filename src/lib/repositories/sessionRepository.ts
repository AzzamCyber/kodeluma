import 'server-only';
import { redis } from '@/lib/redis';
import { Session, Role } from '@/types/domain';
import { sha256 } from '@/lib/utils/id';

export class SessionRepository {
  private static readonly TTL_SECONDS = 7 * 24 * 60 * 60; // 7 days

  private static sessionKey(tokenHash: string): string {
    return `kl:v1:session:${tokenHash}`;
  }

  static async create(token: string, userId: string, role: Role): Promise<Session> {
    const tokenHash = sha256(token);
    const now = new Date();
    const expiresAt = new Date(now.getTime() + this.TTL_SECONDS * 1000).toISOString();

    const session: Session = {
      id: tokenHash,
      tokenHash,
      userId,
      role,
      expiresAt,
      createdAt: now.toISOString(),
    };

    await redis.set(
      this.sessionKey(tokenHash),
      JSON.stringify(session),
      { ex: this.TTL_SECONDS }
    );

    return session;
  }

  static async findByToken(token: string): Promise<Session | null> {
    const tokenHash = sha256(token);
    const raw = await redis.get<string | Session>(this.sessionKey(tokenHash));
    if (!raw) return null;
    return typeof raw === 'string' ? JSON.parse(raw) : raw;
  }

  static async revoke(token: string): Promise<void> {
    const tokenHash = sha256(token);
    await redis.del(this.sessionKey(tokenHash));
  }
}
