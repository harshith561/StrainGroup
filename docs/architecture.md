# Strains Group Website Architecture

## 1. System Overview
The application is a faithful replica of the official Strains Group website (Strains Associates), designed with a high-fidelity creative frontend and a resilient Node.js Express backend.

```
strains-website/
├── frontend/                     # Next.js 14 App Router (Pure JavaScript)
│   ├── public/                   # Static assets, branding, 3D torus textures, video
│   ├── src/
│   │   ├── app/                  # App Router pages and routes
│   │   ├── components/           # Modular React components
│   │   ├── services/             # Axios API integration
│   │   └── styles/               # Tailwind CSS & modular SCSS animation sheets
├── backend/                      # Node.js + Express + PostgreSQL
│   ├── src/
│   │   ├── config/               # Environment & DB configurations
│   │   ├── controllers/          # Route controllers
│   │   ├── routes/               # API endpoint definitions
│   │   ├── services/             # Business logic & parameterized DB queries
│   │   ├── middleware/           # Validation, logging, error handling
│   │   ├── validators/           # Zod schema definitions
│   │   └── database/             # PostgreSQL pg.Pool & fallback stores
│   ├── migrations/               # PostgreSQL DDL migrations
│   ├── seeds/                    # Seed scripts
│   └── tests/                    # Integration tests
└── docs/                         # Documentation
```

## 2. Frontend Design System & Technology
- **Next.js App Router**: Client-side and server components in pure JavaScript (.js, .jsx).
- **Tailwind CSS**: Base utility classes and spacing grid.
- **SCSS Animation Modules**:
  - `hero-animations.scss`: Split-letter transitions, bouncing/stretching display typography, slide transitions.
  - `product-viewer.scss`: 3D Torus dual-ring positioning, 3D rotation, and dynamic gradient shifts.
  - `portfolio-effects.scss`: Card hover overlays, explore pill micro-interactions.
  - `typography-effects.scss`: Character-by-character reveal effects and font definitions.
  - `scroll-effects.scss`: Scroll-triggered reveal animations.
- **Design Tokens**:
  - Primary Background: `#0c0c0c`
  - Secondary Background: `#1a1a1a`
  - Accent Green: `#00a859` (Hover: `#008f4c`)
  - Accent Grey: `#6b6b6b`
  - Typography: Bowlby One SC (display), Inter Tight (sans), Space Mono (monospace).

## 3. Backend Architecture
- **Express.js**: RESTful API on `http://localhost:5000/api`.
- **Database**: PostgreSQL with `pg.Pool` connection management.
- **Validation**: Zod schema validation middleware.
- **Security**: Helmet HTTP header protection, configurable CORS.
