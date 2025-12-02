import { defineStore } from "pinia";
import { reactive } from "vue";

export const useMovieStore = defineStore("movie", () => {
  const movies = reactive([
    { title: "Inception", duration: "148 min", director: "Christopher Nolan" },
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

  const addMovie=(movie)=>movies.push(movie);

  return {movies,addMovie};

});
