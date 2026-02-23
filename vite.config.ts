import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    // For custom domain (opexguard.co.il), base is '/'
    // For GitHub Pages without custom domain, use '/Landing-Page/'
    base: '/',
})
