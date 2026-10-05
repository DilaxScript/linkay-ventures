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
  Calendar,
  Clock,
} from 'lucide-react';
import { BackgroundLines } from '@/components/ui/background-lines';

export const metadata: Metadata = {
  title: 'Blog – Linkay Ventures',
  description:
    'Explore the latest insights, startup strategies, and venture trends from Linkay Ventures.',
};

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'Top Challenges Startups Face in 2024 and How to Overcome Them',
      image: '/images/1554356813231.png',
      excerpt:
        'Introduction Starting a business is exciting but comes with its fair share of challenges. As we move into 2024, startups face an evolving economic landscape, rising competition, and rapidly shifting market dynamics.',
      category: 'Startup Strategy',
      date: 'Jan 2024',
      readTime: '6 min read',
      href: '/blog/top-challenges-startups-face-in-2024-and-how-to-overcome-them',
    },
    {
      id: 2,
      title: 'The Role of Impact Investing in Shaping the Future of Startups',
      image: '/images/1707910811977.png',
      excerpt:
        'Introduction As the global landscape shifts toward sustainability and inclusivity, impact investing has become a vital force in empowering startups to deliver meaningful societal and environmental progress.',
      category: 'Impact Investing',
      date: 'Feb 2024',
      readTime: '5 min read',
      href: '/blog/the-role-of-impact-investing-in-shaping-the-future-of-startups',
    },
  ];

  const categories = ['All', 'Startup Strategy', 'Impact Investing', 'Venture Trends', 'Insights'];

  return (
    <main className="w-full bg-white text-gray-900 font-sans antialiased overflow-x-hidden selection:bg-orange-500 selection:text-white">
      {/* 1. HERO BANNER — Same as RWA / About / Services / Programs */}
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
              Latest Blog
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mb-8 max-w-[620px] font-red-hat text-[15px] font-normal leading-relaxed text-gray-600 sm:mb-10 sm:max-w-[700px] sm:text-[18px] md:text-[20px] lg:max-w-[780px] lg:text-[22px]">
              Explore the latest insights, startup strategies, and venture trends from Linkay
              Ventures.
            </p>

            {/* Buttons */}
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
              <Link
                href="#posts"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 font-poppins text-[15px] font-semibold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-orange-600 active:translate-y-0 sm:w-auto sm:px-8 sm:py-4 sm:text-[16px] lg:px-10 lg:py-5 lg:text-[18px]"
              >
                <span>Read Latest Posts</span>
                <ArrowRight size={18} className="sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white/80 px-6 py-3.5 font-poppins text-[15px] font-semibold text-gray-800 shadow-sm backdrop-blur-sm transition-all hover:border-gray-400 hover:text-orange-600 sm:w-auto sm:px-7 sm:py-4 sm:text-[16px] lg:px-9 lg:py-5 lg:text-[18px]"
              >
                <span>Subscribe to Updates</span>
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
                  <span>Startup Strategy Insights</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <ShieldCheck
                    size={16}
                    className="shrink-0 text-orange-500 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  />
                  <span>Venture Trends & Analysis</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <Activity
                    size={16}
                    className="shrink-0 text-orange-500 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  />
                  <span>Impact Investing Focus</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BackgroundLines>

      {/* 2. BLOG GRID */}
      <section id="posts" className="w-full py-20 px-6 sm:px-12 lg:px-16 max-w-[1240px] mx-auto">
        {/* Section header with pill badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              Insights &amp; Articles
            </span>
            <h2 className="font-poppins text-gray-900 text-[30px] sm:text-[42px] font-bold leading-tight max-w-[700px]">
              Fresh Thinking from Linkay Ventures
            </h2>
          </div>
        </div>

        {/* Filter pills — RWA style */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat, idx) => {
            const isActive = idx === 0;
            return (
              <button
                key={cat}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[12.5px] font-semibold uppercase tracking-wider transition-all ${
                  isActive
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                    : 'bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-2xs hover:shadow-md hover:border-gray-300 transition-all duration-200 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-[220px] bg-gray-100 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Category pill on image */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-gray-200/60 text-gray-800 text-[11px] font-semibold uppercase tracking-wider shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  {/* Meta row */}
                  <div className="flex items-center gap-3 mb-3 text-[11.5px] font-medium text-gray-500 uppercase tracking-wider">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={12} className="text-orange-500" />
                      {post.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={12} className="text-orange-500" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-poppins text-gray-900 text-[19px] sm:text-[20px] font-bold leading-snug mb-3 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-red-hat text-gray-600 text-[14px] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer link */}
                <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={post.href}
                    className="inline-flex items-center gap-1.5 font-poppins text-[14px] font-semibold text-orange-500 hover:text-orange-600 transition-colors group/link"
                  >
                    <span>Read More</span>
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </Link>
                  <span className="text-[11px] font-mono text-gray-400 bg-gray-100 px-2 py-0.5 rounded border border-gray-200/60">
                    Blog
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty/placeholder card to fill 3rd slot — optional, feel free to remove */}
        {posts.length < 3 && <div className="hidden" aria-hidden="true" />}
      </section>

      {/* 3. NEWSLETTER / DARK CTA — Same as RWA bottom CTA */}
      <section className="w-full px-6 sm:px-12 lg:px-16 pb-20 max-w-[1240px] mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gray-950 text-white border border-gray-800 text-center relative max-w-[960px] mx-auto">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold mb-2 block">
              Never Miss an Insight
            </span>
            <h3 className="font-poppins text-2xl sm:text-3xl font-bold mb-4">
              Get Venture Insights in Your Inbox
            </h3>
            <p className="font-red-hat text-gray-400 text-sm sm:text-base mb-8">
              Join our newsletter for the latest startup strategies, venture trends, and impact
              investing insights from Linkay Ventures.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white font-poppins text-sm font-semibold px-8 py-3.5 rounded-xl transition-all shadow-md shadow-orange-500/20"
              >
                Subscribe Now
              </Link>
              <Link
                href="/blog"
                className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-poppins text-sm font-semibold px-7 py-3.5 rounded-xl transition-all"
              >
                Browse All Posts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
