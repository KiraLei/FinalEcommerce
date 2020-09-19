<template>
  <header class="header">
    <div class="icons">
      <!-- LOGO -->
      <div>
        <img src="@/assets/images/iconoPachaqtec.png" class="logo" alt="logo" />
      </div>

      <div >
        <img
          v-if="!showMenu"
          src="@/assets/images/car_shoping.svg"
          class="cart"
          alt="Logotipo"
        />

 
        <img
         v-if="!showMenu"
          src="@/assets/images/menu.svg"
          v-on:click="menuIconClick"
          class="menuicon"
          alt="Logotipo"
        />
 
        <p class="menu-principal-close" v-if="showMenu"  v-on:click='showMenuFalse'>X</p>
      </div>
    </div>
    <div
      v-if="showMenu"
      id="divMenuPrincipal"
      ref="divMenuPrincipal"
      class="menu-principal"
    >
      <div class="menu-principal-body">
        <ul>
          <li>
            <p v-on:click="menu_login">LOGIN</p>
          </li>
          <li>
            <p v-on:click="menu_register">REGISTER</p>
          </li>
          <li>
            <p v-on:click="menu_home">HOME</p>
          </li>
          <li>
            <p v-on:click="menu_detalle">DETALLE HOME</p>
          </li>
          <li>
            <p v-on:click="menu_pagoCheckout">PAGO / CHECKOUT</p>
          </li>
          <li>
            <p v-on:click="menu_pagoTarjetaCredito">
              PAGO / TARJETA DE CREDITO
            </p>
          </li>
          <li>
            <p v-on:click="menu_tarjetaTarjetaDebito">
              PAGO / TARJETA DE DEBITO
            </p>
          </li>
          <li>
            <p v-on:click="menu_pagoEfectivo">PAGO / PAGO EFECTIVO</p>
          </li>
          <li>
            <p v-on:click="menu_pagoResumen">PAGO / COMPRA RESUMEN</p>
          </li>
        </ul>
      </div>
      <FooterComponent />
    </div>
  </header>
</template>

<script>
import Vue from "vue";
import FooterComponent from "./Footer.vue";

export default Vue.extend({
  name: "Header",
  components: {
    FooterComponent,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    menuIconClick: function () {
      this.showMenu = !this.showMenu;
     // console.log(this.showMenu);

      if (this.showMenu) {
        document.body.style.overflow = "hidden";
      }
    },
    showMenuFalse: function () {
      this.showMenu = false;
      document.body.style.overflow = "auto";
    },
    menu_login: function () {
      this.showMenuFalse();
      this.$router.push({
        path: "/auth/login",
      });
    },

    menu_register: function () {
      this.showMenuFalse();
      this.$router.push({
        path: "/auth/register",
      });
    },

    menu_home: function () {
      this.showMenuFalse();
      this.$router.push({
        path: "/",
      });
    },
    menu_detalle: function () {
      this.showMenuFalse();
      this.$router.push({
        path: "/detalle",
      });
    },

    menu_pagoCheckout: function () {
      this.showMenuFalse();
      this.$router.push({
        path: "/pago/checkout",
      });
    },

    menu_pagoTarjetaCredito: function () {
      this.showMenuFalse();
      this.$router.push({
        path: "/pago/tarjeta-de-credito",
      });
    },

    menu_tarjetaTarjetaDebito: function () {
      this.showMenuFalse();
      this.$router.push({
        path: "/pago/tarjeta-de-debito",
      });
    },

    menu_pagoEfectivo: function () {
      this.showMenuFalse();
      this.$router.push({
        path: "/pago/efectivo",
      });
    },

    menu_pagoResumen: function () {
      this.showMenuFalse();
      this.$router.push({
        path: "/pago/resumen",
      });
    },
  },
});
</script>

<style lang="scss" scoped></style>
