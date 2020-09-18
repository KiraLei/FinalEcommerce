<template>
  <div>
    <div class="view-checkout checkout">
      <div>
         <CardList></CardList>
         <CardList></CardList>
         <div class="div-line"></div>
         <div class="final-amount">
           <span>Precio Final</span>
           <span>S/600.00</span>
         </div>
      </div>
     

      <ExitSummary></ExitSummary>
    </div>
  </div>
</template>

<script> 
import CardList from "@/views/PaymentGateway/CardList.vue";
import ExitSummary from "@/views/PaymentGateway/ExitSummary.vue";
export default {
  name: "PaymentSummary",
  components:{
    CardList,
    ExitSummary
  }
};
</script>

<style></style>
