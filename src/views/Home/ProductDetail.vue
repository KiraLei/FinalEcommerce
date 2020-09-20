<template>
  <div class="view-home">
    <div class="view-home-header">
      <div>
        <img class="view-home-header-background" :src="imgSrc" />

        <div class="container">
          <div class="row">
            <div class="col-12 col-xl-8">
              <p class="view-home-header-texto-1-2">
                EXPECIALIZATE EN
              </p>
              <p class="view-home-header-texto-2-2">
                {{ title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" " style="padding-bottom: 150px;">
      <div class="container-fluid container-md">
        <div class="row">
          <div class="offset-8"></div>
          <div class="col-4">
            <MobilePhoneComponent class="d-none d-xl-block" />
          </div>
        </div>

        <div class="animation">
          <img src="../../assets/images/updown.png" class="updown" alt="" />
        </div>

        <div class="row view-home-product-description mt-4">
          <div class="col-12 col-xl-8">
            {{ description }}
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p class="view-home-product-texto-1 my-4">
              Con el respaldo de :
            </p>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-10 col-xl-8 d-flex justify-content-between">
            <img
              class="img-fluid"
              src="../../assets/images/respaldoIntercorp.png"
            />  <img class="img-fluid" src="../../assets/images/respaldoIdat.png" />
              <img
              class="img-fluid"
              src="../../assets/images/respaldoZegel.png"
            />
          </div>
        
        </div>

        <div class="row">
          <div class="col">
            <p class="view-home-product-texto-1 my-4">
              Horarios
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-xl-8">
            <ButtonComponent title="Virtual" />
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-6 col-xl-4">
            <ButtonComponent
              style="background-color: #f2f3f5; color: black;"
              title="Virtual"
            />
          </div>
          <div class="col-6 col-xl-4">
            <ButtonComponent
              style="background-color: #f2f3f5; color: black;"
              title="Virtual"
            />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <p class="view-home-product-texto-1 my-4">
              Malla Curricular
            </p>
          </div>
        </div>

   <div class="row">
          <div class="col-12 col-xl-8">
            <p class="view-home-product-texto-1 my-4">
              ¿Por que elegirnos?
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-xl-8">
            <p class="view-home-product-texto-1 my-4">
              Certificaciones
            </p>
          </div>
        </div>

        <div class="row view-home-product-description mt-4">
          <div class="col-12 col-xl-8">
            <p>
              Tu certificado indicará que has cursado el programa de
              especialización en Desarrollo Front-End y estará a nombre de Idat.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <img class="img-fluid" src="../../assets/images/certificado.png" />>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MobilePhoneComponent from "../../../src/ui/MobilePhone.vue";

import ButtonComponent from "../../../src/ui/Button1.vue";

export default {
  name: "ProductDetail",
  props: ["title", "description", "imgSrc"],
  components: {
    MobilePhoneComponent,
    ButtonComponent,
  },
  mounted() {
    this.title = this.$route.query.title;
    this.description = this.$route.query.description;
    this.imgSrc = this.$route.query.imgSrc;
  },
  created() {
    this.addTransparent();
    window.addEventListener("scroll", this.scroll);
  },
  destroyed() {
    this.removeTransparent();
    window.removeEventListener("scroll", this.scroll);
  },

  methods: {
    addTransparent() {
      document
        .getElementById("77f1a006-6668-41ea-a5cd-9215be17056f")
        .classList.add("header-background-transparent");
    },
    removeTransparent() {
      document
        .getElementById("77f1a006-6668-41ea-a5cd-9215be17056f")
        .classList.remove("header-background-transparent");
    },

    scroll() {
      if (window.scrollY > 200) {
        this.removeTransparent();
      } else {
        this.addTransparent();
      }
    },
  },
  data() {
    return {
      cards: [1, 2, 3, 4, 5, 6, 7, 8],
      cards2: [1, 2, 3],
    };
  },
};
</script>

<style></style>
