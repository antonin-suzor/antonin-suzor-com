---
title: I bloated my bundle size then shrunk it back
description: Or the classic "oops my javascript dependencies are being unnecessarily sent to the client".
thumbnail: ''
thumbnail_alt: ''
created_at: 2026-03-30
updated_at: ''
---

The PR discussed in this article is here: https://github.com/antonin-suzor/antonin-suzor-com/pull/5

## What's a bundle size ?

Different people will give different answers to this, but the definition I would use is as follows: the bundle size is the amount of data that is sent to the client's browser, not counting the actual data that is going to be processed or displayed.

So, any javascript, css, fonts, or WASM would count as part of the bundle, but not the HTML, images, or applicative data.
Bundle size is important, because if it's too large, it can delay the moment that a web page is displayed to a user (especially on lower-grade internet connection), and it increases bandwidth usage (which can be an ecological issue and a eoconomical issue).

People are increasingly aware of that fact, especially with our modern web frameworks that ship a lot of code to the client. That's part of why frameworks like [Astro](https://astro.build/) or initiatives like [e18e](https://e18e.dev/) were created.

## My mistake

When I added this blog to this website (more detailed article [here](https://antonin-suzor.com/blog/adding-a-blog-part-to-my-website/)), I had to implement logic to render the markdown files in a proper way. I made sure to not import every language possible into the highlighting config, and I used static pre-rendering to export every page to a static HTML file that already included the correctly rendered blog posts.
All of that is good.

But I did make a mistake: the logic that transformed markdown into HTML with nice styling was present in the page's logic. I did not specify that I was supposed to only run on the server (which, in our case, means at build-time).

So naturally, SvelteKit (the framework I use for this website) did what I told it to do: when someone navigates to a blog post, the markdown should be parsed, styled, post-processed, and then displayed. And to do that, some libraries need to be bundled and shipped to the client's browser.

So the bundle size, which was at **104KB** of data before, was now at **233KB**. That's almost a **125% increase** !
And yes, I was (and still am) honestly shocked that this website is that large. SvelteKit's runtime is leaner that that of other frameworks, but it's still a few dozens of kilobytes at the minimum.

## The easy fix (this time)

Luckily, the fix was easy. Simply migrate the rendering logic from the \`+page.svelte\` file to the \`+page.server.ts\` file, update the data passed in from the server to the page, and we're good to go.
While at it, migrate the libraries from standard dependencies to developer dependencies, so that they can only be used while developing and at build-time, where they were supposed to go anyway.

With that, I successfully shrunk back my bundle size from 233KB back to **145KB**. A **38% decrease**, for a total **39% increase** compared to before the blog was a thing. The extra code probably comes from every need that arises from shallow routing (client-side navigation), though I'm not entirely certain.

Hopefully, this new blog post won't increase the bundle size by that much.
