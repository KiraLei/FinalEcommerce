import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import createPersistedState from "vuex-persistedstate";

import HomeStore from "@/views/Home/store";
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    HomeStore,
  },
  plugins: [createPersistedState()],
});
