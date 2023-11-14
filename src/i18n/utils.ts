import type { GetStaticPaths } from 'astro';
import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export const getLangStaticPaths = (() => {
  return [
    { params: { lang: 'en' } },
    { params: { lang: 'ja' } },
  ];
}) satisfies GetStaticPaths;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    // @ts-ignore
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return `/${l}${path}`
  }
}

export function translateUrl(lang: keyof typeof ui, url: URL) {
  const path = url.pathname.split('/').slice(2).join('/');
  return `/${lang}/${path}`
}
