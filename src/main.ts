import Vue from "vue";
import App from "@/App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import "tailwindcss/tailwind.css";
import "normalize.css";
import store from "./store";
import "./mock/index";
import http from "axios";

Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.prototype.$http = http;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");

const token = store.state.user.token;
if (token) {
  console.log("Update Router!");

  store.commit("addMenu", router);
}
