<template>
    <div class="onhold-list">
        <div v-for="image in images" class="item" :key="image.id">
            <img :src="image.url" alt="">
            <h4>{{ image.name }}</h4>
        </div>
    </div>
</template>

<script>
    export default {
        name: "onhold",
        computed: {
            images() {
                console.log(this.$store.getters.getOnhold);
                return this.$store.getters.getOnhold;
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

.onhold-list {
    min-height: 5vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    row-gap: 1vh;
}

.item {
    height: 10vh;
    width: 90%;
    display: grid;
    justify-items: left;
    align-items: center;
    grid-template-columns: 1.5fr 4fr;
    border-bottom: 1px solid lightgrey;

    h4 { 
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        margin: 0 0.5em 0 0.5em;
        font-weight: normal;
        text-align: left;
    }

    img {
        height: 90%;
    }
}
</style>