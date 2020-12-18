<template>
  <div id="bio">
    <page-navigation v-if="display == true" id="nav-en"></page-navigation>
    <nav-ch v-if="display == false" id="nav-ch"></nav-ch>
    <nav-desktop id="nav-desktop"></nav-desktop>
    <div id="en-ch">
      <div></div>
      <h4 id="english" @click="showEnglish">EN</h4>
      <h4 id="chinese" @click="showChinese">中文</h4>
      <div></div>
    </div>
    <div id="content">
      <div id="unit-2">
        <img id="image" src="../assets/portrait.jpg" alt="" />
      </div>
      <div class="unit-3">
        <h2><span v-if="display">TONG KEMIN</span><span v-else>童柯敏</span></h2>
        <h3><span v-if="display">Professional Artist</span><span v-else>职业油画家</span></h3>
        <p>
          <span v-if="display">
          Mr.Tong, Kemin was born in Zhuzhou, Hunan in 1955, and is living in
          Changsha, China. He is the Member of Chinese Artists Association,
          member of the Presidium of China Financial Artists Association, Vice
          President and Secretary General of Hunan Oil Painting Landscape
          Research Association, Deputy Director of Oil Painting Art Committee of
          Hunan Artists Association, Deputy Secretary General of Hunan Oil
          Painting Society, Hunan Contemporary Deputy Dean of the Oil Painting
          Academy, Secretary and Vice Chairman of the Party Branch of the
          Changsha Artists Association, the first director of the Oil Painting
          Committee of the Changsha Artists Association, the Honorary Chairman
          of the Hunan Financial Artists Association, and a special painter of
          the Xiangtan Qi Baishi Memorial Hall.
          </span>
          <span v-else>
          1955年出生于湖南株洲，定居长沙。当过工人、军人，1988年转业到中国农业银行湖南省分行，2001年从农行长沙分行内退，2015年正式退休。中国美术家协会会员、中国金融美术家协会主席团成员，湖南省油画风景研究会副会长兼秘书长、湖南省美术家协会油画艺委会副主任、湖南省油画学会副秘书长、湖南省当代油画院副院长、长沙市美术家协会党支部书记兼副主席、首任长沙市美协油画艺委会主任、湖南省金融美协名誉主席、湘潭齐白石纪念馆特聘画家。
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PageNavigation from "../components/Nav.vue";
import NavCh from "../components/NavCh.vue";
import NavDesktop from '../components/NavDesktop.vue';
export default {
  components: {
    PageNavigation,
    NavCh,
    NavDesktop
  },
  data() {
    return {
      display: false,
    };
  },
  methods: {
    imgeMove: function () {
      document.getElementById("image").style.position = "absolute";
      document.getElementById("image").style.left = "5vw";
      document.getElementById("image").style.width = "150px";
    },
    showEnglish: function () {
      this.display = true;
      document.getElementById("english").style.color = "red";
      document.getElementById("chinese").style.color = "black";
    },
    showChinese: function () {
      this.display = false;
      document.getElementById("chinese").style.color = "red";
      document.getElementById("english").style.color = "black";
    },
  },
  mounted () {
    this.showChinese();
  },
};
</script>

<style lang="scss" scoped>
#bio {
  min-height: 100vh;
  width: 100%;
  display: grid;
  align-items: center;
}

#nav-en {
  height: 8vh;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
}

#nav-ch {
  height: 8vh;
  width: 100%;
}

#nav-desktop {
  display: none;
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

#content {
  min-height: 92vh;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  margin-top: 1em;

  #unit-2 {
    height: 40vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;

    img {
      width: 200px;
      box-shadow: 8px 8px 2px darkgrey;
    }
  }

  .unit-3 {
    min-height: 10vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    margin-top: 1em;

    h2 {
      font-weight: bold;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1rem;
    }

    h3 {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1rem;
      margin-top: 0.5em;
    }

    p {
      width: 70%;
      min-height: 50vh;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 0.8rem;
      text-align: justify;
      line-height: 1.5em;
      margin: 1em 0 1em 0;
    }
  }
}

@media only screen and (min-width: 600px) {
#bio {
  width: 100%;
  min-height: 30vh;
  display: grid;
  align-items: center;
}

#nav-desktop {
  display: none;
}

#en-ch {

  h4 {
    font-size: 1.2rem;
  }
}

#content {
  min-height: 30vh;
  margin-top: 1em;

  #unit-2 {
    height: 40vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    
    img {
      width: 300px;
    }
  }

  .unit-3 {

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    p {
      width: 60%;
      font-size: 1.2rem;
    }
  }
}
}

@media only screen and (min-width: 1024px) {
#home {
  min-height: 50vh;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
}

#nav-en {
  display: none;
}

#nav-ch {
  display: none;
}

#nav-desktop {
  width: 100%;
  height: 10vh;
  display: grid;
  justify-items: center;
  align-items: center;
}

#en-ch {
  height: 5vh;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 5% 10% 10% auto;
  background-color: white;
  margin-left: 1em;

  h4 {
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
  }
}

#content {
  min-height: 30vh;
  margin-top: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2em;

  #unit-2 {
    height: 100%;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: start;

    img {
      height: 90%;
      width: auto;
    }
  }

  .unit-3 {


    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    p {
      width: 70%;
      font-size: 1.2rem;
      margin-top: 2em;
    }
  }
}
}
</style>
