// import { defineRouting } from 'next-intl/routing';

// export const routing = defineRouting({
//   locales: ['fr', 'en'],
//   defaultLocale: 'fr',
//   localePrefix: 'always' // ou 'as-needed' pour cacher default locale
// });










// // app/i18n/routing.ts
// import { defineRouting } from 'next-intl/routing';

// export const routing = defineRouting({
//   locales: ['fr', 'en'] as const,
//   defaultLocale: 'en' as const, // ← ANGLAIS par défaut
//   localePrefix: 'always'
// });

// export type Locale = (typeof routing.locales)[number];

















// // app/i18n/routing.ts
// import { defineRouting } from 'next-intl/routing';

// export const routing = defineRouting({
//   locales: ['fr', 'en'] as const,
//   defaultLocale: 'en' as const,
//   localePrefix: 'always'
// });

// export type Locale = (typeof routing.locales)[number];
















import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['fr', 'en'] as const,
  defaultLocale: 'en' as const,
  localePrefix: 'always'
});

export type Locale = (typeof routing.locales)[number];