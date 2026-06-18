import { defaultLang, languages, ui, type Lang } from './ui';

const localesRegex = Object.keys(languages).join('|');
const localePrefixRegex = new RegExp(`^/(?:${localesRegex})(?=/|$)`);

export function getLangFromUrl(url: URL): Lang {
    const [, lang] = url.pathname.split('/');

    if (lang in ui) {
        return lang as Lang;
    }

    return defaultLang;
}

export function normalizePath(pathname: string): string {
    let normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;

    if (!normalized.endsWith('/')) {
        normalized = `${normalized}/`;
    }

    return normalized;
}

export function stripLocaleFromPath(pathname: string): string {
    const normalized = normalizePath(pathname);
    const withoutLocale = normalized.replace(localePrefixRegex, '') || '/';
    return normalizePath(withoutLocale);
}

export function useTranslations(lang: Lang) {
    return function t(key: keyof (typeof ui)[typeof defaultLang]) {
        return ui[lang][key] ?? ui[defaultLang][key];
    };
}
