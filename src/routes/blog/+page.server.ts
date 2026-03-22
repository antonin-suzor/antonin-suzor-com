import { getAllPosts } from '$lib/blog/helpers.server';

export const prerender = true;

export function load() {
    const posts = getAllPosts();
    return { posts };
}
