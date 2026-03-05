 Developer Portfolio (2025–2026)

A production-ready, highly interactive developer portfolio built with Next.js 15, Tailwind CSS v4, and Framer Motion v11.

## 🚀 Key Features

- **Next.js 15 (App Router)**: Optimized performance and SEO.
- **Tailwind CSS v4**: Modern design system using CSS variables and theme blocks.
- **Framer Motion v11**: High-fidelity scroll animations, magnetic buttons, and 3D hover effects.
- **GitHub Live Stats**: Real-time integration with GitHub REST API.
- **Glassmorphism UI**: Luxurious dark mode aesthetic with deep depth and noise textures.
- **Responsive & Accessible**: Fully optimized for all device sizes and screen readers.

## 🛠️ Getting Started

1. **Clone and Install**:
```bash
git clone <your-repo>
cd <your-folder>
npm install
```

2. **Configure GitHub**:
   Update your GitHub username in `src/lib/github.ts`:
```typescript
const GITHUB_USERNAME = "yourusername";
```

3. **Customize Content**:
   All portfolio content is centralized in `src/lib/data.ts`. Modify this file to reflect your own information, projects, and experience.

4. **Environment Variables**:
   (Optional) If you want to use the Resend API for the contact form, add `RESEND_API_KEY` to your `.env.local`.

5. **Run Locally**:
```bash
npm run dev
```

6. **Build for Production**:
```bash
npm run build
```

## 📦 Project Structure

- `/components/ui`: Core design system primitives.
- `/components/sections`: Individual page sections (Hero, About, etc.).
- `/lib/data.ts`: Centralized content store.
- `/types`: TypeScript interfaces.
- `/styles`: Global CSS and Tailwind theme.

## 🚀 Deployment

Optimized for **Vercel**. Simply connect your GitHub repository and deploy. Ensure you add any necessary environment variables in the Vercel dashboard.

---
Built with ♥ by [prashu yadav](https://prasannakumar.dev)
