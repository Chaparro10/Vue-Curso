import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Movies from "../views/Movies.vue";
import CreateMovie from "../views/CreateMovie.vue";
import DetailMovie from "../views/DetailMovie.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/movies",
      name: "movies",
      component: Movies,
    },
    {
      path: "/create",
      name: "create",
      component: CreateMovie,
    },
    {
      path: "/movies/:name",
      name: "detail",
      component: DetailMovie,
    },
  ],
});

export default router;
