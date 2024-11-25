import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';  // Import tailwindcss using import
import autoprefixer from 'autoprefixer';  // Import autoprefixer using import
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression()],
  base: './',
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],  // Use the imported modules here
    },
  },
  build: {
    outDir: 'build', // Change output directory to 'build'
  },

});
