import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
const srcPath = resolve(__dirname, 'src')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/': `${srcPath}/`
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        
      }
    }
  }
})
