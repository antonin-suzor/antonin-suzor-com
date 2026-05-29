import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import devtoolsJson from 'vite-plugin-devtools-json';

export default defineConfig({
    output: 'static',
    trailingSlash: 'always',
    vite: {
        plugins: [tailwindcss(), devtoolsJson()],
        server: {
            allowedHosts: true,
        },
    },
});
