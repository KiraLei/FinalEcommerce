<template>
  <div class="auth-login">
    <div class="app__hero">
      <!-- <img class="hero-logo" src="@/assets/logo-pachaqtec.png" alt="" /> -->
      <div class="hero-text">
        <h3>¡Explota todo tu potencial tecnológico!</h3>
        <h5>Con nuestros programas de especialización</h5>
      </div>
      <div class="hero-respaldo">
        <h5>Con el respaldo de:</h5>
        <!-- <img src="@/assets/images/bannerlogin.png" alt="" /> -->
      </div>
    </div>

    <div class="app__form">
      <div class="nav_login_register">
        <router-link class="input_login" to="/login"
          >Iniciar Sesión</router-link
        >
        <router-link class="input_register" to="/register"
          >Registrarse</router-link
        >
      </div>
      <hr />
      <div class="box_login">
        <input type="text" placeholder="Correo Electrónico" />
        <input type="text" placeholder="Contraseña" />
        <button>Ingresar</button>
        <h4>¿Olvidaste tu contraseña?</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthLogin",
};
</script>

<style lang="scss" scoped>
.auth-login {
  // width: 100%;
  // height: 100%;
  display: flex;
}

// .login {
//   padding: 10px;
//   margin-top: 50px;
//   margin-bottom: 20px;
//   display: flex;
//   flex-direction: column;
// }

input {
  margin: 0 auto;
  margin-bottom: 30px;
  padding-left: 15px;
  width: 320px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #8b9099;
}

button {
  margin: 0 auto;
  width: 333px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background-color: #5640ff;
  color: #ffffff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 700;
  line-height: 25px;
}

h4 {
  color: #5640ff;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 700;
  line-height: 25px;
  text-decoration: underline;
}

// #app {
//   width: 100%;
//   display: flex;
// }

.app__hero {
  width: 100%;
  height: calc(100vh - 153px);
  background-image: url(~@/assets/images/bannerlogin.png);
  object-fit: cover;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  .hero-logo {
    float: left;
  }

  .hero-text {
    position: absolute;
    top: 40%;
    right: 50px;
    width: 342px;
    text-align: right;
    color: #ffffff;
    font-family: Poppins;
  }

  .hero-respaldo {
    width: 232px;
    height: 60px;
    display: flex;
    flex-direction: column;
    margin-top: 420px;
    text-align: left;
    color: #ffffff;
    font-family: "Open Sans";
    font-weight: 600;
    line-height: 17px;
  }
}
// FORMULARIO DE LOGIN
.app__form {
  width: 420px;
  background: #fff;
  text-align: center;
  // padding: 40PX;
  .nav_login_register {
    margin: auto;
    width: 100%;
    padding: 20px 37px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    hr {
      border-top: 2px solid rgba(0, 0, 0, 0.5);
      border: 0;
      color: blue;
    }
    .input_login,
    .input_register {
      color: #000;
      font-weight: bold;
      padding-bottom: 15px;
      text-align: center;
      width: 173px;
      text-decoration: none;
      border-bottom: 3px solid #000;
    }
    .input_register{
      border-bottom: none;
    }
    // a {
    //   padding-bottom: 10px;
    //   margin: 0;
    //   background: red;
    // }
  }
  .box_login {
  }
}

/*-----MOBILE-----*/

/*.app__hero {
  display: none;
}

.login-app {
  width: 100%;
  height: 605px;
  display: flex;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16);
  margin: 0;
  text-align: center;
  color: #2c3e50;
}

.nav {
  width: 100%;
  padding-top: 20px;
  display: flex;
  justify-content: space-around;

  a {
    width: 150px;
    font-size: 16px;
    padding-bottom: 15px;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    color: #000425;

    &.router-link-exact-active {
      border-bottom: 5px solid #000425;
    }
  }
}
*/

</style>
