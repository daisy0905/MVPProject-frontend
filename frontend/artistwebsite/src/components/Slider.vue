<template>
  <div id="cover-image">
    <div id="slider-icon-1">
      <a class="icon" @click="next" href="#">&#10095;</a>
    </div>
    <div id="slider-icon-2">
      <a class="icon" @click="prev" href="#">&#10094;</a>
    </div>
    <div id="main-image" v-for="i in [currentIndex]" :key="i">
      <img class="color" v-if="mainImageSrc != ''" @click="goToHome" :src="mainImageSrc" />
      <img class="black-and-white" v-if="mainImageSrc != ''" @click="goToHome" :src="mainImageSrc" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Images",
  data() {
    return {
      currentIndex: 0,
      mainImageSrc: "",
    };
  },
  computed: {
    images() {
      if(this.$store.getters.sliderImage == undefined) return
      console.log(this.$store.getters.sliderImage);
      return this.$store.getters.sliderImage;
    },
  },
  methods: {
    next: function () {
      this.mainImageSrc = this.images[
        Math.abs(this.currentIndex++) % this.images.length
      ].url;
    },
    prev: function () {
      this.mainImageSrc = this.images[
        Math.abs(this.currentIndex--) % this.images.length
      ].url;
    },
    created: function () {
      if(this.images == undefined) return
      this.mainImageSrc = this.images[
        Math.abs(this.currentIndex) % this.images.length
      ].url;
    },
    goToHome: function () {
      this.$router.push("/home");
    },
  },
  mounted() {
    let interval = setInterval(() => {
      if(this.mainImageSrc != "") {
        clearInterval(interval)
      }
      this.created();
    }, 500);
  },
};
</script>

<style lang="scss" scoped>
#cover-image {
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;

  #slider-icon-1 {
    height: 6vh;
    width: 100%;
    position: absolute;
    left: -40vw;
    z-index: 100;

    .icon {
      color: white;
      text-decoration: none;
      font-size: 2rem;
      text-shadow: 1px 1px 1px black;
    }
  }

  #slider-icon-2 {
    height: 6vh;
    width: 100%;
    position: fixed;
    right: -35vw;
    bottom: 25vh;
    z-index: 100;

    .icon {
      color: white;
      text-decoration: none;
      font-size: 2rem;
      text-shadow: 1px 1px 1px black;
    }
  }

  #main-image {
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-rows: 1fr 1fr;

    .color {
      width: 100%;
    }

    .black-and-white {
      width: 100%;
      filter: grayscale(100%);
    }
  }
}

@media only screen and (min-width: 600px) {
   #slider-icon {
    .icon {
      font-size: 2rem;
    }
  }
    
}
</style>