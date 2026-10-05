import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Activity,
  Wheat,
  Flame,
  Gem,
  Factory,
  Globe,
  Users,
  FileCheck2,
  Handshake,
  Truck,
  BadgeCheck,
} from 'lucide-react';
import { BackgroundLines } from '@/components/ui/background-lines';

export const metadata: Metadata = {
  title: 'Linkay Commodities – Linkay Ventures',
  description:
    'Linkay Commodities, your trusted partner in navigating the fast-paced world of commodities trading.',
};

export default function LinkayCommoditiesPage() {
  const commodityClasses = [
    {
      title: 'Agricultural Products',
      desc: 'Grains, oils, pulses, and soft commodities sourced from verified global suppliers.',
      icon: Wheat,
      tag: 'Agri',
    },
    {
      title: 'Energy',
      desc: 'Crude, refined products, and energy-linked commodities traded under strict compliance.',
      icon: Flame,
      tag: 'Energy',
    },
    {
      title: 'Precious Metals',
      desc: 'Gold, silver, and other precious metals with chain-of-custody documentation.',
      icon: Gem,
      tag: 'Metals',
    },
    {
      title: 'Raw Materials',
      desc: 'Industrial inputs, ores, and base materials for manufacturing and construction.',
      icon: Factory,
      tag: 'Industrial',
    },
  ];

  const advantages = [
    {
      title: 'Verified Network',
      desc: 'Every broker and counterparty is vetted through a rigorous KYC and compliance process.',
      icon: BadgeCheck,
      tag: 'Trust',
    },
    {
      title: 'Global Reach',
      desc: 'Cross-border sourcing and distribution across established trade corridors worldwide.',
      icon: Globe,
      tag: 'Worldwide',
    },
    {
      title: 'Compliant Transactions',
      desc: 'Fully documented, regulation-aligned trade flows with end-to-end traceability.',
      icon: FileCheck2,
      tag: 'Compliance',
    },
    {
      title: 'Transparent Pricing',
      desc: 'Clear, market-driven pricing with no hidden spreads or undisclosed intermediary fees.',
      icon: Activity,
      tag: 'Clarity',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Connect',
      desc: 'Submit your buy or sell requirement through our secure onboarding process.',
      icon: Users,
      tag: 'Onboard',
    },
    {
      num: '02',
      title: 'Verify',
      desc: 'We match you with verified brokers and counterparties across our global network.',
      icon: ShieldCheck,
      tag: 'KYC / AML',
    },
    {
      num: '03',
      title: 'Contract',
      desc: 'Structured agreements with transparent pricing and fully documented terms.',
      icon: Handshake,
      tag: 'Agreement',
    },
    {
      num: '04',
      title: 'Deliver',
      desc: 'Coordinated logistics and settlement through to final delivery and confirmation.',
      icon: Truck,
      tag: 'Settlement',
    },
  ];

  return (
    <main className="w-full bg-white text-gray-900 font-sans antialiased overflow-x-hidden selection:bg-orange-500 selection:text-white">
      {/* 1. HERO BANNER — Same design DNA as all Linkay pages */}
      <BackgroundLines className="relative w-full overflow-hidden border-b border-gray-200/80 bg-gradient-to-b from-gray-50 via-white to-white">
        <section className="relative flex min-h-[560px] w-full items-center justify-center px-5 py-20 sm:px-8 sm:py-24 md:px-12 md:py-28 lg:py-32">
          <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gray-800 shadow-sm backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-1.5 sm:text-[12px] lg:text-[13px]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
              <span>Linkay Ventures Group</span>
            </div>

            {/* Logo */}
            <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] mb-4">
              <Image
                src="/images/commodities-logo.png"
                alt="Linkay Commodities"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 220px, 280px"
              />
            </div>

            {/* Heading */}
            <h1 className="mb-4 font-poppins text-[30px] font-bold leading-[1.15] tracking-tight text-gray-900 sm:mb-5 sm:text-[44px] md:text-[52px] lg:text-[62px]">
              Linkay Commodities
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mb-8 max-w-[640px] font-red-hat text-[15px] font-normal leading-relaxed text-gray-600 sm:mb-10 sm:max-w-[720px] sm:text-[18px] md:text-[20px] lg:max-w-[800px] lg:text-[22px]">
              Your trusted partner in navigating the fast-paced world of commodities trading —
              secure, compliant, and transparent from sourcing to settlement.
            </p>

            {/* Buttons */}
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
              <Link
                href="https://linkaycommodities.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 font-poppins text-[15px] font-semibold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-orange-600 active:translate-y-0 sm:w-auto sm:px-8 sm:py-4 sm:text-[16px] lg:px-10 lg:py-5 lg:text-[18px]"
              >
                <span>Explore Platform</span>
                <ArrowRight size={18} className="sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="#trade"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white/80 px-6 py-3.5 font-poppins text-[15px] font-semibold text-gray-800 shadow-sm backdrop-blur-sm transition-all hover:border-gray-400 hover:text-orange-600 sm:w-auto sm:px-7 sm:py-4 sm:text-[16px] lg:px-9 lg:py-5 lg:text-[18px]"
              >
                <span>What We Trade</span>
                <ArrowRight size={16} className="sm:h-5 sm:w-5" />
              </Link>
            </div>

            {/* Feature strip */}
            <div className="mt-10 w-full max-w-[820px] border-t border-gray-200 pt-6 sm:mt-12 sm:max-w-[900px] sm:pt-8 lg:max-w-[1000px]">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[10px] font-medium uppercase tracking-wider text-gray-600 sm:gap-x-8 sm:text-[12px] md:text-[13px] lg:gap-x-10 lg:text-[15px]">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <CheckCircle2
                    size={16}
                    className="shrink-0 text-orange-500 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  />
                  <span>Verified Brokers &amp; Counterparties</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <ShieldCheck
                    size={16}
                    className="shrink-0 text-orange-500 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  />
                  <span>Compliant &amp; Transparent Trades</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <Globe
                    size={16}
                    className="shrink-0 text-orange-500 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  />
                  <span>Cross-Border Sourcing</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BackgroundLines>

      {/* 2. INTRO SPLIT — RWA "Finance with expert leaders" style */}
      <section className="w-full py-20 px-6 sm:px-12 lg:px-16 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content (7 cols) */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              About Linkay Commodities
            </span>
            <h2 className="font-poppins text-gray-900 text-[30px] sm:text-[40px] font-bold leading-tight mb-4">
              Secure Commodity Trading Across the Globe
            </h2>
            <div className="w-12 h-1 bg-orange-500 mb-6 rounded-full" />

            <p className="font-red-hat text-gray-600 text-[16px] sm:text-[18px] leading-relaxed mb-5">
              Linkay Commodities is your trusted partner in navigating the fast-paced world of
              commodities trading. Whether you&apos;re buying or selling, our secure platform
              connects you with verified brokers and counterparties across the globe.
            </p>
            <p className="font-red-hat text-gray-600 text-[16px] sm:text-[18px] leading-relaxed">
              From agricultural products and energy to precious metals, raw materials, and
              ready-made items — we ensure smooth, compliant, and transparent transactions every
              step of the way.
            </p>

            {/* Quick highlight chips */}
            <div className="flex flex-wrap gap-2 mt-7">
              {['Sourcing', 'Trading', 'Compliance', 'Logistics', 'Settlement'].map((chip, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-[12.5px] font-medium text-gray-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Logo panel (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-[380px] sm:h-[460px] rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/90 shadow-lg overflow-hidden flex items-center justify-center">
              {/* Background accents */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-orange-500/5 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-orange-500/5 blur-3xl" />

              <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px]">
                <Image
                  src="/images/commodities-logo.png"
                  alt="Linkay Commodities Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 260px, 320px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE TRADE — Light card grid */}
      <section
        id="trade"
        className="w-full py-20 px-6 sm:px-12 lg:px-16 bg-gray-50/70 border-t border-b border-gray-200/80"
      >
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[850px] mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              What We Trade
            </span>
            <h2 className="font-poppins text-gray-900 text-[30px] sm:text-[42px] font-bold leading-tight mb-4">
              Across Four Core Commodity Classes
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {commodityClasses.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white p-6 rounded-2xl border border-gray-200/90 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 group-hover:text-orange-500 group-hover:border-orange-200 transition-colors">
                        <IconComp size={19} />
                      </div>
                      <span className="text-[11px] font-mono text-gray-500 bg-gray-100 px-2 py-0.5 rounded border border-gray-200/60">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-poppins text-gray-900 text-[18px] font-bold mb-2 group-hover:text-orange-600 transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-red-hat text-gray-600 text-[14px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHY LINKSY COMMODITIES — Dark section (RWA "Technology Stack" style) */}
      <section className="w-full bg-gray-950 py-20 px-6 sm:px-12 lg:px-16 text-white relative">
        <div className="max-w-[1240px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-gray-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                Why Linkay Commodities
              </span>
              <h2 className="font-poppins text-white text-[30px] sm:text-[42px] font-bold leading-tight max-w-[700px]">
                Built on Trust, Verified at Every Step
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {advantages.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="group bg-gray-900/80 hover:bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 group-hover:text-orange-400 group-hover:border-orange-500/40 transition-colors">
                        <IconComp size={19} />
                      </div>
                      <span className="text-[11px] font-mono text-gray-400 bg-gray-800/80 px-2 py-0.5 rounded border border-gray-700/60">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-poppins text-white text-[18px] font-bold mb-2 group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-red-hat text-gray-400 text-[14px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS — 4-step process on light background */}
      <section className="w-full py-20 px-6 sm:px-12 lg:px-16 max-w-[1240px] mx-auto">
        <div className="text-center max-w-[850px] mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            How It Works
          </span>
          <h2 className="font-poppins text-gray-900 text-[30px] sm:text-[42px] font-bold leading-tight mb-4">
            From Inquiry to Settlement
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                className="group bg-white p-6 rounded-2xl border border-gray-200/90 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 group-hover:text-orange-500 group-hover:border-orange-200 transition-colors">
                      <IconComp size={19} />
                    </div>
                    <span className="font-poppins text-[22px] font-extrabold leading-none text-orange-500">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="font-poppins text-gray-900 text-[18px] font-bold mb-2 group-hover:text-orange-600 transition-colors leading-tight">
                    {step.title}
                  </h3>
                  <p className="font-red-hat text-gray-600 text-[14px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-orange-500">
                    {step.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. BOTTOM CTA — Dark banner → external site */}
      <section className="w-full px-6 sm:px-12 lg:px-16 pb-20 max-w-[1240px] mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gray-950 text-white border border-gray-800 text-center relative max-w-[960px] mx-auto overflow-hidden">
          {/* Subtle orange glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold mb-2 block">
              Linkay Commodities Platform
            </span>
            <h3 className="font-poppins text-2xl sm:text-3xl font-bold mb-4">
              Trade Commodities with Confidence
            </h3>
            <p className="font-red-hat text-gray-400 text-sm sm:text-base mb-8">
              Connect with verified brokers and counterparties on a secure, compliant, and fully
              transparent global trading platform.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="https://linkaycommodities.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-poppins text-sm font-semibold px-8 py-3.5 rounded-xl transition-all shadow-md shadow-orange-500/20"
              >
                <span>Explore Linkay Commodities</span>
                <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-poppins text-sm font-semibold px-7 py-3.5 rounded-xl transition-all"
              >
                Contact Linkay Ventures
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
