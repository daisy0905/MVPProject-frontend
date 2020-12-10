import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

import cookies from 'vue-cookies'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    artworks: [],
    artwork: []
  },
  mutations: {
    updateAllArtworks: function(state, data) {
      state.artworks = data;
    },
    updateArtwork: function(state, data) {
      state.artwork = data;
    },
  },
  actions: {
    getAllArtworks: function(context) {
      axios.request({
        url: "http://127.0.0.1:5000/artwork",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
         }
      }).then((response) => {
        context.commit("updateAllArtworks", response.data),
        console.log(response.data)
      }).catch((error) => {
        console.log(error)
      })
    },
    getArtwork: function(context) {
      axios.request({
          url: "http://127.0.0.1:5000/artwork",
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          },
          params: {
              id: cookies.get("id")
          }
      }).then((response) => {
          context.commit("updateArtwork", response.data),
          console.log(response.data);
      }).catch((error) => {
          console.log(error)
      })
    }
  },
  getters: {
    getLandscape: function(state) {
      let landscapes = [];
      for(let i=0; i<state.artworks.length; i++) {
        if(state.artworks[i].category == "landscape") {
          landscapes.push(state.artworks[i]);
        }
      }
      return landscapes;
    },
    getPortrait: function(state) {
      let portraits = [];
      for(let i=0; i<state.artworks.length; i++) {
        if(state.artworks[i].category == "portrait") {
          portraits.push(state.artworks[i]);
        }
      }
      return portraits;
    },
    getOther: function(state) {
      let others = [];
      for(let i=0; i<state.artworks.length; i++) {
        if(state.artworks[i].category == "other") {
          others.push(state.artworks[i]);
        }
      }
      return others;
    },
    sliderImage: function(state) {
      let choseNum = []
      let indexArr = []
      while (indexArr.length < Math.min(state.artworks.length, 4)) {
        let rndIndex = Math.floor(Math.random() * state.artworks.length)
        if (choseNum.includes(rndIndex)) {
          continue
        }
        else{
          choseNum.push(rndIndex)
          indexArr.push(state.artworks[rndIndex])
        }
      }
      return indexArr
    },
  }
});
