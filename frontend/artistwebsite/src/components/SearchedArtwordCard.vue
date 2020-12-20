<template>
    <div class="artwork-card">
        <div class="image">
            <img :src="art.url" alt="">
        </div>
        <div class="description">
            <h3>{{ art.name }}</h3>
            <h4>{{ art.material }}</h4>
            <h4>{{ art.length }} X {{ art.width }}</h4>
            <h4>{{ art.completed_at }}</h4>
            <h4>{{ art.category }}</h4>
            <p>{{ art.status }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: "artwork-card",
        data() {
            return {
                display: false
            }
        },
        props: {
           art: {
                type: Object,
                required: true
            } 
        },
        methods: {
            getArtworkCard: function() {
                axios.request({
                url: "https://artisttongkemin.ml/api/artwork",
                   method: "GET",
                   headers: {
                    "Content-Type": "application/json",
                   },
                   params: {
                       id: this.art.id
                   }
                }).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                })
            }
        },
        computed: {
            arts: function() {
                console.log(this.arts)
                return this.$store.state.artworks
            }
        },
    }
</script>

<style lang="scss" scoped>

.artwork-card {
    min-height: 70vh;
    width: 90%;
    display: grid;
    justify-items: center;
    align-items: start; 
    border: 1px solid #AAB8C2;
    row-gap: 1vh;
    margin: 0.5em;
}

.image {
    min-height: 30vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: start;
    margin-top: 1em;

    img {
        width: 90%;
        object-fit: cover;

    }
}

.description {
    height: 30vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: start;
    margin-top: 1em;

    h3 {
        width: 80%;
        height: 5vh;
        font-weight: bold; 
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        margin-bottom: 0.5em;
    }

    h4 { 
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        margin: 0 0.5em 0 0.5em;
        font-weight: normal;
    }

    p {
        margin: 0.5em;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        text-align: center;
        background-color: grey;
        color: white;
        padding: 0.5em;
    }
}

@media only screen and (min-width: 600px) {

    .image {
        margin-top: 2em;

    }

    .description {

        h3 {
            font-size: 1.5rem;
        }

        h4 { 
            font-size: 1.2rem;
        }

        p {
            font-size: 1.2rem;
        }
    }
}
</style>