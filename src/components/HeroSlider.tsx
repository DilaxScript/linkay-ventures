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
import LightRays from '@/components/LightRays';

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
      'Linkay Ventures partners with visionary founders to drive innovation and create meaningful impact.',
    buttonText: 'Explore Services',
    buttonLink: '/services',
  },
  {
    id: 2,
    title: 'Linkay Ventures',
    subtitle: 'Shaping the Future.',
    description:
      'A brainchild of serial entrepreneurs — seasoned professionals in AI, cutting-edge technologies, and Finance — shaping the future with global impact.',
    buttonText: 'View Programs',
    buttonLink: '/programs',
  },
  {
    id: 3,
    title: 'Linkay Ventures',
    subtitle: 'Partner in Innovation',
    description:
      'At our core, we believe in the power of collaboration to drive progress and lasting impact.',
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
    <section className="relative w-full overflow-hidden border-b border-gray-200/80 bg-gradient-to-b from-gray-50 via-white to-white h-[calc(100vh-72px)]">
      {/* ===== LightRays Background Layer — FULL SECTION COVER ===== */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <LightRays
          raysOrigin="top-center"
          raysColor="#f97316"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
          fadeDistance={1}
          saturation={0.75}
          lightMode
          className="h-full w-full"
        />
      </div>

      {/* ===== Content Layer ===== */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-5 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16">
        <div className="relative mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gray-800 shadow-sm backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-1.5 sm:text-[12px] lg:text-[13px]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
            <span>{slide.title}</span>
          </div>

          {/* ===== FIXED CONTENT WRAPPER ===== */}
          <div className="relative w-full min-h-[340px] sm:min-h-[400px] md:min-h-[440px] lg:min-h-[480px] xl:min-h-[520px]">
            {/* Big Subtitle — Absolute Positioned */}
            <div className="absolute top-0 left-0 right-0 flex min-h-[80px] items-center justify-center px-2 sm:min-h-[100px] md:min-h-[110px] lg:min-h-[150px] xl:min-h-[170px]">
              <h1 className="font-poppins text-[28px] font-bold leading-[1.2] tracking-tight text-gray-900 sm:text-[42px] md:text-[48px] lg:text-[68px] xl:text-[76px]">
                {slide.subtitle}
              </h1>
            </div>

            {/* Description — FIXED */}
            <div className="absolute left-0 right-0 flex min-h-[80px] items-center justify-center px-4 sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px] top-[90px] sm:top-[110px] md:top-[130px] lg:top-[170px] xl:top-[190px]">
              <p className="mx-auto max-w-[520px] font-red-hat text-[15px] font-normal leading-relaxed text-gray-600 sm:max-w-[580px] sm:text-[18px] md:max-w-[620px] md:text-[20px] lg:max-w-[680px] lg:text-[22px]">
                {slide.description}
              </p>
            </div>

            {/* Buttons — Absolute Positioned */}
            <div className="absolute left-0 right-0 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 top-[200px] sm:top-[240px] md:top-[270px] lg:top-[330px] xl:top-[350px]">
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

            {/* Features Row — Absolute Positioned */}
            <div className="absolute left-0 right-0 border-t border-gray-200 pt-6 top-[300px] sm:top-[360px] md:top-[400px] lg:top-[460px] xl:top-[490px]">
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
  );
}
