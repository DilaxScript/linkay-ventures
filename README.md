# Linkay Ventures Clone (Next.js 15 App Router & Tailwind CSS)

An exact, high-performance clone of the live [Linkay Ventures website](https://linkayventures.com/) rebuilt with modern web standards using **Next.js (App Router)** and **Tailwind CSS**.

---

## 🚀 Key Features & Highlights

- **Exact Design & Styling Fidelity**: Precision replica of Linkay Ventures' layout, responsive breakpoints, padding, and Elementor design system.
- **Identical Typography System**:
  - `Kanit`: Hero titles and display statistics
  - `Poppins`: Badges, section headings, and buttons
  - `Raleway`: Navigation links, subtitles, and hero descriptions
  - `Red Hat Display`: Body content and descriptions
  - `Roboto`: Fine print and helper copy
- **Exact Color Palette**:
  - Primary Orange Accent: `#FF4400`
  - Hover Orange: `#ED4103`
  - Crimson Accent: `#D70342`
  - Dark Navy Heading: `#343F5A`
  - Deep Black: `#000000`
  - Footer Dark Background: `#0C0E14` (with 82% overlay)
  - Card Dark: `#212121`
  - Off-White Background: `#F9FBFD`
  - Body Text: `#777777`
  - Link Blue: `#4F80FF` / Link Purple: `#6564FF`
  - WhatsApp Green: `#25D366`
- **Hero Slider with Autoplay**:
  - 3 dynamic slides with exact background images, text, and CTAs
  - Crossfade transitions, pause-on-hover, arrow navigators, and active pagination indicator
- **Interactive Components**:
  - Full sticky navigation bar with active page indicator, hover effects, and nested dropdowns
  - Features showcase with high-res ideation asset
  - Venture HUB Login CTA
  - "What We Do" service cards (Bonds, M&A, Funds) with corner badges and hover lifts
  - Testimonial carousel with 5-star ratings, author avatars, and slider controls
  - Worldwide Experience section with world map background overlay and animated counter (0% to 100%)
  - Newsletter subscription with validation, loading animation, and success/error states
  - 4-column comprehensive footer with office coordinates, quick links, and work hours
  - Floating WhatsApp chat widget (`+16469457720`) fixed at bottom-right
  - Smooth "Back to Top" button with scroll threshold detection
- **Multi-Page Support**:
  - `/`: Complete Home page
  - `/about`: Company story, approach, and founder principles
  - `/services`: Investment solutions (equity, bonds, M&A, tailored funds)
  - `/programs`: Accelerator, corporate innovation, and adaptive growth
  - `/rwa-tokenization`: Multi-RWA tokenization and monetization platform
  - `/contact`: Office address in NYC, phone, email, and interactive contact form

---

## 📁 Project Structure

```
linkay-ventures-clone/
├── public/
│   └── images/
│       ├── logo.png                     # Linkay Ventures transparent logo
│       ├── favicon.png                  # Site favicon
│       ├── hero-slide-1.jpg             # Hero slide 1 background
│       ├── hero-slide-2.png             # Hero slide 2 background
│       ├── hero-slide-3.png             # Hero slide 3 background
│       ├── features-ideation.jpg        # Features section image
│       ├── testimonial-avatar.jpg       # Testimonials placeholder avatar
│       ├── map-bg.jpg                   # Worldwide experience map background
│       ├── newsletter-subscription.webp # Newsletter section graphic
│       └── footer-bg.jpg                # Footer background
├── src/
│   ├── app/
│   │   ├── layout.tsx                   # Root layout, Google fonts, shell
│   │   ├── globals.css                  # Tailwind styles and custom utilities
│   │   ├── page.tsx                     # Home page
│   │   ├── about/page.tsx               # About page
│   │   ├── services/page.tsx            # Services page
│   │   ├── programs/page.tsx            # Programs page
│   │   ├── rwa-tokenization/page.tsx    # RWA Tokenization page
│   │   └── contact/page.tsx             # Contact page
│   └── components/
│       ├── Navbar.tsx                   # Sticky responsive navigation
│       ├── HeroSlider.tsx               # 3-slide autoplay carousel
│       ├── FeaturesSection.tsx          # Finance with expert leaders in the US
│       ├── VentureHubSection.tsx        # Connect Venture HUB CTA
│       ├── WhatWeDoSection.tsx          # Funding solutions promo cards
│       ├── TestimonialsSection.tsx      # Client reviews carousel
│       ├── WorldwideSection.tsx         # Map overlay & animated counter
│       ├── NewsletterSection.tsx        # Stay up-to-date subscribe form
│       ├── Footer.tsx                   # 4-column footer
│       ├── WhatsAppWidget.tsx           # Floating WhatsApp chat
│       └── BackToTop.tsx                # Scroll-to-top button
├── tailwind.config.ts                   # Tailwind configuration & custom design tokens
├── postcss.config.mjs                   # PostCSS setup
├── tsconfig.json                        # TypeScript configuration
└── package.json
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build for Production
```bash
npm run build
npm run start
```
