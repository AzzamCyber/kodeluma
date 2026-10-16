import 'server-only';
import { redis } from '@/lib/redis';
import { User } from '@/types/domain';

export class UserRepository {
  private static userKey(id: string): string {
    return `kl:v1:user:${id}`;
  }

  private static emailIndexKey(email: string): string {
    return `kl:v1:user:email:${email.toLowerCase().trim()}`;
  }

  private static readonly USERS_INDEX = 'kl:v1:users:created';

  static async create(user: User): Promise<User> {
    const emailKey = this.emailIndexKey(user.email);
    const userKey = this.userKey(user.id);

    // Reserve email atomically using SET NX
    const reserved = await redis.set(emailKey, user.id, { nx: true });
    if (!reserved) {
      throw new Error('EMAIL_EXISTS: Alamat email sudah terdaftar.');
    }

    try {
      // Store user record and add to sorted index
      const score = new Date(user.createdAt).getTime();
      const pipeline = redis.pipeline();
      pipeline.set(userKey, JSON.stringify(user));
      pipeline.zadd(this.USERS_INDEX, { score, member: user.id });
      pipeline.incr('kl:v1:stats:total_users');
      await pipeline.exec();

      return user;
    } catch (err) {
      // Compensating rollback for email reservation
      await redis.del(emailKey);
      throw err;
    }
  }

  static async findById(id: string): Promise<User | null> {
    const raw = await redis.get<string | User>(this.userKey(id));
    if (!raw) return null;
    return typeof raw === 'string' ? JSON.parse(raw) : raw;
  }

  static async findByEmail(email: string): Promise<User | null> {
    const userId = await redis.get<string>(this.emailIndexKey(email));
    if (!userId) return null;
    return await this.findById(userId);
  }

  static async list(page: number = 1, limit: number = 20): Promise<{ items: User[]; total: number }> {
    const total = await redis.zcard(this.USERS_INDEX);
    const start = (page - 1) * limit;
    const stop = start + limit - 1;

    // Latest created users first
    const userIds = await redis.zrange<string[]>(this.USERS_INDEX, start, stop, { rev: true });
    if (!userIds || userIds.length === 0) {
      return { items: [], total };
    }

    const pipeline = redis.pipeline();
    for (const uid of userIds) {
      pipeline.get(this.userKey(uid));
    }
    const results = await pipeline.exec();

    const items: User[] = [];
    for (const res of results) {
      if (res) {
        const u = typeof res === 'string' ? JSON.parse(res) : (res as User);
        // Exclude passwordHash from listing
        const { passwordHash: _passwordHash, ...safeUser } = u;
        items.push(safeUser as User);
      }
    }

    return { items, total };
  }

  static async updateStatus(id: string, status: 'active' | 'suspended'): Promise<User> {
    const user = await this.findById(id);
    if (!user) throw new Error('USER_NOT_FOUND: Pengguna tidak ditemukan');

    // Protect against suspending the last admin
    if (user.role === 'admin' && status === 'suspended') {
      const allUsers = await this.list(1, 100);
      const activeAdmins = allUsers.items.filter((u) => u.role === 'admin' && u.status === 'active');
      if (activeAdmins.length <= 1 && activeAdmins[0]?.id === id) {
        throw new Error('CANNOT_SUSPEND_LAST_ADMIN: Tidak dapat menonaktifkan admin terakhir dalam sistem.');
      }
    }

    const updatedUser: User = {
      ...user,
      status,
      updatedAt: new Date().toISOString(),
    };

    await redis.set(this.userKey(id), JSON.stringify(updatedUser));
    return updatedUser;
  }

  static async updateProfile(id: string, updates: { displayName?: string }): Promise<User> {
    const user = await this.findById(id);
    if (!user) throw new Error('USER_NOT_FOUND: Pengguna tidak ditemukan');

    const updatedUser: User = {
      ...user,
      displayName: updates.displayName?.trim() || user.displayName,
      updatedAt: new Date().toISOString(),
    };

    await redis.set(this.userKey(id), JSON.stringify(updatedUser));
    return updatedUser;
  }
}
