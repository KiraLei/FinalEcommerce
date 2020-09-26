<template>
  <div class="checkout-component">
    <div class="title_inline">
      <div>
        <img src="@/assets/images/leftarrow.png" alt />
      </div>
      <h2>Carrito de compras</h2>
    </div>
    <div class="view-checkout checkout">
      <div class="item-component-checkout">
        <CardList
          v-for="product in totalProducts"
          v-bind:key="product.id"
          v-bind:imagen="product.imagen"
          v-bind:nombre="product.nombre"
          v-bind:precio="product.precio"
          v-bind:id="product.id"
          v-on:remove="remove(product)"
        />
      </div>

      <CardSubtotal></CardSubtotal>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CardList from "@/views/PaymentGateway/CardList.vue";
import CardSubtotal from "@/views/PaymentGateway/CardSubtotal.vue";
export default {
  name: "Checkout",
  components: {
    CardList,
    CardSubtotal,
  },
  computed: {
    ...mapState({
      totalProducts: (state) => state.HomeStore.totalProducts,
    }),
  },
  mounted() {
   
  },
  methods: {
    ...mapActions({
      removeProduct: "HomeStore/removeProduct",
    }),
    remove(product) {
      this.removeProduct(product);
    },
  },
};
</script>

<style></style>
