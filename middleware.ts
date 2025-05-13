import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher(['/', '/products(.*)', '/about']);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    const authResult = await auth();
    if (!authResult.sessionId) {
      throw new Error('Unauthorized access');
    }
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
