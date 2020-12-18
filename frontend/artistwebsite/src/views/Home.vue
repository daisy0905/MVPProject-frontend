<template>
  <div id="home">
    <navigation v-if="show == true" id="nav-en"></navigation>
    <nav-ch v-if="show == false" id="nav-ch"></nav-ch>
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
    <div class="text" v-if="show == true">
      <p>OIL PAINTING ARTIST</p>
      <p>TONG, KEMIN</p>
    </div>
    <div class="text" v-if="show == false">
      <p>油画艺术家 童柯敏</p>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Nav.vue";
import NavCh from "../components/NavCh.vue"
import NavDesktop from '../components/NavDesktop.vue';
export default {
  components: {
    Navigation,
    NavCh,
    NavDesktop
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      display: true,
      show: false,
    };
  },
  methods: {
    hideForm: function () {
      this.display = false;
    },
    showEnglish: function () {
      this.show = true;
      document.getElementById("english").style.color = "red";
      document.getElementById("chinese").style.color = "black";
    },
    showChinese: function () {
      this.show = false;
      document.getElementById("chinese").style.color = "red";
      document.getElementById("english").style.color = "black";
    },
  },
  mounted() {
    this.showChinese();
  },
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

#nav-ch {
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
  left: 15vw;
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
  height: 5vh;
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
  grid-template-columns: 40% 60%;

  img {
    width: 100%;
    object-fit: cover;
    margin: 1em 0 0 5em;
  }
}

.text {
  position: absolute;
  width: 70%;
  height: 5vh;
  top: 60vh;
  left: 50vw;
  display: grid;
  justify-items: left;
  align-items: left;

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2.5rem;
    color: darkgrey;
    text-align: left;
    padding: 0;
    letter-spacing: 8px;
    text-shadow: 2px 2px 2px black;
    font-weight: bold;
    line-height: 1.5em;
  }
}
}
</style>
