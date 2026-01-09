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

<section class="hero" style="min-height: 100vh;">
    <div class="intro">
        <img class="profile-img" src="/images/antonin-suzor.jpg" alt="Antonin Suzor" />
        <div class="vertical-bar"></div>
        <div class="intro-text">
            <h1>Antonin Suzor</h1>
            <h2>DevOps & Cloud Engineer</h2>
            <p class="catchphrase">Shipping apps faster, safer, and at scale.</p>
        </div>
    </div>
</section>

<section class="hero" id="me" style="background-color: var(--background-2); color: var(--text-2);">
    <div class="about">
        <h2 style="text-decoration: underline 2px;">Who Am I ?</h2>
        <p>
            Born in 2004 in South-Eastern France (Aix-en-Provence), I moved to Paris for my studies. With a deep passion
            for <strong>software engineering</strong>, <strong>enterprise IT</strong>, and
            <strong>continuous improvement</strong>, I thrive on creating efficient and scalable
            <strong>solutions that gain the trust</strong> of teams, leaders, and executives.
        </p>
        <p>
            I have the firm belief that <strong>technology can be and is a formidable tool</strong> that unlocks possibilities
            and drives the world forward.
        </p>
        <p>
            The people around me, colleagues, clients, and friends, are what truly motivates me. I am guided by my
            values of <strong>honesty, respect, and excellence</strong>. I make it a point to meet high standards and
            exceed expectations.
        </p>
    </div>
</section>

<section class="hero" id="skills">
    <div class="skills">
        <h2 style="text-align: center;">Technical Skills</h2>
        <div class="skill-category">
            <h3>Programming Languages & Frameworks</h3>
            <div class="carousel-container">
                <div class="carousel carousel-programming">
                    {#each [...programmingSkills, ...programmingSkills] as skill, idx (idx)}
                        <div class="skill-card">
                            <img class="skill-logo" src={skill.logo} alt={skill.name} />
                            <div>{skill.name}</div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>

        <div class="skill-category">
            <h3>Cloud & DevOps Tools</h3>
            <div class="carousel-container">
                <div class="carousel carousel-devops">
                    {#each [...devopsSkills, ...devopsSkills] as skill, idx (idx)}
                        <div class="skill-card">
                            <img class="skill-logo" src={skill.logo} alt={skill.name} />
                            <div>{skill.name}</div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>

        <div class="skill-category">
            <h3>Other Tools & Platforms</h3>
            <div class="carousel-container">
                <div class="carousel carousel-other">
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

<section class="hero" id="hobbies" style="background-color: var(--background-2); color: var(--text-2);">
    <div class="personal">
        <h2 style="text-decoration: underline 2px;">Outside of work</h2>
        <div class="dnd">
            <h3>D&D Game Master</h3>
            <p>
                <strong>I've ran D&D campaigns for 3 years</strong> combined, with multiple tables, at school, among friends,
                or at associations.
            </p>
            <p>
                Building immersive worlds for my players, <strong
                    >feeding from and into their different playstyles and imaginations</strong
                >, and creating emotions and group cohesion has been such a blast.
            </p>
            <p>
                <strong>I've currently taken a break from being a GM</strong>, as it is demanding in terms of time and
                energy, but I still want to go back to TTRPGs someday.
            </p>
        </div>
        <div class="anime-games">
            <h3>Anime and video games enjoyer</h3>
            <p>
                Ah, yes, the classic stereotypical nerd interests. These have been part of my culture for a long time,
                and <strong>I'm always up for a conversation or debate</strong> about them.
            </p>
            <p>
                So much so that, for a year and a half, I was a <strong
                    >moderator at the french VALORANT twitch channel</strong
                >, talking to and trying to reason with people who sometimes just wanted to be annoying.
            </p>
            <p>
                As always in debates, my personal policy is one of <strong
                    >understanding, respect, and compromises</strong
                >, which helped settle arguments between communities of opposite teams.
            </p>
        </div>
    </div>
</section>

<section class="hero" id="contact">
    <div class="contact">
        <h2>Let's Talk !</h2>
        <p>
            Are you a company looking to hire ? An organization seeking technical expertise and/or services ? An
            individual with a project or questions ?
        </p>
        <p>
            If you answered "yes" to any of these, feel free to contact me. And if you didn't, go ahead as well. After
            all, what's the worse that could happen ?
        </p>
        <div class="contact-buttons">
            <a href="mailto:antonin@suzor.net" class="contact-button">Send me an email</a>
            <a
                href="https://www.linkedin.com/in/antonin-suzor/"
                class="contact-button"
                target="_blank"
                rel="noopener external"
            >
                Connect on LinkedIn
            </a>
        </div>
    </div>
</section>

<style>
    h1 {
        font-size: 5rem;
        line-height: 1.2;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 3.5rem;
        line-height: 1.3;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
    }

    h3 {
        font-size: 2.5rem;
        line-height: 1.4;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.25rem;
        margin-bottom: 0.3rem;
    }

    .hero {
        padding: 4rem 2rem;
        display: flex;
        align-items: center;
        scroll-snap-align: start;
        color: var(--text-1);
    }

    .intro {
        display: grid;
        grid-template-columns: auto 2px auto;
        gap: 4rem;
        align-items: center;
        margin: 0 auto;
        padding: 2rem;
    }

    .vertical-bar {
        height: 275px;
        width: 4px;
        background-color: var(--sv-orange);
    }

    .profile-img {
        border-radius: 50%;
        max-width: 500px;
        width: 100%;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }

    @media (max-width: 1024px) {
        .intro {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 1rem;
        }

        .vertical-bar {
            display: none;
        }

        .profile-img {
            max-width: 85vw;
            max-height: 85vh;
        }

        h1 {
            font-size: 3rem;
        }

        h2 {
            font-size: 2rem;
        }
    }

    @media (max-width: 640px) {
        .intro {
            gap: 1rem;
            padding: 1rem;
        }

        .profile-img {
            max-width: 85vw;
            max-height: 85vh;
        }

        h1 {
            font-size: 2rem;
        }

        h2 {
            font-size: 1.5rem;
        }

        p {
            font-size: 1rem;
        }
    }

    .intro-text {
        text-align: center;
    }

    .catchphrase {
        font-style: italic;
        margin-top: 1rem;
        color: var(--sv-orange);
    }

    .about {
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
        padding: 3rem;
    }

    .skills {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 3rem;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 1rem;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    }

    .skill-category {
        margin-bottom: 2rem;
    }

    .carousel-container {
        width: 100%;
        overflow: hidden;
        border-radius: 12px;
        position: relative;
        margin-top: 1.5rem;
    }

    .carousel {
        display: flex;
        gap: 1.5rem;
        padding: 1rem 0;
    }

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
        background: var(--pseudo-white);
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
        border-color: var(--pseudo-grey);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }

    .skill-logo {
        width: 48px;
        height: 48px;
        margin: 0 auto 1rem;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    }

    .personal {
        width: 1200px;
        margin: 0 auto;
        text-align: center;
        padding: 3rem;
    }

    .dnd {
        text-align: left;
        max-width: 850px;
        margin-bottom: 25px;
    }

    .anime-games {
        margin-top: 25px;
        justify-self: right;
        text-align: right;
        max-width: 850px;
    }

    .contact {
        max-width: 900px;
        margin: 0 auto;
        text-align: center;
        padding: 3rem;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 1rem;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    }

    .contact-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 2rem;
    }

    .contact-button {
        padding: 1rem 2rem;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        background-color: var(--pseudo-white);
        color: var(--sv-orange);
        border: 2px solid transparent;
    }

    .contact-button:hover {
        transform: translateY(-4px);
        border-color: var(--sv-orange);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 1024px) {
        .contact-button {
            padding: 1rem 0.5rem;
            font-size: 1.1rem;
        }
    }

    @media (max-width: 640px) {
        .contact-button {
            padding: 1rem 0.5rem;
            font-size: 0.75rem;
        }
    }
</style>
