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
        <div v-if="display == true" class="unit">
            <landscape-slider></landscape-slider>
            <h2>LANDSCAPE</h2>
        </div>
        <div v-if="display == true" class="unit">
            <portrait-slider></portrait-slider>
            <h2>PORTRAIT</h2>
        </div>
        <div v-if="display == true" class="unit">
            <other-slider></other-slider>
            <h2>OTHERS</h2>
        </div>
        <div v-if="display == false" class="unit">
            <landscape-slider></landscape-slider>
            <h2>风&nbsp;景</h2>
        </div>
        <div v-if="display == false" class="unit">
            <portrait-slider></portrait-slider>
            <h2>人&nbsp;物</h2>
        </div>
        <div v-if="display == false" class="unit">
            <other-slider></other-slider>
            <h2>其&nbsp;它</h2>
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

@media only screen and (min-width: 600px) {
    #unit-1 {

        h4 {
        font-size: 1.2rem;
    }
    }
    .unit {

        h2 {
            font-size: 2rem;
        
        }
    }
}
</style>