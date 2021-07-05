import { createI18n } from 'vue-i18n';

import en from './locales/en.json';
import es from './locales/es.json';

export default createI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: { en, es },
});
