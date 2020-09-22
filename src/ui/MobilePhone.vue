<template>
  <div class="mobile-phone">
    <div class="container-phone">
      <p>Postula y obtén un 10% de descuento en el programa</p>
      <InputNormalComponent class="mobile-phone-control" placeholder="NOMBRE" />
      <InputNormalComponent class="mobile-phone-control" placeholder="CELULAR" />
      <InputNormalComponent class="mobile-phone-control" placeholder="CORREO ELECTRONICO" />

      <select name id class="mobile-phone-control">
        <option value="0">PROGRAMA</option>
        <option value>Desarrollo Front-End</option>
        <option value>Desarrollo Back-End</option>
        <option value>Desarrollo de Apps Móviles</option>
        <option value>Diseño UX/UI</option>
        <option value>Desarrollo de Videojuegos</option>
      </select>
      <div class="terms">
        <input type="checkbox" />
        Acepto
        <span>Terminos y condiciones</span>
      </div>
      <Button1Component class="mobile-phone-control" title="Quiero Postular" />
    </div>
  </div>
</template>

<script  >
import InputNormalComponent from "./InputNormal.vue";
import Button1Component from "./Button1.vue";
import Vue from "vue";

export default Vue.extend({
  name: "MobilePhone",
  components: {
    InputNormalComponent,
    Button1Component,
  },
  data() {
    return {
      nombre: "nombre",
    };
  },
});
</script>

<style lang="scss">
.mobile-phone {
  text-align: center;
  width: 288px;
  height: 529px;
  position: fixed;
  top: 200px;
  z-index: 5000;
  background-image: url(~@/assets/images/mobile.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .container-phone {
    width: 200px;
    margin:70px  auto;
  }
}
.mobile-phone-control {
  width: 200px;
  margin-bottom: 15px;
  option{
    font-size: 13px;
  }
}
select {
  width: 100%;
  outline: none;
  padding: 10px;
  border: 2px solid #d3d3d3;
  box-shadow: none;
  color: #111;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 0.8rem;
}
.terms {
  font-size: 0.7rem;
  margin-bottom: 10px;
  span {
    font-weight: 600;
    text-decoration-line: underline;
  }
}
</style>
