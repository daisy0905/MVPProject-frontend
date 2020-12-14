<template>
    <div class="visitors">
        <visitor-card v-for="visitor in visitors" :key="visitor.id" :visitor="visitor"></visitor-card>
    </div>
</template>

<script>
import VisitorCard from './VisitorCard.vue'
import axios from "axios"
    export default {
        components: { 
            VisitorCard 
        },
        data() {
            return {
                visitors: []
            }
        },
        methods: {
            getVisitors: function() {
                axios.request({
                   url: "http://127.0.0.1:5000/visitor",
                   method: "GET"
                })
                .then((response) => {
                   console.log(response)
                   this.visitors = response.data
                })
                .catch((error) => {
                   console.log(error)
                })
            },
        },
        mounted () {
            this.getVisitors();
        },
    }
</script>

<style lang="scss" scoped>
.visitors {
    width: 100%;
    min-height: 100vh;
    display: grid;
    justify-items: center;
    align-items: start;
}
</style>