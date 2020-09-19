<template>
  <a href="https://wa.link/qvi7b3" class="whatsapp" target="_blank">
    <img src="~@/assets/images/whatsapp.svg" alt="whatsapp" />
  </a>
</template>

<script  >
import Vue from "vue";

export default Vue.extend({
  name: "Input",
});
</script>

<style lang="scss">
.whatsapp {
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  bottom: 40px;
  right: 40px;
  border: none;
  color: #fff;
  background: #00d56b;
  outline: none;
  transition: 0.3s;
  text-align: center;
  line-height: 45px;
  img {
    width: 30px;
  }
}
</style>
