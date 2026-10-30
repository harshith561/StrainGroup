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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/webp" href="/strainsassociates.webp" />
        <link rel="shortcut icon" type="image/webp" href="/strainsassociates.webp" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
