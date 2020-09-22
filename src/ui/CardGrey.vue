<template>
  <div href class="card-grey">
    <img src="~@/assets/images/bag.svg" class="card-grey-img" />
    <div class="card-text-box">
      <p class="card-grey-title">{{ title }}</p>
      <p class="card-grey-description">{{ description }}</p>
    </div>
  </div>
</template>

<script  >
import Vue from "vue";

export default Vue.extend({
  props: ["imgSrc", "title", "description"],
  name: "CardGrey",
});
</script>

<style lang="scss">
.card-grey {
  padding: 20px 30px 20px 20px;
  width: 100%;
  //height: 150px;
  background-color: #f2f3f5;
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin: 15px 0;
}
.card-grey-img {
  padding: 30px 40px 30px 30px;
}
.card-grey-title {
  font-size: 1.2rem;
  font-weight: 500;
  margin: 10px 0;
  //letter-spacing: 0px;
}

.card-grey-description {
  font-weight: 400;
  // line-height: 1rem;
}
@media (max-width: 570px) {
  .card-grey {
    // display: block;
    text-align: center;
    .card-text-box {
      width: 100%;
      text-align: center;
    }
    .card-grey-img {
      padding: 10px;
    }
    .card-grey-description {
      display: none;
    }
  }
}
</style>
