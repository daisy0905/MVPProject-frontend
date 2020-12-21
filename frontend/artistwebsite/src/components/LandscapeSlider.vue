<template>
<div id="cover-image">
    <div id="slider-icon">
        <a class="icon" @click="prev" href="#">&#10094;</a>
        <div></div>
        <a class="icon" @click="next" href="#">&#10095;</a>
    </div>
    <div id="main-image" v-for="i in [currentIndex]" :key="i">
        <img :src="mainImageSrc" @click="getArtwork"/>
    </div>
</div>
</template>

<script>
// import axios from "axios"
import cookies from "vue-cookies"
export default {
    data() {
        return {
            currentIndex: 0,
            mainImageSrc: "",
            id: ""
        };
    },
    computed: {
        images() {
            console.log(this.$store.getters.getLandscape);
            if(this.$store.getters.getLandscape == []) return
            return this.$store.getters.getLandscape;
        },
    },
    methods: {
        next: function () {
            this.mainImageSrc = this.images[
                Math.abs(this.currentIndex++) % this.images.length
            ].url;
            this.getId()
            console.log(this.id)
        },
        prev: function () {
            this.mainImageSrc = this.images[
                Math.abs(this.currentIndex--) % this.images.length
            ].url;
            this.getId()
        },
        created: function () {
            if(this.images[Math.abs(this.currentIndex) % this.images.length] == undefined) return
            this.mainImageSrc = this.images[
                Math.abs(this.currentIndex) % this.images.length
            ].url;
        },
        getId: function() {
            for(let i=0; i<this.images.length; i++) {
                if(this.mainImageSrc == this.images[i].url) {
                    this.id = this.images[i].id
                }
            }
            return this.id
        },
        getArtwork: function () {
            cookies.set("id", this.id)
            this.$store.dispatch("getArtwork");
            setTimeout(()=>{this.$router.push("/artwork")}, 1000);
        },
    },
    mounted() {
        setTimeout(() => {
            this.created();
        }, 300);
    },
};
</script>

<style lang="scss" scoped>
* {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#cover-image {
    height: 50vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;

    #slider-icon {
        height: 6vh;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-columns: 45% 10% 45%;
        position: absolute;
        z-index: 100;

        .icon {
            color: white;
            text-decoration: none;
            font-size: 1.5rem;
        }
    }

    #main-image {
        height: 50vh;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: center;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
}

@media only screen and (min-width: 600px) {
    #cover-image {

    #slider-icon {

        .icon {
            font-size: 2rem;
        }
    }

    #main-image {
        height: 50vh;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: center;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
}
}
</style>
