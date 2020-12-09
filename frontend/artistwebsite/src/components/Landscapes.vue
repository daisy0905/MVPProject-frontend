<template>
    <div id="image">
        <div id="image-detail" v-for="i in [currentIndex]" :key="i">
            <img :src="currentImg" />
        </div>
        <a class="prev" @click="prev" href="#">&#10094; Previous</a>
        <a class="next" @click="next" href="#">&#10095; Next</a>
        <div id="description">

        </div>
    </div>
</template>

<script>

    export default {
        name: "landscapes",
        data() {
            return {
                currentIndex: 1
            }
        },
        methods: {
            next: function() {
                this.currentIndex += 1;
            },
            prev: function() {
                this.currentIndex -= 1;
            },
        },
        computed: {
            currentImg: function() {
                return this.$store.getters.getLandscape[Math.abs(this.currentIndex) % this.$store.getters.getLandscape.length].url
            }

        }
    }
</script>

<style lang="scss" scoped>
#image {
    height: 100vh;
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
}

#image-detail {
    height: 50vh;
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    position: absolute;
    top: 10vh;

    img {
        width: 90%;
    }
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 80vh;
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
  color: grey;
}

#description {
    height: 30vh;
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
}

#btn-container {
    height: 20vh;
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