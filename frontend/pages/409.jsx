import React from 'react';
import Head from 'next/head';
import { CommonErrorView } from '@/components/common';

export default function Custom409Page() {
  return (
    <>
      <Head>
        <title>409 — Under Maintenance | Strains Associates</title>
        <meta
          name="description"
          content="This route is currently undergoing scheduled system maintenance and structure updates. Contact administration for clearance."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <CommonErrorView type="409" />
    </>
  );
}
