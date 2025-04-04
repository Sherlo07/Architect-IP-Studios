import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/api": "http://localhost:3000/",
  },
  },
  plugins: [  TanStackRouterVite({ target: 'react', autoCodeSplitting: true }), tailwindcss(),react()],
  
})
