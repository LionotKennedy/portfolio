"use client"
import { Home } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useTranslations, useLocale } from 'next-intl';

const HomeBtn: React.FC = () => {
  const t = useTranslations('HomeBtn');
  const locale = useLocale();

  return (
    <Link
      href={`/${locale}`}
      target={"_self"}
      className="text-foreground rounded-full flex items-center justify-center
        custom-bg fixed top-3 xs:top-4 right-auto left-3 xs:left-4 w-fit self-start z-[80]
        glass-effect custom-btn"
      aria-label={t('label')}
      prefetch={false}
    >
      <span className="relative w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 p-3 xs:p-3.5 sm:p-4 hover:text-accent text-btn-change flex items-center justify-center">
        <Home className="w-full h-auto" strokeWidth={1.5} />

        <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

        {/* Tooltip - caché sur mobile, visible sur sm+ */}
        <span className="absolute hidden sm:peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
          {t('tooltip')}
        </span>
      </span>
      <span className="sr-only">{t('srOnly')}</span>
    </Link>
  );
};

export default HomeBtn;