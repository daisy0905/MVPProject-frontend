<template>
    <div id="landscape">
        <navigation></navigation>
        <artwork-detail></artwork-detail>
    </div>
</template>

<script>
import ArtworkDetail from '../components/ArtworkDetail.vue'
import Navigation from "../components/Nav.vue"

    export default {
        components: {
            Navigation,
            ArtworkDetail
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
    min-height: 100vh;
    width: 100%;
    display: grid;
    align-items: center;
}
</style>