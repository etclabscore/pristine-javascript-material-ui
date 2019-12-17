import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enJSON from "./translations/en";
import krJSON from "./translations/kr";
import cnJSON from "./translations/cn";
import moment from "moment";
import "moment/locale/ko";
import "moment/locale/zh-cn";
import "moment/locale/en-ca";
import i18next from "i18next";

const momentMap = {
  "cn": "zh-cn",
  "en-US": "en-ca",
  "kr": "ko",
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: {
      escapeValue: false,
      format: (value, format, lng) => {
        if (!lng) {
          return;
        }
        const ln = momentMap[lng];
        switch (format) {
          case "date":
            return moment(value).locale(ln || "en").format("MMMM Do YYYY, h:mm:ss a");
          default:
            break;
        }
      },
    },
    resources: {
      cn: { translation: cnJSON },
      en: { translation: enJSON },
      kr: { translation: krJSON },
    },
  });

export const reverseSupportedLanguages = {
  "EN": "en-US", //tslint:disable-line
  "中文": "cn", //tslint:disable-line
  "한국어": "kr", //tslint:disable-line
};

export const supportedLanguages = {
  "en-US": "EN",
  "cn": "中文",
  "kr": "한국어",
};

export const changeLanguage = (l) => {
  return i18next.changeLanguage(l);
};
