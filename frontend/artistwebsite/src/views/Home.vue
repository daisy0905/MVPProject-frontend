<template>
  <div id="home">
    <navigation id="nav"></navigation>
    <div id="content">
      <img src="../assets/artist.jpg" alt="" />
    </div>
    <p>
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
    };
  },
  methods: {
    hideForm: function () {
      this.display = false;
    },
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
  text-align: center;
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
