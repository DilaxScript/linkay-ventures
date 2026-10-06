'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, ShieldCheck, Activity, Cpu, TrendingUp, Globe } from 'lucide-react';

export default function FeaturesSection() {
  const highlights = [
    { icon: Cpu, label: 'AI & Emerging Tech' },
    { icon: TrendingUp, label: 'Growth-Stage Finance' },
    { icon: Globe, label: 'Global Expert Network' },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 sm:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Pill badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-3 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              Features
            </span>

            {/* Title */}
            <h2 className="font-poppins text-gray-900 text-[30px] sm:text-[40px] font-bold leading-tight mb-4">
              Finance with expert leaders
            </h2>

            {/* Orange underline */}
            <div className="w-12 h-1 bg-orange-500 mb-6 rounded-full" />

            {/* Paragraphs */}
            <div className="space-y-5 text-gray-600 font-red-hat text-[16px] sm:text-[17px] leading-relaxed mb-8">
              <p>
                We offer the resources and support needed to scale the next generation of startups
                and growth-stage companies. Linkay Ventures is a brainchild of serial entrepreneurs
                who are seasoned professionals in the field of AI, cutting-edge technologies, and
                Finance — with expert leaders in the US and around the world that will define the
                future and make positive impact.
              </p>
              <p>
                Our belief in leveraging technology drives us to provide clients with financial
                products and solutions that offer superior performance &amp; access to innovative
                investments aligned with their long-term objectives.
              </p>
            </div>

            {/* Highlight chips */}
            <div className="flex flex-wrap gap-2">
              {highlights.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-[13px] font-medium text-gray-700 hover:border-orange-200 hover:bg-orange-50/40 transition-colors"
                  >
                    <IconComp size={15} className="text-orange-500 shrink-0" />
                    {item.label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Right Column: Image (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-[340px] sm:h-[440px] lg:h-[480px] rounded-2xl overflow-hidden bg-gray-100 shadow-lg border border-gray-200/90 group">
              <Image
                src="/images/home.jpeg"
                alt="Finance with expert leaders in the US"
                fill
                priority
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />

              {/* Subtle overlay for premium look */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />

              {/* Floating trust badge */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
