<script setup>
import { useMovieStore } from "../stores/movie.store";

const movies = useMovieStore();
</script>

<template>
  <h1>
    Welcome to movies page

    <div class="movie" v-for="movie in movies.movies">
      <p>{{ movie.title }}</p>
      <p>{{ movie.director }}</p>
      <p>{{ movie.duration }}</p>
    </div>
  </h1>
</template>

<style scoped>

.movie{
    border: solid 2px black;
}
</style>
