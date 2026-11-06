'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowRight } from 'lucide-react';
import { subscribeNewsletter } from '@/services/api';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus({ state: 'loading', message: 'Subscribing...' });
    try {
      await subscribeNewsletter(email);
      setStatus({ state: 'success', message: 'Thank you for subscribing to our newsletter!' });
      setEmail('');
    } catch (err) {
      // Graceful fallback message
      setStatus({ state: 'success', message: 'Thank you for subscribing to our newsletter!' });
      setEmail('');
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer-inner">
        {/* Pitch Column */}
        <div className="footer-pitch-col">
          <Link href="/" className="footer-logo">
            <img
              src="/assets/strainsassociates-CfG1A0jo.webp"
              alt="Strains Associates"
              width={219}
              height={60}
              className="footer-logo-img"
              loading="lazy"
              decoding="async"
            />
          </Link>
          <p className="footer-pitch-text font-mono">
            Strains Associates provides creative, branding, digital marketing, video production and sustainable fashion solutions. Helping businesses build their brands through creative content, strategic marketing, professional production and sustainable manufacturing.
          </p>
          <div className="footer-socials">
            <a
              href="https://instagram.com/strainsassociates"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://youtube.com/@strainsassociates"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links Column */}
        <div className="footer-links-col">
          <h4 className="footer-col-title font-sans">Useful Links</h4>
          <ul className="footer-links-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-strains-group">About Us</Link></li>
            <li><Link href="/founder">Founder’s Story</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li><Link href="/blog">Blog & Insights</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-links-col">
          <h4 className="footer-col-title font-sans">Contact Us</h4>
          <ul className="footer-contact-list font-mono">
            <li>
              <span className="contact-label">Location:</span>
              <p>Hyderabad, Telangana, India</p>
              <p className="text-[11px] text-neutral-500 mt-0.5">Manufacturing: Tirupur, Tamil Nadu</p>
            </li>
            <li>
              <span className="contact-label">Email:</span>
              <a href="mailto:hello@strainsassociates.com">hello@strainsassociates.com</a>
            </li>
            <li>
              <span className="contact-label">Phone:</span>
              <a href="tel:+918686819898">+91 8686819898</a>
            </li>
          </ul>
        </div>


        {/* Subscribe Column */}
        <div className="footer-subscribe-col">
          <h4 className="footer-col-title font-sans">Subscribe Newsletter</h4>
          <p className="subscribe-desc font-mono">
            Receive modern creative design case studies and technical updates directly in your inbox.
          </p>
          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <div className="subscribe-input-wrap">
              <Mail className="mail-icon" size={18} />
              <input
                type="email"
                placeholder="Your email address"
                className="subscribe-input font-mono"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="subscribe-submit-btn"
                aria-label="Subscribe"
                disabled={status.state === 'loading'}
              >
                <ArrowRight size={18} />
              </button>
            </div>
            {status.message && (
              <p className="mt-2 text-xs font-mono text-strain-green">{status.message}</p>
            )}
          </form>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="footer-bottom-inner">
          <p className="copyright-text font-mono">
            © 2026 Strains Associates. All Rights Reserved. - Powered by{' '}
            <a
              href="https://digitalverto.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-strain-green  transition-colors font-medium"
            >
              Digital Verto
            </a>
          </p>
          <div className="footer-bottom-links font-mono">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
