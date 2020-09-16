<template>
  <div class="view-credit-card">
    <h2>VISTA CREDIT CARD</h2>
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
          <input type="text" placeholder="Documento de indentidad" />
          <input type="text" placeholder="Correo electrónico" />
        </div>
        <p>Ingresa la información de tu tarjeta</p>
        <div class="box-inputs">
          <input type="text" placeholder="Documento de indentidad" />
          <input type="text" placeholder="Correo electrónico" />
        </div>
        <div class="box-inputs">
          <input type="text" placeholder="Mes" />
          <input type="text" placeholder="Año" />
          <input type="text" placeholder="cvc/cvv" />
        </div>
        <p>Nº de cuotas</p>
        <div class="box-inputs">
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
      <div class="box-list">
        <div class="list-items">
          <div class="add-item">
            <img src="@/assets/images/one.jpg" alt="" />
            <div class="box-text">
              <h3>Gestión de Envases, Empaques y Embalajes</h3>
              <p>Dto. 25%</p>
              <div class="delete-price">
                <span>Eliminar</span>
                <span>S/ 269.00</span>
              </div>
            </div>
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
.wrapper {
  width: 1200px;
  padding: 5px;
  background: #fff;
  margin: auto;
  display: flex;
  .box-runway {
    width: 100%;
    h2 {
      font-size: 1.25rem;
    }
    p {
      font-size: 1rem;
      font-weight: bold;
    }
    .box-tabs{
      display: flex;
      button{
        background: #EFEFEF;
        color: #555555;
        border: none;
        padding: 15px 55px;
        font-size: 0.875rem;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.2s;
        &:hover{
          transition: 0.2s;
          background: #5640ff;
          color: #fff;
        }
      }
    }
  }
  .box-list {
    width: 433px;
  }
}
</style>
