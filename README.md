# Samet Uzgoz — Personal Portfolio

Personal IT portfolio website for Samet Uzgoz. Built with Next.js and deployed as a static site on GitHub Pages.

**Live site:** [thecodersamet.github.io/sametuzgoz](https://thecodersamet.github.io/sametuzgoz/)

## About

Single-page portfolio showcasing education, skills, and selected projects in application development, cyber security, and machine learning.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, static export)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Deploy

The project is configured for static export with a GitHub Pages base path (`/sametuzgoz`).

```bash
npm run build
```

Build output is written to the `out/` folder. For GitHub Pages, copy the contents of `out/` into the `docs/` folder and push to the `main` branch.

## Project Structure

```
app/
  layout.tsx    # Root layout and metadata
  page.tsx      # Main portfolio page
  globals.css   # Global styles
docs/           # Static build output for GitHub Pages
public/         # Static assets
```

## Contact

- **Email:** samet.uzg@gmail.com
- **GitHub:** [TheCoderSamet](https://github.com/TheCoderSamet)

## License

Private project — all rights reserved.
