import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

export default createMiddleware(routing);

const privateRoutes = ["/private"];

export function middleware(request: NextRequest) {
    const isPrivateRoute = privateRoutes.some((route) =>
        request.nextUrl.pathname.includes(route)
    );
    const isUserAuthenticated = false; // Substituir com a verificação de autenticação

    if (isPrivateRoute && !isUserAuthenticated) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return createMiddleware(routing)(request);
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
};
