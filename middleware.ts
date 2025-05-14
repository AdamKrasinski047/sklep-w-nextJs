import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher(['/', '/products(.*)', '/about']);
const isAdminRoot = createRouteMatcher(['/admin']); // tylko /admin
const isAdminSubRoute = createRouteMatcher(['/admin/(.*)']); // np. /admin/orders

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const isAdminUser = userId === process.env.ADMIN_USER_ID;
  if (isAdminSubRoute(req) && !isAdminUser) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (isAdminRoot(req)) {
    return NextResponse.next(); 
  }
  if (!isPublicRoute(req) && !userId) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
