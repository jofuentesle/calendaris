import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify'; // Cambiamos a Netlify
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import astroIcon from 'astro-icon';

import astrowind from './vendor/integration';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuración para Netlify
export default defineConfig({
  output: 'static',  // Cambiado a 'static' para Netlify
  adapter: netlify(), // Usamos el adaptador de Netlify
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    astroIcon({
      collections: {
        tabler: () => import('@iconify-json/tabler/icons.json'),
      },
    }),
    sitemap(), // Genera el sitemap automáticamente para SEO
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),
    partytown({
      config: { forward: ['dataLayer.push'] },
    }),
    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: true,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),
    astrowind({
      config: './src/config.yaml',
    }),
  ],

  image: {
    domains: ['cdn.pixabay.com'],
  },

  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
