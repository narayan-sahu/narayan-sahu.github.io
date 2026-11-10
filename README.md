# Narayan Sahu: Cloud Native DevOps & SRE Portfolio

A single-page, statically exported portfolio built with Next.js (App Router), React and TypeScript, deployed to GitHub Pages with GitHub Actions. No backend, database or paid service.

## Single source of truth
**All content lives in `src/data/portfolio.ts`.** Edit that file; the components rarely need changing. Any link or detail set to `null` is hidden automatically (no dead links).

## Structure
```
.github/workflows/deploy.yml   CI/CD: typecheck, build, publish to GitHub Pages
.github/dependabot.yml         weekly npm updates, monthly Actions updates
src/data/portfolio.ts          ALL content (typed)
src/app/                       layout.tsx (metadata, theme script, JSON-LD), page.tsx, globals.css (design tokens)
src/components/                Hero, About, Skills, Projects, Certifications, Blog, Contact, Footer
                               Client components (need the browser): Navigation, ThemeToggle, BackToTop, Year
                               Shared: Icons, BrandLogos, Logo
public/images/                 profile.svg (hero portrait)
next.config.js                 output: "export" (static site in ./out)
.nvmrc                         Node version used locally and in CI
```
Plain CSS with custom properties is used instead of Tailwind/PostCSS to keep dependencies minimal.

## Run locally
Install Node.js 22 (see `.nvmrc`), then:
```bash
npm install        # first time; commit package-lock.json
npm run dev        # http://localhost:3000
npm run typecheck
npm run build      # static site in ./out
```

## Common edits (all in `src/data/portfolio.ts`)
- **Name / intro / about / experience:** `name`, `title`, `headline`, `intro`, `about`, `experience`.
- **Links:** `links.github`, `links.linkedin`, `links.email`, `links.resume` (put the PDF in `public/` and use `"/resume.pdf"`).
- **Skills:** edit the `skills` groups.
- **Projects:** edit `projects`. Set `status` honestly and fill `repoUrl` / `demoUrl` only when real.
- **Certifications:** add `earned("Name", "Issuer", "verification URL")`. Logos exist for Google Cloud, Amazon Web Services and Microsoft; other issuers show their initials until a logo is added in `BrandLogos.tsx`.
- **Profile photo:** replace `public/images/profile.svg`, or add `profile.webp` (4:5, about 800x1000, under 100 KB) and update `profileImage`.
- **Blog:** add objects to `blog`; the nav link and section appear automatically.
- **Site URL:** set `siteUrl` once the final address is known. Canonical, Open Graph URL and structured-data URL are emitted only when it is set.

## Deploy (GitHub Pages + Actions)
1. Create a repository named exactly `USERNAME.github.io` (for this site: `narayan-sahu.github.io`). Any other name serves the site from a sub-path and breaks asset URLs unless a `basePath` is configured.
2. Repo **Settings > Pages > Source: GitHub Actions**.
3. Commit `package-lock.json` (the workflow uses `npm ci`).
4. `git add . && git commit -m "Update portfolio" && git push origin main`
5. Watch the **Actions** tab; when green the site is live at `https://USERNAME.github.io/`.

## Troubleshooting
- **`npm ci` fails:** the lockfile is missing or out of sync; run `npm install` locally and commit it.
- **Type error in CI:** run `npm run typecheck` locally.
- **Pages deploy error:** confirm Settings > Pages > Source is *GitHub Actions*.
- **Old version showing:** hard-refresh and check the latest workflow run succeeded.
- **Unstyled page / 404 for `/_next/...`:** the repository name does not match `USERNAME.github.io` (see Deploy, step 1).

## Design notes
- **Theme:** dark/light toggle saved in `localStorage` (`theme`), defaulting to the OS preference and applied before first paint by an inline script in `layout.tsx`. Tokens are at the top of `globals.css`.
- **Favicon:** `src/app/icon.svg`.
- **Security:** the output is static HTML, CSS and JS with no server runtime. Keep dependencies current (Dependabot is configured) because the build runs in CI.
