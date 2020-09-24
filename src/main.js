import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
Vue.config.productionTip = false;

fetch("https://pachaqtec-ecommerce.herokuapp.com/api/token/", {
  method: "POST",
  body: JSON.stringify({
    username: "dgarcia",
    password: "hackaton",
  }),
  headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
})
  .then((response) => response.json())
  .then((token) => {
    sessionStorage.setItem("token", token.access);
    new Vue({
      router,
      store,
      render: (h) => {
        return h(App);
      },
    }).$mount("#app");
  });
