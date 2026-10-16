async function testAuthGuard() {
  console.log('--- Testing Next.js Auth Middleware & Guard ---');

  // Test 1: Unauthenticated request to /login should return 200 (allowed)
  const resLoginUnauth = await fetch('http://localhost:3000/login', { redirect: 'manual' });
  console.log('1. Unauth GET /login status (expected 200):', resLoginUnauth.status);

  // Test 2: Authenticated request to /login should redirect to /dashboard (307)
  const resLoginAuth = await fetch('http://localhost:3000/login', {
    headers: { Cookie: 'kodeluma_session=mock_active_session_token' },
    redirect: 'manual',
  });
  console.log('2. Auth GET /login status (expected 307):', resLoginAuth.status);
  console.log('   Location header:', resLoginAuth.headers.get('location'));

  // Test 3: Authenticated request to /register should redirect to /dashboard (307)
  const resRegAuth = await fetch('http://localhost:3000/register', {
    headers: { Cookie: 'kodeluma_session=mock_active_session_token' },
    redirect: 'manual',
  });
  console.log('3. Auth GET /register status (expected 307):', resRegAuth.status);
  console.log('   Location header:', resRegAuth.headers.get('location'));

  // Test 4: Unauthenticated request to /dashboard should redirect to /login (307)
  const resDashUnauth = await fetch('http://localhost:3000/dashboard', { redirect: 'manual' });
  console.log('4. Unauth GET /dashboard status (expected 307):', resDashUnauth.status);
  console.log('   Location header:', resDashUnauth.headers.get('location'));

  // Test 5: Unauthenticated request to /admin should redirect to /login (307)
  const resAdminUnauth = await fetch('http://localhost:3000/admin', { redirect: 'manual' });
  console.log('5. Unauth GET /admin status (expected 307):', resAdminUnauth.status);
  console.log('   Location header:', resAdminUnauth.headers.get('location'));
}

testAuthGuard().catch(console.error);
