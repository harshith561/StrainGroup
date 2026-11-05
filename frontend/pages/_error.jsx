import React from 'react';
import Head from 'next/head';
import { CommonErrorView } from '@/components/common';

export default function ErrorPage({ statusCode }) {
  const isServer = !statusCode || statusCode >= 500;
  const errorType = statusCode === 409 ? '409' : isServer ? 'server-issue' : '404';

  return (
    <>
      <Head>
        <title>{statusCode ? `${statusCode} Error` : 'Server Issue'} — Strains Associates</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <CommonErrorView
        type={errorType}
        statusCode={statusCode ? String(statusCode) : '500'}
      />
    </>
  );
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
