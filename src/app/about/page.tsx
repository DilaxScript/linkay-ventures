'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Activity,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { BackgroundLines } from '@/components/ui/background-lines';

export default function AboutPage() {
  const [showFounderBio, setShowFounderBio] = useState(false);

  const steps = [
    {
      id: 1,
      title: 'Initial Review',
      desc: "We begin by reviewing your existing materials and conducting a call with the founder(s) to determine if there's a fit for our services.",
      icon: '/images/images-2.png',
      hasCheck: true,
    },
    {
      id: 2,
      title: 'Evaluation',
      desc: 'We carefully evaluate your business model, founder/team, and investment opportunity to ensure a strong chance for success.',
      icon: '/images/535365079e6eae68b6bf4b8cd128b174.jpg',
      hasCheck: true,
    },
    {
      id: 3,
      title: 'Investment Readiness',
      desc: 'We assess whether you are investment-ready with impactful documents, a properly structured offering, and valuation.',
      icon: '/images/get-this-visually-appealing-of-financial-security-ready-to-use-icon-of-secure-investment-vector.jpg',
      hasCheck: true,
    },
    {
      id: 4,
      title: 'Funding Process',
      desc: 'Our objective is to get you funded by presenting your company as polished and well-prepared to gain investor attention.',
      icon: '/images/images-3.png',
      hasCheck: false,
    },
  ];

  const stats = [
    { value: '30+', label: 'Years Experience' },
    { value: '100+', label: 'Ventures Guided' },
    { value: 'Global', label: 'Investor Network' },
    { value: 'Multi', label: 'Sector Expertise' },
  ];

  return (
    <main className="w-full bg-white text-gray-900 font-sans antialiased overflow-x-hidden selection:bg-orange-500 selection:text-white">
      {/* 1. HERO BANNER */}
      <BackgroundLines className="relative w-full overflow-hidden border-b border-gray-200/80 bg-gradient-to-b from-gray-50 via-white to-white">
        <section className="relative flex min-h-[520px] w-full items-center justify-center px-5 py-20 sm:px-8 sm:py-24 md:px-12 md:py-28 lg:py-32">
          <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gray-800 shadow-sm backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-1.5 sm:text-[12px] lg:text-[13px]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
              <span>Linkay Ventures</span>
            </div>

            {/* Heading */}
            <h1 className="mb-4 font-poppins text-[32px] font-bold leading-[1.15] tracking-tight text-gray-900 sm:mb-6 sm:text-[46px] md:text-[54px] lg:text-[68px]">
              About Us
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mb-8 max-w-[620px] font-red-hat text-[15px] font-normal leading-relaxed text-gray-600 sm:mb-10 sm:max-w-[700px] sm:text-[18px] md:text-[20px] lg:max-w-[780px] lg:text-[22px]">
              Supporting groundbreaking ideas and visionary founders who seek to make a difference.
            </p>

            {/* Buttons */}
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 font-poppins text-[15px] font-semibold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-orange-600 active:translate-y-0 sm:w-auto sm:px-8 sm:py-4 sm:text-[16px] lg:px-10 lg:py-5 lg:text-[18px]"
              >
                <span>Get in Touch</span>
                <ArrowRight size={18} className="sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white/80 px-6 py-3.5 font-poppins text-[15px] font-semibold text-gray-800 shadow-sm backdrop-blur-sm transition-all hover:border-gray-400 hover:text-orange-600 sm:w-auto sm:px-7 sm:py-4 sm:text-[16px] lg:px-9 lg:py-5 lg:text-[18px]"
              >
                <span>Our Services</span>
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
                  <span>Impact-Driven Investment</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <ShieldCheck
                    size={16}
                    className="shrink-0 text-orange-500 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  />
                  <span>Trusted Advisory Network</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <Activity
                    size={16}
                    className="shrink-0 text-orange-500 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  />
                  <span>Sustainable Growth Focus</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BackgroundLines>

      {/* 2. OUR STORY */}
      <section className="w-full py-20 px-6 sm:px-12 lg:px-16 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              Real Life Results
            </span>
            <h2 className="font-poppins text-gray-900 text-[30px] sm:text-[40px] font-bold leading-tight mb-4">
              Our Story
            </h2>
            <div className="w-12 h-1 bg-orange-500 mb-6 rounded-full" />
            <p className="font-red-hat text-gray-600 text-[16px] sm:text-[18px] leading-relaxed mb-6 font-normal">
              Linkay Ventures was founded with a singular purpose. to support groundbreaking ideas
              and visionary founders who seek to make a difference. Our journey began with a
              commitment to impact-driven investment and has evolved into a trusted platform that
              combines financial resources with strategic insight.
            </p>

            {/* Stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-8">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-gray-50/80 border border-gray-200/90 rounded-xl p-4 text-center"
                >
                  <p className="font-poppins text-orange-500 text-[22px] font-bold leading-none mb-1">
                    {s.value}
                  </p>
                  <p className="font-red-hat text-gray-600 text-[12.5px] leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-[360px] sm:h-[440px] overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
              <Image
                src="/images/about3.jpeg"
                alt="Our Story - Linkay Ventures"
                fill
                priority
                className="object-cover object-center scale-x-[-1]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH */}
      <section className="w-full bg-gray-950 py-20 px-6 sm:px-12 lg:px-16 text-white relative">
        <div className="max-w-[1240px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-gray-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                Our Approach
              </span>
              <h2 className="font-poppins text-white text-[30px] sm:text-[42px] font-bold leading-tight max-w-[700px]">
                From First Review to Funding
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step) => (
              <div
                key={step.id}
                className="group bg-gray-900/80 hover:bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 group-hover:text-orange-400 group-hover:border-orange-500/40 transition-colors">
                      <span className="font-poppins text-[14px] font-bold">
                        {String(step.id).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-gray-400 bg-gray-800/80 px-2 py-0.5 rounded border border-gray-700/60">
                      Step {step.id}
                    </span>
                  </div>

                  <h3 className="font-poppins text-white text-[19px] font-bold mb-2 group-hover:text-orange-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-red-hat text-gray-400 text-[14px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 flex justify-end">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-800 border border-gray-700 p-2">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      fill
                      className="object-contain p-1.5"
                      sizes="48px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TEAM SECTION */}
      <section className="w-full py-20 px-6 sm:px-12 lg:px-16 max-w-[1340px] mx-auto">
        <div className="text-center max-w-[850px] mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-[11px] font-semibold uppercase tracking-[0.08em] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            Our Team
          </span>
          <h2 className="font-poppins text-gray-900 text-[32px] sm:text-[42px] font-bold leading-[1.15] tracking-tight mb-5">
            The Experts Behind Linkay Ventures
          </h2>
          <p className="font-red-hat text-gray-600 text-[16px] sm:text-[17px] leading-relaxed max-w-[700px] mx-auto">
            Meet the experts behind Linkay Ventures. Our team brings together seasoned investors,
            industry veterans, and technology innovators, each dedicated to fueling the growth of
            high-impact startups.
          </p>
          <div className="w-14 h-1 bg-orange-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* ============ Founder Card ============ */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-gray-300 transition-all duration-200 flex flex-col">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-orange-500">
                  Founder
                </span>
                <h3 className="font-poppins text-gray-900 text-[24px] sm:text-[26px] font-bold">
                  Kay Satha
                </h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 flex items-center justify-center">
                <CheckCircle2 size={18} />
              </div>
            </div>

            <div className="space-y-4 font-red-hat text-gray-600 text-[15px] sm:text-[16px] leading-[1.8] text-left sm:text-justify">
              {/* Always visible */}
              <p>
                Kay Satha is the visionary founder of Linkay Ventures, leading the firm&apos;s
                mission to empower startups and accelerate innovation across emerging industries.
                With nearly three decades of experience in entrepreneurship, investment strategy,
                and venture building across the United States and Canada, she has guided numerous
                companies from concept to market leadership.
              </p>
              <p>
                Her expertise lies in identifying scalable opportunities, aligning capital with
                strategy, and transforming early-stage ideas into sustainable, high-growth
                businesses. Through disciplined execution and impact-driven investment, Kay has
                positioned Linkay Ventures as a trusted partner for founders seeking long-term value
                creation rather than short-term gains.
              </p>

              {/* Hidden — reveals on Read More */}
              {showFounderBio && (
                <>
                  <p>
                    Kay is actively engaged in applying tokenization strategies that transform
                    AI-driven assets, proprietary platforms, and digital innovations into
                    structured, blockchain-backed instruments with tangible commercial value. Her
                    work focuses on making emerging technologies investable by designing
                    monetization pathways that align with user needs, investor expectations, and
                    global market standards. By integrating ethical AI principles with practical
                    revenue frameworks, she helps startups and technology ventures progress from
                    proof-of-concept to commercially scalable, investor-ready products.
                  </p>
                  <p>
                    Kay maintains strong relationships with a global network of decision-makers and
                    investors, playing an active role in capital raising, investment structuring,
                    and strategic business development. Her work spans infrastructure, technology,
                    fintech, and energy sectors.
                  </p>
                </>
              )}
            </div>

            {/* Read More / Read Less */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={() => setShowFounderBio((prev) => !prev)}
                className="inline-flex items-center gap-2 font-poppins text-[14px] font-semibold text-orange-500 hover:text-orange-600 transition-colors"
              >
                {showFounderBio ? (
                  <>
                    Read Less
                    <ChevronUp size={16} />
                  </>
                ) : (
                  <>
                    Read More
                    <ChevronDown size={16} />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* ============ Advisor Card ============ */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-gray-300 transition-all duration-200 flex flex-col">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-orange-500">
                  Advisor
                </span>
                <h3 className="font-poppins text-gray-900 text-[24px] sm:text-[26px] font-bold">
                  Lincoln T. Satkunarajah
                </h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 flex items-center justify-center">
                <ShieldCheck size={18} />
              </div>
            </div>

            {/* Credential box — always visible */}
            <div className="bg-orange-50/50 border border-orange-100 p-5 rounded-xl text-gray-800 text-[15px] sm:text-[16px] leading-[1.8] mb-5 text-left sm:text-justify font-red-hat">
              <p className="font-semibold text-gray-900">BSc. (Eng.) U.K., MSc. (Eng.), U.K.</p>
              <p className="text-gray-700">
                P.E, P.T.O.E (USA), PEng. IntPE. (Canada), MITE (USA), MIHT (UK).
              </p>
              <p className="text-orange-600 font-semibold mt-3 leading-[1.6]">
                President and CEO, Chair Advisory Board, International Professional Engineer,
                Entrepreneur, Inventor &amp; Investor.
              </p>
            </div>

            {/* Full bio — always visible (no hidden content) */}
            <div className="font-red-hat text-gray-600 text-[15px] sm:text-[16px] leading-[1.8] text-left sm:text-justify">
              <p>
                As a seasoned advisor at Linkay Ventures, Lincoln brings a wealth of industry
                knowledge and strategic insights to the team. With a proven track record in venture
                capital, corporate innovation, and scaling startups, Lincoln plays a pivotal role in
                shaping Linkay Ventures&apos; strategic direction. His expertise in identifying
                high-potential opportunities and fostering meaningful partnerships ensures startups
                in the Linkay portfolio receive unparalleled guidance and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="w-full px-6 sm:px-12 lg:px-16 pb-20 max-w-[1240px] mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gray-950 text-white border border-gray-800 text-center relative max-w-[960px] mx-auto">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold mb-2 block">
              Let&apos;s Build Together
            </span>
            <h3 className="font-poppins text-2xl sm:text-3xl font-bold mb-4">
              Ready to Turn Your Vision into a Venture?
            </h3>
            <p className="font-red-hat text-gray-400 text-sm sm:text-base mb-8">
              Connect with our team to explore how Linkay Ventures can support your journey from
              concept to market leadership.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white font-poppins text-sm font-semibold px-8 py-3.5 rounded-xl transition-all shadow-md shadow-orange-500/20"
              >
                Get in Touch
              </Link>
              <Link
                href="/services"
                className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-poppins text-sm font-semibold px-7 py-3.5 rounded-xl transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
