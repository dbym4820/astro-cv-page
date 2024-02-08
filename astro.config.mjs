import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://dbym4820.org',
	integrations: [mdx(), sitemap()],
    server: {
        host: true,
    },
    base: '/CV/',
    vite: {
        resolve: {
            alias: {
                '@/': `${path.resolve(__dirname, 'src')}/`
            }
        }
    }
});
