<template>
  <div class="input-password-input-field">
    <input type="password" name="" id="password" required />
    <label for="name">Contraseña</label>
    <button class="show" onclick="hide_see()">
      <i class="far fa-eye"></i>
    </button>
  </div>
</template>

<script  >
import Vue from "vue";

export default Vue.extend({
 name:'InputPassword'
});
</script>

<style lang="scss">
.input-password-input-field {
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  width: 250px;
  height: 50px;
  line-height: 50px;
  border: 2px solid #8b9099;
  border-radius: 5px;

  label {
    position: absolute;
    top: 0;
    left: 10px;
    color: #8f8f8f;
    transition: 0.2s all;
    cursor: text;
  }
  input {
    width: 100%;
    /* position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0; */
    border: 0;
    outline: none;
    padding: 10px;
    box-shadow: none;
    font-size: 14px;
    color: #111;
    box-sizing: border-box;
  }
  input:invalid {
    outline: 0;
  }
  input:focus ~ label,
  input:valid ~ label {
    font-size: 10px;
    top: -15px;
    color: #5640ff;
  }
  .show {
    position: absolute;
    width: 26px;
    height: 26px;
    border-radius: 15px;
    top: 10px;
    right: 5px;
    border: none;
    color: #cdcdcd;
    background: none;
    outline: none;
    transition: 0.3s;
  }
  .show:hover {
    color: #5640ff;
    transition: 0.3s;
  }
}
</style>
