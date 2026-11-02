import React from 'react';
import { useRouter } from 'next/router';
import { CaseStudyDetail } from '@/components/case-studies';
import { getAllCaseStudies, getCaseStudyBySlug } from '@/constant/caseStudiesData';

export default function CaseStudyDetailPage({ caseStudy }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="min-h-screen bg-[#0c0c0c] flex items-center justify-center text-[#00a859] font-mono text-sm">
        Loading Case Study...
      </div>
    );
  }

  return <CaseStudyDetail caseStudy={caseStudy} />;
}

export async function getStaticPaths() {
  const caseStudies = getAllCaseStudies();
  const paths = caseStudies.map((study) => ({
    params: { slug: study.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      caseStudy,
    },
    revalidate: 60,
  };
}
