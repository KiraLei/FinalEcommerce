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

    <form @submit.prevent="handleSubmit" role="form" class="form-horizontal">
      <div class="form-group">
        <div class="col-sm-12 pt-4">
          <input
            type="text"
            class="form-control"
            id="email1"
            placeholder="Username"
            v-model="username"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-12">
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            v-model="password"
          />
        </div>
      </div>

      <div class="form-group">
        <div class="col-lg-12">
          <button type="submit" class="btn btn-sm boton-form btn_static">Ingresar</button>
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
import { mapActions, mapState } from "vuex";
export default {
  name: "AuthLogin",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  watch: {
    isLogin(value) {
      if (value) {
        this.$router.replace("/pago/checkout");
      }
      console.log("value", value);
    },
  },
  computed: {
    ...mapState({
      isLogin: (state) => state.AuthStore.isLogin,
    }),
  },
  methods: {
    ...mapActions({
      postLogin: "AuthStore/postLogin",
    }),
    handleSubmit() {
      // console.log("this.$v", this.$v);
      // this.$v.$touch();

      this.postLogin({
        username: this.username,
        password: this.password,
      });
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
</style>
