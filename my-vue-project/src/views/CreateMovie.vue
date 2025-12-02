<script setup>
import { reactive } from 'vue';

import { useRouter } from "vue-router";
import { useMovieStore } from "../stores/movie.store";

const router = useRouter();
const movies = useMovieStore();

const movie = reactive({
  title: "",
  duration: 0,
  director: 0,
});

const handleSubmit = () => {
  if (!movie.title || !movie.duration || !movie.director) {
    alert("Faltan campos por llenar");
    return;
  }
  console.log("movie", movie);
  movies.addMovie(movie);
  router.push("/movies");
};
</script>

<template>
  <h1>Welcome to create movie</h1>

  <form @submit.prevent="handleSubmit" class="form">
    <label for="title">Title</label>
    <input v-model="movie.title" type="text" id="title" />

    <label for="duration">Duration</label>
    <input v-model="movie.duration" type="number" id="duration" />

    <label for="director">Director</label>
    <input v-model="movie.director" type="text" id="director" />

    <button>Enviar</button>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
