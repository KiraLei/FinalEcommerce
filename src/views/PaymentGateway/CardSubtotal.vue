<template>
  <div class="pay-card">
    <div class="width">
      <div class="amount-pay">
        <div>Subtotal</div>
        <span>s/ {{ totalSuma }}</span>
      </div>

      <div class="amount-pay">
        <div>Descuento</div>
        <span
          >s/
          {{
            descuento && descuento.descuento ? descuento.descuento : "0.00"
          }}</span
        >
      </div>
      <hr />
      <div class="amount-pay">
        <div>Total</div>
        <span
          >s/
          {{
            totalSuma -
            (descuento && descuento.descuento ? descuento.descuento : 0)
          }}</span
        >
      </div>
      <div class="input-icon">
        <input
          id="tbCupon"
          ref="tbCupon"
          type="text"
          placeholder="Agrega un codigo de descuento"
        />
        <img v-on:click="bnContinuar" src="@/assets/images/send1.png" alt />
      </div>
      <button
        class="btn_static"
        @click="
          () => {
            $router.push('/pago/tarjeta-de-credito');
          }
        "
      >
        Continuar
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "CardSubtotal",
  computed: {
    ...mapState({
      totalProducts: (state) => state.HomeStore.totalProducts,
      totalSuma: (state) => state.HomeStore.totalSuma,
      totalCupons: (state) => state.HomeStore.totalCupons,
      descuento: (state) => state.HomeStore.descuento,
    }),
  },

  methods: {
    ...mapActions({
      setDescuento: "HomeStore/setDescuento",
    }),

    bnContinuar() {
      let cupon = this.$refs["tbCupon"].value.trim();

      let obj = this.totalCupons.filter((obj) => obj.codigo === cupon)[0];

      if (obj) {
        this.setDescuento(obj);
      } else {
        this.setDescuento({});
      }

      //  this.setPrecioCobro(product);
    },
  },
};
</script>

<style></style>
