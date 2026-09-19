Solara
A marketing/booking site for Solara — a fictional 16-room cliffside house in Cala Solara, Campania, Italy. Built with TanStack Start (React 19) and Vite.
The project appears to have been scaffolded by the Grok Build AI agent (xAI) — see the "Origin" note at the bottom.
Tech stack
Framework: TanStack Start (React 19) + TanStack Router, Vite 8
Styling: Tailwind CSS v4, Radix UI primitives, tw-animate-css
Forms: react-hook-form + zod + @hookform/resolvers
Auth (present, disabled by default): better-auth
Database (present, disabled by default): local PGlite (embedded Postgres/WASM) in dev, Neon Postgres in production once DATABASE_URL is set
Testing: Node's built-in test runner (node --test)
Linting/formatting: ESLint + Prettier
Getting started
npm install
npm run dev
The dev server listens on 0.0.0.0:8080 — open http://localhost:8080.
Scripts
Command
What it does
npm run dev
Start the Vite dev server (port 8080)
npm run build
Production build, then runs db:migrate
npm run db:migrate
Apply SQL migrations from migrations/
npm run typecheck
tsc --noEmit
npm run lint / npm run format
ESLint / Prettier
npm run test
Runs the unit tests (scripts/*.test.mjs + a few src/lib tests)
npm run preview / preview:restart / preview:stop
Serve/manage the built output
Project structure
src/
  routes/_site/        Public pages: index (home), coast, stay (room list),
                        stay.$slug (room detail), table (restaurant), inquire
  routes/__root.tsx     Root layout wrapping every page
  data/site.ts          Property info + all 16 rooms (name, price, amenities…)
  components/           site-header, site-footer, room-card, inquire-form,
                         image-frame, ui/ (Radix-based primitives)
  lib/auth/             better-auth wiring (email/password, sessions, gates)
  lib/db.ts             Neon Postgres if DATABASE_URL is set, else local PGlite
  lib/inquiries.ts      Booking inquiries — currently saved to localStorage only
  lib/multiplayer/      WebRTC/P2P room helper — included but not used by any
                         page yet
  lib/preview-host-bridge.ts
  components/preview-host-bridge.tsx
                        postMessage bridge for the Grok Build live-preview
                        sandbox; inert outside that environment
migrations/             SQL migrations (currently just the auth tables)
public/                 Room photos, favicons, PWA icons
server/middleware/grok-pwa.ts,
scripts/grok-pwa-plugin.mjs
                        Installs a "Created with Grok" PWA banner — a Grok
                        Build platform feature, not app code
startup.sh              Restart script for the Grok Build sandbox; not needed
                        for normal local development
                        Current configuration notes
Auth is OFF by default (.grok/app-env.json → VITE_AUTH_ENABLED: false). Enabling it means wiring a login route and the pieces in src/lib/auth/.
Database is OFF for deploy (.grok/app-env.json → deploy.database: false). Locally, src/lib/db.ts falls back to an embedded PGlite database automatically — nothing to configure for development.
No .env file ships with this export. If you turn on Neon, set DATABASE_URL yourself.
AGENTS.md at the project root is not documentation for this app — it's the operating instructions for the Grok Build AI agent that scaffolded the project (sandbox rules, preview proxy behavior, etc.). Safe to ignore or delete for normal development.
Deployment
A .vercel/output/ folder is included, indicating this was built for Vercel. Typical flow: npm run build, then deploy the output via the Vercel CLI or dashboard.
Origin
The .grok/, AGENTS.md, startup.sh, and the "Created with Grok" PWA plugin all point to this codebase having been generated inside Grok Build, xAI's AI app-building sandbox. None of that scaffolding is required to run the app locally; it only matters if you go back into that platform to keep editing it there.
