<template>
  <div class="card-card">
    <div class="card-background">
      <div class="card-text-box">
        <h3>
          Desarrollo
          <br />Front-End
        </h3>
        <span>
          <img src="@/assets/images/btn_mas.svg" alt=""> Ver más
        </span>
      </div>
    </div>
  </div>
</template>

<script  >
import Vue from "vue";

export default Vue.extend({
  name: "Card",
});
</script>

<style lang="scss">
.card-card {
  width: 344px;
  height: 320px;
  box-sizing: border-box;
  border-radius: 10px;
  background-image: url(~@/assets/images/front_end.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .card-background {
    width: 344px;
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
