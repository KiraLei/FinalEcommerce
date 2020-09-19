<template>
  <div class="app">
    <div>
      <Header />
    </div>

    <div style="padding-top: 60px;">
      <div>
          <router-view></router-view>
      </div>    
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
<style lang="scss">
@import "./assets/styles/main.scss";
@import "~bootstrap/dist/css/bootstrap.css";

.app {
  width: 100vw;
}
</style>
