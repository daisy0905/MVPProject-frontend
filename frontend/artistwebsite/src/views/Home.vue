<template>
  <div id="home">
    <navigation id="nav"></navigation>
    <div id="content">
      <img @click="showForm" src="../assets/artist.jpg" alt="">
    </div>
    <div v-if="display" id="newsletter-signup" class="animate__animated animate__bounce">
      <h4>Stay in touch</h4>
      <p>First Name</p>
      <input type="text" class="input" v-model="firstname">
      <p>Last Name</p>
      <input type="text" class="input" v-model="lastname">
      <p>Email</p>
      <input type="text" class="input" v-model="email">
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Nav.vue"
  export default {
    components: {
      Navigation,
    },
    data() {
      return {
        firstname: "",
        lastname: "",
        email: "",
        display: false
      }
    },
    methods: {
      showForm: function() {
        this.display =! this.display;
      }
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

#newsletter-signup {
  width: 40vw;
  min-height: 30vh;
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: white;
  margin-left: 1em;
  row-gap: 0.8vh;
  position: fixed;
  top: 60vh;
  left: 25vw;
  box-shadow: 2px 2px 2px black;

    h4 {
      font-weight: bold; 
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1rem;
      margin: 1em 0 1em 0;
    }

     p {
      width: 90%;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 0.8rem;
      text-align: center;
    }

    .input {
      width: 80%;
      height: 3vh;
      border: 1px solid #AAB8C2;
      margin: 0 0 1em 0;
      text-align: center;
    }
}
</style>
