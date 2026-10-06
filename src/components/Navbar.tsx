'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  external?: boolean;
  badge?: string;
  submenu?: { name: string; href: string; external?: boolean; desc?: string }[];
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Programs', href: '/programs' },
  { name: 'RWA Tokenization', href: '/rwa-tokenization' },
  {
    name: 'More',
    href: '#',
    submenu: [
      { name: 'Blog', href: '/blog', desc: 'Insights, market updates and research.' },
      {
        name: 'Linkay Commodities',
        href: '/linkay-commodities',
        desc: 'Real-world physical commodities trading.',
      },
      {
        name: 'Linkay Think-Tank',
        href: '/linkay-think-tank',
        desc: 'Strategic advisory and emerging tech studies.',
      },
      { name: 'Contact', href: '/contact', desc: 'Connect with our leadership team.' },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-xs'
          : 'bg-white border-b border-gray-100'
      }`}
    >
      {/* ✅ Navbar height: 88px (unchanged) */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 h-[88px] flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center group py-2">
            {/* ✅ Logo bigger: width increased a lot, height max-fit */}
            <div className="relative w-[160px] sm:w-[180px] lg:w-[205px] h-[70px] sm:h-[78px] lg:h-[84px] transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Linkay Ventures"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => {
            if (item.submenu) {
              const isChildActive = item.submenu.some(
                (sub) => !sub.external && pathname.startsWith(sub.href)
              );

              return (
                <div
                  key={item.name}
                  className="relative group py-6"
                  onMouseEnter={() => setMoreDropdownOpen(true)}
                  onMouseLeave={() => setMoreDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 font-poppins text-[13.5px] font-medium tracking-[0.2px] px-3.5 py-2 rounded-lg transition-colors ${
                      isChildActive || moreDropdownOpen
                        ? 'text-gray-900 bg-gray-100 font-semibold'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        moreDropdownOpen ? 'rotate-180 text-orange-500' : 'text-gray-400'
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute right-0 top-[65px] w-[260px] bg-white border border-gray-200 rounded-xl p-2 shadow-lg transition-all duration-200 z-50 ${
                      moreDropdownOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    }`}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        target={subItem.external ? '_blank' : undefined}
                        rel={subItem.external ? 'noopener noreferrer' : undefined}
                        className="group flex flex-col px-3 py-2 rounded-lg transition-colors hover:bg-gray-50"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-poppins text-[13px] font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                            {subItem.name}
                          </span>
                          <ArrowRight
                            size={12}
                            className="text-gray-300 group-hover:text-orange-500 transition-colors opacity-0 group-hover:opacity-100"
                          />
                        </div>
                        {subItem.desc && (
                          <span className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">
                            {subItem.desc}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            const active = isActive(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative flex items-center gap-1.5 font-poppins text-[13.5px] tracking-[0.2px] px-3.5 py-2 rounded-lg transition-colors ${
                  active
                    ? 'text-gray-900 font-semibold bg-gray-100'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium'
                }`}
              >
                <span>{item.name}</span>
                {item.badge && (
                  <span className="text-[9.5px] font-bold uppercase tracking-wider bg-orange-500 text-white px-1.5 py-0.2 rounded-full">
                    {item.badge}
                  </span>
                )}
                {active && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-orange-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Action */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-poppins text-[13.5px] font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md"
          >
            <span>Discuss an Asset</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-5 pt-3 pb-8 shadow-xl animate-fade-in">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              if (item.submenu) {
                return (
                  <div key={item.name} className="py-2 border-b border-gray-100">
                    <div className="font-poppins text-[12px] font-semibold uppercase tracking-wider text-gray-500 px-3 py-1">
                      {item.name}
                    </div>
                    <div className="pl-3 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          target={subItem.external ? '_blank' : undefined}
                          rel={subItem.external ? 'noopener noreferrer' : undefined}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 text-[14px] font-poppins font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl font-poppins text-[14px] font-medium transition-colors ${
                    active
                      ? 'text-gray-900 bg-gray-100 font-semibold'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-500 text-white px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-gray-100">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-poppins text-sm font-semibold py-3 px-4 rounded-xl shadow-sm"
              >
                <span>Discuss an Asset</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
