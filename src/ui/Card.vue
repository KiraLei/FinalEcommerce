<template>
  <div href="" class="card-card">
    <h3>Desarrollo Front-End</h3>
    <p><span>+</span> Ver más</p>
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
  width: 344px;
  height: 320px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  background-image: url(https://picsum.photos/200/300?random=1);

  background-position: center;
}
</style>
