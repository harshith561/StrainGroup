import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#080808" />
        {gscVerification && (
          <meta name="google-site-verification" content={gscVerification} />
        )}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="stylesheet" href="/fonts/fonts.css" />
      </Head>
      <body className="bg-[#080808] text-white antialiased selection:bg-[#00a859] selection:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
