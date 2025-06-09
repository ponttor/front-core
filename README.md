Advanced Production-Ready React App

Ulbi TV course project — full-scale frontend architecture in React, with production-level configuration, testing, deployment, and DevOps practices.

Development

Core Stack

React 18
TypeScript (strict mode)
Redux Toolkit (async thunks, RTK Query)
React Router v6+
Webpack 5 / Vite
Storybook
Jest + React Testing Library
Loki (visual regression)
Cypress (e2e)
Architecture

Feature-Sliced Design
Code splitting, lazy loading
Dynamic reducer injection (ReducerManager)
Error boundaries, protected routes
Data normalization, union types
Infinite scroll (IntersectionObserver)
Feature flags, redesigned/deprecated code strategy
UI and Design

Custom UI Kit with themes
CSS Modules
Skeleton components for loading states
Dropdowns, popovers, drawers
Accessibility and semantic markup
Testing

Unit tests (Jest + RTL)
Visual testing (Loki)
End-to-end tests (Cypress)
Mocks, fixtures, public API testing
Full coverage: hooks, reducers, async thunks
DevOps & Tooling

Docker + Docker Compose
Nginx (reverse proxy)
HTTPS + domain
CI/CD with test reports
Netlify deploy
Prettier, ESLint, Stylelint
Custom ESLint plugin
AST analysis
Git Flow
Husky + lint-staged
Browserlist + Babel
Layer generator, CopyPlugin
Path aliases (__PROJECT__, @/features/...)
3rd-Party Libraries

classNames
i18next
Axios
React Hook Form
Custom API instances
debounce, throttle, date utils
User roles & auth
JSON-based UI personalization
Project Structure (FSD)

src/
├── app/
├── entities/
├── features/
├── pages/
├── shared/
├── widgets/
└── processes/
Deployment

Docker image + Nginx
HTTPS with domain
API proxying
Production build (Netlify / VPS)
