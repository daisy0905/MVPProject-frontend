<template>
  <div id="status-list">
    <nav-admin id="nav-en"></nav-admin>
    <nav-admin-desktop
      id="nav-admin-desktop"
    ></nav-admin-desktop>
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
        <h4 id="availableStatus" @click="getAvailable">
          <span v-if="this.$store.getters.languageGet">在库</span><span v-else>Available</span>
        </h4>
        <div></div>
      </div>
      <div class="art-status">
        <div></div>
        <h5>{{ onholdNum }}</h5>
        <h4 id="onHoldStatus" @click="getOnhold">
          <span v-if="this.$store.getters.languageGet">已预订</span><span v-else>On hold</span>
        </h4>
        <div></div>
      </div>
      <div class="art-status">
        <div></div>
        <h5>{{ soldNum }}</h5>
        <h4 id="soldStatus" @click="getSold">
          <span v-if="this.$store.getters.languageGet">已售</span><span v-else>Sold</span>
        </h4>
        <div></div>
      </div>
    </div>
    <available class="status" v-if="status == 'available'"></available>
    <onhold class="status" v-if="status == 'onhold'"></onhold>
    <sold class="status" v-if="status == 'sold'"></sold>
    <footer-contact></footer-contact>
    <div id="go-to-top">
      <a href="#status-list">TO TOP</a>
    </div>
  </div>
</template>

<script>
import Available from "../components/Available.vue";
import NavAdmin from "../components/NavAdmin.vue";
import Onhold from "../components/Onhold.vue";
import Sold from "../components/Sold.vue";
import NavAdminDesktop from "../components/NavAdminDesktop.vue";
import FooterContact from "../components/FooterContact.vue";
import cookies from "vue-cookies";

export default {
  components: {
    Available,
    NavAdmin,
    Onhold,
    Sold,
    NavAdminDesktop,
    FooterContact,
  },
  data() {
    return {
      status: "available",
    };
  },
  methods: {
    showEnglish: function () {
      cookies.remove("chinese")
      this.$store.commit("updateLanguage", false)
      document.getElementById("english").style.color = "red";
      document.getElementById("chinese").style.color = "black";
    },
    showChinese: function () {
      cookies.set("chinese", true);
      this.$store.commit("updateLanguage", true);
      document.getElementById("chinese").style.color = "red";
      document.getElementById("english").style.color = "black";
    },
    getAvailable: function () {
      this.status = "available";
      document.getElementById("availableStatus").style.color = "#bb9457ff";
      document.getElementById("onHoldStatus").style.color = "black";
      document.getElementById("soldStatus").style.color = "black";
    },
    getOnhold: function () {
      this.status = "onhold";
      document.getElementById("availableStatus").style.color = "black";
      document.getElementById("onHoldStatus").style.color = "#bb9457ff";
      document.getElementById("soldStatus").style.color = "black";
    },
    getSold: function () {
      this.status = "sold";
      document.getElementById("availableStatus").style.color = "black";
      document.getElementById("onHoldStatus").style.color = "black";
      document.getElementById("soldStatus").style.color = "#bb9457ff";
    },
  },
  mounted() {
    if (this.$store.state.artworks.length == 0) {
      this.$store.dispatch("getAllArtworks");
    }
    this.showEnglish();
    this.getAvailable();
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
};
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
      color: #aab8c2;
    }

    h4 {
      font-weight: bold;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 0.8rem;
    }
  }
}

.status {
  min-height: 80vh;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: start;
  align-content: start;
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
    width: 100%;
    grid-template-columns: 1fr 1fr;
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
    min-height: 70vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: start;
    align-content: start;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 1em;
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