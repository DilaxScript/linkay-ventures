'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full bg-white text-gray-900 border-t border-gray-200/80 font-sans">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-gray-200">
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4">
            {/* ✅ Logo — இன்னும் மேல நகர்த்தப்பட்டது (-mt-4) */}
            <Link href="/" className="inline-flex items-center group mb-2 -mt-4">
              <Image
                src="/images/logo.png"
                alt="Linkay Ventures"
                width={420}
                height={120}
                className="w-[170px] sm:w-[190px] lg:w-[210px] h-auto transition-transform duration-200 group-hover:scale-105"
                priority
              />
            </Link>

            <p className="font-red-hat text-gray-600 text-[14px] leading-relaxed max-w-[340px]">
              Transforming real-world assets into structured digital opportunities through
              regulatory-compliant tokenization and institutional market infrastructure.
            </p>

            {/* Quick Contact Items */}
            <div className="space-y-2.5 pt-4 font-red-hat text-[14px]">
              <a
                href="tel:+19178168128"
                className="group flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 group-hover:text-orange-500 group-hover:border-orange-200 transition-colors shadow-2xs">
                  <Phone size={14} />
                </div>
                <span className="font-medium">+1 917 816 8128</span>
              </a>

              <a
                href="mailto:info@linkayventures.com"
                className="group flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 group-hover:text-orange-500 group-hover:border-orange-200 transition-colors shadow-2xs">
                  <Mail size={14} />
                </div>
                <span className="font-medium">info@linkayventures.com</span>
              </a>

              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 shadow-2xs">
                  <MapPin size={14} />
                </div>
                <span className="font-medium">New York, USA</span>
              </div>
            </div>
          </div>

          {/* Column 2: Platform & Ecosystem (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-poppins text-gray-900 text-[14.5px] font-bold uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              Platform
            </h4>
            <ul className="space-y-2.5 font-red-hat text-[14px]">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/rwa-tokenization"
                  className="text-gray-900 hover:text-gray-900 transition-colors"
                >
                  <span>RWA Tokenization</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/linkay-commodities"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Linkay Commodities
                </Link>
              </li>
              <li>
                <Link
                  href="/linkay-think-tank"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Linkay Think-Tank
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Resources (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-poppins text-gray-900 text-[14.5px] font-bold uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              Resources
            </h4>
            <ul className="space-y-2.5 font-red-hat text-[14px]">
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Market Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Support &amp; Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Institutional Advisory Card (3 cols) */}
          <div className="lg:col-span-3">
            <div className="p-5 sm:p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-700">
                  Advisory Desk
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <div>
                <h5 className="font-poppins text-gray-900 font-bold text-sm">Working Hours</h5>
                <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                  <Clock size={13} className="text-orange-500" />
                  <span>Mon – Fri &nbsp;09:00 – 17:00 EST</span>
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                Connect with our asset tokenization specialists for tailored institutional
                onboarding and structuring.
              </p>

              <div>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-poppins text-xs font-semibold py-3 px-4 rounded-xl transition-all shadow-sm hover:shadow-md"
                >
                  <span>Discuss with an Expert</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-orange-500" />
            <span>© 2026 Linkay Ventures. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-gray-500 text-center sm:text-right">
              Institutional Multi-RWA Tokenization &amp; Venture Infrastructure
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
