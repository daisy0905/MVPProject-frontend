<template>
    <div id="contact-page">
        <navigation v-if="display == true"></navigation>
        <nav-ch v-if="display == false"></nav-ch>
        <div id="unit-1">
            <div></div>
            <h4 id="english" @click="showEnglish">EN</h4>
            <h4 id="chinese" @click="showChinese">中文</h4>
            <div></div>
        </div>
        <div id="unit-2">
            <img src="../assets/studio.jpg" alt="the image of studio">
        </div>
        <div v-if="display == true" id="unit-3">
            <div class="item">
                <img src="../assets/phone-icon.jpg" alt="phone icon">
                <h4>13908484972</h4>
            </div>
            <div class="item">
                <img src="../assets/email-icon.png" alt="email icon">
                <h4>kemin1018@163.com</h4>
            </div>
            <div class="item">
                <img src="../assets/wechat-icon.jpg" alt="weChat icon">
                <h4>TK17Tk17</h4>
            </div>
            <div class="item">
                <img src="../assets/address-icon.png" alt="address icon">
                <p>Studio of Kemin Tong, Houhu International Art Park, Houhu Road, Yuelu District, Changsha, China</p>
            </div>
        </div>
        <div v-if="display == true" id="contact-form">
            <h4>STAY IN TOUCH!</h4>
            <p>Last Name</p>
            <input type="text" class="input" v-model="lastname">
            <p>First Name</p>
            <input type="text" class="input" v-model="firstname">
            <p>Phone Number</p>
            <input type="text" class="input" v-model="phone">
            <p>Email</p>
            <input type="text" class="input" v-model="email">
            <p>WeChat ID</p>
            <input type="text" class="input" v-model="wechat">
            <button @click="createContact">Submit</button>
        </div>
         <div v-if="display == false" id="unit-3">
            <div class="item">
                <img src="../assets/phone-icon.jpg" alt="phone icon">
                <h4>13908484972</h4>
            </div>
            <div class="item">
                <img src="../assets/email-icon.png" alt="email icon">
                <h4>kemin1018@163.com</h4>
            </div>
            <div class="item">
                <img src="../assets/wechat-icon.jpg" alt="weChat icon">
                <h4>TK17Tk17</h4>
            </div>
            <div class="item">
                <img src="../assets/address-icon.png" alt="address icon">
                <p>中国长沙岳麓区后湖路后湖国际艺术区童柯敏工作室</p>
            </div>
        </div>
        <div v-if="display == false" id="contact-form">
            <h4>保持联系！</h4>
            <p>姓</p>
            <input type="text" class="input" v-model="lastname">
            <p>名</p>
            <input type="text" class="input" v-model="firstname">
            <p>电话</p>
            <input type="text" class="input" v-model="phone">
            <p>邮箱</p>
            <input type="text" class="input" v-model="email">
            <p>微信</p>
            <input type="text" class="input" v-model="wechat">
            <button @click="createContact">提交</button>
        </div>
        <p>{{ submitStatus }}</p>
    </div>
</template>

<script>
import Navigation from "../components/Nav.vue"
import NavCh from "../components/NavCh.vue";
import axios from "axios"
    export default {
        components: {
            Navigation,
            NavCh
        },
        data() {
            return {
                display: false,
                firstname: "",
                lastname: "",
                phone: "",
                email: "",
                wechat: "",
                submitStatus: ""

            }
        },
        methods: {
            showEnglish: function() {
                this.display = true;
                document.getElementById("english").style.color = "white";
                document.getElementById("chinese").style.color = "black";
            },
            showChinese: function() {
                this.display = false;
                document.getElementById("chinese").style.color = "white";
                document.getElementById("english").style.color = "black";
            },
            createContact: function() {
                axios.request({
                    url: "http://127.0.0.1:5000/visitor",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        firstname: this.firstname,
                        lastname: this.lastname,
                        phone_number: this.phone,
                        email: this.email,
                        wechat: this.wechat
                    }
                }).then((response) => {
                    console.log(response)
                    this.submitStatus = "your contact information has been successfully submitted!"
                }).catch((error) => {
                    console.log(error)
                    this.submitStatus = "Falied to submit!"
                })
            }
        },
        mounted () {
            this.showChinese();
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

#contact-page {
    min-height: 100vh;
    width: 100%;
    display: grid;
    align-items: start;
    justify-items: center;
}

#unit-1 {
    height: 5vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 40% 10% 10% 40%;
    background-color: lightgrey;

    h4 {
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        margin: 0;
    }
}

#unit-2 {
    min-height: 30vh;
    width: 80%;
    display: grid;
    justify-items: center;
    align-items: center;
    margin-top: 1em;

    img {
        width: 100%;
    }
}

#unit-3 {
    min-height: 20vh;
    width: 80%;
    display: grid;
    justify-items: center;
    align-items: center;
    margin-top: 1em;
    row-gap: 1vh;

    .item {
        height: 5vh;
        width: 100%;
        display: grid;
        justify-items: left;
        align-items: center;
        grid-template-columns: 20% 80%;

        img {
            width:30px;
            height: 30px;
            object-fit: cover;
        }

        h4 {
            font-weight: bold;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 0.8rem;
            margin: 0;
            text-align: left;
        }

        p {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 0.8rem;
            margin: 0;
            text-align: left;
        }
    }
}

#contact-form {
  width: 80%;
  min-height: 20vh;
  display: grid;
  justify-items: center;
  align-items: center;
  row-gap: 0.8vh;
  margin: 2em 0 1em 0;
  background-color: lightgrey;
  padding: 1em 0 1em 0;
}

  h4 {
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    margin: 1em 0 1em 0;
  }

  p {
    width: 90%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    text-align: center;
  }

  .input {
    width: 60%;
    height: 3vh;
    border: 1px solid #aab8c2;
    margin: 0 0 1em 0;
    text-align: center;
  }

  button {
    width: 25vw;
    height: 5vh;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    border: 1px solid black;
    box-shadow: 1px 1px 2px grey;
    font-weight: bold;
  }

</style>