<template>
    <div id="portfolio">
        <navigation id="nav"></navigation>
        <div class="unit">
            <img src="../assets/image_1.jpg" alt="">
            <h2 @click="landscape" class="animate__animated animate__bounce">LANDSCAPE</h2>
        </div>
        <div class="unit">
            <img src="../assets/image_2.jpg" alt="">
            <h2 @click="portrait">PORTRAIT</h2>
        </div>
        <div class="unit">
            <img src="../assets/image_3.jpg" alt="">
            <h2 @click="others">OTHERS</h2>
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
            landscape: function() {
                this.$router.push("/landscape")
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

#portfolio {
    height: 100vh;
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-rows: 1fr 1fr 1fr; 
}

.unit {
    width: 100%;
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    position: relative;

    img {
        width: 100%;
        height: 30vh;
        object-fit: cover;
        opacity: 0.8;
    }

    h2 {
            font-weight: bold; 
            font-family: Arial, Helvetica, sans-serif;
            font-size: 1.2rem;
            position: absolute;
            color: black;
            text-align: center;
        }
}


</style>