<template>
  <a href="https://wa.link/qvi7b3" class="whatsapp" target="blank">    
        <img src="@/assets/images/whatsapp.png" alt />
    </a>
</template>

<script lang="ts">
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
       // border-radius: 50%;
        bottom: 30px;
        right: 40px;
        border: none;
        color: #fff;
       // background: #00d56b;
        outline: none;
        transition: 0.3s;
        text-align: center;
      //  line-height: 62px;
      }
      .whatsapp:hover {
      //  background: #05be62;
        transition: 0.3s;
      }
      .whatsapp i {
        font-size: 30px;
      }
</style>
