# DROPFOLIO Landing Page — Build Instructions

Read this entire file before writing any code.
Do not deviate from this spec.
Build one section at a time, in order.

---

## Project Setup

- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- shadcn/ui

---

## Brand

### Name

DROPFOLIO

### Tagline

"Your portfolio, built in minutes."

### Colors

- Background: #0a0a0a
- Surface/Cards: #111111
- Border: #222222
- Text Primary: #ffffff
- Text Muted: #a1a1a1
- Accent: #f5f5f5

### Fonts

- Heading: Geist (next/font)
- Body: Inter (next/font)
- Load both via next/font/google in layout.tsx

---

## Components to Build

### 1. Navbar

Use this exact component, place in /components/ui/mini-navbar.tsx:
You are given a task to integrate an existing React component in the codebase

The codebase should support:

- shadcn project structure
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles.
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:

```tsx
mini - navbar.tsx;
("use client");

import React, { useState, useEffect, useRef } from "react";

const AnimatedNavLink = ({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) => {
	const defaultTextColor = "text-gray-300";
	const hoverTextColor = "text-white";
	const textSizeClass = "text-sm";

	return (
		<a
			href={href}
			className={`group relative inline-block overflow-hidden h-5 flex items-center ${textSizeClass}`}
		>
			<div className="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2">
				<span className={defaultTextColor}>{children}</span>
				<span className={hoverTextColor}>{children}</span>
			</div>
		</a>
	);
};

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [headerShapeClass, setHeaderShapeClass] = useState("rounded-full");
	const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		if (shapeTimeoutRef.current) {
			clearTimeout(shapeTimeoutRef.current);
		}

		if (isOpen) {
			setHeaderShapeClass("rounded-xl");
		} else {
			shapeTimeoutRef.current = setTimeout(() => {
				setHeaderShapeClass("rounded-full");
			}, 300);
		}

		return () => {
			if (shapeTimeoutRef.current) {
				clearTimeout(shapeTimeoutRef.current);
			}
		};
	}, [isOpen]);

	const logoElement = (
		<div className="relative w-5 h-5 flex items-center justify-center">
			<span className="absolute w-1.5 h-1.5 rounded-full bg-gray-200 top-0 left-1/2 transform -translate-x-1/2 opacity-80"></span>
			<span className="absolute w-1.5 h-1.5 rounded-full bg-gray-200 left-0 top-1/2 transform -translate-y-1/2 opacity-80"></span>
			<span className="absolute w-1.5 h-1.5 rounded-full bg-gray-200 right-0 top-1/2 transform -translate-y-1/2 opacity-80"></span>
			<span className="absolute w-1.5 h-1.5 rounded-full bg-gray-200 bottom-0 left-1/2 transform -translate-x-1/2 opacity-80"></span>
		</div>
	);

	const navLinksData = [
		{ label: "Manifesto", href: "#1" },
		{ label: "Careers", href: "#2" },
		{ label: "Discover", href: "#3" },
	];

	const loginButtonElement = (
		<button className="px-4 py-2 sm:px-3 text-xs sm:text-sm border border-[#333] bg-[rgba(31,31,31,0.62)] text-gray-300 rounded-full hover:border-white/50 hover:text-white transition-colors duration-200 w-full sm:w-auto">
			LogIn
		</button>
	);

	const signupButtonElement = (
		<div className="relative group w-full sm:w-auto">
			<div
				className="absolute inset-0 -m-2 rounded-full
                     hidden sm:block
                     bg-gray-100
                     opacity-40 filter blur-lg pointer-events-none
                     transition-all duration-300 ease-out
                     group-hover:opacity-60 group-hover:blur-xl group-hover:-m-3"
			></div>
			<button className="relative z-10 px-4 py-2 sm:px-3 text-xs sm:text-sm font-semibold text-black bg-gradient-to-br from-gray-100 to-gray-300 rounded-full hover:from-gray-200 hover:to-gray-400 transition-all duration-200 w-full sm:w-auto">
				Signup
			</button>
		</div>
	);

	return (
		<header
			className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-20
                       flex flex-col items-center
                       pl-6 pr-6 py-3 backdrop-blur-sm
                       ${headerShapeClass}
                       border border-[#333] bg-[#1f1f1f57]
                       w-[calc(100%-2rem)] sm:w-auto
                       transition-[border-radius] duration-0 ease-in-out`}
		>
			<div className="flex items-center justify-between w-full gap-x-6 sm:gap-x-8">
				<div className="flex items-center">{logoElement}</div>

				<nav className="hidden sm:flex items-center space-x-4 sm:space-x-6 text-sm">
					{navLinksData.map((link) => (
						<AnimatedNavLink key={link.href} href={link.href}>
							{link.label}
						</AnimatedNavLink>
					))}
				</nav>

				<div className="hidden sm:flex items-center gap-2 sm:gap-3">
					{loginButtonElement}
					{signupButtonElement}
				</div>

				<button
					className="sm:hidden flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none"
					onClick={toggleMenu}
					aria-label={isOpen ? "Close Menu" : "Open Menu"}
				>
					{isOpen ? (
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							></path>
						</svg>
					) : (
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							></path>
						</svg>
					)}
				</button>
			</div>

			<div
				className={`sm:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
                       ${isOpen ? "max-h-[1000px] opacity-100 pt-4" : "max-h-0 opacity-0 pt-0 pointer-events-none"}`}
			>
				<nav className="flex flex-col items-center space-y-4 text-base w-full">
					{navLinksData.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-gray-300 hover:text-white transition-colors w-full text-center"
						>
							{link.label}
						</a>
					))}
				</nav>
				<div className="flex flex-col items-center space-y-4 mt-4 w-full">
					{loginButtonElement}
					{signupButtonElement}
				</div>
			</div>
		</header>
	);
}

demo.tsx;

import { Navbar } from "@/components/ui/mini-navbar";

const DemoOne = () => {
	return (
		<div className="relative min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden">
			<div className="absolute inset-0">
				<img
					className="w-full h-full object-cover grayscale"
					src={
						"https://cdn.pixabay.com/photo/2016/06/05/07/59/stars-1436950_1280.jpg"
					}
					alt="Background Stars"
				></img>
			</div>

			<Navbar />

			<main className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4 pt-24">
				<h1 className="text-8xl md:text-9xl font-bold text-white mb-4 tracking-tight drop-shadow-xl">
					MINI NAVBAR
				</h1>
				<div className="flex flex-col sm:flex-row items-center text-xl text-gray-300 mb-8 space-y-2 sm:space-y-0 sm:space-x-2">
					<span>Please support by saving this component</span>
					<button
						className="px-4 py-1 border border-[#333] bg-[rgba(31,31,31,0.62)] rounded-full text-white transition-colors duration-200 cursor-pointer text-base
                       inline-flex items-center justify-center"
					>
						<span>Thank You</span>
					</button>
				</div>
			</main>
		</div>
	);
};

export default { DemoOne };
```

Implementation Guidelines

1.  Analyze the component structure and identify all required dependencies
2.  Review the component's argumens and state
3.  Identify any required context providers or hooks and install them
4.  Questions to Ask

- What data/props will be passed to this component?
- Are there any specific state management requirements?
- Are there any required assets (images, icons, etc.)?
- What is the expected responsive behavior?
- What is the best place to use this component in the app?

Steps to integrate 0. Copy paste all the code above in the correct directories

1.  Install external dependencies
2.  Fill image assets with Unsplash stock images you know exist
3.  Use lucide-react icons for svgs or logos if component requires them

Update nav links to:

- Features → #features
- Examples → #examples
- Pricing → #pricing

---

### 2. Hero Section

Use this exact component, place in /components/ui/hero-section.tsx:
You are given a task to integrate an existing React component in the codebase

The codebase should support:

- shadcn project structure
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles.
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:

```tsx
hero - dithering - card.tsx;
// hero-section.tsx
("use client");

import { ArrowRight } from "lucide-react";

export function HeroSection() {
	return (
		<section className="py-12 w-full flex justify-center items-center px-4 md:px-6">
			<div className="w-full max-w-7xl relative">
				<div
					className="relative overflow-hidden rounded-[48px] border border-white/10 bg-[#111111] shadow-sm min-h-[600px] flex flex-col items-center justify-center"
					style={{
						backgroundImage: `radial-gradient(ellipse at 60% 40%, #1a1a1a 0%, #0a0a0a 70%)`,
					}}
				>
					{/* Static grain texture overlay */}
					<div
						className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
						style={{
							backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
							backgroundRepeat: "repeat",
							backgroundSize: "128px 128px",
						}}
					/>

					<div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
						{/* Badge */}
						<div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/70 backdrop-blur-sm">
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
								<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
							</span>
							Now in Public Beta
						</div>

						{/* Headline */}
						<h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 leading-[1.05]">
							Your portfolio, <br />
							<span className="text-white/60">
								built in minutes.
							</span>
						</h2>

						{/* Description */}
						<p className="text-white/50 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
							DROPFOLIO lets you create stunning portfolios and
							resumes that stand out — no design skills needed.
							Just drop in your work and go live.
						</p>

						{/* Buttons */}
						<div className="flex flex-col sm:flex-row items-center gap-4">
							<button className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-12 text-base font-medium text-black transition-all duration-300 hover:bg-white/90 hover:scale-105 active:scale-95">
								<span>Get Started Free</span>
								<ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
							</button>
							<button className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-12 text-base font-medium text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white">
								View Examples
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
// demo.tsx
import { HeroSection } from "@/components/ui/hero-section";

export default function DemoOne() {
	return (
		<div className="min-h-screen bg-[#0a0a0a]">
			<HeroSection />
		</div>
	);
}
```

Install NPM dependencies:

```bash
lucide-react
```

Implementation Guidelines

1.  Analyze the component structure and identify all required dependencies
2.  Review the component's argumens and state
3.  Identify any required context providers or hooks and install them
4.  Questions to Ask

- What data/props will be passed to this component?
- Are there any specific state management requirements?
- Are there any required assets (images, icons, etc.)?
- What is the expected responsive behavior?
- What is the best place to use this component in the app?

Steps to integrate 0. Copy paste all the code above in the correct directories

1.  Install external dependencies
2.  Fill image assets with Unsplash stock images you know exist
3.  Use lucide-react icons for svgs or logos if component requires them

---

### 3. Features Section

- Section id: "features"
- Headline: "Everything you need to stand out"
- Show 3 feature cards in a grid:
    1. Icon: Zap — "Launch in minutes" — "Pick a template, add your work, go live. No code required."
    2. Icon: Palette — "Fully customizable" — "Fonts, colors, layouts — make it yours from top to bottom."
    3. Icon: Share2 — "One link, anywhere" — "Share your portfolio with a single clean link. Works everywhere."
- Card style: bg-[#111111], border border-[#222222], rounded-2xl, p-6
- Use lucide-react for icons

---

### 4. Examples Section

- Section id: "examples"
- Headline: "See what's possible"
- Subheadline: "Portfolios built by real creators on DROPFOLIO"
- Show 3 placeholder portfolio cards in a responsive grid
- Each card:
    - Gradient thumbnail (use different dark gradients per card)
    - Fake creator name (e.g. Alex Morgan, Priya Nair, James Liu)
    - Fake role (e.g. Product Designer, Full Stack Dev, Brand Strategist)
    - A small "View Portfolio →" link in white/50
- Add a TODO comment: replace with real portfolios after launch
- Card style: bg-[#111111], border border-[#222222], rounded-2xl, overflow-hidden

---

### 6. Footer

- bg-[#0a0a0a], border-t border-[#222222]
- Left: DROPFOLIO wordmark + tagline in muted text
- Right: Links — Features, Examples, Pricing, Twitter, GitHub
- Bottom: "© 2026 DROPFOLIO. All rights reserved."

---

## General Rules

- All sections full width, max-w-7xl centered
- Consistent vertical padding: py-24 per section
- Mobile responsive — stack grids on small screens
- No external animation libraries
- Use lucide-react for all icons
- Dark theme throughout, no light mode
