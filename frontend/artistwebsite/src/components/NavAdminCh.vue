<template>
    <div id="nav">
        <div id="header">
            <div></div>
            <h3>KEMIN TONG</h3>
            <div class="icon">
                <img v-if="display" @click="displayNavBar" src="../assets/hamburger-menu-icon.png" alt="nav icon">
                <img v-else @click="hideNavBar" src="../assets/hamburger-menu-icon-open.png" alt="nav icon">
            </div>
        </div>
        <div v-if="display == false" id="nav-bar">
            <div id="nav-unit-1">
                <div></div>
                <h2 id="artworkoverview-page" class="nav-text" @click="goToArtworkOverview">作品总览</h2>
                <h2 id="artworkstatus-page" class="nav-text" @click="goToArtworkStatus">作品在售情况</h2>
                <h2 id="artworkupload-page" class="nav-text" @click="goToUpload">新作上传</h2>
                <h2 id="enquiry-page" class="nav-text" @click="goToEnquiry">访客留言</h2>
                <h2 id="visitorlist-page" @click="goToVisitors">访客信息总览</h2>
                <div></div>
            </div>
            <div id="nav-unit-2">
                <button id="login-btn" @click="showInput">管理员退出</button>
                <div v-if="show == false" id="logout">
                    <h4>用户名</h4>
                    <input type="text" id="username-input" class="input" v-model="username">
                    <h4>密码</h4>
                    <input type="text" id="password-input" class="input" v-model="password">
                    <button @click="logout">退出</button>
                    <p>{{ logoutStatus }}</p>
                </div>
            <div></div>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        name: "nav-admin-ch",
        data() {
            return {
                display: true,
                show: true,
                username: "",
                password: "",
                logoutStatus: ""
            }
        },
        methods: {
            displayNavBar: function() {
                this.display = false;
            },
            hideNavBar: function() {
                this.display = true;
            },
            goToArtworkOverview: function() {
                document.getElementById("artworkoverview-page").style.color = "grey";
                setTimeout(()=>{this.$router.push("/artworkoverview")}, 1000);
            },
            goToArtworkStatus: function() {
                document.getElementById("artworkstatus-page").style.color = "grey";
                // this.$store.dispatch("getAllArtworks");
                setTimeout(()=>{this.$router.push("/artworkstatus")}, 1000);
            },
            goToUpload: function() {
                document.getElementById("artworkupload-page").style.color = "grey";
                setTimeout(()=>{this.$router.push("/uploadartwork")}, 1000);
            },
            goToEnquiry: function() {
                document.getElementById("enquiry-page").style.color = "grey";
                setTimeout(()=>{this.$router.push("/enquiryreview")}, 1000);
            },
            goToVisitors: function() {
                document.getElementById("visitorlist-page").style.color = "grey";
                setTimeout(()=>{this.$router.push("/visitors")}, 1000);
            },
            showInput: function() {
                this.show =! this.show
            },
            logout: function() {
                if(this.username == "daisy0905" && this.password == "felix1101") {
                    this.logoutStatus = "Log Out Success!"
                    setTimeout(()=>{this.$router.push("/")}, 1000)
                } else {
                    this.logoutStatus = "Log Out Failed!"
                }
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

#nav {
    height: 8vh;
    width: 100%;
    display: grid;
    align-items: center;
    padding: 10px 0 0 0;
    margin-bottom: 0.5em; 
    z-index: 100;
    position: relative;
}

#header {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 10% 70% 20%;
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid darkgrey; 

  .icon {
    height: 100%;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center; 

    img {
      height: 25px;
      object-fit: cover;
    }
  }

  h3 {
    font-weight: bold; 
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    letter-spacing: 5px;
  }
}

#nav-bar {
  min-height: 22vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: left;
  align-items: left;
  position: absolute;
  right: 0;
  top: 15vh;
  background-color: black;
  opacity: 0.7;

  #nav-unit-1 {
    height: 100%;
    width: 100%;
    display: grid;
    justify-items: left;
    align-items: left;
    row-gap: 1em;
  }

  h2 {
    font-weight: bold; 
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    margin-left: 2em;
    color: white;
  }

  #nav-unit-2 {
    width: 100%;
    display: grid;
    justify-items: right;
    align-items: left;
    margin-top: 1em;

    #login-btn {
        width: 50%;
        height: 3vh;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        border: 1px solid white;
        box-shadow: 1px 1px 2px grey;
        font-weight: bold;
        margin-right: 2em;
    }

    #logout {
        width: 70%;
        display: grid;
        justify-items: right;
        align-items: center;
        margin-right: 2em;

        h4 {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 0.6rem;
            margin: 0.5em 0 0.5em 0;
            color: white;
            font-weight: normal;
        }

        .input {
            width: 70%;
            height: 3vh;
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
            border: 1px solid grey;
            box-shadow: none;
            margin: 0.5em 0 0 0;
        }

        p {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 0.6rem;
            margin: 1em 0 0.5em 0;
            text-align: center;
            color: white;
        }
    }
  }
}

@media only screen and (min-width: 600px) {

#header {

  .icon {

    img {
      height: 30px;
    }
  }

  h3 {
    font-size: 1.5rem;
  }
}

#nav-bar {
  top: 14.5vh;

  h2 {
   
    font-size: 1.2rem;
  }

    #nav-unit-2 {

        #login-btn {
            width: 42%;
            font-size: 1rem;
        }

        #logout {
            width: 60%;
            margin-right: 2.5em;

            h4 {
                font-size: 1rem;
            }

            button {
                font-size: 1rem;
            }

            p {
                font-size: 1rem;
            }
        }
    }
}
}
</style>