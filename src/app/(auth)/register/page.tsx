import React, { Suspense } from 'react';
import { AuthPageShell } from '@/components/auth/AuthPageShell';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { LogoLoader } from '@/components/ui/LogoLoader';
import { redirectIfAuthenticated } from '@/lib/auth/guard';

export default async function RegisterPage() {
  await redirectIfAuthenticated();

  return (
    <AuthPageShell variant="register">
      <Suspense fallback={<LogoLoader fullScreen={false} message="Menyiapkan halaman pendaftaran..." size="sm" />}>
        <RegisterForm />
      </Suspense>
    </AuthPageShell>
  );
}
