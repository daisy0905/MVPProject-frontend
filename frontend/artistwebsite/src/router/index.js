import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue"
import Home from "../views/Home.vue";
import Bio from "../views/Bio.vue";


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
  
];

const router = new VueRouter({
  routes
});

export default router;
