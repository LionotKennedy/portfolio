// app/[locale]/layout.tsx CLAUDE
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Inter } from 'next/font/google'
import '../globals3.css'
import '../../src/components/style/index.css'
import clsx from 'clsx'
import FireFliesBackground from '../../src/components/FireFliesBackground'
import LanguageToggleBtn from '../../src/components/LanguageToggleBtn'
import { routing } from '../../i18n/routing'
// import AOSInit from '../components/AOS/AOSInit'
import PageCurtain from '../../src/components/curtain/PageCurtain'
import AOSProvider from '../../src/components/AOS/AOSProvider';
import { CurtainProvider } from '../../src/components/curtain/curtainContext'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as any)) notFound()

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={clsx(inter.variable, "bg-background text-foreground font-inter relative")}>
        <div id="my-modal" />
        <NextIntlClientProvider messages={messages} locale={locale}>
          <AOSProvider>
            <CurtainProvider>
              <PageCurtain />
              {/* <AOSInit /> */}
              <LanguageToggleBtn />
              {children}
              <FireFliesBackground />
            </CurtainProvider>
          </AOSProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
