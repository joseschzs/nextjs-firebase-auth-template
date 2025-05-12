import { authConfig } from "@/firebase/config/server-config";
import { routing } from "@/i18n/routing";
import {
  authMiddleware as firebaseAuthMiddleware,
  getTokens,
} from "next-firebase-auth-edge";
import createIntlMiddleware from "next-intl/middleware";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createIntlMiddleware(routing);

const PUBLIC_PAGES = [
  "/auth/sign-in",
  "/auth/sign-up",
  "/auth/forgot-password",
];

export async function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const { pathname } = nextUrl;

  const [, locale, ...rest] = pathname.split("/");
  const pathAfterLocale = "/" + rest.join("/");

  if (PUBLIC_PAGES.includes(pathAfterLocale)) {
    const tokens = await getTokens(await cookies(), authConfig);

    if (tokens) {
      return NextResponse.redirect(new URL(`/`, request.url));
    } else {
      return intlMiddleware(request);
    }
  }

  return firebaseAuthMiddleware(request, {
    loginPath: "/api/login",
    logoutPath: "/api/logout",
    refreshTokenPath: "/api/refresh-token",
    ...authConfig,

    handleValidToken: async ({ token, decodedToken }) => {
      if (PUBLIC_PAGES.includes(pathAfterLocale)) {
        return NextResponse.redirect(new URL(`/`, request.url));
      }

      return intlMiddleware(request);
    },

    handleInvalidToken: async () => {
      const loginUrl = nextUrl.clone();
      loginUrl.pathname = `/${locale || routing.defaultLocale}/auth/sign-in`;
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    },

    handleError: async () => {
      const errorUrl = nextUrl.clone();
      errorUrl.pathname = `/${locale || routing.defaultLocale}/auth/sign-in`;
      return NextResponse.redirect(errorUrl);
    },
  });
}

export const config = {
  matcher: [
    "/",
    "/((?!_next|favicon.ico|__/auth|__/firebase|api|.*\\.).*)",
    "/api/login",
    "/api/logout",
    "/api/refresh-token",
  ],
};
