import React from 'react';
import Link from 'next/link';
import MainLayout from '@/components/common/MainLayout';
import SEO from '@/components/common/SEO';
import {
  Scale,
  Briefcase,
  FileCheck,
  Lock,
  Scissors,
  CreditCard,
  RotateCcw,
  ShieldCheck,
  AlertTriangle,
  ShieldAlert,
  Gavel,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Clock,
  Sparkles,
} from 'lucide-react';

export default function TermsPage() {
  return (
    <MainLayout>
      <SEO
        title="Terms of Service | Strains Group"
        description="Commercial Terms of Service for Strains Group (Strains Associates & Strains Fashions). Governing our creative services and sustainable apparel manufacturing in Tirupur."
        canonical="/terms"
        noindex={false}
      />

      <div className="bg-[#0c0c0c] text-white min-h-screen w-full pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 sm:pb-20 md:pb-28 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        {/* Top Full-Width Hero */}
        <header className="w-full border-b border-white/10 pb-8 sm:pb-10 md:pb-14 mb-10 sm:mb-12 md:mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs md:text-sm font-mono tracking-wider uppercase bg-[#00a859]/15 text-[#00a859] border border-[#00a859]/30">
              <Scale className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00a859]" />
              <span>TERMS OF ENGAGEMENT & PRODUCTION</span>
            </div>

            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs md:text-sm font-mono text-[#8a8a8a]">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Last updated: November 2026</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="w-full max-w-5xl">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Terms of Service
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#a8a8a8] font-sans leading-relaxed mt-3 sm:mt-4">
                The commercial framework governing creative agency campaigns, cinematic video production, sustainable garment manufacturing in Tirupur, and online purchases at Strains Group.
              </p>
            </div>

            {/* Quick Switcher Button */}
            <div className="shrink-0">
              <Link
                href="/privacy"
                className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-[#181818] hover:bg-[#222222] border border-white/15 text-xs sm:text-sm md:text-base font-mono text-[#e0e0e0] hover:text-white transition-all shadow-sm"
              >
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#00a859]" />
                <span>Switch to Privacy Policy</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </div>
        </header>

        {/* Full-Width Content Container */}
        <main className="w-full space-y-10 sm:space-y-12 md:space-y-16">
          {/* SECTION 1: AGREEMENT */}
          <section className="space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-[#00a859]/15 text-[#00a859] border border-[#00a859]/30 shrink-0">
                <Scale className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                1. Agreement to Terms
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b8b8b8] leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;Client&quot;, &quot;User&quot;, &quot;You&quot;) and <strong className="text-white">Strains Group</strong> (comprising <strong className="text-white">Strains Associates</strong> and <strong className="text-white">Strains Fashions</strong>, collectively &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b8b8b8] leading-relaxed">
              By accessing our website, requesting commercial estimates, placing custom garment production orders, commissioning video shoots, or purchasing goods, you agree to be bound by these Terms in full.
            </p>

            {/* Full-width callout */}
            <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-[#141414] border-l-4 border-[#00a859] border-t border-r border-b border-white/10 w-full space-y-2">
              <span className="font-mono text-xs sm:text-sm md:text-base text-[#00a859] font-semibold uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Commercial Entity Representation
              </span>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e6e6e6] leading-relaxed">
                If you are entering into this agreement on behalf of a brand, business corporation, or institution, you warrant that you possess full legal authority to bind that entity to these Terms and specific signed Statements of Work (SOW).
              </p>
            </div>
          </section>

          {/* SECTION 2: SCOPE OF SERVICES */}
          <section className="space-y-4 sm:space-y-5 pt-8 sm:pt-10 md:pt-12 border-t border-white/10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-[#00a859]/15 text-[#00a859] border border-[#00a859]/30 shrink-0">
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                2. Scope of Services
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b8b8b8] leading-relaxed">
              Strains Group operates integrated divisions providing end-to-end creative and industrial manufacturing capabilities:
            </p>

            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg lg:text-xl text-[#b0b0b0]">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#00a859] shrink-0 mt-1" />
                <span><strong className="text-white">Creative & Digital Marketing:</strong> Brand strategy, digital advertising campaigns, social media management, and web design delivered by Strains Associates.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#00a859] shrink-0 mt-1" />
                <span><strong className="text-white">Cinematic Video & Media Studio:</strong> Commercial brand films, high-fashion lookbook shoots, documentary production, visual effects, and post-production color grading.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#00a859] shrink-0 mt-1" />
                <span><strong className="text-white">Sustainable Apparel Manufacturing:</strong> Custom cut-and-sew apparel, 100% organic cotton, Himalayan hemp, zero-liquid-discharge botanical dyeing, and plantable seed tags produced at our Tirupur facility by Strains Fashions.</span>
              </li>
            </ul>
          </section>

          {/* SECTION 3: PROPOSALS & APPROVALS */}
          <section className="space-y-4 sm:space-y-5 pt-8 sm:pt-10 md:pt-12 border-t border-white/10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-[#00a859]/15 text-[#00a859] border border-[#00a859]/30 shrink-0">
                <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                3. Proposals, Orders & Milestone Approvals
              </h2>
            </div>

            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg lg:text-xl text-[#b0b0b0]">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#00a859] shrink-0 mt-1" />
                <span><strong className="text-white">Quote Validity:</strong> Formal cost estimations and production quotes remain valid for 30 calendar days from the date of issue.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#00a859] shrink-0 mt-1" />
                <span><strong className="text-white">Pre-Production Samples (PP Samples):</strong> Bulk garment manufacturing orders proceed to fabric cutting and mass stitching only upon client written sign-off of physical fit samples or lab dip color swatches.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#00a859] shrink-0 mt-1" />
                <span><strong className="text-white">Creative Milestone Sign-offs:</strong> Agency deliverables follow structured review rounds (typically including two revisions per phase) as established in the project Statement of Work.</span>
              </li>
            </ul>
          </section>

          {/* SECTION 4: INTELLECTUAL PROPERTY */}
          <section className="space-y-4 sm:space-y-5 pt-8 sm:pt-10 md:pt-12 border-t border-white/10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-[#00a859]/15 text-[#00a859] border border-[#00a859]/30 shrink-0">
                <Lock className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                4. Intellectual Property Rights & Ownership
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b8b8b8] leading-relaxed">
              Upon receipt of full invoice payments, all custom finalized deliverables (exported video masters, branding artworks, and manufactured apparel) become the exclusive property of the Client.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b8b8b8] leading-relaxed">
              All client tech packs, garment patterns, trademarks, and design sketches submitted to Strains remain the Client&apos;s sole intellectual property. Strains Group retains rights to its pre-existing background code, proprietary machinery workflows, and the customary right to display non-confidential finished case studies in our creative portfolio (unless restricted by a specific NDA).
            </p>
          </section>

          {/* SECTION 5: MANUFACTURING TERMS */}
          <section className="space-y-4 sm:space-y-5 pt-8 sm:pt-10 md:pt-12 border-t border-white/10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-[#00a859]/15 text-[#00a859] border border-[#00a859]/30 shrink-0">
                <Scissors className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                5. Manufacturing Terms & Industry Tolerances
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b8b8b8] leading-relaxed">
              Custom apparel manufacturing with natural fibers involves organic variability. The following standard textile tolerances apply:
            </p>

            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg lg:text-xl text-[#b0b0b0]">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#00a859] shrink-0 mt-1" />
                <span><strong className="text-white">Dimensional & GSM Tolerances:</strong> Commercial allowances of +/- 3% to 5% in garment dimensions and fabric weight (GSM) are standard across knitwear and woven production.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#00a859] shrink-0 mt-1" />
                <span><strong className="text-white">Natural Botanical Dyes:</strong> Plant and flower-based natural dyeing exhibits gentle batch-to-batch tone subtleties, which represent the authentic characteristic of non-chemical processing.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#00a859] shrink-0 mt-1" />
                <span><strong className="text-white">Zero Toxic Discharge:</strong> All processing at our Tirupur facility adheres to verified Zero Liquid Discharge (ZLD) environmental guidelines.</span>
              </li>
            </ul>
          </section>

          {/* SECTION 6: INVOICING & PAYMENTS */}
          <section className="space-y-4 sm:space-y-5 pt-8 sm:pt-10 md:pt-12 border-t border-white/10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-[#00a859]/15 text-[#00a859] border border-[#00a859]/30 shrink-0">
                <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                6. Invoicing, Payments & Taxes
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b8b8b8] leading-relaxed">
              Standard manufacturing orders require a milestone deposit (typically 50% upon purchase order sign-off) to commence yarn procurement, with the balance due prior to dispatch or under agreed export credit terms.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b8b8b8] leading-relaxed">
              Invoices for domestic services within India include applicable Goods and Services Tax (GST). International export orders are processed under standard zero-rated export provisions accompanied by export shipping bills.
            </p>
          </section>

          {/* SECTION 7: CANCELLATIONS & REFUNDS */}
          <section className="space-y-4 sm:space-y-5 pt-8 sm:pt-10 md:pt-12 border-t border-white/10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-[#00a859]/15 text-[#00a859] border border-[#00a859]/30 shrink-0">
                <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                7. Cancellations & Refund Policy
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg lg:text-xl text-[#b0b0b0]">
              <p>
                <strong className="text-white">Custom Manufacturing:</strong> Because raw cotton, hemp yarns, and dyes are purchased and processed specifically for your bespoke designs, advance deposits are non-refundable once fabric knitting or dyeing begins. If garments possess manufacturing defects exceeding standard tolerance limits, Strains will repair, re-manufacture, or credit the defective units when notified within 10 business days of consignment receipt.
              </p>
              <p>
                <strong className="text-white">Creative Services:</strong> Ongoing retainers may be cancelled with 30 days written notice, with payment due for all hours and milestones completed up to the date of termination.
              </p>
            </div>
          </section>

          {/* SECTION 8: CONFIDENTIALITY */}
          <section className="space-y-4 sm:space-y-5 pt-8 sm:pt-10 md:pt-12 border-t border-white/10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-[#00a859]/15 text-[#00a859] border border-[#00a859]/30 shrink-0">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                8. Mutual Confidentiality
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b8b8b8] leading-relaxed">
              Both parties agree to treat all unreleased garment tech packs, script storyboards, commercial bids, and strategic plans exchanged during our engagement as confidential. Neither party will disclose proprietary trade details to third parties without prior written authorization.
            </p>
          </section>

          {/* SECTION 9: PROHIBITED CONDUCT */}
          <section className="space-y-4 sm:space-y-5 pt-8 sm:pt-10 md:pt-12 border-t border-white/10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-[#00a859]/15 text-[#00a859] border border-[#00a859]/30 shrink-0">
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                9. Prohibited Conduct & Platform Use
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b8b8b8] leading-relaxed">
              You agree not to misuse our website or digital properties by scraping data, transmitting malicious code, attempting unauthorized server access, or infringing upon Strains Group trademarks or original media.
            </p>
          </section>

          {/* SECTION 10: LIMITATION OF LIABILITY */}
          <section className="space-y-4 sm:space-y-5 pt-8 sm:pt-10 md:pt-12 border-t border-white/10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-[#00a859]/15 text-[#00a859] border border-[#00a859]/30 shrink-0">
                <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                10. Limitation of Liability
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b8b8b8] leading-relaxed">
              To the maximum extent permitted by applicable law, Strains Group will not be liable for indirect, incidental, punitive, or consequential damages. In all circumstances, our maximum cumulative liability arising from any order or service shall be limited to the total fees actually paid by the client under the specific Statement of Work giving rise to the claim.
            </p>
          </section>

          {/* SECTION 11: GOVERNING LAW */}
          <section className="space-y-4 sm:space-y-5 pt-8 sm:pt-10 md:pt-12 border-t border-white/10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-[#00a859]/15 text-[#00a859] border border-[#00a859]/30 shrink-0">
                <Gavel className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                11. Governing Law & Dispute Resolution
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b8b8b8] leading-relaxed">
              These Terms and any contractual disputes arising between the parties shall be governed by the laws of India. Both parties agree that any legal proceedings shall be subject to the exclusive jurisdiction of the competent courts in <strong className="text-white">Hyderabad, Telangana, India</strong>.
            </p>
          </section>

          {/* SECTION 12: MODIFICATIONS & CONTACT */}
          <section className="space-y-5 sm:space-y-6 pt-8 sm:pt-10 md:pt-12 border-t border-white/10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-[#00a859]/15 text-[#00a859] border border-[#00a859]/30 shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                12. Modifications & Legal Contacts
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b8b8b8] leading-relaxed">
              We reserve the right to revise these Terms at any time with an updated date. For commercial inquiries, custom NDAs, or Master Service Agreements, reach out to our team:
            </p>

            {/* Responsive Full-Width Contact Card */}
            <div className="w-full p-5 sm:p-8 md:p-10 rounded-2xl bg-[#141414] border border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm sm:text-base md:text-lg font-mono">
              <div className="space-y-1 sm:space-y-2">
                <span className="text-xs sm:text-sm text-[#8a8a8a] uppercase flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-[#00a859]" />
                  Direct Email
                </span>
                <p className="text-[#00a859] font-medium text-sm sm:text-base md:text-lg break-all">
                  <a href="mailto:hello@strainsassociates.com" className="hover:underline">
                    hello@strainsassociates.com
                  </a>
                </p>
              </div>

              <div className="space-y-1 sm:space-y-2">
                <span className="text-xs sm:text-sm text-[#8a8a8a] uppercase flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-[#00a859]" />
                  Phone Line
                </span>
                <p className="text-white font-medium text-sm sm:text-base md:text-lg">
                  <a href="tel:+918686819898" className="hover:text-[#00a859]">
                    +91 8686819898
                  </a>
                </p>
              </div>

              <div className="space-y-1 sm:space-y-2 sm:col-span-2 lg:col-span-1">
                <span className="text-xs sm:text-sm text-[#8a8a8a] uppercase flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#00a859]" />
                  Locations
                </span>
                <p className="text-[#e0e0e0] font-sans text-xs sm:text-sm md:text-base leading-relaxed">
                  Studio: Hyderabad, Telangana, India
                  <br />
                  Manufacturing: Tirupur, Tamil Nadu, India
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Bottom Full-Width Navigation */}
        <footer className="w-full mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm md:text-base font-mono text-[#8a8a8a]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/privacy"
            className="inline-flex items-center gap-2 text-[#00a859] hover:underline"
          >
            <span>Read Privacy Policy</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </footer>
      </div>
    </MainLayout>
  );
}
