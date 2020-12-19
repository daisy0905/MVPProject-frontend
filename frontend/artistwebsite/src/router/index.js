import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue"
import Home from "../views/Home.vue";
import Bio from "../views/Bio.vue";
import Portfolio from "../views/Portfolio.vue";
import Artwork from "../views/Artwork.vue";
import ArtworkOverview from "../views/ArtworkOverview.vue"
import ArtworkStatus from "../views/ArtworkStatus.vue"
import Enquiry from "../views/Enquiry.vue"
import ArtworkList from "../views/ArtworkList.vue"
import EnquiryReview from "../views/EnquiryReview.vue"
import Contact from "../views/Contact.vue"
import Visitors from "../views/Visitors.vue"


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
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/artworkoverview",
    name: "ArtworkOverview",
    component: ArtworkOverview
  },
  {
    path: "/artworkstatus",
    name: "ArtworkStatus",
    component: ArtworkStatus
  },
  {
    path: "/enquiry",
    name: "Enquiry",
    component: Enquiry
  },
  {
    path: "/artworklist",
    name: "ArtworkList",
    component: ArtworkList
  },
  {
    path: "/enquiryreview",
    name: "EnquiryReview",
    component: EnquiryReview
  },
  {
    path: "/visitors",
    name: "Visitors",
    component: Visitors
  },
  
];

const router = new VueRouter({
  routes
});

export default router;
