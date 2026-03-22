<script lang="ts">
    import { Marked } from 'marked';
    import { markedHighlight } from 'marked-highlight';
    import { gfmHeadingId, getHeadingList } from 'marked-gfm-heading-id';

    import hljs from 'highlight.js/lib/core'; // only the engine, add the languages manually
    import javascript from 'highlight.js/lib/languages/javascript';
    import typescript from 'highlight.js/lib/languages/typescript';
    import xml from 'highlight.js/lib/languages/xml';
    import plaintext from 'highlight.js/lib/languages/plaintext';
    import svelte from 'highlight.svelte'; // also needs javascript/typescript/html, optionally css

    import 'highlight.js/styles/a11y-dark.css';

    let { data } = $props();

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
</script>

<svelte:head>
    <title>{data.post.meta.title} | Antonin Suzor</title>
    <meta property="og:title" content={data.post.meta.title} />
    <meta name="description" content={data.post.meta.description} />
    <meta property="og:description" content={data.post.meta.description} />
    {#if data.post.meta.thumbnail}
        <meta property="og:image" content={data.post.meta.thumbnail} />
        {#if data.post.meta.thumbnail_alt}
            <meta property="og:image:alt" content={data.post.meta.thumbnail_alt} />
        {/if}
    {/if}
    <meta property="og:article:published_time" content={data.post.meta.created_at} />
    {#if data.post.meta.updated_at}
        <meta property="og:article:modified_time" content={data.post.meta.updated_at} />
    {/if}
</svelte:head>

<article
    class="mx-auto prose prose-sm max-w-80 p-1 prose-custom sm:max-w-150 sm:p-2 lg:max-w-200 lg:p-4 2xl:prose-lg 2xl:max-w-275 2xl:p-8 prose-headings:font-title"
>
    <header>
        <h1 class="text-tx1" id={data.post.slug}>{data.post.meta.title}</h1>
        <h4 class="not-prose mb-2 text-lg 2xl:mb-4 2xl:text-xl">{data.post.meta.description}</h4>
        <div class="text-right text-sm text-psgrey">
            Written on: <time datetime={data.post.meta.created_at}
                >{new Date(data.post.meta.created_at).toDateString()}</time
            >
        </div>
        {#if data.post.meta.updated_at}
            <div class="text-right text-sm text-psgrey">
                Last edit on: <time datetime={data.post.meta.updated_at}
                    >{new Date(data.post.meta.updated_at).toDateString()}</time
                >
            </div>
        {/if}
        {#if data.post.meta.thumbnail}
            <img
                src={data.post.meta.thumbnail}
                alt={data.post.meta.thumbnail_alt ?? 'Thumbnail for this post'}
                class="max-h-40 w-70 justify-self-center rounded bg-white object-cover sm:max-h-80 sm:w-140 lg:max-h-100 lg:w-180 2xl:max-h-140 2xl:w-260"
            />
        {/if}
    </header>
    {@html marked.parse(data.post.content)}
</article>
