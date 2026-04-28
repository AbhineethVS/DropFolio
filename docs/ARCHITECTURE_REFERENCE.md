# DropFolio Architecture Reference

Reference-only architecture notes before implementation.

## Core Flow
1. User authenticates via Clerk (Google).
2. User fills builder form data.
3. Backend calls Claude once to polish form JSON.
4. Store `rawData` and `aiPolishedData` in MongoDB.
5. Publish/share at `/p/[slug]`.
6. Track visits in Stats.
7. Generate resume PDF from portfolio data.

## Data Entities

### Portfolio
- `userId`
- `name`
- `email`
- `slug`
- `status`
- `rawData`
- `aiPolishedData`
- `photoUrl`
- timestamps

### Stats
- `portfolioId`
- `slug`
- `visitorIp`
- `userAgent`
- `visitedAt`

## Route Contracts (Planned)
- `api/portfolio/create`
- `api/portfolio/update`
- `api/portfolio/get`
- `api/ai/polish`
- `api/resume/generate`
- `api/upload`
- `api/stats/track`
