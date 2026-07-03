import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import devtoolsJson from 'vite-plugin-devtools-json';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://www.antonin-suzor.com',
    output: 'static',
    trailingSlash: 'always',
    integrations: [sitemap()],
    vite: {
        plugins: [tailwindcss(), devtoolsJson()],
        server: {
            allowedHosts: true,
        },
    },
});
