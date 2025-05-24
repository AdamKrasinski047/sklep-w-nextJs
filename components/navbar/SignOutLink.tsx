import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/products(.*)',
  '/about',
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  if (!isPublicRoute(req) && !userId) {
    // Użytkownik nie jest zalogowany i nie jest na stronie publicznej
    return NextResponse.redirect(new URL('/sign-in', req.url));
  }
  // Jeśli zalogowany albo publiczna ścieżka → kontynuuj
  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
