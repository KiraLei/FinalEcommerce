<template>
  <div class="input-input-container">
    <input type="text" name="" id="name" placeholder="Nombre" required />
  </div>
</template>

<script  >
import Vue from "vue";

export default Vue.extend({
  name: "Input",
});
</script>

<style lang="scss">
.input-input-field {
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
}
</style>
