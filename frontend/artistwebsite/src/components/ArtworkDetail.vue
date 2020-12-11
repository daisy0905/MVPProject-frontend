<template>
  <div id="image">
    <div id="search-bar">
      <div></div>
      <input type="text" class="search" v-model="content" />
      <img
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
        <p>Size: {{ length }} X {{ width }}</p>
        <p>Material: {{ material }}</p>
        <p>Completed at: {{ completed_at }}</p>
      </div>
    </div>
    <div id="status">
      <p @click="statusCheck">{{ status }}</p>
    </div>
    <div id="btn-container">
      <button @click="showEnquiry" class="btn-1">Enquiry</button>
      <button class="btn-1" v-if="artStatus == true" @click="addToCart">
        Add to Cart
      </button>
      <button v-else class="btn-2">Add to Cart</button>
    </div>
    <div id="alert" v-if="show == true">
      <button class="closebtn" @click="close">&times;</button>
      <h4>{{ updateStatus }}</h4>
    </div>
    <div v-if="display" id="enquiry-form" class="animate__animated animate__bounce">
      <h4>Please leave your message, we will reply ASAP!</h4>
      <h4>First Name</h4>
      <input type="text" class="input" v-model="firstname" />
      <h4>Last Name</h4>
      <input type="text" class="input" v-model="lastname" />
      <h4>Email</h4>
      <input type="text" class="input" v-model="email" />
      <h4>Message</h4>
      <textarea id="message-input" v-model="message"></textarea>
      <button @click="postEnquiry">Submit</button>
      <p>{{ enquiryStatus }}</p>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
export default {
  name: "landscapes",
  data() {
    return {
      content: "Search artwork",
      artStatus: true,
      updateStatus: "",
      show: false,
      display: false,
      firstname: "",
      lastname: "",
      email: "",
      message: "",
      enquiryStatus: "",
    };
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
      axios
        .request({
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
        this.display =! this.display;
    },
    postEnquiry: function() {
        axios.request({
          url: "http://127.0.0.1:5000/enquiry",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            art_id: cookies.get("id"),
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            message: this.message,
          },
        })
        .then((response) => {
          console.log(response);
          this.enquiryStatus = "Your enquiry has been submitted!";
        })
        .catch((error) => {
          console.log(error);
          this.enquiryStatus = "Failed to submit!";
        });
    }
  },
  mounted() {
    this.$store.dispatch("getArtwork");
    // this.statusCheck();
    setTimeout(() => {
      this.statusCheck();
    }, 500);
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
};
</script>

<style lang="scss" scoped>
#image {
  min-height: 100vh;
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  position: relative;
}

#search-bar {
  height: 8vh;
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
  min-height: 50vh;
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
}

#image-detail {
  min-height: 40vh;
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
  height: 20vh;
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 0;

  h2 {
    width: 90%;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    text-align: center;
    margin: 0;
    letter-spacing: 3px;
  }

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    margin: 0;
  }
}

#status {
  height: 5vh;
  width: 50%;
  display: grid;
  justify-items: center;
  align-items: center;

  p {
    background-color: grey;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    margin: 0;
    padding: 0.5em 0.8em 0.5em 0.8em;
    color: white;
    font-weight: bold;
    letter-spacing: 3px;
  }
}

#btn-container {
  height: 20vh;
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
  width: 80%;
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

#enquiry-form {
    width: 50%;
    min-height: 50vh;
    display: grid;
    justify-items: center;
    align-items: center;
    background-color: white;
    margin: 1em;
    row-gap: 0.5vh;
    position: absolute;
    top: 20vh;
    left: 20vw;
    box-shadow: 2px 2px 2px darkgrey;
    padding-top: 1em;

  h4 {
    width: 90%;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    margin: 0.2em;
  }

  p {
    width: 90%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.7rem;
    text-align: center;
    margin: 0.2em;
  }

  .input {
    width: 80%;
    height: 3vh;
    border: 1px solid #aab8c2;
    text-align: center;
    margin: 0.2em;
  }

  #message-input {
    width: 80%;
    height: 15vh;
    border: 1px solid #aab8c2;
    text-align: center;
    font-size: 0.8rem;
  }

  .button {
    width: 40%;
    height: 5vh;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    border: 1px solid black;
    box-shadow: 1px 1px 2px grey;
    font-weight: bold;
  }
}
</style>
