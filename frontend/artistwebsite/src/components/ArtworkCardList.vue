<template>
    <div>
        <artwork-card class="artworks" v-for="art in arts" :key="art.id" :art="art" @deleteArt="deleteArt"></artwork-card>
    </div>
</template>

<script>
import ArtworkCard from '../components/ArtworkCard.vue'


    export default {
        name: "artwork-card-list",
        components: {
            ArtworkCard
            
        },
        methods: {
            deleteArt: function(data) {
                console.log(data)
                for(let i=0; i<this.$store.state.artworks.length; i++) {
                    if(this.$store.state.artworks[i].id == data) {
                        this.$store.state.artworks.splice(i, 1)
                    }
                }
            }
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

@media only screen and (min-width: 1024px) {
    .artworks {
        width: 90%;
        display: grid;
        
    }
}
</style>