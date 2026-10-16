import 'server-only';
import { UserRepository } from '@/lib/repositories/userRepository';
import { createSession, clearSession } from '@/lib/auth/session';
import { hashPassword, verifyPassword } from '@/lib/utils/crypto';
import { generateId } from '@/lib/utils/id';
import { registerSchema, loginSchema } from '@/lib/validation/schemas';
import { User } from '@/types/domain';

export class AuthService {
  static async register(input: {
    displayName: string;
    email: string;
    password: string;
  }): Promise<{ user: User }> {
    const validated = registerSchema.parse(input);

    const existing = await UserRepository.findByEmail(validated.email);
    if (existing) {
      throw new Error('EMAIL_EXISTS: Alamat email sudah terdaftar. Silakan masuk.');
    }

    const passwordHash = await hashPassword(validated.password);
    const userId = generateId('usr');

    const newUser: User = {
      id: userId,
      displayName: validated.displayName,
      email: validated.email,
      passwordHash,
      role: 'student',
      status: 'active',
      createdAt: new Date().toISOString(),
    };

    const savedUser = await UserRepository.create(newUser);
    await createSession(savedUser.id, savedUser.role);

    const { passwordHash: _, ...safeUser } = savedUser;
    return { user: safeUser as User };
  }

  static async login(input: {
    email: string;
    password: string;
  }): Promise<{ user: User }> {
    const validated = loginSchema.parse(input);

    const user = await UserRepository.findByEmail(validated.email);
    if (!user || !user.passwordHash) {
      // Generic invalid credentials to prevent enumeration
      throw new Error('INVALID_CREDENTIALS: Email atau kata sandi tidak cocok.');
    }

    if (user.status === 'suspended') {
      throw new Error('ACCOUNT_SUSPENDED: Akun Anda sedang dinonaktifkan oleh administrator.');
    }

    const isValid = await verifyPassword(validated.password, user.passwordHash);
    if (!isValid) {
      throw new Error('INVALID_CREDENTIALS: Email atau kata sandi tidak cocok.');
    }

    await createSession(user.id, user.role);

    const { passwordHash: _, ...safeUser } = user;
    return { user: safeUser as User };
  }

  static async logout(): Promise<void> {
    await clearSession();
  }
}
