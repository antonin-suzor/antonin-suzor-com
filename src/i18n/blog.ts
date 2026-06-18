import type { Lang } from './ui';

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    content: string;
}

const postsByLang: Record<Lang, BlogPost[]> = {
    en: [
        {
            slug: 'post-1',
            title: 'Post 1',
            description: 'First blog post.',
            content: 'Welcome to the blog.',
        },
    ],
    fr: [
        {
            slug: 'post-1',
            title: 'Article 1',
            description: 'Premier article du blog.',
            content: 'Bienvenue sur le blog.',
        },
    ],
};

export function getPosts(lang: Lang): BlogPost[] {
    return postsByLang[lang];
}

export function getPost(lang: Lang, slug: string): BlogPost | undefined {
    return getPosts(lang).find((post) => post.slug === slug);
}
