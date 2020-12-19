<template>
    <div id="enquiry-review">
        <nav-admin v-if="display == true" id="nav-en"></nav-admin>
        <nav-admin-ch v-if="display == false" id="nav-ch"></nav-admin-ch>
        <nav-admin-desktop v-if="display == true" id="nav-admin-desktop"></nav-admin-desktop>
        <nav-admin-desktop-ch v-if="display == false" id="nav-admin-desktop-ch"></nav-admin-desktop-ch>
        <div id="en-ch">
            <div></div>
            <h4 id="english" @click="showEnglish">EN</h4>
            <h4 id="chinese" @click="showChinese">中文</h4>
            <div></div>
        </div>
        <enquiries ></enquiries>
    </div>
</template>

<script>
import NavAdmin from "../components/NavAdmin.vue"
import Enquiries from "../components/Enquiries.vue"
import NavAdminCh from "../components/NavAdminCh.vue"
import NavAdminDesktop from '../components/NavAdminDesktop.vue'
import NavAdminDesktopCh from '../components/NavAdminDesktopCh.vue'
    export default {
        components: {
            NavAdmin,
            NavAdminCh,
            Enquiries,
            NavAdminDesktop,
            NavAdminDesktopCh,  
        },
        data() {
            return {
                display: false
            }
        },
        methods: {
            showEnglish: function() {
                this.display = true;
                document.getElementById("english").style.color = "red";
                document.getElementById("chinese").style.color = "black";
            },
            showChinese: function() {
                this.display = false;
                document.getElementById("chinese").style.color = "red";
                document.getElementById("english").style.color = "black";
            }
        },
        mounted () {
            this.$store.dispatch("getAllEnquiries");
            this.showChinese()
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

#nav-ch {
  height: 8vh;
  width: 100%;
}

#nav-admin-desktop {
  display: none;
}

#nav-admin-desktop-ch {
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

@media only screen and (min-width: 600px) {
    #nav-admin-desktop {
        display: none;
    }

    #nav-admin-desktop-ch {
        display: none;
    }

    #en-ch {

        h4 {
            font-size: 1.2rem;
        }
    }
}

@media only screen and (min-width: 1024px) {
    #nav-en {
        display: none;
    }

    #nav-ch {
        display: none;
    }

    #nav-admin-desktop {
        width: 100%;
        height: 10vh;
        display: grid;
        justify-items: center;
        align-items: center;
    }

    #nav-admin-desktop-ch {
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
}
</style>