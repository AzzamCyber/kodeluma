import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth/session';
import { CertificateService } from '@/lib/services/certificateService';
import { generateId } from '@/lib/utils/id';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const requestId = generateId('req');
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json(
      { data: null, error: { code: 'UNAUTHORIZED', message: 'Silakan masuk terlebih dahulu.' }, meta: { requestId } },
      { status: 401 }
    );
  }

  const { id: courseId } = await params;
  try {
    const cert = await CertificateService.issueCertificate(user.id, courseId);
    return NextResponse.json({ data: { certificate: cert }, error: null, meta: { requestId } }, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Terjadi kesalahan sistem';
    const isRequirement = message.includes('REQUIREMENTS_NOT_MET');
    return NextResponse.json(
      {
        data: null,
        error: {
          code: isRequirement ? 'REQUIREMENTS_NOT_MET' : 'ISSUANCE_ERROR',
          message,
        },
        meta: { requestId },
      },
      { status: isRequirement ? 422 : 400 }
    );
  }
}
