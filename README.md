# BuildX— React + Tailwind Template
**Color scheme:** black (`#0E0E0E`), gold (`#FFD54F`, `#F5B300`), white (`#FFFFFF`), gray (`#CFCFCF`).


---
## Tech stack
- **Frontend:** React (Vite) + React Router
- **Styling:** Tailwind CSS 3.x + PostCSS + Autoprefixer
- **Dev tooling:** Vite, Prettier
- **Hosting / Deployment:** Vercel (recommended) or Netlify
- **Optional:** Framer Motion for animations, Algolia for search, Cloudinary for assets

---
## Folder structure (recommended)
```
dreamlaunch-studio/
├─ public/
│  └─ assets/                 # images, videos, icons (exported)
├─ src/
│  ├─ components/             # shared UI components (Navbar, Footer, Button)
│  ├─ sections/               # page sections (Hero, Services, Testimonials)
│  ├─ pages/                  # route pages (Home, About, Contact)
│  ├─ styles/                 # global styles and tailwind entry
│  ├─ main.jsx
│  └─ App.jsx
├─ .gitignore
├─ index.html
├─ package.json
├─ tailwind.config.cjs
├─ postcss.config.cjs
└─ README.md
```

---
## Setup (local)
1. `git clone <repo>`
2. `cd dreamlaunch-studio`
3. `npm install`
4. `npm run dev` — opens at `http://localhost:3000`

## Production build
- `npm run build`
- Deploy the `dist/` folder to Vercel / Netlify (Vercel auto-detects Vite projects).

---
## Development conventions
- **Main branch:** `main` (production-ready)
- **Dev branches:** `feature/<short-description>-<initials>` (e.g. `feature/hero-jd`)
- **Commits:** Conventional commits (type: scope - message)
- **PRs:** Include screenshots, testing notes, and deployment preview link

---
## Accessibility & Responsiveness
- All interactive elements must be keyboard-accessible.
- Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`).
- Color contrast must meet WCAG AA for text and UI controls.
- Responsive breakpoints: mobile-first, support for 320px — 1920px

---
## Tasks & Division (3 people)
Estimated sprint: **2 weeks (10 working days)**. Split into parallel workstreams.

### Ojaswee — Frontend UI & Components (Owner: Person A)
**Focus:** Build core React components and pages, wiring routes and layout.
**Tasks:**
- Setup project skeleton (Vite + Tailwind). 
- Implement `Navbar`, `Footer`, `Button` components. 
- Implement `Hero`, `Services`, `Testimonials` sections. 
- Responsive layout adjustments and component props. 
- Unit smoke tests for components (optional). 
**Acceptance criteria:**
- All components are reusable and documented (PropTypes or JSDoc).
- Pages render correctly across devices and match visual spec.

### Ankit  — Content, Visuals & Animations (Owner: Person B)
**Focus:** Copy/content, imagery, micro-interactions, and SEO/meta.
**Tasks:**
- Create content for Hero, Services, About, Contact. 
- Prepare assets: icons, optimized images, hero background, and logo. 
- Implement simple animations (Framer Motion) for hero and CTAs. 
- Setup basic SEO: meta tags, open graph images, titles and descriptions. 
**Acceptance criteria:**
- Content is proofread and approved; images are optimized (<200KB where possible).
- Animated interactions are smooth and degrade gracefully.

### Person C — Platform, CI & Deployment (Owner: Person C)
**Focus:** Build pipeline, deployment, performance and monitoring.
**Tasks:**
- Setup Prettier and linting rules; create `.gitignore`. (1 day)
- Configure Tailwind and PostCSS; create utility classes. (1 day)
- Setup Vercel deployment and environment variables. (1 day)
- Add GitHub Actions (optional) for build & test on PRs. (2 days)
- Performance testing and Lighthouse audits; fix issues. (2 days)
**Acceptance criteria:**
- Continuous deployment to Vercel on `main` branch.
- Lighthouse score >= 90 (performance/seo/accessibility) after optimizations.

---
## Branch & PR workflow
1. Create branch: `feature/<name>-<initials>`
2. Work locally, commit frequently with clear messages.
3. Open PR to `main`; assign reviewer.
4. Reviewer checks design match, responsiveness, accessibility, and tests.
5. Merge when checks pass and acceptance criteria met.

---
## QA checklist (before merge)
- [ ] Cross-browser test (Chrome, Safari, Edge)
- [ ] Mobile breakpoint checks (320, 375, 425, 768, 1024, 1440)
- [ ] Accessibility (tab order, aria labels)
- [ ] Image optimization & lazy loading
- [ ] SEO meta tags & social previews
- [ ] No console errors / warnings

---
## Future enhancements (nice-to-have)
- CMS integration (Sanity, Contentful, or Netlify CMS)
- A/B testing for hero copy
- Blog with MDX and dynamic OG image generation
- Multi-language support (i18n)

---
