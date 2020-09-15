<template>
  <div class="view-home">
    <h2>PAGINA HOME xxxxxxxxxxxxx</h2>
    <InputNormalComponent></InputNormalComponent>
      <InputPasswordComponent></InputPasswordComponent>
       <InputComponent></InputComponent>
       <CardComponent></CardComponent>
       
    <CardCourse />
  </div>
</template>

<script>
import CardCourse from "./components/CardCourse";
import CardComponent from "../../ui/Card"; 
import InputComponent from "../../ui/Input";
import InputNormalComponent from "../../ui/InputNormal";
import InputPasswordComponent from "../../ui/InputPassword";
 

export default {
  name: "Home",
  components: {
    CardCourse,
    InputNormalComponent,
    InputPasswordComponent,
    InputComponent,
    CardComponent
  },
  data() {
    return {
      courses: [
        {
          id: 1,
          name: "Desarrollo Front-End",
          description: "",
          itsBuy: true,
        },
        {
          id: 2,
          name: "Desarrollo Front-End",
          description: "",
          itsBuy: true,
        },
        {
          id: 3,
          name: "Desarrollo Front-End",
          description: "",
          itsBuy: true,
        },
      ],
    };
  },
};
</script>

<style></style>
