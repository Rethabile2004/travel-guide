// programmer: rethabile eric siase
// github.com/rethabile2004

// middleware :)
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse, type NextRequest } from 'next/server'; 

const isPublicRoute = createRouteMatcher([
  '/',
  '/destinations(.*)',
  '/guides',
  '/privacy',
  '/contact',
  '/terms/privacy',
  '/about',
]);// defines all the routes a user who has not logged in can access

const isAdminRoute = createRouteMatcher([
  '/admin(.*)'
]); // defines the admin routes

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const uid = (await auth()).userId
  
  if (isAdminRoute(req) && !(uid === process.env.ADMIN_USERID)) {
    return NextResponse.redirect(new URL('/', req.url)) //redirect the user to the home page if the user
    // is not an admin
  }
  
  if (!isPublicRoute(req)) {
    await auth.protect(); // redirect the user to a login screen
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
