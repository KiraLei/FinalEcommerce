<template>
  <div class="auth-register">
    <h2>PAGINA REGISTER</h2>
    <div class="app__hero">
      <!-- <img class="hero-logo" src="@/assets/logo-pachaqtec.png" alt="" /> -->
      <div class="hero-text">
        <h3>¡Explota todo tu potencial tecnológico!</h3>
        <h5>Con nuestros programas de especialización</h5>
      </div>
      <div class="hero-respaldo">
        <h5>Con el respaldo de:</h5>
        <!-- <img src="@/assets/respaldo.png" alt="" /> -->
      </div>
    </div>
    <div class="app__form">
      <div class="nav">
        <router-link class="login" to="/login">Login</router-link>
        <router-link class="register" to="/register">Register</router-link>
      </div>
      <div class="register">
        <div class="campos">
          <input type="text" placeholder="Nombres y apellidos" />
          <input type="text" placeholder="Correo electrónico" />
          <input type="text" placeholder="Contraseña" />
          <input type="text" placeholder="Repite la contraseña" />
        </div>
        <label for="check">
          <input class="checkbox" type="checkbox" name="" id="check" />
          Acepto <span>Términos y condiciones</span>
        </label>
        <button>Registrarse</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthRegister",
};
</script>

<style lang="scss" scoped>
/*-----MOBILE-----*/
.register {
  margin-top: 50px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.campos {
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.campos input {
  margin: 0 auto;
  margin-bottom: 30px;
  padding-left: 15px;
  width: 320px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #8b9099;
}

// .checkbox-container {
//   width: 196px;
//   height: 24px;
//   color: #222222;
// }

label {
  margin: 0 auto;
  margin-bottom: 20px;
  width: 226px;
  font-size: 14px;
  line-height: 24px;

  input {
    font-weight: 400;
  }

  span {
    text-decoration: underline;
    color: #222222;
    font-family: Montserrat;
    font-weight: 700;
  }
}

button {
  margin: 0 auto;
  margin-bottom: 20px;
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

/*-----MOBILE-----*/
.register-app {
  width: 100%;
  height: 605px;
  display: flex;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16);
  margin: 0;
  text-align: center;
  color: #2c3e50;
}
.app__hero {
  display: none;
}

.app {
  width: 375px;
  height: 605px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16);
  margin: 0 auto;
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

/*-----DESKTOP-----*/

@media screen and (min-width: 1024px) {
  #app {
    width: 100%;

    display: flex;
  }

  .app__hero {
    padding: 24px 70px 30px 80px;
    display: block;
    width: 70%;
    background-color: #3b00ff;
  }

  .hero-logo {
    float: left;
  }

  .hero-text {
    width: 342px;
    height: 134px;
    margin-top: 165px;
    float: right;
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

  .nav {
    width: 100%;
    padding-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
      padding-bottom: 10px;
      margin: 0;
    }
  }
}
</style>