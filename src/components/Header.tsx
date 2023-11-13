import { getLangFromUrl, useTranslatedPath } from '../i18n/utils';
import { languages } from '../i18n/ui';
import { useState } from 'preact/hooks';

const currentLang = getLangFromUrl(new URL(window.location.href));
const translatePath = useTranslatedPath(currentLang);

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <>
      <header
        class="w-full z-50 fixed top-0 flex flex-col px-4 py-4 text-primary mix-blend-difference md:px-10 md:py-6"
        style="background-color: inherit;"
      >
        <nav class="flex flex-row justify-between  md:flex-row-reverse">
          <ul class="flex flex-row text-xl underline-offset-4 divide-x-2">
            {Object.entries(languages).map(([lang, label]) => (
              <li class="px-2">
                <a
                  href={`/${lang}`}
                  class={`${currentLang === lang ? 'underline' : ''}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div class="hidden md:block">
            <ul class="flex flex-row text-xl font-bold space-x-8">
              <li>
                <a href={translatePath('/')}> Home</a>
              </li>
              <li>
                <a href={translatePath('/about')}> About</a>
              </li>
              <li>
                <a href={translatePath('/projects')}> Projects</a>
              </li>
            </ul>
          </div>
          <div class="flex md:hidden">
            <button
              type="button"
              class="-m-2.5 inline-flex items-center justify-center p-2.5 text-primary rounded-lg active:rounded-lg"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>
      <div
        className={`absolute z-50 top-16 w-screen md:hidden ${openMenu ? 'block' : 'hidden'}`}
        id="navbar-default"
        role="dialog"
      >
        <ul class="grid grid-cols-1 gap-6 rounded-lg text-primary bg-light-black text-xl font-bold mx-4 p-4">
          <li>
            <a href={translatePath('/')}> Home</a>
          </li>
          <li>
            <a href={translatePath('/about')}> About</a>
          </li>
          <li>
            <a href={translatePath('/projects')}> Projects</a>
          </li>
        </ul>
      </div>
    </>
  );
}
