import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ru from './locales/ru.json';
import uz from './locales/uz.json';

export const i18n = i18next.createInstance();

let initialized = false;

export function initI18n(): typeof i18n {
  if (initialized) {
    return i18n;
  }

  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        uz: { translation: uz },
        ru: { translation: ru },
      },
      fallbackLng: 'uz',
      debug: false,
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ['localStorage'],
        lookupLocalStorage: 'language',
        caches: ['localStorage'],
      },
    });

  initialized = true;

  return i18n;
}
