<template>
  <div id="home">
    <navigation v-if="show == true" id="nav"></navigation>
    <nav-ch v-if="show == false"></nav-ch>
    <div id="unit-1">
      <div></div>
      <h4 id="english" @click="showEnglish">EN</h4>
      <h4 id="chinese" @click="showChinese">中文</h4>
      <div></div>
    </div>
    <div id="content">
      <img src="../assets/artist.jpg" alt="" />
    </div>
    <div class="text" v-if="show == true">
      <p>OIL PAINTING ARTIST</p>
      <p>TONG, KEMIN</p>
    </div>
    <div class="text" v-if="show == false">
      <p>油画艺术家</p>
      <p>童柯敏</p>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Nav.vue";
import NavCh from "../components/NavCh.vue"
export default {
  components: {
    Navigation,
    NavCh
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
      document.getElementById("english").style.color = "white";
      document.getElementById("chinese").style.color = "black";
    },
    showChinese: function () {
      this.show = false;
      document.getElementById("chinese").style.color = "white";
      document.getElementById("english").style.color = "black";
    },
  },
  mounted() {
    this.showChinese();
  },
};
</script>

<style lang="scss" scoped>
* {
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#home {
  height: 100vh;
  width: 100%;
  display: grid;
  // justify-items: center;
  align-items: center;
}

#nav {
  height: 8vh;
  width: 100%;
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

#content {
  height: 92vh;
  width: 100%;

  img {
    width: 100%;
    height: 92vh;
    object-fit: cover;
  }
}

.text {
  position: absolute;
  width: 70%;
  height: 10vh;
  top: 52vh;
  left: 18vw;
  display: grid;
  justify-items: center;
  align-items: center;

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    color: white;
    text-align: center;
    padding: 1em 0.5em 1em 0.5em;
    letter-spacing: 5px;
    text-shadow: 1px 1px 1px black;
    font-weight: bold;
  }
}
</style>
