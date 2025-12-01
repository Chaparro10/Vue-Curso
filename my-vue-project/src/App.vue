<script setup>
import { ref } from 'vue';
import HeaderComponent from './components/HeaderComponent.vue';
let number=ref(0);

//setInterval(()=>{number.value++},100);

const myId="1";

const myValue=ref("some value");

const addOne=()=>{
  number.value++;
}

</script>

<template>
  <HeaderComponent/>
      <h1 v-bind:id="myId" class="title">Hola Mundo!</h1>

      <h2 @click="addOne">{{ number }}</h2>

      <input type="text" :value="myValue">

</template> 

<style scoped>
.title{
  background-color: blue;
  color: white;
}
</style>