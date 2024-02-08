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
    routes: [
        {
            // ルートパスの設定
            path: '/CV/',
            // ページコンポーネントの設定
            component: './src/pages/index.astro'
        },
        {
            // プロダクトページのパスの設定
            path: '/CV/products/',
            // ページコンポーネントの設定
            component: './src/pages/products/index.astro'
        },
    ],
    vite: {
        resolve: {
            alias: {
                '@/': `${path.resolve(__dirname, 'src')}/`
            }
        }
    }
});
