import { useEffect } from 'react';

import locales from '@/data/locales';
import useStorage from '@/hooks/useStorage.js';
import { PageController } from '@sitecore-search/react';

/**
 * Custom hook for managing the language state..
 * This hook synchronizes the language state with the local storage and updates the language settings in the PageController context.
 * @returns An object containing the current language and a function to update the language.
 */

function useLanguage() {
  const [language, setLanguage] = useStorage('lang', 'en');

  useEffect(() => {
    console.info('[src/hooks/useLanguage.ts]: Syncing language with local storage...');
    setLanguage(language);
    PageController.getContext().setLocaleLanguage(language);
    PageController.getContext().setLocaleCountry(locales[language].country);
  }, [language, setLanguage]);

  // Listen for external locale changes from parent window
  useEffect(() => {
    function handleExternalLocale(e) {
      if (e.detail && typeof e.detail === 'string' && e.detail !== language) {
        console.log(`[src/hooks/useLanguage.ts]: Received external locale change to ${e.detail}`);
        setLanguage(e.detail);
        PageController.getContext().setLocaleLanguage(e.detail);
        PageController.getContext().setLocaleCountry(locales[e.detail].country);
      }
    }
    window.addEventListener('external-locale', handleExternalLocale);
    return () => window.removeEventListener('external-locale', handleExternalLocale);
  }, [language, setLanguage]);

  console.info(`[src/hooks/useLanguage.ts]: Current language is ${language}`);
  return { language, setLanguage };
}

export default useLanguage;
