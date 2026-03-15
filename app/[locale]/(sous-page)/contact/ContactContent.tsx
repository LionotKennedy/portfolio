'use client';

import { useTranslations } from 'next-intl';

const ContactContent = () => {
  const t = useTranslations('Contact');

  return (
    <>
      <h1
        className="text-accent font-semibold text-center text-4xl capitalize"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        {t('title')}
      </h1>
      <p
        className="text-center font-light text-sm xs:text-base text-content-change"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="800"
      >
        {t('description')}
      </p>
    </>
  );
};

export default ContactContent;