'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Shield,
  ShieldCheck,
  Scale,
  Award,
  Layers,
  ArrowRight,
  CheckCircle2,
  Lock,
  Unlock,
  FileText,
  Coins,
  AlertCircle,
  Zap,
  Building2,
  Unlink,
  Sparkles,
  Play,
  X,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Cpu,
  Globe2,
  Repeat,
  Eye,
  Sliders,
  Palette,
  Laptop,
  Check,
  ChevronDown,
  Menu,
  Landmark,
  FileCode,
  Users,
  Briefcase,
  DollarSign,
  PieChart,
  Home,
  Lightbulb,
} from 'lucide-react';

export default function TokenizationPlatformPage() {
  // Navigation & UI states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [selectedColor, setSelectedColor] = useState('#FF6B00');

  // Solutions data (One-stop Shop Solution for Asset Tokenization)
  const solutions = [
    {
      id: 'issuance',
      title: 'Token Issuance',
      tag: 'For Issuer',
      description:
        'Seamlessly tokenize your real-world assets (RWAs) and get ready to launch your tokenized offerings globally on our Singapore-licensed marketplace.',
      features: [
        { text: 'Proprietary token issuance technology', icon: Cpu },
        { text: 'Customizable security token offering', icon: Sliders },
        { text: 'Smart contract development', icon: FileCode },
        { text: 'Onboarding and whitelisting of investors', icon: Users },
      ],
    },
    {
      id: 'primary',
      title: 'Primary Offering',
      tag: 'For Issuer',
      description:
        "Utilize our licensed marketplace in Singapore and distribution partners to conduct token offering to global investors.",
      features: [
        { text: 'Distribution on InvestaX platform', icon: Globe2 },
        { text: "Distribution through InvestaX's distribution partners", icon: Layers },
        { text: 'Investor roadshows and global syndicate access', icon: TrendingUp },
      ],
    },
    {
      id: 'secondary',
      title: 'Secondary Trading',
      tag: 'For Investor',
      description:
        'Beyond primary offering, list RWA tokens on our licensed secondary marketplace to enhance liquidity and flexibility for RWA token investors. InvestaX offers:',
      features: [
        { text: 'Peer-to-Peer Trading Marketplace', icon: Repeat },
        { text: "Centralized Secondary Trading Venue ('IX Exchange')", icon: Building2 },
      ],
    },
    {
      id: 'custody',
      title: 'Custody Solutions',
      tag: 'For Issuer & Investor',
      description:
        'Securely store and manage your RWA tokens with our qualified custodian.',
      features: [
        { text: 'Safekeep and store your RWA tokens with a licensed digital asset custodian', icon: ShieldCheck },
        { text: 'Regulatory compliant and Insurance coverage', icon: Shield },
        { text: 'Whitelisting and institutional-grade access controls', icon: Lock },
        { text: 'Comprehensive reporting and auditing', icon: FileText },
      ],
    },
    {
      id: 'lifecycle',
      title: 'Life Cycle Management',
      tag: 'For Issuer',
      description:
        'Manage your tokenized assets seamlessly. Track, service, monitor, and report throughout their lifecycle.',
      features: [
        { text: 'Asset servicing and corporate actions automation', icon: Sliders },
        { text: 'Track and manage digital asset portfolio in real time', icon: Eye },
        { text: 'Continuous compliance and governance', icon: Scale },
        { text: 'Monitor transactions and receive institutional reports', icon: FileText },
      ],
    },
    {
      id: 'cobranded',
      title: 'Co-Branded Platform',
      tag: 'For Issuer',
      description:
        'Launch co-branded section of your company on a licensed platform to create RWA offerings for global distribution.',
      features: [
        { text: 'Showcase your tokenized offerings on a custom domain with a custom logo', icon: Globe2 },
        { text: 'Our platform, your brand architecture', icon: Palette },
        { text: 'Full license and tech integration, reduce time-to-market', icon: Zap },
      ],
    },
  ];

  // Platform benefits
  const platformBenefits = [
    {
      title: 'Complete Tokenization Solution',
      desc: "InvestaX's asset tokenization platform offers comprehensive management of the entire RWA token life cycle, meeting the requirements of both issuers and investors.",
      icon: Layers,
    },
    {
      title: 'Regulatory Compliance',
      desc: 'Our platform is fully licensed by Monetary Authority of Singapore (MAS) for issuing and trading any RWA token for global investors.',
      icon: ShieldCheck,
    },
    {
      title: 'Diverse Asset Support',
      desc: 'Tokenize a wide array of assets, including tangible and intangible assets, financial instruments, and fiat currency.',
      icon: Coins,
    },
    {
      title: 'Unlimited Tokenized Assets',
      desc: 'Unlimited number of assets that can be tokenized and listed on our tokenization platform when using our Tokenization SaaS delivery model.',
      icon: Sparkles,
    },
    {
      title: 'Frictionless Distribution',
      desc: 'Our secondary marketplace and distribution partner network unlock global investors for your tokenized assets.',
      icon: Globe2,
    },
    {
      title: 'Robust Blockchain Technology',
      desc: 'Choice of leading blockchain protocols for tokenization, including Ethereum, Polygon, BASE, Algorand, Tezos, Hedera, and Kaia.',
      icon: Cpu,
    },
  ];

  // Assets you can tokenize
  const assetTypes = [
    { name: 'Money Market Fund', icon: Landmark },
    { name: 'Treasury Bills', icon: FileText },
    { name: 'Private Credit', icon: Briefcase },
    { name: 'Stocks', icon: TrendingUp },
    { name: 'Fixed-Income', icon: DollarSign },
    { name: 'Commodities', icon: PieChart },
    { name: 'Real Estate', icon: Home },
    { name: 'Intellectual Property', icon: Lightbulb },
  ];

  // Tokenization Process Roadmap
  const processSteps = [
    {
      step: '01',
      title: 'Registration & Configuration',
      desc: 'The token issuer will register with InvestaX to create a new RWA token offering and configure the details.',
    },
    {
      step: '02',
      title: 'Documentation & Structure',
      desc: 'RWA information and structure will be documented and presented in an investment memorandum, subscription agreement, teaser deck, and any other marketing material prepared by the token issuer.',
    },
    {
      step: '03',
      title: 'Token Ticker & Smart Contract',
      desc: 'Confirmation of token ticker and smart contract. The security tokens will then be ready for primary issuance and trading on InvestaX.',
    },
    {
      step: '04',
      title: 'Investor Whitelisting & Funding',
      desc: 'Investors who are qualified and onboarded by InvestaX will be able to invest using their whitelisted wallets.',
    },
    {
      step: '05',
      title: 'Portfolio & Position Monitoring',
      desc: 'Investors and issuers will be able to view positions, cash, and tokens.',
    },
  ];

  // Web 2.0 vs Web 3.0 Comparison Data
  const comparisonData = [
    {
      web2: 'Closed systems',
      web2Icon: Lock,
      web3: 'Open systems',
      web3Icon: Unlock,
    },
    {
      web2: 'Paper-based security offerings',
      web2Icon: FileText,
      web3: 'Security Token Offerings (STO)',
      web3Icon: Coins,
    },
    {
      web2: 'No liquidity solutions',
      web2Icon: AlertCircle,
      web3: 'Available liquidity solutions',
      web3Icon: Zap,
    },
    {
      web2: 'Traditional finance (TradFi) only',
      web2Icon: Building2,
      web3: 'TradFi and DeFi',
      web3Icon: Layers,
    },
    {
      web2: 'No connection to digital assets, DeFi, and NFTs',
      web2Icon: Unlink,
      web3: 'Connects to digital assets, NFTs, and more',
      web3Icon: Sparkles,
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setEmailSubmitted(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-[#0A0A0A] font-sans selection:bg-[#FF6B00] selection:text-white overflow-x-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#FF6B00]/10 via-[#FF6B00]/5 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-[#FF6B00]/5 blur-[140px] rounded-full" />
      </div>

      {/* 1. FLOATING GLASS NAVBAR */}
      <header className="sticky top-4 z-50 px-4 sm:px-6 max-w-[1240px] mx-auto">
        <div className="glass-panel rounded-full px-5 py-3 sm:px-7 sm:py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-neutral-200/80 flex items-center justify-between transition-all duration-300">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[#0A0A0A] text-white flex items-center justify-center font-bold text-[17px] group-hover:bg-[#FF6B00] transition-colors shadow-sm">
              <span className="text-white">I</span>
            </div>
            <div className="flex items-baseline">
              <span className="font-extrabold text-[20px] tracking-tight text-[#0A0A0A]">
                Investa<span className="text-[#FF6B00]">X</span>
              </span>
              <span className="ml-1.5 text-[10px] font-bold uppercase tracking-wider text-neutral-400 border border-neutral-200 rounded px-1 py-0.2">
                RWA
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            <Link
              href="/about"
              className="text-[14px] font-medium text-neutral-700 hover:text-[#FF6B00] transition-colors"
            >
              About
            </Link>

            {/* Tokenization Dropdown */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 text-[14px] font-medium text-[#FF6B00] transition-colors">
                <span>Tokenization</span>
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="glass-panel rounded-2xl p-2 shadow-xl border border-neutral-200 bg-white/95">
                  <Link
                    href="/asset-tokenization-advisory-and-consulting"
                    className="block px-4 py-2.5 rounded-xl text-[13px] font-medium text-neutral-700 hover:bg-[#FF6B00]/10 hover:text-[#FF6B00] transition-colors"
                  >
                    Tokenization Consulting
                  </Link>
                  <Link
                    href="/tokenization-platform"
                    className="block px-4 py-2.5 rounded-xl text-[13px] font-semibold text-[#FF6B00] bg-[#FF6B00]/10 transition-colors"
                  >
                    Licensed Tokenization Platform
                  </Link>
                </div>
              </div>
            </div>

            {/* Investment Dropdown */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 text-[14px] font-medium text-neutral-700 hover:text-[#FF6B00] transition-colors">
                <span>Investment</span>
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 w-52 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="glass-panel rounded-2xl p-2 shadow-xl border border-neutral-200 bg-white/95">
                  <Link
                    href="/investment"
                    className="block px-4 py-2.5 rounded-xl text-[13px] font-medium text-neutral-700 hover:bg-[#FF6B00]/10 hover:text-[#FF6B00] transition-colors"
                  >
                    Deals
                  </Link>
                  <Link
                    href="/rwa-vaults"
                    className="block px-4 py-2.5 rounded-xl text-[13px] font-medium text-neutral-700 hover:bg-[#FF6B00]/10 hover:text-[#FF6B00] transition-colors"
                  >
                    RWA Vaults
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/education"
              className="text-[14px] font-medium text-neutral-700 hover:text-[#FF6B00] transition-colors"
            >
              Education
            </Link>
            <Link
              href="/partners"
              className="text-[14px] font-medium text-neutral-700 hover:text-[#FF6B00] transition-colors"
            >
              Partners
            </Link>
            <Link
              href="/contact"
              className="text-[14px] font-medium text-neutral-700 hover:text-[#FF6B00] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="https://prime.investax.io/auth/sign-in/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-[13px] font-semibold text-neutral-800 hover:text-[#FF6B00] transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="https://prime.investax.io/auth/sign-in/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-[13px] font-semibold text-white bg-[#0A0A0A] hover:bg-[#FF6B00] transition-all shadow-md hover:shadow-[0_4px_16px_rgba(255,107,0,0.3)] transform hover:-translate-y-0.5"
            >
              Launch App
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-800 hover:text-[#FF6B00] transition-colors focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 glass-panel rounded-3xl p-6 shadow-2xl border border-neutral-200/90 bg-white/95 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-medium text-neutral-800 hover:text-[#FF6B00] py-1 border-b border-neutral-100"
              >
                About
              </Link>
              <Link
                href="/tokenization-platform"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-semibold text-[#FF6B00] py-1 border-b border-neutral-100"
              >
                Licensed Tokenization Platform
              </Link>
              <Link
                href="/asset-tokenization-advisory-and-consulting"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-medium text-neutral-800 hover:text-[#FF6B00] py-1 border-b border-neutral-100"
              >
                Tokenization Consulting
              </Link>
              <Link
                href="/investment"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-medium text-neutral-800 hover:text-[#FF6B00] py-1 border-b border-neutral-100"
              >
                Deals
              </Link>
              <Link
                href="/rwa-vaults"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-medium text-neutral-800 hover:text-[#FF6B00] py-1 border-b border-neutral-100"
              >
                RWA Vaults
              </Link>
              <Link
                href="/education"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-medium text-neutral-800 hover:text-[#FF6B00] py-1 border-b border-neutral-100"
              >
                Education
              </Link>
              <Link
                href="/partners"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-medium text-neutral-800 hover:text-[#FF6B00] py-1 border-b border-neutral-100"
              >
                Partners
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-medium text-neutral-800 hover:text-[#FF6B00] py-1 border-b border-neutral-100"
              >
                Contact
              </Link>
              <div className="pt-2 flex flex-col gap-2">
                <Link
                  href="https://prime.investax.io/auth/sign-in/"
                  className="w-full text-center py-3 rounded-full text-[14px] font-semibold text-neutral-800 border border-neutral-200"
                >
                  Sign In
                </Link>
                <Link
                  href="https://prime.investax.io/auth/sign-in/"
                  className="w-full text-center py-3 rounded-full text-[14px] font-semibold text-white bg-[#FF6B00]"
                >
                  Launch App
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 px-6 sm:px-12 max-w-[1240px] mx-auto z-10">
        <div className="text-center max-w-[900px] mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/20 text-[#FF6B00] text-[13px] font-semibold uppercase tracking-wider mb-6 animate-fade-in shadow-sm">
            <ShieldCheck size={16} />
            <span>MAS-Licensed Institutional RWA Infrastructure</span>
          </div>

          {/* Headline */}
          <h1 className="text-[40px] sm:text-[56px] md:text-[68px] font-extrabold text-[#0A0A0A] tracking-tight leading-[1.08] mb-6">
            Licensed Tokenization <br className="hidden sm:inline" />
            <span className="text-[#FF6B00]">Platform</span>
          </h1>

          {/* Subheadline */}
          <p className="text-[17px] sm:text-[20px] text-neutral-600 leading-relaxed max-w-[760px] mx-auto mb-10 font-normal">
            InvestaX operates a licensed tokenization platform for real-world assets (RWA), covering token issuance, secondary trading, secure custody and post-tokenization management within regulated environments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[15px] font-semibold text-white bg-[#FF6B00] hover:bg-[#E85D00] transition-all shadow-[0_6px_25px_rgba(255,107,0,0.35)] transform hover:-translate-y-0.5"
            >
              <span>Get in touch</span>
              <ArrowRight size={17} />
            </Link>

            <button
              onClick={() => setDemoModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[15px] font-semibold text-neutral-900 glass-panel hover:bg-white transition-all border border-neutral-300 shadow-sm hover:border-[#FF6B00]/50"
            >
              <div className="w-6 h-6 rounded-full bg-[#FF6B00] text-white flex items-center justify-center">
                <Play size={12} className="ml-0.5" />
              </div>
              <span className="tracking-wide">WATCH DEMO</span>
            </button>
          </div>
        </div>

        {/* Hero Interactive Glassmorphic Interface Preview Card */}
        <div className="relative mx-auto max-w-[1080px] rounded-3xl glass-card p-4 sm:p-7 border border-neutral-200/90 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)] overflow-hidden">
          {/* Top Bar simulating platform */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-200/80 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="ml-3 text-[12px] font-mono text-neutral-400">
                https://prime.investax.io/rwa-marketplace
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Live Node Verified
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/20">
                MAS CMS100635
              </span>
            </div>
          </div>

          {/* Main Dashboard Preview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Stat Card 1 */}
            <div className="md:col-span-4 bg-white/90 rounded-2xl p-5 border border-neutral-200/70 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[12px] font-semibold uppercase text-neutral-400 tracking-wider">
                  Total Tokenized Value
                </span>
                <Coins size={18} className="text-[#FF6B00]" />
              </div>
              <div className="text-[32px] font-extrabold text-[#0A0A0A] mb-1">$482,500,000</div>
              <div className="text-[12px] text-emerald-600 font-medium flex items-center gap-1">
                <TrendingUp size={14} />
                <span>+24.8% Active Issuance Volume</span>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="md:col-span-4 bg-white/90 rounded-2xl p-5 border border-neutral-200/70 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[12px] font-semibold uppercase text-neutral-400 tracking-wider">
                  Regulated Secondary Market
                </span>
                <Repeat size={18} className="text-[#FF6B00]" />
              </div>
              <div className="text-[32px] font-extrabold text-[#0A0A0A] mb-1">IX Exchange</div>
              <div className="text-[12px] text-neutral-500 font-medium">
                P2P &amp; Order Book Liquidity
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="md:col-span-4 bg-white/90 rounded-2xl p-5 border border-neutral-200/70 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[12px] font-semibold uppercase text-neutral-400 tracking-wider">
                  Custody &amp; Compliance
                </span>
                <ShieldCheck size={18} className="text-[#FF6B00]" />
              </div>
              <div className="text-[32px] font-extrabold text-[#0A0A0A] mb-1">100% Insured</div>
              <div className="text-[12px] text-neutral-500 font-medium">
                Qualified Digital Asset Custodian
              </div>
            </div>

            {/* Asset Row Simulation */}
            <div className="md:col-span-12 bg-white/90 rounded-2xl p-5 border border-neutral-200/70 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[14px] font-bold text-[#0A0A0A]">
                  Active Security Token Offerings (STOs)
                </span>
                <span className="text-[12px] font-semibold text-[#FF6B00] hover:underline cursor-pointer">
                  View All Marketplace Offerings &rarr;
                </span>
              </div>
              <div className="space-y-3">
                {[
                  {
                    name: 'Singapore Prime Real Estate Fund (eVCC)',
                    ticker: 'SPRE-STO',
                    target: '$50M USD',
                    yield: '8.4% Net p.a.',
                    status: 'Open for Subscription',
                  },
                  {
                    name: 'US Treasury Yield Plus Token',
                    ticker: 'UST-PLUS',
                    target: '$100M USD',
                    yield: '5.2% Daily Compound',
                    status: 'Active Trading',
                  },
                  {
                    name: 'Global Tech Infrastructure Private Credit',
                    ticker: 'GTIC-RWA',
                    target: '$35M USD',
                    yield: '11.2% Fixed Coupon',
                    status: 'Fully Whitelisted',
                  },
                ].map((asset, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-neutral-50/80 border border-neutral-200/50 hover:border-[#FF6B00]/40 transition-colors gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#0A0A0A] text-[#FF6B00] font-bold flex items-center justify-center text-[12px]">
                        RWA
                      </div>
                      <div>
                        <div className="text-[14px] font-bold text-[#0A0A0A]">{asset.name}</div>
                        <div className="text-[12px] text-neutral-500 font-mono">{asset.ticker}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-[12px] text-neutral-400">Target</div>
                        <div className="text-[13px] font-semibold text-[#0A0A0A]">{asset.target}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[12px] text-neutral-400">Target Return</div>
                        <div className="text-[13px] font-bold text-[#FF6B00]">{asset.yield}</div>
                      </div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-100/70 text-emerald-800 border border-emerald-200">
                        {asset.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WE WORK WITH GLOBAL BRANDS */}
      <section className="py-14 border-y border-neutral-200/80 bg-neutral-50/60">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-12 text-center">
          <h2 className="text-[13px] font-bold uppercase tracking-[2px] text-neutral-400 mb-8">
            We Work With Global Brands &amp; Premier Blockchain Ecosystems
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80 hover:opacity-100 transition-opacity">
            {[
              'Ethereum',
              'BNB Chain',
              'Polygon',
              'XDC Network',
              'Algorand',
              'Hedera',
              'Tezos',
              'Kaia',
              'Plug and Play',
            ].map((brand, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 group cursor-pointer"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#0A0A0A] group-hover:bg-[#FF6B00] transition-colors" />
                <span className="font-extrabold text-[18px] text-neutral-800 group-hover:text-[#FF6B00] transition-colors tracking-tight">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REGULATORY LICENSES BANNER */}
      <section className="py-20 px-6 sm:px-12 max-w-[1240px] mx-auto">
        <div className="text-center max-w-[850px] mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-[12px] font-bold uppercase tracking-wider mb-4">
            <Award size={15} />
            <span>Monetary Authority of Singapore (MAS)</span>
          </div>
          <h2 className="text-[32px] sm:text-[44px] font-extrabold text-[#0A0A0A] tracking-tight mb-4">
            Licensed by the Monetary Authority of Singapore
          </h2>
          <p className="text-[17px] text-neutral-600 leading-relaxed">
            InvestaX operates within strict compliance standards under Singapore financial services regulation to safeguard institutional and accredited investors.
          </p>
        </div>

        {/* 3 Licenses Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="glass-card rounded-2xl p-8 border border-neutral-200/90 relative hover:border-[#FF6B00] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center mb-5">
              <ShieldCheck size={26} />
            </div>
            <h3 className="text-[18px] font-bold text-[#0A0A0A] mb-3 leading-snug">
              Capital Markets Services License (CMS)
            </h3>
            <p className="text-[15px] text-neutral-600 leading-relaxed">
              Authorized by MAS to deal in securities and collective investment schemes for primary issuance and distribution.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-neutral-200/90 relative hover:border-[#FF6B00] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center mb-5">
              <Building2 size={26} />
            </div>
            <h3 className="text-[18px] font-bold text-[#0A0A0A] mb-3 leading-snug">
              Recognized Market Operator License (RMO)
            </h3>
            <p className="text-[15px] text-neutral-600 leading-relaxed">
              Licensed to operate an organized secondary market for securities and digital asset security tokens.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-neutral-200/90 relative hover:border-[#FF6B00] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center mb-5">
              <Scale size={26} />
            </div>
            <h3 className="text-[18px] font-bold text-[#0A0A0A] mb-3 leading-snug">
              Exempt Financial Advisor
            </h3>
            <p className="text-[15px] text-neutral-600 leading-relaxed">
              Empowered to provide regulated financial advice on units in collective investment schemes and fund structures.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/investment"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-[14px] font-semibold text-[#0A0A0A] glass-panel hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors"
          >
            <span>Our Projects</span>
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* 5. ONE-STOP SHOP SOLUTION FOR ASSET TOKENIZATION (INTERACTIVE TABS) */}
      <section className="py-20 px-6 sm:px-12 max-w-[1240px] mx-auto border-t border-neutral-200/80">
        <div className="text-center max-w-[800px] mx-auto mb-14">
          <span className="text-[13px] font-bold uppercase tracking-[2px] text-[#FF6B00] mb-2 block">
            End-To-End Infrastructure
          </span>
          <h2 className="text-[32px] sm:text-[44px] font-extrabold text-[#0A0A0A] tracking-tight mb-4">
            One-stop Shop Solution for Asset Tokenization
          </h2>
          <p className="text-[17px] text-neutral-600">
            Comprehensive lifecycle architecture from legal structuring and token minting to global distribution and secondary exchange liquidity.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl glass-panel max-w-[1020px] mx-auto mb-10 border border-neutral-200/90">
          {solutions.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-xl text-[14px] font-bold transition-all ${
                activeTab === idx
                  ? 'bg-[#0A0A0A] text-white shadow-md'
                  : 'text-neutral-600 hover:text-[#FF6B00] hover:bg-neutral-100/70'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Active Tab Card Content */}
        <div className="max-w-[1020px] mx-auto glass-card rounded-3xl p-8 sm:p-12 border border-neutral-200/90 shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-8 pb-8 border-b border-neutral-200/80">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#FF6B00]/10 text-[#FF6B00] mb-3">
                {solutions[activeTab].tag}
              </span>
              <h3 className="text-[28px] sm:text-[34px] font-bold text-[#0A0A0A] tracking-tight mb-3">
                {solutions[activeTab].title}
              </h3>
              <p className="text-[16px] sm:text-[18px] text-neutral-600 leading-relaxed max-w-[650px]">
                {solutions[activeTab].description}
              </p>
            </div>
            <div className="flex-shrink-0">
              <button
                onClick={() => setDemoModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-[14px] font-semibold text-white bg-[#FF6B00] hover:bg-[#E85D00] transition-colors shadow-md"
              >
                <Play size={15} />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          {/* Features Checklist Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {solutions[activeTab].features.map((feat, fIdx) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={fIdx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-neutral-200/70 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <IconComp size={20} />
                  </div>
                  <div>
                    <span className="text-[15px] font-semibold text-[#0A0A0A] leading-snug">
                      {feat.text}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. PLATFORM BENEFITS */}
      <section className="py-20 px-6 sm:px-12 max-w-[1240px] mx-auto">
        <div className="text-center max-w-[850px] mx-auto mb-16">
          <span className="text-[13px] font-bold uppercase tracking-[2px] text-[#FF6B00] mb-2 block">
            Benefits Of Using Our Tokenization SaaS Platform
          </span>
          <h2 className="text-[34px] sm:text-[46px] font-extrabold text-[#0A0A0A] tracking-tight mb-4">
            Platform Benefits
          </h2>
          <p className="text-[17px] text-neutral-600">
            Unlocking institutional liquidity, regulatory confidence, and seamless global distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformBenefits.map((b, idx) => {
            const IconComponent = b.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-8 border border-neutral-200/90 relative hover:border-[#FF6B00] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] text-white group-hover:bg-[#FF6B00] transition-colors flex items-center justify-center mb-6 shadow-sm">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-[20px] font-bold text-[#0A0A0A] mb-3 leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-[15px] text-neutral-600 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center text-[13px] font-semibold text-[#FF6B00]">
                  <span>Institutional Grade</span>
                  <Check size={14} className="ml-1" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. INSTITUTIONAL ENDORSEMENT QUOTE */}
      <section className="py-16 px-6 sm:px-12 max-w-[1080px] mx-auto">
        <div className="glass-panel rounded-3xl p-8 sm:p-14 border border-neutral-200/90 shadow-xl relative overflow-hidden bg-gradient-to-br from-white via-white to-[#FF6B00]/5">
          <div className="text-[#FF6B00] text-[64px] font-serif leading-none mb-4 select-none">
            “
          </div>
          <blockquote className="text-[20px] sm:text-[26px] font-semibold text-[#0A0A0A] leading-relaxed mb-8">
            What sets this (InvestaX’s tokenization project) apart is InvestaX&apos;s status as a licensed platform, allowing for regulatorily compliant issuance and trading of digital asset securities or security tokens.
          </blockquote>
          <div className="flex items-center gap-4 pt-6 border-t border-neutral-200/80">
            <div className="w-11 h-11 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center font-bold text-[14px]">
              KPMG
            </div>
            <div>
              <div className="text-[15px] font-bold text-[#0A0A0A]">
                The Asset Tokenization C-Suite Playbook 2024
              </div>
              <div className="text-[13px] text-neutral-500">
                by KPMG Singapore and Singapore FinTech Association (SFA)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ASSETS YOU CAN TOKENIZE */}
      <section className="py-20 px-6 sm:px-12 max-w-[1240px] mx-auto">
        <div className="text-center max-w-[850px] mx-auto mb-16">
          <span className="text-[13px] font-bold uppercase tracking-[2px] text-[#FF6B00] mb-2 block">
            Flexible Asset Frameworks
          </span>
          <h2 className="text-[34px] sm:text-[46px] font-extrabold text-[#0A0A0A] tracking-tight mb-4">
            Assets You Can Tokenize
          </h2>
          <p className="text-[17px] text-neutral-600">
            Transform traditionally illiquid or complex financial instruments into liquid, programmable digital tokens.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {assetTypes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-neutral-200/80 hover:border-[#FF6B00] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#0A0A0A] text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-colors flex items-center justify-center mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-[18px] font-bold text-[#0A0A0A] mb-4">
                    {item.name}
                  </h3>
                </div>
                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-[13px] font-semibold text-[#FF6B00] hover:text-[#0A0A0A] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={13} className="ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. VALUE PROPOSITIONS: WEB 2.0 VS WEB 3.0 COMPARISON TABLE (Requirement 6) */}
      <section className="py-24 px-6 sm:px-12 max-w-[1240px] mx-auto">
        <div className="text-center max-w-[850px] mx-auto mb-16">
          <span className="text-[13px] font-bold uppercase tracking-[2px] text-[#FF6B00] mb-2 block">
            VALUE PROPOSITIONS
          </span>
          <h2 className="text-[34px] sm:text-[46px] font-extrabold text-[#0A0A0A] tracking-tight mb-4">
            Web 2.0 vs Web 3.0 Investments
          </h2>
          <p className="text-[17px] text-neutral-600">
            Comparing legacy paper-bound financial infrastructure with licensed blockchain-powered real-world asset tokenization.
          </p>
        </div>

        {/* Comparison Table with Icons & Frosted Glass */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1080px] mx-auto">
          {/* Legacy Web 2.0 Card */}
          <div className="rounded-3xl p-7 sm:p-9 bg-neutral-50/90 border border-neutral-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-neutral-200 mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    Legacy Architecture
                  </span>
                  <h3 className="text-[24px] font-black text-neutral-700 tracking-tight">
                    WEB 2.0 INVESTMENTS
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-neutral-200/80 text-neutral-500 flex items-center justify-center">
                  <Lock size={18} />
                </div>
              </div>

              <div className="space-y-4">
                {comparisonData.map((row, idx) => {
                  const Icon = row.web2Icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 rounded-xl bg-white border border-neutral-200/60"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-400 flex items-center justify-center flex-shrink-0">
                          <Icon size={16} />
                        </div>
                        <span className="text-[15px] font-medium text-neutral-700">
                          {row.web2}
                        </span>
                      </div>
                      <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 flex-shrink-0" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-8 pt-4 text-[12px] text-neutral-400 text-center">
              Restricted market access &bull; Manual settlements &bull; Opaque valuations
            </div>
          </div>

          {/* Next-Gen Web 3.0 Card (Highlighted with Vibrant Orange) */}
          <div className="rounded-3xl p-7 sm:p-9 glass-panel bg-white/90 border-2 border-[#FF6B00] shadow-[0_12px_40px_rgba(255,107,0,0.12)] relative flex flex-col justify-between">
            {/* Recommended Tag */}
            <div className="absolute -top-3.5 right-8 bg-[#FF6B00] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
              Next-Gen Standard
            </div>

            <div>
              <div className="flex items-center justify-between pb-5 border-b border-neutral-200 mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B00] block mb-1">
                    Licensed Tokenization Standard
                  </span>
                  <h3 className="text-[24px] font-black text-[#0A0A0A] tracking-tight">
                    WEB 3.0 INVESTMENTS
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#FF6B00]/15 text-[#FF6B00] flex items-center justify-center">
                  <Sparkles size={18} />
                </div>
              </div>

              <div className="space-y-4">
                {comparisonData.map((row, idx) => {
                  const Icon = row.web3Icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 rounded-xl bg-white border border-[#FF6B00]/25 shadow-sm hover:border-[#FF6B00] transition-colors"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center flex-shrink-0">
                          <Icon size={16} />
                        </div>
                        <span className="text-[15px] font-bold text-[#0A0A0A]">
                          {row.web3}
                        </span>
                      </div>
                      <CheckCircle2 size={18} className="text-[#FF6B00] flex-shrink-0" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-8 pt-4 text-[12px] text-[#FF6B00] font-semibold text-center">
              Global instant liquidity &bull; Automated 24/7 compliance &bull; On-chain provenance
            </div>
          </div>
        </div>
      </section>

      {/* 10. ASSET TOKENIZATION PROCESS */}
      <section className="py-20 px-6 sm:px-12 max-w-[1240px] mx-auto border-t border-neutral-200/80">
        <div className="text-center max-w-[850px] mx-auto mb-16">
          <span className="text-[13px] font-bold uppercase tracking-[2px] text-[#FF6B00] mb-2 block">
            Roadmap to Launch
          </span>
          <h2 className="text-[34px] sm:text-[46px] font-extrabold text-[#0A0A0A] tracking-tight mb-4">
            Asset Tokenization Process
          </h2>
          <p className="text-[17px] text-neutral-600">
            A battle-tested 5-step pathway guiding asset owners from initial structuring to global trading.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {processSteps.map((st, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-neutral-200/80 hover:border-[#FF6B00] transition-all flex flex-col justify-between relative group"
            >
              <div>
                <span className="text-[38px] font-black text-[#FF6B00] block mb-2 font-mono">
                  {st.step}
                </span>
                <h3 className="text-[17px] font-bold text-[#0A0A0A] mb-3 leading-snug">
                  {st.title}
                </h3>
                <p className="text-[13px] text-neutral-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center text-[11px] font-bold uppercase text-neutral-400 group-hover:text-[#FF6B00] transition-colors">
                <span>Phase {st.step}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-[15px] font-semibold text-white bg-[#0A0A0A] hover:bg-[#FF6B00] transition-all shadow-md hover:shadow-lg"
          >
            <span>Get In Touch</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 11. CO-BRANDED PLATFORM SIMULATION */}
      <section className="py-20 px-6 sm:px-12 max-w-[1240px] mx-auto">
        <div className="glass-panel rounded-3xl p-8 sm:p-14 border border-neutral-200/90 shadow-xl bg-gradient-to-br from-white to-neutral-50/80">
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-[#FF6B00] mb-2 block">
              White-Label &amp; Co-Branded Platform
            </span>
            <h2 className="text-[32px] sm:text-[44px] font-extrabold text-[#0A0A0A] tracking-tight mb-4">
              Your Brand. Our Regulated Infrastructure.
            </h2>
            <p className="text-[17px] text-neutral-600">
              Launch a dedicated portal on your custom domain, featuring your brand identity, while leveraging InvestaX&apos;s MAS licenses, KYC verification engine, and qualified custodian integrations.
            </p>
          </div>

          {/* Interactive Mockup */}
          <div className="bg-white rounded-2xl border border-neutral-300/80 p-6 sm:p-8 shadow-sm max-w-[900px] mx-auto">
            <div className="flex items-center justify-between pb-5 border-b border-neutral-200 mb-6">
              <div className="flex items-center gap-3">
                <Laptop size={20} className="text-[#FF6B00]" />
                <span className="text-[14px] font-bold text-[#0A0A0A]">
                  Client Space Customization
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[12px] text-neutral-500">Theme Accent:</span>
                <div className="flex items-center gap-1.5">
                  {['#FF6B00', '#0A0A0A', '#2563EB', '#059669', '#9333EA'].map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      style={{ backgroundColor: color }}
                      className={`w-5 h-5 rounded-full transition-transform ${
                        selectedColor === color ? 'scale-125 ring-2 ring-neutral-400' : ''
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              <div>
                <label className="text-[12px] font-bold uppercase tracking-wider text-neutral-500 block mb-1">
                  Company Domain
                </label>
                <div className="px-4 py-2.5 rounded-lg bg-neutral-50 border border-neutral-200 text-[14px] font-mono text-neutral-800">
                  invest.yourbrand.com
                </div>
              </div>
              <div>
                <label className="text-[12px] font-bold uppercase tracking-wider text-neutral-500 block mb-1">
                  Branded Status
                </label>
                <div className="px-4 py-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-[14px] font-semibold text-emerald-700 flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  <span>Licensed Ecosystem Connected</span>
                </div>
              </div>
            </div>

            {/* Drag and Drop Logo Simulation */}
            <div className="border-2 border-dashed border-neutral-300 rounded-xl p-8 text-center bg-neutral-50/50 mb-6 hover:border-[#FF6B00] transition-colors cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center mx-auto mb-2 text-[#FF6B00]">
                <Palette size={22} />
              </div>
              <span className="text-[14px] font-bold text-[#0A0A0A] block">
                Custom Brand Logo &amp; Color Scheme
              </span>
              <span className="text-[12px] text-neutral-400">
                Custom domain, custom logo, full license and tech integration
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 12. IN PARTNERSHIP WITH IX SWAP */}
      <section className="py-16 px-6 sm:px-12 max-w-[1080px] mx-auto">
        <div className="rounded-3xl p-8 sm:p-12 bg-[#0A0A0A] text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-[620px]">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#FF6B00] text-white mb-4">
              IN PARTNERSHIP WITH IX SWAP
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-tight mb-3">
              Licensed DeFi Trading for RWAs
            </h2>
            <p className="text-[16px] text-neutral-300 leading-relaxed font-normal">
              IX Swap is a Licensed DeFi platform for primary and secondary trading of real-world and private assets. Get Exclusive Early Access - Secure Your Presale Spot by Registering Today!
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="https://ixswap.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[14px] font-bold uppercase tracking-wider text-[#0A0A0A] bg-white hover:bg-[#FF6B00] hover:text-white transition-all shadow-lg"
            >
              <span>REGISTER TODAY</span>
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 13. DEMO VIDEO TRIGGER */}
      <section className="py-20 px-6 sm:px-12 max-w-[1240px] mx-auto text-center">
        <span className="text-[13px] font-bold uppercase tracking-[2px] text-[#FF6B00] mb-2 block">
          TOKENIZE ASSETS WITH EASE
        </span>
        <h2 className="text-[34px] sm:text-[46px] font-extrabold text-[#0A0A0A] tracking-tight mb-4">
          Watch our tokenization platform demo
        </h2>
        <p className="text-[17px] text-neutral-600 max-w-[600px] mx-auto mb-8">
          Experience how issuers configure offerings, review smart contracts, and invite accredited investors in a 2-minute walkthrough.
        </p>

        <div className="inline-flex items-center gap-3">
          <button
            onClick={() => setDemoModalOpen(true)}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-[15px] font-bold text-white bg-[#FF6B00] hover:bg-[#E85D00] transition-all shadow-lg hover:shadow-xl"
          >
            <Play size={18} />
            <span>WATCH FULL DEMO (02:06)</span>
          </button>
        </div>
      </section>

      {/* 14. STAY UPDATED NEWSLETTER */}
      <section className="py-16 px-6 sm:px-12 max-w-[900px] mx-auto">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-neutral-200/90 shadow-md text-center">
          <h3 className="text-[28px] font-extrabold text-[#0A0A0A] mb-2">Stay Updated</h3>
          <p className="text-[16px] text-neutral-600 mb-8 max-w-[550px] mx-auto">
            For all the latest digital asset industry news, updates, products and opportunities.
          </p>

          {emailSubmitted ? (
            <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 font-semibold text-[15px] border border-emerald-200">
              Thank you! Your submission has been received!
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[500px] mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your business email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-5 py-3.5 rounded-full bg-white border border-neutral-300 text-[15px] text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#FF6B00]"
              />
              <button
                type="submit"
                className="px-8 py-3.5 rounded-full text-[14px] font-bold text-white bg-[#0A0A0A] hover:bg-[#FF6B00] transition-colors"
              >
                NEXT
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 15. EDUCATIONAL CALLOUT */}
      <section className="py-12 px-6 sm:px-12 max-w-[1080px] mx-auto">
        <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-600 text-[14px] sm:text-[15px] leading-relaxed">
          <strong className="text-[#0A0A0A]">What are Real-World Asset (RWA) Tokens? </strong>
          Real-world asset (RWA) tokens are digital representations of real-world assets like equity or debt in real estate and private equity. Utilizing blockchain and smart contracts, they revolutionize investments by enhancing transparency, security, and efficiency. This innovation simplifies financial transactions and expands the range of financial instruments and structures.
        </div>
      </section>

      {/* 16. COMPREHENSIVE LEGAL & REGULATORY FOOTER */}
      <footer className="pt-16 pb-12 border-t border-neutral-200/80 bg-neutral-50/70 text-neutral-600 text-[14px]">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-12">
          {/* Security Communication Notice */}
          <div className="p-5 rounded-2xl bg-white border border-amber-200 text-amber-900 text-[12px] sm:text-[13px] leading-relaxed mb-12 shadow-sm">
            <strong className="text-amber-950 font-bold block mb-1">Official Security Notice:</strong>
            InvestaX communicates only through its official website (www.investax.io), official email addresses (@investax.io), and verified social media accounts listed on our official website. Any individual, chat group, social media advertisement, website, mobile application, or account claiming to represent InvestaX that is not listed on our official website should be treated as suspicious and is not affiliated with InvestaX. Before making any investment decision, always verify that you are interacting with an official InvestaX channel. Report suspicious communications to support@investax.io.
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-14">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded bg-[#0A0A0A] text-white flex items-center justify-center font-bold text-[12px]">
                  I
                </div>
                <span className="font-extrabold text-[16px] text-[#0A0A0A]">InvestaX</span>
              </div>
              <p className="text-[13px] text-neutral-500 leading-relaxed">
                Licensed Tokenization Platform for Real-World Assets.
              </p>
            </div>

            <div>
              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A0A0A] mb-3">
                Explore
              </h4>
              <ul className="space-y-2 text-[13px]">
                <li><Link href="/investment" className="hover:text-[#FF6B00] transition-colors">Deals</Link></li>
                <li><Link href="/rwa-vaults" className="hover:text-[#FF6B00] transition-colors">RWA Vaults</Link></li>
                <li><Link href="/tokenization-platform" className="text-[#FF6B00] font-semibold">Tokenization</Link></li>
                <li><Link href="/about" className="hover:text-[#FF6B00] transition-colors">e-VCC</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A0A0A] mb-3">
                Legal
              </h4>
              <ul className="space-y-2 text-[13px]">
                <li><Link href="/privacy-policy" className="hover:text-[#FF6B00] transition-colors">Disclosures</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-[#FF6B00] transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-[#FF6B00] transition-colors">Terms of Use</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A0A0A] mb-3">
                General
              </h4>
              <ul className="space-y-2 text-[13px]">
                <li><Link href="/about" className="hover:text-[#FF6B00] transition-colors">About Us</Link></li>
                <li><Link href="/about" className="hover:text-[#FF6B00] transition-colors">Careers</Link></li>
                <li><Link href="/partners" className="hover:text-[#FF6B00] transition-colors">Partnerships</Link></li>
                <li><Link href="/about" className="hover:text-[#FF6B00] transition-colors">Brand Kit</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A0A0A] mb-3">
                Support
              </h4>
              <ul className="space-y-2 text-[13px]">
                <li><Link href="/contact" className="hover:text-[#FF6B00] transition-colors">Contact Us</Link></li>
                <li><a href="mailto:support@investax.io" className="hover:text-[#FF6B00] transition-colors">support@investax.io</a></li>
              </ul>
            </div>
          </div>

          {/* Full Regulatory Disclosures */}
          <div className="pt-8 border-t border-neutral-200/80 space-y-4 text-[11px] text-neutral-500 leading-relaxed font-normal">
            <p>
              <strong>Important Notice:</strong> InvestaX.io is operated by IC SG Pte. Ltd., a Singapore private limited company (Company Registration No. 201300459N). IC SG holds a Capital Markets Services license No. CMS100635 to deal in securities by the Monetary Authority of Singapore (the “MAS”), which allows IC SG to facilitate the primary offer and issuance of securities and act as an intermediary between issuers and investors. In addition, IC SG is licensed by the Authority as a recognised market operator to operate an organised market in respect of securities and units in collective investment schemes, the property of which consists only of capital markets products. The Organized Market allows investors to purchase securities from, and sell securities to other investors.
            </p>
            <p>
              The InvestaX platform is a licensed and globally accessible digital asset investment platform leveraging distributed ledger technology and capital market innovations in the security or real-world asset (RWA) token sector, delivering smooth secondary market trading and added value for token holders.
            </p>
            <p>
              By accessing this website or any of its subdomains, you agree to the InvestaX Platform&apos;s Terms of Use and Privacy Policy. The InvestaX Platform is designed for accredited, institutional and expert investors who are aware of and accept the risks involved with private investments. Please note that investments offered on the InvestaX Platform are not bank deposits and carry no guarantees. All products and services provided by the InvestaX Platform are offered on an &ldquo;as-is&rdquo; basis without any warranties.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[12px] text-neutral-400 gap-2">
              <span>Copyright &copy; 2026 IC SG Pte. Ltd., All rights reserved.</span>
              <span>Clean White &bull; Rich Black &bull; Vibrant Orange</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 17. DEMO VIDEO MODAL */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-[800px] glass-panel bg-white/95 rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-200">
            <button
              onClick={() => setDemoModalOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-100 hover:bg-[#FF6B00] hover:text-white flex items-center justify-center text-neutral-600 transition-colors"
            >
              <X size={18} />
            </button>

            <div className="mb-4">
              <span className="text-[12px] font-bold text-[#FF6B00] uppercase tracking-wider">
                Platform Walkthrough
              </span>
              <h3 className="text-[22px] font-extrabold text-[#0A0A0A]">
                InvestaX RWA Tokenization Demo (02:06)
              </h3>
            </div>

            {/* Video Mockup Screen */}
            <div className="relative w-full aspect-video rounded-2xl bg-[#0A0A0A] overflow-hidden flex flex-col items-center justify-center text-white">
              <div className="w-16 h-16 rounded-full bg-[#FF6B00] text-white flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform cursor-pointer">
                <Play size={24} className="ml-1" />
              </div>
              <span className="mt-4 text-[14px] font-medium text-neutral-300">
                Click to stream demo session
              </span>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span>00:00 / 02:06</span>
                <span>HD 1080p &bull; Institutional Sandbox</span>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <p className="text-[13px] text-neutral-500">
                Want a personalized walkthrough with our technical and structuring team?
              </p>
              <Link
                href="/contact"
                className="px-5 py-2 rounded-full text-[13px] font-semibold text-white bg-[#0A0A0A] hover:bg-[#FF6B00] transition-colors"
              >
                Schedule Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
