import { createApp } from "vue";
import App from "./App.vue";

import "./assets/scss/main.scss";
import "./assets/scss/light.scss";
import "./assets/scss/dark.scss";

import i18n from "./localization/index.js";
import "animate.css";

createApp(App).use(i18n).mount("#app");
