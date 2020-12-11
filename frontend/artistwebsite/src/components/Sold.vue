<template>
    <div class="sold-list">
        <div v-for="image in images" class="item" :key="image.id">
            <img :src="image.url" alt="">
            <h4>{{ image.name }}</h4>
            <img class="icon" @click="editArtwork" src="../assets/edit-icon.png" alt="edit icon">
            <img class="icon" @click="deleteArtwork" src="../assets/delete-icon.png" alt="delete icon">
        </div>
    </div>
</template>

<script>
import cookies from "vue-cookies"
    export default {
        name: "sold",
        computed: {
            images() {
                console.log(this.$store.getters.getSold);
                return this.$store.getters.getSold;
            }
        },
        methods: {
            editArtwork: function() {
                cookies.set("id", this.image.id)
            },
            deleteArtwork: function() {

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

.sold-list {
    min-height: 50vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    row-gap: 1vh;
}

.item {
    height: 10vh;
    width: 90%;
    display: grid;
    justify-items: left;
    align-items: center;
    grid-template-columns: 2fr 3fr 0.5fr 0.5fr;
    border-bottom: 1px solid lightgrey;

    h4 { 
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        margin: 0 0.5em 0 0.5em;
        font-weight: normal;
        text-align: left;
    }

    img {
        height: 100%;
    }

    .icon {
        width: 20px;
        height: 20px;
    }

}
</style>