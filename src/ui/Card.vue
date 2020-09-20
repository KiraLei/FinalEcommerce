<template>
  <div class="card-card">
    <img class="card-card-background-img" :src="imgSrc" />

    <div class="card-background">
      <div class="card-text-box">
        <h3>
          {{ title }}
        </h3>
        <span class="card-card-ver-mas" @click="verMas">
          <img src="@/assets/images/btn_mas.svg" alt=""  /> Ver
          más
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: ["imgSrc", "title", "description"],
  name: "Card",

  methods: {
    verMas() {

      this.$router.push({
        path: "/:product",
        query: {
          imgSrc: this.imgSrc,
          title: this.title,
          description: this.description,
        },
      });
      
    },
  },
});
</script>

<style lang="scss">
.card-card-ver-mas {
  cursor: pointer;
}
.card-card {
  width: 344px;
  height: 320px;
  box-sizing: border-box;
  border-radius: 10px;
  position: relative;

  .card-card-background-img {
    width: 100%;
    height: 100%;
  }

  .card-background {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 320px;
    padding: 20px;
    border-radius: 10px;
    background: linear-gradient(180deg, #0f052900, #0f0529);
    color: #fff;
    display: flex;
    .card-text-box {
      align-self: flex-end;
      width: 100%;
      span {
        display: block;
        text-align: right;
        font-weight: bold;
      }
    }
  }
}
</style>
