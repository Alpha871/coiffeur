# Coiffeur

Salon management system with support for salons, staff, services, customers, schedules, and availability.

## Features

- Salon creation, approval workflow
- Staff (employees) with specialties, availability
- Customers with appointment history, favorites, loyalty points
- Services with pricing, category, reviews, activation status
- Opening hours per salon and per staff member

## Tech Stack

- Next.js + TypeScript
- Prisma ORM
- Object-oriented domain layer (oop/domain)
- Server actions (infrastructure repository)

## Domain Layer

- person.ts: Base class
- customer.ts: Loyalty, favorites, appointments
- employee.ts: Specialties, appointments
- service.ts: Pricing, reviews, active state

## Data Access

- oop/infrastructure/salon-repository.ts: Salon, availability, staff operations

## Scripts

- Install: npm install
- Migrate: npx prisma migrate dev
- Dev server: npm run dev

## Environment

Set DATABASE_URL and auth-related variables.

## Conventions

- Prices stored in cents
- Availability handled via delete + createMany

## License

MIT
