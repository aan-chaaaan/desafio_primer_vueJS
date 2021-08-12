import Vue from "vue";
import app from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(app),
}).$mount("#app");
