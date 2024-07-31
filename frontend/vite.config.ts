import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  plugins: [react(), vue()],
  server: {
    // host: "192.168.244.167",
    port: 5173,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
