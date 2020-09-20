<template>
  <div class="tab-pane" id="Registration">
    <form role="form" class="form-horizontal">
      <div class="row">
        <div class="col-xl-12">
          <div class="row text-center sign-with">
            <div class="col-md-12">
              <h3 class="pt-2">Puedes registrarte con:</h3>
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
              <h3 class="pt-3">También puedes registrarte con tu correo</h3>
            </div>
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="col-md-12 pt-4">
          <input type="text" class="form-control" placeholder="Nombres y apellidos" />
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <input type="email" class="form-control" id="email" placeholder="Correo electrónico" />
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <input type="password" class="form-control" id="password" placeholder="Contraseña" />
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <input
            type="password"
            class="form-control"
            id="password_confirmation"
            placeholder="Repite contraseña"
          />
        </div>
      </div>

      <div class="form-group terminos">
        <div class="col-sm-12 orden">
          <input type="checkbox" name="t_and_c" id="t_and_c" class="hidden" value="1" />
          Acepto
          <strong class="label label-primary">Términos y Condiciones</strong>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <button type="button" class="btn boton-form btn-sm">Registrarse</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AuthRegister",
};
</script>

<style lang="scss" scoped>
</style>