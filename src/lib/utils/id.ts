import crypto from 'crypto';

export function generateId(prefix: string = ''): string {
  const random = crypto.randomBytes(12).toString('hex');
  return prefix ? `${prefix}_${random}` : random;
}

export function generateVerifyCode(): string {
  // Generate a distinct, readable 8-character uppercase alphanumeric code: e.g. KL-8X92M4P1
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = 'KL-';
  const bytes = crypto.randomBytes(8);
  for (let i = 0; i < 8; i++) {
    result += chars[bytes[i] % chars.length];
  }
  return result;
}

export function sha256(data: string): string {
  return crypto.createHash('sha256').update(data).digest('hex');
}
