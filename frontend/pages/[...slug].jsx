import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { CommonErrorView } from '@/components/common';

export default function CatchAllRoute() {
  const router = useRouter();
  const rawSlug = router.query.slug;
  const routeName = Array.isArray(rawSlug) ? rawSlug.join('/') : (rawSlug || '');

  return (
    <>
      <Head>
        <title key="title">Route In Progress — Strains Associates</title>
        <meta
          key="description"
          name="description"
          content="This route is currently undergoing scheduled updates or requires administration clearance."
        />
        <meta key="robots" name="robots" content="noindex, nofollow" />
      </Head>
      <CommonErrorView type="409" routeName={routeName} />
    </>
  );
}
