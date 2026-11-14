import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const standaloneHtmlPlugin = () => ({
  name: 'standalone-html',
  transformIndexHtml(html) {
    return html
      .replace(/<script type="module" crossorigin src="([^"]+)"><\/script>/g, '<script defer src="$1"></script>')
      .replace(/<link rel="stylesheet" crossorigin href="([^"]+)">/g, '<link rel="stylesheet" href="$1">')
  }
})

export default defineConfig({
  plugins: [react(), standaloneHtmlPlugin()],
  base: './',
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: 'iife',
        inlineDynamicImports: true,
        entryFileNames: 'assets/app.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/style.css';
          }
          return 'assets/[name][extname]';
        }
      }
    }
  }
})
