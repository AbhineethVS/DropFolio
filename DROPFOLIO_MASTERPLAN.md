# DropFolio — Project Masterplan

## What is DropFolio
DropFolio is a portfolio generator for CS/IT college students. A student fills a structured multi-step form with their raw details. Claude AI then polishes that raw content into professional copy. The result is a clean, shareable public portfolio instantly available at dropfolio.com/p/username. No coding required from the user.

---

## Core User Flow
1. User signs up with Google via Clerk
2. User fills a 6-step form with their details
3. On submit, Claude API rewrites the content to sound professional
4. Both raw and polished data are saved to MongoDB
5. Portfolio is published at /p/their-slug
6. User can come back anytime to edit — changes reflect instantly on their public link
7. User can export a PDF resume from their portfolio data

---

## Tech Stack
- Framework: Next.js 15 with App Router
- Styling: Tailwind CSS
- UI Components: shadcn/ui
- Auth: Clerk with Google login
- Database: MongoDB Atlas with Mongoose
- AI: Claude API (claude-sonnet-4-20250514)
- File Storage: Cloudinary (profile photos)
- PDF Generation: Puppeteer
- Hosting: Vercel

---

## Folder Structure

```
app/
  (auth)/
    sign-in/[[...sign-in]]/page.jsx
    sign-up/[[...sign-up]]/page.jsx
  (dashboard)/
    dashboard/page.jsx
    build/page.jsx
    preview/page.jsx
    settings/page.jsx
  p/
    [slug]/page.jsx
  api/
    portfolio/
      create/route.js
      update/route.js
      get/route.js
    ai/
      polish/route.js
    resume/
      generate/route.js
    upload/
      route.js
    stats/
      track/route.js
  layout.jsx
  page.jsx

components/
  ui/
  landing/
    Hero.jsx
    HowItWorks.jsx
    Examples.jsx
    Pricing.jsx
  dashboard/
    PortfolioCard.jsx
    StatsGrid.jsx
    ResumeCard.jsx
  builder/
    BuilderShell.jsx
    StepIndicator.jsx
    steps/
      PersonalInfo.jsx
      Education.jsx
      Skills.jsx
      Projects.jsx
      Honors.jsx
      SocialLinks.jsx
      Review.jsx
  portfolio/
    PortfolioTemplate.jsx
    Watermark.jsx
    sections/
      Hero.jsx
      About.jsx
      Education.jsx
      Stack.jsx
      Projects.jsx
      Honors.jsx
      Contact.jsx

lib/
  mongodb.js
  claude.js
  cloudinary.js
  puppeteer.js

models/
  Portfolio.js
  Stats.js

middleware.js
```

---

## Database Models

### Portfolio
```
userId          - from Clerk
name            - user's full name
email           - user's email
slug            - unique URL identifier (e.g. abhineeeth)
status          - draft or published
rawData         - exactly what user typed in the form
aiPolishedData  - Claude's rewritten version of rawData
photoUrl        - Cloudinary URL of profile photo
createdAt
updatedAt
```

### Stats
```
portfolioId     - reference to Portfolio
slug            - for quick lookup
visitorIp
userAgent
visitedAt
```

---

## Portfolio Builder — 6 Steps

**Step 1 — Personal Info**
Name, professional title, raw bio dump, profile photo upload

**Step 2 — Education**
College name, branch, year of study, CGPA (optional)

**Step 3 — Skills**
Tag-style input, user types skills one by one. AI will auto-categorize them into groups like Languages, Frameworks, Tools.

**Step 4 — Projects**
Multiple projects. Each has: name, raw description, tech stack used, GitHub link, live link, optional image.

**Step 5 — Honors and Awards**
Title, issuing organization, year

**Step 6 — Social Links**
GitHub, LinkedIn, Email, Instagram, Twitter, any other links

---

## AI Polishing — How It Works

Single Claude API call happens after the form is submitted.

Input: the entire raw form JSON
Output: polished JSON with identical structure

What Claude rewrites:
- Bio — turns a raw dump into a crisp 3-line professional bio
- Project descriptions — makes them sound impressive and technical
- Skills — organizes into categories
- Tagline — generates a short professional title

Both rawData and aiPolishedData are saved to MongoDB. The portfolio renders from aiPolishedData.

All Claude API logic lives in lib/claude.js only. No direct API calls from anywhere else.

---

## Pages Overview

### Landing Page ( / )
Public page. Explains what DropFolio does. Shows example portfolios. Has a clear CTA to sign up.

### Sign In / Sign Up ( /sign-in, /sign-up )
Clerk prebuilt components. Google login enabled.

### Dashboard ( /dashboard )
Private. Shows the user's portfolio status, live link, edit button, view count stats, resume export button.

### Portfolio Builder ( /build )
Private. Multi-step form with progress indicator. 6 steps as listed above. On final submit triggers AI polish and saves to MongoDB, then redirects to /preview.

### Preview ( /preview )
Private. Shows the generated portfolio before sharing. Two buttons: View live link and Edit.

### Public Portfolio ( /p/slug )
Fully public. No auth needed. Server side rendered for SEO. Logs every visit to Stats. Renders the polished portfolio data through the template. Has dark and light mode toggle.

### Settings ( /settings )
Private. Change slug, update details, delete portfolio.

---

## Public Portfolio Sections
The /p/slug page renders these sections in order:
1. Hero — photo, name, title, social links
2. About — polished bio
3. Education — college, branch, year, CGPA
4. Stack — skills as pill tags grouped by category
5. Projects — cards with description, tech tags, links
6. Honors and Awards — list
7. Contact — email and social links

---

## Resume Export
Available to all users from the dashboard. Uses Puppeteer to convert an HTML resume template into a clean single-page A4 PDF. The resume template is separate from the portfolio template and optimized for printing and ATS systems.

---

## Stats Tracking
Every visit to /p/slug logs an entry to the Stats collection. Dashboard shows total view count and per-day breakdown.

---

## Critical Rules for Cursor

1. Always read this file before starting any feature
2. Never touch middleware.js auth logic unless explicitly asked
3. Never modify MongoDB models without confirming first
4. /p/[slug] must always stay as a server component — never convert to client component
5. All Claude API calls go through lib/claude.js only
6. Every page must be mobile responsive
7. Commit to git after every working feature
8. One feature at a time — never build two things in one prompt

---

## Environment Variables

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/build
MONGODB_URI=
ANTHROPIC_API_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

---

## Build Order

- [ ] Project initialized with Next.js 15
- [ ] Clerk auth setup with Google login
- [ ] MongoDB connected with models created
- [ ] Landing page
- [ ] Portfolio builder form (all 6 steps)
- [ ] Cloudinary photo upload
- [ ] AI polishing pipeline
- [ ] Portfolio saved to MongoDB
- [ ] Public portfolio page /p/slug
- [ ] Dashboard with stats
- [ ] Preview page
- [ ] Resume PDF export
- [ ] Settings page
- [ ] Deploy on Vercel

---

## MVP Scope
This is v1. No payments, no Pro plan, no watermark. Everything is free for all users. The goal is to get real users, gather feedback, and validate the product before adding monetization in v2.
