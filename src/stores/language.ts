import { WritableAtom, atom } from "nanostores";

enum Languages {
  EN = 'en',
  JA = 'ja'
}

class LanguageStore {
  language: WritableAtom<Languages>;

  constructor(lang: Languages) {
    this.language = atom(lang)
  }

  setLanguage(lang: Languages) {
    if (this.language.get() === lang) return;
    this.language.set(lang)
  }
}

export const languageStore = new LanguageStore(Languages.EN)
