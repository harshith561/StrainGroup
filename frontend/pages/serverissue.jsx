import React from 'react';
import Head from 'next/head';
import { CommonErrorView } from '@/components/common';

export default function ServerIssueAliasPage() {
  return (
    <>
      <Head>
        <title>Server Issue — Strains Associates</title>
        <meta
          name="description"
          content="Our servers or database endpoints encountered an unexpected issue. Please retry or contact technical support."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <CommonErrorView type="server-issue" />
    </>
  );
}
