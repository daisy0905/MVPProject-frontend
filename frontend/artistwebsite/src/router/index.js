import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue"
import Home from "../views/Home.vue";
import Bio from "../views/Bio.vue";
import Portfolio from "../views/Portfolio.vue";
import Artwork from "../views/Artwork.vue";
import UploadArtwork from "../views/Uploadartwork.vue"


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
    path: "/artwork",
    name: "Artwork",
    component: Artwork
  },
  {
    path: "/uploadartwork",
    name: "UploadArtwork",
    component: UploadArtwork
  },
  
];

const router = new VueRouter({
  routes
});

export default router;
