<template>
  <div id="cover-image">
    <div id="slider-icon">
        <a class="icon" @click="prev" href="#">&#10094;</a>
        <div></div>
        <a class="icon" @click="next" href="#">&#10095;</a>
    </div>
    <div id="main-image" v-for="i in [currentIndex]" :key="i">
      <img :src="mainImageSrc" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentIndex: 1,
      mainImageSrc: "",
    };
  },
  computed: {
    images() {
      console.log(this.$store.getters.getOther);
      return this.$store.getters.getOther;
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
      this.mainImageSrc = this.images[
        Math.abs(this.currentIndex) % this.images.length
      ].url;
    }
  },
  mounted() {
    setTimeout(() => {
      this.created();
    }, 300);
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
  height: 50vh;
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
    grid-template-columns: 45% 10% 45%;
    position: absolute;
    z-index: 100;

    .icon {
      color: white;
      text-decoration: none;
    }
  }

  #main-image {
    height: 50vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
