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
            <button class="btn_animate on" @click="creditCard">
              Tarjeta de crédito
            </button>
            <button class="btn_animate" @click="tarjetaDebito">
              Tarjeta de débito
            </button>
            <button class="btn_animate" @click="pagoEfectivo">
              Depósito Pago Efectivo
            </button>
          </div>
        </div>

        <div class="container_pay">
          <p class="sub-title">Depósito Pago Efectivo</p>
          <div class="box-inputs">
            <input
              class="input-n"
              type="text"
              placeholder="Documento de indentidad"
            />
            <input
              class="input-n"
              type="text"
              placeholder="Correo electrónico"
            />
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
              <input
                class="input-n"
                type="text"
                placeholder="Correo electrónico"
              />
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

        <div class="container_on_of">
          <p class="sub-title">Solicitar factura</p>
          <ButtonOnOffComponent />
        </div>

        <div class="box-button">
          <button class="btn_static center">Finalizar compra</button>
        </div>
      </div>

      <div class="box-list">
        <div class="list-items">
          <!-- <div class="add-item">
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
          </div> -->
          <div>
            <CardList
              v-for="product in totalProducts"
              v-bind:key="product.id"
              v-bind:imagen="product.imagen"
              v-bind:nombre="product.nombre"
              v-bind:precio="product.precio"
              v-bind:id="product.id"
              v-on:remove="remove(product)"
            />
          </div>
          <input
            class="input-n"
            type="text"
            placeholder="Agrega un código de descuento"
          />
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
import { mapState, mapActions} from "vuex";
import ButtonOnOffComponent from "../../../src/ui/ButtonOnOff.vue";
import CardList from "@/views/PaymentGateway/CardList.vue";
export default {
  name: "CreditCard",
  components: {
    ButtonOnOffComponent,
    CardList,
  },
  computed: {
    ...mapState({
      totalProducts: (state) => state.HomeStore.totalProducts,
    }),
  },
  methods: {
    creditCard: function() {
      this.$router.push({
        path: "/pago/tarjeta-de-credito",
      });
    },

    tarjetaDebito: function() {
      this.$router.push({
        path: "/pago/tarjeta-de-debito",
      });
    },

    pagoEfectivo: function() {
      this.$router.push({
        path: "/pago/efectivo",
      });
    },
    ...mapActions({
      removeProduct: "HomeStore/removeProduct",
    }),
    remove(product) {
      this.removeProduct(product);
    },
  },
};
</script>
<style lang="scss"></style>
