import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

let app = createApp(App);
app.use(router);
app.use(store);
app.use(Antd);
app.mount("#app");
