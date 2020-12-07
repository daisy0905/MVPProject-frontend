<template>
    <div id="bio">
        <navigation id="nav"></navigation>
        <div id="content">
            <div id="unit-1">
                <div></div>
                <h4>EN</h4>
                <h4>中文</h4>
                <div></div>
            </div>
            <div id="unit-2">
                <img id="image" src="../assets/portrait.jpg" alt="">
            </div>
            <div id="unit-3">
                <h2>KEMIN TONG</h2>
                <h3>Professional Artist</h3>
                <p></p>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from "../components/Nav.vue"
    export default {
        components: {
            Navigation,
        },
        methods: {
            imgeMove: function() {
                document.getElementById("image").style.position="absolute";
                document.getElementById("image").style.left="5vw";
                document.getElementById("image").style.width="150px";
                
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

#bio {
    height: 100vh;
    width: 100%;
    display: grid;
    align-items: center; 
}

#nav {
    height: 8vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
}

#content {
    min-height: 92vh;
    width: 100%;
    justify-items: center;
    align-items: center;

    #unit-1 {
        height: 10vh;
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

    #unit-2 {
        height: 40vh;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: center;

        img {
            width: 200px;
        }
    }

    #unit-3 {
        min-height: 10vh;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: center;

        h2 {
            font-weight: bold; 
            font-family: Arial, Helvetica, sans-serif;
            font-size: 1.2rem;
        }

        h3 {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 1rem;
        }
    }

  
}
</style>