<template>
    <div>
        <artwork-card class="artworks" v-for="art in arts" :key="art.id" :art="art"></artwork-card>
    </div>
</template>

<script>
import ArtworkCard from '../components/ArtworkCard.vue'


    export default {
        name: "artwork-card-list",
        components: {
            ArtworkCard
            
        },
        computed: {
            arts: function() {
                return this.$store.state.artworks
            }
        }
    }
</script>

<style lang="scss" scoped>
.artworks {
    min-height: 5vh;
    width: 90%;
}
</style>