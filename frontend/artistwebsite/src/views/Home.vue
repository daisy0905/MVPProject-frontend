<template>
  <div id="home">
    <navigation id="nav-en"></navigation>
    <nav-desktop id="nav-desktop"></nav-desktop>
    <div id="en-ch">
      <div></div>
      <h4 id="english" @click="showEnglish">EN</h4>
      <h4 id="chinese" @click="showChinese">中文</h4>
      <div></div>
    </div>
    <div id="content">
      <img src="../assets/artist.jpg" alt="" />
      <div></div>
    </div>
    <div class="text">
      <p><span v-if="this.$store.getters.languageGet">油画艺术家</span><span v-else>OIL PAINTING ARTIST</span></p>
      <p><span v-if="this.$store.getters.languageGet">童柯敏</span><span v-else>TONG, KEMIN</span></p>
    </div>
    <footer-section></footer-section>
  </div>
</template>

<script>
import FooterSection from '../components/Footer.vue'
import Navigation from "../components/Nav.vue"
import NavDesktop from '../components/NavDesktop.vue'
import cookies from "vue-cookies"
export default {
  components: {
    Navigation,
    NavDesktop,
    FooterSection
  },
  data() {
    return {
        firstname: "",
        lastname: "",
        email: "",
    }
  }, 
  methods: {
    showEnglish: function () {
      cookies.remove("chinese")
      this.$store.commit("updateLanguage", false)
      console.log(this.$store.getters.languageGet)
      document.getElementById("english").style.color = "red";
      document.getElementById("chinese").style.color = "black";
    },
    showChinese: function () {
      cookies.set("chinese", true)
      this.$store.commit("updateLanguage", true)
      console.log(this.$store.getters.languageGet)
      document.getElementById("chinese").style.color = "red";
      document.getElementById("english").style.color = "black";
    },
  },
  mounted () {
            this.showEnglish();
        }
};
</script>

<style lang="scss" scoped>
#home {
  height: 100vh;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
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

#content {
  height: 92vh;
  width: 100%;

  img {
    width: 100%;
    height: 92vh;
    object-fit: cover;
    margin-top: 0.3em;
  }
}

.text {
  position: absolute;
  width: 80%;
  height: 5vh;
  top: 55vh;
  left: 13vw;
  display: grid;
  justify-items: center;
  align-items: center;

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    color: white;
    text-align: center;
    padding: 0.5em;
    letter-spacing: 5px;
    text-shadow: 1px 1px 1px black;
    font-weight: bold;
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

#content {
  

  img {
    margin-top: 0.6em;
  }
}

.text {

  p {
    font-size: 2rem;
  }
}

}

@media only screen and (min-width: 1024px) {
#home {
  min-height: 50vh;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
}

#nav-en {
  display: none;
}

#nav-ch {
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

#content {
  min-height: 50vh;
  width: 100%;
  display: grid;
  background-attachment: fixed; 
  background-repeat: no-repeat;
  background: url(../assets/background-image-1.jpg);
  background-size: cover;
  background-position: center;
  grid-template-columns: 40% 60%;

  img {
    width: 100%;
    object-fit: cover;
    // margin: 1em 0 0 5em;
    margin-top: 0;
    filter: grayscale(100%);
  }
}

.text {
  position: absolute;
  width: 70%;
  height: 5vh;
  top: 60vh;
  left: 35vw;
  display: grid;
  justify-items: center;
  align-items: center;

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2.5rem;
    color: white;
    text-align: center;
    padding: 0;
    letter-spacing: 8px;
    text-shadow: 2px 2px 2px black;
    font-weight: bold;
    line-height: 1.5em;
  }
}
}
</style>
