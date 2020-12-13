<template>
    <div class="enquiry-card">
        <div @click="showMessage" class="container-1">
            <div class="image">
                <img :src="enquiry.url" alt="">
            </div>
            <div class="description">
                <div class="unit-1">
                    <h4>{{ enquiry.name }}</h4>
                    <div class="icon">
                        <img v-if="enquiry.review == 0" src="../assets/red-dot.png" alt="">
                        <img v-else src="../assets/red-circle.png" alt="">
                    </div>
                </div>
                <div class="unit-1">
                    <p>{{ enquiry.created_at }}</p>
                    <div></div>
                </div>
            </div>
        </div>
        <div class="container-2" v-if="show == true">
            <div class="title">
                <h4>{{ enquiry.lastname }} {{ enquiry.firstname }}</h4>
                <div class="contact">
                    <h4>{{ enquiry.phone_number }}</h4>
                    <h4>{{ enquiry.email }}</h4>
                </div>
            </div>
            <p>{{ enquiry.message }}</p>
        </div>    
    </div>
</template>

<script>
import axios from "axios"
    export default {
        name: "enquiry-card",
        data() {
            return {
                display: false,
                reviewStatus: false,
                show: false
            }
        },
        props: {
           enquiry: {
                type: Object,
                required: true
            } 
        },
        methods: {
            showMessage: function() {
                this.show =! this.show;
                if(this.enquiry.review == 0) {
                    this.changeStatus();
                }
            },
            changeStatus: function () {
                axios.request({
                    url: "http://127.0.0.1:5000/enquiry",
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    data: {
                        id: this.enquiry.id,
                        review: 1,
                    },
                })
                .then((response) => {
                    console.log(response);
                    this.enquiry.review = 1;
                })
                .catch((error) => {
                    console.log(error);
                });
            },
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

.enquiry-card {
    min-height: 10vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: start; 
    row-gap: 1vh;
    margin: 0.5em;
    border-bottom: 1px solid lightgrey;
}

.container-1 {
    height: 10vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: start; 
    grid-template-columns: 30% 70%;
}

.image {
    height: 100%;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center; 

    img {
        width: 50px;
    }
}

.description {
    height: 10vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: start;

    .unit-1 {
        height: 3vh;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: start;
        grid-template-columns: 80% 20%;

        h4 {
            width: 100%;
            font-weight: bold;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 0.8rem;
            text-align: center;
        }

        img {
            width: 10px;
        }
    }

    p {
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        text-align: center;
    }
}

.container-2 {
    min-height: 15vh;
    width: 90%;
    display: grid;
    align-items: start;
    margin-top: 1em;

    .title {
        height: 5vh;
        width: 100%;
        display: grid;
        justify-items: left;
        align-items: start;
        grid-template-columns: 50% 50%;

        h4 {
            width: 60%;
            font-weight: bold;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 0.8rem;
            margin-top: 0.5em;
        }

        .contact {
            height: 100%;
            width: 100%;
            display: grid;
            justify-items: left;
            align-items: start;

            h4 {
                width: 60%;
                font-weight: bold;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 0.8rem;
                margin-top: 0.5em;
                text-align: left;
            }
        }
    }

    p {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        margin: 0;
        text-align: left;
        margin-left: 1.5em;
    }
}

</style>