<template>
    <div id="upload">
        <div id="header">
            <div></div>
            <h3>KEMIN TONG</h3>
            <div class="icon">
                <img src="../assets/search-icon.png" alt="">
            </div>
        </div>
        <div id="upload-form">
            <h3>Name</h3>
            <input type="text" id="name-input" class="input" v-model="name">
            <h3>Length</h3>
            <input type="text" id="length-input" class="input" v-model="length">
            <h3>Width</h3>
            <input type="text" id="width-input" class="input" v-model="width">
            <h3>Completed at</h3>
            <input type="text" id="completed-input" class="input" v-model="completed_at">
            <h3>Category</h3>
            <input type="text" id="category-input" class="input" v-model="category">
            <h3>Status</h3>
            <input type="text" id="status-input" class="input" v-model="status">
            <h3>Image URL</h3>
        </div>
        <image-input v-model="avatar" id="image-input">
            <div id="unit" slot="activator">
                <div size="150px" v-if="!avatar">
                    <h4>Click to add avatar</h4>
                </div>
                <div size="150px" v-else>
                    <img :src="avatar.imageURL" alt="avatar">
                </div>
            </div>
        </image-input>
        <div id="submit-btn">
            <div v-if="avatar && saved == false">
                <button @click="uploadArtwork" :loading="saving">Upload Artwork</button>
            </div>
        </div>
        <h3>{{ uploadStatus }}</h3>
    </div>
</template>

<script>
import ImageInput from '../components/ImageInput.vue'
import axios from "axios"
    export default {
        name: 'app',
        components: {
            ImageInput
        },
        data() {
            return {
                avatar: null,
                saving: false,
                saved: false,
                name: "",
                length: "",
                width: "",
                completed_at: "",
                category: "",
                status: "",
                url: "",
                uploadStatus: ""
            }
        },
        watch:{
            avatar: {
                handler: function() {
                    this.saved = false
                },
                deep: true
            }
        },
        methods: {
            uploadArtwork: function() {
                this.loginStatus = "Loading"
                axios.request({
                    url: "http://127.0.0.1:5000/artwork",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    data: {
                        name: this.name,
                        length: this.length,
                        width: this.width,
                        completed_at: this.completed_at,
                        category: this.category,
                        status: this.status,
                        url: this.avatar.imageURL,
                    }
                }).then((response) => {
                    console.log(response);
                    this.uploadStatus = "Success";
                }).catch((error) => {
                    console.log(error);
                    this.uploadStatus = "Error";
                }) 
            }
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

#upload {
    min-height: 100vh;
    width: 100%;
    display: grid;
    align-items: center;
}

#header {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 10% 70% 20%;
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid darkgrey; 

  .icon {
    height: 100%;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center; 

    img {
      height: 25px;
      object-fit: cover;
    }
  }

  h3 {
    font-weight: bold; 
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    letter-spacing: 5px;
  }
}

#upload-form {
    min-height: 60vh;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: left;
    align-items: center;
    margin-left: 2em;

    h3 {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        font-size: 1rem;
        text-align: left;
    }

    .input {
        width: 70%;
        height: 5vh;
        background-color: #E1E8ED;
        border: 1px solid #AAB8C2;
        margin: 0 0 1em 0;
        border-bottom: 2px solid darkgrey;
        text-align: center;
    }
}

#image-container {
    min-height: 50vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
}

#image-input {
    height: 100%;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;

    #unit {
        height: 20vh;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: center;

        h4 {
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
            font-size: 0.8rem;
            margin-top: 0.5em;
        }

        img {
            width: 200px;
        }
    }
}

#submit-btn {
    min-height: 40vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    margin-top: 2em;

    button {
        width: 100%;
        height: 7vh;
        border: 1px solid black; 
        border-radius: 1em;
        background-color: white;
        font-size: 0.8rem;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        padding: 0 0.5em 0 0.5em;

        :hover {
            background-color: darkgrey;
            color: white;
        }
    }
}

h3 {
    height: 5vh;
    font-weight: bold; 
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    letter-spacing: 5px;
  }
</style>