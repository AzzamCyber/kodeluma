import React, { Suspense } from 'react';
import { AuthPageShell } from '@/components/auth/AuthPageShell';
import { LoginForm } from '@/components/auth/LoginForm';
import { LogoLoader } from '@/components/ui/LogoLoader';
import { redirectIfAuthenticated } from '@/lib/auth/guard';

export default async function LoginPage() {
  await redirectIfAuthenticated();

  return (
    <AuthPageShell variant="login">
      <Suspense fallback={<LogoLoader fullScreen={false} message="Menyiapkan halaman masuk..." size="sm" />}>
        <LoginForm />
      </Suspense>
    </AuthPageShell>
  );
}
