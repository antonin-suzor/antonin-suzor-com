<script lang="ts">
</script>

<footer>
    Personal website of Antonin Suzor.
    <div>
        <a href="mailto:antonin@suzor.net" target="_blank" rel="noopener external">
            <img
                src="/images/gmail-logo.svg"
                alt="GMail"
                class="logo"
                style="filter: brightness(0.5) grayscale(100%)"
            />
            Email
        </a>
        <a href="https://www.linkedin.com/in/antonin-suzor/" target="_blank" rel="noopener external">
            <img
                src="https://icon.icepanel.io/Technology/svg/LinkedIn.svg"
                alt="LinkedIn"
                class="logo"
                style="filter: brightness(0.5) grayscale(100%)"
            />
            LinkedIn
        </a>
        <a href="https://github.com/antonin-suzor" target="_blank" rel="noopener external">
            <img
                src="https://icon.icepanel.io/Technology/svg/GitHub.svg"
                alt="Github"
                class="logo"
                style="filter: brightness(2)"
            />
            GitHub
        </a>
        <a href="https://discord.gg/AgCZ9AnbMs" target="_blank" rel="noopener external">
            <img
                src="/images/discord-logo.svg"
                alt="Discord"
                class="logo"
                style="filter: brightness(0.5) grayscale(100%)"
            />
            Discord
        </a>
    </div>
</footer>

<style>
    footer {
        background-color: var(--pseudo-black);
        color: var(--pseudo-white);
        font-family: var(--main-font);
        text-align: center;
        padding: 10px;
    }
    div {
        display: flex;
        justify-content: center;
    }
    a {
        color: var(--pseudo-white);
        text-decoration: none;
        margin: 0px 12px;
        justify-content: center;
    }
    a:hover {
        color: #ffffff;
        text-decoration: underline;
    }
    .logo {
        width: 48px;
        height: 48px;
        justify-self: center;
    }

    @media (max-width: 640px) {
        .logo {
            width: 40px;
            height: 40px;
        }
    }
</style>
