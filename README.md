# Strains Group Website Replica

A complete, working replica of the [Strains Group](https://strains-groups.vercel.app/) official website built with **Next.js App Router**, **React**, **JavaScript Only (No TypeScript)**, **Tailwind CSS**, **Custom SCSS**, **Node.js Express backend**, and **PostgreSQL**.

---

## 🌟 Key Highlights & Implementation Details

- **Strict JavaScript Architecture**: Built 100% in pure JavaScript (.js, .jsx) with standard configuration files—no TypeScript interfaces or configuration.
- **Visual & Behavioral Fidelity**: Pixel-accurate reproduction of header navigation, glassmorphism on scroll, hero slider with bouncing/stretching display typography, 3D torus viewer with dynamic radial gradients, interactive case studies with animated counters, and custom responsive breakpoints.
- **Complete Route Coverage**: Every link and dropdown option navigates to a fully realized page:
  - `/` (Homepage with all 13 sections)
  - `/about-strains-group`
  - `/our-ecosystem`
  - `/services`
  - `/video-production` (Includes embedded production reel player)
  - `/shop` (3D Torus interactive showcase & product catalog with cart)
  - `/advertising-marketing`
  - `/clothing-manufacturing` (Strains Stitchery in Tirupur)
  - `/fashion-brand` (Strains Fashions organic line)
  - `/start-your-brand` (Incubation & brand launch roadmap)
  - `/portfolio` & `/work` (Curated work grid with hover effects)
  - `/case-studies` (Aastu Refrigeration & Pioneer Cranes dashboards)
  - `/pricing` (Transparent packages)
  - `/book-consultation` & `/contact` (Interactive form integrated with Express API)
  - `/sustainability` (Manifesto & zero-discharge operations)
  - `/founder` (Naga Praharsha Govindu spotlight)
  - `/testimonials` (Client endorsements)
  - `/privacy` & `/terms` (Legal policies)
  - `not-found.js` (Custom 404 page)
- **Functional Backend**: Express.js server providing real APIs for contact submissions, newsletter subscriptions, and dynamic content with Zod validation, parameterized queries, and PostgreSQL persistence.

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
In the root directory, or individually in `frontend/` and `backend/`:
```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

### 2. Environment Configuration
Create `.env` inside `backend/`:
```env
PORT=5000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=strains_db
CORS_ORIGIN=http://localhost:3000
```

Create `.env.local` inside `frontend/`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### 3. Run Development Servers
From the root directory:
```bash
# Run both frontend and backend concurrently
npm run dev
```

Or run each independently:
```bash
# Terminal 1 - Backend (Port 5000)
cd backend
npm run dev

# Terminal 2 - Frontend (Port 3000)
cd frontend
npm run dev
```

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:5000/api](http://localhost:5000/api)
- **Health Check**: [http://localhost:5000/api/health](http://localhost:5000/api/health)

### 4. Running Backend Tests
```bash
cd backend
npm test
```

---

## 📂 Project Structure
```
strains-website/
├── frontend/
│   ├── public/
│   │   ├── assets/              # Webp and png assets
│   │   ├── videos/              # Strains Group production video overview
│   │   └── strainsassociates.webp
│   ├── src/
│   │   ├── app/                 # Next.js App Router pages
│   │   ├── components/
│   │   │   ├── layout/          # Header, navigation, fullscreen sidebar
│   │   │   ├── hero/            # HeroSlider with typography animation
│   │   │   ├── product-viewer/  # 3D Torus viewer & color selector
│   │   │   ├── sections/        # AgencyIntro, ExtraEcosystem, DigitalMarketing, Marquee, Values
│   │   │   ├── portfolio/       # PortfolioSection
│   │   │   ├── services/        # ServicesSection
│   │   │   ├── team/            # TeamSection
│   │   │   ├── testimonials/    # TestimonialsSection
│   │   │   └── footer/          # Footer with newsletter form
│   │   ├── services/            # Axios API client
│   │   └── styles/              # SCSS animations and globals
│   ├── next.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── config/              # Environment config
│   │   ├── controllers/         # Contact, newsletter, content controllers
│   │   ├── routes/              # Express route declarations
│   │   ├── services/            # Business logic and queries
│   │   ├── middleware/          # Validation, error handling, helmet
│   │   ├── validators/          # Zod schemas
│   │   ├── database/            # pg.Pool and connection management
│   │   ├── app.js               # Express application
│   │   └── server.js            # Server entrypoint
│   ├── migrations/              # 001_initial_schema.sql & runner
│   ├── seeds/                   # seed_data.js
│   ├── tests/                   # api.test.js
│   └── package.json
│
├── docs/
│   ├── architecture.md
│   ├── api-reference.md
│   └── deployment.md
├── package.json
├── .gitignore
└── README.md
```
