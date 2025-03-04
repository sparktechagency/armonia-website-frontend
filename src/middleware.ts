import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token")?.value; // Example: Checking a cookie

  const privateRoutes = ["/dashboard",];

  if (privateRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    if (!token) {
      // sessionStorage.setItem("redirect", pathname)
      return NextResponse.redirect(new URL(`/?redirect=${pathname.split("/").join("_")}`, req.url));
      // ?redirect=${pathname}
    }
  }

  return NextResponse.next();
}

// Define the matcher to apply middleware only to specific routes
export const config = {
  matcher: ["/dashboard/:path*"],
};
