import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'; 

const SITE_URL = 'https://elixirbiotech.co.ke'; 

export default defineConfig({
  plugins: [
    react(),
    
    // Layer 4: Sitemap (Kept - this works!)
    sitemap({
      hostname: SITE_URL,
      dynamicRoutes: ['/', '/about', '/products', '/contact'],
    }),

    // ❌ REMOVED: vite-plugin-prerender 
    // Reason: It is incompatible with "type": "module" and crashes the dev server.
  ],
})