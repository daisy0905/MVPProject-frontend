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
        <div class="icon">
            <div></div>
            <img @click="showForm" src="../assets/edit-image-icon.png" alt="edit image icon">
            <img @click="deleteArt" class="icon" src="../assets/delete-icon.png" alt="delete icon">
            <div></div>
        </div>
        <update-artwork :artId="art.id" id="update-form" v-if="display == true" @update="update"></update-artwork>
    </div>
</template>

<script>
import UpdateArtwork from '../components/UpdateArtwork.vue';
// import cookies from 'vue-cookies'
import axios from 'axios'

    export default {
        name: "artwork-card",
        components: {
            UpdateArtwork,
        },
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
                url: "http://127.0.0.1:5000/artwork",
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
            },
            showForm: function() {
                this.display =! this.display;
            },
            update: function(data) {
                for(let i=0; i<this.$store.state.artworks.length; i++) {
                    if(this.$store.state.artworks[i].id == data.id) {
                        this.$store.state.artworks.splice(i, 1, data)
                    }
                }
            },
            deleteArt: function() {
                axios.request({
                    url: "http://127.0.0.1:5000/artwork",
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    data: {
                        id: this.art.id
                    }
                }).then((response) => {
                    console.log(response);
                    this.$emit("deleteArt", this.art.id)
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
* {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.artwork-card {
    min-height: 70vh;
    width: 90%;
    display: grid;
    justify-items: center;
    align-items: start; 
    border: 1px solid #AAB8C2;
    row-gap: 1vh;
    margin: 0.5em;
    position: relative;
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

.icon {
    width: 100%;
    height: 7vh;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 20% 30% 30% 20%;

    img {
        width: 30px;
        height: 30px;
        filter: grayscale(80%);
    }
}

#update-form {
    width: 90%;
    min-height: 40vh;
    position: absolute;
    background-color: lightgrey;
    box-shadow: 1px 1px 1px black;
    bottom: 15vh;
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

.icon {
    width: 100%;
    height: 7vh;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 20% 30% 30% 20%;

    img {
        width: 40px;
        height: 40px;
        filter: grayscale(80%);
    }
}

// #update-form {
//     width: 90%;
//     height: 60vh;
//     position: absolute;
//     top: 0.5vh;
//     background-color: white;
// }
}
</style>