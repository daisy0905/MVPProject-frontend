<template>
    <div id="status-list">
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
        <div id="container-1">
            <div class="art-status">
                <div></div>
                <h5>{{ availableNum }}</h5>
                <h4 @click="getAvailable">Available</h4>
                <div></div>
            </div>
            <div class="art-status">
                <div></div>
                <h5>{{ onholdNum }}</h5>
                <h4 @click="getOnhold">On hold</h4>
                <div></div>
            </div>
             <div class="art-status">
                <div></div>
                <h5>{{ soldNum }}</h5>
                <h4 @click="getSold">Sold</h4>
                <div></div>
            </div>
        </div>
        <available class="status" v-if="status == 'available'"></available>
        <onhold class="status" v-if="status == 'onhold'"></onhold>
        <sold class="status" v-if="status == 'sold'"></sold>
    </div>
</template>

<script>
import Available from '../components/Available.vue'
import NavAdmin from "../components/NavAdmin.vue"
import NavAdminCh from "../components/NavAdminCh.vue"
import Onhold from '../components/Onhold.vue'
import Sold from '../components/Sold.vue'
import NavAdminDesktop from '../components/NavAdminDesktop.vue'
import NavAdminDesktopCh from '../components/NavAdminDesktopCh.vue'
    export default {
    components: { 
        Available,
        NavAdmin,
        NavAdminCh,
        Onhold,
        Sold,
        NavAdminDesktop,
        NavAdminDesktopCh
    },
    data() {
        return {
            status: "available",
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
        },
        getAvailable: function() {
            this.status = "available"
        },
        getOnhold: function() {
            this.status = "onhold"
        },
        getSold: function() {
            this.status = "sold"
        },
    },
    mounted () {
        if(this.$store.state.artworks.length == 0) {
            this.$store.dispatch("getAllArtworks")
        };
        this.showChinese()
    },
    computed: {
        availableNum() {
            console.log(this.$store.getters.getAvailable);
            return this.$store.getters.getAvailable.length;
        },
        onholdNum() {
            console.log(this.$store.getters.getOnhold);
            return this.$store.getters.getOnhold.length;
        },
        soldNum() {
            console.log(this.$store.getters.getSold);
            return this.$store.getters.getSold.length;
        },

    },
        
}
</script>

<style lang="scss" scoped>
#status-list {
    min-height: 30vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: left;
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

#container-1 {
    height: 5vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: start;
    grid-template-columns: 1fr 1fr 1fr;


    .art-status {
        height: 5vh;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: start;
        grid-template-columns: 1fr 1fr 2.5fr 1fr;
        margin-top: 1em;

        h5 {
            font-weight: bold; 
            font-family: Arial, Helvetica, sans-serif;
            font-size: 0.8rem;
            color: #AAB8C2;
        }

        h4 {
            font-weight: bold; 
            font-family: Arial, Helvetica, sans-serif;
            font-size: 0.8rem;
        }
    }
}

.status {
    min-height: 10vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: start;

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

  #container-1 {

    .art-status {

        h5 {
            font-size: 1rem;
        }

        h4 {
            font-size: 1.2rem;
        }
    }
}

.status {
    min-height: 10vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: start;
    grid-template-columns: 1fr 1fr;

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

    #container-1 {
        height: 6vh;
        width: 100%;
        background-color: lightgrey;
        column-gap: 0.5em;
        justify-items: center;
        align-items: center;

    .art-status {
        height: 100%;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-columns: 1fr 1fr 2.5fr 1fr;
        margin-top: 0;

        h5 {
            color: white;
            font-size: 1.2rem;
        }

        h4 {
            color: white;
            font-size: 1.5rem;
        }
    }
}

    .status {
        min-height: 10vh;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: start;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 1em;

    }
}
</style>