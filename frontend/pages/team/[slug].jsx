import React from 'react';
import { useRouter } from 'next/router';
import { TeamMemberProfile } from '@/components/team';
import { getAllTeamMembers, getTeamMemberBySlug } from '@/constant';

export default function TeamMemberPage({ member }) {
  const router = useRouter();

  // Handle fallback state if page is generating
  if (router.isFallback) {
    return (
      <div className="min-h-screen bg-[#0c0c0c] flex items-center justify-center text-strain-green font-mono text-sm">
        Loading Team Profile...
      </div>
    );
  }

  return <TeamMemberProfile member={member} />;
}

export async function getStaticPaths() {
  const members = getAllTeamMembers();
  const paths = members.map((member) => ({
    params: { slug: member.slug },
  }));

  return {
    paths,
    fallback: 'blocking', // Allows new or alias slugs to be resolved dynamically on demand
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      member,
    },
    revalidate: 60,
  };
}
