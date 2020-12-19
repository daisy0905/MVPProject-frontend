<template>
    <div id="artwork-list">
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
        <artwork-card-list class="artworks"></artwork-card-list>
        <div id="upload-artwork">
            <img @click="openUpload" src="../assets/upload-icon.png" alt="artwork upload icon">
        </div>
        <upload-form class="upload-form" v-if="display == true && open"></upload-form>
        <upload-form-ch class="upload-form" v-if="display == false && open"></upload-form-ch>
    </div>
</template>

<script>
import ArtworkCardList from '../components/ArtworkCardList.vue'
import NavAdmin from "../components/NavAdmin.vue"
import NavAdminCh from "../components/NavAdminCh.vue"
import NavAdminDesktop from '../components/NavAdminDesktop.vue'
import NavAdminDesktopCh from '../components/NavAdminDesktopCh.vue'
import UploadForm from '../components/UploadForm.vue'
import UploadFormCh from "../components/UploadFormCh"

    export default {
        components: {
            NavAdmin,
            NavAdminCh,
            ArtworkCardList,
            NavAdminDesktop,
            NavAdminDesktopCh,
            UploadForm,
            UploadFormCh

        },
        data() {
            return {
                display: false,
                open: false
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
            openUpload: function() {
                this.open =! this.open
            }
        },
        mounted () {
            this.$store.dispatch("getAllArtworks");
            this.showChinese()
        },
    }
</script>

<style lang="scss" scoped>
#artwork-list {
    min-height: 100vh;
    width: 100%;
    display: grid;
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

.artworks {
        min-height: 100vh;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: center; 
        margin-top: 1em;
        row-gap: 1vh;
}

#upload-artwork {
    position: fixed;
    left: 0;
    bottom: 5vh;

    img {
        height: 30px;
        width: 30px;
    }
}

.upload-form {
    position: fixed;
    height: 72vh;
    width: 90%;
    left: 5vw;
    bottom: 15vh;
    z-index: 1000;
    background-color: white;
    box-shadow: 4px 4px 4px grey;
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

  #upload-artwork {

    img {
        height: 50px;
        width: 50px;
    }
}

.upload-form {
    height: 70vh;
    width: 80%;
}
}

@media only screen and (min-width: 1024px) {
    #artwork-list {
        min-height: 100vh;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: start;
    }

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


    .artworks {
        min-height: 100vh;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: center; 
        row-gap: 1vh;
        grid-template-columns: 1fr 1fr;
    }

    .upload-form {
        height: 70vh;
        width: 40%;
        left: 2vw;
        bottom: 12vh;
    }
}

</style>