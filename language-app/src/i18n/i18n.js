// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import axios from 'axios';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    // Load translations manually
    initImmediate: false,
  });

// Load the translations manually
const loadTranslations = async () => {
  try {
    const response = await axios.get('/locales/translations.json');
    const translations = response.data;

    i18n.addResources('en', 'translation', translations.en.translation);
    i18n.addResources('es', 'translation', translations.es.translation);
  } catch (error) {
    console.error("Error loading translations", error);
  }
};

loadTranslations();

export default i18n;
