# 🎮 Fast Gaming BD — Web Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.2.7-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

An eSports tournament & online gaming showcase web application for **Fast Gaming Bangladesh** (ফাস্ট গেমিং বাংলাদেশ). Designed with a **Wise-inspired Scandinavian design system** featuring vivid Wise Green (`#9fe870`) accents, sage canvas surfaces (`#e8ebe6`), ink display typography (`#0e0f0c`), and 3D orbiting status badges.

---

## ✨ Features

- 🏆 **eSports Tournament Showcase**: Live match listings and entry guides for Free Fire, PUBG Mobile, and Ludo Cash Game.
- ⚡ **Instant Payout Callouts**: Highlighting automated payouts via **bKash (বিকাশ)**, **Nagad (নগদ)**, and **Rocket (রকেট)**.
- 🌐 **Bilingual Support (EN / BN)**: Instant real-time language toggling between English and Bengali (**বাংলা**).
- 🪐 **3D Ring Orbit Badges**: 60fps pure-math 3D revolving badges traveling along the outer border of the hero logo card without external WebGL canvas dependencies.
- 📱 **Interactive Step Carousel**: Step-by-step visual installation guide for the official Android APK (`gamezonebd.apk`).
- 🗂️ **Wise Design System Bento Grid**: Feature cards categorized into `card-sage`, `card-white`, `card-green`, and `card-dark` variants with high-contrast accessibility.
- 🚀 **Hydration & LCP Optimized**: 100% deterministic SSR/Client math rendering with zero React hydration warnings and eager LCP preloading.

---

## 🎨 Design System Specifications

The project enforces the **Wise-inspired Design Language** detailed in [`DESIGN.md`](file:///Users/jibonhossen/Desktop/Game/web-fast-gaming/DESIGN.md):

| Design Token | Color Code | Purpose |
|---|---|---|
| `--primary` | `#9fe870` | Universal primary CTA pill background (Wise Green) |
| `--on-primary` | `#0e0f0c` | Text color on primary CTA buttons |
| `--primary-pale` | `#e2f6d5` | Soft green background fill for badges & callouts |
| `--positive-deep` | `#054d28` | High-contrast dark green text for badges |
| `--canvas` | `#ffffff` | Pure white surface for cards |
| `--canvas-soft` | `#e8ebe6` | Sage-tinted background canvas |
| `--ink` | `#0e0f0c` | Near-black display typography & section bands |

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.2](https://nextjs.org/) (App Router, Turbopack)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS variables
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Managers**: `pnpm` / `bun` / `npm`

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.x` or higher
- **Package Manager**: `pnpm` or `bun` (recommended)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/jibonhossen/game-zone-web.git
   cd game-zone-web/web-fast-gaming
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
|---|---|
| `pnpm dev` | Starts the Next.js development server with Turbopack |
| `pnpm build` | Compiles the production build & runs TypeScript checks |
| `pnpm start` | Starts the production server |
| `pnpm lint` | Runs ESLint syntax and code quality verification |
| `pnpm run deploy:vercel` | Deploys the production bundle directly to Vercel |
| `pnpm run deploy:cloudflare` | Deploys static output to Cloudflare Pages |

---

## 📂 Project Directory Structure

```text
web-fast-gaming/
├── src/
│   ├── app/
│   │   ├── download/       # Android APK installation guide page
│   │   ├── globals.css     # Design system tokens, keyframe animations, & Tailwind CSS v4
│   │   ├── layout.tsx      # Root metadata, fonts (Hind Siliguri & Inter), & HTML shell
│   │   ├── page.tsx        # Main homepage (Hero, Carousel, Games, Bento Features, CTA)
│   │   ├── robots.ts       # SEO robots configuration
│   │   └── sitemap.ts      # Automated sitemap generator
│   ├── components/
│   │   ├── hero.tsx        # Hero Navbar & language switcher
│   │   ├── hooks/          # Responsive window & debounced dimension hooks
│   │   └── ui/
│   │       ├── AnimatedHero.tsx            # Hero section with animated rotating text
│   │       ├── animated-gradient-with-svg.tsx # Deterministic SVG gradient background mesh
│   │       ├── bento-features.tsx          # Wise card variant bento grid
│   │       ├── floating-badges.tsx         # 3D Ring Orbit badge engine
│   │       ├── how-to-start-carousel.tsx   # Interactive APK step carousel
│   │       └── ThreeGameCard.tsx           # 3D tilt game tournament cards
│   └── lib/
│       ├── translations.ts # Bilingual dictionary (English & Bengali)
│       └── utils.ts        # Tailwind class merge utility (`cn`)
├── public/                 # Game assets, splash logos, and screenshots
├── DESIGN.md               # Wise-inspired design system documentation
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and deployment scripts
└── tsconfig.json           # TypeScript configuration
```

---

## 🌐 Deployment

### ⚡ Cloudflare Pages (Primary Deployment Target)

This project is optimized for deployment on **Cloudflare Pages** for global edge performance and low latency in Bangladesh.

#### Option 1: Deploy via Wrangler CLI

Build the project and deploy static output directly to Cloudflare Pages:

```bash
# 1. Build the production output
pnpm run build

# 2. Deploy to Cloudflare Pages
pnpm run deploy:cloudflare
# or
npx wrangler pages deploy out --project-name=fast-gaming-bd
```

#### Option 2: Cloudflare Pages Git Integration

1. Connect your repository to **Cloudflare Pages** dashboard.
2. Set build settings:
   - **Framework Preset**: `Next.js (Static Export)`
   - **Build Command**: `pnpm run build`
   - **Build Output Directory**: `out`
3. Environment Variables: Add `NODE_VERSION: 20`

---

### 🚀 Vercel Deployment (Secondary Target)

Deploy directly using Vercel CLI:
```bash
pnpm run deploy:vercel
```

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

&copy; 2026 **Fast Gaming BD**. All rights reserved.
