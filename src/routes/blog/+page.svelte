<script lang="ts">
    import myPicture from '$lib/assets/pictures/antonin-suzor.jpg';
    let { data } = $props();
</script>

<svelte:head>
    <title>Blog Posts | Antonin Suzor</title>
    <meta property="og:title" content="Blog Posts | Antonin Suzor" />
    <meta name="description" content="Antonin Suzor's blog posts" />
    <meta property="og:description" content="Antonin Suzor's blog posts" />
    <meta property="og:image" content={myPicture} />
    <meta property="og:image:alt" content="Antonin Suzor" />
</svelte:head>

<div class="mx-auto max-w-80 p-1 sm:max-w-150 sm:p-2 lg:max-w-200 lg:p-4 2xl:max-w-275 2xl:p-8">
    <div class="mx-2 my-1 sm:mx-4 sm:my-2 lg:mx-8 lg:my-4 2xl:mx-16 2xl:my-8">
        <h1 class="pt-1 pb-2 font-title text-4xl sm:text-5xl lg:text-6xl">Blog posts</h1>
        <p class="text-lg lg:text-xl">Here be stuff I wrote.</p>
    </div>
    <ul class="posts-grid grid grid-cols-1 gap-4 justify-self-center sm:grid-cols-2">
        {#each data.posts as post}
            <li
                class="flex max-w-80 flex-col rounded-xl border-2 border-transparent bg-white/10 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-tx2 hover:shadow-lg lg:max-w-100"
            >
                <a href={`/blog/${post.slug}`} aria-label={post.meta.title} class="flex grow flex-col">
                    {#if post.meta.thumbnail}
                        <img
                            class="max-h-50 rounded-xl bg-white object-cover lg:max-h-60"
                            src={post.meta.thumbnail}
                            alt={post.meta.thumbnail_alt ?? `Thumbnail for ${post.meta.title}`}
                        />
                    {/if}
                    <div class="flex grow flex-col px-2 py-1">
                        <h3 class="sm:text-lg lg:text-xl">{post.meta.title}</h3>
                        <div class="grow"></div>
                        <div class="mt-1 text-right text-xs text-psgrey sm:text-sm">
                            {new Date(post.meta.created_at).toDateString()}
                        </div>
                    </div>
                </a>
            </li>
        {/each}
    </ul>
</div>
