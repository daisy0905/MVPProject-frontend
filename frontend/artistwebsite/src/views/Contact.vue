<template>
    <div id="contact-page">
        <navigation v-if="display == true"></navigation>
        <nav-ch v-if="display == false"></nav-ch>
        <div id="en-ch">
            <div></div>
            <h4 id="english" @click="showEnglish">EN</h4>
            <h4 id="chinese" @click="showChinese">中文</h4>
            <div></div>
        </div>
        <div id="unit-1">
            <div></div>
            <h2>I'D LOVE TO HEAR FROM YOU</h2>
            <div></div>
        </div>
        <div v-if="display == true" class="contact-mobile">
            <div class="item">
                <img src="../assets/phone-icon.png" alt="phone icon">
                <h4>13908484972</h4>
            </div>
            <div class="item">
                <img src="../assets/email-icon.png" alt="email icon">
                <h4>kemin1018@163.com</h4>
            </div>
            <div class="item">
                <img src="../assets/wechat-icon.png" alt="weChat icon">
                <h4>TK17Tk17</h4>
            </div>
            <div class="item">
                <img src="../assets/address-icon.png" alt="address icon">
                <h4>Studio of Kemin Tong, Houhu International Art Park, Houhu Road, Yuelu District, Changsha, China</h4>
            </div>
        </div>
        <div v-if="display == false" class="contact-mobile">
            <div class="item">
                <img src="../assets/phone-icon.png" alt="phone icon">
                <h4>13908484972</h4>
            </div>
            <div class="item">
                <img src="../assets/email-icon.png" alt="email icon">
                <h4>kemin1018@163.com</h4>
            </div>
            <div class="item">
                <img src="../assets/wechat-icon.png" alt="weChat icon">
                <h4>TK17Tk17</h4>
            </div>
            <div class="item">
                <img src="../assets/address-icon.png" alt="address icon">
                <h4>中国长沙岳麓区后湖路后湖国际艺术区童柯敏工作室</h4>
            </div>
        </div>
        <div v-if="display == true" class="contact-tablet">
            <div class="item-tablet">
                <div class="item">
                    <img src="../assets/phone-icon.png" alt="phone icon">
                    <h4>13908484972</h4>
                </div>
                <div class="item">
                    <img src="../assets/email-icon.png" alt="email icon">
                    <h4>kemin1018@163.com</h4>
                </div>
                <div class="item">
                    <img src="../assets/wechat-icon.png" alt="weChat icon">
                    <h4>TK17Tk17</h4>
                </div>
            </div>
            <div class="item">
                <img src="../assets/address-icon.png" alt="address icon">
                <h4>Studio of Kemin Tong, Houhu International Art Park, Houhu Road, Yuelu District, Changsha, China</h4>
            </div>
        </div>
        <div v-if="display == false" class="contact-tablet">
            <div class="item-tablet">
                <div class="item">
                    <img src="../assets/phone-icon.png" alt="phone icon">
                    <h4>13908484972</h4>
                </div>
                <div class="item">
                    <img src="../assets/email-icon.png" alt="email icon">
                    <h4>kemin1018@163.com</h4>
                </div>
                <div class="item">
                    <img src="../assets/wechat-icon.png" alt="weChat icon">
                    <h4>TK17Tk17</h4>
                </div>
            </div>
            <div class="item">
                <img src="../assets/address-icon.png" alt="address icon">
                <h4>中国长沙岳麓区后湖路后湖国际艺术区童柯敏工作室</h4>
            </div>
        </div>
        <div v-if="display == true" class="contact-form">
            <h4>STAY IN TOUCH!</h4>
            <div class="box">
                <p>Last Name</p>
                <input type="text" class="input" v-model="lastname">
            </div>
            <div class="box">
                <p>First Name</p>
                <input type="text" class="input" v-model="firstname">
            </div>
            <div class="box">
                <p>Phone Number</p>
                <input type="text" class="input" v-model="phone">
            </div>
            <div class="box">
                <p>Email</p>
                <input type="text" class="input" v-model="email">
            </div>
            <div class="box">
                <p>WeChat ID</p>
                <input type="text" class="input" v-model="wechat">
            </div>
            <button @click="createContact">Submit</button>
            <p>{{ submitStatus }}</p>
        </div>
        <div v-if="display == false" class="contact-form">
            <h4>保持联系！</h4>
            <div class="box">
                <p>姓</p>
                <input type="text" class="input" v-model="lastname">
            </div>
            <div class="box">
                <p>名</p>
                <input type="text" class="input" v-model="firstname">
            </div>
            <div class="box">
                <p>电话</p>
                <input type="text" class="input" v-model="phone">
            </div>
            <div class="box">
                <p>邮箱</p>
                <input type="text" class="input" v-model="email">
            </div>
            <div class="box">
                <p>微信</p>
                <input type="text" class="input" v-model="wechat">
            </div>
            <button @click="createContact">提交</button>
            <p>{{ submitStatus }}</p>
        </div>
        <div v-if="display == true" class="unit-2">
            <h3>TONG'S ART STUDIO</h3>
            <img src="../assets/studio.jpg" alt="the image of studio">
        </div>
        <div v-if="display == false" class="unit-2">
            <h3>童柯敏工作室</h3>
            <img src="../assets/studio.jpg" alt="the image of studio">
        </div>
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
#contact-page {
    width: 100%;
    display: grid;
    align-items: start;
    justify-items: center;
}

#en-ch {
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

#unit-1 {
    width: 100%;
    height: 30vh;
    background-attachment: fixed; 
    background-repeat: no-repeat;
    background: url(../assets/studio-2.jpg);
    background-size: cover;
    background-position: center;
    opacity: 0.9;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 15% 70% 15%;

    h2 {
        color: white;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.5rem;
        margin: 0;
        text-align: center;
        text-shadow: 1px 1px 1px black;
    }
}

.contact-mobile {
    min-height: 30vh;
    width: 80%;
    display: grid;
    justify-items: center;
    align-items: center;
    margin-top: 1em;
    row-gap: 1vh;

    .item {
        height: 10vh;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: center;

        img {
            width: 30px;
            height: 30px;
            object-fit: cover;
        }

        h4 {
            font-weight: bold;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 0.8rem;
            margin: 0.5em;
        }
    }
}

.contact-tablet {
    display: none;
}

.contact-form {
  width: 80%;
  display: grid;
  justify-items: center;
  align-items: center;
  row-gap: 0.8vh;
  margin: 2em 0 1em 0;
  background-color: lightgrey;
  padding: 1em 0 1em 0;
  background-color: lightgrey;
}

h4 {
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    margin: 1em 0 1em 0;
}

.box {
    width: 100%;
    height: 5vh;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 40% 60%;

    p {
        width: 90%;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        text-align: left;
        margin-left: 3em;
    }

    .input {
        width: 60%;
        height: 3vh;
        border: 1px solid #aab8c2;
        text-align: center;
    }
}

button {
    width: 25vw;
    height: 3vh;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    border: 1px solid black;
    box-shadow: 1px 1px 2px grey;
    font-weight: bold;
    margin-top: 1em;
}

p {
    width: 70%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
}

.unit-2 {
    min-height: 50vh;
    width: 80%;
    display: grid;
    justify-items: center;
    align-items: center;
    margin-top: 1em;

    h3 {
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1rem;
        margin-bottom: 0.5em;
    }

    img {
        width: 100%;
        margin-bottom: 1em;
    }
}

@media only screen and (min-width: 600px) {
#en-ch {

    h4 {
        font-size: 1.2rem;
    }
}
#unit-1 {
    height: 40vh;

    h2 {
        font-size: 2rem;
    }
}

.contact-mobile {
    display: none;
}

.contact-tablet {
    min-height: 20vh;
    width: 80%;
    display: grid;
    justify-items: center;
    align-items: center;
    margin-top: 1em;


    .item-tablet {
        width: 100%;
        height: 10vh;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
        align-items: center;

        .item {

            img {
                width: 40px;
                height: 40px;
            }

            h4 {
                font-size: 1.2rem;
            }
        }
    }

    .item {

        img {
            width: 40px;
            height: 40px;
        }

        h4 {
            font-size: 1.2rem;
        }
    }
}

.contact-form {
  width: 60%;
  margin: 2em 0 1em 0;
}

h4 {
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    margin: 1em 0 1em 0;
}

.box {

    p {
        font-size: 1rem;
    }
}

button {
    font-size: 1rem;
    width: 20vw;
}

p {
    font-size: 1rem;
}

.unit-2 {
    width: 60%;
    display: grid;
    justify-items: center;
    align-items: center;
    margin-top: 1em;

    h3 {
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.5rem;
        margin-bottom: 0.5em;
    }

    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
        margin-bottom: 1em;
    }
}
}
</style>