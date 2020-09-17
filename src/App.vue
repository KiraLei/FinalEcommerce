 <template>
  <div class="app">
    <Header></Header>
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
    <router-view></router-view>
  </div>
</template> 
<script>
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
<style lang="scss">
@import "./assets/styles/main.scss";
@import "~bootstrap/dist/css/bootstrap.css";
</style>