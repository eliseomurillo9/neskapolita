import { useState } from 'react';

export function useLanguage(defaultLang: "EN" | "ES" = "EN") {
  const [lang, setLang] = useState<"EN" | "ES">(defaultLang);
  const toggleLang = () => setLang(l => (l === "EN" ? "ES" : "EN"));

  return { lang, toggleLang };
}
