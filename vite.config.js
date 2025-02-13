import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    origin: 'https://hrm-fe.dboss.pk',
    cors: {
      origin: 'https://hrms.dboss.pk',
      credentials: true 
    }
  },
  preview: {
    origin: 'https://hrm-fe.dboss.pk'
  }
})
