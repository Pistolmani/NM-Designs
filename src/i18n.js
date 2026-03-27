import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "home.hero": "Warm, refined, and deeply personal interiors for contemporary living.",
      "nav.home": "Home",
      "nav.projects": "Selected Works",
      "nav.studio": "Studio",
      "nav.contact": "Inquire",
    }
  },
  ka: {
    translation: {
      "home.hero": "თბილი, დახვეწილი და პერსონალური ინტერიერები თანამედროვე ცხოვრებისთვის.",
      "nav.home": "მთავარი",
      "nav.projects": "რჩეული ნამუშევრები",
      "nav.studio": "სტუდია",
      "nav.contact": "შეკითხვა",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
