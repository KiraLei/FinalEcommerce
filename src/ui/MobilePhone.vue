<template>
  <div class="mobile-phone">
    <p>
      Postula y obtén un 10% de descuento en el programa
    </p>
    <InputNormalComponent class="mobile-phone-control" :placeholder="Nombre" />
    <InputNormalComponent class="mobile-phone-control" :placeholder="Nombre" />
    <InputNormalComponent class="mobile-phone-control" :placeholder="Nombre" />
    <InputNormalComponent class="mobile-phone-control" :placeholder="Nombre" />
    <Button1Component class="mobile-phone-control" title="Quiero Postular" />
    
  </div>
</template>

<script lang="ts">
import InputNormalComponent from "./InputNormal.vue";
import Button1Component from "./Button1.vue";
import Vue from "vue";

export default Vue.extend({
  name: "MobilePhone",
  components: {
    InputNormalComponent,
    Button1Component,
  },
});
</script>

<style lang="scss">
.mobile-phone {
  width: 288px;
  height: 529px;

  position: fixed;
  top: 250px;

  z-index: 5000;

  background-image: url(~@/assets/images/mobile.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  padding: 60px 40px;

  display: flex;
  justify-content: center;
}
.mobile-phone-control {
  width: 200px;
  margin: 15px 0;
}
</style>
