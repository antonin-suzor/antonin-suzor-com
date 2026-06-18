import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import devtoolsJson from 'vite-plugin-devtools-json';

export default defineConfig({
    site: 'https://www.antonin-suzor.com',
    output: 'static',
    trailingSlash: 'always',
    i18n: {
        locales: ['en', 'fr'],
        defaultLocale: 'en',
        routing: {
            prefixDefaultLocale: false,
        },
    },
    vite: {
        plugins: [tailwindcss(), devtoolsJson()],
        server: {
            allowedHosts: true,
        },
    },
});
