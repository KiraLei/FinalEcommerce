<template>
  <div class="view-home">
    <div class="view-home-header">
      <div>
        <img class="view-home-header-background" src="@/assets/images/banner2.png" />

        <div class="container">
          <div class="row">
            <div class="col-12 col-xl-8">
              <p class="view-home-header-texto-1">¡Explota todo tu potencial tecnológico!</p>
              <p class="view-home-header-texto-2">Con nuestros programas de especialización</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="view-home-body" style="padding-bottom: 150px;">
      <div class="container-fluid container-md">
        <div class="row">
          <div class="offset-8"></div>
          <div class="col-4">
            <MobilePhoneComponent class="d-none d-xl-block" />
          </div>
        </div>

        <div class="animation">
          <img src="../../assets/images/updown.png" class="updown" alt />
        </div>

        <div class="row">
          <div class="col my-5">
            <img src="../../assets/images/respaldo.png" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p class="view-home-body-texto-1 mb-4">Conoce nuestros Programas de Especialización</p>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-xl-8 d-flex flex-wrap justify-content-start">
            <template v-if="!!products.length">
              <CardComponent
                class="m-2 w-md-100"
                v-for="product in products"
                v-bind:key="product.id"
                v-bind:imgSrc="product.thumb"
                v-bind:title="product.nombre"
                v-bind:description="product.description"
                v-on:addcard="addCard(product)"
              />
            </template>
            <template v-else>No hay datos aun</template>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="view-home-footer"> -->
    <div class="banner-secundary">
      <div class="container-banner">
        <img src="../../assets/images/girl1.png" />

        <div class="container-banner-text">
          <p>Sé parte de la comunidad</p>
          <span>
            Programas virtuales para el desarrollo de habilidades de
            programación a lo largo de todo el Stack tecnológico.
            <br />
            <br />Al finalizar sabrás cómo crear una página web y desarrollar la
            lógica detrás del funcionamiento de una aplicación, así como formar
            parte de una gran comunidad de desarrolladores.
          </span>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <p class="texto-dark-blue-2">Beneficios</p>
      </div>

      <div class="row">
        <div class="col-12 col-xl-8" v-for="obj in cards2" v-bind:key="obj">
          <CardGreyComponent
            imgSrc="~@/assets/images/front_end.jpg"
            title="Aprende de Expertos"
            description="Aprovecha tu tiempo al máximo en nuestras clases virtuales y participa presencialmente de nuestras hackathones semanales para conocer y participar de la comunidad profesional que liderará la transformación tecnológica del Perú."
          />
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CardComponent from "../../../src/ui/Card.vue";
import MobilePhoneComponent from "../../../src/ui/MobilePhone.vue";
import CardGreyComponent from "../../../src/ui/CardGrey.vue";
export default {
  name: "Home",
  components: {
    CardComponent,
    CardGreyComponent,
    MobilePhoneComponent,
  },
  created() {
    this.addTransparent();
    window.addEventListener("scroll", this.scroll);
  },
  data() {
    return {
      cards: [],
      cards2: [1, 2, 3],
    };
  },
  watch: {},
  computed: {
    ...mapState({
      products: (state) => state.HomeStore.products.results,
    }),
  },
  methods: {
    ...mapActions({
      getProducts: "HomeStore/getProducts",
      addProduct: "HomeStore/addProduct",
    }),
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
    addCard(product) {
     
      this.addProduct(product);
    },
  },
  mounted() {
    this.getProducts();
  },
  destroyed() {
    this.removeTransparent();
    window.removeEventListener("scroll", this.scroll);
  },
};
</script>

<style></style>
