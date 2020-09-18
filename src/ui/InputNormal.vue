<template>
  <div class="input-normal-input-container">
    <input type="text" name="" id="name" :placeholder="placeholder" required />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props:['placeholder'],
  name:'InputNormal'
});
</script>

<style lang="scss">
.input-normal-input-container {
  width: 250px;
  input {
    width: 100%;
    outline: none;
    padding: 10px;
    border: 2px solid #d3d3d3;
    box-shadow: none;
    color: #111;
    box-sizing: border-box;
    border-radius: 5px;
  }
  input:valid {
    border-color: #5640ff;
  }
}
</style>
