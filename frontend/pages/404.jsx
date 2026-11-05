import React from 'react';
import Head from 'next/head';
import { CommonErrorView } from '@/components/common';

export default function Custom404Page() {
  return (
    <>
      <Head>
        <title>409 — Route Under Maintenance | Strains Associates</title>
        <meta
          name="description"
          content="This route is currently undergoing scheduled updates or requires administration clearance."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <CommonErrorView type="409" />
    </>
  );
}
