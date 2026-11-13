import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Grid3X3, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, toggleTheme, isLight } = useTheme();
  const router = useRouter();
  const pathname = router ? router.pathname : '';

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
    { label: 'VIDEO PRODUCTION', href: '/strains-associates/videography' },
    { label: 'SHOP', href: '/shop' },
    { label: 'BLOG', href: '/blog' },
  ];

  const sidebarLinks = [
    { num: '01.', label: 'Home', href: '/' },
    { num: '02.', label: 'About Strains Group', href: '/about-strains-group' },
    { num: '03.', label: 'Our Ecosystem', href: '/our-ecosystem' },
    { num: '04.', label: 'Services (Overview)', href: '/services' },
    { num: '05.', label: 'Video Production', href: '/strains-associates/videography' },
    { num: '06.', label: 'Advertising & Marketing (Strains Associates)', href: '/strains-associates/digital-marketing' },
    { num: '07.', label: 'Clothing Manufacturing (Strains Stitchery)', href: '/strains-stitchery/clothing-manufacturing' },
    { num: '08.', label: 'Fashion Brand (Strains Fashions)', href: '/strains-fashions/fashion-design' },
    { num: '09.', label: 'Start Your Brand', href: '/strains-associates/start-your-brand' },
    { num: '10.', label: 'Portfolio / Our Work', href: '/portfolio' },
    { num: '11.', label: 'Case Studies', href: '/case-studies' },
    { num: '12.', label: 'Pricing / Packages', href: '/pricing' },
    { num: '13.', label: 'Book a Consultation', href: '/contact' },
    { num: '14.', label: 'Sustainability', href: '/sustainability' },
    { num: '15.', label: 'Founder – Naga Praharsha Govindu', href: '/founder' },
    { num: '16.', label: 'Testimonials / Clients', href: '/testimonials' },
    { num: '17.', label: 'Blog & Industry Insights', href: '/blog' },
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
                width={175}
                height={48}
                className="logo-img"
                decoding="async"
                fetchPriority="high"
              />
            </Link>
          </div>

          <nav className="desktop-nav" aria-label="Primary Navigation">
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
              LET&apos;S TALK
            </Link>

            <button
              className="grid-menu-btn"
              title="Toggle Sidebar"
              onClick={() => {
                setSidebarOpen(true);
                setMobileMenuOpen(false);
              }}
              aria-label="Open Ecosystem Directory"
              aria-expanded={sidebarOpen}
              aria-controls="ecosystem-sidebar"
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
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-primary-nav"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            <button
              type="button"
              className={`theme-toggle-btn ${theme === 'light' ? 'is-light' : ''}`}
              onClick={toggleTheme}
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              aria-label={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              <div className="theme-icon-wrapper">
                <Sun className="theme-icon-sun text-amber-300" size={19} />
                <Moon className="theme-icon-moon text-slate-800" size={19} />
              </div>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav id="mobile-primary-nav" className="mobile-nav" aria-label="Mobile Navigation">
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
              <li className="mobile-theme-item">
                <button
                  type="button"
                  className="mobile-theme-toggle"
                  onClick={toggleTheme}
                  aria-label="Toggle Theme Mode"
                >
                  <span className="font-mono text-xs uppercase tracking-wider">
                    Mode: {theme === 'light' ? 'Light Theme' : 'Dark Theme'}
                  </span>
                  <div className="theme-badge">
                    {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                    <span>{theme === 'light' ? 'Light' : 'Dark'}</span>
                  </div>
                </button>
              </li>
              <li className="mobile-btn-container">
                <Link
                  href="/contact"
                  className="pill-button mobile-talk-btn"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  LET&apos;S TALK
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
      <div
        id="ecosystem-sidebar"
        role="dialog"
        aria-modal="true"
        aria-label="Ecosystem Directory"
        aria-hidden={!sidebarOpen}
        className={`fullscreen-sidebar ${sidebarOpen ? 'open' : ''}`}
      >
        <div className="sidebar-header">
          <div className="logo-area">
            <img
              src="/assets/strainsassociates-CfG1A0jo.webp"
              alt="Strains Associates"
              width={175}
              height={48}
              className="logo-img"
              decoding="async"
              loading="lazy"
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className={`theme-toggle-btn sidebar-theme-toggle ${theme === 'light' ? 'is-light' : ''}`}
              onClick={toggleTheme}
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              aria-label="Toggle Theme"
            >
              <div className="theme-icon-wrapper">
                <Sun className="theme-icon-sun text-amber-300" size={18} />
                <Moon className="theme-icon-moon" size={18} />
              </div>
            </button>
            <button
              className="close-sidebar-btn"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>
        </div>

        <div className="sidebar-content">
          <span className="menu-heading font-mono">ecosystem directory</span>
          <nav className="sidebar-nav" aria-label="Ecosystem Directory Links">
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
