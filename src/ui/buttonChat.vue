<template>
  <div>
    <div class="dropdown">
      <div class="drop-up">
        <button id="myBtn" class="dropbtn">+</button>
        <div id="myDropdown" class="dropdown-content">
          <div class="drop-text">
            Desconectado Lamentamos no estar para atenderte... Pero déjanos tus
            datos y consulta para escribirte lo antes posible 😊También estamos
            en WhatApp
            <a href="https://wa.link/qvi7b3" class="whatsapp" target="_blank"
              >+51 977 832 615</a
            >
          </div>
          <div class="box-inputs">
            <input type="text" placeholder="*Nombre" />
            <input type="text" placeholder="*correo electrónico" />
            <input type="text" placeholder="*Teléfono" />
            <input type="text" placeholder="*Mensaje" />
          </div>
          <div class="drop-button-box">
            <button class="drop-button">Enviar</button>
          </div>
          <div class="credits">
            <span>Powered By<a href="#">Team #1</a></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "ButtonChat",
});

// document.getElementById("myBtn").onclick = function () {
//   myFunction();
// };
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

</script>

<style lang="scss">
.dropdown {
  position: fixed;
  left: 40px;
  bottom: 40px;
  .drop-up {
    position: relative;
    transition: 0.5s;
    .dropbtn {
      width: 50px;
      height: 50px;
      background-color: #4caf50;
      color: white;
      border-radius: 50%;
      font-size: 24px;
      border: none;
      cursor: pointer;
      outline: none;
      &:hover {
        background-color: #307732;
      }
    }
    .dropdown-content {
      height: 420px;
      transition: 0.5s;
      display: none;
      position: absolute;
      // padding: 10px;
      bottom: 60px;
      background-color: #fff;
      border-radius: 5px;
      min-width: 250px;
      overflow: auto;
      border: 1px solid #cdcdcd;
      // box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

      .drop-text {
        padding: 10px;
        background: red;
      }
      .box-inputs {
        padding: 10px;
        input {
          box-sizing: border-box;
          width: 100%;
          padding: 10px;
          border: 2px solid #cdcdcd;
          border-radius: 5px;
          margin-bottom: 10px;
        }
      }
      .drop-button-box {
        padding: 0 10px;
        .drop-button {
          padding: 10px;
          background: red;
          border: none;
          width: 100%;
          border-radius: 5px;
          box-sizing: border-box;
        }
      }
      .credits {
        text-align: center;
        span {
          a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
          }
        }
      }
    }
    .show {
      display: block;
    }
  }
}

</style>
