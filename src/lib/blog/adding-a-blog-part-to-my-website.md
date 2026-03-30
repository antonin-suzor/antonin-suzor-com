---
title: Adding a blog part to my website
description: Exploring the process I followed and the tech I used to build a blog, including SvelteKit, TailwindCSS, Sveltia, marked, highlight.js, and other libraries.
thumbnail: ''
thumbnail_alt: ''
created_at: 2026-03-22
updated_at: 2026-03-30
---

The PR discussed in this article is here: https://github.com/antonin-suzor/antonin-suzor-com/pull/4

## Why

I wanted a way to share what I do in my life, be it tech or other stuff. And I had this "website" which was really just a single page that presents who I am.
And I more and more find that much knowledge can be found in various blogs on the internet. Although it might seem weird in this age of AI, but I find that human-written text can carry more focus, more intent, and overall more weight that what LLMs generate (although that's VERY useful too, of course).

So naturally, I wanted to extend my current website with a blog part.

## What's in a blog

When creating a blog, three needs arise:

1. Writing the content
2. Integrate the content to the website
3. Publishing the website

Thankfully, that last part was already figured out. This website's GitHub repo is linked to Cloudflare Pages, so every push on every branch will create a new deployment (and pushes on the main branch go to prod).

For the other parts, I had 2 options: either write full svelte pages and add them to my website, or figure out how to use a CMS (Content Management System) and wire up various npm packages to automate this.

The first option is the simpler by far, so I tried it. And it worked, but I found that I was writing a lot of boilerplate for a single article, and having to redo it for every article sounded tiring.  Also, I didn't find a good solution to handle article metadata: I had to either copy-paste stuff around, which can be error-prone, or write a JSON file per article, then import it... It wasn't clean. It worked, but it felt haphazard.

The second option involves finding synergies between various libraries, wiring them up, and (theoretically)  enjoy the ride. The idea is that creating a blog is a widespread and well-known use-case, so other people have probably engineered solutions to smooth the process. You use a CMS to handle the "write the content" part, and fan out the "integration to the website" part to various npm packages that each bring you closer to your goal.

## What I use

So what did I end up using to build this blog ?

### The CMS

For CMS, the historical player is Decap (formerly Netlify CMS). But git-gateway (the way they connect to your code repository) isn't maintained anymore, and it was too much trouble. However, I noticed a piece of software that quickly grabbed my attention: Sveltia CMS.

It presented itself as the successor to Decap, with better UX, active development, easy setup, and coded in Svelte my beloved. So I went for that, writing the config and setting up the authentication to GitHub via a provided Cloudflare Worker (having the same tech stack gave me confidence that Sveltia would integrate well with my website).

That quickly allowed me to have a great experience for actually writing stuff while focusing on the content, not on HTML syntax.

### The packages

Sveltia gave me markdown for the content + frontmatter for the metadata as output, which is very much a standard way to do it. That meant that there were a lot of npm packages that I could use to tinker around and make this the best experience possible. Here's a list:

- `gray-matter` : parses the frontmatter metadata from the `.md` files
- `marked` : parses the mardown into HTML
- `@tailwincss/typography` : automates the styling of the HTML content
- `marked-gfm-heading-id` : automates the table of contents and link anchors
- `marked-hightlight` : integrates `highlight.js` with `marked`
- `highlight.js` : handles syntax highlighting on code blocks (although there's none in this post)
- `highlight.svelte` and probably others in the future : bring language-specific code highlighting

All of this allows me to have fully automated rendering with every option that I wanted, directly from the Sveltia's output.

### The rest

What was left was relatively straight-forward.
To ensure that I could still render the whole website at build time, I played around with SvelteKit to find how to tell it in advance what it needed to render.
And to make sure that my website wouldn't be broken for anyone, I spent some time writing responsiveness rules in TailwindCSS, which is still my greatest ally for anything ui-related.

## Looking ahead

Now, I just need to find things to say that are interesting enough to write about. The pipeline has been fully automated.
Though I think I already have a few potential topics. Looking forward to exploring those.

If you've made it here, thank you for reading this. I hope you learned a few things, maybe this helped you set up your own blog.
If you have any inquiries, feel free to hit me up however you like.

Follow-up article: https://antonin-suzor.com/blog/i-bloated-my-bundle-size-then-shrunk-it-back
