<template>
  <div class="checkout-component">
    <div class="title_inline">
      <div>
        <img src="@/assets/images/leftarrow.png" alt />
      </div>
      <h2>Carrito de compras</h2>
    </div>
    <div class="view-checkout checkout">
      <div>
        <CardList></CardList>
        <CardList></CardList>
        <CardList></CardList>
      </div>

      <CardSubtotal></CardSubtotal>
    </div>
  </div>
</template>

<script>
import CardList from "@/views/PaymentGateway/CardList.vue";
import CardSubtotal from "@/views/PaymentGateway/CardSubtotal.vue";
export default {
  name: "Checkout",
  components: {
    CardList,
    CardSubtotal,
  },
};
</script>

<style></style>

