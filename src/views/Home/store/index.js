

export default {
  namespaced: true,
  state: {
    products: [],
    errorLoaded: false,
    totalProducts: [],
    totalCupons: [],
    totalSuma: 0,
    descuento: {},
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_CUPONS(state, cupons) {
      state.totalCupons = cupons;
    },
    SET_ERROR_LOADED(state, stateError) {
      state.errorLoaded = stateError;
    },
    SET_DESCUENTO(state, descuento) {
      state.descuento = descuento;
    },
    ADD_PRODUCT(state, product) {
      const found = state.totalProducts.find(
        (currentProduct) => currentProduct.id === product.id
      );
   /*   const index = state.totalProducts
        .map((currentProduct) => currentProduct.id)
        .indexOf(product.id);
*/
      //console.log("found", found);
      //console.log("index", index);


      if (state.totalProducts && state.totalProducts.length === 0) {
        state.totalSuma = 0;
        state.descuento=undefined;
      }
      if (!found) {
        product.total = 1;
        state.totalProducts.push(product);
        state.totalSuma += Number(product.precio);
        state.setPrecioCobro=0;
      } else {
        // console.log(" existe!!");
        // state.totalProducts[index].total = state.totalProducts[index].total + 1;
        // state.totalProducts = [...state.totalProducts];
      }
    },
    REMOVE_PRODUCT(state, product) {
      state.totalProducts = state.totalProducts.filter(
        (currentProduct) => currentProduct.id !== product.id
      );
      state.totalSuma -= Number(product.precio);
      if ( state.totalProducts.length===0)
      {
      state.descuento=undefined;
    }},
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const products = await fetch(
          "https://pachaqtec-ecommerce.herokuapp.com/productos/",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"/*,
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,*/
            },
          }
        ).then((response) => response.json());

        let cupons = await fetch(
          "https://pachaqtec-ecommerce.herokuapp.com/cupones/",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"/*,
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,*/
            },
          }
        ).then((response) => response.json());
 
        commit("SET_CUPONS", cupons.results);

        commit("SET_ERROR_LOADED", false);
        commit("SET_PRODUCTS", products);
      } catch (e) {
        commit("SET_ERROR_LOADED", true);
      }
    },
    setDescuento({ commit }, descuento) {
      commit('SET_DESCUENTO', descuento);
    },
    addProduct({ commit }, product) {
      commit("ADD_PRODUCT", product);
    },
    removeProduct({ commit }, product) {
      commit("REMOVE_PRODUCT", product);
    },
  },
};
