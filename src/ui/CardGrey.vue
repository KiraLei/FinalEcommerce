<template>
  <div href class="card-grey">
    <img src="~@/assets/images/bag.svg" class="card-grey-img" />
    <div>
      <p class="card-grey-title">
        {{ title }}
      </p>
      <p class="card-grey-description">
        {{ description }}
      </p>
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
  padding: 20px;
  width: 100%;
  //height: 150px;
  background-color: #f2f3f5;
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin: 30px 0;
}
.card-grey-img {
  padding: 30px;
}
.card-grey-title {
  font-size: 1.2rem;
font-weight: 400;
margin: 20px 0;
//letter-spacing: 0px;
}

.card-grey-description {
font-weight: 400;
  line-height: 1rem;
}
</style>
