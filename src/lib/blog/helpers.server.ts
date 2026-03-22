import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.resolve('src/lib/blog');

export interface PostMeta {
    title: string;
    description: string;
    created_at: string;
    updated_at?: string;
    thumbnail?: string;
    thumbnail_alt?: string;
}
export interface Post {
    slug: string;
    meta: PostMeta;
    content: string;
}

export function getAllPosts(): Post[] {
    return fs
        .readdirSync(postsDir)
        .filter((file) => file.endsWith('.md'))
        .map((file) => {
            const filePath = path.join(postsDir, file);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const { data, content } = matter(fileContent);
            return {
                slug: file.replace('.md', ''),
                meta: data as PostMeta,
                content,
            } as Post;
        })
        .sort((a, b) => new Date(b.meta.created_at).getTime() - new Date(a.meta.created_at).getTime());
}

export function getPostBySlug(slug: string): Post {
    const filePath = path.join(postsDir, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    return { slug, meta: data as PostMeta, content };
}
