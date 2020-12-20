<template>
    <div id="enquiries">
        <a-enquiry v-for="enquiry in enquiries" :key="enquiry.id" :enquiry="enquiry"></a-enquiry>
    </div>
</template>

<script>
import AEnquiry from './AEnquiry.vue'
    export default {
        name: "enquiries",
        components: { 
            AEnquiry 
        },
        computed: {
            enquiries: function() {
                return this.$store.state.enquiries
            }
        }
    }
</script>

<style lang="scss" scoped>
* {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#enquiries {
    min-height: 80vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: start;
    align-content: start;
    margin-top: 0.5em; 
}

@media only screen and (min-width: 1024px) {
    #enquiries {
        min-height: 76vh;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: start; 
        align-content: start;
        grid-template-columns: 1fr 1fr;
    } 
}
</style>