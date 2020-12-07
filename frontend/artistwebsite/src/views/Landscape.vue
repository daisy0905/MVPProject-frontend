<template>
    <div id="landscape">
        <navigation id="nav"></navigation>
        <div id="image-detail">
            <!-- <img :src="currentImg.image" alt="">
            <p>{{ currentImg.status }}</p> -->
        </div>
        <div id="image-nav" v-for="i in [currentIndex]" :key="i">
            <!-- <img :src="currentImg.image" alt=""> -->
        </div>
        <a class="prev" @click="prev" href="#">&#10094; Previous</a>
        <a class="next" @click="next" href="#">&#10095; Next</a>
        <div id="description">
            <!-- <p>Name: {{ currentImg.name }}</p>
            <p>Size: {{ currentImg.length }} X {{ currentImg.width }}</p>
            <p>Completed at: {{ currentImg.completed_at }}</p> -->
        </div>
        <div id="btn-container">
            <button @click="priceInquiry">Price Inquiry</button>
            <button @click="addToCart">Add to Cart</button>
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
                currentIndex: 0
            }
        },
        methods: {
            next: function() {
                this.currentIndex += 1;
            },
            prev: function() {
                this.currentIndex -= 1;
            },
            priceInquiry: function() {

            },
            addToCart: function() {

            }
        },
        computed: {
            // currentImg: function() {
            //     return this.$store.getters.landscape[Math.abs(this.currentIndex) % this.$store.getters.landscape.length]
            // }
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

#landscape {
    height: 100vh;
    width: 100%;
    display: grid;
    align-items: center;
}

#image-detail {
    height: 50vh;
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
}

#image-nav {
    height: 15vh;
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: black;
  font-weight: bold;
  font-size: 15px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}

#description {
    height: 20vh;
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
}

#btn-container {
    height: 15vh;
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-rows: 1fr 1fr;

    button {
        width: 25vw;
        height: 5vh;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        border: 1px solid black;
        box-shadow: 1px 1px 2px grey;
        font-weight: bold;
        margin-left: 1em;
    }
}
</style>