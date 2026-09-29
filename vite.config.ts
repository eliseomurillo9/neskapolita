import {defineConfig} from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
import {ViteImageOptimizer} from 'vite-plugin-image-optimizer';

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

const inlineCss = () => ({
    name: 'inline-css',
    enforce: 'post' as const,
    transformIndexHtml(html, ctx) {
        let cssCode = '';
        for (const key in ctx.bundle) {
            if (key.endsWith('.css') && ctx.bundle[key].type === 'asset') {
                cssCode += ctx.bundle[key].source;
                delete ctx.bundle[key];
            }
        }
        html = html.replace(/<link[^>]*?rel="stylesheet"[^>]*?href="[^"]*?\.css"[^>]*?>/g, '');
        if (cssCode) {
            html = html.replace('</head>', `<style>${cssCode}</style>\n</head>`);
        }
        return html;
    }
});

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
      inlineCss(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    Sitemap({ hostname: 'https://neskapolita.com', dynamicRoutes: ['/', '/ruta', '/rooms'] }),
      ViteImageOptimizer({
          png: {
              quality: 80,
          },
          jpeg: {
              quality: 80,
          },
          jpg: {
              quality: 80,
          },
          webp: {
              quality: 80,
          },
      }),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
