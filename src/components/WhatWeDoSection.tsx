'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PromoCard {
  title: string;
  badge: string;
  description: string;
  href: string;
}

const promoCards: PromoCard[] = [
  {
    title: 'BONDS',
    badge: 'New',
    description:
      'Navigate the world of bonds with confidence. Our solutions empower businesses to secure stable, long-term financing while managing risk effectively.',
    href: '/services#bonds',
  },
  {
    title: 'M&A',
    badge: 'New',
    description:
      'Seamlessly execute mergers and acquisitions with our expert guidance. We ensure strategic alignment and value creation for every deal.',
    href: '/services#ma',
  },
  {
    title: 'FUNDS',
    badge: 'New',
    description:
      'Drive sustainable growth with tailored fund solutions. We help you unlock potential through impact-driven investments and innovative strategies.',
    href: '/services#funds',
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="w-full bg-gray-950 py-20 px-6 sm:px-12 lg:px-16 text-white relative">
      <div className="max-w-[1240px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading and Info (5 cols) — SAME ALIGNMENT AS 1ST CODE */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-gray-300 text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              WHAT WE DO
            </span>

            <h2 className="font-poppins text-white text-[30px] sm:text-[42px] font-bold leading-tight mb-6">
              Funding Solutions Tailored to Your Industry
            </h2>

            <p className="font-red-hat text-gray-400 text-[16px] md:text-[17px] leading-relaxed mb-8">
              At Linkay Ventures, our mission is to empower startups that are reimagining industries
              and solving real-world challenges. With a focus on sustainable growth, impact-driven
              investment, and innovative thinking, we help turn bold ideas into successful ventures.
            </p>

            <div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-[#FF4400] hover:bg-[#ED4103] text-white font-poppins text-[13px] font-medium uppercase tracking-wider px-8 py-3.5 rounded-[4px] shadow transition-all duration-300 hover:shadow-orange-500/25 transform hover:-translate-y-0.5"
              >
                <span>Check All Services</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Cards (7 cols) — SAME GRID AS 1ST CODE, NEW STYLE FROM 2ND */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {promoCards.map((card, idx) => (
              <div
                key={card.title}
                className={`group relative bg-gray-900/80 hover:bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-200 flex flex-col justify-between ${
                  idx === 2 ? 'sm:col-span-2' : ''
                }`}
              >
                {/* Corner Badge */}
                <div className="absolute top-4 right-4 bg-[#FF4400] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  {card.badge}
                </div>

                <div>
                  <h3 className="font-poppins text-white text-[19px] md:text-[21px] font-bold mb-3 pr-20 group-hover:text-orange-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="font-red-hat text-gray-400 text-[14px] leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1.5 font-poppins text-[14px] font-medium text-orange-400 hover:text-orange-300 transition-colors group/link"
                  >
                    <span>Learn More</span>
                    <ChevronRight
                      size={16}
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
