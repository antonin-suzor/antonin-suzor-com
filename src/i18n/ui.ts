export const languages = {
    en: 'English',
    fr: 'Français',
} as const;

export const defaultLang = 'en';

export const ui = {
    en: {
        navHome: 'Home',
        navAbout: 'About',
        navBlog: 'Blog',
        languageLabel: 'Language',
    },
    fr: {
        navHome: 'Accueil',
        navAbout: 'À propos',
        navBlog: 'Blog',
        languageLabel: 'Langue',
    },
} as const;

export type Lang = keyof typeof ui;
