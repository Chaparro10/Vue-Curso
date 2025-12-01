<script setup>
import { ref } from 'vue';
import HeaderComponent from './components/HeaderComponent.vue';
let number = ref(0);

//setInterval(()=>{number.value++},100);

const myId = "1";

const myValue = ref("some value");

const myValueModel = ref("Valor inicial");

const addOne = () => {
  number.value++;
}

let myCondition = true;

const condition = false;

</script>

<template>
  <HeaderComponent />
  <h1 v-bind:id="myId" class="title">Hola Mundo!</h1>

  <h2 @click="addOne">{{ number }}</h2>

  <input type="text" :value="myValue">

  <h3>{{ myValueModel }}</h3>

  <input type="text" v-model="myValueModel">

  <h1 :class="{ highlight: myCondition, red: true }">
    Texto condicional
  </h1>

  <h1>Directiva v-if</h1>

  <h2 v-if="condition">la condicion se cumple</h2>
  <h2 v-else-if="condition==1">
    el else if
  </h2>
  <h2 v-else>
    no se cumple ninguna condicion
  </h2>

</template>

<style scoped>
.title {
  background-color: blue;
  color: white;
}

.highlight {
  background-color: black;
  color: yellow;
}

.red {
  color: red;
}
</style>