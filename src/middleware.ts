import { getToken } from "next-auth/jwt";
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

const privateRoutes = ["/private"];

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const isPrivateRoute = privateRoutes.some((route) =>
        pathname.includes(route)
    );

    if (isPrivateRoute) {
        const token = await getToken({
            req: request,
            secret: process.env.AUTH_SECRET
        });

        if (!token) {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }

    return intlMiddleware(request);
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
};
