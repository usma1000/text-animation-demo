# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

React + Vite application for text animation demonstrations. Built with React 19.1.1 and Vite 7, using pnpm as the package manager. Configured for deployment to GitHub Pages at https://usma1000.github.io/text-animation-demo.

## Development Commands

### Package Manager
- **Always use `pnpm`** for this project (not npm or yarn)

### Essential Commands
```bash
pnpm install          # Install dependencies
pnpm dev              # Start dev server with HMR
pnpm build            # Build for production
pnpm preview          # Preview production build locally
pnpm lint             # Run ESLint
```

### Deployment
```bash
pnpm deploy           # Build and deploy to GitHub Pages (runs predeploy hook automatically)
```

## Architecture

### Build Configuration
- **Vite**: Build tool configured with React plugin
- **Base path**: Set to `/text-animation-demo/` for GitHub Pages deployment (vite.config.js)
- **Entry point**: index.html → src/main.jsx → src/App.jsx

### Code Style
- **ESLint**: Configured with flat config (eslint.config.js)
- **React Hooks**: Uses recommended-latest rules
- **Unused vars**: Allowed for constants (varsIgnorePattern: '^[A-Z_]')
- **Target**: ES2020, browser globals

### File Structure
```
src/
  ├── main.jsx        # React app initialization with StrictMode
  ├── App.jsx         # Main application component
  ├── App.css         # Component styles
  ├── index.css       # Global styles
  └── assets/         # Static assets (images, etc.)
```

## Working with This Codebase

### When Making Changes
1. Run `pnpm lint` after code modifications to ensure compliance
2. Test with `pnpm dev` for HMR feedback
3. Verify production build with `pnpm build && pnpm preview` before deploying

### React Version
- Using React 19.1.1 with modern APIs (createRoot, StrictMode)
- No TypeScript - pure JavaScript with JSX
