import en from "./langs/en.json";
import ru from "./langs/ru.json";
import { createI18n } from "vue-i18n/index";

const i18n = createI18n({
  locale: "ru",
  messages: {
    en,
    ru,
  },
});
export default i18n;
