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
            <div></div>
            <h2 id="home-page" class="nav-text" @click="goToHome">HOME</h2>
            <h2 id="bio-page" class="nav-text" @click="goToBio">BIO</h2>
            <h2 id="portfolio-page" @click="goToPortfolio">PORTFOLIO</h2>
            <h2 id="inquiry-page" @click="goToInquiry">INQUIRY</h2>
            <h2 id="contanct" @click="goToContact">CONTACT</h2>
            <div></div>
            <button @click="login">admin login</button>
            <div></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "navigation",
        data() {
            return {
                display: true,
            }
        },
        methods: {
            displayNavBar: function() {
                this.display = false;
            },
            hideNavBar: function() {
                this.display = true;
            },
            goToHome: function() {
                document.getElementById("home-page").style.color = "orange";
                setTimeout(()=>{this.$router.push("/home")}, 2000);
            },
            goToBio: function() {
                document.getElementById("bio-page").style.color = "orange";
                setTimeout(()=>{this.$router.push("/bio")}, 2000);
            },
            goToPortfolio: function() {
                document.getElementById("portfolio-page").style.color = "orange";
                setTimeout(()=>{this.$router.push("/portfolio")}, 2000);
            },
            goToInquiry: function() {
                document.getElementById("inquiry-page").style.color = "orange";
                setTimeout(()=>{this.$router.push("/inquiry")}, 2000);
            },
            goToContact: function() {
                document.getElementById("contact-page").style.color = "orange";
                setTimeout(()=>{this.$router.push("/contact")}, 2000);
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
  height: 92vh;
  width: 40%;
  display: grid;
  grid-template-rows: 15% repeat(4, 10%) 25% 5% 30%;
  justify-items: left;
  align-items: left;
  position: fixed;
  right: 2vw;
  top: 8vh;
  background-color: white;
  opacity: 0.8;

  h2 {
    font-weight: bold; 
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
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
    margin-left: 1em;
  }
}

</style>