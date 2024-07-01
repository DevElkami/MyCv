import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({    
    server: {        
        proxy: {
            "https://develkami.github.io/blog": {
                target: "https://blog.elkami.fr/feed",
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path = "https://blog.elkami.fr/feed",
            },
            "/climb": {
                target: "https://climb.elkami.fr/feed",
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path = "https://climb.elkami.fr/feed",
            },
        },
    },
    plugins: [react()],
    base: '/MyCv/'    
})
