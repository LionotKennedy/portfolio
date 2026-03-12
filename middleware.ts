// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // On ajoute une exception pour ne pas matcher les fichiers avec des extensions (pdf, png, etc.)
  matcher: [
    // Match toutes les pages sauf les fichiers statiques et les APIs
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // Match les locales
    '/',
    '/(fr|en)/:path*'
  ]
};