<template>
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
        <input type="file" id="file-input" accept="image/*" @change="onchange">
        <img :src="url" alt="">
        <button class="btn" @click="upload">Upload</button>
        <h3>{{ uploadStatus }}</h3>
    </div>
</template>

<script>
import axios from "axios"
    export default {
        data() {
            return {
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
        methods: {
            // onchange(e) {
            //     const file = e.target.files[0];
            //     console.log(file.name);
            //     let formData = new FormData();
            //     formData.set("file", file);
            //     axios.post("http://127.0.0.1:5000/upload", formData, {
            //         headers: {
            //             "content-type": "multipart/form-data",
            //         }
            //     })
            //     .then((response) => {
            //         console.log(response);
            //         this.url = "http://127.0.0.1:5000/" + file.name;
            //     });
            // }
        }
    }
</script>

<style lang="scss" scoped>
* {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#upload-form {
    min-height: 80vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;

    h3 {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        font-size: 1rem;
    }

    .input {
        width: 70%;
        height: 5vh;
        background-color: #E1E8ED;
        border: 1px solid #AAB8C2;
        margin: 0 0 1em 0;
        border-bottom: 1px solid #1DA1F2;
        text-align: center;
    }

    .btn {
        width: 70%;
        height: 7vh;
        border: 1px solid #1DA1F2; 
        border-radius: 1.5em;
        background-color: white;
        font-size: 1rem;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        color: #1DA1F2;

        :hover {
            background-color: #1DA1F2;
            color: white;
        }
    }

    h3 {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        font-size: 1rem;
        margin-top: 0.5em;
    }
}
</style>