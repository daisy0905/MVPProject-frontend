import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue"
import Home from "../views/Home.vue";
import Bio from "../views/Bio.vue";
import Portfolio from "../views/Portfolio.vue";
import Landscape from "../views/Landscape.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/bio",
    name: "Bio",
    component: Bio
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio
  },
  {
    path: "/landscape",
    name: "Landscape",
    component: Landscape
  },
  
];

const router = new VueRouter({
  routes
});

export default router;
