<template>
    <div class="visitors">
        <visitor-card v-for="visitor in visitors" :key="visitor.id" :visitor="visitor" @deleteVisitor="deleteVisitor"></visitor-card>
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
            deleteVisitor: function(data) {
                console.log(data)
                for(let i=0; i<this.visitors.length; i++) {
                    if(this.visitors[i].id == data) {
                        this.visitors.splice(i, 1)
                    }
                }
            }
        },
        mounted () {
            this.getVisitors();
        },
    }
</script>

<style lang="scss" scoped>
.visitors {
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: start;
}

@media only screen and (min-width: 600px) {
.visitors {
    grid-template-columns: 1fr 1fr;
}
}

@media only screen and (min-width: 1024px) {
    .visitors {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
</style>