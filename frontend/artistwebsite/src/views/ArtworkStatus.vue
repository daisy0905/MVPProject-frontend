<template>
    <div id="status-list">
        <nav-admin></nav-admin>
        <div id="container-1">
            <div class="art-status">
                <div></div>
                <h5>{{ availableNum }}</h5>
                <h4 @click="getAvailable">Available</h4>
                <div></div>
            </div>
            <div class="art-status">
                <div></div>
                <h5>{{ onholdNum }}</h5>
                <h4 @click="getOnhold">On hold</h4>
                <div></div>
            </div>
             <div class="art-status">
                <div></div>
                <h5>{{ soldNum }}</h5>
                <h4 @click="getSold">Sold</h4>
                <div></div>
            </div>
        </div>
        <available class="status" v-if="status == 'available'"></available>
        <onhold class="status" v-if="status == 'onhold'"></onhold>
        <sold class="status" v-if="status == 'sold'"></sold>
    </div>
</template>

<script>
import Available from '../components/Available.vue'
import NavAdmin from "../components/NavAdmin.vue"
import Onhold from '../components/Onhold.vue'
import Sold from '../components/Sold.vue'
    export default {
    components: { 
        Available,
        NavAdmin,
        Onhold,
        Sold 
    },
    data() {
        return {
            status: "available"
        }
    },
    methods: {
        getAvailable: function() {
            this.status = "available"
        },
        getOnhold: function() {
            this.status = "onhold"
        },
        getSold: function() {
            this.status = "sold"
        },
    },
    mounted () {
        if(this.$store.state.artworks.length == 0) {
            this.$store.dispatch("getAllArtworks")
        }
    },
    computed: {
        availableNum() {
            console.log(this.$store.getters.getAvailable);
            return this.$store.getters.getAvailable.length;
        },
        onholdNum() {
            console.log(this.$store.getters.getOnhold);
            return this.$store.getters.getOnhold.length;
        },
        soldNum() {
            console.log(this.$store.getters.getSold);
            return this.$store.getters.getSold.length;
        },

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

#status-list {
    min-height: 30vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: left;
}

#container-1 {
    height: 5vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: start;
    grid-template-columns: 1fr 1fr 1fr;


    .art-status {
        height: 5vh;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: start;
        grid-template-columns: 1fr 1fr 2.5fr 1fr;

        h5 {
            font-weight: bold; 
            font-family: Arial, Helvetica, sans-serif;
            font-size: 0.8rem;
            color: #AAB8C2;
        }

        h4 {
            font-weight: bold; 
            font-family: Arial, Helvetica, sans-serif;
            font-size: 0.8rem;
        }
    }
}

.status {
    min-height: 10vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: start;
}
</style>