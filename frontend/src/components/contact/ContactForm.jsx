'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';


/**
 * Section Eight & Nine – Minimalist Contact Form
 * Controlled React state, frontend validation for 3 mandatory fields (Name, Email, Phone),
 * enquiry classification between Strains Fashions & Strains Associates, and simulated submission.
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const router = useRouter();
  const [selectedPlanQuery, setSelectedPlanQuery] = useState('');

  // Prefill form message if user navigated from pricing page with a selected plan
  useEffect(() => {
    if (router && router.isReady) {
      const { plan, cycle, addons } = router.query;
      if (plan) {
        setSelectedPlanQuery(plan);
        const details = [];
        if (cycle) details.push(cycle === 'monthly' ? 'Monthly Retainer' : 'Project / Sprint');
        if (addons) details.push(`Add-ons: ${addons}`);
        const extraNote = details.length > 0 ? ` (${details.join(' | ')})` : '';

        setFormData((prev) => ({
          ...prev,
          message: prev.message || `Hi, I am interested in getting started with the "${plan}" plan${extraNote}. Let's discuss our brand requirements and next steps.`,
        }));
      }
    }
  }, [router, router?.isReady, router?.query]);

  // Field change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear individual error as user types
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // Frontend validation for the 3 mandatory fields
  const validateForm = () => {
    const nextErrors = {};

    // 1. Name validation (required, min 2 chars)
    if (!formData.name.trim()) {
      nextErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      nextErrors.name = 'Please provide a valid name (at least 2 characters)';
    }

    // 2. Email validation (required, standard email pattern)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!formData.email.trim()) {
      nextErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      nextErrors.email = 'Please provide a valid email address';
    }

    // 3. Phone number validation (required, international phone support)
    // Supports formats: +49 123 456789, +1 (555) 123-4567, 044 12345678, etc.
    const phoneClean = formData.phone.trim().replace(/[\s\(\)\-\.]/g, '');
    const phoneRegex = /^\+?[0-9]{7,15}$/;
    if (!formData.phone.trim()) {
      nextErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(phoneClean)) {
      nextErrors.phone = 'Please provide a valid phone number (7–15 digits)';
    }

    return nextErrors;
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      // Focus the first invalid field
      const firstErrorField = Object.keys(formErrors)[0];
      const element = document.getElementById(`field-${firstErrorField}`);
      if (element) element.focus();
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // =========================================================================
      // FUTURE BACKEND / AXIOS INTEGRATION POINT:
      // When the backend API endpoint is ready, connect via Axios / Fetch here:
      //
      // const response = await axios.post('/api/contact', formData);
      // or:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // =========================================================================

      // Simulate realistic network delay (1.2 seconds)
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    } catch (error) {
      setIsSubmitting(false);
      setErrors({ form: 'An unexpected issue occurred. Please try again or reach out to hello@strainsassociates.com' });
    }

  };

  return (
    <div className="contact-form-card" aria-label="Contact Inquiries Form">
      {isSubmitted ? (
        <div className="contact-success-state" role="status" aria-live="polite">
          <div className="success-check-badge">
            <CheckCircle2 size={38} />
          </div>
          <h3 className="font-sans text-2xl md:text-3xl font-extrabold text-white mb-3">
            Message Transmitted
          </h3>
          <p className="font-sans text-sm md:text-base text-[#B5B5B5] max-w-md mx-auto mb-8 leading-relaxed">
            Thank you for reaching out to Strains Group. Our creative directors and production team have received your brief and will connect with you within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="contact-submit-btn"
          >
            <span>Send Another Inquiry</span>
            <ArrowRight size={16} className="btn-arrow-icon" />
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {errors.form && (
            <div className="mb-6 p-4 rounded bg-red-950/40 border border-red-800 text-red-200 text-sm flex items-center gap-2">
              <AlertCircle size={16} />
              <span>{errors.form}</span>
            </div>
          )}

          {selectedPlanQuery && (
            <div className="mb-6 p-3.5 rounded-xl bg-[#00a859]/10 border border-[#00a859]/30 text-white text-xs sm:text-sm font-sans flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00a859] shrink-0" />
                <span>
                  Selected Plan: <strong className="text-[#00a859] font-bold">{selectedPlanQuery}</strong>
                </span>
              </div>
              <span className="text-[11px] font-mono text-neutral-400 hidden sm:inline">
                Pre-filled in message
              </span>
            </div>
          )}

          <div className="contact-form-grid">
            {/* ROW 1: Name * & Email * */}
            <div className="contact-field-group">
              <label htmlFor="field-name" className="contact-field-label">
                Name <span className="field-required-star">*</span>
              </label>
              <input
                id="field-name"
                type="text"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="David Miller"
                className={`contact-field-input ${errors.name ? 'input-error' : ''}`}
                aria-required="true"
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <span className="field-error-message">
                  <AlertCircle size={12} /> {errors.name}
                </span>
              )}
            </div>

            <div className="contact-field-group">
              <label htmlFor="field-email" className="contact-field-label">
                Email <span className="field-required-star">*</span>
              </label>
              <input
                id="field-email"
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="david@company.com"
                className={`contact-field-input ${errors.email ? 'input-error' : ''}`}
                aria-required="true"
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <span className="field-error-message">
                  <AlertCircle size={12} /> {errors.email}
                </span>
              )}
            </div>

            {/* ROW 2: Phone Number * & Company */}
            <div className="contact-field-group">
              <label htmlFor="field-phone" className="contact-field-label">
                Phone Number <span className="field-required-star">*</span>
              </label>
              <input
                id="field-phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 8686819898"
                className={`contact-field-input ${errors.phone ? 'input-error' : ''}`}
                aria-required="true"
                aria-invalid={!!errors.phone}
              />
              {errors.phone && (
                <span className="field-error-message">
                  <AlertCircle size={12} /> {errors.phone}
                </span>
              )}
            </div>

            <div className="contact-field-group">
              <label htmlFor="field-company" className="contact-field-label">
                Company
              </label>
              <input
                id="field-company"
                type="text"
                name="company"
                autoComplete="organization"
                value={formData.company}
                onChange={handleChange}
                placeholder="Brand / Studio Name"
                className="contact-field-input"
              />
            </div>


            {/* FULL-WIDTH MESSAGE TEXTAREA */}
            <div className="contact-field-group full-width">
              <label htmlFor="field-message" className="contact-field-label">
                Message
              </label>
              <textarea
                id="field-message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your brand vision, production scope, or timeline..."
                className="contact-field-input contact-field-textarea"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <div className="contact-field-group full-width pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="contact-submit-btn group"
                aria-label="Send Message"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin text-black" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight size={16} className="btn-arrow-icon" />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
