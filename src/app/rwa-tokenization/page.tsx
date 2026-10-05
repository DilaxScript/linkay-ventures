'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowDown,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Coins,
  Globe,
  Sparkles,
  Building2,
  Landmark,
  Layers,
  Palette,
  Film,
  Database,
  Shield,
  Scale,
  LineChart,
  PieChart,
  Zap,
  KeyRound,
  Eye,
  Gauge,
  ArrowUpRight,
  BrainCircuit,
  GitBranch,
  CheckCheck,
  ArrowRightLeft,
  Settings2,
  Search,
  CheckCircle2,
  Activity,
} from 'lucide-react';
import { BackgroundLines } from '@/components/ui/background-lines';
import { motion, useReducedMotion } from 'framer-motion';




export default function RwaTokenizationPage() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const assetClasses = [
    {
      title: 'Intellectual Property',
      desc: 'Patents, trademarks, copyrights, licensing and royalties.',
      icon: LightbulbIcon,
      badge: 'IP & Patents',
    },
    {
      title: 'Real Estate',
      desc: 'Properties, land, developments and hospitality assets.',
      icon: Building2,
      badge: 'Property & Land',
    },
    {
      title: 'Financial Assets',
      desc: 'Eligible financial instruments and structured assets.',
      icon: Landmark,
      badge: 'Securities & Credit',
    },
    {
      title: 'Infrastructure',
      desc: 'Projects, facilities, equipment and infrastructure assets.',
      icon: Layers,
      badge: 'Energy & Transport',
    },
    {
      title: 'Commodities',
      desc: 'Selected commodities and commodity-linked assets.',
      icon: Sparkles,
      badge: 'Metals & Energy',
    },
    {
      title: 'Collectibles',
      desc: 'Art, memorabilia and other verified collectible assets.',
      icon: Palette,
      badge: 'Fine Art & Rare',
    },
    {
      title: 'Media & Entertainment',
      desc: 'Content rights, licensing interests and royalties.',
      icon: Film,
      badge: 'Streaming & Media',
    },
    {
      title: 'Data & Digital Assets',
      desc: 'Content rights, licensing interests and royalties.',
      icon: Database,
      badge: 'AI & Data Provenance',
    },
  ];

  const pathways = [
    { title: 'Asset Discovery', icon: Search, tag: '01' },
    { title: 'Verification', icon: ShieldCheck, tag: '02' },
    { title: 'Valuation', icon: TrendingUp, tag: '03' },
    { title: 'Digitalization', icon: Cpu, tag: '04' },
    { title: 'Tokenization', icon: Coins, tag: '05' },
    { title: 'Compliance', icon: CheckCheck, tag: '06' },
    { title: 'Market Access', icon: Globe, tag: '07' },
    { title: 'Monetization', icon: ArrowUpRight, tag: '08' },
  ];

  const techStack = [
    {
      id: 1,
      title: 'Smart Assets',
      desc: 'Centralize asset identity, documentation, ownership, provenance and supporting data.',
      icon: Shield,
      layer: 'Foundation',
    },
    {
      id: 2,
      title: 'Valuation',
      desc: 'Bring together valuation information, market data and professional assessments.',
      icon: Scale,
      layer: 'Intelligence',
    },
    {
      id: 3,
      title: 'Monetization',
      desc: 'Create structured pathways for capital formation, transfers and potential liquidity.',
      icon: LineChart,
      layer: 'Liquidity',
    },
    {
      id: 4,
      title: 'Compliance',
      desc: 'Integrate identity, KYC, AML, eligibility and jurisdiction-specific requirements.',
      icon: CheckCheck,
      layer: 'Regulation',
    },
    {
      id: 5,
      title: 'Tokenomics',
      desc: 'Create intelligent digital representations of physical assets for analysis, monitoring and lifecycle management.',
      icon: PieChart,
      layer: 'Economics',
    },
    {
      id: 6,
      title: 'Mint & Issue',
      desc: 'Transform qualifying asset structures into digital representations through appropriate issuance infrastructure.',
      icon: Zap,
      layer: 'Issuance',
    },
    {
      id: 7,
      title: 'Market Access',
      desc: 'Connect eligible assets with appropriate primary-market, marketplace and secondary-market infrastructure.',
      icon: Globe,
      layer: 'Distribution',
    },
    {
      id: 8,
      title: 'AI Digital Twins',
      desc: 'Create intelligent digital representations of physical assets for analysis, monitoring and lifecycle management.',
      icon: BrainCircuit,
      layer: 'AI & Data',
    },
  ];

  const benefits = [
    {
      title: 'Easy Access',
      desc: 'Create structured digital pathways for qualifying assets.',
      icon: KeyRound,
      stat: 'Global Reach',
    },
    {
      title: 'Partial Ownership',
      desc: 'Create structured digital pathways for qualifying assets.',
      icon: PieChart,
      stat: 'Fractional',
    },
    {
      title: 'Transparency',
      desc: 'Connect asset information, documentation and ownership records.',
      icon: Eye,
      stat: '100% Auditable',
    },
    {
      title: 'Efficiency',
      desc: 'Digitize fragmented asset and transaction workflows.',
      icon: Gauge,
      stat: 'T+0 Settlement',
    },
    {
      title: 'Capital Formation',
      desc: 'Create additional infrastructure for connecting assets with appropriate capital.',
      icon: ArrowUpRight,
      stat: 'New Capital',
    },
    {
      title: 'Asset Intelligence',
      desc: 'Combine AI, data and digital twins to better understand the underlying asset.',
      icon: BrainCircuit,
      stat: 'Smart Data',
    },
  ];

  const steps = [
    { num: 1, title: 'Identify', desc: 'Discover and register the asset.', icon: Search },
    { num: 2, title: 'Verify', desc: 'Establish ownership, provenance and documentation.', icon: ShieldCheck },
    { num: 3, title: 'Value', desc: 'Assess the asset using valuation and market intelligence.', icon: TrendingUp },
    { num: 4, title: 'Structure', desc: 'Define the appropriate legal and economic framework.', icon: GitBranch },
    { num: 5, title: 'Tokenize', desc: 'Create the digital representation.', icon: Coins },
    { num: 6, title: 'Comply', desc: 'Apply applicable identity and regulatory controls.', icon: CheckCheck },
    { num: 7, title: 'Connect', desc: 'Link eligible assets with appropriate market infrastructure.', icon: ArrowRightLeft },
    { num: 8, title: 'Manage', desc: 'Monitor ownership, data, valuation and lifecycle events.', icon: Settings2 },
  ];

  const ecosystemParticipants = [
    { title: 'Asset Owners', desc: 'Institutional & private owners unlocking capital liquidity.', tag: 'Originators' },
    { title: 'Valuation Professionals', desc: 'Accredited appraisers & market intelligence analysts.', tag: 'Auditors' },
    { title: 'Technology Providers', desc: 'Blockchain infrastructure, smart contracts & protocols.', tag: 'Infrastructure' },
    { title: 'Legal & Compliance Specialists', desc: 'Securities lawyers, regulatory counsels & KYC/AML providers.', tag: 'Governance' },
    { title: 'Financial & Market Participants', desc: 'Family offices, accredited investors & asset managers.', tag: 'Capital' },
    { title: 'Marketplaces & Liquidity Providers', desc: 'Secondary exchanges, AMMs & order-book trading venues.', tag: 'Liquidity' },
  ];

  const formulaItems = [
    'Asset Data',
    'AI',
    'Digital Twins',
    'Valuation',
    'Tokenization',
    'Compliance',
    'Market Infrastructure',
  ];
  const reduceMotion = useReducedMotion();

  return (
    <main className="w-full bg-white text-gray-900 font-sans antialiased overflow-x-hidden selection:bg-orange-500 selection:text-white">
      {/* 1. HERO BANNER - with BackgroundLines */}
      {/* 1. HERO BANNER - Centered */}
      <BackgroundLines className="relative w-full overflow-hidden border-b border-gray-200/80 bg-gradient-to-b from-gray-50 via-white to-white min-h-screen md:min-h-0">
        <section className="relative flex min-h-screen w-full items-center justify-center px-5 py-12 sm:px-8 sm:py-16 md:min-h-0 md:px-12 md:py-24 lg:pt-40">
          <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gray-800 shadow-sm backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-1.5 sm:text-[12px] lg:text-[13px]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
              <span>Linkay Ventures</span>
            </div>

            {/* Heading - Mobile-ல் சிறியது, Desktop-ல் பெரியது */}
            <h1 className="mb-4 font-poppins text-[28px] font-bold leading-[1.2] tracking-tight text-gray-900 sm:mb-6 sm:text-[42px] md:text-[48px] lg:text-[68px] xl:text-[76px]">
              Multi-RWA Tokenization &amp; Monetization Platform
            </h1>

            {/* Paragraph */}
            <p className="mx-auto mb-8 max-w-[620px] font-red-hat text-[15px] font-normal leading-relaxed text-gray-600 sm:mb-10 sm:max-w-[700px] sm:text-[18px] md:text-[22px] lg:max-w-[780px] lg:text-[26px]">
              Transforming real-world assets into structured digital opportunities.
            </p>

            {/* Buttons */}
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 font-poppins text-[15px] font-semibold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-orange-600 active:translate-y-0 sm:w-auto sm:px-8 sm:py-4 sm:text-[16px] lg:px-10 lg:py-5 lg:text-[18px]"
              >
                <span>Discuss an Asset</span>
                <ArrowRight size={18} className="sm:h-5 sm:w-5" />
              </Link>

              <Link
                href="#how-it-works"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white/80 px-6 py-3.5 font-poppins text-[15px] font-semibold text-gray-800 shadow-sm backdrop-blur-sm transition-all hover:border-gray-400 hover:text-orange-600 sm:w-auto sm:px-7 sm:py-4 sm:text-[16px] lg:px-9 lg:py-5 lg:text-[18px]"
              >
                <span>Explore How It Works</span>
                <ArrowRight size={16} className="sm:h-5 sm:w-5" />
              </Link>
            </div>

            {/* Features */}
            <div className="mt-10 w-full max-w-[820px] border-t border-gray-200 pt-6 sm:mt-12 sm:max-w-[900px] sm:pt-8 lg:max-w-[1000px]">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[10px] font-medium uppercase tracking-wider text-gray-600 sm:gap-x-8 sm:text-[12px] md:text-[13px] lg:gap-x-10 lg:text-[15px]">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <CheckCircle2
                    size={16}
                    className="shrink-0 text-orange-500 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  />
                  <span>Institutional Grade Protocol</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <ShieldCheck
                    size={16}
                    className="shrink-0 text-orange-500 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  />
                  <span>Regulatory-Compliant Framework</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <Activity
                    size={16}
                    className="shrink-0 text-orange-500 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  />
                  <span>Real-Time On-Chain Settlement</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BackgroundLines>
      {/* 2. FEATURES - Finance with Expert Leaders */}
      <section className="w-full py-20 px-6 sm:px-12 lg:px-16 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              FEATURES
            </span>
            <h2 className="font-poppins text-gray-900 text-[30px] sm:text-[40px] font-bold leading-tight mb-4">
              Finance with expert leaders
            </h2>
            <div className="w-12 h-1 bg-orange-500 mb-6 rounded-full" />
            <p className="font-red-hat text-gray-600 text-[16px] sm:text-[18px] leading-relaxed mb-8 font-normal">
              Many valuable assets remain difficult to access, structure, finance and transfer. Our
              RWA infrastructure is designed to create structured pathways for qualifying assets
              through
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {pathways.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-gray-50/80 hover:bg-white border border-gray-200/90 hover:border-gray-300 rounded-xl p-4 text-center transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="w-10 h-10 mx-auto mb-2.5 rounded-lg bg-white border border-gray-200 text-gray-700 group-hover:text-orange-500 group-hover:border-orange-200 flex items-center justify-center transition-colors shadow-2xs">
                      <IconComponent size={18} />
                    </div>

                    <h4 className="font-poppins text-gray-800 text-[13.5px] font-semibold leading-tight group-hover:text-gray-900 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Structured Image Box with object-contain & full display */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-[360px] sm:h-[440px] overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
              <Image
                src="/images/dwojhzdwojhzdwoj.jpeg"
                alt="Finance with Expert Leaders"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />

              {/* subtle overlay for premium look */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. MULTIPLE ASSET CLASSES */}
      <section className="w-full py-20 px-6 sm:px-12 lg:px-16 bg-gray-50/70 border-t border-b border-gray-200/80">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[850px] mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              Multiple Asset Classes
            </span>
            <h2 className="font-poppins text-gray-900 text-[30px] sm:text-[42px] font-bold leading-tight mb-4">
              One Platform. Diverse Real-World Assets.
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {assetClasses.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white p-6 rounded-2xl border border-gray-200/80 hover:border-gray-300 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 group-hover:text-orange-500 group-hover:border-orange-200 transition-colors">
                        <IconComp size={22} />
                      </div>
                      <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider px-2 py-0.5 rounded bg-gray-100 border border-gray-200/60">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-poppins text-gray-900 text-[19px] font-bold mb-2 group-hover:text-orange-600 transition-colors">
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

      {/* 4. THE RWA TECHNOLOGY STACK */}
      <section className="w-full bg-gray-950 py-20 px-6 sm:px-12 lg:px-16 text-white relative">
        <div className="max-w-[1240px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-gray-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                The RWA Technology Stack
              </span>
              <h2 className="font-poppins text-white text-[30px] sm:text-[42px] font-bold leading-tight max-w-[700px]">
                From Asset Intelligence to Market Infrastructure
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {techStack.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  className="group bg-gray-900/80 hover:bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 group-hover:text-orange-400 group-hover:border-orange-500/40 transition-colors">
                        <IconComp size={19} />
                      </div>
                      <span className="text-[11px] font-mono text-gray-400 bg-gray-800/80 px-2 py-0.5 rounded border border-gray-700/60">
                        {item.layer}
                      </span>
                    </div>

                    <h3 className="font-poppins text-white text-[19px] font-bold mb-2 group-hover:text-orange-400 transition-colors">
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

      {/* 5. WHY RWA TOKENIZATION? */}
      <section className="w-full py-20 px-6 sm:px-12 lg:px-16 max-w-[1340px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              Why RWA Tokenization?
            </span>
            <h2 className="font-poppins text-gray-900 text-[30px] sm:text-[40px] font-bold leading-tight mb-4">
              Greater Possibilities for Digital Opportunity
            </h2>
            <div className="w-12 h-1 bg-orange-500 mb-8 rounded-full" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b, idx) => {
                const IconComp = b.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-gray-200/90 hover:border-gray-300 shadow-2xs hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 group-hover:text-orange-500 transition-colors flex items-center justify-center">
                        <IconComp size={17} />
                      </div>
                      <span className="text-[11px] font-semibold text-gray-700 bg-gray-100 border border-gray-200/70 px-2 py-0.5 rounded">
                        {b.stat}
                      </span>
                    </div>
                    <h3 className="font-poppins text-gray-900 text-[16.5px] font-bold mb-1.5 group-hover:text-orange-600 transition-colors">
                      {b.title}
                    </h3>
                    <p className="font-red-hat text-gray-600 text-[13.5px] leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image: full, uncropped, large */}
          <div className="lg:col-span-6">
            {/* Image: full, uncropped, large - No border, no padding, no bg, no shadow */}
            <div className="lg:col-span-6">
              <Image
                src="/images/uilivuerqgliuer-1024x1024.png"
                alt="Why RWA Tokenization?"
                width={1024}
                height={1024}
                priority
                className="w-full h-auto object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section
        id="How It Works"
        className="w-full py-20 px-6 sm:px-12 lg:px-16 bg-gray-50/70 border-t border-b border-gray-200/80"
      >
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[850px] mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              How It Works
            </span>
            <h2 className="font-poppins text-gray-900 text-[30px] sm:text-[42px] font-bold leading-tight mb-4">
              From Physical Asset to Digital Opportunity
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((st) => {
              const IconComp = st.icon;
              const isSelected = activeStep === st.num;
              return (
                <div
                  key={st.num}
                  onClick={() => setActiveStep(st.num)}
                  className={`cursor-pointer bg-white p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between group ${
                    isSelected
                      ? 'border-orange-500 ring-2 ring-orange-500/20 shadow-md -translate-y-0.5'
                      : 'border-gray-200/90 hover:border-gray-300 shadow-2xs hover:shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`font-poppins text-[28px] font-extrabold leading-none ${
                          isSelected ? 'text-orange-500' : 'text-gray-400 group-hover:text-gray-700'
                        }`}
                      >
                        {st.num.toString().padStart(2, '0')}
                      </span>
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-orange-500 text-white'
                            : 'bg-gray-100 text-gray-700 group-hover:text-orange-500 group-hover:bg-orange-50'
                        }`}
                      >
                        <IconComp size={18} />
                      </div>
                    </div>

                    <h3 className="font-poppins text-gray-900 text-[19px] font-bold mb-2 group-hover:text-orange-600 transition-colors">
                      {st.title}
                    </h3>
                  </div>

                  <p className="font-red-hat text-gray-600 text-[13.5px] leading-relaxed mt-2 pt-3 border-t border-gray-100">
                    {st.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. BEYOND TOKENIZATION & THE LINKAY RWA VISION */}
      <section className="w-full bg-gray-950 py-20 px-6 sm:px-12 lg:px-16 text-white relative">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          <div className="lg:col-span-5">
            <div className="relative w-full h-[360px] sm:h-[440px] overflow-hidden rounded-2xl bg-gray-950 shadow-xl">
              <Image
                src="/images/42miq342miq342m.jpeg"
                alt="Beyond Tokenization"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-9">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-gray-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                Beyond Tokenization
              </span>
              <h2 className="font-poppins text-white text-[28px] sm:text-[38px] font-bold leading-tight mb-4">
                Building the Infrastructure Around the Asset
              </h2>

              <div className="flex flex-wrap gap-2 my-5">
                {formulaItems.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-800 text-xs font-medium text-gray-200"
                  >
                    <span>{item}</span>
                    {idx < formulaItems.length - 1 && (
                      <span className="text-orange-500 font-bold">+</span>
                    )}
                  </span>
                ))}
              </div>

              <p className="font-red-hat text-gray-300 text-[16px] leading-relaxed">
                Make real-world value more structured, intelligent and digitally connected.
              </p>
            </div>

            <div className="pt-7 border-t border-gray-800">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-gray-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                The Linkay RWA Vision
              </span>
              <h2 className="font-poppins text-white text-[26px] sm:text-[34px] font-bold leading-tight mb-4">
                From Real-World Value to Digital Market Opportunity
              </h2>
              <p className="font-red-hat text-gray-300 text-[15.5px] leading-relaxed">
                Linkay Ventures is exploring the convergence of finance, technology, AI, blockchain
                and real-world assets to create new digital infrastructure for the evolving global
                economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. AN ECOSYSTEM OF CONNECTED PARTICIPANTS - Process Flow (Vertical Stack with Connecting Arrows) */}
      <section className="w-full py-20 px-6 sm:px-12 lg:px-16 max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[850px] mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            An Ecosystem of Connected Participants
          </span>
          <h2 className="font-poppins text-gray-900 text-[30px] sm:text-[42px] font-bold leading-tight mb-3">
            Connecting the RWA Value Chain
          </h2>
          <p className="font-red-hat text-gray-600 text-[17px]">
            The platform is designed to bring together
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Single-column vertical flow with ArrowDown connectors between cards */}
        <div className="relative mx-auto max-w-[760px]">
          <span
            aria-hidden="true"
            className="absolute bottom-10 left-[19px] top-10 w-px bg-orange-500/50 sm:left-[21px]"
          />

          <div className="flex flex-col gap-9 pl-14 sm:pl-16">
            {ecosystemParticipants.map((part, idx) => (
              <motion.div
                key={`${part.title}-${idx}`}
                className="relative w-full"
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.08,
                  ease: 'easeOut',
                }}
              >
                {/* Number sits over the connecting line */}
                <span
                  aria-hidden="true"
                  className="absolute -left-14 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white font-mono text-xs font-medium text-orange-500 shadow-sm sm:-left-16 sm:h-11 sm:w-11"
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <div className="group relative overflow-hidden rounded-lg border border-white bg-white/80 p-5 shadow-sm backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md sm:p-6">
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-orange-500 transition-transform duration-300 group-hover:scale-y-100"
                  />

                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                    <h3 className="font-poppins text-[16px] font-semibold leading-tight text-gray-900 sm:text-[18px]">
                      {part.title}
                    </h3>


                  </div>

                  <p className="mt-2 text-[13px] leading-relaxed text-gray-500 sm:text-[14px]">
                    {part.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gray-950 text-white border border-gray-800 text-center relative max-w-[960px] mx-auto">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold mb-2 block">
              Start Your Tokenization Journey
            </span>
            <h3 className="font-poppins text-2xl sm:text-3xl font-bold mb-4">
              Ready to Tokenize Real-World Assets?
            </h3>
            <p className="font-red-hat text-gray-400 text-sm sm:text-base mb-8">
              Discuss with our experts to structure, digitize, and issue your assets on a compliant
              institutional platform.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white font-poppins text-sm font-semibold px-8 py-3.5 rounded-xl transition-all shadow-md shadow-orange-500/20"
              >
                Discuss an Asset
              </Link>
              <Link
                href="#How It Works"
                className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-poppins text-sm font-semibold px-7 py-3.5 rounded-xl transition-all"
              >
                Explore How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function LightbulbIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}
