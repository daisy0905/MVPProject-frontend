<template>
    <div id="nav">
        <div id="header">
            <h2>KEMIN TONG</h2>
            <div></div>
            <h3 id="artworkoverview-page" class="nav-text" @click="goToArtworkOverview"><span v-if="this.$store.getters.languageGet">作品总览</span><span v-else>ARTWORK OVERVIEW</span></h3>
            <h3 id="artworkstatus-page" class="nav-text" @click="goToArtworkStatus"><span v-if="this.$store.getters.languageGet">作品状态</span><span v-else>ARTWORK STATUS</span></h3>
            <h3 id="enquiry-page" class="nav-text" @click="goToEnquiry"><span v-if="this.$store.getters.languageGet">留言总览</span><span v-else>ENQUIRY REVIEW</span></h3>
            <h3 id="visitorlist-page" @click="goToVisitors"><span v-if="this.$store.getters.languageGet">访客清单</span><span v-else>VISITOR LIST</span></h3>
            <button id="logout-btn" @click="showInput"><span v-if="this.$store.getters.languageGet">管理员退出</span><span v-else>admin logout</span></button>
        </div>     
        <div v-if="show == false" id="logout">
            <div></div>
            <div id="form">
                <h4><span v-if="this.$store.getters.languageGet">用户名</span><span v-else>Username</span></h4>
                <input type="text" id="username-input" class="input" v-model="username">
                <h4><span v-if="this.$store.getters.languageGet">密码</span><span v-else>Password</span></h4>
                <input type="password" id="password-input" class="input" v-model="password">
                <button @click="logout"><span v-if="this.$store.getters.languageGet">退出</span><span v-else>Log Out</span></button>
                <p>{{ loginStatus }}</p>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "navigation-desktop",
        data() {
            return {
                show: true,
                username: "",
                password: "",
                loginStatus: ""
            }
        },
        methods: {          
            goToArtworkOverview: function() {
                document.getElementById("artworkoverview-page").style.color = "#bb9457ff";
                setTimeout(()=>{this.$router.push("/artworkoverview")}, 1000);
            },
            goToArtworkStatus: function() {
                document.getElementById("artworkstatus-page").style.color = "#bb9457ff";
                // this.$store.dispatch("getAllArtworks");
                setTimeout(()=>{this.$router.push("/artworkstatus")}, 1000);
            },
            goToEnquiry: function() {
                document.getElementById("enquiry-page").style.color = "#bb9457ff";
                setTimeout(()=>{this.$router.push("/enquiryreview")}, 1000);
            },
            goToVisitors: function() {
                document.getElementById("visitorlist-page").style.color = "#bb9457ff";
                setTimeout(()=>{this.$router.push("/visitors")}, 1000);
            },
            showInput: function() {
                this.show =! this.show
            },
            logout: function() {
                if(this.username == "daisy0905" && this.password == "felix1101") {
                    this.loginStatus = "Logout Success!"
                    setTimeout(()=>{this.$router.push("/home")}, 1000)
                } else {
                    this.loginStatus = "Logout Failed!"
                }
            }

        }
    }
</script>

<style lang="scss" scoped>

#nav {
    height: 12vh;
    width: 100%;
    display: grid;
    align-items: center;
    padding: 10px 0 0 0;
    z-index: 100;
}

#header {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 30% repeat(5, 10%) auto;
    justify-items: center;
    align-items: center;
    border-bottom: 1px solid darkgrey; 

    h2 {
        font-weight: bold; 
        font-family: Arial, Helvetica, sans-serif;
        font-size: 2rem;
        letter-spacing: 5px;
    }

    h3 {
        font-weight: bold; 
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.2rem;
        margin-left: 2em;
        color: black;
    }

    #logout-btn {
        width: 50%;
        height: 3vh;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        border: 1px solid black;
        box-shadow: 1px 1px 2px grey;
        font-weight: bold;
        margin-right: 2em;
    }
}
#logout {
        width: 100%;
        height: 100%;
        display: grid;
        justify-items: right;
        align-items: right;
        margin-right: 1em;
        grid-template-columns: 60% 35% 5%;
        z-index: 100;

        #form {
            width: 40%;
            height: 90%;
            display: grid;
            justify-items: right;
            align-items: right;

            h4 {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 1rem;
            margin: 0.5em 0 0.5em 0;
            color: black;
            font-weight: normal;
        }

        .input {
            width: 70%;
            height: 2vh;
            background-color: none;
            border: none;
            border-bottom: 1px solid black;
            margin: 0 0 0.5em 0;
            text-align: center;
        }

        button {
            width: 70%;
            height: 3vh;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 0.8rem;
            border: 1px solid black;
            box-shadow: none;
            margin: 0.5em 0 0 0;
        }

        p {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 0.6rem;
            margin: 1em 0 0.5em 0;
            text-align: center;
            color: black;
        }
        }
        
    }

</style>