<template>
    <div id="landscape">
        <navigation id="nav-en"></navigation>
        <nav-desktop id="nav-desktop"></nav-desktop>
        <div id="en-ch-mobile">
            <div></div>
            <h4 id="english" @click="showEnglish">EN</h4>
            <h4 id="chinese" @click="showChinese">中文</h4>
            <div></div>
        </div>
        <div id="search-bar-mobile">
            <div></div>
            <input type="text" class="search" v-model="content" />
            <img @click="getArtworkList"
                src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png"
                alt="search icon"
            />
            <div></div>
        </div>
        <div id="desktop">
          <div></div>
          <h4 id="english-show" @click="English">EN</h4>
          <h4 id="chinese-show" @click="Chinese">中文</h4>
          <div></div>
          <input type="text" class="search" v-model="content" />
          <img @click="getArtworkList"
                src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png"
                alt="search icon"
          />
          <div></div>
        </div>
        <div id="content">
            <div id="image-detail">
                <img :src="url" />
            </div>
            <div id="description">
                <h2>{{ name }}</h2>
                <p>{{ length }} X {{ width }}</p>
                <p>{{ material }}</p>
                <p>{{ completed_at }}</p>
            </div>
        </div>
        <div id="status">
          <p @click="statusCheck">{{ status }}</p>
        </div>
        <div id="btn-container">
          <button @click="showEnquiry" class="btn-1"><span v-if="this.$store.getters.languageGet">询价</span><span v-else>Enquiry</span></button>
          <button class="btn-1" v-if="artStatus == true" @click="addToCart"><span v-if="this.$store.getters.languageGet">下订单</span><span v-else>Add to Cart</span></button>
          <button v-else class="btn-2"><span v-if="this.$store.getters.languageGet">下订单</span><span v-else>Add to Cart</span></button>
        </div>
        <div id="alert" v-if="show == true">
          <button class="closebtn" @click="close">&times;</button>
          <h4>{{ updateStatus }}</h4>
        </div>
        <div id="description-desktop">
          <div id="image-detail-desktop">
            <img :src="url" />
          </div>
          <div id="content-desktop">
            <h2>{{ name }}</h2>
            <p>{{ length }} X {{ width }}</p>
            <p>{{ material }}</p>
            <p>{{ completed_at }}</p>
            <div></div>
            <p id="text-status" @click="statusCheck">{{ status }}</p>
            <button @click="showEnquiryForm" class="btn-1"><span v-if="this.$store.getters.languageGet">询价</span><span v-else>Enquiry</span></button>
            <button class="btn-1" v-if="artStatus == true" @click="addToCart"><span v-if="this.$store.getters.languageGet">下订单</span><span v-else>Add to Cart</span></button>
            <button v-else class="btn-2"><span v-if="this.$store.getters.languageGet">下订单</span><span v-else>Add to Cart</span></button>
            <div id="alert-desktop" v-if="show == true">
              <button class="closebtn" @click="closeDesktop">&times;</button>
              <h4>{{ updateStatus }}</h4>
            </div>
          </div>
        </div>
        <enquiry-form class="enquiry-form" v-if="open"></enquiry-form>
        <footer-section></footer-section>
    </div>
</template>

<script>
import Navigation from "../components/Nav.vue"
import NavDesktop from '../components/NavDesktop.vue';
import cookies from "vue-cookies";
import axios from "axios";
import EnquiryForm from '../components/EnquiryForm.vue';
import FooterSection from '../components/Footer.vue'
    export default {
        components: {
            Navigation,
            NavDesktop,
            EnquiryForm,
            FooterSection,
        },
        data() {
            return {
                content: "Search artwork",
                artStatus: true,
                updateStatus: "",
                show: false,
                open: false
            }
        },
        methods: {
            statusCheck: function () {
                console.log(this.$store.state.artwork[0].status);
                if (this.$store.state.artwork[0].status == undefined) return;
                if (this.$store.state.artwork[0].status == "Available") {
                    this.artStatus = true;
                } else if (this.$store.state.artwork[0].status == "On hold") {
                    this.artStatus = false;
                } else if (this.$store.state.artwork[0].status == "Sold") {
                    this.artStatus = false;
                }
            },
            addToCart: function () {
                this.show = true;
                if (this.artStatus == true) {
                return this.changeStatus();
                }
            },
            changeStatus: function () {
                axios.request({
                    url: "https://artisttongkemin.ml/api/artwork",
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    data: {
                        id: cookies.get("id"),
                        status: "On hold",
                    },
                })
                .then((response) => {
                    console.log(response);
                    this.artStatus = false;
                    this.updateStatus = "Success to add!";
                    this.$store.dispatch("getArtwork");
                })
                .catch((error) => {
                    console.log(error);
                    this.updateStatus = "Failed to add!";
                });
            },
            close: function () {
                document.getElementById("alert").style.display = "none";
            },
            showEnquiry: function() {
                this.$router.push("/enquiry");
            },
            showEnglish: function() {
                cookies.remove("chinese")
                this.$store.commit("updateLanguage", false)
                document.getElementById("english").style.color = "red";
                document.getElementById("chinese").style.color = "black";
            },
            showChinese: function() {
                cookies.set("chinese", true)
                this.$store.commit("updateLanguage", true)
                document.getElementById("chinese").style.color = "red";
                document.getElementById("english").style.color = "black";
            },
            getArtworkList: function() {
                cookies.set("artContent", this.content);
                this.$router.push("/artworklist")
            },
            showEnquiryForm: function() {
                this.open =! this.open;
            },
            closeDesktop: function () {
                document.getElementById("alert-desktop").style.display = "none";
            },
            English: function() {
                this.display = true;
                cookies.remove("chinese")
                this.$store.commit("updateLanguage", false)
                document.getElementById("english-show").style.color = "red";
                document.getElementById("chinese-show").style.color = "black";
            },
            Chinese: function() {
                this.display = false;
                cookies.set("chinese", true)
                this.$store.commit("updateLanguage", true)
                document.getElementById("chinese-show").style.color = "red";
                document.getElementById("english-show").style.color = "black";
            },
        },
        mounted: function() {
            if(this.$store.state.artworks.length == 0) {
                this.$store.dispatch("getAllArtworks")
            };
            if(this.$store.state.artwork.length == 0) {
                this.$store.dispatch("getArtwork")
            };
            setTimeout(() => {
                this.statusCheck();
            }, 500),
            this.showEnglish()
        },
        computed: {
            name() {
                if (this.$store.state.artwork[0] == undefined) return "";
                return this.$store.state.artwork[0].name;
            },
            length() {
                if (this.$store.state.artwork[0] == undefined) return "";
                return this.$store.state.artwork[0].length;
            },
            width() {
                if (this.$store.state.artwork[0] == undefined) return "";
                return this.$store.state.artwork[0].width;
            },
            completed_at() {
                if (this.$store.state.artwork[0] == undefined) return "";
                return this.$store.state.artwork[0].completed_at;
            },
            url() {
                if (this.$store.state.artwork[0] == undefined) return "";
                return this.$store.state.artwork[0].url;
            },
            material() {
                if (this.$store.state.artwork[0] == undefined) return "";
                return this.$store.state.artwork[0].material;
            },
            status() {
                if (this.$store.state.artwork[0] == undefined) return "";
                return this.$store.state.artwork[0].status;
            },
        },
    }
</script>

<style lang="scss" scoped>
#landscape {
    min-height: 100vh;
    width: 100%;
    display: grid;
    align-items: start;
    justify-items: center;
}

#nav-en {
  height: 8vh;
  width: 100%;
}

#nav-desktop {
  display: none;
}

#en-ch-mobile {
    min-height: 5vh;
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

#search-bar-mobile {
  min-height: 8vh;
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 25% 40% 15% 20%;

  .search {
    height: 3vh;
    width: 100%;
    background-color: white;
    text-align: center;
    color: grey;
  }

  img {
    width: 25px;
  }
}

#desktop {
  display: none;
}

#content {
  min-height: 40vh;
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
}

#image-detail {
  min-height: 20vh;
  width: 100%;
  display: grid;
  align-items: start;
  justify-items: center;

  img {
    width: 90%;
    vertical-align: super;
  }
}

#description {
  min-height: 20vh;
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 0;

  h2 {
    width: 90%;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    text-align: center;
    margin: 0;
    letter-spacing: 1px;
    margin-top: 0.5em;
  }

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    margin: 0;
  }
}

#status {
  height: 5vh;
  width: 25vw;
  display: grid;
  justify-items: center;
  align-items: center;

  p {
    background-color: grey;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    margin: 0;
    padding: 0.5em;
    color: white;
    font-weight: bold;
    letter-spacing: 3px;
  }
}

#btn-container {
  min-height: 20vh;
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: 1fr 1fr;
  margin-top: 1em;

  .btn-1 {
    width: 25vw;
    height: 5vh;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    border: 1px solid black;
    box-shadow: 1px 1px 2px grey;
    font-weight: bold;
  }

  .btn-2 {
    width: 25vw;
    height: 5vh;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    border: 1px solid black;
    box-shadow: 1px 1px 2px grey;
    font-weight: bold;
    text-decoration: line-through;
  }
}

#alert {
  height: 5vh;
  width: 40vw;
  background-color: lightgrey;

  .closebtn {
    height: 100%;
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
    text-align: center;

    :hover {
      color: black;
    }
  }

  h4 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    text-align: center;
    margin: 0;
  }
}

#description-desktop {
  display: none;
}

.enquiry-form {
  display: none;
}

@media only screen and (min-width: 600px) {
  #nav-desktop {
    display: none;
  }

  #en-ch-mobile {

      h4 {
      font-size: 1.2rem;
    }
  }

#search-bar-mobile {

  .search {
    height: 4vh;
    font-size: 1.2rem;
  }

  img {
    width: 30px;
  }
}

#desktop {
  display: none;
}

#description {

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.2rem;
  }
}

#status {
    height: 8vh;

  p {
        width: 25vw;
        font-size: 1.5rem;
  }
}

#btn-container {

  .btn-1 {
    font-size: 1.2rem;
  }

  .btn-2 {
    font-size: 1.2rem;
  }
}

#alert {

  .closebtn {
    width: 15%;
    font-size: 50px;
  }

  h4 {
    font-size: 1.2rem;
  }
}

#description-desktop {
  display: none;
}
}

.enquiry-form {
  display: none;
}

@media only screen and (min-width: 1024px) {

#nav-en {
  display: none;
}

#en-ch-mobile {
  display: none;
}

#search-bar-mobile {
  display: none;
}

#nav-desktop {
  width: 100%;
  height: 10vh;
  display: grid;
  justify-items: center;
  align-items: center;
}

#desktop {
  height: 10vh;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 5% 10% 10% 48% 22% 5%;
  margin: 0 1em 0 1em;

  h4 {
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
  }

  .search {
    height: 4vh;
    width: 100%;
    background-color: white;
    text-align: center;
    color: grey;
    font-size: 1rem;
  }

  img {
    width: 25px;
  }
}

#content {
  display: none;
}

#status {
  display: none;
}

#btn-container {
  display: none;
}

#alert {
  display: none;
}

#description-desktop {
  width: 100%;
  min-height: 90vh;
  display: grid;
  grid-template-columns: 70% 30%;
  justify-items: center;
  align-items: start;
}

#image-detail-desktop {
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: start;

  img {
    height: 95%;
  }
}

#content-desktop {
  width: 90%;
  min-height: 80vh;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: repeat(4, 10%) 20% repeat(4, 10%);
  row-gap: 0.5em;

  h2 {
    width: 90%;
    font-weight: bold;
    font-size: 1.8rem;
    text-align: center;
    margin: 0;
    letter-spacing: 1px;
  }

  p {
    width: 70%;
    font-size: 1.5rem;
    margin: 0;
    line-height: 2em;
  }

  #text-status {
    height: 5vh;
    width: 15vw;
    background-color: grey;
    font-size: 1.2rem;
    margin: 0;
    padding: 0.5em 0.8em 0.5em 0.8em;
    color: white;
    font-weight: bold;
    letter-spacing: 3px;
  }

  .btn-1 {
    width: 15vw;
    height: 5vh;
    font-size: 1.2rem;
    border: 1px solid black;
    box-shadow: 1px 1px 2px grey;
    font-weight: bold;
  }

  .btn-2 {
    width: 15vw;
    height: 5vh;
    font-size: 1.2rem;
    border: 1px solid black;
    box-shadow: 1px 1px 2px grey;
    font-weight: bold;
    text-decoration: line-through;
  }
}

#alert-desktop {
  height: 5vh;
  width: 15vw;
  background-color: lightgrey;

  .closebtn {
    height: 100%;
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
    text-align: center;

    :hover {
      color: black;
    }
  }

  h4 {
    font-size: 0.8rem;
    text-align: center;
    margin: 0;
  }
}
.enquiry-form {
  display: grid;
  justify-items: center;
  align-items: start;
  position: fixed;
  top: 20vh;
  right: -1em;
  background-color: lightgrey;
}
}
</style>