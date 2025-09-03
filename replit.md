# Overview

This is a tattoo studio website for "Queen of Hearts Tattoos" in Lisbon, Portugal. The application is a full-stack web application featuring a modern, dark-themed design with golden accents that showcases the studio's portfolio, services, and allows potential clients to contact the business. Built as a single-page application with a landing page design, it includes sections for hero, portfolio, about, services, testimonials, and contact functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with custom dark theme and golden accent colors
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent design system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Forms**: React Hook Form with Zod validation for type-safe form handling

## Backend Architecture  
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for contact form submissions
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **Session Management**: Prepared for PostgreSQL sessions using connect-pg-simple

## Database Integration
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema**: Defined schemas for users and contacts with UUID primary keys
- **Validation**: Drizzle-Zod integration for runtime type validation

## Design System
- **Theme**: Dark background with golden accents (hsl(45 76% 52%))
- **Typography**: Inter for body text, Playfair Display for headings
- **Components**: Glass-morphism effects, hover animations, and accessibility-focused design
- **Responsive**: Mobile-first responsive design with Tailwind breakpoints

## Development Workflow
- **Build System**: Vite for frontend, esbuild for backend production builds
- **Hot Reload**: Vite HMR for development with custom error overlay
- **Path Aliases**: Configured absolute imports for cleaner code organization
- **Type Safety**: Strict TypeScript configuration across frontend and backend

# External Dependencies

## Database & Storage
- **Neon Database**: Serverless PostgreSQL for production data storage
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## UI & Styling
- **Radix UI**: Unstyled, accessible UI primitives for components
- **Tailwind CSS**: Utility-first CSS framework with custom theme configuration
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Type-safe component variants

## Development & Build Tools
- **Vite**: Frontend build tool and development server
- **esbuild**: Fast JavaScript bundler for production backend builds
- **PostCSS**: CSS processing with autoprefixer
- **TypeScript**: Type checking and compilation

## Form Handling & Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Runtime type validation and schema definition
- **@hookform/resolvers**: Integration between React Hook Form and Zod

## Additional Libraries
- **TanStack React Query**: Server state management and caching
- **Wouter**: Lightweight routing library
- **date-fns**: Date manipulation utilities
- **nanoid**: Secure URL-friendly unique ID generator