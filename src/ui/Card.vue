<template>
  <div class="card-card">
    <button @click="addCard" class="card-card-add">AGREGAR</button>
    <img class="card-card-background-img" :src="imgSrc" />
    <div class="card-background">
      <div class="card-text-box">
        <h3>{{ title }}</h3>
        <span class="card-card-ver-mas" @click="verMas">
          <img src="@/assets/images/btn_mas.svg" alt /> Ver
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
    addCard() {
      this.$emit("addcard");
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

  .card-card-add {
    position: absolute;
    background: #f00;
    color: #fff;
    padding: 7px 10px;
    border: 0;
    right: 10px;
    top: 10px;
    border-radius: 4px;
    cursor: pointer;
    z-index: 9;
  }

  .card-card-background-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 10px;
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
      h3{
        font-size: 1.5rem;
      }
      span {
        display: block;
        text-align: right;
        font-weight: bold;
      }
    }
  }
}
</style>
