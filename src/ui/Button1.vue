<template>
  <button class="btn_static" > 
    {{title}}
  </button>
</template>

<script  >
import Vue from "vue";

export default Vue.extend({
 props:['title'],
  name: "Button1",
});
</script>


<style lang="scss">
 
</style>