// app/[locale]/contact/ContactContent.tsx
"use client";

import { useTranslations } from 'next-intl';

const ContactContent = () => {
  const t = useTranslations('Contact');

  return (
    <>
      <h1 className="text-accent font-semibold text-center text-4xl capitalize">
        {t('title')}
      </h1>
      <p className="text-center font-light text-sm xs:text-base text-content-change">
        {t('description')}
      </p>
    </>
  );
};

export default ContactContent;