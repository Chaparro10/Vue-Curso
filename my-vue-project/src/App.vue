<script setup>
import { ref } from 'vue';
import HeaderComponent from './components/HeaderComponent.vue';
let number=ref(0);

setInterval(()=>{number.value++},100)

</script>

<template>
  <HeaderComponent/>
      <h1 class="title">Hola Mundo!</h1>
      <h2>{{ number }}</h2>

</template> 

<style scoped>
.title{
  background-color: blue;
  color: white;
}
</style>