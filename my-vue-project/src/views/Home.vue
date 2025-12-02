<script setup>
import { ref } from 'vue';

const counter= ref(1)
</script>

<template>
    <h1>
        Welcome to home page
    </h1>
    <h2 id="counter">
        Counter: {{ counter }}
     
    </h2>
       <button @click="counter++" id="counter-btn">+</button>
</template>

<style></style>