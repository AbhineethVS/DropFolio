# Planned File Scaffold (No Implementation Yet)

This is the reference layout to create while building features.

## App Router
- `app/(auth)/sign-in/[[...sign-in]]/page.jsx`
- `app/(auth)/sign-up/[[...sign-up]]/page.jsx`
- `app/(dashboard)/dashboard/page.jsx`
- `app/(dashboard)/build/page.jsx`
- `app/(dashboard)/preview/page.jsx`
- `app/(dashboard)/settings/page.jsx`
- `app/p/[slug]/page.jsx`
- `app/api/portfolio/create/route.js`
- `app/api/portfolio/update/route.js`
- `app/api/portfolio/get/route.js`
- `app/api/ai/polish/route.js`
- `app/api/resume/generate/route.js`
- `app/api/upload/route.js`
- `app/api/stats/track/route.js`
- `app/layout.jsx`
- `app/page.jsx`

## Components
- `components/ui/*`
- `components/landing/*`
- `components/dashboard/*`
- `components/builder/*`
- `components/portfolio/*`

## Libraries and Models
- `lib/mongodb.js`
- `lib/claude.js`
- `lib/cloudinary.js`
- `lib/puppeteer.js`
- `models/Portfolio.js`
- `models/Stats.js`

## Cross-cutting
- `middleware.js`
