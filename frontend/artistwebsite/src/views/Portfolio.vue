<template>
    <div id="portfolio">
        <navigation v-if="display == true" id="nav"></navigation>
        <nav-ch v-if="display == false"></nav-ch>
        <div id="unit-1">
            <div></div>
            <h4 id="english" @click="showEnglish">EN</h4>
            <h4 id="chinese" @click="showChinese">中文</h4>
            <div></div>
        </div>
        <div class="unit">
            <landscape-slider></landscape-slider>
            <h2 class="animate__animated animate__bounce">LANDSCAPE</h2>
        </div>
        <div class="unit">
            <portrait-slider></portrait-slider>
            <h2>PORTRAIT</h2>
        </div>
        <div class="unit">
            <other-slider></other-slider>
            <h2>OTHERS</h2>
        </div>
    </div>
</template>

<script>
import LandscapeSlider from '../components/LandscapeSlider.vue'
import Navigation from "../components/Nav.vue"
import NavCh from "../components/NavCh.vue";
import OtherSlider from '../components/OtherSlider.vue'
import PortraitSlider from '../components/PortraitSlider.vue'
    export default {
        components: {
            Navigation,
            LandscapeSlider,
            PortraitSlider,
            OtherSlider,
            NavCh
        },
        data() {
            return {
                display: false,
            };
        },
        methods: {
            showEnglish: function () {
                this.display = true;
                document.getElementById("english").style.color = "white";
                document.getElementById("chinese").style.color = "black";
            },
            showChinese: function () {
                this.display = false;
                document.getElementById("chinese").style.color = "white";
                document.getElementById("english").style.color = "black";
            },
        },
        mounted () {
            if(this.$store.state.artworks.length == 0) {
                this.$store.dispatch("getAllArtworks")
            }
            this.showChinese()
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

#portfolio {
    min-height: 50vh;
    width: 100%;
    display: grid;
    align-items: center;
    row-gap: 0.5vh;
}

#unit-1 {
  height: 5vh;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 40% 10% 10% 40%;
  background-color: lightgrey;

  h4 {
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
  }
}

.unit {
    width: 100%;
    height: 50vh;
    display: grid;
    justify-items: center;
    align-items: center;
    position: relative;

    img {
        width: 100%;
        height: 50vh;
        object-fit: cover;
        opacity: 0.8;
    }

    h2 {
            font-weight: bold; 
            font-family: Arial, Helvetica, sans-serif;
            font-size: 1.2rem;
            position: absolute;
            color: white;
            text-align: center;
            text-shadow: 1px 1px 2px black;
        }
}


</style>