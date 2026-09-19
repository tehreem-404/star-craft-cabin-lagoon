# Solara

A marketing and booking website for **Solara**, a fictional 16-room cliffside house in Cala Solara, Campania, Italy. Built with React 19, TanStack Start and Vite.

<!-- TODO: Add screenshots from the `screenshots/` folder, e.g.
![Home page](screenshots/your-file-name.png) -->

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/coast` | The coast |
| `/stay` | Room list (all 16 rooms) |
| `/stay/:slug` | Room detail |
| `/table` | Restaurant |
| `/inquire` | Booking inquiry form |

## Tech stack

- **Framework:** TanStack Start (React 19) with TanStack Router
- **Build tool:** Vite 8
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, Radix UI primitives, `tw-animate-css`
- **Forms:** React Hook Form, Zod, `@hookform/resolvers`
- **Auth (present, disabled by default):** Better Auth
- **Database (present, disabled by default):** PGlite (embedded Postgres) in development; Neon Postgres in production once `DATABASE_URL` is set
- **Testing:** Node's built-in test runner
- **Code quality:** ESLint, Prettier

## Getting started

**Prerequisites:** [Node.js](https://nodejs.org/) 22 and npm.

```bash
git clone https://github.com/tehreem-404/star-craft-cabin-lagoon.git
cd star-craft-cabin-lagoon
npm install
npm run dev
```

The dev server runs on port 8080. Open <http://localhost:8080>.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server (port 8080) |
| `npm run build` | Production build, then runs `db:migrate` |
| `npm run db:migrate` | Apply SQL migrations from `migrations/` |
| `npm run typecheck` | Type-check with `tsc --noEmit` |
| `npm run lint` | Lint with ESLint |
| `npm run format` | Format with Prettier |
| `npm test` | Run the unit tests |
| `npm run preview` | Preview the built output |
| `npm run preview:restart` / `npm run preview:stop` | Restart or stop the preview server |

## Project structure

```
src/
├── routes/
│   ├── __root.tsx          # Root layout wrapping every page
│   └── _site/              # Public pages: home, coast, stay, stay.$slug, table, inquire
├── data/site.ts            # Property info and all 16 rooms (name, price, amenities, ...)
├── components/             # site-header, site-footer, room-card, inquire-form,
│                           # image-frame, ui/ (Radix-based primitives)
└── lib/
    ├── auth/               # Better Auth wiring (email/password, sessions, gates)
    ├── db.ts               # Neon Postgres if DATABASE_URL is set, otherwise local PGlite
    ├── inquiries.ts        # Booking inquiries
    └── multiplayer/        # WebRTC/P2P room helper (not used by any page yet)
migrations/                 # SQL migrations (currently only the auth tables)
public/                     # Room photos, favicons, PWA icons
```

## Configuration notes

- **Booking inquiries are not sent anywhere.** They are currently saved to the browser's `localStorage` only.
- **Auth is off by default** (`VITE_AUTH_ENABLED: false` in `.grok/app-env.json`). Turning it on means adding a login route and wiring up `src/lib/auth/`.
- **The database is off for deployment** (`deploy.database: false` in `.grok/app-env.json`). In development, `src/lib/db.ts` falls back to an embedded PGlite database automatically, so nothing needs configuring.
- **No `.env` file is included.** If you switch on Neon, set `DATABASE_URL` yourself.

## Deployment

The repository includes a `.vercel/output/` folder, which indicates it was built for Vercel. Run `npm run build`, then deploy with the Vercel CLI or dashboard.

<!-- TODO: Add the live URL here. -->

## Origin

The `.grok/` folder, `AGENTS.md`, `startup.sh` and the "Created with Grok" PWA plugin indicate this project was generated in Grok Build, xAI's AI app-building sandbox. None of that is needed to run the app locally. `AGENTS.md` contains instructions for the Grok Build agent, not documentation for this app.

## License

<!-- TODO: No license file was found in the repository listing. Add one (for example MIT) or state that all rights are reserved. -->

## Author

[@tehreem-404](https://github.com/tehreem-404)
