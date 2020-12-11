<template>
    <div id="artwork-list">
        <nav-admin></nav-admin>
        <artwork-card-list id="artworks"></artwork-card-list>
    </div>
</template>

<script>
import ArtworkCardList from '../components/ArtworkCardList.vue'
import NavAdmin from "../components/NavAdmin.vue"

    export default {
        components: {
            NavAdmin,
            ArtworkCardList
            
        },
        mounted () {
            this.$store.dispatch("getAllArtworks");
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

#artwork-list {
    min-height: 100vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
}
#artworks {
        min-height: 60vh;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: center; 
        grid-template-columns: 1fr 1fr;
        column-gap: 1vw;
        margin-top: 1em;
        row-gap: 1vh;
    }
</style>