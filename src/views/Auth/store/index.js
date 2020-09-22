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
        const login = await fetch(
          "https://backendhackatonfinal.herokuapp.com/loginCliente/",
          {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then((response) => response.json());
        console.log("login", login);
        if (!login.error) {
          commit("SET_ERROR_LOADED", false);
          commit("SET_USER", login);
          commit("SET_IS_LOGIN", true);
        } else {
          console.log('entro acaaaa')
          commit("SET_ERROR_LOADED", true);
          commit("SET_IS_LOGIN", false);
          alert("Credenciales incorrectas!!");
        }
      } catch (e) {
        console.log("error", e);
      }
    },
    async postRegister({ commit }, payload) {
      try {
        await fetch("https://backendhackatonfinal.herokuapp.com/cliente/", {
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
