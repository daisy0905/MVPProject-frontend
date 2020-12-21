<template>
  <div id="cover-image">
    <div id="slider-icon">
      <a class="icon" @click="prev" href="#">&#10094;</a>
      <div></div>
      <a class="icon" @click="next" href="#">&#10095;</a>
    </div>
    <div id="main-image" v-for="i in [currentIndex]" :key="i">
      <img :src="mainImageSrc" @click="getArtwork" />
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";

export default {
  data() {
    return {
      currentIndex: 0,
      mainImageSrc: "",
      id: "",
    };
  },
  computed: {
    images() {
      console.log(this.$store.getters.getPortrait);
      if(this.$store.getters.getPortrait == undefined) return
      return this.$store.getters.getPortrait;
    },
  },
  methods: {
    next: function () {
      this.mainImageSrc = this.images[
        Math.abs(this.currentIndex++) % this.images.length
      ].url;
      this.getId();
    },
    prev: function () {
      this.mainImageSrc = this.images[
        Math.abs(this.currentIndex--) % this.images.length
      ].url;
      this.getId();
    },
    created: function () {
      if(this.images[Math.abs(this.currentIndex) % this.images.length] == undefined) return
      this.mainImageSrc = this.images[
        Math.abs(this.currentIndex) % this.images.length
      ].url;
    },
    getId: function () {
      for (let i = 0; i < this.images.length; i++) {
        if (this.mainImageSrc == this.images[i].url) {
          this.id = this.images[i].id;
        }
      }
      return this.id;
    },
    getArtwork: function () {
      axios
        .request({
          url: "https://artisttongkemin.ml/api/artwork",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            id: this.id,
          },
        })
        .then((response) => {
          console.log(response);
          cookies.set("name", response.data[0].name);
          cookies.set("length", response.data[0].length);
          cookies.set("width", response.data[0].width);
          cookies.set("completed_at", response.data[0].completed_at);
          cookies.set("category", response.data[0].category);
          cookies.set("material", response.data[0].material);
          cookies.set("status", response.data[0].status);
          cookies.set("url", response.data[0].url);
          cookies.set("id", response.data[0].id);
          this.$router.push("/artwork");
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
      font-size: 1.5rem;
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

@media only screen and (min-width: 600px) {
    #cover-image {

    #slider-icon {

        .icon {
            font-size: 2rem;
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
}
</style>