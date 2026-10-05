'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Lock, Sparkles } from 'lucide-react';

export default function VentureHubSection() {
  return (
    <section className="w-full bg-white py-20 px-6 sm:px-12 lg:px-16">
      <div className="max-w-[1240px] mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gray-950 text-white border border-gray-800 text-center relative max-w-[960px] mx-auto overflow-hidden">
          {/* Subtle orange glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Small eyebrow badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-gray-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              Secure Client Portal
            </div>

            {/* Heading */}
            <h2 className="font-poppins text-2xl sm:text-3xl font-bold mb-4">
              Connect Venture HUB
            </h2>

            {/* Description */}
            <p className="font-red-hat text-gray-400 text-sm sm:text-base mb-8 leading-relaxed">
              Login to <strong className="text-white">Venture HUB</strong> to access cutting-edge
              financial and technical solutions tailored to elevate your business. Whether
              you&apos;re just starting or scaling fast, the right resources are waiting inside —
              designed to fuel innovation, support your strategy, and connect you with experts who
              care about your success.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="https://hub.linkayventures.com/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-poppins text-sm font-semibold px-8 py-3.5 rounded-xl transition-all shadow-md shadow-orange-500/20"
              >
                <Lock size={15} />
                <span>Login to Venture HUB</span>
                <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-poppins text-sm font-semibold px-7 py-3.5 rounded-xl transition-all"
              >
                Request Access
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
