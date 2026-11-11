import React from 'react';
import Head from 'next/head';
import { CommonErrorView } from '@/components/common';

export default function Custom404Page() {
  return (
    <>
      <Head>
        <title key="title">404 — Page Not Found | Strains Associates</title>
        <meta
          key="description"
          name="description"
          content="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
        />
        <meta key="robots" name="robots" content="noindex, nofollow" />
      </Head>
      <CommonErrorView type="404" />
    </>
  );
}
