import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // base: '/graduate_page/',    
  server: {
    port: 3000
  }
})