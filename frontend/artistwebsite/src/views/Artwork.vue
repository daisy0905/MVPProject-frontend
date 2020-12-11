<template>
    <div id="landscape">
        <navigation></navigation>
        <div id="unit-1">
            <div></div>
            <h4>EN</h4>
            <h4>中文</h4>
            <div></div>
        </div>
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
            if(this.$store.state.artworks.length == 0) {
                this.$store.dispatch("getAllArtworks")
            };
            if(this.$store.state.artwork.length == 0) {
                this.$store.dispatch("getArtwork")
            };
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

#unit-1 {
    height: 5vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 40% 10% 10% 40%;
    background-color: lightgrey;

    h4 {
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
    }
}
</style>