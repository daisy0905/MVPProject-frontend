<template>
    <div id="nav">
        <div id="header">
            <div></div>
            <h3 @click="goToLanding">KEMIN TONG</h3>
            <div class="icon">
                <img v-if="display" @click="displayNavBar" src="../assets/hamburger-menu-icon.png" alt="nav icon">
                <img v-else @click="hideNavBar" src="../assets/hamburger-menu-icon-open.png" alt="nav icon">
            </div>
        </div>
        <div v-if="display == false" id="nav-bar">
            <div></div>
            <h2 id="home-page" class="nav-text" @click="goToHome">HOME</h2>
            <h2 id="bio-page" class="nav-text" @click="goToBio">BIO</h2>
            <h2 id="portfolio-page" @click="goToPortfolio">PORTFOLIO</h2>
            <h2 id="contact-page" @click="goToContact">CONTACT</h2>
            <div></div>
            <button @click="showInput">admin login</button>
            <div v-if="show == false" id="login">
                <h4>Username</h4>
                <input type="text" id="username-input" class="input" v-model="username">
                <h4>Password</h4>
                <input type="text" id="password-input" class="input" v-model="password">
                <button @click="login">Login In</button>
                <p>{{ loginStatus }}</p>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "navigation",
        data() {
            return {
                display: true,
                show: true,
                username: "",
                password: "",
                loginStatus: ""
            }
        },
        methods: {
            displayNavBar: function() {
                this.display = false;
            },
            hideNavBar: function() {
                this.display = true;
            },
            goToLanding: function() {
                setTimeout(()=>{this.$router.push("/")}, 500);
            },
            goToHome: function() {
                document.getElementById("home-page").style.color = "grey";
                setTimeout(()=>{this.$router.push("/home")}, 1000);
            },
            goToBio: function() {
                document.getElementById("bio-page").style.color = "grey";
                setTimeout(()=>{this.$router.push("/bio")}, 1000);
            },
            goToPortfolio: function() {
                document.getElementById("portfolio-page").style.color = "grey";
                this.$store.dispatch("getAllArtworks");
                setTimeout(()=>{this.$router.push("/portfolio")}, 1000);
            },
            goToContact: function() {
                document.getElementById("contact-page").style.color = "grey";
                setTimeout(()=>{this.$router.push("/contact")}, 1000);
            },
            showInput: function() {
                this.show =! this.show
            },
            login: function() {
                if(this.username == "daisy0905" && this.password == "felix1101") {
                    this.loginStatus = "Login Success!"
                    setTimeout(()=>{this.$router.push("/artworkoverview")}, 1000)
                } else {
                    this.loginStatus = "Login Failed!"
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
    margin-bottom: 1em; 
    z-index: 100;
    margin-bottom: 0.5em;
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
  min-height: 100vh;
  width: 40%;
  display: grid;
  grid-template-rows: 15% repeat(4, 10%) 3% 8% 40%;
  justify-items: left;
  align-items: left;
  position: absolute;
  right: 2vw;
  top: 10vh;
  background-color: white;
  opacity: 0.8;

  h2 {
    font-weight: bold; 
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    margin-left: 1em;
  }

  button {
    width: 25vw;
    height: 5vh;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    border: 1px solid black;
    box-shadow: 1px 1px 2px grey;
    font-weight: bold;
    margin-left: 1.2em;
  }

  #login {
    width: 70%;
    height: 8vh;
    display: grid;
    justify-items: left;
    align-items: center;
    margin-left: 1em;

    h4 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        margin: 0.5em 0 0.5em 0;
    }

    .input {
        width: 80%;
        height: 3vh;
        background-color: none;
        border: none;
        border-bottom: 1px solid black;
        margin: 0 0 0.5em 0;
        text-align: center;
    }

    button {
        width: 80%;
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
    }
  }
}

</style>