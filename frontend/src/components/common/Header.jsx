import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Grid3X3, Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const pathname = router ? router.pathname : '';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu or sidebar is open
  useEffect(() => {
    if (mobileMenuOpen || sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, sidebarOpen]);

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setSidebarOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT STRAINS GROUP', href: '/about-strains-group' },
    { label: 'OUR ECOSYSTEM', href: '/our-ecosystem' },
    { label: 'SERVICES', href: '/services' },
    { label: 'VIDEO PRODUCTION', href: '/video-production' },
    { label: 'SHOP', href: '/shop' },
  ];

  const sidebarLinks = [
    { num: '01.', label: 'Home', href: '/' },
    { num: '02.', label: 'About Strains Group', href: '/about-strains-group' },
    { num: '03.', label: 'Our Ecosystem', href: '/our-ecosystem' },
    { num: '04.', label: 'Services (Overview)', href: '/services' },
    { num: '05.', label: 'Video Production', href: '/video-production' },
    { num: '06.', label: 'Advertising & Marketing', href: '/advertising-marketing' },
    { num: '07.', label: 'Clothing Manufacturing (Strains Stitchery)', href: '/clothing-manufacturing' },
    { num: '08.', label: 'Fashion Brand (Strains Fashions)', href: '/fashion-brand' },
    { num: '09.', label: 'Start Your Brand', href: '/start-your-brand' },
    { num: '10.', label: 'Portfolio / Our Work', href: '/portfolio' },
    { num: '11.', label: 'Case Studies', href: '/case-studies' },
    { num: '12.', label: 'Pricing / Packages', href: '/pricing' },
    { num: '13.', label: 'Book a Consultation', href: '/book-consultation' },
    { num: '14.', label: 'Sustainability', href: '/sustainability' },
    { num: '15.', label: 'Founder – Naga Praharsha Govindu', href: '/founder' },
    { num: '16.', label: 'Testimonials / Clients', href: '/testimonials' },
  ];

  return (
    <>
      <header className={`header-container ${scrolled ? 'scrolled glassmorphism' : ''}`}>
        <div className="header-inner">
          <div className="logo-area">
            <Link href="/" className="logo-link">
              <img
                src="/assets/strainsassociates-CfG1A0jo.webp"
                alt="Strains Associates"
                className="logo-img"
              />
            </Link>
          </div>

          <nav className="desktop-nav">
            <ul className="nav-list">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`nav-item ${pathname === item.href ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <Link href="/contact" className="pill-button talk-btn">
              LET'S TALK
            </Link>

            <button
              className="grid-menu-btn"
              title="Toggle Sidebar"
              onClick={() => {
                setSidebarOpen(true);
                setMobileMenuOpen(false);
              }}
              aria-label="Open Ecosystem Directory"
            >
              <Grid3X3 className="grid-icon" size={22} />
            </button>

            <button
              className="mobile-menu-toggle"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                setSidebarOpen(false);
              }}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`mobile-nav-item ${pathname === item.href ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mobile-btn-container">
                <Link
                  href="/contact"
                  className="pill-button mobile-talk-btn"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  LET'S TALK
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Fullscreen Ecosystem Directory Sidebar & Backdrop */}
      {sidebarOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
      <div className={`fullscreen-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo-area">
            <img
              src="/assets/strainsassociates-CfG1A0jo.webp"
              alt="Strains Associates"
              className="logo-img"
            />
          </div>
          <button
            className="close-sidebar-btn"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <div className="sidebar-content">
          <span className="menu-heading font-mono">ecosystem directory</span>
          <nav className="sidebar-nav">
            <ul className="sidebar-nav-list font-sans">
              {sidebarLinks.map((item) => (
                <li key={item.num}>
                  <Link href={item.href} onClick={() => setSidebarOpen(false)}>
                    <span className="link-num font-mono">{item.num}</span> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
