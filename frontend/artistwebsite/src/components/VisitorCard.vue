<template>
    <div class="visitor">
        <div class="visitor-card">
            <div class="name" @click="showContact">
                <img src="../assets/profile-icon.png" alt="phone icon">
                <h3>{{ visitor.lastname }} {{visitor.firstname}}</h3>
                <img @click="deleteVisitor" class="icon" src="../assets/delete-icon-2.png" alt="delete icon">
            </div>
            <div class="container" v-if="display == true">
                <div class="item">
                    <img src="../assets/phone-icon.png" alt="phone icon">
                    <p>{{ visitor.phone_number }}</p>
                </div>
                <div class="item">
                    <img src="../assets/email-icon.png" alt="email icon">
                    <p>{{ visitor.email }}</p>
                </div>
                <div class="item">
                    <img src="../assets/wechat-icon.png" alt="weChat icon">
                    <p>{{ visitor.wechat }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
    export default {
        props: {
            visitor: {
                type: Object,
                required: true 
            },
        },
        data() {
            return {
                display: false
            }
        },
        methods: {
            showContact: function() {
                this.display =! this.display
            },
            deleteVisitor: function() {
                axios.request({
                    url: "https://artisttongkemin.ml/api/visitor",
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    data: {
                        id: this.visitor.id
                    }
                }).then((response) => {
                    console.log(response);
                    this.$emit("deleteVisitor", this.visitor.id)
                }).catch((error) => {
                    console.log(error);
                }) 
            }
        },
    }
</script>

<style lang="scss" scoped>

.visitor {
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: start;
    margin-top: 1em;
}

.visitor-card {
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: start;

    .name {
        height: 5vh;
        width: 80%;
        display: grid;
        justify-items: left;
        align-items: center;
        grid-template-columns: 15% 70% 15%;
        border-bottom: 1px solid grey;

        img {
            width: 20px;
            height: 20px;
        }

        h3 {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 1rem;
            padding: 0.5em;
            text-align: center;
            font-weight: normal;
        }
    }

    .container {
    width: 80%;
    display: grid;
    justify-items: center;
    align-items: start;

    .item {
        height: 5vh;
        width: 100%;
        display: grid;
        justify-items: left;
        align-items: center;
        grid-template-columns: 15% 85%;

        img {
            width: 20px;
            height: 20px;
        }

        p {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 0.8rem;
            text-align: center;
            padding: 0.5em;
            text-align: left;
        }
    }
    }
}

@media only screen and (min-width: 600px) {

    .visitor-card {

        .name {

            img {
                width: 25px;
                height: 25px;
            }

            h3 {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 1rem;
                padding: 0.5em;
                text-align: center;
                font-weight: normal;
            }
        }

        .container {

            .item {

                img {
                    width: 25px;
                    height: 25px;
                }

                p {
                    font-size: 1rem;
                }
            }
        }
    }
}
</style>