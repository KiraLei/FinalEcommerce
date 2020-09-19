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
    <div class="view-home-body">
      <div class="container-fluid container-md">
        <div class="row">
          <div class="offset-8"></div>
          <div class="col-4">
            <MobilePhoneComponent class="d-none d-xl-block" />
          </div>
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
            <CardComponent class="m-2 w-md-100" v-for="obj in cards" v-bind:key="obj" />
          </div>
        </div>
      </div>
    </div>


    
    <div class="view-home-footer">
      <div class="view-home-footer-section-1">
          <img src="../../assets/images/girl1.png" />

          <div>
            <p>Sé parte de la comunidad</p>
            <span>
              Programas virtuales para el desarrollo de habilidades de
              programación a lo largo de todo el Stack tecnológico. Al finalizar
              sabrás cómo crear una página web y desarrollar la lógica detrás del
              funcionamiento de una aplicación, así como formar parte de una gran
              comunidad de desarrolladores.
            </span>
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
      </div>

      <div></div>
    </div>

    <ButtonWhatsappComponent />

    <FooterComponent />
  </div>
</template>

<script>
import CardComponent from "../../../src/ui/Card.vue";
import MobilePhoneComponent from "../../../src/ui/MobilePhone.vue";
import CardGreyComponent from "../../../src/ui/CardGrey.vue";
import ButtonWhatsappComponent from "../../../src/ui/ButtonWhatsapp.vue";
import FooterComponent from "../../../src/components/Footer.vue";

export default {
  name: "Home",
  components: {
    CardComponent,
    ButtonWhatsappComponent,
    FooterComponent,
    CardGreyComponent,
    MobilePhoneComponent,
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
