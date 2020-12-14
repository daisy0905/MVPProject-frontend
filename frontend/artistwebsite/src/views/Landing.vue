<template>
    <div id="landing">
        <h1>KEMIN TONG</h1>
        <slider class="slider"></slider>
    </div>
</template>

<script>
import Slider from "../components/Slider.vue"
    export default {
        components: {
            Slider,
        },
        mounted () {
            if(this.$store.state.artworks.length == 0) {
                this.$store.dispatch("getAllArtworks")
            };
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
#landing {
    min-height: 100vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;

    h1 {
        position: absolute;
        top: 49vh;
        z-index: 100;
        color: white;
        left: 25vw;
    }
    
    .slider {
        min-height: 100vh;
        width: 100%;
    }
}
</style>