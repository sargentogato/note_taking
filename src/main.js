import "./assets/main.css"
import { createPinia } from "pinia";
const pinia = createPinia();
import { createApp } from "vue"
import App from "./App.vue"

/* import store from "./store" */


const app = createApp(App)
app.use(pinia);

/* app.use(store) */
app.mount("#app")
