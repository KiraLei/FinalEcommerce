export default {
  namespaced: true,
  state: {
    isLogin: false,
    user: {},
    errorLoaded: false,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_IS_LOGIN(state, isLogin) {
      state.isLogin = isLogin;
    },
    SET_ERROR_LOADED(state, stateError) {
      state.errorLoaded = stateError;
    },
  },
  actions: {
    async postLogin({ commit }, payload) {
      try {
        const login = await fetch("http://localhost:3000/login", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((response) => response.json());
        commit("SET_ERROR_LOADED", false);
        commit("SET_USER", login);
        commit("SET_IS_LOGIN", true);
      } catch (e) {
        commit("SET_ERROR_LOADED", true);
      }
    },
    async postRegister({ commit }, payload) {
      try {
        await fetch("http://localhost:3000/register", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((response) => response.json());
        commit("SET_ERROR_LOADED", false);
      } catch (e) {
        commit("SET_ERROR_LOADED", true);
      }
    },
  },
};
