<template>
  <div class="view-home">
    <div class="view-home-header">
      <div>
        <img
          class="view-home-header-background"
          src="../../assets/images/banner2.png"
        />

        <div class="container">
          <div class="row">
            <div class="col-1">
              <img
                class="view-home-header-icono"
                src="../../assets/images/iconoPachaqtec.png"
              />
            </div>
          </div>
          <div class="row">
            <div class="offset-2 col-10">
              <p class="view-home-header-texto-1">
                ¡Explota todo tu potencial tecnológico!
              </p>
              <p class="view-home-header-texto-2">
                Con nuestros programas de especialización
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid container-md">
      <div class="row">
        <div class="col">
          <p class="view-home-body-texto-1">
            Con nuestros programas de especialización
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col d-flex flex-wrap justify-content-center">
          <CardComponent class="m-2" v-for="obj in cards" v-bind:key="obj" />
        </div>
      </div>
    </div>

    <div class="view-home-footer">
      <div class="view-home-footer-section-1">
        <img src="../../assets/images/girl1.png" />

        <div>
          <p>Sé parte de la comunidad</p>
          <span
            >Programas virtuales para el desarrollo de habilidades de
            programación a lo largo de todo el Stack tecnológico.          
            Al finalizar sabrás cómo crear una página web y desarrollar la
            lógica detrás del funcionamiento de una aplicación, así como formar
            parte de una gran comunidad de desarrolladores.</span
          >
        </div>
      </div>

      <div class="container">
        <div class="row">
          <p class="texto-dark-blue-2">
            Beneficios
          </p>
        </div>
      </div>

      <div></div>
    </div>

    <ButtonWhatsappComponent />
  </div>
</template>

<script>
import CardComponent from "../../../src/ui/Card.vue";
import ButtonWhatsappComponent from "../../../src/ui/ButtonWhatsapp.vue";

export default {
  name: "Home",
  components: {
    CardComponent,
    ButtonWhatsappComponent,
  },
  data() {
    return {
      cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
};
</script>

<style></style>
