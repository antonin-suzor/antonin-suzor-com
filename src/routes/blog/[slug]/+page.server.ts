import { getPostBySlug, getAllPosts } from '$lib/blog/helpers.server';

export const prerender = true;

export function entries() {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function load({ params }) {
    const { slug } = params;
    const post = getPostBySlug(slug);
    return { post };
}
