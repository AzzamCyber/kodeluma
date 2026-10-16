import 'server-only';
import { redis } from '@/lib/redis';
import { Certificate } from '@/types/domain';

export class CertificateRepository {
  private static certKey(id: string): string {
    return `kl:v1:cert:${id}`;
  }

  private static verifyCodeIndexKey(code: string): string {
    return `kl:v1:cert:verify:${code.toUpperCase().trim()}`;
  }

  private static userCourseIndexKey(userId: string, courseId: string, version: number = 1): string {
    return `kl:v1:cert:usercourse:${userId}:${courseId}:v${version}`;
  }

  private static userCertificatesIndex(userId: string): string {
    return `kl:v1:user:${userId}:certificates`;
  }

  static async issue(cert: Certificate): Promise<{ certificate: Certificate; alreadyIssued: boolean }> {
    const userCourseKey = this.userCourseIndexKey(cert.userId, cert.courseId, cert.curriculumVersion);
    const verifyKey = this.verifyCodeIndexKey(cert.verifyCode);

    // Atomic first-writer-wins check using SET NX
    const reserved = await redis.set(userCourseKey, cert.id, { nx: true });
    if (!reserved) {
      // Already issued, retrieve existing certificate ID
      const existingCertId = await redis.get<string>(userCourseKey);
      if (existingCertId) {
        const existingCert = await this.findById(existingCertId);
        if (existingCert) {
          return { certificate: existingCert, alreadyIssued: true };
        }
      }
    }

    try {
      // Store verify code mapping, cert record, and user index
      const score = new Date(cert.issuedAt).getTime();
      const pipeline = redis.pipeline();
      pipeline.set(this.certKey(cert.id), JSON.stringify(cert));
      pipeline.set(verifyKey, cert.id);
      pipeline.zadd(this.userCertificatesIndex(cert.userId), { score, member: cert.id });
      pipeline.incr('kl:v1:stats:total_certificates');
      await pipeline.exec();

      return { certificate: cert, alreadyIssued: false };
    } catch (err) {
      // Rollback userCourse reservation on failure
      await redis.del(userCourseKey);
      throw err;
    }
  }

  static async findById(id: string): Promise<Certificate | null> {
    const raw = await redis.get<string | Certificate>(this.certKey(id));
    if (!raw) return null;
    return typeof raw === 'string' ? JSON.parse(raw) : raw;
  }

  static async findByVerifyCode(code: string): Promise<Certificate | null> {
    const certId = await redis.get<string>(this.verifyCodeIndexKey(code));
    if (!certId) return null;
    return await this.findById(certId);
  }

  static async getUserCertificates(userId: string): Promise<Certificate[]> {
    const certIds = await redis.zrange<string[]>(this.userCertificatesIndex(userId), 0, -1, { rev: true });
    if (!certIds || certIds.length === 0) return [];

    const pipeline = redis.pipeline();
    for (const id of certIds) {
      pipeline.get(this.certKey(id));
    }
    const results = await pipeline.exec();

    const items: Certificate[] = [];
    for (const r of results) {
      if (r) {
        items.push(typeof r === 'string' ? JSON.parse(r) : (r as Certificate));
      }
    }
    return items;
  }

  static async revoke(certId: string, reason: string): Promise<Certificate> {
    const cert = await this.findById(certId);
    if (!cert) throw new Error('CERT_NOT_FOUND: Sertifikat tidak ditemukan.');

    const revoked: Certificate = {
      ...cert,
      revokedAt: new Date().toISOString(),
      revokeReason: reason,
    };

    await redis.set(this.certKey(certId), JSON.stringify(revoked));
    return revoked;
  }
}
