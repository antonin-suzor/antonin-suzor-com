<script lang="ts">
    interface Skill {
        name: string;
        logo: string;
    }

    const programmingSkills: Skill[] = [
        { name: 'Bash', logo: 'https://icon.icepanel.io/Technology/svg/Bash.svg' },
        { name: 'C', logo: 'https://icon.icepanel.io/Technology/svg/C.svg' },
        { name: 'Rust', logo: 'https://icon.icepanel.io/Technology/svg/Rust.svg' },
        { name: 'Java', logo: 'https://icon.icepanel.io/Technology/svg/Java.svg' },
        { name: 'JavaScript', logo: 'https://icon.icepanel.io/Technology/svg/JavaScript.svg' },
        { name: 'TypeScript', logo: 'https://icon.icepanel.io/Technology/svg/TypeScript.svg' },
        { name: 'Mongo', logo: 'https://icon.icepanel.io/Technology/svg/MongoDB.svg' },
        { name: 'Postgres/SQL', logo: 'https://icon.icepanel.io/Technology/svg/PostgresSQL.svg' },
        { name: 'Spring', logo: 'https://icon.icepanel.io/Technology/svg/Spring.svg' },
        { name: 'Quarkus', logo: 'https://icon.icepanel.io/Technology/svg/Quarkus.svg' },
        { name: 'Express', logo: 'https://icon.icepanel.io/Technology/svg/Express.svg' },
        { name: 'NestJS', logo: 'https://icon.icepanel.io/Technology/svg/Nest.js.svg' },
        { name: 'React', logo: 'https://icon.icepanel.io/Technology/svg/React.svg' },
        { name: 'Svelte/Kit', logo: 'https://icon.icepanel.io/Technology/svg/Svelte.svg' },
        { name: 'Tauri', logo: 'https://icon.icepanel.io/Technology/svg/Tauri.svg' },
    ];

    const devopsSkills: Skill[] = [
        { name: 'Git', logo: 'https://icon.icepanel.io/Technology/svg/Git.svg' },
        { name: 'GitHub/Actions', logo: 'https://icon.icepanel.io/Technology/svg/GitHub.svg' },
        { name: 'GitLab/CI', logo: 'https://icon.icepanel.io/Technology/svg/GitLab.svg' },
        { name: 'Docker/Compose', logo: 'https://icon.icepanel.io/Technology/svg/Docker.svg' },
        { name: 'Terraform', logo: 'https://icon.icepanel.io/Technology/svg/HashiCorp-Terraform.svg' },
        { name: 'AWS', logo: 'https://icon.icepanel.io/Technology/svg/AWS.svg' },
        { name: 'Cloudflare', logo: 'https://icon.icepanel.io/Technology/svg/Cloudflare.svg' },
        { name: 'NginX', logo: 'https://icon.icepanel.io/Technology/svg/NGINX.svg' },
    ];

    const otherSkills: Skill[] = [
        { name: 'Keycloak', logo: 'https://avatars.githubusercontent.com/u/4921466' },
        { name: 'Notion', logo: '/images/notion-logo.svg' },
        { name: 'Discord', logo: '/images/discord-logo.svg' },
        { name: 'Sveltia/CMS', logo: '/images/sveltia-logo.png' },
    ];
</script>

<svelte:head>
    <title>Antonin Suzor</title>
    <meta property="og:title" content="Antonin Suzor" />
    <meta name="description" content="Antonin Suzor's personal website" />
    <meta property="og:description" content="Antonin Suzor's personal website" />
    <meta property="og:image" content="/images/antonin-suzor.jpg" />
</svelte:head>

<section class="flex min-h-screen items-center px-8 py-16">
    <div
        class="mx-auto grid items-center gap-4 p-4 sm:grid-cols-1 sm:gap-8 lg:grid-cols-[auto_2px_auto] lg:gap-16 lg:p-8"
    >
        <img
            class="max-h-[70vh] max-w-[85vw] rounded-full object-contain shadow-xl lg:w-full lg:max-w-xl"
            src="/images/antonin-suzor.jpg"
            alt="Antonin Suzor"
        />
        <div class="hidden lg:inline lg:h-[275px] lg:w-1 lg:bg-sv"></div>
        <div class="text-center">
            <h1 class="font-title text-5xl leading-12 sm:text-6xl sm:leading-16 lg:text-7xl lg:leading-24">
                Antonin Suzor
            </h1>
            <h2 class="mt-2 mb-4 font-title text-2xl leading-4 sm:text-3xl sm:leading-8 lg:text-5xl lg:leading-16">
                DevOps & Cloud Engineer
            </h2>
            <div class="mt-4 font-main text-xl text-sv italic">Shipping apps faster, safer, and at scale.</div>
        </div>
    </div>
</section>

<section class="flex min-h-screen items-center bg-bg2 px-8 py-16 text-tx2" id="me">
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

<section class="flex min-h-screen items-center px-8 py-16" id="skills">
    <div class="mx-auto w-full max-w-[1200px] rounded-2xl bg-white/10 p-12 shadow-2xl">
        <h2 class="mt-2 mb-4 text-center font-title text-3xl leading-8 sm:text-4xl sm:leading-16 lg:text-6xl">
            Technical Skills
        </h2>
        <div class="mb-8">
            <h3 class="mt-2 mb-4 font-title text-2xl md:text-3xl lg:text-4xl">Programming Languages & Frameworks</h3>
            <div class="mt-0.5 w-full overflow-hidden">
                <div class="carousel carousel-programming flex gap-[1.5rem] py-[1rem]">
                    {#each [...programmingSkills, ...programmingSkills] as skill, idx (idx)}
                        <div class="skill-card">
                            <img class="skill-logo" src={skill.logo} alt={skill.name} />
                            <div>{skill.name}</div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>

        <div class="mb-8">
            <h3 class="mt-2 mb-4 font-title text-2xl md:text-3xl lg:text-4xl">Cloud & DevOps Tools</h3>
            <div class="mt-0.5 w-full overflow-hidden">
                <div class="carousel carousel-devops flex gap-[1.5rem] py-[1rem]">
                    {#each [...devopsSkills, ...devopsSkills] as skill, idx (idx)}
                        <div class="skill-card">
                            <img class="skill-logo" src={skill.logo} alt={skill.name} />
                            <div>{skill.name}</div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>

        <div class="mb-8">
            <h3 class="mt-2 mb-4 font-title text-2xl md:text-3xl lg:text-4xl">Other Tools & Platforms</h3>
            <div class="mt-0.5 w-full overflow-hidden">
                <div class="carousel carousel-other flex gap-[1.5rem] py-[1rem]">
                    {#each [...otherSkills, ...otherSkills] as skill, idx (idx)}
                        <div class="skill-card">
                            <img class="skill-logo" src={skill.logo} alt={skill.name} />
                            <div>{skill.name}</div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>

<section class="flex min-h-screen items-center bg-bg2 px-8 py-16 text-tx2" id="hobbies">
    <div class="mx-auto w-6xl p-12 text-center">
        <h2
            class="mt-2 mb-4 font-title text-3xl leading-8 underline decoration-2 underline-offset-2 sm:text-4xl sm:leading-16 lg:text-6xl"
        >
            Outside of work
        </h2>
        <div class="mb-6 max-w-4xl text-left">
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
        <div class="mt-6 max-w-4xl justify-self-end text-right">
            <h3 class="mt-2 mb-4 font-title text-2xl md:text-3xl lg:text-4xl">Anime and video games enjoyer</h3>
            <p class="text-md mb-1 sm:mb-1.5 sm:text-xl">
                Ah, yes, the classic stereotypical nerd interests. These have been part of my culture for a long time,
                and <strong>I'm always up for a conversation or debate</strong> about them.
            </p>
            <p class="text-md mb-1 sm:mb-1.5 sm:text-xl">
                So much so that, for a year and a half, I was a <strong
                    >moderator at the french VALORANT twitch channel</strong
                >, talking to and trying to reason with people who sometimes just wanted to be annoying.
            </p>
            <p class="text-md mb-1 sm:mb-1.5 sm:text-xl">
                As always in debates, my personal policy is one of <strong
                    >understanding, respect, and compromises</strong
                >, which helped settle arguments between communities of opposite teams.
            </p>
        </div>
    </div>
</section>

<section class="flex min-h-screen items-center px-8 py-16" id="contact">
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
        <div class="mt-8 flex justify-center gap-4">
            <a
                href="mailto:antonin@suzor.net"
                class="text-md rounded-md border-2 border-transparent bg-pswhite px-2 py-4 font-bold tracking-wide text-sv uppercase transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-sv hover:shadow-xl sm:text-lg lg:px-8 lg:text-xl"
                >Send me an email</a
            >
            <a
                href="https://www.linkedin.com/in/antonin-suzor/"
                class="text-md rounded-md border-2 border-transparent bg-pswhite px-2 py-4 font-bold tracking-wide text-sv uppercase transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-sv hover:shadow-xl sm:text-lg lg:px-8 lg:text-xl"
                target="_blank"
                rel="noopener external"
            >
                Connect on LinkedIn
            </a>
        </div>
    </div>
</section>

<style>
    .carousel:hover {
        animation-play-state: paused;
    }

    .carousel-programming {
        animation: scroll-left-programming calc(2.1s * 15) linear infinite;
    }

    @keyframes scroll-left-programming {
        0% {
            transform: translateX(20px);
        }
        100% {
            transform: translateX(calc(-230px * 15));
        }
    }

    .carousel-devops {
        animation: scroll-left-devops calc(2.1s * 8) linear infinite;
    }

    @keyframes scroll-left-devops {
        0% {
            transform: translateX(20px);
        }
        100% {
            transform: translateX(calc(-230px * 8));
        }
    }

    .carousel-other {
        animation: scroll-left-other calc(2.1s * 4) linear infinite;
    }

    @keyframes scroll-left-other {
        0% {
            transform: translateX(20px);
        }
        100% {
            transform: translateX(calc(-230px * 4));
        }
    }

    .skill-card {
        background: #ffeeee;
        padding: 1.5rem;
        min-width: 220px;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-align: center;
        transition: all 0.3s ease;
        border: 2px solid transparent;
        flex-shrink: 0;
    }

    .skill-card:hover {
        transform: translateY(-2px);
        border-color: #443333;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }

    .skill-logo {
        width: 48px;
        height: 48px;
        margin: 0 auto 1rem;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    }
</style>
