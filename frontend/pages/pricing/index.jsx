import React, { useState } from 'react';
import MainLayout from '@/components/common/MainLayout';
import SEO from '@/components/common/SEO';
import {
  PricingHero,
  PricingCards,
  PricingAddons,
  PricingFloatingBar,
  PricingFAQ,
} from '@/components/pricing';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('scale'); // Pre-select the popular plan or allow user to toggle
  const [selectedAddons, setSelectedAddons] = useState([]);

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
  };

  const handleToggleAddon = (addonId) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId)
        ? prev.filter((id) => id !== addonId)
        : [...prev, addonId]
    );
  };

  const handleClearSelection = () => {
    setSelectedPlan(null);
    setSelectedAddons([]);
  };

  return (
    <MainLayout>
      <SEO
        title="Pricing & Partnership Packages | Strains Group"
        description="Explore clear, transparent pricing packages and modular services across video production, digital marketing, and zero-discharge clothing manufacturing at Strains Group."
        keywords={[
          'creative agency pricing',
          'video production packages India',
          'digital marketing retainers Hyderabad',
          'clothing manufacturing quote Tirupur',
        ]}
        canonical="/pricing"
      />

      <div className="pricing-page-main bg-[#0c0c0c] text-white min-h-screen relative">
        {/* Section 1: Hero & Retainer/Project Toggle */}
        <PricingHero
          billingCycle={billingCycle}
          setBillingCycle={setBillingCycle}
        />

        {/* Section 2: Core 3 Pricing Cards with Selection & Direct Contact Buttons */}
        <PricingCards
          billingCycle={billingCycle}
          selectedPlan={selectedPlan}
          onSelectPlan={handleSelectPlan}
        />

        {/* Section 3: Modular Add-ons ("Customize as Needed") */}
        <PricingAddons
          selectedAddons={selectedAddons}
          onToggleAddon={handleToggleAddon}
          selectedPlan={selectedPlan}
        />

        {/* Section 4: FAQs & Custom Enterprise Inquiry Banner */}
        <PricingFAQ />

        {/* Section 5: Sticky Bottom Action Bar when plan or addons are selected */}
        <PricingFloatingBar
          selectedPlan={selectedPlan}
          selectedAddons={selectedAddons}
          billingCycle={billingCycle}
          onClearSelection={handleClearSelection}
        />
      </div>
    </MainLayout>
  );
}
