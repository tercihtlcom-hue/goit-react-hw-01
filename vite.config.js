import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/goit-react-hw-01/', // https://github.com/tercihtlcom-hue/goit-react-hw-01
})