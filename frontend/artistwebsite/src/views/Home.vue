<template>
  <div id="home">
    <navigation id="nav"></navigation>
    <div id="unit-1">
      <div></div>
      <h4 id="english" @click="showEnglish">EN</h4>
      <h4>中文</h4>
      <div></div>
    </div>
    <div id="content">
      <img src="../assets/artist.jpg" alt="" />
    </div>
    <p v-if="show == true">
      In the process of repeatedly attacking the artistic heights, Mr. Tong, Kemin is
      a warrior with a stubborn and bloody nature; a teacher with a kind of
      wisdom and thought; a craftsman with meticulous craftsmanship. He is
      paving the way for the qualities of soldiers, workers, and teachers, which
      can be fully understood in his works.
    </p>
    
  </div>
</template>

<script>
import Navigation from "../components/Nav.vue";
export default {
  components: {
    Navigation,
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      display: true,
      show: false
    };
  },
  methods: {
    hideForm: function () {
      this.display = false;
    },
    showEnglish: function() {
      this.show = true;
      document.getElementById("english").style.color = "yellow";
    }
  },
  mounted () {
    this.showEnglish();
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

p {
  position: fixed;
  width: 50%;
  height: 30vh;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  top: 50vh;
  left: 25vw;
  color: white;
  background-color: black;
  opacity: 0.7;
  line-height: 1.2em;
  text-align: justify;
  padding: 0.8em;
  display: grid;
  justify-items: center;
  align-items: center;
  border: 1px solid white;
}

</style>
