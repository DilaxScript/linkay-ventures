'use client';

import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

export default function TeamSection() {
  const [showFounderBio, setShowFounderBio] = useState(false);
  const [showAdvisorBio, setShowAdvisorBio] = useState(false);

  return (
    <section className="w-full py-20 px-6 sm:px-12 lg:px-16 max-w-[1340px] mx-auto">
      {/* Header */}
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
              Kay Satha is the visionary founder of Linkay Ventures, leading the firm&apos;s mission
              to empower startups and accelerate innovation across emerging industries. With nearly
              three decades of experience in entrepreneurship, investment strategy, and venture
              building across the United States and Canada, she has guided numerous companies from
              concept to market leadership.
            </p>
            <p>
              Her expertise lies in identifying scalable opportunities, aligning capital with
              strategy, and transforming early-stage ideas into sustainable, high-growth businesses.
              Through disciplined execution and impact-driven investment, Kay has positioned Linkay
              Ventures as a trusted partner for founders seeking long-term value creation rather
              than short-term gains.
            </p>

            {/* Hidden content */}
            {showFounderBio && (
              <>
                <p>
                  Kay is actively engaged in applying tokenization strategies that transform
                  AI-driven assets, proprietary platforms, and digital innovations into structured,
                  blockchain-backed instruments with tangible commercial value. Her work focuses on
                  making emerging technologies investable by designing monetization pathways that
                  align with user needs, investor expectations, and global market standards. By
                  integrating ethical AI principles with practical revenue frameworks, she helps
                  startups and technology ventures progress from proof-of-concept to commercially
                  scalable, investor-ready products.
                </p>
                <p>
                  Kay maintains strong relationships with a global network of decision-makers and
                  investors, playing an active role in capital raising, investment structuring, and
                  strategic business development. Her work spans infrastructure, technology,
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

          <div className="space-y-4 font-red-hat text-gray-600 text-[15px] sm:text-[16px] leading-[1.8] text-left sm:text-justify">
            {/* Always visible */}
            <p>
              As a seasoned advisor at Linkay Ventures, Lincoln brings a wealth of industry
              knowledge and strategic insights to the team. With a proven track record in venture
              capital, corporate innovation, and scaling startups, Lincoln plays a pivotal role in
              shaping Linkay Ventures&apos; strategic direction.
            </p>

            {/* Hidden content */}
            {showAdvisorBio && (
              <>
                <p>
                  His expertise in identifying high-potential opportunities and fostering meaningful
                  partnerships ensures startups in the Linkay portfolio receive unparalleled
                  guidance and support. Lincoln&apos;s dedication to fostering innovation and
                  long-term growth makes him an invaluable asset to the Linkay Ventures community.
                </p>
                <p>
                  With decades of international experience across engineering, infrastructure, and
                  technology ventures, Lincoln advises on cross-border expansion strategies,
                  technical due diligence, and scalable operational frameworks that align with
                  global market demands.
                </p>
              </>
            )}
          </div>

          {/* Read More / Read Less */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <button
              onClick={() => setShowAdvisorBio((prev) => !prev)}
              className="inline-flex items-center gap-2 font-poppins text-[14px] font-semibold text-orange-500 hover:text-orange-600 transition-colors"
            >
              {showAdvisorBio ? (
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
      </div>
    </section>
  );
}
