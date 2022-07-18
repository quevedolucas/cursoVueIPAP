import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Usuarios from "@/components/Usuarios.vue";
import Posts from "@/components/Posts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/users",
    name: "users",
    component: Usuarios,
  },
  {
    path: "/posts/:idUser/:nombreUser",
    name: "posts",
    props: true,
    component: Posts,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
