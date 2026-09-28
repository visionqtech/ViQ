# VisionQ Technology

A responsive company website built with React 19, Vite 6, and React Router. The design uses a light palette, blue accents, original CSS illustrations, and accessible navigation.

## Run locally

With Node.js installed:

```sh
npm ci
npm run dev
```

On this Windows workspace, the portable Node.js setup is supported by:

```powershell
.\start-local.ps1
```

Open http://127.0.0.1:5173/. If that port is already running, open the existing server instead of starting another.

## Verify and build

```sh
npm run lint
npm run build
npm run preview
```

## Source structure

- `src/main.jsx` and `src/App.jsx`: application entry points.
- `src/site/App.jsx`: shared navigation, footer, route definitions, and scroll behaviour.
- `src/site/Pages.jsx`: homepage, about/team, services, products, product details, careers, contact, and not-found pages.
- `src/site/data.js`: service descriptions and process content.
- `src/site/site.css` and `src/site/responsive.css`: visual system and responsive layouts. `src/site/modern.css` contains the latest typography, navigation, featured service cards, and visual refinements, including responsive overrides.
- `src/components/tools.js`: product descriptions, features, and use cases.
- The other files in `src/components` and `src/pages` are retained from the previous design and are not mounted by the new application.

## Contact and product behaviour

The contact form validates required fields and opens a prefilled draft in the visitor's email application. It does not send or store submissions; there is no backend. Visitors can also use the displayed email and map links. Career enquiries open an email draft to HR.

Product pages are informational. They do not implement the described AI tools, account creation, or payments. Availability enquiries lead to the contact form with the product selected.

## Deployment

The source repository is `https://github.com/visionqtech/ViQ`. The workflow in `.github/workflows/deploy.yml` runs lint and a production build on each push to `main`, then publishes `dist` to GitHub Pages. Repository Settings > Pages must use **GitHub Actions** and the custom domain **www.visionqtechnology.com**. Enable HTTPS enforcement once GitHub has issued the certificate.

The default Vite base is `/`, matching the custom domain in `public/CNAME`. `public/robots.txt` and `public/sitemap.xml` are copied to the build. The postbuild script creates `dist/404.html` so GitHub Pages can render client-side routes on direct visits. GitHub Pages still returns HTTP 404 for those fallback responses; hosts supporting rewrites should instead rewrite application paths to `/index.html` with a 200 response.

For a GitHub project URL under `/visionq-site/`, change Vite's base accordingly and remove the custom-domain CNAME from the deployment. The router reads Vite's base automatically. Deployment is not performed by local development or build commands.

## Review artifacts

`review/` contains desktop/mobile screenshots and results from route and viewport checks performed using local Chrome. These are local review artifacts, not application assets. Fonts use Google Fonts with system fallbacks.
