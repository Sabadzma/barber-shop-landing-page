// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { conlocaCMS } from '@conloca/astro-cms/node';
import { conlocaCloud } from '@conloca/cloud-astro';
import { schemaTypia } from './typia-vite.mjs';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    react(),
    conlocaCMS({
      contentRoot: './content',
      canvasDir: './canvas',
      puckConfigPath: './src/puck.config.tsx',
      schemasPath: './src/schemas/data.ts',
      assetsPath: './public/assets',
      siteStyles: './src/styles/globals.css',
      templates: {
        blogPost: {
          label: 'Blog Post',
          component: 'ContentFragmentSection',
          pathPrefix: '/blog/',
          description: 'Article page — header from Page settings, body from a content fragment',
        },
      },
      routing: {
        routes: {
          // One catch-all over the `pages` collection serves home AND posts
          // (content/default/pages/blog/<slug>). A second dynamic route is not
          // viable on 0.2.1: every injected route shares one getStaticPaths,
          // and Astro re-keys each entry under the serving route's pattern —
          // entries whose params were computed for a different pattern name
          // collide at the pattern's root URL (a post shadowed '/').
          pages: {
            pattern: '/[...page]',
            collection: 'pages',
            layout: './src/layouts/BaseLayout.astro',
            dataBindings: {
              collections: ['barbers'],
              pages: { prefix: '/blog/', sort: 'date-desc', limit: 3 },
            },
          },
        },
        fallback: '404',
        siteName: 'default',
        locale: 'en',
      },
    }),
    conlocaCloud({
      endpoint: 'https://app.conloca.com',
      puckConfigPath: './src/puck.config.tsx',
      siteStyles: './src/styles/globals.css',
    }),
  ],
  vite: {
    // schemaTypia generates the validators and form metadata src/schemas/data.ts declares.
    plugins: [tailwindcss(), ...schemaTypia()],
  },
});
