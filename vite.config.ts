import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({    
    server: {
        proxy: {
            "/blog/": {
                target: "https://blog.elkami.fr",
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/blog/, "https://blog.elkami.fr/feed"),
            },
            "/climb/": {
                target: "https://climb.elkami.fr",
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/climb/, "https://climb.elkami.fr/feed"),
            },
        },
    },
    plugins: [react()]
})
