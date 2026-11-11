import React from 'react';
import Head from 'next/head';
import { CommonErrorView } from '@/components/common';

export default function ServerIssuePage() {
  return (
    <>
      <Head>
        <title key="title">Server Issue — Strains Associates</title>
        <meta
          key="description"
          name="description"
          content="Our servers or database endpoints encountered an unexpected issue. Please retry or contact technical support."
        />
        <meta key="robots" name="robots" content="noindex, nofollow" />
      </Head>
      <CommonErrorView type="server-issue" />
    </>
  );
}
