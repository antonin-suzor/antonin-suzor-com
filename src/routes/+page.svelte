<script lang="ts">
    import myPicture from '$lib/assets/pictures/antonin-suzor.jpg';

    interface Skill {
        name: string;
        logo: string;
    }

    const programmingSkills: Skill[] = [
        { name: 'Bash', logo: 'https://icon.icepanel.io/Technology/svg/Bash.svg' },
        { name: 'Rust', logo: 'https://icon.icepanel.io/Technology/svg/Rust.svg' },
        { name: 'Java', logo: 'https://icon.icepanel.io/Technology/svg/Java.svg' },
        { name: 'TypeScript', logo: 'https://icon.icepanel.io/Technology/svg/TypeScript.svg' },
        { name: 'Redis/Valkey', logo: 'https://icon.icepanel.io/Technology/svg/Redis.svg' },
        { name: 'Postgres/SQL', logo: 'https://icon.icepanel.io/Technology/svg/PostgresSQL.svg' },
        { name: 'Quarkus', logo: 'https://icon.icepanel.io/Technology/svg/Quarkus.svg' },
        { name: 'Express', logo: 'https://icon.icepanel.io/Technology/svg/Express.svg' },
        { name: 'NestJS', logo: 'https://icon.icepanel.io/Technology/svg/Nest.js.svg' },
        { name: 'React', logo: 'https://icon.icepanel.io/Technology/svg/React.svg' },
        { name: 'NextJS', logo: 'https://icon.icepanel.io/Technology/svg/Next.js.svg' },
        { name: 'SvelteKit', logo: 'https://icon.icepanel.io/Technology/svg/Svelte.svg' },
        { name: 'TailwindCSS', logo: 'https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg' },
        { name: 'Tauri', logo: 'https://icon.icepanel.io/Technology/svg/Tauri.svg' },
    ];

    const devopsSkills: Skill[] = [
        { name: 'GitHub/Actions', logo: 'https://icon.icepanel.io/Technology/svg/GitHub.svg' },
        { name: 'GitLab/CI', logo: 'https://icon.icepanel.io/Technology/svg/GitLab.svg' },
        { name: 'Docker/Compose', logo: 'https://icon.icepanel.io/Technology/svg/Docker.svg' },
        { name: 'K8s', logo: 'https://icon.icepanel.io/Technology/svg/Kubernetes.svg' },
        { name: 'Terraform', logo: 'https://icon.icepanel.io/Technology/svg/HashiCorp-Terraform.svg' },
        { name: 'AWS', logo: 'https://icon.icepanel.io/Technology/svg/AWS.svg' },
        { name: 'Cloudflare', logo: 'https://icon.icepanel.io/Technology/svg/Cloudflare.svg' },
    ];

    const otherSkills: Skill[] = [
        { name: 'Keycloak', logo: 'https://avatars.githubusercontent.com/u/4921466' },
        { name: 'Notion', logo: '/images/notion-logo.svg' },
        { name: 'Discord', logo: '/images/discord-logo.svg' },
    ];

    let progSkillsDiv: HTMLDivElement;
    let devopsSkillsDiv: HTMLDivElement;
    let otherSkillsDiv: HTMLDivElement;
    function scrollLeft(div: HTMLDivElement) {
        div.scrollBy({ left: -260, behavior: 'smooth' });
    }
    function scrollRight(div: HTMLDivElement) {
        div.scrollBy({ left: 260, behavior: 'smooth' });
    }
</script>

<svelte:head>
    <title>Antonin Suzor</title>
    <meta property="og:title" content="Antonin Suzor" />
    <meta name="description" content="Antonin Suzor's personal website" />
    <meta property="og:description" content="Antonin Suzor's personal website" />
    <meta property="og:image" content={myPicture} />
    <meta property="og:image:alt" content="Antonin Suzor" />
</svelte:head>

<section class="flex min-h-screen items-center px-2 py-12 sm:px-4 sm:py-16 lg:px-8">
    <div
        class="mx-auto grid items-center gap-4 p-4 sm:grid-cols-1 sm:gap-8 lg:grid-cols-[auto_2px_auto] lg:gap-16 lg:p-8"
    >
        <img
            class="max-h-[70vh] max-w-[85vw] rounded-full object-contain shadow-xl lg:w-full lg:max-w-xl"
            src={myPicture}
            alt="Antonin Suzor"
        />
        <div class="hidden lg:inline lg:h-68.75 lg:w-1 lg:bg-sv"></div>
        <div class="text-center">
            <h1
                class="justify-self-center font-title text-5xl leading-12 sm:text-6xl sm:leading-16 lg:text-7xl lg:leading-24"
            >
                Antonin Suzor
            </h1>
            <h2
                class="mt-2 mb-4 justify-self-center font-title text-2xl leading-6 sm:text-3xl sm:leading-8 lg:text-5xl lg:leading-16"
            >
                <span class="text-nowrap">Site reliability engineer</span>
                <span class="text-nowrap italic"
                    >@ <a
                        class="hover:underline"
                        href="https://www.theodo.com/en-fr/expertise/cloud"
                        target="_blank"
                        rel="noopener external">Theodo Cloud</a
                    ></span
                >
            </h2>
            <div class="mt-4 max-w-3xl justify-self-center font-main text-xl text-sv italic">
                Accompanying companies in their cloud migration and modernisation by providing them with a fast-paced,
                secure, and scalable platform for their IT.
            </div>
        </div>
    </div>
</section>

<section class="flex min-h-screen items-center bg-bg2 px-4 py-14 text-tx2 sm:px-6 sm:py-16 lg:px-8" id="me">
    <div class="mx-auto max-w-6xl p-12 text-center">
        <h2
            class="mt-2 mb-4 font-title text-3xl leading-8 underline decoration-2 underline-offset-2 sm:text-4xl sm:leading-16 lg:text-6xl"
        >
            Who Am I ?
        </h2>
        <p class="text-md mb-1 sm:mb-1.5 sm:text-xl">
            Born in 2004 in South-Eastern France (Aix-en-Provence), I moved to Paris for my studies. With a deep passion
            for <strong>software engineering</strong>, <strong>enterprise IT</strong>, and
            <strong>continuous improvement</strong>, I thrive on creating efficient and scalable
            <strong>solutions that gain the trust</strong> of teams, leaders, and executives.
        </p>
        <p class="text-md mb-1 sm:mb-1.5 sm:text-xl">
            I have the firm belief that <strong>technology can be and is a formidable tool</strong> that unlocks possibilities
            and drives the world forward.
        </p>
        <p class="text-md mb-1 sm:mb-1.5 sm:text-xl">
            The people around me, colleagues, clients, and friends, are what truly motivates me. I am guided by my
            values of <strong>honesty, respect, and excellence</strong>. I make it a point to meet high standards and
            exceed expectations.
        </p>
    </div>
</section>

<section class="flex min-h-screen items-center px-4 py-16" id="skills">
    <div class="mx-auto w-full max-w-300 rounded-2xl bg-white/10 p-4 shadow-2xl sm:p-12">
        <h2 class="mt-2 mb-4 text-center font-title text-3xl leading-8 sm:text-4xl sm:leading-16 lg:text-6xl">
            Technical Skills
        </h2>
        <div class="mb-8">
            <h3 class="mt-2 mb-4 font-title text-2xl md:text-3xl lg:text-4xl">Programming Languages & Frameworks</h3>
            <div class="flex items-center gap-2 justify-self-center">
                <button
                    class="h-9 w-6 flex-none rounded-full bg-white text-center hover:cursor-pointer hover:bg-pswhite"
                    onclick={() => scrollLeft(progSkillsDiv)}>&lt;</button
                >
                <div
                    bind:this={progSkillsDiv}
                    class="flex w-62.5 flex-none snap-x snap-mandatory justify-self-center overflow-x-scroll sm:w-125 sm:scroll-pl-5 lg:w-187.5 lg:scroll-pl-3.75 2xl:w-250 2xl:scroll-pl-2.5"
                >
                    {#each programmingSkills as skill (skill.name)}
                        <div
                            class="mx-7.5 my-4 flex w-50 shrink-0 snap-center flex-col items-center gap-2 rounded-lg bg-white p-1 shadow-lg sm:snap-start"
                        >
                            <img src={skill.logo} alt={skill.name} class="h-16 w-16 object-contain" />
                            <span class="text-sm text-nowrap sm:text-base">{skill.name}</span>
                        </div>
                    {/each}
                </div>
                <button
                    class="h-9 w-6 flex-none rounded-full bg-white text-center hover:cursor-pointer hover:bg-pswhite"
                    onclick={() => scrollRight(progSkillsDiv)}>&gt;</button
                >
            </div>
        </div>

        <div class="mb-8">
            <h3 class="mt-2 mb-4 font-title text-2xl md:text-3xl lg:text-4xl">Cloud & DevOps Tools</h3>
            <div class="flex items-center gap-2 justify-self-center">
                <button
                    class="h-9 w-6 flex-none rounded-full bg-white text-center hover:cursor-pointer hover:bg-pswhite"
                    onclick={() => scrollLeft(devopsSkillsDiv)}>&lt;</button
                >
                <div
                    bind:this={devopsSkillsDiv}
                    class="flex w-62.5 flex-none snap-x snap-mandatory justify-self-center overflow-x-scroll sm:w-125 sm:scroll-pl-5 lg:w-187.5 lg:scroll-pl-3.75 2xl:w-250 2xl:scroll-pl-2.5"
                >
                    {#each devopsSkills as skill (skill.name)}
                        <div
                            class="mx-7.5 my-4 flex w-50 shrink-0 snap-center flex-col items-center gap-2 rounded-lg bg-white p-1 shadow-lg sm:snap-start"
                        >
                            <img src={skill.logo} alt={skill.name} class="h-16 w-16 object-contain" />
                            <span class="text-sm text-nowrap sm:text-base">{skill.name}</span>
                        </div>
                    {/each}
                </div>
                <button
                    class="h-9 w-6 flex-none rounded-full bg-white text-center hover:cursor-pointer hover:bg-pswhite"
                    onclick={() => scrollRight(devopsSkillsDiv)}>&gt;</button
                >
            </div>
        </div>

        <div class="mb-8">
            <h3 class="mt-2 mb-4 font-title text-2xl md:text-3xl lg:text-4xl">Other Tools & Platforms</h3>
            <div class="flex items-center gap-2 justify-self-center">
                <button
                    class="h-9 w-6 flex-none rounded-full bg-white text-center hover:cursor-pointer hover:bg-pswhite"
                    onclick={() => scrollLeft(otherSkillsDiv)}>&lt;</button
                >
                <div
                    bind:this={otherSkillsDiv}
                    class="flex w-62.5 flex-none snap-x snap-mandatory justify-self-center overflow-x-scroll sm:w-125 sm:scroll-pl-5 lg:w-187.5 lg:scroll-pl-3.75 2xl:w-250 2xl:scroll-pl-2.5"
                >
                    {#each otherSkills as skill (skill.name)}
                        <div
                            class="mx-7.5 my-4 flex w-50 shrink-0 snap-center flex-col items-center gap-2 rounded-lg bg-white p-1 shadow-lg sm:snap-start"
                        >
                            <img src={skill.logo} alt={skill.name} class="h-16 w-16 object-contain" />
                            <span class="text-sm text-nowrap sm:text-base">{skill.name}</span>
                        </div>
                    {/each}
                </div>
                <button
                    class="h-9 w-6 flex-none rounded-full bg-white text-center hover:cursor-pointer hover:bg-pswhite"
                    onclick={() => scrollRight(otherSkillsDiv)}>&gt;</button
                >
            </div>
        </div>
    </div>
</section>

<section class="flex min-h-screen items-center bg-bg2 px-4 py-14 text-tx2 sm:px-6 sm:py-16 lg:px-8" id="hobbies">
    <div class="mx-auto w-6xl p-12 text-center">
        <h2
            class="mt-2 mb-4 font-title text-3xl leading-8 underline decoration-2 underline-offset-2 sm:text-4xl sm:leading-16 lg:text-6xl"
        >
            Outside of work
        </h2>
        <div class="mb-6 max-w-4xl text-left">
            <h3 class="mt-2 mb-4 font-title text-2xl md:text-3xl lg:text-4xl">Tech and Software enthusiast</h3>
            <p class="text-md mb-1 sm:mb-1.5 sm:text-xl">
                <strong>Even outside of my work, I tinker around with software or platforms</strong> to gain extra experience,
                and I try to be in touch with the latest trends and innovations in the software development world.
            </p>
            <p class="text-md mb-1 sm:mb-1.5 sm:text-xl">
                I also try to keep up with and <strong
                    >analyse the different moves made by the companies I work with</strong
                > and their competitors, to always be on the forefront of change.
            </p>
            <p class="text-md mb-1 sm:mb-1.5 sm:text-xl">
                I'm ever so <strong
                    >fond of learning new things or discussing about software and platform architecture</strong
                >, and believe that by sharing ideas and debating, we come out with better understanding that we can
                then apply in real-world scenarios.
            </p>
        </div>
        <div class="mt-6 max-w-4xl justify-self-end text-right">
            <h3 class="mt-2 mb-4 font-title text-2xl md:text-3xl lg:text-4xl">D&D Game Master</h3>
            <p class="text-md mb-1 sm:mb-1.5 sm:text-xl">
                <strong>I've ran D&D campaigns for 3 years</strong> combined, with multiple tables, at school, among friends,
                or at associations.
            </p>
            <p class="text-md mb-1 sm:mb-1.5 sm:text-xl">
                Building immersive worlds for my players, <strong
                    >feeding from and into their different playstyles and imaginations</strong
                >, and creating emotions and group cohesion has been such a blast.
            </p>
            <p class="text-md mb-1 sm:mb-1.5 sm:text-xl">
                <strong>I've currently taken a break from being a GM</strong>, as it is demanding in terms of time and
                energy, but I still want to go back to TTRPGs someday.
            </p>
        </div>
    </div>
</section>

<section class="flex min-h-screen items-center px-4 py-14 sm:px-6 sm:py-16 lg:px-8" id="contact">
    <div class="mx-auto max-w-4xl rounded-2xl bg-white/10 p-12 text-center shadow-2xl">
        <h2 class="mt-2 mb-4 font-title text-3xl leading-8 sm:text-4xl sm:leading-16 lg:text-6xl">Let's Talk !</h2>
        <p class="text-md mb-1 sm:mb-1.5 sm:text-xl">
            Are you a company looking to hire ? An organization seeking technical expertise and/or services ? An
            individual with a project or questions ?
        </p>
        <p class="text-md mb-1 sm:mb-1.5 sm:text-xl">
            If you answered "yes" to any of these, feel free to contact me. And if you didn't, go ahead as well. After
            all, what's the worse that could happen ?
        </p>
        <div class="mt-8 justify-center gap-4">
            <a
                href="mailto:antonin@suzor.net"
                class="text-md rounded-md border-2 border-transparent bg-pswhite px-2 py-4 font-bold tracking-wide text-sv uppercase transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-sv hover:shadow-xl sm:px-4 sm:text-lg lg:px-8 lg:text-xl"
                target="_blank"
                rel="me">Send me an email</a
            >
        </div>
    </div>
</section>
