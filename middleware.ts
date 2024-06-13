import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
const isProtectedRoute = createRouteMatcher([
  "/user-profile(.*)",
  "/admin",
  "/super-admin",
]);
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});
