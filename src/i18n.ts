import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import frTranslations from './locales/fr.json';
import enTranslations from './locales/en.json';
import amzTranslations from './locales/amz.json';

const resources = {
  fr: { translation: frTranslations },
  en: { translation: enTranslations },
  amz: { translation: amzTranslations },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    supportedLngs: ['fr', 'en', 'amz'],
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

// Setup document direction & global font conditionally
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
  // Apply specific font adjustments for Amazigh
  if (lng === 'amz') {
    document.documentElement.classList.add('amz-font');
  } else {
    document.documentElement.classList.remove('amz-font');
  }
});

export default i18n;
