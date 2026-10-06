'use client';

import React, { useState } from 'react';
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
  Sparkles,
  Zap,
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
      {/* 1. HERO BANNER */}
      <BackgroundLines className="relative w-full overflow-hidden border-b border-gray-200/80 bg-gradient-to-b from-gray-50 via-white to-white">
        <section className="relative flex min-h-[520px] w-full items-center justify-center px-5 py-20 sm:px-8 sm:py-24 md:px-12 md:py-28 lg:py-32">
          <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gray-800 shadow-sm backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-1.5 sm:text-[12px] lg:text-[13px]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
              <span>Linkay Ventures</span>
            </div>

            <h1 className="mb-4 font-poppins text-[32px] font-bold leading-[1.15] tracking-tight text-gray-900 sm:mb-6 sm:text-[46px] md:text-[54px] lg:text-[68px]">
              Contact Us
            </h1>

            <p className="mx-auto mb-8 max-w-[620px] font-red-hat text-[15px] font-normal leading-relaxed text-gray-600 sm:mb-10 sm:max-w-[700px] sm:text-[18px] md:text-[20px] lg:max-w-[780px] lg:text-[22px]">
              Have a question, an idea, or a partnership in mind? Let&apos;s start the conversation.
            </p>

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

      {/* 2. ULTRA PREMIUM FORM SECTION */}
      <section
        id="contact-form"
        className="relative w-full py-20 px-6 sm:px-12 lg:px-16 max-w-[1240px] mx-auto"
      >
        {/* Big centered heading */}
        <div className="text-center max-w-[720px] mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-[11px] font-semibold uppercase tracking-wider mb-5">
            <Sparkles size={12} />
            <span>Start the Conversation</span>
          </span>
          <h2 className="font-poppins text-gray-900 text-[32px] sm:text-[44px] lg:text-[52px] font-bold leading-[1.15] tracking-tight mb-5">
            Let&apos;s build something{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              extraordinary
            </span>
          </h2>
          <p className="font-red-hat text-gray-600 text-[16px] sm:text-[18px] leading-relaxed">
            Fill out the form and a senior partner will personally reach out within 24 hours.
          </p>
        </div>

        {/* Premium card — form + info panel side-by-side inside ONE glass card */}
        <div className="relative max-w-[1180px] mx-auto">
          {/* Glow behind card */}
          <div className="pointer-events-none absolute -inset-6 rounded-[36px] bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-orange-500/20 blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-5 overflow-hidden rounded-[28px] border border-gray-200/80 bg-white shadow-[0_20px_70px_-20px_rgba(0,0,0,0.15)]">
            {/* LEFT PANEL — Dark premium info (2 cols) */}
            <div className="relative lg:col-span-2 bg-gray-950 p-8 sm:p-10 lg:p-11 overflow-hidden">
              {/* Decorative gradient mesh */}
              <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-orange-500/40 blur-3xl" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-600/20 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:32px_32px]" />

              <div className="relative z-10 flex h-full flex-col">
                {/* Top badge */}
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-orange-400">
                  <Zap size={12} />
                  <span>Direct Line</span>
                </span>

                {/* Heading */}
                <h3 className="mt-6 font-poppins text-[26px] sm:text-[28px] lg:text-[30px] font-bold leading-tight text-white">
                  Talk to a partner,
                  <br />
                  <span className="text-orange-400">not a bot.</span>
                </h3>

                <p className="mt-4 font-red-hat text-[14.5px] leading-relaxed text-gray-400">
                  Every inquiry lands on the desk of a senior partner — no gatekeepers, no
                  runaround.
                </p>

                {/* Info list */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-orange-400">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="font-poppins text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                        Office
                      </p>
                      <p className="mt-0.5 font-red-hat text-[13.5px] leading-snug text-white">
                        295 Madison Ave, 12th Flr
                        <br />
                        New York, NY 10017
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-orange-400">
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="font-poppins text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                        Email
                      </p>
                      <a
                        href="mailto:info@linkayventures.com"
                        className="mt-0.5 block font-red-hat text-[13.5px] text-white transition-colors hover:text-orange-400"
                      >
                        info@linkayventures.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-orange-400">
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="font-poppins text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                        Phone
                      </p>
                      <a
                        href="tel:+19178168128"
                        className="mt-0.5 block font-red-hat text-[13.5px] text-white transition-colors hover:text-orange-400"
                      >
                        +1 917 816 8128
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL — Form (3 cols) */}
            <div className="lg:col-span-3 p-8 sm:p-10 lg:p-11 bg-white">
              {submitted ? (
                <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 mb-5">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="font-poppins text-gray-900 text-[22px] font-bold mb-2">
                    Message Received
                  </h3>
                  <p className="font-red-hat text-gray-600 text-[15px] leading-relaxed max-w-[380px]">
                    Thank you! Your message has been received. A senior partner will reach out
                    shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Heading inside form */}
                  <div className="mb-2">
                    <h4 className="font-poppins text-gray-900 text-[18px] font-bold mb-1">
                      Send us a message
                    </h4>
                    <p className="font-red-hat text-[13.5px] text-gray-500">
                      All fields marked are required.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-poppins text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 bg-gray-50/80 border border-gray-200 rounded-xl text-[14.5px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block font-poppins text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 bg-gray-50/80 border border-gray-200 rounded-xl text-[14.5px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-poppins text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 bg-gray-50/80 border border-gray-200 rounded-xl text-[14.5px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block font-poppins text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-2">
                        Inquiry Type
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3.5 bg-gray-50/80 border border-gray-200 rounded-xl text-[14.5px] text-gray-800 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all"
                      >
                        <option value="Accelerator Programs">Accelerator Programs</option>
                        <option value="Corporate Partnerships">Corporate Partnerships</option>
                        <option value="Raise capital">Raise capital</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-poppins text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell us about your idea, project, or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 bg-gray-50/80 border border-gray-200 rounded-xl text-[14.5px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-poppins text-[15px] font-semibold py-4 rounded-xl transition-all shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35"
                  >
                    <span>Send Message</span>
                    <Send
                      size={17}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>

                  <p className="font-red-hat text-[12px] text-gray-500 text-center">
                    By submitting, you agree to our privacy policy. We&apos;ll never share your
                    data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. OFFICE INFO — 3 card grid */}
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

      {/* 4. BOTTOM CTA */}
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
