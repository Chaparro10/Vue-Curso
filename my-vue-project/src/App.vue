<script setup>
import { ref } from "vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import { animals } from "./data/animals";
let number = ref(0);

//setInterval(()=>{number.value++},100);

const myId = "1";

const myValue = ref("some value");

const myValueModel = ref("Valor inicial");

const addOne = () => {
  number.value++;
};

let myCondition = true;

const condition = false;
const movies = ["1", "2", "3", "4", 6];
const count = ref(5);

const addCount=()=>{
  count.value++;
}
</script>

<template>
  <button @click="addCount">
      sumar 1
  </button>
  <HeaderComponent  message="Hola desde el padre" v-bind:count="count" />
  <h1 v-bind:id="myId" class="title">Hola Mundo!</h1>

  <h2 @click="addOne">{{ number }}</h2>

  <input type="text" :value="myValue" />

  <h3>{{ myValueModel }}</h3>

  <input type="text" v-model="myValueModel" />

  <h1 :class="{ highlight: myCondition, red: true }">Texto condicional</h1>

  <h1>Directiva v-if</h1>

  <h2 v-if="condition">la condicion se cumple</h2>
  <h2 v-else-if="condition == 1">el else if</h2>
  <h2 v-else>no se cumple ninguna condicion</h2>

  <h1>Directiva v-for</h1>

  <div>
    <p v-for="(value, index) in movies" :key="value">
      {{ index + 1 }}-{{ value }}
    </p>

    <p>Animales</p>
     <p v-for="(value, index) in animals" :key="value.id">
      {{ index + 1 }}-{{ value.name }}
    </p>
  </div>


  
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
