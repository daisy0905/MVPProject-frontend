<template>
    <div id="enquiry">
        <div id="form">
            <h4>Please leave your message, we will reply ASAP!</h4>
            <h4>Last Name</h4>
            <input type="text" class="input" v-model="lastname" />
            <h4>First Name</h4>
            <input type="text" class="input" v-model="firstname" />
            <h4>Email</h4>
            <input type="text" class="input" v-model="email" />
            <h4>Phone Number</h4>
            <input type="text" class="input" v-model="phone_number" />
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
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      phone_number: "",
      message: "",
      enquiryStatus: "",
      review: 0,
    }
  },
  methods: {
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
            phone_number: this.phone_number,
            message: this.message,
            review: this.review
          },
        })
        .then((response) => {
          console.log(response);
          this.enquiryStatus = "Your enquiry has been submitted!";
          setTimeout(()=>{this.$router.push("/artwork")}, 1000)
        })
        .catch((error) => {
          console.log(error);
          this.enquiryStatus = "Failed to submit!";
        });
    },
  }
};
</script>

<style lang="scss" scoped>

#enquiry {
    height: 62vh;
    width: 30%;
    display: grid;
    justify-items: center;
    align-items: start;
    row-gap: 0.5vh;
}

#form {
    width: 90%;
    height: 50vh;
    display: grid;
    justify-items: center;
    align-items: center;
    margin: 1em;
    row-gap: 1vh;

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
    width: 70%;
    height: 3vh;
    border: 1px solid #aab8c2;
    text-align: center;
    margin: 0.2em;
  }

  #message-input {
    width: 70%;
    height: 15vh;
    border: 1px solid #aab8c2;
    text-align: center;
    font-size: 0.8rem;
  }

  button {
    width: 40%;
    height: 5vh;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    border: 1px solid black;
    box-shadow: 1px 1px 2px grey;
    font-weight: bold;
    margin-top: 0.5em;
  }
}
</style>