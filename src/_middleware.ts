import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    
    const token = req.cookies.get("token")?.value; // Example: Checking a cookie

    const privateRoutes = ["/dashboard", "/profile", "/settings"];

    if (privateRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
        if (!token) {
            return NextResponse.redirect(new URL("/login", req.url));
        }
    }

    return NextResponse.next();
}

// Define the matcher to apply middleware only to specific routes
export const config = {
    matcher: ["/dashboard/:path*", "/profile/:path*", "/settings/:path*"],
};