import React from 'react';
import Head from 'next/head';
import { CommonErrorView } from '@/components/common';

export default function Custom500Page() {
  return (
    <>
      <Head>
        <title>500 — Server Issue Encountered | Strains Associates</title>
        <meta
          name="description"
          content="An unexpected server issue occurred. Our engineering team has been notified."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <CommonErrorView type="server-issue" />
    </>
  );
}
