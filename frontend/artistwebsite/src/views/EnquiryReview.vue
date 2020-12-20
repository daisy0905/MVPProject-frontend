<template>
    <div id="enquiry-review">
        <nav-admin id="nav-en"></nav-admin>
        <nav-admin-desktop id="nav-admin-desktop"></nav-admin-desktop>
        <div id="en-ch">
            <div></div>
            <h4 id="english" @click="showEnglish">EN</h4>
            <h4 id="chinese" @click="showChinese">中文</h4>
            <div></div>
        </div>
        <enquiries ></enquiries>
        <footer-contact></footer-contact>
        <div id="go-to-top">
            <a href="#enquiry-review">TO TOP</a>
        </div>
    </div>
</template>

<script>
import NavAdmin from "../components/NavAdmin.vue"
import Enquiries from "../components/Enquiries.vue"
import NavAdminDesktop from '../components/NavAdminDesktop.vue'
import FooterContact from '../components/FooterContact.vue'
import cookies from "vue-cookies";

    export default {
        components: {
            NavAdmin,
            Enquiries,
            NavAdminDesktop,
            FooterContact
        },
        
        methods: {
            showEnglish: function() {
                cookies.remove("chinese")
                this.$store.commit("updateLanguage", false)
                document.getElementById("english").style.color = "red";
                document.getElementById("chinese").style.color = "black";
            },
            showChinese: function() {
                cookies.set("chinese", true);
                this.$store.commit("updateLanguage", true);
                document.getElementById("chinese").style.color = "red";
                document.getElementById("english").style.color = "black";
            }
        },
        mounted () {
            this.$store.dispatch("getAllEnquiries");
            this.showEnglish()
        },
        
    }
</script>

<style lang="scss" scoped>
#enquiry-review {
    min-height: 100vh;
    width: 100%;
    justify-items: center;
    align-items: start;
}

#nav-en {
  height: 8vh;
  width: 100%;
}

#nav-admin-desktop {
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

#go-to-top {
    position: fixed;
    bottom: 22vh;
    right: 2vw;
    width: 5vw;
    height: 5vh;
    display: grid;
    align-items: center;
    justify-items: center;
    z-index: 20;
    
    a {
        color: white;
        width: 100%;
        padding: 0.6em;
        box-shadow: 1px 1px 2px black; 
        opacity: 1;
        font-size: 0.6rem;

        &:link, &:visited {
            background-color: black;
        }
                
        &:hover, &:active {
            background-color: grey;
            
        }
    }   
}

@media only screen and (min-width: 600px) {
    #nav-admin-desktop {
        display: none;
    }

    #en-ch {

        h4 {
            font-size: 1.2rem;
        }
    }

    #go-to-top {
        bottom: 22vh;
        right: 0;
        width: 5vw;
        height: 10vh;
    
        a {
            font-size: 0.8rem;
        }   
    }
}

@media only screen and (min-width: 1024px) {
    #nav-en {
        display: none;
    }

    #nav-admin-desktop {
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
            font-family: Arial, Helvetica, sans-serif;
            font-size: 1rem;
        }
    }

    #go-to-top {
        bottom: 22vh;
        right: 0;
        width: 5vw;
        height: 10vh;
    
        a {
            font-size: 1rem;
        }   
    } 
}
</style>