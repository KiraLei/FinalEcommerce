<template>
      <div class="pay-card">
        <div class="width">
          <div class="amount-pay">
            <div>Subtotal</div>
            <span>s/   {{ totalProduct &&  totalProducts.reduce((a,b)=> Number( a.precio)+Number(b.precio)) }}</span>
          </div>
          <div class="input-icon">
            <input type="text" name id placeholder="Agrega un codigo de descuento" />
            <img src="@/assets/images/send1.png" alt />
          </div>
          <button>Continuar</button>
        </div>
      </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CardSubtotal",
   computed: {
    ...mapState({
      totalProducts: (state) => state.HomeStore.totalProducts,
    }),
  
  },
mounted(){
  console.log('totalProduct',this.totalProducts)
}
};
</script>

<style></style>
