import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// VERCEL deploys from root — no base needed.
// GITHUB PAGES serves from /amey-portfolio-webpage/ — set via env var.
// In package.json scripts:
//   "build:gh" : "VITE_BASE=/amey-portfolio-webpage/ vite build"
// Vercel just runs "vite build" (base = '/').
const base = process.env.VITE_BASE ?? '/'

export default defineConfig({
  plugins: [react()],
  base,
})
