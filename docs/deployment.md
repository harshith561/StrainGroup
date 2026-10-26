# Strains Group Website Deployment Guide

This guide covers deploying the Strains Group frontend and backend independently or together.

## 1. Prerequisites
- **Node.js**: v18+ or v20+ / v22+ LTS
- **PostgreSQL**: 14+ (Local instance or hosted on Supabase, Neon, AWS RDS, Railway, Render)
- **Domain & SSL**: Valid HTTPS certificates for production

## 2. Frontend Deployment (Vercel / Netlify / VPS)

### Environment Variables
Configure the following in your hosting provider's dashboard:
```env
NEXT_PUBLIC_API_URL=https://api.yourdomain.com/api
```

### Build & Start Commands
- **Install command**: `npm install`
- **Build command**: `npm run build`
- **Output directory**: `.next`
- **Run command**: `npm run start`

## 3. Backend Deployment (Render / Railway / AWS / Docker)

### Environment Variables
```env
PORT=5000
NODE_ENV=production
DB_HOST=your-postgres-host.com
DB_PORT=5432
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=strains_db
CORS_ORIGIN=https://strains-groups.vercel.app
```

### Running Migrations
To execute database migrations in production:
```bash
npm run migrate
npm run seed
```

## 4. Local Development
1. Start PostgreSQL (database: `strains_db`).
2. Run `npm run migrate` inside `backend/`.
3. In the root directory, start both frontend and backend concurrently:
```bash
npm run dev
```
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`
