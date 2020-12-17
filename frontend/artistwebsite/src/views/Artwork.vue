<template>
    <div id="landscape">
        <navigation v-if="display == true"></navigation>
        <nav-ch v-if="display == false"></nav-ch>
        <div id="en-ch">
            <div></div>
            <h4 id="english" @click="showEnglish">EN</h4>
            <h4 id="chinese" @click="showChinese">中文</h4>
            <div></div>
        </div>
        <div id="search-bar">
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
        <div v-if="display == true">
            <div id="btn-container">
                <button @click="showEnquiry" class="btn-1">Enquiry</button>
                <button class="btn-1" v-if="artStatus == true" @click="addToCart">Add to Cart</button>
                <button v-else class="btn-2">Add to Cart</button>
            </div>
            <div id="alert" v-if="show == true">
                <button class="closebtn" @click="close">&times;</button>
                <h4>{{ updateStatus }}</h4>
            </div>
        </div>
        <div v-if="display == false">
            <div id="btn-container">
                <button @click="showEnquiry" class="btn-1">询价</button>
                <button class="btn-1" v-if="artStatus == true" @click="addToCart">下订单</button>
                <button v-else class="btn-2">下订单</button>
            </div>
            <div id="alert" v-if="show == true">
                <button class="closebtn" @click="close">&times;</button>
                <h4>{{ updateStatus }}</h4>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from "../components/Nav.vue"
import NavCh from "../components/NavCh.vue";
import cookies from "vue-cookies";
import axios from "axios";
    export default {
        components: {
            Navigation,
            NavCh
        },
        data() {
            return {
                display: false,
                content: "Search artwork",
                artStatus: true,
                updateStatus: "",
                show: false,
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
                    url: "http://127.0.0.1:5000/artwork",
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
                this.display = true;
                document.getElementById("english").style.color = "white";
                document.getElementById("chinese").style.color = "black";
            },
            showChinese: function() {
                this.display = false;
                document.getElementById("chinese").style.color = "white";
                document.getElementById("english").style.color = "black";
            },
            getArtworkList: function() {
                cookies.set("artContent", this.content);
                this.$router.push("/artworklist")
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
            this.showChinese()
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
* {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#landscape {
    min-height: 100vh;
    width: 100%;
    display: grid;
    align-items: start;
    justify-items: center;
}

#en-ch {
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

#search-bar {
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
    padding: 0.5em 0.8em 0.5em 0.8em;
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

@media only screen and (min-width: 600px) {
  #en-ch {

      h4 {
      font-size: 1.2rem;
    }
  }

#search-bar {

  .search {
    height: 4vh;
    font-size: 1.2rem;
  }

  img {
    width: 30px;
  }
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

}
</style>