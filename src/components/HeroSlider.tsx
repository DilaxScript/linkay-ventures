'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Activity,
} from 'lucide-react';
import { BackgroundLines } from '@/components/ui/background-lines';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Linkay Ventures',
    subtitle: 'Empowering Visionaries.',
    description:
      'Linkay Ventures partners with visionary founders to drive innovation and create meaningful impact. From seed funding to strategic mentorship,',
    buttonText: 'Explore Services',
    buttonLink: '/services',
  },
  {
    id: 2,
    title: 'Linkay Ventures',
    subtitle: 'Shaping the Future.',
    description:
      'Linkay Ventures is a brainchild of serial entrepreneurs who are seasoned professionals in the field of AI, cutting edge technologices and Finance with expert leaders in the US and around the world that will define the future and make positive impact.',
    buttonText: 'View Programs',
    buttonLink: '/programs',
  },
  {
    id: 3,
    title: 'Linkay Ventures',
    subtitle: 'Partner in Innovation',
    description: 'At our core, we believe in the power of collaboration to drive progress.',
    buttonText: 'View Programs',
    buttonLink: '/programs',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const slide = slides[currentSlide];

  return (
    <BackgroundLines className="relative w-full overflow-hidden border-b border-gray-200/80 bg-gradient-to-b from-gray-50 via-white to-white min-h-screen md:min-h-0">
      <section className="relative flex min-h-screen w-full items-center justify-center px-5 py-12 sm:px-8 sm:py-16 md:min-h-0 md:px-12 md:py-24 lg:pt-40">
        {/* Content Layer */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gray-800 shadow-sm backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-1.5 sm:text-[12px] lg:text-[13px]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
            <span>{slide.title}</span>
          </div>

          {/* Big Subtitle */}
          <h1 className="mb-4 font-poppins text-[28px] font-bold leading-[1.2] tracking-tight text-gray-900 sm:mb-6 sm:text-[42px] md:text-[48px] lg:text-[68px] xl:text-[76px]">
            {slide.subtitle}
          </h1>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-[620px] font-red-hat text-[15px] font-normal leading-relaxed text-gray-600 sm:mb-10 sm:max-w-[700px] sm:text-[18px] md:text-[22px] lg:max-w-[780px] lg:text-[26px]">
            {slide.description}
          </p>

          {/* Buttons */}
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            <Link
              href={slide.buttonLink}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 font-poppins text-[15px] font-semibold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-orange-600 active:translate-y-0 sm:w-auto sm:px-8 sm:py-4 sm:text-[16px] lg:px-10 lg:py-5 lg:text-[18px]"
            >
              <span>{slide.buttonText}</span>
              <ArrowRight size={18} className="sm:h-5 sm:w-5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white/80 px-6 py-3.5 font-poppins text-[15px] font-semibold text-gray-800 shadow-sm backdrop-blur-sm transition-all hover:border-gray-400 hover:text-orange-600 sm:w-auto sm:px-7 sm:py-4 sm:text-[16px] lg:px-9 lg:py-5 lg:text-[18px]"
            >
              <span>Contact Us</span>
              <ArrowRight size={16} className="sm:h-5 sm:w-5" />
            </Link>
          </div>

          {/* Features Row */}
          <div className="mt-10 w-full max-w-[820px] border-t border-gray-200 pt-6 sm:mt-12 sm:max-w-[900px] sm:pt-8 lg:max-w-[1000px]">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[10px] font-medium uppercase tracking-wider text-gray-600 sm:gap-x-8 sm:text-[12px] md:text-[13px] lg:gap-x-10 lg:text-[15px]">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <CheckCircle2
                  size={16}
                  className="shrink-0 text-orange-500 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                />
                <span>Institutional Grade Protocol</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-2.5">
                <ShieldCheck
                  size={16}
                  className="shrink-0 text-orange-500 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                />
                <span>Regulatory-Compliant Framework</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-2.5">
                <Activity
                  size={16}
                  className="shrink-0 text-orange-500 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                />
                <span>Real-Time On-Chain Settlement</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/70 hover:bg-orange-500 hover:text-white text-gray-800 flex items-center justify-center transition-colors duration-200 border border-gray-200 backdrop-blur-sm shadow-sm"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/70 hover:bg-orange-500 hover:text-white text-gray-800 flex items-center justify-center transition-colors duration-200 border border-gray-200 backdrop-blur-sm shadow-sm"
        >
          <ChevronRight size={22} />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                idx === currentSlide
                  ? 'w-8 h-2.5 bg-orange-500'
                  : 'w-2.5 h-2.5 bg-gray-400/60 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </section>
    </BackgroundLines>
  );
}
