import { hash, verify } from '@node-rs/argon2';

export async function hashPassword(plainText: string): Promise<string> {
  return await hash(plainText, {
    memoryCost: 19456, // 19 MiB
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });
}

export async function verifyPassword(plainText: string, passwordHash: string): Promise<boolean> {
  try {
    return await verify(passwordHash, plainText);
  } catch (err) {
    console.error('Password verification error:', err);
    return false;
  }
}
