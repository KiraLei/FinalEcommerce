import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import createPersistedState from "vuex-persistedstate";

import HomeStore from "@/views/Home/store";
import AuthStore from "@/views/Auth/store";
export default new Vuex.Store({
  state: {
    token: "",
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
  },
  actions: {
    async accessToken({ commit }) {
      const response = await fetch(
        "https://pachaqtec-ecommerce.herokuapp.com/api/token/",
        {
          method: "POST",
          body: JSON.stringify({
            username: "dgarcia",
            password: "hackaton",
          }),
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      ).then((response) => response.json());
     
      commit("SET_TOKEN", response.access);
    },
  },
  modules: {
    HomeStore,
    AuthStore,
  },
  plugins: [createPersistedState()],
});
