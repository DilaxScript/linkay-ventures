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
  Zap,
  Droplets,
  Cpu,
  Building2,
  LineChart,
  Globe,
  Users,
  Lightbulb,
  Network,
  Target,
} from 'lucide-react';
import { BackgroundLines } from '@/components/ui/background-lines';

export const metadata: Metadata = {
  title: 'Linkay Think-Tank – Linkay Ventures',
  description: "Harness Global Expertise to Solve Tomorrow's Challenges with Linkay Think Tank.",
};

export default function LinkayThinkTankPage() {
  const domains = [
    {
      title: 'Energy & Climate',
      desc: 'We help clients accelerate the adoption of renewable systems, decarbonize operations, and build climate resilience strategies.',
      icon: Zap,
      tag: 'Energy',
    },
    {
      title: 'Water & Food Security',
      desc: 'We advise on sustainable resource management, equitable distribution systems, and resilient infrastructure for essential services.',
      icon: Droplets,
      tag: 'Resources',
    },
    {
      title: 'Digital Transformation',
      desc: 'We guide organizations through disruption — optimizing operations, modernizing workflows, and enabling data driven growth.',
      icon: Cpu,
      tag: 'Digital',
    },
    {
      title: 'Infrastructure Resilience',
      desc: 'From design to governance, we build adaptive systems that resist shocks, manage risks, and evolve with change.',
      icon: Building2,
      tag: 'Infrastructure',
    },
    {
      title: 'Techno-Commercial Solutions',
      desc: 'We bridge technical feasibility with financial viability — ensuring recommendations are both visionary and implementable.',
      icon: LineChart,
      tag: 'Commercial',
    },
  ];

  const approach = [
    {
      title: 'Global Collective',
      desc: 'A worldwide network of strategists, technologists, and domain experts.',
      icon: Globe,
      tag: 'Worldwide',
    },
    {
      title: 'Cross-Disciplinary',
      desc: 'Bringing together insights from multiple fields to solve complex problems.',
      icon: Network,
      tag: 'Integrated',
    },
    {
      title: 'Future-Focused',
      desc: 'Designing resilient, sustainable, scalable solutions for tomorrow’s challenges.',
      icon: Lightbulb,
      tag: 'Vision',
    },
    {
      title: 'Action-Oriented',
      desc: 'Bridging ideas into action with practical, implementable recommendations.',
      icon: Target,
      tag: 'Impact',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'We map the challenge, context, and stakeholders to frame the real problem.',
      icon: Target,
      tag: 'Framing',
    },
    {
      num: '02',
      title: 'Analyze',
      desc: 'Our global experts bring cross-disciplinary insight to examine every angle.',
      icon: Lightbulb,
      tag: 'Insight',
    },
    {
      num: '03',
      title: 'Design',
      desc: 'We co-create resilient, sustainable, and scalable solutions with your team.',
      icon: Network,
      tag: 'Co-Create',
    },
    {
      num: '04',
      title: 'Deliver',
      desc: 'We bridge ideas into action — with clear pathways for measurable impact.',
      icon: Zap,
      tag: 'Execution',
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
            <div className="relative w-[240px] h-[120px] sm:w-[320px] sm:h-[160px] mb-6">
              <Image
                src="/images/think-tank-logo.png"
                alt="Linkay Think-Tank"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 240px, 320px"
              />
            </div>

            {/* Heading */}
            <h1 className="mb-4 font-poppins text-[30px] font-bold leading-[1.15] tracking-tight text-gray-900 sm:mb-5 sm:text-[44px] md:text-[52px] lg:text-[62px]">
              Linkay Think-Tank
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mb-8 max-w-[640px] font-red-hat text-[15px] font-normal leading-relaxed text-gray-600 sm:mb-10 sm:max-w-[720px] sm:text-[18px] md:text-[20px] lg:max-w-[800px] lg:text-[22px]">
              A global collective of strategists, technologists, and domain experts — bridging ideas
              into action for a resilient, sustainable future.
            </p>

            {/* Buttons */}
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
              <Link
                href="https://linkaythinktank.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 font-poppins text-[15px] font-semibold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-orange-600 active:translate-y-0 sm:w-auto sm:px-8 sm:py-4 sm:text-[16px] lg:px-10 lg:py-5 lg:text-[18px]"
              >
                <span>Explore Think-Tank</span>
                <ArrowRight size={18} className="sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="#domains"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white/80 px-6 py-3.5 font-poppins text-[15px] font-semibold text-gray-800 shadow-sm backdrop-blur-sm transition-all hover:border-gray-400 hover:text-orange-600 sm:w-auto sm:px-7 sm:py-4 sm:text-[16px] lg:px-9 lg:py-5 lg:text-[18px]"
              >
                <span>What We Do</span>
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
                  <span>Global Expert Collective</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <ShieldCheck
                    size={16}
                    className="shrink-0 text-orange-500 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  />
                  <span>Cross-Disciplinary Insight</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <Activity
                    size={16}
                    className="shrink-0 text-orange-500 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  />
                  <span>Ideas into Action</span>
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
              About the Think-Tank
            </span>
            <h2 className="font-poppins text-gray-900 text-[30px] sm:text-[40px] font-bold leading-tight mb-4">
              Harness Global Expertise to Solve Tomorrow&apos;s Challenges
            </h2>
            <div className="w-12 h-1 bg-orange-500 mb-6 rounded-full" />

            <p className="font-red-hat text-gray-600 text-[16px] sm:text-[18px] leading-relaxed mb-5">
              Linkay Think Tank is a global collective of strategists, technologists, and domain
              experts.
            </p>
            <p className="font-red-hat text-gray-600 text-[16px] sm:text-[18px] leading-relaxed">
              We partner with forward-looking organizations to design resilient, sustainable,
              scalable solutions — bridging ideas into action.
            </p>

            {/* Quick highlight chips */}
            <div className="flex flex-wrap gap-2 mt-7">
              {['Strategy', 'Technology', 'Sustainability', 'Resilience', 'Innovation'].map(
                (chip, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-[12.5px] font-medium text-gray-700"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    {chip}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right: Logo panel (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-[320px] sm:h-[380px] rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/90 shadow-lg overflow-hidden flex items-center justify-center">
              {/* Background accents */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-orange-500/5 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-orange-500/5 blur-3xl" />

              <div className="relative w-full max-w-[340px] h-[180px] sm:h-[220px]">
                <Image
                  src="/images/think-tank-logo.png"
                  alt="Linkay Think-Tank Logo"
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 768px) 340px, 340px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO — Light card grid (5 cards, last spans 2 cols on lg) */}
      <section
        id="domains"
        className="w-full py-20 px-6 sm:px-12 lg:px-16 bg-gray-50/70 border-t border-b border-gray-200/80"
      >
        <div className="max-w-[1240px] mx-auto">
          {/* Header */}
          <div className="text-center max-w-[850px] mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-[11px] font-semibold uppercase tracking-[0.08em] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              What We Do
            </span>

            <h2 className="font-poppins text-gray-900 text-[32px] sm:text-[42px] font-bold leading-[1.15] tracking-tight mb-5">
              Five Domains, One Mission
            </h2>

            <p className="font-red-hat text-gray-600 text-[16px] sm:text-[17px] leading-relaxed max-w-[700px] mx-auto">
              We bring rigorous analysis, deep domain expertise, and practical execution to every
              engagement.
            </p>

            <div className="w-14 h-1 bg-orange-500 mx-auto mt-6 rounded-full" />
          </div>

          {/* Cards — 3-2 balanced split */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
            {domains.map((item, idx) => {
              const IconComp = item.icon;
              const isLastTwo = idx >= domains.length - 2; // last 2 cards

              return (
                <div
                  key={idx}
                  className={`group bg-white p-6 rounded-2xl border border-gray-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-gray-300 transition-all duration-200 flex flex-col justify-between ${
                    isLastTwo ? 'lg:col-span-3' : 'lg:col-span-2'
                  }`}
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

                  <div className="mt-5 pt-3 border-t border-gray-100">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-orange-500">
                      Domain {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* 4. OUR APPROACH — Dark section (RWA "Technology Stack" style) */}
      <section className="w-full bg-gray-950 py-20 px-6 sm:px-12 lg:px-16 text-white relative">
        <div className="max-w-[1240px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-gray-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                Our Approach
              </span>
              <h2 className="font-poppins text-white text-[30px] sm:text-[42px] font-bold leading-tight max-w-[700px]">
                How We Turn Insight into Impact
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {approach.map((item, idx) => {
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

      {/* 5. HOW IT WORKS — 4-step process (light) */}
      <section className="w-full py-20 px-6 sm:px-12 lg:px-16 max-w-[1240px] mx-auto">
        <div className="text-center max-w-[850px] mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            Engagement Flow
          </span>
          <h2 className="font-poppins text-gray-900 text-[30px] sm:text-[42px] font-bold leading-tight mb-4">
            From Challenge to Action
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
              Take the Next Step
            </span>
            <h3 className="font-poppins text-2xl sm:text-3xl font-bold mb-4">
              Ready to Tackle Your Greatest Challenges?
            </h3>
            <p className="font-red-hat text-gray-400 text-sm sm:text-base mb-8">
              Let&apos;s build your pathway to the future — together with our global network of
              strategists, technologists, and domain experts.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="https://linkaythinktank.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-poppins text-sm font-semibold px-8 py-3.5 rounded-xl transition-all shadow-md shadow-orange-500/20"
              >
                <span>Start With Us</span>
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
