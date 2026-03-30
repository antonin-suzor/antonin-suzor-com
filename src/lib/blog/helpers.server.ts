import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.resolve('src/lib/blog');

export type PostMeta = {
    title: string;
    description: string;
    created_at: string;
    updated_at?: string;
    thumbnail?: string;
    thumbnail_alt?: string;
};
export type Post = {
    slug: string;
    meta: PostMeta;
    content: string;
};

export function getAllPosts(): Omit<Post, 'content'>[] {
    return fs
        .readdirSync(postsDir)
        .filter((filename) => filename.match(/[a-z-]*\.md/))
        .map((filename) => {
            const filePath = path.join(postsDir, filename);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const { data, content } = matter(fileContent);
            return {
                slug: filename.replace('.md', ''),
                meta: data as PostMeta,
            };
        })
        .sort((a, b) => new Date(b.meta.created_at).getTime() - new Date(a.meta.created_at).getTime());
}

export function getPostBySlug(slug: string): Post {
    const filePath = path.join(postsDir, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    return { slug, meta: data as PostMeta, content };
}
