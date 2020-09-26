<template>
  <!-- class="tab-pane"-->
  <div id="Registration">
    <form @submit.prevent="handleSubmit" role="form" class="form-horizontal">
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
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            v-model.trim="$v.username.$model"
          />
        </div>
        <div class="error" v-if="$v.username.$error">Este campo es requerido</div>
      </div>

      <div class="form-group">
        <div class="col-md-12 pt-4">
          <input
            type="text"
            class="form-control"
            placeholder="Nombres y apellidos"
            v-model.trim="$v.nombre.$model"
          />
        </div>
        <div class="error" v-if="$v.nombre.$error">Este campo es requerido</div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Correo electrónico"
            v-model.trim="$v.email.$model"
          />
        </div>
        <div class="error" v-if="$v.email.$error">Este campo es requerido</div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Contraseña"
            v-model.trim="$v.password.$model"
          />
        </div>
        <div class="error" v-if="$v.password.$error">Este campo es requerido</div>
      </div>

      <!-- <div class="form-group">
        <div class="col-sm-12">
          <input
            type="password"
            class="form-control"
            id="password_confirmation"
            placeholder="Repite contraseña"
          />
        </div>
      </div>-->

      <div class="form-group terminos">
        <div class="col-sm-12 orden">
          <input type="checkbox" name="t_and_c" id="t_and_c" class="hidden" value="1" />
          Acepto
          <strong class="label label-primary">Términos y Condiciones</strong>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <button class="btn boton-form btn-sm">Registrarse</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

import { mapActions } from "vuex";
export default {
  name: "AuthRegister",
  data() {
    return {
      username: "",
      nombre: "",
      email: "",
      password: "",
    };
  },
  validations: {
    username: {
      required,
    },
    nombre: {
      required,
    },
    email: {
      required,
      email,
    },
    password: {
      required,
    },
  },
  methods: {
    ...mapActions({
      postRegister: "AuthStore/postRegister",
    }),
    handleSubmit() {
      console.log("this.$v", this.$v);
      this.$v.$touch();

      this.postRegister({
        username: this.username,
        nombre: this.nombre,
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-group{
  position: relative;
.error {
  font-size: 11px;
  position: absolute;
  color: rgb(250, 58, 58);
  // border: 1px solid #f00;
}
}
</style>