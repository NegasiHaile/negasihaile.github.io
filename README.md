A modern, responsive developer portfolio built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/).

> Showcasing my projects, skills, experience, and contact information in a sleek and performant single-page application.

---

## 🚀 Tech Stack

<p align="left">
  <img src="https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

## 🧰 Features

- 🎨 Fully responsive and mobile-friendly
- 🌙 Dark mode toggle
- 📂 Project and research papers showcase
- 📖 Rendering MDX based blogs
- 📄 Resume
- 📫 Contact list
- 📈 SEO optimized with meta tags

---

## 🔧 Setup

### 1. Clone the repository

```bash
git clone https://github.com/NegasiHaile/negasihaile.github.io

# Rename the project name to your own one
mv negasihaile.github.io YOUR_GITHUB_USERNAM.github.io

# Change directory
cd YOUR_GITHUB_USERNAM.github.io

```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run Locally

```bash
npm run dev
# or
yarn dev
```

## Project structure

```bash
.
├── LICENSE
├── README.md
├── mdx-components.tsx
├── next-env.d.ts
├── next.config.ts
├── out
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── Resume.pdf
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── profile-pic.png
│   ├── testimonials
│   │   ├── 01.png
│   │   ├── [...].png
│   ├── vercel.svg
│   └── window.svg
├── src
│   ├── app
│   │   ├── blogs
│   │   ├── favicon.ico
│   │   ├── fonts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   ├── projects
│   │   ├── publications
│   │   └── resume
│   ├── assets
│   ├── components
│   │   ├── footer.tsx
│   │   ├── image-slider.tsx
│   │   ├── navbar.tsx
│   │   ├── post-card.tsx
│   │   ├── profile.tsx
│   │   ├── projects.tsx
│   │   └── publication.tsx
│   ├── data
│   │   ├── posts.tsx
│   │   ├── projects.tsx
│   │   ├── publications.tsx
│   │   └── social_accounts.tsx
│   ├── types
│   │   └── index.ts
│   └── utils
│       ├── Popups
│       ├── cards
│       ├── icons
│       └── images.ts
├── tailwind.config.ts
└── tsconfig.json
```
