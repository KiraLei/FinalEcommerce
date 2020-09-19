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
      <div class="nav">
        <router-link class="login" to="/login">Login</router-link>
        <router-link class="register" to="/register">Register</router-link>
      </div>
      <div class="login">
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

<style lang="scss" scoped >
.auth-login{
  height: 100%;
  
  display: flex;
  align-items: stretch;
}
.login {
  padding: 10px;
  margin-top: 50px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  background: red;
}

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
/*-----DESKTOP-----*/

@media screen and (min-width: 1024px) {
  #app {
    width: 100%;
    display: flex;
  }

  .app__hero {
    width: 100%;
    height: 100%;
    padding: 24px 70px 30px 80px;
    background-image: url(~@/assets/images/bannerlogin.png);
    object-fit: cover;
    background-origin: center;
    background-repeat: no-repeat;
  }
.app__form{
  background: blue;
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