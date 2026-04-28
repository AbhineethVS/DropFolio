# DropFolio Prerequisites

This file defines what must exist before feature coding starts.

## Source of Truth
- `DROPFOLIO_MASTERPLAN.md`

## Cursor Guidance
- `.cursorrules`
- `.cursor/rules/dropfolio-core-guardrails.mdc`
- `.cursor/rules/dropfolio-stack-conventions.mdc`
- `.cursor/rules/dropfolio-file-scopes.mdc`

## Secrets and Runtime Configuration
- Copy `.env.example` to `.env.local`
- Fill all values before testing auth, DB, AI, uploads, or PDF features

## Planned Runtime Areas (No feature code yet)
- `app/` for routes and pages
- `components/` for UI and section components
- `lib/` for service clients and integration wrappers
- `models/` for database schemas

## Build Sequence
Follow `docs/IMPLEMENTATION_CHECKLIST.md` in order. Do not skip ahead.
