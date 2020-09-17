<template>
  <div>
    <Header></Header>
    <div class="view-checkout checkout">
      <div class="checkout-card">
        <figure>
          <img src="@/assets/images/shippingcar1.png" />
        </figure>
        <div class="checkout-align">
          <h2>Gestión de Envases, Empaques y Embalajes</h2>
          <h3>Dto. 25%</h3>
          <a href>Eliminar</a>
        </div>
      </div>
      <div class="amount">s/269.00</div>
      <div class="pay-card">
        <div class="width">
          <div class="amount">
            <div>Subtotal</div>
            <span>s/ 600.00</span>
          </div>
          <div class="input-icon">
            <input type="text" name id placeholder="Agrega un codigo de descuento" />
            <img src="@/assets/images/send1.png" alt />
          </div>

          <button>Continuar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "checkout",
  components: {
    Header,
  },
};
</script>

<style></style>
