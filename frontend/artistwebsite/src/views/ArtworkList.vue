<template>
    <div>
        <div id="header">
            <div></div>
            <h3>KEMIN TONG</h3>
            <div></div>
        </div>
        <artwork-card class="artworks" v-for="art in searchArtworks" :key="art.id" :art="art"></artwork-card>
    </div>
</template>

<script>
import ArtworkCard from '../components/ArtworkCard.vue'
import cookies from "vue-cookies"
import axios from "axios"
    export default {
        components: { 
            ArtworkCard 
        },
        data() {
            return {
                searchArtworks: [],
                content: cookies.get("artContent")
            }
        },
        methods: {
            getSearchArtworks: function() {
                axios.request({
                url: "http://127.0.0.1:5000/artwork",
                   method: "GET",
                   headers: {
                    "Content-Type": "application/json",
                   },
                   params: {
                       content: this.content
                   }
                }).then((response) => {
                    console.log(response);
                    this.searchArtworks = response.data;
                }).catch((error) => {
                    console.log(error);
                }) 
            },
        },
        mounted () {
            this.getSearchArtworks();
        },
        
    }
</script>

<style lang="scss" scoped>

</style>