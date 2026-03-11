// import { getRequestConfig } from 'next-intl/server';
// import { routing } from './routing';

// export default getRequestConfig(async ({ requestLocale }) => {
//   // Attendre la résolution de requestLocale si c'est une Promise
//   let locale = await requestLocale;
  
//   // Validation de la locale
//   if (!locale || !routing.locales.includes(locale as any)) {
//     locale = routing.defaultLocale;
//   }

//   return {
//     locale,
//     messages: (await import(`../../messages/${locale}.json`)).default
//   };
// });