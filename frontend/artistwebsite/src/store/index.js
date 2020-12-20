import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

import cookies from 'vue-cookies'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    artworks: [],
    artwork: [],
    enquiries: [],
    activePage: 0,
    language: cookies.get("chinese")
  },
  mutations: {
    updateAllArtworks: function(state, data) {
      state.artworks = data;
    },
    updateArtwork: function(state, data) {
      state.artwork = data;
    },
    updateAllEnquiry: function(state, data) {
      state.enquiries = data;
    },
    chagePage: function(state, data) {
      state.activePage = data
    },
    updateLanguage: function(state, data) {
      state.language = data
    }
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
    },
    getAllEnquiries: function(context) {
      axios.request({
          url: "http://127.0.0.1:5000/enquiry",
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          },
      }).then((response) => {
          context.commit("updateAllEnquiry", response.data),
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
        if(state.artworks[i].category == "Landscape 风景") {
          landscapes.push(state.artworks[i]);
        }
      }
      return landscapes;
    },
    getPortrait: function(state) {
      let portraits = [];
      for(let i=0; i<state.artworks.length; i++) {
        if(state.artworks[i].category == "Portrait 人物") {
          portraits.push(state.artworks[i]);
        }
      }
      return portraits;
    },
    getOther: function(state) {
      let others = [];
      for(let i=0; i<state.artworks.length; i++) {
        if(state.artworks[i].category == "Others 其它") {
          others.push(state.artworks[i]);
        }
      }
      return others;
    },
    sliderImage: function(state) {
      let choseNum = []
      let indexArr = []
      while (indexArr.length < Math.min(state.artworks.length, 5)) {
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
    getAvailable: function(state) {
      let availables = [];
      for(let i=0; i<state.artworks.length; i++) {
        if(state.artworks[i].status == "Available") {
          availables.push(state.artworks[i]);
        }
      }
      return availables;
    },
    getOnhold: function(state) {
      let onholds = [];
      for(let i=0; i<state.artworks.length; i++) {
        if(state.artworks[i].status == "On hold") {
          onholds.push(state.artworks[i]);
        }
      }
      return onholds;
    },
    getSold: function(state) {
      let solds = [];
      for(let i=0; i<state.artworks.length; i++) {
        if(state.artworks[i].status == "Sold") {
          solds.push(state.artworks[i]);
        }
      }
      return solds;
    },
    languageGet: function(state) {
      return state.language;
    }
  }
});
