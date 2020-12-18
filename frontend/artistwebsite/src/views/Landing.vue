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

    #title-1 {
        position: absolute;
        top: 13vh;
        z-index: 100;
        color: white;
        transform: rotate(90deg);
        font-size: 3em;
        left: -18vw;
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
        font-size: 3em;
        right: -7.5vw;
        bottom: 13vh;
        text-shadow: 1px 1px 1px black;
    }
}
}

@media only screen and (min-width: 1024px) {
    #landing {

    #title-1 {
        position: fixed;
        top: 94vh;
        z-index: 100;
        color: darkgrey;
        transform: rotate(0deg);
        font-size: 3.5rem;
        left: 0vw;
        text-shadow: 3px 3px 3px grey;
        letter-spacing: 5px;
    }
    
    .slider {
        width: 100%;
        height: 100vh;
    }

    #title-2 {
        position: fixed;
        z-index: 100;
        color: darkgrey;
        transform: rotate(0deg);
        font-size: 3.5em;
        right: 0;
        top: 0;
        text-shadow: 3px 3px 3px grey;
        letter-spacing: 5px;
    }
}
}
</style>