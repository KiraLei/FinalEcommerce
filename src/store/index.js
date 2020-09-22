import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import createPersistedState from "vuex-persistedstate";

import HomeStore from "@/views/Home/store";
import AuthStore from "@/views/Auth/store";
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    HomeStore,
    AuthStore,
  },
  plugins: [createPersistedState()],
});
