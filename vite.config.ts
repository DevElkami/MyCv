import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({    
    server: {        
        proxy: {
            "^/blog/.*": {
                target: "https://blog.elkami.fr/feed",
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/blog/, ''),
            },
            "^/climb/.*": {
                target: "https://climb.elkami.fr/feed",
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/climb/, ''),
            },
            "^/MyCv/.*": {
                target: "https://climb.elkami.fr/feed",
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/climb/, ''),
            },
        },
    },
    plugins: [react()],
    base: '/MyCv/'    
})
