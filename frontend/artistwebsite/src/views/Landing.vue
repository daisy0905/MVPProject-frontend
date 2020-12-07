<template>
    <div id="landing">
        <h1>KEMIN TONG</h1>
        <slider></slider>
    </div>
</template>

<script>
import Slider from "../components/Slider.vue"
    export default {
        components: {
            Slider,
        },
        methods: {
           
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

    h1 {
        position: fixed;
        top: 50vh;
        right: 25vw;
        z-index: 100;
        color: white;
    }
}
</style>