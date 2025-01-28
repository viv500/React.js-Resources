import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// importing tailwind
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // add tailwind to the array
  plugins: [react(), tailwindcss(),],
})
