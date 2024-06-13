import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
/*const isProtectedRoute = createRouteMatcher([
  "/user-profile(.*)",
  "/admin",
  "/super-admin",
]);*/
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)", "/"]);
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) auth().protect();
});
