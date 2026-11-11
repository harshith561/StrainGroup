import React from 'react';
import Head from 'next/head';
import { CommonErrorView } from '@/components/common';

export default function ServerIssueAliasPage() {
  return (
    <>
      <Head>
        <title key="title">Service Issue — Strains Associates</title>
        <meta
          key="description"
          name="description"
          content="Service endpoints encountered an unexpected interruption. Please refresh shortly or reach out to technical support."
        />
        <meta key="robots" name="robots" content="noindex, nofollow" />
      </Head>
      <CommonErrorView type="server-issue" />
    </>
  );
}
