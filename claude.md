## Diagnostic du problème

L'erreur principale est :
```
Couldn't find next-intl config file
```

Tu as **deux fichiers de config** (`app/i18n.ts` ET `app/i18n/request.ts`), et `next-intl` ne trouve pas le bon. Le fichier attendu par défaut est `i18n/request.ts` à la **racine du projet** (pas dans `app/`).

## Solution

### 1. Crée `i18n/request.ts` à la racine du projet

```
portfolio1/
├── app/
├── messages/
├── middleware.ts
├── i18n/              ← ICI (à la racine, PAS dans app/)
│   └── request.ts
```

Contenu de `i18n/request.ts` :
```ts
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
```

### 2. Crée `i18n/routing.ts` à la racine aussi

```ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['fr', 'en'] as const,
  defaultLocale: 'en' as const,
  localePrefix: 'always'
});

export type Locale = (typeof routing.locales)[number];
```

### 3. Mets à jour `next.config.ts`

```ts
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

export default withNextIntl({
  // ta config existante
});
```

### 4. Mets à jour `middleware.ts`

```ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing'; // ← racine, pas app/

export default createMiddleware(routing);

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)']
};
```

### 5. Mets à jour les imports dans `app/[locale]/layout.tsx`

```ts
import { routing } from '../../i18n/routing'; // ← racine
```

---

## Résumé de la structure finale

```
portfolio1/
├── i18n/
│   ├── request.ts     ✅ nouveau (racine)
│   └── routing.ts     ✅ nouveau (racine)
├── app/
│   ├── i18n/          ← peut être supprimé
│   ├── i18n.ts        ← peut être supprimé
│   └── [locale]/
│       └── layout.tsx
├── middleware.ts
├── messages/
│   ├── fr.json
│   └── en.json
└── next.config.ts
```

Le problème vient du fait que `next-intl` cherche le fichier de config à `i18n/request.ts` **à la racine**, pas dans `app/`. Supprimer `app/i18n.ts` et `app/i18n/` après migration évitera aussi les conflits.