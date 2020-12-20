<template>
  <div id="artwork-list">
    <nav-admin id="nav-en"></nav-admin>
    <nav-admin-desktop id="nav-admin-desktop"></nav-admin-desktop>
    <div id="en-ch">
      <div></div>
      <h4 id="english" @click="showEnglish">EN</h4>
      <h4 id="chinese" @click="showChinese">中文</h4>
      <div></div>
    </div>
    <artwork-card-list class="artworks"></artwork-card-list>
    <div id="upload-artwork">
      <img
        @click="openUpload"
        src="../assets/upload-icon.png"
        alt="artwork upload icon"
      />
    </div>
    <upload-form class="upload-form" v-if="open"></upload-form>
    <footer-contact></footer-contact>
    <div id="go-to-top">
      <a href="#artwork-list">TO TOP</a>
    </div>
  </div>
</template>

<script>
import ArtworkCardList from "../components/ArtworkCardList.vue";
import FooterContact from "../components/FooterContact.vue";
import NavAdmin from "../components/NavAdmin.vue";
import NavAdminDesktop from "../components/NavAdminDesktop.vue";
import UploadForm from "../components/UploadForm.vue";
import cookies from "vue-cookies";

export default {
  components: {
    NavAdmin,
    ArtworkCardList,
    NavAdminDesktop,
    UploadForm,
    FooterContact,
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    showEnglish: function () {
      cookies.remove("chinese");
      this.$store.commit("updateLanguage", false);
      document.getElementById("english").style.color = "red";
      document.getElementById("chinese").style.color = "black";
    },
    showChinese: function () {
      cookies.set("chinese", true);
      this.$store.commit("updateLanguage", true);
      document.getElementById("chinese").style.color = "red";
      document.getElementById("english").style.color = "black";
    },
    openUpload: function () {
      this.open = !this.open;
    },
  },
  mounted() {
    this.$store.dispatch("getAllArtworks");
    this.showEnglish();
  },
};
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
  bottom: 10vh;
  z-index: 1000;
  background-color: white;
  box-shadow: 4px 4px 4px grey;
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

    &:link,
    &:visited {
      background-color: black;
    }

    &:hover,
    &:active {
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