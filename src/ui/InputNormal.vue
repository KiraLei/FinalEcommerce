<template>
  <div class="input-normal-input-container">
    <input type="text" name id="name" :placeholder="placeholder" required />
  </div>
</template>

<script  >
import Vue from "vue";

export default Vue.extend({
  props: ["placeholder"],
  name: "InputNormal",
});
</script>

<style lang="scss">
.input-normal-input-container {
  width: 100%;
  input {
    width: 100%;
    outline: none;
    padding: 10px;
    border: 2px solid #d3d3d3;
    box-shadow: none;
    color: #111;
    box-sizing: border-box;
    border-radius: 5px;
    &::placeholder {
      color: #111;
      font-size: 0.8rem;
    }
  }
  input:valid {
    border-color: #5640ff;
  }
}
</style>
