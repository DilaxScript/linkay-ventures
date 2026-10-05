'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2 } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah T',
    role: 'Founder',
    company: 'GreenFuture',
    quote:
      'Linkay Ventures was instrumental in our growth, providing not only funding but also invaluable guidance.',
    avatar: '/images/testimonial-avatar.jpg',
  },
  {
    name: 'James P',
    role: 'CEO',
    company: 'DataConnect',
    quote:
      "Their team's expertise and support helped us launch faster and stronger than we imagined.",
    avatar: '/images/testimonial-avatar.jpg',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 4500);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  const current = testimonials[currentIndex];

  return (
    <section className="w-full bg-white py-20 px-6 sm:px-12 lg:px-16 border-t border-gray-100">
      <div className="max-w-[1240px] mx-auto">
        {/* Section header */}
        <div className="text-center max-w-[850px] mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            Testimonials
          </span>
          <h2 className="font-poppins text-gray-900 text-[30px] sm:text-[42px] font-bold leading-tight mb-4">
            Hear From Our Clients
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Testimonial card */}
        <div className="relative max-w-[960px] mx-auto">
          {/* Main card */}
          <div className="relative bg-white rounded-2xl border border-gray-200/90 shadow-2xs hover:shadow-md transition-all duration-300 p-8 sm:p-12 overflow-hidden">
            {/* Orange accent corner glow */}
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />

            {/* Top-row: quote icon + trust badge */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                <Quote size={20} />
              </div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-gray-500 bg-gray-100 px-2.5 py-1 rounded border border-gray-200/60 uppercase tracking-wider">
                <CheckCircle2 size={12} className="text-orange-500" />
                Verified Client
              </span>
            </div>

            {/* Quote */}
            <blockquote className="font-red-hat text-[17px] sm:text-[19px] md:text-[21px] text-gray-700 leading-relaxed mb-8 relative">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author row */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
              {/* Avatar */}
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gray-100 shrink-0">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="font-poppins font-bold text-[16px] text-gray-900 truncate">
                  {current.name}
                </h4>
                <p className="font-red-hat text-[13.5px] text-gray-500 truncate">
                  {current.role} · <span className="text-orange-500">{current.company}</span>
                </p>
              </div>

              {/* 5-Star Rating */}
              <div className="hidden sm:flex items-center gap-0.5 text-orange-500 shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
            </div>

            {/* Bottom row: rating on mobile + controls */}
            <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-100">
              {/* Rating (mobile only) */}
              <div className="flex sm:hidden items-center gap-0.5 text-orange-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? 'w-7 bg-orange-500'
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 flex items-center justify-center transition-all duration-200"
                >
                  <ChevronLeft size={17} />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 flex items-center justify-center transition-all duration-200"
                >
                  <ChevronRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
