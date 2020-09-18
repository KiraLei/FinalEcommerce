<template>
  <div class="view-debit-card">
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
          <p class="sub-title">Pasos a seguir:</p>
          <p class="paragraph">Enviaremos un código de pago CIP a tu correo electrónico, con el cual podrás pagar de la siguiente manera:</p>
        </div>

        <div class="container_credit_card">
          <p class="sub-title">Banca por internet y móvil:</p>
          <p class="paragraph">Paga por internet vía transferencia desde el aplicativo móvil o web de tu banco de preferencia.</p>
          <div class="container-left-right">
            <img src="@/assets/images/bank_icons/presencial-1-bbva.png" alt />
            <img src="@/assets/images/bank_icons/presencial-2-bcp.png" alt />
            <img src="@/assets/images/bank_icons/presencial-3-ibk.png" alt />
            <img src="@/assets/images/bank_icons/presencial-4-scotiabank.png" alt />
            <img src="@/assets/images/bank_icons/presencial-5-banbif.png" alt />
            <img src="@/assets/images/bank_icons/presencial-6-arequipa.png" alt />
          </div>
        </div>

        <div class="box-dues">
          <p class="sub-title">Agencias y agentes:</p>
          <p class="paragraph">Realiza depósitos en efectivo en agencias bancarias, agentes o bodegas a nivel nacional.</p>
          <div class="box-inputs-dues">
            <img src="@/assets/images/bank_icons/presencial-1-bbva.png" alt />
            <img src="@/assets/images/bank_icons/presencial-2-bcp.png" alt />
            <img src="@/assets/images/bank_icons/presencial-3-ibk.png" alt />
            <img src="@/assets/images/bank_icons/presencial-4-scotiabank.png" alt />
            <img src="@/assets/images/bank_icons/presencial-5-banbif.png" alt />
            <img src="@/assets/images/bank_icons/presencial-6-arequipa.png" alt />
            <img src="@/assets/images/bank_icons/presencial-7-kasnet.png" alt />
            <img src="@/assets/images/bank_icons/presencial-8-wester.png" alt />
            <img src="@/assets/images/bank_icons/presencial-9-fullcarga.png" alt />
            <img src="@/assets/images/bank_icons/presencial-10-tambo.png" alt />
            <img src="@/assets/images/bank_icons/presencial-11-money.png" alt />
            <img src="@/assets/images/bank_icons/presencial-12-disashop.png" alt />
          </div>
        </div>
        <div class>
          <p class="sub-title">Solicitar factura</p>
          <ButtonOnOffComponent />
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
import ButtonOnOffComponent from "../../../src/ui/ButtonOnOff.vue";

export default {
  name: "DebitCard",
  components: {
    ButtonOnOffComponent,
  },
};
</script>

<style>
.paragraph{
  font-weight: normal;
}
</style>