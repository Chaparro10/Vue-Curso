import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useMovieStore = defineStore(
  "movie",
  () => {
    const movies = ref([
      {
        title: "Inception",
        duration: "148 min",
        director: "Christopher Nolan",
      },
      {
        title: "The Lord of the Rings",
        duration: "201 min",
        director: "Peter Jackson",
      },
      {
        title: "Interstellar",
        duration: "169 min",
        director: "Christopher Nolan",
      },
    ]);

    const addMovie = (movie) => movies.value.push(movie);
    const findByName=(title)=>movies.value.find((p)=>p.title==title);

    return { movies, addMovie,findByName };
  },
  { persist: true }
);
