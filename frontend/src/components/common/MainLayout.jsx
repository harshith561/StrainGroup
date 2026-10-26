import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function MainLayout({ children, className = '' }) {
  return (
    <div className={`app-container min-h-screen flex flex-col justify-between ${className}`}>
      <Header />
      <div id="smooth-wrapper" className="flex-1 w-full">
        <div id="smooth-content">
          <main className="main-content w-full">
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
