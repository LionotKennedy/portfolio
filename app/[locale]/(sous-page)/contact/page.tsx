// app/[locale]/contact/page.tsx
// import type { Metadata } from "next";
import type { JSX } from "react/jsx-runtime";
import { getTranslations } from 'next-intl/server'; // ← IMPORT MANQUANT
import Form from "@/src/components/contact/Form";
import BackgroundHome from "@/src/components/BackgroundHome";
import ContactContent from "./ContactContent";

// ← PAS DE "use client" ICI ! C'est un Server Component

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: `${t('title')} | Contact`,
  };
}

const Contact = (): JSX.Element => {
  return (
    <>
      <BackgroundHome />
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <ContactContent />
        </div>
        <Form />
      </article>
    </>
  );
};

export default Contact;