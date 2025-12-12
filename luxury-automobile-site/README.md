# Luxury Automobile Static Site

A small, high-aesthetic static website showcasing 5 luxury automobile model landing pages. Built with Astro + Tailwind CSS + TypeScript, ready to deploy to Vercel.

## Tech Stack
- Astro
- Tailwind CSS
- TypeScript
- Vercel (Recommended for deployment)

## Project Structure
- `src/pages` - site pages (index and each model page)
- `src/components` - re-usable components (Header, Hero, Specs, Highlights, Layout)
- `public/images/*` - placeholder assets

## Getting started
1. Install dependencies

```bash
npm install
```

2. Run local dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview production build locally

```bash
npm run preview
```

## Notes & Guidance to satisfy the requirements
- Replace the placeholder images in `public/images/{model}` with high-resolution images (>= 1800px), at least 3 images per model to satisfy NFR07.
- Each model page is a standalone landing page (not a gallery grid) with a hero image (80-100vh), short paragraph, highlights, and specs.
- Header starts transparent and changes on scroll (NFR11, NFR12).
- Minimal animations and quiet UI to achieve the "luxury minimal" aesthetic (NFR01).
- Deploying to Vercel: connect this repo to Vercel and create a new project, Astro's `@astrojs/vercel` adapter is already configured.

## Recommended next steps & improvements (optional)
- Add real high-resolution images for each model and tune image optimization using `@astrojs/image`.
- Add a light gallery modal to display high-res photography.
- Add SEO meta and structured data per model.
- Add CSS for accessibility, keyboard navigation, focus states, and reduced-motion support.

---

This project scaffold implements the required features in a minimal style. Replace placeholders and adjust content as desired for final production-ready assets.
