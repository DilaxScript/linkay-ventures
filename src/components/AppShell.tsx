'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import BackToTop from '@/components/BackToTop';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isInvestaxRoute = pathname.startsWith('/tokenization-platform');

  if (isInvestaxRoute) {
    return <div className="min-h-screen w-full bg-white text-[#0A0A0A]">{children}</div>;
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppWidget />
      <BackToTop />
    </>
  );
}
