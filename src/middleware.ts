/*
import { authConfig } from "@/firebase/config/server-config";
import { routing } from "@/i18n/routing";
import {
  authMiddleware,
  redirectToHome,
  redirectToLogin,
} from "next-firebase-auth-edge";
import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PUBLIC_PATHS = ["/es-ES/auth/sign-in", "/en-US/auth/sign-in"];

const handleLocale = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const i18nResponse = handleLocale(request);
  if (i18nResponse.status >= 300) {
    return i18nResponse;
  }

  return authMiddleware(request, {
    loginPath: "/api/login",
    logoutPath: "/api/logout",
    refreshTokenPath: "/api/refresh-token",
    debug: authConfig.debug,
    enableMultipleCookies: authConfig.enableMultipleCookies,
    enableCustomToken: authConfig.enableCustomToken,
    apiKey: authConfig.apiKey,
    cookieName: authConfig.cookieName,
    cookieSerializeOptions: authConfig.cookieSerializeOptions,
    cookieSignatureKeys: authConfig.cookieSignatureKeys,
    serviceAccount: authConfig.serviceAccount,
    experimental_enableTokenRefreshOnExpiredKidHeader:
      authConfig.experimental_enableTokenRefreshOnExpiredKidHeader,
    tenantId: authConfig.tenantId,
    dynamicCustomClaimsKeys: ["someCustomClaim"],
    handleValidToken: async ({ token, decodedToken, customToken }, headers) => {
      // Authenticated user should not be able to access /login, /register and /reset-password routes
      if (PUBLIC_PATHS.includes(request.nextUrl.pathname)) {
        return redirectToHome(request);
      }

      return NextResponse.next({
        request: {
          headers,
        },
      });
    },
    handleInvalidToken: async (_reason) => {
      return redirectToLogin(request, {
        path: "/auth/sign-in",
        publicPaths: PUBLIC_PATHS,
      });
    },
    handleError: async (error) => {
      console.error("Unhandled authentication error", { error });

      return redirectToLogin(request, {
        path: "/auth/sign-in",
        publicPaths: PUBLIC_PATHS,
      });
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
*/
import { authConfig } from "@/firebase/config/server-config";
import { routing } from "@/i18n/routing";
import { authMiddleware } from "next-firebase-auth-edge";
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = [
  "/es-ES/auth/sign-in",
  "/en-US/auth/sign-in",
  "/auth/sign-in",
];

const handleLocale = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const localeResponse = handleLocale(request);
  if (localeResponse.status >= 300) {
    return localeResponse;
  }

  return authMiddleware(request, {
    loginPath: "/api/login",
    logoutPath: "/api/logout",
    refreshTokenPath: "/api/refresh-token",
    debug: authConfig.debug,
    enableMultipleCookies: authConfig.enableMultipleCookies,
    enableCustomToken: authConfig.enableCustomToken,
    apiKey: authConfig.apiKey,
    cookieName: authConfig.cookieName,
    cookieSerializeOptions: authConfig.cookieSerializeOptions,
    cookieSignatureKeys: authConfig.cookieSignatureKeys,
    serviceAccount: authConfig.serviceAccount,
    experimental_enableTokenRefreshOnExpiredKidHeader:
      authConfig.experimental_enableTokenRefreshOnExpiredKidHeader,
    tenantId: authConfig.tenantId,
    dynamicCustomClaimsKeys: ["someCustomClaim"],
    handleValidToken: async ({ token, decodedToken, customToken }, headers) => {
      // Si el usuario logueado intenta acceder a páginas públicas (login/registro), redirigir al inicio
      if (PUBLIC_PATHS.includes(request.nextUrl.pathname)) {
        const locale = request.nextUrl.pathname.split("/")[1];
        console.log(locale);
        return NextResponse.redirect(
          new URL(`/${locale}/dashboard`, request.url),
        );
      }
      // En otros casos, continuar hacia la página solicitada
      return NextResponse.next({ request: { headers } });
    },
    handleInvalidToken: async (_reason) => {
      // Usuario no autenticado en ruta protegida: redirigir a la página de login con locale y redirect
      const { pathname } = request.nextUrl;
      if (PUBLIC_PATHS.includes(pathname)) {
        return NextResponse.next(); // Si ya está en una ruta pública, no redirigir de nuevo
      }
      const locale = pathname.split("/")[1] || routing.defaultLocale;
      console.log(locale);
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = `/${locale}/auth/sign-in`;
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    },
    handleError: async (err) => {
      console.error("Auth middleware error:", err);
      // Comportamiento similar a token inválido: enviar al login con locale
      const locale =
        request.nextUrl.pathname.split("/")[1] || routing.defaultLocale;

      console.log(locale);
      return NextResponse.redirect(
        new URL(`/${locale}/auth/sign-in`, request.url),
      );
    },
  });
}

export const config = {
  matcher: [
    "/",
    "/((?!_next|favicon.ico|__/auth|__/firebase|api|.*\\.).*)",
    "/api/login",
    "/api/logout",
    "/es-ES/api/login",
    "/en-US/api/login",
    "/es-ES/api/logout",
    "/en-US/api/logout",
    "/api/refresh-token",
  ],
};
