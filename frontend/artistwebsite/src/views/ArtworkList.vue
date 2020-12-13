<template>
    <div id="artwork-list">
        <div id="header">
            <div class="icon">
              <img @click="backToArtwork" src="../assets/left-arrow-icon.png" alt="nav icon">
            </div>
            <h3>KEMIN TONG</h3>
            <div></div>
        </div>
        <searched-artword-card class="artworks" v-for="art in searchArtworks" :key="art.id" :art="art"></searched-artword-card>
    </div>
</template>

<script>
import cookies from "vue-cookies"
import axios from "axios"
import SearchedArtwordCard from '../components/SearchedArtwordCard.vue'
    export default {
        components: { 
            SearchedArtwordCard 
        },
        data() {
            return {
                searchArtworks: [],
                content: cookies.get("artContent")
            }
        },
        methods: {
            getSearchArtworks: function() {
                axios.request({
                url: "http://127.0.0.1:5000/artwork",
                   method: "GET",
                   headers: {
                    "Content-Type": "application/json",
                   },
                   params: {
                       content: this.content
                   }
                }).then((response) => {
                    console.log(response);
                    this.searchArtworks = response.data;
                }).catch((error) => {
                    console.log(error);
                }) 
            },
            backToArtwork: function() {
                this.$router.push("/artwork")
            }
        },
        mounted () {
            this.getSearchArtworks();
        },
        
    }
</script>

<style lang="scss" scoped>
* {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#artwork-list {
    min-height: 100vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    row-gap: 0.5vh;
}

#header {
  height: 8vh;
  width: 100%;
  display: grid;
  grid-template-columns: 20% 70% 10%;
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid darkgrey; 

  .icon {
    height: 100%;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center; 

    img {
      height: 25px;
      object-fit: cover;
    }
  }

  h3 {
    font-weight: bold; 
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    letter-spacing: 5px;
  }
}

.artworks {
    min-height: 50vh;
}

</style>