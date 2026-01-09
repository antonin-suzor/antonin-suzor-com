<script lang="ts">
</script>

<header>
    <a href="/" id="nav-brand">Antonin Suzor</a>
    <nav>
        <ul>
            <li id="nav-home"><a href="/">Home</a></li>
            <li id="nav-me"><a href="/#me">Me</a></li>
            <li id="nav-skills"><a href="/#skills">Skills</a></li>
            <li id="nav-hobbies"><a href="/#hobbies">Hobbies</a></li>
            <li id="nav-contact"><a href="/#contact">Contact</a></li>
            <!-- <li id="nav-blog"><a href="/blog/posts">Blog</a></li> -->
            <!-- <li id="nav-about"><a href="/about">About</a></li> -->
        </ul>
    </nav>
</header>

<style>
    header {
        background-color: var(--pseudo-black);
        color: var(--pseudo-white);
        font-family: var(--title-font);
        overflow: hidden;
        position: sticky;
        top: 0;
        z-index: 100;
        line-height: 48px;
    }
    #nav-brand {
        float: left;
        font-size: 36px;
    }
    ul {
        list-style-type: none;
        float: right;
        display: flex;
    }
    li {
        margin: 0;
        font-size: 24px;
        height: 100%;
    }
    li::before {
        content: '';
    }
    a {
        display: block;
        padding: 8px 16px;
        color: var(--pseudo-white);
        text-decoration: none;
        text-align: center;
    }
    a:hover {
        color: #ffffff;
        background-color: var(--pseudo-grey);
        text-decoration: underline;
    }

    @media (max-width: 1024px) {
        header {
            line-height: 44px;
        }
        #nav-brand {
            font-size: 32px;
        }
        li {
            font-size: 22px;
        }
        a {
            padding: 8px 14px;
        }
    }

    @media (max-width: 640px) {
        header {
            line-height: 40px;
        }
        #nav-brand {
            font-size: 28px;
        }
        li {
            font-size: 20px;
        }
        a {
            padding: 6px 10px;
        }
    }
</style>
