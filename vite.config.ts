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
                configure: (proxy, _options) => {
                  proxy.on("error", (err, _req, _res) => {
                    console.log("proxy error", err);
                  });
                  proxy.on("proxyReq", async (proxyReq, req, _res) => {
             
                    const requestBody = await getPostData(req);
                    console.log("requestBody", requestBody);
                    console.log(
                      "Sending Request:",
                      req.method,
                      req.url,
                      " => TO THE TARGET =>  ",
                      proxyReq.method,
                      proxyReq.protocol,
                      proxyReq.host,
                      proxyReq.path,
                      JSON.stringify(proxyReq.getHeaders()),
                    );
                  });
                  proxy.on("proxyRes", (proxyRes, req, _res) => {
                    console.log(
                      "Received Response from the Target:",
                      proxyRes.statusCode,
                      req.url,
                      JSON.stringify(proxyRes.headers),
                    );
                  });
                },
            },
            "^/climb/.*": {
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
