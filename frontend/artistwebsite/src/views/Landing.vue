<template>
    <div id="landing">
        <h1 id="title-1">TONG KEMIN</h1>
        <slider class="slider"></slider>
        <h1 id="title-2">TONG KEMIN</h1>
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
#landing {
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;

    #title-1 {
        position: absolute;
        top: 13vh;
        z-index: 100;
        color: white;
        transform: rotate(90deg);
        font-size: 2em;
        left: -25vw;
        text-shadow: 1px 1px 1px black;
    }
    
    .slider {
        width: 120%;
    }

    #title-2 {
        position: fixed;
        z-index: 100;
        color: white;
        transform: rotate(-90deg);
        right: -14vw;
        bottom: 13vh;
        text-shadow: 1px 1px 1px black;
    }
}

@media only screen and (min-width: 600px) {

    #landing {
        h1 {
            font-size: 3rem;
            top: 48vh;
            left: 28vw;
        }
    }
}
</style>