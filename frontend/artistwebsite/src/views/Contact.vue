<template>
    <div id="contact-page">
        <navigation id="nav-en"></navigation>
        <nav-desktop id="nav-desktop"></nav-desktop>
        <div id="en-ch">
            <div></div>
            <h4 id="english" @click="showEnglish">EN</h4>
            <h4 id="chinese" @click="showChinese">中文</h4>
            <div></div>
        </div>
        <div id="unit-1">
            <div></div>
            <h2><span v-if="this.$store.getters.languageGet">期待与您联系！</span><span v-else>I'D LOVE TO HEAR FROM YOU</span></h2>
            <div></div>
        </div>
        <div class="contact-mobile">
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
                <h4><span v-if="this.$store.getters.languageGet">中国长沙岳麓区后湖路后湖国际艺术区童柯敏工作室</span><span v-else>Studio of Kemin Tong, Houhu International Art Park, Houhu Road, Yuelu District, Changsha, China</span></h4>
            </div>
        </div>
        <div class="contact-tablet">
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
                <h4><span v-if="this.$store.getters.languageGet">中国长沙岳麓区后湖路后湖国际艺术区童柯敏工作室</span><span v-else>Studio of Kemin Tong, Houhu International Art Park, Houhu Road, Yuelu District, Changsha, China</span></h4>
            </div>
        </div>
        <div id="desktop">
            <div class="contact-form">
                <h4><span v-if="this.$store.getters.languageGet">保持联络！</span><span v-else>STAY IN TOUCH!</span></h4>
                <div class="box">
                    <p><span v-if="this.$store.getters.languageGet">姓</span><span v-else>Last Name</span></p>
                    <input type="text" class="input" v-model="lastname">
                </div>
                <div class="box">
                    <p><span v-if="this.$store.getters.languageGet">名</span><span v-else>First Name</span></p>
                    <input type="text" class="input" v-model="firstname">
                </div>
                <div class="box">
                    <p><span v-if="this.$store.getters.languageGet">电话</span><span v-else>Phone Number</span></p>
                    <input type="text" class="input" v-model="phone">
                </div>
                <div class="box">
                    <p><span v-if="this.$store.getters.languageGet">邮箱</span><span v-else>Email</span></p>
                    <input type="text" class="input" v-model="email">
                </div>
                <div class="box">
                    <p><span v-if="this.$store.getters.languageGet">微信</span><span v-else>WeChat ID</span></p>
                    <input type="text" class="input" v-model="wechat">
                </div>
                <button @click="createContact"><span v-if="this.$store.getters.languageGet">提交</span><span v-else>Submit</span></button>
                <p>{{ submitStatus }}</p>
            </div>
            <div class="unit-2">
                <h3><span v-if="this.$store.getters.languageGet">童柯敏工作室</span><span v-else>TONG'S ART STUDIO</span></h3>
                <img src="../assets/studio.jpg" alt="the image of studio">
            </div>
        </div>
        <footer-contact></footer-contact>
    </div>
</template>

<script>
import Navigation from "../components/Nav.vue"
import NavDesktop from '../components/NavDesktop.vue'
import axios from "axios"
import FooterContact from '../components/FooterContact.vue'
import cookies from "vue-cookies";
    export default {
        components: {
            Navigation,
            NavDesktop,
            FooterContact
        },
        data() {
            return {
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
                cookies.remove("chinese")
                this.$store.commit("updateLanguage", false)
                document.getElementById("english").style.color = "red";
                document.getElementById("chinese").style.color = "black";
            },
            showChinese: function() {
                cookies.set("chinese", true)
                this.$store.commit("updateLanguage", true)
                document.getElementById("chinese").style.color = "red";
                document.getElementById("english").style.color = "black";
            },
            createContact: function() {
                axios.request({
                    url: "https://artisttongkemin.ml/api/visitor",
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
            this.showEnglish();
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

#nav-en {
  height: 8vh;
  width: 100%;
}

#nav-desktop {
  display: none;
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
    background: url(../assets/studio-3.jpg);
    background-size: cover;
    background-position: top;
    opacity: 0.9;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 15% 70% 15%;
    margin-top: 1em;

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

#desktop {
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
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
#nav-desktop {
    display: none;
}

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

@media only screen and (min-width: 1024px) {
    #nav-en {
        display: none;
    }

    #nav-desktop {
        width: 100%;
        height: 10vh;
        display: grid;
        justify-items: center;
        align-items: center;
    }

    #en-ch {
        height: 7vh;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-columns: 5% 10% 10% auto;
        background-color: white;
        margin-left: 1em;

        h4 {
            font-weight: bold;
            font-size: 1rem;
        }
    }

    #unit-1 {
        height: 40vh;

        h2 {
            font-size: 2.5rem;
        }
    }

    .contact-tablet {
        min-height: 30vh;

        .item-tablet {
            width: 100%;
            height: 15vh;

            .item {

                img {
                    width: 50px;
                    height: 50px;
                }

                h4 {
                    font-size: 1.5rem;
                }
            }
        }   

        .item {

            img {
                width: 50px;
                height: 50px;
            }

            h4 {
                font-size: 1.5rem;
            }
        }
    }

    #desktop {
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-columns: 1fr 1fr;
    }

    .contact-form {
        width: 60%;
        margin: 2em 0 1em 4em;
    }

    h4 {
        font-weight: bold;
        font-size: 1.5rem;
        margin: 1em 0 1em 0;
    }

    .box {

        p {
            font-size: 1.2rem;
        }
    }

    button {
        width: 10vw;
        font-size: 1.2rem;
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