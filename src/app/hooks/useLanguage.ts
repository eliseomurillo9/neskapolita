import { useTranslation } from 'react-i18next';

export function useLanguage() {
  const { i18n } = useTranslation();
  
  // Keep the same interface "EN" or "ES" for backward compatibility with the component props
  const baseLang = (i18n.language || "en").split('-')[0].toUpperCase();
  const lang = (baseLang === "ES" ? "ES" : "EN") as "EN" | "ES";
  
  const toggleLang = () => {
    i18n.changeLanguage(lang === "EN" ? "es" : "en");
  };

  return { lang, toggleLang };
}
