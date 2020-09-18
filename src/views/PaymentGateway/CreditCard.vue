<template>
  <div class="view-credit-card">
    <div class="wrapper">
      <div class="box-runway">
        <div class="title_inline">
          <img src="@/assets/images/arrow.svg" alt />
          <h2>Pasarela de pagos</h2>
        </div>

        <div class="nav_button">
          <p class="sub-title">Selecciona tu método de pago</p>
          <div class="box-tabs">
            <button class="btn_animate">Tarjeta de crédito</button>
            <button class="btn_animate">Tarjeta de débito</button>
            <button class="btn_animate">Depósito Pago Efectivo</button>
          </div>
        </div>

        <div class="container_pay">
          <p class="sub-title">Depósito Pago Efectivo</p>
          <div class="box-inputs">
            <input class="input-n" type="text" placeholder="Documento de indentidad" />
            <input class="input-n" type="text" placeholder="Correo electrónico" />
          </div>
        </div>

        <div class="container_credit_card">
          <p class="sub-title">Ingresa la información de tu tarjeta</p>
          <div class="container-left-right">
            <div class="container-left">
              <input class="input-n" type="text" placeholder="Franco Torres" />

              <div class="box-inputs-tres">
                <input class="input-n" type="text" placeholder="Mes" />
                <input class="input-n" type="text" placeholder="Año" />
                <input class="input-n" type="text" placeholder="cvc/cvv" />
              </div>
            </div>

            <div class="box-inputs">
              <input class="input-n" type="text" placeholder="Correo electrónico" />
            </div>
          </div>
        </div>

        <div class="box-dues">
          <p class="sub-title">Nº de cuotas</p>
          <div class="box-inputs-dues">
            <button>01</button>
            <button>02</button>
            <button>03</button>
            <button>04</button>
            <button>05</button>
            <button>06</button>
            <button>12</button>
            <button>24</button>
          </div>
        </div>
        
        <div class="box-button">
          <button class="btn_static center">Finalizar compra</button>
        </div>
      </div>

      <div class="box-list">
        <div class="list-items">
          <div class="add-item">
            <img src="@/assets/images/front_end.jpg" alt />
            <div class="box-text">
              <h3>Gestión de Envases, Empaques y Embalajes</h3>
              <p>Dto. 25%</p>
              <div class="delete-price">
                <span>Eliminar</span>
                <span>S/ 269.00</span>
              </div>
            </div>
          </div>

          <div class="add-item">
            <img src="@/assets/images/front_end.jpg" alt />
            <div class="box-text">
              <h3>Gestión de Envases, Empaques y Embalajes</h3>
              <p>Dto. 25%</p>
              <div class="delete-price">
                <span>Eliminar</span>
                <span>S/ 269.00</span>
              </div>
            </div>
          </div>

          <div class="add-item">
            <img src="@/assets/images/front_end.jpg" alt />
            <div class="box-text">
              <h3>Gestión de Envases, Empaques y Embalajes</h3>
              <p>Dto. 25%</p>
              <div class="delete-price">
                <span>Eliminar</span>
                <span>S/ 269.00</span>
              </div>
            </div>
          </div>

          <input class="input-n" type="text" placeholder="Agrega un código de descuento" />
          <hr />
          <div class="box-pay">
            <span>Precio final</span>
            <span>S/ 600.00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreditCard",
};
</script>
<style lang="scss">
</style>
