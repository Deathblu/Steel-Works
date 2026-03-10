# STEELCRAFT - Steel Kitchen Equipment Manufacturing Website

## Project Overview
A multi-page website for STEELCRAFT, a steel kitchen counter equipment manufacturing factory. Built with React + TypeScript + Express + PostgreSQL.

## Current Features

### Pages
- **Home** (`/`) - Product carousel with featured items and company overview
- **Products** (`/products`) - Full product catalog grid with filters
- **Contact** (`/contact`) - Contact inquiry form and location information
- **About/Company** (`/about`) - Combined About Us and Company Information page with navbar and footer

### Navigation
- Main navbar with links to Home, Products, About, Contact Us
- "Get a Quote" button that opens a modal dialog (available on desktop and mobile)
- Footer with quick links, contact info, and business hours
- Mobile-responsive navigation with hamburger menu

### Backend API
- `/api/products` - GET all products
- `/api/inquiries` - POST new inquiry/quote requests

### Database
- `products` table (4 featured items seeded)
- `inquiries` table (stores contact and quote requests)

## Recent Changes
- **Consolidated Pages**: Combined About and Company Info into single AboutCompany page
- **Modal Quote Form**: Converted "Get Quote" page to a modal dialog accessible from navbar
- **Navigation Updated**: Simplified navigation to 4 main links (Home, Products, About, Contact Us)
- **Component Structure**: New GetQuoteDialog component for reusable quote form

## Key Files
- `client/src/App.tsx` - Main app routing and providers
- `client/src/components/Navbar.tsx` - Navigation with modal dialog integration
- `client/src/components/GetQuoteDialog.tsx` - Quote form modal
- `client/src/pages/AboutCompany.tsx` - Combined about/company page with navbar/footer
- `client/src/pages/Home.tsx` - Hero and featured products
- `client/src/pages/Products.tsx` - Product catalog
- `client/src/pages/Contact.tsx` - Contact inquiry form
- `server/routes.ts` - API endpoints
- `server/storage.ts` - Database operations
- `shared/schema.ts` - Data models and Zod schemas

## Styling
- Tailwind CSS with custom theme
- Industrial aesthetic with stainless steel colors (silvers, grays, cool blues)
- Dark mode support configured
- Custom fonts: `--font-display` and `--font-sans`
- Accent color for CTAs and highlights

## Dependencies
- React 18 with TypeScript
- Express.js backend
- PostgreSQL database
- TanStack React Query (data fetching)
- React Hook Form (forms)
- Wouter (routing)
- Shadcn UI components
- Lucide React (icons)
- Framer Motion (animations)
- Embla Carousel (product carousel)

## Workflow
- Development: `npm run dev` starts Express server and Vite dev server on port 5000
- Hot module reloading enabled for rapid development
