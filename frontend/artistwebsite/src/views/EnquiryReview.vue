<template>
    <div id="enquiry-review">
        <nav-admin></nav-admin>
        <enquiries></enquiries>
    </div>
</template>

<script>
import NavAdmin from "../components/NavAdmin.vue"
import Enquiries from "../components/Enquiries.vue"
    export default {
        components: {
            NavAdmin,
            Enquiries  
        },
        methods: {
            
        },
        mounted () {
            this.$store.dispatch("getAllEnquiries");
            
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

#enquiry-review {
    min-height: 100vh;
    width: 100%;
    justify-items: center;
    align-items: start;
}
</style>