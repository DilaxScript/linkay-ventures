'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Mail,
  Sparkles,
  TrendingUp,
  BookOpen,
} from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    }, 800);
  };

  const perks = [
    { icon: TrendingUp, label: 'Fund Trends' },
    { icon: Sparkles, label: 'Insights' },
    { icon: BookOpen, label: 'Market Updates' },
  ];

  return (
    <section className="relative w-full bg-gray-950 py-20 px-6 sm:px-12 lg:px-16 text-white overflow-hidden">
      {/* Subtle orange glow accents */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-orange-500/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-orange-500/6 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Image (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden bg-gray-900 shadow-xl border border-gray-800 group">
              <Image
                src="/images/home3.jpeg"
                alt="Stay Up to Date on Funds, Trends and Insights"
                fill
                priority
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />

              {/* Dark gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-gray-950/10 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right: Content (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            {/* Pill badge — dark version */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-gray-300 text-xs font-semibold uppercase tracking-wider mb-3 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              Newsletter
            </span>

            {/* Heading */}
            <h2 className="font-poppins text-white text-[30px] sm:text-[40px] font-bold leading-tight mb-4">
              Stay Up-to-Date on Funds, Trends and Insights
            </h2>

            {/* Orange underline */}
            <div className="w-12 h-1 bg-orange-500 mb-6 rounded-full" />

            {/* Subtitle */}
            <p className="font-red-hat text-gray-400 text-[16px] sm:text-[17px] leading-relaxed mb-6">
              Keep up with the latest trends, insights, and updates to stay ahead in the game.
            </p>

            {/* Perk chips — dark version */}
            <div className="flex flex-wrap gap-2 mb-8">
              {perks.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-900/80 border border-gray-800 text-[13px] font-medium text-gray-300 hover:border-orange-500/40 hover:bg-gray-900 transition-colors"
                  >
                    <IconComp size={14} className="text-orange-400 shrink-0" />
                    {item.label}
                  </span>
                );
              })}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-[520px]">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sample@mail.com"
                  required
                  className="flex-1 px-5 py-4 bg-gray-900/80 border border-gray-800 rounded-xl font-red-hat text-[15px] text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:bg-gray-900 focus:ring-2 focus:ring-orange-500/20 transition-all"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-poppins text-[14px] font-semibold px-7 py-4 rounded-xl transition-all duration-300 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </div>

              {/* Success message — dark card */}
              {status === 'success' && (
                <div className="mt-4 p-4 rounded-xl bg-gray-900/80 border border-gray-800 shadow-2xs">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <CheckCircle2 size={17} />
                    </div>
                    <div>
                      <p className="font-poppins text-white text-[14px] font-bold leading-tight">
                        Subscription Confirmed
                      </p>
                      <p className="font-red-hat text-gray-400 text-[13px] leading-relaxed mt-0.5">
                        You have been successfully subscribed!
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error message — dark card */}
              {status === 'error' && (
                <div className="mt-4 p-4 rounded-xl bg-gray-900/80 border border-gray-800 shadow-2xs">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
                      <AlertCircle size={17} />
                    </div>
                    <div>
                      <p className="font-poppins text-white text-[14px] font-bold leading-tight">
                        Something Went Wrong
                      </p>
                      <p className="font-red-hat text-gray-400 text-[13px] leading-relaxed mt-0.5">
                        Please check your email and try again.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
