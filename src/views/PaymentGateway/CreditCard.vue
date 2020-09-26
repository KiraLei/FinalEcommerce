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
        <form @submit.prevent="handleSubmit">
          <div class="container_pay">
            <p class="sub-title">Depósito Pago Efectivo</p>
            <div class="box-inputs">
              <input
                class="input-n"
                type="text"
                placeholder="Documento de indentidad"
                v-model="form.document"
              />
              <input
                name="email"
                type="email"
                placeholder="Correo electrónico"
                required
                v-model="form.email"
                data-culqi="card[email]"
                id="card[email]"
              />
            </div>
          </div>

          <div class="container_credit_card">
            <p class="sub-title">Ingresa la información de tu tarjeta</p>
            <div class="container-left-right">
              <div class="container-left">
                <input
                  class="input-n"
                  name="name"
                  type="text"
                  placeholder="Nombres y apellidos"
                  pattern="[A-Za-z ]+"
                  required
                  v-model="form.creditCardName"
                />
                <input
                  class="input-n"
                  name="cardnumber"
                  type="number"
                  placeholder="Número de tarjeta"
                  maxlength="16"
                  mixlength="16"
                  required
                  v-model="form.creditCardNumber"
                  data-culqi="card[number]"
                  id="card[number]"
                />

                <div class="box-inputs-tres">
                  <input
                    class="input-n"
                    name="cardmonth"
                    type="number"
                    placeholder="Mes"
                    pattern="[0-9]+"
                    maxlength="2"
                    mixlength="2"
                    required
                    v-model="form.creditCardMonth"
                    data-culqi="card[exp_month]"
                    id="card[exp_month]"
                  />
                  <input
                    class="input-n"
                    name="cardyear"
                    type="number"
                    placeholder="Año"
                    pattern="[0-9]+"
                    maxlength="4"
                    mixlength="4"
                    required
                    v-model="form.creditCardYear"
                    data-culqi="card[exp_year]"
                    id="card[exp_year]"
                  />
                  <input
                    class="input-n"
                    name="cardcvv"
                    type="number"
                    placeholder="Cvv"
                    pattern="[0-9]+"
                    maxlength="3"
                    mixlength="3"
                    required
                    v-model="form.creditCardCVV"
                    data-culqi="card[cvv]"
                    id="card[cvv]"
                  />
                </div>
              </div>

              <!-- <div class="box-inputs">
              <input
                class="input-n"
                type="text"
                placeholder="Correo electrónico"
              />
            </div> -->
            </div>
          </div>

          <div class="box-dues">
            <p class="sub-title">Nº de cuotas</p>
            <div class="box-inputs-dues">
              <button
                type="button"
                v-for="(due, id) in dues"
                :key="id"
                @click="form.totalDues = due.value"
              >
                {{ due.text }}
              </button>
            </div>
          </div>

          <div class="container_on_of">
            <p class="sub-title">Solicitar factura</p>
            <ButtonOnOffComponent />
          </div>

          <div class="box-button">
            <button class="btn_static center">Finalizar compra</button>
          </div>
        </form>
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
import { mapState, mapActions } from "vuex";
import ButtonOnOffComponent from "../../../src/ui/ButtonOnOff.vue";
import CardList from "@/views/PaymentGateway/CardList.vue";
export default {
  name: "CreditCard",
  data() {
    return {
      dues: [
        {
          text: "01",
          value: 1,
        },
        {
          text: "02",
          value: 2,
        },
        {
          text: "03",
          value: 3,
        },
        {
          text: "04",
          value: 4,
        },
        {
          text: "05",
          value: 5,
        },
        {
          text: "06",
          value: 6,
        },
        {
          text: "12",
          value: 12,
        },
        {
          text: "24",
          value: 24,
        },
      ],
      form: {
        document: "",
        email: "",
        creditCardName: "",
        creditCardNumber: "",
        creditCardMonth: "",
        creditCardYear: "",
        creditCardCVV: "",
        totalDues: "",
        invoice: false,
      },
    };
  },
  components: {
    ButtonOnOffComponent,
    CardList,
  },
  computed: {
    ...mapState({
      totalProducts: (state) => state.HomeStore.totalProducts,
      totalPrice: (state) => state.HomeStore.totalSuma,
    }),
  },
  methods: {
    ...mapActions({
      removeProduct: "HomeStore/removeProduct",
      paymentCulqui: "HomeStore/paymentCulqui",
    }),
    creditCard: function () {
      this.$router.push({
        path: "/pago/tarjeta-de-credito",
      });
    },
    tarjetaDebito: function () {
      this.$router.push({
        path: "/pago/tarjeta-de-debito",
      });
    },
    pagoEfectivo: function () {
      this.$router.push({
        path: "/pago/efectivo",
      });
    },
    remove(product) {
      this.removeProduct(product);
    },
    /* eslint-disable */
    async createToken() {
      return new Promise((resolve) => {
        let c = 0;
        Culqi.createToken();
        const checkToken = setInterval(() => {
          c++;
          if (c > 20) clearInterval(checkToken);
          if (Culqi.token) {
            clearInterval(checkToken);
            resolve(Culqi.token);
          }
        }, 1000);
      });
    },
    async handleSubmit() {
      const token = await this.createToken();

      if (token) {
        // ¡Objeto Token creado exitosamente!
        console.log("token", token);
        const formData = new FormData();
        formData.append("token", token.id);
        formData.append("installments", this.form.totalDues);
        formData.append("idPedido", token.id);
        formData.append("email", this.form.email);
        formData.append("monto", this.totalPrice);
        formData.append("moneda", "PEN");
        this.paymentCulqui(formData);
      } else {
        // ¡Hubo algún problema!
        // Mostramos JSON de objeto error en consola
        console.log(window.Culqi.error);
        alert(window.Culqi.error.user_message);
      }
    },
  },
};
</script>
<style lang="scss"></style>
