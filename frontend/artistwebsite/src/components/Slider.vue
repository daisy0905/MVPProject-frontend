<template>
  <div id="cover-image">
    <div class="main-image">
      <img :src="mainImageSrc">
    </div>
    <div v-for="img in images" class="item" :key="img.id">
      <img src="img.image" alt="">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Images',
  data () {
    return {
      images: [],
      mainImageSrc: null
    }
  },
  methods: {
  },
  created () {
    let self = this
    this.images = [
       {
          id: '23',
          image: 'https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg',
       },
       {
          id: '32',
          image: "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
       },
       {
          id: '45',
          image: "https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg"
       },
    ]

    setInterval(function(){ 
        self.mainImageSrc = self.images[Math.floor(Math.random()*self.images.length)].image;
    }, 2000);

  }
  }
</script>

<style lang="scss" scoped>
* {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#cover-image {
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 100vh 0;
  justify-items: center;
  align-items: center; 

  .main-image {
    height: 100%;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center; 

    img {
      height: 100vh;
      width: 100vw;
      object-fit: cover;
    }
  }

  .item {
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center; 
  }
}


</style>