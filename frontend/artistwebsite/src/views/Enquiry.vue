<template>
  <div id="enquiry">
        <div id="header">
            <div></div>
            <h3>KEMIN TONG</h3>
            <div></div>
        </div>
        <div id="unit-1">
            <div></div>
            <h4 id="english" @click="showEnglish">EN</h4>
            <h4 id="chinese" @click="showChinese">中文</h4>
            <div></div>
        </div>
        <div id="enquiry-form" v-if="display == true">
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
        <div id="enquiry-form" v-if="display == false">
            <h4>请留下您的信息，我们将尽快回复，谢谢！</h4>
            <h4>姓</h4>
            <input type="text" class="input" v-model="lastname" />
            <h4>名</h4>
            <input type="text" class="input" v-model="firstname" />
            <h4>邮箱地址</h4>
            <input type="text" class="input" v-model="email" />
            <h4>联系电话</h4>
            <input type="text" class="input" v-model="phone_number" />
            <h4>留言</h4>
            <textarea id="message-input" v-model="message"></textarea>
            <button @click="postEnquiry">提交</button>
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
      display: false
    }
  },
  methods: {
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
    }
  },
};
</script>

<style lang="scss" scoped>
* {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#enquiry {
    height: 50vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    row-gap: 0.5vh;
}

#unit-1 {
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
    }
}

#header {
  height: 8vh;
  width: 100%;
  display: grid;
  grid-template-columns: 10% 70% 20%;
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid darkgrey; 

  h3 {
    font-weight: bold; 
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    letter-spacing: 5px;
  }
}

#enquiry-form {
    width: 80%;
    height: 50vh;
    display: grid;
    justify-items: center;
    align-items: center;
    margin: 1em;
    row-gap: 1vh;
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
    width: 70%;
    height: 3vh;
    border: 1px solid #aab8c2;
    text-align: center;
    margin: 0.2em;
  }

  #message-input {
    width: 70%;
    height: 20vh;
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
    margin-top: 1em;
  }
}
</style>