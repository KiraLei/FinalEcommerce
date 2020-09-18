<template>
  <div href class="card-card">
    <h3>Desarrollo Front-End</h3>
    <p>
      <span>+</span> Ver más
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Card",
});
</script>

<style lang="scss">
.card-card {
  width: 300px;
  height: 300px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  background-image: url(~@/assets/images/front_end.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover ;
}
</style>
