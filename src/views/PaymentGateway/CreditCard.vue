<template>
  <div class="view-credit-card">
    <div class="wrapper">
      <div class="box-runway">
        <h2>Pasarela de pagos</h2>

        <p>Selecciona tu método de pago</p>
        <div class="box-tabs">
          <button>Tarjeta de crédito</button>
          <button>Tarjeta de débito</button>
          <button>Depósito Pago Efectivo</button>
        </div>

        <p>Depósito Pago Efectivo</p>
        <div class="box-inputs">
          <input class="input-n" type="text" placeholder="Documento de indentidad" />
          <input class="input-n" type="text" placeholder="Correo electrónico" />
        </div>

        <p>Ingresa la información de tu tarjeta</p>
        <div class="box-inputs">
          <input class="input-n" type="text" placeholder="Documento de indentidad" />
          <input class="input-n" type="text" placeholder="Correo electrónico" />
        </div>

        <div class="box-inputs">
          <div class="container-tres">
            <input class="input-n" type="text" placeholder="Mes" />
            <input class="input-n" type="text" placeholder="Año" />
            <input class="input-n" type="text" placeholder="cvc/cvv" />
          </div>
          <div></div>
        </div>

        <div class="box-dues">
          <p>Nº de cuotas</p>
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
          <div class="box-details">
            <span>Eliminar</span>
            <span>S/ 269.00</span>
          </div>
          <hr />
        </div>
      </div>

      <div class="box-button">
        <button class="btn_static center">Finalizar compra</button>
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
