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
        <footer-section></footer-section>
        <div id="go-to-top">
            <a href="#artwork-list">TO TOP</a>
        </div>
    </div>
</template>

<script>
import cookies from "vue-cookies"
import axios from "axios"
import SearchedArtwordCard from '../components/SearchedArtwordCard.vue'
import FooterSection from '../components/Footer.vue'

    export default {
        components: { 
            SearchedArtwordCard,
            FooterSection 
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
                url: "https://artisttongkemin.ml/api/artwork",
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
  grid-template-columns: 10% 80% 10%;
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
      height: 20px;
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

#go-to-top {
    position: fixed;
    bottom: 22vh;
    right: 2.5vw;
    width: 4vw;
    height: 5vh;
    display: grid;
    align-items: center;
    justify-items: center;
    z-index: 20;
    
    a {
        color: white;
        width: 100%;
        padding: 0.5em;
        box-shadow: 1px 1px 2px black; 
        opacity: 1;
        font-size: 0.6rem;

        &:link, &:visited {
            background-color: black;
        }
                
        &:hover, &:active {
            background-color: grey;
            
        }
    }   
}
@media only screen and (min-width: 600px) {

    #header {

        .icon {

            img {
                height: 30px;
                object-fit: cover;
            }
        }

        h3 {
            font-size: 1.5rem;
        }
    }

    #go-to-top {
        bottom: 22vh;
        right: 0;
        width: 5vw;
        height: 10vh;
    
        a {
            font-size: 0.8rem;
        }   
    }
}

@media only screen and (min-width: 1024px) {
    #go-to-top {
        bottom: 22vh;
        right: 1vw;
        width: 5vw;
        height: 10vh;
    
        a {
            font-size: 1rem;
        }   
    }
}
</style>