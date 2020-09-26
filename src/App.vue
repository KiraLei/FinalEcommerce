<template>
  <div class="app">
    <Header></Header>
    <!--
    <ul class="nav">
      <li>
        <router-link to="/auth/login">LOGIN</router-link>
      </li>
      <li>
        <router-link to="/auth/register">REGISTER</router-link>
      </li>
      <li>
        <router-link to="/">HOME</router-link>
      </li>
      <li>
        <router-link to="/detalle">DETALLE HOME</router-link>
      </li>
      <li>
        <router-link to="/pago/checkout">PAGO / CHECKOUT</router-link>
      </li>
      <li>
        <router-link to="/pago/tarjeta-de-credito">PAGO / TARJETA DE CREDITO</router-link>
      </li>
      <li>
        <router-link to="/pago/tarjeta-de-debito">PAGO / TARJETA DE DEBITO</router-link>
      </li>
      <li>
        <router-link to="/pago/efectivo">PAGO / PAGO EFECTIVO</router-link>
      </li>
      <li>
        <router-link to="/pago/resumen">PAGO / COMPRA RESUMEN</router-link>
      </li>
    </ul>
    -->
    <div style="margin-top: 60px; flex-grow: 1" id="principalContainer">
      <router-view></router-view>
    </div>

    <ButtonWhatsapp></ButtonWhatsapp>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ButtonWhatsapp from "@/ui/ButtonWhatsapp.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    ButtonWhatsapp,
  },
  created() {
    
  },
};
</script>
<style lang="scss">
@import "./assets/styles/main.scss";
@import "~bootstrap/dist/css/bootstrap.css";

.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: $background-color;
}
</style>
