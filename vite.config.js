import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [ vue() ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        lib: {
            entry: "./src/LoaderPlugin.js",
            formats: [ "es", "cjs" ],
            name: "LoaderPlugin",
            fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
        },
        rollupOptions: {
            cssCodeSplit: false,
            external: [ "vue" ],
            output: {
                globals: {
                    vue: "Vue",
                },
            },
        },
    }
})
