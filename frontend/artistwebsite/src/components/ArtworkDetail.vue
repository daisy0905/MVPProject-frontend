<template>
    <div id="image">
        <div id="nav-icon">
            <img src="" alt="">
        </div>
        <div id="content">
            <div id="image-detail">
                <img :src="url" />
            </div>
            <div id="description">
                <h3>{{ name }}</h3>
                <p>Size: {{ length }} X {{ width }}</p>
                <p>Material: {{ material }}</p>
                <p>Completed at: {{ completed_at }}</p>
            </div>
        </div>
        
        <div>
            <p>{{ status }}</p>
        </div>
        <div id="btn-container">
            <button>Inquiry</button>
            <button>Add to Cart</button>
        </div>
    </div>
</template>

<script>
import cookies from "vue-cookies"
    export default {
        name: "landscapes",
        data() {
            return {
                name: cookies.get("name"),
                length: cookies.get("length"),
                width: cookies.get("width"),
                material: cookies.get("material"),
                completed_at: cookies.get("completed_at"),
                status: cookies.get("status"),
                url: cookies.get("url")
            }
        },
        methods: {
            
        },

    }
</script>

<style lang="scss" scoped>
#image {
    min-height: 100vh;
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    position: relative;
}

#nav-icon {
    height: 10vh;
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;

    img {
        width: 100px;
    }
}

#content {
    min-height: 80vh;
    width: 100%;
    position: absolute;
    top: 0;
}

#image-detail {
    min-height: 50vh;
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
   

    img {
        width: 90%;
    }
}

#description {
    height: 20vh;
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    margin: 0;

    h3 {
        font-weight: bold; 
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1rem;
        text-align: center;
        margin: 0;
    }

    p {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        margin: 0;
    }
}

#btn-container {
    height: 20vh;
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-rows: 1fr 1fr;

    button {
        width: 25vw;
        height: 5vh;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        border: 1px solid black;
        box-shadow: 1px 1px 2px grey;
        font-weight: bold;
        margin-left: 1em;
    }
}
</style>