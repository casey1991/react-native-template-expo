import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en_US, zh_CN } from "./languages";
import { LANGUAGE_EN_US, LANGUAGE_ZH_CH } from "./constants";

// the translations
const resources = {
  [LANGUAGE_EN_US]: en_US,
  [LANGUAGE_ZH_CH]: zh_CN
};

i18n.use(initReactI18next).init({
  resources,
  lng: LANGUAGE_EN_US,
  debug: true,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
export { default as Constants } from "./constants";
