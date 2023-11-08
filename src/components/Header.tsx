import { useStore } from '@nanostores/preact';
import { Languages, languageStore } from '../stores/language';

export default function Header() {
  const language = useStore(languageStore.state);

  return (
    <header class="w-full z-10 fixed top-0 text-primary mix-blend-difference flex flex-wrap flex-row justify-between px-10 py-6">
      <nav class="">
        <ul class="flex flex-row text-xl font-bold">
          <li>
            <a href="" class="">
              Home
            </a>
          </li>
          <li>
            <a href="#" class="pl-8">
              About
            </a>
          </li>
          <li>
            <a href="/projects" class="pl-8">
              Projects
            </a>
          </li>
        </ul>
      </nav>
      <div class="flex flex-row text-xl underline-offset-4">
        <button
          class={`${language === Languages.EN ? 'underline' : ''}`}
          onClick={() => console.log('clicked')}
          // onClick={() => languageStore.setLanguage(Languages.EN)}
        >
          EN
        </button>
        <div class="mx-2">
          <span>|</span>
        </div>
        <button
          class={`${language === Languages.JA ? 'underline' : ''}`}
          onClick={() => languageStore.setLanguage(Languages.JA)}
        >
          JA
        </button>
      </div>
    </header>
  );
}
