import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Diperlukan agar aset ter-load benar saat di-host di GitHub Pages
  // (URL: https://parkolazstore.github.io/ngopi-with-intan/)
  base: '/ngopi-with-intan/',
  plugins: [react(), tailwindcss()],
})
