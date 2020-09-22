<template>
  <header class="header" id="77f1a006-6668-41ea-a5cd-9215be17056f">
    <div class="icons">
      <!-- LOGO -->
      <div>
        <img
          src="@/assets/images/iconoPachaqtec.png"
          v-on:click="menu_home"
          class="logo"
          alt="logo"
        />
      </div>

      <div class="car-main">
        <div class="total-cart">
          <img
            v-if="!showMenu"
            src="@/assets/images/car_shoping.svg"
            class="cart"
            alt="car shoping"
          />
          <span>{{totalProducts.length}}</span>
        </div>

        <img
          v-if="!showMenu"
          src="@/assets/images/menu.svg"
          v-on:click="menuIconClick"
          class="menuicon"
          alt="menu nav"
        />

        <p class="menu-principal-close" v-if="showMenu" v-on:click="showMenuFalse">X</p>
      </div>
    </div>
    <div v-if="showMenu" id="divMenuPrincipal" ref="divMenuPrincipal" class="menu-principal">
      <div class="menu-principal-body">
        <ul>
          <li>
            <p v-on:click="menu_home">HOME</p>
          </li>
          <li>
            <p v-on:click="menu_login">LOGIN</p>
          </li>
          <!-- <li>
            <p v-on:click="menu_register">REGISTER</p> Se procedio a desactivar porque en el login ya esta imprementado el registro
          </li>-->

          <!--  <li>
            <p v-on:click="menu_detalle">DETALLE HOME</p>
          </li>-->
          <li>
            <p v-on:click="menu_pagoCheckout">PAGO / CHECKOUT</p>
          </li>
          <li>
            <p v-on:click="menu_pagoTarjetaCredito">PAGO / TARJETA DE CREDITO</p>
          </li>
          <li>
            <p v-on:click="menu_tarjetaTarjetaDebito">PAGO / TARJETA DE DEBITO</p>
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
import { mapState } from "vuex";
import FooterComponent from "./Footer.vue";

export default Vue.extend({
  name: "Header",
  components: {
    FooterComponent,
  },
  data() {
    return {
      showMenu: false,
      existTransparent: false,
    };
  },
  computed: {
    ...mapState({
      totalProducts: (state) => state.HomeStore.totalProducts,
    }),
  },
  methods: {
    menuIconClick: function () {
      let obj = document.getElementById("77f1a006-6668-41ea-a5cd-9215be17056f");

      this.existTransparent = obj.classList.contains(
        "header-background-transparent"
      );

      if (this.existTransparent) {
        document
          .getElementById("77f1a006-6668-41ea-a5cd-9215be17056f")
          .classList.remove("header-background-transparent");
      }

      this.showMenu = !this.showMenu;
      // console.log(this.showMenu);

      if (this.showMenu) {
        document.body.style.overflow = "hidden";
      }
    },
    showMenuFalse: function () {
      this.showMenu = false;
      document.body.style.overflow = "auto";
      if (this.existTransparent) {
        document
          .getElementById("77f1a006-6668-41ea-a5cd-9215be17056f")
          .classList.add("header-background-transparent");
      }
    },
    menu_login: function () {
      this.showMenuFalse();
      this.$router.push({
        path: "/login",
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

<style lang="scss" scoped>
.car-main {
  display: flex;
  .total-cart {
    position: relative;
    span {
      position: absolute;
      right: 35px;
      text-align: center;
      border-radius: 100%;
      color: #fff;
      background: #f00;
      box-sizing: border-box;
      padding: 2px;
      width: 20px;
      height: 20px;
      font-size: 11px;
    }
    
  }
  .menuicon{
      padding:0 15px 7px 0;
    }
}
</style>
