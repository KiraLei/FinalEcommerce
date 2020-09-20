<template>
  <div class="auth-layout" >
    <!-- <img src="https://picsum.photos/945/660" alt />-->

    <div class="container-fluid">
      <div class="row">
        <!--Contenedor de imagen -->
        <div class="d-none d-xl-block banner col-md-12 col-lg-12 col-xl-8">
          <div class="top">
            <div class="logo-pacha">
              <img src="@/assets/images/logo-pacha.svg" alt />
            </div>
          </div>
          <div class="middle">
            <div class="grupo-texto">
              <h1>
                ¡Explota todo tu potencial
                <br />tecnológico!
              </h1>

              <h2>
                Con nuestros programas
                <br />de especialización
              </h2>
            </div>
          </div>

          <div class="bottom">
            <div class="logo-empresas">
              <img src="@/assets/images/logo-empresas.svg" alt />
            </div>
          </div>
        </div>
        <!--Contenedor de registro -->

        <div class="azul col-md-12 col-lg-12 col-xl-4">
          <div class="contenido-form">
            <div class="row">
              <div class="col-md-12">
                <!-- Nav tabs <a href="#Registration" data-toggle="tab">Registrarse</a>-->
                <ul class="nav nav-tabs">
                  <li class="activo">
                    <router-link to="/login">Iniciar Sesión</router-link>
                  </li>
                  <li>
                    <router-link to="/register">Registrarse</router-link>
                  </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                  <!-- Login -->
                  <!-- Registration -->

                  <router-view></router-view>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
//import AuthLogin from "@/views/Auth/AuthLogin.vue";
//import AuthRegister from "@/views/Auth/AuthRegister.vue";
export default {
  name: "AuthLayout",

  created() {
    //  this.addTransparent();

    document
      .getElementById("12f40b7f-243c-4e4c-8c9f-53a84445cf88")
      .classList.toggle("d-none");

    // document.getElementById("principalContainer").style.marginTop='0';
  },

  destroyed() {
    

    document
      .getElementById("12f40b7f-243c-4e4c-8c9f-53a84445cf88")
      .classList.toggle("d-none");

    //  document.getElementById("principalContainer").style.margin='60px';
  },
 
};
</script>

<style lang='scss'>

.auth-layout{

 height: 500px;

}

</style>
