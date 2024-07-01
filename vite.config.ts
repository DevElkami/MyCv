import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({    
    server: {
        proxy: {
            "/MyCv/blog/": {
                target: "https://blog.elkami.fr",
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/MyCv\/blog/, "https://blog.elkami.fr/feed"),
            },
            "/MyCv/climb/": {
                target: "https://climb.elkami.fr",
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/MyCv\/climb/, "https://climb.elkami.fr/feed"),
            },
        },
    },
    plugins: [react()],
    base: '/MyCv/'    
})
