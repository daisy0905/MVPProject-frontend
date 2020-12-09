<template>
    <div id="landscape">
        <navigation id="nav"></navigation>
        <landscapes></landscapes>
    </div>
</template>

<script>
import Navigation from "../components/Nav.vue"
import Landscapes from "../components/Landscapes.vue"
    export default {
        components: {
            Navigation,
            Landscapes
        },
        mounted: function() {
            this.$store.dispatch("getAllArtworks")
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
</style>