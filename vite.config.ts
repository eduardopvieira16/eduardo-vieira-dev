import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
  server: {
    host: '::',
    port: 8080,
  },
  // base: "/eduardo-dev",
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
