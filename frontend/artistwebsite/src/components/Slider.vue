<template>
  <div id="cover-image">
    <div id="slider-icon">
      <a class="icon" @click="prev" href="#">&#10094;</a>
      <div></div>
      <div></div>
      <a class="icon" @click="next" href="#">&#10095;</a>
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
* {
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#cover-image {
  min-height: 100vh;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;

  #slider-icon {
    height: 6vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(4, 1fr);
    position: absolute;
    top: 48vh;
    z-index: 100;

    .icon {
      color: white;
      text-decoration: none;
    }
  }

  #main-image {
    height: 100vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-rows: 50% 50%;

    .color {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .black-and-white {
      height: 100%;
      width: 100%;
      object-fit: cover;
      filter: grayscale(100%);
    }
  }
}
</style>