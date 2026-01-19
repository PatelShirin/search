import { Globe } from 'lucide-react';
import { useContext } from 'react';

import { LanguageContext } from '@/contexts/languageContext.js';
import locales from '@/data/languages.js';

const LocaleSelector = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const handleChange = (e) => {
    setLanguage(e.target.value);
  };
  console.log(`[src/components/LocaleSelector/index.jsx]: Current selected language is ${language}`);
  return (
    <div className="flex items-center">
      <Globe className="text-gray-400 " />
      <select className="select cursor-pointer" onChange={handleChange} value={language} title='Select Language'>
        {locales.map((locale) => (
          <option value={locale.value}>{locale.label}</option>
        ))}
      </select>
    </div>
  );
};

export default LocaleSelector;
