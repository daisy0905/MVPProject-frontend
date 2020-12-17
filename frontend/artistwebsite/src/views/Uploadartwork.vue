<template>
    <div id="upload">
        <nav-admin v-if="display == true"></nav-admin>
        <nav-admin-ch v-if="display == false"></nav-admin-ch>
        <div id="en-ch">
            <div></div>
            <h4 id="english" @click="showEnglish">EN</h4>
            <h4 id="chinese" @click="showChinese">中文</h4>
            <div></div>
        </div>
        <upload-form v-if="display == true"></upload-form>
        <upload-form-ch v-if="display == false"></upload-form-ch>
    </div>
</template>

<script>
import NavAdmin from "../components/NavAdmin.vue"
import NavAdminCh from "../components/NavAdminCh.vue"
import UploadForm from '../components/UploadForm.vue'
import UploadFormCh from "../components/UploadFormCh"
    export default {
        components: {
            NavAdmin,
            NavAdminCh,
            UploadForm,
            UploadFormCh
            
        },
        data() {
            return {
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
        },
        mounted () {
            this.showChinese();
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
    min-height: 80vh;
    width: 100%;
    display: grid;
    align-items: center;
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
    }
}

@media only screen and (min-width: 600px) {
    #en-ch {

      h4 {
      font-size: 1.2rem;
    }
  }
}
</style>