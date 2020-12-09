<template>
    <div>
        <div id="image-detail">
            <img :src="artwork.url" alt="">
            <p>{{ artwork.status }}</p>
        </div>
        <div id="description">
            <p>Name: {{ artwork.name }}</p>
            <p>Size: {{ artwork.length }} X {{ artwork.width }}</p>
            <p>Completed at: {{ artwork.completed_at }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "a-landscape",
        props: {
            artwork: {
                type: Object,
                required: true
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>