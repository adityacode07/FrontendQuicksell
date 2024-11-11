import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr() // Add this to handle SVG imports as React components
  ],
  // Optional: Add any additional settings here
  assetsInclude: ['**/*.svg'] // Allow Vite to treat SVGs as assets if needed
});
