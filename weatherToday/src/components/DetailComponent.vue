<script setup>
import CardDetailComponent from "./CardDetailComponent.vue";
import DailyForecastComponent from "./DailyForecastComponent.vue";

import { ref } from "vue";
import HourlyForecastComponent from "./HourlyForecastComponent.vue";

const data = [
  { id: 1, name: "Tue", alta: 20, baja: 14, logo: "/images/icon-rain.webp" },
  { id: 2, name: "Wed", alta: 20, baja: 14, logo: "/images/icon-drizzle.webp" },
  { id: 3, name: "Thu", alta: 20, baja: 14, logo: "/images/icon-sunny.webp" },
  {
    id: 4,
    name: "Fri",
    alta: 20,
    baja: 14,
    logo: "/images/icon-partly-cloudy.webp",
  },
  { id: 5, name: "Sat", alta: 20, baja: 14, logo: "/images/icon-storm.webp" },
  { id: 6, name: "Sun", alta: 20, baja: 14, logo: "/images/icon-storm.webp" },
  { id: 7, name: "Mon", alta: 20, baja: 14, logo: "/images/icon-fog.webp" },
];
const dataCard = [
  {
    id: 1,
    title: "Feels Like",
    valor: "20°",
  },
   {
    id: 2,
    title: "Humidity",
    valor:"46%",
  },
 {
    id: 3,
    title: "Wind",
    valor: "14 km/h",
  },
   {
    id: 4,
    title: "Precipitation",
    valor: "0 mm",
  },
];
const array= ref(dataCard);
const array2 = ref(data);
</script>

<template>
  <div class="detail-content">
    <div class="daily">
      <div class="daily-principal">
        <div class="daily-info">
          <h3>
            Berlin, Germany
            <h5>Tuesday, Aug 5, 2025</h5>
          </h3>
        </div>
        <div class="daily-logo">
          <img src="/images/icon-sunny.webp" alt="" class="logo" />
          <h1>20°</h1>
        </div>
      </div>
      <div class="daily-secundary">
        <div class="card-detail">
          <div v-for="value in array" :key="value">
            <CardDetailComponent :data="value" />
          </div>
        </div>

        <h4 style="margin-top: 20px; margin-bottom: 5px">Dayli forecast</h4>
        <div class="card-detail-daily">
          <div v-for="value in array2" :key="value.id">
            <DailyForecastComponent :data="value" />
          </div>
        </div>
      </div>
    </div>
    <div class="hourly">
      <HourlyForecastComponent />
    </div>
  </div>
</template>

<style scoped>
.detail-content {
  display: flex;
  padding: 55px;
  color: white;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
}

.daily {
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.daily-principal {
  width: 100%;
  min-height: 200px; /* altura mínima */
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-image: url("/images/bg-today-large.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 20px;
  border-radius: 12px;
}

/* Textos */
.daily-info h3 {
  margin: 0;
  font-size: 24px;
}

.daily-info h5 {
  margin: 5px 0 0;
  font-weight: 300;
  font-size: 16px;
}

/* Logo + Temperatura */
.daily-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  width: 90px;
  height: 90px;
}

.daily-secundary {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Cuadros de detalles rápidos */
.card-detail {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

/* Pronóstico de días */
.card-detail-daily {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 15px;
}

/* Lateral derecho */
.hourly {
  width: 30%;
}
</style>
