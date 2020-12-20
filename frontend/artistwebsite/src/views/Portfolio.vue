<template>
    <div id="portfolio">
        <navigation id="nav-en"></navigation>
        <nav-desktop id="nav-desktop"></nav-desktop>
        <div id="en-ch">
            <div></div>
            <h4 id="english" @click="showEnglish">EN</h4>
            <h4 id="chinese" @click="showChinese">中文</h4>
            <div></div>
        </div>
        <div class="desktop">
            <div class="landscape-portrait">
                <div class="unit">
                    <landscape-slider></landscape-slider>
                    <h2><span v-if="this.$store.getters.languageGet">风景</span><span v-else>LANDSCAPE</span></h2>
                </div>
                <div class="unit">
                    <portrait-slider></portrait-slider>
                    <h2><span v-if="this.$store.getters.languageGet">人物</span><span v-else>PORTRAIT</span></h2>
                </div>
            </div>
            <div id="others" class="unit">
                <other-slider></other-slider>
                <h2><span v-if="this.$store.getters.languageGet">其它</span><span v-else>OTHERS</span></h2>
            </div>   
        </div>
        <footer-section></footer-section>
    </div>
</template>

<script>
import LandscapeSlider from '../components/LandscapeSlider.vue'
import Navigation from "../components/Nav.vue"
import OtherSlider from '../components/OtherSlider.vue'
import PortraitSlider from '../components/PortraitSlider.vue'
import NavDesktop from '../components/NavDesktop.vue'
import FooterSection from '../components/Footer.vue'
import cookies from "vue-cookies"

    export default {
        components: {
            Navigation,
            LandscapeSlider,
            PortraitSlider,
            OtherSlider,
            NavDesktop,
            FooterSection
        },
        methods: {
            showEnglish: function () {
                cookies.remove("chinese")
                this.$store.commit("updateLanguage", false)
                document.getElementById("english").style.color = "red";
                document.getElementById("chinese").style.color = "black";
            },
            showChinese: function () {
                cookies.set("chinese", true)
                this.$store.commit("updateLanguage", true)
                document.getElementById("chinese").style.color = "red";
                document.getElementById("english").style.color = "black";
            },
        },
        mounted () {
            if(this.$store.state.artworks.length == 0) {
                this.$store.dispatch("getAllArtworks")
            }
            this.showEnglish()
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

#nav-en {
  height: 8vh;
  width: 100%;
}

#nav-desktop {
  display: none;
}

#en-ch {
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
    margin-bottom: 0.3em;

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
    #nav-desktop {
        display: none;
    }

    #en-ch {

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

@media only screen and (min-width: 1024px) {
    #nav-en {
        display: none;
    }

    #nav-desktop {
        width: 100%;
        height: 10vh;
        display: grid;
        justify-items: center;
        align-items: center;
    }

    #en-ch {
        height: 7vh;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-columns: 5% 10% 10% auto;
        background-color: white;
        margin-left: 1em;

        h4 {
            font-weight: bold;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 1rem;
        }
    }

    .desktop {
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: center;
        row-gap: 0.5em;
        margin-top: 0;

        .landscape-portrait {
            width: 100%;
            height: 50vh;
            display: grid;
            justify-items: center;
            align-items: center;
            grid-template-columns: 1fr 1fr;
            column-gap: 0.5em;
        }
    }

    #others {
        width: 50%;
    }

}
</style>