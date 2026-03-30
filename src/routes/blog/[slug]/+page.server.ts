import { getPostBySlug, getAllPosts } from '$lib/blog/helpers.server';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import { gfmHeadingId, getHeadingList } from 'marked-gfm-heading-id';

import hljs from 'highlight.js/lib/core'; // only the engine, add the languages manually
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import plaintext from 'highlight.js/lib/languages/plaintext';
import svelte from 'highlight.svelte'; // also needs javascript/typescript/html, optionally css

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('plaintext', plaintext);
hljs.registerLanguage('svelte', svelte);

const marked = new Marked(
    markedHighlight({
        emptyLangClass: 'hljs',
        langPrefix: 'hljs language-',
        highlight(code, lang, info) {
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, { language }).value;
        },
    })
);
marked.use({ async: false, breaks: true, gfm: true }, gfmHeadingId(), {
    hooks: {
        postprocess(html) {
            const headings = getHeadingList();
            if (headings.length === 0) {
                return html;
            }
            return `<h3 id="table-of-contents">Table of contents</h3>
                    <ul>
                    ${headings.map(({ id, raw, level }) => `<li><a href="#${id}">${raw}</a></li>`).join('')}
                    </ul>
                    ${html}`;
        },
    },
});

export const prerender = true;

export function entries() {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function load({ params }) {
    const { slug } = params;
    const post = getPostBySlug(slug);
    post.content = await marked.parse(post.content);
    return { post };
}
