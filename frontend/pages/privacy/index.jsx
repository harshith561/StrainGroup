import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import MainLayout from '@/components/common/MainLayout';
import {
  ShieldCheck,
  Database,
  Eye,
  Share2,
  Lock,
  Shield,
  Cookie,
  UserCheck,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  FileText,
  Clock,
  Sparkles,
} from 'lucide-react';

export default function PrivacyPage() {
  return (
    <MainLayout>
      <Head>
        <title>Privacy Policy | Strains Group</title>
        <meta
          name="description"
          content="Privacy Policy for Strains Group (Strains Associates & Strains Fashions). Learn how we safeguard your data and proprietary apparel design tech packs."
        />
        <meta property="og:title" content="Privacy Policy | Strains Group" />
        <meta
          property="og:description"
          content="Privacy policy and data protection framework for Strains Group clients and partners."
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="bg-[#0c0c0c] text-white min-h-screen w-full pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 sm:pb-20 md:pb-28 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        {/* Top Full-Width Hero */}
        <header className="w-full border-b border-white/10 pb-8 sm:pb-10 md:pb-14 mb-10 sm:mb-12 md:mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs md:text-sm font-mono tracking-wider uppercase bg-[#00a859]/15 text-[#00a859] border border-[#00a859]/30">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00a859]" />
              <span>LEGAL & PRIVACY COMPLIANCE</span>
            </div>

            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs md:text-sm font-mono text-[#8a8a8a]">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Last updated: November 2026</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="w-full max-w-5xl">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Privacy Policy
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#a8a8a8] font-sans leading-relaxed mt-3 sm:mt-4">
                How Strains Group (Strains Associates & Strains Fashions) collects, protects, and handles your personal information, commercial communications, and proprietary apparel design tech packs.
              </p>
            </div>

            {/* Quick Switcher Button */}
            <div className="shrink-0">
              <Link
                href="/terms"
                className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-[#181818] hover:bg-[#222222] border border-white/15 text-xs sm:text-sm md:text-base font-mono text-[#e0e0e0] hover:text-white transition-all shadow-sm"
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#00a859]" />
                <span>Switch to Terms of Service</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </div>
        </header>

        {/* Full-Width Content Container */}
        <main className="w-full space-y-10 sm:space-y-12 md:space-y-16">
          {/* SECTION 1: OVERVIEW */}
          <section className="space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-[#00a859]/15 text-[#00a859] border border-[#00a859]/30 shrink-0">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                1. Overview & Commitment
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b8b8b8] leading-relaxed">
              At <strong className="text-white">Strains Group</strong> (comprising <strong className="text-white">Strains Associates</strong> and <strong className="text-white">Strains Fashions</strong>, referred to as &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we operate an integrated ecosystem spanning creative branding, cinematic video production, performance marketing, and sustainable garment manufacturing based in Hyderabad and Tirupur, India.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b8b8b8] leading-relaxed">
              We respect your privacy and are committed to safeguarding all personal information, creative campaign assets, and garment manufacturing tech packs that you entrust to us.
            </p>

            {/* Full-width callout */}
            <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-[#141414] border-l-4 border-[#00a859] border-t border-r border-b border-white/10 w-full space-y-2">
              <span className="font-mono text-xs sm:text-sm md:text-base text-[#00a859] font-semibold uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Our Core Privacy Guarantee
              </span>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e6e6e6] leading-relaxed">
                We do not sell, rent, monetize, or trade your personal data, business contact records, or creative intellectual property with third-party data brokers or marketing lists.
              </p>
            </div>
          </section>

          {/* SECTION 2: INFORMATION WE COLLECT */}
          <section className="space-y-4 sm:space-y-5 pt-8 sm:pt-10 md:pt-12 border-t border-white/10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-[#00a859]/15 text-[#00a859] border border-[#00a859]/30 shrink-0">
                <Database className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                2. Information We Collect
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b8b8b8] leading-relaxed">
              We collect information that you directly provide when requesting project proposals, booking consultations, commissioning commercial video shoots, or placing garment manufacturing purchase orders:
            </p>

            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg lg:text-xl text-[#b0b0b0]">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#00a859] shrink-0 mt-1" />
                <span><strong className="text-white">Contact & Company Information:</strong> Full name, corporate email address, business phone number, brand or company designation, and physical billing/delivery address.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#00a859] shrink-0 mt-1" />
                <span><strong className="text-white">Production Specifications & Tech Packs:</strong> Apparel CAD patterns, measurement charts, tech packs, fabric blend requirements (e.g. organic cotton, Himalayan hemp), GSM values, and Pantone/TCX color codes.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#00a859] shrink-0 mt-1" />
                <span><strong className="text-white">Creative Briefs & Campaign Assets:</strong> Storyboards, brand guidelines, raw film footage, commercial scripts, and promotional media files shared with our studio.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#00a859] shrink-0 mt-1" />
                <span><strong className="text-white">Billing & Transaction Records:</strong> Invoices, purchase orders, GST numbers, and payment verification receipts. All payment transactions are handled through secure, certified payment gateways; we never store card numbers.</span>
              </li>
            </ul>

            <p className="text-xs sm:text-sm md:text-base text-[#8a8a8a] leading-relaxed pt-2">
              <strong>Technical Telemetry:</strong> When you access our website, our servers automatically log anonymous diagnostic data (such as IP address, browser type, referral source, pages accessed, and device metrics) to maintain security and monitor speed.
            </p>
          </section>

          {/* SECTION 3: HOW WE USE INFORMATION */}
          <section className="space-y-4 sm:space-y-5 pt-8 sm:pt-10 md:pt-12 border-t border-white/10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-[#00a859]/15 text-[#00a859] border border-[#00a859]/30 shrink-0">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                3. How We Use Your Information
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b8b8b8] leading-relaxed">
              We process collected information solely to perform our services and maintain our partnership with you:
            </p>

            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg lg:text-xl text-[#b0b0b0]">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#00a859] shrink-0 mt-1" />
                <span>Fulfilling garment manufacturing orders, physical sampling, cutting, sewing, botanical dyeing, and shipping consignments from our Tirupur facility.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#00a859] shrink-0 mt-1" />
                <span>Executing creative deliverables including video shoots, post-production, brand identity development, and digital marketing campaigns.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#00a859] shrink-0 mt-1" />
                <span>Communicating order progress, lab dip approvals, delivery tracking updates, and responding to consultations.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#00a859] shrink-0 mt-1" />
                <span>Issuing GST-compliant commercial invoices and fulfilling statutory corporate tax and accounting obligations.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#00a859] shrink-0 mt-1" />
                <span>Distributing design case studies or updates only if you have voluntarily subscribed to our newsletter (with instant one-click unsubscribe).</span>
              </li>
            </ul>
          </section>

          {/* SECTION 4: SHARING */}
          <section className="space-y-4 sm:space-y-5 pt-8 sm:pt-10 md:pt-12 border-t border-white/10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-[#00a859]/15 text-[#00a859] border border-[#00a859]/30 shrink-0">
                <Share2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                4. Sharing of Information
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b8b8b8] leading-relaxed">
              We never sell or trade your data. We share relevant data only with vetted partners strictly necessary to fulfill our operations:
            </p>

            <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-base md:text-lg lg:text-xl text-[#b0b0b0]">
              <li><strong className="text-white">Shipping & Freight Carriers:</strong> Express couriers (e.g. DHL, Blue Dart, FedEx) and freight forwarders to deliver fabric swatches, pre-production samples, and bulk export garment consignments.</li>
              <li><strong className="text-white">Payment Gateways:</strong> Certified, PCI-DSS compliant financial providers for secure online and bank transactions.</li>
              <li><strong className="text-white">Statutory & Legal Compliance:</strong> Indian tax and legal authorities if formally required by law or judicial process.</li>
            </ul>
          </section>

          {/* SECTION 5: CONFIDENTIALITY & DESIGN PROTECTION */}
          <section className="space-y-4 sm:space-y-5 pt-8 sm:pt-10 md:pt-12 border-t border-white/10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-[#00a859]/15 text-[#00a859] border border-[#00a859]/30 shrink-0">
                <Lock className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                5. Confidentiality & Design Protection
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b8b8b8] leading-relaxed">
              We understand that garment patterns, tech packs, and upcoming campaign concepts are valuable trade secrets. All designs, sketches, fabric specifications, and unreleased commercial media shared with Strains Group are treated as <strong className="text-white">Strictly Confidential</strong>.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b8b8b8] leading-relaxed">
              Our factory personnel, master tailors, and production teams operate under strict internal non-disclosure obligations. We never share, replicate, or display your unreleased collections without your express written consent.
            </p>
          </section>

          {/* SECTION 6: DATA SECURITY */}
          <section className="space-y-4 sm:space-y-5 pt-8 sm:pt-10 md:pt-12 border-t border-white/10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-[#00a859]/15 text-[#00a859] border border-[#00a859]/30 shrink-0">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                6. Data Security & Storage
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b8b8b8] leading-relaxed">
              We enforce high-standard organizational and technological security measures, including 256-bit SSL/TLS cryptographic encryption, strict role-based access controls, and routine backups, to prevent unauthorized access, alteration, or disclosure of your information.
            </p>
          </section>

          {/* SECTION 7: COOKIES */}
          <section className="space-y-4 sm:space-y-5 pt-8 sm:pt-10 md:pt-12 border-t border-white/10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-[#00a859]/15 text-[#00a859] border border-[#00a859]/30 shrink-0">
                <Cookie className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                7. Cookies & Tracking
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b8b8b8] leading-relaxed">
              Our website uses cookies strictly to support site navigation, shopping preferences, and anonymous usage analytics. You may modify your browser settings to decline cookies at any time, though some interactive elements may function with reduced capabilities.
            </p>
          </section>

          {/* SECTION 8: YOUR RIGHTS */}
          <section className="space-y-4 sm:space-y-5 pt-8 sm:pt-10 md:pt-12 border-t border-white/10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-[#00a859]/15 text-[#00a859] border border-[#00a859]/30 shrink-0">
                <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                8. Your Rights & Choices
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b8b8b8] leading-relaxed">
              Under applicable data protection frameworks (including the Digital Personal Data Protection Act and international privacy standards), you have the right to request access to, correction of, or permanent deletion of your personal records. You can also opt out of promotional messages at any time.
            </p>
          </section>

          {/* SECTION 9: POLICY CHANGES */}
          <section className="space-y-4 sm:space-y-5 pt-8 sm:pt-10 md:pt-12 border-t border-white/10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-[#00a859]/15 text-[#00a859] border border-[#00a859]/30 shrink-0">
                <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                9. Changes to This Policy
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b8b8b8] leading-relaxed">
              We may update this policy periodically to align with evolving production practices, service offerings, or legal requirements. Any modifications will be posted directly to this page along with an updated &quot;Last updated&quot; timestamp.
            </p>
          </section>

          {/* SECTION 10: CONTACT */}
          <section className="space-y-5 sm:space-y-6 pt-8 sm:pt-10 md:pt-12 border-t border-white/10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 md:p-3 rounded-xl bg-[#00a859]/15 text-[#00a859] border border-[#00a859]/30 shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                10. Contact Us
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b8b8b8] leading-relaxed">
              If you have any questions or require custom data agreements or NDAs for your brand, please contact our team:
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
            href="/terms"
            className="inline-flex items-center gap-2 text-[#00a859] hover:underline"
          >
            <span>Read Terms of Service</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </footer>
      </div>
    </MainLayout>
  );
}
