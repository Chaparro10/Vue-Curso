<script setup>
import {defineProps} from 'vue';

const props=defineProps({
    data:Object
});
</script>

<template>
  <div class="card">
    <p>{{ props.data.name }}</p>
    <img :src="props.data.logo" class="card-logo" />
    <div class="card-info">
      <p>{{ props.data.alta }}°</p>
      <p>{{props.data.baja}}°</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #231e36;
  border-radius: 6px;
  color: white;
  width: 80px;
  height: 100px;
  display: flex;
  flex-direction: column;
align-items: center;
padding: 10px;

}
.card-info {
  display: flex;
  gap: 20px;
}

.card-logo{
    height: 40px;
    width: 40px;
   
}
</style>
