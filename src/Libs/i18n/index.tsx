import i18n, { Resource } from "i18next";
import { reactI18nextModule } from "react-i18next";
import { en_US, zh_CN } from "./languages";
import { LANGUAGE_EN_US, LANGUAGE_ZH_CH } from "./constants";

// the translations
const resources: Resource = {
  [LANGUAGE_EN_US]: en_US,
  [LANGUAGE_ZH_CH]: zh_CN
};

i18n.use(reactI18nextModule).init({
  resources,
  lng: LANGUAGE_EN_US,
  debug: true,
  interpolation: {
    escapeValue: false
  },
  fallbackLng: LANGUAGE_EN_US
});

export default i18n;
export { default as Constants } from "./constants";
