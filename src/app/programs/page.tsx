import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Activity,
  Sparkles,
  Rocket,
  Building2,
  Layers,
  Users,
  TrendingUp,
  Settings2,
  Globe,
} from 'lucide-react';
import { BackgroundLines } from '@/components/ui/background-lines';

export const metadata: Metadata = {
  title: 'Programs – Linkay Ventures',
  description:
    'Empowering the Next Generation of Innovators through Venture Accelerator, Corporate Innovation Partnerships, and Adaptive Growth Programs.',
};

export default function ProgramsPage() {
  const acceleratorPoints = [
    {
      title: 'World-Class Mentorship',
      desc: 'Direct access to industry veterans, serial entrepreneurs, and investors.',
      icon: Users,
      tag: 'Mentors',
    },
    {
      title: 'Funding & Investment',
      desc: 'Connect with our global network of VCs, angel investors, and corporate partners.',
      icon: TrendingUp,
      tag: 'Capital',
    },
    {
      title: 'Go-to-Market Support',
      desc: 'Get strategic guidance on market expansion, product positioning, and scaling operations.',
      icon: Rocket,
      tag: 'GTM',
    },
    {
      title: 'Pilot & Partnership Access',
      desc: 'Work with corporations and enterprise partners to validate and commercialize solutions.',
      icon: Globe,
      tag: 'Pilots',
    },
  ];

  const corporatePoints = [
    {
      title: 'Technology Integration',
      desc: 'Co-develop solutions with established enterprises and industry leaders.',
      icon: Layers,
      tag: 'Co-Develop',
    },
    {
      title: 'Market Validation',
      desc: 'Test and refine innovations in real-world commercial environments.',
      icon: ShieldCheck,
      tag: 'Validate',
    },
    {
      title: 'Scaling Support',
      desc: 'Gain access to corporate partners, industry networks, and funding opportunities.',
      icon: TrendingUp,
      tag: 'Scale',
    },
  ];

  const adaptivePoints = [
    {
      title: 'Technology & Infrastructure',
      desc: 'Equip startups with cutting-edge technology and infrastructure.',
      icon: Settings2,
      tag: 'Tech Stack',
    },
    {
      title: 'Real-World Pilots',
      desc: 'Provide real-world pilot opportunities in strategic industries.',
      icon: Rocket,
      tag: 'Pilots',
    },
    {
      title: 'Global Networks',
      desc: 'Connect innovators with global networks of decision-makers and investors.',
      icon: Globe,
      tag: 'Network',
    },
  ];

  return (
    <main className="w-full bg-white text-gray-900 font-sans antialiased overflow-x-hidden selection:bg-orange-500 selection:text-white">
      {/* 1. HERO BANNER — Same as RWA / About / Services */}
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
              Programs
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mb-8 max-w-[620px] font-red-hat text-[15px] font-normal leading-relaxed text-gray-600 sm:mb-10 sm:max-w-[700px] sm:text-[18px] md:text-[20px] lg:max-w-[780px] lg:text-[22px]">
              Empowering the Next Generation of Innovators through Venture Accelerator, Corporate
              Innovation Partnerships, and Adaptive Growth Programs.
            </p>

            {/* Buttons */}
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
              <Link
                href="https://hub.linkayventures.com/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 font-poppins text-[15px] font-semibold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-orange-600 active:translate-y-0 sm:w-auto sm:px-8 sm:py-4 sm:text-[16px] lg:px-10 lg:py-5 lg:text-[18px]"
              >
                <span>Apply to a Program</span>
                <ArrowRight size={18} className="sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="#programs"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white/80 px-6 py-3.5 font-poppins text-[15px] font-semibold text-gray-800 shadow-sm backdrop-blur-sm transition-all hover:border-gray-400 hover:text-orange-600 sm:w-auto sm:px-7 sm:py-4 sm:text-[16px] lg:px-9 lg:py-5 lg:text-[18px]"
              >
                <span>Explore Programs</span>
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
                  <span>Venture Accelerator</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <ShieldCheck
                    size={16}
                    className="shrink-0 text-orange-500 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  />
                  <span>Corporate Partnerships</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <Activity
                    size={16}
                    className="shrink-0 text-orange-500 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  />
                  <span>Adaptive Growth</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BackgroundLines>

      {/* 2. EMPOWERING INNOVATORS — Split section (RWA "Finance with expert leaders" style) */}
      <section className="w-full py-20 px-6 sm:px-12 lg:px-16 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content (7 cols) */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              Our Programs
            </span>
            <h2 className="font-poppins text-gray-900 text-[30px] sm:text-[40px] font-bold leading-tight mb-4">
              Empowering the Next Generation of Innovators
            </h2>
            <div className="w-12 h-1 bg-orange-500 mb-6 rounded-full" />
            <p className="font-red-hat text-gray-600 text-[16px] sm:text-[18px] leading-relaxed mb-6">
              At Linkay Ventures, we don't just invest in startups — we partner with pioneers. Our
              programs provide ambitious founders with the resources, network, and strategic support
              needed to turn bold ideas into industry-defining companies.
            </p>
            <p className="font-red-hat text-gray-600 text-[16px] sm:text-[18px] leading-relaxed">
              Join a thriving community of visionaries, gain access to cutting-edge opportunities,
              and accelerate your growth with tailored programs designed for impact.
            </p>
          </div>

          {/* Right: Image box (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-[360px] sm:h-[440px] overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
              <Image
                src="/images/program.jpeg"
                alt="Empowering the Next Generation of Innovators"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. VENTURE ACCELERATOR — Dark section (RWA "Technology Stack" style) */}
      <section
        id="programs"
        className="w-full bg-gray-950 py-20 px-6 sm:px-12 lg:px-16 text-white relative"
      >
        <div className="max-w-[1240px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-gray-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                Program 01 — Venture Accelerator
              </span>
              <h2 className="font-poppins text-white text-[30px] sm:text-[42px] font-bold leading-tight max-w-[700px]">
                For early-stage startups ready to scale.
              </h2>
            </div>
          </div>

          <p className="font-red-hat text-gray-400 text-[16px] sm:text-[17px] leading-relaxed max-w-[800px] mb-10">
            Our accelerator isn't just about growth — it's about building the future. We provide
            world-class mentorship, funding access, go-to-market support, and enterprise pilot
            opportunities.
          </p>

          {/* 4 cards grid — RWA tech-stack card style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {acceleratorPoints.map((item, idx) => {
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

                    <h3 className="font-poppins text-white text-[18px] font-bold mb-2 group-hover:text-orange-400 transition-colors leading-tight">
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

          {/* CTA */}
          <div className="text-center">
            <Link
              href="https://hub.linkayventures.com/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-poppins text-[14px] font-semibold px-8 py-3.5 rounded-xl transition-all shadow-md shadow-orange-500/20"
            >
              <span>Apply to Join Our Next Cohort</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CORPORATE INNOVATION PARTNERSHIPS — Light section with card grid */}
      <section className="w-full py-20 px-6 sm:px-12 lg:px-16 max-w-[1240px] mx-auto">
        <div className="text-center max-w-[850px] mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            Program 02 — Corporate Innovation Partnerships
          </span>
          <h2 className="font-poppins text-gray-900 text-[30px] sm:text-[42px] font-bold leading-tight mb-4">
            Where startups and enterprises co-create breakthrough solutions.
          </h2>
          <p className="font-red-hat text-gray-600 text-[16px] sm:text-[17px] leading-relaxed">
            At Linkay Ventures, we bridge the gap between corporations and disruptive startups,
            fostering high-impact collaborations that drive industry transformation.
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {corporatePoints.map((item, idx) => {
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

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="https://hub.linkayventures.com/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-poppins text-[14px] font-semibold px-8 py-3.5 rounded-xl transition-all shadow-md shadow-orange-500/20"
          >
            <span>Access Venture HUB</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 5. ADAPTIVE GROWTH PROGRAMS — Dark section (RWA "Beyond Tokenization" style) */}
      <section className="w-full bg-gray-950 py-20 px-6 sm:px-12 lg:px-16 text-white relative">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          {/* Image (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-[360px] sm:h-[440px] overflow-hidden rounded-2xl bg-gray-950 shadow-xl">
              <Image
                src="/images/program3.jpeg"
                alt="Adaptive Growth Programs"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Content (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-gray-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                Program 03 — Adaptive Growth Programs
              </span>
              <h2 className="font-poppins text-white text-[28px] sm:text-[38px] font-bold leading-tight mb-4">
                Every great idea needs a support system.
              </h2>
              <p className="font-red-hat text-gray-300 text-[15.5px] leading-relaxed mb-6">
                Our ecosystem extends beyond standard accelerators with{' '}
                <span className="text-white font-semibold">bespoke programs</span> designed to
                equip, pilot, and connect founders at every stage.
              </p>
            </div>

            {/* 3 mini-cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {adaptivePoints.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-gray-900/80 hover:bg-gray-900 p-5 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-200"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 group-hover:text-orange-400 group-hover:border-orange-500/40 transition-colors mb-3">
                      <IconComp size={17} />
                    </div>
                    <h3 className="font-poppins text-white text-[15px] font-bold mb-1.5 group-hover:text-orange-400 transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-red-hat text-gray-400 text-[13px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <p className="font-red-hat text-gray-300 text-[15.5px] leading-relaxed pt-4 border-t border-gray-800">
              Our mission is to{' '}
              <span className="text-white font-semibold">redefine what's possible</span>, forging a
              path where the most ambitious ideas take flight. Apply today to join Linkay Ventures
              and be part of a movement reshaping industries.
            </p>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA — Dark banner (Same as RWA / About / Services) */}
      <section className="w-full px-6 sm:px-12 lg:px-16 py-20 max-w-[1240px] mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gray-950 text-white border border-gray-800 text-center relative max-w-[960px] mx-auto">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold mb-2 block">
              Join the Movement. Build the Future
            </span>
            <h3 className="font-poppins text-2xl sm:text-3xl font-bold mb-4">
              Are You Ready to Build the Future?
            </h3>
            <p className="font-red-hat text-gray-400 text-sm sm:text-base mb-6">
              Are you a startup pushing boundaries? A corporation seeking to innovate? A visionary
              looking to make an impact?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="https://hub.linkayventures.com/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white font-poppins text-sm font-semibold px-8 py-3.5 rounded-xl transition-all shadow-md shadow-orange-500/20"
              >
                Join With Us
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
