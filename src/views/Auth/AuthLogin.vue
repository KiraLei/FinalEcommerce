<template>
  <div class="tab-pane active" id="Login">
    <div class="row">
      <div class="col-xl-12">
        <div class="row text-center sign-with">
          <div class="col-md-12">
            <h3 class="pt-2">Puedes iniciar sesión con:</h3>
          </div>
          <div class="col-md-12">
            <div class="btn-group btn-group-justified">
              <a href="#" class="btn">
                <img class="social-icon" src="@/assets/images/facebook.svg" alt />
              </a>
              <a href="#" class="btn">
                <img class="social-icon" src="@/assets/images/linkedin.svg" alt />
              </a>
            </div>
          </div>
          <div class="col-md-12">
            <h3 class="pt-3">También puedes iniciar sesión con tu correo</h3>
          </div>
        </div>
      </div>
    </div>

    <form role="form" class="form-horizontal">
      <div class="form-group">
        <div class="col-sm-12 pt-4">
          <input type="email" class="form-control" id="email1" placeholder="Email" />
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-12">
          <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Email" />
        </div>
      </div>

      <div class="form-group">
        <div class="col-lg-12">
          <button type="submit" class="btn btn-sm boton-form">Ingresar</button>
        </div>
      </div>

      <div class="form-group contraseña">
        <div class="col-lg-12">
          <a href>¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AuthLogin",
};
</script>

<style lang="scss" scoped>
</style>
