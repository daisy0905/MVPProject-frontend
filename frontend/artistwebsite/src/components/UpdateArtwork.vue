<template>
  <div id="upload">
    <div class="upload-form">
      <h3><span v-if="this.$store.getters.languageGet">名称</span><span v-else>Name</span></h3>
      <input type="text" class="input" v-model="name" />
      <h3><span v-if="this.$store.getters.languageGet">长</span><span v-else>Length</span></h3>
      <input type="text" class="input" v-model="length" />
      <h3><span v-if="this.$store.getters.languageGet">宽</span><span v-else>Width</span></h3>
      <input type="text" class="input" v-model="width" />
      <h3><span v-if="this.$store.getters.languageGet">完成年份</span><span v-else>Completed at</span></h3>
      <input type="text" class="input" v-model="completed_at" />
      <h3><span v-if="this.$store.getters.languageGet">材料</span><span v-else>Material</span></h3>
      <input type="text" class="input" v-model="material" />
      <h3><span v-if="this.$store.getters.languageGet">主题</span><span v-else>Category</span></h3>
      <input type="text" class="input" v-model="category" />
      <h3><span v-if="this.$store.getters.languageGet">状态</span><span v-else>Status</span></h3>
      <input type="text" class="input" v-model="status" />
      <h3><span v-if="this.$store.getters.languageGet">画作图片</span><span v-else>Image URL</span></h3>
      <input type="text" class="input" v-model="url" />
    </div>
    <div class="submit-btn">
      <div></div>
      <button @click="updateArtwork"><span v-if="this.$store.getters.languageGet">更新</span><span v-else>Update</span></button>
      <div></div>
    </div>
    <h3>{{ uploadStatus }}</h3>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      length: "",
      width: "",
      completed_at: "",
      material: "",
      category: "",
      status: "",
      url: "",
      uploadStatus: "",
    };
  },
  props: {
    artId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    updateArtwork: function () {
      axios
        .request({
          url: "https://artisttongkemin.ml/api/artwork",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            id: this.artId,
            name: this.name,
            length: this.length,
            width: this.width,
            completed_at: this.completed_at,
            material: this.material,
            category: this.category,
            status: this.status,
            url: this.url,
          },
        })
        .then((response) => {
          console.log(response);
          this.$emit("update", response.data);
          this.uploadStatus = "Success";
        })
        .catch((error) => {
          console.log(error);
          this.uploadStatus = "Error";
        });
    },
  },
};
</script>

<style lang="scss" scoped>

#upload {
  height: 65vh;
  width: 100%;
  display: grid;
  align-items: center;
}

.upload-form {
  min-height: 20vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1vh;
  justify-items: center;
  align-items: center;
  margin-top: 0.5em;
  padding-top: 1em;

  h3 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 0.8rem;
    text-align: center;
    letter-spacing: 1px;
  }

  .input {
    width: 70%;
    height: 3vh;
    background-color: white;
    border: 1px solid #aab8c2;
    border-bottom: 2px solid darkgrey;
    text-align: center;
    font-size: 0.8rem;
  }
}
.submit-btn {
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 35% 30% 35%;
  padding: 1em 0 1em 0;

  button {
    width: 100%;
    height: 5vh;
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
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  letter-spacing: 5px;
}

@media only screen and (min-width: 600px) {

  .upload-form {

    h3 {
      font-size: 1rem;
    }

    .input {
      font-size: 1rem;
    }
  }
  .submit-btn {

    button {
      width: 90%;
      font-size: 1rem;
      height: 4vh;
    }
  }

  h3 {
    font-size: 1rem;
  }
}

@media only screen and (min-width: 1024px) {

  .upload-form {
    min-height: 15vh;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    row-gap: 0.5vh;
    justify-items: center;
    align-items: center;
    margin-top: 0.5em;
    // padding-top: 1em;

    h3 {
      font-size: 1rem;
      text-align: right;
    }

    .input {
      width: 50%;
      height: 2.5vh;
      font-size: 1rem;
    }
  }
  .submit-btn {
    padding: 1em 0 0 0;

    button {
      width: 90%;
      font-size: 1rem;
      height: 4vh;
    }
  }

  h3 {
    font-size: 1rem;
  }
}
</style>