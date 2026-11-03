import React from 'react';
import Link from 'next/link';

export default function ErrorPage({ statusCode }) {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl sm:text-8xl font-sans font-black text-[#00e676] mb-4">
        {statusCode || '500'}
      </h1>
      <p className="text-neutral-300 text-base sm:text-lg mb-8 max-w-md">
        {statusCode
          ? `An error ${statusCode} occurred on the server.`
          : 'An unexpected application error occurred.'}
      </p>
      <Link
        href="/"
        className="px-8 py-3.5 rounded-xl bg-[#00a859] hover:bg-[#00e676] text-black font-sans font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(0,168,89,0.3)]"
      >
        Return to Home
      </Link>
    </div>
  );
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

