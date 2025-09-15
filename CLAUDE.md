# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro 5 template project with React integration, built as a Polish-language personal website template. The project uses modern tooling with Tailwind CSS v4, TypeScript, ESLint, and Prettier pre-configured.

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
