import { createApp } from "vue";
import App from "./App.vue";
import v3TagInput from "v3-tag-input";
const app = createApp(App);
app.use(v3TagInput);
app.mount("#app");
