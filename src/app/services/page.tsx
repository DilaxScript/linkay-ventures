import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Activity,
  TrendingUp,
  Landmark,
  GitBranch,
  Settings2,
} from 'lucide-react';
import { BackgroundLines } from '@/components/ui/background-lines';

export const metadata: Metadata = {
  title: 'Services – Linkay Ventures',
  description:
    'Explore Linkay Ventures funding solutions, equity investments, bonds, M&A, and financial advisory services.',
};

export default function ServicesPage() {
  const investmentSolutions = [
    {
      num: '01',
      title: 'Equity Investment',
      desc: 'We provide seed funding and Series A-C funding to startups with innovative ideas and strong growth potential. Our investment approach prioritizes startups with scalable models and significant societal or market impact.',
      icon: TrendingUp,
      tag: 'Seed – Series C',
    },
    {
      num: '02',
      title: 'Bonds and Funds',
      desc: 'Venture Bonds for flexible capital with competitive returns. Thematic Funds focused on renewable energy, AI, and healthcare innovation.',
      icon: Landmark,
      tag: 'Structured Capital',
    },
    {
      num: '03',
      title: 'Mergers & Acquisitions',
      desc: 'We help scale-ups and established businesses identify and execute strategic M&A opportunities. Our team supports startups in preparing for acquisition, ensuring they maximize value during the transition.',
      icon: GitBranch,
      tag: 'M&A Advisory',
    },
    {
      num: '04',
      title: 'Customized Investment Models',
      desc: "We recognize that every startup's needs are unique. Whether it's bridge financing, convertible debt, or syndicate investments, we craft solutions that align with your goals and long-term vision.",
      icon: Settings2,
      tag: 'Tailored Solutions',
    },
  ];

  const advisoryServices = [
    {
      num: '01',
      title: 'Strategic Business Advisory',
      desc: 'Assistance with market entry strategies, growth planning, and competitive positioning. Guidance on navigating regulatory and compliance challenges in emerging industries.',
      icon: TrendingUp,
      tag: 'Strategy',
    },
    {
      num: '02',
      title: 'Mentorship Network',
      desc: "Industry Experts: Connect with seasoned entrepreneurs, investors, and industry leaders for one-on-one mentorship. Tailored Guidance: Receive customized advice based on your startup's industry, stage, and challenges.",
      icon: ShieldCheck,
      tag: 'Expert Network',
    },
    {
      num: '03',
      title: 'Operational Support',
      desc: 'Improve operational efficiency through expert recommendations on process optimization and resource allocation. Assistance with building strong teams, fostering leadership, and creating a sustainable company culture.',
      icon: Settings2,
      tag: 'Operations',
    },
    {
      num: '04',
      title: 'Workshops and Training',
      desc: 'Regular sessions on fundraising, scaling strategies, and pitching to investors. Exclusive access to masterclasses led by top-tier venture capitalists and innovators.',
      icon: Activity,
      tag: 'Education',
    },
  ];

  const ecosystemServices = [
    {
      num: '01',
      title: 'Corporate Innovation Partnerships',
      desc: 'Facilitate partnerships between startups and large corporations to co-develop solutions and enter new markets. Tailored innovation programs for corporations to remain competitive while supporting startup growth.',
      icon: GitBranch,
      tag: 'Partnerships',
    },
    {
      num: '02',
      title: 'Networking Events',
      desc: 'Host industry-specific roundtables, networking meetups, and innovation expos to connect startups with key stakeholders. Opportunities to pitch to potential investors and partners in exclusive, curated events.',
      icon: Activity,
      tag: 'Community',
    },
    {
      num: '03',
      title: 'Cross-Border Expansion',
      desc: 'Support startups in entering international markets through our global network of partners and advisors. Expertise in overcoming challenges related to localization, legal compliance, and cultural adaptation.',
      icon: TrendingUp,
      tag: 'Global Reach',
    },
    {
      num: '04',
      title: 'Innovation Labs',
      desc: 'Provide startups with access to cutting-edge resources, including coworking spaces, prototyping tools, and research facilities. Foster collaboration among startups, researchers, and technologists.',
      icon: Settings2,
      tag: 'R&D',
    },
    {
      num: '05',
      title: 'Sustainability Integration',
      desc: 'Partner with startups focusing on green technologies and sustainable practices. Organize eco-innovation challenges to encourage startups to create solutions addressing environmental and societal issues.',
      icon: ShieldCheck,
      tag: 'Green Tech',
    },
  ];

  return (
    <main className="w-full bg-white text-gray-900 font-sans antialiased overflow-x-hidden selection:bg-orange-500 selection:text-white">
      {/* ============================================================
          1. HERO BANNER — BackgroundLines
      ============================================================ */}
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
              Services
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mb-8 max-w-[620px] font-red-hat text-[15px] font-normal leading-relaxed text-gray-600 sm:mb-10 sm:max-w-[700px] sm:text-[18px] md:text-[20px] lg:max-w-[780px] lg:text-[22px]">
              Funding solutions, equity investments, bonds, M&amp;A, and financial advisory
              services.
            </p>

            {/* Buttons */}
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 font-poppins text-[15px] font-semibold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-orange-600 active:translate-y-0 sm:w-auto sm:px-8 sm:py-4 sm:text-[16px] lg:px-10 lg:py-5 lg:text-[18px]"
              >
                <span>Discuss Your Needs</span>
                <ArrowRight size={18} className="sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="https://hub.linkayventures.com/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white/80 px-6 py-3.5 font-poppins text-[15px] font-semibold text-gray-800 shadow-sm backdrop-blur-sm transition-all hover:border-gray-400 hover:text-orange-600 sm:w-auto sm:px-7 sm:py-4 sm:text-[16px] lg:px-9 lg:py-5 lg:text-[18px]"
              >
                <span>Login to Venture HUB</span>
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
                  <span>Seed to Series C Funding</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <ShieldCheck
                    size={16}
                    className="shrink-0 text-orange-500 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  />
                  <span>Advisory &amp; Mentorship</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <Activity
                    size={16}
                    className="shrink-0 text-orange-500 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  />
                  <span>Global Ecosystem Access</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BackgroundLines>

      {/* ============================================================
          2. INVESTMENT SOLUTIONS — Light section
      ============================================================ */}
      <section className="w-full py-20 px-6 sm:px-12 lg:px-16 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-14">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              Our Services
            </span>
            <h2 className="font-poppins text-gray-900 text-[30px] sm:text-[40px] font-bold leading-tight mb-4">
              Investment Solutions
            </h2>
            <div className="w-12 h-1 bg-orange-500 mb-6 rounded-full" />
            <p className="font-red-hat text-gray-600 text-[16px] sm:text-[18px] leading-relaxed">
              At Linkay Ventures, we offer a range of funding and financial strategies to support
              startups and partners at every stage of their journey.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative w-full h-[320px] sm:h-[400px] overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
              <Image
                src="/images/kk1.jpg"
                alt="Investment Solutions"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* 4 uniform cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {investmentSolutions.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="group bg-white p-6 rounded-2xl border border-gray-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-gray-300 transition-all duration-200 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 group-hover:text-orange-500 group-hover:border-orange-200 transition-colors">
                    <IconComp size={19} />
                  </div>
                  <span className="text-[11px] font-mono text-gray-500 bg-gray-100 px-2 py-0.5 rounded border border-gray-200/60">
                    {item.num}
                  </span>
                </div>

                <h3 className="font-poppins text-gray-900 text-[18px] font-bold mb-3 group-hover:text-orange-600 transition-colors leading-[1.35] min-h-[48px]">
                  {item.title}
                </h3>

                <p className="font-red-hat text-gray-600 text-[14px] leading-[1.7] flex-1">
                  {item.desc}
                </p>

                <div className="mt-5 pt-4 border-t border-gray-100">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-orange-500">
                    {item.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================
          3. ADVISORY & MENTORSHIP — Dark section
      ============================================================ */}
      <section className="w-full bg-gray-950 py-20 px-6 sm:px-12 lg:px-16 text-white relative">
        <div className="max-w-[1240px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-gray-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                Our Services
              </span>
              <h2 className="font-poppins text-white text-[30px] sm:text-[42px] font-bold leading-tight max-w-[700px]">
                Advisory and Mentorship
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {advisoryServices.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="group bg-gray-900/80 hover:bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-200 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 group-hover:text-orange-400 group-hover:border-orange-500/40 transition-colors">
                      <IconComp size={19} />
                    </div>
                    <span className="text-[11px] font-mono text-gray-400 bg-gray-800/80 px-2 py-0.5 rounded border border-gray-700/60">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="font-poppins text-white text-[18px] font-bold mb-3 group-hover:text-orange-400 transition-colors leading-[1.35] min-h-[48px]">
                    {item.title}
                  </h3>

                  <p className="font-red-hat text-gray-400 text-[14px] leading-[1.7] flex-1">
                    {item.desc}
                  </p>

                  <div className="mt-5 pt-4 border-t border-gray-800">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-orange-400">
                      {item.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          4. INNOVATION ECOSYSTEM — Light section, 3-2 layout
      ============================================================ */}
      <section className="w-full py-20 px-6 sm:px-12 lg:px-16 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-[11px] font-semibold uppercase tracking-[0.08em] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              Our Services
            </span>

            <h2 className="font-poppins text-gray-900 text-[32px] sm:text-[42px] font-bold leading-[1.15] tracking-tight mb-5">
              Innovation Ecosystem
            </h2>

            <div className="w-14 h-1 bg-orange-500 mb-6 rounded-full" />

            <p className="font-red-hat text-gray-600 text-[16px] sm:text-[18px] leading-relaxed max-w-[620px]">
              At Linkay Ventures, we go beyond funding to create a thriving innovation ecosystem
              that accelerates growth and fosters collaboration.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full h-[320px] sm:h-[400px] overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
              <Image
                src="/images/Innovation-Blueprint-6-Foundational-Elements-Of-An-Innovation-Ecosystem.jpg"
                alt="Innovation Ecosystem"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* 5 cards — 3-2 balanced layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {ecosystemServices.map((item, idx) => {
            const IconComp = item.icon;
            const isLastTwo = idx >= ecosystemServices.length - 2;

            return (
              <div
                key={idx}
                className={`group bg-white p-6 rounded-2xl border border-gray-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-gray-300 transition-all duration-200 flex flex-col ${
                  isLastTwo ? 'lg:col-span-3' : 'lg:col-span-2'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 group-hover:text-orange-500 group-hover:border-orange-200 transition-colors">
                    <IconComp size={19} />
                  </div>
                  <span className="text-[11px] font-mono text-gray-500 bg-gray-100 px-2 py-0.5 rounded border border-gray-200/60">
                    {item.num}
                  </span>
                </div>

                <h3 className="font-poppins text-gray-900 text-[18px] font-bold mb-3 group-hover:text-orange-600 transition-colors leading-[1.35] min-h-[48px]">
                  {item.title}
                </h3>

                <p className="font-red-hat text-gray-600 text-[14px] leading-[1.7] flex-1">
                  {item.desc}
                </p>

                <div className="mt-5 pt-4 border-t border-gray-100">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-orange-500">
                    {item.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================
          5. VENTURE HUB CTA
      ============================================================ */}
      <section className="w-full px-6 sm:px-12 lg:px-16 pb-20 max-w-[1240px] mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gray-950 text-white border border-gray-800 text-center relative max-w-[960px] mx-auto">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold mb-2 block">
              Connect Venture HUB
            </span>
            <h3 className="font-poppins text-2xl sm:text-3xl font-bold mb-4">
              Access Cutting-Edge Financial Solutions
            </h3>
            <p className="font-red-hat text-gray-400 text-sm sm:text-base mb-8">
              Login to <strong className="text-white">Venture HUB</strong> to access financial and
              technical solutions tailored to elevate your business — whether you&apos;re just
              starting or scaling fast.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="https://hub.linkayventures.com/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white font-poppins text-sm font-semibold px-8 py-3.5 rounded-xl transition-all shadow-md shadow-orange-500/20"
              >
                Login to Venture HUB
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-poppins text-sm font-semibold px-7 py-3.5 rounded-xl transition-all"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
