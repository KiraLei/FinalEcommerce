<template>
  <div class="firt-section">
    <div class="checkout-card">
      <figure>
        <img class="cardList-img" :src="imagen" />
      </figure>
      <div class="checkout-align">
        <h2>{{ nombre }}</h2>
        <h3>Dto. 25%</h3>
        <div class="amount-card">
          <button @click="remove">Eliminar</button>
          <div class="amount-second">S/{{ precio }}</div>
        </div>
      </div>
    </div>
    <div class="amount">S/{{ precio }}</div>
  </div>
</template>

<script>
export default {
  name: "CardList",
  props: ["nombre", "precio", "imagen", "id"],
  methods: {
    remove() {
      this.$emit("remove");
    },
  },
};
</script>

<style>
.cardList-img {
  width: 200px;
  height: 200px;
}
@media (min-width: 325px;) {
}
</style>
