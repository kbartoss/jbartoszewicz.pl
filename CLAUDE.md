# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro 5 template project with React integration, built as a Polish-language personal website template. The project uses modern tooling with Tailwind CSS v4, TypeScript, ESLint, and Prettier pre-configured.

## Application Content

**Website Structure**:

- Personal portfolio website with Polish language content
- Responsive navigation with mobile menu support
- Single-page application structure with potential for additional pages
- Professional branding with custom logo and color scheme

**Current Features**:

- **Navigation**: Main navigation with menu items (Home, Work, About, Careers, Blog) + "Let's talk" CTA button
- **Mobile Menu**: Hamburger menu with slide-in animation for mobile devices
- **Styling**: Blue-to-purple gradient background with DaisyUI component integration
- **Layout**: Max-width container (1440px) with responsive design

**Brand Identity**:

- Typography: Inter font family for modern, clean appearance
- Logo: Custom logo located in `/assets/logo.png`
- Interactive elements with smooth transitions and hover effects

**Technical Implementation**:

- Server-side rendered using Astro for optimal performance
- React components for interactive UI elements
- TypeScript for type safety across the application
- Tailwind CSS v4 with custom theme configuration
- DaisyUI for pre-styled components (buttons, etc.)

## Key Commands

### Development

- `pnpm dev` - Start development server on localhost:4321
- `pnpm build` - Build production version to `dist/`
- `pnpm preview` - Preview built version locally

### Code Quality

- `pnpm lint` - Run ESLint for .js/.ts/.jsx/.tsx/.astro files
- `pnpm lint:fix` - Fix ESLint issues automatically
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check formatting without changing files

## Architecture

### Tech Stack

- **Astro 5** - Static site generator with React integration
- **React 19** - For interactive components
- **Tailwind CSS v4** - Utility-first CSS via @tailwindcss/vite
- **TypeScript** - Type safety with strict mode
- **ESLint + Prettier** - Code quality and formatting

### Project Structure

```
src/
├── assets/          # Images and resources (SVGs, etc.)
├── components/      # Astro/React components
├── layouts/         # Page layouts (Layout.astro for common HTML structure)
├── pages/           # File-based routing (index.astro as entry point)
└── styles/          # Global styles (global.css)
```

### Key Configuration Files

- `astro.config.mjs` - Astro config with React and Tailwind integration
- `tsconfig.json` - TypeScript config with React JSX settings
- `eslint.config.js` - ESLint rules for TS/JS/Astro files
- `package.json` - Project scripts and dependencies

## Development Conventions

### Code Style

- Use Prettier for formatting - classes are auto-sorted by `prettier-plugin-tailwindcss`
- Function names as verbs/phrases, variables as nouns/domain concepts
- Import order: external libraries → local modules → styles
- Keep logic shallow with early returns, handle edge cases first
- **Interactive elements** - Always add `cursor-pointer` class to clickable elements (buttons, links, etc.) for better UX
- **TypeScript typing** - Always specify types for React hooks: `useState<boolean>(false)` instead of `useState(false)`

### Astro/React Integration

- In `.astro` files: use `class` attribute
- In React components: use `className` attribute
- Pages should use `Layout.astro` for common HTML structure
- Keep `<head>` elements in Layout.astro, use slots for page-specific metadata

### Styling

- Prefer Tailwind CSS utilities over custom CSS
- Use global styles only in `src/styles/global.css`
- Local styles in `<style>` tags within `.astro` files should be minimal
- Don't manually sort Tailwind classes - let Prettier handle it

### File Organization

- Public assets (favicon, etc.) go in `public/`
- Project assets go in `src/assets/`
- Reference public files with `/filename.ext` paths
- Each page should import global styles at the top

### Key Architecture Patterns

**Component Structure**:

- Layout components in `src/components/` follow a hierarchical pattern (Layout → Container → Section)
- Responsive design patterns throughout with mobile-first approach

### Component Practices

**Astro Components**:

- Use `.astro` extension for static components with server-side logic
- Import React components with explicit `client:load` directive when needed
- Define TypeScript interfaces for props at the top of the component
- Use frontmatter (`---`) for component logic and data fetching
- In `.astro` files: use `class` attribute (not `className`)

**React Components**:

- Use `.tsx` extension for interactive React components
- Define prop interfaces with clear TypeScript types
- Use functional components with React.FC typing
- Always specify types for React hooks: `useState<boolean>(false)` instead of `useState(false)`
- In React components: use `className` attribute (not `class`)

**Component Organization**:

- Separate Astro and React components in subdirectories for clarity
- Shared interfaces should be defined at the top of component files
- Mobile-first responsive design with Tailwind breakpoints
- Use DaisyUI for consistent button styling (`btn btn-neutral`)
- Interactive elements must have `cursor-pointer` class

**State Management**:

- Keep local state within components using React hooks
- Use typing for state: `useState<boolean>(false)`
- Simple toggle patterns for UI interactions (mobile menus, etc.)
- Pass data via props with TypeScript interfaces

**Styling Patterns**:

- Use custom CSS variables in `global.css` for brand colors (`--color-gray-custom`)
- Gradient backgrounds defined in layout components
- Smooth transitions and hover states for better UX
- Consistent spacing and typography with Tailwind classes

**Metadata & SEO**: Comprehensive metadata configuration in `src/app/layout.tsx` with structured data (JsonLd), OpenGraph, Twitter cards, and Google Analytics integration.

**Environment Configuration**: Requires `NEXT_PUBLIC_SITE_URL` environment variable for proper metadata and canonical URLs.

### MDX Configuration

Articles use rehype-prism for syntax highlighting and remark-gfm for GitHub Flavored Markdown. File tracing is configured for optimal bundling of article assets.

## Important Notes

- The project uses pnpm as package manager
- Tailwind CSS v4 is configured via @tailwindcss/vite plugin (no separate tailwind.config.js needed)
- ESLint is configured to catch `no-undef` (error) and `no-unused-vars` (warn)
- TypeScript strict mode is enabled with Astro's base configuration
- The template is pre-configured with Polish language content and documentation
