<template>
    <div id="bio">
        <navigation id="nav"></navigation>
        <div id="content">
            <img id="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1000px-Apple_logo_black.svg.png" alt="">
        </div>
    </div>
</template>

<script>
import Navigation from "../components/Nav.vue"
    export default {
        components: {
            Navigation,
        },
        methods: {
            imgeMove: function() {
                document.getElementById("image").style.position="absolute";
                document.getElementById("image").style.left="5vw";
                document.getElementById("image").style.width="150px";
                
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

#bio {
    height: 100vh;
    width: 100%;
    display: grid;
    align-items: center; 
}

#nav {
  height: 8vh;
  width: 100%;
}

#content {
  min-height: 92vh;
  width: 100%;
  background-color: grey;

  img {
      width: 250px;
      height: 250px;
  }
}
</style>