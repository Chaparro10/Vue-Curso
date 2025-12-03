<script setup>
import { ref } from "vue";

const data = [
  { id: 1, logo: "/images/icon-overcast.webp", hour: "3 PM", grados: 20 },
  { id: 2, logo: "/images/icon-partly-cloudy.webp", hour: "4 PM", grados: 20 },
  { id: 3, logo: "/images/icon-sunny.webp", hour: "5 PM", grados: 20 },
  { id: 4, logo: "/images/icon-overcast.webp", hour: "6 PM", grados: 19 },
  { id: 5, logo: "/images/icon-snow.webp", hour: "7 PM", grados: 18 },
  { id: 6, logo: "/images/icon-fog.webp", hour: "8 PM", grados: 18 },
  { id: 7, logo: "/images/icon-snow.webp", hour: "9 PM", grados: 17 },
  { id: 8, logo: "/images/icon-overcast.webp", hour: "10 PM", grados: 17 },
];

const array = ref(data);
</script>

<template>
  <div class="card">
    <div class="info">
      <p>Hourly forecast</p>
      <p>Select</p>
      <!-- <select name="" id="">111</select> -->
    </div>

    <div v-for="value in array" class="card-detail">
      <div class="card-detail-1">
        <img :src="value.logo" alt="" style="height: 30px; width: 30px" />
        <p>{{ value.hour }}</p>
      </div>

      <div class="card-detail-2">
        <p>{{ value.grados }}°</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #241e39;
  border: soldi 1px green;
  color: white;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
}
.info {
  display: flex;
  color: white;
  width: 50%;
  justify-content: space-evenly;
  margin-bottom: 10px;
}
.card-detail {
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #2c2740;
  background-color: #2c2740;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;

  .card-detail-1 {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .card-detail-2 {
    display: flex;
    justify-content: flex-end;
    width: 50%;
  }
}
</style>
