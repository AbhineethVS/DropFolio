# DropFolio Implementation Checklist

Tracking list derived from the masterplan build order.

- [x] Initialize Next.js 15 App Router project
- [x] Configure Tailwind CSS and shadcn/ui baseline
- [x] Integrate Clerk auth (Google login enabled)
- [x] Connect MongoDB Atlas and add models
- [x] Build landing page (`/`)
- [ ] Build portfolio builder flow (`/build`, 6 steps)
- [ ] Add Cloudinary photo upload flow
- [ ] Add AI polishing pipeline through `lib/claude.js`
- [ ] Persist raw + polished data to MongoDB
- [ ] Build public portfolio route (`/p/[slug]`) as server component
- [ ] Build dashboard with stats and resume actions
- [ ] Build preview page (`/preview`)
- [ ] Add resume PDF export via Puppeteer
- [ ] Add settings page (`/settings`)
- [ ] Final deploy to Vercel
