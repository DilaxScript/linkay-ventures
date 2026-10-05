'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Activity,
  MapPin,
  Phone,
  Mail,
  Send,
  Clock,
} from 'lucide-react';
import { BackgroundLines } from '@/components/ui/background-lines';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Accelerator Programs',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactCards = [
    {
      icon: MapPin,
      title: 'Office Location',
      tag: 'New York',
      lines: ['Linkay Ventures Inc.', '295 Madison Avenue,', '12th Flr', 'New York, NY 10017'],
      href: null,
    },
    {
      icon: Phone,
      title: 'Office Contact',
      tag: 'Direct Line',
      lines: ['+1 917 816 8128'],
      href: 'tel:+19178168128',
    },
    {
      icon: Mail,
      title: 'Office E-Mail',
      tag: '24/7',
      lines: ['info@linkayventures.com'],
      href: 'mailto:info@linkayventures.com',
    },
  ];

  return (
    <main className="w-full bg-white text-gray-900 font-sans antialiased overflow-x-hidden selection:bg-orange-500 selection:text-white">
      {/* 1. HERO BANNER — Same as RWA / About / Services / Programs / Blog */}
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
              Contact Us
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mb-8 max-w-[620px] font-red-hat text-[15px] font-normal leading-relaxed text-gray-600 sm:mb-10 sm:max-w-[700px] sm:text-[18px] md:text-[20px] lg:max-w-[780px] lg:text-[22px]">
              Have a question, an idea, or a partnership in mind? Let&apos;s start the conversation.
            </p>

            {/* Buttons */}
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
              <Link
                href="#contact-form"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 font-poppins text-[15px] font-semibold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-orange-600 active:translate-y-0 sm:w-auto sm:px-8 sm:py-4 sm:text-[16px] lg:px-10 lg:py-5 lg:text-[18px]"
              >
                <span>Send a Message</span>
                <ArrowRight size={18} className="sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="#office-info"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white/80 px-6 py-3.5 font-poppins text-[15px] font-semibold text-gray-800 shadow-sm backdrop-blur-sm transition-all hover:border-gray-400 hover:text-orange-600 sm:w-auto sm:px-7 sm:py-4 sm:text-[16px] lg:px-9 lg:py-5 lg:text-[18px]"
              >
                <span>View Office Info</span>
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
                  <span>Response Within 24 Hours</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <ShieldCheck
                    size={16}
                    className="shrink-0 text-orange-500 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  />
                  <span>Confidential &amp; Secure</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <Activity
                    size={16}
                    className="shrink-0 text-orange-500 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  />
                  <span>Global Advisory Reach</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BackgroundLines>

      {/* 2. FORM + IMAGE — Split section (RWA "Finance with Expert Leaders" style) */}
      <section
        id="contact-form"
        className="w-full py-20 px-6 sm:px-12 lg:px-16 max-w-[1240px] mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Heading + Form (7 cols) */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              We&apos;re Here to Help
            </span>
            <h2 className="font-poppins text-gray-900 text-[30px] sm:text-[40px] font-bold leading-tight mb-4">
              Have a Question or Need Assistance?
            </h2>
            <div className="w-12 h-1 bg-orange-500 mb-6 rounded-full" />
            <p className="font-red-hat text-gray-600 text-[16px] sm:text-[17px] leading-relaxed mb-8">
              Fill out the form below and our team will get back to you as soon as possible.
            </p>

            {submitted ? (
              <div className="p-6 sm:p-8 bg-white border border-gray-200/90 rounded-2xl shadow-2xs">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h3 className="font-poppins text-gray-900 text-[18px] font-bold mb-1">
                      Message Received
                    </h3>
                    <p className="font-red-hat text-gray-600 text-[15px] leading-relaxed">
                      Thank you! Your message has been received. Our team will reach out shortly.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 bg-gray-50/80 border border-gray-200 rounded-xl text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/10 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 bg-gray-50/80 border border-gray-200 rounded-xl text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/10 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-4 bg-gray-50/80 border border-gray-200 rounded-xl text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/10 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-5 py-4 bg-gray-50/80 border border-gray-200 rounded-xl text-[15px] text-gray-800 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/10 transition-all"
                  >
                    <option value="Accelerator Programs">Accelerator Programs</option>
                    <option value="Corporate Partnerships">Corporate Partnerships</option>
                    <option value="Raise capital">Raise capital</option>
                  </select>
                </div>

                <div>
                  <textarea
                    rows={5}
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 bg-gray-50/80 border border-gray-200 rounded-xl text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/10 transition-all resize-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-poppins text-[15px] font-semibold py-4 rounded-xl transition-all shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30"
                  >
                    <span>Let&apos;s Get Started</span>
                    <Send size={17} />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Image (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-[380px] sm:h-[500px] overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
              <Image
                src="/images/4affd89a9f1bef68eaddc24a749fa532.png"
                alt="Contact Us - Linkay Ventures"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />

              {/* Floating info badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm border border-gray-200/60 rounded-xl px-4 py-3 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 flex-shrink-0">
                    <Clock size={16} />
                  </div>
                  <div>
                    <p className="font-poppins text-gray-900 text-[13px] font-bold leading-tight">
                      Quick Response Team
                    </p>
                    <p className="font-red-hat text-gray-500 text-[11.5px] leading-tight">
                      Typically replies within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OFFICE INFO — 3 card grid (RWA card style) */}
      <section
        id="office-info"
        className="w-full py-20 px-6 sm:px-12 lg:px-16 max-w-[1240px] mx-auto border-t border-gray-100"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              Get in Touch
            </span>
            <h2 className="font-poppins text-gray-900 text-[30px] sm:text-[42px] font-bold leading-tight max-w-[700px]">
              Here&apos;s Where We&apos;re Located
            </h2>
          </div>
        </div>

        <p className="font-red-hat text-gray-600 text-[16px] sm:text-[17px] leading-relaxed max-w-[800px] mb-10">
          Interested in working with us? Reach out to explore investment opportunities, partnership
          inquiries, or learn more about our programs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {contactCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={idx}
                className="group bg-white p-6 rounded-2xl border border-gray-200/90 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 group-hover:text-orange-500 group-hover:border-orange-200 transition-colors">
                      <IconComp size={20} />
                    </div>
                    <span className="text-[11px] font-mono text-gray-500 bg-gray-100 px-2 py-0.5 rounded border border-gray-200/60">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="font-poppins text-gray-900 text-[18px] font-bold mb-3 group-hover:text-orange-600 transition-colors">
                    {card.title}
                  </h3>

                  {card.href ? (
                    <a
                      href={card.href}
                      className="font-red-hat text-gray-600 hover:text-orange-500 text-[15px] leading-relaxed transition-colors"
                    >
                      {card.lines.map((line, i) => (
                        <span key={i} className="block">
                          {line}
                        </span>
                      ))}
                    </a>
                  ) : (
                    <p className="font-red-hat text-gray-600 text-[15px] leading-relaxed">
                      {card.lines.map((line, i) => (
                        <span key={i} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  )}
                </div>

                {card.href && (
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <a
                      href={card.href}
                      className="inline-flex items-center gap-1.5 font-poppins text-[13px] font-semibold text-orange-500 hover:text-orange-600 transition-colors group/link"
                    >
                      <span>Reach Out</span>
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-200 group-hover/link:translate-x-0.5"
                      />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. BOTTOM CTA — Dark banner (Same as RWA / About / Services / Programs / Blog) */}
      <section className="w-full px-6 sm:px-12 lg:px-16 pb-20 max-w-[1240px] mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gray-950 text-white border border-gray-800 text-center relative max-w-[960px] mx-auto">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold mb-2 block">
              Let&apos;s Build Together
            </span>
            <h3 className="font-poppins text-2xl sm:text-3xl font-bold mb-4">
              Ready to Start Your Venture Journey?
            </h3>
            <p className="font-red-hat text-gray-400 text-sm sm:text-base mb-8">
              Connect with our team to explore investment opportunities, accelerator programs, or
              strategic partnerships.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#contact-form"
                className="bg-orange-500 hover:bg-orange-600 text-white font-poppins text-sm font-semibold px-8 py-3.5 rounded-xl transition-all shadow-md shadow-orange-500/20"
              >
                Send a Message
              </Link>
              <Link
                href="https://hub.linkayventures.com/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-poppins text-sm font-semibold px-7 py-3.5 rounded-xl transition-all"
              >
                Access Venture HUB
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
