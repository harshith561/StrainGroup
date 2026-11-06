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
        {/* Anti-FOUC Theme Script: Immediately sync theme before first render */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('strains_theme');
                  var theme = saved || 'dark';
                  if (theme === 'light') {
                    document.documentElement.setAttribute('data-theme', 'light');
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </Head>
      <body className="theme-transition antialiased selection:bg-[#00a859] selection:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
