import { atom, type WritableAtom } from "nanostores";

export enum Languages {
  EN = 'en',
  JA = 'ja'
}

class LanguageStore {
  state: WritableAtom<Languages>;

  constructor(lang: Languages) {
    this.state = atom(lang)
  }

  setLanguage(lang: Languages) {
    console.log('setLanguage', lang)
    if (this.state.get() === lang) return;
    this.state.set(lang)
  }
}

export const languageStore = new LanguageStore(Languages.EN)
