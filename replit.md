# Overview

This is a React-based static website for Mamta Steel Traders, a steel manufacturing and supply company based in Mumbai, Maharashtra. The project uses modern web technologies including React, TypeScript, Vite, Tailwind CSS, and shadcn/ui components to create a fully responsive and SEO-optimized business website. The site showcases the company's steel products (pipes, sheets, flanges), services, certifications, and contact information with a professional design focused on the industrial steel industry.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component development
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing without the overhead of React Router
- **Styling**: Tailwind CSS with custom design system variables for consistent theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling

## Backend Architecture
- **Server**: Express.js with TypeScript running in ESM mode
- **Development**: Hot module replacement (HMR) via Vite integration in development mode
- **Storage Interface**: Abstracted storage layer with in-memory implementation (expandable to database)
- **API Structure**: RESTful API design with `/api` prefix for all backend routes
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

## Build and Development Setup
- **Development**: Vite dev server with Express middleware integration for full-stack development
- **Production**: Static build output served by Express with proper asset handling
- **TypeScript Configuration**: Shared types between frontend and backend via `shared/` directory
- **Path Aliases**: Configured for clean imports (`@/` for client, `@shared/` for shared types)

## Component Architecture
- **Layout Components**: Modular header (TopBar, MainHeader, Navbar) and Footer components
- **Page Components**: Individual pages (Home, About, Products, Solutions, Certificate, Contact)
- **UI Components**: Comprehensive shadcn/ui component library for consistent design
- **SEO Components**: Dedicated SEO component with React Helmet for meta tags and structured data
- **Interactive Components**: Carousels, product showcases, and responsive navigation

## Styling and Design System
- **CSS Framework**: Tailwind CSS with custom configuration
- **Design Tokens**: CSS variables for colors, spacing, and theme consistency
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Component Variants**: Class Variance Authority (CVA) for systematic component variations
- **Color Scheme**: Professional steel industry color palette with blue and orange accents

## Data Management
- **Database Schema**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Type Safety**: Zod schemas for runtime validation and TypeScript integration
- **Migration System**: Drizzle Kit for database schema migrations and updates
- **Connection**: Neon Database serverless PostgreSQL for cloud database hosting

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form, TanStack Query
- **Build Tools**: Vite, TypeScript, ESBuild for production bundling
- **Routing**: Wouter for lightweight client-side routing

## UI and Styling
- **Component Library**: Complete Radix UI component suite (@radix-ui/react-*)
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Utility Libraries**: clsx, tailwind-merge for conditional styling
- **Icons**: Lucide React for consistent iconography

## Database and Validation
- **ORM**: Drizzle ORM with Zod integration for type-safe database operations
- **Database**: Neon Database (@neondatabase/serverless) for PostgreSQL hosting
- **Validation**: Zod for schema validation and type inference
- **Session Storage**: connect-pg-simple for PostgreSQL session storage

## Development and Production
- **Development**: tsx for TypeScript execution, Replit integration plugins
- **Date Handling**: date-fns for date manipulation and formatting
- **Carousel**: Embla Carousel React for image sliders and carousels
- **Command Interface**: cmdk for search and command palette functionality

## SEO and Performance
- **Meta Tags**: React Helmet Async for dynamic meta tag management
- **Structured Data**: JSON-LD schema markup for search engine optimization
- **Web Manifest**: PWA-ready manifest configuration
- **Performance**: Optimized bundle splitting and lazy loading support

## Cloud Services Integration
- **Database Hosting**: Neon Database for serverless PostgreSQL
- **Asset Storage**: Placeholder for future CDN integration
- **Environment Configuration**: Environment-based configuration for different deployment stages