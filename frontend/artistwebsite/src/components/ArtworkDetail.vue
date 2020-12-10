<template>
<div id="image">
    <div id="search-bar">
        <div></div>
        <input type="text" class="search" v-model="content">
        <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png" alt="search icon">
        <div></div>
    </div>
    <div id="content">
        <div id="image-detail">
            <img :src="url" />
        </div>
        <div id="description">
            <h2>{{ name }}</h2>
            <p>Size: {{ length }} X {{ width }}</p>
            <p>Material: {{ material }}</p>
            <p>Completed at: {{ completed_at }}</p>
        </div>
    </div>
    <div id="status">
        <p @click="statusCheck">{{ status }}</p>
    </div>
    <div id="btn-container">
        <button class="btn-1">Inquiry</button>
        <button class="btn-1" v-if="artStatus == true" @click="addToCart">Add to Cart</button>
        <button v-else class="btn-2">Add to Cart</button>
    </div>
    <div id="alert" v-if="show == true">
        <button class="closebtn" @click="close">&times;</button>
        <h4>{{updateStatus}}</h4>
    </div>
</div>
</template>

<script>
import cookies from "vue-cookies"
import axios from "axios"
export default {
    name: "landscapes",
    data() {
        return {
            content: "Search artwork",
            artStatus: true,
            updateStatus: "",
            show: false
        }
    },
    methods: {
        statusCheck: function () {
            console.log(this.status)
            if (this.$store.state.artwork[0].status == "available") {
                this.artStatus = true;
            }else if(this.$store.state.artwork[0].status == "on hold") {
                this.artStatus = false;
            }else if(this.$store.state.artwork[0].status == "sold") {
                this.artStatus = false;
            }
        },
        addToCart: function () {
            this.show = true
            if (this.artStatus == true) {
                return this.changeStatus();
            };
            
        },
        changeStatus: function() {
            axios.request({
                url: "http://127.0.0.1:5000/artwork",
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                data: {
                    id: cookies.get("id"),
                    status: "on hold"
                    }
                }).then((response) => {
                    console.log(response);
                    this.updateStatus = "Success to add!";
                    this.$store.dispatch("getArtwork");
                    this.statusCheck();
                }).catch((error) => {
                    console.log(error);
                    this.updateStatus = "Failed to add!";
                })
        },
        close: function() {
            document.getElementById("alert").style.display = "none"
        },
    },
    mounted () {
        this.$store.dispatch("getArtwork");
        this.statusCheck();
    },
    computed: {
        name() {
            return this.$store.state.artwork[0].name
        },
        length() {
            return this.$store.state.artwork[0].length
        },
        width() {
            return this.$store.state.artwork[0].width
        },
        completed_at() {
            return this.$store.state.artwork[0].completed_at
        },
        url() {
            return this.$store.state.artwork[0].url
        },
        material() {
            return this.$store.state.artwork[0].material
        },
        status() {
            return this.$store.state.artwork[0].status
        }
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
}

#search-bar {
    height: 8vh;
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 25% 40% 15% 20%;

    .search {
        height: 3vh;
        width: 100%;
        background-color: white;
        text-align: center;
        color: grey;
    }

    img {
        width: 25px;
    }
}

#content {
    min-height: 50vh;
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
}

#image-detail {
    min-height: 50vh;
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;

    img {
        width: 90%;
        vertical-align: super;

    }
}

#description {
    height: 20vh;
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    margin: 0;

    h2 {
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.2rem;
        text-align: center;
        margin: 0;
        letter-spacing: 5px;
    }

    p {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        margin: 0;
    }
}

#status {
    height: 5vh;
    width: 50%;
    display: grid;
    justify-items: center;
    align-items: center;

    p {
        background-color: grey;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1rem;
        margin: 0;
        padding: 0.5em 0.8em 0.5em 0.8em;
        color: white;
        font-weight: bold;
        letter-spacing: 3px;
    }
}

#btn-container {
    height: 20vh;
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-rows: 1fr 1fr;
    margin-top: 1em;


    .btn-1 {
        width: 25vw;
        height: 5vh;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        border: 1px solid black;
        box-shadow: 1px 1px 2px grey;
        font-weight: bold;
    }

    .btn-2 {
        width: 25vw;
        height: 5vh;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        border: 1px solid black;
        box-shadow: 1px 1px 2px grey;
        font-weight: bold;
        text-decoration: line-through;
    }
}

#alert {
    height: 5vh;
    width: 80%;
    background-color: lightgrey;

    .closebtn {
        margin-left: 15px;
        color: white;
        font-weight: bold;
        float: right;
        font-size: 22px;
        line-height: 20px;
        cursor: pointer;
        transition: 0.3s;

        :hover {
            color: black;
        }
    }


    h4 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        text-align: center;
        margin: 0;
}
}
</style>
