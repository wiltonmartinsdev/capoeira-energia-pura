import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationFR from "./locales/fr/translation.json";
import translationIT from "./locales/it/translation.json";
import translationPT from "./locales/pt/translation.json";

const resources = {
	en: { translation: translationEN },
	fr: { translation: translationFR },
	it: { translation: translationIT },
	pt: { translation: translationPT },
};

i18n.use(initReactI18next).init({
	resources,
	lng: "pt", // idioma padrão
	fallbackLng: "pt",
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
