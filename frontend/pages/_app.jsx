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
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Strains Group</title>
        <meta
          name="description"
          content="Strains Associates - Award winning creative agency, video production, digital marketing, sustainable fashion manufacturing, and creative ecosystems."
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
