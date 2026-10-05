'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function WorldwideSection() {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = 100;
          const duration = 2000;
          const stepTime = Math.abs(Math.floor(duration / end));

          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) {
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 px-6 sm:px-12 lg:px-16 bg-white overflow-hidden border-t border-gray-100"
    >
      {/* Background world map */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/map-bg.jpg"
          alt="World Map Background"
          fill
          priority
          className="object-cover object-center"
          style={{ opacity: 0.35 }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.75) 40%, rgba(255,255,255,0.35) 70%, rgba(255,255,255,0.15) 100%)',
          }}
        />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto">
        {/* Section header */}
        <div className="text-center max-w-[850px] mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            Worldwide Experience
          </span>
          <h2 className="font-poppins text-gray-900 text-[30px] sm:text-[42px] font-bold leading-tight mb-4">
            We Always Try To Understand
            <br className="hidden sm:inline" /> Clients&apos; Expectation
          </h2>
          <p className="font-red-hat text-gray-600 text-[16px] sm:text-[17px] leading-relaxed max-w-[720px] mx-auto">
            We prioritize understanding and exceeding client expectations through tailored solutions
            and unwavering support.
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Counter */}
        <div className="max-w-[820px] mx-auto">
          <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200/90 shadow-lg p-8 sm:p-12 overflow-hidden">
            <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-orange-500/8 blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center">
              <p className="font-poppins text-[14px] sm:text-[15px] uppercase tracking-wider text-gray-900 font-bold mb-4">
                Positive Feedback
              </p>

              <div className="font-poppins font-bold leading-none tracking-tight flex items-start justify-center">
                <span className="text-orange-500 text-[88px] sm:text-[128px] lg:text-[148px]">
                  {count}
                </span>
                <span className="text-orange-500 text-[42px] sm:text-[60px] lg:text-[72px] mt-3 sm:mt-4 lg:mt-5 ml-1">
                  %
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
