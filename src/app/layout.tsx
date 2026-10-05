import type { Metadata } from 'next';
import { Kanit, Poppins, Raleway, Red_Hat_Display, Roboto, Geist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import BackToTop from '@/components/BackToTop';

const kanit = Kanit({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-kanit',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const raleway = Raleway({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

const redHatDisplay = Red_Hat_Display({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-redhat',
  display: 'swap',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Linkay Ventures – Official site',
  description:
    'Linkay Ventures partners with visionary founders to drive innovation and create meaningful impact. From seed funding to strategic mentorship.',
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  openGraph: {
    title: 'Linkay Ventures – Official site',
    description:
      'Linkay Ventures partners with visionary founders to drive innovation and create meaningful impact.',
    url: 'https://linkayventures.com/',
    siteName: 'Linkay Ventures',
    locale: 'en_US',
    type: 'website',
  },
};

import AppShell from '@/components/AppShell';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(kanit.variable, poppins.variable, raleway.variable, redHatDisplay.variable, roboto.variable, "font-sans", geist.variable)}
    >
      <body className="bg-white text-[#0A0A0A] font-redhat antialiased selection:bg-[#FF6B00] selection:text-white">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
