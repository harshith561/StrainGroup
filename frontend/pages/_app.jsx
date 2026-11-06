import '@/styles/globals.css';
import '@/styles/strains.scss';
import '@/styles/header.scss';
import '@/styles/hero-animations.scss';
import '@/styles/product-viewer.scss';
import '@/styles/portfolio-effects.scss';
import '@/styles/typography-effects.scss';
import '@/styles/scroll-effects.scss';
import '@/styles/team.scss';
import '@/styles/team-profile.scss';
import '@/styles/showcase.scss';
import '@/styles/services.scss';
import '@/styles/about.scss';
import '@/styles/contact.scss';
import '@/styles/ecosystem.scss';
import '@/styles/video-production.scss';
import '@/styles/founder.scss';
import '@/styles/testimonials.scss';
import '@/styles/theme.scss';
import 'aos/dist/aos.css';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';

export default function MyApp({ Component, pageProps }) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    const AOS = require('aos');
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
      delay: 0,
    });
  }, []);

  return (
    <ThemeProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <title>Strains Group | Creative Agency & Sustainable Garment Manufacturing</title>
        <meta
          name="description"
          content="Strains Associates - Award winning creative agency, video production, digital marketing, sustainable fashion manufacturing, and creative ecosystems in Hyderabad & Tirupur."
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      {/* Google Analytics 4 (GA4) Integration */}
      {gaId && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
