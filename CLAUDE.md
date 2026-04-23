# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Vite dev server with HMR
npm run build    # Production build (outputs to dist/)
npm run lint     # ESLint checks
npm run preview  # Preview production build locally
```

## Architecture

**React 19 + Vite portfolio site** for an interior design studio with bilingual support (English/Georgian).

### Routing (`App.jsx`)

Five routes using React Router DOM:
- `/` — Home (hero, featured works, studio preview, expertise, process sections)
- `/projects` — Projects gallery
- `/projects/:id` — Individual project detail
- `/studio` — About/studio page
- `/contact` — Contact/inquiry form

### Internationalization (`src/i18n.js`)

All text content lives in `i18n.js` as English (`en`) and Georgian (`ka`) translation objects. Components consume translations via the `useTranslation` hook from `react-i18next`. Language toggle is in the Navbar.

### Styling

Each page and component has a co-located `.css` file (e.g., `Home.jsx` / `Home.css`). Global styles are in `src/index.css`. No CSS framework — plain CSS.

### Key patterns

- **Animations**: Framer Motion throughout for page transitions and scroll effects. The `PageTransition` component wraps each route.
- **Custom cursor**: `CursorGlow` component renders a glow effect that follows the mouse.
- **Project data**: Hardcoded in individual page components (e.g., `featuredProjects` array in `Home.jsx`) — not fetched from an API.
- **Contact form**: Frontend-only; shows a success message without submitting to a backend.

### Static assets

- `public/projects/` — Project imagery referenced by page components
- `public/fonts/` — Custom fonts
- `src/assets/` — Images imported directly in JSX
