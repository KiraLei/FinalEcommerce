<template>
  <div class="auth-layout">
    <!-- <img src="https://picsum.photos/945/660" alt />-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "AuthLayout",

  created() {
    document
      .getElementById("77f1a006-6668-41ea-a5cd-9215be17056f")
      .classList.toggle("d-none");

    document
      .getElementById("12f40b7f-243c-4e4c-8c9f-53a84445cf88")
      .classList.toggle("d-none");

   // document.getElementById("principalContainer").style.marginTop='0';



  },

  destroyed() {


 document
      .getElementById("77f1a006-6668-41ea-a5cd-9215be17056f")
      .classList.toggle("d-none");

    document
      .getElementById("12f40b7f-243c-4e4c-8c9f-53a84445cf88")
      .classList.toggle("d-none");

  //  document.getElementById("principalContainer").style.margin='60px';

  },
};
</script>

<style></style>
