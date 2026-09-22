import { useTranslation } from 'react-i18next';

export function useLanguage() {
  const { i18n } = useTranslation();
  
  // Keep the same interface "EN" or "ES" for backward compatibility with the component props
  const lang = (i18n.language || "en").toUpperCase() as "EN" | "ES";
  
  const toggleLang = () => {
    i18n.changeLanguage(lang === "EN" ? "es" : "en");
  };

  return { lang, toggleLang };
}
