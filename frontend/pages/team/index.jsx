import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function TeamIndexRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/about-strains-group#about-team-coverflow-section');
  }, [router]);

  return (
    <div className="min-h-screen bg-[#0c0c0c] flex items-center justify-center text-neutral-400 font-mono text-sm">
      Redirecting to Team Squad...
    </div>
  );
}
