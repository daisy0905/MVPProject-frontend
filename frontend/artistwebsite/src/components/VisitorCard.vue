<template>
    <div class="visitor">
        <div class="visitor-card">
            <div id="item">
                <div></div>
                <img @click="showContact" src="../assets/profile-icon.png" alt="profile icon">
                <h4>{{ visitor.lastname }} {{visitor.firstname}}</h4>
            </div>
            <div class="container" v-if="display == true">
                <div class="item">
                    <div></div>
                    <img src="../assets/phone-icon.png" alt="phone icon">
                    <p>{{ visitor.phone_number }}</p>
                </div>
                <div class="item">
                    <div></div>
                    <img src="../assets/email-icon.png" alt="email icon">
                    <p>{{ visitor.email }}</p>
                </div>
                <div class="item">
                    <div></div>
                    <img src="../assets/wechat-icon.jpg" alt="weChat icon">
                    <p>WeChat: {{ visitor.wechat }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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

.visitor {
    min-height: 5vh;
    width: 100%;
    display: grid;
    justify-items: left;
    align-items: start;
}

.visitor-card {
    min-height: 5vh;
    width: 100%;
    display: grid;
    justify-items: left;
    align-items: start;

    #item {
        height: 5vh;
        width: 100%;
        display: grid;
        justify-items: left;
        align-items: center;
        grid-template-columns: 20% 20% 60%;

        img {
            width: 20px;
            height: 20px;
        }

        h4 {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 0.8rem;
            padding: 0.5em;
            text-align: left;
            font-weight: bold;
        }
    }

    .container {
    min-height: 5vh;
    width: 100%;
    display: grid;
    justify-items: left;
    align-items: start;

    .item {
        height: 5vh;
        width: 100%;
        display: grid;
        justify-items: left;
        align-items: center;
        grid-template-columns: 20% 20% 60%;

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

</style>