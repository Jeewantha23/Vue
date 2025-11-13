import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";
const app = createApp(App);
app.use(router); // ✅ router use කරලා connect කරන එක
app.mount("#app");
