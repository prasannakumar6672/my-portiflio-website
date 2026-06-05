# Project Structure & Architecture

This document outlines the refactored directory layout and architectural patterns of the portfolio website. The project has been restructured to separate concerns, isolate components, modularize data, and leverage TypeScript path aliases for enhanced maintainability and scale.

---

## Directory Overview

```
my-portiflio-website/
├── public/                 # Static assets (images, logos, PDFs)
├── src/
│   ├── app/                # Next.js App Router routes & pages
│   ├── components/         # React Components
│   │   ├── layout/         # Persistent layouts (Navbar, Footer, Intro, etc.)
│   │   ├── ui/             # Reusable low-level UI elements (Card, Button, Modal)
│   │   └── sections/       # Isolated homepage & page sections (Hero, About, Projects, etc.)
│   ├── lib/                # Shared utilities & static data
│   │   ├── utils/          # Tailored tailwind mergers & utils
│   │   └── data/           # Modularized static content datasets
│   └── types/              # Unified TypeScript definitions & contracts
├── package.json            # Configuration and script dependencies
├── tsconfig.json           # TypeScript configuration with path aliases
└── PROJECT_STRUCTURE.md    # Architecture documentation (this file)
```

---

## Key Refactoring Concepts

### 1. Section & Layout Isolation
Each section (e.g., `About`, `Projects`, `Experience`) and layout (e.g., `Navbar`, `Footer`, `Intro`) is encapsulated in its own folder.
- **Sub-components**: Large components are broken down into smaller, focused modules inside the same directory (e.g., `AnimatedCounter.tsx` inside `About/`, `ProjectCard.tsx` inside `Projects/`).
- **Styles & Utilities**: Section-specific helper utilities are stored next to their components (e.g., `projectUtils.ts` in `Projects/`).
- **Entrypoints (`index.ts`)**: Each isolated directory exposes a clean public API via an `index.ts` re-exporter, allowing outer files to resolve dependencies without exposing inner file structures.

### 2. Path Aliases
Relative import messiness (`../../../../`) has been eliminated in favor of clean path aliases configured in `tsconfig.json`:
- `@/components/*` resolves to `src/components/*`
- `@/lib/*` resolves to `src/lib/*`
- `@/types` resolves to `src/types`
- `@/data` (or `@/lib/data`) resolves to `src/lib/data/index.ts`

### 3. Modular Static Data
To keep components purely focused on UI rendering, all static portfolio datasets (projects list, experiences, credentials, personal details) have been extracted from component files and split into domain-specific files under `src/lib/data/`:
- `personal.ts`: Base avatar, email, locations, and socials.
- `skills.ts`: Bento grid category arrays and tech nodes.
- `projects.ts`: Completed portfolio items.
- `experience.ts`: Timelines, roles, and descriptions.
- `navigation.ts`: Header/Footer navigation specifications.
- `achievements.ts`, `certifications.ts`, `education.ts`: Academic data.

These files are unified under `src/lib/data/index.ts` to keep existing data imports simple and fully compatible.

### 4. Development Stability
- **Next.js Webpack configuration**: On Windows environments, Turbopack may crash due to filesystem I/O locks. The `npm run dev` script runs Next.js using `--webpack` for maximum hot-reloads stability.
- **Dependencies**: Heavy, unused 3D dependencies (`three`, `@react-three/fiber`, `@react-three/drei`) and `gsap` have been pruned from the bundle.

---

## Verification and Quality Control
- **Linting**: Execute `npm run lint` to run eslint syntax checks.
- **Production Build**: Execute `npm run build` to verify webpack bundling compiles without errors.
