<script setup>
import { RouterLink, useRoute } from "vue-router";
import { useMovieStore } from "../stores/movie.store";
import { computed } from "vue";

const route = useRoute();
const movies = useMovieStore();

const movie = computed(() => {
  return movies.findByName(route.params.name);
});
</script>

<template>
  <h2>Details Movie</h2>

  <div v-if="movie">
    <p>
      {{ movie.title }}
    </p>
    <p>
      {{ movie.director }}
    </p>
    <p>
      {{ movie.duration }}
    </p>

     <router-link :to="{name:'detail',params:{name:'Interstellar'}}">
            Interstellar
        </router-link>
  </div>
  <div v-else>
    <h2>Movie not found</h2>
  </div>
</template>

<style scoped></style>
