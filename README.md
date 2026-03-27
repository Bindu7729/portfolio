# 🌟 Penumala Bindu — Full-Stack Developer Portfolio

[![CI](https://github.com/Bindu7729/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Bindu7729/portfolio/actions/workflows/ci.yml)
[![Tests](https://img.shields.io/badge/Vitest-Passing-brightgreen?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)
[![React 19](https://img.shields.io/badge/React-19.2.8-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, high-performance personal developer portfolio website designed to showcase professional engineering capabilities, technical skills, and featured software applications.

🌐 **Live Website**: [https://portfolio-lemon-omega-34.vercel.app/](https://portfolio-lemon-omega-34.vercel.app/)

---

## ✨ Key Highlights & Features

- **Premium Interactive UI**: Dark-themed, cut-paper and glassmorphic design system tailored with custom bezier animations, hover glow states, and micro-interactions powered by **Framer Motion**.
- **Modern Styling (Tailwind v4)**: Developed natively using the next-generation **Tailwind CSS v4** engine, with custom configurations and clean typography.
- **Dynamic Skills Showcase**: Interactive category grid showcasing technical domains (Languages, Frontend, Backend, Tools & DB) complete with custom SVG branding badges.
- **Featured Projects Section**: High-fidelity product cards illustrating technical highlights, tech stacks, and direct GitHub checkout actions.
- **Experience Timeline**: Detailed educational and internship log detailing enterprise workflows, automated testing frameworks, and full-stack software development.
- **Integrated Resume System**: Direct download triggers connecting recruiters to a professionally compiled PDF resume.
- **Fully Responsive Layout**: Optimally adapted across mobile, tablet, and widescreen layouts.

---

## 🚀 Featured Projects Showcased

1. **Ghostline — Private E2EE Communication Platform**
   - Secure peer-to-peer communication platform with real-time encrypted messaging and WebRTC audio/video calls.
   - *Tech*: React, TypeScript, TanStack Start, PostgreSQL, Supabase, WebRTC, Signal Protocol

2. **CodeVista — Interactive Code Visualizer**
   - Interactive Programming Visualization Platform supporting step-by-step trace animations of loops, variable scopes, and reference heaps.
   - *Tech*: React, TypeScript, Tailwind CSS, Node.js, Express, Vitest

3. **PrepSuite AI — Placement Preparation Platform**
   - Full-stack candidate evaluation platform replicating enterprise recruitment pipelines with coding sandboxes and recruitment tracking.
   - *Tech*: React, Tailwind CSS, Node.js, Express.js, MongoDB, JWT

4. **Student Dropout Risk Dashboard**
   - Predictive dashboard identifying at-risk students using performance analytics and attendance modeling with SHAP tree explainers.
   - *Tech*: Next.js, TypeScript, Python, FastAPI, Scikit-Learn, SHAP, PyTest

---

## 🧪 Testing & Quality Assurance

```bash
# Run unit tests
npm test

# Run tests in watch mode
npx vitest

# Build for production
npm run build
```

**Test Coverage Highlights:**
- **Schema Validation**: Verified credentials, GitHub profile links, and complete project feature sets.
- **Project Delimiters**: Multi-format title splitting (hyphens, en-dashes, em-dashes).
- **Contact Security**: Form input validation and sanitized mailto link generation.
- **Automated CI**: GitHub Actions workflow testing on every pull request and push to `main`.
