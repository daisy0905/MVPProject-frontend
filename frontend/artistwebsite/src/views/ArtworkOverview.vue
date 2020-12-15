<template>
    <div id="artwork-list">
        <nav-admin v-if="display == true"></nav-admin>
        <nav-admin-ch v-if="display == false"></nav-admin-ch>
        <div id="unit-1">
            <div></div>
            <h4 id="english" @click="showEnglish">EN</h4>
            <h4 id="chinese" @click="showChinese">中文</h4>
            <div></div>
        </div>
        <artwork-card-list class="artworks"></artwork-card-list>
    </div>
</template>

<script>
import ArtworkCardList from '../components/ArtworkCardList.vue'
import NavAdmin from "../components/NavAdmin.vue"
import NavAdminCh from "../components/NavAdminCh.vue"

    export default {
        components: {
            NavAdmin,
            NavAdminCh,
            ArtworkCardList
        },
        data() {
            return {
                display: false
            }
        },
        methods: {
            showEnglish: function() {
                this.display = true;
                document.getElementById("english").style.color = "white";
                document.getElementById("chinese").style.color = "black";
            },
            showChinese: function() {
                this.display = false;
                document.getElementById("chinese").style.color = "white";
                document.getElementById("english").style.color = "black";
            },
        },
        mounted () {
            this.$store.dispatch("getAllArtworks");
            this.showChinese()
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
    align-items: start;
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
        margin: 0;
    }
}

.artworks {
        min-height: 100vh;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: center; 
        margin-top: 1em;
        row-gap: 1vh;
}
</style>